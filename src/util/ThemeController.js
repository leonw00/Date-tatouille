// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-lovely") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }
}

// function to set the current theme/color-scheme
function setCurrentTheme(themeName) {
  if (localStorage.getItem("theme") === "theme-neutral") {
    setTheme("theme-neutral");
  } else {
    setTheme("theme-lovely");
  }
}

export { setTheme, toggleTheme, setCurrentTheme };
