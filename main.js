var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => IconfinePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/icons.generated.ts
var LUCIDE_ICONS = [
  {
    "id": "a-arrow-down",
    "codepoint": "e585"
  },
  {
    "id": "a-arrow-up",
    "codepoint": "e586"
  },
  {
    "id": "a-large-small",
    "codepoint": "e587"
  },
  {
    "id": "accessibility",
    "codepoint": "e297"
  },
  {
    "id": "activity",
    "codepoint": "e038"
  },
  {
    "id": "activity-square",
    "codepoint": "e4b4"
  },
  {
    "id": "ad",
    "codepoint": "e700"
  },
  {
    "id": "air-vent",
    "codepoint": "e34d"
  },
  {
    "id": "airplay",
    "codepoint": "e039"
  },
  {
    "id": "alarm-check",
    "codepoint": "e1ec"
  },
  {
    "id": "alarm-clock",
    "codepoint": "e03a"
  },
  {
    "id": "alarm-clock-check",
    "codepoint": "e1ec"
  },
  {
    "id": "alarm-clock-minus",
    "codepoint": "e1ed"
  },
  {
    "id": "alarm-clock-off",
    "codepoint": "e23b"
  },
  {
    "id": "alarm-clock-plus",
    "codepoint": "e1ee"
  },
  {
    "id": "alarm-minus",
    "codepoint": "e1ed"
  },
  {
    "id": "alarm-plus",
    "codepoint": "e1ee"
  },
  {
    "id": "alarm-smoke",
    "codepoint": "e57b"
  },
  {
    "id": "album",
    "codepoint": "e03b"
  },
  {
    "id": "alert-circle",
    "codepoint": "e077"
  },
  {
    "id": "alert-octagon",
    "codepoint": "e127"
  },
  {
    "id": "alert-triangle",
    "codepoint": "e193"
  },
  {
    "id": "align-center",
    "codepoint": "e182"
  },
  {
    "id": "align-center-horizontal",
    "codepoint": "e26c"
  },
  {
    "id": "align-center-vertical",
    "codepoint": "e26d"
  },
  {
    "id": "align-end-horizontal",
    "codepoint": "e26e"
  },
  {
    "id": "align-end-vertical",
    "codepoint": "e26f"
  },
  {
    "id": "align-horizontal-distribute-center",
    "codepoint": "e03c"
  },
  {
    "id": "align-horizontal-distribute-end",
    "codepoint": "e03d"
  },
  {
    "id": "align-horizontal-distribute-start",
    "codepoint": "e03e"
  },
  {
    "id": "align-horizontal-justify-center",
    "codepoint": "e272"
  },
  {
    "id": "align-horizontal-justify-end",
    "codepoint": "e273"
  },
  {
    "id": "align-horizontal-justify-start",
    "codepoint": "e274"
  },
  {
    "id": "align-horizontal-space-around",
    "codepoint": "e275"
  },
  {
    "id": "align-horizontal-space-between",
    "codepoint": "e276"
  },
  {
    "id": "align-justify",
    "codepoint": "e184"
  },
  {
    "id": "align-left",
    "codepoint": "e185"
  },
  {
    "id": "align-right",
    "codepoint": "e183"
  },
  {
    "id": "align-start-horizontal",
    "codepoint": "e270"
  },
  {
    "id": "align-start-vertical",
    "codepoint": "e271"
  },
  {
    "id": "align-vertical-distribute-center",
    "codepoint": "e27e"
  },
  {
    "id": "align-vertical-distribute-end",
    "codepoint": "e27f"
  },
  {
    "id": "align-vertical-distribute-start",
    "codepoint": "e280"
  },
  {
    "id": "align-vertical-justify-center",
    "codepoint": "e277"
  },
  {
    "id": "align-vertical-justify-end",
    "codepoint": "e278"
  },
  {
    "id": "align-vertical-justify-start",
    "codepoint": "e279"
  },
  {
    "id": "align-vertical-space-around",
    "codepoint": "e27a"
  },
  {
    "id": "align-vertical-space-between",
    "codepoint": "e27b"
  },
  {
    "id": "ambulance",
    "codepoint": "e5bb"
  },
  {
    "id": "ampersand",
    "codepoint": "e49c"
  },
  {
    "id": "ampersands",
    "codepoint": "e49d"
  },
  {
    "id": "amphora",
    "codepoint": "e61b"
  },
  {
    "id": "anchor",
    "codepoint": "e03f"
  },
  {
    "id": "angry",
    "codepoint": "e2fc"
  },
  {
    "id": "annoyed",
    "codepoint": "e2fd"
  },
  {
    "id": "antenna",
    "codepoint": "e4e2"
  },
  {
    "id": "anvil",
    "codepoint": "e580"
  },
  {
    "id": "aperture",
    "codepoint": "e040"
  },
  {
    "id": "app-window",
    "codepoint": "e426"
  },
  {
    "id": "app-window-mac",
    "codepoint": "e5d2"
  },
  {
    "id": "apple",
    "codepoint": "e34e"
  },
  {
    "id": "archive",
    "codepoint": "e041"
  },
  {
    "id": "archive-restore",
    "codepoint": "e2cd"
  },
  {
    "id": "archive-x",
    "codepoint": "e50c"
  },
  {
    "id": "area-chart",
    "codepoint": "e4d3"
  },
  {
    "id": "armchair",
    "codepoint": "e2c0"
  },
  {
    "id": "arrow-big-down",
    "codepoint": "e1e1"
  },
  {
    "id": "arrow-big-down-dash",
    "codepoint": "e41d"
  },
  {
    "id": "arrow-big-left",
    "codepoint": "e1e2"
  },
  {
    "id": "arrow-big-left-dash",
    "codepoint": "e41e"
  },
  {
    "id": "arrow-big-right",
    "codepoint": "e1e3"
  },
  {
    "id": "arrow-big-right-dash",
    "codepoint": "e41f"
  },
  {
    "id": "arrow-big-up",
    "codepoint": "e1e4"
  },
  {
    "id": "arrow-big-up-dash",
    "codepoint": "e420"
  },
  {
    "id": "arrow-down",
    "codepoint": "e042"
  },
  {
    "id": "arrow-down-0-1",
    "codepoint": "e413"
  },
  {
    "id": "arrow-down-01",
    "codepoint": "e413"
  },
  {
    "id": "arrow-down-1-0",
    "codepoint": "e414"
  },
  {
    "id": "arrow-down-10",
    "codepoint": "e414"
  },
  {
    "id": "arrow-down-a-z",
    "codepoint": "e415"
  },
  {
    "id": "arrow-down-az",
    "codepoint": "e415"
  },
  {
    "id": "arrow-down-circle",
    "codepoint": "e078"
  },
  {
    "id": "arrow-down-from-line",
    "codepoint": "e454"
  },
  {
    "id": "arrow-down-left",
    "codepoint": "e043"
  },
  {
    "id": "arrow-down-left-from-circle",
    "codepoint": "e3f7"
  },
  {
    "id": "arrow-down-left-from-square",
    "codepoint": "e5a1"
  },
  {
    "id": "arrow-down-left-square",
    "codepoint": "e4b5"
  },
  {
    "id": "arrow-down-narrow-wide",
    "codepoint": "e044"
  },
  {
    "id": "arrow-down-right",
    "codepoint": "e045"
  },
  {
    "id": "arrow-down-right-from-circle",
    "codepoint": "e3f8"
  },
  {
    "id": "arrow-down-right-from-square",
    "codepoint": "e5a2"
  },
  {
    "id": "arrow-down-right-square",
    "codepoint": "e4b6"
  },
  {
    "id": "arrow-down-square",
    "codepoint": "e427"
  },
  {
    "id": "arrow-down-to-dot",
    "codepoint": "e44d"
  },
  {
    "id": "arrow-down-to-line",
    "codepoint": "e455"
  },
  {
    "id": "arrow-down-up",
    "codepoint": "e046"
  },
  {
    "id": "arrow-down-wide-narrow",
    "codepoint": "e047"
  },
  {
    "id": "arrow-down-z-a",
    "codepoint": "e416"
  },
  {
    "id": "arrow-down-za",
    "codepoint": "e416"
  },
  {
    "id": "arrow-left",
    "codepoint": "e048"
  },
  {
    "id": "arrow-left-circle",
    "codepoint": "e079"
  },
  {
    "id": "arrow-left-from-line",
    "codepoint": "e456"
  },
  {
    "id": "arrow-left-right",
    "codepoint": "e24a"
  },
  {
    "id": "arrow-left-square",
    "codepoint": "e428"
  },
  {
    "id": "arrow-left-to-line",
    "codepoint": "e457"
  },
  {
    "id": "arrow-right",
    "codepoint": "e049"
  },
  {
    "id": "arrow-right-circle",
    "codepoint": "e07a"
  },
  {
    "id": "arrow-right-from-line",
    "codepoint": "e458"
  },
  {
    "id": "arrow-right-left",
    "codepoint": "e417"
  },
  {
    "id": "arrow-right-square",
    "codepoint": "e429"
  },
  {
    "id": "arrow-right-to-line",
    "codepoint": "e459"
  },
  {
    "id": "arrow-up",
    "codepoint": "e04a"
  },
  {
    "id": "arrow-up-0-1",
    "codepoint": "e418"
  },
  {
    "id": "arrow-up-01",
    "codepoint": "e418"
  },
  {
    "id": "arrow-up-1-0",
    "codepoint": "e419"
  },
  {
    "id": "arrow-up-10",
    "codepoint": "e419"
  },
  {
    "id": "arrow-up-a-z",
    "codepoint": "e41a"
  },
  {
    "id": "arrow-up-az",
    "codepoint": "e41a"
  },
  {
    "id": "arrow-up-circle",
    "codepoint": "e07b"
  },
  {
    "id": "arrow-up-down",
    "codepoint": "e37d"
  },
  {
    "id": "arrow-up-from-dot",
    "codepoint": "e44e"
  },
  {
    "id": "arrow-up-from-line",
    "codepoint": "e45a"
  },
  {
    "id": "arrow-up-left",
    "codepoint": "e04b"
  },
  {
    "id": "arrow-up-left-from-circle",
    "codepoint": "e3f9"
  },
  {
    "id": "arrow-up-left-from-square",
    "codepoint": "e5a3"
  },
  {
    "id": "arrow-up-left-square",
    "codepoint": "e4b7"
  },
  {
    "id": "arrow-up-narrow-wide",
    "codepoint": "e04c"
  },
  {
    "id": "arrow-up-right",
    "codepoint": "e04d"
  },
  {
    "id": "arrow-up-right-from-circle",
    "codepoint": "e3fa"
  },
  {
    "id": "arrow-up-right-from-square",
    "codepoint": "e5a4"
  },
  {
    "id": "arrow-up-right-square",
    "codepoint": "e4b8"
  },
  {
    "id": "arrow-up-square",
    "codepoint": "e42a"
  },
  {
    "id": "arrow-up-to-line",
    "codepoint": "e45b"
  },
  {
    "id": "arrow-up-wide-narrow",
    "codepoint": "e41b"
  },
  {
    "id": "arrow-up-z-a",
    "codepoint": "e41c"
  },
  {
    "id": "arrow-up-za",
    "codepoint": "e41c"
  },
  {
    "id": "arrows-up-from-line",
    "codepoint": "e4d4"
  },
  {
    "id": "asterisk",
    "codepoint": "e1ef"
  },
  {
    "id": "asterisk-square",
    "codepoint": "e168"
  },
  {
    "id": "astroid",
    "codepoint": "e6f0"
  },
  {
    "id": "at-sign",
    "codepoint": "e04e"
  },
  {
    "id": "atom",
    "codepoint": "e3d7"
  },
  {
    "id": "audio-lines",
    "codepoint": "e55a"
  },
  {
    "id": "audio-waveform",
    "codepoint": "e55b"
  },
  {
    "id": "award",
    "codepoint": "e04f"
  },
  {
    "id": "axe",
    "codepoint": "e050"
  },
  {
    "id": "axis-3-d",
    "codepoint": "e2fe"
  },
  {
    "id": "axis-3d",
    "codepoint": "e2fe"
  },
  {
    "id": "baby",
    "codepoint": "e2ce"
  },
  {
    "id": "backpack",
    "codepoint": "e2c8"
  },
  {
    "id": "badge",
    "codepoint": "e474"
  },
  {
    "id": "badge-alert",
    "codepoint": "e475"
  },
  {
    "id": "badge-cent",
    "codepoint": "e50f"
  },
  {
    "id": "badge-check",
    "codepoint": "e241"
  },
  {
    "id": "badge-dollar-sign",
    "codepoint": "e476"
  },
  {
    "id": "badge-euro",
    "codepoint": "e510"
  },
  {
    "id": "badge-help",
    "codepoint": "e47b"
  },
  {
    "id": "badge-indian-rupee",
    "codepoint": "e511"
  },
  {
    "id": "badge-info",
    "codepoint": "e477"
  },
  {
    "id": "badge-japanese-yen",
    "codepoint": "e512"
  },
  {
    "id": "badge-minus",
    "codepoint": "e478"
  },
  {
    "id": "badge-percent",
    "codepoint": "e479"
  },
  {
    "id": "badge-plus",
    "codepoint": "e47a"
  },
  {
    "id": "badge-pound-sterling",
    "codepoint": "e513"
  },
  {
    "id": "badge-question-mark",
    "codepoint": "e47b"
  },
  {
    "id": "badge-russian-ruble",
    "codepoint": "e514"
  },
  {
    "id": "badge-swiss-franc",
    "codepoint": "e515"
  },
  {
    "id": "badge-turkish-lira",
    "codepoint": "e67e"
  },
  {
    "id": "badge-x",
    "codepoint": "e47c"
  },
  {
    "id": "baggage-claim",
    "codepoint": "e2c9"
  },
  {
    "id": "balloon",
    "codepoint": "e6af"
  },
  {
    "id": "ban",
    "codepoint": "e051"
  },
  {
    "id": "banana",
    "codepoint": "e34f"
  },
  {
    "id": "bandage",
    "codepoint": "e61d"
  },
  {
    "id": "banknote",
    "codepoint": "e052"
  },
  {
    "id": "banknote-arrow-down",
    "codepoint": "e64c"
  },
  {
    "id": "banknote-arrow-up",
    "codepoint": "e64d"
  },
  {
    "id": "banknote-check",
    "codepoint": "e70c"
  },
  {
    "id": "banknote-x",
    "codepoint": "e64e"
  },
  {
    "id": "bar-chart",
    "codepoint": "e06a"
  },
  {
    "id": "bar-chart-2",
    "codepoint": "e068"
  },
  {
    "id": "bar-chart-3",
    "codepoint": "e2a3"
  },
  {
    "id": "bar-chart-4",
    "codepoint": "e2a4"
  },
  {
    "id": "bar-chart-big",
    "codepoint": "e4a9"
  },
  {
    "id": "bar-chart-horizontal",
    "codepoint": "e2a2"
  },
  {
    "id": "bar-chart-horizontal-big",
    "codepoint": "e4a7"
  },
  {
    "id": "barcode",
    "codepoint": "e533"
  },
  {
    "id": "barrel",
    "codepoint": "e675"
  },
  {
    "id": "baseline",
    "codepoint": "e285"
  },
  {
    "id": "bath",
    "codepoint": "e2ab"
  },
  {
    "id": "battery",
    "codepoint": "e053"
  },
  {
    "id": "battery-charging",
    "codepoint": "e054"
  },
  {
    "id": "battery-full",
    "codepoint": "e055"
  },
  {
    "id": "battery-low",
    "codepoint": "e056"
  },
  {
    "id": "battery-medium",
    "codepoint": "e057"
  },
  {
    "id": "battery-plus",
    "codepoint": "e63e"
  },
  {
    "id": "battery-warning",
    "codepoint": "e3ac"
  },
  {
    "id": "beaker",
    "codepoint": "e058"
  },
  {
    "id": "bean",
    "codepoint": "e38f"
  },
  {
    "id": "bean-off",
    "codepoint": "e390"
  },
  {
    "id": "bed",
    "codepoint": "e2c1"
  },
  {
    "id": "bed-double",
    "codepoint": "e2c2"
  },
  {
    "id": "bed-single",
    "codepoint": "e2c3"
  },
  {
    "id": "beef",
    "codepoint": "e3a5"
  },
  {
    "id": "beef-off",
    "codepoint": "e6dc"
  },
  {
    "id": "beer",
    "codepoint": "e2cf"
  },
  {
    "id": "beer-off",
    "codepoint": "e5d9"
  },
  {
    "id": "bell",
    "codepoint": "e059"
  },
  {
    "id": "bell-check",
    "codepoint": "e6ef"
  },
  {
    "id": "bell-dot",
    "codepoint": "e42b"
  },
  {
    "id": "bell-electric",
    "codepoint": "e57c"
  },
  {
    "id": "bell-minus",
    "codepoint": "e1f0"
  },
  {
    "id": "bell-off",
    "codepoint": "e05a"
  },
  {
    "id": "bell-plus",
    "codepoint": "e1f1"
  },
  {
    "id": "bell-ring",
    "codepoint": "e224"
  },
  {
    "id": "between-horizonal-end",
    "codepoint": "e591"
  },
  {
    "id": "between-horizonal-start",
    "codepoint": "e592"
  },
  {
    "id": "between-horizontal-end",
    "codepoint": "e591"
  },
  {
    "id": "between-horizontal-start",
    "codepoint": "e592"
  },
  {
    "id": "between-vertical-end",
    "codepoint": "e593"
  },
  {
    "id": "between-vertical-start",
    "codepoint": "e594"
  },
  {
    "id": "biceps-flexed",
    "codepoint": "e5eb"
  },
  {
    "id": "bike",
    "codepoint": "e1d2"
  },
  {
    "id": "binary",
    "codepoint": "e1f2"
  },
  {
    "id": "binoculars",
    "codepoint": "e621"
  },
  {
    "id": "biohazard",
    "codepoint": "e441"
  },
  {
    "id": "bird",
    "codepoint": "e3c5"
  },
  {
    "id": "birdhouse",
    "codepoint": "e69a"
  },
  {
    "id": "bitcoin",
    "codepoint": "e05b"
  },
  {
    "id": "blend",
    "codepoint": "e59c"
  },
  {
    "id": "blender",
    "codepoint": "e6f4"
  },
  {
    "id": "blinds",
    "codepoint": "e3c0"
  },
  {
    "id": "blocks",
    "codepoint": "e4fa"
  },
  {
    "id": "bluetooth",
    "codepoint": "e05c"
  },
  {
    "id": "bluetooth-connected",
    "codepoint": "e1b8"
  },
  {
    "id": "bluetooth-off",
    "codepoint": "e1b9"
  },
  {
    "id": "bluetooth-searching",
    "codepoint": "e1ba"
  },
  {
    "id": "bold",
    "codepoint": "e05d"
  },
  {
    "id": "bolt",
    "codepoint": "e58c"
  },
  {
    "id": "bomb",
    "codepoint": "e2ff"
  },
  {
    "id": "bone",
    "codepoint": "e358"
  },
  {
    "id": "bone-fracture",
    "codepoint": "e715"
  },
  {
    "id": "book",
    "codepoint": "e05e"
  },
  {
    "id": "book-a",
    "codepoint": "e544"
  },
  {
    "id": "book-alert",
    "codepoint": "e672"
  },
  {
    "id": "book-audio",
    "codepoint": "e545"
  },
  {
    "id": "book-check",
    "codepoint": "e546"
  },
  {
    "id": "book-copy",
    "codepoint": "e3ec"
  },
  {
    "id": "book-dashed",
    "codepoint": "e3ed"
  },
  {
    "id": "book-down",
    "codepoint": "e3ee"
  },
  {
    "id": "book-headphones",
    "codepoint": "e547"
  },
  {
    "id": "book-heart",
    "codepoint": "e548"
  },
  {
    "id": "book-image",
    "codepoint": "e549"
  },
  {
    "id": "book-key",
    "codepoint": "e3ef"
  },
  {
    "id": "book-lock",
    "codepoint": "e3f0"
  },
  {
    "id": "book-marked",
    "codepoint": "e3f1"
  },
  {
    "id": "book-minus",
    "codepoint": "e3f2"
  },
  {
    "id": "book-open",
    "codepoint": "e05f"
  },
  {
    "id": "book-open-check",
    "codepoint": "e381"
  },
  {
    "id": "book-open-text",
    "codepoint": "e54a"
  },
  {
    "id": "book-plus",
    "codepoint": "e3f3"
  },
  {
    "id": "book-search",
    "codepoint": "e6ab"
  },
  {
    "id": "book-template",
    "codepoint": "e3ed"
  },
  {
    "id": "book-text",
    "codepoint": "e54b"
  },
  {
    "id": "book-type",
    "codepoint": "e54c"
  },
  {
    "id": "book-up",
    "codepoint": "e3f4"
  },
  {
    "id": "book-up-2",
    "codepoint": "e4a6"
  },
  {
    "id": "book-user",
    "codepoint": "e54d"
  },
  {
    "id": "book-x",
    "codepoint": "e3f5"
  },
  {
    "id": "bookmark",
    "codepoint": "e060"
  },
  {
    "id": "bookmark-check",
    "codepoint": "e51f"
  },
  {
    "id": "bookmark-minus",
    "codepoint": "e23c"
  },
  {
    "id": "bookmark-off",
    "codepoint": "e6df"
  },
  {
    "id": "bookmark-plus",
    "codepoint": "e23d"
  },
  {
    "id": "bookmark-x",
    "codepoint": "e520"
  },
  {
    "id": "boom-box",
    "codepoint": "e4ee"
  },
  {
    "id": "bot",
    "codepoint": "e1bb"
  },
  {
    "id": "bot-message-square",
    "codepoint": "e5ce"
  },
  {
    "id": "bot-off",
    "codepoint": "e5e0"
  },
  {
    "id": "bottle-wine",
    "codepoint": "e67b"
  },
  {
    "id": "bow-arrow",
    "codepoint": "e65e"
  },
  {
    "id": "box",
    "codepoint": "e061"
  },
  {
    "id": "box-select",
    "codepoint": "e1cb"
  },
  {
    "id": "boxes",
    "codepoint": "e2d0"
  },
  {
    "id": "braces",
    "codepoint": "e36a"
  },
  {
    "id": "brackets",
    "codepoint": "e443"
  },
  {
    "id": "brain",
    "codepoint": "e3c6"
  },
  {
    "id": "brain-circuit",
    "codepoint": "e3c7"
  },
  {
    "id": "brain-cog",
    "codepoint": "e3c8"
  },
  {
    "id": "brick-wall",
    "codepoint": "e581"
  },
  {
    "id": "brick-wall-fire",
    "codepoint": "e653"
  },
  {
    "id": "brick-wall-shield",
    "codepoint": "e690"
  },
  {
    "id": "briefcase",
    "codepoint": "e062"
  },
  {
    "id": "briefcase-business",
    "codepoint": "e5d5"
  },
  {
    "id": "briefcase-conveyor-belt",
    "codepoint": "e62b"
  },
  {
    "id": "briefcase-medical",
    "codepoint": "e5d6"
  },
  {
    "id": "bring-to-front",
    "codepoint": "e4ef"
  },
  {
    "id": "broccoli",
    "codepoint": "e6f5"
  },
  {
    "id": "brush",
    "codepoint": "e1d3"
  },
  {
    "id": "brush-cleaning",
    "codepoint": "e666"
  },
  {
    "id": "bubbles",
    "codepoint": "e654"
  },
  {
    "id": "bug",
    "codepoint": "e20c"
  },
  {
    "id": "bug-off",
    "codepoint": "e50d"
  },
  {
    "id": "bug-play",
    "codepoint": "e50e"
  },
  {
    "id": "building",
    "codepoint": "e1cc"
  },
  {
    "id": "building-2",
    "codepoint": "e290"
  },
  {
    "id": "bus",
    "codepoint": "e1d4"
  },
  {
    "id": "bus-front",
    "codepoint": "e4fb"
  },
  {
    "id": "cable",
    "codepoint": "e4e3"
  },
  {
    "id": "cable-car",
    "codepoint": "e4fc"
  },
  {
    "id": "cake",
    "codepoint": "e344"
  },
  {
    "id": "cake-slice",
    "codepoint": "e4b9"
  },
  {
    "id": "calculator",
    "codepoint": "e1bc"
  },
  {
    "id": "calendar",
    "codepoint": "e063"
  },
  {
    "id": "calendar-1",
    "codepoint": "e630"
  },
  {
    "id": "calendar-arrow-down",
    "codepoint": "e5fe"
  },
  {
    "id": "calendar-arrow-up",
    "codepoint": "e5ff"
  },
  {
    "id": "calendar-check",
    "codepoint": "e2b7"
  },
  {
    "id": "calendar-check-2",
    "codepoint": "e2b8"
  },
  {
    "id": "calendar-clock",
    "codepoint": "e304"
  },
  {
    "id": "calendar-cog",
    "codepoint": "e5ed"
  },
  {
    "id": "calendar-days",
    "codepoint": "e2b9"
  },
  {
    "id": "calendar-fold",
    "codepoint": "e5b4"
  },
  {
    "id": "calendar-heart",
    "codepoint": "e305"
  },
  {
    "id": "calendar-minus",
    "codepoint": "e2ba"
  },
  {
    "id": "calendar-minus-2",
    "codepoint": "e5b5"
  },
  {
    "id": "calendar-off",
    "codepoint": "e2bb"
  },
  {
    "id": "calendar-plus",
    "codepoint": "e2bc"
  },
  {
    "id": "calendar-plus-2",
    "codepoint": "e5b6"
  },
  {
    "id": "calendar-range",
    "codepoint": "e2bd"
  },
  {
    "id": "calendar-search",
    "codepoint": "e306"
  },
  {
    "id": "calendar-sync",
    "codepoint": "e636"
  },
  {
    "id": "calendar-x",
    "codepoint": "e2be"
  },
  {
    "id": "calendar-x-2",
    "codepoint": "e2bf"
  },
  {
    "id": "calendars",
    "codepoint": "e6a7"
  },
  {
    "id": "camera",
    "codepoint": "e064"
  },
  {
    "id": "camera-off",
    "codepoint": "e065"
  },
  {
    "id": "candlestick-chart",
    "codepoint": "e4a8"
  },
  {
    "id": "candy",
    "codepoint": "e391"
  },
  {
    "id": "candy-cane",
    "codepoint": "e4ba"
  },
  {
    "id": "candy-off",
    "codepoint": "e392"
  },
  {
    "id": "cannabis",
    "codepoint": "e5d4"
  },
  {
    "id": "cannabis-off",
    "codepoint": "e6e0"
  },
  {
    "id": "captions",
    "codepoint": "e3a4"
  },
  {
    "id": "captions-off",
    "codepoint": "e5c1"
  },
  {
    "id": "car",
    "codepoint": "e1d5"
  },
  {
    "id": "car-front",
    "codepoint": "e4fd"
  },
  {
    "id": "car-taxi-front",
    "codepoint": "e4fe"
  },
  {
    "id": "caravan",
    "codepoint": "e539"
  },
  {
    "id": "card-sim",
    "codepoint": "e671"
  },
  {
    "id": "carrot",
    "codepoint": "e25a"
  },
  {
    "id": "case-lower",
    "codepoint": "e3d8"
  },
  {
    "id": "case-sensitive",
    "codepoint": "e3d9"
  },
  {
    "id": "case-upper",
    "codepoint": "e3da"
  },
  {
    "id": "cassette-tape",
    "codepoint": "e4ca"
  },
  {
    "id": "cast",
    "codepoint": "e066"
  },
  {
    "id": "castle",
    "codepoint": "e3e0"
  },
  {
    "id": "cat",
    "codepoint": "e38c"
  },
  {
    "id": "cctv",
    "codepoint": "e57d"
  },
  {
    "id": "cctv-off",
    "codepoint": "e6d8"
  },
  {
    "id": "chart-area",
    "codepoint": "e4d3"
  },
  {
    "id": "chart-bar",
    "codepoint": "e2a2"
  },
  {
    "id": "chart-bar-big",
    "codepoint": "e4a7"
  },
  {
    "id": "chart-bar-decreasing",
    "codepoint": "e607"
  },
  {
    "id": "chart-bar-increasing",
    "codepoint": "e608"
  },
  {
    "id": "chart-bar-stacked",
    "codepoint": "e609"
  },
  {
    "id": "chart-candlestick",
    "codepoint": "e4a8"
  },
  {
    "id": "chart-column",
    "codepoint": "e2a3"
  },
  {
    "id": "chart-column-big",
    "codepoint": "e4a9"
  },
  {
    "id": "chart-column-decreasing",
    "codepoint": "e067"
  },
  {
    "id": "chart-column-increasing",
    "codepoint": "e2a4"
  },
  {
    "id": "chart-column-stacked",
    "codepoint": "e60a"
  },
  {
    "id": "chart-gantt",
    "codepoint": "e624"
  },
  {
    "id": "chart-line",
    "codepoint": "e2a5"
  },
  {
    "id": "chart-network",
    "codepoint": "e60b"
  },
  {
    "id": "chart-no-axes-column",
    "codepoint": "e068"
  },
  {
    "id": "chart-no-axes-column-decreasing",
    "codepoint": "e069"
  },
  {
    "id": "chart-no-axes-column-increasing",
    "codepoint": "e06a"
  },
  {
    "id": "chart-no-axes-combined",
    "codepoint": "e60c"
  },
  {
    "id": "chart-no-axes-gantt",
    "codepoint": "e4c4"
  },
  {
    "id": "chart-pie",
    "codepoint": "e06b"
  },
  {
    "id": "chart-scatter",
    "codepoint": "e48a"
  },
  {
    "id": "chart-spline",
    "codepoint": "e60d"
  },
  {
    "id": "check",
    "codepoint": "e06c"
  },
  {
    "id": "check-check",
    "codepoint": "e38e"
  },
  {
    "id": "check-circle",
    "codepoint": "e07c"
  },
  {
    "id": "check-circle-2",
    "codepoint": "e226"
  },
  {
    "id": "check-line",
    "codepoint": "e66b"
  },
  {
    "id": "check-square",
    "codepoint": "e16a"
  },
  {
    "id": "check-square-2",
    "codepoint": "e559"
  },
  {
    "id": "chef-hat",
    "codepoint": "e2ac"
  },
  {
    "id": "cherry",
    "codepoint": "e350"
  },
  {
    "id": "chess-bishop",
    "codepoint": "e6a0"
  },
  {
    "id": "chess-king",
    "codepoint": "e6a1"
  },
  {
    "id": "chess-knight",
    "codepoint": "e6a2"
  },
  {
    "id": "chess-pawn",
    "codepoint": "e6a3"
  },
  {
    "id": "chess-queen",
    "codepoint": "e6a4"
  },
  {
    "id": "chess-rook",
    "codepoint": "e6a5"
  },
  {
    "id": "chevron-down",
    "codepoint": "e06d"
  },
  {
    "id": "chevron-down-circle",
    "codepoint": "e4dd"
  },
  {
    "id": "chevron-down-square",
    "codepoint": "e3cf"
  },
  {
    "id": "chevron-first",
    "codepoint": "e243"
  },
  {
    "id": "chevron-last",
    "codepoint": "e244"
  },
  {
    "id": "chevron-left",
    "codepoint": "e06e"
  },
  {
    "id": "chevron-left-circle",
    "codepoint": "e4de"
  },
  {
    "id": "chevron-left-square",
    "codepoint": "e3d0"
  },
  {
    "id": "chevron-right",
    "codepoint": "e06f"
  },
  {
    "id": "chevron-right-circle",
    "codepoint": "e4df"
  },
  {
    "id": "chevron-right-square",
    "codepoint": "e3d1"
  },
  {
    "id": "chevron-up",
    "codepoint": "e070"
  },
  {
    "id": "chevron-up-circle",
    "codepoint": "e4e0"
  },
  {
    "id": "chevron-up-square",
    "codepoint": "e3d2"
  },
  {
    "id": "chevrons-down",
    "codepoint": "e071"
  },
  {
    "id": "chevrons-down-up",
    "codepoint": "e228"
  },
  {
    "id": "chevrons-left",
    "codepoint": "e072"
  },
  {
    "id": "chevrons-left-right",
    "codepoint": "e293"
  },
  {
    "id": "chevrons-left-right-ellipsis",
    "codepoint": "e61f"
  },
  {
    "id": "chevrons-right",
    "codepoint": "e073"
  },
  {
    "id": "chevrons-right-left",
    "codepoint": "e294"
  },
  {
    "id": "chevrons-up",
    "codepoint": "e074"
  },
  {
    "id": "chevrons-up-down",
    "codepoint": "e211"
  },
  {
    "id": "church",
    "codepoint": "e3e1"
  },
  {
    "id": "cigarette",
    "codepoint": "e2c6"
  },
  {
    "id": "cigarette-off",
    "codepoint": "e2c7"
  },
  {
    "id": "circle",
    "codepoint": "e076"
  },
  {
    "id": "circle-alert",
    "codepoint": "e077"
  },
  {
    "id": "circle-arrow-down",
    "codepoint": "e078"
  },
  {
    "id": "circle-arrow-left",
    "codepoint": "e079"
  },
  {
    "id": "circle-arrow-out-down-left",
    "codepoint": "e3f7"
  },
  {
    "id": "circle-arrow-out-down-right",
    "codepoint": "e3f8"
  },
  {
    "id": "circle-arrow-out-up-left",
    "codepoint": "e3f9"
  },
  {
    "id": "circle-arrow-out-up-right",
    "codepoint": "e3fa"
  },
  {
    "id": "circle-arrow-right",
    "codepoint": "e07a"
  },
  {
    "id": "circle-arrow-up",
    "codepoint": "e07b"
  },
  {
    "id": "circle-check",
    "codepoint": "e226"
  },
  {
    "id": "circle-check-big",
    "codepoint": "e07c"
  },
  {
    "id": "circle-chevron-down",
    "codepoint": "e4dd"
  },
  {
    "id": "circle-chevron-left",
    "codepoint": "e4de"
  },
  {
    "id": "circle-chevron-right",
    "codepoint": "e4df"
  },
  {
    "id": "circle-chevron-up",
    "codepoint": "e4e0"
  },
  {
    "id": "circle-dashed",
    "codepoint": "e4b0"
  },
  {
    "id": "circle-divide",
    "codepoint": "e07d"
  },
  {
    "id": "circle-dollar-sign",
    "codepoint": "e47d"
  },
  {
    "id": "circle-dot",
    "codepoint": "e345"
  },
  {
    "id": "circle-dot-dashed",
    "codepoint": "e4b1"
  },
  {
    "id": "circle-ellipsis",
    "codepoint": "e346"
  },
  {
    "id": "circle-equal",
    "codepoint": "e400"
  },
  {
    "id": "circle-euro",
    "codepoint": "e71f"
  },
  {
    "id": "circle-fading-arrow-up",
    "codepoint": "e618"
  },
  {
    "id": "circle-fading-plus",
    "codepoint": "e5bc"
  },
  {
    "id": "circle-gauge",
    "codepoint": "e4e1"
  },
  {
    "id": "circle-help",
    "codepoint": "e082"
  },
  {
    "id": "circle-minus",
    "codepoint": "e07e"
  },
  {
    "id": "circle-off",
    "codepoint": "e401"
  },
  {
    "id": "circle-parking",
    "codepoint": "e3c9"
  },
  {
    "id": "circle-parking-off",
    "codepoint": "e3ca"
  },
  {
    "id": "circle-pause",
    "codepoint": "e07f"
  },
  {
    "id": "circle-percent",
    "codepoint": "e51a"
  },
  {
    "id": "circle-pile",
    "codepoint": "e6e1"
  },
  {
    "id": "circle-play",
    "codepoint": "e080"
  },
  {
    "id": "circle-plus",
    "codepoint": "e081"
  },
  {
    "id": "circle-pound-sterling",
    "codepoint": "e66d"
  },
  {
    "id": "circle-power",
    "codepoint": "e550"
  },
  {
    "id": "circle-question-mark",
    "codepoint": "e082"
  },
  {
    "id": "circle-slash",
    "codepoint": "e402"
  },
  {
    "id": "circle-slash-2",
    "codepoint": "e213"
  },
  {
    "id": "circle-slashed",
    "codepoint": "e213"
  },
  {
    "id": "circle-small",
    "codepoint": "e640"
  },
  {
    "id": "circle-star",
    "codepoint": "e68d"
  },
  {
    "id": "circle-stop",
    "codepoint": "e083"
  },
  {
    "id": "circle-user",
    "codepoint": "e461"
  },
  {
    "id": "circle-user-round",
    "codepoint": "e462"
  },
  {
    "id": "circle-x",
    "codepoint": "e084"
  },
  {
    "id": "circuit-board",
    "codepoint": "e403"
  },
  {
    "id": "citrus",
    "codepoint": "e375"
  },
  {
    "id": "clapperboard",
    "codepoint": "e29b"
  },
  {
    "id": "clipboard",
    "codepoint": "e085"
  },
  {
    "id": "clipboard-check",
    "codepoint": "e219"
  },
  {
    "id": "clipboard-clock",
    "codepoint": "e688"
  },
  {
    "id": "clipboard-copy",
    "codepoint": "e225"
  },
  {
    "id": "clipboard-edit",
    "codepoint": "e307"
  },
  {
    "id": "clipboard-list",
    "codepoint": "e086"
  },
  {
    "id": "clipboard-minus",
    "codepoint": "e5be"
  },
  {
    "id": "clipboard-paste",
    "codepoint": "e3e8"
  },
  {
    "id": "clipboard-pen",
    "codepoint": "e307"
  },
  {
    "id": "clipboard-pen-line",
    "codepoint": "e308"
  },
  {
    "id": "clipboard-plus",
    "codepoint": "e5bf"
  },
  {
    "id": "clipboard-signature",
    "codepoint": "e308"
  },
  {
    "id": "clipboard-type",
    "codepoint": "e309"
  },
  {
    "id": "clipboard-x",
    "codepoint": "e222"
  },
  {
    "id": "clock",
    "codepoint": "e087"
  },
  {
    "id": "clock-1",
    "codepoint": "e24b"
  },
  {
    "id": "clock-10",
    "codepoint": "e24c"
  },
  {
    "id": "clock-11",
    "codepoint": "e24d"
  },
  {
    "id": "clock-12",
    "codepoint": "e24e"
  },
  {
    "id": "clock-2",
    "codepoint": "e24f"
  },
  {
    "id": "clock-3",
    "codepoint": "e250"
  },
  {
    "id": "clock-4",
    "codepoint": "e251"
  },
  {
    "id": "clock-5",
    "codepoint": "e252"
  },
  {
    "id": "clock-6",
    "codepoint": "e253"
  },
  {
    "id": "clock-7",
    "codepoint": "e254"
  },
  {
    "id": "clock-8",
    "codepoint": "e255"
  },
  {
    "id": "clock-9",
    "codepoint": "e256"
  },
  {
    "id": "clock-alert",
    "codepoint": "e62a"
  },
  {
    "id": "clock-arrow-down",
    "codepoint": "e600"
  },
  {
    "id": "clock-arrow-left",
    "codepoint": "e70d"
  },
  {
    "id": "clock-arrow-right",
    "codepoint": "e70e"
  },
  {
    "id": "clock-arrow-up",
    "codepoint": "e601"
  },
  {
    "id": "clock-check",
    "codepoint": "e69e"
  },
  {
    "id": "clock-fading",
    "codepoint": "e64a"
  },
  {
    "id": "clock-plus",
    "codepoint": "e667"
  },
  {
    "id": "closed-caption",
    "codepoint": "e68a"
  },
  {
    "id": "cloud",
    "codepoint": "e088"
  },
  {
    "id": "cloud-alert",
    "codepoint": "e633"
  },
  {
    "id": "cloud-backup",
    "codepoint": "e6e2"
  },
  {
    "id": "cloud-check",
    "codepoint": "e66e"
  },
  {
    "id": "cloud-cog",
    "codepoint": "e30a"
  },
  {
    "id": "cloud-download",
    "codepoint": "e089"
  },
  {
    "id": "cloud-drizzle",
    "codepoint": "e08a"
  },
  {
    "id": "cloud-fog",
    "codepoint": "e214"
  },
  {
    "id": "cloud-hail",
    "codepoint": "e08b"
  },
  {
    "id": "cloud-lightning",
    "codepoint": "e08c"
  },
  {
    "id": "cloud-moon",
    "codepoint": "e215"
  },
  {
    "id": "cloud-moon-rain",
    "codepoint": "e2fa"
  },
  {
    "id": "cloud-off",
    "codepoint": "e08d"
  },
  {
    "id": "cloud-rain",
    "codepoint": "e08e"
  },
  {
    "id": "cloud-rain-wind",
    "codepoint": "e08f"
  },
  {
    "id": "cloud-snow",
    "codepoint": "e090"
  },
  {
    "id": "cloud-sun",
    "codepoint": "e216"
  },
  {
    "id": "cloud-sun-rain",
    "codepoint": "e2fb"
  },
  {
    "id": "cloud-sync",
    "codepoint": "e6e3"
  },
  {
    "id": "cloud-upload",
    "codepoint": "e091"
  },
  {
    "id": "cloudy",
    "codepoint": "e217"
  },
  {
    "id": "clover",
    "codepoint": "e092"
  },
  {
    "id": "club",
    "codepoint": "e496"
  },
  {
    "id": "code",
    "codepoint": "e093"
  },
  {
    "id": "code-2",
    "codepoint": "e206"
  },
  {
    "id": "code-square",
    "codepoint": "e16b"
  },
  {
    "id": "code-xml",
    "codepoint": "e206"
  },
  {
    "id": "coffee",
    "codepoint": "e096"
  },
  {
    "id": "cog",
    "codepoint": "e30b"
  },
  {
    "id": "coins",
    "codepoint": "e097"
  },
  {
    "id": "columns",
    "codepoint": "e098"
  },
  {
    "id": "columns-2",
    "codepoint": "e098"
  },
  {
    "id": "columns-3",
    "codepoint": "e099"
  },
  {
    "id": "columns-3-cog",
    "codepoint": "e661"
  },
  {
    "id": "columns-4",
    "codepoint": "e589"
  },
  {
    "id": "columns-settings",
    "codepoint": "e661"
  },
  {
    "id": "combine",
    "codepoint": "e44c"
  },
  {
    "id": "command",
    "codepoint": "e09a"
  },
  {
    "id": "compass",
    "codepoint": "e09b"
  },
  {
    "id": "component",
    "codepoint": "e2ad"
  },
  {
    "id": "computer",
    "codepoint": "e4e4"
  },
  {
    "id": "concierge-bell",
    "codepoint": "e378"
  },
  {
    "id": "cone",
    "codepoint": "e523"
  },
  {
    "id": "construction",
    "codepoint": "e3b4"
  },
  {
    "id": "contact",
    "codepoint": "e09c"
  },
  {
    "id": "contact-2",
    "codepoint": "e463"
  },
  {
    "id": "contact-round",
    "codepoint": "e463"
  },
  {
    "id": "container",
    "codepoint": "e4d5"
  },
  {
    "id": "contrast",
    "codepoint": "e09d"
  },
  {
    "id": "cookie",
    "codepoint": "e26b"
  },
  {
    "id": "cooking-pot",
    "codepoint": "e584"
  },
  {
    "id": "copy",
    "codepoint": "e09e"
  },
  {
    "id": "copy-check",
    "codepoint": "e3fb"
  },
  {
    "id": "copy-minus",
    "codepoint": "e3fc"
  },
  {
    "id": "copy-plus",
    "codepoint": "e3fd"
  },
  {
    "id": "copy-slash",
    "codepoint": "e3fe"
  },
  {
    "id": "copy-x",
    "codepoint": "e3ff"
  },
  {
    "id": "copyleft",
    "codepoint": "e09f"
  },
  {
    "id": "copyright",
    "codepoint": "e0a0"
  },
  {
    "id": "corner-down-left",
    "codepoint": "e0a1"
  },
  {
    "id": "corner-down-right",
    "codepoint": "e0a2"
  },
  {
    "id": "corner-left-down",
    "codepoint": "e0a3"
  },
  {
    "id": "corner-left-up",
    "codepoint": "e0a4"
  },
  {
    "id": "corner-right-down",
    "codepoint": "e0a5"
  },
  {
    "id": "corner-right-up",
    "codepoint": "e0a6"
  },
  {
    "id": "corner-up-left",
    "codepoint": "e0a7"
  },
  {
    "id": "corner-up-right",
    "codepoint": "e0a8"
  },
  {
    "id": "cpu",
    "codepoint": "e0a9"
  },
  {
    "id": "creative-commons",
    "codepoint": "e3b2"
  },
  {
    "id": "credit-card",
    "codepoint": "e0aa"
  },
  {
    "id": "croissant",
    "codepoint": "e2ae"
  },
  {
    "id": "crop",
    "codepoint": "e0ab"
  },
  {
    "id": "cross",
    "codepoint": "e1e5"
  },
  {
    "id": "crosshair",
    "codepoint": "e0ac"
  },
  {
    "id": "crown",
    "codepoint": "e1d6"
  },
  {
    "id": "cuboid",
    "codepoint": "e524"
  },
  {
    "id": "cup-soda",
    "codepoint": "e2d1"
  },
  {
    "id": "curly-braces",
    "codepoint": "e36a"
  },
  {
    "id": "currency",
    "codepoint": "e230"
  },
  {
    "id": "cylinder",
    "codepoint": "e525"
  },
  {
    "id": "dam",
    "codepoint": "e606"
  },
  {
    "id": "database",
    "codepoint": "e0ad"
  },
  {
    "id": "database-arrow-down",
    "codepoint": "e716"
  },
  {
    "id": "database-arrow-up",
    "codepoint": "e717"
  },
  {
    "id": "database-backup",
    "codepoint": "e3ab"
  },
  {
    "id": "database-check",
    "codepoint": "e718"
  },
  {
    "id": "database-minus",
    "codepoint": "e719"
  },
  {
    "id": "database-plus",
    "codepoint": "e71a"
  },
  {
    "id": "database-search",
    "codepoint": "e6b1"
  },
  {
    "id": "database-x",
    "codepoint": "e71b"
  },
  {
    "id": "database-zap",
    "codepoint": "e50b"
  },
  {
    "id": "decimals-arrow-left",
    "codepoint": "e65c"
  },
  {
    "id": "decimals-arrow-right",
    "codepoint": "e65d"
  },
  {
    "id": "delete",
    "codepoint": "e0ae"
  },
  {
    "id": "dessert",
    "codepoint": "e4bb"
  },
  {
    "id": "diameter",
    "codepoint": "e526"
  },
  {
    "id": "diamond",
    "codepoint": "e2d2"
  },
  {
    "id": "diamond-minus",
    "codepoint": "e5e1"
  },
  {
    "id": "diamond-percent",
    "codepoint": "e51b"
  },
  {
    "id": "diamond-plus",
    "codepoint": "e5e2"
  },
  {
    "id": "dice-1",
    "codepoint": "e287"
  },
  {
    "id": "dice-2",
    "codepoint": "e288"
  },
  {
    "id": "dice-3",
    "codepoint": "e289"
  },
  {
    "id": "dice-4",
    "codepoint": "e28a"
  },
  {
    "id": "dice-5",
    "codepoint": "e28b"
  },
  {
    "id": "dice-6",
    "codepoint": "e28c"
  },
  {
    "id": "dices",
    "codepoint": "e2c5"
  },
  {
    "id": "diff",
    "codepoint": "e30c"
  },
  {
    "id": "disc",
    "codepoint": "e0af"
  },
  {
    "id": "disc-2",
    "codepoint": "e3f6"
  },
  {
    "id": "disc-3",
    "codepoint": "e494"
  },
  {
    "id": "disc-album",
    "codepoint": "e55c"
  },
  {
    "id": "divide",
    "codepoint": "e0b0"
  },
  {
    "id": "divide-circle",
    "codepoint": "e07d"
  },
  {
    "id": "divide-square",
    "codepoint": "e16d"
  },
  {
    "id": "dna",
    "codepoint": "e393"
  },
  {
    "id": "dna-off",
    "codepoint": "e394"
  },
  {
    "id": "dock",
    "codepoint": "e5d3"
  },
  {
    "id": "dog",
    "codepoint": "e38d"
  },
  {
    "id": "dollar-sign",
    "codepoint": "e0b1"
  },
  {
    "id": "donut",
    "codepoint": "e4bc"
  },
  {
    "id": "door-closed",
    "codepoint": "e3d5"
  },
  {
    "id": "door-closed-locked",
    "codepoint": "e664"
  },
  {
    "id": "door-open",
    "codepoint": "e3d6"
  },
  {
    "id": "dot",
    "codepoint": "e44f"
  },
  {
    "id": "dot-square",
    "codepoint": "e16e"
  },
  {
    "id": "download",
    "codepoint": "e0b2"
  },
  {
    "id": "download-cloud",
    "codepoint": "e089"
  },
  {
    "id": "drafting-compass",
    "codepoint": "e527"
  },
  {
    "id": "drama",
    "codepoint": "e521"
  },
  {
    "id": "drill",
    "codepoint": "e58d"
  },
  {
    "id": "drone",
    "codepoint": "e676"
  },
  {
    "id": "droplet",
    "codepoint": "e0b4"
  },
  {
    "id": "droplet-off",
    "codepoint": "e638"
  },
  {
    "id": "droplets",
    "codepoint": "e0b5"
  },
  {
    "id": "drum",
    "codepoint": "e55d"
  },
  {
    "id": "drumstick",
    "codepoint": "e25b"
  },
  {
    "id": "dumbbell",
    "codepoint": "e3a1"
  },
  {
    "id": "ear",
    "codepoint": "e382"
  },
  {
    "id": "ear-off",
    "codepoint": "e383"
  },
  {
    "id": "earth",
    "codepoint": "e1f3"
  },
  {
    "id": "earth-lock",
    "codepoint": "e5cc"
  },
  {
    "id": "eclipse",
    "codepoint": "e59d"
  },
  {
    "id": "edit",
    "codepoint": "e172"
  },
  {
    "id": "edit-2",
    "codepoint": "e12f"
  },
  {
    "id": "edit-3",
    "codepoint": "e130"
  },
  {
    "id": "egg",
    "codepoint": "e25d"
  },
  {
    "id": "egg-fried",
    "codepoint": "e351"
  },
  {
    "id": "egg-off",
    "codepoint": "e395"
  },
  {
    "id": "ellipse",
    "codepoint": "e6b2"
  },
  {
    "id": "ellipsis",
    "codepoint": "e0b6"
  },
  {
    "id": "ellipsis-vertical",
    "codepoint": "e0b7"
  },
  {
    "id": "equal",
    "codepoint": "e1bd"
  },
  {
    "id": "equal-approximately",
    "codepoint": "e634"
  },
  {
    "id": "equal-not",
    "codepoint": "e1be"
  },
  {
    "id": "equal-square",
    "codepoint": "e16f"
  },
  {
    "id": "eraser",
    "codepoint": "e28f"
  },
  {
    "id": "ethernet-port",
    "codepoint": "e620"
  },
  {
    "id": "euro",
    "codepoint": "e0b8"
  },
  {
    "id": "ev-charger",
    "codepoint": "e697"
  },
  {
    "id": "expand",
    "codepoint": "e21a"
  },
  {
    "id": "external-link",
    "codepoint": "e0b9"
  },
  {
    "id": "eye",
    "codepoint": "e0ba"
  },
  {
    "id": "eye-closed",
    "codepoint": "e62e"
  },
  {
    "id": "eye-dashed",
    "codepoint": "e701"
  },
  {
    "id": "eye-off",
    "codepoint": "e0bb"
  },
  {
    "id": "factory",
    "codepoint": "e29f"
  },
  {
    "id": "fan",
    "codepoint": "e379"
  },
  {
    "id": "fast-forward",
    "codepoint": "e0bd"
  },
  {
    "id": "feather",
    "codepoint": "e0be"
  },
  {
    "id": "fence",
    "codepoint": "e582"
  },
  {
    "id": "ferris-wheel",
    "codepoint": "e47f"
  },
  {
    "id": "file",
    "codepoint": "e0c0"
  },
  {
    "id": "file-archive",
    "codepoint": "e30d"
  },
  {
    "id": "file-audio",
    "codepoint": "e31a"
  },
  {
    "id": "file-audio-2",
    "codepoint": "e31a"
  },
  {
    "id": "file-axis-3-d",
    "codepoint": "e30e"
  },
  {
    "id": "file-axis-3d",
    "codepoint": "e30e"
  },
  {
    "id": "file-badge",
    "codepoint": "e30f"
  },
  {
    "id": "file-badge-2",
    "codepoint": "e30f"
  },
  {
    "id": "file-bar-chart",
    "codepoint": "e312"
  },
  {
    "id": "file-bar-chart-2",
    "codepoint": "e311"
  },
  {
    "id": "file-box",
    "codepoint": "e310"
  },
  {
    "id": "file-braces",
    "codepoint": "e36b"
  },
  {
    "id": "file-braces-corner",
    "codepoint": "e36c"
  },
  {
    "id": "file-chart-column",
    "codepoint": "e311"
  },
  {
    "id": "file-chart-column-increasing",
    "codepoint": "e312"
  },
  {
    "id": "file-chart-line",
    "codepoint": "e313"
  },
  {
    "id": "file-chart-pie",
    "codepoint": "e314"
  },
  {
    "id": "file-check",
    "codepoint": "e0c1"
  },
  {
    "id": "file-check-2",
    "codepoint": "e0c2"
  },
  {
    "id": "file-check-corner",
    "codepoint": "e0c2"
  },
  {
    "id": "file-clock",
    "codepoint": "e315"
  },
  {
    "id": "file-code",
    "codepoint": "e0c3"
  },
  {
    "id": "file-code-2",
    "codepoint": "e45e"
  },
  {
    "id": "file-code-corner",
    "codepoint": "e45e"
  },
  {
    "id": "file-cog",
    "codepoint": "e316"
  },
  {
    "id": "file-cog-2",
    "codepoint": "e316"
  },
  {
    "id": "file-diff",
    "codepoint": "e317"
  },
  {
    "id": "file-digit",
    "codepoint": "e0c4"
  },
  {
    "id": "file-down",
    "codepoint": "e318"
  },
  {
    "id": "file-edit",
    "codepoint": "e31f"
  },
  {
    "id": "file-exclamation-point",
    "codepoint": "e319"
  },
  {
    "id": "file-headphone",
    "codepoint": "e31a"
  },
  {
    "id": "file-heart",
    "codepoint": "e31b"
  },
  {
    "id": "file-image",
    "codepoint": "e31c"
  },
  {
    "id": "file-input",
    "codepoint": "e0c5"
  },
  {
    "id": "file-json",
    "codepoint": "e36b"
  },
  {
    "id": "file-json-2",
    "codepoint": "e36c"
  },
  {
    "id": "file-key",
    "codepoint": "e31d"
  },
  {
    "id": "file-key-2",
    "codepoint": "e31d"
  },
  {
    "id": "file-line-chart",
    "codepoint": "e313"
  },
  {
    "id": "file-lock",
    "codepoint": "e31e"
  },
  {
    "id": "file-lock-2",
    "codepoint": "e31e"
  },
  {
    "id": "file-minus",
    "codepoint": "e0c6"
  },
  {
    "id": "file-minus-2",
    "codepoint": "e0c7"
  },
  {
    "id": "file-minus-corner",
    "codepoint": "e0c7"
  },
  {
    "id": "file-music",
    "codepoint": "e55e"
  },
  {
    "id": "file-output",
    "codepoint": "e0c8"
  },
  {
    "id": "file-pen",
    "codepoint": "e31f"
  },
  {
    "id": "file-pen-line",
    "codepoint": "e320"
  },
  {
    "id": "file-pie-chart",
    "codepoint": "e314"
  },
  {
    "id": "file-play",
    "codepoint": "e321"
  },
  {
    "id": "file-plus",
    "codepoint": "e0c9"
  },
  {
    "id": "file-plus-2",
    "codepoint": "e0ca"
  },
  {
    "id": "file-plus-corner",
    "codepoint": "e0ca"
  },
  {
    "id": "file-question",
    "codepoint": "e322"
  },
  {
    "id": "file-question-mark",
    "codepoint": "e322"
  },
  {
    "id": "file-scan",
    "codepoint": "e323"
  },
  {
    "id": "file-search",
    "codepoint": "e0cb"
  },
  {
    "id": "file-search-2",
    "codepoint": "e324"
  },
  {
    "id": "file-search-corner",
    "codepoint": "e324"
  },
  {
    "id": "file-signal",
    "codepoint": "e325"
  },
  {
    "id": "file-signature",
    "codepoint": "e320"
  },
  {
    "id": "file-sliders",
    "codepoint": "e5a0"
  },
  {
    "id": "file-spreadsheet",
    "codepoint": "e326"
  },
  {
    "id": "file-stack",
    "codepoint": "e4a1"
  },
  {
    "id": "file-symlink",
    "codepoint": "e327"
  },
  {
    "id": "file-terminal",
    "codepoint": "e328"
  },
  {
    "id": "file-text",
    "codepoint": "e0cc"
  },
  {
    "id": "file-type",
    "codepoint": "e329"
  },
  {
    "id": "file-type-2",
    "codepoint": "e36d"
  },
  {
    "id": "file-type-corner",
    "codepoint": "e36d"
  },
  {
    "id": "file-up",
    "codepoint": "e32a"
  },
  {
    "id": "file-user",
    "codepoint": "e62d"
  },
  {
    "id": "file-video",
    "codepoint": "e321"
  },
  {
    "id": "file-video-2",
    "codepoint": "e32b"
  },
  {
    "id": "file-video-camera",
    "codepoint": "e32b"
  },
  {
    "id": "file-volume",
    "codepoint": "e32c"
  },
  {
    "id": "file-volume-2",
    "codepoint": "e325"
  },
  {
    "id": "file-warning",
    "codepoint": "e319"
  },
  {
    "id": "file-x",
    "codepoint": "e0cd"
  },
  {
    "id": "file-x-2",
    "codepoint": "e0ce"
  },
  {
    "id": "file-x-corner",
    "codepoint": "e0ce"
  },
  {
    "id": "files",
    "codepoint": "e0cf"
  },
  {
    "id": "film",
    "codepoint": "e0d0"
  },
  {
    "id": "filter",
    "codepoint": "e0dc"
  },
  {
    "id": "filter-x",
    "codepoint": "e3b5"
  },
  {
    "id": "fingerprint",
    "codepoint": "e2cb"
  },
  {
    "id": "fingerprint-pattern",
    "codepoint": "e2cb"
  },
  {
    "id": "fire-extinguisher",
    "codepoint": "e57e"
  },
  {
    "id": "fish",
    "codepoint": "e3a6"
  },
  {
    "id": "fish-off",
    "codepoint": "e3b0"
  },
  {
    "id": "fish-symbol",
    "codepoint": "e4f4"
  },
  {
    "id": "fishing-hook",
    "codepoint": "e6e4"
  },
  {
    "id": "fishing-rod",
    "codepoint": "e6b3"
  },
  {
    "id": "flag",
    "codepoint": "e0d1"
  },
  {
    "id": "flag-off",
    "codepoint": "e292"
  },
  {
    "id": "flag-triangle-left",
    "codepoint": "e237"
  },
  {
    "id": "flag-triangle-right",
    "codepoint": "e238"
  },
  {
    "id": "flame",
    "codepoint": "e0d2"
  },
  {
    "id": "flame-kindling",
    "codepoint": "e53a"
  },
  {
    "id": "flashlight",
    "codepoint": "e0d3"
  },
  {
    "id": "flashlight-off",
    "codepoint": "e0d4"
  },
  {
    "id": "flask-conical",
    "codepoint": "e0d5"
  },
  {
    "id": "flask-conical-off",
    "codepoint": "e396"
  },
  {
    "id": "flask-round",
    "codepoint": "e0d6"
  },
  {
    "id": "flip-horizontal",
    "codepoint": "e35d"
  },
  {
    "id": "flip-horizontal-2",
    "codepoint": "e35e"
  },
  {
    "id": "flip-vertical",
    "codepoint": "e35f"
  },
  {
    "id": "flip-vertical-2",
    "codepoint": "e360"
  },
  {
    "id": "flower",
    "codepoint": "e2d3"
  },
  {
    "id": "flower-2",
    "codepoint": "e2d4"
  },
  {
    "id": "focus",
    "codepoint": "e29e"
  },
  {
    "id": "fold-horizontal",
    "codepoint": "e43b"
  },
  {
    "id": "fold-vertical",
    "codepoint": "e43c"
  },
  {
    "id": "folder",
    "codepoint": "e0d7"
  },
  {
    "id": "folder-archive",
    "codepoint": "e32d"
  },
  {
    "id": "folder-bookmark",
    "codepoint": "e6f1"
  },
  {
    "id": "folder-check",
    "codepoint": "e32e"
  },
  {
    "id": "folder-clock",
    "codepoint": "e32f"
  },
  {
    "id": "folder-closed",
    "codepoint": "e330"
  },
  {
    "id": "folder-code",
    "codepoint": "e5fb"
  },
  {
    "id": "folder-cog",
    "codepoint": "e331"
  },
  {
    "id": "folder-cog-2",
    "codepoint": "e331"
  },
  {
    "id": "folder-dot",
    "codepoint": "e4c5"
  },
  {
    "id": "folder-down",
    "codepoint": "e332"
  },
  {
    "id": "folder-edit",
    "codepoint": "e338"
  },
  {
    "id": "folder-git",
    "codepoint": "e409"
  },
  {
    "id": "folder-git-2",
    "codepoint": "e40a"
  },
  {
    "id": "folder-heart",
    "codepoint": "e333"
  },
  {
    "id": "folder-input",
    "codepoint": "e334"
  },
  {
    "id": "folder-kanban",
    "codepoint": "e4c6"
  },
  {
    "id": "folder-key",
    "codepoint": "e335"
  },
  {
    "id": "folder-lock",
    "codepoint": "e336"
  },
  {
    "id": "folder-minus",
    "codepoint": "e0d8"
  },
  {
    "id": "folder-open",
    "codepoint": "e247"
  },
  {
    "id": "folder-open-dot",
    "codepoint": "e4c7"
  },
  {
    "id": "folder-output",
    "codepoint": "e337"
  },
  {
    "id": "folder-pen",
    "codepoint": "e338"
  },
  {
    "id": "folder-plus",
    "codepoint": "e0d9"
  },
  {
    "id": "folder-root",
    "codepoint": "e4c8"
  },
  {
    "id": "folder-search",
    "codepoint": "e339"
  },
  {
    "id": "folder-search-2",
    "codepoint": "e33a"
  },
  {
    "id": "folder-symlink",
    "codepoint": "e33b"
  },
  {
    "id": "folder-sync",
    "codepoint": "e4c9"
  },
  {
    "id": "folder-tree",
    "codepoint": "e33c"
  },
  {
    "id": "folder-up",
    "codepoint": "e33d"
  },
  {
    "id": "folder-x",
    "codepoint": "e33e"
  },
  {
    "id": "folders",
    "codepoint": "e33f"
  },
  {
    "id": "footprints",
    "codepoint": "e3b9"
  },
  {
    "id": "fork-knife",
    "codepoint": "e2f6"
  },
  {
    "id": "fork-knife-crossed",
    "codepoint": "e2f7"
  },
  {
    "id": "forklift",
    "codepoint": "e3c1"
  },
  {
    "id": "form",
    "codepoint": "e6a8"
  },
  {
    "id": "form-input",
    "codepoint": "e21f"
  },
  {
    "id": "forward",
    "codepoint": "e229"
  },
  {
    "id": "frame",
    "codepoint": "e291"
  },
  {
    "id": "frown",
    "codepoint": "e0db"
  },
  {
    "id": "fuel",
    "codepoint": "e2af"
  },
  {
    "id": "fullscreen",
    "codepoint": "e534"
  },
  {
    "id": "function-square",
    "codepoint": "e22d"
  },
  {
    "id": "funnel",
    "codepoint": "e0dc"
  },
  {
    "id": "funnel-plus",
    "codepoint": "e0dd"
  },
  {
    "id": "funnel-x",
    "codepoint": "e3b5"
  },
  {
    "id": "gallery-horizontal",
    "codepoint": "e4ce"
  },
  {
    "id": "gallery-horizontal-end",
    "codepoint": "e4cf"
  },
  {
    "id": "gallery-thumbnails",
    "codepoint": "e4d0"
  },
  {
    "id": "gallery-vertical",
    "codepoint": "e4d1"
  },
  {
    "id": "gallery-vertical-end",
    "codepoint": "e4d2"
  },
  {
    "id": "gamepad",
    "codepoint": "e0de"
  },
  {
    "id": "gamepad-2",
    "codepoint": "e0df"
  },
  {
    "id": "gamepad-directional",
    "codepoint": "e69b"
  },
  {
    "id": "gantt-chart",
    "codepoint": "e4c4"
  },
  {
    "id": "gantt-chart-square",
    "codepoint": "e169"
  },
  {
    "id": "gauge",
    "codepoint": "e1bf"
  },
  {
    "id": "gauge-circle",
    "codepoint": "e4e1"
  },
  {
    "id": "gavel",
    "codepoint": "e0e0"
  },
  {
    "id": "gem",
    "codepoint": "e242"
  },
  {
    "id": "georgian-lari",
    "codepoint": "e678"
  },
  {
    "id": "ghost",
    "codepoint": "e20e"
  },
  {
    "id": "gift",
    "codepoint": "e0e1"
  },
  {
    "id": "git-branch",
    "codepoint": "e0e2"
  },
  {
    "id": "git-branch-minus",
    "codepoint": "e69c"
  },
  {
    "id": "git-branch-plus",
    "codepoint": "e1f4"
  },
  {
    "id": "git-commit",
    "codepoint": "e0e3"
  },
  {
    "id": "git-commit-horizontal",
    "codepoint": "e0e3"
  },
  {
    "id": "git-commit-vertical",
    "codepoint": "e552"
  },
  {
    "id": "git-compare",
    "codepoint": "e359"
  },
  {
    "id": "git-compare-arrows",
    "codepoint": "e553"
  },
  {
    "id": "git-fork",
    "codepoint": "e28d"
  },
  {
    "id": "git-graph",
    "codepoint": "e554"
  },
  {
    "id": "git-merge",
    "codepoint": "e0e4"
  },
  {
    "id": "git-merge-conflict",
    "codepoint": "e6b4"
  },
  {
    "id": "git-pull-request",
    "codepoint": "e0e5"
  },
  {
    "id": "git-pull-request-arrow",
    "codepoint": "e555"
  },
  {
    "id": "git-pull-request-closed",
    "codepoint": "e35a"
  },
  {
    "id": "git-pull-request-create",
    "codepoint": "e556"
  },
  {
    "id": "git-pull-request-create-arrow",
    "codepoint": "e557"
  },
  {
    "id": "git-pull-request-draft",
    "codepoint": "e35b"
  },
  {
    "id": "glass-water",
    "codepoint": "e2d5"
  },
  {
    "id": "glasses",
    "codepoint": "e20d"
  },
  {
    "id": "globe",
    "codepoint": "e0e8"
  },
  {
    "id": "globe-2",
    "codepoint": "e1f3"
  },
  {
    "id": "globe-check",
    "codepoint": "e6fc"
  },
  {
    "id": "globe-lock",
    "codepoint": "e5cd"
  },
  {
    "id": "globe-off",
    "codepoint": "e6b5"
  },
  {
    "id": "globe-x",
    "codepoint": "e6b6"
  },
  {
    "id": "goal",
    "codepoint": "e4a5"
  },
  {
    "id": "gpu",
    "codepoint": "e66a"
  },
  {
    "id": "grab",
    "codepoint": "e1e6"
  },
  {
    "id": "graduation-cap",
    "codepoint": "e234"
  },
  {
    "id": "grape",
    "codepoint": "e352"
  },
  {
    "id": "grid",
    "codepoint": "e0e9"
  },
  {
    "id": "grid-2-x-2",
    "codepoint": "e4ff"
  },
  {
    "id": "grid-2-x-2-check",
    "codepoint": "e5e4"
  },
  {
    "id": "grid-2-x-2-plus",
    "codepoint": "e628"
  },
  {
    "id": "grid-2-x-2-x",
    "codepoint": "e5e5"
  },
  {
    "id": "grid-2x2",
    "codepoint": "e4ff"
  },
  {
    "id": "grid-2x2-check",
    "codepoint": "e5e4"
  },
  {
    "id": "grid-2x2-plus",
    "codepoint": "e628"
  },
  {
    "id": "grid-2x2-x",
    "codepoint": "e5e5"
  },
  {
    "id": "grid-3-x-3",
    "codepoint": "e0e9"
  },
  {
    "id": "grid-3x2",
    "codepoint": "e66f"
  },
  {
    "id": "grid-3x3",
    "codepoint": "e0e9"
  },
  {
    "id": "grip",
    "codepoint": "e3b1"
  },
  {
    "id": "grip-horizontal",
    "codepoint": "e0ea"
  },
  {
    "id": "grip-vertical",
    "codepoint": "e0eb"
  },
  {
    "id": "group",
    "codepoint": "e464"
  },
  {
    "id": "guitar",
    "codepoint": "e55f"
  },
  {
    "id": "ham",
    "codepoint": "e5d7"
  },
  {
    "id": "hamburger",
    "codepoint": "e665"
  },
  {
    "id": "hammer",
    "codepoint": "e0ec"
  },
  {
    "id": "hand",
    "codepoint": "e1d7"
  },
  {
    "id": "hand-coins",
    "codepoint": "e5b8"
  },
  {
    "id": "hand-fist",
    "codepoint": "e68b"
  },
  {
    "id": "hand-grab",
    "codepoint": "e1e6"
  },
  {
    "id": "hand-heart",
    "codepoint": "e5b9"
  },
  {
    "id": "hand-helping",
    "codepoint": "e3b8"
  },
  {
    "id": "hand-metal",
    "codepoint": "e22c"
  },
  {
    "id": "hand-platter",
    "codepoint": "e5ba"
  },
  {
    "id": "handbag",
    "codepoint": "e689"
  },
  {
    "id": "handshake",
    "codepoint": "e5c0"
  },
  {
    "id": "hard-drive",
    "codepoint": "e0ed"
  },
  {
    "id": "hard-drive-download",
    "codepoint": "e4e5"
  },
  {
    "id": "hard-drive-upload",
    "codepoint": "e4e6"
  },
  {
    "id": "hard-hat",
    "codepoint": "e0ee"
  },
  {
    "id": "hash",
    "codepoint": "e0ef"
  },
  {
    "id": "hat-glasses",
    "codepoint": "e683"
  },
  {
    "id": "haze",
    "codepoint": "e0f0"
  },
  {
    "id": "hd",
    "codepoint": "e6e5"
  },
  {
    "id": "hdmi-port",
    "codepoint": "e4e7"
  },
  {
    "id": "heading",
    "codepoint": "e384"
  },
  {
    "id": "heading-1",
    "codepoint": "e385"
  },
  {
    "id": "heading-2",
    "codepoint": "e386"
  },
  {
    "id": "heading-3",
    "codepoint": "e387"
  },
  {
    "id": "heading-4",
    "codepoint": "e388"
  },
  {
    "id": "heading-5",
    "codepoint": "e389"
  },
  {
    "id": "heading-6",
    "codepoint": "e38a"
  },
  {
    "id": "headphone-off",
    "codepoint": "e629"
  },
  {
    "id": "headphones",
    "codepoint": "e0f1"
  },
  {
    "id": "headset",
    "codepoint": "e5bd"
  },
  {
    "id": "heart",
    "codepoint": "e0f2"
  },
  {
    "id": "heart-crack",
    "codepoint": "e2d6"
  },
  {
    "id": "heart-handshake",
    "codepoint": "e2d7"
  },
  {
    "id": "heart-minus",
    "codepoint": "e651"
  },
  {
    "id": "heart-off",
    "codepoint": "e295"
  },
  {
    "id": "heart-plus",
    "codepoint": "e652"
  },
  {
    "id": "heart-pulse",
    "codepoint": "e36e"
  },
  {
    "id": "heart-x",
    "codepoint": "e6ed"
  },
  {
    "id": "heater",
    "codepoint": "e58e"
  },
  {
    "id": "helicopter",
    "codepoint": "e69d"
  },
  {
    "id": "help-circle",
    "codepoint": "e082"
  },
  {
    "id": "helping-hand",
    "codepoint": "e3b8"
  },
  {
    "id": "hexagon",
    "codepoint": "e0f3"
  },
  {
    "id": "highlighter",
    "codepoint": "e0f4"
  },
  {
    "id": "history",
    "codepoint": "e1f5"
  },
  {
    "id": "home",
    "codepoint": "e0f5"
  },
  {
    "id": "hop",
    "codepoint": "e397"
  },
  {
    "id": "hop-off",
    "codepoint": "e398"
  },
  {
    "id": "hospital",
    "codepoint": "e5d8"
  },
  {
    "id": "hotel",
    "codepoint": "e3e2"
  },
  {
    "id": "hourglass",
    "codepoint": "e296"
  },
  {
    "id": "house",
    "codepoint": "e0f5"
  },
  {
    "id": "house-heart",
    "codepoint": "e695"
  },
  {
    "id": "house-plug",
    "codepoint": "e5f0"
  },
  {
    "id": "house-plus",
    "codepoint": "e5f1"
  },
  {
    "id": "house-wifi",
    "codepoint": "e63c"
  },
  {
    "id": "ice-cream",
    "codepoint": "e353"
  },
  {
    "id": "ice-cream-2",
    "codepoint": "e3a7"
  },
  {
    "id": "ice-cream-bowl",
    "codepoint": "e3a7"
  },
  {
    "id": "ice-cream-cone",
    "codepoint": "e353"
  },
  {
    "id": "id-card",
    "codepoint": "e617"
  },
  {
    "id": "id-card-lanyard",
    "codepoint": "e670"
  },
  {
    "id": "image",
    "codepoint": "e0f6"
  },
  {
    "id": "image-down",
    "codepoint": "e53c"
  },
  {
    "id": "image-minus",
    "codepoint": "e1f6"
  },
  {
    "id": "image-off",
    "codepoint": "e1c0"
  },
  {
    "id": "image-play",
    "codepoint": "e5df"
  },
  {
    "id": "image-plus",
    "codepoint": "e1f7"
  },
  {
    "id": "image-up",
    "codepoint": "e5cb"
  },
  {
    "id": "image-upscale",
    "codepoint": "e637"
  },
  {
    "id": "images",
    "codepoint": "e5c4"
  },
  {
    "id": "import",
    "codepoint": "e22f"
  },
  {
    "id": "inbox",
    "codepoint": "e0f7"
  },
  {
    "id": "indent",
    "codepoint": "e108"
  },
  {
    "id": "indent-decrease",
    "codepoint": "e107"
  },
  {
    "id": "indent-increase",
    "codepoint": "e108"
  },
  {
    "id": "indian-rupee",
    "codepoint": "e0f8"
  },
  {
    "id": "infinity",
    "codepoint": "e1e7"
  },
  {
    "id": "info",
    "codepoint": "e0f9"
  },
  {
    "id": "inspect",
    "codepoint": "e202"
  },
  {
    "id": "inspection-panel",
    "codepoint": "e583"
  },
  {
    "id": "italic",
    "codepoint": "e0fb"
  },
  {
    "id": "iteration-ccw",
    "codepoint": "e423"
  },
  {
    "id": "iteration-cw",
    "codepoint": "e424"
  },
  {
    "id": "japanese-yen",
    "codepoint": "e0fc"
  },
  {
    "id": "joystick",
    "codepoint": "e355"
  },
  {
    "id": "kanban",
    "codepoint": "e4dc"
  },
  {
    "id": "kanban-square",
    "codepoint": "e170"
  },
  {
    "id": "kanban-square-dashed",
    "codepoint": "e16c"
  },
  {
    "id": "kayak",
    "codepoint": "e68f"
  },
  {
    "id": "key",
    "codepoint": "e0fd"
  },
  {
    "id": "key-round",
    "codepoint": "e4a3"
  },
  {
    "id": "key-square",
    "codepoint": "e4a4"
  },
  {
    "id": "keyboard",
    "codepoint": "e284"
  },
  {
    "id": "keyboard-music",
    "codepoint": "e560"
  },
  {
    "id": "keyboard-off",
    "codepoint": "e5de"
  },
  {
    "id": "lamp",
    "codepoint": "e2d8"
  },
  {
    "id": "lamp-ceiling",
    "codepoint": "e2d9"
  },
  {
    "id": "lamp-desk",
    "codepoint": "e2da"
  },
  {
    "id": "lamp-floor",
    "codepoint": "e2db"
  },
  {
    "id": "lamp-wall-down",
    "codepoint": "e2dc"
  },
  {
    "id": "lamp-wall-up",
    "codepoint": "e2dd"
  },
  {
    "id": "land-plot",
    "codepoint": "e528"
  },
  {
    "id": "landmark",
    "codepoint": "e23a"
  },
  {
    "id": "languages",
    "codepoint": "e0fe"
  },
  {
    "id": "laptop",
    "codepoint": "e1cd"
  },
  {
    "id": "laptop-2",
    "codepoint": "e1d8"
  },
  {
    "id": "laptop-minimal",
    "codepoint": "e1d8"
  },
  {
    "id": "laptop-minimal-check",
    "codepoint": "e632"
  },
  {
    "id": "lasso",
    "codepoint": "e1ce"
  },
  {
    "id": "lasso-select",
    "codepoint": "e1cf"
  },
  {
    "id": "laugh",
    "codepoint": "e300"
  },
  {
    "id": "layers",
    "codepoint": "e529"
  },
  {
    "id": "layers-2",
    "codepoint": "e52a"
  },
  {
    "id": "layers-3",
    "codepoint": "e529"
  },
  {
    "id": "layers-minus",
    "codepoint": "e6ee"
  },
  {
    "id": "layers-plus",
    "codepoint": "e6e6"
  },
  {
    "id": "layout",
    "codepoint": "e12c"
  },
  {
    "id": "layout-dashboard",
    "codepoint": "e1c1"
  },
  {
    "id": "layout-grid",
    "codepoint": "e0ff"
  },
  {
    "id": "layout-list",
    "codepoint": "e1d9"
  },
  {
    "id": "layout-panel-left",
    "codepoint": "e470"
  },
  {
    "id": "layout-panel-top",
    "codepoint": "e471"
  },
  {
    "id": "layout-template",
    "codepoint": "e207"
  },
  {
    "id": "leaf",
    "codepoint": "e2de"
  },
  {
    "id": "leafy-green",
    "codepoint": "e46f"
  },
  {
    "id": "lectern",
    "codepoint": "e5e9"
  },
  {
    "id": "lens-concave",
    "codepoint": "e6b7"
  },
  {
    "id": "lens-convex",
    "codepoint": "e6b8"
  },
  {
    "id": "letter-text",
    "codepoint": "e605"
  },
  {
    "id": "library",
    "codepoint": "e100"
  },
  {
    "id": "library-big",
    "codepoint": "e54e"
  },
  {
    "id": "library-square",
    "codepoint": "e54f"
  },
  {
    "id": "life-buoy",
    "codepoint": "e101"
  },
  {
    "id": "ligature",
    "codepoint": "e43a"
  },
  {
    "id": "lightbulb",
    "codepoint": "e1c2"
  },
  {
    "id": "lightbulb-off",
    "codepoint": "e208"
  },
  {
    "id": "line-chart",
    "codepoint": "e2a5"
  },
  {
    "id": "line-dot-right-horizontal",
    "codepoint": "e6b9"
  },
  {
    "id": "line-squiggle",
    "codepoint": "e67a"
  },
  {
    "id": "line-style",
    "codepoint": "e6da"
  },
  {
    "id": "link",
    "codepoint": "e102"
  },
  {
    "id": "link-2",
    "codepoint": "e103"
  },
  {
    "id": "link-2-off",
    "codepoint": "e104"
  },
  {
    "id": "list",
    "codepoint": "e106"
  },
  {
    "id": "list-check",
    "codepoint": "e5fa"
  },
  {
    "id": "list-checks",
    "codepoint": "e1d0"
  },
  {
    "id": "list-chevrons-down-up",
    "codepoint": "e694"
  },
  {
    "id": "list-chevrons-up-down",
    "codepoint": "e696"
  },
  {
    "id": "list-collapse",
    "codepoint": "e59b"
  },
  {
    "id": "list-end",
    "codepoint": "e2df"
  },
  {
    "id": "list-filter",
    "codepoint": "e460"
  },
  {
    "id": "list-filter-plus",
    "codepoint": "e639"
  },
  {
    "id": "list-indent-decrease",
    "codepoint": "e107"
  },
  {
    "id": "list-indent-increase",
    "codepoint": "e108"
  },
  {
    "id": "list-minus",
    "codepoint": "e23e"
  },
  {
    "id": "list-music",
    "codepoint": "e2e0"
  },
  {
    "id": "list-ordered",
    "codepoint": "e1d1"
  },
  {
    "id": "list-plus",
    "codepoint": "e23f"
  },
  {
    "id": "list-restart",
    "codepoint": "e452"
  },
  {
    "id": "list-sort-ascending",
    "codepoint": "e702"
  },
  {
    "id": "list-sort-descending",
    "codepoint": "e703"
  },
  {
    "id": "list-start",
    "codepoint": "e2e1"
  },
  {
    "id": "list-todo",
    "codepoint": "e4c3"
  },
  {
    "id": "list-tree",
    "codepoint": "e408"
  },
  {
    "id": "list-video",
    "codepoint": "e2e2"
  },
  {
    "id": "list-x",
    "codepoint": "e240"
  },
  {
    "id": "loader",
    "codepoint": "e109"
  },
  {
    "id": "loader-2",
    "codepoint": "e10a"
  },
  {
    "id": "loader-circle",
    "codepoint": "e10a"
  },
  {
    "id": "loader-pinwheel",
    "codepoint": "e5e6"
  },
  {
    "id": "locate",
    "codepoint": "e1da"
  },
  {
    "id": "locate-fixed",
    "codepoint": "e1db"
  },
  {
    "id": "locate-off",
    "codepoint": "e282"
  },
  {
    "id": "location-edit",
    "codepoint": "e655"
  },
  {
    "id": "lock",
    "codepoint": "e10b"
  },
  {
    "id": "lock-keyhole",
    "codepoint": "e531"
  },
  {
    "id": "lock-keyhole-open",
    "codepoint": "e532"
  },
  {
    "id": "lock-open",
    "codepoint": "e10c"
  },
  {
    "id": "log-in",
    "codepoint": "e10d"
  },
  {
    "id": "log-out",
    "codepoint": "e10e"
  },
  {
    "id": "logs",
    "codepoint": "e5f4"
  },
  {
    "id": "lollipop",
    "codepoint": "e4bd"
  },
  {
    "id": "luggage",
    "codepoint": "e2ca"
  },
  {
    "id": "m-square",
    "codepoint": "e503"
  },
  {
    "id": "magnet",
    "codepoint": "e2b5"
  },
  {
    "id": "mail",
    "codepoint": "e10f"
  },
  {
    "id": "mail-check",
    "codepoint": "e361"
  },
  {
    "id": "mail-minus",
    "codepoint": "e362"
  },
  {
    "id": "mail-open",
    "codepoint": "e363"
  },
  {
    "id": "mail-plus",
    "codepoint": "e364"
  },
  {
    "id": "mail-question",
    "codepoint": "e365"
  },
  {
    "id": "mail-question-mark",
    "codepoint": "e365"
  },
  {
    "id": "mail-search",
    "codepoint": "e366"
  },
  {
    "id": "mail-warning",
    "codepoint": "e367"
  },
  {
    "id": "mail-x",
    "codepoint": "e368"
  },
  {
    "id": "mailbox",
    "codepoint": "e3d4"
  },
  {
    "id": "mails",
    "codepoint": "e369"
  },
  {
    "id": "map",
    "codepoint": "e110"
  },
  {
    "id": "map-minus",
    "codepoint": "e686"
  },
  {
    "id": "map-pin",
    "codepoint": "e111"
  },
  {
    "id": "map-pin-check",
    "codepoint": "e60f"
  },
  {
    "id": "map-pin-check-inside",
    "codepoint": "e610"
  },
  {
    "id": "map-pin-house",
    "codepoint": "e61c"
  },
  {
    "id": "map-pin-minus",
    "codepoint": "e611"
  },
  {
    "id": "map-pin-minus-inside",
    "codepoint": "e612"
  },
  {
    "id": "map-pin-off",
    "codepoint": "e2a6"
  },
  {
    "id": "map-pin-pen",
    "codepoint": "e655"
  },
  {
    "id": "map-pin-plus",
    "codepoint": "e613"
  },
  {
    "id": "map-pin-plus-inside",
    "codepoint": "e614"
  },
  {
    "id": "map-pin-search",
    "codepoint": "e6de"
  },
  {
    "id": "map-pin-x",
    "codepoint": "e615"
  },
  {
    "id": "map-pin-x-inside",
    "codepoint": "e616"
  },
  {
    "id": "map-pinned",
    "codepoint": "e53d"
  },
  {
    "id": "map-plus",
    "codepoint": "e63f"
  },
  {
    "id": "mars",
    "codepoint": "e641"
  },
  {
    "id": "mars-stroke",
    "codepoint": "e642"
  },
  {
    "id": "martini",
    "codepoint": "e2e3"
  },
  {
    "id": "maximize",
    "codepoint": "e112"
  },
  {
    "id": "maximize-2",
    "codepoint": "e113"
  },
  {
    "id": "medal",
    "codepoint": "e36f"
  },
  {
    "id": "megaphone",
    "codepoint": "e235"
  },
  {
    "id": "megaphone-off",
    "codepoint": "e370"
  },
  {
    "id": "meh",
    "codepoint": "e114"
  },
  {
    "id": "memory-stick",
    "codepoint": "e445"
  },
  {
    "id": "menu",
    "codepoint": "e115"
  },
  {
    "id": "menu-square",
    "codepoint": "e453"
  },
  {
    "id": "merge",
    "codepoint": "e43f"
  },
  {
    "id": "message-circle",
    "codepoint": "e116"
  },
  {
    "id": "message-circle-check",
    "codepoint": "e6ba"
  },
  {
    "id": "message-circle-code",
    "codepoint": "e562"
  },
  {
    "id": "message-circle-dashed",
    "codepoint": "e563"
  },
  {
    "id": "message-circle-heart",
    "codepoint": "e564"
  },
  {
    "id": "message-circle-more",
    "codepoint": "e565"
  },
  {
    "id": "message-circle-off",
    "codepoint": "e566"
  },
  {
    "id": "message-circle-plus",
    "codepoint": "e567"
  },
  {
    "id": "message-circle-question",
    "codepoint": "e568"
  },
  {
    "id": "message-circle-question-mark",
    "codepoint": "e568"
  },
  {
    "id": "message-circle-reply",
    "codepoint": "e569"
  },
  {
    "id": "message-circle-warning",
    "codepoint": "e56a"
  },
  {
    "id": "message-circle-x",
    "codepoint": "e56b"
  },
  {
    "id": "message-square",
    "codepoint": "e117"
  },
  {
    "id": "message-square-check",
    "codepoint": "e6bb"
  },
  {
    "id": "message-square-code",
    "codepoint": "e56c"
  },
  {
    "id": "message-square-dashed",
    "codepoint": "e40b"
  },
  {
    "id": "message-square-diff",
    "codepoint": "e56d"
  },
  {
    "id": "message-square-dot",
    "codepoint": "e56e"
  },
  {
    "id": "message-square-heart",
    "codepoint": "e56f"
  },
  {
    "id": "message-square-lock",
    "codepoint": "e62c"
  },
  {
    "id": "message-square-more",
    "codepoint": "e570"
  },
  {
    "id": "message-square-off",
    "codepoint": "e571"
  },
  {
    "id": "message-square-plus",
    "codepoint": "e40c"
  },
  {
    "id": "message-square-quote",
    "codepoint": "e572"
  },
  {
    "id": "message-square-reply",
    "codepoint": "e573"
  },
  {
    "id": "message-square-share",
    "codepoint": "e574"
  },
  {
    "id": "message-square-text",
    "codepoint": "e575"
  },
  {
    "id": "message-square-warning",
    "codepoint": "e576"
  },
  {
    "id": "message-square-x",
    "codepoint": "e577"
  },
  {
    "id": "messages-square",
    "codepoint": "e40d"
  },
  {
    "id": "metronome",
    "codepoint": "e6bc"
  },
  {
    "id": "mic",
    "codepoint": "e118"
  },
  {
    "id": "mic-2",
    "codepoint": "e349"
  },
  {
    "id": "mic-off",
    "codepoint": "e119"
  },
  {
    "id": "mic-vocal",
    "codepoint": "e349"
  },
  {
    "id": "microchip",
    "codepoint": "e61a"
  },
  {
    "id": "microscope",
    "codepoint": "e2e4"
  },
  {
    "id": "microwave",
    "codepoint": "e37a"
  },
  {
    "id": "milestone",
    "codepoint": "e298"
  },
  {
    "id": "milk",
    "codepoint": "e399"
  },
  {
    "id": "milk-off",
    "codepoint": "e39a"
  },
  {
    "id": "minimize",
    "codepoint": "e11a"
  },
  {
    "id": "minimize-2",
    "codepoint": "e11b"
  },
  {
    "id": "minus",
    "codepoint": "e11c"
  },
  {
    "id": "minus-circle",
    "codepoint": "e07e"
  },
  {
    "id": "minus-square",
    "codepoint": "e171"
  },
  {
    "id": "mirror-rectangular",
    "codepoint": "e6bd"
  },
  {
    "id": "mirror-round",
    "codepoint": "e6be"
  },
  {
    "id": "monitor",
    "codepoint": "e11d"
  },
  {
    "id": "monitor-check",
    "codepoint": "e482"
  },
  {
    "id": "monitor-cloud",
    "codepoint": "e699"
  },
  {
    "id": "monitor-cog",
    "codepoint": "e603"
  },
  {
    "id": "monitor-dot",
    "codepoint": "e483"
  },
  {
    "id": "monitor-down",
    "codepoint": "e421"
  },
  {
    "id": "monitor-off",
    "codepoint": "e1dc"
  },
  {
    "id": "monitor-pause",
    "codepoint": "e484"
  },
  {
    "id": "monitor-play",
    "codepoint": "e485"
  },
  {
    "id": "monitor-smartphone",
    "codepoint": "e3a2"
  },
  {
    "id": "monitor-speaker",
    "codepoint": "e210"
  },
  {
    "id": "monitor-stop",
    "codepoint": "e486"
  },
  {
    "id": "monitor-up",
    "codepoint": "e422"
  },
  {
    "id": "monitor-x",
    "codepoint": "e487"
  },
  {
    "id": "moon",
    "codepoint": "e11e"
  },
  {
    "id": "moon-star",
    "codepoint": "e410"
  },
  {
    "id": "more-horizontal",
    "codepoint": "e0b6"
  },
  {
    "id": "more-vertical",
    "codepoint": "e0b7"
  },
  {
    "id": "motorbike",
    "codepoint": "e698"
  },
  {
    "id": "mountain",
    "codepoint": "e231"
  },
  {
    "id": "mountain-snow",
    "codepoint": "e232"
  },
  {
    "id": "mouse",
    "codepoint": "e28e"
  },
  {
    "id": "mouse-left",
    "codepoint": "e6bf"
  },
  {
    "id": "mouse-off",
    "codepoint": "e5db"
  },
  {
    "id": "mouse-pointer",
    "codepoint": "e11f"
  },
  {
    "id": "mouse-pointer-2",
    "codepoint": "e1c3"
  },
  {
    "id": "mouse-pointer-2-off",
    "codepoint": "e6a6"
  },
  {
    "id": "mouse-pointer-ban",
    "codepoint": "e5e7"
  },
  {
    "id": "mouse-pointer-click",
    "codepoint": "e120"
  },
  {
    "id": "mouse-pointer-square-dashed",
    "codepoint": "e509"
  },
  {
    "id": "mouse-right",
    "codepoint": "e6c0"
  },
  {
    "id": "move",
    "codepoint": "e121"
  },
  {
    "id": "move-3-d",
    "codepoint": "e2e5"
  },
  {
    "id": "move-3d",
    "codepoint": "e2e5"
  },
  {
    "id": "move-diagonal",
    "codepoint": "e1c4"
  },
  {
    "id": "move-diagonal-2",
    "codepoint": "e1c5"
  },
  {
    "id": "move-down",
    "codepoint": "e48c"
  },
  {
    "id": "move-down-left",
    "codepoint": "e48d"
  },
  {
    "id": "move-down-right",
    "codepoint": "e48e"
  },
  {
    "id": "move-horizontal",
    "codepoint": "e1c6"
  },
  {
    "id": "move-left",
    "codepoint": "e48f"
  },
  {
    "id": "move-right",
    "codepoint": "e490"
  },
  {
    "id": "move-up",
    "codepoint": "e491"
  },
  {
    "id": "move-up-left",
    "codepoint": "e492"
  },
  {
    "id": "move-up-right",
    "codepoint": "e493"
  },
  {
    "id": "move-vertical",
    "codepoint": "e1c7"
  },
  {
    "id": "music",
    "codepoint": "e122"
  },
  {
    "id": "music-2",
    "codepoint": "e34a"
  },
  {
    "id": "music-3",
    "codepoint": "e34b"
  },
  {
    "id": "music-4",
    "codepoint": "e34c"
  },
  {
    "id": "navigation",
    "codepoint": "e123"
  },
  {
    "id": "navigation-2",
    "codepoint": "e124"
  },
  {
    "id": "navigation-2-off",
    "codepoint": "e2a7"
  },
  {
    "id": "navigation-off",
    "codepoint": "e2a8"
  },
  {
    "id": "network",
    "codepoint": "e125"
  },
  {
    "id": "newspaper",
    "codepoint": "e348"
  },
  {
    "id": "nfc",
    "codepoint": "e3c3"
  },
  {
    "id": "non-binary",
    "codepoint": "e643"
  },
  {
    "id": "notebook",
    "codepoint": "e595"
  },
  {
    "id": "notebook-pen",
    "codepoint": "e596"
  },
  {
    "id": "notebook-tabs",
    "codepoint": "e597"
  },
  {
    "id": "notebook-text",
    "codepoint": "e598"
  },
  {
    "id": "notepad-text",
    "codepoint": "e599"
  },
  {
    "id": "notepad-text-dashed",
    "codepoint": "e59a"
  },
  {
    "id": "nut",
    "codepoint": "e39b"
  },
  {
    "id": "nut-off",
    "codepoint": "e39c"
  },
  {
    "id": "octagon",
    "codepoint": "e126"
  },
  {
    "id": "octagon-alert",
    "codepoint": "e127"
  },
  {
    "id": "octagon-minus",
    "codepoint": "e627"
  },
  {
    "id": "octagon-pause",
    "codepoint": "e21b"
  },
  {
    "id": "octagon-x",
    "codepoint": "e128"
  },
  {
    "id": "omega",
    "codepoint": "e619"
  },
  {
    "id": "option",
    "codepoint": "e1f8"
  },
  {
    "id": "orbit",
    "codepoint": "e3e7"
  },
  {
    "id": "origami",
    "codepoint": "e5e3"
  },
  {
    "id": "outdent",
    "codepoint": "e107"
  },
  {
    "id": "package",
    "codepoint": "e129"
  },
  {
    "id": "package-2",
    "codepoint": "e340"
  },
  {
    "id": "package-check",
    "codepoint": "e266"
  },
  {
    "id": "package-minus",
    "codepoint": "e267"
  },
  {
    "id": "package-open",
    "codepoint": "e2cc"
  },
  {
    "id": "package-plus",
    "codepoint": "e268"
  },
  {
    "id": "package-search",
    "codepoint": "e269"
  },
  {
    "id": "package-x",
    "codepoint": "e26a"
  },
  {
    "id": "paint-bucket",
    "codepoint": "e2e6"
  },
  {
    "id": "paint-roller",
    "codepoint": "e59e"
  },
  {
    "id": "paintbrush",
    "codepoint": "e2e7"
  },
  {
    "id": "paintbrush-2",
    "codepoint": "e2e8"
  },
  {
    "id": "paintbrush-vertical",
    "codepoint": "e2e8"
  },
  {
    "id": "palette",
    "codepoint": "e1dd"
  },
  {
    "id": "palmtree",
    "codepoint": "e281"
  },
  {
    "id": "panda",
    "codepoint": "e668"
  },
  {
    "id": "panel-bottom",
    "codepoint": "e42c"
  },
  {
    "id": "panel-bottom-close",
    "codepoint": "e42d"
  },
  {
    "id": "panel-bottom-dashed",
    "codepoint": "e42e"
  },
  {
    "id": "panel-bottom-inactive",
    "codepoint": "e42e"
  },
  {
    "id": "panel-bottom-open",
    "codepoint": "e42f"
  },
  {
    "id": "panel-left",
    "codepoint": "e12a"
  },
  {
    "id": "panel-left-close",
    "codepoint": "e21c"
  },
  {
    "id": "panel-left-dashed",
    "codepoint": "e430"
  },
  {
    "id": "panel-left-inactive",
    "codepoint": "e430"
  },
  {
    "id": "panel-left-open",
    "codepoint": "e21d"
  },
  {
    "id": "panel-left-right-dashed",
    "codepoint": "e692"
  },
  {
    "id": "panel-right",
    "codepoint": "e431"
  },
  {
    "id": "panel-right-close",
    "codepoint": "e432"
  },
  {
    "id": "panel-right-dashed",
    "codepoint": "e433"
  },
  {
    "id": "panel-right-inactive",
    "codepoint": "e433"
  },
  {
    "id": "panel-right-open",
    "codepoint": "e434"
  },
  {
    "id": "panel-top",
    "codepoint": "e435"
  },
  {
    "id": "panel-top-bottom-dashed",
    "codepoint": "e693"
  },
  {
    "id": "panel-top-close",
    "codepoint": "e436"
  },
  {
    "id": "panel-top-dashed",
    "codepoint": "e437"
  },
  {
    "id": "panel-top-inactive",
    "codepoint": "e437"
  },
  {
    "id": "panel-top-open",
    "codepoint": "e438"
  },
  {
    "id": "panels-left-bottom",
    "codepoint": "e12b"
  },
  {
    "id": "panels-left-right",
    "codepoint": "e099"
  },
  {
    "id": "panels-right-bottom",
    "codepoint": "e588"
  },
  {
    "id": "panels-top-bottom",
    "codepoint": "e58a"
  },
  {
    "id": "panels-top-left",
    "codepoint": "e12c"
  },
  {
    "id": "paper-bag",
    "codepoint": "e71d"
  },
  {
    "id": "paperclip",
    "codepoint": "e12d"
  },
  {
    "id": "parasol",
    "codepoint": "e6fd"
  },
  {
    "id": "parentheses",
    "codepoint": "e444"
  },
  {
    "id": "parking-circle",
    "codepoint": "e3c9"
  },
  {
    "id": "parking-circle-off",
    "codepoint": "e3ca"
  },
  {
    "id": "parking-meter",
    "codepoint": "e500"
  },
  {
    "id": "parking-square",
    "codepoint": "e3cb"
  },
  {
    "id": "parking-square-off",
    "codepoint": "e3cc"
  },
  {
    "id": "party-popper",
    "codepoint": "e343"
  },
  {
    "id": "pause",
    "codepoint": "e12e"
  },
  {
    "id": "pause-circle",
    "codepoint": "e07f"
  },
  {
    "id": "pause-octagon",
    "codepoint": "e21b"
  },
  {
    "id": "paw-print",
    "codepoint": "e4f5"
  },
  {
    "id": "pc-case",
    "codepoint": "e446"
  },
  {
    "id": "pen",
    "codepoint": "e12f"
  },
  {
    "id": "pen-box",
    "codepoint": "e172"
  },
  {
    "id": "pen-line",
    "codepoint": "e130"
  },
  {
    "id": "pen-off",
    "codepoint": "e5ee"
  },
  {
    "id": "pen-square",
    "codepoint": "e172"
  },
  {
    "id": "pen-tool",
    "codepoint": "e131"
  },
  {
    "id": "pencil",
    "codepoint": "e1f9"
  },
  {
    "id": "pencil-line",
    "codepoint": "e4f0"
  },
  {
    "id": "pencil-off",
    "codepoint": "e5ef"
  },
  {
    "id": "pencil-ruler",
    "codepoint": "e4f1"
  },
  {
    "id": "pencil-sparkles",
    "codepoint": "e70f"
  },
  {
    "id": "pentagon",
    "codepoint": "e52b"
  },
  {
    "id": "percent",
    "codepoint": "e132"
  },
  {
    "id": "percent-circle",
    "codepoint": "e51a"
  },
  {
    "id": "percent-diamond",
    "codepoint": "e51b"
  },
  {
    "id": "percent-square",
    "codepoint": "e51c"
  },
  {
    "id": "person-standing",
    "codepoint": "e21e"
  },
  {
    "id": "phi",
    "codepoint": "e71c"
  },
  {
    "id": "philippine-peso",
    "codepoint": "e604"
  },
  {
    "id": "phone",
    "codepoint": "e133"
  },
  {
    "id": "phone-call",
    "codepoint": "e134"
  },
  {
    "id": "phone-forwarded",
    "codepoint": "e135"
  },
  {
    "id": "phone-incoming",
    "codepoint": "e136"
  },
  {
    "id": "phone-missed",
    "codepoint": "e137"
  },
  {
    "id": "phone-off",
    "codepoint": "e138"
  },
  {
    "id": "phone-outgoing",
    "codepoint": "e139"
  },
  {
    "id": "pi",
    "codepoint": "e472"
  },
  {
    "id": "pi-square",
    "codepoint": "e488"
  },
  {
    "id": "piano",
    "codepoint": "e561"
  },
  {
    "id": "pickaxe",
    "codepoint": "e5c6"
  },
  {
    "id": "picture-in-picture",
    "codepoint": "e3ae"
  },
  {
    "id": "picture-in-picture-2",
    "codepoint": "e3af"
  },
  {
    "id": "pie-chart",
    "codepoint": "e06b"
  },
  {
    "id": "piggy-bank",
    "codepoint": "e13a"
  },
  {
    "id": "pilcrow",
    "codepoint": "e3a3"
  },
  {
    "id": "pilcrow-left",
    "codepoint": "e5dc"
  },
  {
    "id": "pilcrow-right",
    "codepoint": "e5dd"
  },
  {
    "id": "pilcrow-square",
    "codepoint": "e48b"
  },
  {
    "id": "pill",
    "codepoint": "e3bd"
  },
  {
    "id": "pill-bottle",
    "codepoint": "e5ea"
  },
  {
    "id": "pin",
    "codepoint": "e259"
  },
  {
    "id": "pin-off",
    "codepoint": "e2b6"
  },
  {
    "id": "pipette",
    "codepoint": "e13b"
  },
  {
    "id": "pizza",
    "codepoint": "e354"
  },
  {
    "id": "plane",
    "codepoint": "e1de"
  },
  {
    "id": "plane-landing",
    "codepoint": "e3cd"
  },
  {
    "id": "plane-takeoff",
    "codepoint": "e3ce"
  },
  {
    "id": "play",
    "codepoint": "e13c"
  },
  {
    "id": "play-circle",
    "codepoint": "e080"
  },
  {
    "id": "play-off",
    "codepoint": "e6fe"
  },
  {
    "id": "play-square",
    "codepoint": "e481"
  },
  {
    "id": "plug",
    "codepoint": "e37f"
  },
  {
    "id": "plug-2",
    "codepoint": "e380"
  },
  {
    "id": "plug-zap",
    "codepoint": "e45c"
  },
  {
    "id": "plug-zap-2",
    "codepoint": "e45c"
  },
  {
    "id": "plus",
    "codepoint": "e13d"
  },
  {
    "id": "plus-circle",
    "codepoint": "e081"
  },
  {
    "id": "plus-square",
    "codepoint": "e173"
  },
  {
    "id": "pocket-knife",
    "codepoint": "e4a0"
  },
  {
    "id": "podcast",
    "codepoint": "e1fa"
  },
  {
    "id": "podium",
    "codepoint": "e704"
  },
  {
    "id": "pointer",
    "codepoint": "e1e8"
  },
  {
    "id": "pointer-off",
    "codepoint": "e57f"
  },
  {
    "id": "popcorn",
    "codepoint": "e4be"
  },
  {
    "id": "popsicle",
    "codepoint": "e4bf"
  },
  {
    "id": "pound-sterling",
    "codepoint": "e13f"
  },
  {
    "id": "power",
    "codepoint": "e140"
  },
  {
    "id": "power-circle",
    "codepoint": "e550"
  },
  {
    "id": "power-off",
    "codepoint": "e209"
  },
  {
    "id": "power-square",
    "codepoint": "e551"
  },
  {
    "id": "presentation",
    "codepoint": "e4ae"
  },
  {
    "id": "printer",
    "codepoint": "e141"
  },
  {
    "id": "printer-check",
    "codepoint": "e5f5"
  },
  {
    "id": "printer-x",
    "codepoint": "e6c1"
  },
  {
    "id": "projector",
    "codepoint": "e4af"
  },
  {
    "id": "proportions",
    "codepoint": "e5cf"
  },
  {
    "id": "puzzle",
    "codepoint": "e29c"
  },
  {
    "id": "pyramid",
    "codepoint": "e52c"
  },
  {
    "id": "qr-code",
    "codepoint": "e1df"
  },
  {
    "id": "quote",
    "codepoint": "e239"
  },
  {
    "id": "rabbit",
    "codepoint": "e4f6"
  },
  {
    "id": "radar",
    "codepoint": "e497"
  },
  {
    "id": "radiation",
    "codepoint": "e442"
  },
  {
    "id": "radical",
    "codepoint": "e5c2"
  },
  {
    "id": "radio",
    "codepoint": "e142"
  },
  {
    "id": "radio-off",
    "codepoint": "e6dd"
  },
  {
    "id": "radio-receiver",
    "codepoint": "e1fb"
  },
  {
    "id": "radio-tower",
    "codepoint": "e404"
  },
  {
    "id": "radius",
    "codepoint": "e52d"
  },
  {
    "id": "rainbow",
    "codepoint": "e4c2"
  },
  {
    "id": "rat",
    "codepoint": "e3eb"
  },
  {
    "id": "ratio",
    "codepoint": "e4e8"
  },
  {
    "id": "receipt",
    "codepoint": "e3d3"
  },
  {
    "id": "receipt-cent",
    "codepoint": "e5a5"
  },
  {
    "id": "receipt-euro",
    "codepoint": "e5a6"
  },
  {
    "id": "receipt-indian-rupee",
    "codepoint": "e5a7"
  },
  {
    "id": "receipt-japanese-yen",
    "codepoint": "e5a8"
  },
  {
    "id": "receipt-pound-sterling",
    "codepoint": "e5a9"
  },
  {
    "id": "receipt-russian-ruble",
    "codepoint": "e5aa"
  },
  {
    "id": "receipt-swiss-franc",
    "codepoint": "e5ab"
  },
  {
    "id": "receipt-text",
    "codepoint": "e5ac"
  },
  {
    "id": "receipt-turkish-lira",
    "codepoint": "e67f"
  },
  {
    "id": "rectangle-circle",
    "codepoint": "e673"
  },
  {
    "id": "rectangle-ellipsis",
    "codepoint": "e21f"
  },
  {
    "id": "rectangle-goggles",
    "codepoint": "e656"
  },
  {
    "id": "rectangle-horizontal",
    "codepoint": "e376"
  },
  {
    "id": "rectangle-vertical",
    "codepoint": "e377"
  },
  {
    "id": "recycle",
    "codepoint": "e2e9"
  },
  {
    "id": "redo",
    "codepoint": "e143"
  },
  {
    "id": "redo-2",
    "codepoint": "e2a0"
  },
  {
    "id": "redo-dot",
    "codepoint": "e450"
  },
  {
    "id": "refresh-ccw",
    "codepoint": "e144"
  },
  {
    "id": "refresh-ccw-dot",
    "codepoint": "e4b2"
  },
  {
    "id": "refresh-cw",
    "codepoint": "e145"
  },
  {
    "id": "refresh-cw-off",
    "codepoint": "e498"
  },
  {
    "id": "refrigerator",
    "codepoint": "e37b"
  },
  {
    "id": "regex",
    "codepoint": "e1fc"
  },
  {
    "id": "remove-formatting",
    "codepoint": "e3b3"
  },
  {
    "id": "repeat",
    "codepoint": "e146"
  },
  {
    "id": "repeat-1",
    "codepoint": "e1fd"
  },
  {
    "id": "repeat-2",
    "codepoint": "e411"
  },
  {
    "id": "repeat-off",
    "codepoint": "e6f3"
  },
  {
    "id": "replace",
    "codepoint": "e3db"
  },
  {
    "id": "replace-all",
    "codepoint": "e3dc"
  },
  {
    "id": "reply",
    "codepoint": "e22a"
  },
  {
    "id": "reply-all",
    "codepoint": "e22b"
  },
  {
    "id": "rewind",
    "codepoint": "e147"
  },
  {
    "id": "ribbon",
    "codepoint": "e558"
  },
  {
    "id": "road",
    "codepoint": "e6d9"
  },
  {
    "id": "rocket",
    "codepoint": "e286"
  },
  {
    "id": "rocking-chair",
    "codepoint": "e233"
  },
  {
    "id": "roller-coaster",
    "codepoint": "e480"
  },
  {
    "id": "rose",
    "codepoint": "e691"
  },
  {
    "id": "rotate-3-d",
    "codepoint": "e2ea"
  },
  {
    "id": "rotate-3d",
    "codepoint": "e2ea"
  },
  {
    "id": "rotate-ccw",
    "codepoint": "e148"
  },
  {
    "id": "rotate-ccw-key",
    "codepoint": "e650"
  },
  {
    "id": "rotate-ccw-square",
    "codepoint": "e5d0"
  },
  {
    "id": "rotate-cw",
    "codepoint": "e149"
  },
  {
    "id": "rotate-cw-square",
    "codepoint": "e5d1"
  },
  {
    "id": "route",
    "codepoint": "e53e"
  },
  {
    "id": "route-off",
    "codepoint": "e53f"
  },
  {
    "id": "router",
    "codepoint": "e3bf"
  },
  {
    "id": "rows",
    "codepoint": "e439"
  },
  {
    "id": "rows-2",
    "codepoint": "e439"
  },
  {
    "id": "rows-3",
    "codepoint": "e58a"
  },
  {
    "id": "rows-4",
    "codepoint": "e58b"
  },
  {
    "id": "rss",
    "codepoint": "e14a"
  },
  {
    "id": "ruler",
    "codepoint": "e14b"
  },
  {
    "id": "ruler-dimension-line",
    "codepoint": "e662"
  },
  {
    "id": "russian-ruble",
    "codepoint": "e14c"
  },
  {
    "id": "sailboat",
    "codepoint": "e37e"
  },
  {
    "id": "salad",
    "codepoint": "e3a8"
  },
  {
    "id": "sandwich",
    "codepoint": "e3a9"
  },
  {
    "id": "satellite",
    "codepoint": "e447"
  },
  {
    "id": "satellite-dish",
    "codepoint": "e448"
  },
  {
    "id": "saudi-riyal",
    "codepoint": "e64b"
  },
  {
    "id": "save",
    "codepoint": "e14d"
  },
  {
    "id": "save-all",
    "codepoint": "e40f"
  },
  {
    "id": "save-check",
    "codepoint": "e710"
  },
  {
    "id": "save-off",
    "codepoint": "e5f3"
  },
  {
    "id": "save-pen",
    "codepoint": "e705"
  },
  {
    "id": "save-plus",
    "codepoint": "e706"
  },
  {
    "id": "scale",
    "codepoint": "e212"
  },
  {
    "id": "scale-3-d",
    "codepoint": "e2eb"
  },
  {
    "id": "scale-3d",
    "codepoint": "e2eb"
  },
  {
    "id": "scaling",
    "codepoint": "e2ec"
  },
  {
    "id": "scan",
    "codepoint": "e257"
  },
  {
    "id": "scan-barcode",
    "codepoint": "e535"
  },
  {
    "id": "scan-box",
    "codepoint": "e720"
  },
  {
    "id": "scan-eye",
    "codepoint": "e536"
  },
  {
    "id": "scan-face",
    "codepoint": "e371"
  },
  {
    "id": "scan-heart",
    "codepoint": "e63a"
  },
  {
    "id": "scan-line",
    "codepoint": "e258"
  },
  {
    "id": "scan-qr-code",
    "codepoint": "e5f6"
  },
  {
    "id": "scan-search",
    "codepoint": "e537"
  },
  {
    "id": "scan-text",
    "codepoint": "e538"
  },
  {
    "id": "scatter-chart",
    "codepoint": "e48a"
  },
  {
    "id": "school",
    "codepoint": "e3e3"
  },
  {
    "id": "school-2",
    "codepoint": "e3e5"
  },
  {
    "id": "scissors",
    "codepoint": "e14e"
  },
  {
    "id": "scissors-line-dashed",
    "codepoint": "e4e9"
  },
  {
    "id": "scissors-square",
    "codepoint": "e4ec"
  },
  {
    "id": "scissors-square-dashed-bottom",
    "codepoint": "e4eb"
  },
  {
    "id": "scooter",
    "codepoint": "e6ac"
  },
  {
    "id": "screen-share",
    "codepoint": "e14f"
  },
  {
    "id": "screen-share-off",
    "codepoint": "e150"
  },
  {
    "id": "scroll",
    "codepoint": "e2ed"
  },
  {
    "id": "scroll-text",
    "codepoint": "e45f"
  },
  {
    "id": "search",
    "codepoint": "e151"
  },
  {
    "id": "search-alert",
    "codepoint": "e6e7"
  },
  {
    "id": "search-check",
    "codepoint": "e4aa"
  },
  {
    "id": "search-code",
    "codepoint": "e4ab"
  },
  {
    "id": "search-slash",
    "codepoint": "e4ac"
  },
  {
    "id": "search-x",
    "codepoint": "e4ad"
  },
  {
    "id": "section",
    "codepoint": "e5e8"
  },
  {
    "id": "send",
    "codepoint": "e152"
  },
  {
    "id": "send-horizonal",
    "codepoint": "e4f2"
  },
  {
    "id": "send-horizontal",
    "codepoint": "e4f2"
  },
  {
    "id": "send-to-back",
    "codepoint": "e4f3"
  },
  {
    "id": "separator-horizontal",
    "codepoint": "e1c8"
  },
  {
    "id": "separator-vertical",
    "codepoint": "e1c9"
  },
  {
    "id": "server",
    "codepoint": "e153"
  },
  {
    "id": "server-cog",
    "codepoint": "e341"
  },
  {
    "id": "server-crash",
    "codepoint": "e1e9"
  },
  {
    "id": "server-off",
    "codepoint": "e1ea"
  },
  {
    "id": "server-plus",
    "codepoint": "e721"
  },
  {
    "id": "settings",
    "codepoint": "e154"
  },
  {
    "id": "settings-2",
    "codepoint": "e245"
  },
  {
    "id": "shapes",
    "codepoint": "e4b3"
  },
  {
    "id": "share",
    "codepoint": "e155"
  },
  {
    "id": "share-2",
    "codepoint": "e156"
  },
  {
    "id": "sheet",
    "codepoint": "e157"
  },
  {
    "id": "shell",
    "codepoint": "e4f7"
  },
  {
    "id": "shelving-unit",
    "codepoint": "e6c2"
  },
  {
    "id": "shield",
    "codepoint": "e158"
  },
  {
    "id": "shield-alert",
    "codepoint": "e1fe"
  },
  {
    "id": "shield-ban",
    "codepoint": "e159"
  },
  {
    "id": "shield-check",
    "codepoint": "e1ff"
  },
  {
    "id": "shield-close",
    "codepoint": "e200"
  },
  {
    "id": "shield-cog",
    "codepoint": "e6e9"
  },
  {
    "id": "shield-cog-corner",
    "codepoint": "e6e8"
  },
  {
    "id": "shield-ellipsis",
    "codepoint": "e516"
  },
  {
    "id": "shield-half",
    "codepoint": "e517"
  },
  {
    "id": "shield-keyhole",
    "codepoint": "e722"
  },
  {
    "id": "shield-minus",
    "codepoint": "e518"
  },
  {
    "id": "shield-off",
    "codepoint": "e15a"
  },
  {
    "id": "shield-plus",
    "codepoint": "e519"
  },
  {
    "id": "shield-question",
    "codepoint": "e40e"
  },
  {
    "id": "shield-question-mark",
    "codepoint": "e40e"
  },
  {
    "id": "shield-user",
    "codepoint": "e647"
  },
  {
    "id": "shield-x",
    "codepoint": "e200"
  },
  {
    "id": "ship",
    "codepoint": "e3ba"
  },
  {
    "id": "ship-wheel",
    "codepoint": "e502"
  },
  {
    "id": "shirt",
    "codepoint": "e1ca"
  },
  {
    "id": "shopping-bag",
    "codepoint": "e15b"
  },
  {
    "id": "shopping-basket",
    "codepoint": "e4ea"
  },
  {
    "id": "shopping-cart",
    "codepoint": "e15c"
  },
  {
    "id": "shovel",
    "codepoint": "e15d"
  },
  {
    "id": "shower-head",
    "codepoint": "e37c"
  },
  {
    "id": "shredder",
    "codepoint": "e65b"
  },
  {
    "id": "shrimp",
    "codepoint": "e649"
  },
  {
    "id": "shrink",
    "codepoint": "e220"
  },
  {
    "id": "shrub",
    "codepoint": "e2ee"
  },
  {
    "id": "shuffle",
    "codepoint": "e15e"
  },
  {
    "id": "sidebar",
    "codepoint": "e12a"
  },
  {
    "id": "sidebar-close",
    "codepoint": "e21c"
  },
  {
    "id": "sidebar-open",
    "codepoint": "e21d"
  },
  {
    "id": "sigma",
    "codepoint": "e201"
  },
  {
    "id": "sigma-square",
    "codepoint": "e489"
  },
  {
    "id": "signal",
    "codepoint": "e25f"
  },
  {
    "id": "signal-high",
    "codepoint": "e260"
  },
  {
    "id": "signal-low",
    "codepoint": "e261"
  },
  {
    "id": "signal-medium",
    "codepoint": "e262"
  },
  {
    "id": "signal-zero",
    "codepoint": "e263"
  },
  {
    "id": "signature",
    "codepoint": "e5f2"
  },
  {
    "id": "signpost",
    "codepoint": "e540"
  },
  {
    "id": "signpost-big",
    "codepoint": "e541"
  },
  {
    "id": "siren",
    "codepoint": "e2ef"
  },
  {
    "id": "skip-back",
    "codepoint": "e15f"
  },
  {
    "id": "skip-forward",
    "codepoint": "e160"
  },
  {
    "id": "skull",
    "codepoint": "e221"
  },
  {
    "id": "slash",
    "codepoint": "e51d"
  },
  {
    "id": "slash-square",
    "codepoint": "e174"
  },
  {
    "id": "slice",
    "codepoint": "e2f0"
  },
  {
    "id": "sliders",
    "codepoint": "e162"
  },
  {
    "id": "sliders-horizontal",
    "codepoint": "e29a"
  },
  {
    "id": "sliders-vertical",
    "codepoint": "e162"
  },
  {
    "id": "smartphone",
    "codepoint": "e163"
  },
  {
    "id": "smartphone-charging",
    "codepoint": "e22e"
  },
  {
    "id": "smartphone-nfc",
    "codepoint": "e3c4"
  },
  {
    "id": "smile",
    "codepoint": "e164"
  },
  {
    "id": "smile-plus",
    "codepoint": "e301"
  },
  {
    "id": "snail",
    "codepoint": "e4f8"
  },
  {
    "id": "snowflake",
    "codepoint": "e165"
  },
  {
    "id": "soap-dispenser-droplet",
    "codepoint": "e669"
  },
  {
    "id": "sofa",
    "codepoint": "e2c4"
  },
  {
    "id": "solar-panel",
    "codepoint": "e69f"
  },
  {
    "id": "sort-asc",
    "codepoint": "e04c"
  },
  {
    "id": "sort-desc",
    "codepoint": "e047"
  },
  {
    "id": "soup",
    "codepoint": "e3aa"
  },
  {
    "id": "space",
    "codepoint": "e3dd"
  },
  {
    "id": "spade",
    "codepoint": "e499"
  },
  {
    "id": "sparkle",
    "codepoint": "e47e"
  },
  {
    "id": "sparkles",
    "codepoint": "e412"
  },
  {
    "id": "speaker",
    "codepoint": "e166"
  },
  {
    "id": "speech",
    "codepoint": "e51e"
  },
  {
    "id": "spell-check",
    "codepoint": "e49a"
  },
  {
    "id": "spell-check-2",
    "codepoint": "e49b"
  },
  {
    "id": "spline",
    "codepoint": "e38b"
  },
  {
    "id": "spline-pointer",
    "codepoint": "e64f"
  },
  {
    "id": "split",
    "codepoint": "e440"
  },
  {
    "id": "split-square-horizontal",
    "codepoint": "e3b6"
  },
  {
    "id": "split-square-vertical",
    "codepoint": "e3b7"
  },
  {
    "id": "spool",
    "codepoint": "e677"
  },
  {
    "id": "sport-shoe",
    "codepoint": "e6db"
  },
  {
    "id": "spotlight",
    "codepoint": "e682"
  },
  {
    "id": "spray-can",
    "codepoint": "e495"
  },
  {
    "id": "sprout",
    "codepoint": "e1eb"
  },
  {
    "id": "square",
    "codepoint": "e167"
  },
  {
    "id": "square-activity",
    "codepoint": "e4b4"
  },
  {
    "id": "square-arrow-down",
    "codepoint": "e427"
  },
  {
    "id": "square-arrow-down-left",
    "codepoint": "e4b5"
  },
  {
    "id": "square-arrow-down-right",
    "codepoint": "e4b6"
  },
  {
    "id": "square-arrow-left",
    "codepoint": "e428"
  },
  {
    "id": "square-arrow-out-down-left",
    "codepoint": "e5a1"
  },
  {
    "id": "square-arrow-out-down-right",
    "codepoint": "e5a2"
  },
  {
    "id": "square-arrow-out-up-left",
    "codepoint": "e5a3"
  },
  {
    "id": "square-arrow-out-up-right",
    "codepoint": "e5a4"
  },
  {
    "id": "square-arrow-right",
    "codepoint": "e429"
  },
  {
    "id": "square-arrow-right-enter",
    "codepoint": "e6c3"
  },
  {
    "id": "square-arrow-right-exit",
    "codepoint": "e6c4"
  },
  {
    "id": "square-arrow-up",
    "codepoint": "e42a"
  },
  {
    "id": "square-arrow-up-left",
    "codepoint": "e4b7"
  },
  {
    "id": "square-arrow-up-right",
    "codepoint": "e4b8"
  },
  {
    "id": "square-asterisk",
    "codepoint": "e168"
  },
  {
    "id": "square-bottom-dashed-scissors",
    "codepoint": "e4eb"
  },
  {
    "id": "square-centerline-dashed-horizontal",
    "codepoint": "e6c5"
  },
  {
    "id": "square-centerline-dashed-vertical",
    "codepoint": "e6c6"
  },
  {
    "id": "square-chart-gantt",
    "codepoint": "e169"
  },
  {
    "id": "square-check",
    "codepoint": "e559"
  },
  {
    "id": "square-check-big",
    "codepoint": "e16a"
  },
  {
    "id": "square-chevron-down",
    "codepoint": "e3cf"
  },
  {
    "id": "square-chevron-left",
    "codepoint": "e3d0"
  },
  {
    "id": "square-chevron-right",
    "codepoint": "e3d1"
  },
  {
    "id": "square-chevron-up",
    "codepoint": "e3d2"
  },
  {
    "id": "square-code",
    "codepoint": "e16b"
  },
  {
    "id": "square-dashed",
    "codepoint": "e1cb"
  },
  {
    "id": "square-dashed-bottom",
    "codepoint": "e4c0"
  },
  {
    "id": "square-dashed-bottom-code",
    "codepoint": "e4c1"
  },
  {
    "id": "square-dashed-kanban",
    "codepoint": "e16c"
  },
  {
    "id": "square-dashed-mouse-pointer",
    "codepoint": "e509"
  },
  {
    "id": "square-dashed-text",
    "codepoint": "e6ea"
  },
  {
    "id": "square-dashed-top-solid",
    "codepoint": "e66c"
  },
  {
    "id": "square-divide",
    "codepoint": "e16d"
  },
  {
    "id": "square-dot",
    "codepoint": "e16e"
  },
  {
    "id": "square-equal",
    "codepoint": "e16f"
  },
  {
    "id": "square-function",
    "codepoint": "e22d"
  },
  {
    "id": "square-gantt-chart",
    "codepoint": "e169"
  },
  {
    "id": "square-kanban",
    "codepoint": "e170"
  },
  {
    "id": "square-library",
    "codepoint": "e54f"
  },
  {
    "id": "square-m",
    "codepoint": "e503"
  },
  {
    "id": "square-menu",
    "codepoint": "e453"
  },
  {
    "id": "square-minus",
    "codepoint": "e171"
  },
  {
    "id": "square-mouse-pointer",
    "codepoint": "e202"
  },
  {
    "id": "square-parking",
    "codepoint": "e3cb"
  },
  {
    "id": "square-parking-off",
    "codepoint": "e3cc"
  },
  {
    "id": "square-pause",
    "codepoint": "e684"
  },
  {
    "id": "square-pen",
    "codepoint": "e172"
  },
  {
    "id": "square-percent",
    "codepoint": "e51c"
  },
  {
    "id": "square-pi",
    "codepoint": "e488"
  },
  {
    "id": "square-pilcrow",
    "codepoint": "e48b"
  },
  {
    "id": "square-play",
    "codepoint": "e481"
  },
  {
    "id": "square-plus",
    "codepoint": "e173"
  },
  {
    "id": "square-power",
    "codepoint": "e551"
  },
  {
    "id": "square-radical",
    "codepoint": "e5c3"
  },
  {
    "id": "square-round-corner",
    "codepoint": "e648"
  },
  {
    "id": "square-scissors",
    "codepoint": "e4ec"
  },
  {
    "id": "square-sigma",
    "codepoint": "e489"
  },
  {
    "id": "square-slash",
    "codepoint": "e174"
  },
  {
    "id": "square-split-horizontal",
    "codepoint": "e3b6"
  },
  {
    "id": "square-split-vertical",
    "codepoint": "e3b7"
  },
  {
    "id": "square-square",
    "codepoint": "e60e"
  },
  {
    "id": "square-stack",
    "codepoint": "e4a2"
  },
  {
    "id": "square-star",
    "codepoint": "e68e"
  },
  {
    "id": "square-stop",
    "codepoint": "e685"
  },
  {
    "id": "square-terminal",
    "codepoint": "e20a"
  },
  {
    "id": "square-user",
    "codepoint": "e465"
  },
  {
    "id": "square-user-round",
    "codepoint": "e466"
  },
  {
    "id": "square-x",
    "codepoint": "e175"
  },
  {
    "id": "squares-exclude",
    "codepoint": "e657"
  },
  {
    "id": "squares-intersect",
    "codepoint": "e658"
  },
  {
    "id": "squares-subtract",
    "codepoint": "e659"
  },
  {
    "id": "squares-unite",
    "codepoint": "e65a"
  },
  {
    "id": "squircle",
    "codepoint": "e57a"
  },
  {
    "id": "squircle-dashed",
    "codepoint": "e679"
  },
  {
    "id": "squirrel",
    "codepoint": "e49f"
  },
  {
    "id": "stamp",
    "codepoint": "e3bb"
  },
  {
    "id": "star",
    "codepoint": "e176"
  },
  {
    "id": "star-check",
    "codepoint": "e707"
  },
  {
    "id": "star-half",
    "codepoint": "e20b"
  },
  {
    "id": "star-minus",
    "codepoint": "e708"
  },
  {
    "id": "star-off",
    "codepoint": "e2b0"
  },
  {
    "id": "star-plus",
    "codepoint": "e709"
  },
  {
    "id": "star-x",
    "codepoint": "e70a"
  },
  {
    "id": "stars",
    "codepoint": "e412"
  },
  {
    "id": "step-back",
    "codepoint": "e3e9"
  },
  {
    "id": "step-forward",
    "codepoint": "e3ea"
  },
  {
    "id": "stethoscope",
    "codepoint": "e2f1"
  },
  {
    "id": "sticker",
    "codepoint": "e302"
  },
  {
    "id": "sticky-note",
    "codepoint": "e303"
  },
  {
    "id": "sticky-note-check",
    "codepoint": "e6f6"
  },
  {
    "id": "sticky-note-minus",
    "codepoint": "e6f7"
  },
  {
    "id": "sticky-note-off",
    "codepoint": "e6f8"
  },
  {
    "id": "sticky-note-plus",
    "codepoint": "e6f9"
  },
  {
    "id": "sticky-note-x",
    "codepoint": "e6fa"
  },
  {
    "id": "sticky-notes",
    "codepoint": "e6fb"
  },
  {
    "id": "stone",
    "codepoint": "e6eb"
  },
  {
    "id": "stop-circle",
    "codepoint": "e083"
  },
  {
    "id": "store",
    "codepoint": "e3e4"
  },
  {
    "id": "stretch-horizontal",
    "codepoint": "e27c"
  },
  {
    "id": "stretch-vertical",
    "codepoint": "e27d"
  },
  {
    "id": "strikethrough",
    "codepoint": "e177"
  },
  {
    "id": "subscript",
    "codepoint": "e25c"
  },
  {
    "id": "subtitles",
    "codepoint": "e3a4"
  },
  {
    "id": "summary",
    "codepoint": "e711"
  },
  {
    "id": "sun",
    "codepoint": "e178"
  },
  {
    "id": "sun-dim",
    "codepoint": "e299"
  },
  {
    "id": "sun-medium",
    "codepoint": "e2b1"
  },
  {
    "id": "sun-moon",
    "codepoint": "e2b2"
  },
  {
    "id": "sun-snow",
    "codepoint": "e372"
  },
  {
    "id": "sunrise",
    "codepoint": "e179"
  },
  {
    "id": "sunset",
    "codepoint": "e17a"
  },
  {
    "id": "superscript",
    "codepoint": "e25e"
  },
  {
    "id": "swatch-book",
    "codepoint": "e59f"
  },
  {
    "id": "swiss-franc",
    "codepoint": "e17b"
  },
  {
    "id": "switch-camera",
    "codepoint": "e17c"
  },
  {
    "id": "sword",
    "codepoint": "e2b3"
  },
  {
    "id": "swords",
    "codepoint": "e2b4"
  },
  {
    "id": "syringe",
    "codepoint": "e2f2"
  },
  {
    "id": "table",
    "codepoint": "e17d"
  },
  {
    "id": "table-2",
    "codepoint": "e2f9"
  },
  {
    "id": "table-cells-merge",
    "codepoint": "e5c7"
  },
  {
    "id": "table-cells-split",
    "codepoint": "e5c8"
  },
  {
    "id": "table-columns-split",
    "codepoint": "e5c9"
  },
  {
    "id": "table-config",
    "codepoint": "e661"
  },
  {
    "id": "table-of-contents",
    "codepoint": "e61e"
  },
  {
    "id": "table-properties",
    "codepoint": "e4db"
  },
  {
    "id": "table-rows-split",
    "codepoint": "e5ca"
  },
  {
    "id": "tablet",
    "codepoint": "e17e"
  },
  {
    "id": "tablet-smartphone",
    "codepoint": "e50a"
  },
  {
    "id": "tablets",
    "codepoint": "e3be"
  },
  {
    "id": "tag",
    "codepoint": "e17f"
  },
  {
    "id": "tag-plus",
    "codepoint": "e712"
  },
  {
    "id": "tag-x",
    "codepoint": "e713"
  },
  {
    "id": "tags",
    "codepoint": "e35c"
  },
  {
    "id": "tally-1",
    "codepoint": "e4d6"
  },
  {
    "id": "tally-2",
    "codepoint": "e4d7"
  },
  {
    "id": "tally-3",
    "codepoint": "e4d8"
  },
  {
    "id": "tally-4",
    "codepoint": "e4d9"
  },
  {
    "id": "tally-5",
    "codepoint": "e4da"
  },
  {
    "id": "tangent",
    "codepoint": "e52e"
  },
  {
    "id": "target",
    "codepoint": "e180"
  },
  {
    "id": "telescope",
    "codepoint": "e5c5"
  },
  {
    "id": "tent",
    "codepoint": "e227"
  },
  {
    "id": "tent-tree",
    "codepoint": "e53b"
  },
  {
    "id": "terminal",
    "codepoint": "e181"
  },
  {
    "id": "terminal-square",
    "codepoint": "e20a"
  },
  {
    "id": "test-tube",
    "codepoint": "e405"
  },
  {
    "id": "test-tube-2",
    "codepoint": "e406"
  },
  {
    "id": "test-tube-diagonal",
    "codepoint": "e406"
  },
  {
    "id": "test-tubes",
    "codepoint": "e407"
  },
  {
    "id": "text",
    "codepoint": "e185"
  },
  {
    "id": "text-align-center",
    "codepoint": "e182"
  },
  {
    "id": "text-align-end",
    "codepoint": "e183"
  },
  {
    "id": "text-align-justify",
    "codepoint": "e184"
  },
  {
    "id": "text-align-start",
    "codepoint": "e185"
  },
  {
    "id": "text-cursor",
    "codepoint": "e264"
  },
  {
    "id": "text-cursor-input",
    "codepoint": "e265"
  },
  {
    "id": "text-initial",
    "codepoint": "e605"
  },
  {
    "id": "text-quote",
    "codepoint": "e49e"
  },
  {
    "id": "text-search",
    "codepoint": "e5ad"
  },
  {
    "id": "text-select",
    "codepoint": "e6ea"
  },
  {
    "id": "text-selection",
    "codepoint": "e3de"
  },
  {
    "id": "text-wrap",
    "codepoint": "e248"
  },
  {
    "id": "theater",
    "codepoint": "e522"
  },
  {
    "id": "thermometer",
    "codepoint": "e186"
  },
  {
    "id": "thermometer-snowflake",
    "codepoint": "e187"
  },
  {
    "id": "thermometer-sun",
    "codepoint": "e188"
  },
  {
    "id": "thumbs-down",
    "codepoint": "e189"
  },
  {
    "id": "thumbs-up",
    "codepoint": "e18a"
  },
  {
    "id": "ticket",
    "codepoint": "e20f"
  },
  {
    "id": "ticket-check",
    "codepoint": "e5ae"
  },
  {
    "id": "ticket-minus",
    "codepoint": "e5af"
  },
  {
    "id": "ticket-percent",
    "codepoint": "e5b0"
  },
  {
    "id": "ticket-plus",
    "codepoint": "e5b1"
  },
  {
    "id": "ticket-slash",
    "codepoint": "e5b2"
  },
  {
    "id": "ticket-x",
    "codepoint": "e5b3"
  },
  {
    "id": "tickets",
    "codepoint": "e622"
  },
  {
    "id": "tickets-plane",
    "codepoint": "e623"
  },
  {
    "id": "timeline",
    "codepoint": "e6ec"
  },
  {
    "id": "timer",
    "codepoint": "e1e0"
  },
  {
    "id": "timer-off",
    "codepoint": "e249"
  },
  {
    "id": "timer-reset",
    "codepoint": "e236"
  },
  {
    "id": "toggle-left",
    "codepoint": "e18b"
  },
  {
    "id": "toggle-right",
    "codepoint": "e18c"
  },
  {
    "id": "toilet",
    "codepoint": "e635"
  },
  {
    "id": "tool-case",
    "codepoint": "e67d"
  },
  {
    "id": "toolbox",
    "codepoint": "e6b0"
  },
  {
    "id": "tornado",
    "codepoint": "e218"
  },
  {
    "id": "torus",
    "codepoint": "e52f"
  },
  {
    "id": "touchpad",
    "codepoint": "e449"
  },
  {
    "id": "touchpad-off",
    "codepoint": "e44a"
  },
  {
    "id": "towel-rack",
    "codepoint": "e6c7"
  },
  {
    "id": "tower-control",
    "codepoint": "e3bc"
  },
  {
    "id": "toy-brick",
    "codepoint": "e347"
  },
  {
    "id": "tractor",
    "codepoint": "e504"
  },
  {
    "id": "traffic-cone",
    "codepoint": "e505"
  },
  {
    "id": "train",
    "codepoint": "e2a9"
  },
  {
    "id": "train-front",
    "codepoint": "e506"
  },
  {
    "id": "train-front-tunnel",
    "codepoint": "e507"
  },
  {
    "id": "train-track",
    "codepoint": "e508"
  },
  {
    "id": "tram-front",
    "codepoint": "e2a9"
  },
  {
    "id": "transgender",
    "codepoint": "e644"
  },
  {
    "id": "trash",
    "codepoint": "e18d"
  },
  {
    "id": "trash-2",
    "codepoint": "e18e"
  },
  {
    "id": "tree-deciduous",
    "codepoint": "e2f3"
  },
  {
    "id": "tree-palm",
    "codepoint": "e281"
  },
  {
    "id": "tree-pine",
    "codepoint": "e2f4"
  },
  {
    "id": "trees",
    "codepoint": "e2f5"
  },
  {
    "id": "trending-down",
    "codepoint": "e190"
  },
  {
    "id": "trending-up",
    "codepoint": "e191"
  },
  {
    "id": "trending-up-down",
    "codepoint": "e625"
  },
  {
    "id": "triangle",
    "codepoint": "e192"
  },
  {
    "id": "triangle-alert",
    "codepoint": "e193"
  },
  {
    "id": "triangle-dashed",
    "codepoint": "e63d"
  },
  {
    "id": "triangle-right",
    "codepoint": "e4ed"
  },
  {
    "id": "trophy",
    "codepoint": "e373"
  },
  {
    "id": "truck",
    "codepoint": "e194"
  },
  {
    "id": "truck-electric",
    "codepoint": "e65f"
  },
  {
    "id": "turkish-lira",
    "codepoint": "e680"
  },
  {
    "id": "turntable",
    "codepoint": "e68c"
  },
  {
    "id": "turtle",
    "codepoint": "e4f9"
  },
  {
    "id": "tv",
    "codepoint": "e195"
  },
  {
    "id": "tv-2",
    "codepoint": "e203"
  },
  {
    "id": "tv-minimal",
    "codepoint": "e203"
  },
  {
    "id": "tv-minimal-play",
    "codepoint": "e5ec"
  },
  {
    "id": "type",
    "codepoint": "e198"
  },
  {
    "id": "type-outline",
    "codepoint": "e602"
  },
  {
    "id": "umbrella",
    "codepoint": "e199"
  },
  {
    "id": "umbrella-off",
    "codepoint": "e543"
  },
  {
    "id": "underline",
    "codepoint": "e19a"
  },
  {
    "id": "undo",
    "codepoint": "e19b"
  },
  {
    "id": "undo-2",
    "codepoint": "e2a1"
  },
  {
    "id": "undo-dot",
    "codepoint": "e451"
  },
  {
    "id": "unfold-horizontal",
    "codepoint": "e43d"
  },
  {
    "id": "unfold-vertical",
    "codepoint": "e43e"
  },
  {
    "id": "ungroup",
    "codepoint": "e467"
  },
  {
    "id": "university",
    "codepoint": "e3e5"
  },
  {
    "id": "unlink",
    "codepoint": "e19c"
  },
  {
    "id": "unlink-2",
    "codepoint": "e19d"
  },
  {
    "id": "unlock",
    "codepoint": "e10c"
  },
  {
    "id": "unlock-keyhole",
    "codepoint": "e532"
  },
  {
    "id": "unplug",
    "codepoint": "e45d"
  },
  {
    "id": "upload",
    "codepoint": "e19e"
  },
  {
    "id": "upload-cloud",
    "codepoint": "e091"
  },
  {
    "id": "usb",
    "codepoint": "e356"
  },
  {
    "id": "user",
    "codepoint": "e19f"
  },
  {
    "id": "user-2",
    "codepoint": "e468"
  },
  {
    "id": "user-check",
    "codepoint": "e1a0"
  },
  {
    "id": "user-check-2",
    "codepoint": "e469"
  },
  {
    "id": "user-circle",
    "codepoint": "e461"
  },
  {
    "id": "user-circle-2",
    "codepoint": "e462"
  },
  {
    "id": "user-cog",
    "codepoint": "e342"
  },
  {
    "id": "user-cog-2",
    "codepoint": "e46a"
  },
  {
    "id": "user-key",
    "codepoint": "e6c8"
  },
  {
    "id": "user-lock",
    "codepoint": "e660"
  },
  {
    "id": "user-minus",
    "codepoint": "e1a1"
  },
  {
    "id": "user-minus-2",
    "codepoint": "e46b"
  },
  {
    "id": "user-pen",
    "codepoint": "e5fc"
  },
  {
    "id": "user-plus",
    "codepoint": "e1a2"
  },
  {
    "id": "user-plus-2",
    "codepoint": "e46c"
  },
  {
    "id": "user-round",
    "codepoint": "e468"
  },
  {
    "id": "user-round-arrow-left",
    "codepoint": "e714"
  },
  {
    "id": "user-round-check",
    "codepoint": "e469"
  },
  {
    "id": "user-round-cog",
    "codepoint": "e46a"
  },
  {
    "id": "user-round-key",
    "codepoint": "e6c9"
  },
  {
    "id": "user-round-minus",
    "codepoint": "e46b"
  },
  {
    "id": "user-round-pen",
    "codepoint": "e5fd"
  },
  {
    "id": "user-round-plus",
    "codepoint": "e46c"
  },
  {
    "id": "user-round-search",
    "codepoint": "e578"
  },
  {
    "id": "user-round-x",
    "codepoint": "e46d"
  },
  {
    "id": "user-search",
    "codepoint": "e579"
  },
  {
    "id": "user-square",
    "codepoint": "e465"
  },
  {
    "id": "user-square-2",
    "codepoint": "e466"
  },
  {
    "id": "user-star",
    "codepoint": "e687"
  },
  {
    "id": "user-x",
    "codepoint": "e1a3"
  },
  {
    "id": "user-x-2",
    "codepoint": "e46d"
  },
  {
    "id": "users",
    "codepoint": "e1a4"
  },
  {
    "id": "users-2",
    "codepoint": "e46e"
  },
  {
    "id": "users-round",
    "codepoint": "e46e"
  },
  {
    "id": "utensils",
    "codepoint": "e2f6"
  },
  {
    "id": "utensils-crossed",
    "codepoint": "e2f7"
  },
  {
    "id": "utility-pole",
    "codepoint": "e3c2"
  },
  {
    "id": "van",
    "codepoint": "e6ad"
  },
  {
    "id": "variable",
    "codepoint": "e473"
  },
  {
    "id": "vault",
    "codepoint": "e58f"
  },
  {
    "id": "vector-square",
    "codepoint": "e67c"
  },
  {
    "id": "vegan",
    "codepoint": "e39d"
  },
  {
    "id": "venetian-mask",
    "codepoint": "e2aa"
  },
  {
    "id": "venus",
    "codepoint": "e645"
  },
  {
    "id": "venus-and-mars",
    "codepoint": "e646"
  },
  {
    "id": "verified",
    "codepoint": "e241"
  },
  {
    "id": "vibrate",
    "codepoint": "e223"
  },
  {
    "id": "vibrate-off",
    "codepoint": "e29d"
  },
  {
    "id": "video",
    "codepoint": "e1a5"
  },
  {
    "id": "video-off",
    "codepoint": "e1a6"
  },
  {
    "id": "videotape",
    "codepoint": "e4cb"
  },
  {
    "id": "view",
    "codepoint": "e1a7"
  },
  {
    "id": "voicemail",
    "codepoint": "e1a8"
  },
  {
    "id": "volleyball",
    "codepoint": "e62f"
  },
  {
    "id": "volume",
    "codepoint": "e1a9"
  },
  {
    "id": "volume-1",
    "codepoint": "e1aa"
  },
  {
    "id": "volume-2",
    "codepoint": "e1ab"
  },
  {
    "id": "volume-off",
    "codepoint": "e626"
  },
  {
    "id": "volume-x",
    "codepoint": "e1ac"
  },
  {
    "id": "vote",
    "codepoint": "e3ad"
  },
  {
    "id": "wallet",
    "codepoint": "e204"
  },
  {
    "id": "wallet-2",
    "codepoint": "e4cd"
  },
  {
    "id": "wallet-cards",
    "codepoint": "e4cc"
  },
  {
    "id": "wallet-minimal",
    "codepoint": "e4cd"
  },
  {
    "id": "wallpaper",
    "codepoint": "e44b"
  },
  {
    "id": "wand",
    "codepoint": "e246"
  },
  {
    "id": "wand-2",
    "codepoint": "e357"
  },
  {
    "id": "wand-sparkles",
    "codepoint": "e357"
  },
  {
    "id": "warehouse",
    "codepoint": "e3e6"
  },
  {
    "id": "washing-machine",
    "codepoint": "e590"
  },
  {
    "id": "watch",
    "codepoint": "e1ad"
  },
  {
    "id": "waves",
    "codepoint": "e283"
  },
  {
    "id": "waves-arrow-down",
    "codepoint": "e6a9"
  },
  {
    "id": "waves-arrow-up",
    "codepoint": "e6aa"
  },
  {
    "id": "waves-horizontal",
    "codepoint": "e283"
  },
  {
    "id": "waves-ladder",
    "codepoint": "e63b"
  },
  {
    "id": "waves-vertical",
    "codepoint": "e6f2"
  },
  {
    "id": "waypoints",
    "codepoint": "e542"
  },
  {
    "id": "webcam",
    "codepoint": "e205"
  },
  {
    "id": "webcam-off",
    "codepoint": "e6ff"
  },
  {
    "id": "webhook",
    "codepoint": "e374"
  },
  {
    "id": "webhook-off",
    "codepoint": "e5b7"
  },
  {
    "id": "weight",
    "codepoint": "e530"
  },
  {
    "id": "weight-tilde",
    "codepoint": "e6ae"
  },
  {
    "id": "wheat",
    "codepoint": "e39e"
  },
  {
    "id": "wheat-off",
    "codepoint": "e39f"
  },
  {
    "id": "whole-word",
    "codepoint": "e3df"
  },
  {
    "id": "wifi",
    "codepoint": "e1ae"
  },
  {
    "id": "wifi-cog",
    "codepoint": "e674"
  },
  {
    "id": "wifi-high",
    "codepoint": "e5f7"
  },
  {
    "id": "wifi-low",
    "codepoint": "e5f8"
  },
  {
    "id": "wifi-off",
    "codepoint": "e1af"
  },
  {
    "id": "wifi-pen",
    "codepoint": "e663"
  },
  {
    "id": "wifi-sync",
    "codepoint": "e681"
  },
  {
    "id": "wifi-zero",
    "codepoint": "e5f9"
  },
  {
    "id": "wind",
    "codepoint": "e1b0"
  },
  {
    "id": "wind-arrow-down",
    "codepoint": "e631"
  },
  {
    "id": "wine",
    "codepoint": "e2f8"
  },
  {
    "id": "wine-off",
    "codepoint": "e3a0"
  },
  {
    "id": "workflow",
    "codepoint": "e425"
  },
  {
    "id": "worm",
    "codepoint": "e5da"
  },
  {
    "id": "wrap-text",
    "codepoint": "e248"
  },
  {
    "id": "wrench",
    "codepoint": "e1b1"
  },
  {
    "id": "wrench-off",
    "codepoint": "e70b"
  },
  {
    "id": "x",
    "codepoint": "e1b2"
  },
  {
    "id": "x-circle",
    "codepoint": "e084"
  },
  {
    "id": "x-line-top",
    "codepoint": "e6ca"
  },
  {
    "id": "x-octagon",
    "codepoint": "e128"
  },
  {
    "id": "x-square",
    "codepoint": "e175"
  },
  {
    "id": "zap",
    "codepoint": "e1b4"
  },
  {
    "id": "zap-off",
    "codepoint": "e1b5"
  },
  {
    "id": "zodiac-aquarius",
    "codepoint": "e6cb"
  },
  {
    "id": "zodiac-aries",
    "codepoint": "e6cc"
  },
  {
    "id": "zodiac-cancer",
    "codepoint": "e6cd"
  },
  {
    "id": "zodiac-capricorn",
    "codepoint": "e6ce"
  },
  {
    "id": "zodiac-gemini",
    "codepoint": "e6cf"
  },
  {
    "id": "zodiac-leo",
    "codepoint": "e6d0"
  },
  {
    "id": "zodiac-libra",
    "codepoint": "e6d1"
  },
  {
    "id": "zodiac-ophiuchus",
    "codepoint": "e6d2"
  },
  {
    "id": "zodiac-pisces",
    "codepoint": "e6d3"
  },
  {
    "id": "zodiac-sagittarius",
    "codepoint": "e6d4"
  },
  {
    "id": "zodiac-scorpio",
    "codepoint": "e6d5"
  },
  {
    "id": "zodiac-taurus",
    "codepoint": "e6d6"
  },
  {
    "id": "zodiac-virgo",
    "codepoint": "e6d7"
  },
  {
    "id": "zoom-in",
    "codepoint": "e1b6"
  },
  {
    "id": "zoom-out",
    "codepoint": "e1b7"
  }
];
var TABLER_ICONS = [
  {
    "id": "12-hours",
    "codepoint": "fc53"
  },
  {
    "id": "123",
    "codepoint": "f554"
  },
  {
    "id": "24-hours",
    "codepoint": "f5e7"
  },
  {
    "id": "2fa",
    "codepoint": "eca0"
  },
  {
    "id": "360",
    "codepoint": "f62f"
  },
  {
    "id": "360-view",
    "codepoint": "f566"
  },
  {
    "id": "3d-cube-sphere",
    "codepoint": "ecd7"
  },
  {
    "id": "3d-cube-sphere-off",
    "codepoint": "f3b5"
  },
  {
    "id": "3d-rotate",
    "codepoint": "f020"
  },
  {
    "id": "a-b",
    "codepoint": "ec36"
  },
  {
    "id": "a-b-2",
    "codepoint": "f25f"
  },
  {
    "id": "a-b-off",
    "codepoint": "f0a6"
  },
  {
    "id": "abacus",
    "codepoint": "f05c"
  },
  {
    "id": "abacus-off",
    "codepoint": "f3b6"
  },
  {
    "id": "abc",
    "codepoint": "f567"
  },
  {
    "id": "access-point",
    "codepoint": "ed1b"
  },
  {
    "id": "access-point-off",
    "codepoint": "ed1a"
  },
  {
    "id": "accessible",
    "codepoint": "eba9"
  },
  {
    "id": "accessible-off",
    "codepoint": "f0a7"
  },
  {
    "id": "acorn",
    "codepoint": "10255"
  },
  {
    "id": "acrobatic",
    "codepoint": "10254"
  },
  {
    "id": "activity",
    "codepoint": "ed23"
  },
  {
    "id": "activity-heartbeat",
    "codepoint": "f0db"
  },
  {
    "id": "ad",
    "codepoint": "ea02"
  },
  {
    "id": "ad-2",
    "codepoint": "ef1f"
  },
  {
    "id": "ad-circle",
    "codepoint": "f79e"
  },
  {
    "id": "ad-circle-off",
    "codepoint": "f79d"
  },
  {
    "id": "ad-off",
    "codepoint": "f3b7"
  },
  {
    "id": "address-book",
    "codepoint": "f021"
  },
  {
    "id": "address-book-off",
    "codepoint": "f3b8"
  },
  {
    "id": "adjustments",
    "codepoint": "ea03"
  },
  {
    "id": "adjustments-alt",
    "codepoint": "ec37"
  },
  {
    "id": "adjustments-bolt",
    "codepoint": "f7fb"
  },
  {
    "id": "adjustments-cancel",
    "codepoint": "f7fc"
  },
  {
    "id": "adjustments-check",
    "codepoint": "f7fd"
  },
  {
    "id": "adjustments-code",
    "codepoint": "f7fe"
  },
  {
    "id": "adjustments-cog",
    "codepoint": "f7ff"
  },
  {
    "id": "adjustments-dollar",
    "codepoint": "f800"
  },
  {
    "id": "adjustments-down",
    "codepoint": "f801"
  },
  {
    "id": "adjustments-exclamation",
    "codepoint": "f802"
  },
  {
    "id": "adjustments-heart",
    "codepoint": "f803"
  },
  {
    "id": "adjustments-horizontal",
    "codepoint": "ec38"
  },
  {
    "id": "adjustments-minus",
    "codepoint": "f804"
  },
  {
    "id": "adjustments-off",
    "codepoint": "f0a8"
  },
  {
    "id": "adjustments-pause",
    "codepoint": "f805"
  },
  {
    "id": "adjustments-pin",
    "codepoint": "f806"
  },
  {
    "id": "adjustments-plus",
    "codepoint": "f807"
  },
  {
    "id": "adjustments-question",
    "codepoint": "f808"
  },
  {
    "id": "adjustments-search",
    "codepoint": "f809"
  },
  {
    "id": "adjustments-share",
    "codepoint": "f80a"
  },
  {
    "id": "adjustments-spark",
    "codepoint": "ffbe"
  },
  {
    "id": "adjustments-star",
    "codepoint": "f80b"
  },
  {
    "id": "adjustments-up",
    "codepoint": "f80c"
  },
  {
    "id": "adjustments-x",
    "codepoint": "f80d"
  },
  {
    "id": "aerial-lift",
    "codepoint": "edfe"
  },
  {
    "id": "affiliate",
    "codepoint": "edff"
  },
  {
    "id": "ai",
    "codepoint": "fee7"
  },
  {
    "id": "ai-agent",
    "codepoint": "101f9"
  },
  {
    "id": "ai-agents",
    "codepoint": "101f8"
  },
  {
    "id": "ai-gateway",
    "codepoint": "101f7"
  },
  {
    "id": "air-balloon",
    "codepoint": "f4a6"
  },
  {
    "id": "air-conditioning",
    "codepoint": "f3a2"
  },
  {
    "id": "air-conditioning-disabled",
    "codepoint": "f542"
  },
  {
    "id": "air-traffic-control",
    "codepoint": "fb01"
  },
  {
    "id": "alarm",
    "codepoint": "ea04"
  },
  {
    "id": "alarm-average",
    "codepoint": "fc9e"
  },
  {
    "id": "alarm-minus",
    "codepoint": "f630"
  },
  {
    "id": "alarm-off",
    "codepoint": "f0a9"
  },
  {
    "id": "alarm-plus",
    "codepoint": "f631"
  },
  {
    "id": "alarm-smoke",
    "codepoint": "100b6"
  },
  {
    "id": "alarm-snooze",
    "codepoint": "f632"
  },
  {
    "id": "album",
    "codepoint": "f022"
  },
  {
    "id": "album-off",
    "codepoint": "f3b9"
  },
  {
    "id": "alert-circle",
    "codepoint": "ea05"
  },
  {
    "id": "alert-circle-off",
    "codepoint": "fc65"
  },
  {
    "id": "alert-hexagon",
    "codepoint": "f80e"
  },
  {
    "id": "alert-hexagon-off",
    "codepoint": "fc66"
  },
  {
    "id": "alert-octagon",
    "codepoint": "ecc6"
  },
  {
    "id": "alert-small",
    "codepoint": "f80f"
  },
  {
    "id": "alert-small-off",
    "codepoint": "fc67"
  },
  {
    "id": "alert-square",
    "codepoint": "f811"
  },
  {
    "id": "alert-square-rounded",
    "codepoint": "f810"
  },
  {
    "id": "alert-square-rounded-off",
    "codepoint": "fc68"
  },
  {
    "id": "alert-triangle",
    "codepoint": "ea06"
  },
  {
    "id": "alert-triangle-off",
    "codepoint": "fc69"
  },
  {
    "id": "alien",
    "codepoint": "ebde"
  },
  {
    "id": "align-box-bottom-center",
    "codepoint": "f530"
  },
  {
    "id": "align-box-bottom-left",
    "codepoint": "f531"
  },
  {
    "id": "align-box-bottom-right",
    "codepoint": "f532"
  },
  {
    "id": "align-box-center-bottom",
    "codepoint": "facb"
  },
  {
    "id": "align-box-center-middle",
    "codepoint": "f79f"
  },
  {
    "id": "align-box-center-stretch",
    "codepoint": "facc"
  },
  {
    "id": "align-box-center-top",
    "codepoint": "facd"
  },
  {
    "id": "align-box-left-bottom",
    "codepoint": "f533"
  },
  {
    "id": "align-box-left-middle",
    "codepoint": "f534"
  },
  {
    "id": "align-box-left-stretch",
    "codepoint": "face"
  },
  {
    "id": "align-box-left-top",
    "codepoint": "f535"
  },
  {
    "id": "align-box-right-bottom",
    "codepoint": "f536"
  },
  {
    "id": "align-box-right-middle",
    "codepoint": "f537"
  },
  {
    "id": "align-box-right-stretch",
    "codepoint": "facf"
  },
  {
    "id": "align-box-right-top",
    "codepoint": "f538"
  },
  {
    "id": "align-box-top-center",
    "codepoint": "f539"
  },
  {
    "id": "align-box-top-left",
    "codepoint": "f53a"
  },
  {
    "id": "align-box-top-right",
    "codepoint": "f53b"
  },
  {
    "id": "align-center",
    "codepoint": "ea07"
  },
  {
    "id": "align-justified",
    "codepoint": "ea08"
  },
  {
    "id": "align-left",
    "codepoint": "ea09"
  },
  {
    "id": "align-left-2",
    "codepoint": "ff00"
  },
  {
    "id": "align-right",
    "codepoint": "ea0a"
  },
  {
    "id": "align-right-2",
    "codepoint": "feff"
  },
  {
    "id": "alpha",
    "codepoint": "f543"
  },
  {
    "id": "alphabet-arabic",
    "codepoint": "ff2f"
  },
  {
    "id": "alphabet-bangla",
    "codepoint": "ff2e"
  },
  {
    "id": "alphabet-cyrillic",
    "codepoint": "f1df"
  },
  {
    "id": "alphabet-greek",
    "codepoint": "f1e0"
  },
  {
    "id": "alphabet-hebrew",
    "codepoint": "ff2d"
  },
  {
    "id": "alphabet-korean",
    "codepoint": "ff2c"
  },
  {
    "id": "alphabet-latin",
    "codepoint": "f1e1"
  },
  {
    "id": "alphabet-polish",
    "codepoint": "101b1"
  },
  {
    "id": "alphabet-runes",
    "codepoint": "101b0"
  },
  {
    "id": "alphabet-thai",
    "codepoint": "ff2b"
  },
  {
    "id": "alt",
    "codepoint": "fc54"
  },
  {
    "id": "ambulance",
    "codepoint": "ebf5"
  },
  {
    "id": "ampersand",
    "codepoint": "f229"
  },
  {
    "id": "analyze",
    "codepoint": "f3a3"
  },
  {
    "id": "analyze-off",
    "codepoint": "f3ba"
  },
  {
    "id": "anchor",
    "codepoint": "eb76"
  },
  {
    "id": "anchor-off",
    "codepoint": "f0f7"
  },
  {
    "id": "angle",
    "codepoint": "ef20"
  },
  {
    "id": "ankh",
    "codepoint": "f1cd"
  },
  {
    "id": "antenna",
    "codepoint": "f094"
  },
  {
    "id": "antenna-bars-1",
    "codepoint": "ecc7"
  },
  {
    "id": "antenna-bars-2",
    "codepoint": "ecc8"
  },
  {
    "id": "antenna-bars-3",
    "codepoint": "ecc9"
  },
  {
    "id": "antenna-bars-4",
    "codepoint": "ecca"
  },
  {
    "id": "antenna-bars-5",
    "codepoint": "eccb"
  },
  {
    "id": "antenna-bars-off",
    "codepoint": "f0aa"
  },
  {
    "id": "antenna-off",
    "codepoint": "f3bb"
  },
  {
    "id": "aperture",
    "codepoint": "eb58"
  },
  {
    "id": "aperture-off",
    "codepoint": "f3bc"
  },
  {
    "id": "api",
    "codepoint": "effd"
  },
  {
    "id": "api-app",
    "codepoint": "effc"
  },
  {
    "id": "api-app-off",
    "codepoint": "f0ab"
  },
  {
    "id": "api-book",
    "codepoint": "1020b"
  },
  {
    "id": "api-off",
    "codepoint": "f0f8"
  },
  {
    "id": "app-window",
    "codepoint": "efe6"
  },
  {
    "id": "app-window-bottom",
    "codepoint": "10278"
  },
  {
    "id": "app-window-bottom-left",
    "codepoint": "1027a"
  },
  {
    "id": "app-window-bottom-right",
    "codepoint": "10279"
  },
  {
    "id": "app-window-center",
    "codepoint": "10277"
  },
  {
    "id": "apple",
    "codepoint": "ef21"
  },
  {
    "id": "apps",
    "codepoint": "ebb6"
  },
  {
    "id": "apps-off",
    "codepoint": "f0ac"
  },
  {
    "id": "archery-arrow",
    "codepoint": "fc55"
  },
  {
    "id": "archive",
    "codepoint": "ea0b"
  },
  {
    "id": "archive-off",
    "codepoint": "f0ad"
  },
  {
    "id": "armchair",
    "codepoint": "ef9e"
  },
  {
    "id": "armchair-2",
    "codepoint": "efe7"
  },
  {
    "id": "armchair-2-off",
    "codepoint": "f3bd"
  },
  {
    "id": "armchair-off",
    "codepoint": "f3be"
  },
  {
    "id": "arrow-autofit-content",
    "codepoint": "ef31"
  },
  {
    "id": "arrow-autofit-down",
    "codepoint": "ef32"
  },
  {
    "id": "arrow-autofit-height",
    "codepoint": "ef33"
  },
  {
    "id": "arrow-autofit-left",
    "codepoint": "ef34"
  },
  {
    "id": "arrow-autofit-right",
    "codepoint": "ef35"
  },
  {
    "id": "arrow-autofit-up",
    "codepoint": "ef36"
  },
  {
    "id": "arrow-autofit-width",
    "codepoint": "ef37"
  },
  {
    "id": "arrow-back",
    "codepoint": "ea0c"
  },
  {
    "id": "arrow-back-up",
    "codepoint": "eb77"
  },
  {
    "id": "arrow-back-up-double",
    "codepoint": "f9ec"
  },
  {
    "id": "arrow-badge-down",
    "codepoint": "f60b"
  },
  {
    "id": "arrow-badge-left",
    "codepoint": "f60c"
  },
  {
    "id": "arrow-badge-right",
    "codepoint": "f60d"
  },
  {
    "id": "arrow-badge-up",
    "codepoint": "f60e"
  },
  {
    "id": "arrow-bar-both",
    "codepoint": "fadd"
  },
  {
    "id": "arrow-bar-down",
    "codepoint": "ea0d"
  },
  {
    "id": "arrow-bar-left",
    "codepoint": "ea0e"
  },
  {
    "id": "arrow-bar-right",
    "codepoint": "ea0f"
  },
  {
    "id": "arrow-bar-to-down",
    "codepoint": "ec88"
  },
  {
    "id": "arrow-bar-to-down-dashed",
    "codepoint": "10164"
  },
  {
    "id": "arrow-bar-to-left",
    "codepoint": "ec89"
  },
  {
    "id": "arrow-bar-to-left-dashed",
    "codepoint": "10163"
  },
  {
    "id": "arrow-bar-to-right",
    "codepoint": "ec8a"
  },
  {
    "id": "arrow-bar-to-right-dashed",
    "codepoint": "10162"
  },
  {
    "id": "arrow-bar-to-up",
    "codepoint": "ec8b"
  },
  {
    "id": "arrow-bar-to-up-dashed",
    "codepoint": "10161"
  },
  {
    "id": "arrow-bar-up",
    "codepoint": "ea10"
  },
  {
    "id": "arrow-bear-left",
    "codepoint": "f045"
  },
  {
    "id": "arrow-bear-left-2",
    "codepoint": "f044"
  },
  {
    "id": "arrow-bear-right",
    "codepoint": "f047"
  },
  {
    "id": "arrow-bear-right-2",
    "codepoint": "f046"
  },
  {
    "id": "arrow-big-down",
    "codepoint": "edda"
  },
  {
    "id": "arrow-big-down-line",
    "codepoint": "efe8"
  },
  {
    "id": "arrow-big-down-lines",
    "codepoint": "efe9"
  },
  {
    "id": "arrow-big-left",
    "codepoint": "eddb"
  },
  {
    "id": "arrow-big-left-line",
    "codepoint": "efea"
  },
  {
    "id": "arrow-big-left-lines",
    "codepoint": "efeb"
  },
  {
    "id": "arrow-big-right",
    "codepoint": "eddc"
  },
  {
    "id": "arrow-big-right-line",
    "codepoint": "efec"
  },
  {
    "id": "arrow-big-right-lines",
    "codepoint": "efed"
  },
  {
    "id": "arrow-big-up",
    "codepoint": "eddd"
  },
  {
    "id": "arrow-big-up-line",
    "codepoint": "efee"
  },
  {
    "id": "arrow-big-up-lines",
    "codepoint": "efef"
  },
  {
    "id": "arrow-bounce",
    "codepoint": "f3a4"
  },
  {
    "id": "arrow-capsule",
    "codepoint": "fade"
  },
  {
    "id": "arrow-curve-left",
    "codepoint": "f048"
  },
  {
    "id": "arrow-curve-right",
    "codepoint": "f049"
  },
  {
    "id": "arrow-down",
    "codepoint": "ea16"
  },
  {
    "id": "arrow-down-bar",
    "codepoint": "ed98"
  },
  {
    "id": "arrow-down-circle",
    "codepoint": "ea11"
  },
  {
    "id": "arrow-down-dashed",
    "codepoint": "1006a"
  },
  {
    "id": "arrow-down-from-arc",
    "codepoint": "fd86"
  },
  {
    "id": "arrow-down-left",
    "codepoint": "ea13"
  },
  {
    "id": "arrow-down-left-circle",
    "codepoint": "ea12"
  },
  {
    "id": "arrow-down-rhombus",
    "codepoint": "f61d"
  },
  {
    "id": "arrow-down-right",
    "codepoint": "ea15"
  },
  {
    "id": "arrow-down-right-circle",
    "codepoint": "ea14"
  },
  {
    "id": "arrow-down-square",
    "codepoint": "ed9a"
  },
  {
    "id": "arrow-down-tail",
    "codepoint": "ed9b"
  },
  {
    "id": "arrow-down-to-arc",
    "codepoint": "fd87"
  },
  {
    "id": "arrow-elbow-left",
    "codepoint": "f9ed"
  },
  {
    "id": "arrow-elbow-right",
    "codepoint": "f9ee"
  },
  {
    "id": "arrow-fork",
    "codepoint": "f04a"
  },
  {
    "id": "arrow-fork-triple",
    "codepoint": "10276"
  },
  {
    "id": "arrow-forward",
    "codepoint": "ea17"
  },
  {
    "id": "arrow-forward-up",
    "codepoint": "eb78"
  },
  {
    "id": "arrow-forward-up-double",
    "codepoint": "f9ef"
  },
  {
    "id": "arrow-guide",
    "codepoint": "f22a"
  },
  {
    "id": "arrow-iteration",
    "codepoint": "f578"
  },
  {
    "id": "arrow-left",
    "codepoint": "ea19"
  },
  {
    "id": "arrow-left-bar",
    "codepoint": "ed9c"
  },
  {
    "id": "arrow-left-circle",
    "codepoint": "ea18"
  },
  {
    "id": "arrow-left-dashed",
    "codepoint": "10069"
  },
  {
    "id": "arrow-left-from-arc",
    "codepoint": "fd88"
  },
  {
    "id": "arrow-left-rhombus",
    "codepoint": "f61e"
  },
  {
    "id": "arrow-left-right",
    "codepoint": "f04b"
  },
  {
    "id": "arrow-left-square",
    "codepoint": "ed9d"
  },
  {
    "id": "arrow-left-tail",
    "codepoint": "ed9e"
  },
  {
    "id": "arrow-left-to-arc",
    "codepoint": "fd89"
  },
  {
    "id": "arrow-loop-left",
    "codepoint": "ed9f"
  },
  {
    "id": "arrow-loop-left-2",
    "codepoint": "f04c"
  },
  {
    "id": "arrow-loop-right",
    "codepoint": "eda0"
  },
  {
    "id": "arrow-loop-right-2",
    "codepoint": "f04d"
  },
  {
    "id": "arrow-merge",
    "codepoint": "f04e"
  },
  {
    "id": "arrow-merge-alt-left",
    "codepoint": "fc9f"
  },
  {
    "id": "arrow-merge-alt-right",
    "codepoint": "fca0"
  },
  {
    "id": "arrow-merge-both",
    "codepoint": "f23b"
  },
  {
    "id": "arrow-merge-left",
    "codepoint": "f23c"
  },
  {
    "id": "arrow-merge-right",
    "codepoint": "f23d"
  },
  {
    "id": "arrow-move-down",
    "codepoint": "f2ba"
  },
  {
    "id": "arrow-move-left",
    "codepoint": "f2bb"
  },
  {
    "id": "arrow-move-right",
    "codepoint": "f2bc"
  },
  {
    "id": "arrow-move-up",
    "codepoint": "f2bd"
  },
  {
    "id": "arrow-narrow-down",
    "codepoint": "ea1a"
  },
  {
    "id": "arrow-narrow-down-dashed",
    "codepoint": "10068"
  },
  {
    "id": "arrow-narrow-left",
    "codepoint": "ea1b"
  },
  {
    "id": "arrow-narrow-left-dashed",
    "codepoint": "10067"
  },
  {
    "id": "arrow-narrow-right",
    "codepoint": "ea1c"
  },
  {
    "id": "arrow-narrow-right-dashed",
    "codepoint": "10066"
  },
  {
    "id": "arrow-narrow-up",
    "codepoint": "ea1d"
  },
  {
    "id": "arrow-narrow-up-dashed",
    "codepoint": "10065"
  },
  {
    "id": "arrow-ramp-left",
    "codepoint": "ed3c"
  },
  {
    "id": "arrow-ramp-left-2",
    "codepoint": "f04f"
  },
  {
    "id": "arrow-ramp-left-3",
    "codepoint": "f050"
  },
  {
    "id": "arrow-ramp-right",
    "codepoint": "ed3d"
  },
  {
    "id": "arrow-ramp-right-2",
    "codepoint": "f051"
  },
  {
    "id": "arrow-ramp-right-3",
    "codepoint": "f052"
  },
  {
    "id": "arrow-right",
    "codepoint": "ea1f"
  },
  {
    "id": "arrow-right-bar",
    "codepoint": "eda1"
  },
  {
    "id": "arrow-right-circle",
    "codepoint": "ea1e"
  },
  {
    "id": "arrow-right-dashed",
    "codepoint": "10064"
  },
  {
    "id": "arrow-right-from-arc",
    "codepoint": "fd8a"
  },
  {
    "id": "arrow-right-rhombus",
    "codepoint": "f61f"
  },
  {
    "id": "arrow-right-square",
    "codepoint": "eda2"
  },
  {
    "id": "arrow-right-tail",
    "codepoint": "eda3"
  },
  {
    "id": "arrow-right-to-arc",
    "codepoint": "fd8b"
  },
  {
    "id": "arrow-rotary-first-left",
    "codepoint": "f053"
  },
  {
    "id": "arrow-rotary-first-right",
    "codepoint": "f054"
  },
  {
    "id": "arrow-rotary-last-left",
    "codepoint": "f055"
  },
  {
    "id": "arrow-rotary-last-right",
    "codepoint": "f056"
  },
  {
    "id": "arrow-rotary-left",
    "codepoint": "f057"
  },
  {
    "id": "arrow-rotary-right",
    "codepoint": "f058"
  },
  {
    "id": "arrow-rotary-straight",
    "codepoint": "f059"
  },
  {
    "id": "arrow-roundabout-left",
    "codepoint": "f22b"
  },
  {
    "id": "arrow-roundabout-right",
    "codepoint": "f22c"
  },
  {
    "id": "arrow-sharp-turn-left",
    "codepoint": "f05a"
  },
  {
    "id": "arrow-sharp-turn-right",
    "codepoint": "f05b"
  },
  {
    "id": "arrow-up",
    "codepoint": "ea25"
  },
  {
    "id": "arrow-up-bar",
    "codepoint": "eda4"
  },
  {
    "id": "arrow-up-circle",
    "codepoint": "ea20"
  },
  {
    "id": "arrow-up-dashed",
    "codepoint": "10063"
  },
  {
    "id": "arrow-up-from-arc",
    "codepoint": "fd8c"
  },
  {
    "id": "arrow-up-left",
    "codepoint": "ea22"
  },
  {
    "id": "arrow-up-left-circle",
    "codepoint": "ea21"
  },
  {
    "id": "arrow-up-rhombus",
    "codepoint": "f620"
  },
  {
    "id": "arrow-up-right",
    "codepoint": "ea24"
  },
  {
    "id": "arrow-up-right-circle",
    "codepoint": "ea23"
  },
  {
    "id": "arrow-up-square",
    "codepoint": "eda6"
  },
  {
    "id": "arrow-up-tail",
    "codepoint": "eda7"
  },
  {
    "id": "arrow-up-to-arc",
    "codepoint": "fd8d"
  },
  {
    "id": "arrow-wave-left-down",
    "codepoint": "eda8"
  },
  {
    "id": "arrow-wave-left-up",
    "codepoint": "eda9"
  },
  {
    "id": "arrow-wave-right-down",
    "codepoint": "edaa"
  },
  {
    "id": "arrow-wave-right-up",
    "codepoint": "edab"
  },
  {
    "id": "arrow-zig-zag",
    "codepoint": "f4a7"
  },
  {
    "id": "arrows-cross",
    "codepoint": "effe"
  },
  {
    "id": "arrows-diagonal",
    "codepoint": "ea27"
  },
  {
    "id": "arrows-diagonal-2",
    "codepoint": "ea26"
  },
  {
    "id": "arrows-diagonal-minimize",
    "codepoint": "ef39"
  },
  {
    "id": "arrows-diagonal-minimize-2",
    "codepoint": "ef38"
  },
  {
    "id": "arrows-diff",
    "codepoint": "f296"
  },
  {
    "id": "arrows-double-ne-sw",
    "codepoint": "edde"
  },
  {
    "id": "arrows-double-nw-se",
    "codepoint": "eddf"
  },
  {
    "id": "arrows-double-se-nw",
    "codepoint": "ede0"
  },
  {
    "id": "arrows-double-sw-ne",
    "codepoint": "ede1"
  },
  {
    "id": "arrows-down",
    "codepoint": "edad"
  },
  {
    "id": "arrows-down-up",
    "codepoint": "edac"
  },
  {
    "id": "arrows-exchange",
    "codepoint": "f1f4"
  },
  {
    "id": "arrows-exchange-2",
    "codepoint": "f1f3"
  },
  {
    "id": "arrows-horizontal",
    "codepoint": "eb59"
  },
  {
    "id": "arrows-join",
    "codepoint": "edaf"
  },
  {
    "id": "arrows-join-2",
    "codepoint": "edae"
  },
  {
    "id": "arrows-left",
    "codepoint": "edb1"
  },
  {
    "id": "arrows-left-down",
    "codepoint": "ee00"
  },
  {
    "id": "arrows-left-right",
    "codepoint": "edb0"
  },
  {
    "id": "arrows-maximize",
    "codepoint": "ea28"
  },
  {
    "id": "arrows-minimize",
    "codepoint": "ea29"
  },
  {
    "id": "arrows-move",
    "codepoint": "f22f"
  },
  {
    "id": "arrows-move-horizontal",
    "codepoint": "f22d"
  },
  {
    "id": "arrows-move-vertical",
    "codepoint": "f22e"
  },
  {
    "id": "arrows-random",
    "codepoint": "f095"
  },
  {
    "id": "arrows-right",
    "codepoint": "edb3"
  },
  {
    "id": "arrows-right-down",
    "codepoint": "ee01"
  },
  {
    "id": "arrows-right-left",
    "codepoint": "edb2"
  },
  {
    "id": "arrows-shuffle",
    "codepoint": "f000"
  },
  {
    "id": "arrows-shuffle-2",
    "codepoint": "efff"
  },
  {
    "id": "arrows-sort",
    "codepoint": "eb5a"
  },
  {
    "id": "arrows-split",
    "codepoint": "edb5"
  },
  {
    "id": "arrows-split-2",
    "codepoint": "edb4"
  },
  {
    "id": "arrows-transfer-down",
    "codepoint": "f2cc"
  },
  {
    "id": "arrows-transfer-up",
    "codepoint": "f2cd"
  },
  {
    "id": "arrows-transfer-up-down",
    "codepoint": "ffac"
  },
  {
    "id": "arrows-up",
    "codepoint": "edb7"
  },
  {
    "id": "arrows-up-down",
    "codepoint": "edb6"
  },
  {
    "id": "arrows-up-left",
    "codepoint": "ee02"
  },
  {
    "id": "arrows-up-right",
    "codepoint": "ee03"
  },
  {
    "id": "arrows-vertical",
    "codepoint": "eb5b"
  },
  {
    "id": "artboard",
    "codepoint": "ea2a"
  },
  {
    "id": "artboard-off",
    "codepoint": "f0ae"
  },
  {
    "id": "article",
    "codepoint": "f1e2"
  },
  {
    "id": "article-off",
    "codepoint": "f3bf"
  },
  {
    "id": "aspect-ratio",
    "codepoint": "ed30"
  },
  {
    "id": "aspect-ratio-off",
    "codepoint": "f0af"
  },
  {
    "id": "assembly",
    "codepoint": "f24d"
  },
  {
    "id": "assembly-off",
    "codepoint": "f3c0"
  },
  {
    "id": "asset",
    "codepoint": "f1ce"
  },
  {
    "id": "asterisk",
    "codepoint": "efd5"
  },
  {
    "id": "asterisk-simple",
    "codepoint": "efd4"
  },
  {
    "id": "at",
    "codepoint": "ea2b"
  },
  {
    "id": "at-off",
    "codepoint": "f0b0"
  },
  {
    "id": "atom",
    "codepoint": "eb79"
  },
  {
    "id": "atom-2",
    "codepoint": "ebdf"
  },
  {
    "id": "atom-off",
    "codepoint": "f0f9"
  },
  {
    "id": "augmented-reality",
    "codepoint": "f023"
  },
  {
    "id": "augmented-reality-2",
    "codepoint": "f37e"
  },
  {
    "id": "augmented-reality-off",
    "codepoint": "f3c1"
  },
  {
    "id": "auth-2fa",
    "codepoint": "eca0"
  },
  {
    "id": "automatic-gearbox",
    "codepoint": "fc89"
  },
  {
    "id": "automation",
    "codepoint": "fef8"
  },
  {
    "id": "avocado",
    "codepoint": "fd8e"
  },
  {
    "id": "award",
    "codepoint": "ea2c"
  },
  {
    "id": "award-off",
    "codepoint": "f0fa"
  },
  {
    "id": "axe",
    "codepoint": "ef9f"
  },
  {
    "id": "axis-x",
    "codepoint": "ef45"
  },
  {
    "id": "axis-y",
    "codepoint": "ef46"
  },
  {
    "id": "baby-bottle",
    "codepoint": "f5d2"
  },
  {
    "id": "baby-carriage",
    "codepoint": "f05d"
  },
  {
    "id": "background",
    "codepoint": "fd2c"
  },
  {
    "id": "backhoe",
    "codepoint": "ed86"
  },
  {
    "id": "backpack",
    "codepoint": "ef47"
  },
  {
    "id": "backpack-off",
    "codepoint": "f3c2"
  },
  {
    "id": "backslash",
    "codepoint": "fab9"
  },
  {
    "id": "backspace",
    "codepoint": "ea2d"
  },
  {
    "id": "badge",
    "codepoint": "efc2"
  },
  {
    "id": "badge-2k",
    "codepoint": "100b5"
  },
  {
    "id": "badge-3d",
    "codepoint": "f555"
  },
  {
    "id": "badge-3k",
    "codepoint": "100b4"
  },
  {
    "id": "badge-4k",
    "codepoint": "f556"
  },
  {
    "id": "badge-5k",
    "codepoint": "100b3"
  },
  {
    "id": "badge-8k",
    "codepoint": "f557"
  },
  {
    "id": "badge-ad",
    "codepoint": "f558"
  },
  {
    "id": "badge-ad-off",
    "codepoint": "fd8f"
  },
  {
    "id": "badge-ar",
    "codepoint": "f559"
  },
  {
    "id": "badge-cc",
    "codepoint": "f55a"
  },
  {
    "id": "badge-hd",
    "codepoint": "f55b"
  },
  {
    "id": "badge-off",
    "codepoint": "f0fb"
  },
  {
    "id": "badge-sd",
    "codepoint": "f55c"
  },
  {
    "id": "badge-tm",
    "codepoint": "f55d"
  },
  {
    "id": "badge-vo",
    "codepoint": "f55e"
  },
  {
    "id": "badge-vr",
    "codepoint": "f55f"
  },
  {
    "id": "badge-wc",
    "codepoint": "f560"
  },
  {
    "id": "badges",
    "codepoint": "efc3"
  },
  {
    "id": "badges-off",
    "codepoint": "f0fc"
  },
  {
    "id": "baguette",
    "codepoint": "f3a5"
  },
  {
    "id": "ball-american-football",
    "codepoint": "ee04"
  },
  {
    "id": "ball-american-football-off",
    "codepoint": "f3c3"
  },
  {
    "id": "ball-baseball",
    "codepoint": "efa0"
  },
  {
    "id": "ball-basketball",
    "codepoint": "ec28"
  },
  {
    "id": "ball-bowling",
    "codepoint": "ec29"
  },
  {
    "id": "ball-football",
    "codepoint": "ee06"
  },
  {
    "id": "ball-football-off",
    "codepoint": "ee05"
  },
  {
    "id": "ball-tennis",
    "codepoint": "ec2a"
  },
  {
    "id": "ball-volleyball",
    "codepoint": "ec2b"
  },
  {
    "id": "balloon",
    "codepoint": "ef3a"
  },
  {
    "id": "balloon-off",
    "codepoint": "f0fd"
  },
  {
    "id": "ballpen",
    "codepoint": "f06e"
  },
  {
    "id": "ballpen-off",
    "codepoint": "f0b1"
  },
  {
    "id": "ban",
    "codepoint": "ea2e"
  },
  {
    "id": "banana",
    "codepoint": "10253"
  },
  {
    "id": "bandage",
    "codepoint": "eb7a"
  },
  {
    "id": "bandage-off",
    "codepoint": "f3c4"
  },
  {
    "id": "barbell",
    "codepoint": "eff0"
  },
  {
    "id": "barbell-off",
    "codepoint": "f0b2"
  },
  {
    "id": "barcode",
    "codepoint": "ebc6"
  },
  {
    "id": "barcode-off",
    "codepoint": "f0b3"
  },
  {
    "id": "barrel",
    "codepoint": "f0b4"
  },
  {
    "id": "barrel-off",
    "codepoint": "f0fe"
  },
  {
    "id": "barrier-block",
    "codepoint": "f00e"
  },
  {
    "id": "barrier-block-off",
    "codepoint": "f0b5"
  },
  {
    "id": "baseline",
    "codepoint": "f024"
  },
  {
    "id": "baseline-density-large",
    "codepoint": "f9f0"
  },
  {
    "id": "baseline-density-medium",
    "codepoint": "f9f1"
  },
  {
    "id": "baseline-density-small",
    "codepoint": "f9f2"
  },
  {
    "id": "basket",
    "codepoint": "ebe1"
  },
  {
    "id": "basket-bolt",
    "codepoint": "fb43"
  },
  {
    "id": "basket-cancel",
    "codepoint": "fb44"
  },
  {
    "id": "basket-check",
    "codepoint": "fb45"
  },
  {
    "id": "basket-code",
    "codepoint": "fb46"
  },
  {
    "id": "basket-cog",
    "codepoint": "fb47"
  },
  {
    "id": "basket-discount",
    "codepoint": "fb48"
  },
  {
    "id": "basket-dollar",
    "codepoint": "fb49"
  },
  {
    "id": "basket-down",
    "codepoint": "fb4a"
  },
  {
    "id": "basket-exclamation",
    "codepoint": "fb4b"
  },
  {
    "id": "basket-heart",
    "codepoint": "fb4c"
  },
  {
    "id": "basket-minus",
    "codepoint": "fb4d"
  },
  {
    "id": "basket-off",
    "codepoint": "f0b6"
  },
  {
    "id": "basket-pause",
    "codepoint": "fb4e"
  },
  {
    "id": "basket-pin",
    "codepoint": "fb4f"
  },
  {
    "id": "basket-plus",
    "codepoint": "fb50"
  },
  {
    "id": "basket-question",
    "codepoint": "fb51"
  },
  {
    "id": "basket-search",
    "codepoint": "fb52"
  },
  {
    "id": "basket-share",
    "codepoint": "fb53"
  },
  {
    "id": "basket-star",
    "codepoint": "fb54"
  },
  {
    "id": "basket-up",
    "codepoint": "fb55"
  },
  {
    "id": "basket-x",
    "codepoint": "fb56"
  },
  {
    "id": "bat",
    "codepoint": "f284"
  },
  {
    "id": "bath",
    "codepoint": "ef48"
  },
  {
    "id": "bath-off",
    "codepoint": "f0ff"
  },
  {
    "id": "battery",
    "codepoint": "ea34"
  },
  {
    "id": "battery-1",
    "codepoint": "ea2f"
  },
  {
    "id": "battery-2",
    "codepoint": "ea30"
  },
  {
    "id": "battery-3",
    "codepoint": "ea31"
  },
  {
    "id": "battery-4",
    "codepoint": "ea32"
  },
  {
    "id": "battery-automotive",
    "codepoint": "ee07"
  },
  {
    "id": "battery-charging",
    "codepoint": "ea33"
  },
  {
    "id": "battery-charging-2",
    "codepoint": "ef3b"
  },
  {
    "id": "battery-eco",
    "codepoint": "ef3c"
  },
  {
    "id": "battery-exclamation",
    "codepoint": "ff1d"
  },
  {
    "id": "battery-off",
    "codepoint": "ed1c"
  },
  {
    "id": "battery-spark",
    "codepoint": "ffbd"
  },
  {
    "id": "battery-vertical",
    "codepoint": "ff13"
  },
  {
    "id": "battery-vertical-1",
    "codepoint": "ff1c"
  },
  {
    "id": "battery-vertical-2",
    "codepoint": "ff1b"
  },
  {
    "id": "battery-vertical-3",
    "codepoint": "ff1a"
  },
  {
    "id": "battery-vertical-4",
    "codepoint": "ff19"
  },
  {
    "id": "battery-vertical-charging",
    "codepoint": "ff17"
  },
  {
    "id": "battery-vertical-charging-2",
    "codepoint": "ff18"
  },
  {
    "id": "battery-vertical-eco",
    "codepoint": "ff16"
  },
  {
    "id": "battery-vertical-exclamation",
    "codepoint": "ff15"
  },
  {
    "id": "battery-vertical-off",
    "codepoint": "ff14"
  },
  {
    "id": "beach",
    "codepoint": "ef3d"
  },
  {
    "id": "beach-off",
    "codepoint": "f0b7"
  },
  {
    "id": "bed",
    "codepoint": "eb5c"
  },
  {
    "id": "bed-flat",
    "codepoint": "fca1"
  },
  {
    "id": "bed-off",
    "codepoint": "f100"
  },
  {
    "id": "beer",
    "codepoint": "efa1"
  },
  {
    "id": "beer-off",
    "codepoint": "f101"
  },
  {
    "id": "bell",
    "codepoint": "ea35"
  },
  {
    "id": "bell-bolt",
    "codepoint": "f812"
  },
  {
    "id": "bell-cancel",
    "codepoint": "f813"
  },
  {
    "id": "bell-check",
    "codepoint": "f814"
  },
  {
    "id": "bell-code",
    "codepoint": "f815"
  },
  {
    "id": "bell-cog",
    "codepoint": "f816"
  },
  {
    "id": "bell-dollar",
    "codepoint": "f817"
  },
  {
    "id": "bell-down",
    "codepoint": "f818"
  },
  {
    "id": "bell-exclamation",
    "codepoint": "f819"
  },
  {
    "id": "bell-heart",
    "codepoint": "f81a"
  },
  {
    "id": "bell-minus",
    "codepoint": "ede2"
  },
  {
    "id": "bell-off",
    "codepoint": "ece9"
  },
  {
    "id": "bell-pause",
    "codepoint": "f81b"
  },
  {
    "id": "bell-pin",
    "codepoint": "f81c"
  },
  {
    "id": "bell-plus",
    "codepoint": "ede3"
  },
  {
    "id": "bell-question",
    "codepoint": "f81d"
  },
  {
    "id": "bell-ringing",
    "codepoint": "ed07"
  },
  {
    "id": "bell-ringing-2",
    "codepoint": "ede4"
  },
  {
    "id": "bell-school",
    "codepoint": "f05e"
  },
  {
    "id": "bell-search",
    "codepoint": "f81e"
  },
  {
    "id": "bell-share",
    "codepoint": "f81f"
  },
  {
    "id": "bell-star",
    "codepoint": "f820"
  },
  {
    "id": "bell-up",
    "codepoint": "f821"
  },
  {
    "id": "bell-x",
    "codepoint": "ede5"
  },
  {
    "id": "bell-z",
    "codepoint": "eff1"
  },
  {
    "id": "beta",
    "codepoint": "f544"
  },
  {
    "id": "bible",
    "codepoint": "efc4"
  },
  {
    "id": "bike",
    "codepoint": "ea36"
  },
  {
    "id": "bike-off",
    "codepoint": "f0b8"
  },
  {
    "id": "binary",
    "codepoint": "ee08"
  },
  {
    "id": "binary-off",
    "codepoint": "f3c5"
  },
  {
    "id": "binary-tree",
    "codepoint": "f5d4"
  },
  {
    "id": "binary-tree-2",
    "codepoint": "f5d3"
  },
  {
    "id": "binoculars",
    "codepoint": "fefe"
  },
  {
    "id": "biohazard",
    "codepoint": "ecb8"
  },
  {
    "id": "biohazard-off",
    "codepoint": "f0b9"
  },
  {
    "id": "blade",
    "codepoint": "f4bd"
  },
  {
    "id": "bleach",
    "codepoint": "f2f3"
  },
  {
    "id": "bleach-chlorine",
    "codepoint": "f2f0"
  },
  {
    "id": "bleach-no-chlorine",
    "codepoint": "f2f1"
  },
  {
    "id": "bleach-off",
    "codepoint": "f2f2"
  },
  {
    "id": "blend-mode",
    "codepoint": "feb0"
  },
  {
    "id": "blender",
    "codepoint": "fca2"
  },
  {
    "id": "blind",
    "codepoint": "101af"
  },
  {
    "id": "blob",
    "codepoint": "feaf"
  },
  {
    "id": "blockquote",
    "codepoint": "ee09"
  },
  {
    "id": "blocks",
    "codepoint": "100b2"
  },
  {
    "id": "bluetooth",
    "codepoint": "ea37"
  },
  {
    "id": "bluetooth-connected",
    "codepoint": "ecea"
  },
  {
    "id": "bluetooth-off",
    "codepoint": "eceb"
  },
  {
    "id": "bluetooth-x",
    "codepoint": "f081"
  },
  {
    "id": "blur",
    "codepoint": "ef8c"
  },
  {
    "id": "blur-off",
    "codepoint": "f3c6"
  },
  {
    "id": "bmp",
    "codepoint": "f3a6"
  },
  {
    "id": "body-scan",
    "codepoint": "fca3"
  },
  {
    "id": "bold",
    "codepoint": "eb7b"
  },
  {
    "id": "bold-off",
    "codepoint": "f0ba"
  },
  {
    "id": "bolt",
    "codepoint": "ea38"
  },
  {
    "id": "bolt-off",
    "codepoint": "ecec"
  },
  {
    "id": "bomb",
    "codepoint": "f59c"
  },
  {
    "id": "bone",
    "codepoint": "edb8"
  },
  {
    "id": "bone-off",
    "codepoint": "f0bb"
  },
  {
    "id": "bong",
    "codepoint": "f3a7"
  },
  {
    "id": "bong-off",
    "codepoint": "f3c7"
  },
  {
    "id": "book",
    "codepoint": "ea39"
  },
  {
    "id": "book-2",
    "codepoint": "efc5"
  },
  {
    "id": "book-download",
    "codepoint": "f070"
  },
  {
    "id": "book-off",
    "codepoint": "f0bc"
  },
  {
    "id": "book-upload",
    "codepoint": "f071"
  },
  {
    "id": "bookmark",
    "codepoint": "ea3a"
  },
  {
    "id": "bookmark-ai",
    "codepoint": "fc8a"
  },
  {
    "id": "bookmark-edit",
    "codepoint": "fa5e"
  },
  {
    "id": "bookmark-minus",
    "codepoint": "fa5f"
  },
  {
    "id": "bookmark-off",
    "codepoint": "eced"
  },
  {
    "id": "bookmark-plus",
    "codepoint": "fa60"
  },
  {
    "id": "bookmark-question",
    "codepoint": "fa61"
  },
  {
    "id": "bookmarks",
    "codepoint": "ed08"
  },
  {
    "id": "bookmarks-off",
    "codepoint": "f0bd"
  },
  {
    "id": "books",
    "codepoint": "eff2"
  },
  {
    "id": "books-off",
    "codepoint": "f0be"
  },
  {
    "id": "boom",
    "codepoint": "fdbe"
  },
  {
    "id": "border-all",
    "codepoint": "ea3b"
  },
  {
    "id": "border-bottom",
    "codepoint": "ea3c"
  },
  {
    "id": "border-bottom-plus",
    "codepoint": "fdbd"
  },
  {
    "id": "border-corner-ios",
    "codepoint": "fd98"
  },
  {
    "id": "border-corner-pill",
    "codepoint": "fd62"
  },
  {
    "id": "border-corner-rounded",
    "codepoint": "fd63"
  },
  {
    "id": "border-corner-square",
    "codepoint": "fd64"
  },
  {
    "id": "border-corners",
    "codepoint": "f7a0"
  },
  {
    "id": "border-horizontal",
    "codepoint": "ea3d"
  },
  {
    "id": "border-inner",
    "codepoint": "ea3e"
  },
  {
    "id": "border-left",
    "codepoint": "ea3f"
  },
  {
    "id": "border-left-plus",
    "codepoint": "fdbc"
  },
  {
    "id": "border-none",
    "codepoint": "ea40"
  },
  {
    "id": "border-outer",
    "codepoint": "ea41"
  },
  {
    "id": "border-radius",
    "codepoint": "eb7c"
  },
  {
    "id": "border-right",
    "codepoint": "ea42"
  },
  {
    "id": "border-right-plus",
    "codepoint": "fdbb"
  },
  {
    "id": "border-sides",
    "codepoint": "f7a1"
  },
  {
    "id": "border-style",
    "codepoint": "ee0a"
  },
  {
    "id": "border-style-2",
    "codepoint": "ef22"
  },
  {
    "id": "border-top",
    "codepoint": "ea43"
  },
  {
    "id": "border-top-plus",
    "codepoint": "fdba"
  },
  {
    "id": "border-vertical",
    "codepoint": "ea44"
  },
  {
    "id": "bot-id",
    "codepoint": "101f6"
  },
  {
    "id": "bottle",
    "codepoint": "ef0b"
  },
  {
    "id": "bottle-off",
    "codepoint": "f3c8"
  },
  {
    "id": "bounce-left",
    "codepoint": "f59d"
  },
  {
    "id": "bounce-right",
    "codepoint": "f59e"
  },
  {
    "id": "bow",
    "codepoint": "f096"
  },
  {
    "id": "bowl",
    "codepoint": "f4fa"
  },
  {
    "id": "bowl-chopsticks",
    "codepoint": "fd90"
  },
  {
    "id": "bowl-spoon",
    "codepoint": "fd91"
  },
  {
    "id": "bowling",
    "codepoint": "100b1"
  },
  {
    "id": "box",
    "codepoint": "ea45"
  },
  {
    "id": "box-align-bottom",
    "codepoint": "f2a8"
  },
  {
    "id": "box-align-bottom-left",
    "codepoint": "f2ce"
  },
  {
    "id": "box-align-bottom-right",
    "codepoint": "f2cf"
  },
  {
    "id": "box-align-left",
    "codepoint": "f2a9"
  },
  {
    "id": "box-align-right",
    "codepoint": "f2aa"
  },
  {
    "id": "box-align-top",
    "codepoint": "f2ab"
  },
  {
    "id": "box-align-top-left",
    "codepoint": "f2d0"
  },
  {
    "id": "box-align-top-right",
    "codepoint": "f2d1"
  },
  {
    "id": "box-margin",
    "codepoint": "ee0b"
  },
  {
    "id": "box-model",
    "codepoint": "ee0c"
  },
  {
    "id": "box-model-2",
    "codepoint": "ef23"
  },
  {
    "id": "box-model-2-off",
    "codepoint": "f3c9"
  },
  {
    "id": "box-model-off",
    "codepoint": "f3ca"
  },
  {
    "id": "box-multiple",
    "codepoint": "ee17"
  },
  {
    "id": "box-multiple-0",
    "codepoint": "ee0d"
  },
  {
    "id": "box-multiple-1",
    "codepoint": "ee0e"
  },
  {
    "id": "box-multiple-2",
    "codepoint": "ee0f"
  },
  {
    "id": "box-multiple-3",
    "codepoint": "ee10"
  },
  {
    "id": "box-multiple-4",
    "codepoint": "ee11"
  },
  {
    "id": "box-multiple-5",
    "codepoint": "ee12"
  },
  {
    "id": "box-multiple-6",
    "codepoint": "ee13"
  },
  {
    "id": "box-multiple-7",
    "codepoint": "ee14"
  },
  {
    "id": "box-multiple-8",
    "codepoint": "ee15"
  },
  {
    "id": "box-multiple-9",
    "codepoint": "ee16"
  },
  {
    "id": "box-off",
    "codepoint": "f102"
  },
  {
    "id": "box-padding",
    "codepoint": "ee18"
  },
  {
    "id": "box-seam",
    "codepoint": "eaff"
  },
  {
    "id": "braces",
    "codepoint": "ebcc"
  },
  {
    "id": "braces-off",
    "codepoint": "f0bf"
  },
  {
    "id": "brackets",
    "codepoint": "ebcd"
  },
  {
    "id": "brackets-angle",
    "codepoint": "fcb2"
  },
  {
    "id": "brackets-angle-off",
    "codepoint": "fcb1"
  },
  {
    "id": "brackets-contain",
    "codepoint": "f1e5"
  },
  {
    "id": "brackets-contain-end",
    "codepoint": "f1e3"
  },
  {
    "id": "brackets-contain-start",
    "codepoint": "f1e4"
  },
  {
    "id": "brackets-off",
    "codepoint": "f0c0"
  },
  {
    "id": "braille",
    "codepoint": "f545"
  },
  {
    "id": "brain",
    "codepoint": "f59f"
  },
  {
    "id": "brand-4chan",
    "codepoint": "f494"
  },
  {
    "id": "brand-abstract",
    "codepoint": "f495"
  },
  {
    "id": "brand-adobe",
    "codepoint": "f0dc"
  },
  {
    "id": "brand-adobe-after-effect",
    "codepoint": "ff2a"
  },
  {
    "id": "brand-adobe-after-effects",
    "codepoint": "ff2a"
  },
  {
    "id": "brand-adobe-illustrator",
    "codepoint": "ff29"
  },
  {
    "id": "brand-adobe-indesign",
    "codepoint": "ff28"
  },
  {
    "id": "brand-adobe-photoshop",
    "codepoint": "ff27"
  },
  {
    "id": "brand-adobe-premier",
    "codepoint": "ff26"
  },
  {
    "id": "brand-adobe-premiere",
    "codepoint": "ff26"
  },
  {
    "id": "brand-adobe-xd",
    "codepoint": "ff25"
  },
  {
    "id": "brand-adonis-js",
    "codepoint": "f496"
  },
  {
    "id": "brand-airbnb",
    "codepoint": "ed68"
  },
  {
    "id": "brand-airtable",
    "codepoint": "ef6a"
  },
  {
    "id": "brand-algolia",
    "codepoint": "f390"
  },
  {
    "id": "brand-alipay",
    "codepoint": "f7a2"
  },
  {
    "id": "brand-alpine-js",
    "codepoint": "f324"
  },
  {
    "id": "brand-amazon",
    "codepoint": "f230"
  },
  {
    "id": "brand-amd",
    "codepoint": "f653"
  },
  {
    "id": "brand-amie",
    "codepoint": "ffab"
  },
  {
    "id": "brand-amigo",
    "codepoint": "f5f9"
  },
  {
    "id": "brand-among-us",
    "codepoint": "f205"
  },
  {
    "id": "brand-android",
    "codepoint": "ec16"
  },
  {
    "id": "brand-angular",
    "codepoint": "ef6b"
  },
  {
    "id": "brand-ansible",
    "codepoint": "fa70"
  },
  {
    "id": "brand-ao3",
    "codepoint": "f5e8"
  },
  {
    "id": "brand-appgallery",
    "codepoint": "f231"
  },
  {
    "id": "brand-apple",
    "codepoint": "ec17"
  },
  {
    "id": "brand-apple-arcade",
    "codepoint": "ed69"
  },
  {
    "id": "brand-apple-news",
    "codepoint": "ff24"
  },
  {
    "id": "brand-apple-podcast",
    "codepoint": "f1e6"
  },
  {
    "id": "brand-appstore",
    "codepoint": "ed24"
  },
  {
    "id": "brand-arc",
    "codepoint": "feae"
  },
  {
    "id": "brand-asana",
    "codepoint": "edc5"
  },
  {
    "id": "brand-astro",
    "codepoint": "fdb9"
  },
  {
    "id": "brand-audible",
    "codepoint": "10252"
  },
  {
    "id": "brand-auth0",
    "codepoint": "fcb3"
  },
  {
    "id": "brand-aws",
    "codepoint": "fa4c"
  },
  {
    "id": "brand-azure",
    "codepoint": "fa4d"
  },
  {
    "id": "brand-backbone",
    "codepoint": "f325"
  },
  {
    "id": "brand-badoo",
    "codepoint": "f206"
  },
  {
    "id": "brand-baidu",
    "codepoint": "f5e9"
  },
  {
    "id": "brand-bandcamp",
    "codepoint": "f207"
  },
  {
    "id": "brand-bandlab",
    "codepoint": "f5fa"
  },
  {
    "id": "brand-beats",
    "codepoint": "f208"
  },
  {
    "id": "brand-bebo",
    "codepoint": "ffaa"
  },
  {
    "id": "brand-behance",
    "codepoint": "ec6e"
  },
  {
    "id": "brand-bilibili",
    "codepoint": "f6d2"
  },
  {
    "id": "brand-binance",
    "codepoint": "f5a0"
  },
  {
    "id": "brand-bing",
    "codepoint": "edc6"
  },
  {
    "id": "brand-bitbucket",
    "codepoint": "edc7"
  },
  {
    "id": "brand-blackberry",
    "codepoint": "f568"
  },
  {
    "id": "brand-blender",
    "codepoint": "f326"
  },
  {
    "id": "brand-blogger",
    "codepoint": "f35a"
  },
  {
    "id": "brand-bluesky",
    "codepoint": "fd75"
  },
  {
    "id": "brand-booking",
    "codepoint": "edc8"
  },
  {
    "id": "brand-bootstrap",
    "codepoint": "ef3e"
  },
  {
    "id": "brand-bulma",
    "codepoint": "f327"
  },
  {
    "id": "brand-bumble",
    "codepoint": "f5fb"
  },
  {
    "id": "brand-bunpo",
    "codepoint": "f4cf"
  },
  {
    "id": "brand-c-sharp",
    "codepoint": "f003"
  },
  {
    "id": "brand-cake",
    "codepoint": "f7a3"
  },
  {
    "id": "brand-cakephp",
    "codepoint": "f7af"
  },
  {
    "id": "brand-campaignmonitor",
    "codepoint": "f328"
  },
  {
    "id": "brand-carbon",
    "codepoint": "f348"
  },
  {
    "id": "brand-cashapp",
    "codepoint": "f391"
  },
  {
    "id": "brand-chrome",
    "codepoint": "ec18"
  },
  {
    "id": "brand-cinema-4d",
    "codepoint": "fa71"
  },
  {
    "id": "brand-citymapper",
    "codepoint": "f5fc"
  },
  {
    "id": "brand-cloudflare",
    "codepoint": "fa4e"
  },
  {
    "id": "brand-codecov",
    "codepoint": "f329"
  },
  {
    "id": "brand-codepen",
    "codepoint": "ec6f"
  },
  {
    "id": "brand-codesandbox",
    "codepoint": "ed6a"
  },
  {
    "id": "brand-cohost",
    "codepoint": "f5d5"
  },
  {
    "id": "brand-coinbase",
    "codepoint": "f209"
  },
  {
    "id": "brand-comedy-central",
    "codepoint": "f217"
  },
  {
    "id": "brand-coreos",
    "codepoint": "f5fd"
  },
  {
    "id": "brand-couchdb",
    "codepoint": "f60f"
  },
  {
    "id": "brand-couchsurfing",
    "codepoint": "f392"
  },
  {
    "id": "brand-cpp",
    "codepoint": "f5fe"
  },
  {
    "id": "brand-craft",
    "codepoint": "fa72"
  },
  {
    "id": "brand-crunchbase",
    "codepoint": "f7e3"
  },
  {
    "id": "brand-css3",
    "codepoint": "ed6b"
  },
  {
    "id": "brand-ctemplar",
    "codepoint": "f4d0"
  },
  {
    "id": "brand-cucumber",
    "codepoint": "ef6c"
  },
  {
    "id": "brand-cupra",
    "codepoint": "f4d1"
  },
  {
    "id": "brand-cypress",
    "codepoint": "f333"
  },
  {
    "id": "brand-d3",
    "codepoint": "f24e"
  },
  {
    "id": "brand-databricks",
    "codepoint": "fc41"
  },
  {
    "id": "brand-days-counter",
    "codepoint": "f4d2"
  },
  {
    "id": "brand-dcos",
    "codepoint": "f32a"
  },
  {
    "id": "brand-debian",
    "codepoint": "ef57"
  },
  {
    "id": "brand-deezer",
    "codepoint": "f78b"
  },
  {
    "id": "brand-deliveroo",
    "codepoint": "f4d3"
  },
  {
    "id": "brand-deno",
    "codepoint": "f24f"
  },
  {
    "id": "brand-denodo",
    "codepoint": "f610"
  },
  {
    "id": "brand-deviantart",
    "codepoint": "ecfb"
  },
  {
    "id": "brand-digg",
    "codepoint": "fa73"
  },
  {
    "id": "brand-dingtalk",
    "codepoint": "f5ea"
  },
  {
    "id": "brand-discord",
    "codepoint": "ece3"
  },
  {
    "id": "brand-disney",
    "codepoint": "f20a"
  },
  {
    "id": "brand-disqus",
    "codepoint": "edc9"
  },
  {
    "id": "brand-django",
    "codepoint": "f349"
  },
  {
    "id": "brand-docker",
    "codepoint": "edca"
  },
  {
    "id": "brand-doctrine",
    "codepoint": "ef6d"
  },
  {
    "id": "brand-dolby-digital",
    "codepoint": "f4d4"
  },
  {
    "id": "brand-douban",
    "codepoint": "f5ff"
  },
  {
    "id": "brand-dribbble",
    "codepoint": "ec19"
  },
  {
    "id": "brand-dropbox",
    "codepoint": "1018a"
  },
  {
    "id": "brand-drops",
    "codepoint": "f4d5"
  },
  {
    "id": "brand-drupal",
    "codepoint": "f393"
  },
  {
    "id": "brand-edge",
    "codepoint": "ecfc"
  },
  {
    "id": "brand-elastic",
    "codepoint": "f611"
  },
  {
    "id": "brand-electronic-arts",
    "codepoint": "fa74"
  },
  {
    "id": "brand-ember",
    "codepoint": "f497"
  },
  {
    "id": "brand-envato",
    "codepoint": "f394"
  },
  {
    "id": "brand-etsy",
    "codepoint": "f654"
  },
  {
    "id": "brand-evernote",
    "codepoint": "f600"
  },
  {
    "id": "brand-facebook",
    "codepoint": "ec1a"
  },
  {
    "id": "brand-feedly",
    "codepoint": "fa75"
  },
  {
    "id": "brand-figma",
    "codepoint": "ec93"
  },
  {
    "id": "brand-filezilla",
    "codepoint": "fa76"
  },
  {
    "id": "brand-finder",
    "codepoint": "f218"
  },
  {
    "id": "brand-firebase",
    "codepoint": "ef6e"
  },
  {
    "id": "brand-firefox",
    "codepoint": "ecfd"
  },
  {
    "id": "brand-fiverr",
    "codepoint": "f7a4"
  },
  {
    "id": "brand-flickr",
    "codepoint": "ecfe"
  },
  {
    "id": "brand-flightradar24",
    "codepoint": "f4d6"
  },
  {
    "id": "brand-flipboard",
    "codepoint": "f20b"
  },
  {
    "id": "brand-flutter",
    "codepoint": "f395"
  },
  {
    "id": "brand-fortnite",
    "codepoint": "f260"
  },
  {
    "id": "brand-foursquare",
    "codepoint": "ecff"
  },
  {
    "id": "brand-framer",
    "codepoint": "ec1b"
  },
  {
    "id": "brand-framer-motion",
    "codepoint": "f78c"
  },
  {
    "id": "brand-funimation",
    "codepoint": "f655"
  },
  {
    "id": "brand-gatsby",
    "codepoint": "f396"
  },
  {
    "id": "brand-git",
    "codepoint": "ef6f"
  },
  {
    "id": "brand-github",
    "codepoint": "ec1c"
  },
  {
    "id": "brand-github-copilot",
    "codepoint": "f4a8"
  },
  {
    "id": "brand-gitlab",
    "codepoint": "ec1d"
  },
  {
    "id": "brand-gmail",
    "codepoint": "efa2"
  },
  {
    "id": "brand-golang",
    "codepoint": "f78d"
  },
  {
    "id": "brand-google",
    "codepoint": "ec1f"
  },
  {
    "id": "brand-google-analytics",
    "codepoint": "edcb"
  },
  {
    "id": "brand-google-big-query",
    "codepoint": "f612"
  },
  {
    "id": "brand-google-drive",
    "codepoint": "ec1e"
  },
  {
    "id": "brand-google-fit",
    "codepoint": "f297"
  },
  {
    "id": "brand-google-home",
    "codepoint": "f601"
  },
  {
    "id": "brand-google-maps",
    "codepoint": "fa4f"
  },
  {
    "id": "brand-google-one",
    "codepoint": "f232"
  },
  {
    "id": "brand-google-photos",
    "codepoint": "f20c"
  },
  {
    "id": "brand-google-play",
    "codepoint": "ed25"
  },
  {
    "id": "brand-google-podcasts",
    "codepoint": "f656"
  },
  {
    "id": "brand-grammarly",
    "codepoint": "f32b"
  },
  {
    "id": "brand-graphql",
    "codepoint": "f32c"
  },
  {
    "id": "brand-gravatar",
    "codepoint": "edcc"
  },
  {
    "id": "brand-grindr",
    "codepoint": "f20d"
  },
  {
    "id": "brand-guardian",
    "codepoint": "f4fb"
  },
  {
    "id": "brand-gumroad",
    "codepoint": "f5d6"
  },
  {
    "id": "brand-hackerrank",
    "codepoint": "ff23"
  },
  {
    "id": "brand-hbo",
    "codepoint": "f657"
  },
  {
    "id": "brand-headlessui",
    "codepoint": "f32d"
  },
  {
    "id": "brand-hexo",
    "codepoint": "fa50"
  },
  {
    "id": "brand-hipchat",
    "codepoint": "edcd"
  },
  {
    "id": "brand-html5",
    "codepoint": "ed6c"
  },
  {
    "id": "brand-inertia",
    "codepoint": "f34a"
  },
  {
    "id": "brand-infakt",
    "codepoint": "1020a"
  },
  {
    "id": "brand-instagram",
    "codepoint": "ec20"
  },
  {
    "id": "brand-intercom",
    "codepoint": "f1cf"
  },
  {
    "id": "brand-itch",
    "codepoint": "fa22"
  },
  {
    "id": "brand-javascript",
    "codepoint": "ef0c"
  },
  {
    "id": "brand-jira",
    "codepoint": "10231"
  },
  {
    "id": "brand-juejin",
    "codepoint": "f7b0"
  },
  {
    "id": "brand-kakao-talk",
    "codepoint": "fd2d"
  },
  {
    "id": "brand-kako-talk",
    "codepoint": "fd2d"
  },
  {
    "id": "brand-kbin",
    "codepoint": "fad0"
  },
  {
    "id": "brand-kick",
    "codepoint": "fa23"
  },
  {
    "id": "brand-kickstarter",
    "codepoint": "edce"
  },
  {
    "id": "brand-kotlin",
    "codepoint": "ed6d"
  },
  {
    "id": "brand-laravel",
    "codepoint": "f34b"
  },
  {
    "id": "brand-lastfm",
    "codepoint": "f001"
  },
  {
    "id": "brand-leetcode",
    "codepoint": "fa51"
  },
  {
    "id": "brand-letterboxd",
    "codepoint": "fa24"
  },
  {
    "id": "brand-line",
    "codepoint": "f7e8"
  },
  {
    "id": "brand-linkedin",
    "codepoint": "ec8c"
  },
  {
    "id": "brand-linktree",
    "codepoint": "f1e7"
  },
  {
    "id": "brand-linqpad",
    "codepoint": "f562"
  },
  {
    "id": "brand-livewire",
    "codepoint": "fd76"
  },
  {
    "id": "brand-loom",
    "codepoint": "ef70"
  },
  {
    "id": "brand-mailgun",
    "codepoint": "f32e"
  },
  {
    "id": "brand-mantine",
    "codepoint": "f32f"
  },
  {
    "id": "brand-mastercard",
    "codepoint": "ef49"
  },
  {
    "id": "brand-mastodon",
    "codepoint": "f250"
  },
  {
    "id": "brand-matrix",
    "codepoint": "f5eb"
  },
  {
    "id": "brand-mcdonalds",
    "codepoint": "f251"
  },
  {
    "id": "brand-medium",
    "codepoint": "ec70"
  },
  {
    "id": "brand-meetup",
    "codepoint": "fc6a"
  },
  {
    "id": "brand-mercedes",
    "codepoint": "f072"
  },
  {
    "id": "brand-messenger",
    "codepoint": "ec71"
  },
  {
    "id": "brand-meta",
    "codepoint": "efb0"
  },
  {
    "id": "brand-metabrainz",
    "codepoint": "ff12"
  },
  {
    "id": "brand-minecraft",
    "codepoint": "faef"
  },
  {
    "id": "brand-miniprogram",
    "codepoint": "f602"
  },
  {
    "id": "brand-mixpanel",
    "codepoint": "f397"
  },
  {
    "id": "brand-monday",
    "codepoint": "f219"
  },
  {
    "id": "brand-mongodb",
    "codepoint": "f613"
  },
  {
    "id": "brand-my-oppo",
    "codepoint": "f4d7"
  },
  {
    "id": "brand-mysql",
    "codepoint": "f614"
  },
  {
    "id": "brand-national-geographic",
    "codepoint": "f603"
  },
  {
    "id": "brand-nem",
    "codepoint": "f5a1"
  },
  {
    "id": "brand-netbeans",
    "codepoint": "ef71"
  },
  {
    "id": "brand-netease-music",
    "codepoint": "f604"
  },
  {
    "id": "brand-netflix",
    "codepoint": "edcf"
  },
  {
    "id": "brand-nexo",
    "codepoint": "f5a2"
  },
  {
    "id": "brand-nextcloud",
    "codepoint": "f4d8"
  },
  {
    "id": "brand-nextjs",
    "codepoint": "f0dd"
  },
  {
    "id": "brand-nodejs",
    "codepoint": "fae0"
  },
  {
    "id": "brand-nord-vpn",
    "codepoint": "f37f"
  },
  {
    "id": "brand-notion",
    "codepoint": "ef7b"
  },
  {
    "id": "brand-npm",
    "codepoint": "f569"
  },
  {
    "id": "brand-nuxt",
    "codepoint": "f0de"
  },
  {
    "id": "brand-nytimes",
    "codepoint": "ef8d"
  },
  {
    "id": "brand-oauth",
    "codepoint": "fa52"
  },
  {
    "id": "brand-office",
    "codepoint": "f398"
  },
  {
    "id": "brand-ok-ru",
    "codepoint": "f399"
  },
  {
    "id": "brand-onedrive",
    "codepoint": "f5d7"
  },
  {
    "id": "brand-onlyfans",
    "codepoint": "f605"
  },
  {
    "id": "brand-open-source",
    "codepoint": "edd0"
  },
  {
    "id": "brand-openai",
    "codepoint": "f78e"
  },
  {
    "id": "brand-openvpn",
    "codepoint": "f39a"
  },
  {
    "id": "brand-opera",
    "codepoint": "ec21"
  },
  {
    "id": "brand-pagekit",
    "codepoint": "edd1"
  },
  {
    "id": "brand-parsinta",
    "codepoint": "fc42"
  },
  {
    "id": "brand-patreon",
    "codepoint": "edd2"
  },
  {
    "id": "brand-paypal",
    "codepoint": "ec22"
  },
  {
    "id": "brand-paypay",
    "codepoint": "f5ec"
  },
  {
    "id": "brand-peanut",
    "codepoint": "f39b"
  },
  {
    "id": "brand-pepsi",
    "codepoint": "f261"
  },
  {
    "id": "brand-php",
    "codepoint": "ef72"
  },
  {
    "id": "brand-picsart",
    "codepoint": "f4d9"
  },
  {
    "id": "brand-pinterest",
    "codepoint": "ec8d"
  },
  {
    "id": "brand-planetscale",
    "codepoint": "f78f"
  },
  {
    "id": "brand-pnpm",
    "codepoint": "fd77"
  },
  {
    "id": "brand-pocket",
    "codepoint": "ed00"
  },
  {
    "id": "brand-polymer",
    "codepoint": "f498"
  },
  {
    "id": "brand-powershell",
    "codepoint": "f5ed"
  },
  {
    "id": "brand-printables",
    "codepoint": "fd1b"
  },
  {
    "id": "brand-prisma",
    "codepoint": "f499"
  },
  {
    "id": "brand-producthunt",
    "codepoint": "edd3"
  },
  {
    "id": "brand-pushbullet",
    "codepoint": "f330"
  },
  {
    "id": "brand-pushover",
    "codepoint": "f20e"
  },
  {
    "id": "brand-python",
    "codepoint": "ed01"
  },
  {
    "id": "brand-qq",
    "codepoint": "f606"
  },
  {
    "id": "brand-radix-ui",
    "codepoint": "f790"
  },
  {
    "id": "brand-react",
    "codepoint": "f34c"
  },
  {
    "id": "brand-react-native",
    "codepoint": "ef73"
  },
  {
    "id": "brand-reason",
    "codepoint": "f49a"
  },
  {
    "id": "brand-reddit",
    "codepoint": "ec8e"
  },
  {
    "id": "brand-redhat",
    "codepoint": "f331"
  },
  {
    "id": "brand-redux",
    "codepoint": "f3a8"
  },
  {
    "id": "brand-revolut",
    "codepoint": "f4da"
  },
  {
    "id": "brand-rumble",
    "codepoint": "fad1"
  },
  {
    "id": "brand-rust",
    "codepoint": "fa53"
  },
  {
    "id": "brand-safari",
    "codepoint": "ec23"
  },
  {
    "id": "brand-samsungpass",
    "codepoint": "f4db"
  },
  {
    "id": "brand-sass",
    "codepoint": "edd4"
  },
  {
    "id": "brand-sentry",
    "codepoint": "edd5"
  },
  {
    "id": "brand-sharik",
    "codepoint": "f4dc"
  },
  {
    "id": "brand-shazam",
    "codepoint": "edd6"
  },
  {
    "id": "brand-shopee",
    "codepoint": "f252"
  },
  {
    "id": "brand-signal",
    "codepoint": "10275"
  },
  {
    "id": "brand-sketch",
    "codepoint": "ec24"
  },
  {
    "id": "brand-skype",
    "codepoint": "ed02"
  },
  {
    "id": "brand-slack",
    "codepoint": "ec72"
  },
  {
    "id": "brand-snapchat",
    "codepoint": "ec25"
  },
  {
    "id": "brand-snapseed",
    "codepoint": "f253"
  },
  {
    "id": "brand-snowflake",
    "codepoint": "f615"
  },
  {
    "id": "brand-socket-io",
    "codepoint": "f49b"
  },
  {
    "id": "brand-solidjs",
    "codepoint": "f5ee"
  },
  {
    "id": "brand-soundcloud",
    "codepoint": "ed6e"
  },
  {
    "id": "brand-spacehey",
    "codepoint": "f4fc"
  },
  {
    "id": "brand-speedtest",
    "codepoint": "fa77"
  },
  {
    "id": "brand-spotify",
    "codepoint": "ed03"
  },
  {
    "id": "brand-stackoverflow",
    "codepoint": "ef58"
  },
  {
    "id": "brand-stackshare",
    "codepoint": "f607"
  },
  {
    "id": "brand-steam",
    "codepoint": "ed6f"
  },
  {
    "id": "brand-stellar",
    "codepoint": "10243"
  },
  {
    "id": "brand-stocktwits",
    "codepoint": "fd78"
  },
  {
    "id": "brand-storj",
    "codepoint": "fa54"
  },
  {
    "id": "brand-storybook",
    "codepoint": "f332"
  },
  {
    "id": "brand-storytel",
    "codepoint": "f608"
  },
  {
    "id": "brand-strava",
    "codepoint": "f254"
  },
  {
    "id": "brand-stripe",
    "codepoint": "edd7"
  },
  {
    "id": "brand-sublime-text",
    "codepoint": "ef74"
  },
  {
    "id": "brand-sugarizer",
    "codepoint": "f7a5"
  },
  {
    "id": "brand-supabase",
    "codepoint": "f6d3"
  },
  {
    "id": "brand-superhuman",
    "codepoint": "f50c"
  },
  {
    "id": "brand-supernova",
    "codepoint": "f49c"
  },
  {
    "id": "brand-surfshark",
    "codepoint": "f255"
  },
  {
    "id": "brand-svelte",
    "codepoint": "f0df"
  },
  {
    "id": "brand-swift",
    "codepoint": "fa55"
  },
  {
    "id": "brand-symfony",
    "codepoint": "f616"
  },
  {
    "id": "brand-tabler",
    "codepoint": "ec8f"
  },
  {
    "id": "brand-tabnine",
    "codepoint": "101ae"
  },
  {
    "id": "brand-tailwind",
    "codepoint": "eca1"
  },
  {
    "id": "brand-taobao",
    "codepoint": "f5ef"
  },
  {
    "id": "brand-teams",
    "codepoint": "fadf"
  },
  {
    "id": "brand-ted",
    "codepoint": "f658"
  },
  {
    "id": "brand-telegram",
    "codepoint": "ec26"
  },
  {
    "id": "brand-terraform",
    "codepoint": "fa56"
  },
  {
    "id": "brand-tesla",
    "codepoint": "10099"
  },
  {
    "id": "brand-tether",
    "codepoint": "f5a3"
  },
  {
    "id": "brand-thingiverse",
    "codepoint": "fd1c"
  },
  {
    "id": "brand-threads",
    "codepoint": "fb02"
  },
  {
    "id": "brand-threejs",
    "codepoint": "f5f0"
  },
  {
    "id": "brand-tidal",
    "codepoint": "ed70"
  },
  {
    "id": "brand-tiktok",
    "codepoint": "ec73"
  },
  {
    "id": "brand-tinder",
    "codepoint": "ed71"
  },
  {
    "id": "brand-topbuzz",
    "codepoint": "f50d"
  },
  {
    "id": "brand-torchain",
    "codepoint": "f5a4"
  },
  {
    "id": "brand-toyota",
    "codepoint": "f262"
  },
  {
    "id": "brand-trello",
    "codepoint": "f39d"
  },
  {
    "id": "brand-tripadvisor",
    "codepoint": "f002"
  },
  {
    "id": "brand-tumblr",
    "codepoint": "ed04"
  },
  {
    "id": "brand-twilio",
    "codepoint": "f617"
  },
  {
    "id": "brand-twitch",
    "codepoint": "ed05"
  },
  {
    "id": "brand-twitter",
    "codepoint": "ec27"
  },
  {
    "id": "brand-typescript",
    "codepoint": "f5f1"
  },
  {
    "id": "brand-uber",
    "codepoint": "ef75"
  },
  {
    "id": "brand-ubuntu",
    "codepoint": "ef59"
  },
  {
    "id": "brand-unity",
    "codepoint": "f49d"
  },
  {
    "id": "brand-unsplash",
    "codepoint": "edd8"
  },
  {
    "id": "brand-upwork",
    "codepoint": "f39e"
  },
  {
    "id": "brand-valorant",
    "codepoint": "f39f"
  },
  {
    "id": "brand-vechain",
    "codepoint": "10242"
  },
  {
    "id": "brand-vercel",
    "codepoint": "ef24"
  },
  {
    "id": "brand-vimeo",
    "codepoint": "ed06"
  },
  {
    "id": "brand-vinted",
    "codepoint": "f20f"
  },
  {
    "id": "brand-visa",
    "codepoint": "f380"
  },
  {
    "id": "brand-visual-studio",
    "codepoint": "ef76"
  },
  {
    "id": "brand-vite",
    "codepoint": "f5f2"
  },
  {
    "id": "brand-vivaldi",
    "codepoint": "f210"
  },
  {
    "id": "brand-vk",
    "codepoint": "ed72"
  },
  {
    "id": "brand-vlc",
    "codepoint": "fa78"
  },
  {
    "id": "brand-volkswagen",
    "codepoint": "f50e"
  },
  {
    "id": "brand-vsco",
    "codepoint": "f334"
  },
  {
    "id": "brand-vscode",
    "codepoint": "f3a0"
  },
  {
    "id": "brand-vue",
    "codepoint": "f0e0"
  },
  {
    "id": "brand-walmart",
    "codepoint": "f211"
  },
  {
    "id": "brand-waze",
    "codepoint": "f5d8"
  },
  {
    "id": "brand-webflow",
    "codepoint": "f2d2"
  },
  {
    "id": "brand-wechat",
    "codepoint": "f5f3"
  },
  {
    "id": "brand-weibo",
    "codepoint": "f609"
  },
  {
    "id": "brand-whatsapp",
    "codepoint": "ec74"
  },
  {
    "id": "brand-wikipedia",
    "codepoint": "fa79"
  },
  {
    "id": "brand-windows",
    "codepoint": "ecd8"
  },
  {
    "id": "brand-windy",
    "codepoint": "f4dd"
  },
  {
    "id": "brand-wish",
    "codepoint": "f212"
  },
  {
    "id": "brand-wix",
    "codepoint": "f3a1"
  },
  {
    "id": "brand-wordpress",
    "codepoint": "f2d3"
  },
  {
    "id": "brand-x",
    "codepoint": "fc0f"
  },
  {
    "id": "brand-xamarin",
    "codepoint": "fa7a"
  },
  {
    "id": "brand-xbox",
    "codepoint": "f298"
  },
  {
    "id": "brand-xdeep",
    "codepoint": "fc10"
  },
  {
    "id": "brand-xing",
    "codepoint": "f21a"
  },
  {
    "id": "brand-yahoo",
    "codepoint": "ed73"
  },
  {
    "id": "brand-yandex",
    "codepoint": "fae1"
  },
  {
    "id": "brand-yarn",
    "codepoint": "fd79"
  },
  {
    "id": "brand-yatse",
    "codepoint": "f213"
  },
  {
    "id": "brand-ycombinator",
    "codepoint": "edd9"
  },
  {
    "id": "brand-youtube",
    "codepoint": "ec90"
  },
  {
    "id": "brand-youtube-kids",
    "codepoint": "f214"
  },
  {
    "id": "brand-zalando",
    "codepoint": "f49e"
  },
  {
    "id": "brand-zapier",
    "codepoint": "f49f"
  },
  {
    "id": "brand-zeit",
    "codepoint": "f335"
  },
  {
    "id": "brand-zhihu",
    "codepoint": "f60a"
  },
  {
    "id": "brand-zoom",
    "codepoint": "f215"
  },
  {
    "id": "brand-zulip",
    "codepoint": "f4de"
  },
  {
    "id": "brand-zwift",
    "codepoint": "f216"
  },
  {
    "id": "bread",
    "codepoint": "efa3"
  },
  {
    "id": "bread-off",
    "codepoint": "f3cb"
  },
  {
    "id": "briefcase",
    "codepoint": "ea46"
  },
  {
    "id": "briefcase-2",
    "codepoint": "fb03"
  },
  {
    "id": "briefcase-off",
    "codepoint": "f3cc"
  },
  {
    "id": "brightness",
    "codepoint": "eb7f"
  },
  {
    "id": "brightness-2",
    "codepoint": "ee19"
  },
  {
    "id": "brightness-auto",
    "codepoint": "fd99"
  },
  {
    "id": "brightness-down",
    "codepoint": "eb7d"
  },
  {
    "id": "brightness-half",
    "codepoint": "ee1a"
  },
  {
    "id": "brightness-off",
    "codepoint": "f3cd"
  },
  {
    "id": "brightness-up",
    "codepoint": "eb7e"
  },
  {
    "id": "broadcast",
    "codepoint": "f1e9"
  },
  {
    "id": "broadcast-off",
    "codepoint": "f1e8"
  },
  {
    "id": "browser",
    "codepoint": "ebb7"
  },
  {
    "id": "browser-check",
    "codepoint": "efd6"
  },
  {
    "id": "browser-maximize",
    "codepoint": "100b0"
  },
  {
    "id": "browser-minus",
    "codepoint": "100af"
  },
  {
    "id": "browser-off",
    "codepoint": "f0c1"
  },
  {
    "id": "browser-plus",
    "codepoint": "efd7"
  },
  {
    "id": "browser-share",
    "codepoint": "100ae"
  },
  {
    "id": "browser-x",
    "codepoint": "efd8"
  },
  {
    "id": "brush",
    "codepoint": "ebb8"
  },
  {
    "id": "brush-off",
    "codepoint": "f0c2"
  },
  {
    "id": "bubble",
    "codepoint": "feba"
  },
  {
    "id": "bubble-minus",
    "codepoint": "febe"
  },
  {
    "id": "bubble-plus",
    "codepoint": "febd"
  },
  {
    "id": "bubble-tea",
    "codepoint": "ff51"
  },
  {
    "id": "bubble-tea-2",
    "codepoint": "ff52"
  },
  {
    "id": "bubble-text",
    "codepoint": "febc"
  },
  {
    "id": "bubble-x",
    "codepoint": "febb"
  },
  {
    "id": "bucket",
    "codepoint": "ea47"
  },
  {
    "id": "bucket-droplet",
    "codepoint": "f56a"
  },
  {
    "id": "bucket-off",
    "codepoint": "f103"
  },
  {
    "id": "bug",
    "codepoint": "ea48"
  },
  {
    "id": "bug-off",
    "codepoint": "f0c3"
  },
  {
    "id": "building",
    "codepoint": "ea4f"
  },
  {
    "id": "building-airport",
    "codepoint": "ffa9"
  },
  {
    "id": "building-arch",
    "codepoint": "ea49"
  },
  {
    "id": "building-bank",
    "codepoint": "ebe2"
  },
  {
    "id": "building-bridge",
    "codepoint": "ea4b"
  },
  {
    "id": "building-bridge-2",
    "codepoint": "ea4a"
  },
  {
    "id": "building-broadcast-tower",
    "codepoint": "f4be"
  },
  {
    "id": "building-burj-al-arab",
    "codepoint": "ff50"
  },
  {
    "id": "building-carousel",
    "codepoint": "ed87"
  },
  {
    "id": "building-castle",
    "codepoint": "ed88"
  },
  {
    "id": "building-church",
    "codepoint": "ea4c"
  },
  {
    "id": "building-circus",
    "codepoint": "f4bf"
  },
  {
    "id": "building-cog",
    "codepoint": "10062"
  },
  {
    "id": "building-community",
    "codepoint": "ebf6"
  },
  {
    "id": "building-cottage",
    "codepoint": "ee1b"
  },
  {
    "id": "building-eiffel-tower",
    "codepoint": "10251"
  },
  {
    "id": "building-estate",
    "codepoint": "f5a5"
  },
  {
    "id": "building-factory",
    "codepoint": "ee1c"
  },
  {
    "id": "building-factory-2",
    "codepoint": "f082"
  },
  {
    "id": "building-fortress",
    "codepoint": "ed89"
  },
  {
    "id": "building-hospital",
    "codepoint": "ea4d"
  },
  {
    "id": "building-lighthouse",
    "codepoint": "ed8a"
  },
  {
    "id": "building-minus",
    "codepoint": "10061"
  },
  {
    "id": "building-monument",
    "codepoint": "ed26"
  },
  {
    "id": "building-mosque",
    "codepoint": "fa57"
  },
  {
    "id": "building-off",
    "codepoint": "fefd"
  },
  {
    "id": "building-pavilion",
    "codepoint": "ebf7"
  },
  {
    "id": "building-plus",
    "codepoint": "10060"
  },
  {
    "id": "building-skyscraper",
    "codepoint": "ec39"
  },
  {
    "id": "building-stadium",
    "codepoint": "f641"
  },
  {
    "id": "building-store",
    "codepoint": "ea4e"
  },
  {
    "id": "building-tunnel",
    "codepoint": "f5a6"
  },
  {
    "id": "building-warehouse",
    "codepoint": "ebe3"
  },
  {
    "id": "building-wind-turbine",
    "codepoint": "f4c0"
  },
  {
    "id": "buildings",
    "codepoint": "ff40"
  },
  {
    "id": "bulb",
    "codepoint": "ea51"
  },
  {
    "id": "bulb-off",
    "codepoint": "ea50"
  },
  {
    "id": "bulldozer",
    "codepoint": "ee1d"
  },
  {
    "id": "burger",
    "codepoint": "fcb4"
  },
  {
    "id": "bus",
    "codepoint": "ebe4"
  },
  {
    "id": "bus-off",
    "codepoint": "f3ce"
  },
  {
    "id": "bus-stop",
    "codepoint": "f2d4"
  },
  {
    "id": "businessplan",
    "codepoint": "ee1e"
  },
  {
    "id": "butterfly",
    "codepoint": "efd9"
  },
  {
    "id": "cactus",
    "codepoint": "f21b"
  },
  {
    "id": "cactus-off",
    "codepoint": "f3cf"
  },
  {
    "id": "cake",
    "codepoint": "f00f"
  },
  {
    "id": "cake-off",
    "codepoint": "f104"
  },
  {
    "id": "cake-roll",
    "codepoint": "100bd"
  },
  {
    "id": "calculator",
    "codepoint": "eb80"
  },
  {
    "id": "calculator-off",
    "codepoint": "f0c4"
  },
  {
    "id": "calendar",
    "codepoint": "ea53"
  },
  {
    "id": "calendar-bolt",
    "codepoint": "f822"
  },
  {
    "id": "calendar-cancel",
    "codepoint": "f823"
  },
  {
    "id": "calendar-check",
    "codepoint": "f824"
  },
  {
    "id": "calendar-clock",
    "codepoint": "fd2e"
  },
  {
    "id": "calendar-code",
    "codepoint": "f825"
  },
  {
    "id": "calendar-cog",
    "codepoint": "f826"
  },
  {
    "id": "calendar-dollar",
    "codepoint": "f827"
  },
  {
    "id": "calendar-dot",
    "codepoint": "fd3e"
  },
  {
    "id": "calendar-down",
    "codepoint": "f828"
  },
  {
    "id": "calendar-due",
    "codepoint": "f621"
  },
  {
    "id": "calendar-event",
    "codepoint": "ea52"
  },
  {
    "id": "calendar-exclamation",
    "codepoint": "f829"
  },
  {
    "id": "calendar-heart",
    "codepoint": "f82a"
  },
  {
    "id": "calendar-minus",
    "codepoint": "ebb9"
  },
  {
    "id": "calendar-month",
    "codepoint": "fd2f"
  },
  {
    "id": "calendar-off",
    "codepoint": "ee1f"
  },
  {
    "id": "calendar-pause",
    "codepoint": "f82b"
  },
  {
    "id": "calendar-pin",
    "codepoint": "f82c"
  },
  {
    "id": "calendar-plus",
    "codepoint": "ebba"
  },
  {
    "id": "calendar-question",
    "codepoint": "f82d"
  },
  {
    "id": "calendar-repeat",
    "codepoint": "fad2"
  },
  {
    "id": "calendar-sad",
    "codepoint": "fd1d"
  },
  {
    "id": "calendar-search",
    "codepoint": "f82e"
  },
  {
    "id": "calendar-share",
    "codepoint": "f82f"
  },
  {
    "id": "calendar-smile",
    "codepoint": "fd1e"
  },
  {
    "id": "calendar-star",
    "codepoint": "f830"
  },
  {
    "id": "calendar-stats",
    "codepoint": "ee20"
  },
  {
    "id": "calendar-time",
    "codepoint": "ee21"
  },
  {
    "id": "calendar-up",
    "codepoint": "f831"
  },
  {
    "id": "calendar-user",
    "codepoint": "fd1f"
  },
  {
    "id": "calendar-week",
    "codepoint": "fd30"
  },
  {
    "id": "calendar-x",
    "codepoint": "f832"
  },
  {
    "id": "camera",
    "codepoint": "ea54"
  },
  {
    "id": "camera-ai",
    "codepoint": "ffa8"
  },
  {
    "id": "camera-bitcoin",
    "codepoint": "ffa7"
  },
  {
    "id": "camera-bolt",
    "codepoint": "f833"
  },
  {
    "id": "camera-cancel",
    "codepoint": "f834"
  },
  {
    "id": "camera-check",
    "codepoint": "f835"
  },
  {
    "id": "camera-code",
    "codepoint": "f836"
  },
  {
    "id": "camera-cog",
    "codepoint": "f837"
  },
  {
    "id": "camera-dollar",
    "codepoint": "f838"
  },
  {
    "id": "camera-down",
    "codepoint": "f839"
  },
  {
    "id": "camera-exclamation",
    "codepoint": "f83a"
  },
  {
    "id": "camera-heart",
    "codepoint": "f83b"
  },
  {
    "id": "camera-minus",
    "codepoint": "ec3a"
  },
  {
    "id": "camera-moon",
    "codepoint": "ffa6"
  },
  {
    "id": "camera-off",
    "codepoint": "ecee"
  },
  {
    "id": "camera-pause",
    "codepoint": "f83c"
  },
  {
    "id": "camera-pin",
    "codepoint": "f83d"
  },
  {
    "id": "camera-plus",
    "codepoint": "ec3b"
  },
  {
    "id": "camera-question",
    "codepoint": "f83e"
  },
  {
    "id": "camera-rotate",
    "codepoint": "ee22"
  },
  {
    "id": "camera-search",
    "codepoint": "f83f"
  },
  {
    "id": "camera-selfie",
    "codepoint": "ee23"
  },
  {
    "id": "camera-share",
    "codepoint": "f840"
  },
  {
    "id": "camera-spark",
    "codepoint": "ffbc"
  },
  {
    "id": "camera-star",
    "codepoint": "f841"
  },
  {
    "id": "camera-up",
    "codepoint": "f842"
  },
  {
    "id": "camera-x",
    "codepoint": "f843"
  },
  {
    "id": "camper",
    "codepoint": "fa25"
  },
  {
    "id": "campfire",
    "codepoint": "f5a7"
  },
  {
    "id": "canary",
    "codepoint": "101f5"
  },
  {
    "id": "cancel",
    "codepoint": "ff11"
  },
  {
    "id": "candle",
    "codepoint": "efc6"
  },
  {
    "id": "candy",
    "codepoint": "ef0d"
  },
  {
    "id": "candy-off",
    "codepoint": "f0c5"
  },
  {
    "id": "cane",
    "codepoint": "f50f"
  },
  {
    "id": "cannabis",
    "codepoint": "f4c1"
  },
  {
    "id": "cap-projecting",
    "codepoint": "ff22"
  },
  {
    "id": "cap-rounded",
    "codepoint": "ff21"
  },
  {
    "id": "cap-straight",
    "codepoint": "ff20"
  },
  {
    "id": "capsule",
    "codepoint": "fae3"
  },
  {
    "id": "capsule-horizontal",
    "codepoint": "fae2"
  },
  {
    "id": "capture",
    "codepoint": "ec3c"
  },
  {
    "id": "capture-off",
    "codepoint": "f0c6"
  },
  {
    "id": "car",
    "codepoint": "ebbb"
  },
  {
    "id": "car-4wd",
    "codepoint": "fdb8"
  },
  {
    "id": "car-crane",
    "codepoint": "ef25"
  },
  {
    "id": "car-crash",
    "codepoint": "efa4"
  },
  {
    "id": "car-door",
    "codepoint": "10250"
  },
  {
    "id": "car-fan",
    "codepoint": "fdb3"
  },
  {
    "id": "car-fan-1",
    "codepoint": "fdb7"
  },
  {
    "id": "car-fan-2",
    "codepoint": "fdb6"
  },
  {
    "id": "car-fan-3",
    "codepoint": "fdb5"
  },
  {
    "id": "car-fan-auto",
    "codepoint": "fdb4"
  },
  {
    "id": "car-garage",
    "codepoint": "fc77"
  },
  {
    "id": "car-lifter",
    "codepoint": "1024f"
  },
  {
    "id": "car-off",
    "codepoint": "f0c7"
  },
  {
    "id": "car-off-road",
    "codepoint": "10230"
  },
  {
    "id": "car-suspension",
    "codepoint": "1022f"
  },
  {
    "id": "car-suv",
    "codepoint": "fc8b"
  },
  {
    "id": "car-turbine",
    "codepoint": "f4fd"
  },
  {
    "id": "carambola",
    "codepoint": "feb9"
  },
  {
    "id": "caravan",
    "codepoint": "ec7c"
  },
  {
    "id": "cardboards",
    "codepoint": "ed74"
  },
  {
    "id": "cardboards-off",
    "codepoint": "f0c8"
  },
  {
    "id": "cards",
    "codepoint": "f510"
  },
  {
    "id": "caret-down",
    "codepoint": "eb5d"
  },
  {
    "id": "caret-left",
    "codepoint": "eb5e"
  },
  {
    "id": "caret-left-right",
    "codepoint": "fc43"
  },
  {
    "id": "caret-right",
    "codepoint": "eb5f"
  },
  {
    "id": "caret-up",
    "codepoint": "eb60"
  },
  {
    "id": "caret-up-down",
    "codepoint": "fc44"
  },
  {
    "id": "carousel-horizontal",
    "codepoint": "f659"
  },
  {
    "id": "carousel-vertical",
    "codepoint": "f65a"
  },
  {
    "id": "carrot",
    "codepoint": "f21c"
  },
  {
    "id": "carrot-off",
    "codepoint": "f3d0"
  },
  {
    "id": "cash",
    "codepoint": "ea55"
  },
  {
    "id": "cash-banknote",
    "codepoint": "ee25"
  },
  {
    "id": "cash-banknote-edit",
    "codepoint": "10149"
  },
  {
    "id": "cash-banknote-heart",
    "codepoint": "10148"
  },
  {
    "id": "cash-banknote-minus",
    "codepoint": "10147"
  },
  {
    "id": "cash-banknote-move",
    "codepoint": "10145"
  },
  {
    "id": "cash-banknote-move-back",
    "codepoint": "10146"
  },
  {
    "id": "cash-banknote-off",
    "codepoint": "ee24"
  },
  {
    "id": "cash-banknote-plus",
    "codepoint": "10144"
  },
  {
    "id": "cash-edit",
    "codepoint": "10143"
  },
  {
    "id": "cash-heart",
    "codepoint": "10142"
  },
  {
    "id": "cash-minus",
    "codepoint": "10141"
  },
  {
    "id": "cash-move",
    "codepoint": "1013f"
  },
  {
    "id": "cash-move-back",
    "codepoint": "10140"
  },
  {
    "id": "cash-off",
    "codepoint": "f105"
  },
  {
    "id": "cash-plus",
    "codepoint": "1013e"
  },
  {
    "id": "cash-register",
    "codepoint": "fee6"
  },
  {
    "id": "cast",
    "codepoint": "ea56"
  },
  {
    "id": "cast-off",
    "codepoint": "f0c9"
  },
  {
    "id": "cat",
    "codepoint": "f65b"
  },
  {
    "id": "category",
    "codepoint": "f1f6"
  },
  {
    "id": "category-2",
    "codepoint": "f1f5"
  },
  {
    "id": "category-minus",
    "codepoint": "fd20"
  },
  {
    "id": "category-plus",
    "codepoint": "fd21"
  },
  {
    "id": "ce",
    "codepoint": "ed75"
  },
  {
    "id": "ce-off",
    "codepoint": "f0ca"
  },
  {
    "id": "cell",
    "codepoint": "f05f"
  },
  {
    "id": "cell-signal-1",
    "codepoint": "f083"
  },
  {
    "id": "cell-signal-2",
    "codepoint": "f084"
  },
  {
    "id": "cell-signal-3",
    "codepoint": "f085"
  },
  {
    "id": "cell-signal-4",
    "codepoint": "f086"
  },
  {
    "id": "cell-signal-5",
    "codepoint": "f087"
  },
  {
    "id": "cell-signal-off",
    "codepoint": "f088"
  },
  {
    "id": "certificate",
    "codepoint": "ed76"
  },
  {
    "id": "certificate-2",
    "codepoint": "f073"
  },
  {
    "id": "certificate-2-off",
    "codepoint": "f0cb"
  },
  {
    "id": "certificate-off",
    "codepoint": "f0cc"
  },
  {
    "id": "chair-director",
    "codepoint": "f2d5"
  },
  {
    "id": "chalkboard",
    "codepoint": "f34d"
  },
  {
    "id": "chalkboard-off",
    "codepoint": "f3d1"
  },
  {
    "id": "chalkboard-teacher",
    "codepoint": "10160"
  },
  {
    "id": "charging-pile",
    "codepoint": "ee26"
  },
  {
    "id": "chart-arcs",
    "codepoint": "ee28"
  },
  {
    "id": "chart-arcs-3",
    "codepoint": "ee27"
  },
  {
    "id": "chart-area",
    "codepoint": "ea58"
  },
  {
    "id": "chart-area-line",
    "codepoint": "ea57"
  },
  {
    "id": "chart-arrows",
    "codepoint": "ee2a"
  },
  {
    "id": "chart-arrows-vertical",
    "codepoint": "ee29"
  },
  {
    "id": "chart-bar",
    "codepoint": "ea59"
  },
  {
    "id": "chart-bar-off",
    "codepoint": "f3d2"
  },
  {
    "id": "chart-bar-popular",
    "codepoint": "fef7"
  },
  {
    "id": "chart-bubble",
    "codepoint": "ec75"
  },
  {
    "id": "chart-candle",
    "codepoint": "ea5a"
  },
  {
    "id": "chart-circles",
    "codepoint": "ee2b"
  },
  {
    "id": "chart-cohort",
    "codepoint": "fef6"
  },
  {
    "id": "chart-column",
    "codepoint": "ffa5"
  },
  {
    "id": "chart-covariate",
    "codepoint": "ffa4"
  },
  {
    "id": "chart-donut",
    "codepoint": "ea5b"
  },
  {
    "id": "chart-donut-2",
    "codepoint": "ee2c"
  },
  {
    "id": "chart-donut-3",
    "codepoint": "ee2d"
  },
  {
    "id": "chart-donut-4",
    "codepoint": "ee2e"
  },
  {
    "id": "chart-dots",
    "codepoint": "ee2f"
  },
  {
    "id": "chart-dots-2",
    "codepoint": "f097"
  },
  {
    "id": "chart-dots-3",
    "codepoint": "f098"
  },
  {
    "id": "chart-funnel",
    "codepoint": "fef5"
  },
  {
    "id": "chart-grid-dots",
    "codepoint": "f4c2"
  },
  {
    "id": "chart-histogram",
    "codepoint": "f65c"
  },
  {
    "id": "chart-infographic",
    "codepoint": "ee30"
  },
  {
    "id": "chart-line",
    "codepoint": "ea5c"
  },
  {
    "id": "chart-pie",
    "codepoint": "ea5d"
  },
  {
    "id": "chart-pie-2",
    "codepoint": "ee31"
  },
  {
    "id": "chart-pie-3",
    "codepoint": "ee32"
  },
  {
    "id": "chart-pie-4",
    "codepoint": "ee33"
  },
  {
    "id": "chart-pie-off",
    "codepoint": "f3d3"
  },
  {
    "id": "chart-ppf",
    "codepoint": "f618"
  },
  {
    "id": "chart-radar",
    "codepoint": "ed77"
  },
  {
    "id": "chart-sankey",
    "codepoint": "f619"
  },
  {
    "id": "chart-scatter",
    "codepoint": "fd93"
  },
  {
    "id": "chart-scatter-3d",
    "codepoint": "fd92"
  },
  {
    "id": "chart-treemap",
    "codepoint": "f381"
  },
  {
    "id": "check",
    "codepoint": "ea5e"
  },
  {
    "id": "checkbox",
    "codepoint": "eba6"
  },
  {
    "id": "checklist",
    "codepoint": "f074"
  },
  {
    "id": "checks",
    "codepoint": "ebaa"
  },
  {
    "id": "checkup-list",
    "codepoint": "ef5a"
  },
  {
    "id": "cheese",
    "codepoint": "ef26"
  },
  {
    "id": "chef-hat",
    "codepoint": "f21d"
  },
  {
    "id": "chef-hat-off",
    "codepoint": "f3d4"
  },
  {
    "id": "cherry",
    "codepoint": "f511"
  },
  {
    "id": "chess",
    "codepoint": "f382"
  },
  {
    "id": "chess-bishop",
    "codepoint": "f56b"
  },
  {
    "id": "chess-king",
    "codepoint": "f56c"
  },
  {
    "id": "chess-knight",
    "codepoint": "f56d"
  },
  {
    "id": "chess-queen",
    "codepoint": "f56e"
  },
  {
    "id": "chess-rook",
    "codepoint": "f56f"
  },
  {
    "id": "chevron-compact-down",
    "codepoint": "faf0"
  },
  {
    "id": "chevron-compact-left",
    "codepoint": "faf1"
  },
  {
    "id": "chevron-compact-right",
    "codepoint": "faf2"
  },
  {
    "id": "chevron-compact-up",
    "codepoint": "faf3"
  },
  {
    "id": "chevron-down",
    "codepoint": "ea5f"
  },
  {
    "id": "chevron-down-left",
    "codepoint": "ed09"
  },
  {
    "id": "chevron-down-right",
    "codepoint": "ed0a"
  },
  {
    "id": "chevron-left",
    "codepoint": "ea60"
  },
  {
    "id": "chevron-left-pipe",
    "codepoint": "fae4"
  },
  {
    "id": "chevron-right",
    "codepoint": "ea61"
  },
  {
    "id": "chevron-right-pipe",
    "codepoint": "fae5"
  },
  {
    "id": "chevron-up",
    "codepoint": "ea62"
  },
  {
    "id": "chevron-up-left",
    "codepoint": "ed0b"
  },
  {
    "id": "chevron-up-right",
    "codepoint": "ed0c"
  },
  {
    "id": "chevrons-down",
    "codepoint": "ea63"
  },
  {
    "id": "chevrons-down-left",
    "codepoint": "ed0d"
  },
  {
    "id": "chevrons-down-right",
    "codepoint": "ed0e"
  },
  {
    "id": "chevrons-left",
    "codepoint": "ea64"
  },
  {
    "id": "chevrons-right",
    "codepoint": "ea65"
  },
  {
    "id": "chevrons-up",
    "codepoint": "ea66"
  },
  {
    "id": "chevrons-up-left",
    "codepoint": "ed0f"
  },
  {
    "id": "chevrons-up-right",
    "codepoint": "ed10"
  },
  {
    "id": "chisel",
    "codepoint": "f383"
  },
  {
    "id": "chocolate",
    "codepoint": "1024e"
  },
  {
    "id": "christmas-ball",
    "codepoint": "fd31"
  },
  {
    "id": "christmas-tree",
    "codepoint": "ed78"
  },
  {
    "id": "christmas-tree-off",
    "codepoint": "f3d5"
  },
  {
    "id": "circle",
    "codepoint": "ea6b"
  },
  {
    "id": "circle-0",
    "codepoint": "ee34"
  },
  {
    "id": "circle-1",
    "codepoint": "ee35"
  },
  {
    "id": "circle-2",
    "codepoint": "ee36"
  },
  {
    "id": "circle-3",
    "codepoint": "ee37"
  },
  {
    "id": "circle-4",
    "codepoint": "ee38"
  },
  {
    "id": "circle-5",
    "codepoint": "ee39"
  },
  {
    "id": "circle-6",
    "codepoint": "ee3a"
  },
  {
    "id": "circle-7",
    "codepoint": "ee3b"
  },
  {
    "id": "circle-8",
    "codepoint": "ee3c"
  },
  {
    "id": "circle-9",
    "codepoint": "ee3d"
  },
  {
    "id": "circle-arrow-down",
    "codepoint": "f6f9"
  },
  {
    "id": "circle-arrow-down-left",
    "codepoint": "f6f6"
  },
  {
    "id": "circle-arrow-down-right",
    "codepoint": "f6f8"
  },
  {
    "id": "circle-arrow-left",
    "codepoint": "f6fb"
  },
  {
    "id": "circle-arrow-right",
    "codepoint": "f6fd"
  },
  {
    "id": "circle-arrow-up",
    "codepoint": "f703"
  },
  {
    "id": "circle-arrow-up-left",
    "codepoint": "f700"
  },
  {
    "id": "circle-arrow-up-right",
    "codepoint": "f702"
  },
  {
    "id": "circle-asterisk",
    "codepoint": "101ad"
  },
  {
    "id": "circle-caret-down",
    "codepoint": "f4a9"
  },
  {
    "id": "circle-caret-left",
    "codepoint": "f4aa"
  },
  {
    "id": "circle-caret-right",
    "codepoint": "f4ab"
  },
  {
    "id": "circle-caret-up",
    "codepoint": "f4ac"
  },
  {
    "id": "circle-check",
    "codepoint": "ea67"
  },
  {
    "id": "circle-chevron-down",
    "codepoint": "f622"
  },
  {
    "id": "circle-chevron-left",
    "codepoint": "f623"
  },
  {
    "id": "circle-chevron-right",
    "codepoint": "f624"
  },
  {
    "id": "circle-chevron-up",
    "codepoint": "f625"
  },
  {
    "id": "circle-chevrons-down",
    "codepoint": "f642"
  },
  {
    "id": "circle-chevrons-left",
    "codepoint": "f643"
  },
  {
    "id": "circle-chevrons-right",
    "codepoint": "f644"
  },
  {
    "id": "circle-chevrons-up",
    "codepoint": "f645"
  },
  {
    "id": "circle-dashed",
    "codepoint": "ed27"
  },
  {
    "id": "circle-dashed-check",
    "codepoint": "feb8"
  },
  {
    "id": "circle-dashed-letter-a",
    "codepoint": "ff9a"
  },
  {
    "id": "circle-dashed-letter-b",
    "codepoint": "ff99"
  },
  {
    "id": "circle-dashed-letter-c",
    "codepoint": "ff98"
  },
  {
    "id": "circle-dashed-letter-d",
    "codepoint": "ff97"
  },
  {
    "id": "circle-dashed-letter-e",
    "codepoint": "ff96"
  },
  {
    "id": "circle-dashed-letter-f",
    "codepoint": "ff95"
  },
  {
    "id": "circle-dashed-letter-g",
    "codepoint": "ff94"
  },
  {
    "id": "circle-dashed-letter-h",
    "codepoint": "ff93"
  },
  {
    "id": "circle-dashed-letter-i",
    "codepoint": "ff92"
  },
  {
    "id": "circle-dashed-letter-j",
    "codepoint": "ff91"
  },
  {
    "id": "circle-dashed-letter-k",
    "codepoint": "ff90"
  },
  {
    "id": "circle-dashed-letter-l",
    "codepoint": "ff8f"
  },
  {
    "id": "circle-dashed-letter-letter-v",
    "codepoint": "ff84"
  },
  {
    "id": "circle-dashed-letter-m",
    "codepoint": "ff8d"
  },
  {
    "id": "circle-dashed-letter-n",
    "codepoint": "ff8c"
  },
  {
    "id": "circle-dashed-letter-o",
    "codepoint": "ff8b"
  },
  {
    "id": "circle-dashed-letter-p",
    "codepoint": "ff8a"
  },
  {
    "id": "circle-dashed-letter-q",
    "codepoint": "ff89"
  },
  {
    "id": "circle-dashed-letter-r",
    "codepoint": "ff88"
  },
  {
    "id": "circle-dashed-letter-s",
    "codepoint": "ff87"
  },
  {
    "id": "circle-dashed-letter-t",
    "codepoint": "ff86"
  },
  {
    "id": "circle-dashed-letter-u",
    "codepoint": "ff85"
  },
  {
    "id": "circle-dashed-letter-v",
    "codepoint": "ff84"
  },
  {
    "id": "circle-dashed-letter-w",
    "codepoint": "ff83"
  },
  {
    "id": "circle-dashed-letter-x",
    "codepoint": "ff82"
  },
  {
    "id": "circle-dashed-letter-y",
    "codepoint": "ff81"
  },
  {
    "id": "circle-dashed-letter-z",
    "codepoint": "ff80"
  },
  {
    "id": "circle-dashed-minus",
    "codepoint": "feb7"
  },
  {
    "id": "circle-dashed-number-0",
    "codepoint": "fc6b"
  },
  {
    "id": "circle-dashed-number-1",
    "codepoint": "fc6c"
  },
  {
    "id": "circle-dashed-number-2",
    "codepoint": "fc6d"
  },
  {
    "id": "circle-dashed-number-3",
    "codepoint": "fc6e"
  },
  {
    "id": "circle-dashed-number-4",
    "codepoint": "fc6f"
  },
  {
    "id": "circle-dashed-number-5",
    "codepoint": "fc70"
  },
  {
    "id": "circle-dashed-number-6",
    "codepoint": "fc71"
  },
  {
    "id": "circle-dashed-number-7",
    "codepoint": "fc72"
  },
  {
    "id": "circle-dashed-number-8",
    "codepoint": "fc73"
  },
  {
    "id": "circle-dashed-number-9",
    "codepoint": "fc74"
  },
  {
    "id": "circle-dashed-percentage",
    "codepoint": "fd7a"
  },
  {
    "id": "circle-dashed-plus",
    "codepoint": "feb6"
  },
  {
    "id": "circle-dashed-x",
    "codepoint": "fc75"
  },
  {
    "id": "circle-dot",
    "codepoint": "efb1"
  },
  {
    "id": "circle-dotted",
    "codepoint": "ed28"
  },
  {
    "id": "circle-dotted-letter-a",
    "codepoint": "ff7f"
  },
  {
    "id": "circle-dotted-letter-b",
    "codepoint": "ff7e"
  },
  {
    "id": "circle-dotted-letter-c",
    "codepoint": "ff7d"
  },
  {
    "id": "circle-dotted-letter-d",
    "codepoint": "ff7c"
  },
  {
    "id": "circle-dotted-letter-e",
    "codepoint": "ff7b"
  },
  {
    "id": "circle-dotted-letter-f",
    "codepoint": "ff7a"
  },
  {
    "id": "circle-dotted-letter-g",
    "codepoint": "ff79"
  },
  {
    "id": "circle-dotted-letter-h",
    "codepoint": "ff78"
  },
  {
    "id": "circle-dotted-letter-i",
    "codepoint": "ff77"
  },
  {
    "id": "circle-dotted-letter-j",
    "codepoint": "ff76"
  },
  {
    "id": "circle-dotted-letter-k",
    "codepoint": "ff75"
  },
  {
    "id": "circle-dotted-letter-l",
    "codepoint": "ff74"
  },
  {
    "id": "circle-dotted-letter-m",
    "codepoint": "ff73"
  },
  {
    "id": "circle-dotted-letter-n",
    "codepoint": "ff72"
  },
  {
    "id": "circle-dotted-letter-o",
    "codepoint": "ff71"
  },
  {
    "id": "circle-dotted-letter-p",
    "codepoint": "ff70"
  },
  {
    "id": "circle-dotted-letter-q",
    "codepoint": "ff6f"
  },
  {
    "id": "circle-dotted-letter-r",
    "codepoint": "ff6e"
  },
  {
    "id": "circle-dotted-letter-s",
    "codepoint": "ff6d"
  },
  {
    "id": "circle-dotted-letter-t",
    "codepoint": "ff6c"
  },
  {
    "id": "circle-dotted-letter-u",
    "codepoint": "ff6b"
  },
  {
    "id": "circle-dotted-letter-v",
    "codepoint": "ff6a"
  },
  {
    "id": "circle-dotted-letter-w",
    "codepoint": "ff69"
  },
  {
    "id": "circle-dotted-letter-x",
    "codepoint": "ff68"
  },
  {
    "id": "circle-dotted-letter-y",
    "codepoint": "ff67"
  },
  {
    "id": "circle-dotted-letter-z",
    "codepoint": "ff66"
  },
  {
    "id": "circle-half",
    "codepoint": "ee3f"
  },
  {
    "id": "circle-half-2",
    "codepoint": "eff3"
  },
  {
    "id": "circle-half-vertical",
    "codepoint": "ee3e"
  },
  {
    "id": "circle-key",
    "codepoint": "f633"
  },
  {
    "id": "circle-letter-a",
    "codepoint": "f441"
  },
  {
    "id": "circle-letter-b",
    "codepoint": "f442"
  },
  {
    "id": "circle-letter-c",
    "codepoint": "f443"
  },
  {
    "id": "circle-letter-d",
    "codepoint": "f444"
  },
  {
    "id": "circle-letter-e",
    "codepoint": "f445"
  },
  {
    "id": "circle-letter-f",
    "codepoint": "f446"
  },
  {
    "id": "circle-letter-g",
    "codepoint": "f447"
  },
  {
    "id": "circle-letter-h",
    "codepoint": "f448"
  },
  {
    "id": "circle-letter-i",
    "codepoint": "f449"
  },
  {
    "id": "circle-letter-j",
    "codepoint": "f44a"
  },
  {
    "id": "circle-letter-k",
    "codepoint": "f44b"
  },
  {
    "id": "circle-letter-l",
    "codepoint": "f44c"
  },
  {
    "id": "circle-letter-m",
    "codepoint": "f44d"
  },
  {
    "id": "circle-letter-n",
    "codepoint": "f44e"
  },
  {
    "id": "circle-letter-o",
    "codepoint": "f44f"
  },
  {
    "id": "circle-letter-p",
    "codepoint": "f450"
  },
  {
    "id": "circle-letter-q",
    "codepoint": "f451"
  },
  {
    "id": "circle-letter-r",
    "codepoint": "f452"
  },
  {
    "id": "circle-letter-s",
    "codepoint": "f453"
  },
  {
    "id": "circle-letter-t",
    "codepoint": "f454"
  },
  {
    "id": "circle-letter-u",
    "codepoint": "f455"
  },
  {
    "id": "circle-letter-v",
    "codepoint": "f4ad"
  },
  {
    "id": "circle-letter-w",
    "codepoint": "f456"
  },
  {
    "id": "circle-letter-x",
    "codepoint": "f4ae"
  },
  {
    "id": "circle-letter-y",
    "codepoint": "f457"
  },
  {
    "id": "circle-letter-z",
    "codepoint": "f458"
  },
  {
    "id": "circle-minus",
    "codepoint": "ea68"
  },
  {
    "id": "circle-minus-2",
    "codepoint": "fc8c"
  },
  {
    "id": "circle-number-0",
    "codepoint": "ee34"
  },
  {
    "id": "circle-number-1",
    "codepoint": "ee35"
  },
  {
    "id": "circle-number-2",
    "codepoint": "ee36"
  },
  {
    "id": "circle-number-3",
    "codepoint": "ee37"
  },
  {
    "id": "circle-number-4",
    "codepoint": "ee38"
  },
  {
    "id": "circle-number-5",
    "codepoint": "ee39"
  },
  {
    "id": "circle-number-6",
    "codepoint": "ee3a"
  },
  {
    "id": "circle-number-7",
    "codepoint": "ee3b"
  },
  {
    "id": "circle-number-8",
    "codepoint": "ee3c"
  },
  {
    "id": "circle-number-9",
    "codepoint": "ee3d"
  },
  {
    "id": "circle-off",
    "codepoint": "ee40"
  },
  {
    "id": "circle-open-arrow-down",
    "codepoint": "10209"
  },
  {
    "id": "circle-open-arrow-left",
    "codepoint": "10208"
  },
  {
    "id": "circle-open-arrow-right",
    "codepoint": "10207"
  },
  {
    "id": "circle-open-arrow-up",
    "codepoint": "10206"
  },
  {
    "id": "circle-percentage",
    "codepoint": "fd7b"
  },
  {
    "id": "circle-plus",
    "codepoint": "ea69"
  },
  {
    "id": "circle-plus-2",
    "codepoint": "fc8d"
  },
  {
    "id": "circle-plus-minus",
    "codepoint": "10205"
  },
  {
    "id": "circle-rectangle",
    "codepoint": "f010"
  },
  {
    "id": "circle-rectangle-off",
    "codepoint": "f0cd"
  },
  {
    "id": "circle-square",
    "codepoint": "ece4"
  },
  {
    "id": "circle-triangle",
    "codepoint": "f011"
  },
  {
    "id": "circle-x",
    "codepoint": "ea6a"
  },
  {
    "id": "circles",
    "codepoint": "ece5"
  },
  {
    "id": "circles-relation",
    "codepoint": "f4c3"
  },
  {
    "id": "circuit-ammeter",
    "codepoint": "f271"
  },
  {
    "id": "circuit-battery",
    "codepoint": "f272"
  },
  {
    "id": "circuit-bulb",
    "codepoint": "f273"
  },
  {
    "id": "circuit-capacitor",
    "codepoint": "f275"
  },
  {
    "id": "circuit-capacitor-polarized",
    "codepoint": "f274"
  },
  {
    "id": "circuit-cell",
    "codepoint": "f277"
  },
  {
    "id": "circuit-cell-plus",
    "codepoint": "f276"
  },
  {
    "id": "circuit-changeover",
    "codepoint": "f278"
  },
  {
    "id": "circuit-diode",
    "codepoint": "f27a"
  },
  {
    "id": "circuit-diode-zener",
    "codepoint": "f279"
  },
  {
    "id": "circuit-ground",
    "codepoint": "f27c"
  },
  {
    "id": "circuit-ground-digital",
    "codepoint": "f27b"
  },
  {
    "id": "circuit-inductor",
    "codepoint": "f27d"
  },
  {
    "id": "circuit-motor",
    "codepoint": "f27e"
  },
  {
    "id": "circuit-pushbutton",
    "codepoint": "f27f"
  },
  {
    "id": "circuit-resistor",
    "codepoint": "f280"
  },
  {
    "id": "circuit-switch-closed",
    "codepoint": "f281"
  },
  {
    "id": "circuit-switch-open",
    "codepoint": "f282"
  },
  {
    "id": "circuit-voltmeter",
    "codepoint": "f283"
  },
  {
    "id": "clear-all",
    "codepoint": "ee41"
  },
  {
    "id": "clear-formatting",
    "codepoint": "ebe5"
  },
  {
    "id": "clef",
    "codepoint": "10240"
  },
  {
    "id": "clef-staff",
    "codepoint": "10241"
  },
  {
    "id": "click",
    "codepoint": "ebbc"
  },
  {
    "id": "cliff-jumping",
    "codepoint": "fefc"
  },
  {
    "id": "clipboard",
    "codepoint": "ea6f"
  },
  {
    "id": "clipboard-check",
    "codepoint": "ea6c"
  },
  {
    "id": "clipboard-copy",
    "codepoint": "f299"
  },
  {
    "id": "clipboard-data",
    "codepoint": "f563"
  },
  {
    "id": "clipboard-heart",
    "codepoint": "f34e"
  },
  {
    "id": "clipboard-list",
    "codepoint": "ea6d"
  },
  {
    "id": "clipboard-off",
    "codepoint": "f0ce"
  },
  {
    "id": "clipboard-plus",
    "codepoint": "efb2"
  },
  {
    "id": "clipboard-search",
    "codepoint": "10098"
  },
  {
    "id": "clipboard-smile",
    "codepoint": "fd9a"
  },
  {
    "id": "clipboard-text",
    "codepoint": "f089"
  },
  {
    "id": "clipboard-typography",
    "codepoint": "f34f"
  },
  {
    "id": "clipboard-x",
    "codepoint": "ea6e"
  },
  {
    "id": "clock",
    "codepoint": "ea70"
  },
  {
    "id": "clock-12",
    "codepoint": "fc56"
  },
  {
    "id": "clock-2",
    "codepoint": "f099"
  },
  {
    "id": "clock-24",
    "codepoint": "fc57"
  },
  {
    "id": "clock-bitcoin",
    "codepoint": "ff3f"
  },
  {
    "id": "clock-bolt",
    "codepoint": "f844"
  },
  {
    "id": "clock-cancel",
    "codepoint": "f546"
  },
  {
    "id": "clock-check",
    "codepoint": "f7c1"
  },
  {
    "id": "clock-code",
    "codepoint": "f845"
  },
  {
    "id": "clock-cog",
    "codepoint": "f7c2"
  },
  {
    "id": "clock-dollar",
    "codepoint": "f846"
  },
  {
    "id": "clock-down",
    "codepoint": "f7c3"
  },
  {
    "id": "clock-edit",
    "codepoint": "f547"
  },
  {
    "id": "clock-exclamation",
    "codepoint": "f847"
  },
  {
    "id": "clock-heart",
    "codepoint": "f7c4"
  },
  {
    "id": "clock-hour-1",
    "codepoint": "f313"
  },
  {
    "id": "clock-hour-10",
    "codepoint": "f314"
  },
  {
    "id": "clock-hour-11",
    "codepoint": "f315"
  },
  {
    "id": "clock-hour-12",
    "codepoint": "f316"
  },
  {
    "id": "clock-hour-2",
    "codepoint": "f317"
  },
  {
    "id": "clock-hour-3",
    "codepoint": "f318"
  },
  {
    "id": "clock-hour-4",
    "codepoint": "f319"
  },
  {
    "id": "clock-hour-5",
    "codepoint": "f31a"
  },
  {
    "id": "clock-hour-6",
    "codepoint": "f31b"
  },
  {
    "id": "clock-hour-7",
    "codepoint": "f31c"
  },
  {
    "id": "clock-hour-8",
    "codepoint": "f31d"
  },
  {
    "id": "clock-hour-9",
    "codepoint": "f31e"
  },
  {
    "id": "clock-minus",
    "codepoint": "f848"
  },
  {
    "id": "clock-off",
    "codepoint": "f0cf"
  },
  {
    "id": "clock-pause",
    "codepoint": "f548"
  },
  {
    "id": "clock-pin",
    "codepoint": "f849"
  },
  {
    "id": "clock-play",
    "codepoint": "f549"
  },
  {
    "id": "clock-plus",
    "codepoint": "f7c5"
  },
  {
    "id": "clock-question",
    "codepoint": "f7c6"
  },
  {
    "id": "clock-record",
    "codepoint": "f54a"
  },
  {
    "id": "clock-search",
    "codepoint": "f7c7"
  },
  {
    "id": "clock-share",
    "codepoint": "f84a"
  },
  {
    "id": "clock-shield",
    "codepoint": "f7c8"
  },
  {
    "id": "clock-star",
    "codepoint": "f7c9"
  },
  {
    "id": "clock-stop",
    "codepoint": "f54b"
  },
  {
    "id": "clock-up",
    "codepoint": "f7ca"
  },
  {
    "id": "clock-x",
    "codepoint": "f7cb"
  },
  {
    "id": "clothes-rack",
    "codepoint": "f285"
  },
  {
    "id": "clothes-rack-off",
    "codepoint": "f3d6"
  },
  {
    "id": "cloud",
    "codepoint": "ea76"
  },
  {
    "id": "cloud-bitcoin",
    "codepoint": "ff3e"
  },
  {
    "id": "cloud-bolt",
    "codepoint": "f84b"
  },
  {
    "id": "cloud-cancel",
    "codepoint": "f84c"
  },
  {
    "id": "cloud-check",
    "codepoint": "f84d"
  },
  {
    "id": "cloud-code",
    "codepoint": "f84e"
  },
  {
    "id": "cloud-cog",
    "codepoint": "f84f"
  },
  {
    "id": "cloud-computing",
    "codepoint": "f1d0"
  },
  {
    "id": "cloud-data-connection",
    "codepoint": "f1d1"
  },
  {
    "id": "cloud-dollar",
    "codepoint": "f850"
  },
  {
    "id": "cloud-down",
    "codepoint": "f851"
  },
  {
    "id": "cloud-download",
    "codepoint": "ea71"
  },
  {
    "id": "cloud-exclamation",
    "codepoint": "f852"
  },
  {
    "id": "cloud-fog",
    "codepoint": "ecd9"
  },
  {
    "id": "cloud-heart",
    "codepoint": "f853"
  },
  {
    "id": "cloud-lock",
    "codepoint": "efdb"
  },
  {
    "id": "cloud-lock-open",
    "codepoint": "efda"
  },
  {
    "id": "cloud-minus",
    "codepoint": "f854"
  },
  {
    "id": "cloud-network",
    "codepoint": "fc78"
  },
  {
    "id": "cloud-off",
    "codepoint": "ed3e"
  },
  {
    "id": "cloud-pause",
    "codepoint": "f855"
  },
  {
    "id": "cloud-pin",
    "codepoint": "f856"
  },
  {
    "id": "cloud-plus",
    "codepoint": "f857"
  },
  {
    "id": "cloud-question",
    "codepoint": "f858"
  },
  {
    "id": "cloud-rain",
    "codepoint": "ea72"
  },
  {
    "id": "cloud-search",
    "codepoint": "f859"
  },
  {
    "id": "cloud-share",
    "codepoint": "f85a"
  },
  {
    "id": "cloud-snow",
    "codepoint": "ea73"
  },
  {
    "id": "cloud-star",
    "codepoint": "f85b"
  },
  {
    "id": "cloud-storm",
    "codepoint": "ea74"
  },
  {
    "id": "cloud-up",
    "codepoint": "f85c"
  },
  {
    "id": "cloud-upload",
    "codepoint": "ea75"
  },
  {
    "id": "cloud-x",
    "codepoint": "f85d"
  },
  {
    "id": "clover",
    "codepoint": "f1ea"
  },
  {
    "id": "clover-2",
    "codepoint": "f21e"
  },
  {
    "id": "clubs",
    "codepoint": "eff4"
  },
  {
    "id": "code",
    "codepoint": "ea77"
  },
  {
    "id": "code-ai",
    "codepoint": "10267"
  },
  {
    "id": "code-asterisk",
    "codepoint": "f312"
  },
  {
    "id": "code-asterix",
    "codepoint": "f312"
  },
  {
    "id": "code-circle",
    "codepoint": "f4ff"
  },
  {
    "id": "code-circle-2",
    "codepoint": "f4fe"
  },
  {
    "id": "code-dots",
    "codepoint": "f61a"
  },
  {
    "id": "code-minus",
    "codepoint": "ee42"
  },
  {
    "id": "code-off",
    "codepoint": "f0d0"
  },
  {
    "id": "code-plus",
    "codepoint": "ee43"
  },
  {
    "id": "code-variable",
    "codepoint": "100ab"
  },
  {
    "id": "code-variable-minus",
    "codepoint": "100ad"
  },
  {
    "id": "code-variable-plus",
    "codepoint": "100ac"
  },
  {
    "id": "codeblock",
    "codepoint": "101f4"
  },
  {
    "id": "coffee",
    "codepoint": "ef0e"
  },
  {
    "id": "coffee-off",
    "codepoint": "f106"
  },
  {
    "id": "coffin",
    "codepoint": "f579"
  },
  {
    "id": "coin",
    "codepoint": "eb82"
  },
  {
    "id": "coin-bitcoin",
    "codepoint": "f2be"
  },
  {
    "id": "coin-euro",
    "codepoint": "f2bf"
  },
  {
    "id": "coin-monero",
    "codepoint": "f4a0"
  },
  {
    "id": "coin-off",
    "codepoint": "f0d1"
  },
  {
    "id": "coin-pound",
    "codepoint": "f2c0"
  },
  {
    "id": "coin-rupee",
    "codepoint": "f2c1"
  },
  {
    "id": "coin-taka",
    "codepoint": "fd0d"
  },
  {
    "id": "coin-yen",
    "codepoint": "f2c2"
  },
  {
    "id": "coin-yuan",
    "codepoint": "f2c3"
  },
  {
    "id": "coins",
    "codepoint": "f65d"
  },
  {
    "id": "color-filter",
    "codepoint": "f5a8"
  },
  {
    "id": "color-picker",
    "codepoint": "ebe6"
  },
  {
    "id": "color-picker-off",
    "codepoint": "f0d2"
  },
  {
    "id": "color-swatch",
    "codepoint": "eb61"
  },
  {
    "id": "color-swatch-off",
    "codepoint": "f0d3"
  },
  {
    "id": "column-insert-left",
    "codepoint": "ee44"
  },
  {
    "id": "column-insert-right",
    "codepoint": "ee45"
  },
  {
    "id": "column-remove",
    "codepoint": "faf4"
  },
  {
    "id": "columns",
    "codepoint": "eb83"
  },
  {
    "id": "columns-1",
    "codepoint": "f6d4"
  },
  {
    "id": "columns-2",
    "codepoint": "f6d5"
  },
  {
    "id": "columns-3",
    "codepoint": "f6d6"
  },
  {
    "id": "columns-off",
    "codepoint": "f0d4"
  },
  {
    "id": "comet",
    "codepoint": "ec76"
  },
  {
    "id": "command",
    "codepoint": "ea78"
  },
  {
    "id": "command-off",
    "codepoint": "f3d7"
  },
  {
    "id": "compass",
    "codepoint": "ea79"
  },
  {
    "id": "compass-off",
    "codepoint": "f0d5"
  },
  {
    "id": "components",
    "codepoint": "efa5"
  },
  {
    "id": "components-off",
    "codepoint": "f0d6"
  },
  {
    "id": "cone",
    "codepoint": "efdd"
  },
  {
    "id": "cone-2",
    "codepoint": "efdc"
  },
  {
    "id": "cone-off",
    "codepoint": "f3d8"
  },
  {
    "id": "cone-plus",
    "codepoint": "fa94"
  },
  {
    "id": "confetti",
    "codepoint": "ee46"
  },
  {
    "id": "confetti-off",
    "codepoint": "f3d9"
  },
  {
    "id": "confucius",
    "codepoint": "f58a"
  },
  {
    "id": "congruent-to",
    "codepoint": "ffa3"
  },
  {
    "id": "connection",
    "codepoint": "101f3"
  },
  {
    "id": "container",
    "codepoint": "ee47"
  },
  {
    "id": "container-off",
    "codepoint": "f107"
  },
  {
    "id": "contract",
    "codepoint": "fefb"
  },
  {
    "id": "contrast",
    "codepoint": "ec4e"
  },
  {
    "id": "contrast-2",
    "codepoint": "efc7"
  },
  {
    "id": "contrast-2-off",
    "codepoint": "f3da"
  },
  {
    "id": "contrast-off",
    "codepoint": "f3db"
  },
  {
    "id": "cooker",
    "codepoint": "f57a"
  },
  {
    "id": "cookie",
    "codepoint": "fdb1"
  },
  {
    "id": "cookie-man",
    "codepoint": "fdb2"
  },
  {
    "id": "cookie-off",
    "codepoint": "f0d7"
  },
  {
    "id": "copy",
    "codepoint": "ea7a"
  },
  {
    "id": "copy-check",
    "codepoint": "fdb0"
  },
  {
    "id": "copy-minus",
    "codepoint": "fdaf"
  },
  {
    "id": "copy-off",
    "codepoint": "f0d8"
  },
  {
    "id": "copy-plus",
    "codepoint": "fdae"
  },
  {
    "id": "copy-x",
    "codepoint": "fdad"
  },
  {
    "id": "copyleft",
    "codepoint": "ec3d"
  },
  {
    "id": "copyleft-off",
    "codepoint": "f0d9"
  },
  {
    "id": "copyright",
    "codepoint": "ea7b"
  },
  {
    "id": "copyright-off",
    "codepoint": "f0da"
  },
  {
    "id": "corner-down-left",
    "codepoint": "ea7c"
  },
  {
    "id": "corner-down-left-double",
    "codepoint": "ee48"
  },
  {
    "id": "corner-down-right",
    "codepoint": "ea7d"
  },
  {
    "id": "corner-down-right-double",
    "codepoint": "ee49"
  },
  {
    "id": "corner-left-down",
    "codepoint": "ea7e"
  },
  {
    "id": "corner-left-down-double",
    "codepoint": "ee4a"
  },
  {
    "id": "corner-left-up",
    "codepoint": "ea7f"
  },
  {
    "id": "corner-left-up-double",
    "codepoint": "ee4b"
  },
  {
    "id": "corner-right-down",
    "codepoint": "ea80"
  },
  {
    "id": "corner-right-down-double",
    "codepoint": "ee4c"
  },
  {
    "id": "corner-right-up",
    "codepoint": "ea81"
  },
  {
    "id": "corner-right-up-double",
    "codepoint": "ee4d"
  },
  {
    "id": "corner-up-left",
    "codepoint": "ea82"
  },
  {
    "id": "corner-up-left-double",
    "codepoint": "ee4e"
  },
  {
    "id": "corner-up-right",
    "codepoint": "ea83"
  },
  {
    "id": "corner-up-right-double",
    "codepoint": "ee4f"
  },
  {
    "id": "cpu",
    "codepoint": "ef8e"
  },
  {
    "id": "cpu-2",
    "codepoint": "f075"
  },
  {
    "id": "cpu-off",
    "codepoint": "f108"
  },
  {
    "id": "crane",
    "codepoint": "ef27"
  },
  {
    "id": "crane-off",
    "codepoint": "f109"
  },
  {
    "id": "creative-commons",
    "codepoint": "efb3"
  },
  {
    "id": "creative-commons-by",
    "codepoint": "f21f"
  },
  {
    "id": "creative-commons-nc",
    "codepoint": "f220"
  },
  {
    "id": "creative-commons-nd",
    "codepoint": "f221"
  },
  {
    "id": "creative-commons-off",
    "codepoint": "f10a"
  },
  {
    "id": "creative-commons-sa",
    "codepoint": "f222"
  },
  {
    "id": "creative-commons-zero",
    "codepoint": "f223"
  },
  {
    "id": "credit-card",
    "codepoint": "ea84"
  },
  {
    "id": "credit-card-hand",
    "codepoint": "1022e"
  },
  {
    "id": "credit-card-off",
    "codepoint": "ed11"
  },
  {
    "id": "credit-card-pay",
    "codepoint": "fd32"
  },
  {
    "id": "credit-card-refund",
    "codepoint": "fd33"
  },
  {
    "id": "credits",
    "codepoint": "101f2"
  },
  {
    "id": "cricket",
    "codepoint": "f09a"
  },
  {
    "id": "crop",
    "codepoint": "ea85"
  },
  {
    "id": "crop-1-1",
    "codepoint": "fd50"
  },
  {
    "id": "crop-16-9",
    "codepoint": "fd51"
  },
  {
    "id": "crop-3-2",
    "codepoint": "fd52"
  },
  {
    "id": "crop-5-4",
    "codepoint": "fd53"
  },
  {
    "id": "crop-7-5",
    "codepoint": "fd54"
  },
  {
    "id": "crop-landscape",
    "codepoint": "fd55"
  },
  {
    "id": "crop-portrait",
    "codepoint": "fd56"
  },
  {
    "id": "cross",
    "codepoint": "ef8f"
  },
  {
    "id": "cross-off",
    "codepoint": "f10b"
  },
  {
    "id": "crosshair",
    "codepoint": "ec3e"
  },
  {
    "id": "crown",
    "codepoint": "ed12"
  },
  {
    "id": "crown-off",
    "codepoint": "ee50"
  },
  {
    "id": "crutches",
    "codepoint": "ef5b"
  },
  {
    "id": "crutches-off",
    "codepoint": "f10c"
  },
  {
    "id": "crystal-ball",
    "codepoint": "f57b"
  },
  {
    "id": "csv",
    "codepoint": "f791"
  },
  {
    "id": "cube",
    "codepoint": "fa97"
  },
  {
    "id": "cube-3d-sphere",
    "codepoint": "ecd7"
  },
  {
    "id": "cube-3d-sphere-off",
    "codepoint": "f3b5"
  },
  {
    "id": "cube-off",
    "codepoint": "fa95"
  },
  {
    "id": "cube-plus",
    "codepoint": "fa96"
  },
  {
    "id": "cube-send",
    "codepoint": "f61b"
  },
  {
    "id": "cube-spark",
    "codepoint": "ffbb"
  },
  {
    "id": "cube-unfolded",
    "codepoint": "f61c"
  },
  {
    "id": "cup",
    "codepoint": "ef28"
  },
  {
    "id": "cup-off",
    "codepoint": "f10d"
  },
  {
    "id": "curling",
    "codepoint": "efc8"
  },
  {
    "id": "curly-loop",
    "codepoint": "ecda"
  },
  {
    "id": "currency",
    "codepoint": "efa6"
  },
  {
    "id": "currency-afghani",
    "codepoint": "f65e"
  },
  {
    "id": "currency-bahraini",
    "codepoint": "ee51"
  },
  {
    "id": "currency-baht",
    "codepoint": "f08a"
  },
  {
    "id": "currency-bitcoin",
    "codepoint": "ebab"
  },
  {
    "id": "currency-cent",
    "codepoint": "ee53"
  },
  {
    "id": "currency-dinar",
    "codepoint": "ee54"
  },
  {
    "id": "currency-dirham",
    "codepoint": "ee55"
  },
  {
    "id": "currency-dogecoin",
    "codepoint": "ef4b"
  },
  {
    "id": "currency-dollar",
    "codepoint": "eb84"
  },
  {
    "id": "currency-dollar-australian",
    "codepoint": "ee56"
  },
  {
    "id": "currency-dollar-brunei",
    "codepoint": "f36c"
  },
  {
    "id": "currency-dollar-canadian",
    "codepoint": "ee57"
  },
  {
    "id": "currency-dollar-guyanese",
    "codepoint": "f36d"
  },
  {
    "id": "currency-dollar-off",
    "codepoint": "f3dc"
  },
  {
    "id": "currency-dollar-singapore",
    "codepoint": "ee58"
  },
  {
    "id": "currency-dollar-zimbabwean",
    "codepoint": "f36e"
  },
  {
    "id": "currency-dong",
    "codepoint": "f36f"
  },
  {
    "id": "currency-dram",
    "codepoint": "f370"
  },
  {
    "id": "currency-ethereum",
    "codepoint": "ee59"
  },
  {
    "id": "currency-euro",
    "codepoint": "eb85"
  },
  {
    "id": "currency-euro-off",
    "codepoint": "f3dd"
  },
  {
    "id": "currency-florin",
    "codepoint": "faf5"
  },
  {
    "id": "currency-forint",
    "codepoint": "ee5a"
  },
  {
    "id": "currency-frank",
    "codepoint": "ee5b"
  },
  {
    "id": "currency-guarani",
    "codepoint": "f371"
  },
  {
    "id": "currency-hryvnia",
    "codepoint": "f372"
  },
  {
    "id": "currency-husd",
    "codepoint": "1023f"
  },
  {
    "id": "currency-iranian-rial",
    "codepoint": "fa58"
  },
  {
    "id": "currency-kip",
    "codepoint": "f373"
  },
  {
    "id": "currency-krone-czech",
    "codepoint": "ee5c"
  },
  {
    "id": "currency-krone-danish",
    "codepoint": "ee5d"
  },
  {
    "id": "currency-krone-swedish",
    "codepoint": "ee5e"
  },
  {
    "id": "currency-lari",
    "codepoint": "f374"
  },
  {
    "id": "currency-leu",
    "codepoint": "ee5f"
  },
  {
    "id": "currency-lira",
    "codepoint": "ee60"
  },
  {
    "id": "currency-litecoin",
    "codepoint": "ee61"
  },
  {
    "id": "currency-lyd",
    "codepoint": "f375"
  },
  {
    "id": "currency-manat",
    "codepoint": "f376"
  },
  {
    "id": "currency-monero",
    "codepoint": "f377"
  },
  {
    "id": "currency-naira",
    "codepoint": "ee62"
  },
  {
    "id": "currency-nano",
    "codepoint": "f7a6"
  },
  {
    "id": "currency-off",
    "codepoint": "f3de"
  },
  {
    "id": "currency-paanga",
    "codepoint": "f378"
  },
  {
    "id": "currency-peso",
    "codepoint": "f65f"
  },
  {
    "id": "currency-pound",
    "codepoint": "ebac"
  },
  {
    "id": "currency-pound-off",
    "codepoint": "f3df"
  },
  {
    "id": "currency-quetzal",
    "codepoint": "f379"
  },
  {
    "id": "currency-real",
    "codepoint": "ee63"
  },
  {
    "id": "currency-renminbi",
    "codepoint": "ee64"
  },
  {
    "id": "currency-ripple",
    "codepoint": "ee65"
  },
  {
    "id": "currency-riyal",
    "codepoint": "ee66"
  },
  {
    "id": "currency-rubel",
    "codepoint": "ee67"
  },
  {
    "id": "currency-ruble",
    "codepoint": "ee67"
  },
  {
    "id": "currency-rufiyaa",
    "codepoint": "f37a"
  },
  {
    "id": "currency-rupee",
    "codepoint": "ebad"
  },
  {
    "id": "currency-rupee-nepalese",
    "codepoint": "f37b"
  },
  {
    "id": "currency-shekel",
    "codepoint": "ee68"
  },
  {
    "id": "currency-solana",
    "codepoint": "f4a1"
  },
  {
    "id": "currency-som",
    "codepoint": "f37c"
  },
  {
    "id": "currency-taka",
    "codepoint": "ee69"
  },
  {
    "id": "currency-tenge",
    "codepoint": "f37d"
  },
  {
    "id": "currency-tether",
    "codepoint": "1023e"
  },
  {
    "id": "currency-tugrik",
    "codepoint": "ee6a"
  },
  {
    "id": "currency-won",
    "codepoint": "ee6b"
  },
  {
    "id": "currency-xrp",
    "codepoint": "fd34"
  },
  {
    "id": "currency-yen",
    "codepoint": "ebae"
  },
  {
    "id": "currency-yen-off",
    "codepoint": "f3e0"
  },
  {
    "id": "currency-yuan",
    "codepoint": "f29a"
  },
  {
    "id": "currency-zcash",
    "codepoint": "1023d"
  },
  {
    "id": "currency-zloty",
    "codepoint": "ee6c"
  },
  {
    "id": "current-location",
    "codepoint": "ecef"
  },
  {
    "id": "current-location-off",
    "codepoint": "f10e"
  },
  {
    "id": "cursor-off",
    "codepoint": "f10f"
  },
  {
    "id": "cursor-text",
    "codepoint": "ee6d"
  },
  {
    "id": "cut",
    "codepoint": "ea86"
  },
  {
    "id": "cylinder",
    "codepoint": "f54c"
  },
  {
    "id": "cylinder-off",
    "codepoint": "fa98"
  },
  {
    "id": "cylinder-plus",
    "codepoint": "fa99"
  },
  {
    "id": "dashboard",
    "codepoint": "ea87"
  },
  {
    "id": "dashboard-off",
    "codepoint": "f3e1"
  },
  {
    "id": "database",
    "codepoint": "ea88"
  },
  {
    "id": "database-cog",
    "codepoint": "fa10"
  },
  {
    "id": "database-dollar",
    "codepoint": "fa11"
  },
  {
    "id": "database-edit",
    "codepoint": "fa12"
  },
  {
    "id": "database-exclamation",
    "codepoint": "fa13"
  },
  {
    "id": "database-export",
    "codepoint": "ee6e"
  },
  {
    "id": "database-heart",
    "codepoint": "fa14"
  },
  {
    "id": "database-import",
    "codepoint": "ee6f"
  },
  {
    "id": "database-leak",
    "codepoint": "fa15"
  },
  {
    "id": "database-minus",
    "codepoint": "fa16"
  },
  {
    "id": "database-off",
    "codepoint": "ee70"
  },
  {
    "id": "database-plus",
    "codepoint": "fa17"
  },
  {
    "id": "database-search",
    "codepoint": "fa18"
  },
  {
    "id": "database-share",
    "codepoint": "fa19"
  },
  {
    "id": "database-smile",
    "codepoint": "fd9b"
  },
  {
    "id": "database-star",
    "codepoint": "fa1a"
  },
  {
    "id": "database-x",
    "codepoint": "fa1b"
  },
  {
    "id": "deaf",
    "codepoint": "101ac"
  },
  {
    "id": "decimal",
    "codepoint": "fa26"
  },
  {
    "id": "deer",
    "codepoint": "f4c5"
  },
  {
    "id": "delta",
    "codepoint": "f53c"
  },
  {
    "id": "dental",
    "codepoint": "f025"
  },
  {
    "id": "dental-broken",
    "codepoint": "f286"
  },
  {
    "id": "dental-off",
    "codepoint": "f110"
  },
  {
    "id": "deselect",
    "codepoint": "f9f3"
  },
  {
    "id": "desk",
    "codepoint": "fd35"
  },
  {
    "id": "details",
    "codepoint": "ee71"
  },
  {
    "id": "details-off",
    "codepoint": "f3e2"
  },
  {
    "id": "device-3d-camera",
    "codepoint": "1022d"
  },
  {
    "id": "device-3d-lens",
    "codepoint": "1022c"
  },
  {
    "id": "device-airpods",
    "codepoint": "f5a9"
  },
  {
    "id": "device-airpods-case",
    "codepoint": "f646"
  },
  {
    "id": "device-airtag",
    "codepoint": "fae6"
  },
  {
    "id": "device-analytics",
    "codepoint": "ee72"
  },
  {
    "id": "device-audio-tape",
    "codepoint": "ee73"
  },
  {
    "id": "device-camera-phone",
    "codepoint": "f233"
  },
  {
    "id": "device-cctv",
    "codepoint": "ee74"
  },
  {
    "id": "device-cctv-off",
    "codepoint": "f3e3"
  },
  {
    "id": "device-computer-camera",
    "codepoint": "ee76"
  },
  {
    "id": "device-computer-camera-2",
    "codepoint": "1023c"
  },
  {
    "id": "device-computer-camera-off",
    "codepoint": "ee75"
  },
  {
    "id": "device-desktop",
    "codepoint": "ea89"
  },
  {
    "id": "device-desktop-analytics",
    "codepoint": "ee77"
  },
  {
    "id": "device-desktop-bolt",
    "codepoint": "f85e"
  },
  {
    "id": "device-desktop-cancel",
    "codepoint": "f85f"
  },
  {
    "id": "device-desktop-check",
    "codepoint": "f860"
  },
  {
    "id": "device-desktop-code",
    "codepoint": "f861"
  },
  {
    "id": "device-desktop-cog",
    "codepoint": "f862"
  },
  {
    "id": "device-desktop-dollar",
    "codepoint": "f863"
  },
  {
    "id": "device-desktop-down",
    "codepoint": "f864"
  },
  {
    "id": "device-desktop-exclamation",
    "codepoint": "f865"
  },
  {
    "id": "device-desktop-heart",
    "codepoint": "f866"
  },
  {
    "id": "device-desktop-minus",
    "codepoint": "f867"
  },
  {
    "id": "device-desktop-off",
    "codepoint": "ee78"
  },
  {
    "id": "device-desktop-pause",
    "codepoint": "f868"
  },
  {
    "id": "device-desktop-pin",
    "codepoint": "f869"
  },
  {
    "id": "device-desktop-plus",
    "codepoint": "f86a"
  },
  {
    "id": "device-desktop-question",
    "codepoint": "f86b"
  },
  {
    "id": "device-desktop-search",
    "codepoint": "f86c"
  },
  {
    "id": "device-desktop-share",
    "codepoint": "f86d"
  },
  {
    "id": "device-desktop-star",
    "codepoint": "f86e"
  },
  {
    "id": "device-desktop-up",
    "codepoint": "f86f"
  },
  {
    "id": "device-desktop-x",
    "codepoint": "f870"
  },
  {
    "id": "device-floppy",
    "codepoint": "eb62"
  },
  {
    "id": "device-gamepad",
    "codepoint": "eb63"
  },
  {
    "id": "device-gamepad-2",
    "codepoint": "f1d2"
  },
  {
    "id": "device-gamepad-3",
    "codepoint": "fc58"
  },
  {
    "id": "device-heart-monitor",
    "codepoint": "f060"
  },
  {
    "id": "device-imac",
    "codepoint": "f7a7"
  },
  {
    "id": "device-imac-bolt",
    "codepoint": "f871"
  },
  {
    "id": "device-imac-cancel",
    "codepoint": "f872"
  },
  {
    "id": "device-imac-check",
    "codepoint": "f873"
  },
  {
    "id": "device-imac-code",
    "codepoint": "f874"
  },
  {
    "id": "device-imac-cog",
    "codepoint": "f875"
  },
  {
    "id": "device-imac-dollar",
    "codepoint": "f876"
  },
  {
    "id": "device-imac-down",
    "codepoint": "f877"
  },
  {
    "id": "device-imac-exclamation",
    "codepoint": "f878"
  },
  {
    "id": "device-imac-heart",
    "codepoint": "f879"
  },
  {
    "id": "device-imac-minus",
    "codepoint": "f87a"
  },
  {
    "id": "device-imac-off",
    "codepoint": "f87b"
  },
  {
    "id": "device-imac-pause",
    "codepoint": "f87c"
  },
  {
    "id": "device-imac-pin",
    "codepoint": "f87d"
  },
  {
    "id": "device-imac-plus",
    "codepoint": "f87e"
  },
  {
    "id": "device-imac-question",
    "codepoint": "f87f"
  },
  {
    "id": "device-imac-search",
    "codepoint": "f880"
  },
  {
    "id": "device-imac-share",
    "codepoint": "f881"
  },
  {
    "id": "device-imac-star",
    "codepoint": "f882"
  },
  {
    "id": "device-imac-up",
    "codepoint": "f883"
  },
  {
    "id": "device-imac-x",
    "codepoint": "f884"
  },
  {
    "id": "device-ipad",
    "codepoint": "f648"
  },
  {
    "id": "device-ipad-bolt",
    "codepoint": "f885"
  },
  {
    "id": "device-ipad-cancel",
    "codepoint": "f886"
  },
  {
    "id": "device-ipad-check",
    "codepoint": "f887"
  },
  {
    "id": "device-ipad-code",
    "codepoint": "f888"
  },
  {
    "id": "device-ipad-cog",
    "codepoint": "f889"
  },
  {
    "id": "device-ipad-dollar",
    "codepoint": "f88a"
  },
  {
    "id": "device-ipad-down",
    "codepoint": "f88b"
  },
  {
    "id": "device-ipad-exclamation",
    "codepoint": "f88c"
  },
  {
    "id": "device-ipad-heart",
    "codepoint": "f88d"
  },
  {
    "id": "device-ipad-horizontal",
    "codepoint": "f647"
  },
  {
    "id": "device-ipad-horizontal-bolt",
    "codepoint": "f88e"
  },
  {
    "id": "device-ipad-horizontal-cancel",
    "codepoint": "f88f"
  },
  {
    "id": "device-ipad-horizontal-check",
    "codepoint": "f890"
  },
  {
    "id": "device-ipad-horizontal-code",
    "codepoint": "f891"
  },
  {
    "id": "device-ipad-horizontal-cog",
    "codepoint": "f892"
  },
  {
    "id": "device-ipad-horizontal-dollar",
    "codepoint": "f893"
  },
  {
    "id": "device-ipad-horizontal-down",
    "codepoint": "f894"
  },
  {
    "id": "device-ipad-horizontal-exclamation",
    "codepoint": "f895"
  },
  {
    "id": "device-ipad-horizontal-heart",
    "codepoint": "f896"
  },
  {
    "id": "device-ipad-horizontal-minus",
    "codepoint": "f897"
  },
  {
    "id": "device-ipad-horizontal-off",
    "codepoint": "f898"
  },
  {
    "id": "device-ipad-horizontal-pause",
    "codepoint": "f899"
  },
  {
    "id": "device-ipad-horizontal-pin",
    "codepoint": "f89a"
  },
  {
    "id": "device-ipad-horizontal-plus",
    "codepoint": "f89b"
  },
  {
    "id": "device-ipad-horizontal-question",
    "codepoint": "f89c"
  },
  {
    "id": "device-ipad-horizontal-search",
    "codepoint": "f89d"
  },
  {
    "id": "device-ipad-horizontal-share",
    "codepoint": "f89e"
  },
  {
    "id": "device-ipad-horizontal-star",
    "codepoint": "f89f"
  },
  {
    "id": "device-ipad-horizontal-up",
    "codepoint": "f8a0"
  },
  {
    "id": "device-ipad-horizontal-x",
    "codepoint": "f8a1"
  },
  {
    "id": "device-ipad-minus",
    "codepoint": "f8a2"
  },
  {
    "id": "device-ipad-off",
    "codepoint": "f8a3"
  },
  {
    "id": "device-ipad-pause",
    "codepoint": "f8a4"
  },
  {
    "id": "device-ipad-pin",
    "codepoint": "f8a5"
  },
  {
    "id": "device-ipad-plus",
    "codepoint": "f8a6"
  },
  {
    "id": "device-ipad-question",
    "codepoint": "f8a7"
  },
  {
    "id": "device-ipad-search",
    "codepoint": "f8a8"
  },
  {
    "id": "device-ipad-share",
    "codepoint": "f8a9"
  },
  {
    "id": "device-ipad-star",
    "codepoint": "f8aa"
  },
  {
    "id": "device-ipad-up",
    "codepoint": "f8ab"
  },
  {
    "id": "device-ipad-x",
    "codepoint": "f8ac"
  },
  {
    "id": "device-landline-phone",
    "codepoint": "f649"
  },
  {
    "id": "device-laptop",
    "codepoint": "eb64"
  },
  {
    "id": "device-laptop-off",
    "codepoint": "f061"
  },
  {
    "id": "device-mobile",
    "codepoint": "ea8a"
  },
  {
    "id": "device-mobile-bolt",
    "codepoint": "f8ad"
  },
  {
    "id": "device-mobile-cancel",
    "codepoint": "f8ae"
  },
  {
    "id": "device-mobile-charging",
    "codepoint": "f224"
  },
  {
    "id": "device-mobile-check",
    "codepoint": "f8af"
  },
  {
    "id": "device-mobile-code",
    "codepoint": "f8b0"
  },
  {
    "id": "device-mobile-cog",
    "codepoint": "f8b1"
  },
  {
    "id": "device-mobile-dollar",
    "codepoint": "f8b2"
  },
  {
    "id": "device-mobile-down",
    "codepoint": "f8b3"
  },
  {
    "id": "device-mobile-exclamation",
    "codepoint": "f8b4"
  },
  {
    "id": "device-mobile-heart",
    "codepoint": "f8b5"
  },
  {
    "id": "device-mobile-message",
    "codepoint": "ee79"
  },
  {
    "id": "device-mobile-minus",
    "codepoint": "f8b6"
  },
  {
    "id": "device-mobile-off",
    "codepoint": "f062"
  },
  {
    "id": "device-mobile-pause",
    "codepoint": "f8b7"
  },
  {
    "id": "device-mobile-pin",
    "codepoint": "f8b8"
  },
  {
    "id": "device-mobile-plus",
    "codepoint": "f8b9"
  },
  {
    "id": "device-mobile-question",
    "codepoint": "f8ba"
  },
  {
    "id": "device-mobile-rotated",
    "codepoint": "ecdb"
  },
  {
    "id": "device-mobile-search",
    "codepoint": "f8bb"
  },
  {
    "id": "device-mobile-share",
    "codepoint": "f8bc"
  },
  {
    "id": "device-mobile-star",
    "codepoint": "f8bd"
  },
  {
    "id": "device-mobile-up",
    "codepoint": "f8be"
  },
  {
    "id": "device-mobile-vibration",
    "codepoint": "eb86"
  },
  {
    "id": "device-mobile-x",
    "codepoint": "f8bf"
  },
  {
    "id": "device-nintendo",
    "codepoint": "f026"
  },
  {
    "id": "device-nintendo-off",
    "codepoint": "f111"
  },
  {
    "id": "device-projector",
    "codepoint": "fc11"
  },
  {
    "id": "device-remote",
    "codepoint": "f792"
  },
  {
    "id": "device-screen",
    "codepoint": "1022b"
  },
  {
    "id": "device-sd-card",
    "codepoint": "f384"
  },
  {
    "id": "device-sim",
    "codepoint": "f4b2"
  },
  {
    "id": "device-sim-1",
    "codepoint": "f4af"
  },
  {
    "id": "device-sim-2",
    "codepoint": "f4b0"
  },
  {
    "id": "device-sim-3",
    "codepoint": "f4b1"
  },
  {
    "id": "device-speaker",
    "codepoint": "ea8b"
  },
  {
    "id": "device-speaker-off",
    "codepoint": "f112"
  },
  {
    "id": "device-tablet",
    "codepoint": "ea8c"
  },
  {
    "id": "device-tablet-bolt",
    "codepoint": "f8c0"
  },
  {
    "id": "device-tablet-cancel",
    "codepoint": "f8c1"
  },
  {
    "id": "device-tablet-check",
    "codepoint": "f8c2"
  },
  {
    "id": "device-tablet-code",
    "codepoint": "f8c3"
  },
  {
    "id": "device-tablet-cog",
    "codepoint": "f8c4"
  },
  {
    "id": "device-tablet-dollar",
    "codepoint": "f8c5"
  },
  {
    "id": "device-tablet-down",
    "codepoint": "f8c6"
  },
  {
    "id": "device-tablet-exclamation",
    "codepoint": "f8c7"
  },
  {
    "id": "device-tablet-heart",
    "codepoint": "f8c8"
  },
  {
    "id": "device-tablet-minus",
    "codepoint": "f8c9"
  },
  {
    "id": "device-tablet-off",
    "codepoint": "f063"
  },
  {
    "id": "device-tablet-pause",
    "codepoint": "f8ca"
  },
  {
    "id": "device-tablet-pin",
    "codepoint": "f8cb"
  },
  {
    "id": "device-tablet-plus",
    "codepoint": "f8cc"
  },
  {
    "id": "device-tablet-question",
    "codepoint": "f8cd"
  },
  {
    "id": "device-tablet-search",
    "codepoint": "f8ce"
  },
  {
    "id": "device-tablet-share",
    "codepoint": "f8cf"
  },
  {
    "id": "device-tablet-star",
    "codepoint": "f8d0"
  },
  {
    "id": "device-tablet-up",
    "codepoint": "f8d1"
  },
  {
    "id": "device-tablet-x",
    "codepoint": "f8d2"
  },
  {
    "id": "device-tv",
    "codepoint": "ea8d"
  },
  {
    "id": "device-tv-off",
    "codepoint": "f064"
  },
  {
    "id": "device-tv-old",
    "codepoint": "f1d3"
  },
  {
    "id": "device-unknown",
    "codepoint": "fef4"
  },
  {
    "id": "device-usb",
    "codepoint": "fc59"
  },
  {
    "id": "device-vision-pro",
    "codepoint": "fae7"
  },
  {
    "id": "device-vision-pro-wifi",
    "codepoint": "10274"
  },
  {
    "id": "device-watch",
    "codepoint": "ebf9"
  },
  {
    "id": "device-watch-bolt",
    "codepoint": "f8d3"
  },
  {
    "id": "device-watch-cancel",
    "codepoint": "f8d4"
  },
  {
    "id": "device-watch-check",
    "codepoint": "f8d5"
  },
  {
    "id": "device-watch-code",
    "codepoint": "f8d6"
  },
  {
    "id": "device-watch-cog",
    "codepoint": "f8d7"
  },
  {
    "id": "device-watch-dollar",
    "codepoint": "f8d8"
  },
  {
    "id": "device-watch-down",
    "codepoint": "f8d9"
  },
  {
    "id": "device-watch-exclamation",
    "codepoint": "f8da"
  },
  {
    "id": "device-watch-heart",
    "codepoint": "f8db"
  },
  {
    "id": "device-watch-minus",
    "codepoint": "f8dc"
  },
  {
    "id": "device-watch-off",
    "codepoint": "f065"
  },
  {
    "id": "device-watch-pause",
    "codepoint": "f8dd"
  },
  {
    "id": "device-watch-pin",
    "codepoint": "f8de"
  },
  {
    "id": "device-watch-plus",
    "codepoint": "f8df"
  },
  {
    "id": "device-watch-question",
    "codepoint": "f8e0"
  },
  {
    "id": "device-watch-search",
    "codepoint": "f8e1"
  },
  {
    "id": "device-watch-share",
    "codepoint": "f8e2"
  },
  {
    "id": "device-watch-star",
    "codepoint": "f8e3"
  },
  {
    "id": "device-watch-stats",
    "codepoint": "ef7d"
  },
  {
    "id": "device-watch-stats-2",
    "codepoint": "ef7c"
  },
  {
    "id": "device-watch-up",
    "codepoint": "f8e4"
  },
  {
    "id": "device-watch-x",
    "codepoint": "f8e5"
  },
  {
    "id": "device-workstation",
    "codepoint": "10273"
  },
  {
    "id": "devices",
    "codepoint": "eb87"
  },
  {
    "id": "devices-2",
    "codepoint": "ed29"
  },
  {
    "id": "devices-bolt",
    "codepoint": "f8e6"
  },
  {
    "id": "devices-cancel",
    "codepoint": "f8e7"
  },
  {
    "id": "devices-check",
    "codepoint": "f8e8"
  },
  {
    "id": "devices-code",
    "codepoint": "f8e9"
  },
  {
    "id": "devices-cog",
    "codepoint": "f8ea"
  },
  {
    "id": "devices-dollar",
    "codepoint": "f8eb"
  },
  {
    "id": "devices-down",
    "codepoint": "f8ec"
  },
  {
    "id": "devices-exclamation",
    "codepoint": "f8ed"
  },
  {
    "id": "devices-heart",
    "codepoint": "f8ee"
  },
  {
    "id": "devices-minus",
    "codepoint": "f8ef"
  },
  {
    "id": "devices-off",
    "codepoint": "f3e4"
  },
  {
    "id": "devices-pause",
    "codepoint": "f8f0"
  },
  {
    "id": "devices-pc",
    "codepoint": "ee7a"
  },
  {
    "id": "devices-pc-off",
    "codepoint": "f113"
  },
  {
    "id": "devices-pin",
    "codepoint": "f8f1"
  },
  {
    "id": "devices-plus",
    "codepoint": "f8f2"
  },
  {
    "id": "devices-question",
    "codepoint": "f8f3"
  },
  {
    "id": "devices-search",
    "codepoint": "f8f4"
  },
  {
    "id": "devices-share",
    "codepoint": "f8f5"
  },
  {
    "id": "devices-star",
    "codepoint": "f8f6"
  },
  {
    "id": "devices-up",
    "codepoint": "f8f7"
  },
  {
    "id": "devices-x",
    "codepoint": "f8f8"
  },
  {
    "id": "diabolo",
    "codepoint": "fa9c"
  },
  {
    "id": "diabolo-off",
    "codepoint": "fa9a"
  },
  {
    "id": "diabolo-plus",
    "codepoint": "fa9b"
  },
  {
    "id": "dialpad",
    "codepoint": "f067"
  },
  {
    "id": "dialpad-off",
    "codepoint": "f114"
  },
  {
    "id": "diamond",
    "codepoint": "eb65"
  },
  {
    "id": "diamond-off",
    "codepoint": "f115"
  },
  {
    "id": "diamonds",
    "codepoint": "eff5"
  },
  {
    "id": "diaper",
    "codepoint": "ffa2"
  },
  {
    "id": "dice",
    "codepoint": "eb66"
  },
  {
    "id": "dice-1",
    "codepoint": "f08b"
  },
  {
    "id": "dice-2",
    "codepoint": "f08c"
  },
  {
    "id": "dice-3",
    "codepoint": "f08d"
  },
  {
    "id": "dice-4",
    "codepoint": "f08e"
  },
  {
    "id": "dice-5",
    "codepoint": "f08f"
  },
  {
    "id": "dice-6",
    "codepoint": "f090"
  },
  {
    "id": "dimensions",
    "codepoint": "ee7b"
  },
  {
    "id": "direction",
    "codepoint": "ebfb"
  },
  {
    "id": "direction-arrows",
    "codepoint": "fd36"
  },
  {
    "id": "direction-horizontal",
    "codepoint": "ebfa"
  },
  {
    "id": "direction-sign",
    "codepoint": "f1f7"
  },
  {
    "id": "direction-sign-off",
    "codepoint": "f3e5"
  },
  {
    "id": "directions",
    "codepoint": "ea8e"
  },
  {
    "id": "directions-off",
    "codepoint": "f116"
  },
  {
    "id": "disabled",
    "codepoint": "ea8f"
  },
  {
    "id": "disabled-2",
    "codepoint": "ebaf"
  },
  {
    "id": "disabled-off",
    "codepoint": "f117"
  },
  {
    "id": "disc",
    "codepoint": "ea90"
  },
  {
    "id": "disc-golf",
    "codepoint": "f385"
  },
  {
    "id": "disc-off",
    "codepoint": "f118"
  },
  {
    "id": "discount",
    "codepoint": "ebbd"
  },
  {
    "id": "discount-2",
    "codepoint": "ee7c"
  },
  {
    "id": "discount-2-off",
    "codepoint": "f3e6"
  },
  {
    "id": "discount-check",
    "codepoint": "f1f8"
  },
  {
    "id": "discount-off",
    "codepoint": "f3e7"
  },
  {
    "id": "divide",
    "codepoint": "ed5c"
  },
  {
    "id": "dna",
    "codepoint": "ee7d"
  },
  {
    "id": "dna-2",
    "codepoint": "ef5c"
  },
  {
    "id": "dna-2-off",
    "codepoint": "f119"
  },
  {
    "id": "dna-off",
    "codepoint": "f11a"
  },
  {
    "id": "dog",
    "codepoint": "f660"
  },
  {
    "id": "dog-bowl",
    "codepoint": "ef29"
  },
  {
    "id": "door",
    "codepoint": "ef4e"
  },
  {
    "id": "door-enter",
    "codepoint": "ef4c"
  },
  {
    "id": "door-exit",
    "codepoint": "ef4d"
  },
  {
    "id": "door-hanger",
    "codepoint": "1023b"
  },
  {
    "id": "door-off",
    "codepoint": "f11b"
  },
  {
    "id": "dots",
    "codepoint": "ea95"
  },
  {
    "id": "dots-circle-horizontal",
    "codepoint": "ea91"
  },
  {
    "id": "dots-diagonal",
    "codepoint": "ea93"
  },
  {
    "id": "dots-diagonal-2",
    "codepoint": "ea92"
  },
  {
    "id": "dots-vertical",
    "codepoint": "ea94"
  },
  {
    "id": "download",
    "codepoint": "ea96"
  },
  {
    "id": "download-off",
    "codepoint": "f11c"
  },
  {
    "id": "drag-drop",
    "codepoint": "eb89"
  },
  {
    "id": "drag-drop-2",
    "codepoint": "eb88"
  },
  {
    "id": "dragon",
    "codepoint": "10272"
  },
  {
    "id": "drone",
    "codepoint": "ed79"
  },
  {
    "id": "drone-off",
    "codepoint": "ee7e"
  },
  {
    "id": "drop-circle",
    "codepoint": "efde"
  },
  {
    "id": "droplet",
    "codepoint": "ea97"
  },
  {
    "id": "droplet-bolt",
    "codepoint": "f8f9"
  },
  {
    "id": "droplet-cancel",
    "codepoint": "f8fa"
  },
  {
    "id": "droplet-check",
    "codepoint": "f8fb"
  },
  {
    "id": "droplet-code",
    "codepoint": "f8fc"
  },
  {
    "id": "droplet-cog",
    "codepoint": "f8fd"
  },
  {
    "id": "droplet-dollar",
    "codepoint": "f8fe"
  },
  {
    "id": "droplet-down",
    "codepoint": "f8ff"
  },
  {
    "id": "droplet-exclamation",
    "codepoint": "f900"
  },
  {
    "id": "droplet-half",
    "codepoint": "ee82"
  },
  {
    "id": "droplet-half-2",
    "codepoint": "ee81"
  },
  {
    "id": "droplet-heart",
    "codepoint": "f901"
  },
  {
    "id": "droplet-minus",
    "codepoint": "f902"
  },
  {
    "id": "droplet-off",
    "codepoint": "ee83"
  },
  {
    "id": "droplet-pause",
    "codepoint": "f903"
  },
  {
    "id": "droplet-pin",
    "codepoint": "f904"
  },
  {
    "id": "droplet-plus",
    "codepoint": "f905"
  },
  {
    "id": "droplet-question",
    "codepoint": "f906"
  },
  {
    "id": "droplet-search",
    "codepoint": "f907"
  },
  {
    "id": "droplet-share",
    "codepoint": "f908"
  },
  {
    "id": "droplet-star",
    "codepoint": "f909"
  },
  {
    "id": "droplet-up",
    "codepoint": "f90a"
  },
  {
    "id": "droplet-x",
    "codepoint": "f90b"
  },
  {
    "id": "droplets",
    "codepoint": "fc12"
  },
  {
    "id": "dual-screen",
    "codepoint": "fa59"
  },
  {
    "id": "dumbbell",
    "codepoint": "1024d"
  },
  {
    "id": "dumpling",
    "codepoint": "feb5"
  },
  {
    "id": "e-passport",
    "codepoint": "f4df"
  },
  {
    "id": "ear",
    "codepoint": "ebce"
  },
  {
    "id": "ear-off",
    "codepoint": "ee84"
  },
  {
    "id": "ear-scan",
    "codepoint": "fd57"
  },
  {
    "id": "earphone-bluetooth",
    "codepoint": "1023a"
  },
  {
    "id": "ease-in",
    "codepoint": "f573"
  },
  {
    "id": "ease-in-control-point",
    "codepoint": "f570"
  },
  {
    "id": "ease-in-out",
    "codepoint": "f572"
  },
  {
    "id": "ease-in-out-control-points",
    "codepoint": "f571"
  },
  {
    "id": "ease-out",
    "codepoint": "f575"
  },
  {
    "id": "ease-out-control-point",
    "codepoint": "f574"
  },
  {
    "id": "edit",
    "codepoint": "ea98"
  },
  {
    "id": "edit-circle",
    "codepoint": "ee85"
  },
  {
    "id": "edit-circle-off",
    "codepoint": "f11d"
  },
  {
    "id": "edit-off",
    "codepoint": "f11e"
  },
  {
    "id": "egg",
    "codepoint": "eb8a"
  },
  {
    "id": "egg-cracked",
    "codepoint": "f2d6"
  },
  {
    "id": "egg-fried",
    "codepoint": "f386"
  },
  {
    "id": "egg-off",
    "codepoint": "f11f"
  },
  {
    "id": "eggs",
    "codepoint": "f500"
  },
  {
    "id": "elevator",
    "codepoint": "efdf"
  },
  {
    "id": "elevator-off",
    "codepoint": "f3e8"
  },
  {
    "id": "email-stamp",
    "codepoint": "10266"
  },
  {
    "id": "emergency-bed",
    "codepoint": "ef5d"
  },
  {
    "id": "empathize",
    "codepoint": "f29b"
  },
  {
    "id": "empathize-off",
    "codepoint": "f3e9"
  },
  {
    "id": "emphasis",
    "codepoint": "ebcf"
  },
  {
    "id": "engine",
    "codepoint": "ef7e"
  },
  {
    "id": "engine-off",
    "codepoint": "f120"
  },
  {
    "id": "equal",
    "codepoint": "ee87"
  },
  {
    "id": "equal-double",
    "codepoint": "f4e1"
  },
  {
    "id": "equal-not",
    "codepoint": "ee86"
  },
  {
    "id": "eraser",
    "codepoint": "eb8b"
  },
  {
    "id": "eraser-off",
    "codepoint": "f121"
  },
  {
    "id": "error-404",
    "codepoint": "f027"
  },
  {
    "id": "error-404-off",
    "codepoint": "f122"
  },
  {
    "id": "escalator",
    "codepoint": "fb06"
  },
  {
    "id": "escalator-down",
    "codepoint": "fb04"
  },
  {
    "id": "escalator-up",
    "codepoint": "fb05"
  },
  {
    "id": "exchange",
    "codepoint": "ebe7"
  },
  {
    "id": "exchange-off",
    "codepoint": "f123"
  },
  {
    "id": "exclamation-circle",
    "codepoint": "f634"
  },
  {
    "id": "exclamation-mark",
    "codepoint": "efb4"
  },
  {
    "id": "exclamation-mark-off",
    "codepoint": "f124"
  },
  {
    "id": "exercise-ball",
    "codepoint": "1024c"
  },
  {
    "id": "explicit",
    "codepoint": "f256"
  },
  {
    "id": "explicit-off",
    "codepoint": "f3ea"
  },
  {
    "id": "exposure",
    "codepoint": "eb8c"
  },
  {
    "id": "exposure-0",
    "codepoint": "f29c"
  },
  {
    "id": "exposure-minus-1",
    "codepoint": "f29d"
  },
  {
    "id": "exposure-minus-2",
    "codepoint": "f29e"
  },
  {
    "id": "exposure-off",
    "codepoint": "f3eb"
  },
  {
    "id": "exposure-plus-1",
    "codepoint": "f29f"
  },
  {
    "id": "exposure-plus-2",
    "codepoint": "f2a0"
  },
  {
    "id": "external-link",
    "codepoint": "ea99"
  },
  {
    "id": "external-link-off",
    "codepoint": "f125"
  },
  {
    "id": "eye",
    "codepoint": "ea9a"
  },
  {
    "id": "eye-bitcoin",
    "codepoint": "ff3d"
  },
  {
    "id": "eye-bolt",
    "codepoint": "fb6d"
  },
  {
    "id": "eye-cancel",
    "codepoint": "fb6e"
  },
  {
    "id": "eye-check",
    "codepoint": "ee88"
  },
  {
    "id": "eye-closed",
    "codepoint": "f7ec"
  },
  {
    "id": "eye-code",
    "codepoint": "fb6f"
  },
  {
    "id": "eye-cog",
    "codepoint": "f7ed"
  },
  {
    "id": "eye-discount",
    "codepoint": "fb70"
  },
  {
    "id": "eye-dollar",
    "codepoint": "fb71"
  },
  {
    "id": "eye-dotted",
    "codepoint": "fead"
  },
  {
    "id": "eye-down",
    "codepoint": "fb72"
  },
  {
    "id": "eye-edit",
    "codepoint": "f7ee"
  },
  {
    "id": "eye-exclamation",
    "codepoint": "f7ef"
  },
  {
    "id": "eye-heart",
    "codepoint": "f7f0"
  },
  {
    "id": "eye-minus",
    "codepoint": "fb73"
  },
  {
    "id": "eye-off",
    "codepoint": "ecf0"
  },
  {
    "id": "eye-pause",
    "codepoint": "fb74"
  },
  {
    "id": "eye-pin",
    "codepoint": "fb75"
  },
  {
    "id": "eye-plus",
    "codepoint": "fb76"
  },
  {
    "id": "eye-question",
    "codepoint": "fb77"
  },
  {
    "id": "eye-search",
    "codepoint": "fb78"
  },
  {
    "id": "eye-share",
    "codepoint": "fb79"
  },
  {
    "id": "eye-spark",
    "codepoint": "ffba"
  },
  {
    "id": "eye-star",
    "codepoint": "fb7a"
  },
  {
    "id": "eye-table",
    "codepoint": "ef5e"
  },
  {
    "id": "eye-up",
    "codepoint": "fb7b"
  },
  {
    "id": "eye-x",
    "codepoint": "f7f1"
  },
  {
    "id": "eyeglass",
    "codepoint": "ee8a"
  },
  {
    "id": "eyeglass-2",
    "codepoint": "ee89"
  },
  {
    "id": "eyeglass-off",
    "codepoint": "f126"
  },
  {
    "id": "face-id",
    "codepoint": "ea9b"
  },
  {
    "id": "face-id-error",
    "codepoint": "efa7"
  },
  {
    "id": "face-mask",
    "codepoint": "efb5"
  },
  {
    "id": "face-mask-off",
    "codepoint": "f127"
  },
  {
    "id": "fall",
    "codepoint": "ecb9"
  },
  {
    "id": "favicon",
    "codepoint": "fd65"
  },
  {
    "id": "feather",
    "codepoint": "ee8b"
  },
  {
    "id": "feather-off",
    "codepoint": "f128"
  },
  {
    "id": "fence",
    "codepoint": "ef2a"
  },
  {
    "id": "fence-off",
    "codepoint": "f129"
  },
  {
    "id": "ferry",
    "codepoint": "10074"
  },
  {
    "id": "fidget-spinner",
    "codepoint": "f068"
  },
  {
    "id": "file",
    "codepoint": "eaa4"
  },
  {
    "id": "file-3d",
    "codepoint": "f032"
  },
  {
    "id": "file-ai",
    "codepoint": "ffa1"
  },
  {
    "id": "file-alert",
    "codepoint": "ede6"
  },
  {
    "id": "file-analytics",
    "codepoint": "ede7"
  },
  {
    "id": "file-arrow-left",
    "codepoint": "f033"
  },
  {
    "id": "file-arrow-right",
    "codepoint": "f034"
  },
  {
    "id": "file-barcode",
    "codepoint": "f035"
  },
  {
    "id": "file-bitcoin",
    "codepoint": "ffa0"
  },
  {
    "id": "file-broken",
    "codepoint": "f501"
  },
  {
    "id": "file-certificate",
    "codepoint": "ed4d"
  },
  {
    "id": "file-chart",
    "codepoint": "f036"
  },
  {
    "id": "file-check",
    "codepoint": "ea9c"
  },
  {
    "id": "file-code",
    "codepoint": "ebd0"
  },
  {
    "id": "file-code-2",
    "codepoint": "ede8"
  },
  {
    "id": "file-cv",
    "codepoint": "fa5a"
  },
  {
    "id": "file-database",
    "codepoint": "f037"
  },
  {
    "id": "file-delta",
    "codepoint": "f53d"
  },
  {
    "id": "file-description",
    "codepoint": "f028"
  },
  {
    "id": "file-diff",
    "codepoint": "ecf1"
  },
  {
    "id": "file-digit",
    "codepoint": "efa8"
  },
  {
    "id": "file-dislike",
    "codepoint": "ed2a"
  },
  {
    "id": "file-dollar",
    "codepoint": "efe0"
  },
  {
    "id": "file-dots",
    "codepoint": "f038"
  },
  {
    "id": "file-download",
    "codepoint": "ea9d"
  },
  {
    "id": "file-euro",
    "codepoint": "efe1"
  },
  {
    "id": "file-excel",
    "codepoint": "fef3"
  },
  {
    "id": "file-export",
    "codepoint": "ede9"
  },
  {
    "id": "file-function",
    "codepoint": "f53e"
  },
  {
    "id": "file-horizontal",
    "codepoint": "ebb0"
  },
  {
    "id": "file-import",
    "codepoint": "edea"
  },
  {
    "id": "file-infinity",
    "codepoint": "f502"
  },
  {
    "id": "file-info",
    "codepoint": "edec"
  },
  {
    "id": "file-invoice",
    "codepoint": "eb67"
  },
  {
    "id": "file-isr",
    "codepoint": "feac"
  },
  {
    "id": "file-lambda",
    "codepoint": "f53f"
  },
  {
    "id": "file-like",
    "codepoint": "ed2b"
  },
  {
    "id": "file-minus",
    "codepoint": "ea9e"
  },
  {
    "id": "file-music",
    "codepoint": "ea9f"
  },
  {
    "id": "file-neutral",
    "codepoint": "fd22"
  },
  {
    "id": "file-off",
    "codepoint": "ecf2"
  },
  {
    "id": "file-orientation",
    "codepoint": "f2a1"
  },
  {
    "id": "file-pencil",
    "codepoint": "f039"
  },
  {
    "id": "file-percent",
    "codepoint": "f540"
  },
  {
    "id": "file-phone",
    "codepoint": "ecdc"
  },
  {
    "id": "file-plus",
    "codepoint": "eaa0"
  },
  {
    "id": "file-power",
    "codepoint": "f03a"
  },
  {
    "id": "file-report",
    "codepoint": "eded"
  },
  {
    "id": "file-rss",
    "codepoint": "f03b"
  },
  {
    "id": "file-sad",
    "codepoint": "fd23"
  },
  {
    "id": "file-scissors",
    "codepoint": "f03c"
  },
  {
    "id": "file-search",
    "codepoint": "ed5d"
  },
  {
    "id": "file-settings",
    "codepoint": "f029"
  },
  {
    "id": "file-shredder",
    "codepoint": "eaa1"
  },
  {
    "id": "file-signal",
    "codepoint": "f03d"
  },
  {
    "id": "file-smile",
    "codepoint": "fd24"
  },
  {
    "id": "file-spark",
    "codepoint": "ffb9"
  },
  {
    "id": "file-spreadsheet",
    "codepoint": "f03e"
  },
  {
    "id": "file-stack",
    "codepoint": "f503"
  },
  {
    "id": "file-star",
    "codepoint": "f03f"
  },
  {
    "id": "file-symlink",
    "codepoint": "ed53"
  },
  {
    "id": "file-text",
    "codepoint": "eaa2"
  },
  {
    "id": "file-text-ai",
    "codepoint": "fa27"
  },
  {
    "id": "file-text-shield",
    "codepoint": "100f2"
  },
  {
    "id": "file-text-spark",
    "codepoint": "ffb8"
  },
  {
    "id": "file-time",
    "codepoint": "f040"
  },
  {
    "id": "file-type-bmp",
    "codepoint": "fb07"
  },
  {
    "id": "file-type-css",
    "codepoint": "fb08"
  },
  {
    "id": "file-type-csv",
    "codepoint": "fb09"
  },
  {
    "id": "file-type-doc",
    "codepoint": "fb0a"
  },
  {
    "id": "file-type-docx",
    "codepoint": "fb0b"
  },
  {
    "id": "file-type-html",
    "codepoint": "fb0c"
  },
  {
    "id": "file-type-jpg",
    "codepoint": "fb0d"
  },
  {
    "id": "file-type-js",
    "codepoint": "fb0e"
  },
  {
    "id": "file-type-jsx",
    "codepoint": "fb0f"
  },
  {
    "id": "file-type-pdf",
    "codepoint": "fb10"
  },
  {
    "id": "file-type-php",
    "codepoint": "fb11"
  },
  {
    "id": "file-type-png",
    "codepoint": "fb12"
  },
  {
    "id": "file-type-ppt",
    "codepoint": "fb13"
  },
  {
    "id": "file-type-rs",
    "codepoint": "fb14"
  },
  {
    "id": "file-type-sql",
    "codepoint": "fb15"
  },
  {
    "id": "file-type-svg",
    "codepoint": "fb16"
  },
  {
    "id": "file-type-ts",
    "codepoint": "fb17"
  },
  {
    "id": "file-type-tsx",
    "codepoint": "fb18"
  },
  {
    "id": "file-type-txt",
    "codepoint": "fb19"
  },
  {
    "id": "file-type-vue",
    "codepoint": "fb1a"
  },
  {
    "id": "file-type-xls",
    "codepoint": "fb1b"
  },
  {
    "id": "file-type-xml",
    "codepoint": "fb1c"
  },
  {
    "id": "file-type-zip",
    "codepoint": "fb1d"
  },
  {
    "id": "file-typography",
    "codepoint": "f041"
  },
  {
    "id": "file-unknown",
    "codepoint": "f042"
  },
  {
    "id": "file-upload",
    "codepoint": "ec91"
  },
  {
    "id": "file-vector",
    "codepoint": "f043"
  },
  {
    "id": "file-word",
    "codepoint": "fef2"
  },
  {
    "id": "file-x",
    "codepoint": "eaa3"
  },
  {
    "id": "file-zip",
    "codepoint": "ed4e"
  },
  {
    "id": "files",
    "codepoint": "edef"
  },
  {
    "id": "files-off",
    "codepoint": "edee"
  },
  {
    "id": "filter",
    "codepoint": "eaa5"
  },
  {
    "id": "filter-2",
    "codepoint": "1014b"
  },
  {
    "id": "filter-2-bolt",
    "codepoint": "1015f"
  },
  {
    "id": "filter-2-cancel",
    "codepoint": "1015e"
  },
  {
    "id": "filter-2-check",
    "codepoint": "1015d"
  },
  {
    "id": "filter-2-code",
    "codepoint": "1015c"
  },
  {
    "id": "filter-2-cog",
    "codepoint": "1015b"
  },
  {
    "id": "filter-2-discount",
    "codepoint": "1015a"
  },
  {
    "id": "filter-2-dollar",
    "codepoint": "10159"
  },
  {
    "id": "filter-2-down",
    "codepoint": "10158"
  },
  {
    "id": "filter-2-edit",
    "codepoint": "10157"
  },
  {
    "id": "filter-2-exclamation",
    "codepoint": "10156"
  },
  {
    "id": "filter-2-minus",
    "codepoint": "10155"
  },
  {
    "id": "filter-2-pause",
    "codepoint": "10154"
  },
  {
    "id": "filter-2-pin",
    "codepoint": "10153"
  },
  {
    "id": "filter-2-plus",
    "codepoint": "10152"
  },
  {
    "id": "filter-2-question",
    "codepoint": "10151"
  },
  {
    "id": "filter-2-search",
    "codepoint": "10150"
  },
  {
    "id": "filter-2-share",
    "codepoint": "1014f"
  },
  {
    "id": "filter-2-spark",
    "codepoint": "1014e"
  },
  {
    "id": "filter-2-up",
    "codepoint": "1014d"
  },
  {
    "id": "filter-2-x",
    "codepoint": "1014c"
  },
  {
    "id": "filter-bolt",
    "codepoint": "fb7c"
  },
  {
    "id": "filter-cancel",
    "codepoint": "fb7d"
  },
  {
    "id": "filter-check",
    "codepoint": "fb7e"
  },
  {
    "id": "filter-code",
    "codepoint": "fb7f"
  },
  {
    "id": "filter-cog",
    "codepoint": "f9fe"
  },
  {
    "id": "filter-discount",
    "codepoint": "fb80"
  },
  {
    "id": "filter-dollar",
    "codepoint": "f9ff"
  },
  {
    "id": "filter-down",
    "codepoint": "fb81"
  },
  {
    "id": "filter-edit",
    "codepoint": "fa00"
  },
  {
    "id": "filter-exclamation",
    "codepoint": "fb82"
  },
  {
    "id": "filter-heart",
    "codepoint": "fb83"
  },
  {
    "id": "filter-minus",
    "codepoint": "fa01"
  },
  {
    "id": "filter-off",
    "codepoint": "ed2c"
  },
  {
    "id": "filter-pause",
    "codepoint": "fb84"
  },
  {
    "id": "filter-pin",
    "codepoint": "fb85"
  },
  {
    "id": "filter-plus",
    "codepoint": "fa02"
  },
  {
    "id": "filter-question",
    "codepoint": "fb86"
  },
  {
    "id": "filter-search",
    "codepoint": "fb87"
  },
  {
    "id": "filter-share",
    "codepoint": "fb88"
  },
  {
    "id": "filter-spark",
    "codepoint": "1014a"
  },
  {
    "id": "filter-star",
    "codepoint": "fa03"
  },
  {
    "id": "filter-up",
    "codepoint": "fb89"
  },
  {
    "id": "filter-x",
    "codepoint": "fa04"
  },
  {
    "id": "filters",
    "codepoint": "f793"
  },
  {
    "id": "fingerprint",
    "codepoint": "ebd1"
  },
  {
    "id": "fingerprint-off",
    "codepoint": "f12a"
  },
  {
    "id": "fingerprint-scan",
    "codepoint": "fcb5"
  },
  {
    "id": "fire-extinguisher",
    "codepoint": "faf6"
  },
  {
    "id": "fire-hydrant",
    "codepoint": "f3a9"
  },
  {
    "id": "fire-hydrant-off",
    "codepoint": "f3ec"
  },
  {
    "id": "firetruck",
    "codepoint": "ebe8"
  },
  {
    "id": "firewall-check",
    "codepoint": "101f1"
  },
  {
    "id": "firewall-flame",
    "codepoint": "101f0"
  },
  {
    "id": "first-aid-kit",
    "codepoint": "ef5f"
  },
  {
    "id": "first-aid-kit-off",
    "codepoint": "f3ed"
  },
  {
    "id": "fish",
    "codepoint": "ef2b"
  },
  {
    "id": "fish-bone",
    "codepoint": "f287"
  },
  {
    "id": "fish-christianity",
    "codepoint": "f58b"
  },
  {
    "id": "fish-hook",
    "codepoint": "f1f9"
  },
  {
    "id": "fish-hook-off",
    "codepoint": "f3ee"
  },
  {
    "id": "fish-off",
    "codepoint": "f12b"
  },
  {
    "id": "flag",
    "codepoint": "eaa6"
  },
  {
    "id": "flag-2",
    "codepoint": "ee8c"
  },
  {
    "id": "flag-2-off",
    "codepoint": "f12c"
  },
  {
    "id": "flag-3",
    "codepoint": "ee8d"
  },
  {
    "id": "flag-bitcoin",
    "codepoint": "ff3c"
  },
  {
    "id": "flag-bolt",
    "codepoint": "fb8a"
  },
  {
    "id": "flag-cancel",
    "codepoint": "fb8b"
  },
  {
    "id": "flag-check",
    "codepoint": "fb8c"
  },
  {
    "id": "flag-code",
    "codepoint": "fb8d"
  },
  {
    "id": "flag-cog",
    "codepoint": "fb8e"
  },
  {
    "id": "flag-discount",
    "codepoint": "fb8f"
  },
  {
    "id": "flag-dollar",
    "codepoint": "fb90"
  },
  {
    "id": "flag-down",
    "codepoint": "fb91"
  },
  {
    "id": "flag-exclamation",
    "codepoint": "fb92"
  },
  {
    "id": "flag-heart",
    "codepoint": "fb93"
  },
  {
    "id": "flag-minus",
    "codepoint": "fb94"
  },
  {
    "id": "flag-off",
    "codepoint": "f12d"
  },
  {
    "id": "flag-pause",
    "codepoint": "fb95"
  },
  {
    "id": "flag-pin",
    "codepoint": "fb96"
  },
  {
    "id": "flag-plus",
    "codepoint": "fb97"
  },
  {
    "id": "flag-question",
    "codepoint": "fb98"
  },
  {
    "id": "flag-search",
    "codepoint": "fb99"
  },
  {
    "id": "flag-share",
    "codepoint": "fb9a"
  },
  {
    "id": "flag-spark",
    "codepoint": "ffb7"
  },
  {
    "id": "flag-star",
    "codepoint": "fb9b"
  },
  {
    "id": "flag-up",
    "codepoint": "fb9c"
  },
  {
    "id": "flag-x",
    "codepoint": "fb9d"
  },
  {
    "id": "flame",
    "codepoint": "ec2c"
  },
  {
    "id": "flame-off",
    "codepoint": "f12e"
  },
  {
    "id": "flare",
    "codepoint": "ee8e"
  },
  {
    "id": "flask",
    "codepoint": "ebd2"
  },
  {
    "id": "flask-2",
    "codepoint": "ef60"
  },
  {
    "id": "flask-2-off",
    "codepoint": "f12f"
  },
  {
    "id": "flask-off",
    "codepoint": "f130"
  },
  {
    "id": "flip-flops",
    "codepoint": "f564"
  },
  {
    "id": "flip-horizontal",
    "codepoint": "eaa7"
  },
  {
    "id": "flip-vertical",
    "codepoint": "eaa8"
  },
  {
    "id": "float-center",
    "codepoint": "ebb1"
  },
  {
    "id": "float-left",
    "codepoint": "ebb2"
  },
  {
    "id": "float-none",
    "codepoint": "ed13"
  },
  {
    "id": "float-right",
    "codepoint": "ebb3"
  },
  {
    "id": "flood",
    "codepoint": "1024b"
  },
  {
    "id": "flower",
    "codepoint": "eff6"
  },
  {
    "id": "flower-off",
    "codepoint": "f131"
  },
  {
    "id": "focus",
    "codepoint": "eb8d"
  },
  {
    "id": "focus-2",
    "codepoint": "ebd3"
  },
  {
    "id": "focus-auto",
    "codepoint": "fa62"
  },
  {
    "id": "focus-centered",
    "codepoint": "f02a"
  },
  {
    "id": "fold",
    "codepoint": "ed56"
  },
  {
    "id": "fold-down",
    "codepoint": "ed54"
  },
  {
    "id": "fold-up",
    "codepoint": "ed55"
  },
  {
    "id": "folder",
    "codepoint": "eaad"
  },
  {
    "id": "folder-bolt",
    "codepoint": "f90c"
  },
  {
    "id": "folder-cancel",
    "codepoint": "f90d"
  },
  {
    "id": "folder-check",
    "codepoint": "f90e"
  },
  {
    "id": "folder-code",
    "codepoint": "f90f"
  },
  {
    "id": "folder-cog",
    "codepoint": "f910"
  },
  {
    "id": "folder-dollar",
    "codepoint": "f911"
  },
  {
    "id": "folder-down",
    "codepoint": "f912"
  },
  {
    "id": "folder-exclamation",
    "codepoint": "f913"
  },
  {
    "id": "folder-heart",
    "codepoint": "f914"
  },
  {
    "id": "folder-minus",
    "codepoint": "eaaa"
  },
  {
    "id": "folder-off",
    "codepoint": "ed14"
  },
  {
    "id": "folder-open",
    "codepoint": "faf7"
  },
  {
    "id": "folder-pause",
    "codepoint": "f915"
  },
  {
    "id": "folder-pin",
    "codepoint": "f916"
  },
  {
    "id": "folder-plus",
    "codepoint": "eaab"
  },
  {
    "id": "folder-question",
    "codepoint": "f917"
  },
  {
    "id": "folder-root",
    "codepoint": "fd43"
  },
  {
    "id": "folder-search",
    "codepoint": "f918"
  },
  {
    "id": "folder-share",
    "codepoint": "f919"
  },
  {
    "id": "folder-star",
    "codepoint": "f91a"
  },
  {
    "id": "folder-symlink",
    "codepoint": "f91b"
  },
  {
    "id": "folder-up",
    "codepoint": "f91c"
  },
  {
    "id": "folder-x",
    "codepoint": "eaac"
  },
  {
    "id": "folders",
    "codepoint": "eaae"
  },
  {
    "id": "folders-off",
    "codepoint": "f133"
  },
  {
    "id": "foodsteps",
    "codepoint": "10265"
  },
  {
    "id": "footsteps",
    "codepoint": "10265"
  },
  {
    "id": "forbid",
    "codepoint": "ebd5"
  },
  {
    "id": "forbid-2",
    "codepoint": "ebd4"
  },
  {
    "id": "forklift",
    "codepoint": "ebe9"
  },
  {
    "id": "forms",
    "codepoint": "ee8f"
  },
  {
    "id": "fountain",
    "codepoint": "f09b"
  },
  {
    "id": "fountain-off",
    "codepoint": "f134"
  },
  {
    "id": "frame",
    "codepoint": "eaaf"
  },
  {
    "id": "frame-off",
    "codepoint": "f135"
  },
  {
    "id": "free-rights",
    "codepoint": "efb6"
  },
  {
    "id": "freeze-column",
    "codepoint": "fa63"
  },
  {
    "id": "freeze-row",
    "codepoint": "fa65"
  },
  {
    "id": "freeze-row-column",
    "codepoint": "fa64"
  },
  {
    "id": "fridge",
    "codepoint": "f1fa"
  },
  {
    "id": "fridge-off",
    "codepoint": "f3ef"
  },
  {
    "id": "friends",
    "codepoint": "eab0"
  },
  {
    "id": "friends-off",
    "codepoint": "f136"
  },
  {
    "id": "frustum",
    "codepoint": "fa9f"
  },
  {
    "id": "frustum-off",
    "codepoint": "fa9d"
  },
  {
    "id": "frustum-plus",
    "codepoint": "fa9e"
  },
  {
    "id": "function",
    "codepoint": "f225"
  },
  {
    "id": "function-off",
    "codepoint": "f3f0"
  },
  {
    "id": "galaxy",
    "codepoint": "fcb6"
  },
  {
    "id": "garden-cart",
    "codepoint": "f23e"
  },
  {
    "id": "garden-cart-off",
    "codepoint": "f3f1"
  },
  {
    "id": "gas-station",
    "codepoint": "ec7d"
  },
  {
    "id": "gas-station-off",
    "codepoint": "f137"
  },
  {
    "id": "gauge",
    "codepoint": "eab1"
  },
  {
    "id": "gauge-off",
    "codepoint": "f138"
  },
  {
    "id": "gavel",
    "codepoint": "ef90"
  },
  {
    "id": "gender-agender",
    "codepoint": "f0e1"
  },
  {
    "id": "gender-androgyne",
    "codepoint": "f0e2"
  },
  {
    "id": "gender-bigender",
    "codepoint": "f0e3"
  },
  {
    "id": "gender-demiboy",
    "codepoint": "f0e4"
  },
  {
    "id": "gender-demigirl",
    "codepoint": "f0e5"
  },
  {
    "id": "gender-epicene",
    "codepoint": "f0e6"
  },
  {
    "id": "gender-female",
    "codepoint": "f0e7"
  },
  {
    "id": "gender-femme",
    "codepoint": "f0e8"
  },
  {
    "id": "gender-genderfluid",
    "codepoint": "f0e9"
  },
  {
    "id": "gender-genderless",
    "codepoint": "f0ea"
  },
  {
    "id": "gender-genderqueer",
    "codepoint": "f0eb"
  },
  {
    "id": "gender-hermaphrodite",
    "codepoint": "f0ec"
  },
  {
    "id": "gender-intergender",
    "codepoint": "f0ed"
  },
  {
    "id": "gender-male",
    "codepoint": "f0ee"
  },
  {
    "id": "gender-neutrois",
    "codepoint": "f0ef"
  },
  {
    "id": "gender-third",
    "codepoint": "f0f0"
  },
  {
    "id": "gender-transgender",
    "codepoint": "f0f1"
  },
  {
    "id": "gender-trasvesti",
    "codepoint": "f0f2"
  },
  {
    "id": "gender-travesti",
    "codepoint": "f0f2"
  },
  {
    "id": "geometry",
    "codepoint": "ee90"
  },
  {
    "id": "ghost",
    "codepoint": "eb8e"
  },
  {
    "id": "ghost-2",
    "codepoint": "f57c"
  },
  {
    "id": "ghost-3",
    "codepoint": "fc13"
  },
  {
    "id": "ghost-off",
    "codepoint": "f3f2"
  },
  {
    "id": "gif",
    "codepoint": "f257"
  },
  {
    "id": "gift",
    "codepoint": "eb68"
  },
  {
    "id": "gift-card",
    "codepoint": "f3aa"
  },
  {
    "id": "gift-off",
    "codepoint": "f3f3"
  },
  {
    "id": "git-branch",
    "codepoint": "eab2"
  },
  {
    "id": "git-branch-deleted",
    "codepoint": "f57d"
  },
  {
    "id": "git-cherry-pick",
    "codepoint": "f57e"
  },
  {
    "id": "git-commit",
    "codepoint": "eab3"
  },
  {
    "id": "git-compare",
    "codepoint": "eab4"
  },
  {
    "id": "git-fork",
    "codepoint": "eb8f"
  },
  {
    "id": "git-merge",
    "codepoint": "eab5"
  },
  {
    "id": "git-pull-request",
    "codepoint": "eab6"
  },
  {
    "id": "git-pull-request-closed",
    "codepoint": "ef7f"
  },
  {
    "id": "git-pull-request-conflict",
    "codepoint": "10264"
  },
  {
    "id": "git-pull-request-draft",
    "codepoint": "efb7"
  },
  {
    "id": "gizmo",
    "codepoint": "f02b"
  },
  {
    "id": "glass",
    "codepoint": "eab8"
  },
  {
    "id": "glass-champagne",
    "codepoint": "fd9c"
  },
  {
    "id": "glass-cocktail",
    "codepoint": "fd9d"
  },
  {
    "id": "glass-full",
    "codepoint": "eab7"
  },
  {
    "id": "glass-gin",
    "codepoint": "fd9e"
  },
  {
    "id": "glass-off",
    "codepoint": "ee91"
  },
  {
    "id": "globe",
    "codepoint": "eab9"
  },
  {
    "id": "globe-off",
    "codepoint": "f139"
  },
  {
    "id": "go-game",
    "codepoint": "f512"
  },
  {
    "id": "golf",
    "codepoint": "ed8c"
  },
  {
    "id": "golf-off",
    "codepoint": "f13a"
  },
  {
    "id": "gps",
    "codepoint": "ed7a"
  },
  {
    "id": "gradienter",
    "codepoint": "f3ab"
  },
  {
    "id": "grain",
    "codepoint": "ee92"
  },
  {
    "id": "grape",
    "codepoint": "10239"
  },
  {
    "id": "graph",
    "codepoint": "f288"
  },
  {
    "id": "graph-off",
    "codepoint": "f3f4"
  },
  {
    "id": "grave",
    "codepoint": "f580"
  },
  {
    "id": "grave-2",
    "codepoint": "f57f"
  },
  {
    "id": "grid-3x3",
    "codepoint": "fca4"
  },
  {
    "id": "grid-4x4",
    "codepoint": "fca5"
  },
  {
    "id": "grid-dots",
    "codepoint": "eaba"
  },
  {
    "id": "grid-goldenratio",
    "codepoint": "fca6"
  },
  {
    "id": "grid-pattern",
    "codepoint": "efc9"
  },
  {
    "id": "grid-scan",
    "codepoint": "fca7"
  },
  {
    "id": "grill",
    "codepoint": "efa9"
  },
  {
    "id": "grill-fork",
    "codepoint": "f35b"
  },
  {
    "id": "grill-off",
    "codepoint": "f3f5"
  },
  {
    "id": "grill-spatula",
    "codepoint": "f35c"
  },
  {
    "id": "grip-horizontal",
    "codepoint": "ec00"
  },
  {
    "id": "grip-vertical",
    "codepoint": "ec01"
  },
  {
    "id": "growth",
    "codepoint": "ee93"
  },
  {
    "id": "guitar-pick",
    "codepoint": "f4c6"
  },
  {
    "id": "gymnastics",
    "codepoint": "fd44"
  },
  {
    "id": "h-1",
    "codepoint": "ec94"
  },
  {
    "id": "h-2",
    "codepoint": "ec95"
  },
  {
    "id": "h-3",
    "codepoint": "ec96"
  },
  {
    "id": "h-4",
    "codepoint": "ec97"
  },
  {
    "id": "h-5",
    "codepoint": "ec98"
  },
  {
    "id": "h-6",
    "codepoint": "ec99"
  },
  {
    "id": "hammer",
    "codepoint": "ef91"
  },
  {
    "id": "hammer-drill",
    "codepoint": "10238"
  },
  {
    "id": "hammer-off",
    "codepoint": "f13c"
  },
  {
    "id": "hand-click",
    "codepoint": "ef4f"
  },
  {
    "id": "hand-click-off",
    "codepoint": "100f1"
  },
  {
    "id": "hand-finger",
    "codepoint": "ee94"
  },
  {
    "id": "hand-finger-down",
    "codepoint": "ff4f"
  },
  {
    "id": "hand-finger-left",
    "codepoint": "ff4e"
  },
  {
    "id": "hand-finger-off",
    "codepoint": "f13d"
  },
  {
    "id": "hand-finger-right",
    "codepoint": "ff4d"
  },
  {
    "id": "hand-grab",
    "codepoint": "f091"
  },
  {
    "id": "hand-little-finger",
    "codepoint": "ee95"
  },
  {
    "id": "hand-love-you",
    "codepoint": "ee97"
  },
  {
    "id": "hand-middle-finger",
    "codepoint": "ec2d"
  },
  {
    "id": "hand-move",
    "codepoint": "ef50"
  },
  {
    "id": "hand-off",
    "codepoint": "ed15"
  },
  {
    "id": "hand-ring-finger",
    "codepoint": "ee96"
  },
  {
    "id": "hand-rock",
    "codepoint": "ee97"
  },
  {
    "id": "hand-sanitizer",
    "codepoint": "f5f4"
  },
  {
    "id": "hand-stop",
    "codepoint": "ec2e"
  },
  {
    "id": "hand-three-fingers",
    "codepoint": "ee98"
  },
  {
    "id": "hand-two-fingers",
    "codepoint": "ee99"
  },
  {
    "id": "hanger",
    "codepoint": "ee9a"
  },
  {
    "id": "hanger-2",
    "codepoint": "f09c"
  },
  {
    "id": "hanger-off",
    "codepoint": "f13e"
  },
  {
    "id": "hash",
    "codepoint": "eabc"
  },
  {
    "id": "haze",
    "codepoint": "efaa"
  },
  {
    "id": "haze-moon",
    "codepoint": "faf8"
  },
  {
    "id": "hdr",
    "codepoint": "fa7b"
  },
  {
    "id": "heading",
    "codepoint": "ee9b"
  },
  {
    "id": "heading-off",
    "codepoint": "f13f"
  },
  {
    "id": "headphones",
    "codepoint": "eabd"
  },
  {
    "id": "headphones-off",
    "codepoint": "ed1d"
  },
  {
    "id": "headset",
    "codepoint": "eb90"
  },
  {
    "id": "headset-off",
    "codepoint": "f3f6"
  },
  {
    "id": "health-recognition",
    "codepoint": "f1fb"
  },
  {
    "id": "heart",
    "codepoint": "eabe"
  },
  {
    "id": "heart-bitcoin",
    "codepoint": "ff3b"
  },
  {
    "id": "heart-bolt",
    "codepoint": "fb9e"
  },
  {
    "id": "heart-broken",
    "codepoint": "ecba"
  },
  {
    "id": "heart-cancel",
    "codepoint": "fb9f"
  },
  {
    "id": "heart-check",
    "codepoint": "fba0"
  },
  {
    "id": "heart-code",
    "codepoint": "fba1"
  },
  {
    "id": "heart-cog",
    "codepoint": "fba2"
  },
  {
    "id": "heart-discount",
    "codepoint": "fba3"
  },
  {
    "id": "heart-dollar",
    "codepoint": "fba4"
  },
  {
    "id": "heart-down",
    "codepoint": "fba5"
  },
  {
    "id": "heart-exclamation",
    "codepoint": "fba6"
  },
  {
    "id": "heart-handshake",
    "codepoint": "f0f3"
  },
  {
    "id": "heart-minus",
    "codepoint": "f140"
  },
  {
    "id": "heart-off",
    "codepoint": "f141"
  },
  {
    "id": "heart-pause",
    "codepoint": "fba7"
  },
  {
    "id": "heart-pin",
    "codepoint": "fba8"
  },
  {
    "id": "heart-plus",
    "codepoint": "f142"
  },
  {
    "id": "heart-question",
    "codepoint": "fba9"
  },
  {
    "id": "heart-rate-monitor",
    "codepoint": "ef61"
  },
  {
    "id": "heart-search",
    "codepoint": "fbaa"
  },
  {
    "id": "heart-share",
    "codepoint": "fbab"
  },
  {
    "id": "heart-spark",
    "codepoint": "ffb6"
  },
  {
    "id": "heart-star",
    "codepoint": "fbac"
  },
  {
    "id": "heart-up",
    "codepoint": "fbad"
  },
  {
    "id": "heart-x",
    "codepoint": "fbae"
  },
  {
    "id": "heartbeat",
    "codepoint": "ef92"
  },
  {
    "id": "hearts",
    "codepoint": "f387"
  },
  {
    "id": "hearts-off",
    "codepoint": "f3f7"
  },
  {
    "id": "helicopter",
    "codepoint": "ed8e"
  },
  {
    "id": "helicopter-landing",
    "codepoint": "ed8d"
  },
  {
    "id": "helmet",
    "codepoint": "efca"
  },
  {
    "id": "helmet-off",
    "codepoint": "f143"
  },
  {
    "id": "help",
    "codepoint": "eabf"
  },
  {
    "id": "help-circle",
    "codepoint": "f91d"
  },
  {
    "id": "help-hexagon",
    "codepoint": "f7a8"
  },
  {
    "id": "help-octagon",
    "codepoint": "f7a9"
  },
  {
    "id": "help-off",
    "codepoint": "f3f8"
  },
  {
    "id": "help-small",
    "codepoint": "f91e"
  },
  {
    "id": "help-square",
    "codepoint": "f920"
  },
  {
    "id": "help-square-rounded",
    "codepoint": "f91f"
  },
  {
    "id": "help-triangle",
    "codepoint": "f921"
  },
  {
    "id": "hemisphere",
    "codepoint": "faa2"
  },
  {
    "id": "hemisphere-off",
    "codepoint": "faa0"
  },
  {
    "id": "hemisphere-plus",
    "codepoint": "faa1"
  },
  {
    "id": "hexagon",
    "codepoint": "ec02"
  },
  {
    "id": "hexagon-0",
    "codepoint": "f459"
  },
  {
    "id": "hexagon-1",
    "codepoint": "f45a"
  },
  {
    "id": "hexagon-2",
    "codepoint": "f45b"
  },
  {
    "id": "hexagon-3",
    "codepoint": "f45c"
  },
  {
    "id": "hexagon-3d",
    "codepoint": "f4c7"
  },
  {
    "id": "hexagon-4",
    "codepoint": "f45d"
  },
  {
    "id": "hexagon-5",
    "codepoint": "f45e"
  },
  {
    "id": "hexagon-6",
    "codepoint": "f45f"
  },
  {
    "id": "hexagon-7",
    "codepoint": "f460"
  },
  {
    "id": "hexagon-8",
    "codepoint": "f461"
  },
  {
    "id": "hexagon-9",
    "codepoint": "f462"
  },
  {
    "id": "hexagon-asterisk",
    "codepoint": "101ab"
  },
  {
    "id": "hexagon-letter-a",
    "codepoint": "f463"
  },
  {
    "id": "hexagon-letter-b",
    "codepoint": "f464"
  },
  {
    "id": "hexagon-letter-c",
    "codepoint": "f465"
  },
  {
    "id": "hexagon-letter-d",
    "codepoint": "f466"
  },
  {
    "id": "hexagon-letter-e",
    "codepoint": "f467"
  },
  {
    "id": "hexagon-letter-f",
    "codepoint": "f468"
  },
  {
    "id": "hexagon-letter-g",
    "codepoint": "f469"
  },
  {
    "id": "hexagon-letter-h",
    "codepoint": "f46a"
  },
  {
    "id": "hexagon-letter-i",
    "codepoint": "f46b"
  },
  {
    "id": "hexagon-letter-j",
    "codepoint": "f46c"
  },
  {
    "id": "hexagon-letter-k",
    "codepoint": "f46d"
  },
  {
    "id": "hexagon-letter-l",
    "codepoint": "f46e"
  },
  {
    "id": "hexagon-letter-m",
    "codepoint": "f46f"
  },
  {
    "id": "hexagon-letter-n",
    "codepoint": "f470"
  },
  {
    "id": "hexagon-letter-o",
    "codepoint": "f471"
  },
  {
    "id": "hexagon-letter-p",
    "codepoint": "f472"
  },
  {
    "id": "hexagon-letter-q",
    "codepoint": "f473"
  },
  {
    "id": "hexagon-letter-r",
    "codepoint": "f474"
  },
  {
    "id": "hexagon-letter-s",
    "codepoint": "f475"
  },
  {
    "id": "hexagon-letter-t",
    "codepoint": "f476"
  },
  {
    "id": "hexagon-letter-u",
    "codepoint": "f477"
  },
  {
    "id": "hexagon-letter-v",
    "codepoint": "f4b3"
  },
  {
    "id": "hexagon-letter-w",
    "codepoint": "f478"
  },
  {
    "id": "hexagon-letter-x",
    "codepoint": "f479"
  },
  {
    "id": "hexagon-letter-y",
    "codepoint": "f47a"
  },
  {
    "id": "hexagon-letter-z",
    "codepoint": "f47b"
  },
  {
    "id": "hexagon-minus",
    "codepoint": "fc8f"
  },
  {
    "id": "hexagon-minus-2",
    "codepoint": "fc8e"
  },
  {
    "id": "hexagon-number-0",
    "codepoint": "f459"
  },
  {
    "id": "hexagon-number-1",
    "codepoint": "f45a"
  },
  {
    "id": "hexagon-number-2",
    "codepoint": "f45b"
  },
  {
    "id": "hexagon-number-3",
    "codepoint": "f45c"
  },
  {
    "id": "hexagon-number-4",
    "codepoint": "f45d"
  },
  {
    "id": "hexagon-number-5",
    "codepoint": "f45e"
  },
  {
    "id": "hexagon-number-6",
    "codepoint": "f45f"
  },
  {
    "id": "hexagon-number-7",
    "codepoint": "f460"
  },
  {
    "id": "hexagon-number-8",
    "codepoint": "f461"
  },
  {
    "id": "hexagon-number-9",
    "codepoint": "f462"
  },
  {
    "id": "hexagon-off",
    "codepoint": "ee9c"
  },
  {
    "id": "hexagon-plus",
    "codepoint": "fc45"
  },
  {
    "id": "hexagon-plus-2",
    "codepoint": "fc90"
  },
  {
    "id": "hexagonal-prism",
    "codepoint": "faa5"
  },
  {
    "id": "hexagonal-prism-off",
    "codepoint": "faa3"
  },
  {
    "id": "hexagonal-prism-plus",
    "codepoint": "faa4"
  },
  {
    "id": "hexagonal-pyramid",
    "codepoint": "faa8"
  },
  {
    "id": "hexagonal-pyramid-off",
    "codepoint": "faa6"
  },
  {
    "id": "hexagonal-pyramid-plus",
    "codepoint": "faa7"
  },
  {
    "id": "hexagons",
    "codepoint": "f09d"
  },
  {
    "id": "hexagons-off",
    "codepoint": "f3f9"
  },
  {
    "id": "hierarchy",
    "codepoint": "ee9e"
  },
  {
    "id": "hierarchy-2",
    "codepoint": "ee9d"
  },
  {
    "id": "hierarchy-3",
    "codepoint": "f289"
  },
  {
    "id": "hierarchy-off",
    "codepoint": "f3fa"
  },
  {
    "id": "highlight",
    "codepoint": "ef3f"
  },
  {
    "id": "highlight-off",
    "codepoint": "f144"
  },
  {
    "id": "history",
    "codepoint": "ebea"
  },
  {
    "id": "history-off",
    "codepoint": "f3fb"
  },
  {
    "id": "history-toggle",
    "codepoint": "f1fc"
  },
  {
    "id": "home",
    "codepoint": "eac1"
  },
  {
    "id": "home-2",
    "codepoint": "eac0"
  },
  {
    "id": "home-bitcoin",
    "codepoint": "ff3a"
  },
  {
    "id": "home-bolt",
    "codepoint": "f336"
  },
  {
    "id": "home-cancel",
    "codepoint": "f350"
  },
  {
    "id": "home-check",
    "codepoint": "f337"
  },
  {
    "id": "home-cog",
    "codepoint": "f338"
  },
  {
    "id": "home-dollar",
    "codepoint": "f339"
  },
  {
    "id": "home-dot",
    "codepoint": "f33a"
  },
  {
    "id": "home-down",
    "codepoint": "f33b"
  },
  {
    "id": "home-eco",
    "codepoint": "f351"
  },
  {
    "id": "home-edit",
    "codepoint": "f352"
  },
  {
    "id": "home-exclamation",
    "codepoint": "f33c"
  },
  {
    "id": "home-hand",
    "codepoint": "f504"
  },
  {
    "id": "home-heart",
    "codepoint": "f353"
  },
  {
    "id": "home-infinity",
    "codepoint": "f505"
  },
  {
    "id": "home-link",
    "codepoint": "f354"
  },
  {
    "id": "home-lock",
    "codepoint": "10204"
  },
  {
    "id": "home-minus",
    "codepoint": "f33d"
  },
  {
    "id": "home-move",
    "codepoint": "f33e"
  },
  {
    "id": "home-off",
    "codepoint": "f145"
  },
  {
    "id": "home-plus",
    "codepoint": "f33f"
  },
  {
    "id": "home-question",
    "codepoint": "f340"
  },
  {
    "id": "home-ribbon",
    "codepoint": "f355"
  },
  {
    "id": "home-search",
    "codepoint": "f341"
  },
  {
    "id": "home-share",
    "codepoint": "f342"
  },
  {
    "id": "home-shield",
    "codepoint": "f343"
  },
  {
    "id": "home-signal",
    "codepoint": "f356"
  },
  {
    "id": "home-spark",
    "codepoint": "ffb5"
  },
  {
    "id": "home-star",
    "codepoint": "f344"
  },
  {
    "id": "home-stats",
    "codepoint": "f345"
  },
  {
    "id": "home-up",
    "codepoint": "f346"
  },
  {
    "id": "home-x",
    "codepoint": "f347"
  },
  {
    "id": "horse",
    "codepoint": "fc46"
  },
  {
    "id": "horse-toy",
    "codepoint": "f28a"
  },
  {
    "id": "horseshoe",
    "codepoint": "fcb7"
  },
  {
    "id": "hospital",
    "codepoint": "fd59"
  },
  {
    "id": "hospital-circle",
    "codepoint": "fd58"
  },
  {
    "id": "hotel-service",
    "codepoint": "ef80"
  },
  {
    "id": "hourglass",
    "codepoint": "ef93"
  },
  {
    "id": "hourglass-empty",
    "codepoint": "f146"
  },
  {
    "id": "hourglass-high",
    "codepoint": "f092"
  },
  {
    "id": "hourglass-low",
    "codepoint": "f093"
  },
  {
    "id": "hourglass-off",
    "codepoint": "f147"
  },
  {
    "id": "hours-12",
    "codepoint": "fc53"
  },
  {
    "id": "hours-24",
    "codepoint": "f5e7"
  },
  {
    "id": "html",
    "codepoint": "f7b1"
  },
  {
    "id": "http-connect",
    "codepoint": "fa28"
  },
  {
    "id": "http-connect-off",
    "codepoint": "100e7"
  },
  {
    "id": "http-delete",
    "codepoint": "fa29"
  },
  {
    "id": "http-delete-off",
    "codepoint": "100e6"
  },
  {
    "id": "http-get",
    "codepoint": "fa2a"
  },
  {
    "id": "http-get-off",
    "codepoint": "100e5"
  },
  {
    "id": "http-head",
    "codepoint": "fa2b"
  },
  {
    "id": "http-head-off",
    "codepoint": "100e4"
  },
  {
    "id": "http-options",
    "codepoint": "fa2c"
  },
  {
    "id": "http-options-off",
    "codepoint": "100e3"
  },
  {
    "id": "http-patch",
    "codepoint": "fa2d"
  },
  {
    "id": "http-patch-off",
    "codepoint": "100e2"
  },
  {
    "id": "http-post",
    "codepoint": "fa2e"
  },
  {
    "id": "http-post-off",
    "codepoint": "100e1"
  },
  {
    "id": "http-put",
    "codepoint": "fa2f"
  },
  {
    "id": "http-put-off",
    "codepoint": "100e0"
  },
  {
    "id": "http-que",
    "codepoint": "fa5b"
  },
  {
    "id": "http-que-off",
    "codepoint": "100df"
  },
  {
    "id": "http-trace",
    "codepoint": "fa30"
  },
  {
    "id": "http-trace-off",
    "codepoint": "100de"
  },
  {
    "id": "hula-hoop",
    "codepoint": "1024a"
  },
  {
    "id": "ice-cream",
    "codepoint": "eac2"
  },
  {
    "id": "ice-cream-2",
    "codepoint": "ee9f"
  },
  {
    "id": "ice-cream-off",
    "codepoint": "f148"
  },
  {
    "id": "ice-skating",
    "codepoint": "efcb"
  },
  {
    "id": "iceberg",
    "codepoint": "1022a"
  },
  {
    "id": "icons",
    "codepoint": "f1d4"
  },
  {
    "id": "icons-off",
    "codepoint": "f3fc"
  },
  {
    "id": "icosahedron",
    "codepoint": "fec6"
  },
  {
    "id": "id",
    "codepoint": "eac3"
  },
  {
    "id": "id-badge",
    "codepoint": "eff7"
  },
  {
    "id": "id-badge-2",
    "codepoint": "f076"
  },
  {
    "id": "id-badge-off",
    "codepoint": "f3fd"
  },
  {
    "id": "id-off",
    "codepoint": "f149"
  },
  {
    "id": "ikosaedr",
    "codepoint": "fec6"
  },
  {
    "id": "image-generation",
    "codepoint": "101ef"
  },
  {
    "id": "image-in-picture",
    "codepoint": "fd9f"
  },
  {
    "id": "inbox",
    "codepoint": "eac4"
  },
  {
    "id": "inbox-off",
    "codepoint": "f14a"
  },
  {
    "id": "indent-decrease",
    "codepoint": "eb91"
  },
  {
    "id": "indent-increase",
    "codepoint": "eb92"
  },
  {
    "id": "infinity",
    "codepoint": "eb69"
  },
  {
    "id": "infinity-2",
    "codepoint": "10237"
  },
  {
    "id": "infinity-off",
    "codepoint": "f3fe"
  },
  {
    "id": "info-circle",
    "codepoint": "eac5"
  },
  {
    "id": "info-hexagon",
    "codepoint": "f7aa"
  },
  {
    "id": "info-octagon",
    "codepoint": "f7ab"
  },
  {
    "id": "info-small",
    "codepoint": "f922"
  },
  {
    "id": "info-square",
    "codepoint": "eac6"
  },
  {
    "id": "info-square-rounded",
    "codepoint": "f635"
  },
  {
    "id": "info-triangle",
    "codepoint": "f923"
  },
  {
    "id": "inner-shadow-bottom",
    "codepoint": "f520"
  },
  {
    "id": "inner-shadow-bottom-left",
    "codepoint": "f51e"
  },
  {
    "id": "inner-shadow-bottom-right",
    "codepoint": "f51f"
  },
  {
    "id": "inner-shadow-left",
    "codepoint": "f521"
  },
  {
    "id": "inner-shadow-right",
    "codepoint": "f522"
  },
  {
    "id": "inner-shadow-top",
    "codepoint": "f525"
  },
  {
    "id": "inner-shadow-top-left",
    "codepoint": "f523"
  },
  {
    "id": "inner-shadow-top-right",
    "codepoint": "f524"
  },
  {
    "id": "input-ai",
    "codepoint": "fc5a"
  },
  {
    "id": "input-check",
    "codepoint": "fc5b"
  },
  {
    "id": "input-search",
    "codepoint": "f2a2"
  },
  {
    "id": "input-spark",
    "codepoint": "ffb4"
  },
  {
    "id": "input-x",
    "codepoint": "fc5c"
  },
  {
    "id": "invoice",
    "codepoint": "feab"
  },
  {
    "id": "ironing",
    "codepoint": "fa7c"
  },
  {
    "id": "ironing-1",
    "codepoint": "f2f4"
  },
  {
    "id": "ironing-2",
    "codepoint": "f2f5"
  },
  {
    "id": "ironing-3",
    "codepoint": "f2f6"
  },
  {
    "id": "ironing-off",
    "codepoint": "f2f7"
  },
  {
    "id": "ironing-steam",
    "codepoint": "f2f9"
  },
  {
    "id": "ironing-steam-off",
    "codepoint": "f2f8"
  },
  {
    "id": "irregular-polyhedron",
    "codepoint": "faab"
  },
  {
    "id": "irregular-polyhedron-off",
    "codepoint": "faa9"
  },
  {
    "id": "irregular-polyhedron-plus",
    "codepoint": "faaa"
  },
  {
    "id": "italic",
    "codepoint": "eb93"
  },
  {
    "id": "italic-off",
    "codepoint": "10271"
  },
  {
    "id": "jacket",
    "codepoint": "f661"
  },
  {
    "id": "jetpack",
    "codepoint": "f581"
  },
  {
    "id": "jetski",
    "codepoint": "10229"
  },
  {
    "id": "jewish-star",
    "codepoint": "f3ff"
  },
  {
    "id": "join-bevel",
    "codepoint": "ff4c"
  },
  {
    "id": "join-round",
    "codepoint": "ff4b"
  },
  {
    "id": "join-straight",
    "codepoint": "ff4a"
  },
  {
    "id": "joker",
    "codepoint": "1005f"
  },
  {
    "id": "jpg",
    "codepoint": "f3ac"
  },
  {
    "id": "json",
    "codepoint": "f7b2"
  },
  {
    "id": "jump-rope",
    "codepoint": "ed8f"
  },
  {
    "id": "karate",
    "codepoint": "ed32"
  },
  {
    "id": "kayak",
    "codepoint": "f1d6"
  },
  {
    "id": "kering",
    "codepoint": "efb8"
  },
  {
    "id": "kerning",
    "codepoint": "efb8"
  },
  {
    "id": "key",
    "codepoint": "eac7"
  },
  {
    "id": "key-off",
    "codepoint": "f14b"
  },
  {
    "id": "keyboard",
    "codepoint": "ebd6"
  },
  {
    "id": "keyboard-hide",
    "codepoint": "ec7e"
  },
  {
    "id": "keyboard-off",
    "codepoint": "eea0"
  },
  {
    "id": "keyboard-show",
    "codepoint": "ec7f"
  },
  {
    "id": "keyframe",
    "codepoint": "f576"
  },
  {
    "id": "keyframe-align-center",
    "codepoint": "f582"
  },
  {
    "id": "keyframe-align-horizontal",
    "codepoint": "f583"
  },
  {
    "id": "keyframe-align-vertical",
    "codepoint": "f584"
  },
  {
    "id": "keyframes",
    "codepoint": "f585"
  },
  {
    "id": "label",
    "codepoint": "ff38"
  },
  {
    "id": "label-important",
    "codepoint": "ff49"
  },
  {
    "id": "label-off",
    "codepoint": "ff39"
  },
  {
    "id": "ladder",
    "codepoint": "efe2"
  },
  {
    "id": "ladder-off",
    "codepoint": "f14c"
  },
  {
    "id": "ladle",
    "codepoint": "fc14"
  },
  {
    "id": "lambda",
    "codepoint": "f541"
  },
  {
    "id": "lamp",
    "codepoint": "efab"
  },
  {
    "id": "lamp-2",
    "codepoint": "f09e"
  },
  {
    "id": "lamp-off",
    "codepoint": "f14d"
  },
  {
    "id": "lane",
    "codepoint": "faf9"
  },
  {
    "id": "language",
    "codepoint": "ebbe"
  },
  {
    "id": "language-hiragana",
    "codepoint": "ef77"
  },
  {
    "id": "language-katakana",
    "codepoint": "ef78"
  },
  {
    "id": "language-off",
    "codepoint": "f14e"
  },
  {
    "id": "lasso",
    "codepoint": "efac"
  },
  {
    "id": "lasso-off",
    "codepoint": "f14f"
  },
  {
    "id": "lasso-polygon",
    "codepoint": "f388"
  },
  {
    "id": "laurel-wreath",
    "codepoint": "ff45"
  },
  {
    "id": "laurel-wreath-1",
    "codepoint": "ff48"
  },
  {
    "id": "laurel-wreath-2",
    "codepoint": "ff47"
  },
  {
    "id": "laurel-wreath-3",
    "codepoint": "ff46"
  },
  {
    "id": "lawn-mower",
    "codepoint": "10236"
  },
  {
    "id": "layers-difference",
    "codepoint": "eac8"
  },
  {
    "id": "layers-intersect",
    "codepoint": "eac9"
  },
  {
    "id": "layers-intersect-2",
    "codepoint": "eff8"
  },
  {
    "id": "layers-linked",
    "codepoint": "eea1"
  },
  {
    "id": "layers-off",
    "codepoint": "f150"
  },
  {
    "id": "layers-selected",
    "codepoint": "fea9"
  },
  {
    "id": "layers-selected-bottom",
    "codepoint": "feaa"
  },
  {
    "id": "layers-subtract",
    "codepoint": "eaca"
  },
  {
    "id": "layers-union",
    "codepoint": "eacb"
  },
  {
    "id": "layout",
    "codepoint": "eadb"
  },
  {
    "id": "layout-2",
    "codepoint": "eacc"
  },
  {
    "id": "layout-align-bottom",
    "codepoint": "eacd"
  },
  {
    "id": "layout-align-center",
    "codepoint": "eace"
  },
  {
    "id": "layout-align-left",
    "codepoint": "eacf"
  },
  {
    "id": "layout-align-middle",
    "codepoint": "ead0"
  },
  {
    "id": "layout-align-right",
    "codepoint": "ead1"
  },
  {
    "id": "layout-align-top",
    "codepoint": "ead2"
  },
  {
    "id": "layout-board",
    "codepoint": "ef95"
  },
  {
    "id": "layout-board-split",
    "codepoint": "ef94"
  },
  {
    "id": "layout-bottombar",
    "codepoint": "ead3"
  },
  {
    "id": "layout-bottombar-collapse",
    "codepoint": "f28b"
  },
  {
    "id": "layout-bottombar-expand",
    "codepoint": "f28c"
  },
  {
    "id": "layout-bottombar-inactive",
    "codepoint": "fd45"
  },
  {
    "id": "layout-cards",
    "codepoint": "ec13"
  },
  {
    "id": "layout-collage",
    "codepoint": "f389"
  },
  {
    "id": "layout-columns",
    "codepoint": "ead4"
  },
  {
    "id": "layout-dashboard",
    "codepoint": "f02c"
  },
  {
    "id": "layout-distribute-horizontal",
    "codepoint": "ead5"
  },
  {
    "id": "layout-distribute-vertical",
    "codepoint": "ead6"
  },
  {
    "id": "layout-grid",
    "codepoint": "edba"
  },
  {
    "id": "layout-grid-add",
    "codepoint": "edb9"
  },
  {
    "id": "layout-grid-remove",
    "codepoint": "fa7d"
  },
  {
    "id": "layout-kanban",
    "codepoint": "ec3f"
  },
  {
    "id": "layout-list",
    "codepoint": "ec14"
  },
  {
    "id": "layout-navbar",
    "codepoint": "ead7"
  },
  {
    "id": "layout-navbar-collapse",
    "codepoint": "f28d"
  },
  {
    "id": "layout-navbar-expand",
    "codepoint": "f28e"
  },
  {
    "id": "layout-navbar-inactive",
    "codepoint": "fd46"
  },
  {
    "id": "layout-off",
    "codepoint": "f151"
  },
  {
    "id": "layout-rows",
    "codepoint": "ead8"
  },
  {
    "id": "layout-sidebar",
    "codepoint": "eada"
  },
  {
    "id": "layout-sidebar-inactive",
    "codepoint": "fd47"
  },
  {
    "id": "layout-sidebar-left-collapse",
    "codepoint": "f004"
  },
  {
    "id": "layout-sidebar-left-expand",
    "codepoint": "f005"
  },
  {
    "id": "layout-sidebar-right",
    "codepoint": "ead9"
  },
  {
    "id": "layout-sidebar-right-collapse",
    "codepoint": "f006"
  },
  {
    "id": "layout-sidebar-right-expand",
    "codepoint": "f007"
  },
  {
    "id": "layout-sidebar-right-inactive",
    "codepoint": "fd48"
  },
  {
    "id": "leaf",
    "codepoint": "ed4f"
  },
  {
    "id": "leaf-2",
    "codepoint": "ff44"
  },
  {
    "id": "leaf-maple",
    "codepoint": "10249"
  },
  {
    "id": "leaf-off",
    "codepoint": "f400"
  },
  {
    "id": "lego",
    "codepoint": "eadc"
  },
  {
    "id": "lego-off",
    "codepoint": "f401"
  },
  {
    "id": "lemon",
    "codepoint": "ef10"
  },
  {
    "id": "lemon-2",
    "codepoint": "ef81"
  },
  {
    "id": "letter-a",
    "codepoint": "ec50"
  },
  {
    "id": "letter-a-small",
    "codepoint": "fcc7"
  },
  {
    "id": "letter-b",
    "codepoint": "ec51"
  },
  {
    "id": "letter-b-small",
    "codepoint": "fcc8"
  },
  {
    "id": "letter-c",
    "codepoint": "ec52"
  },
  {
    "id": "letter-c-small",
    "codepoint": "fcc9"
  },
  {
    "id": "letter-case",
    "codepoint": "eea5"
  },
  {
    "id": "letter-case-lower",
    "codepoint": "eea2"
  },
  {
    "id": "letter-case-toggle",
    "codepoint": "eea3"
  },
  {
    "id": "letter-case-upper",
    "codepoint": "eea4"
  },
  {
    "id": "letter-d",
    "codepoint": "ec53"
  },
  {
    "id": "letter-d-small",
    "codepoint": "fcca"
  },
  {
    "id": "letter-e",
    "codepoint": "ec54"
  },
  {
    "id": "letter-e-small",
    "codepoint": "fccb"
  },
  {
    "id": "letter-f",
    "codepoint": "ec55"
  },
  {
    "id": "letter-f-small",
    "codepoint": "fccc"
  },
  {
    "id": "letter-g",
    "codepoint": "ec56"
  },
  {
    "id": "letter-g-small",
    "codepoint": "fccd"
  },
  {
    "id": "letter-h",
    "codepoint": "ec57"
  },
  {
    "id": "letter-h-small",
    "codepoint": "fcce"
  },
  {
    "id": "letter-i",
    "codepoint": "ec58"
  },
  {
    "id": "letter-i-small",
    "codepoint": "fccf"
  },
  {
    "id": "letter-j",
    "codepoint": "ec59"
  },
  {
    "id": "letter-j-small",
    "codepoint": "fcd0"
  },
  {
    "id": "letter-k",
    "codepoint": "ec5a"
  },
  {
    "id": "letter-k-small",
    "codepoint": "fcd1"
  },
  {
    "id": "letter-l",
    "codepoint": "ec5b"
  },
  {
    "id": "letter-l-small",
    "codepoint": "fcd2"
  },
  {
    "id": "letter-m",
    "codepoint": "ec5c"
  },
  {
    "id": "letter-m-small",
    "codepoint": "fcd3"
  },
  {
    "id": "letter-n",
    "codepoint": "ec5d"
  },
  {
    "id": "letter-n-small",
    "codepoint": "fcd4"
  },
  {
    "id": "letter-o",
    "codepoint": "ec5e"
  },
  {
    "id": "letter-o-small",
    "codepoint": "fcd5"
  },
  {
    "id": "letter-p",
    "codepoint": "ec5f"
  },
  {
    "id": "letter-p-small",
    "codepoint": "fcd6"
  },
  {
    "id": "letter-q",
    "codepoint": "ec60"
  },
  {
    "id": "letter-q-small",
    "codepoint": "fcd7"
  },
  {
    "id": "letter-r",
    "codepoint": "ec61"
  },
  {
    "id": "letter-r-small",
    "codepoint": "fcd8"
  },
  {
    "id": "letter-s",
    "codepoint": "ec62"
  },
  {
    "id": "letter-s-small",
    "codepoint": "fcd9"
  },
  {
    "id": "letter-spacing",
    "codepoint": "eea6"
  },
  {
    "id": "letter-t",
    "codepoint": "ec63"
  },
  {
    "id": "letter-t-small",
    "codepoint": "fcda"
  },
  {
    "id": "letter-u",
    "codepoint": "ec64"
  },
  {
    "id": "letter-u-small",
    "codepoint": "fcdb"
  },
  {
    "id": "letter-v",
    "codepoint": "ec65"
  },
  {
    "id": "letter-v-small",
    "codepoint": "fcdc"
  },
  {
    "id": "letter-w",
    "codepoint": "ec66"
  },
  {
    "id": "letter-w-small",
    "codepoint": "fcdd"
  },
  {
    "id": "letter-x",
    "codepoint": "ec67"
  },
  {
    "id": "letter-x-small",
    "codepoint": "fcde"
  },
  {
    "id": "letter-y",
    "codepoint": "ec68"
  },
  {
    "id": "letter-y-small",
    "codepoint": "fcdf"
  },
  {
    "id": "letter-z",
    "codepoint": "ec69"
  },
  {
    "id": "letter-z-small",
    "codepoint": "fce0"
  },
  {
    "id": "library",
    "codepoint": "fd4c"
  },
  {
    "id": "library-minus",
    "codepoint": "fd49"
  },
  {
    "id": "library-photo",
    "codepoint": "fd4a"
  },
  {
    "id": "library-plus",
    "codepoint": "fd4b"
  },
  {
    "id": "license",
    "codepoint": "ebc0"
  },
  {
    "id": "license-off",
    "codepoint": "f153"
  },
  {
    "id": "lifebuoy",
    "codepoint": "eadd"
  },
  {
    "id": "lifebuoy-off",
    "codepoint": "f154"
  },
  {
    "id": "lighter",
    "codepoint": "f794"
  },
  {
    "id": "line",
    "codepoint": "ec40"
  },
  {
    "id": "line-dashed",
    "codepoint": "eea7"
  },
  {
    "id": "line-dotted",
    "codepoint": "eea8"
  },
  {
    "id": "line-height",
    "codepoint": "eb94"
  },
  {
    "id": "line-scan",
    "codepoint": "fcb8"
  },
  {
    "id": "link",
    "codepoint": "eade"
  },
  {
    "id": "link-minus",
    "codepoint": "fd16"
  },
  {
    "id": "link-off",
    "codepoint": "f402"
  },
  {
    "id": "link-plus",
    "codepoint": "fd17"
  },
  {
    "id": "list",
    "codepoint": "eb6b"
  },
  {
    "id": "list-check",
    "codepoint": "eb6a"
  },
  {
    "id": "list-details",
    "codepoint": "ef40"
  },
  {
    "id": "list-letters",
    "codepoint": "fc47"
  },
  {
    "id": "list-numbers",
    "codepoint": "ef11"
  },
  {
    "id": "list-search",
    "codepoint": "eea9"
  },
  {
    "id": "list-tree",
    "codepoint": "fafa"
  },
  {
    "id": "live-photo",
    "codepoint": "eadf"
  },
  {
    "id": "live-photo-off",
    "codepoint": "f403"
  },
  {
    "id": "live-view",
    "codepoint": "ec6b"
  },
  {
    "id": "load-balancer",
    "codepoint": "fa5c"
  },
  {
    "id": "loader",
    "codepoint": "eca3"
  },
  {
    "id": "loader-2",
    "codepoint": "f226"
  },
  {
    "id": "loader-3",
    "codepoint": "f513"
  },
  {
    "id": "loader-4",
    "codepoint": "10235"
  },
  {
    "id": "loader-quarter",
    "codepoint": "eca2"
  },
  {
    "id": "location",
    "codepoint": "eae0"
  },
  {
    "id": "location-bolt",
    "codepoint": "fbaf"
  },
  {
    "id": "location-broken",
    "codepoint": "f2c4"
  },
  {
    "id": "location-cancel",
    "codepoint": "fbb0"
  },
  {
    "id": "location-check",
    "codepoint": "fbb1"
  },
  {
    "id": "location-code",
    "codepoint": "fbb2"
  },
  {
    "id": "location-cog",
    "codepoint": "fbb3"
  },
  {
    "id": "location-discount",
    "codepoint": "fbb4"
  },
  {
    "id": "location-dollar",
    "codepoint": "fbb5"
  },
  {
    "id": "location-down",
    "codepoint": "fbb6"
  },
  {
    "id": "location-exclamation",
    "codepoint": "fbb7"
  },
  {
    "id": "location-heart",
    "codepoint": "fbb8"
  },
  {
    "id": "location-minus",
    "codepoint": "fbb9"
  },
  {
    "id": "location-off",
    "codepoint": "f155"
  },
  {
    "id": "location-pause",
    "codepoint": "fbba"
  },
  {
    "id": "location-pin",
    "codepoint": "fbbb"
  },
  {
    "id": "location-plus",
    "codepoint": "fbbc"
  },
  {
    "id": "location-question",
    "codepoint": "fbbd"
  },
  {
    "id": "location-search",
    "codepoint": "fbbe"
  },
  {
    "id": "location-share",
    "codepoint": "fbbf"
  },
  {
    "id": "location-star",
    "codepoint": "fbc0"
  },
  {
    "id": "location-up",
    "codepoint": "fbc1"
  },
  {
    "id": "location-x",
    "codepoint": "fbc2"
  },
  {
    "id": "lock",
    "codepoint": "eae2"
  },
  {
    "id": "lock-access",
    "codepoint": "eeaa"
  },
  {
    "id": "lock-access-off",
    "codepoint": "f404"
  },
  {
    "id": "lock-bitcoin",
    "codepoint": "ff37"
  },
  {
    "id": "lock-bolt",
    "codepoint": "f924"
  },
  {
    "id": "lock-cancel",
    "codepoint": "f925"
  },
  {
    "id": "lock-check",
    "codepoint": "f926"
  },
  {
    "id": "lock-code",
    "codepoint": "f927"
  },
  {
    "id": "lock-cog",
    "codepoint": "f928"
  },
  {
    "id": "lock-dollar",
    "codepoint": "f929"
  },
  {
    "id": "lock-down",
    "codepoint": "f92a"
  },
  {
    "id": "lock-exclamation",
    "codepoint": "f92b"
  },
  {
    "id": "lock-heart",
    "codepoint": "f92c"
  },
  {
    "id": "lock-minus",
    "codepoint": "f92d"
  },
  {
    "id": "lock-off",
    "codepoint": "ed1e"
  },
  {
    "id": "lock-open",
    "codepoint": "eae1"
  },
  {
    "id": "lock-open-2",
    "codepoint": "fea8"
  },
  {
    "id": "lock-open-off",
    "codepoint": "f156"
  },
  {
    "id": "lock-password",
    "codepoint": "ff9f"
  },
  {
    "id": "lock-pause",
    "codepoint": "f92e"
  },
  {
    "id": "lock-pin",
    "codepoint": "f92f"
  },
  {
    "id": "lock-plus",
    "codepoint": "f930"
  },
  {
    "id": "lock-question",
    "codepoint": "f931"
  },
  {
    "id": "lock-search",
    "codepoint": "f932"
  },
  {
    "id": "lock-share",
    "codepoint": "f933"
  },
  {
    "id": "lock-square",
    "codepoint": "ef51"
  },
  {
    "id": "lock-square-rounded",
    "codepoint": "f636"
  },
  {
    "id": "lock-star",
    "codepoint": "f934"
  },
  {
    "id": "lock-up",
    "codepoint": "f935"
  },
  {
    "id": "lock-x",
    "codepoint": "f936"
  },
  {
    "id": "logic-and",
    "codepoint": "f240"
  },
  {
    "id": "logic-buffer",
    "codepoint": "f241"
  },
  {
    "id": "logic-nand",
    "codepoint": "f242"
  },
  {
    "id": "logic-nor",
    "codepoint": "f243"
  },
  {
    "id": "logic-not",
    "codepoint": "f244"
  },
  {
    "id": "logic-or",
    "codepoint": "f245"
  },
  {
    "id": "logic-xnor",
    "codepoint": "f246"
  },
  {
    "id": "logic-xor",
    "codepoint": "f247"
  },
  {
    "id": "login",
    "codepoint": "eba7"
  },
  {
    "id": "login-2",
    "codepoint": "fc76"
  },
  {
    "id": "logout",
    "codepoint": "eba8"
  },
  {
    "id": "logout-2",
    "codepoint": "fa7e"
  },
  {
    "id": "logs",
    "codepoint": "fea7"
  },
  {
    "id": "lollipop",
    "codepoint": "efcc"
  },
  {
    "id": "lollipop-off",
    "codepoint": "f157"
  },
  {
    "id": "luggage",
    "codepoint": "efad"
  },
  {
    "id": "luggage-off",
    "codepoint": "f158"
  },
  {
    "id": "lungs",
    "codepoint": "ef62"
  },
  {
    "id": "lungs-off",
    "codepoint": "f405"
  },
  {
    "id": "macro",
    "codepoint": "eeab"
  },
  {
    "id": "macro-off",
    "codepoint": "f406"
  },
  {
    "id": "magnet",
    "codepoint": "eae3"
  },
  {
    "id": "magnet-off",
    "codepoint": "f159"
  },
  {
    "id": "magnetic",
    "codepoint": "fcb9"
  },
  {
    "id": "mail",
    "codepoint": "eae5"
  },
  {
    "id": "mail-ai",
    "codepoint": "fa31"
  },
  {
    "id": "mail-bitcoin",
    "codepoint": "ff36"
  },
  {
    "id": "mail-bolt",
    "codepoint": "f937"
  },
  {
    "id": "mail-cancel",
    "codepoint": "f938"
  },
  {
    "id": "mail-check",
    "codepoint": "f939"
  },
  {
    "id": "mail-code",
    "codepoint": "f93a"
  },
  {
    "id": "mail-cog",
    "codepoint": "f93b"
  },
  {
    "id": "mail-dollar",
    "codepoint": "f93c"
  },
  {
    "id": "mail-down",
    "codepoint": "f93d"
  },
  {
    "id": "mail-exclamation",
    "codepoint": "f93e"
  },
  {
    "id": "mail-fast",
    "codepoint": "f069"
  },
  {
    "id": "mail-forward",
    "codepoint": "eeac"
  },
  {
    "id": "mail-heart",
    "codepoint": "f93f"
  },
  {
    "id": "mail-minus",
    "codepoint": "f940"
  },
  {
    "id": "mail-off",
    "codepoint": "f15a"
  },
  {
    "id": "mail-opened",
    "codepoint": "eae4"
  },
  {
    "id": "mail-pause",
    "codepoint": "f941"
  },
  {
    "id": "mail-pin",
    "codepoint": "f942"
  },
  {
    "id": "mail-plus",
    "codepoint": "f943"
  },
  {
    "id": "mail-question",
    "codepoint": "f944"
  },
  {
    "id": "mail-search",
    "codepoint": "f945"
  },
  {
    "id": "mail-share",
    "codepoint": "f946"
  },
  {
    "id": "mail-spark",
    "codepoint": "ffb3"
  },
  {
    "id": "mail-star",
    "codepoint": "f947"
  },
  {
    "id": "mail-up",
    "codepoint": "f948"
  },
  {
    "id": "mail-x",
    "codepoint": "f949"
  },
  {
    "id": "mailbox",
    "codepoint": "eead"
  },
  {
    "id": "mailbox-off",
    "codepoint": "f15b"
  },
  {
    "id": "man",
    "codepoint": "eae6"
  },
  {
    "id": "manual-gearbox",
    "codepoint": "ed7b"
  },
  {
    "id": "map",
    "codepoint": "eae9"
  },
  {
    "id": "map-2",
    "codepoint": "eae7"
  },
  {
    "id": "map-bolt",
    "codepoint": "fbc3"
  },
  {
    "id": "map-cancel",
    "codepoint": "fbc4"
  },
  {
    "id": "map-check",
    "codepoint": "fbc5"
  },
  {
    "id": "map-code",
    "codepoint": "fbc6"
  },
  {
    "id": "map-cog",
    "codepoint": "fbc7"
  },
  {
    "id": "map-discount",
    "codepoint": "fbc8"
  },
  {
    "id": "map-dollar",
    "codepoint": "fbc9"
  },
  {
    "id": "map-down",
    "codepoint": "fbca"
  },
  {
    "id": "map-east",
    "codepoint": "fc5d"
  },
  {
    "id": "map-exclamation",
    "codepoint": "fbcb"
  },
  {
    "id": "map-heart",
    "codepoint": "fbcc"
  },
  {
    "id": "map-lock",
    "codepoint": "10203"
  },
  {
    "id": "map-minus",
    "codepoint": "fbcd"
  },
  {
    "id": "map-north",
    "codepoint": "fc5e"
  },
  {
    "id": "map-off",
    "codepoint": "f15c"
  },
  {
    "id": "map-pause",
    "codepoint": "fbce"
  },
  {
    "id": "map-pin",
    "codepoint": "eae8"
  },
  {
    "id": "map-pin-2",
    "codepoint": "fc48"
  },
  {
    "id": "map-pin-bolt",
    "codepoint": "f94a"
  },
  {
    "id": "map-pin-cancel",
    "codepoint": "f94b"
  },
  {
    "id": "map-pin-check",
    "codepoint": "f94c"
  },
  {
    "id": "map-pin-code",
    "codepoint": "f94d"
  },
  {
    "id": "map-pin-cog",
    "codepoint": "f94e"
  },
  {
    "id": "map-pin-dollar",
    "codepoint": "f94f"
  },
  {
    "id": "map-pin-down",
    "codepoint": "f950"
  },
  {
    "id": "map-pin-exclamation",
    "codepoint": "f951"
  },
  {
    "id": "map-pin-heart",
    "codepoint": "f952"
  },
  {
    "id": "map-pin-minus",
    "codepoint": "f953"
  },
  {
    "id": "map-pin-off",
    "codepoint": "ecf3"
  },
  {
    "id": "map-pin-pause",
    "codepoint": "f954"
  },
  {
    "id": "map-pin-pin",
    "codepoint": "f955"
  },
  {
    "id": "map-pin-plus",
    "codepoint": "f956"
  },
  {
    "id": "map-pin-question",
    "codepoint": "f957"
  },
  {
    "id": "map-pin-search",
    "codepoint": "f958"
  },
  {
    "id": "map-pin-share",
    "codepoint": "f795"
  },
  {
    "id": "map-pin-star",
    "codepoint": "f959"
  },
  {
    "id": "map-pin-up",
    "codepoint": "f95a"
  },
  {
    "id": "map-pin-x",
    "codepoint": "f95b"
  },
  {
    "id": "map-pins",
    "codepoint": "ed5e"
  },
  {
    "id": "map-plus",
    "codepoint": "fbcf"
  },
  {
    "id": "map-question",
    "codepoint": "fbd0"
  },
  {
    "id": "map-route",
    "codepoint": "fc79"
  },
  {
    "id": "map-search",
    "codepoint": "ef82"
  },
  {
    "id": "map-share",
    "codepoint": "fbd1"
  },
  {
    "id": "map-shield",
    "codepoint": "10202"
  },
  {
    "id": "map-south",
    "codepoint": "fc5f"
  },
  {
    "id": "map-star",
    "codepoint": "fbd2"
  },
  {
    "id": "map-up",
    "codepoint": "fbd3"
  },
  {
    "id": "map-west",
    "codepoint": "fc60"
  },
  {
    "id": "map-x",
    "codepoint": "fbd4"
  },
  {
    "id": "markdown",
    "codepoint": "ec41"
  },
  {
    "id": "markdown-off",
    "codepoint": "f407"
  },
  {
    "id": "marquee",
    "codepoint": "ec77"
  },
  {
    "id": "marquee-2",
    "codepoint": "eeae"
  },
  {
    "id": "marquee-off",
    "codepoint": "f15d"
  },
  {
    "id": "mars",
    "codepoint": "ec80"
  },
  {
    "id": "mask",
    "codepoint": "eeb0"
  },
  {
    "id": "mask-off",
    "codepoint": "eeaf"
  },
  {
    "id": "masks-theater",
    "codepoint": "f263"
  },
  {
    "id": "masks-theater-off",
    "codepoint": "f408"
  },
  {
    "id": "massage",
    "codepoint": "eeb1"
  },
  {
    "id": "matchstick",
    "codepoint": "f577"
  },
  {
    "id": "math",
    "codepoint": "ebeb"
  },
  {
    "id": "math-1-divide-2",
    "codepoint": "f4e2"
  },
  {
    "id": "math-1-divide-3",
    "codepoint": "f4e3"
  },
  {
    "id": "math-avg",
    "codepoint": "f0f4"
  },
  {
    "id": "math-cos",
    "codepoint": "ff1f"
  },
  {
    "id": "math-ctg",
    "codepoint": "ff35"
  },
  {
    "id": "math-equal-greater",
    "codepoint": "f4e4"
  },
  {
    "id": "math-equal-lower",
    "codepoint": "f4e5"
  },
  {
    "id": "math-function",
    "codepoint": "eeb2"
  },
  {
    "id": "math-function-off",
    "codepoint": "f15e"
  },
  {
    "id": "math-function-y",
    "codepoint": "f4e6"
  },
  {
    "id": "math-greater",
    "codepoint": "f4e7"
  },
  {
    "id": "math-integral",
    "codepoint": "f4e9"
  },
  {
    "id": "math-integral-x",
    "codepoint": "f4e8"
  },
  {
    "id": "math-integrals",
    "codepoint": "f4ea"
  },
  {
    "id": "math-lower",
    "codepoint": "f4eb"
  },
  {
    "id": "math-max",
    "codepoint": "f0f5"
  },
  {
    "id": "math-max-min",
    "codepoint": "fda0"
  },
  {
    "id": "math-min",
    "codepoint": "f0f6"
  },
  {
    "id": "math-not",
    "codepoint": "f4ec"
  },
  {
    "id": "math-off",
    "codepoint": "f409"
  },
  {
    "id": "math-pi",
    "codepoint": "f4ee"
  },
  {
    "id": "math-pi-divide-2",
    "codepoint": "f4ed"
  },
  {
    "id": "math-sec",
    "codepoint": "ff34"
  },
  {
    "id": "math-sin",
    "codepoint": "ff1e"
  },
  {
    "id": "math-symbols",
    "codepoint": "eeb3"
  },
  {
    "id": "math-tg",
    "codepoint": "ff33"
  },
  {
    "id": "math-x-divide-2",
    "codepoint": "f4ef"
  },
  {
    "id": "math-x-divide-y",
    "codepoint": "f4f1"
  },
  {
    "id": "math-x-divide-y-2",
    "codepoint": "f4f0"
  },
  {
    "id": "math-x-floor-divide-y",
    "codepoint": "10073"
  },
  {
    "id": "math-x-minus-x",
    "codepoint": "f4f2"
  },
  {
    "id": "math-x-minus-y",
    "codepoint": "f4f3"
  },
  {
    "id": "math-x-plus-x",
    "codepoint": "f4f4"
  },
  {
    "id": "math-x-plus-y",
    "codepoint": "f4f5"
  },
  {
    "id": "math-xy",
    "codepoint": "f4f6"
  },
  {
    "id": "math-y-minus-y",
    "codepoint": "f4f7"
  },
  {
    "id": "math-y-plus-y",
    "codepoint": "f4f8"
  },
  {
    "id": "matrix",
    "codepoint": "100bc"
  },
  {
    "id": "maximize",
    "codepoint": "eaea"
  },
  {
    "id": "maximize-off",
    "codepoint": "f15f"
  },
  {
    "id": "meat",
    "codepoint": "ef12"
  },
  {
    "id": "meat-off",
    "codepoint": "f40a"
  },
  {
    "id": "medal",
    "codepoint": "ec78"
  },
  {
    "id": "medal-2",
    "codepoint": "efcd"
  },
  {
    "id": "medical-cross",
    "codepoint": "ec2f"
  },
  {
    "id": "medical-cross-circle",
    "codepoint": "fae8"
  },
  {
    "id": "medical-cross-off",
    "codepoint": "f160"
  },
  {
    "id": "medicine-syrup",
    "codepoint": "ef63"
  },
  {
    "id": "meeple",
    "codepoint": "f514"
  },
  {
    "id": "melon",
    "codepoint": "fc7a"
  },
  {
    "id": "menorah",
    "codepoint": "f58c"
  },
  {
    "id": "menu",
    "codepoint": "eaeb"
  },
  {
    "id": "menu-2",
    "codepoint": "ec42"
  },
  {
    "id": "menu-3",
    "codepoint": "ff43"
  },
  {
    "id": "menu-4",
    "codepoint": "ff42"
  },
  {
    "id": "menu-deep",
    "codepoint": "fafb"
  },
  {
    "id": "menu-order",
    "codepoint": "f5f5"
  },
  {
    "id": "mesh",
    "codepoint": "10201"
  },
  {
    "id": "message",
    "codepoint": "eaef"
  },
  {
    "id": "message-2",
    "codepoint": "eaec"
  },
  {
    "id": "message-2-bolt",
    "codepoint": "f95c"
  },
  {
    "id": "message-2-cancel",
    "codepoint": "f95d"
  },
  {
    "id": "message-2-check",
    "codepoint": "f95e"
  },
  {
    "id": "message-2-code",
    "codepoint": "f012"
  },
  {
    "id": "message-2-cog",
    "codepoint": "f95f"
  },
  {
    "id": "message-2-dollar",
    "codepoint": "f960"
  },
  {
    "id": "message-2-down",
    "codepoint": "f961"
  },
  {
    "id": "message-2-exclamation",
    "codepoint": "f962"
  },
  {
    "id": "message-2-heart",
    "codepoint": "f963"
  },
  {
    "id": "message-2-minus",
    "codepoint": "f964"
  },
  {
    "id": "message-2-off",
    "codepoint": "f40b"
  },
  {
    "id": "message-2-pause",
    "codepoint": "f965"
  },
  {
    "id": "message-2-pin",
    "codepoint": "f966"
  },
  {
    "id": "message-2-plus",
    "codepoint": "f967"
  },
  {
    "id": "message-2-question",
    "codepoint": "f968"
  },
  {
    "id": "message-2-search",
    "codepoint": "f969"
  },
  {
    "id": "message-2-share",
    "codepoint": "f077"
  },
  {
    "id": "message-2-star",
    "codepoint": "f96a"
  },
  {
    "id": "message-2-up",
    "codepoint": "f96b"
  },
  {
    "id": "message-2-x",
    "codepoint": "f96c"
  },
  {
    "id": "message-bolt",
    "codepoint": "f96d"
  },
  {
    "id": "message-cancel",
    "codepoint": "f96e"
  },
  {
    "id": "message-chatbot",
    "codepoint": "f38a"
  },
  {
    "id": "message-check",
    "codepoint": "f96f"
  },
  {
    "id": "message-circle",
    "codepoint": "eaed"
  },
  {
    "id": "message-circle-2",
    "codepoint": "eaed"
  },
  {
    "id": "message-circle-bolt",
    "codepoint": "f970"
  },
  {
    "id": "message-circle-cancel",
    "codepoint": "f971"
  },
  {
    "id": "message-circle-check",
    "codepoint": "f972"
  },
  {
    "id": "message-circle-code",
    "codepoint": "f973"
  },
  {
    "id": "message-circle-cog",
    "codepoint": "f974"
  },
  {
    "id": "message-circle-dollar",
    "codepoint": "f975"
  },
  {
    "id": "message-circle-down",
    "codepoint": "f976"
  },
  {
    "id": "message-circle-exclamation",
    "codepoint": "f977"
  },
  {
    "id": "message-circle-heart",
    "codepoint": "f978"
  },
  {
    "id": "message-circle-minus",
    "codepoint": "f979"
  },
  {
    "id": "message-circle-off",
    "codepoint": "ed40"
  },
  {
    "id": "message-circle-pause",
    "codepoint": "f97a"
  },
  {
    "id": "message-circle-pin",
    "codepoint": "f97b"
  },
  {
    "id": "message-circle-plus",
    "codepoint": "f97c"
  },
  {
    "id": "message-circle-question",
    "codepoint": "f97d"
  },
  {
    "id": "message-circle-search",
    "codepoint": "f97e"
  },
  {
    "id": "message-circle-share",
    "codepoint": "f97f"
  },
  {
    "id": "message-circle-star",
    "codepoint": "f980"
  },
  {
    "id": "message-circle-up",
    "codepoint": "f981"
  },
  {
    "id": "message-circle-user",
    "codepoint": "fec5"
  },
  {
    "id": "message-circle-x",
    "codepoint": "f982"
  },
  {
    "id": "message-code",
    "codepoint": "f013"
  },
  {
    "id": "message-cog",
    "codepoint": "f983"
  },
  {
    "id": "message-dollar",
    "codepoint": "f984"
  },
  {
    "id": "message-dots",
    "codepoint": "eaee"
  },
  {
    "id": "message-down",
    "codepoint": "f985"
  },
  {
    "id": "message-exclamation",
    "codepoint": "f986"
  },
  {
    "id": "message-forward",
    "codepoint": "f28f"
  },
  {
    "id": "message-heart",
    "codepoint": "f987"
  },
  {
    "id": "message-language",
    "codepoint": "efae"
  },
  {
    "id": "message-minus",
    "codepoint": "f988"
  },
  {
    "id": "message-off",
    "codepoint": "ed41"
  },
  {
    "id": "message-pause",
    "codepoint": "f989"
  },
  {
    "id": "message-pin",
    "codepoint": "f98a"
  },
  {
    "id": "message-plus",
    "codepoint": "ec9a"
  },
  {
    "id": "message-question",
    "codepoint": "f98b"
  },
  {
    "id": "message-reply",
    "codepoint": "fd4d"
  },
  {
    "id": "message-report",
    "codepoint": "ec9b"
  },
  {
    "id": "message-search",
    "codepoint": "f98c"
  },
  {
    "id": "message-share",
    "codepoint": "f078"
  },
  {
    "id": "message-star",
    "codepoint": "f98d"
  },
  {
    "id": "message-up",
    "codepoint": "f98e"
  },
  {
    "id": "message-user",
    "codepoint": "fec4"
  },
  {
    "id": "message-x",
    "codepoint": "f98f"
  },
  {
    "id": "messages",
    "codepoint": "eb6c"
  },
  {
    "id": "messages-off",
    "codepoint": "ed42"
  },
  {
    "id": "meteor",
    "codepoint": "f1fd"
  },
  {
    "id": "meteor-off",
    "codepoint": "f40c"
  },
  {
    "id": "meter-cube",
    "codepoint": "fd7c"
  },
  {
    "id": "meter-square",
    "codepoint": "fd7d"
  },
  {
    "id": "metronome",
    "codepoint": "fd25"
  },
  {
    "id": "michelin-bib-gourmand",
    "codepoint": "fae9"
  },
  {
    "id": "michelin-star",
    "codepoint": "faeb"
  },
  {
    "id": "michelin-star-green",
    "codepoint": "faea"
  },
  {
    "id": "mickey",
    "codepoint": "f2a3"
  },
  {
    "id": "microfrontends",
    "codepoint": "101ee"
  },
  {
    "id": "microphone",
    "codepoint": "eaf0"
  },
  {
    "id": "microphone-2",
    "codepoint": "ef2c"
  },
  {
    "id": "microphone-2-off",
    "codepoint": "f40d"
  },
  {
    "id": "microphone-off",
    "codepoint": "ed16"
  },
  {
    "id": "microscope",
    "codepoint": "ef64"
  },
  {
    "id": "microscope-off",
    "codepoint": "f40e"
  },
  {
    "id": "microwave",
    "codepoint": "f248"
  },
  {
    "id": "microwave-off",
    "codepoint": "f264"
  },
  {
    "id": "middleware",
    "codepoint": "101ed"
  },
  {
    "id": "military-award",
    "codepoint": "f079"
  },
  {
    "id": "military-rank",
    "codepoint": "efcf"
  },
  {
    "id": "milk",
    "codepoint": "ef13"
  },
  {
    "id": "milk-off",
    "codepoint": "f40f"
  },
  {
    "id": "milkshake",
    "codepoint": "f4c8"
  },
  {
    "id": "minimize",
    "codepoint": "eaf1"
  },
  {
    "id": "minus",
    "codepoint": "eaf2"
  },
  {
    "id": "minus-vertical",
    "codepoint": "eeb4"
  },
  {
    "id": "mist",
    "codepoint": "ec30"
  },
  {
    "id": "mist-off",
    "codepoint": "f410"
  },
  {
    "id": "mobiledata",
    "codepoint": "f9f5"
  },
  {
    "id": "mobiledata-off",
    "codepoint": "f9f4"
  },
  {
    "id": "moneybag",
    "codepoint": "f506"
  },
  {
    "id": "moneybag-edit",
    "codepoint": "1013d"
  },
  {
    "id": "moneybag-heart",
    "codepoint": "1013c"
  },
  {
    "id": "moneybag-minus",
    "codepoint": "1013b"
  },
  {
    "id": "moneybag-move",
    "codepoint": "10139"
  },
  {
    "id": "moneybag-move-back",
    "codepoint": "1013a"
  },
  {
    "id": "moneybag-plus",
    "codepoint": "10138"
  },
  {
    "id": "monkeybar",
    "codepoint": "feb4"
  },
  {
    "id": "mood-angry",
    "codepoint": "f2de"
  },
  {
    "id": "mood-annoyed",
    "codepoint": "f2e0"
  },
  {
    "id": "mood-annoyed-2",
    "codepoint": "f2df"
  },
  {
    "id": "mood-bitcoin",
    "codepoint": "ff32"
  },
  {
    "id": "mood-boy",
    "codepoint": "ed2d"
  },
  {
    "id": "mood-check",
    "codepoint": "f7b3"
  },
  {
    "id": "mood-cog",
    "codepoint": "f7b4"
  },
  {
    "id": "mood-confused",
    "codepoint": "eaf3"
  },
  {
    "id": "mood-confuzed",
    "codepoint": "eaf3"
  },
  {
    "id": "mood-crazy-happy",
    "codepoint": "ed90"
  },
  {
    "id": "mood-cry",
    "codepoint": "ecbb"
  },
  {
    "id": "mood-dollar",
    "codepoint": "f7b5"
  },
  {
    "id": "mood-edit",
    "codepoint": "fa05"
  },
  {
    "id": "mood-empty",
    "codepoint": "eeb5"
  },
  {
    "id": "mood-happy",
    "codepoint": "eaf4"
  },
  {
    "id": "mood-heart",
    "codepoint": "f7b6"
  },
  {
    "id": "mood-kid",
    "codepoint": "ec03"
  },
  {
    "id": "mood-look-down",
    "codepoint": "fd37"
  },
  {
    "id": "mood-look-left",
    "codepoint": "f2c5"
  },
  {
    "id": "mood-look-right",
    "codepoint": "f2c6"
  },
  {
    "id": "mood-look-up",
    "codepoint": "fd38"
  },
  {
    "id": "mood-minus",
    "codepoint": "f7b7"
  },
  {
    "id": "mood-nerd",
    "codepoint": "f2e1"
  },
  {
    "id": "mood-nervous",
    "codepoint": "ef96"
  },
  {
    "id": "mood-neutral",
    "codepoint": "eaf5"
  },
  {
    "id": "mood-off",
    "codepoint": "f161"
  },
  {
    "id": "mood-pin",
    "codepoint": "f7b8"
  },
  {
    "id": "mood-plus",
    "codepoint": "f7b9"
  },
  {
    "id": "mood-puzzled",
    "codepoint": "fd39"
  },
  {
    "id": "mood-sad",
    "codepoint": "eaf6"
  },
  {
    "id": "mood-sad-2",
    "codepoint": "f2e2"
  },
  {
    "id": "mood-sad-dizzy",
    "codepoint": "f2e3"
  },
  {
    "id": "mood-sad-squint",
    "codepoint": "f2e4"
  },
  {
    "id": "mood-search",
    "codepoint": "f7ba"
  },
  {
    "id": "mood-share",
    "codepoint": "fa06"
  },
  {
    "id": "mood-sick",
    "codepoint": "f2e5"
  },
  {
    "id": "mood-silence",
    "codepoint": "f2e6"
  },
  {
    "id": "mood-sing",
    "codepoint": "f2c7"
  },
  {
    "id": "mood-smile",
    "codepoint": "eaf7"
  },
  {
    "id": "mood-smile-beam",
    "codepoint": "f2e7"
  },
  {
    "id": "mood-smile-dizzy",
    "codepoint": "f2e8"
  },
  {
    "id": "mood-spark",
    "codepoint": "ffb2"
  },
  {
    "id": "mood-suprised",
    "codepoint": "ec04"
  },
  {
    "id": "mood-surprised",
    "codepoint": "ec04"
  },
  {
    "id": "mood-tongue",
    "codepoint": "eb95"
  },
  {
    "id": "mood-tongue-wink",
    "codepoint": "f2ea"
  },
  {
    "id": "mood-tongue-wink-2",
    "codepoint": "f2e9"
  },
  {
    "id": "mood-unamused",
    "codepoint": "f2eb"
  },
  {
    "id": "mood-up",
    "codepoint": "f7bb"
  },
  {
    "id": "mood-wink",
    "codepoint": "f2ed"
  },
  {
    "id": "mood-wink-2",
    "codepoint": "f2ec"
  },
  {
    "id": "mood-wrrr",
    "codepoint": "f2ee"
  },
  {
    "id": "mood-x",
    "codepoint": "f7bc"
  },
  {
    "id": "mood-xd",
    "codepoint": "f2ef"
  },
  {
    "id": "moon",
    "codepoint": "eaf8"
  },
  {
    "id": "moon-2",
    "codepoint": "ece6"
  },
  {
    "id": "moon-off",
    "codepoint": "f162"
  },
  {
    "id": "moon-stars",
    "codepoint": "ece7"
  },
  {
    "id": "moped",
    "codepoint": "ecbc"
  },
  {
    "id": "mosque",
    "codepoint": "10234"
  },
  {
    "id": "motorbike",
    "codepoint": "eeb6"
  },
  {
    "id": "mountain",
    "codepoint": "ef97"
  },
  {
    "id": "mountain-off",
    "codepoint": "f411"
  },
  {
    "id": "mouse",
    "codepoint": "eaf9"
  },
  {
    "id": "mouse-2",
    "codepoint": "f1d7"
  },
  {
    "id": "mouse-off",
    "codepoint": "f163"
  },
  {
    "id": "moustache",
    "codepoint": "f4c9"
  },
  {
    "id": "movie",
    "codepoint": "eafa"
  },
  {
    "id": "movie-off",
    "codepoint": "f164"
  },
  {
    "id": "mug",
    "codepoint": "eafb"
  },
  {
    "id": "mug-off",
    "codepoint": "f165"
  },
  {
    "id": "multiplier-0-5x",
    "codepoint": "ef41"
  },
  {
    "id": "multiplier-1-5x",
    "codepoint": "ef42"
  },
  {
    "id": "multiplier-1x",
    "codepoint": "ef43"
  },
  {
    "id": "multiplier-2x",
    "codepoint": "ef44"
  },
  {
    "id": "mushroom",
    "codepoint": "ef14"
  },
  {
    "id": "mushroom-off",
    "codepoint": "f412"
  },
  {
    "id": "music",
    "codepoint": "eafc"
  },
  {
    "id": "music-bolt",
    "codepoint": "fbd5"
  },
  {
    "id": "music-cancel",
    "codepoint": "fbd6"
  },
  {
    "id": "music-check",
    "codepoint": "fbd7"
  },
  {
    "id": "music-code",
    "codepoint": "fbd8"
  },
  {
    "id": "music-cog",
    "codepoint": "fbd9"
  },
  {
    "id": "music-discount",
    "codepoint": "fbda"
  },
  {
    "id": "music-dollar",
    "codepoint": "fbdb"
  },
  {
    "id": "music-down",
    "codepoint": "fbdc"
  },
  {
    "id": "music-exclamation",
    "codepoint": "fbdd"
  },
  {
    "id": "music-heart",
    "codepoint": "fbde"
  },
  {
    "id": "music-minus",
    "codepoint": "fbdf"
  },
  {
    "id": "music-off",
    "codepoint": "f166"
  },
  {
    "id": "music-pause",
    "codepoint": "fbe0"
  },
  {
    "id": "music-pin",
    "codepoint": "fbe1"
  },
  {
    "id": "music-plus",
    "codepoint": "fbe2"
  },
  {
    "id": "music-question",
    "codepoint": "fbe3"
  },
  {
    "id": "music-search",
    "codepoint": "fbe4"
  },
  {
    "id": "music-share",
    "codepoint": "fbe5"
  },
  {
    "id": "music-star",
    "codepoint": "fbe6"
  },
  {
    "id": "music-up",
    "codepoint": "fbe7"
  },
  {
    "id": "music-x",
    "codepoint": "fbe8"
  },
  {
    "id": "navigation",
    "codepoint": "f2c8"
  },
  {
    "id": "navigation-bolt",
    "codepoint": "fbe9"
  },
  {
    "id": "navigation-cancel",
    "codepoint": "fbea"
  },
  {
    "id": "navigation-check",
    "codepoint": "fbeb"
  },
  {
    "id": "navigation-code",
    "codepoint": "fbec"
  },
  {
    "id": "navigation-cog",
    "codepoint": "fbed"
  },
  {
    "id": "navigation-discount",
    "codepoint": "fbee"
  },
  {
    "id": "navigation-dollar",
    "codepoint": "fbef"
  },
  {
    "id": "navigation-down",
    "codepoint": "fbf0"
  },
  {
    "id": "navigation-east",
    "codepoint": "fcba"
  },
  {
    "id": "navigation-exclamation",
    "codepoint": "fbf1"
  },
  {
    "id": "navigation-heart",
    "codepoint": "fbf2"
  },
  {
    "id": "navigation-minus",
    "codepoint": "fbf3"
  },
  {
    "id": "navigation-north",
    "codepoint": "fcbb"
  },
  {
    "id": "navigation-off",
    "codepoint": "f413"
  },
  {
    "id": "navigation-pause",
    "codepoint": "fbf4"
  },
  {
    "id": "navigation-pin",
    "codepoint": "fbf5"
  },
  {
    "id": "navigation-plus",
    "codepoint": "fbf6"
  },
  {
    "id": "navigation-question",
    "codepoint": "fbf7"
  },
  {
    "id": "navigation-search",
    "codepoint": "fbf8"
  },
  {
    "id": "navigation-share",
    "codepoint": "fbf9"
  },
  {
    "id": "navigation-south",
    "codepoint": "fcbc"
  },
  {
    "id": "navigation-star",
    "codepoint": "fbfa"
  },
  {
    "id": "navigation-top",
    "codepoint": "faec"
  },
  {
    "id": "navigation-up",
    "codepoint": "fbfb"
  },
  {
    "id": "navigation-west",
    "codepoint": "fcbd"
  },
  {
    "id": "navigation-x",
    "codepoint": "fbfc"
  },
  {
    "id": "needle",
    "codepoint": "f508"
  },
  {
    "id": "needle-thread",
    "codepoint": "f507"
  },
  {
    "id": "network",
    "codepoint": "f09f"
  },
  {
    "id": "network-off",
    "codepoint": "f414"
  },
  {
    "id": "new-section",
    "codepoint": "ebc1"
  },
  {
    "id": "news",
    "codepoint": "eafd"
  },
  {
    "id": "news-off",
    "codepoint": "f167"
  },
  {
    "id": "nfc",
    "codepoint": "eeb7"
  },
  {
    "id": "nfc-off",
    "codepoint": "f168"
  },
  {
    "id": "no-copyright",
    "codepoint": "efb9"
  },
  {
    "id": "no-creative-commons",
    "codepoint": "efba"
  },
  {
    "id": "no-derivatives",
    "codepoint": "efbb"
  },
  {
    "id": "noise-reduction",
    "codepoint": "10263"
  },
  {
    "id": "north-star",
    "codepoint": "f014"
  },
  {
    "id": "notdef",
    "codepoint": "10248"
  },
  {
    "id": "note",
    "codepoint": "eb6d"
  },
  {
    "id": "note-off",
    "codepoint": "f169"
  },
  {
    "id": "notebook",
    "codepoint": "eb96"
  },
  {
    "id": "notebook-off",
    "codepoint": "f415"
  },
  {
    "id": "notes",
    "codepoint": "eb6e"
  },
  {
    "id": "notes-off",
    "codepoint": "f16a"
  },
  {
    "id": "notification",
    "codepoint": "eafe"
  },
  {
    "id": "notification-off",
    "codepoint": "f16b"
  },
  {
    "id": "number",
    "codepoint": "f1fe"
  },
  {
    "id": "number-0",
    "codepoint": "edf0"
  },
  {
    "id": "number-0-small",
    "codepoint": "fce1"
  },
  {
    "id": "number-1",
    "codepoint": "edf1"
  },
  {
    "id": "number-1-small",
    "codepoint": "fce2"
  },
  {
    "id": "number-10",
    "codepoint": "1005e"
  },
  {
    "id": "number-10-small",
    "codepoint": "fce3"
  },
  {
    "id": "number-100-small",
    "codepoint": "10005"
  },
  {
    "id": "number-11",
    "codepoint": "1005d"
  },
  {
    "id": "number-11-small",
    "codepoint": "fce4"
  },
  {
    "id": "number-12-small",
    "codepoint": "fce5"
  },
  {
    "id": "number-123",
    "codepoint": "f554"
  },
  {
    "id": "number-13-small",
    "codepoint": "fce6"
  },
  {
    "id": "number-14-small",
    "codepoint": "fce7"
  },
  {
    "id": "number-15-small",
    "codepoint": "fce8"
  },
  {
    "id": "number-16-small",
    "codepoint": "fce9"
  },
  {
    "id": "number-17-small",
    "codepoint": "fcea"
  },
  {
    "id": "number-18-small",
    "codepoint": "fceb"
  },
  {
    "id": "number-19-small",
    "codepoint": "fcec"
  },
  {
    "id": "number-2",
    "codepoint": "edf2"
  },
  {
    "id": "number-2-small",
    "codepoint": "fced"
  },
  {
    "id": "number-20-small",
    "codepoint": "fcee"
  },
  {
    "id": "number-21-small",
    "codepoint": "fcef"
  },
  {
    "id": "number-22-small",
    "codepoint": "fcf0"
  },
  {
    "id": "number-23-small",
    "codepoint": "fcf1"
  },
  {
    "id": "number-24-small",
    "codepoint": "fcf2"
  },
  {
    "id": "number-25-small",
    "codepoint": "fcf3"
  },
  {
    "id": "number-26-small",
    "codepoint": "fcf4"
  },
  {
    "id": "number-27-small",
    "codepoint": "fcf5"
  },
  {
    "id": "number-28-small",
    "codepoint": "fcf6"
  },
  {
    "id": "number-29-small",
    "codepoint": "fcf7"
  },
  {
    "id": "number-3",
    "codepoint": "edf3"
  },
  {
    "id": "number-3-small",
    "codepoint": "fcf8"
  },
  {
    "id": "number-30-small",
    "codepoint": "10004"
  },
  {
    "id": "number-31-small",
    "codepoint": "10003"
  },
  {
    "id": "number-32-small",
    "codepoint": "10002"
  },
  {
    "id": "number-33-small",
    "codepoint": "10001"
  },
  {
    "id": "number-34-small",
    "codepoint": "10000"
  },
  {
    "id": "number-35-small",
    "codepoint": "10210"
  },
  {
    "id": "number-36-small",
    "codepoint": "10211"
  },
  {
    "id": "number-37-small",
    "codepoint": "10212"
  },
  {
    "id": "number-38-small",
    "codepoint": "10213"
  },
  {
    "id": "number-39-small",
    "codepoint": "10214"
  },
  {
    "id": "number-4",
    "codepoint": "edf4"
  },
  {
    "id": "number-4-small",
    "codepoint": "fcf9"
  },
  {
    "id": "number-40-small",
    "codepoint": "10215"
  },
  {
    "id": "number-41-small",
    "codepoint": "10216"
  },
  {
    "id": "number-42-small",
    "codepoint": "10217"
  },
  {
    "id": "number-43-small",
    "codepoint": "10218"
  },
  {
    "id": "number-44-small",
    "codepoint": "10219"
  },
  {
    "id": "number-45-small",
    "codepoint": "1021a"
  },
  {
    "id": "number-46-small",
    "codepoint": "1021b"
  },
  {
    "id": "number-47-small",
    "codepoint": "1021c"
  },
  {
    "id": "number-48-small",
    "codepoint": "1021d"
  },
  {
    "id": "number-49-small",
    "codepoint": "1021e"
  },
  {
    "id": "number-5",
    "codepoint": "edf5"
  },
  {
    "id": "number-5-small",
    "codepoint": "fcfa"
  },
  {
    "id": "number-50-small",
    "codepoint": "1021f"
  },
  {
    "id": "number-51-small",
    "codepoint": "ffef"
  },
  {
    "id": "number-52-small",
    "codepoint": "ffee"
  },
  {
    "id": "number-53-small",
    "codepoint": "ffed"
  },
  {
    "id": "number-54-small",
    "codepoint": "ffec"
  },
  {
    "id": "number-55-small",
    "codepoint": "ffeb"
  },
  {
    "id": "number-56-small",
    "codepoint": "ffea"
  },
  {
    "id": "number-57-small",
    "codepoint": "ffe9"
  },
  {
    "id": "number-58-small",
    "codepoint": "ffe8"
  },
  {
    "id": "number-59-small",
    "codepoint": "ffe7"
  },
  {
    "id": "number-6",
    "codepoint": "edf6"
  },
  {
    "id": "number-6-small",
    "codepoint": "fcfb"
  },
  {
    "id": "number-60-small",
    "codepoint": "ffe6"
  },
  {
    "id": "number-61-small",
    "codepoint": "ffe5"
  },
  {
    "id": "number-62-small",
    "codepoint": "ffe4"
  },
  {
    "id": "number-63-small",
    "codepoint": "ffe3"
  },
  {
    "id": "number-64-small",
    "codepoint": "ffe2"
  },
  {
    "id": "number-65-small",
    "codepoint": "ffe1"
  },
  {
    "id": "number-66-small",
    "codepoint": "ffe0"
  },
  {
    "id": "number-67-small",
    "codepoint": "ffdf"
  },
  {
    "id": "number-68-small",
    "codepoint": "ffde"
  },
  {
    "id": "number-69-small",
    "codepoint": "ffdd"
  },
  {
    "id": "number-7",
    "codepoint": "edf7"
  },
  {
    "id": "number-7-small",
    "codepoint": "fcfc"
  },
  {
    "id": "number-70-small",
    "codepoint": "ffdc"
  },
  {
    "id": "number-71-small",
    "codepoint": "ffdb"
  },
  {
    "id": "number-72-small",
    "codepoint": "ffda"
  },
  {
    "id": "number-73-small",
    "codepoint": "ffd9"
  },
  {
    "id": "number-74-small",
    "codepoint": "ffd8"
  },
  {
    "id": "number-75-small",
    "codepoint": "ffd7"
  },
  {
    "id": "number-76-small",
    "codepoint": "ffd6"
  },
  {
    "id": "number-77-small",
    "codepoint": "ffd5"
  },
  {
    "id": "number-78-small",
    "codepoint": "ffd4"
  },
  {
    "id": "number-79-small",
    "codepoint": "ffd3"
  },
  {
    "id": "number-8",
    "codepoint": "edf8"
  },
  {
    "id": "number-8-small",
    "codepoint": "fcfd"
  },
  {
    "id": "number-80-small",
    "codepoint": "ffd2"
  },
  {
    "id": "number-81-small",
    "codepoint": "ffd1"
  },
  {
    "id": "number-82-small",
    "codepoint": "ffd0"
  },
  {
    "id": "number-83-small",
    "codepoint": "ffcf"
  },
  {
    "id": "number-84-small",
    "codepoint": "ffce"
  },
  {
    "id": "number-85-small",
    "codepoint": "ffcd"
  },
  {
    "id": "number-86-small",
    "codepoint": "ffcc"
  },
  {
    "id": "number-87-small",
    "codepoint": "ffcb"
  },
  {
    "id": "number-88-small",
    "codepoint": "ffca"
  },
  {
    "id": "number-89-small",
    "codepoint": "ffc9"
  },
  {
    "id": "number-9",
    "codepoint": "edf9"
  },
  {
    "id": "number-9-small",
    "codepoint": "fcfe"
  },
  {
    "id": "number-90-small",
    "codepoint": "ffc8"
  },
  {
    "id": "number-91-small",
    "codepoint": "ffc7"
  },
  {
    "id": "number-92-small",
    "codepoint": "ffc6"
  },
  {
    "id": "number-93-small",
    "codepoint": "ffc5"
  },
  {
    "id": "number-94-small",
    "codepoint": "ffc4"
  },
  {
    "id": "number-95-small",
    "codepoint": "ffc3"
  },
  {
    "id": "number-96-small",
    "codepoint": "ffc2"
  },
  {
    "id": "number-97-small",
    "codepoint": "ffc1"
  },
  {
    "id": "number-98-small",
    "codepoint": "ffc0"
  },
  {
    "id": "number-99-small",
    "codepoint": "ffbf"
  },
  {
    "id": "numbers",
    "codepoint": "f015"
  },
  {
    "id": "nurse",
    "codepoint": "ef65"
  },
  {
    "id": "nut",
    "codepoint": "fc61"
  },
  {
    "id": "object-scan",
    "codepoint": "fef1"
  },
  {
    "id": "octagon",
    "codepoint": "ecbd"
  },
  {
    "id": "octagon-minus",
    "codepoint": "fc92"
  },
  {
    "id": "octagon-minus-2",
    "codepoint": "fc91"
  },
  {
    "id": "octagon-off",
    "codepoint": "eeb8"
  },
  {
    "id": "octagon-plus",
    "codepoint": "fc94"
  },
  {
    "id": "octagon-plus-2",
    "codepoint": "fc93"
  },
  {
    "id": "octahedron",
    "codepoint": "faae"
  },
  {
    "id": "octahedron-off",
    "codepoint": "faac"
  },
  {
    "id": "octahedron-plus",
    "codepoint": "faad"
  },
  {
    "id": "old",
    "codepoint": "eeb9"
  },
  {
    "id": "olympic-torch",
    "codepoint": "10228"
  },
  {
    "id": "olympics",
    "codepoint": "eeba"
  },
  {
    "id": "olympics-off",
    "codepoint": "f416"
  },
  {
    "id": "om",
    "codepoint": "f58d"
  },
  {
    "id": "omega",
    "codepoint": "eb97"
  },
  {
    "id": "option",
    "codepoint": "1019f"
  },
  {
    "id": "outbound",
    "codepoint": "f249"
  },
  {
    "id": "outlet",
    "codepoint": "ebd7"
  },
  {
    "id": "oval",
    "codepoint": "f02e"
  },
  {
    "id": "oval-vertical",
    "codepoint": "f02d"
  },
  {
    "id": "overline",
    "codepoint": "eebb"
  },
  {
    "id": "package",
    "codepoint": "eaff"
  },
  {
    "id": "package-export",
    "codepoint": "f07a"
  },
  {
    "id": "package-import",
    "codepoint": "f07b"
  },
  {
    "id": "package-off",
    "codepoint": "f16c"
  },
  {
    "id": "packages",
    "codepoint": "f2c9"
  },
  {
    "id": "pacman",
    "codepoint": "eebc"
  },
  {
    "id": "page-break",
    "codepoint": "ec81"
  },
  {
    "id": "paint",
    "codepoint": "eb00"
  },
  {
    "id": "paint-off",
    "codepoint": "f16d"
  },
  {
    "id": "palette",
    "codepoint": "eb01"
  },
  {
    "id": "palette-off",
    "codepoint": "f16e"
  },
  {
    "id": "panorama-horizontal",
    "codepoint": "ed33"
  },
  {
    "id": "panorama-horizontal-off",
    "codepoint": "f417"
  },
  {
    "id": "panorama-vertical",
    "codepoint": "ed34"
  },
  {
    "id": "panorama-vertical-off",
    "codepoint": "f418"
  },
  {
    "id": "paper-bag",
    "codepoint": "f02f"
  },
  {
    "id": "paper-bag-off",
    "codepoint": "f16f"
  },
  {
    "id": "paperclip",
    "codepoint": "eb02"
  },
  {
    "id": "parachute",
    "codepoint": "ed7c"
  },
  {
    "id": "parachute-off",
    "codepoint": "f170"
  },
  {
    "id": "parentheses",
    "codepoint": "ebd8"
  },
  {
    "id": "parentheses-off",
    "codepoint": "f171"
  },
  {
    "id": "parking",
    "codepoint": "eb03"
  },
  {
    "id": "parking-circle",
    "codepoint": "fd5a"
  },
  {
    "id": "parking-meter",
    "codepoint": "10227"
  },
  {
    "id": "parking-off",
    "codepoint": "f172"
  },
  {
    "id": "password",
    "codepoint": "f4ca"
  },
  {
    "id": "password-fingerprint",
    "codepoint": "fc7b"
  },
  {
    "id": "password-mobile-phone",
    "codepoint": "fc7c"
  },
  {
    "id": "password-user",
    "codepoint": "fc7d"
  },
  {
    "id": "paw",
    "codepoint": "eff9"
  },
  {
    "id": "paw-off",
    "codepoint": "f419"
  },
  {
    "id": "paywall",
    "codepoint": "fd7e"
  },
  {
    "id": "pdf",
    "codepoint": "f7ac"
  },
  {
    "id": "peace",
    "codepoint": "ecbe"
  },
  {
    "id": "pencil",
    "codepoint": "eb04"
  },
  {
    "id": "pencil-bolt",
    "codepoint": "fbfd"
  },
  {
    "id": "pencil-cancel",
    "codepoint": "fbfe"
  },
  {
    "id": "pencil-check",
    "codepoint": "fbff"
  },
  {
    "id": "pencil-code",
    "codepoint": "fc00"
  },
  {
    "id": "pencil-cog",
    "codepoint": "fc01"
  },
  {
    "id": "pencil-discount",
    "codepoint": "fc02"
  },
  {
    "id": "pencil-dollar",
    "codepoint": "fc03"
  },
  {
    "id": "pencil-down",
    "codepoint": "fc04"
  },
  {
    "id": "pencil-exclamation",
    "codepoint": "fc05"
  },
  {
    "id": "pencil-heart",
    "codepoint": "fc06"
  },
  {
    "id": "pencil-minus",
    "codepoint": "f1eb"
  },
  {
    "id": "pencil-off",
    "codepoint": "f173"
  },
  {
    "id": "pencil-pause",
    "codepoint": "fc07"
  },
  {
    "id": "pencil-pin",
    "codepoint": "fc08"
  },
  {
    "id": "pencil-plus",
    "codepoint": "f1ec"
  },
  {
    "id": "pencil-question",
    "codepoint": "fc09"
  },
  {
    "id": "pencil-search",
    "codepoint": "fc0a"
  },
  {
    "id": "pencil-share",
    "codepoint": "fc0b"
  },
  {
    "id": "pencil-star",
    "codepoint": "fc0c"
  },
  {
    "id": "pencil-up",
    "codepoint": "fc0d"
  },
  {
    "id": "pencil-x",
    "codepoint": "fc0e"
  },
  {
    "id": "pendulum",
    "codepoint": "10233"
  },
  {
    "id": "pennant",
    "codepoint": "ed7d"
  },
  {
    "id": "pennant-2",
    "codepoint": "f06a"
  },
  {
    "id": "pennant-off",
    "codepoint": "f174"
  },
  {
    "id": "pentagon",
    "codepoint": "efe3"
  },
  {
    "id": "pentagon-minus",
    "codepoint": "feb3"
  },
  {
    "id": "pentagon-number-0",
    "codepoint": "fc7e"
  },
  {
    "id": "pentagon-number-1",
    "codepoint": "fc7f"
  },
  {
    "id": "pentagon-number-2",
    "codepoint": "fc80"
  },
  {
    "id": "pentagon-number-3",
    "codepoint": "fc81"
  },
  {
    "id": "pentagon-number-4",
    "codepoint": "fc82"
  },
  {
    "id": "pentagon-number-5",
    "codepoint": "fc83"
  },
  {
    "id": "pentagon-number-6",
    "codepoint": "fc84"
  },
  {
    "id": "pentagon-number-7",
    "codepoint": "fc85"
  },
  {
    "id": "pentagon-number-8",
    "codepoint": "fc86"
  },
  {
    "id": "pentagon-number-9",
    "codepoint": "fc87"
  },
  {
    "id": "pentagon-off",
    "codepoint": "f41a"
  },
  {
    "id": "pentagon-plus",
    "codepoint": "fc49"
  },
  {
    "id": "pentagon-x",
    "codepoint": "fc88"
  },
  {
    "id": "pentagram",
    "codepoint": "f586"
  },
  {
    "id": "pepper",
    "codepoint": "ef15"
  },
  {
    "id": "pepper-off",
    "codepoint": "f175"
  },
  {
    "id": "percentage",
    "codepoint": "ecf4"
  },
  {
    "id": "percentage-0",
    "codepoint": "fee5"
  },
  {
    "id": "percentage-10",
    "codepoint": "fee4"
  },
  {
    "id": "percentage-100",
    "codepoint": "fee3"
  },
  {
    "id": "percentage-20",
    "codepoint": "fee2"
  },
  {
    "id": "percentage-25",
    "codepoint": "fee1"
  },
  {
    "id": "percentage-30",
    "codepoint": "fee0"
  },
  {
    "id": "percentage-33",
    "codepoint": "fedf"
  },
  {
    "id": "percentage-40",
    "codepoint": "fede"
  },
  {
    "id": "percentage-50",
    "codepoint": "fedd"
  },
  {
    "id": "percentage-60",
    "codepoint": "fedc"
  },
  {
    "id": "percentage-66",
    "codepoint": "fedb"
  },
  {
    "id": "percentage-70",
    "codepoint": "feda"
  },
  {
    "id": "percentage-75",
    "codepoint": "fed9"
  },
  {
    "id": "percentage-80",
    "codepoint": "fed8"
  },
  {
    "id": "percentage-90",
    "codepoint": "fed7"
  },
  {
    "id": "perfume",
    "codepoint": "f509"
  },
  {
    "id": "perspective",
    "codepoint": "eebd"
  },
  {
    "id": "perspective-off",
    "codepoint": "f176"
  },
  {
    "id": "phone",
    "codepoint": "eb09"
  },
  {
    "id": "phone-call",
    "codepoint": "eb05"
  },
  {
    "id": "phone-calling",
    "codepoint": "ec43"
  },
  {
    "id": "phone-check",
    "codepoint": "ec05"
  },
  {
    "id": "phone-done",
    "codepoint": "ff9e"
  },
  {
    "id": "phone-end",
    "codepoint": "ff9d"
  },
  {
    "id": "phone-incoming",
    "codepoint": "eb06"
  },
  {
    "id": "phone-off",
    "codepoint": "ecf5"
  },
  {
    "id": "phone-outgoing",
    "codepoint": "eb07"
  },
  {
    "id": "phone-pause",
    "codepoint": "eb08"
  },
  {
    "id": "phone-plus",
    "codepoint": "ec06"
  },
  {
    "id": "phone-ringing",
    "codepoint": "ff9c"
  },
  {
    "id": "phone-spark",
    "codepoint": "ffb1"
  },
  {
    "id": "phone-x",
    "codepoint": "ec07"
  },
  {
    "id": "photo",
    "codepoint": "eb0a"
  },
  {
    "id": "photo-ai",
    "codepoint": "fa32"
  },
  {
    "id": "photo-alt",
    "codepoint": "10262"
  },
  {
    "id": "photo-bitcoin",
    "codepoint": "ff31"
  },
  {
    "id": "photo-bolt",
    "codepoint": "f990"
  },
  {
    "id": "photo-cancel",
    "codepoint": "f35d"
  },
  {
    "id": "photo-check",
    "codepoint": "f35e"
  },
  {
    "id": "photo-circle",
    "codepoint": "fc4a"
  },
  {
    "id": "photo-circle-minus",
    "codepoint": "fc62"
  },
  {
    "id": "photo-circle-plus",
    "codepoint": "fc63"
  },
  {
    "id": "photo-code",
    "codepoint": "f991"
  },
  {
    "id": "photo-cog",
    "codepoint": "f992"
  },
  {
    "id": "photo-dollar",
    "codepoint": "f993"
  },
  {
    "id": "photo-down",
    "codepoint": "f35f"
  },
  {
    "id": "photo-edit",
    "codepoint": "f360"
  },
  {
    "id": "photo-exclamation",
    "codepoint": "f994"
  },
  {
    "id": "photo-heart",
    "codepoint": "f361"
  },
  {
    "id": "photo-hexagon",
    "codepoint": "fc4b"
  },
  {
    "id": "photo-minus",
    "codepoint": "f362"
  },
  {
    "id": "photo-off",
    "codepoint": "ecf6"
  },
  {
    "id": "photo-pause",
    "codepoint": "f995"
  },
  {
    "id": "photo-pentagon",
    "codepoint": "fc4c"
  },
  {
    "id": "photo-pin",
    "codepoint": "f996"
  },
  {
    "id": "photo-plus",
    "codepoint": "f363"
  },
  {
    "id": "photo-question",
    "codepoint": "f997"
  },
  {
    "id": "photo-scan",
    "codepoint": "fca8"
  },
  {
    "id": "photo-search",
    "codepoint": "f364"
  },
  {
    "id": "photo-sensor",
    "codepoint": "f798"
  },
  {
    "id": "photo-sensor-2",
    "codepoint": "f796"
  },
  {
    "id": "photo-sensor-3",
    "codepoint": "f797"
  },
  {
    "id": "photo-share",
    "codepoint": "f998"
  },
  {
    "id": "photo-shield",
    "codepoint": "f365"
  },
  {
    "id": "photo-spark",
    "codepoint": "ffb0"
  },
  {
    "id": "photo-square-rounded",
    "codepoint": "fc4d"
  },
  {
    "id": "photo-star",
    "codepoint": "f366"
  },
  {
    "id": "photo-up",
    "codepoint": "f38b"
  },
  {
    "id": "photo-video",
    "codepoint": "fc95"
  },
  {
    "id": "photo-x",
    "codepoint": "f367"
  },
  {
    "id": "physiotherapist",
    "codepoint": "eebe"
  },
  {
    "id": "physotherapist",
    "codepoint": "eebe"
  },
  {
    "id": "piano",
    "codepoint": "fad3"
  },
  {
    "id": "pick",
    "codepoint": "fafc"
  },
  {
    "id": "picnic-table",
    "codepoint": "fed6"
  },
  {
    "id": "picture-in-picture",
    "codepoint": "ed35"
  },
  {
    "id": "picture-in-picture-off",
    "codepoint": "ed43"
  },
  {
    "id": "picture-in-picture-on",
    "codepoint": "ed44"
  },
  {
    "id": "picture-in-picture-top",
    "codepoint": "efe4"
  },
  {
    "id": "pig",
    "codepoint": "ef52"
  },
  {
    "id": "pig-money",
    "codepoint": "f38c"
  },
  {
    "id": "pig-off",
    "codepoint": "f177"
  },
  {
    "id": "pilcrow",
    "codepoint": "f5f6"
  },
  {
    "id": "pilcrow-left",
    "codepoint": "fd7f"
  },
  {
    "id": "pilcrow-right",
    "codepoint": "fd80"
  },
  {
    "id": "pill",
    "codepoint": "ec44"
  },
  {
    "id": "pill-off",
    "codepoint": "f178"
  },
  {
    "id": "pillow",
    "codepoint": "10226"
  },
  {
    "id": "pills",
    "codepoint": "ef66"
  },
  {
    "id": "pin",
    "codepoint": "ec9c"
  },
  {
    "id": "pin-end",
    "codepoint": "fd5b"
  },
  {
    "id": "pin-invoke",
    "codepoint": "fd5c"
  },
  {
    "id": "ping-pong",
    "codepoint": "f38d"
  },
  {
    "id": "pinned",
    "codepoint": "ed60"
  },
  {
    "id": "pinned-off",
    "codepoint": "ed5f"
  },
  {
    "id": "pipeline",
    "codepoint": "10225"
  },
  {
    "id": "pizza",
    "codepoint": "edbb"
  },
  {
    "id": "pizza-off",
    "codepoint": "f179"
  },
  {
    "id": "placeholder",
    "codepoint": "f626"
  },
  {
    "id": "plane",
    "codepoint": "eb6f"
  },
  {
    "id": "plane-arrival",
    "codepoint": "eb99"
  },
  {
    "id": "plane-departure",
    "codepoint": "eb9a"
  },
  {
    "id": "plane-inflight",
    "codepoint": "ef98"
  },
  {
    "id": "plane-off",
    "codepoint": "f17a"
  },
  {
    "id": "plane-tilt",
    "codepoint": "f1ed"
  },
  {
    "id": "planet",
    "codepoint": "ec08"
  },
  {
    "id": "planet-off",
    "codepoint": "f17b"
  },
  {
    "id": "plant",
    "codepoint": "ed50"
  },
  {
    "id": "plant-2",
    "codepoint": "ed7e"
  },
  {
    "id": "plant-2-off",
    "codepoint": "f17c"
  },
  {
    "id": "plant-off",
    "codepoint": "f17d"
  },
  {
    "id": "play-basketball",
    "codepoint": "fa66"
  },
  {
    "id": "play-card",
    "codepoint": "eebf"
  },
  {
    "id": "play-card-1",
    "codepoint": "1005c"
  },
  {
    "id": "play-card-10",
    "codepoint": "1005b"
  },
  {
    "id": "play-card-2",
    "codepoint": "1005a"
  },
  {
    "id": "play-card-3",
    "codepoint": "10059"
  },
  {
    "id": "play-card-4",
    "codepoint": "10058"
  },
  {
    "id": "play-card-5",
    "codepoint": "10057"
  },
  {
    "id": "play-card-6",
    "codepoint": "10056"
  },
  {
    "id": "play-card-7",
    "codepoint": "10055"
  },
  {
    "id": "play-card-8",
    "codepoint": "10054"
  },
  {
    "id": "play-card-9",
    "codepoint": "10053"
  },
  {
    "id": "play-card-a",
    "codepoint": "10052"
  },
  {
    "id": "play-card-j",
    "codepoint": "10051"
  },
  {
    "id": "play-card-k",
    "codepoint": "10050"
  },
  {
    "id": "play-card-off",
    "codepoint": "f17e"
  },
  {
    "id": "play-card-q",
    "codepoint": "1004f"
  },
  {
    "id": "play-card-star",
    "codepoint": "1004e"
  },
  {
    "id": "play-football",
    "codepoint": "fa67"
  },
  {
    "id": "play-handball",
    "codepoint": "fa68"
  },
  {
    "id": "play-volleyball",
    "codepoint": "fa69"
  },
  {
    "id": "player-eject",
    "codepoint": "efbc"
  },
  {
    "id": "player-pause",
    "codepoint": "ed45"
  },
  {
    "id": "player-play",
    "codepoint": "ed46"
  },
  {
    "id": "player-record",
    "codepoint": "ed47"
  },
  {
    "id": "player-skip-back",
    "codepoint": "ed48"
  },
  {
    "id": "player-skip-forward",
    "codepoint": "ed49"
  },
  {
    "id": "player-stop",
    "codepoint": "ed4a"
  },
  {
    "id": "player-track-next",
    "codepoint": "ed4b"
  },
  {
    "id": "player-track-prev",
    "codepoint": "ed4c"
  },
  {
    "id": "playlist",
    "codepoint": "eec0"
  },
  {
    "id": "playlist-add",
    "codepoint": "f008"
  },
  {
    "id": "playlist-off",
    "codepoint": "f17f"
  },
  {
    "id": "playlist-x",
    "codepoint": "f009"
  },
  {
    "id": "playstation-circle",
    "codepoint": "f2ad"
  },
  {
    "id": "playstation-square",
    "codepoint": "f2ae"
  },
  {
    "id": "playstation-triangle",
    "codepoint": "f2af"
  },
  {
    "id": "playstation-x",
    "codepoint": "f2b0"
  },
  {
    "id": "plug",
    "codepoint": "ebd9"
  },
  {
    "id": "plug-connected",
    "codepoint": "f00a"
  },
  {
    "id": "plug-connected-x",
    "codepoint": "f0a0"
  },
  {
    "id": "plug-off",
    "codepoint": "f180"
  },
  {
    "id": "plug-x",
    "codepoint": "f0a1"
  },
  {
    "id": "plunger",
    "codepoint": "10232"
  },
  {
    "id": "plus",
    "codepoint": "eb0b"
  },
  {
    "id": "plus-equal",
    "codepoint": "f7ad"
  },
  {
    "id": "plus-minus",
    "codepoint": "f7ae"
  },
  {
    "id": "png",
    "codepoint": "f3ad"
  },
  {
    "id": "podium",
    "codepoint": "f1d8"
  },
  {
    "id": "podium-off",
    "codepoint": "f41b"
  },
  {
    "id": "point",
    "codepoint": "eb0c"
  },
  {
    "id": "point-off",
    "codepoint": "f181"
  },
  {
    "id": "pointer",
    "codepoint": "f265"
  },
  {
    "id": "pointer-2",
    "codepoint": "10261"
  },
  {
    "id": "pointer-bolt",
    "codepoint": "f999"
  },
  {
    "id": "pointer-cancel",
    "codepoint": "f99a"
  },
  {
    "id": "pointer-check",
    "codepoint": "f99b"
  },
  {
    "id": "pointer-code",
    "codepoint": "f99c"
  },
  {
    "id": "pointer-cog",
    "codepoint": "f99d"
  },
  {
    "id": "pointer-collaboration",
    "codepoint": "1025f"
  },
  {
    "id": "pointer-collaboration-2",
    "codepoint": "10260"
  },
  {
    "id": "pointer-dollar",
    "codepoint": "f99e"
  },
  {
    "id": "pointer-down",
    "codepoint": "f99f"
  },
  {
    "id": "pointer-exclamation",
    "codepoint": "f9a0"
  },
  {
    "id": "pointer-heart",
    "codepoint": "f9a1"
  },
  {
    "id": "pointer-minus",
    "codepoint": "f9a2"
  },
  {
    "id": "pointer-off",
    "codepoint": "f9a3"
  },
  {
    "id": "pointer-pause",
    "codepoint": "f9a4"
  },
  {
    "id": "pointer-pin",
    "codepoint": "f9a5"
  },
  {
    "id": "pointer-plus",
    "codepoint": "f9a6"
  },
  {
    "id": "pointer-question",
    "codepoint": "f9a7"
  },
  {
    "id": "pointer-search",
    "codepoint": "f9a8"
  },
  {
    "id": "pointer-share",
    "codepoint": "f9a9"
  },
  {
    "id": "pointer-star",
    "codepoint": "f9aa"
  },
  {
    "id": "pointer-up",
    "codepoint": "f9ab"
  },
  {
    "id": "pointer-x",
    "codepoint": "f9ac"
  },
  {
    "id": "pokeball",
    "codepoint": "eec1"
  },
  {
    "id": "pokeball-off",
    "codepoint": "f41c"
  },
  {
    "id": "poker-chip",
    "codepoint": "f515"
  },
  {
    "id": "polaroid",
    "codepoint": "eec2"
  },
  {
    "id": "polygon",
    "codepoint": "efd0"
  },
  {
    "id": "polygon-off",
    "codepoint": "f182"
  },
  {
    "id": "poo",
    "codepoint": "f258"
  },
  {
    "id": "pool",
    "codepoint": "ed91"
  },
  {
    "id": "pool-off",
    "codepoint": "f41d"
  },
  {
    "id": "power",
    "codepoint": "eb0d"
  },
  {
    "id": "pray",
    "codepoint": "ecbf"
  },
  {
    "id": "premium-rights",
    "codepoint": "efbd"
  },
  {
    "id": "prescription",
    "codepoint": "ef99"
  },
  {
    "id": "presentation",
    "codepoint": "eb70"
  },
  {
    "id": "presentation-analytics",
    "codepoint": "eec3"
  },
  {
    "id": "presentation-off",
    "codepoint": "f183"
  },
  {
    "id": "printer",
    "codepoint": "eb0e"
  },
  {
    "id": "printer-off",
    "codepoint": "f184"
  },
  {
    "id": "prism",
    "codepoint": "fab1"
  },
  {
    "id": "prism-light",
    "codepoint": "fea6"
  },
  {
    "id": "prism-off",
    "codepoint": "faaf"
  },
  {
    "id": "prism-plus",
    "codepoint": "fab0"
  },
  {
    "id": "prison",
    "codepoint": "ef79"
  },
  {
    "id": "progress",
    "codepoint": "fa0d"
  },
  {
    "id": "progress-alert",
    "codepoint": "fa07"
  },
  {
    "id": "progress-bolt",
    "codepoint": "fa08"
  },
  {
    "id": "progress-check",
    "codepoint": "fa09"
  },
  {
    "id": "progress-down",
    "codepoint": "fa0a"
  },
  {
    "id": "progress-help",
    "codepoint": "fa0b"
  },
  {
    "id": "progress-x",
    "codepoint": "fa0c"
  },
  {
    "id": "prompt",
    "codepoint": "eb0f"
  },
  {
    "id": "prong",
    "codepoint": "fda1"
  },
  {
    "id": "propeller",
    "codepoint": "eec4"
  },
  {
    "id": "propeller-off",
    "codepoint": "f185"
  },
  {
    "id": "protocol",
    "codepoint": "fd81"
  },
  {
    "id": "pumpkin-scary",
    "codepoint": "f587"
  },
  {
    "id": "puzzle",
    "codepoint": "eb10"
  },
  {
    "id": "puzzle-2",
    "codepoint": "ef83"
  },
  {
    "id": "puzzle-off",
    "codepoint": "f186"
  },
  {
    "id": "pyramid",
    "codepoint": "eec5"
  },
  {
    "id": "pyramid-off",
    "codepoint": "f187"
  },
  {
    "id": "pyramid-plus",
    "codepoint": "fab2"
  },
  {
    "id": "qrcode",
    "codepoint": "eb11"
  },
  {
    "id": "qrcode-off",
    "codepoint": "f41e"
  },
  {
    "id": "question-mark",
    "codepoint": "ec9d"
  },
  {
    "id": "queue-pop-in",
    "codepoint": "10200"
  },
  {
    "id": "queue-pop-out",
    "codepoint": "101ff"
  },
  {
    "id": "quote",
    "codepoint": "efbe"
  },
  {
    "id": "quote-off",
    "codepoint": "f188"
  },
  {
    "id": "quote-open",
    "codepoint": "10224"
  },
  {
    "id": "quotes",
    "codepoint": "fb1e"
  },
  {
    "id": "radar",
    "codepoint": "f017"
  },
  {
    "id": "radar-2",
    "codepoint": "f016"
  },
  {
    "id": "radar-off",
    "codepoint": "f41f"
  },
  {
    "id": "radio",
    "codepoint": "ef2d"
  },
  {
    "id": "radio-off",
    "codepoint": "f420"
  },
  {
    "id": "radioactive",
    "codepoint": "ecc0"
  },
  {
    "id": "radioactive-off",
    "codepoint": "f189"
  },
  {
    "id": "radius-bottom-left",
    "codepoint": "eec6"
  },
  {
    "id": "radius-bottom-right",
    "codepoint": "eec7"
  },
  {
    "id": "radius-top-left",
    "codepoint": "eec8"
  },
  {
    "id": "radius-top-right",
    "codepoint": "eec9"
  },
  {
    "id": "rainbow",
    "codepoint": "edbc"
  },
  {
    "id": "rainbow-off",
    "codepoint": "f18a"
  },
  {
    "id": "rating-12-plus",
    "codepoint": "f266"
  },
  {
    "id": "rating-14-plus",
    "codepoint": "f267"
  },
  {
    "id": "rating-16-plus",
    "codepoint": "f268"
  },
  {
    "id": "rating-18-plus",
    "codepoint": "f269"
  },
  {
    "id": "rating-21-plus",
    "codepoint": "f26a"
  },
  {
    "id": "razor",
    "codepoint": "f4b5"
  },
  {
    "id": "razor-electric",
    "codepoint": "f4b4"
  },
  {
    "id": "receipt",
    "codepoint": "edfd"
  },
  {
    "id": "receipt-2",
    "codepoint": "edfa"
  },
  {
    "id": "receipt-bitcoin",
    "codepoint": "fd66"
  },
  {
    "id": "receipt-dollar",
    "codepoint": "fd67"
  },
  {
    "id": "receipt-euro",
    "codepoint": "fd68"
  },
  {
    "id": "receipt-off",
    "codepoint": "edfb"
  },
  {
    "id": "receipt-pound",
    "codepoint": "fd69"
  },
  {
    "id": "receipt-refund",
    "codepoint": "edfc"
  },
  {
    "id": "receipt-rupee",
    "codepoint": "fd82"
  },
  {
    "id": "receipt-tax",
    "codepoint": "edbd"
  },
  {
    "id": "receipt-yen",
    "codepoint": "fd6a"
  },
  {
    "id": "receipt-yuan",
    "codepoint": "fd6b"
  },
  {
    "id": "recharging",
    "codepoint": "eeca"
  },
  {
    "id": "record-mail",
    "codepoint": "eb12"
  },
  {
    "id": "record-mail-off",
    "codepoint": "f18b"
  },
  {
    "id": "rectangle",
    "codepoint": "ed37"
  },
  {
    "id": "rectangle-rounded-bottom",
    "codepoint": "faed"
  },
  {
    "id": "rectangle-rounded-top",
    "codepoint": "faee"
  },
  {
    "id": "rectangle-vertical",
    "codepoint": "ed36"
  },
  {
    "id": "rectangular-prism",
    "codepoint": "fab5"
  },
  {
    "id": "rectangular-prism-off",
    "codepoint": "fab3"
  },
  {
    "id": "rectangular-prism-plus",
    "codepoint": "fab4"
  },
  {
    "id": "recycle",
    "codepoint": "eb9b"
  },
  {
    "id": "recycle-off",
    "codepoint": "f18c"
  },
  {
    "id": "refresh",
    "codepoint": "eb13"
  },
  {
    "id": "refresh-alert",
    "codepoint": "ed57"
  },
  {
    "id": "refresh-dot",
    "codepoint": "efbf"
  },
  {
    "id": "refresh-off",
    "codepoint": "f18d"
  },
  {
    "id": "regex",
    "codepoint": "f31f"
  },
  {
    "id": "regex-off",
    "codepoint": "f421"
  },
  {
    "id": "registered",
    "codepoint": "eb14"
  },
  {
    "id": "relation-many-to-many",
    "codepoint": "ed7f"
  },
  {
    "id": "relation-one-to-many",
    "codepoint": "ed80"
  },
  {
    "id": "relation-one-to-one",
    "codepoint": "ed81"
  },
  {
    "id": "reload",
    "codepoint": "f3ae"
  },
  {
    "id": "reorder",
    "codepoint": "fc15"
  },
  {
    "id": "repeat",
    "codepoint": "eb72"
  },
  {
    "id": "repeat-off",
    "codepoint": "f18e"
  },
  {
    "id": "repeat-once",
    "codepoint": "eb71"
  },
  {
    "id": "replace",
    "codepoint": "ebc7"
  },
  {
    "id": "replace-off",
    "codepoint": "f422"
  },
  {
    "id": "replace-user",
    "codepoint": "100f0"
  },
  {
    "id": "report",
    "codepoint": "eece"
  },
  {
    "id": "report-analytics",
    "codepoint": "eecb"
  },
  {
    "id": "report-medical",
    "codepoint": "eecc"
  },
  {
    "id": "report-money",
    "codepoint": "eecd"
  },
  {
    "id": "report-off",
    "codepoint": "f18f"
  },
  {
    "id": "report-search",
    "codepoint": "ef84"
  },
  {
    "id": "reserved-line",
    "codepoint": "f9f6"
  },
  {
    "id": "resize",
    "codepoint": "eecf"
  },
  {
    "id": "restore",
    "codepoint": "fafd"
  },
  {
    "id": "rewind-backward-10",
    "codepoint": "faba"
  },
  {
    "id": "rewind-backward-15",
    "codepoint": "fabb"
  },
  {
    "id": "rewind-backward-20",
    "codepoint": "fabc"
  },
  {
    "id": "rewind-backward-30",
    "codepoint": "fabd"
  },
  {
    "id": "rewind-backward-40",
    "codepoint": "fabe"
  },
  {
    "id": "rewind-backward-5",
    "codepoint": "fabf"
  },
  {
    "id": "rewind-backward-50",
    "codepoint": "fac0"
  },
  {
    "id": "rewind-backward-60",
    "codepoint": "fac1"
  },
  {
    "id": "rewind-forward-10",
    "codepoint": "fac2"
  },
  {
    "id": "rewind-forward-15",
    "codepoint": "fac3"
  },
  {
    "id": "rewind-forward-20",
    "codepoint": "fac4"
  },
  {
    "id": "rewind-forward-30",
    "codepoint": "fac5"
  },
  {
    "id": "rewind-forward-40",
    "codepoint": "fac6"
  },
  {
    "id": "rewind-forward-5",
    "codepoint": "fac7"
  },
  {
    "id": "rewind-forward-50",
    "codepoint": "fac8"
  },
  {
    "id": "rewind-forward-60",
    "codepoint": "fac9"
  },
  {
    "id": "ribbon-health",
    "codepoint": "f58e"
  },
  {
    "id": "rings",
    "codepoint": "fa6a"
  },
  {
    "id": "ripple",
    "codepoint": "ed82"
  },
  {
    "id": "ripple-down",
    "codepoint": "101aa"
  },
  {
    "id": "ripple-off",
    "codepoint": "f190"
  },
  {
    "id": "ripple-up",
    "codepoint": "101a9"
  },
  {
    "id": "road",
    "codepoint": "f018"
  },
  {
    "id": "road-off",
    "codepoint": "f191"
  },
  {
    "id": "road-sign",
    "codepoint": "ecdd"
  },
  {
    "id": "robot",
    "codepoint": "f00b"
  },
  {
    "id": "robot-face",
    "codepoint": "fcbe"
  },
  {
    "id": "robot-off",
    "codepoint": "f192"
  },
  {
    "id": "rocket",
    "codepoint": "ec45"
  },
  {
    "id": "rocket-off",
    "codepoint": "f193"
  },
  {
    "id": "roller-skating",
    "codepoint": "efd1"
  },
  {
    "id": "rollercoaster",
    "codepoint": "f0a2"
  },
  {
    "id": "rollercoaster-off",
    "codepoint": "f423"
  },
  {
    "id": "rosette",
    "codepoint": "f599"
  },
  {
    "id": "rosette-asterisk",
    "codepoint": "101a8"
  },
  {
    "id": "rosette-discount",
    "codepoint": "ee7c"
  },
  {
    "id": "rosette-discount-check",
    "codepoint": "f1f8"
  },
  {
    "id": "rosette-discount-check-off",
    "codepoint": "ff10"
  },
  {
    "id": "rosette-discount-off",
    "codepoint": "f3e6"
  },
  {
    "id": "rosette-number-0",
    "codepoint": "f58f"
  },
  {
    "id": "rosette-number-1",
    "codepoint": "f590"
  },
  {
    "id": "rosette-number-2",
    "codepoint": "f591"
  },
  {
    "id": "rosette-number-3",
    "codepoint": "f592"
  },
  {
    "id": "rosette-number-4",
    "codepoint": "f593"
  },
  {
    "id": "rosette-number-5",
    "codepoint": "f594"
  },
  {
    "id": "rosette-number-6",
    "codepoint": "f595"
  },
  {
    "id": "rosette-number-7",
    "codepoint": "f596"
  },
  {
    "id": "rosette-number-8",
    "codepoint": "f597"
  },
  {
    "id": "rosette-number-9",
    "codepoint": "f598"
  },
  {
    "id": "rotate",
    "codepoint": "eb16"
  },
  {
    "id": "rotate-2",
    "codepoint": "ebb4"
  },
  {
    "id": "rotate-360",
    "codepoint": "ef85"
  },
  {
    "id": "rotate-3d",
    "codepoint": "f020"
  },
  {
    "id": "rotate-clockwise",
    "codepoint": "eb15"
  },
  {
    "id": "rotate-clockwise-2",
    "codepoint": "ebb5"
  },
  {
    "id": "rotate-dot",
    "codepoint": "efe5"
  },
  {
    "id": "rotate-rectangle",
    "codepoint": "ec15"
  },
  {
    "id": "roulette",
    "codepoint": "1025e"
  },
  {
    "id": "route",
    "codepoint": "eb17"
  },
  {
    "id": "route-2",
    "codepoint": "f4b6"
  },
  {
    "id": "route-alt-left",
    "codepoint": "fca9"
  },
  {
    "id": "route-alt-right",
    "codepoint": "fcaa"
  },
  {
    "id": "route-off",
    "codepoint": "f194"
  },
  {
    "id": "route-scan",
    "codepoint": "fcbf"
  },
  {
    "id": "route-square",
    "codepoint": "fcac"
  },
  {
    "id": "route-square-2",
    "codepoint": "fcab"
  },
  {
    "id": "route-x",
    "codepoint": "fcae"
  },
  {
    "id": "route-x-2",
    "codepoint": "fcad"
  },
  {
    "id": "router",
    "codepoint": "eb18"
  },
  {
    "id": "router-off",
    "codepoint": "f424"
  },
  {
    "id": "row-insert-bottom",
    "codepoint": "eed0"
  },
  {
    "id": "row-insert-top",
    "codepoint": "eed1"
  },
  {
    "id": "row-remove",
    "codepoint": "fafe"
  },
  {
    "id": "rss",
    "codepoint": "eb19"
  },
  {
    "id": "rubber-stamp",
    "codepoint": "f5ab"
  },
  {
    "id": "rubber-stamp-off",
    "codepoint": "f5aa"
  },
  {
    "id": "rugby",
    "codepoint": "10247"
  },
  {
    "id": "ruler",
    "codepoint": "eb1a"
  },
  {
    "id": "ruler-2",
    "codepoint": "eed2"
  },
  {
    "id": "ruler-2-off",
    "codepoint": "f195"
  },
  {
    "id": "ruler-3",
    "codepoint": "f290"
  },
  {
    "id": "ruler-measure",
    "codepoint": "f291"
  },
  {
    "id": "ruler-measure-2",
    "codepoint": "ff0f"
  },
  {
    "id": "ruler-off",
    "codepoint": "f196"
  },
  {
    "id": "run",
    "codepoint": "ec82"
  },
  {
    "id": "rv-truck",
    "codepoint": "fcc0"
  },
  {
    "id": "s-turn-down",
    "codepoint": "f516"
  },
  {
    "id": "s-turn-left",
    "codepoint": "f517"
  },
  {
    "id": "s-turn-right",
    "codepoint": "f518"
  },
  {
    "id": "s-turn-up",
    "codepoint": "f519"
  },
  {
    "id": "sailboat",
    "codepoint": "ec83"
  },
  {
    "id": "sailboat-2",
    "codepoint": "f5f7"
  },
  {
    "id": "sailboat-off",
    "codepoint": "f425"
  },
  {
    "id": "salad",
    "codepoint": "f50a"
  },
  {
    "id": "salt",
    "codepoint": "ef16"
  },
  {
    "id": "sandbox",
    "codepoint": "fd6c"
  },
  {
    "id": "satellite",
    "codepoint": "eed3"
  },
  {
    "id": "satellite-off",
    "codepoint": "f197"
  },
  {
    "id": "sausage",
    "codepoint": "ef17"
  },
  {
    "id": "scale",
    "codepoint": "ebc2"
  },
  {
    "id": "scale-off",
    "codepoint": "f198"
  },
  {
    "id": "scale-outline",
    "codepoint": "ef53"
  },
  {
    "id": "scale-outline-off",
    "codepoint": "f199"
  },
  {
    "id": "scan",
    "codepoint": "ebc8"
  },
  {
    "id": "scan-cube",
    "codepoint": "1025d"
  },
  {
    "id": "scan-eye",
    "codepoint": "f1ff"
  },
  {
    "id": "scan-letter-a",
    "codepoint": "10223"
  },
  {
    "id": "scan-letter-t",
    "codepoint": "10222"
  },
  {
    "id": "scan-position",
    "codepoint": "fdac"
  },
  {
    "id": "scan-traces",
    "codepoint": "101ec"
  },
  {
    "id": "schema",
    "codepoint": "f200"
  },
  {
    "id": "schema-off",
    "codepoint": "f426"
  },
  {
    "id": "school",
    "codepoint": "ecf7"
  },
  {
    "id": "school-bell",
    "codepoint": "f64a"
  },
  {
    "id": "school-off",
    "codepoint": "f19a"
  },
  {
    "id": "scissors",
    "codepoint": "eb1b"
  },
  {
    "id": "scissors-off",
    "codepoint": "f19b"
  },
  {
    "id": "scooter",
    "codepoint": "ec6c"
  },
  {
    "id": "scooter-electric",
    "codepoint": "ecc1"
  },
  {
    "id": "scoreboard",
    "codepoint": "fa6b"
  },
  {
    "id": "screen-share",
    "codepoint": "ed18"
  },
  {
    "id": "screen-share-off",
    "codepoint": "ed17"
  },
  {
    "id": "screenshot",
    "codepoint": "f201"
  },
  {
    "id": "scribble",
    "codepoint": "f0a3"
  },
  {
    "id": "scribble-off",
    "codepoint": "f427"
  },
  {
    "id": "script",
    "codepoint": "f2da"
  },
  {
    "id": "script-minus",
    "codepoint": "f2d7"
  },
  {
    "id": "script-plus",
    "codepoint": "f2d8"
  },
  {
    "id": "script-x",
    "codepoint": "f2d9"
  },
  {
    "id": "scuba-diving",
    "codepoint": "fd4e"
  },
  {
    "id": "scuba-diving-tank",
    "codepoint": "fefa"
  },
  {
    "id": "scuba-mask",
    "codepoint": "eed4"
  },
  {
    "id": "scuba-mask-off",
    "codepoint": "f428"
  },
  {
    "id": "sdk",
    "codepoint": "f3af"
  },
  {
    "id": "search",
    "codepoint": "eb1c"
  },
  {
    "id": "search-off",
    "codepoint": "f19c"
  },
  {
    "id": "section",
    "codepoint": "eed5"
  },
  {
    "id": "section-sign",
    "codepoint": "f019"
  },
  {
    "id": "seeding",
    "codepoint": "ed51"
  },
  {
    "id": "seeding-off",
    "codepoint": "f19d"
  },
  {
    "id": "seedling",
    "codepoint": "ed51"
  },
  {
    "id": "seedling-off",
    "codepoint": "f19d"
  },
  {
    "id": "segway",
    "codepoint": "10221"
  },
  {
    "id": "select",
    "codepoint": "ec9e"
  },
  {
    "id": "select-all",
    "codepoint": "f9f7"
  },
  {
    "id": "selector",
    "codepoint": "eb1d"
  },
  {
    "id": "send",
    "codepoint": "eb1e"
  },
  {
    "id": "send-2",
    "codepoint": "fd5d"
  },
  {
    "id": "send-off",
    "codepoint": "f429"
  },
  {
    "id": "seo",
    "codepoint": "f26b"
  },
  {
    "id": "separator",
    "codepoint": "ebda"
  },
  {
    "id": "separator-horizontal",
    "codepoint": "ec79"
  },
  {
    "id": "separator-vertical",
    "codepoint": "ec7a"
  },
  {
    "id": "server",
    "codepoint": "eb1f"
  },
  {
    "id": "server-2",
    "codepoint": "f07c"
  },
  {
    "id": "server-bolt",
    "codepoint": "f320"
  },
  {
    "id": "server-cog",
    "codepoint": "f321"
  },
  {
    "id": "server-off",
    "codepoint": "f19e"
  },
  {
    "id": "server-spark",
    "codepoint": "ffaf"
  },
  {
    "id": "serverless",
    "codepoint": "101eb"
  },
  {
    "id": "servicemark",
    "codepoint": "ec09"
  },
  {
    "id": "settings",
    "codepoint": "eb20"
  },
  {
    "id": "settings-2",
    "codepoint": "f5ac"
  },
  {
    "id": "settings-ai",
    "codepoint": "101a7"
  },
  {
    "id": "settings-automation",
    "codepoint": "eed6"
  },
  {
    "id": "settings-bolt",
    "codepoint": "f9ad"
  },
  {
    "id": "settings-cancel",
    "codepoint": "f9ae"
  },
  {
    "id": "settings-check",
    "codepoint": "f9af"
  },
  {
    "id": "settings-code",
    "codepoint": "f9b0"
  },
  {
    "id": "settings-cog",
    "codepoint": "f9b1"
  },
  {
    "id": "settings-dollar",
    "codepoint": "f9b2"
  },
  {
    "id": "settings-down",
    "codepoint": "f9b3"
  },
  {
    "id": "settings-exclamation",
    "codepoint": "f9b4"
  },
  {
    "id": "settings-heart",
    "codepoint": "f9b5"
  },
  {
    "id": "settings-minus",
    "codepoint": "f9b6"
  },
  {
    "id": "settings-off",
    "codepoint": "f19f"
  },
  {
    "id": "settings-pause",
    "codepoint": "f9b7"
  },
  {
    "id": "settings-pin",
    "codepoint": "f9b8"
  },
  {
    "id": "settings-plus",
    "codepoint": "f9b9"
  },
  {
    "id": "settings-question",
    "codepoint": "f9ba"
  },
  {
    "id": "settings-search",
    "codepoint": "f9bb"
  },
  {
    "id": "settings-share",
    "codepoint": "f9bc"
  },
  {
    "id": "settings-spark",
    "codepoint": "ffae"
  },
  {
    "id": "settings-star",
    "codepoint": "f9bd"
  },
  {
    "id": "settings-up",
    "codepoint": "f9be"
  },
  {
    "id": "settings-x",
    "codepoint": "f9bf"
  },
  {
    "id": "shadow",
    "codepoint": "eed8"
  },
  {
    "id": "shadow-off",
    "codepoint": "eed7"
  },
  {
    "id": "shape",
    "codepoint": "eb9c"
  },
  {
    "id": "shape-2",
    "codepoint": "eed9"
  },
  {
    "id": "shape-3",
    "codepoint": "eeda"
  },
  {
    "id": "shape-off",
    "codepoint": "f1a0"
  },
  {
    "id": "share",
    "codepoint": "eb21"
  },
  {
    "id": "share-2",
    "codepoint": "f799"
  },
  {
    "id": "share-3",
    "codepoint": "f7bd"
  },
  {
    "id": "share-off",
    "codepoint": "f1a1"
  },
  {
    "id": "shareplay",
    "codepoint": "fea5"
  },
  {
    "id": "shi-jumping",
    "codepoint": "fa6c"
  },
  {
    "id": "shield",
    "codepoint": "eb24"
  },
  {
    "id": "shield-bolt",
    "codepoint": "f9c0"
  },
  {
    "id": "shield-cancel",
    "codepoint": "f9c1"
  },
  {
    "id": "shield-check",
    "codepoint": "eb22"
  },
  {
    "id": "shield-checkered",
    "codepoint": "ef9a"
  },
  {
    "id": "shield-chevron",
    "codepoint": "ef9b"
  },
  {
    "id": "shield-code",
    "codepoint": "f9c2"
  },
  {
    "id": "shield-cog",
    "codepoint": "f9c3"
  },
  {
    "id": "shield-dollar",
    "codepoint": "f9c4"
  },
  {
    "id": "shield-down",
    "codepoint": "f9c5"
  },
  {
    "id": "shield-exclamation",
    "codepoint": "f9c6"
  },
  {
    "id": "shield-half",
    "codepoint": "f358"
  },
  {
    "id": "shield-heart",
    "codepoint": "f9c7"
  },
  {
    "id": "shield-lock",
    "codepoint": "ed58"
  },
  {
    "id": "shield-minus",
    "codepoint": "f9c8"
  },
  {
    "id": "shield-off",
    "codepoint": "ecf8"
  },
  {
    "id": "shield-pause",
    "codepoint": "f9c9"
  },
  {
    "id": "shield-pin",
    "codepoint": "f9ca"
  },
  {
    "id": "shield-plus",
    "codepoint": "f9cb"
  },
  {
    "id": "shield-question",
    "codepoint": "f9cc"
  },
  {
    "id": "shield-search",
    "codepoint": "f9cd"
  },
  {
    "id": "shield-share",
    "codepoint": "f9ce"
  },
  {
    "id": "shield-star",
    "codepoint": "f9cf"
  },
  {
    "id": "shield-up",
    "codepoint": "f9d0"
  },
  {
    "id": "shield-x",
    "codepoint": "eb23"
  },
  {
    "id": "ship",
    "codepoint": "ec84"
  },
  {
    "id": "ship-off",
    "codepoint": "f42a"
  },
  {
    "id": "shirt",
    "codepoint": "ec0a"
  },
  {
    "id": "shirt-off",
    "codepoint": "f1a2"
  },
  {
    "id": "shirt-sport",
    "codepoint": "f26c"
  },
  {
    "id": "shoe",
    "codepoint": "efd2"
  },
  {
    "id": "shoe-off",
    "codepoint": "f1a4"
  },
  {
    "id": "shopping-bag",
    "codepoint": "f5f8"
  },
  {
    "id": "shopping-bag-check",
    "codepoint": "fc16"
  },
  {
    "id": "shopping-bag-discount",
    "codepoint": "fc17"
  },
  {
    "id": "shopping-bag-edit",
    "codepoint": "fc18"
  },
  {
    "id": "shopping-bag-exclamation",
    "codepoint": "fc19"
  },
  {
    "id": "shopping-bag-heart",
    "codepoint": "fda2"
  },
  {
    "id": "shopping-bag-minus",
    "codepoint": "fc1a"
  },
  {
    "id": "shopping-bag-plus",
    "codepoint": "fc1b"
  },
  {
    "id": "shopping-bag-search",
    "codepoint": "fc1c"
  },
  {
    "id": "shopping-bag-x",
    "codepoint": "fc1d"
  },
  {
    "id": "shopping-cart",
    "codepoint": "eb25"
  },
  {
    "id": "shopping-cart-bolt",
    "codepoint": "fb57"
  },
  {
    "id": "shopping-cart-cancel",
    "codepoint": "fb58"
  },
  {
    "id": "shopping-cart-check",
    "codepoint": "fb59"
  },
  {
    "id": "shopping-cart-code",
    "codepoint": "fb5a"
  },
  {
    "id": "shopping-cart-cog",
    "codepoint": "fb5b"
  },
  {
    "id": "shopping-cart-copy",
    "codepoint": "fb5c"
  },
  {
    "id": "shopping-cart-discount",
    "codepoint": "fb5d"
  },
  {
    "id": "shopping-cart-dollar",
    "codepoint": "fb5e"
  },
  {
    "id": "shopping-cart-down",
    "codepoint": "fb5f"
  },
  {
    "id": "shopping-cart-exclamation",
    "codepoint": "fb60"
  },
  {
    "id": "shopping-cart-heart",
    "codepoint": "fb61"
  },
  {
    "id": "shopping-cart-minus",
    "codepoint": "fb62"
  },
  {
    "id": "shopping-cart-off",
    "codepoint": "eedc"
  },
  {
    "id": "shopping-cart-pause",
    "codepoint": "fb63"
  },
  {
    "id": "shopping-cart-pin",
    "codepoint": "fb64"
  },
  {
    "id": "shopping-cart-plus",
    "codepoint": "fb65"
  },
  {
    "id": "shopping-cart-question",
    "codepoint": "fb66"
  },
  {
    "id": "shopping-cart-search",
    "codepoint": "fb67"
  },
  {
    "id": "shopping-cart-share",
    "codepoint": "fb68"
  },
  {
    "id": "shopping-cart-star",
    "codepoint": "fb69"
  },
  {
    "id": "shopping-cart-up",
    "codepoint": "fb6a"
  },
  {
    "id": "shopping-cart-x",
    "codepoint": "fb6b"
  },
  {
    "id": "shovel",
    "codepoint": "f1d9"
  },
  {
    "id": "shovel-pitchforks",
    "codepoint": "fd3a"
  },
  {
    "id": "shredder",
    "codepoint": "eedf"
  },
  {
    "id": "sign-left",
    "codepoint": "f06b"
  },
  {
    "id": "sign-right",
    "codepoint": "f06c"
  },
  {
    "id": "signal-2g",
    "codepoint": "f79a"
  },
  {
    "id": "signal-3g",
    "codepoint": "f1ee"
  },
  {
    "id": "signal-4g",
    "codepoint": "f1ef"
  },
  {
    "id": "signal-4g-plus",
    "codepoint": "f259"
  },
  {
    "id": "signal-5g",
    "codepoint": "f1f0"
  },
  {
    "id": "signal-6g",
    "codepoint": "f9f8"
  },
  {
    "id": "signal-e",
    "codepoint": "f9f9"
  },
  {
    "id": "signal-g",
    "codepoint": "f9fa"
  },
  {
    "id": "signal-h",
    "codepoint": "f9fc"
  },
  {
    "id": "signal-h-plus",
    "codepoint": "f9fb"
  },
  {
    "id": "signal-lte",
    "codepoint": "f9fd"
  },
  {
    "id": "signature",
    "codepoint": "eee0"
  },
  {
    "id": "signature-off",
    "codepoint": "f1a5"
  },
  {
    "id": "sitemap",
    "codepoint": "eb9d"
  },
  {
    "id": "sitemap-off",
    "codepoint": "f1a6"
  },
  {
    "id": "skateboard",
    "codepoint": "ecc2"
  },
  {
    "id": "skateboard-off",
    "codepoint": "f42b"
  },
  {
    "id": "skateboarding",
    "codepoint": "faca"
  },
  {
    "id": "sketching",
    "codepoint": "1025c"
  },
  {
    "id": "skew-x",
    "codepoint": "fd3b"
  },
  {
    "id": "skew-y",
    "codepoint": "fd3c"
  },
  {
    "id": "ski-jumping",
    "codepoint": "fa6c"
  },
  {
    "id": "skull",
    "codepoint": "f292"
  },
  {
    "id": "slash",
    "codepoint": "f4f9"
  },
  {
    "id": "slashes",
    "codepoint": "f588"
  },
  {
    "id": "sleigh",
    "codepoint": "ef9c"
  },
  {
    "id": "slice",
    "codepoint": "ebdb"
  },
  {
    "id": "slideshow",
    "codepoint": "ebc9"
  },
  {
    "id": "smart-home",
    "codepoint": "ecde"
  },
  {
    "id": "smart-home-off",
    "codepoint": "f1a7"
  },
  {
    "id": "smoking",
    "codepoint": "ecc4"
  },
  {
    "id": "smoking-no",
    "codepoint": "ecc3"
  },
  {
    "id": "snowboarding",
    "codepoint": "fd4f"
  },
  {
    "id": "snowflake",
    "codepoint": "ec0b"
  },
  {
    "id": "snowflake-off",
    "codepoint": "f1a8"
  },
  {
    "id": "snowman",
    "codepoint": "f26d"
  },
  {
    "id": "soccer-field",
    "codepoint": "ed92"
  },
  {
    "id": "social",
    "codepoint": "ebec"
  },
  {
    "id": "social-off",
    "codepoint": "f1a9"
  },
  {
    "id": "sock",
    "codepoint": "eee1"
  },
  {
    "id": "sofa",
    "codepoint": "efaf"
  },
  {
    "id": "sofa-off",
    "codepoint": "f42c"
  },
  {
    "id": "solar-electricity",
    "codepoint": "fcc1"
  },
  {
    "id": "solar-panel",
    "codepoint": "f7bf"
  },
  {
    "id": "solar-panel-2",
    "codepoint": "f7be"
  },
  {
    "id": "sort-0-9",
    "codepoint": "f54d"
  },
  {
    "id": "sort-9-0",
    "codepoint": "f54e"
  },
  {
    "id": "sort-a-z",
    "codepoint": "f54f"
  },
  {
    "id": "sort-ascending",
    "codepoint": "eb26"
  },
  {
    "id": "sort-ascending-2",
    "codepoint": "eee2"
  },
  {
    "id": "sort-ascending-letters",
    "codepoint": "ef18"
  },
  {
    "id": "sort-ascending-numbers",
    "codepoint": "ef19"
  },
  {
    "id": "sort-ascending-shapes",
    "codepoint": "fd94"
  },
  {
    "id": "sort-ascending-small-big",
    "codepoint": "fd95"
  },
  {
    "id": "sort-deacending-small-big",
    "codepoint": "fd96"
  },
  {
    "id": "sort-descending",
    "codepoint": "eb27"
  },
  {
    "id": "sort-descending-2",
    "codepoint": "eee3"
  },
  {
    "id": "sort-descending-letters",
    "codepoint": "ef1a"
  },
  {
    "id": "sort-descending-numbers",
    "codepoint": "ef1b"
  },
  {
    "id": "sort-descending-shapes",
    "codepoint": "fd97"
  },
  {
    "id": "sort-descending-small-big",
    "codepoint": "fd96"
  },
  {
    "id": "sort-z-a",
    "codepoint": "f550"
  },
  {
    "id": "sos",
    "codepoint": "f24a"
  },
  {
    "id": "soup",
    "codepoint": "ef2e"
  },
  {
    "id": "soup-off",
    "codepoint": "f42d"
  },
  {
    "id": "source-code",
    "codepoint": "f4a2"
  },
  {
    "id": "space",
    "codepoint": "ec0c"
  },
  {
    "id": "space-off",
    "codepoint": "f1aa"
  },
  {
    "id": "spaces",
    "codepoint": "fea4"
  },
  {
    "id": "spacing-horizontal",
    "codepoint": "ef54"
  },
  {
    "id": "spacing-vertical",
    "codepoint": "ef55"
  },
  {
    "id": "spade",
    "codepoint": "effa"
  },
  {
    "id": "sparkle",
    "codepoint": "10259"
  },
  {
    "id": "sparkle-2",
    "codepoint": "1025b"
  },
  {
    "id": "sparkle-highlight",
    "codepoint": "1025a"
  },
  {
    "id": "sparkles",
    "codepoint": "f6d7"
  },
  {
    "id": "sparkles-2",
    "codepoint": "101a6"
  },
  {
    "id": "speakerphone",
    "codepoint": "ed61"
  },
  {
    "id": "speedboat",
    "codepoint": "ed93"
  },
  {
    "id": "sphere",
    "codepoint": "fab8"
  },
  {
    "id": "sphere-2",
    "codepoint": "10258"
  },
  {
    "id": "sphere-off",
    "codepoint": "fab6"
  },
  {
    "id": "sphere-plus",
    "codepoint": "fab7"
  },
  {
    "id": "spider",
    "codepoint": "f293"
  },
  {
    "id": "spiral",
    "codepoint": "f294"
  },
  {
    "id": "spiral-off",
    "codepoint": "f42e"
  },
  {
    "id": "sport-billard",
    "codepoint": "eee4"
  },
  {
    "id": "sport-billiard",
    "codepoint": "eee4"
  },
  {
    "id": "spray",
    "codepoint": "f50b"
  },
  {
    "id": "spy",
    "codepoint": "f227"
  },
  {
    "id": "spy-off",
    "codepoint": "f42f"
  },
  {
    "id": "sql",
    "codepoint": "f7c0"
  },
  {
    "id": "square",
    "codepoint": "eb2c"
  },
  {
    "id": "square-0",
    "codepoint": "eee5"
  },
  {
    "id": "square-1",
    "codepoint": "eee6"
  },
  {
    "id": "square-2",
    "codepoint": "eee7"
  },
  {
    "id": "square-3",
    "codepoint": "eee8"
  },
  {
    "id": "square-4",
    "codepoint": "eee9"
  },
  {
    "id": "square-5",
    "codepoint": "eeea"
  },
  {
    "id": "square-6",
    "codepoint": "eeeb"
  },
  {
    "id": "square-7",
    "codepoint": "eeec"
  },
  {
    "id": "square-8",
    "codepoint": "eeed"
  },
  {
    "id": "square-9",
    "codepoint": "eeee"
  },
  {
    "id": "square-arrow-down",
    "codepoint": "f4b7"
  },
  {
    "id": "square-arrow-left",
    "codepoint": "f4b8"
  },
  {
    "id": "square-arrow-right",
    "codepoint": "f4b9"
  },
  {
    "id": "square-arrow-up",
    "codepoint": "f4ba"
  },
  {
    "id": "square-asterisk",
    "codepoint": "f01a"
  },
  {
    "id": "square-check",
    "codepoint": "eb28"
  },
  {
    "id": "square-chevron-down",
    "codepoint": "f627"
  },
  {
    "id": "square-chevron-left",
    "codepoint": "f628"
  },
  {
    "id": "square-chevron-right",
    "codepoint": "f629"
  },
  {
    "id": "square-chevron-up",
    "codepoint": "f62a"
  },
  {
    "id": "square-chevrons-down",
    "codepoint": "f64b"
  },
  {
    "id": "square-chevrons-left",
    "codepoint": "f64c"
  },
  {
    "id": "square-chevrons-right",
    "codepoint": "f64d"
  },
  {
    "id": "square-chevrons-up",
    "codepoint": "f64e"
  },
  {
    "id": "square-dashed",
    "codepoint": "100bb"
  },
  {
    "id": "square-dot",
    "codepoint": "ed59"
  },
  {
    "id": "square-f0",
    "codepoint": "f526"
  },
  {
    "id": "square-f1",
    "codepoint": "f527"
  },
  {
    "id": "square-f2",
    "codepoint": "f528"
  },
  {
    "id": "square-f3",
    "codepoint": "f529"
  },
  {
    "id": "square-f4",
    "codepoint": "f52a"
  },
  {
    "id": "square-f5",
    "codepoint": "f52b"
  },
  {
    "id": "square-f6",
    "codepoint": "f52c"
  },
  {
    "id": "square-f7",
    "codepoint": "f52d"
  },
  {
    "id": "square-f8",
    "codepoint": "f52e"
  },
  {
    "id": "square-f9",
    "codepoint": "f52f"
  },
  {
    "id": "square-forbid",
    "codepoint": "ed5b"
  },
  {
    "id": "square-forbid-2",
    "codepoint": "ed5a"
  },
  {
    "id": "square-half",
    "codepoint": "effb"
  },
  {
    "id": "square-key",
    "codepoint": "f638"
  },
  {
    "id": "square-letter-a",
    "codepoint": "f47c"
  },
  {
    "id": "square-letter-b",
    "codepoint": "f47d"
  },
  {
    "id": "square-letter-c",
    "codepoint": "f47e"
  },
  {
    "id": "square-letter-d",
    "codepoint": "f47f"
  },
  {
    "id": "square-letter-e",
    "codepoint": "f480"
  },
  {
    "id": "square-letter-f",
    "codepoint": "f481"
  },
  {
    "id": "square-letter-g",
    "codepoint": "f482"
  },
  {
    "id": "square-letter-h",
    "codepoint": "f483"
  },
  {
    "id": "square-letter-i",
    "codepoint": "f484"
  },
  {
    "id": "square-letter-j",
    "codepoint": "f485"
  },
  {
    "id": "square-letter-k",
    "codepoint": "f486"
  },
  {
    "id": "square-letter-l",
    "codepoint": "f487"
  },
  {
    "id": "square-letter-m",
    "codepoint": "f488"
  },
  {
    "id": "square-letter-n",
    "codepoint": "f489"
  },
  {
    "id": "square-letter-o",
    "codepoint": "f48a"
  },
  {
    "id": "square-letter-p",
    "codepoint": "f48b"
  },
  {
    "id": "square-letter-q",
    "codepoint": "f48c"
  },
  {
    "id": "square-letter-r",
    "codepoint": "f48d"
  },
  {
    "id": "square-letter-s",
    "codepoint": "f48e"
  },
  {
    "id": "square-letter-t",
    "codepoint": "f48f"
  },
  {
    "id": "square-letter-u",
    "codepoint": "f490"
  },
  {
    "id": "square-letter-v",
    "codepoint": "f4bb"
  },
  {
    "id": "square-letter-w",
    "codepoint": "f491"
  },
  {
    "id": "square-letter-x",
    "codepoint": "f4bc"
  },
  {
    "id": "square-letter-y",
    "codepoint": "f492"
  },
  {
    "id": "square-letter-z",
    "codepoint": "f493"
  },
  {
    "id": "square-minus",
    "codepoint": "1019e"
  },
  {
    "id": "square-minus-2",
    "codepoint": "eb29"
  },
  {
    "id": "square-number-0",
    "codepoint": "eee5"
  },
  {
    "id": "square-number-1",
    "codepoint": "eee6"
  },
  {
    "id": "square-number-2",
    "codepoint": "eee7"
  },
  {
    "id": "square-number-3",
    "codepoint": "eee8"
  },
  {
    "id": "square-number-4",
    "codepoint": "eee9"
  },
  {
    "id": "square-number-5",
    "codepoint": "eeea"
  },
  {
    "id": "square-number-6",
    "codepoint": "eeeb"
  },
  {
    "id": "square-number-7",
    "codepoint": "eeec"
  },
  {
    "id": "square-number-8",
    "codepoint": "eeed"
  },
  {
    "id": "square-number-9",
    "codepoint": "eeee"
  },
  {
    "id": "square-off",
    "codepoint": "eeef"
  },
  {
    "id": "square-percentage",
    "codepoint": "fd83"
  },
  {
    "id": "square-plus",
    "codepoint": "eb2a"
  },
  {
    "id": "square-plus-2",
    "codepoint": "fc96"
  },
  {
    "id": "square-root",
    "codepoint": "eef1"
  },
  {
    "id": "square-root-2",
    "codepoint": "eef0"
  },
  {
    "id": "square-rotated",
    "codepoint": "ecdf"
  },
  {
    "id": "square-rotated-asterisk",
    "codepoint": "101a5"
  },
  {
    "id": "square-rotated-forbid",
    "codepoint": "f01c"
  },
  {
    "id": "square-rotated-forbid-2",
    "codepoint": "f01b"
  },
  {
    "id": "square-rotated-off",
    "codepoint": "eef2"
  },
  {
    "id": "square-rounded",
    "codepoint": "f59a"
  },
  {
    "id": "square-rounded-arrow-down",
    "codepoint": "f639"
  },
  {
    "id": "square-rounded-arrow-left",
    "codepoint": "f63a"
  },
  {
    "id": "square-rounded-arrow-right",
    "codepoint": "f63b"
  },
  {
    "id": "square-rounded-arrow-up",
    "codepoint": "f63c"
  },
  {
    "id": "square-rounded-check",
    "codepoint": "f63d"
  },
  {
    "id": "square-rounded-chevron-down",
    "codepoint": "f62b"
  },
  {
    "id": "square-rounded-chevron-left",
    "codepoint": "f62c"
  },
  {
    "id": "square-rounded-chevron-right",
    "codepoint": "f62d"
  },
  {
    "id": "square-rounded-chevron-up",
    "codepoint": "f62e"
  },
  {
    "id": "square-rounded-chevrons-down",
    "codepoint": "f64f"
  },
  {
    "id": "square-rounded-chevrons-left",
    "codepoint": "f650"
  },
  {
    "id": "square-rounded-chevrons-right",
    "codepoint": "f651"
  },
  {
    "id": "square-rounded-chevrons-up",
    "codepoint": "f652"
  },
  {
    "id": "square-rounded-letter-a",
    "codepoint": "f5ae"
  },
  {
    "id": "square-rounded-letter-b",
    "codepoint": "f5af"
  },
  {
    "id": "square-rounded-letter-c",
    "codepoint": "f5b0"
  },
  {
    "id": "square-rounded-letter-d",
    "codepoint": "f5b1"
  },
  {
    "id": "square-rounded-letter-e",
    "codepoint": "f5b2"
  },
  {
    "id": "square-rounded-letter-f",
    "codepoint": "f5b3"
  },
  {
    "id": "square-rounded-letter-g",
    "codepoint": "f5b4"
  },
  {
    "id": "square-rounded-letter-h",
    "codepoint": "f5b5"
  },
  {
    "id": "square-rounded-letter-i",
    "codepoint": "f5b6"
  },
  {
    "id": "square-rounded-letter-j",
    "codepoint": "f5b7"
  },
  {
    "id": "square-rounded-letter-k",
    "codepoint": "f5b8"
  },
  {
    "id": "square-rounded-letter-l",
    "codepoint": "f5b9"
  },
  {
    "id": "square-rounded-letter-m",
    "codepoint": "f5ba"
  },
  {
    "id": "square-rounded-letter-n",
    "codepoint": "f5bb"
  },
  {
    "id": "square-rounded-letter-o",
    "codepoint": "f5bc"
  },
  {
    "id": "square-rounded-letter-p",
    "codepoint": "f5bd"
  },
  {
    "id": "square-rounded-letter-q",
    "codepoint": "f5be"
  },
  {
    "id": "square-rounded-letter-r",
    "codepoint": "f5bf"
  },
  {
    "id": "square-rounded-letter-s",
    "codepoint": "f5c0"
  },
  {
    "id": "square-rounded-letter-t",
    "codepoint": "f5c1"
  },
  {
    "id": "square-rounded-letter-u",
    "codepoint": "f5c2"
  },
  {
    "id": "square-rounded-letter-v",
    "codepoint": "f5c3"
  },
  {
    "id": "square-rounded-letter-w",
    "codepoint": "f5c4"
  },
  {
    "id": "square-rounded-letter-x",
    "codepoint": "f5c5"
  },
  {
    "id": "square-rounded-letter-y",
    "codepoint": "f5c6"
  },
  {
    "id": "square-rounded-letter-z",
    "codepoint": "f5c7"
  },
  {
    "id": "square-rounded-minus",
    "codepoint": "f63e"
  },
  {
    "id": "square-rounded-minus-2",
    "codepoint": "fc97"
  },
  {
    "id": "square-rounded-number-0",
    "codepoint": "f5c8"
  },
  {
    "id": "square-rounded-number-1",
    "codepoint": "f5c9"
  },
  {
    "id": "square-rounded-number-2",
    "codepoint": "f5ca"
  },
  {
    "id": "square-rounded-number-3",
    "codepoint": "f5cb"
  },
  {
    "id": "square-rounded-number-4",
    "codepoint": "f5cc"
  },
  {
    "id": "square-rounded-number-5",
    "codepoint": "f5cd"
  },
  {
    "id": "square-rounded-number-6",
    "codepoint": "f5ce"
  },
  {
    "id": "square-rounded-number-7",
    "codepoint": "f5cf"
  },
  {
    "id": "square-rounded-number-8",
    "codepoint": "f5d0"
  },
  {
    "id": "square-rounded-number-9",
    "codepoint": "f5d1"
  },
  {
    "id": "square-rounded-percentage",
    "codepoint": "fd84"
  },
  {
    "id": "square-rounded-plus",
    "codepoint": "f63f"
  },
  {
    "id": "square-rounded-plus-2",
    "codepoint": "fc98"
  },
  {
    "id": "square-rounded-x",
    "codepoint": "f640"
  },
  {
    "id": "square-toggle",
    "codepoint": "eef4"
  },
  {
    "id": "square-toggle-horizontal",
    "codepoint": "eef3"
  },
  {
    "id": "square-x",
    "codepoint": "eb2b"
  },
  {
    "id": "squares",
    "codepoint": "eef6"
  },
  {
    "id": "squares-diagonal",
    "codepoint": "eef5"
  },
  {
    "id": "squares-selected",
    "codepoint": "fea3"
  },
  {
    "id": "stack",
    "codepoint": "eb2d"
  },
  {
    "id": "stack-2",
    "codepoint": "eef7"
  },
  {
    "id": "stack-3",
    "codepoint": "ef9d"
  },
  {
    "id": "stack-back",
    "codepoint": "fd26"
  },
  {
    "id": "stack-backward",
    "codepoint": "fd27"
  },
  {
    "id": "stack-forward",
    "codepoint": "fd28"
  },
  {
    "id": "stack-front",
    "codepoint": "fd29"
  },
  {
    "id": "stack-middle",
    "codepoint": "fd2a"
  },
  {
    "id": "stack-pop",
    "codepoint": "f234"
  },
  {
    "id": "stack-push",
    "codepoint": "f235"
  },
  {
    "id": "stairs",
    "codepoint": "eca6"
  },
  {
    "id": "stairs-down",
    "codepoint": "eca4"
  },
  {
    "id": "stairs-up",
    "codepoint": "eca5"
  },
  {
    "id": "star",
    "codepoint": "eb2e"
  },
  {
    "id": "star-half",
    "codepoint": "ed19"
  },
  {
    "id": "star-off",
    "codepoint": "ed62"
  },
  {
    "id": "stars",
    "codepoint": "ed38"
  },
  {
    "id": "stars-off",
    "codepoint": "f430"
  },
  {
    "id": "status-change",
    "codepoint": "f3b0"
  },
  {
    "id": "steam",
    "codepoint": "f24b"
  },
  {
    "id": "steering-wheel",
    "codepoint": "ec7b"
  },
  {
    "id": "steering-wheel-off",
    "codepoint": "f431"
  },
  {
    "id": "step-into",
    "codepoint": "ece0"
  },
  {
    "id": "step-out",
    "codepoint": "ece1"
  },
  {
    "id": "stereo-glasses",
    "codepoint": "f4cb"
  },
  {
    "id": "stethoscope",
    "codepoint": "edbe"
  },
  {
    "id": "stethoscope-off",
    "codepoint": "f432"
  },
  {
    "id": "sticker",
    "codepoint": "eb2f"
  },
  {
    "id": "sticker-2",
    "codepoint": "fd3d"
  },
  {
    "id": "stopwatch",
    "codepoint": "ff9b"
  },
  {
    "id": "storm",
    "codepoint": "f24c"
  },
  {
    "id": "storm-off",
    "codepoint": "f433"
  },
  {
    "id": "stretching",
    "codepoint": "f2db"
  },
  {
    "id": "stretching-2",
    "codepoint": "fa6d"
  },
  {
    "id": "strikethrough",
    "codepoint": "eb9e"
  },
  {
    "id": "stroke-curved",
    "codepoint": "101fe"
  },
  {
    "id": "stroke-dynamic",
    "codepoint": "101fd"
  },
  {
    "id": "stroke-straight",
    "codepoint": "101fc"
  },
  {
    "id": "submarine",
    "codepoint": "ed94"
  },
  {
    "id": "subscript",
    "codepoint": "eb9f"
  },
  {
    "id": "subtask",
    "codepoint": "ec9f"
  },
  {
    "id": "subtitles",
    "codepoint": "101a1"
  },
  {
    "id": "subtitles-ai",
    "codepoint": "101a4"
  },
  {
    "id": "subtitles-edit",
    "codepoint": "101a3"
  },
  {
    "id": "subtitles-off",
    "codepoint": "101a2"
  },
  {
    "id": "sum",
    "codepoint": "eb73"
  },
  {
    "id": "sum-off",
    "codepoint": "f1ab"
  },
  {
    "id": "sun",
    "codepoint": "eb30"
  },
  {
    "id": "sun-electricity",
    "codepoint": "fcc2"
  },
  {
    "id": "sun-high",
    "codepoint": "f236"
  },
  {
    "id": "sun-low",
    "codepoint": "f237"
  },
  {
    "id": "sun-moon",
    "codepoint": "f4a3"
  },
  {
    "id": "sun-off",
    "codepoint": "ed63"
  },
  {
    "id": "sun-wind",
    "codepoint": "f238"
  },
  {
    "id": "sunglasses",
    "codepoint": "f239"
  },
  {
    "id": "sunrise",
    "codepoint": "ef1c"
  },
  {
    "id": "sunset",
    "codepoint": "ec31"
  },
  {
    "id": "sunset-2",
    "codepoint": "f23a"
  },
  {
    "id": "superscript",
    "codepoint": "eba0"
  },
  {
    "id": "svg",
    "codepoint": "f25a"
  },
  {
    "id": "swimming",
    "codepoint": "ec92"
  },
  {
    "id": "swipe",
    "codepoint": "f551"
  },
  {
    "id": "swipe-down",
    "codepoint": "fd5e"
  },
  {
    "id": "swipe-left",
    "codepoint": "fd5f"
  },
  {
    "id": "swipe-right",
    "codepoint": "fd60"
  },
  {
    "id": "swipe-up",
    "codepoint": "fd61"
  },
  {
    "id": "switch",
    "codepoint": "eb33"
  },
  {
    "id": "switch-2",
    "codepoint": "edbf"
  },
  {
    "id": "switch-3",
    "codepoint": "edc0"
  },
  {
    "id": "switch-horizontal",
    "codepoint": "eb31"
  },
  {
    "id": "switch-vertical",
    "codepoint": "eb32"
  },
  {
    "id": "sword",
    "codepoint": "f030"
  },
  {
    "id": "sword-off",
    "codepoint": "f434"
  },
  {
    "id": "swords",
    "codepoint": "f132"
  },
  {
    "id": "tab-close",
    "codepoint": "10270"
  },
  {
    "id": "table",
    "codepoint": "eba1"
  },
  {
    "id": "table-alias",
    "codepoint": "f25b"
  },
  {
    "id": "table-column",
    "codepoint": "faff"
  },
  {
    "id": "table-dashed",
    "codepoint": "100ba"
  },
  {
    "id": "table-down",
    "codepoint": "fa1c"
  },
  {
    "id": "table-export",
    "codepoint": "eef8"
  },
  {
    "id": "table-heart",
    "codepoint": "fa1d"
  },
  {
    "id": "table-import",
    "codepoint": "eef9"
  },
  {
    "id": "table-minus",
    "codepoint": "fa1e"
  },
  {
    "id": "table-off",
    "codepoint": "eefa"
  },
  {
    "id": "table-options",
    "codepoint": "f25c"
  },
  {
    "id": "table-plus",
    "codepoint": "fa1f"
  },
  {
    "id": "table-row",
    "codepoint": "fb00"
  },
  {
    "id": "table-share",
    "codepoint": "fa20"
  },
  {
    "id": "table-shortcut",
    "codepoint": "f25d"
  },
  {
    "id": "table-spark",
    "codepoint": "ffad"
  },
  {
    "id": "tag",
    "codepoint": "10096"
  },
  {
    "id": "tag-minus",
    "codepoint": "eb34"
  },
  {
    "id": "tag-off",
    "codepoint": "efc0"
  },
  {
    "id": "tag-plus",
    "codepoint": "10097"
  },
  {
    "id": "tag-starred",
    "codepoint": "fc99"
  },
  {
    "id": "tags",
    "codepoint": "ef86"
  },
  {
    "id": "tags-off",
    "codepoint": "efc1"
  },
  {
    "id": "taiwan-dollar",
    "codepoint": "10246"
  },
  {
    "id": "tallymark-1",
    "codepoint": "ec46"
  },
  {
    "id": "tallymark-2",
    "codepoint": "ec47"
  },
  {
    "id": "tallymark-3",
    "codepoint": "ec48"
  },
  {
    "id": "tallymark-4",
    "codepoint": "ec49"
  },
  {
    "id": "tallymarks",
    "codepoint": "ec4a"
  },
  {
    "id": "tank",
    "codepoint": "ed95"
  },
  {
    "id": "target",
    "codepoint": "eb35"
  },
  {
    "id": "target-2",
    "codepoint": "10245"
  },
  {
    "id": "target-arrow",
    "codepoint": "f51a"
  },
  {
    "id": "target-off",
    "codepoint": "f1ad"
  },
  {
    "id": "tax",
    "codepoint": "feee"
  },
  {
    "id": "tax-euro",
    "codepoint": "fef0"
  },
  {
    "id": "tax-pound",
    "codepoint": "feef"
  },
  {
    "id": "teapot",
    "codepoint": "f552"
  },
  {
    "id": "telescope",
    "codepoint": "f07d"
  },
  {
    "id": "telescope-off",
    "codepoint": "f1ae"
  },
  {
    "id": "temperature",
    "codepoint": "eb38"
  },
  {
    "id": "temperature-celsius",
    "codepoint": "eb36"
  },
  {
    "id": "temperature-fahrenheit",
    "codepoint": "eb37"
  },
  {
    "id": "temperature-minus",
    "codepoint": "ebed"
  },
  {
    "id": "temperature-off",
    "codepoint": "f1af"
  },
  {
    "id": "temperature-plus",
    "codepoint": "ebee"
  },
  {
    "id": "temperature-snow",
    "codepoint": "fda3"
  },
  {
    "id": "temperature-sun",
    "codepoint": "fda4"
  },
  {
    "id": "template",
    "codepoint": "eb39"
  },
  {
    "id": "template-off",
    "codepoint": "f1b0"
  },
  {
    "id": "tent",
    "codepoint": "eefb"
  },
  {
    "id": "tent-off",
    "codepoint": "f435"
  },
  {
    "id": "terminal",
    "codepoint": "ebdc"
  },
  {
    "id": "terminal-2",
    "codepoint": "ebef"
  },
  {
    "id": "test-pipe",
    "codepoint": "eb3a"
  },
  {
    "id": "test-pipe-2",
    "codepoint": "f0a4"
  },
  {
    "id": "test-pipe-off",
    "codepoint": "f1b1"
  },
  {
    "id": "tex",
    "codepoint": "f4e0"
  },
  {
    "id": "text-caption",
    "codepoint": "f4a4"
  },
  {
    "id": "text-color",
    "codepoint": "f2dc"
  },
  {
    "id": "text-decrease",
    "codepoint": "f202"
  },
  {
    "id": "text-direction-ltr",
    "codepoint": "eefc"
  },
  {
    "id": "text-direction-rtl",
    "codepoint": "eefd"
  },
  {
    "id": "text-grammar",
    "codepoint": "fd6d"
  },
  {
    "id": "text-increase",
    "codepoint": "f203"
  },
  {
    "id": "text-orientation",
    "codepoint": "f2a4"
  },
  {
    "id": "text-outline",
    "codepoint": "1026f"
  },
  {
    "id": "text-plus",
    "codepoint": "f2a5"
  },
  {
    "id": "text-recognition",
    "codepoint": "f204"
  },
  {
    "id": "text-regex-asterisk",
    "codepoint": "1026e"
  },
  {
    "id": "text-regex-end",
    "codepoint": "1026d"
  },
  {
    "id": "text-regex-plus",
    "codepoint": "1026c"
  },
  {
    "id": "text-regex-question",
    "codepoint": "1026b"
  },
  {
    "id": "text-regex-start",
    "codepoint": "1026a"
  },
  {
    "id": "text-resize",
    "codepoint": "ef87"
  },
  {
    "id": "text-scan-2",
    "codepoint": "fcc3"
  },
  {
    "id": "text-scan-ai",
    "codepoint": "10257"
  },
  {
    "id": "text-size",
    "codepoint": "f2b1"
  },
  {
    "id": "text-spellcheck",
    "codepoint": "f2a6"
  },
  {
    "id": "text-wrap",
    "codepoint": "ebdd"
  },
  {
    "id": "text-wrap-column",
    "codepoint": "feb2"
  },
  {
    "id": "text-wrap-disabled",
    "codepoint": "eca7"
  },
  {
    "id": "texture",
    "codepoint": "f51b"
  },
  {
    "id": "theater",
    "codepoint": "f79b"
  },
  {
    "id": "thermometer",
    "codepoint": "ef67"
  },
  {
    "id": "thumb-down",
    "codepoint": "eb3b"
  },
  {
    "id": "thumb-down-off",
    "codepoint": "f436"
  },
  {
    "id": "thumb-up",
    "codepoint": "eb3c"
  },
  {
    "id": "thumb-up-off",
    "codepoint": "f437"
  },
  {
    "id": "tic-tac",
    "codepoint": "f51c"
  },
  {
    "id": "ticket",
    "codepoint": "eb3d"
  },
  {
    "id": "ticket-off",
    "codepoint": "f1b2"
  },
  {
    "id": "tie",
    "codepoint": "f07e"
  },
  {
    "id": "tilde",
    "codepoint": "f4a5"
  },
  {
    "id": "tilt-shift",
    "codepoint": "eefe"
  },
  {
    "id": "tilt-shift-off",
    "codepoint": "f1b3"
  },
  {
    "id": "time-duration-0",
    "codepoint": "fad4"
  },
  {
    "id": "time-duration-10",
    "codepoint": "fad5"
  },
  {
    "id": "time-duration-15",
    "codepoint": "fad6"
  },
  {
    "id": "time-duration-30",
    "codepoint": "fad7"
  },
  {
    "id": "time-duration-45",
    "codepoint": "fad8"
  },
  {
    "id": "time-duration-5",
    "codepoint": "fad9"
  },
  {
    "id": "time-duration-60",
    "codepoint": "fada"
  },
  {
    "id": "time-duration-90",
    "codepoint": "fadb"
  },
  {
    "id": "time-duration-off",
    "codepoint": "fadc"
  },
  {
    "id": "timeline",
    "codepoint": "f031"
  },
  {
    "id": "timeline-event",
    "codepoint": "f553"
  },
  {
    "id": "timeline-event-exclamation",
    "codepoint": "f662"
  },
  {
    "id": "timeline-event-minus",
    "codepoint": "f663"
  },
  {
    "id": "timeline-event-plus",
    "codepoint": "f664"
  },
  {
    "id": "timeline-event-text",
    "codepoint": "f665"
  },
  {
    "id": "timeline-event-x",
    "codepoint": "f666"
  },
  {
    "id": "timezone",
    "codepoint": "feed"
  },
  {
    "id": "tip-jar",
    "codepoint": "feea"
  },
  {
    "id": "tip-jar-euro",
    "codepoint": "feec"
  },
  {
    "id": "tip-jar-pound",
    "codepoint": "feeb"
  },
  {
    "id": "tir",
    "codepoint": "ebf0"
  },
  {
    "id": "toggle-left",
    "codepoint": "eb3e"
  },
  {
    "id": "toggle-right",
    "codepoint": "eb3f"
  },
  {
    "id": "toilet-paper",
    "codepoint": "efd3"
  },
  {
    "id": "toilet-paper-off",
    "codepoint": "f1b4"
  },
  {
    "id": "toml",
    "codepoint": "fa5d"
  },
  {
    "id": "tool",
    "codepoint": "eb40"
  },
  {
    "id": "tools",
    "codepoint": "ebca"
  },
  {
    "id": "tools-kitchen",
    "codepoint": "ed64"
  },
  {
    "id": "tools-kitchen-2",
    "codepoint": "eeff"
  },
  {
    "id": "tools-kitchen-2-off",
    "codepoint": "f1b5"
  },
  {
    "id": "tools-kitchen-3",
    "codepoint": "fd2b"
  },
  {
    "id": "tools-kitchen-off",
    "codepoint": "f1b6"
  },
  {
    "id": "tools-off",
    "codepoint": "f1b7"
  },
  {
    "id": "tooltip",
    "codepoint": "f2dd"
  },
  {
    "id": "topology-bus",
    "codepoint": "f5d9"
  },
  {
    "id": "topology-complex",
    "codepoint": "f5da"
  },
  {
    "id": "topology-full",
    "codepoint": "f5dc"
  },
  {
    "id": "topology-full-hierarchy",
    "codepoint": "f5db"
  },
  {
    "id": "topology-ring",
    "codepoint": "f5df"
  },
  {
    "id": "topology-ring-2",
    "codepoint": "f5dd"
  },
  {
    "id": "topology-ring-3",
    "codepoint": "f5de"
  },
  {
    "id": "topology-star",
    "codepoint": "f5e5"
  },
  {
    "id": "topology-star-2",
    "codepoint": "f5e0"
  },
  {
    "id": "topology-star-3",
    "codepoint": "f5e1"
  },
  {
    "id": "topology-star-ring",
    "codepoint": "f5e4"
  },
  {
    "id": "topology-star-ring-2",
    "codepoint": "f5e2"
  },
  {
    "id": "topology-star-ring-3",
    "codepoint": "f5e3"
  },
  {
    "id": "torii",
    "codepoint": "f59b"
  },
  {
    "id": "tornado",
    "codepoint": "ece2"
  },
  {
    "id": "tournament",
    "codepoint": "ecd0"
  },
  {
    "id": "tower",
    "codepoint": "f2cb"
  },
  {
    "id": "tower-off",
    "codepoint": "f2ca"
  },
  {
    "id": "track",
    "codepoint": "ef00"
  },
  {
    "id": "tractor",
    "codepoint": "ec0d"
  },
  {
    "id": "trademark",
    "codepoint": "ec0e"
  },
  {
    "id": "traffic-cone",
    "codepoint": "ec0f"
  },
  {
    "id": "traffic-cone-off",
    "codepoint": "f1b8"
  },
  {
    "id": "traffic-lights",
    "codepoint": "ed39"
  },
  {
    "id": "traffic-lights-off",
    "codepoint": "f1b9"
  },
  {
    "id": "train",
    "codepoint": "ed96"
  },
  {
    "id": "transaction-bitcoin",
    "codepoint": "fd6e"
  },
  {
    "id": "transaction-dollar",
    "codepoint": "fd6f"
  },
  {
    "id": "transaction-euro",
    "codepoint": "fd70"
  },
  {
    "id": "transaction-pound",
    "codepoint": "fd71"
  },
  {
    "id": "transaction-rupee",
    "codepoint": "fd85"
  },
  {
    "id": "transaction-yen",
    "codepoint": "fd72"
  },
  {
    "id": "transaction-yuan",
    "codepoint": "fd73"
  },
  {
    "id": "transfer",
    "codepoint": "fc1f"
  },
  {
    "id": "transfer-in",
    "codepoint": "ef2f"
  },
  {
    "id": "transfer-out",
    "codepoint": "ef30"
  },
  {
    "id": "transfer-vertical",
    "codepoint": "fc1e"
  },
  {
    "id": "transform",
    "codepoint": "f38e"
  },
  {
    "id": "transform-point",
    "codepoint": "fda9"
  },
  {
    "id": "transform-point-bottom-left",
    "codepoint": "fda5"
  },
  {
    "id": "transform-point-bottom-right",
    "codepoint": "fda6"
  },
  {
    "id": "transform-point-top-left",
    "codepoint": "fda7"
  },
  {
    "id": "transform-point-top-right",
    "codepoint": "fda8"
  },
  {
    "id": "transition-bottom",
    "codepoint": "f2b2"
  },
  {
    "id": "transition-left",
    "codepoint": "f2b3"
  },
  {
    "id": "transition-right",
    "codepoint": "f2b4"
  },
  {
    "id": "transition-top",
    "codepoint": "f2b5"
  },
  {
    "id": "trash",
    "codepoint": "eb41"
  },
  {
    "id": "trash-off",
    "codepoint": "ed65"
  },
  {
    "id": "trash-x",
    "codepoint": "ef88"
  },
  {
    "id": "treadmill",
    "codepoint": "fa6e"
  },
  {
    "id": "tree",
    "codepoint": "ef01"
  },
  {
    "id": "trees",
    "codepoint": "ec10"
  },
  {
    "id": "trekking",
    "codepoint": "f5ad"
  },
  {
    "id": "trending-down",
    "codepoint": "eb42"
  },
  {
    "id": "trending-down-2",
    "codepoint": "edc1"
  },
  {
    "id": "trending-down-3",
    "codepoint": "edc2"
  },
  {
    "id": "trending-up",
    "codepoint": "eb43"
  },
  {
    "id": "trending-up-2",
    "codepoint": "edc3"
  },
  {
    "id": "trending-up-3",
    "codepoint": "edc4"
  },
  {
    "id": "trending-up-down",
    "codepoint": "101fb"
  },
  {
    "id": "triangle",
    "codepoint": "eb44"
  },
  {
    "id": "triangle-inverted",
    "codepoint": "f01d"
  },
  {
    "id": "triangle-minus",
    "codepoint": "fc9b"
  },
  {
    "id": "triangle-minus-2",
    "codepoint": "fc9a"
  },
  {
    "id": "triangle-off",
    "codepoint": "ef02"
  },
  {
    "id": "triangle-plus",
    "codepoint": "fc9d"
  },
  {
    "id": "triangle-plus-2",
    "codepoint": "fc9c"
  },
  {
    "id": "triangle-square-circle",
    "codepoint": "ece8"
  },
  {
    "id": "triangles",
    "codepoint": "f0a5"
  },
  {
    "id": "trident",
    "codepoint": "ecc5"
  },
  {
    "id": "trolley",
    "codepoint": "f4cc"
  },
  {
    "id": "trophy",
    "codepoint": "eb45"
  },
  {
    "id": "trophy-off",
    "codepoint": "f438"
  },
  {
    "id": "trowel",
    "codepoint": "f368"
  },
  {
    "id": "truck",
    "codepoint": "ebc4"
  },
  {
    "id": "truck-delivery",
    "codepoint": "ec4b"
  },
  {
    "id": "truck-loading",
    "codepoint": "f1da"
  },
  {
    "id": "truck-off",
    "codepoint": "ef03"
  },
  {
    "id": "truck-return",
    "codepoint": "ec4c"
  },
  {
    "id": "txt",
    "codepoint": "f3b1"
  },
  {
    "id": "typeface",
    "codepoint": "fdab"
  },
  {
    "id": "typography",
    "codepoint": "ebc5"
  },
  {
    "id": "typography-off",
    "codepoint": "f1ba"
  },
  {
    "id": "u-turn-left",
    "codepoint": "fea2"
  },
  {
    "id": "u-turn-right",
    "codepoint": "fea1"
  },
  {
    "id": "ufo",
    "codepoint": "f26f"
  },
  {
    "id": "ufo-off",
    "codepoint": "f26e"
  },
  {
    "id": "uhd",
    "codepoint": "100aa"
  },
  {
    "id": "umbrella",
    "codepoint": "ebf1"
  },
  {
    "id": "umbrella-2",
    "codepoint": "ff0e"
  },
  {
    "id": "umbrella-closed",
    "codepoint": "ff0c"
  },
  {
    "id": "umbrella-closed-2",
    "codepoint": "ff0d"
  },
  {
    "id": "umbrella-off",
    "codepoint": "f1bb"
  },
  {
    "id": "underline",
    "codepoint": "eba2"
  },
  {
    "id": "underline-off",
    "codepoint": "10269"
  },
  {
    "id": "unicycle",
    "codepoint": "10244"
  },
  {
    "id": "universe",
    "codepoint": "fcc4"
  },
  {
    "id": "unlink",
    "codepoint": "eb46"
  },
  {
    "id": "upload",
    "codepoint": "eb47"
  },
  {
    "id": "urgent",
    "codepoint": "eb48"
  },
  {
    "id": "usb",
    "codepoint": "f00c"
  },
  {
    "id": "user",
    "codepoint": "eb4d"
  },
  {
    "id": "user-bitcoin",
    "codepoint": "ff30"
  },
  {
    "id": "user-bolt",
    "codepoint": "f9d1"
  },
  {
    "id": "user-cancel",
    "codepoint": "f9d2"
  },
  {
    "id": "user-check",
    "codepoint": "eb49"
  },
  {
    "id": "user-circle",
    "codepoint": "ef68"
  },
  {
    "id": "user-code",
    "codepoint": "f9d3"
  },
  {
    "id": "user-cog",
    "codepoint": "f9d4"
  },
  {
    "id": "user-dollar",
    "codepoint": "f9d5"
  },
  {
    "id": "user-down",
    "codepoint": "f9d6"
  },
  {
    "id": "user-edit",
    "codepoint": "f7cc"
  },
  {
    "id": "user-exclamation",
    "codepoint": "ec12"
  },
  {
    "id": "user-heart",
    "codepoint": "f7cd"
  },
  {
    "id": "user-hexagon",
    "codepoint": "fc4e"
  },
  {
    "id": "user-key",
    "codepoint": "101ea"
  },
  {
    "id": "user-minus",
    "codepoint": "eb4a"
  },
  {
    "id": "user-off",
    "codepoint": "ecf9"
  },
  {
    "id": "user-pause",
    "codepoint": "f9d7"
  },
  {
    "id": "user-pentagon",
    "codepoint": "fc4f"
  },
  {
    "id": "user-pin",
    "codepoint": "f7ce"
  },
  {
    "id": "user-plus",
    "codepoint": "eb4b"
  },
  {
    "id": "user-question",
    "codepoint": "f7cf"
  },
  {
    "id": "user-scan",
    "codepoint": "fcaf"
  },
  {
    "id": "user-screen",
    "codepoint": "fea0"
  },
  {
    "id": "user-search",
    "codepoint": "ef89"
  },
  {
    "id": "user-share",
    "codepoint": "f9d8"
  },
  {
    "id": "user-shield",
    "codepoint": "f7d0"
  },
  {
    "id": "user-square",
    "codepoint": "fc51"
  },
  {
    "id": "user-square-rounded",
    "codepoint": "fc50"
  },
  {
    "id": "user-star",
    "codepoint": "f7d1"
  },
  {
    "id": "user-up",
    "codepoint": "f7d2"
  },
  {
    "id": "user-x",
    "codepoint": "eb4c"
  },
  {
    "id": "users",
    "codepoint": "ebf2"
  },
  {
    "id": "users-group",
    "codepoint": "fa21"
  },
  {
    "id": "users-minus",
    "codepoint": "fa0e"
  },
  {
    "id": "users-plus",
    "codepoint": "fa0f"
  },
  {
    "id": "uv-index",
    "codepoint": "f3b2"
  },
  {
    "id": "ux-circle",
    "codepoint": "f369"
  },
  {
    "id": "vaccine",
    "codepoint": "ef04"
  },
  {
    "id": "vaccine-bottle",
    "codepoint": "ef69"
  },
  {
    "id": "vaccine-bottle-off",
    "codepoint": "f439"
  },
  {
    "id": "vaccine-off",
    "codepoint": "f1bc"
  },
  {
    "id": "vacuum-cleaner",
    "codepoint": "f5e6"
  },
  {
    "id": "variable",
    "codepoint": "ef05"
  },
  {
    "id": "variable-minus",
    "codepoint": "f36a"
  },
  {
    "id": "variable-off",
    "codepoint": "f1bd"
  },
  {
    "id": "variable-plus",
    "codepoint": "f36b"
  },
  {
    "id": "vector",
    "codepoint": "eca9"
  },
  {
    "id": "vector-bezier",
    "codepoint": "ef1d"
  },
  {
    "id": "vector-bezier-2",
    "codepoint": "f1a3"
  },
  {
    "id": "vector-bezier-arc",
    "codepoint": "f4cd"
  },
  {
    "id": "vector-bezier-circle",
    "codepoint": "f4ce"
  },
  {
    "id": "vector-off",
    "codepoint": "f1be"
  },
  {
    "id": "vector-spline",
    "codepoint": "f565"
  },
  {
    "id": "vector-triangle",
    "codepoint": "eca8"
  },
  {
    "id": "vector-triangle-off",
    "codepoint": "f1bf"
  },
  {
    "id": "venus",
    "codepoint": "ec86"
  },
  {
    "id": "versions",
    "codepoint": "ed52"
  },
  {
    "id": "versions-off",
    "codepoint": "f1c0"
  },
  {
    "id": "video",
    "codepoint": "ed22"
  },
  {
    "id": "video-minus",
    "codepoint": "ed1f"
  },
  {
    "id": "video-off",
    "codepoint": "ed20"
  },
  {
    "id": "video-plus",
    "codepoint": "ed21"
  },
  {
    "id": "view-360",
    "codepoint": "ed84"
  },
  {
    "id": "view-360-arrow",
    "codepoint": "f62f"
  },
  {
    "id": "view-360-number",
    "codepoint": "f566"
  },
  {
    "id": "view-360-off",
    "codepoint": "f1c1"
  },
  {
    "id": "viewfinder",
    "codepoint": "eb4e"
  },
  {
    "id": "viewfinder-off",
    "codepoint": "f1c2"
  },
  {
    "id": "viewport-narrow",
    "codepoint": "ebf3"
  },
  {
    "id": "viewport-short",
    "codepoint": "fee9"
  },
  {
    "id": "viewport-tall",
    "codepoint": "fee8"
  },
  {
    "id": "viewport-wide",
    "codepoint": "ebf4"
  },
  {
    "id": "vignette",
    "codepoint": "10256"
  },
  {
    "id": "vinyl",
    "codepoint": "f00d"
  },
  {
    "id": "vip",
    "codepoint": "f3b3"
  },
  {
    "id": "vip-2",
    "codepoint": "101fa"
  },
  {
    "id": "vip-off",
    "codepoint": "f43a"
  },
  {
    "id": "virtual-space",
    "codepoint": "10268"
  },
  {
    "id": "virus",
    "codepoint": "eb74"
  },
  {
    "id": "virus-off",
    "codepoint": "ed66"
  },
  {
    "id": "virus-search",
    "codepoint": "ed67"
  },
  {
    "id": "vocabulary",
    "codepoint": "ef1e"
  },
  {
    "id": "vocabulary-off",
    "codepoint": "f43b"
  },
  {
    "id": "volcano",
    "codepoint": "f79c"
  },
  {
    "id": "volume",
    "codepoint": "eb51"
  },
  {
    "id": "volume-2",
    "codepoint": "eb4f"
  },
  {
    "id": "volume-3",
    "codepoint": "eb50"
  },
  {
    "id": "volume-4",
    "codepoint": "1019d"
  },
  {
    "id": "volume-off",
    "codepoint": "f1c3"
  },
  {
    "id": "vs",
    "codepoint": "fc52"
  },
  {
    "id": "walk",
    "codepoint": "ec87"
  },
  {
    "id": "wall",
    "codepoint": "ef7a"
  },
  {
    "id": "wall-off",
    "codepoint": "f43c"
  },
  {
    "id": "wallet",
    "codepoint": "eb75"
  },
  {
    "id": "wallet-off",
    "codepoint": "f1c4"
  },
  {
    "id": "wallpaper",
    "codepoint": "ef56"
  },
  {
    "id": "wallpaper-off",
    "codepoint": "f1c5"
  },
  {
    "id": "wand",
    "codepoint": "ebcb"
  },
  {
    "id": "wand-off",
    "codepoint": "f1c6"
  },
  {
    "id": "wash",
    "codepoint": "f311"
  },
  {
    "id": "wash-dry",
    "codepoint": "f304"
  },
  {
    "id": "wash-dry-1",
    "codepoint": "f2fa"
  },
  {
    "id": "wash-dry-2",
    "codepoint": "f2fb"
  },
  {
    "id": "wash-dry-3",
    "codepoint": "f2fc"
  },
  {
    "id": "wash-dry-a",
    "codepoint": "f2fd"
  },
  {
    "id": "wash-dry-dip",
    "codepoint": "f2fe"
  },
  {
    "id": "wash-dry-f",
    "codepoint": "f2ff"
  },
  {
    "id": "wash-dry-flat",
    "codepoint": "fa7f"
  },
  {
    "id": "wash-dry-hang",
    "codepoint": "f300"
  },
  {
    "id": "wash-dry-off",
    "codepoint": "f301"
  },
  {
    "id": "wash-dry-p",
    "codepoint": "f302"
  },
  {
    "id": "wash-dry-shade",
    "codepoint": "f303"
  },
  {
    "id": "wash-dry-w",
    "codepoint": "f322"
  },
  {
    "id": "wash-dryclean",
    "codepoint": "f305"
  },
  {
    "id": "wash-dryclean-off",
    "codepoint": "f323"
  },
  {
    "id": "wash-eco",
    "codepoint": "fa80"
  },
  {
    "id": "wash-gentle",
    "codepoint": "f306"
  },
  {
    "id": "wash-hand",
    "codepoint": "fa81"
  },
  {
    "id": "wash-machine",
    "codepoint": "f25e"
  },
  {
    "id": "wash-off",
    "codepoint": "f307"
  },
  {
    "id": "wash-press",
    "codepoint": "f308"
  },
  {
    "id": "wash-temperature-1",
    "codepoint": "f309"
  },
  {
    "id": "wash-temperature-2",
    "codepoint": "f30a"
  },
  {
    "id": "wash-temperature-3",
    "codepoint": "f30b"
  },
  {
    "id": "wash-temperature-4",
    "codepoint": "f30c"
  },
  {
    "id": "wash-temperature-5",
    "codepoint": "f30d"
  },
  {
    "id": "wash-temperature-6",
    "codepoint": "f30e"
  },
  {
    "id": "wash-tumble-dry",
    "codepoint": "f30f"
  },
  {
    "id": "wash-tumble-off",
    "codepoint": "f310"
  },
  {
    "id": "waterpolo",
    "codepoint": "fa6f"
  },
  {
    "id": "wave-saw-tool",
    "codepoint": "ecd3"
  },
  {
    "id": "wave-sine",
    "codepoint": "ecd4"
  },
  {
    "id": "wave-square",
    "codepoint": "ecd5"
  },
  {
    "id": "waves-electricity",
    "codepoint": "fcc5"
  },
  {
    "id": "webhook",
    "codepoint": "f01e"
  },
  {
    "id": "webhook-off",
    "codepoint": "f43d"
  },
  {
    "id": "weight",
    "codepoint": "f589"
  },
  {
    "id": "wheat",
    "codepoint": "100a8"
  },
  {
    "id": "wheat-off",
    "codepoint": "100a9"
  },
  {
    "id": "wheel",
    "codepoint": "fc64"
  },
  {
    "id": "wheelchair",
    "codepoint": "f1db"
  },
  {
    "id": "wheelchair-off",
    "codepoint": "f43e"
  },
  {
    "id": "whirl",
    "codepoint": "f51d"
  },
  {
    "id": "whisk",
    "codepoint": "101a0"
  },
  {
    "id": "wifi",
    "codepoint": "eb52"
  },
  {
    "id": "wifi-0",
    "codepoint": "eba3"
  },
  {
    "id": "wifi-1",
    "codepoint": "eba4"
  },
  {
    "id": "wifi-2",
    "codepoint": "eba5"
  },
  {
    "id": "wifi-off",
    "codepoint": "ecfa"
  },
  {
    "id": "wind",
    "codepoint": "ec34"
  },
  {
    "id": "wind-electricity",
    "codepoint": "fcc6"
  },
  {
    "id": "wind-off",
    "codepoint": "f1c7"
  },
  {
    "id": "windmill",
    "codepoint": "ed85"
  },
  {
    "id": "windmill-off",
    "codepoint": "f1c8"
  },
  {
    "id": "window",
    "codepoint": "ef06"
  },
  {
    "id": "window-maximize",
    "codepoint": "f1f1"
  },
  {
    "id": "window-minimize",
    "codepoint": "f1f2"
  },
  {
    "id": "window-off",
    "codepoint": "f1c9"
  },
  {
    "id": "windsock",
    "codepoint": "f06d"
  },
  {
    "id": "wiper",
    "codepoint": "ecab"
  },
  {
    "id": "wiper-wash",
    "codepoint": "ecaa"
  },
  {
    "id": "woman",
    "codepoint": "eb53"
  },
  {
    "id": "wood",
    "codepoint": "f359"
  },
  {
    "id": "world",
    "codepoint": "eb54"
  },
  {
    "id": "world-bolt",
    "codepoint": "f9d9"
  },
  {
    "id": "world-cancel",
    "codepoint": "f9da"
  },
  {
    "id": "world-check",
    "codepoint": "f9db"
  },
  {
    "id": "world-code",
    "codepoint": "f9dc"
  },
  {
    "id": "world-cog",
    "codepoint": "f9dd"
  },
  {
    "id": "world-dollar",
    "codepoint": "f9de"
  },
  {
    "id": "world-down",
    "codepoint": "f9df"
  },
  {
    "id": "world-download",
    "codepoint": "ef8a"
  },
  {
    "id": "world-exclamation",
    "codepoint": "f9e0"
  },
  {
    "id": "world-heart",
    "codepoint": "f9e1"
  },
  {
    "id": "world-latitude",
    "codepoint": "ed2e"
  },
  {
    "id": "world-longitude",
    "codepoint": "ed2f"
  },
  {
    "id": "world-map",
    "codepoint": "101e9"
  },
  {
    "id": "world-minus",
    "codepoint": "f9e2"
  },
  {
    "id": "world-off",
    "codepoint": "f1ca"
  },
  {
    "id": "world-pause",
    "codepoint": "f9e3"
  },
  {
    "id": "world-pin",
    "codepoint": "f9e4"
  },
  {
    "id": "world-plus",
    "codepoint": "f9e5"
  },
  {
    "id": "world-question",
    "codepoint": "f9e6"
  },
  {
    "id": "world-search",
    "codepoint": "f9e7"
  },
  {
    "id": "world-share",
    "codepoint": "f9e8"
  },
  {
    "id": "world-star",
    "codepoint": "f9e9"
  },
  {
    "id": "world-up",
    "codepoint": "f9ea"
  },
  {
    "id": "world-upload",
    "codepoint": "ef8b"
  },
  {
    "id": "world-www",
    "codepoint": "f38f"
  },
  {
    "id": "world-x",
    "codepoint": "f9eb"
  },
  {
    "id": "wrecking-ball",
    "codepoint": "ed97"
  },
  {
    "id": "writing",
    "codepoint": "ef08"
  },
  {
    "id": "writing-off",
    "codepoint": "f1cb"
  },
  {
    "id": "writing-sign",
    "codepoint": "ef07"
  },
  {
    "id": "writing-sign-off",
    "codepoint": "f1cc"
  },
  {
    "id": "x",
    "codepoint": "eb55"
  },
  {
    "id": "x-mark",
    "codepoint": "10220"
  },
  {
    "id": "x-power-y",
    "codepoint": "10072"
  },
  {
    "id": "xbox-a",
    "codepoint": "f2b6"
  },
  {
    "id": "xbox-b",
    "codepoint": "f2b7"
  },
  {
    "id": "xbox-x",
    "codepoint": "f2b8"
  },
  {
    "id": "xbox-y",
    "codepoint": "f2b9"
  },
  {
    "id": "xd",
    "codepoint": "fa33"
  },
  {
    "id": "xxx",
    "codepoint": "fc20"
  },
  {
    "id": "yin-yang",
    "codepoint": "ec35"
  },
  {
    "id": "yoga",
    "codepoint": "f01f"
  },
  {
    "id": "zeppelin",
    "codepoint": "f270"
  },
  {
    "id": "zeppelin-off",
    "codepoint": "f43f"
  },
  {
    "id": "zero-config",
    "codepoint": "101e8"
  },
  {
    "id": "zip",
    "codepoint": "f3b4"
  },
  {
    "id": "zodiac-aquarius",
    "codepoint": "ecac"
  },
  {
    "id": "zodiac-aries",
    "codepoint": "ecad"
  },
  {
    "id": "zodiac-cancer",
    "codepoint": "ecae"
  },
  {
    "id": "zodiac-capricorn",
    "codepoint": "ecaf"
  },
  {
    "id": "zodiac-gemini",
    "codepoint": "ecb0"
  },
  {
    "id": "zodiac-leo",
    "codepoint": "ecb1"
  },
  {
    "id": "zodiac-libra",
    "codepoint": "ecb2"
  },
  {
    "id": "zodiac-pisces",
    "codepoint": "ecb3"
  },
  {
    "id": "zodiac-sagittarius",
    "codepoint": "ecb4"
  },
  {
    "id": "zodiac-scorpio",
    "codepoint": "ecb5"
  },
  {
    "id": "zodiac-taurus",
    "codepoint": "ecb6"
  },
  {
    "id": "zodiac-virgo",
    "codepoint": "ecb7"
  },
  {
    "id": "zoom",
    "codepoint": "fdaa"
  },
  {
    "id": "zoom-cancel",
    "codepoint": "ec4d"
  },
  {
    "id": "zoom-check",
    "codepoint": "ef09"
  },
  {
    "id": "zoom-code",
    "codepoint": "f07f"
  },
  {
    "id": "zoom-exclamation",
    "codepoint": "f080"
  },
  {
    "id": "zoom-in",
    "codepoint": "eb56"
  },
  {
    "id": "zoom-in-area",
    "codepoint": "f1dc"
  },
  {
    "id": "zoom-money",
    "codepoint": "ef0a"
  },
  {
    "id": "zoom-out",
    "codepoint": "eb57"
  },
  {
    "id": "zoom-out-area",
    "codepoint": "f1dd"
  },
  {
    "id": "zoom-pan",
    "codepoint": "f1de"
  },
  {
    "id": "zoom-question",
    "codepoint": "edeb"
  },
  {
    "id": "zoom-replace",
    "codepoint": "f2a7"
  },
  {
    "id": "zoom-reset",
    "codepoint": "f295"
  },
  {
    "id": "zoom-scan",
    "codepoint": "fcb0"
  },
  {
    "id": "zzz",
    "codepoint": "f228"
  },
  {
    "id": "zzz-off",
    "codepoint": "f440"
  }
];
var TABLER_FILLED_ICONS = [
  {
    "id": "accessible",
    "codepoint": "f6ea"
  },
  {
    "id": "ad",
    "codepoint": "f6eb"
  },
  {
    "id": "ad-circle",
    "codepoint": "f7d3"
  },
  {
    "id": "adjustments",
    "codepoint": "f6ec"
  },
  {
    "id": "adjustments-horizontal",
    "codepoint": "101e7"
  },
  {
    "id": "aerial-lift",
    "codepoint": "10101"
  },
  {
    "id": "affiliate",
    "codepoint": "f6ed"
  },
  {
    "id": "air-balloon",
    "codepoint": "10100"
  },
  {
    "id": "alarm",
    "codepoint": "f709"
  },
  {
    "id": "alarm-minus",
    "codepoint": "f70a"
  },
  {
    "id": "alarm-plus",
    "codepoint": "f70b"
  },
  {
    "id": "alarm-snooze",
    "codepoint": "f70c"
  },
  {
    "id": "alert-circle",
    "codepoint": "f6ee"
  },
  {
    "id": "alert-hexagon",
    "codepoint": "fa34"
  },
  {
    "id": "alert-octagon",
    "codepoint": "f6ef"
  },
  {
    "id": "alert-square",
    "codepoint": "fa35"
  },
  {
    "id": "alert-square-rounded",
    "codepoint": "fa36"
  },
  {
    "id": "alert-triangle",
    "codepoint": "f6f0"
  },
  {
    "id": "alien",
    "codepoint": "f70d"
  },
  {
    "id": "align-box-bottom-center",
    "codepoint": "f70e"
  },
  {
    "id": "align-box-bottom-left",
    "codepoint": "f70f"
  },
  {
    "id": "align-box-bottom-right",
    "codepoint": "f710"
  },
  {
    "id": "align-box-center-middle",
    "codepoint": "f7d4"
  },
  {
    "id": "align-box-left-bottom",
    "codepoint": "f711"
  },
  {
    "id": "align-box-left-middle",
    "codepoint": "f712"
  },
  {
    "id": "align-box-left-top",
    "codepoint": "f713"
  },
  {
    "id": "align-box-right-bottom",
    "codepoint": "f714"
  },
  {
    "id": "align-box-right-middle",
    "codepoint": "f7d5"
  },
  {
    "id": "align-box-right-top",
    "codepoint": "f715"
  },
  {
    "id": "align-box-top-center",
    "codepoint": "f716"
  },
  {
    "id": "align-box-top-left",
    "codepoint": "f717"
  },
  {
    "id": "align-box-top-right",
    "codepoint": "f718"
  },
  {
    "id": "analyze",
    "codepoint": "f719"
  },
  {
    "id": "app-window",
    "codepoint": "f71a"
  },
  {
    "id": "apple",
    "codepoint": "10017"
  },
  {
    "id": "apps",
    "codepoint": "f6f1"
  },
  {
    "id": "archive",
    "codepoint": "fa82"
  },
  {
    "id": "arrow-autofit-content",
    "codepoint": "f6f2"
  },
  {
    "id": "arrow-autofit-down",
    "codepoint": "10113"
  },
  {
    "id": "arrow-autofit-height",
    "codepoint": "10112"
  },
  {
    "id": "arrow-autofit-left",
    "codepoint": "10111"
  },
  {
    "id": "arrow-autofit-right",
    "codepoint": "10110"
  },
  {
    "id": "arrow-autofit-up",
    "codepoint": "1010f"
  },
  {
    "id": "arrow-autofit-width",
    "codepoint": "1010e"
  },
  {
    "id": "arrow-badge-down",
    "codepoint": "f7d6"
  },
  {
    "id": "arrow-badge-left",
    "codepoint": "f7d7"
  },
  {
    "id": "arrow-badge-right",
    "codepoint": "f7d8"
  },
  {
    "id": "arrow-badge-up",
    "codepoint": "f7d9"
  },
  {
    "id": "arrow-big-down",
    "codepoint": "f6c6"
  },
  {
    "id": "arrow-big-down-line",
    "codepoint": "f6c7"
  },
  {
    "id": "arrow-big-down-lines",
    "codepoint": "f6c8"
  },
  {
    "id": "arrow-big-left",
    "codepoint": "f6c9"
  },
  {
    "id": "arrow-big-left-line",
    "codepoint": "f6ca"
  },
  {
    "id": "arrow-big-left-lines",
    "codepoint": "f6cb"
  },
  {
    "id": "arrow-big-right",
    "codepoint": "f6cc"
  },
  {
    "id": "arrow-big-right-line",
    "codepoint": "f6cd"
  },
  {
    "id": "arrow-big-right-lines",
    "codepoint": "f6ce"
  },
  {
    "id": "arrow-big-up",
    "codepoint": "f6cf"
  },
  {
    "id": "arrow-big-up-line",
    "codepoint": "f6d0"
  },
  {
    "id": "arrow-big-up-lines",
    "codepoint": "f6d1"
  },
  {
    "id": "arrow-down-circle",
    "codepoint": "1003b"
  },
  {
    "id": "arrow-down-rhombus",
    "codepoint": "1003a"
  },
  {
    "id": "arrow-down-square",
    "codepoint": "10039"
  },
  {
    "id": "arrow-guide",
    "codepoint": "10038"
  },
  {
    "id": "arrow-left-circle",
    "codepoint": "10037"
  },
  {
    "id": "arrow-left-rhombus",
    "codepoint": "10036"
  },
  {
    "id": "arrow-left-square",
    "codepoint": "10035"
  },
  {
    "id": "arrow-move-down",
    "codepoint": "10034"
  },
  {
    "id": "arrow-move-left",
    "codepoint": "10033"
  },
  {
    "id": "arrow-move-right",
    "codepoint": "10032"
  },
  {
    "id": "arrow-move-up",
    "codepoint": "10031"
  },
  {
    "id": "arrow-right-circle",
    "codepoint": "10030"
  },
  {
    "id": "arrow-right-rhombus",
    "codepoint": "1002f"
  },
  {
    "id": "arrow-right-square",
    "codepoint": "1002e"
  },
  {
    "id": "arrow-up-circle",
    "codepoint": "1002d"
  },
  {
    "id": "arrow-up-rhombus",
    "codepoint": "1002c"
  },
  {
    "id": "arrow-up-square",
    "codepoint": "1002b"
  },
  {
    "id": "artboard",
    "codepoint": "fa83"
  },
  {
    "id": "article",
    "codepoint": "f7da"
  },
  {
    "id": "aspect-ratio",
    "codepoint": "f7db"
  },
  {
    "id": "assembly",
    "codepoint": "fe9e"
  },
  {
    "id": "asset",
    "codepoint": "fe9d"
  },
  {
    "id": "atom-2",
    "codepoint": "f71b"
  },
  {
    "id": "automatic-gearbox",
    "codepoint": "1002a"
  },
  {
    "id": "award",
    "codepoint": "f71c"
  },
  {
    "id": "baby-carriage",
    "codepoint": "fe9c"
  },
  {
    "id": "backspace",
    "codepoint": "f7dc"
  },
  {
    "id": "badge",
    "codepoint": "f667"
  },
  {
    "id": "badge-3d",
    "codepoint": "fe9b"
  },
  {
    "id": "badge-4k",
    "codepoint": "fe9a"
  },
  {
    "id": "badge-8k",
    "codepoint": "fe99"
  },
  {
    "id": "badge-ad",
    "codepoint": "fe98"
  },
  {
    "id": "badge-ar",
    "codepoint": "fe97"
  },
  {
    "id": "badge-cc",
    "codepoint": "fe96"
  },
  {
    "id": "badge-hd",
    "codepoint": "fe95"
  },
  {
    "id": "badge-sd",
    "codepoint": "fe94"
  },
  {
    "id": "badge-tm",
    "codepoint": "fe93"
  },
  {
    "id": "badge-vo",
    "codepoint": "fe92"
  },
  {
    "id": "badge-vr",
    "codepoint": "fe91"
  },
  {
    "id": "badge-wc",
    "codepoint": "fe90"
  },
  {
    "id": "badges",
    "codepoint": "f7dd"
  },
  {
    "id": "ball-bowling",
    "codepoint": "101c5"
  },
  {
    "id": "balloon",
    "codepoint": "fa84"
  },
  {
    "id": "ballpen",
    "codepoint": "fa85"
  },
  {
    "id": "bandage",
    "codepoint": "f7de"
  },
  {
    "id": "barbell",
    "codepoint": "fe8f"
  },
  {
    "id": "barrier-block",
    "codepoint": "fe8e"
  },
  {
    "id": "basket",
    "codepoint": "f7df"
  },
  {
    "id": "bath",
    "codepoint": "f71d"
  },
  {
    "id": "battery",
    "codepoint": "f668"
  },
  {
    "id": "battery-1",
    "codepoint": "f71e"
  },
  {
    "id": "battery-2",
    "codepoint": "f71f"
  },
  {
    "id": "battery-3",
    "codepoint": "f720"
  },
  {
    "id": "battery-4",
    "codepoint": "f721"
  },
  {
    "id": "battery-automotive",
    "codepoint": "10029"
  },
  {
    "id": "battery-vertical",
    "codepoint": "10024"
  },
  {
    "id": "battery-vertical-1",
    "codepoint": "10028"
  },
  {
    "id": "battery-vertical-2",
    "codepoint": "10027"
  },
  {
    "id": "battery-vertical-3",
    "codepoint": "10026"
  },
  {
    "id": "battery-vertical-4",
    "codepoint": "10025"
  },
  {
    "id": "bed",
    "codepoint": "f7e0"
  },
  {
    "id": "bed-flat",
    "codepoint": "fe8d"
  },
  {
    "id": "beer",
    "codepoint": "f7e1"
  },
  {
    "id": "bell",
    "codepoint": "f669"
  },
  {
    "id": "bell-minus",
    "codepoint": "f722"
  },
  {
    "id": "bell-plus",
    "codepoint": "f723"
  },
  {
    "id": "bell-ringing",
    "codepoint": "f725"
  },
  {
    "id": "bell-ringing-2",
    "codepoint": "f724"
  },
  {
    "id": "bell-x",
    "codepoint": "f726"
  },
  {
    "id": "bell-z",
    "codepoint": "f727"
  },
  {
    "id": "bike",
    "codepoint": "10023"
  },
  {
    "id": "binary-tree",
    "codepoint": "ff64"
  },
  {
    "id": "binary-tree-2",
    "codepoint": "ff65"
  },
  {
    "id": "binoculars",
    "codepoint": "ff0b"
  },
  {
    "id": "biohazard",
    "codepoint": "fe8c"
  },
  {
    "id": "blade",
    "codepoint": "f7e2"
  },
  {
    "id": "blender",
    "codepoint": "10022"
  },
  {
    "id": "blob",
    "codepoint": "feb1"
  },
  {
    "id": "bolt",
    "codepoint": "10021"
  },
  {
    "id": "bomb",
    "codepoint": "fa86"
  },
  {
    "id": "bone",
    "codepoint": "fe8b"
  },
  {
    "id": "bong",
    "codepoint": "10020"
  },
  {
    "id": "book",
    "codepoint": "fa87"
  },
  {
    "id": "bookmark",
    "codepoint": "fa88"
  },
  {
    "id": "bookmarks",
    "codepoint": "fb1f"
  },
  {
    "id": "boom",
    "codepoint": "fe8a"
  },
  {
    "id": "bottle",
    "codepoint": "fa89"
  },
  {
    "id": "bounce-left",
    "codepoint": "fb20"
  },
  {
    "id": "bounce-right",
    "codepoint": "fb21"
  },
  {
    "id": "bow",
    "codepoint": "fe89"
  },
  {
    "id": "bowl",
    "codepoint": "fb22"
  },
  {
    "id": "bowl-chopsticks",
    "codepoint": "fe88"
  },
  {
    "id": "bowl-spoon",
    "codepoint": "fe87"
  },
  {
    "id": "box-align-bottom",
    "codepoint": "fa8a"
  },
  {
    "id": "box-align-bottom-left",
    "codepoint": "fa8b"
  },
  {
    "id": "box-align-bottom-right",
    "codepoint": "fa8c"
  },
  {
    "id": "box-align-left",
    "codepoint": "fa8d"
  },
  {
    "id": "box-align-right",
    "codepoint": "fa8e"
  },
  {
    "id": "box-align-top",
    "codepoint": "fa8f"
  },
  {
    "id": "box-align-top-left",
    "codepoint": "fa90"
  },
  {
    "id": "box-align-top-right",
    "codepoint": "fa91"
  },
  {
    "id": "box-multiple",
    "codepoint": "1001f"
  },
  {
    "id": "brand-angular",
    "codepoint": "10095"
  },
  {
    "id": "brand-apple",
    "codepoint": "fd74"
  },
  {
    "id": "brand-bitbucket",
    "codepoint": "100cb"
  },
  {
    "id": "brand-discord",
    "codepoint": "f7e4"
  },
  {
    "id": "brand-dribbble",
    "codepoint": "f7e5"
  },
  {
    "id": "brand-facebook",
    "codepoint": "f7e6"
  },
  {
    "id": "brand-github",
    "codepoint": "f7e7"
  },
  {
    "id": "brand-google",
    "codepoint": "fd1a"
  },
  {
    "id": "brand-instagram",
    "codepoint": "10094"
  },
  {
    "id": "brand-kick",
    "codepoint": "10093"
  },
  {
    "id": "brand-linkedin",
    "codepoint": "10092"
  },
  {
    "id": "brand-messenger",
    "codepoint": "100a7"
  },
  {
    "id": "brand-open-source",
    "codepoint": "10091"
  },
  {
    "id": "brand-opera",
    "codepoint": "10090"
  },
  {
    "id": "brand-patreon",
    "codepoint": "fcff"
  },
  {
    "id": "brand-paypal",
    "codepoint": "f7e9"
  },
  {
    "id": "brand-pinterest",
    "codepoint": "1008f"
  },
  {
    "id": "brand-signal",
    "codepoint": "1027b"
  },
  {
    "id": "brand-sketch",
    "codepoint": "1008e"
  },
  {
    "id": "brand-snapchat",
    "codepoint": "1008d"
  },
  {
    "id": "brand-spotify",
    "codepoint": "fe86"
  },
  {
    "id": "brand-steam",
    "codepoint": "1008c"
  },
  {
    "id": "brand-stripe",
    "codepoint": "1008b"
  },
  {
    "id": "brand-tabler",
    "codepoint": "1008a"
  },
  {
    "id": "brand-tiktok",
    "codepoint": "f7ea"
  },
  {
    "id": "brand-tinder",
    "codepoint": "10089"
  },
  {
    "id": "brand-tumblr",
    "codepoint": "10088"
  },
  {
    "id": "brand-twitter",
    "codepoint": "f7eb"
  },
  {
    "id": "brand-vercel",
    "codepoint": "10087"
  },
  {
    "id": "brand-vimeo",
    "codepoint": "10086"
  },
  {
    "id": "brand-weibo",
    "codepoint": "100a6"
  },
  {
    "id": "brand-whatsapp",
    "codepoint": "10085"
  },
  {
    "id": "brand-windows",
    "codepoint": "10084"
  },
  {
    "id": "brand-x",
    "codepoint": "fc21"
  },
  {
    "id": "brand-youtube",
    "codepoint": "fc22"
  },
  {
    "id": "bread",
    "codepoint": "fe85"
  },
  {
    "id": "briefcase",
    "codepoint": "fd00"
  },
  {
    "id": "briefcase-2",
    "codepoint": "fe84"
  },
  {
    "id": "brightness",
    "codepoint": "fe82"
  },
  {
    "id": "brightness-auto",
    "codepoint": "fe83"
  },
  {
    "id": "brightness-down",
    "codepoint": "fb23"
  },
  {
    "id": "brightness-up",
    "codepoint": "fb24"
  },
  {
    "id": "bubble",
    "codepoint": "fec3"
  },
  {
    "id": "bubble-text",
    "codepoint": "100a5"
  },
  {
    "id": "bug",
    "codepoint": "fd01"
  },
  {
    "id": "building-bridge-2",
    "codepoint": "10189"
  },
  {
    "id": "building-broadcast-tower",
    "codepoint": "fe81"
  },
  {
    "id": "bulb",
    "codepoint": "f66a"
  },
  {
    "id": "bus",
    "codepoint": "100ff"
  },
  {
    "id": "butterfly",
    "codepoint": "10016"
  },
  {
    "id": "cactus",
    "codepoint": "fb25"
  },
  {
    "id": "calculator",
    "codepoint": "fb26"
  },
  {
    "id": "calendar",
    "codepoint": "fb27"
  },
  {
    "id": "calendar-event",
    "codepoint": "100b9"
  },
  {
    "id": "calendar-month",
    "codepoint": "100b8"
  },
  {
    "id": "calendar-week",
    "codepoint": "100b7"
  },
  {
    "id": "camera",
    "codepoint": "fa37"
  },
  {
    "id": "campfire",
    "codepoint": "fb28"
  },
  {
    "id": "candle",
    "codepoint": "fc23"
  },
  {
    "id": "cannabis",
    "codepoint": "10015"
  },
  {
    "id": "capsule",
    "codepoint": "fc24"
  },
  {
    "id": "capsule-horizontal",
    "codepoint": "fc25"
  },
  {
    "id": "capture",
    "codepoint": "fb29"
  },
  {
    "id": "car",
    "codepoint": "1004c"
  },
  {
    "id": "car-4wd",
    "codepoint": "1001e"
  },
  {
    "id": "car-crane",
    "codepoint": "100fe"
  },
  {
    "id": "car-fan",
    "codepoint": "1001d"
  },
  {
    "id": "car-suv",
    "codepoint": "1004d"
  },
  {
    "id": "carambola",
    "codepoint": "10014"
  },
  {
    "id": "caravan",
    "codepoint": "100fd"
  },
  {
    "id": "cardboards",
    "codepoint": "1001c"
  },
  {
    "id": "cards",
    "codepoint": "fc26"
  },
  {
    "id": "caret-down",
    "codepoint": "fb2a"
  },
  {
    "id": "caret-left",
    "codepoint": "fb2b"
  },
  {
    "id": "caret-left-right",
    "codepoint": "fd02"
  },
  {
    "id": "caret-right",
    "codepoint": "fb2c"
  },
  {
    "id": "caret-up",
    "codepoint": "fb2d"
  },
  {
    "id": "caret-up-down",
    "codepoint": "fd03"
  },
  {
    "id": "carousel-horizontal",
    "codepoint": "fa92"
  },
  {
    "id": "carousel-vertical",
    "codepoint": "fa93"
  },
  {
    "id": "cash-banknote",
    "codepoint": "fe80"
  },
  {
    "id": "category",
    "codepoint": "fb2e"
  },
  {
    "id": "charging-pile",
    "codepoint": "1001b"
  },
  {
    "id": "chart-area",
    "codepoint": "f66b"
  },
  {
    "id": "chart-area-line",
    "codepoint": "f66c"
  },
  {
    "id": "chart-bubble",
    "codepoint": "f66d"
  },
  {
    "id": "chart-candle",
    "codepoint": "f66e"
  },
  {
    "id": "chart-donut",
    "codepoint": "f66f"
  },
  {
    "id": "chart-dots",
    "codepoint": "fd04"
  },
  {
    "id": "chart-dots-2",
    "codepoint": "100dd"
  },
  {
    "id": "chart-dots-3",
    "codepoint": "100dc"
  },
  {
    "id": "chart-funnel",
    "codepoint": "100db"
  },
  {
    "id": "chart-grid-dots",
    "codepoint": "fd05"
  },
  {
    "id": "chart-pie",
    "codepoint": "f670"
  },
  {
    "id": "chart-pie-2",
    "codepoint": "100da"
  },
  {
    "id": "chart-pie-3",
    "codepoint": "100d9"
  },
  {
    "id": "chart-pie-4",
    "codepoint": "100d8"
  },
  {
    "id": "check",
    "codepoint": "101e6"
  },
  {
    "id": "chef-hat",
    "codepoint": "100d7"
  },
  {
    "id": "cherry",
    "codepoint": "f728"
  },
  {
    "id": "chess",
    "codepoint": "f72a"
  },
  {
    "id": "chess-bishop",
    "codepoint": "f729"
  },
  {
    "id": "chess-king",
    "codepoint": "f72b"
  },
  {
    "id": "chess-knight",
    "codepoint": "f72c"
  },
  {
    "id": "chess-queen",
    "codepoint": "f72d"
  },
  {
    "id": "chess-rook",
    "codepoint": "f72e"
  },
  {
    "id": "chevron-down",
    "codepoint": "101e5"
  },
  {
    "id": "chevron-right",
    "codepoint": "101e4"
  },
  {
    "id": "christmas-tree",
    "codepoint": "1001a"
  },
  {
    "id": "circle",
    "codepoint": "f671"
  },
  {
    "id": "circle-arrow-down",
    "codepoint": "f6f4"
  },
  {
    "id": "circle-arrow-down-left",
    "codepoint": "f6f5"
  },
  {
    "id": "circle-arrow-down-right",
    "codepoint": "f6f7"
  },
  {
    "id": "circle-arrow-left",
    "codepoint": "f6fa"
  },
  {
    "id": "circle-arrow-right",
    "codepoint": "f6fc"
  },
  {
    "id": "circle-arrow-up",
    "codepoint": "f6fe"
  },
  {
    "id": "circle-arrow-up-left",
    "codepoint": "f6ff"
  },
  {
    "id": "circle-arrow-up-right",
    "codepoint": "f701"
  },
  {
    "id": "circle-caret-down",
    "codepoint": "100d6"
  },
  {
    "id": "circle-caret-left",
    "codepoint": "100d5"
  },
  {
    "id": "circle-caret-right",
    "codepoint": "100d4"
  },
  {
    "id": "circle-caret-up",
    "codepoint": "100d3"
  },
  {
    "id": "circle-check",
    "codepoint": "f704"
  },
  {
    "id": "circle-chevron-down",
    "codepoint": "100d2"
  },
  {
    "id": "circle-chevron-left",
    "codepoint": "100d1"
  },
  {
    "id": "circle-chevron-right",
    "codepoint": "100d0"
  },
  {
    "id": "circle-chevron-up",
    "codepoint": "100cf"
  },
  {
    "id": "circle-chevrons-down",
    "codepoint": "100ef"
  },
  {
    "id": "circle-chevrons-left",
    "codepoint": "100ee"
  },
  {
    "id": "circle-chevrons-right",
    "codepoint": "100ed"
  },
  {
    "id": "circle-chevrons-up",
    "codepoint": "100ec"
  },
  {
    "id": "circle-dot",
    "codepoint": "f705"
  },
  {
    "id": "circle-key",
    "codepoint": "f706"
  },
  {
    "id": "circle-letter-a",
    "codepoint": "fe7f"
  },
  {
    "id": "circle-letter-b",
    "codepoint": "fe7e"
  },
  {
    "id": "circle-letter-c",
    "codepoint": "fe7d"
  },
  {
    "id": "circle-letter-d",
    "codepoint": "fe7c"
  },
  {
    "id": "circle-letter-e",
    "codepoint": "fe7b"
  },
  {
    "id": "circle-letter-f",
    "codepoint": "fe7a"
  },
  {
    "id": "circle-letter-g",
    "codepoint": "fe79"
  },
  {
    "id": "circle-letter-h",
    "codepoint": "fe78"
  },
  {
    "id": "circle-letter-i",
    "codepoint": "fe77"
  },
  {
    "id": "circle-letter-j",
    "codepoint": "fe76"
  },
  {
    "id": "circle-letter-k",
    "codepoint": "fe75"
  },
  {
    "id": "circle-letter-l",
    "codepoint": "fe74"
  },
  {
    "id": "circle-letter-m",
    "codepoint": "fe73"
  },
  {
    "id": "circle-letter-n",
    "codepoint": "fe72"
  },
  {
    "id": "circle-letter-o",
    "codepoint": "fe71"
  },
  {
    "id": "circle-letter-p",
    "codepoint": "fe70"
  },
  {
    "id": "circle-letter-q",
    "codepoint": "fe6f"
  },
  {
    "id": "circle-letter-r",
    "codepoint": "fe6e"
  },
  {
    "id": "circle-letter-s",
    "codepoint": "fe6d"
  },
  {
    "id": "circle-letter-t",
    "codepoint": "fe6c"
  },
  {
    "id": "circle-letter-u",
    "codepoint": "fe6b"
  },
  {
    "id": "circle-letter-v",
    "codepoint": "fe6a"
  },
  {
    "id": "circle-letter-w",
    "codepoint": "fe69"
  },
  {
    "id": "circle-letter-x",
    "codepoint": "fe68"
  },
  {
    "id": "circle-letter-y",
    "codepoint": "fe67"
  },
  {
    "id": "circle-letter-z",
    "codepoint": "fe66"
  },
  {
    "id": "circle-number-0",
    "codepoint": "f72f"
  },
  {
    "id": "circle-number-1",
    "codepoint": "f730"
  },
  {
    "id": "circle-number-2",
    "codepoint": "f731"
  },
  {
    "id": "circle-number-3",
    "codepoint": "f732"
  },
  {
    "id": "circle-number-4",
    "codepoint": "f733"
  },
  {
    "id": "circle-number-5",
    "codepoint": "f734"
  },
  {
    "id": "circle-number-6",
    "codepoint": "f735"
  },
  {
    "id": "circle-number-7",
    "codepoint": "f736"
  },
  {
    "id": "circle-number-8",
    "codepoint": "f737"
  },
  {
    "id": "circle-number-9",
    "codepoint": "f738"
  },
  {
    "id": "circle-percentage",
    "codepoint": "fed5"
  },
  {
    "id": "circle-plus",
    "codepoint": "fef9"
  },
  {
    "id": "circle-rectangle",
    "codepoint": "ff63"
  },
  {
    "id": "circle-x",
    "codepoint": "f739"
  },
  {
    "id": "circles",
    "codepoint": "f672"
  },
  {
    "id": "click",
    "codepoint": "101e3"
  },
  {
    "id": "clipboard",
    "codepoint": "100cc"
  },
  {
    "id": "clipboard-check",
    "codepoint": "100ce"
  },
  {
    "id": "clipboard-data",
    "codepoint": "100eb"
  },
  {
    "id": "clipboard-list",
    "codepoint": "100ea"
  },
  {
    "id": "clipboard-plus",
    "codepoint": "10176"
  },
  {
    "id": "clipboard-smile",
    "codepoint": "10175"
  },
  {
    "id": "clipboard-text",
    "codepoint": "100e9"
  },
  {
    "id": "clipboard-typography",
    "codepoint": "100e8"
  },
  {
    "id": "clipboard-x",
    "codepoint": "100cd"
  },
  {
    "id": "clock",
    "codepoint": "f73a"
  },
  {
    "id": "clock-hour-1",
    "codepoint": "fe65"
  },
  {
    "id": "clock-hour-10",
    "codepoint": "fe64"
  },
  {
    "id": "clock-hour-11",
    "codepoint": "fe63"
  },
  {
    "id": "clock-hour-12",
    "codepoint": "fe62"
  },
  {
    "id": "clock-hour-2",
    "codepoint": "fe61"
  },
  {
    "id": "clock-hour-3",
    "codepoint": "fe60"
  },
  {
    "id": "clock-hour-4",
    "codepoint": "fe5f"
  },
  {
    "id": "clock-hour-5",
    "codepoint": "fe5e"
  },
  {
    "id": "clock-hour-6",
    "codepoint": "fe5d"
  },
  {
    "id": "clock-hour-7",
    "codepoint": "fe5c"
  },
  {
    "id": "clock-hour-8",
    "codepoint": "fe5b"
  },
  {
    "id": "clock-hour-9",
    "codepoint": "fe5a"
  },
  {
    "id": "cloud",
    "codepoint": "f673"
  },
  {
    "id": "cloud-computing",
    "codepoint": "1010d"
  },
  {
    "id": "cloud-data-connection",
    "codepoint": "1010c"
  },
  {
    "id": "clover",
    "codepoint": "10013"
  },
  {
    "id": "clubs",
    "codepoint": "f674"
  },
  {
    "id": "code-circle",
    "codepoint": "fed3"
  },
  {
    "id": "code-circle-2",
    "codepoint": "fed4"
  },
  {
    "id": "coin",
    "codepoint": "fd08"
  },
  {
    "id": "coin-bitcoin",
    "codepoint": "fd06"
  },
  {
    "id": "coin-euro",
    "codepoint": "fd07"
  },
  {
    "id": "coin-monero",
    "codepoint": "fd09"
  },
  {
    "id": "coin-pound",
    "codepoint": "fd0a"
  },
  {
    "id": "coin-rupee",
    "codepoint": "fd0b"
  },
  {
    "id": "coin-taka",
    "codepoint": "fd0c"
  },
  {
    "id": "coin-yen",
    "codepoint": "fd0e"
  },
  {
    "id": "coin-yuan",
    "codepoint": "fd0f"
  },
  {
    "id": "columns-1",
    "codepoint": "10188"
  },
  {
    "id": "columns-2",
    "codepoint": "10187"
  },
  {
    "id": "columns-3",
    "codepoint": "10186"
  },
  {
    "id": "compass",
    "codepoint": "fd10"
  },
  {
    "id": "cone",
    "codepoint": "fe58"
  },
  {
    "id": "cone-2",
    "codepoint": "fe59"
  },
  {
    "id": "confetti",
    "codepoint": "10185"
  },
  {
    "id": "container",
    "codepoint": "10184"
  },
  {
    "id": "contrast",
    "codepoint": "fe56"
  },
  {
    "id": "contrast-2",
    "codepoint": "fe57"
  },
  {
    "id": "cookie",
    "codepoint": "fe54"
  },
  {
    "id": "cookie-man",
    "codepoint": "fe55"
  },
  {
    "id": "copy",
    "codepoint": "101e2"
  },
  {
    "id": "copy-check",
    "codepoint": "fe53"
  },
  {
    "id": "copy-minus",
    "codepoint": "fe52"
  },
  {
    "id": "copy-plus",
    "codepoint": "fe51"
  },
  {
    "id": "copy-x",
    "codepoint": "fe50"
  },
  {
    "id": "copyleft",
    "codepoint": "f73b"
  },
  {
    "id": "copyright",
    "codepoint": "f73c"
  },
  {
    "id": "credit-card",
    "codepoint": "fd11"
  },
  {
    "id": "crop-1-1",
    "codepoint": "fe4f"
  },
  {
    "id": "crop-16-9",
    "codepoint": "fe4e"
  },
  {
    "id": "crop-3-2",
    "codepoint": "fe4d"
  },
  {
    "id": "crop-5-4",
    "codepoint": "fe4c"
  },
  {
    "id": "crop-7-5",
    "codepoint": "fe4b"
  },
  {
    "id": "crop-landscape",
    "codepoint": "fe4a"
  },
  {
    "id": "crop-portrait",
    "codepoint": "fe49"
  },
  {
    "id": "cross",
    "codepoint": "f675"
  },
  {
    "id": "crown",
    "codepoint": "101c4"
  },
  {
    "id": "current-location",
    "codepoint": "10125"
  },
  {
    "id": "dashboard",
    "codepoint": "10019"
  },
  {
    "id": "database",
    "codepoint": "101e1"
  },
  {
    "id": "device-cctv",
    "codepoint": "1004b"
  },
  {
    "id": "device-desktop",
    "codepoint": "1004a"
  },
  {
    "id": "device-floppy",
    "codepoint": "101e0"
  },
  {
    "id": "device-gamepad",
    "codepoint": "1019c"
  },
  {
    "id": "device-gamepad-2",
    "codepoint": "101df"
  },
  {
    "id": "device-gamepad-3",
    "codepoint": "10049"
  },
  {
    "id": "device-heart-monitor",
    "codepoint": "fa38"
  },
  {
    "id": "device-imac",
    "codepoint": "10048"
  },
  {
    "id": "device-ipad",
    "codepoint": "10047"
  },
  {
    "id": "device-mobile",
    "codepoint": "fa39"
  },
  {
    "id": "device-remote",
    "codepoint": "10046"
  },
  {
    "id": "device-speaker",
    "codepoint": "10045"
  },
  {
    "id": "device-tablet",
    "codepoint": "fa3a"
  },
  {
    "id": "device-tv",
    "codepoint": "10043"
  },
  {
    "id": "device-tv-old",
    "codepoint": "10044"
  },
  {
    "id": "device-unknown",
    "codepoint": "10018"
  },
  {
    "id": "device-usb",
    "codepoint": "10042"
  },
  {
    "id": "device-vision-pro",
    "codepoint": "10041"
  },
  {
    "id": "device-watch",
    "codepoint": "10040"
  },
  {
    "id": "dialpad",
    "codepoint": "fa3b"
  },
  {
    "id": "diamond",
    "codepoint": "f73d"
  },
  {
    "id": "diamonds",
    "codepoint": "f676"
  },
  {
    "id": "dice",
    "codepoint": "f744"
  },
  {
    "id": "dice-1",
    "codepoint": "f73e"
  },
  {
    "id": "dice-2",
    "codepoint": "f73f"
  },
  {
    "id": "dice-3",
    "codepoint": "f740"
  },
  {
    "id": "dice-4",
    "codepoint": "f741"
  },
  {
    "id": "dice-5",
    "codepoint": "f742"
  },
  {
    "id": "dice-6",
    "codepoint": "f743"
  },
  {
    "id": "direction-arrows",
    "codepoint": "100ca"
  },
  {
    "id": "direction-sign",
    "codepoint": "f745"
  },
  {
    "id": "directions",
    "codepoint": "1003f"
  },
  {
    "id": "disc",
    "codepoint": "1003e"
  },
  {
    "id": "discount",
    "codepoint": "1003d"
  },
  {
    "id": "discount-check",
    "codepoint": "f746"
  },
  {
    "id": "dots",
    "codepoint": "101dd"
  },
  {
    "id": "dots-vertical",
    "codepoint": "101de"
  },
  {
    "id": "download",
    "codepoint": "101dc"
  },
  {
    "id": "drop-circle",
    "codepoint": "10137"
  },
  {
    "id": "droplet",
    "codepoint": "ee80"
  },
  {
    "id": "droplet-half",
    "codepoint": "f6c5"
  },
  {
    "id": "droplet-half-2",
    "codepoint": "fb6c"
  },
  {
    "id": "droplets",
    "codepoint": "100c9"
  },
  {
    "id": "dual-screen",
    "codepoint": "10136"
  },
  {
    "id": "dumpling",
    "codepoint": "10135"
  },
  {
    "id": "ease-in-control-point",
    "codepoint": "10174"
  },
  {
    "id": "ease-in-out-control-points",
    "codepoint": "10173"
  },
  {
    "id": "ease-out-control-point",
    "codepoint": "10172"
  },
  {
    "id": "edit",
    "codepoint": "101db"
  },
  {
    "id": "egg",
    "codepoint": "f678"
  },
  {
    "id": "egg-cracked",
    "codepoint": "10012"
  },
  {
    "id": "egg-fried",
    "codepoint": "10134"
  },
  {
    "id": "elevator",
    "codepoint": "1003c"
  },
  {
    "id": "engine",
    "codepoint": "100fc"
  },
  {
    "id": "escalator",
    "codepoint": "10131"
  },
  {
    "id": "escalator-down",
    "codepoint": "10133"
  },
  {
    "id": "escalator-up",
    "codepoint": "10132"
  },
  {
    "id": "exchange",
    "codepoint": "10130"
  },
  {
    "id": "exclamation-circle",
    "codepoint": "ff62"
  },
  {
    "id": "explicit",
    "codepoint": "1012f"
  },
  {
    "id": "exposure",
    "codepoint": "10124"
  },
  {
    "id": "external-link",
    "codepoint": "101da"
  },
  {
    "id": "eye",
    "codepoint": "f679"
  },
  {
    "id": "eye-table",
    "codepoint": "10123"
  },
  {
    "id": "eyeglass",
    "codepoint": "100c8"
  },
  {
    "id": "eyeglass-2",
    "codepoint": "10122"
  },
  {
    "id": "face-mask",
    "codepoint": "10121"
  },
  {
    "id": "favicon",
    "codepoint": "10071"
  },
  {
    "id": "feather",
    "codepoint": "10011"
  },
  {
    "id": "fence",
    "codepoint": "10120"
  },
  {
    "id": "ferry",
    "codepoint": "100fb"
  },
  {
    "id": "fidget-spinner",
    "codepoint": "1011f"
  },
  {
    "id": "file",
    "codepoint": "f747"
  },
  {
    "id": "file-analytics",
    "codepoint": "10171"
  },
  {
    "id": "file-check",
    "codepoint": "1012e"
  },
  {
    "id": "file-code",
    "codepoint": "10170"
  },
  {
    "id": "file-code-2",
    "codepoint": "1012d"
  },
  {
    "id": "file-cv",
    "codepoint": "1012c"
  },
  {
    "id": "file-delta",
    "codepoint": "1012b"
  },
  {
    "id": "file-description",
    "codepoint": "1011e"
  },
  {
    "id": "file-diff",
    "codepoint": "1016f"
  },
  {
    "id": "file-digit",
    "codepoint": "1011d"
  },
  {
    "id": "file-dollar",
    "codepoint": "1019b"
  },
  {
    "id": "file-dots",
    "codepoint": "1016e"
  },
  {
    "id": "file-download",
    "codepoint": "1012a"
  },
  {
    "id": "file-euro",
    "codepoint": "1019a"
  },
  {
    "id": "file-function",
    "codepoint": "1016d"
  },
  {
    "id": "file-horizontal",
    "codepoint": "1011c"
  },
  {
    "id": "file-info",
    "codepoint": "1016c"
  },
  {
    "id": "file-invoice",
    "codepoint": "1011b"
  },
  {
    "id": "file-lambda",
    "codepoint": "10129"
  },
  {
    "id": "file-minus",
    "codepoint": "1011a"
  },
  {
    "id": "file-music",
    "codepoint": "10199"
  },
  {
    "id": "file-neutral",
    "codepoint": "10119"
  },
  {
    "id": "file-pencil",
    "codepoint": "10198"
  },
  {
    "id": "file-percent",
    "codepoint": "10128"
  },
  {
    "id": "file-phone",
    "codepoint": "10127"
  },
  {
    "id": "file-power",
    "codepoint": "10118"
  },
  {
    "id": "file-rss",
    "codepoint": "10126"
  },
  {
    "id": "file-sad",
    "codepoint": "10117"
  },
  {
    "id": "file-scissors",
    "codepoint": "10197"
  },
  {
    "id": "file-settings",
    "codepoint": "10196"
  },
  {
    "id": "file-signal",
    "codepoint": "10195"
  },
  {
    "id": "file-smile",
    "codepoint": "10116"
  },
  {
    "id": "file-star",
    "codepoint": "10115"
  },
  {
    "id": "file-text",
    "codepoint": "10114"
  },
  {
    "id": "file-time",
    "codepoint": "10194"
  },
  {
    "id": "file-typography",
    "codepoint": "1016b"
  },
  {
    "id": "file-unknown",
    "codepoint": "10193"
  },
  {
    "id": "file-upload",
    "codepoint": "10192"
  },
  {
    "id": "file-vector",
    "codepoint": "10191"
  },
  {
    "id": "file-x",
    "codepoint": "f748"
  },
  {
    "id": "files",
    "codepoint": "10190"
  },
  {
    "id": "filter",
    "codepoint": "fc27"
  },
  {
    "id": "filters",
    "codepoint": "100c7"
  },
  {
    "id": "fish-bone",
    "codepoint": "1010b"
  },
  {
    "id": "flag",
    "codepoint": "f67a"
  },
  {
    "id": "flag-2",
    "codepoint": "f707"
  },
  {
    "id": "flag-3",
    "codepoint": "f708"
  },
  {
    "id": "flame",
    "codepoint": "100c6"
  },
  {
    "id": "flare",
    "codepoint": "100c5"
  },
  {
    "id": "flask",
    "codepoint": "fd13"
  },
  {
    "id": "flask-2",
    "codepoint": "fd12"
  },
  {
    "id": "flower",
    "codepoint": "10010"
  },
  {
    "id": "folder",
    "codepoint": "f749"
  },
  {
    "id": "folder-open",
    "codepoint": "101c3"
  },
  {
    "id": "folders",
    "codepoint": "100c4"
  },
  {
    "id": "forbid",
    "codepoint": "fc29"
  },
  {
    "id": "forbid-2",
    "codepoint": "fc28"
  },
  {
    "id": "fountain",
    "codepoint": "fc2a"
  },
  {
    "id": "function",
    "codepoint": "fc2b"
  },
  {
    "id": "garden-cart",
    "codepoint": "100c3"
  },
  {
    "id": "gas-station",
    "codepoint": "100fa"
  },
  {
    "id": "gauge",
    "codepoint": "fc2c"
  },
  {
    "id": "ghost",
    "codepoint": "f74b"
  },
  {
    "id": "ghost-2",
    "codepoint": "f74a"
  },
  {
    "id": "ghost-3",
    "codepoint": "100a4"
  },
  {
    "id": "gift",
    "codepoint": "fd14"
  },
  {
    "id": "gift-card",
    "codepoint": "fc2d"
  },
  {
    "id": "glass",
    "codepoint": "1000f"
  },
  {
    "id": "glass-full",
    "codepoint": "fc2e"
  },
  {
    "id": "globe",
    "codepoint": "fc2f"
  },
  {
    "id": "golf",
    "codepoint": "100a3"
  },
  {
    "id": "gps",
    "codepoint": "fe48"
  },
  {
    "id": "graph",
    "codepoint": "fd15"
  },
  {
    "id": "grid-pattern",
    "codepoint": "100c2"
  },
  {
    "id": "guitar-pick",
    "codepoint": "f67b"
  },
  {
    "id": "hanger-2",
    "codepoint": "ff61"
  },
  {
    "id": "headphones",
    "codepoint": "fa3c"
  },
  {
    "id": "headset",
    "codepoint": "101d9"
  },
  {
    "id": "heart",
    "codepoint": "f67c"
  },
  {
    "id": "heart-broken",
    "codepoint": "1016a"
  },
  {
    "id": "helicopter",
    "codepoint": "100f9"
  },
  {
    "id": "helicopter-landing",
    "codepoint": "100c1"
  },
  {
    "id": "help",
    "codepoint": "101d8"
  },
  {
    "id": "help-circle",
    "codepoint": "fa3d"
  },
  {
    "id": "help-hexagon",
    "codepoint": "fa3e"
  },
  {
    "id": "help-octagon",
    "codepoint": "fa3f"
  },
  {
    "id": "help-square",
    "codepoint": "fa40"
  },
  {
    "id": "help-square-rounded",
    "codepoint": "fa41"
  },
  {
    "id": "help-triangle",
    "codepoint": "fa42"
  },
  {
    "id": "hexagon",
    "codepoint": "f67d"
  },
  {
    "id": "hexagon-letter-a",
    "codepoint": "fe47"
  },
  {
    "id": "hexagon-letter-b",
    "codepoint": "fe46"
  },
  {
    "id": "hexagon-letter-c",
    "codepoint": "fe45"
  },
  {
    "id": "hexagon-letter-d",
    "codepoint": "fe44"
  },
  {
    "id": "hexagon-letter-e",
    "codepoint": "fe43"
  },
  {
    "id": "hexagon-letter-f",
    "codepoint": "fe42"
  },
  {
    "id": "hexagon-letter-g",
    "codepoint": "fe41"
  },
  {
    "id": "hexagon-letter-h",
    "codepoint": "fe40"
  },
  {
    "id": "hexagon-letter-i",
    "codepoint": "fe3f"
  },
  {
    "id": "hexagon-letter-j",
    "codepoint": "fe3e"
  },
  {
    "id": "hexagon-letter-k",
    "codepoint": "fe3d"
  },
  {
    "id": "hexagon-letter-l",
    "codepoint": "fe3c"
  },
  {
    "id": "hexagon-letter-m",
    "codepoint": "fe3b"
  },
  {
    "id": "hexagon-letter-n",
    "codepoint": "fe3a"
  },
  {
    "id": "hexagon-letter-o",
    "codepoint": "fe39"
  },
  {
    "id": "hexagon-letter-p",
    "codepoint": "fe38"
  },
  {
    "id": "hexagon-letter-q",
    "codepoint": "fe37"
  },
  {
    "id": "hexagon-letter-r",
    "codepoint": "fe36"
  },
  {
    "id": "hexagon-letter-s",
    "codepoint": "fe35"
  },
  {
    "id": "hexagon-letter-t",
    "codepoint": "fe34"
  },
  {
    "id": "hexagon-letter-u",
    "codepoint": "fe33"
  },
  {
    "id": "hexagon-letter-v",
    "codepoint": "fe32"
  },
  {
    "id": "hexagon-letter-w",
    "codepoint": "fe31"
  },
  {
    "id": "hexagon-letter-x",
    "codepoint": "fe30"
  },
  {
    "id": "hexagon-letter-y",
    "codepoint": "fe2f"
  },
  {
    "id": "hexagon-letter-z",
    "codepoint": "fe2e"
  },
  {
    "id": "hexagon-minus",
    "codepoint": "fe2d"
  },
  {
    "id": "hexagon-number-0",
    "codepoint": "f74c"
  },
  {
    "id": "hexagon-number-1",
    "codepoint": "f74d"
  },
  {
    "id": "hexagon-number-2",
    "codepoint": "f74e"
  },
  {
    "id": "hexagon-number-3",
    "codepoint": "f74f"
  },
  {
    "id": "hexagon-number-4",
    "codepoint": "f750"
  },
  {
    "id": "hexagon-number-5",
    "codepoint": "f751"
  },
  {
    "id": "hexagon-number-6",
    "codepoint": "f752"
  },
  {
    "id": "hexagon-number-7",
    "codepoint": "f753"
  },
  {
    "id": "hexagon-number-8",
    "codepoint": "f754"
  },
  {
    "id": "hexagon-number-9",
    "codepoint": "f755"
  },
  {
    "id": "hexagon-plus",
    "codepoint": "fe2c"
  },
  {
    "id": "home",
    "codepoint": "fe2b"
  },
  {
    "id": "home-2",
    "codepoint": "101d7"
  },
  {
    "id": "hospital-circle",
    "codepoint": "fed2"
  },
  {
    "id": "hourglass",
    "codepoint": "f756"
  },
  {
    "id": "icons",
    "codepoint": "10070"
  },
  {
    "id": "id",
    "codepoint": "101d6"
  },
  {
    "id": "info-circle",
    "codepoint": "f6d8"
  },
  {
    "id": "info-hexagon",
    "codepoint": "fa43"
  },
  {
    "id": "info-octagon",
    "codepoint": "fa44"
  },
  {
    "id": "info-square",
    "codepoint": "fa45"
  },
  {
    "id": "info-square-rounded",
    "codepoint": "f6d9"
  },
  {
    "id": "info-triangle",
    "codepoint": "fa46"
  },
  {
    "id": "inner-shadow-bottom",
    "codepoint": "f757"
  },
  {
    "id": "inner-shadow-bottom-left",
    "codepoint": "f758"
  },
  {
    "id": "inner-shadow-bottom-right",
    "codepoint": "f759"
  },
  {
    "id": "inner-shadow-left",
    "codepoint": "f75a"
  },
  {
    "id": "inner-shadow-right",
    "codepoint": "f75b"
  },
  {
    "id": "inner-shadow-top",
    "codepoint": "f75c"
  },
  {
    "id": "inner-shadow-top-left",
    "codepoint": "f75d"
  },
  {
    "id": "inner-shadow-top-right",
    "codepoint": "f75e"
  },
  {
    "id": "ironing",
    "codepoint": "fe2a"
  },
  {
    "id": "ironing-1",
    "codepoint": "1006f"
  },
  {
    "id": "ironing-2",
    "codepoint": "1006e"
  },
  {
    "id": "ironing-3",
    "codepoint": "1006d"
  },
  {
    "id": "ironing-steam",
    "codepoint": "1006c"
  },
  {
    "id": "jetpack",
    "codepoint": "fe29"
  },
  {
    "id": "jewish-star",
    "codepoint": "f67e"
  },
  {
    "id": "key",
    "codepoint": "fe28"
  },
  {
    "id": "keyboard",
    "codepoint": "100a2"
  },
  {
    "id": "keyframe",
    "codepoint": "fc33"
  },
  {
    "id": "keyframe-align-center",
    "codepoint": "fc30"
  },
  {
    "id": "keyframe-align-horizontal",
    "codepoint": "fc31"
  },
  {
    "id": "keyframe-align-vertical",
    "codepoint": "fc32"
  },
  {
    "id": "keyframes",
    "codepoint": "fc34"
  },
  {
    "id": "label",
    "codepoint": "ff41"
  },
  {
    "id": "label-important",
    "codepoint": "ff60"
  },
  {
    "id": "lasso-polygon",
    "codepoint": "ff5f"
  },
  {
    "id": "laurel-wreath",
    "codepoint": "100c0"
  },
  {
    "id": "laurel-wreath-1",
    "codepoint": "10169"
  },
  {
    "id": "laurel-wreath-2",
    "codepoint": "10168"
  },
  {
    "id": "laurel-wreath-3",
    "codepoint": "10167"
  },
  {
    "id": "layout",
    "codepoint": "fe17"
  },
  {
    "id": "layout-2",
    "codepoint": "fe27"
  },
  {
    "id": "layout-align-bottom",
    "codepoint": "fe26"
  },
  {
    "id": "layout-align-center",
    "codepoint": "fe25"
  },
  {
    "id": "layout-align-left",
    "codepoint": "fe24"
  },
  {
    "id": "layout-align-middle",
    "codepoint": "fe23"
  },
  {
    "id": "layout-align-right",
    "codepoint": "fe22"
  },
  {
    "id": "layout-align-top",
    "codepoint": "fe21"
  },
  {
    "id": "layout-board",
    "codepoint": "10182"
  },
  {
    "id": "layout-board-split",
    "codepoint": "10183"
  },
  {
    "id": "layout-bottombar",
    "codepoint": "fc37"
  },
  {
    "id": "layout-bottombar-collapse",
    "codepoint": "fc35"
  },
  {
    "id": "layout-bottombar-expand",
    "codepoint": "fc36"
  },
  {
    "id": "layout-cards",
    "codepoint": "fe20"
  },
  {
    "id": "layout-dashboard",
    "codepoint": "fe1f"
  },
  {
    "id": "layout-distribute-horizontal",
    "codepoint": "fe1e"
  },
  {
    "id": "layout-distribute-vertical",
    "codepoint": "fe1d"
  },
  {
    "id": "layout-grid",
    "codepoint": "fe1c"
  },
  {
    "id": "layout-kanban",
    "codepoint": "fe1b"
  },
  {
    "id": "layout-list",
    "codepoint": "fe1a"
  },
  {
    "id": "layout-navbar",
    "codepoint": "fc3a"
  },
  {
    "id": "layout-navbar-collapse",
    "codepoint": "fc38"
  },
  {
    "id": "layout-navbar-expand",
    "codepoint": "fc39"
  },
  {
    "id": "layout-sidebar",
    "codepoint": "fe18"
  },
  {
    "id": "layout-sidebar-left-collapse",
    "codepoint": "fc3b"
  },
  {
    "id": "layout-sidebar-left-expand",
    "codepoint": "fc3c"
  },
  {
    "id": "layout-sidebar-right",
    "codepoint": "fe19"
  },
  {
    "id": "layout-sidebar-right-collapse",
    "codepoint": "fc3d"
  },
  {
    "id": "layout-sidebar-right-expand",
    "codepoint": "fc3e"
  },
  {
    "id": "leaf",
    "codepoint": "101c2"
  },
  {
    "id": "lego",
    "codepoint": "fe16"
  },
  {
    "id": "lemon-2",
    "codepoint": "100bf"
  },
  {
    "id": "library",
    "codepoint": "10180"
  },
  {
    "id": "library-plus",
    "codepoint": "10181"
  },
  {
    "id": "lifebuoy",
    "codepoint": "100be"
  },
  {
    "id": "link",
    "codepoint": "101d5"
  },
  {
    "id": "list",
    "codepoint": "101d2"
  },
  {
    "id": "list-check",
    "codepoint": "101d4"
  },
  {
    "id": "list-details",
    "codepoint": "101d3"
  },
  {
    "id": "live-photo",
    "codepoint": "fed1"
  },
  {
    "id": "live-view",
    "codepoint": "100a1"
  },
  {
    "id": "location",
    "codepoint": "f67f"
  },
  {
    "id": "lock",
    "codepoint": "fe15"
  },
  {
    "id": "lock-square-rounded",
    "codepoint": "f6da"
  },
  {
    "id": "lungs",
    "codepoint": "fe14"
  },
  {
    "id": "macro",
    "codepoint": "fe13"
  },
  {
    "id": "magnet",
    "codepoint": "fe12"
  },
  {
    "id": "mail",
    "codepoint": "fa47"
  },
  {
    "id": "mail-opened",
    "codepoint": "fa48"
  },
  {
    "id": "man",
    "codepoint": "fe11"
  },
  {
    "id": "manual-gearbox",
    "codepoint": "fe10"
  },
  {
    "id": "map-pin",
    "codepoint": "f680"
  },
  {
    "id": "medical-cross",
    "codepoint": "f681"
  },
  {
    "id": "meeple",
    "codepoint": "100a0"
  },
  {
    "id": "melon",
    "codepoint": "1000e"
  },
  {
    "id": "menu-2",
    "codepoint": "101d1"
  },
  {
    "id": "message",
    "codepoint": "fecd"
  },
  {
    "id": "message-2",
    "codepoint": "1009f"
  },
  {
    "id": "message-chatbot",
    "codepoint": "fed0"
  },
  {
    "id": "message-circle",
    "codepoint": "fecf"
  },
  {
    "id": "message-circle-2",
    "codepoint": "fecf"
  },
  {
    "id": "message-report",
    "codepoint": "fece"
  },
  {
    "id": "messages",
    "codepoint": "101d0"
  },
  {
    "id": "meteor",
    "codepoint": "1000d"
  },
  {
    "id": "michelin-star",
    "codepoint": "1000c"
  },
  {
    "id": "mickey",
    "codepoint": "f683"
  },
  {
    "id": "microphone",
    "codepoint": "fe0f"
  },
  {
    "id": "microscope",
    "codepoint": "10166"
  },
  {
    "id": "microwave",
    "codepoint": "fe0e"
  },
  {
    "id": "military-rank",
    "codepoint": "ff5e"
  },
  {
    "id": "milk",
    "codepoint": "1000b"
  },
  {
    "id": "mood-angry",
    "codepoint": "ff0a"
  },
  {
    "id": "mood-confused",
    "codepoint": "f7f2"
  },
  {
    "id": "mood-crazy-happy",
    "codepoint": "ff09"
  },
  {
    "id": "mood-empty",
    "codepoint": "f7f3"
  },
  {
    "id": "mood-happy",
    "codepoint": "f7f4"
  },
  {
    "id": "mood-kid",
    "codepoint": "f7f5"
  },
  {
    "id": "mood-neutral",
    "codepoint": "f7f6"
  },
  {
    "id": "mood-sad",
    "codepoint": "f7f7"
  },
  {
    "id": "mood-smile",
    "codepoint": "f7f8"
  },
  {
    "id": "mood-wrrr",
    "codepoint": "ff08"
  },
  {
    "id": "moon",
    "codepoint": "f684"
  },
  {
    "id": "motorbike",
    "codepoint": "100f8"
  },
  {
    "id": "mountain",
    "codepoint": "1000a"
  },
  {
    "id": "mouse",
    "codepoint": "fb2f"
  },
  {
    "id": "mug",
    "codepoint": "10009"
  },
  {
    "id": "mushroom",
    "codepoint": "f7f9"
  },
  {
    "id": "navigation",
    "codepoint": "f685"
  },
  {
    "id": "nurse",
    "codepoint": "1009e"
  },
  {
    "id": "octagon",
    "codepoint": "f686"
  },
  {
    "id": "octagon-minus",
    "codepoint": "1017f"
  },
  {
    "id": "octagon-plus",
    "codepoint": "1017e"
  },
  {
    "id": "oval",
    "codepoint": "f687"
  },
  {
    "id": "oval-vertical",
    "codepoint": "f688"
  },
  {
    "id": "pacman",
    "codepoint": "101c1"
  },
  {
    "id": "paint",
    "codepoint": "f75f"
  },
  {
    "id": "palette",
    "codepoint": "1009d"
  },
  {
    "id": "panorama-horizontal",
    "codepoint": "fecc"
  },
  {
    "id": "panorama-vertical",
    "codepoint": "fecb"
  },
  {
    "id": "parking-circle",
    "codepoint": "feca"
  },
  {
    "id": "paw",
    "codepoint": "f689"
  },
  {
    "id": "pencil",
    "codepoint": "101cf"
  },
  {
    "id": "pennant",
    "codepoint": "f68b"
  },
  {
    "id": "pennant-2",
    "codepoint": "f68a"
  },
  {
    "id": "pentagon",
    "codepoint": "f68c"
  },
  {
    "id": "phone",
    "codepoint": "fa49"
  },
  {
    "id": "phone-call",
    "codepoint": "101c0"
  },
  {
    "id": "phone-calling",
    "codepoint": "101bf"
  },
  {
    "id": "phone-check",
    "codepoint": "101be"
  },
  {
    "id": "phone-x",
    "codepoint": "101bd"
  },
  {
    "id": "photo",
    "codepoint": "fa4a"
  },
  {
    "id": "picture-in-picture",
    "codepoint": "fec1"
  },
  {
    "id": "picture-in-picture-top",
    "codepoint": "fec2"
  },
  {
    "id": "pig",
    "codepoint": "1010a"
  },
  {
    "id": "pill",
    "codepoint": "ff07"
  },
  {
    "id": "pin",
    "codepoint": "f68d"
  },
  {
    "id": "pinned",
    "codepoint": "f68e"
  },
  {
    "id": "pizza",
    "codepoint": "10008"
  },
  {
    "id": "plane",
    "codepoint": "101b9"
  },
  {
    "id": "plane-arrival",
    "codepoint": "101bc"
  },
  {
    "id": "plane-departure",
    "codepoint": "101bb"
  },
  {
    "id": "plane-tilt",
    "codepoint": "101ba"
  },
  {
    "id": "play-card",
    "codepoint": "101b8"
  },
  {
    "id": "play-card-1",
    "codepoint": "10083"
  },
  {
    "id": "play-card-10",
    "codepoint": "10082"
  },
  {
    "id": "play-card-2",
    "codepoint": "10081"
  },
  {
    "id": "play-card-3",
    "codepoint": "10080"
  },
  {
    "id": "play-card-4",
    "codepoint": "1007f"
  },
  {
    "id": "play-card-5",
    "codepoint": "1007e"
  },
  {
    "id": "play-card-6",
    "codepoint": "1007d"
  },
  {
    "id": "play-card-7",
    "codepoint": "1007c"
  },
  {
    "id": "play-card-8",
    "codepoint": "1007b"
  },
  {
    "id": "play-card-9",
    "codepoint": "1007a"
  },
  {
    "id": "play-card-a",
    "codepoint": "10079"
  },
  {
    "id": "play-card-j",
    "codepoint": "10078"
  },
  {
    "id": "play-card-k",
    "codepoint": "10077"
  },
  {
    "id": "play-card-q",
    "codepoint": "10076"
  },
  {
    "id": "play-card-star",
    "codepoint": "10075"
  },
  {
    "id": "player-eject",
    "codepoint": "f68f"
  },
  {
    "id": "player-pause",
    "codepoint": "f690"
  },
  {
    "id": "player-play",
    "codepoint": "f691"
  },
  {
    "id": "player-record",
    "codepoint": "f692"
  },
  {
    "id": "player-skip-back",
    "codepoint": "f693"
  },
  {
    "id": "player-skip-forward",
    "codepoint": "f694"
  },
  {
    "id": "player-stop",
    "codepoint": "f695"
  },
  {
    "id": "player-track-next",
    "codepoint": "f696"
  },
  {
    "id": "player-track-prev",
    "codepoint": "f697"
  },
  {
    "id": "playlist",
    "codepoint": "101b7"
  },
  {
    "id": "plus",
    "codepoint": "101ce"
  },
  {
    "id": "point",
    "codepoint": "f698"
  },
  {
    "id": "pointer",
    "codepoint": "fb30"
  },
  {
    "id": "polaroid",
    "codepoint": "fa4b"
  },
  {
    "id": "poo",
    "codepoint": "fec9"
  },
  {
    "id": "presentation",
    "codepoint": "ff5c"
  },
  {
    "id": "presentation-analytics",
    "codepoint": "ff5d"
  },
  {
    "id": "puzzle",
    "codepoint": "f699"
  },
  {
    "id": "quote",
    "codepoint": "1009c"
  },
  {
    "id": "radar",
    "codepoint": "fe0d"
  },
  {
    "id": "radioactive",
    "codepoint": "f760"
  },
  {
    "id": "receipt",
    "codepoint": "ff06"
  },
  {
    "id": "receipt-dollar",
    "codepoint": "1017d"
  },
  {
    "id": "receipt-euro",
    "codepoint": "1017c"
  },
  {
    "id": "receipt-pound",
    "codepoint": "1017b"
  },
  {
    "id": "receipt-rupee",
    "codepoint": "1017a"
  },
  {
    "id": "receipt-yen",
    "codepoint": "10179"
  },
  {
    "id": "receipt-yuan",
    "codepoint": "10178"
  },
  {
    "id": "rectangle",
    "codepoint": "f69a"
  },
  {
    "id": "rectangle-vertical",
    "codepoint": "f69b"
  },
  {
    "id": "registered",
    "codepoint": "1018f"
  },
  {
    "id": "relation-many-to-many",
    "codepoint": "fe0c"
  },
  {
    "id": "relation-one-to-many",
    "codepoint": "fe0b"
  },
  {
    "id": "relation-one-to-one",
    "codepoint": "fe0a"
  },
  {
    "id": "replace",
    "codepoint": "f69c"
  },
  {
    "id": "report-analytics",
    "codepoint": "101b6"
  },
  {
    "id": "report-money",
    "codepoint": "101b5"
  },
  {
    "id": "rollercoaster",
    "codepoint": "100f7"
  },
  {
    "id": "rosette",
    "codepoint": "f69d"
  },
  {
    "id": "rosette-discount",
    "codepoint": "ff05"
  },
  {
    "id": "rosette-discount-check",
    "codepoint": "f746"
  },
  {
    "id": "salad",
    "codepoint": "10007"
  },
  {
    "id": "satellite",
    "codepoint": "101b4"
  },
  {
    "id": "scale",
    "codepoint": "101cd"
  },
  {
    "id": "school",
    "codepoint": "101cc"
  },
  {
    "id": "scuba-diving-tank",
    "codepoint": "ff04"
  },
  {
    "id": "search",
    "codepoint": "101cb"
  },
  {
    "id": "section",
    "codepoint": "fe09"
  },
  {
    "id": "seeding",
    "codepoint": "10006"
  },
  {
    "id": "seedling",
    "codepoint": "10006"
  },
  {
    "id": "send",
    "codepoint": "101ca"
  },
  {
    "id": "settings",
    "codepoint": "f69e"
  },
  {
    "id": "shield",
    "codepoint": "f69f"
  },
  {
    "id": "shield-check",
    "codepoint": "f761"
  },
  {
    "id": "shield-checkered",
    "codepoint": "f762"
  },
  {
    "id": "shield-half",
    "codepoint": "f357"
  },
  {
    "id": "shield-lock",
    "codepoint": "f763"
  },
  {
    "id": "shirt",
    "codepoint": "f6a0"
  },
  {
    "id": "shopping-cart",
    "codepoint": "fc3f"
  },
  {
    "id": "sign-left",
    "codepoint": "f6a1"
  },
  {
    "id": "sign-right",
    "codepoint": "f6a2"
  },
  {
    "id": "sitemap",
    "codepoint": "1006b"
  },
  {
    "id": "sort-ascending-2",
    "codepoint": "ff5b"
  },
  {
    "id": "sort-ascending-shapes",
    "codepoint": "ff5a"
  },
  {
    "id": "sort-descending-2",
    "codepoint": "ff59"
  },
  {
    "id": "sort-descending-shapes",
    "codepoint": "ff58"
  },
  {
    "id": "soup",
    "codepoint": "fe08"
  },
  {
    "id": "spade",
    "codepoint": "f6a3"
  },
  {
    "id": "sparkles",
    "codepoint": "101b2"
  },
  {
    "id": "sparkles-2",
    "codepoint": "101b3"
  },
  {
    "id": "speedboat",
    "codepoint": "100f6"
  },
  {
    "id": "spider",
    "codepoint": "10109"
  },
  {
    "id": "square",
    "codepoint": "fc40"
  },
  {
    "id": "square-arrow-down",
    "codepoint": "fb31"
  },
  {
    "id": "square-arrow-left",
    "codepoint": "fb32"
  },
  {
    "id": "square-arrow-right",
    "codepoint": "fb33"
  },
  {
    "id": "square-arrow-up",
    "codepoint": "fb34"
  },
  {
    "id": "square-asterisk",
    "codepoint": "fb35"
  },
  {
    "id": "square-check",
    "codepoint": "f76d"
  },
  {
    "id": "square-chevron-down",
    "codepoint": "fb36"
  },
  {
    "id": "square-chevron-left",
    "codepoint": "fb37"
  },
  {
    "id": "square-chevron-right",
    "codepoint": "fb38"
  },
  {
    "id": "square-chevron-up",
    "codepoint": "fb39"
  },
  {
    "id": "square-chevrons-down",
    "codepoint": "fb3a"
  },
  {
    "id": "square-chevrons-left",
    "codepoint": "fb3b"
  },
  {
    "id": "square-chevrons-right",
    "codepoint": "fb3c"
  },
  {
    "id": "square-chevrons-up",
    "codepoint": "fb3d"
  },
  {
    "id": "square-dot",
    "codepoint": "fb3e"
  },
  {
    "id": "square-f0",
    "codepoint": "f76e"
  },
  {
    "id": "square-f1",
    "codepoint": "f76f"
  },
  {
    "id": "square-f2",
    "codepoint": "f770"
  },
  {
    "id": "square-f3",
    "codepoint": "f771"
  },
  {
    "id": "square-f4",
    "codepoint": "f772"
  },
  {
    "id": "square-f5",
    "codepoint": "f773"
  },
  {
    "id": "square-f6",
    "codepoint": "f774"
  },
  {
    "id": "square-f7",
    "codepoint": "f775"
  },
  {
    "id": "square-f8",
    "codepoint": "f776"
  },
  {
    "id": "square-f9",
    "codepoint": "f777"
  },
  {
    "id": "square-letter-a",
    "codepoint": "fe07"
  },
  {
    "id": "square-letter-b",
    "codepoint": "fe06"
  },
  {
    "id": "square-letter-c",
    "codepoint": "fe05"
  },
  {
    "id": "square-letter-d",
    "codepoint": "fe04"
  },
  {
    "id": "square-letter-e",
    "codepoint": "fe03"
  },
  {
    "id": "square-letter-f",
    "codepoint": "fe02"
  },
  {
    "id": "square-letter-g",
    "codepoint": "fe01"
  },
  {
    "id": "square-letter-h",
    "codepoint": "fe00"
  },
  {
    "id": "square-letter-i",
    "codepoint": "fdff"
  },
  {
    "id": "square-letter-j",
    "codepoint": "fdfe"
  },
  {
    "id": "square-letter-k",
    "codepoint": "fdfd"
  },
  {
    "id": "square-letter-l",
    "codepoint": "fdfc"
  },
  {
    "id": "square-letter-m",
    "codepoint": "fdfb"
  },
  {
    "id": "square-letter-n",
    "codepoint": "fdfa"
  },
  {
    "id": "square-letter-o",
    "codepoint": "fdf9"
  },
  {
    "id": "square-letter-p",
    "codepoint": "fdf8"
  },
  {
    "id": "square-letter-q",
    "codepoint": "fdf7"
  },
  {
    "id": "square-letter-r",
    "codepoint": "fdf6"
  },
  {
    "id": "square-letter-s",
    "codepoint": "fdf5"
  },
  {
    "id": "square-letter-t",
    "codepoint": "fdf4"
  },
  {
    "id": "square-letter-u",
    "codepoint": "fdf3"
  },
  {
    "id": "square-letter-v",
    "codepoint": "fdf2"
  },
  {
    "id": "square-letter-w",
    "codepoint": "fdf1"
  },
  {
    "id": "square-letter-x",
    "codepoint": "fdf0"
  },
  {
    "id": "square-letter-y",
    "codepoint": "fdef"
  },
  {
    "id": "square-letter-z",
    "codepoint": "fdee"
  },
  {
    "id": "square-minus",
    "codepoint": "fb3f"
  },
  {
    "id": "square-number-0",
    "codepoint": "f764"
  },
  {
    "id": "square-number-1",
    "codepoint": "f765"
  },
  {
    "id": "square-number-2",
    "codepoint": "f7fa"
  },
  {
    "id": "square-number-3",
    "codepoint": "f766"
  },
  {
    "id": "square-number-4",
    "codepoint": "f767"
  },
  {
    "id": "square-number-5",
    "codepoint": "f768"
  },
  {
    "id": "square-number-6",
    "codepoint": "f769"
  },
  {
    "id": "square-number-7",
    "codepoint": "f76a"
  },
  {
    "id": "square-number-8",
    "codepoint": "f76b"
  },
  {
    "id": "square-number-9",
    "codepoint": "f76c"
  },
  {
    "id": "square-rotated",
    "codepoint": "f6a4"
  },
  {
    "id": "square-rounded",
    "codepoint": "f6a5"
  },
  {
    "id": "square-rounded-arrow-down",
    "codepoint": "f6db"
  },
  {
    "id": "square-rounded-arrow-left",
    "codepoint": "f6dc"
  },
  {
    "id": "square-rounded-arrow-right",
    "codepoint": "f6dd"
  },
  {
    "id": "square-rounded-arrow-up",
    "codepoint": "f6de"
  },
  {
    "id": "square-rounded-check",
    "codepoint": "f6df"
  },
  {
    "id": "square-rounded-chevron-down",
    "codepoint": "f6e0"
  },
  {
    "id": "square-rounded-chevron-left",
    "codepoint": "f6e1"
  },
  {
    "id": "square-rounded-chevron-right",
    "codepoint": "f6e2"
  },
  {
    "id": "square-rounded-chevron-up",
    "codepoint": "f6e3"
  },
  {
    "id": "square-rounded-chevrons-down",
    "codepoint": "f6e4"
  },
  {
    "id": "square-rounded-chevrons-left",
    "codepoint": "f6e5"
  },
  {
    "id": "square-rounded-chevrons-right",
    "codepoint": "f6e6"
  },
  {
    "id": "square-rounded-chevrons-up",
    "codepoint": "f6e7"
  },
  {
    "id": "square-rounded-letter-a",
    "codepoint": "fded"
  },
  {
    "id": "square-rounded-letter-b",
    "codepoint": "fdec"
  },
  {
    "id": "square-rounded-letter-c",
    "codepoint": "fdeb"
  },
  {
    "id": "square-rounded-letter-d",
    "codepoint": "fdea"
  },
  {
    "id": "square-rounded-letter-e",
    "codepoint": "fde9"
  },
  {
    "id": "square-rounded-letter-f",
    "codepoint": "fde8"
  },
  {
    "id": "square-rounded-letter-g",
    "codepoint": "fde7"
  },
  {
    "id": "square-rounded-letter-h",
    "codepoint": "fde6"
  },
  {
    "id": "square-rounded-letter-i",
    "codepoint": "fde5"
  },
  {
    "id": "square-rounded-letter-j",
    "codepoint": "fde4"
  },
  {
    "id": "square-rounded-letter-k",
    "codepoint": "fde3"
  },
  {
    "id": "square-rounded-letter-l",
    "codepoint": "fde2"
  },
  {
    "id": "square-rounded-letter-m",
    "codepoint": "fde1"
  },
  {
    "id": "square-rounded-letter-n",
    "codepoint": "fde0"
  },
  {
    "id": "square-rounded-letter-o",
    "codepoint": "fddf"
  },
  {
    "id": "square-rounded-letter-p",
    "codepoint": "fdde"
  },
  {
    "id": "square-rounded-letter-q",
    "codepoint": "fddd"
  },
  {
    "id": "square-rounded-letter-r",
    "codepoint": "fddc"
  },
  {
    "id": "square-rounded-letter-s",
    "codepoint": "fddb"
  },
  {
    "id": "square-rounded-letter-t",
    "codepoint": "fdda"
  },
  {
    "id": "square-rounded-letter-u",
    "codepoint": "fdd9"
  },
  {
    "id": "square-rounded-letter-v",
    "codepoint": "fdd8"
  },
  {
    "id": "square-rounded-letter-w",
    "codepoint": "fdd7"
  },
  {
    "id": "square-rounded-letter-x",
    "codepoint": "fdd6"
  },
  {
    "id": "square-rounded-letter-y",
    "codepoint": "fdd5"
  },
  {
    "id": "square-rounded-letter-z",
    "codepoint": "fdd4"
  },
  {
    "id": "square-rounded-minus",
    "codepoint": "fb40"
  },
  {
    "id": "square-rounded-number-0",
    "codepoint": "f778"
  },
  {
    "id": "square-rounded-number-1",
    "codepoint": "f779"
  },
  {
    "id": "square-rounded-number-2",
    "codepoint": "f77a"
  },
  {
    "id": "square-rounded-number-3",
    "codepoint": "f77b"
  },
  {
    "id": "square-rounded-number-4",
    "codepoint": "f77c"
  },
  {
    "id": "square-rounded-number-5",
    "codepoint": "f77d"
  },
  {
    "id": "square-rounded-number-6",
    "codepoint": "f77e"
  },
  {
    "id": "square-rounded-number-7",
    "codepoint": "f77f"
  },
  {
    "id": "square-rounded-number-8",
    "codepoint": "f780"
  },
  {
    "id": "square-rounded-number-9",
    "codepoint": "f781"
  },
  {
    "id": "square-rounded-plus",
    "codepoint": "f6e8"
  },
  {
    "id": "square-rounded-x",
    "codepoint": "f6e9"
  },
  {
    "id": "square-x",
    "codepoint": "fb41"
  },
  {
    "id": "squares",
    "codepoint": "fe9f"
  },
  {
    "id": "stack",
    "codepoint": "fdd1"
  },
  {
    "id": "stack-2",
    "codepoint": "fdd3"
  },
  {
    "id": "stack-3",
    "codepoint": "fdd2"
  },
  {
    "id": "star",
    "codepoint": "f6a6"
  },
  {
    "id": "star-half",
    "codepoint": "f6a7"
  },
  {
    "id": "stars",
    "codepoint": "f6a8"
  },
  {
    "id": "steering-wheel",
    "codepoint": "ff03"
  },
  {
    "id": "sun",
    "codepoint": "f6a9"
  },
  {
    "id": "sun-high",
    "codepoint": "10108"
  },
  {
    "id": "sun-low",
    "codepoint": "10107"
  },
  {
    "id": "sunglasses",
    "codepoint": "fec8"
  },
  {
    "id": "sunrise",
    "codepoint": "10106"
  },
  {
    "id": "sunset",
    "codepoint": "10104"
  },
  {
    "id": "sunset-2",
    "codepoint": "10105"
  },
  {
    "id": "swipe-down",
    "codepoint": "ff57"
  },
  {
    "id": "swipe-left",
    "codepoint": "ff56"
  },
  {
    "id": "swipe-right",
    "codepoint": "ff55"
  },
  {
    "id": "swipe-up",
    "codepoint": "ff54"
  },
  {
    "id": "table",
    "codepoint": "f782"
  },
  {
    "id": "tag",
    "codepoint": "ff02"
  },
  {
    "id": "tags",
    "codepoint": "ff01"
  },
  {
    "id": "temperature-minus",
    "codepoint": "10103"
  },
  {
    "id": "temperature-plus",
    "codepoint": "10102"
  },
  {
    "id": "template",
    "codepoint": "10177"
  },
  {
    "id": "test-pipe-2",
    "codepoint": "ff53"
  },
  {
    "id": "thumb-down",
    "codepoint": "f6aa"
  },
  {
    "id": "thumb-up",
    "codepoint": "f6ab"
  },
  {
    "id": "ticket",
    "codepoint": "101c9"
  },
  {
    "id": "tilt-shift",
    "codepoint": "fec7"
  },
  {
    "id": "timeline-event",
    "codepoint": "fd18"
  },
  {
    "id": "toggle-left",
    "codepoint": "fec0"
  },
  {
    "id": "toggle-right",
    "codepoint": "febf"
  },
  {
    "id": "tools-kitchen-2",
    "codepoint": "101c8"
  },
  {
    "id": "train",
    "codepoint": "100f5"
  },
  {
    "id": "transform",
    "codepoint": "f6ac"
  },
  {
    "id": "transition-bottom",
    "codepoint": "fdd0"
  },
  {
    "id": "transition-left",
    "codepoint": "fdcf"
  },
  {
    "id": "transition-right",
    "codepoint": "fdce"
  },
  {
    "id": "transition-top",
    "codepoint": "fdcd"
  },
  {
    "id": "trash",
    "codepoint": "f783"
  },
  {
    "id": "trash-x",
    "codepoint": "f784"
  },
  {
    "id": "triangle",
    "codepoint": "f6ad"
  },
  {
    "id": "triangle-inverted",
    "codepoint": "f6ae"
  },
  {
    "id": "triangle-square-circle",
    "codepoint": "fb42"
  },
  {
    "id": "trolley",
    "codepoint": "100f4"
  },
  {
    "id": "trophy",
    "codepoint": "f6af"
  },
  {
    "id": "truck",
    "codepoint": "100f3"
  },
  {
    "id": "ufo",
    "codepoint": "10165"
  },
  {
    "id": "umbrella",
    "codepoint": "f6b0"
  },
  {
    "id": "user",
    "codepoint": "fd19"
  },
  {
    "id": "versions",
    "codepoint": "f6b1"
  },
  {
    "id": "video",
    "codepoint": "1009b"
  },
  {
    "id": "video-minus",
    "codepoint": "1018e"
  },
  {
    "id": "video-plus",
    "codepoint": "1018d"
  },
  {
    "id": "windmill",
    "codepoint": "f6b2"
  },
  {
    "id": "windsock",
    "codepoint": "1009a"
  },
  {
    "id": "woman",
    "codepoint": "fdcc"
  },
  {
    "id": "world",
    "codepoint": "101c7"
  },
  {
    "id": "writing",
    "codepoint": "1018b"
  },
  {
    "id": "writing-sign",
    "codepoint": "1018c"
  },
  {
    "id": "x",
    "codepoint": "101c6"
  },
  {
    "id": "xbox-a",
    "codepoint": "fdcb"
  },
  {
    "id": "xbox-b",
    "codepoint": "fdca"
  },
  {
    "id": "xbox-x",
    "codepoint": "fdc9"
  },
  {
    "id": "xbox-y",
    "codepoint": "fdc8"
  },
  {
    "id": "yin-yang",
    "codepoint": "f785"
  },
  {
    "id": "zeppelin",
    "codepoint": "fdc7"
  },
  {
    "id": "zoom",
    "codepoint": "f787"
  },
  {
    "id": "zoom-cancel",
    "codepoint": "fdc6"
  },
  {
    "id": "zoom-check",
    "codepoint": "f786"
  },
  {
    "id": "zoom-code",
    "codepoint": "fdc5"
  },
  {
    "id": "zoom-exclamation",
    "codepoint": "fdc4"
  },
  {
    "id": "zoom-in",
    "codepoint": "f789"
  },
  {
    "id": "zoom-in-area",
    "codepoint": "f788"
  },
  {
    "id": "zoom-money",
    "codepoint": "fdc3"
  },
  {
    "id": "zoom-out",
    "codepoint": "f78a"
  },
  {
    "id": "zoom-out-area",
    "codepoint": "fdc2"
  },
  {
    "id": "zoom-pan",
    "codepoint": "fdc1"
  },
  {
    "id": "zoom-question",
    "codepoint": "fdc0"
  },
  {
    "id": "zoom-scan",
    "codepoint": "fdbf"
  }
];

// src/main.ts
var ICON_PACKS = {
  lucide: {
    id: "lucide",
    name: "Lucide",
    icons: LUCIDE_ICONS
  },
  tabler: {
    id: "tabler",
    name: "Tabler Icons",
    icons: TABLER_ICONS
  },
  "tabler-filled": {
    id: "tabler-filled",
    name: "Tabler Icons Filled",
    icons: TABLER_FILLED_ICONS
  }
};
var DEFAULT_SETTINGS = {
  defaultPack: "lucide",
  spacePlacement: "after",
  recentIcons: {
    lucide: [],
    tabler: [],
    "tabler-filled": []
  }
};
var RESULT_LIMIT = 50;
function normalizeIconId(input) {
  return input.trim().replace(/^:+|:+$/g, "").replace(/^if-icon-/i, "").replace(/^icon-/i, "").replace(/^ti-/i, "").replace(/^Li(?=[A-Z])/, "").replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").replace(/-+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").toLowerCase();
}
function getIconClasses(packId, iconId) {
  if (packId === "lucide") return `iconfine lucide-font icon-${iconId}`;
  if (packId === "tabler") return `iconfine tabler-font ti-${iconId}`;
  return `iconfine tabler-filled-font ti-filled-${iconId}`;
}
function searchIcons(pack, query, recentIds = []) {
  const normalized = normalizeIconId(query);
  if (!normalized) {
    const iconsById = new Map(pack.icons.map((icon) => [icon.id, icon]));
    const recent = recentIds.map((id) => iconsById.get(id)).filter((icon) => Boolean(icon));
    const recentSet = new Set(recent.map((icon) => icon.id));
    const remaining = pack.icons.filter((icon) => !recentSet.has(icon.id));
    return [...recent, ...remaining].slice(0, RESULT_LIMIT);
  }
  const exact = [];
  const prefix = [];
  const partial = [];
  for (const icon of pack.icons) {
    if (icon.id === normalized) {
      exact.push(icon);
    } else if (icon.id.startsWith(normalized)) {
      prefix.push(icon);
    } else if (icon.id.includes(normalized)) {
      partial.push(icon);
    }
  }
  return [...exact, ...prefix, ...partial].slice(0, RESULT_LIMIT);
}
var IconPickerModal = class extends import_obsidian.Modal {
  constructor(app, editor, plugin) {
    super(app);
    this.query = "";
    this.results = [];
    this.selectedIndex = 0;
    this.resultsEl = null;
    this.statusEl = null;
    this.editor = editor;
    this.plugin = plugin;
    this.settings = plugin.settings;
    this.activePack = ICON_PACKS[this.settings.defaultPack];
  }
  onOpen() {
    this.modalEl.addClass("iconfine-modal");
    this.setTitle("Insert icon");
    const toolbar = this.contentEl.createDiv({ cls: "iconfine-toolbar" });
    const packSelect = toolbar.createEl("select", {
      attr: { "aria-label": "Icon pack" }
    });
    for (const pack of Object.values(ICON_PACKS)) {
      packSelect.createEl("option", { text: pack.name, value: pack.id });
    }
    packSelect.value = this.activePack.id;
    const searchWrap = toolbar.createDiv({ cls: "iconfine-search-wrap" });
    const searchInput = searchWrap.createEl("input", {
      type: "search",
      attr: {
        "aria-label": "Search icons",
        autocomplete: "off",
        spellcheck: "false"
      }
    });
    const searchExample = searchWrap.createDiv({ cls: "iconfine-search-example" });
    searchExample.createSpan({ text: "Search icon ID, for example book for " });
    searchExample.createEl("i", {
      cls: "iconfine lucide-font icon-book",
      attr: { "aria-label": "book" }
    });
    const updateSearchExample = () => {
      searchExample.toggleClass("is-hidden", searchInput.value.length > 0);
    };
    searchInput.addEventListener("input", updateSearchExample);
    updateSearchExample();
    this.statusEl = this.contentEl.createDiv({ cls: "iconfine-status" });
    this.resultsEl = this.contentEl.createDiv({ cls: "iconfine-results" });
    packSelect.addEventListener("change", () => {
      var _a;
      const packId = packSelect.value;
      this.activePack = (_a = ICON_PACKS[packId]) != null ? _a : ICON_PACKS.lucide;
      this.selectedIndex = 0;
      this.updateResults();
      searchInput.focus();
    });
    searchInput.addEventListener("input", () => {
      this.query = searchInput.value;
      this.selectedIndex = 0;
      this.updateResults();
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        this.moveSelection(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        this.moveSelection(-1);
      } else if (event.key === "Enter") {
        event.preventDefault();
        const icon = this.results[this.selectedIndex];
        if (icon) this.insertIcon(icon);
      }
    });
    this.updateResults();
    window.setTimeout(() => searchInput.focus(), 0);
  }
  onClose() {
    this.contentEl.empty();
  }
  updateResults() {
    if (!this.resultsEl || !this.statusEl) return;
    this.results = searchIcons(
      this.activePack,
      this.query,
      this.settings.recentIcons[this.activePack.id]
    );
    this.selectedIndex = Math.min(this.selectedIndex, Math.max(0, this.results.length - 1));
    this.resultsEl.empty();
    const normalized = normalizeIconId(this.query);
    this.statusEl.setText(
      this.results.length === 0 ? `No ${this.activePack.name} icon matches \u201C${normalized}\u201D` : `${this.activePack.name}: ${this.results.length}${this.results.length === RESULT_LIMIT ? "+" : ""} result${this.results.length === 1 ? "" : "s"}`
    );
    if (this.results.length === 0) {
      this.resultsEl.createDiv({ cls: "iconfine-empty", text: "No matching icons" });
      return;
    }
    this.results.forEach((icon, index) => {
      var _a;
      const item = (_a = this.resultsEl) == null ? void 0 : _a.createEl("button", {
        cls: `iconfine-result${index === this.selectedIndex ? " is-selected" : ""}`,
        attr: {
          type: "button",
          title: icon.id
        }
      });
      if (!item) return;
      item.createEl("i", {
        cls: getIconClasses(this.activePack.id, icon.id)
      });
      item.createDiv({ cls: "iconfine-result-name", text: icon.id });
      item.addEventListener("mouseenter", () => {
        this.selectedIndex = index;
        this.refreshSelection();
      });
      item.addEventListener("click", () => this.insertIcon(icon));
    });
  }
  moveSelection(delta) {
    if (this.results.length === 0) return;
    this.selectedIndex = (this.selectedIndex + delta + this.results.length) % this.results.length;
    this.refreshSelection();
  }
  refreshSelection() {
    var _a;
    if (!this.resultsEl) return;
    const items = Array.from(this.resultsEl.querySelectorAll(".iconfine-result"));
    items.forEach((item, index) => item.toggleClass("is-selected", index === this.selectedIndex));
    (_a = items[this.selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
  }
  insertIcon(icon) {
    const prefix = this.settings.spacePlacement === "before" || this.settings.spacePlacement === "both" ? " " : "";
    const suffix = this.settings.spacePlacement === "after" || this.settings.spacePlacement === "both" ? " " : "";
    const html = `${prefix}<i class="${getIconClasses(this.activePack.id, icon.id)}"></i>${suffix}`;
    this.editor.replaceSelection(html);
    void this.plugin.recordRecentIcon(this.activePack.id, icon.id);
    this.close();
    this.editor.focus();
  }
};
var IconfineSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    const currentPack = ICON_PACKS[this.plugin.settings.defaultPack];
    new import_obsidian.Setting(this.containerEl).setName("Default icon pack").setDesc(`${currentPack.icons.length} icons available`).addDropdown((dropdown) => {
      for (const pack of Object.values(ICON_PACKS)) {
        dropdown.addOption(pack.id, pack.name);
      }
      dropdown.setValue(this.plugin.settings.defaultPack).onChange(async (value) => {
        const packId = value;
        this.plugin.settings.defaultPack = packId;
        await this.plugin.saveSettings(false);
        this.display();
      });
    });
    new import_obsidian.Setting(this.containerEl).setName("Insert space in...").setDesc("Choose where one space is inserted around icon HTML.").addDropdown((dropdown) => {
      dropdown.addOption("before", "Before icon").addOption("after", "After icon").addOption("both", "Before and after").setValue(this.plugin.settings.spacePlacement).onChange(async (value) => {
        this.plugin.settings.spacePlacement = value;
        await this.plugin.saveSettings(false);
      });
    });
    new import_obsidian.Setting(this.containerEl).setName("Renderer snippet").setDesc(`${this.plugin.isRendererEnabled() ? "Enabled" : "Needs enabling"} \xB7 ${LUCIDE_ICONS.length} Lucide \xB7 ${TABLER_ICONS.length} Tabler \xB7 ${TABLER_FILLED_ICONS.length} Filled`).addButton((button) => {
      button.setButtonText("Reload").onClick(async () => {
        button.setDisabled(true).setButtonText("Reloading...");
        try {
          const enabled = await this.plugin.installRendererSnippet();
          new import_obsidian.Notice(enabled ? "Iconfine renderer reloaded" : "Enable Iconfine in Appearance \u2192 CSS snippets");
          this.display();
        } catch (error) {
          console.error("Iconfine failed to reload its renderer snippet", error);
          new import_obsidian.Notice("Failed to reload Iconfine renderer");
        } finally {
          button.setDisabled(false).setButtonText("Reload");
        }
      });
    });
  }
};
var IconfinePlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    this.loadedFonts = /* @__PURE__ */ new Map();
  }
  async onload() {
    await this.loadSettings();
    try {
      const enabled = await this.installRendererSnippet();
      if (!enabled) {
        new import_obsidian.Notice("Enable Iconfine in Appearance \u2192 CSS snippets");
      }
    } catch (error) {
      console.error("Iconfine failed to install its renderer snippet", error);
      new import_obsidian.Notice("Iconfine could not install its renderer snippet");
    }
    this.addCommand({
      id: "insert-icon",
      name: "Insert icon",
      icon: "shapes",
      editorCallback: (editor) => {
        this.openIconPicker(editor);
      }
    });
    this.addCommand({
      id: "open-icon-picker-mobile",
      name: "Open icon picker",
      icon: "shapes",
      mobileOnly: true,
      callback: () => this.openPickerForActiveNote()
    });
    this.addRibbonIcon("shapes", "Iconfine", () => {
      this.openPickerForActiveNote();
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem((item) => {
          item.setTitle("Iconfine").setIcon("shapes").onClick(() => this.openIconPicker(editor));
        });
      })
    );
    this.addSettingTab(new IconfineSettingTab(this.app, this));
  }
  openIconPicker(editor) {
    new IconPickerModal(this.app, editor, this).open();
  }
  openPickerForActiveNote() {
    const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
    if (!view) {
      new import_obsidian.Notice("Open a Markdown note to insert an icon");
      return;
    }
    this.openIconPicker(view.editor);
  }
  onunload() {
    const fontSet = document.fonts;
    for (const font of this.loadedFonts.values()) {
      fontSet.delete(font);
    }
    this.loadedFonts.clear();
  }
  async reloadScreenFonts() {
    if (!this.manifest.dir) {
      throw new Error("Iconfine plugin directory is unavailable");
    }
    const sources = {
      lucide: { family: "Iconfine Lucide", file: "lucide.woff2" },
      tabler: { family: "Iconfine Tabler", file: "tabler-icons.woff2" },
      "tabler-filled": { family: "Iconfine Tabler Filled", file: "tabler-icons-filled.woff2" }
    };
    const fontSet = document.fonts;
    for (const packId of Object.keys(sources)) {
      const source = sources[packId];
      const fontPath = (0, import_obsidian.normalizePath)(`${this.manifest.dir}/${source.file}`);
      const fontData = await this.app.vault.adapter.readBinary(fontPath);
      const newFont = new FontFace(source.family, fontData, {
        style: "normal",
        weight: "400"
      });
      await newFont.load();
      if (newFont.status !== "loaded") {
        throw new Error(`Iconfine could not load ${source.family}`);
      }
      fontSet.add(newFont);
      const previous = this.loadedFonts.get(packId);
      if (previous) fontSet.delete(previous);
      this.loadedFonts.set(packId, newFont);
    }
  }
  isRendererEnabled() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.app.customCss) == null ? void 0 : _a.enabledSnippets) == null ? void 0 : _b.has("iconfine")) != null ? _c : false;
  }
  async installRendererSnippet() {
    var _a, _b;
    try {
      await this.reloadScreenFonts();
    } catch (error) {
      console.error("Iconfine failed to load screen fonts", error);
      new import_obsidian.Notice("Iconfine could not load screen fonts");
    }
    if (!this.manifest.dir) {
      throw new Error("Iconfine plugin directory is unavailable");
    }
    const adapter = this.app.vault.adapter;
    const snippetsDir = (0, import_obsidian.normalizePath)(`${this.app.vault.configDir}/snippets`);
    if (!await adapter.exists(snippetsDir)) {
      await adapter.mkdir(snippetsDir);
    }
    const resources = [
      ["iconfine.css", "iconfine.css"],
      ["lucide.woff2", "iconfine-lucide.woff2"],
      ["tabler-icons.woff2", "iconfine-tabler.woff2"],
      ["tabler-icons-filled.woff2", "iconfine-tabler-filled.woff2"]
    ];
    for (const [sourceName, targetName] of resources) {
      const sourcePath = (0, import_obsidian.normalizePath)(`${this.manifest.dir}/${sourceName}`);
      const targetPath = (0, import_obsidian.normalizePath)(`${snippetsDir}/${targetName}`);
      if (sourceName.endsWith(".css")) {
        await adapter.write(targetPath, await adapter.read(sourcePath));
      } else {
        await adapter.writeBinary(targetPath, await adapter.readBinary(sourcePath));
      }
    }
    const customCss = this.app.customCss;
    await ((_a = customCss == null ? void 0 : customCss.requestLoadSnippets) == null ? void 0 : _a.call(customCss));
    if (customCss == null ? void 0 : customCss.setCssEnabledStatus) {
      await customCss.setCssEnabledStatus("iconfine", true);
      await ((_b = customCss.requestLoadSnippets) == null ? void 0 : _b.call(customCss));
    }
    return this.isRendererEnabled();
  }
  async recordRecentIcon(packId, iconId) {
    var _a;
    const current = (_a = this.settings.recentIcons[packId]) != null ? _a : [];
    this.settings.recentIcons[packId] = [
      iconId,
      ...current.filter((id) => id !== iconId)
    ].slice(0, RESULT_LIMIT);
    await this.saveSettings(false);
  }
  async loadSettings() {
    var _a, _b, _c;
    const saved = await this.loadData();
    const defaultPack = (saved == null ? void 0 : saved.defaultPack) && ICON_PACKS[saved.defaultPack] ? saved.defaultPack : DEFAULT_SETTINGS.defaultPack;
    const spacePlacement = (saved == null ? void 0 : saved.spacePlacement) && ["before", "after", "both"].includes(saved.spacePlacement) ? saved.spacePlacement : DEFAULT_SETTINGS.spacePlacement;
    const recentIcons = {
      lucide: Array.isArray((_a = saved == null ? void 0 : saved.recentIcons) == null ? void 0 : _a.lucide) ? saved.recentIcons.lucide : [],
      tabler: Array.isArray((_b = saved == null ? void 0 : saved.recentIcons) == null ? void 0 : _b.tabler) ? saved.recentIcons.tabler : [],
      "tabler-filled": Array.isArray((_c = saved == null ? void 0 : saved.recentIcons) == null ? void 0 : _c["tabler-filled"]) ? saved.recentIcons["tabler-filled"] : []
    };
    this.settings = { defaultPack, spacePlacement, recentIcons };
  }
  async saveSettings(showNotice = true) {
    await this.saveData(this.settings);
    if (showNotice) new import_obsidian.Notice("Iconfine settings saved");
  }
};
