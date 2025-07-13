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

/* FOR RENAMING LISTS */
const onRenameListFormSubmit = (e) => {
  e.preventDefault();
  submitRenameList();
  resetRenameListModal();
  updateScreen();
};

const submitRenameList = () => {
  const currentName = retrieveNameFromBuffer();
  const newName = document.querySelector("#new-list-name").value;
  ListManager.renameList(currentName, newName);
};

const resetRenameListModal = () => {
  const form = document.querySelector("#rename-list-modal-form");
  form.reset();
  form.setAttribute("data-buffer", "");
  document.querySelector("#close-rename-list-modal").click();
};

const retrieveNameFromBuffer = () => {
  return document
    .querySelector("#rename-list-modal-form")
    .getAttribute("data-buffer");
};

export const handleRenameListForm = (() => {
  document
    .querySelector("#rename-list-modal-form")
    .addEventListener("submit", onRenameListFormSubmit);
})();
