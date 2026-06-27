import { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import * as MdxComponents from "./mdx-components.tsx";
import type { Language } from "../types";

interface CardProps {
  language: Language;
}

const Card = ({ language }: CardProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const modules = {
    en: import.meta.glob("./en/*.mdx", { eager: true }),
    de: import.meta.glob("./de/*.mdx", { eager: true }),
  };
  const projects = Object.entries(modules[language]).map(([path, mod]: any) => {
    return { path, frontmatter: mod.frontmatter, Component: mod.default };
  });
  const Content = openIndex !== null ? projects[openIndex].Component : null;

  return (
    <div className="card-grid">
      {projects.map(({ frontmatter }, index) => {
        return (
          <div
            key={index}
            className="card-item"
            onClick={() => {
              setOpenIndex(index);
            }}
          >
            <h2 className="card-title">{frontmatter.title}</h2>
          </div>
        );
      })}

      {Content && (
        <MDXProvider components={MdxComponents}>
          <div className="backdrop" onClick={() => setOpenIndex(null)}>
            <div className="card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setOpenIndex(null)}>
                ✕
              </button>
              <div className="card-content">
                <div className="card-inner">
                  {" "}
                  {/* ← new container for the better scroller */}
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </MDXProvider>
      )}
    </div>
  );
};

export default Card;
