import content from "./content.ts";
import type { Language } from "../types.ts";
import { useState } from "react";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false); // opens language selector

  return (
    <header className="header">
      <h1 className="header-title">{content.header.main[language]}</h1>
      {isOpen ? (
        <div
          className="backdrop transparent"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <button className="language-btn"
            onClick={() => {
              setLanguage("en");
            }}
          >
            en
          </button>
          <button className="language-btn"
            onClick={() => {
              setLanguage("de");
            }}
          >
            de
          </button>
        </div>
      ) : (
        <button className="language-btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {content.header.languageSelector[language]}
        </button>
      )}
    </header>
  );
};

export default Header;
