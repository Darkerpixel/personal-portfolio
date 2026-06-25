import content from "./content";
import type { Language } from "../types";

interface CardProps {
  language: Language;
  openIndex: number;
}

const CardContent = ({ openIndex, language }: CardProps) => {
  const handleImage = (item: any, index: number) => {
    return <img key={index} src={item.src} alt={item.alt[language]} />;
  };

  const handleContent = (key: string, value: any) => {
    if (key === "title") {
      return <p>{value[language]}</p>;
    } else if (key === "author") {
      return <p>{value[language]}</p>;
    } else if (key.startsWith("description")) {
      return <p>{value[language]}</p>;
    } else if (key.startsWith("grid")) {
      return (
        <div>
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
    <>
      {Object.entries(content.card[openIndex]).map(([key, value]) => {
        return <div key={key}>{handleContent(key, value)}</div>;
      })}
    </>
  );
};

export default CardContent;
