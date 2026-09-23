import { useEffect, useState } from "react";
import { getWords } from "../services/wordService";
import type { Word } from "../types/Word";
import "./Vocabulary.css";

type ReadingMode = "kana" | "adaptive" | "full";

function Vocabulary() {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [readingMode, setReadingMode] = useState<ReadingMode>("kana");
  const [showRomaji, setShowRomaji] = useState(false);
  const [revealedMeanings, setRevealedMeanings] = useState<Set<string>>(
    new Set(),
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadWords() {
      try {
        const data = await getWords();
        setWords(data);
      } catch {
        setError("Failed to load vocabulary");
      } finally {
        setLoading(false);
      }
    }

    loadWords();
  }, []);

  function toggleMeaning(wordId: string) {
    setRevealedMeanings((current) => {
      const updated = new Set(current);

      if (updated.has(wordId)) {
        updated.delete(wordId);
      } else {
        updated.add(wordId);
      }

      return updated;
    });
  }

  if (loading) {
    return (
      <main>
        <h1>Vocabulary</h1>
        <p>Loading vocabulary...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h1>Vocabulary</h1>
        <p>{error}</p>
      </main>
    );
  }

  const filteredWords = words.filter((word) => {
    const search = searchTerm.toLowerCase();

    return (
      word.kanji?.includes(searchTerm) ||
      word.kana.includes(searchTerm) ||
      word.romaji.toLowerCase().includes(search) ||
      word.english.toLowerCase().includes(search)
    );
  });

  return (
    <main className="vocabulary-page">
      <header className="vocabulary-header">
        <h1>Vocabulary</h1>
        <p>Practice and review the Japanese words you know.</p>
      </header>

      <section className="vocabulary-controls">
        <span>Reading Mode</span>

        <div className="reading-mode-options">
          <button type="button" onClick={() => setReadingMode("kana")}>
            Kana First
          </button>

          <button type="button" onClick={() => setReadingMode("adaptive")}>
            Adaptive
          </button>

          <button type="button" onClick={() => setReadingMode("full")}>
            Full Japanese
          </button>

          <label className="romaji-toggle">
            <input
              type="checkbox"
              checked={showRomaji}
              onChange={(event) => setShowRomaji(event.target.checked)}
            />
            Show Romaji
          </label>
        </div>
      </section>

      <div className="vocabulary-search">
        <input
          type="search"
          placeholder="Search vocabulary..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <section className="vocabulary-list">
        {filteredWords.length === 0 && <p>No vocabulary found.</p>}

        {filteredWords.map((word) => (
          <article className="vocabulary-card" key={word.id}>
            {readingMode === "full" ? (
              <>
                <h2>{word.kanji ?? word.kana}</h2>
                {word.kanji && <p>{word.kana}</p>}
              </>
            ) : (
              <>
                <h2>{word.kana}</h2>
                {word.kanji && <p>{word.kanji}</p>}
              </>
            )}

            {showRomaji && <p>{word.romaji}</p>}

            <div className="word-meta">
              <span>{word.word_type}</span>
              {word.jlpt_level && <span>{word.jlpt_level}</span>}
            </div>

            <button
              type="button"
              className={`meaning-toggle ${
                revealedMeanings.has(word.id) ? "revealed" : ""
              }`}
              onClick={() => toggleMeaning(word.id)}
            >
              {revealedMeanings.has(word.id)
                ? word.english
                : "Tap to show meaning"}
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Vocabulary;
