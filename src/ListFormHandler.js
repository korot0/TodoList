import { ListManager } from "./ListManager";
import {
  renderListsAccordion,
  renderCards,
  resetListsUI,
  renderSelectListsAccordion,
} from "./ListUI";

// Not srp compliant? might need to split, currently calling too many functions
const onListFormSubmit = (e) => {
  e.preventDefault();
  submitList();

  resetModal();
  resetListsUI();

  renderSelectListsAccordion();
  renderListsAccordion();
  renderCards();
};

const submitList = () => {
  const name = document.querySelector("#list-name").value;
  ListManager.createList(name);
};

const resetModal = () => {
  document.querySelector("#list-modal-form").reset();
  document.querySelector("#close-list-modal-btn").click();
};

export const handleListForm = (() => {
  document
    .querySelector("#list-modal-form")
    .addEventListener("submit", onListFormSubmit);
})();
