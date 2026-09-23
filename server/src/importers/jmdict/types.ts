export interface JmdictEntry {
  entrySequence: string;
  kanjiElements: JmdictKanjiElement[];
  readingElements: JmdictReadingElement[];
  senses: JmdictSense[];
}

export interface JmdictKanjiElement {
  text: string;
  priorities: string[];
}

export interface JmdictReadingElement {
  text: string;
  noKanji: boolean;
  restrictions: string[];
  priorities: string[];
}

export interface JmdictSense {
  partsOfSpeech: string[];
  kanjiRestrictions: string[];
  readingRestrictions: string[];
  fields: string[];
  miscellaneous: string[];
  glosses: JmdictGloss[];
}

export interface JmdictGloss {
  text: string;
  language: string;
}
