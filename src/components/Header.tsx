//Header.tsx
import content from "./content.ts";
import type { Language } from "../types.ts";
import { useState } from "react";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="header-title">{content.header.main[language]}</h1>

      <div className="language-wrapper">
        <button className="language-btn" onClick={() => setIsOpen(true)}>
          🌐 {content.header.languageSelector[language]}
        </button>

        {isOpen && (
          <>
            <div
              className="backdrop transparent"
              onClick={() => setIsOpen(false)}
            />
            <div className="dropdown">
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsOpen(false);
                }}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => {
                  setLanguage("de");
                  setIsOpen(false);
                }}
              >
                🇩🇪 Deutsch
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
