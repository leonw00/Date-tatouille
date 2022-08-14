import TitleComponent from "../../components/title/TitleComponent";
import ThemeToggler from "../../components/themeToggler/ThemeToggler";
import GeneratedCard from "../../components/generatedCard/GeneratedCard";
import GeneratorDice from "../../components/generatorDice/GeneratorDice";
import "./GeneratedPage.css";

function GeneratedPage() {
  return (
    <div>
      <ThemeToggler />
      <TitleComponent />
      <div className="generated-cards">
        <GeneratedCard 
          category="Grab a bite" 
          place="Kawaii Crepe" 
          price="$" 
          link="https://www.youtube.com/watch?v=Qpf26PtBXgo"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <GeneratedCard category="Grab a bite" place="Kawaii Crepe" price="$" desc="yumm"/>
        <GeneratedCard category="Grab a bite" place="Kawaii Crepe" price="$" desc="yumm"/>
      </div>
      <GeneratorDice/>
    </div>
  );
}

export default GeneratedPage;
