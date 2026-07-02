//Main.tsx
import Card from "./Card";
import type { Language } from "../types";

interface MainProps {
  language: Language;
}

const Main = ({ language }: MainProps) => {
  return (
    <main className="main">
      <div className="cards-grid">
        <Card language={language} />
        <Card language={language} />
        <Card language={language} />
        <Card language={language} />
        <Card language={language} />
        <Card language={language} />
      </div>
    </main>
  );
};

export default Main;
