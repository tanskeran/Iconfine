import esbuild from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import builtins from "builtin-modules";

const watch = process.argv.includes("--watch");
const sourceCss = await readFile("lucide.css", "utf8");
const fontBuffer = await readFile("lucide.woff2");
const fontDataUrl = `data:font/woff2;base64,${fontBuffer.toString("base64")}`;
const mappings = new Map();
const mappingPattern = /\.icon-([a-z0-9-]+)::before\s*\{\s*content:\s*"\\([a-f0-9]+)";\s*\}/gi;

for (const match of sourceCss.matchAll(mappingPattern)) {
  mappings.set(match[1], match[2]);
}

if (mappings.size === 0) {
  throw new Error("No Lucide icon mappings were found in lucide.css");
}

const icons = [...mappings.entries()]
  .map(([id, codepoint]) => ({ id, codepoint }))
  .sort((a, b) => a.id.localeCompare(b.id));

const generatedTs = `export interface IconDefinition {\n  id: string;\n  codepoint: string;\n}\n\nexport const LUCIDE_ICONS: IconDefinition[] = ${JSON.stringify(icons, null, 2)};\n`;
await writeFile("src/icons.generated.ts", generatedTs, "utf8");

const baseCssTemplate = await readFile("src/styles-base.css", "utf8");
const baseCss = baseCssTemplate.replace("__ICONFINE_FONT_DATA__", fontDataUrl);
if (baseCss === baseCssTemplate) {
  throw new Error("Font data placeholder was not found in styles-base.css");
}
const generatedCss = icons
  .map(({ id, codepoint }) => `.iconfine.if-lucide.if-icon-${id}::before { content: "\\${codepoint}"; }`)
  .join("\n");
await writeFile("styles.css", `${baseCss.trim()}\n\n${generatedCss}\n`, "utf8");

const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: ["obsidian", "electron", "@codemirror/autocomplete", "@codemirror/collab", "@codemirror/commands", "@codemirror/language", "@codemirror/lint", "@codemirror/search", "@codemirror/state", "@codemirror/view", "@lezer/common", "@lezer/highlight", "@lezer/lr", ...builtins],
  format: "cjs",
  target: "es2018",
  logLevel: "info",
  sourcemap: "inline",
  treeShaking: true,
  outfile: "main.js"
});

if (watch) {
  await context.watch();
  console.log(`Iconfine: watching ${icons.length} Lucide icons`);
} else {
  await context.rebuild();
  await context.dispose();
  console.log(`Iconfine: built ${icons.length} Lucide icons`);
}
