// Reset form when user clicks outside of modal, close button and x button.
import { createList } from "./listController";

export const createListForm = (function () {
  const listForm = document.querySelector("#list-modal-form");
  listForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const listName = document.querySelector("#list-name").value;
    const listPriority = document.querySelector("#list-priority-select").value;

    createList(listName, listPriority);

    listForm.reset();
    document.querySelector("#close-list-modal-btn").click(); // Close Modal
  });
})();
