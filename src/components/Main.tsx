//Main.tsx
import Card from "./Card";
import type { Language } from "../types";

interface MainProps {
  language: Language;
}

const Main = ({ language }: MainProps) => {
  return (
    <main className="main main-bg">
      <Card language={language} />
    </main>
  );
};

export default Main;
