const themeToggleLink = document.getElementById("theme-toggle");
const bodyElement = document.body;
const themeIcon = document.getElementById("theme-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  bodyElement.classList.add(savedTheme);
  updateThemeIcon(savedTheme);
} else {
  bodyElement.classList.add("light");
  updateThemeIcon("light");
}

themeToggleLink.addEventListener("click", function () {
  if (bodyElement.classList.contains("light")) {
    bodyElement.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    updateThemeIcon("dark");
  } else {
    bodyElement.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    updateThemeIcon("light");
  }
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.innerHTML = feather.icons.sun.toSvg();
  } else {
    themeIcon.innerHTML = feather.icons.moon.toSvg();
  }
}
