//Header.tsx
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
      <h1 className="header-title">
        {language === "en" ? "Welcome" : "Willkommen"}
      </h1>

      <div className="language-wrapper">
        <button className="language-btn" onClick={() => setIsOpen(true)}>
          🌐 {language === "en" ? "Language" : " Sprache"}
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
