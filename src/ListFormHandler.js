import { ListManager } from "./ListManager";
import { renderAccordion, renderCards, resetListsUI } from "./ListUI";

// Not srp compliant? might need to split
const onListFormSubmit = (e) => {
  e.preventDefault();
  submitList();
  resetModal();
  resetListsUI();
  renderAccordion();
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
