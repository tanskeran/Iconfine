import {
  App,
  Editor,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
} from "obsidian";
import { IconDefinition, LUCIDE_ICONS } from "./icons.generated";

interface IconfineSettings {
  defaultPack: "lucide";
  insertTrailingSpace: boolean;
}

const DEFAULT_SETTINGS: IconfineSettings = {
  defaultPack: "lucide",
  insertTrailingSpace: true,
};

const RESULT_LIMIT = 50;

function normalizeIconId(input: string): string {
  return input
    .trim()
    .replace(/^:+|:+$/g, "")
    .replace(/^icon-/i, "")
    .replace(/^if-icon-/i, "")
    .replace(/^Li(?=[A-Z])/, "")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

function searchIcons(query: string): IconDefinition[] {
  const normalized = normalizeIconId(query);

  if (!normalized) {
    return LUCIDE_ICONS.slice(0, RESULT_LIMIT);
  }

  const exact: IconDefinition[] = [];
  const prefix: IconDefinition[] = [];
  const partial: IconDefinition[] = [];

  for (const icon of LUCIDE_ICONS) {
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
  private results: IconDefinition[] = [];
  private selectedIndex = 0;
  private resultsEl: HTMLElement | null = null;
  private statusEl: HTMLElement | null = null;

  constructor(app: App, editor: Editor, settings: IconfineSettings) {
    super(app);
    this.editor = editor;
    this.settings = settings;
  }

  onOpen(): void {
    this.modalEl.addClass("iconfine-modal");
    this.setTitle("Insert icon");

    const toolbar = this.contentEl.createDiv({ cls: "iconfine-toolbar" });
    const packSelect = toolbar.createEl("select", {
      attr: { "aria-label": "Icon pack" },
    });
    packSelect.createEl("option", { text: "Lucide", value: "lucide" });
    packSelect.value = this.settings.defaultPack;
    packSelect.disabled = true;

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

    searchInput.addEventListener("input", () => {
      this.selectedIndex = 0;
      this.updateResults(searchInput.value);
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

    this.updateResults("");
    window.setTimeout(() => searchInput.focus(), 0);
  }

  onClose(): void {
    this.contentEl.empty();
  }

  private updateResults(query: string): void {
    if (!this.resultsEl || !this.statusEl) return;

    this.results = searchIcons(query);
    this.selectedIndex = Math.min(this.selectedIndex, Math.max(0, this.results.length - 1));
    this.resultsEl.empty();

    const normalized = normalizeIconId(query);
    this.statusEl.setText(
      this.results.length === 0
        ? `No Lucide icon matches “${normalized}”`
        : `${this.results.length}${this.results.length === RESULT_LIMIT ? "+" : ""} result${this.results.length === 1 ? "" : "s"}`,
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
        cls: `iconfine if-lucide if-icon-${icon.id}`,
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
    const html = `<i class="iconfine if-lucide if-icon-${icon.id}"></i>${suffix}`;
    this.editor.replaceSelection(html);
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

    new Setting(this.containerEl)
      .setName("Default icon pack")
      .setDesc("Iconfine 0.1 includes Lucide. Additional packs are planned for later versions.")
      .addDropdown((dropdown) => {
        dropdown.addOption("lucide", "Lucide");
        dropdown.setValue(this.plugin.settings.defaultPack);
        dropdown.setDisabled(true);
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

    new Setting(this.containerEl)
      .setName("Lucide icons")
      .setDesc(`${LUCIDE_ICONS.length} icon IDs are bundled from the supplied Lucide font CSS.`)
      .addButton((button) =>
        button.setButtonText("Loaded").setDisabled(true),
      );
  }
}

export default class IconfinePlugin extends Plugin {
  settings: IconfineSettings = DEFAULT_SETTINGS;

  async onload(): Promise<void> {
    await this.loadSettings();

    this.addCommand({
      id: "insert-icon",
      name: "Insert icon",
      editorCallback: (editor) => {
        new IconPickerModal(this.app, editor, this.settings).open();
      },
    });

    this.addSettingTab(new IconfineSettingTab(this.app, this));
  }

  private async loadSettings(): Promise<void> {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
    new Notice("Iconfine settings saved");
  }
}
