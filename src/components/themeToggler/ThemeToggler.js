import "./ThemeToggler.css";
import { toggleTheme } from "../../util/ThemeController.js";

function ThemeToggler() {
  return (
    <div>
      <button
        id="toggle-theme"
        onClick={() => {
          toggleTheme();
        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default ThemeToggler;
