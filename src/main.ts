import {
  App,
  Editor,
  MarkdownView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  SettingDefinitionItem,
} from "obsidian";
import {
  IconDefinition,
  LUCIDE_ICONS,
  TABLER_ICONS,
  TABLER_FILLED_ICONS,
} from "./icons.generated";

type IconPackId = "lucide" | "tabler" | "tabler-filled";
type SpacePlacement = "before" | "after" | "both";

interface IconfineSettings {
  defaultPack: IconPackId;
  spacePlacement: SpacePlacement;
  recentIcons: Record<IconPackId, string[]>;
}

interface LegacyIconfineSettings extends Partial<IconfineSettings> {
  insertTrailingSpace?: boolean;
}

interface IconPack {
  id: IconPackId;
  name: string;
  icons: IconDefinition[];
}

const ICON_PACKS: Record<IconPackId, IconPack> = {
  lucide: {
    id: "lucide",
    name: "Lucide",
    icons: LUCIDE_ICONS,
  },
  tabler: {
    id: "tabler",
    name: "Tabler Icons",
    icons: TABLER_ICONS,
  },
  "tabler-filled": {
    id: "tabler-filled",
    name: "Tabler Icons Filled",
    icons: TABLER_FILLED_ICONS,
  },
};

const DEFAULT_SETTINGS: IconfineSettings = {
  defaultPack: "lucide",
  spacePlacement: "after",
  recentIcons: {
    lucide: [],
    tabler: [],
    "tabler-filled": [],
  },
};

const RESULT_LIMIT = 50;

