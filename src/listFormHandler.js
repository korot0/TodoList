import { createList } from "./lists";

// Immediately invoked function expression (IIFE)
export const handleListForm = (() => {
  const listForm = document.querySelector("#list-modal-form");
  listForm.addEventListener("submit", onListFormSubmit);
})();

const onListFormSubmit = (e) => {
  e.preventDefault();
  createList(getListName());
  resetListForm();
  closeListModal();
};

const getListName = () => document.querySelector("#list-name").value;

const resetListForm = () => document.querySelector("#list-modal-form").reset();

const closeListModal = () =>
  document.querySelector("#close-list-modal-btn").click();
