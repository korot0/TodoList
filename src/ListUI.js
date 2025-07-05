import { ListManager } from "./ListManager";
import { renderTasks } from "./TaskUI";
import { updateScreen } from "./UpdateScreen";

/* Rendering list cards in main content */
export const renderCards = () => {
  const cardContainer = document.querySelector("#card-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const card = createListCardElement(list.name);
    cardContainer.appendChild(card);

    const ulParentID = formatListULID(list.name);
    const ulParent = document.querySelector(`#${ulParentID}`);

    renderTasks(list, ulParent);
  });
};

const createListCardElement = (listName) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const header = createCardHeader(listName);

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");
  ul.id = formatListULID(listName);

  div.append(header, ul);
  return div;
};

const createCardHeader = (listName) => {
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header-container", "card-header");

  const h5 = document.createElement("h5");
  h5.textContent = listName;

  const editBtn = document.createElement("button");
  editBtn.classList.add("material-symbols-outlined", "list-edit-btn");
  editBtn.textContent = "edit";
  editBtn.value = listName;
  attachEditBtnListener(editBtn, listName);

  cardHeader.append(h5, editBtn);
  return cardHeader;
};

const attachEditBtnListener = (button, listName) => {
  button.addEventListener("click", () => {
    onEdit(listName);
    // updateScreen();
  });
};

const onEdit = (listName) => {
  const list = ListManager.getList(listName);
  console.log(list.name);
};

const formatListULID = (listName) => `${listName.replace(/\s+/g, "-")}-ul`;

/* Rendering lists in sidebar accordion */
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
  checkBoxInput.id = formatListCheckboxID(listName);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("form-check-label", "ms-2");
  checkBoxLabel.htmlFor = checkBoxInput.id;
  checkBoxLabel.textContent = listName;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("material-symbols-outlined", "list-delete-btn");
  deleteBtn.textContent = "delete";
  deleteBtn.value = listName;
  attachDeleteBtnListener(deleteBtn, listName);

  li.append(checkBoxInput, checkBoxLabel, deleteBtn);
  return li;
};

const formatListCheckboxID = (listName) =>
  `${listName.replace(/\s+/g, "-")}-checkbox`;

const attachDeleteBtnListener = (button, listName) => {
  button.addEventListener("click", () => {
    onDelete(listName);
    updateScreen();
  });
};

const onDelete = (listName) => {
  const list = ListManager.getList(listName);
  ListManager.removeList(list);
};

/* Rendering lists in dropdown element in "+ Create Task" form */
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

/* Reset UI */
export const resetListsUI = () => {
  document.querySelector("#card-container").textContent = "";
  document.querySelector("#lists-accordion-body").textContent = "";
  document.querySelector("#list-select-container").textContent = "";
};

/* Duplicate list popup */
