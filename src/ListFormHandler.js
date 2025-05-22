import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";

// Not srp compliant? might need to split, currently calling too many functions
const onListFormSubmit = (e) => {
  e.preventDefault();
  submitList();
  resetListModal();
  updateScreen();
};

const submitList = () => {
  const name = document.querySelector("#list-name").value;
  ListManager.createList(name);
};

const resetListModal = () => {
  document.querySelector("#list-modal-form").reset();
  document.querySelector("#close-list-modal-btn").click();
};

export const handleListForm = (() => {
  document
    .querySelector("#list-modal-form")
    .addEventListener("submit", onListFormSubmit);
})();
