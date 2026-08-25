import {
  App,
  Editor,
  MarkdownView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  normalizePath,
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

interface MutableFontFaceSet extends FontFaceSet {
  add(font: FontFace): MutableFontFaceSet;
  delete(font: FontFace): boolean;
}

interface CssSnippetManager {
  enabledSnippets?: Set<string>;
  requestLoadSnippets?: () => Promise<void> | void;
  setCssEnabledStatus?: (snippet: string, enabled: boolean) => Promise<void> | void;
}

interface AppWithCssSnippets extends App {
  customCss?: CssSnippetManager;
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

class IconfineSettingTab extends PluginSettingTab {
  private readonly plugin: IconfinePlugin;

  constructor(app: App, plugin: IconfinePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    this.containerEl.empty();
    const currentPack = ICON_PACKS[this.plugin.settings.defaultPack];

    new Setting(this.containerEl)
      .setName("Default icon pack")
      .setDesc(`${currentPack.icons.length} icons available`)
      .addDropdown((dropdown) => {
        for (const pack of Object.values(ICON_PACKS)) {
          dropdown.addOption(pack.id, pack.name);
        }
        dropdown
          .setValue(this.plugin.settings.defaultPack)
          .onChange(async (value) => {
            const packId = value as IconPackId;
            this.plugin.settings.defaultPack = packId;
            await this.plugin.saveSettings(false);
            this.display();
          });
      });

    new Setting(this.containerEl)
      .setName("Insert space in...")
      .setDesc("Choose where one space is inserted around icon HTML.")
      .addDropdown((dropdown) => {
        dropdown
          .addOption("before", "Before icon")
          .addOption("after", "After icon")
          .addOption("both", "Before and after")
          .setValue(this.plugin.settings.spacePlacement)
          .onChange(async (value) => {
            this.plugin.settings.spacePlacement = value as SpacePlacement;
            await this.plugin.saveSettings(false);
          });
      });

    new Setting(this.containerEl)
      .setName("Renderer snippet")
      .setDesc(`${this.plugin.isRendererEnabled() ? "Enabled" : "Needs enabling"} · ${LUCIDE_ICONS.length} Lucide · ${TABLER_ICONS.length} Tabler · ${TABLER_FILLED_ICONS.length} Filled`)
      .addButton((button) => {
        button.setButtonText("Reload").onClick(async () => {
          button.setDisabled(true).setButtonText("Reloading...");
          try {
            const enabled = await this.plugin.installRendererSnippet();
            new Notice(enabled
              ? "Iconfine renderer reloaded"
              : "Enable Iconfine in Appearance → CSS snippets");
            this.display();
          } catch (error) {
            console.error("Iconfine failed to reload its renderer snippet", error);
            new Notice("Failed to reload Iconfine renderer");
          } finally {
            button.setDisabled(false).setButtonText("Reload");
          }
        });
      });
  }
}

export default class IconfinePlugin extends Plugin {
  settings: IconfineSettings = DEFAULT_SETTINGS;
  private loadedFonts = new Map<IconPackId, FontFace>();

  async onload(): Promise<void> {
    await this.loadSettings();
    try {
      const enabled = await this.installRendererSnippet();
      if (!enabled) {
        new Notice("Enable Iconfine in Appearance → CSS snippets");
      }
    } catch (error) {
      console.error("Iconfine failed to install its renderer snippet", error);
      new Notice("Iconfine could not install its renderer snippet");
    }

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

  onunload(): void {
    const fontSet = document.fonts as MutableFontFaceSet;
    for (const font of this.loadedFonts.values()) {
      fontSet.delete(font);
    }
    this.loadedFonts.clear();
  }

  private async reloadScreenFonts(): Promise<void> {
    if (!this.manifest.dir) {
      throw new Error("Iconfine plugin directory is unavailable");
    }

    const sources: Record<IconPackId, { family: string; file: string }> = {
      lucide: { family: "Iconfine Lucide", file: "lucide.woff2" },
      tabler: { family: "Iconfine Tabler", file: "tabler-icons.woff2" },
      "tabler-filled": { family: "Iconfine Tabler Filled", file: "tabler-icons-filled.woff2" },
    };
    const fontSet = document.fonts as MutableFontFaceSet;

    for (const packId of Object.keys(sources) as IconPackId[]) {
      const source = sources[packId];
      const fontPath = normalizePath(`${this.manifest.dir}/${source.file}`);
      const fontData = await this.app.vault.adapter.readBinary(fontPath);
      const newFont = new FontFace(source.family, fontData, {
        style: "normal",
        weight: "400",
      });
      await newFont.load();
      if (newFont.status !== "loaded") {
        throw new Error(`Iconfine could not load ${source.family}`);
      }
      fontSet.add(newFont);

      const previous = this.loadedFonts.get(packId);
      if (previous) fontSet.delete(previous);
      this.loadedFonts.set(packId, newFont);
    }
  }

  isRendererEnabled(): boolean {
    return (this.app as AppWithCssSnippets).customCss?.enabledSnippets?.has("iconfine") ?? false;
  }

  async installRendererSnippet(): Promise<boolean> {
    try {
      await this.reloadScreenFonts();
    } catch (error) {
      console.error("Iconfine failed to load screen fonts", error);
      new Notice("Iconfine could not load screen fonts");
    }

    const adapter = this.app.vault.adapter;
    const snippetPath = normalizePath(`${this.app.vault.configDir}/snippets/iconfine.css`);
    if (!await adapter.exists(snippetPath)) {
      return false;
    }

    const customCss = (this.app as AppWithCssSnippets).customCss;
    await customCss?.requestLoadSnippets?.();
    return this.isRendererEnabled();
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
