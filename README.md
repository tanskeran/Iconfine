# Iconfine

Iconfine searches and inserts static icon-font HTML into Obsidian notes. Icons inherit surrounding text color and remain regular font glyphs during PDF export.

## Initial feature set

- Bundled Lucide font and generated icon index
- Search and preview up to 50 matching icons
- Mouse and keyboard selection
- Static namespaced HTML output
- Configurable trailing space

Inserted markup:

```html
<i class="iconfine if-lucide if-icon-book"></i>
```

## Build

```powershell
npm.cmd install
npm.cmd run build
```

Copy these files into `<vault>/.obsidian/plugins/iconfine/`:

- `main.js`
- `manifest.json`
- `styles.css`
- `lucide.woff2`

Enable Iconfine in Obsidian, then run `Iconfine: Insert icon` from the command palette.
