//Footer.tsx
import content from "./content.ts";
import type { Language } from "../types.ts";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <footer className="footer">
      <h3>
        © 2026 <span>PickleMan</span> • {content.footer[language]}
      </h3>
    </footer>
  );
};

export default Footer;
