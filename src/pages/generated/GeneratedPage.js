import TitleComponent from "../../components/title/TitleComponent";
import ThemeToggler from "../../components/themeToggler/ThemeToggler";
import GeneratedCard from "../../components/generatedCard/GeneratedCard";

function GeneratedPage() {
  return (
    <div>
      <ThemeToggler />
      <TitleComponent />
      <GeneratedCard category="Grab a bite" place="Kawaii Crepe" price="$" desc="yumm"/>
      <GeneratedCard category="Grab a bite" place="Kawaii Crepe" price="$" desc="yumm"/>
      <GeneratedCard category="Grab a bite" place="Kawaii Crepe" price="$" desc="yumm"/>
    </div>
  );
}

export default GeneratedPage;
