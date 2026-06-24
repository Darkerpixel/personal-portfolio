import Main from "./components/Main.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { useState } from "react";
import type { Language } from "./types.ts";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <Main language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
