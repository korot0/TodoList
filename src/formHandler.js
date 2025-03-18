// Reset form when user clicks outside of modal, close button and x button.
import { createList } from "./lists";

export const createListForm = (function () {
  const listForm = document.querySelector("#list-modal-form");
  listForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const listName = document.querySelector("#list-name").value;
    createList(listName); // Create a new list based on the data

    listForm.reset();
    document.querySelector("#close-list-modal-btn").click(); // Close Modal
  });
})();
