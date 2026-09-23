import { useEffect, useState } from "react";
import { getWords } from "../services/wordService";
import type { Word } from "../types/Word";

function Vocabulary() {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <main>
      <h1>Vocabulary</h1>

      {words.map((word) => (
        <div key={word.id}>
          <p>{word.kanji ?? word.kana}</p>
          <p>{word.kana}</p>
          <p>{word.english}</p>
        </div>
      ))}
    </main>
  );
}

export default Vocabulary;
