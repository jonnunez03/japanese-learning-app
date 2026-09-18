import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Vocabulary from "./pages/Vocabulary";
import SentenceBuilder from "./pages/SentenceBuilder";
import WordForms from "./pages/WordForms";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="vocabulary" element={<Vocabulary />} />
        <Route path="sentence-builder" element={<SentenceBuilder />} />
        <Route path="word-forms" element={<WordForms />} />
      </Route>
    </Routes>
  );
}

export default App;
