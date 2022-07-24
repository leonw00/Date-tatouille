import TitleComponent from "../../components/title/TitleComponent";
import ThemeToggler from "../../components/themeToggler/ThemeToggler";
import GeneratedCard from "../../components/generatedCard/GeneratedCard";

function GeneratedPage() {
  return (
    <div>
      <ThemeToggler />
      <TitleComponent />
      <GeneratedCard/>
    </div>
  );
}

export default GeneratedPage;
