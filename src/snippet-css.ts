import type { IconDefinition } from "./icons.generated";

export type SnippetIconPackId = "lucide" | "tabler" | "tabler-filled";

/**
 * Placeholders kept in the embedded stylesheet so that the build never has to
 * duplicate the base64 font payloads. At runtime each placeholder is replaced
 * by the `url()` wrapper around the matching embedded font.
 */
export const SNIPPET_FONT_TOKENS: Record<SnippetIconPackId, string> = {
  lucide: 'url("iconfine-lucide.woff2")',
  tabler: 'url("iconfine-tabler.woff2")',
  "tabler-filled": 'url("iconfine-tabler-filled.woff2")',
};

function mappingSelectors(packId: SnippetIconPackId, icon: IconDefinition): string {
  if (packId === "lucide") {
    return `.iconfine.lucide-font.icon-${icon.id}::before, .iconfine.if-lucide.if-icon-${icon.id}::before`;
  }
  if (packId === "tabler") {
    return `.iconfine.tabler-font.ti-${icon.id}::before, .iconfine.if-tabler.if-icon-${icon.id}::before`;
  }
  return `.iconfine.tabler-filled-font.ti-filled-${icon.id}::before`;
}

export interface IconfineSnippetCssOptions {
  baseCss: string;
  fontDataUrls: Record<SnippetIconPackId, string>;
  packs: Record<SnippetIconPackId, IconDefinition[]>;
}

export function buildIconfineSnippetCss(options: IconfineSnippetCssOptions): string {
  const packIds = Object.keys(options.packs) as SnippetIconPackId[];

  const mappings = packIds
    .map((packId) =>
      options.packs[packId]
        .map((icon) => `${mappingSelectors(packId, icon)} { content: "\\${icon.codepoint}"; }`)
        .join("\n"),
    )
    .join("\n\n");

  let css = options.baseCss.trim();
  for (const packId of packIds) {
    css = css
      .split(SNIPPET_FONT_TOKENS[packId])
      .join(`url("${options.fontDataUrls[packId]}")`);
  }

  return `${css}\n\n${mappings}\n`;
}
