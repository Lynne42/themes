window.onload = function () {
  const pressedButtonSelector = '[data-theme][aria-pressed="true"]';
  const defaultTheme = "green";

  const applyTheme = (theme) => {
    const target = document.querySelector(`[data-theme="${theme}"]`);
    document.documentElement.setAttribute("data-selected-theme", theme);
    document
      .querySelector(pressedButtonSelector)
      .setAttribute("aria-pressed", "false");
    target.setAttribute("aria-pressed", "true");
  };

  const handleThemeSelection = (event) => {
    const target = event.target;
    const isPressed = target.getAttribute("aria-pressed");

    if (isPressed !== "true") {
      const theme = target.getAttribute("data-theme");
      applyTheme(theme);
      localStorage.setItem("selected-theme", theme);
    }
  };

  const setInitialTheme = () => {
    const savedTheme = localStorage.getItem("selected-theme");
    if (savedTheme && savedTheme !== defaultTheme) {
      applyTheme(savedTheme);
    }
  };

  setInitialTheme();

  const themeSwitcher = document.querySelector(".theme-switcher");
  const buttons = themeSwitcher.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", handleThemeSelection);
  });
};