function normalizeIconId(input: string): string {
  return input
    .trim()
    .replace(/^:+|:+$/g, "")
    .replace(/^if-icon-/i, "")
    .replace(/^icon-/i, "")
    .replace(/^ti-filled-/i, "")
    .replace(/^ti-/i, "")
    .replace(/^Li(?=[A-Z])/, "")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

function getIconClasses(packId: IconPackId, iconId: string): string {
  if (packId === "lucide") return `iconfine lucide-font icon-${iconId}`;
  if (packId === "tabler") return `iconfine tabler-font ti-${iconId}`;
  return `iconfine tabler-filled-font ti-filled-${iconId}`;
}

function searchIcons(pack: IconPack, query: string, recentIds: string[] = []): IconDefinition[] {
  const normalized = normalizeIconId(query);

  if (!normalized) {
    const iconsById = new Map(pack.icons.map((icon) => [icon.id, icon]));
    const recent = recentIds
      .map((id) => iconsById.get(id))
      .filter((icon): icon is IconDefinition => Boolean(icon));
    const recentSet = new Set(recent.map((icon) => icon.id));
    const remaining = pack.icons.filter((icon) => !recentSet.has(icon.id));
    return [...recent, ...remaining].slice(0, RESULT_LIMIT);
  }

  const exact: IconDefinition[] = [];
  const prefix: IconDefinition[] = [];
  const partial: IconDefinition[] = [];

  for (const icon of pack.icons) {
    if (icon.id === normalized) {
      exact.push(icon);
    } else if (icon.id.startsWith(normalized)) {
      prefix.push(icon);
    } else if (icon.id.includes(normalized)) {
      partial.push(icon);
    }
  }

  return [...exact, ...prefix, ...partial].slice(0, RESULT_LIMIT);
}

class IconPickerModal extends Modal {
  private readonly editor: Editor;
  private readonly plugin: IconfinePlugin;
  private readonly settings: IconfineSettings;
  private activePack: IconPack;
  private query = "";
  private results: IconDefinition[] = [];
  private selectedIndex = 0;
  private resultsEl: HTMLElement | null = null;
  private statusEl: HTMLElement | null = null;

  constructor(app: App, editor: Editor, plugin: IconfinePlugin) {
    super(app);
    this.editor = editor;
    this.plugin = plugin;
    this.settings = plugin.settings;
    this.activePack = ICON_PACKS[this.settings.defaultPack];
  }

  onOpen(): void {
    this.modalEl.addClass("iconfine-modal");
    this.setTitle("Insert icon");

    const toolbar = this.contentEl.createDiv({ cls: "iconfine-toolbar" });
    const packSelect = toolbar.createEl("select", {
      attr: { "aria-label": "Icon pack" },
    });

    for (const pack of Object.values(ICON_PACKS)) {
      packSelect.createEl("option", { text: pack.name, value: pack.id });
    }
    packSelect.value = this.activePack.id;

    const searchWrap = toolbar.createDiv({ cls: "iconfine-search-wrap" });
    const searchInput = searchWrap.createEl("input", {
      type: "search",
      attr: {
        "aria-label": "Search icons",
        autocomplete: "off",
        spellcheck: "false",
      },
    });
    const searchExample = searchWrap.createDiv({ cls: "iconfine-search-example" });
    searchExample.createSpan({ text: "Search icon ID, for example book for " });
    searchExample.createEl("i", {
      cls: "iconfine lucide-font icon-book",
      attr: { "aria-label": "book" },
    });

    const updateSearchExample = () => {
      searchExample.toggleClass("is-hidden", searchInput.value.length > 0);
    };
    searchInput.addEventListener("input", updateSearchExample);
    updateSearchExample();

    this.statusEl = this.contentEl.createDiv({ cls: "iconfine-status" });
    this.resultsEl = this.contentEl.createDiv({ cls: "iconfine-results" });

    packSelect.addEventListener("change", () => {
      const packId = packSelect.value as IconPackId;
      this.activePack = ICON_PACKS[packId] ?? ICON_PACKS.lucide;
      this.selectedIndex = 0;
      this.updateResults();
      searchInput.focus();
    });

    searchInput.addEventListener("input", () => {
      this.query = searchInput.value;
      this.selectedIndex = 0;
      this.updateResults();
    });

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.moveSelection(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        this.moveSelection(-1);
      } else if (event.key === "Enter") {
        event.preventDefault();
        const icon = this.results[this.selectedIndex];
        if (icon) this.insertIcon(icon);
      }
    });

    this.updateResults();
    window.setTimeout(() => searchInput.focus(), 0);
  }

  onClose(): void {
    this.contentEl.empty();
  }

  private updateResults(): void {
    if (!this.resultsEl || !this.statusEl) return;

    this.results = searchIcons(
      this.activePack,
      this.query,
      this.settings.recentIcons[this.activePack.id],
    );
    this.selectedIndex = Math.min(this.selectedIndex, Math.max(0, this.results.length - 1));
    this.resultsEl.empty();

    const normalized = normalizeIconId(this.query);
    this.statusEl.setText(
      this.results.length === 0
        ? `No ${this.activePack.name} icon matches “${normalized}”`
        : `${this.activePack.name}: ${this.results.length}${this.results.length === RESULT_LIMIT ? "+" : ""} result${this.results.length === 1 ? "" : "s"}`,
    );

    if (this.results.length === 0) {
      this.resultsEl.createDiv({ cls: "iconfine-empty", text: "No matching icons" });
      return;
    }

    this.results.forEach((icon, index) => {
      const item = this.resultsEl?.createEl("button", {
        cls: `iconfine-result${index === this.selectedIndex ? " is-selected" : ""}`,
        attr: {
          type: "button",
          title: icon.id,
        },
      });
      if (!item) return;

      item.createEl("i", {
        cls: getIconClasses(this.activePack.id, icon.id),
      });
      item.createDiv({ cls: "iconfine-result-name", text: icon.id });
      item.addEventListener("mouseenter", () => {
        this.selectedIndex = index;
        this.refreshSelection();
      });
      item.addEventListener("click", () => this.insertIcon(icon));
    });
  }

  private moveSelection(delta: number): void {
    if (this.results.length === 0) return;

    this.selectedIndex = (this.selectedIndex + delta + this.results.length) % this.results.length;
    this.refreshSelection();
  }

  private refreshSelection(): void {
    if (!this.resultsEl) return;

    const items = Array.from(this.resultsEl.querySelectorAll<HTMLElement>(".iconfine-result"));
    items.forEach((item, index) => item.toggleClass("is-selected", index === this.selectedIndex));
    items[this.selectedIndex]?.scrollIntoView({ block: "nearest" });
  }

  private insertIcon(icon: IconDefinition): void {
    const prefix = this.settings.spacePlacement === "before" || this.settings.spacePlacement === "both" ? " " : "";
    const suffix = this.settings.spacePlacement === "after" || this.settings.spacePlacement === "both" ? " " : "";
    const html = `${prefix}<i class="${getIconClasses(this.activePack.id, icon.id)}"></i>${suffix}`;
    this.editor.replaceSelection(html);
    void this.plugin.recordRecentIcon(this.activePack.id, icon.id);
    this.close();
    this.editor.focus();
  }
}

const SPACE_PLACEMENT_OPTIONS: Record<SpacePlacement, string> = {
  before: "Before icon",
  after: "After icon",
  both: "Before and after",
};

function getPackOptions(): Record<IconPackId, string> {
  const options = {} as Record<IconPackId, string>;
  for (const pack of Object.values(ICON_PACKS)) {
    options[pack.id] = pack.name;
  }
  return options;
}

const SPACE_PLACEMENT_DESC = "Choose where one space is inserted around icon HTML.";

class IconfineSettingTab extends PluginSettingTab {
  private readonly plugin: IconfinePlugin;

