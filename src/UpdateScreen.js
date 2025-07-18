import {
  renderLists,
  renderListsAccordion,
  renderSelectListsAccordion,
  resetListsUI,
} from "./ListUI";

export const updateScreen = () => {
  resetListsUI();
  renderUI();
};

const renderUI = () => {
  renderSelectListsAccordion();
  renderListsAccordion();
  renderLists();
};
