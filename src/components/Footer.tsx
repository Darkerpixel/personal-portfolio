//Footer.tsx
import content from "./content.ts";
import type { Language } from "../types.ts";

interface FooterProps {
  language: Language;
}

const Footer = ({ language }: FooterProps) => {
  return (
    <>
      <h3>{content.footer[language]}</h3>
    </>
  );
};

export default Footer;
