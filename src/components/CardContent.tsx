import content from "./content.ts";
import type { Language } from "../types.ts";

interface CardContentProps {
  openIndex: number;
  language: Language;
}

const CardContent = ({ openIndex, language }: CardContentProps) => {
  const card = content.card[openIndex];

  return (
    <div className="card-content">
      <h2>{card.title[language]}</h2>
      
      {card.author && (
        <p className="author">by {card.author.en}</p>
      )}
      
      {card.grid && (
        <div className="image-grid">
          {card.grid.map((image, idx) => (
            <img
              key={idx}
              src={image.src}
              alt={image.alt[language]}
            />
          ))}
        </div>
      )}
      
      {card.description && (
        <p className="description">{card.description[language]}</p>
      )}
    </div>
  );
};

export default CardContent;
