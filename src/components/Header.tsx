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
    <>
      <h1>{content.header.main[language]}</h1>
      {isOpen ? (
        <div
          className="backdrop transparent"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <button
            onClick={() => {
              setLanguage("en");
            }}
          >
            en
          </button>
          <button
            onClick={() => {
              setLanguage("de");
            }}
          >
            de
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {content.header.languageSelector[language]}
        </button>
      )}
    </>
  );
};

export default Header;
