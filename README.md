# Iconfine

Iconfine manages an Obsidian CSS snippet for static icon-font rendering, and provides searchable insertion shortcuts. The snippet keeps icons available in reading view, Live Preview, and Obsidian's native PDF export.

## Features

- Managed `iconfine` CSS snippet with Lucide, Tabler, and Tabler Icons Filled fonts
- Choose the default icon pack from settings
- Switch icon packs directly in the icon picker
- Search and preview up to 50 matching icons
- Mouse and keyboard selection
- Static namespaced HTML output
- Configurable space placement
- Editor context-menu shortcut and mobile toolbar command

Inserted markup:

```html
<i class="iconfine if-lucide if-icon-book"></i>
<i class="iconfine if-tabler if-icon-book"></i>
```

## Install

Copy these files into `<vault>/.obsidian/plugins/iconfine/`:

- `main.js`
- `manifest.json`
- `styles.css`

That is the whole plugin. The icon fonts are embedded in `main.js`, so no font files and no separate stylesheet have to be installed.

Enable Iconfine in Obsidian. On load it writes and enables one managed resource:

- `<vault>/.obsidian/snippets/iconfine.css`

If the current Obsidian version does not expose its snippet manager, enable `Iconfine` once under **Appearance → CSS snippets**. Then run `Iconfine: Insert icon` from the command palette or use the editor context menu.

## Build

```powershell
npm.cmd install
npm.cmd run build
```

`node build.mjs` reads the font sources, then writes:

- `src/icons.generated.ts` — icon id and codepoint tables
- `src/embedded.generated.ts` — fonts as base64 data URLs, plus the snippet stylesheet
- `styles.css` — icon picker and settings styles
- `main.js` — the bundled plugin

`npm.cmd run dev` rebuilds on change with an inline source map.

The fonts are embedded once and reused: the plugin registers them with the FontFace API for on-screen rendering, and rewrites the `url("iconfine-*.woff2")` placeholders inside the snippet to data URLs so print and PDF export keep working without extra files.

## License

Iconfine is licensed under Apache-2.0. Icon fonts keep their own licenses: Tabler Icons (MIT, see [`tabler-icon/LICENSE`](tabler-icon/LICENSE)) and Lucide (ISC).
