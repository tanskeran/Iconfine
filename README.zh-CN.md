# Iconfine

[English](README.md) | 简体中文

Iconfine 是一个 Obsidian 插件：通过可搜索的图标选择器，在笔记里插入静态的图标字体标签。图标由 `iconfine.css` 这个 CSS 片段负责渲染，在阅读视图、实时预览和 Obsidian 自带的 PDF 导出中都能正常显示，并且会跟随文字颜色。

## ⚠️ 重要

Iconfine 依赖渲染片段。请从[最新 Release](https://github.com/tanskeran/Iconfine/releases/latest) 下载 `iconfine.css`，放到 `<库>/.obsidian/snippets/`，然后在 **设置 → 外观 → CSS 代码片段** 中启用它。片段里已经内嵌了全部图标字体，不需要再下载其他文件。

## 功能

- `iconfine.css` 渲染片段，包含 Lucide、Tabler、Tabler Icons Filled 三套图标
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

从最新的 [Release](../../releases) 下载 `iconfine-<版本号>.zip`，解压到 `<库>/.obsidian/plugins/`，压缩包里已经是现成的 `iconfine/` 文件夹。（也可以把仓库里的 `dist/iconfine/` 整个文件夹复制到 `<库>/.obsidian/plugins/`。）

插件文件夹里需要有：

- `main.js`
- `manifest.json`
- `styles.css`

然后把 `iconfine.css` 放到 `<库>/.obsidian/snippets/` 并启用。

## 使用

在 Obsidian 中启用 Iconfine，然后通过命令面板运行 `Iconfine: Insert icon`，或者使用编辑器右键菜单、左侧功能区图标打开图标选择器。

## 构建

```sh
npm install
npm run build
npm run typecheck
```

（Windows PowerShell 如果拦截了 `npm` 脚本，改用 `npm.cmd`。）

构建会读取 `vendor/` 中的图标字体源文件，把完整的插件文件夹输出到 `dist/iconfine/`，同时生成 `dist/iconfine/iconfine.css`。把这个文件复制到 `<库>/.obsidian/snippets/` 并启用即可。

## 仓库结构

```
src/            插件 TypeScript 源码
vendor/         上游图标字体和 CSS（构建输入，不用于安装）
dist/iconfine/  构建好的插件文件夹，安装用的就是它
```

## 许可证

Iconfine 采用 Apache-2.0 许可证。内置的图标字体保留各自的许可证：[Lucide](vendor/LICENSE-lucide)（ISC，部分图标来自 Feather，为 MIT）和 [Tabler Icons](vendor/tabler-icon/LICENSE)（MIT）。
