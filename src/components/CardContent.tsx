import content from "./content.ts";
import type { Language } from "../types.ts";

interface CardContentProps {
  openIndex: number;
  language: Language;
}

const CardContent = ({ openIndex, language }: CardContentProps) => {
  const handleImage = (item: any, index: number) => {
    return <img key={index} src={item.src} alt={item.alt[language]} />;
  };

  const handleContent = (key: string, value: any) => {
    if (key === "title") {
      return <h2>{value[language]}</h2>;
    } else if (key === "author") {
      return <p className="author">{value[language]}</p>;
    } else if (key.startsWith("description")) {
      return <p className="description">{value[language]}</p>;
    } else if (key.startsWith("grid")) {
      return (
        <div className="image-grid">
          {value.map((item: any, index: number) => {
            return handleImage(item, index);
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <div className="card-content">
      {Object.entries(content.card[openIndex]).map(([key, value]) => {
        return <div key={key}>{handleContent(key, value)}</div>;
      })}
    </div>
  );
};

export default CardContent;
