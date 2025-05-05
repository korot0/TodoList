import { ListManager } from "./ListManager";

const onListFormSubmit = (e) => {
  e.preventDefault();
  submitList();
  resetModal();
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
