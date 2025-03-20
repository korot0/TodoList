// Reset form when user clicks outside of modal, close button and x button.
import { createList } from "./lists";

export const handleListForm = (function () {
  const listForm = document.querySelector("#list-modal-form");
  listForm.addEventListener("submit", onListFormSubmit);
})();

function onListFormSubmit(e) {
  e.preventDefault();
  createList(getListName());
  resetListForm();
  closeListModal();
}

function getListName() {
  return document.querySelector("#list-name").value;
}

function resetListForm() {
  document.querySelector("#list-modal-form").reset();
}

function closeListModal() {
  document.querySelector("#close-list-modal-btn").click();
}
