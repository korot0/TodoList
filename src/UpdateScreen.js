import {
  renderCards,
  renderListsAccordion,
  renderSelectListsAccordion,
  resetListsUI,
} from "./ListUI";
import { setupDeleteBtnsListeners } from "./TaskUI";

export const updateScreen = () => {
  resetListsUI();
  renderUI();
  setupDeleteBtnsListeners();
};

const renderUI = () => {
  renderSelectListsAccordion();
  renderListsAccordion();
  renderCards();
};
