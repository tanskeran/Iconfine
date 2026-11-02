# Iconfine

Iconfine inserts static icon-font markup into Obsidian notes through a searchable icon picker. Rendering is done by the `iconfine.css` CSS snippet, which keeps icons available in reading view, Live Preview, and Obsidian's native PDF export.

## ⚠️ IMPORTANT

If you installed Iconfine through Obsidian, go to the [release page](https://github.com/tanskeran/Iconfine/releases/latest) and download:

1. `iconfine.css` into `<vault>/.obsidian/snippets/`, then enable it.
2. `lucide.woff2`, `tabler-icons.woff2`, and `tabler-icons-filled.woff2` into `<vault>/.obsidian/plugins/iconfine/`, then reload the plugin.

## Initial feature set

- `iconfine.css` renderer snippet with Lucide, Tabler, and Tabler Icons Filled fonts
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

Download `iconfine-<version>.zip` from the latest [Release](../../releases) and unzip it into `<vault>/.obsidian/plugins/` — the zip contains a ready-made `iconfine/` folder. (Or copy the whole `dist/iconfine/` folder from the repo into `<vault>/.obsidian/plugins/` and rename it if needed.)

The plugin folder must contain:

- `main.js`
- `manifest.json`
- `styles.css`
- `iconfine.css`
- `lucide.woff2`
- `tabler-icons.woff2`
- `tabler-icons-filled.woff2`

## Build

```sh
npm install
npm run build
npm run typecheck
```

(On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`.)

The build reads icon-font sources from `vendor/` and writes the finished plugin folder to `dist/iconfine/`. After installing through Obsidian, download `iconfine.css` into the vault's `snippets/` folder and enable it. The three `.woff2` files belong in the plugin folder so Iconfine can load the screen fonts.
Enable Iconfine in Obsidian. If the current Obsidian version does not expose its snippet manager, enable `Iconfine` once under **Appearance → CSS snippets**. Then run `Iconfine: Insert icon` from the command palette or use the editor context menu.

## Repository layout

```
src/            plugin TypeScript source
vendor/         upstream icon fonts & CSS (build inputs, not for install)
dist/iconfine/  built plugin folder — this is what you install
```

## Licenses

Iconfine is licensed under Apache-2.0. Bundled icon fonts keep their own licenses: [Lucide](vendor/LICENSE-lucide) (ISC, with some icons MIT from Feather) and [Tabler Icons](vendor/tabler-icon/LICENSE) (MIT).
