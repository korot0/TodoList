import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { handleDetailsTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";
import { attachFilterBtnListener } from "./TaskFilters";
import { StorageManager } from "./StorageManager";

/* If "My Tasks" does not exist then create it and store it */
if (!localStorage.getItem("My Tasks")) {
  ListManager.createList("My Tasks");
}

/* Load data then update UI */
StorageManager.loadData();
updateScreen();

// Dark/Light theme preference: https://getbootstrap.com/docs/5.3/customize/color-modes/
(() => {
  const getStoredTheme = () => localStorage.getItem("theme");

  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  };

  // Initialize theme on load
  setTheme(getPreferredTheme());

  // Listen for system theme changes only if user has no stored preference
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!getStoredTheme()) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

  // Optional: expose a simple function to toggle and store theme if needed
  window.toggleTheme = (theme) => {
    setStoredTheme(theme);
    setTheme(theme);
  };
})();
