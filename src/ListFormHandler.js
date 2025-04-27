import { ListManager } from "./ListManager";

const onListFormSubmit = (e) => {
  e.preventDefault();
  submitList();
  resetModal();
};

const submitList = () => {
  const name = getListName();
  ListManager.createList(name);
};

const getListName = () => document.querySelector("#list-name").value;

const resetModal = () => {
  resetListForm();
  closeListModal();
};

const resetListForm = () => {
  document.querySelector("#list-modal-form").reset();
};

const closeListModal = () => {
  document.querySelector("#close-list-modal-btn").click();
};

export const handleListForm = (() => {
  document
    .querySelector("#list-modal-form")
    .addEventListener("submit", onListFormSubmit);
})();
