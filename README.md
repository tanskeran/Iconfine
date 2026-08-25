# Iconfine

Iconfine manages an Obsidian CSS snippet for static icon-font rendering, and provides searchable insertion shortcuts. The snippet keeps icons available in reading view, Live Preview, and Obsidian's native PDF export.

## ⚠️ IMPORTANT
- If you have installed through obsidian, then go to the [release page](https://github.com/tanskeran/Iconfine/releases/tag/1.0.0) and download:
1. `iconfine.css` into <vault>/.obsidian/snippets/ and enable it.
2. Three `woff2` into <vault>/.obsidian/plugins/ and reload the plugin.

## Initial feature set

- Managed `iconfine` CSS snippet with Lucide, Tabler, and Tabler Icons Filled fonts
- Choose the default icon pack from settings
- Switch icon packs directly in the icon picker
- Search and preview up to 50 matching icons
- Mouse and keyboard selection
- Static namespaced HTML output
- Configurable space placement
- Editor context-menu shortcut

Inserted markup:

```html
<i class="iconfine if-lucide if-icon-book"></i>
<i class="iconfine if-tabler if-icon-book"></i>
```

## Install

Download `iconfine-1.0.0.zip` from the latest [Release](../../releases) and unzip it into `<vault>/.obsidian/plugins/` — the zip contains a ready-made `iconfine/` folder. (Or copy the whole `dist/iconfine/` folder from the repo into `<vault>/.obsidian/plugins/` and rename it if needed.)

The plugin folder must contain:

- `main.js`
- `manifest.json`
- `styles.css`
- `iconfine.css`
- `lucide.woff2`
- `tabler-icons.woff2`
- `tabler-icons-filled.woff2`

## Build

```powershell
npm.cmd install
npm.cmd run build
```

The build reads icon-font sources from `vendor/` and writes the finished plugin folder to `dist/iconfine/`. Iconfine installs and enables these managed resources:

- `<vault>/.obsidian/snippets/iconfine.css`
- `<vault>/.obsidian/snippets/iconfine-lucide.woff2`
- `<vault>/.obsidian/snippets/iconfine-tabler.woff2`
- `<vault>/.obsidian/snippets/iconfine-tabler-filled.woff2`

Enable Iconfine in Obsidian. If the current Obsidian version does not expose its snippet manager, enable `Iconfine` once under **Appearance → CSS snippets**. Then run `Iconfine: Insert icon` from the command palette or use the editor context menu.

## Repository layout

```
src/            plugin TypeScript source
vendor/         upstream icon fonts & CSS (build inputs, not for install)
dist/iconfine/  built plugin folder — this is what you install
```
