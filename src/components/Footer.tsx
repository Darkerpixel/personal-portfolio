//Footer.tsx
import type { Language } from "../types.ts";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="footer">
      <p>
        © 2026 {" "}
        {language === "en" ? "All rights reserved" : "Alle Rechte vorbehalten"}
      </p>
    </footer>
  );
};

export default Footer;
