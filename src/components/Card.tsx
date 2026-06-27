// Card.tsx
import content from "./content.ts";
import type { Language } from "../types.ts";
import { useState, useEffect, useRef } from "react";
import CardContent from "./CardContent.tsx";

interface CardProps {
  language: Language;
}

const Card = ({ language }: CardProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ========== GLITTER-EFFEKT LOGIC ==========
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    document.body.style.setProperty("--dw", document.body.clientWidth + "px");
    document.body.style.setProperty("--dh", document.body.clientHeight + "px");

    const handlePointerMove = (e: PointerEvent) => {
      const cardItems = container.querySelectorAll(".card");
      const cardsArray = Array.from(cardItems);
      
      for (const card of cardsArray) {
        const cardElement = card as HTMLElement;
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        cardElement.style.setProperty("--mouse-x", `${x}px`);
        cardElement.style.setProperty("--mouse-y", `${y}px`);

        const ratioX = Math.min(Math.max(x / rect.width, 0), 1);
        const ratioY = Math.min(Math.max(y / rect.height, 0), 1);
        
        cardElement.style.setProperty("--ratio-x", ratioX.toString());
        cardElement.style.setProperty("--ratio-y", ratioY.toString());
      }
    };

    container.addEventListener("pointermove", handlePointerMove);
    
    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);
  // ========== ENDE GLITTER-EFFEKT ==========

  return (
    <div className="cards-grid" id="cards" ref={containerRef}>  
      {content.card.map(({ title }, index) => (
        <div
          key={index}
          className="card"                              
          onClick={() => setOpenIndex(index)}
        >
          <div className="card-content">
          <h2 className="card-title">{title[language]}</h2>
          </div>
        </div>
      ))}

      {openIndex !== null && (
        <div className="backdrop" onClick={() => setOpenIndex(null)}>
          <div className="card-modal" onClick={(e) => e.stopPropagation()}> 
            <button className="close-btn" onClick={() => setOpenIndex(null)}>
              ✕
            </button>
            <div className="card-modal-content">
              <CardContent openIndex={openIndex} language={language} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
