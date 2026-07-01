//Header.tsx
import type { Language } from "../types.ts";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && menuRef.current.contains(event.target as Node)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

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
            <div ref={menuRef} className="dropdown">
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
