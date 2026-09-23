import { XMLParser } from "fast-xml-parser";
import type { JmdictEntry } from "./types.js";

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  processEntities: false,
});

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function getGloss(gloss: unknown) {
  if (typeof gloss === "string") {
    return {
      text: gloss,
      language: "eng",
    };
  }

  const value = gloss as {
    "#text"?: string;
    "@_xml:lang"?: string;
  };

  return {
    text: value["#text"] ?? "",
    language: value["@_xml:lang"] ?? "eng",
  };
}

export function parseJmdictEntry(xml: string): JmdictEntry {
  const parsed = parser.parse(xml);
  const entry = parsed.entry;

  if (!entry) {
    throw new Error("JMdict entry not found");
  }

  return {
    entrySequence: String(entry.ent_seq),

    kanjiElements: asArray(entry.k_ele).map((kanji: any) => ({
      text: kanji.keb,
      priorities: asArray<string>(kanji.ke_pri),
    })),

    readingElements: asArray(entry.r_ele).map((reading: any) => ({
      text: reading.reb,
      noKanji: Object.prototype.hasOwnProperty.call(reading, "re_nokanji"),
      restrictions: asArray<string>(reading.re_restr),
      priorities: asArray<string>(reading.re_pri),
    })),

    senses: asArray(entry.sense).map((sense: any) => ({
      partsOfSpeech: asArray<string>(sense.pos),
      kanjiRestrictions: asArray<string>(sense.stagk),
      readingRestrictions: asArray<string>(sense.stagr),
      fields: asArray<string>(sense.field),
      miscellaneous: asArray<string>(sense.misc),
      glosses: asArray(sense.gloss).map(getGloss),
    })),
  };
}
