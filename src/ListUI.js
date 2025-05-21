import { ListManager } from "./ListManager";
import { renderTasks } from "./TaskUI";

export const renderCards = () => {
  const cardContainer = document.querySelector("#card-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const card = createListCardElement(list.name);
    cardContainer.appendChild(card);
    /* Replace the whitespaces with dashes and add -ul at the end.
    This helps us look for the appropriate parent id so we can append the list. */
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
  ul.id = `${listName.replace(/\s+/g, "-")}-ul`; // This regex replaces whitespaces with dashes for proper html ids. We also add -ul at the end so we don't override the ids generated from createTaskElement in TaskUI.js

  div.appendChild(h5);
  div.appendChild(ul);
  return div;
};

/* TODO */
// Description and date

export const renderListsAccordion = () => {
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

export const renderSelectListsAccordion = () => {
  const container = document.querySelector("#list-select-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const optionEl = createSelectListElement(list.name);
    container.appendChild(optionEl);
  });
};

const createSelectListElement = (listName) => {
  const option = document.createElement("option");
  option.value = listName;
  option.textContent = listName;
  return option;
};

export const resetListsUI = () => {
  document.querySelector("#card-container").textContent = "";
  document.querySelector("#lists-accordion-body").textContent = "";
  document.querySelector("#list-select-container").textContent = "";
};
