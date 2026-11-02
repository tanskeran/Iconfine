# Iconfine

[English](README.md) | 简体中文

Iconfine 是一个 Obsidian 插件：通过可搜索的图标选择器，在笔记里插入静态的图标字体标签。图标字体已内嵌在插件的 `styles.css` 中，在阅读视图、实时预览和 Obsidian 自带的 PDF 导出中都能正常显示，并且会跟随文字颜色。不需要额外下载文件或启用 CSS 片段。

> **从 1.0.0 升级？** 不再需要 `iconfine.css` 片段和 `.woff2` 字体文件。可以关闭并删除 `<库>/.obsidian/snippets/iconfine.css`，并删掉插件文件夹里的 `.woff2` 文件。

## 功能

- 内置 Lucide、Tabler、Tabler Icons Filled 三套图标字体（打包在 `styles.css` 中）
- 在设置中选择默认图标包
- 在图标选择器中直接切换图标包
- 搜索并预览最多 50 个匹配图标
- 支持鼠标和键盘选择
- 输出带命名空间的静态 HTML
- 可设置插入时在图标前/后加空格
- 编辑器右键菜单快捷入口

插入的代码示例：

```html
<i class="iconfine lucide-font icon-book"></i>
<i class="iconfine tabler-font ti-book"></i>
<i class="iconfine tabler-filled-font ti-filled-star"></i>
```

旧版的 `if-lucide if-icon-*` / `if-tabler if-icon-*` 写法仍然可以正常显示。

## 安装

在 Obsidian 的第三方插件市场中安装 Iconfine；或者手动安装：从最新的 [Release](../../releases) 下载 `main.js`、`manifest.json`、`styles.css`，放到 `<库>/.obsidian/plugins/iconfine/`（也可以直接把仓库里的 `dist/iconfine/` 文件夹复制到 `<库>/.obsidian/plugins/`）。

## 使用

在 Obsidian 中启用 Iconfine，然后通过命令面板运行 `Iconfine: Insert icon`，或者使用编辑器右键菜单、左侧功能区图标打开图标选择器。

## 构建

```sh
npm install
npm run build
npm run typecheck
```

（Windows PowerShell 如果拦截了 `npm` 脚本，改用 `npm.cmd`。）

构建会读取 `vendor/` 中的图标字体源文件，把完整的插件文件夹输出到 `dist/iconfine/`。

## 仓库结构

```
src/            插件 TypeScript 源码
vendor/         上游图标字体和 CSS（构建输入，不用于安装）
dist/iconfine/  构建好的插件文件夹，安装用的就是它
```

## 许可证

Iconfine 采用 Apache-2.0 许可证。内置的图标字体保留各自的许可证：[Lucide](vendor/LICENSE-lucide)（ISC，部分图标来自 Feather，为 MIT）和 [Tabler Icons](vendor/tabler-icon/LICENSE)（MIT）。
