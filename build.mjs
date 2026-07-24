import esbuild from "esbuild";
import { copyFile, readFile, writeFile } from "node:fs/promises";
import process from "node:process";
import builtins from "builtin-modules";

const watch = process.argv.includes("--watch");

function parseMappings(css, pattern, packName) {
  const mappings = new Map();

  for (const match of css.matchAll(pattern)) {
    mappings.set(match[1], match[2]);
  }

  if (mappings.size === 0) {
    throw new Error(`No ${packName} icon mappings were found`);
  }

  return [...mappings.entries()]
    .map(([id, codepoint]) => ({ id, codepoint }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

const lucideCss = await readFile("lucide.css", "utf8");
const tablerCss = await readFile("tabler-icon/tabler-icons.css", "utf8");

const lucideIcons = parseMappings(
  lucideCss,
  /\.icon-([a-z0-9-]+)::before\s*\{\s*content:\s*"\\([a-f0-9]+)";\s*\}/gi,
  "Lucide",
);
const tablerIcons = parseMappings(
  tablerCss,
  /\.ti-([a-z0-9-]+):before\s*\{\s*content:\s*"\\([a-f0-9]+)";\s*\}/gi,
  "Tabler",
);

const generatedTs = `export interface IconDefinition {\n  id: string;\n  codepoint: string;\n}\n\nexport const LUCIDE_ICONS: IconDefinition[] = ${JSON.stringify(lucideIcons, null, 2)};\n\nexport const TABLER_ICONS: IconDefinition[] = ${JSON.stringify(tablerIcons, null, 2)};\n`;
await writeFile("src/icons.generated.ts", generatedTs, "utf8");

const baseCss = await readFile("src/styles-base.css", "utf8");
const rendererBaseCss = await readFile("src/renderer-base.css", "utf8");
const lucideMappings = lucideIcons
  .map(({ id, codepoint }) => `.iconfine.lucide-font.icon-${id}::before, .iconfine.if-lucide.if-icon-${id}::before { content: "\\${codepoint}"; }`)
  .join("\n");
const tablerMappings = tablerIcons
  .map(({ id, codepoint }) => `.iconfine.tabler-font.ti-${id}::before, .iconfine.if-tabler.if-icon-${id}::before { content: "\\${codepoint}"; }`)
  .join("\n");
await writeFile("styles.css", `${baseCss.trim()}\n`, "utf8");
await writeFile(
  "iconfine.css",
  `${rendererBaseCss.trim()}\n\n${lucideMappings}\n\n${tablerMappings}\n`,
  "utf8",
);
await copyFile("tabler-icon/tabler-icons.woff2", "tabler-icons.woff2");

const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: ["obsidian", "electron", "@codemirror/autocomplete", "@codemirror/collab", "@codemirror/commands", "@codemirror/language", "@codemirror/lint", "@codemirror/search", "@codemirror/state", "@codemirror/view", "@lezer/common", "@lezer/highlight", "@lezer/lr", ...builtins],
  format: "cjs",
  target: "es2018",
  logLevel: "info",
  sourcemap: "inline",
  treeShaking: true,
  outfile: "main.js",
});

if (watch) {
  await context.watch();
  console.log(`Iconfine: watching ${lucideIcons.length} Lucide and ${tablerIcons.length} Tabler icons`);
} else {
  await context.rebuild();
  await context.dispose();
  console.log(`Iconfine: built ${lucideIcons.length} Lucide and ${tablerIcons.length} Tabler icons`);
}
