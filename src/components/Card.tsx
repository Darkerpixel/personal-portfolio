import content from "./content.ts";
import type { Language } from "../types.ts";
import { useState } from "react";
import CardContent from "./CardContent.tsx";

interface CardProps {
  language: Language;
}

const Card = ({ language }: CardProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(index);
  };

  const handleClose = () => {
    setOpenIndex(null);
  };

  return (
    <>
      {content.card.map(({ title }, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                handleClick(index);
              }}
            >
              {title[language]}
            </button>
          </div>
        );
      })}
      {openIndex !== null && (
        <div className="backdrop" onClick={handleClose}>
          <button onClick={handleClose}>exit</button>
          <div
            className="card"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CardContent openIndex={openIndex} language={language} />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
