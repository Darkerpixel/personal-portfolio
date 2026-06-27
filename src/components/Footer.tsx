//Footer.tsx
import type { Language } from "../types.ts";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="footer">
      <h3>
        © 2026 <span>PickleMan</span> •{" "}
        {language === "en" ? "Footer" : "Fußnote"}
      </h3>
    </footer>
  );
};

export default Footer;
