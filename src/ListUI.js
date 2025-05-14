import { ListManager } from "./ListManager";
import { renderTasks } from "./TaskUI";

// Might need to refactor the way html ids are being created
// Might be breaking SRP because of how ids are being handled

export const renderCards = () => {
  const cardContainer = document.querySelector("#card-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const card = createListCardElement(list.name);
    cardContainer.appendChild(card);
    const ulParentID = `${list.name.replace(/\s+/g, "-")}-ul`;
    const ulParent = document.querySelector(`#${ulParentID}`);
    renderTasks(list, ulParent);
  });
};

const createListCardElement = (listName) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const h5 = document.createElement("h5");
  h5.textContent = listName;
  h5.classList.add("card-header");

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");
  ul.id = `${listName.replace(/\s+/g, "-")}-ul`;

  div.appendChild(h5);
  div.appendChild(ul);

  return div;
};

export const renderAccordion = () => {
  const accordion = document.querySelector("#lists-accordion-body");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const accordionList = createListAccordionElement(list.name);
    accordion.appendChild(accordionList);
  });
};

const createListAccordionElement = (listName) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const checkBoxInput = document.createElement("input");
  checkBoxInput.classList.add("form-check-input", "me-1");
  checkBoxInput.type = "checkbox";
  checkBoxInput.value = "";
  checkBoxInput.id = `${listName.replace(/\s+/g, "-")}-checkbox`;

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("form-check-label", "stretched-link");
  checkBoxLabel.htmlFor = checkBoxInput.id;
  checkBoxLabel.textContent = listName;

  li.appendChild(checkBoxInput);
  li.appendChild(checkBoxLabel);

  return li;
};
