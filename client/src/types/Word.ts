export interface Word {
  id: string;
  kanji: string | null;
  kana: string;
  romaji: string;
  english: string;
  word_type: string;
  is_common: boolean;
  jlpt_level: string | null;
  source: string;
  source_id: string | null;
}
