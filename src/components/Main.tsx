import Card from "./Card";
import type { Language } from "../types";

interface MainProps {
  language: Language;
}

const Main = ({ language }: MainProps) => {
  return (
    <main>
      <Card language={language} />
    </main>
  );
};

export default Main;
