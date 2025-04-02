const onListFormSubmit = (e) => {
  e.preventDefault();
  resetListForm();
  closeListModal();

  /* TODO */
  // Add list to lists
};

const getListName = () => document.querySelector("#list-name").value;

const resetListForm = () => {
  document.querySelector("#list-modal-form").reset();
};

const closeListModal = () => {
  document.querySelector("#close-list-modal-btn").click();
};

export const handleListForm = (() => {
  document
    .querySelector("#list-modal-form")
    .addEventListener("submit", onListFormSubmit); // call function to handle form submission
})();
