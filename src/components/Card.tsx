//Card.tsx
import content from "./content.ts";
import type { Language } from "../types.ts";
import { useState } from "react";
import CardContent from "./CardContent.tsx";

interface CardProps {
  language: Language;
}

const Card = ({ language }: CardProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="card-grid">
      {content.card.map(({ title }, index) => (
        <div
          key={index}
          className="card-item"
          onClick={() => setOpenIndex(index)}
        >
          <h2 className="card-title">{title[language]}</h2>
        </div>
      ))}

      {openIndex !== null && (
        <div className="backdrop" onClick={() => setOpenIndex(null)}>
          <div className="card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpenIndex(null)}>
              ✕
            </button>
            <CardContent openIndex={openIndex} language={language} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