  constructor(app: App, plugin: IconfinePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  /** Declarative settings (Obsidian 1.13.0+); also makes them searchable. */
  getSettingDefinitions(): SettingDefinitionItem[] {
    return [
      {
        name: "Default icon pack",
        desc: `${LUCIDE_ICONS.length} Lucide · ${TABLER_ICONS.length} Tabler · ${TABLER_FILLED_ICONS.length} Tabler Filled icons`,
        aliases: ["icon pack", "lucide", "tabler"],
        control: {
          type: "dropdown",
          key: "defaultPack",
          options: getPackOptions(),
          defaultValue: DEFAULT_SETTINGS.defaultPack,
        },
      },
      {
        name: "Insert space in...",
        desc: SPACE_PLACEMENT_DESC,
        aliases: ["space", "spacing"],
        control: {
          type: "dropdown",
          key: "spacePlacement",
          options: SPACE_PLACEMENT_OPTIONS,
          defaultValue: DEFAULT_SETTINGS.spacePlacement,
        },
      },
    ];
  }

  getControlValue(key: string): unknown {
    if (key === "defaultPack") return this.plugin.settings.defaultPack;
    if (key === "spacePlacement") return this.plugin.settings.spacePlacement;
    return undefined;
  }

  async setControlValue(key: string, value: unknown): Promise<void> {
    if (key === "defaultPack" && typeof value === "string" && value in ICON_PACKS) {
      this.plugin.settings.defaultPack = value as IconPackId;
    } else if (key === "spacePlacement" && typeof value === "string" && value in SPACE_PLACEMENT_OPTIONS) {
      this.plugin.settings.spacePlacement = value as SpacePlacement;
    } else {
      return;
    }
    await this.plugin.saveSettings(false);
  }

  /** Fallback for Obsidian versions older than 1.13.0. */
  display(): void {
    this.containerEl.empty();
    const currentPack = ICON_PACKS[this.plugin.settings.defaultPack];

    new Setting(this.containerEl)
      .setName("Default icon pack")
      .setDesc(`${currentPack.icons.length} icons available`)
      .addDropdown((dropdown) => {
        dropdown
          .addOptions(getPackOptions())
          .setValue(this.plugin.settings.defaultPack)
          .onChange(async (value) => {
            await this.setControlValue("defaultPack", value);
            this.display();
          });
      });

    new Setting(this.containerEl)
      .setName("Insert space in...")
      .setDesc(SPACE_PLACEMENT_DESC)
      .addDropdown((dropdown) => {
        dropdown
          .addOptions(SPACE_PLACEMENT_OPTIONS)
          .setValue(this.plugin.settings.spacePlacement)
          .onChange(async (value) => {
            await this.setControlValue("spacePlacement", value);
          });
      });
  }
}

export default class IconfinePlugin extends Plugin {
  settings: IconfineSettings = DEFAULT_SETTINGS;

  async onload(): Promise<void> {
    await this.loadSettings();
    this.addCommand({
      id: "insert-icon",
      name: "Insert icon",
      icon: "shapes",
      editorCallback: (editor) => {
        this.openIconPicker(editor);
      },
    });

    this.addCommand({
      id: "open-icon-picker-mobile",
      name: "Open icon picker",
      icon: "shapes",
      mobileOnly: true,
      callback: () => this.openPickerForActiveNote(),
    });

    this.addRibbonIcon("shapes", "Iconfine", () => {
      this.openPickerForActiveNote();
    });

    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem((item) => {
          item
            .setTitle("Iconfine")
            .setIcon("shapes")
            .onClick(() => this.openIconPicker(editor));
        });
      }),
    );

    this.addSettingTab(new IconfineSettingTab(this.app, this));
  }

  private openIconPicker(editor: Editor): void {
    new IconPickerModal(this.app, editor, this).open();
  }

  private openPickerForActiveNote(): void {
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!view) {
      new Notice("Open a Markdown note to insert an icon");
      return;
    }
    this.openIconPicker(view.editor);
  }

  async recordRecentIcon(packId: IconPackId, iconId: string): Promise<void> {
    const current = this.settings.recentIcons[packId] ?? [];
    this.settings.recentIcons[packId] = [
      iconId,
      ...current.filter((id) => id !== iconId),
    ].slice(0, RESULT_LIMIT);
    await this.saveSettings(false);
  }

  private async loadSettings(): Promise<void> {
    const saved = await this.loadData() as LegacyIconfineSettings | null;
    const defaultPack = saved?.defaultPack && ICON_PACKS[saved.defaultPack]
      ? saved.defaultPack
      : DEFAULT_SETTINGS.defaultPack;
    const spacePlacement = saved?.spacePlacement && ["before", "after", "both"].includes(saved.spacePlacement)
      ? saved.spacePlacement
      : DEFAULT_SETTINGS.spacePlacement;

    const recentIcons = {
      lucide: Array.isArray(saved?.recentIcons?.lucide) ? saved.recentIcons.lucide : [],
      tabler: Array.isArray(saved?.recentIcons?.tabler) ? saved.recentIcons.tabler : [],
      "tabler-filled": Array.isArray(saved?.recentIcons?.["tabler-filled"])
        ? saved.recentIcons["tabler-filled"]
        : [],
    };
    this.settings = { defaultPack, spacePlacement, recentIcons };
  }

  async saveSettings(showNotice = true): Promise<void> {
    await this.saveData(this.settings);
    if (showNotice) new Notice("Iconfine settings saved");
  }
}
