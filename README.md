# Iconfine

English | [简体中文](README.zh-CN.md)

Iconfine inserts static icon-font markup into Obsidian notes through a searchable icon picker. The icon fonts are embedded in the plugin's `styles.css`, so icons inherit text color and work in reading view, Live Preview, and Obsidian's native PDF export. No extra files or CSS snippets are needed.

> **Upgrading from 1.0.0?** The `iconfine.css` snippet and the `.woff2` files are no longer needed. You can disable and delete `<vault>/.obsidian/snippets/iconfine.css` and remove the `.woff2` files from the plugin folder.

## Initial feature set

- Lucide, Tabler, and Tabler Icons Filled icon fonts, bundled in `styles.css`
- Choose the default icon pack from settings
- Switch icon packs directly in the icon picker
- Search and preview up to 50 matching icons
- Mouse and keyboard selection
- Static namespaced HTML output
- Configurable space placement
- Editor context-menu shortcut

Inserted markup:

```html
<i class="iconfine lucide-font icon-book"></i>
<i class="iconfine tabler-font ti-book"></i>
<i class="iconfine tabler-filled-font ti-filled-star"></i>
```

The older `if-lucide if-icon-*` / `if-tabler if-icon-*` markup is still rendered for backward compatibility.

## Install

Install Iconfine from Obsidian's community plugins, or install it manually: download `main.js`, `manifest.json`, and `styles.css` from the latest [Release](../../releases) into `<vault>/.obsidian/plugins/iconfine/` (or copy the repo's `dist/iconfine/` folder into `<vault>/.obsidian/plugins/`).

## Usage

Enable Iconfine in Obsidian, then run `Iconfine: Insert icon` from the command palette, use the editor context menu, or click the ribbon icon.

## Build

```sh
npm install
npm run build
npm run typecheck
```

(On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`.)

The build reads icon-font sources from `vendor/` and writes the finished plugin folder to `dist/iconfine/`.

## Repository layout

```
src/            plugin TypeScript source
vendor/         upstream icon fonts & CSS (build inputs, not for install)
dist/iconfine/  built plugin folder — this is what you install
```

## Licenses

Iconfine is licensed under Apache-2.0. Bundled icon fonts keep their own licenses: [Lucide](vendor/LICENSE-lucide) (ISC, with some icons MIT from Feather) and [Tabler Icons](vendor/tabler-icon/LICENSE) (MIT).
