//Card.tsx
import { useState, useEffect, useRef } from "react";
import { MDXProvider } from "@mdx-js/react";
import * as MdxComponents from "./mdx-components.tsx";
import type { Language } from "../types";
import { phantomMouse, isTouchDevice } from "./phantomMouse.ts";

interface CardProps {
  language: Language;
}

const Card = ({ language }: CardProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const modules = {
    en: import.meta.glob("./en/*.mdx", { eager: true }),
    de: import.meta.glob("./de/*.mdx", { eager: true }),
  };

  const projects = Object.values(modules[language]).map((mod: any) => ({
    frontmatter: mod.frontmatter,
    Component: mod.default,
  }));
  const Content = openIndex !== null ? projects[openIndex].Component : null;

  const updateCardPositions = (
    mx: number,
    my: number,
    cards: NodeListOf<Element>
  ) => {
    cards.forEach((el) => {
      const card = el as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = mx - rect.left;
      const y = my - rect.top;
      const over = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty(
        "--ratio-x",
        `${Math.min(Math.max(x / rect.width, 0), 1)}`
      );
      card.style.setProperty(
        "--ratio-y",
        `${Math.min(Math.max(y / rect.height, 0), 1)}`
      );
      card.style.setProperty("--glitter-opacity", over ? "1" : "0");
      card.style.setProperty("--glitter-active", over ? "1" : "0");
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    const grid = container?.closest(".cards-grid") as HTMLElement | null;
    if (!container || !grid) return;

    document.body.style.setProperty("--dw", `${document.body.clientWidth}px`);
    document.body.style.setProperty("--dh", `${document.body.clientHeight}px`);

    const cardItems = container.querySelectorAll(".card-item");
    const handlePointerMove = (e: PointerEvent) =>
      !isTouchDevice() && updateCardPositions(e.clientX, e.clientY, cardItems);

    phantomMouse.init(grid);
    phantomMouse.setGrid(grid);
    const unsubscribe = phantomMouse.subscribe(
      (pos) => isTouchDevice() && updateCardPositions(pos.x, pos.y, cardItems)
    );

    document.addEventListener("pointermove", handlePointerMove);
    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="card-wrapper">
        {projects.map(({ frontmatter }, index) => (
          <div
            key={index}
            className="card-item"
            onClick={() => setOpenIndex(index)}
          >
            <div className="card-content">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.subtitle}</h2>
            </div>
          </div>
        ))}
      </div>

      {Content && (
        <MDXProvider components={MdxComponents}>
          <div className="modal-backdrop" onClick={() => setOpenIndex(null)}>
            <div className="modal-item" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setOpenIndex(null)}>
                ✕
              </button>
              <div className="modal-content custom-scroll">
                <Content />
              </div>
            </div>
          </div>
        </MDXProvider>
      )}
    </>
  );
};

export default Card;
