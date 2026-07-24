import {
  App,
  Editor,
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
} from "./icons.generated";

type IconPackId = "lucide" | "tabler";

interface IconfineSettings {
  defaultPack: IconPackId;
  insertTrailingSpace: boolean;
}

interface MutableFontFaceSet extends FontFaceSet {
  add(font: FontFace): MutableFontFaceSet;
  delete(font: FontFace): boolean;
}

interface IconPack {
  id: IconPackId;
  name: string;
  fontFamily: string;
  fontFile: string;
  icons: IconDefinition[];
}

const ICON_PACKS: Record<IconPackId, IconPack> = {
  lucide: {
    id: "lucide",
    name: "Lucide",
    fontFamily: "Iconfine Lucide",
    fontFile: "lucide.woff2",
    icons: LUCIDE_ICONS,
  },
  tabler: {
    id: "tabler",
    name: "Tabler Icons",
    fontFamily: "Iconfine Tabler",
    fontFile: "tabler-icons.woff2",
    icons: TABLER_ICONS,
  },
};

const DEFAULT_SETTINGS: IconfineSettings = {
  defaultPack: "lucide",
  insertTrailingSpace: true,
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

function searchIcons(pack: IconPack, query: string): IconDefinition[] {
  const normalized = normalizeIconId(query);

  if (!normalized) {
    return pack.icons.slice(0, RESULT_LIMIT);
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
  private readonly settings: IconfineSettings;
  private activePack: IconPack;
  private query = "";
  private results: IconDefinition[] = [];
  private selectedIndex = 0;
  private resultsEl: HTMLElement | null = null;
  private statusEl: HTMLElement | null = null;

  constructor(app: App, editor: Editor, settings: IconfineSettings) {
    super(app);
    this.editor = editor;
    this.settings = settings;
    this.activePack = ICON_PACKS[settings.defaultPack];
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

    const searchInput = toolbar.createEl("input", {
      type: "search",
      placeholder: "Search icon ID, for example book or LiBookOpen",
      attr: {
        "aria-label": "Search icons",
        autocomplete: "off",
        spellcheck: "false",
      },
    });

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

    this.results = searchIcons(this.activePack, this.query);
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
        cls: `iconfine if-${this.activePack.id} if-icon-${icon.id}`,
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
    const suffix = this.settings.insertTrailingSpace ? " " : "";
    const html = `<i class="iconfine if-${this.activePack.id} if-icon-${icon.id}"></i>${suffix}`;
    this.editor.replaceSelection(html);
    this.close();
    this.editor.focus();
  }
}

class IconPackListModal extends Modal {
  private readonly currentPack: IconPackId;
  private readonly onChoose: (packId: IconPackId) => Promise<void>;

  constructor(
    app: App,
    currentPack: IconPackId,
    onChoose: (packId: IconPackId) => Promise<void>,
  ) {
    super(app);
    this.currentPack = currentPack;
    this.onChoose = onChoose;
  }

  onOpen(): void {
    this.setTitle("Choose icon pack");

    for (const pack of Object.values(ICON_PACKS)) {
      const selected = pack.id === this.currentPack;
      new Setting(this.contentEl)
        .setName(pack.name)
        .setDesc(`${pack.icons.length} icons · ${pack.fontFile}`)
        .addButton((button) => {
          button
            .setButtonText(selected ? "Selected" : "Select")
            .setDisabled(selected)
            .onClick(async () => {
              await this.onChoose(pack.id);
              this.close();
            });
        });
    }
  }

  onClose(): void {
    this.contentEl.empty();
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
      .setDesc(currentPack.name)
      .addButton((button) => {
        button
          .setIcon("list")
          .setTooltip("Choose icon pack")
          .onClick(() => {
            new IconPackListModal(
              this.app,
              this.plugin.settings.defaultPack,
              async (packId) => {
                this.plugin.settings.defaultPack = packId;
                await this.plugin.saveSettings(false);
                this.display();
                new Notice(`Default icon pack: ${ICON_PACKS[packId].name}`);
              },
            ).open();
          });
      });

    new Setting(this.containerEl)
      .setName("Insert trailing space")
      .setDesc("Add one space after inserted icon HTML.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.insertTrailingSpace)
          .onChange(async (value) => {
            this.plugin.settings.insertTrailingSpace = value;
            await this.plugin.saveSettings();
          }),
      );

    for (const pack of Object.values(ICON_PACKS)) {
      new Setting(this.containerEl)
        .setName(pack.name)
        .setDesc(`${pack.icons.length} icon IDs · ${pack.fontFile}`)
        .addButton((button) => button.setButtonText("Loaded").setDisabled(true));
    }
  }
}

export default class IconfinePlugin extends Plugin {
  settings: IconfineSettings = DEFAULT_SETTINGS;
  private loadedFonts: FontFace[] = [];

  async onload(): Promise<void> {
    await this.loadSettings();
    await this.loadIconFonts();

    this.addCommand({
      id: "insert-icon",
      name: "Insert icon",
      editorCallback: (editor) => {
        new IconPickerModal(this.app, editor, this.settings).open();
      },
    });

    this.addSettingTab(new IconfineSettingTab(this.app, this));
  }

  onunload(): void {
    const fontSet = document.fonts as MutableFontFaceSet;
    for (const font of this.loadedFonts) {
      fontSet.delete(font);
    }
    this.loadedFonts = [];
  }

  private async loadIconFonts(): Promise<void> {
    if (!this.manifest.dir) {
      throw new Error("Iconfine plugin directory is unavailable");
    }

    for (const pack of Object.values(ICON_PACKS)) {
      const fontPath = normalizePath(`${this.manifest.dir}/${pack.fontFile}`);
      const fontData = await this.app.vault.adapter.readBinary(fontPath);
      const font = new FontFace(pack.fontFamily, fontData, {
        style: "normal",
        weight: "400",
      });

      await font.load();
      (document.fonts as MutableFontFaceSet).add(font);

      if (!document.fonts.check(`16px "${pack.fontFamily}"`)) {
        (document.fonts as MutableFontFaceSet).delete(font);
        throw new Error(`Iconfine could not register ${pack.name} from ${fontPath}`);
      }

      this.loadedFonts.push(font);
    }
  }

  private async loadSettings(): Promise<void> {
    const saved = await this.loadData() as Partial<IconfineSettings> | null;
    this.settings = Object.assign({}, DEFAULT_SETTINGS, saved);

    if (!ICON_PACKS[this.settings.defaultPack]) {
      this.settings.defaultPack = DEFAULT_SETTINGS.defaultPack;
    }
  }

  async saveSettings(showNotice = true): Promise<void> {
    await this.saveData(this.settings);
    if (showNotice) new Notice("Iconfine settings saved");
  }
}
