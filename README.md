# Iconfine

Iconfine manages an Obsidian CSS snippet for static icon-font rendering, and provides searchable insertion shortcuts. The snippet keeps icons available in reading view, Live Preview, and Obsidian's native PDF export.

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

## Build

```powershell
npm.cmd install
npm.cmd run build
```

Copy these files into `<vault>/.obsidian/plugins/iconfine/`:

- `main.js`
- `manifest.json`
- `styles.css`
- `iconfine.css`
- `lucide.woff2`
- `tabler-icons.woff2`
- `tabler-icons-filled.woff2`

Enable Iconfine in Obsidian. It installs and enables these managed resources:

- `<vault>/.obsidian/snippets/iconfine.css`
- `<vault>/.obsidian/snippets/iconfine-lucide.woff2`
- `<vault>/.obsidian/snippets/iconfine-tabler.woff2`
- `<vault>/.obsidian/snippets/iconfine-tabler-filled.woff2`

If the current Obsidian version does not expose its snippet manager, enable `Iconfine` once under **Appearance → CSS snippets**. Then run `Iconfine: Insert icon` from the command palette or use the editor context menu.
