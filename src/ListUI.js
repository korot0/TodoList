import { Toast } from "bootstrap";
import { ListManager } from "./ListManager";
import { displayTasksUI } from "./TaskUI";
import { updateScreen } from "./UpdateScreen";
import { StorageManager } from "./StorageManager";

/* Rendering list cards in main content */
export const renderLists = () => {
  const cardContainer = document.querySelector("#card-container");
  const lists = ListManager.getCheckedLists();
  renderCards(lists, cardContainer);
};

const renderCards = (lists, cardContainer) => {
  lists.forEach((list) => {
    createCard(list, cardContainer);
  });
};

const createCard = (list, cardContainer) => {
  createListCardElement(list.getName(), cardContainer);
  const ulParentEl = assignParentIDtoTask(list.getName());
  displayTasksUI(list, ulParentEl);
};

const assignParentIDtoTask = (listName) => {
  const ulParentID = formatListULID(listName);
  return document.querySelector(`#${ulParentID}`);
};

const createListCardElement = (listName, cardContainer) => {
  const div = document.createElement("div");
  div.classList.add("card");
  const header = createCardHeader(listName);
  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");
  ul.id = formatListULID(listName);
  div.append(header, ul);
  cardContainer.append(div);
  return div;
};

const createCardHeader = (listName) => {
  const cardHeader = header();
  const h5 = createHeaderEl(listName);
  const dropdown = createDropdown(listName);
  cardHeaderAppendHandler(cardHeader, h5, dropdown);
  return cardHeader;
};

const header = () => {
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header-container", "card-header");
  return cardHeader;
};

const createHeaderEl = (listName) => {
  const h5 = document.createElement("h5");
  h5.textContent = listName;
  return h5;
};

const cardHeaderAppendHandler = (cardHeader, h5, dropdown) => {
  // Having an undefined dropdown means its our default list// Having an undefined dropdown means its our default list
  if (dropdown === undefined) cardHeader.appendChild(h5);
  else cardHeader.append(h5, dropdown);
};

const createDropdown = (listName) => {
  if (listName === "My Tasks") return; // We don't want to delete or rename our default list
  const container = dropdownContainer();
  const button = dropdownBtn();
  const ul = dropdownUl();
  const renameLi = dropdownRenameList(listName);
  const deleteLi = dropdownDeleteList(listName);
  dropdownUlAppendHandler(ul, renameLi, deleteLi);
  dropdownContainerAppendHandler(container, button, ul);
  return container;
};

const dropdownUlAppendHandler = (ul, renameLi, deleteLi) => {
  ul.append(renameLi, deleteLi);
};

const dropdownContainerAppendHandler = (container, button, ul) => {
  container.append(button, ul);
};

const dropdownContainer = () => {
  const div = document.createElement("div");
  div.classList.add("list-dropdown");
  return div;
};

const dropdownBtn = () => {
  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "list-dropdown-btn");
  button.setAttribute("data-bs-toggle", "dropdown");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "more_vert";
  return button;
};

const dropdownUl = () => {
  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu");
  return ul;
};

const dropdownRenameList = (listName) => {
  const renameLi = document.createElement("li");
  const renameBtn = document.createElement("button");
  renameBtn.classList.add("dropdown-item");
  renameBtn.setAttribute("data-bs-toggle", "modal");
  renameBtn.setAttribute("data-bs-target", "#renameListModal");
  renameBtn.textContent = "Rename";
  renameLi.appendChild(renameBtn);
  attachRenameBtnListener(renameBtn, listName);
  return renameLi;
};

const dropdownDeleteList = (listName) => {
  const deleteLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dropdown-item", "text-danger");
  deleteBtn.setAttribute("data-bs-toggle", "modal");
  deleteBtn.setAttribute("data-bs-target", "#deleteListModal");
  deleteBtn.textContent = "Delete";
  deleteLi.appendChild(deleteBtn);
  attachDeleteBtnListener(deleteBtn, listName);
  return deleteLi;
};

const formatListULID = (listName) => `${listName.replace(/\s+/g, "-")}-ul`;

const attachDeleteBtnListener = (button, listName) => {
  button.addEventListener("click", () => {
    renderDeleteTaskModalText(listName);
    deleteListConfirmation(listName);
  });
};

const deleteListConfirmation = (listName) => {
  const listModalDeleteBtn = document.querySelector("#list-modal-delete-btn");
  listModalDeleteBtn.onclick = () => {
    const list = ListManager.getList(listName);
    ListManager.removeList(list);
    StorageManager.removeListAndStoreData(listName);
    updateScreen();
  };
};

const renderDeleteTaskModalText = (listName) => {
  const text = document.querySelector("#delete-list-text-confirmation");
  text.textContent = `This action will delete "${listName}" and all of its tasks.`;
};

const attachRenameBtnListener = (button, listName) => {
  button.addEventListener("click", () => {
    const form = document.querySelector("#rename-list-modal-form");
    form.setAttribute("data-buffer", listName);
  });
};

/* Rendering lists in sidebar accordion */
export const renderListsAccordion = () => {
  const accordion = document.querySelector("#lists-accordion-body");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const accordionList = createListAccordionElement(list.getName());
    accordion.appendChild(accordionList);
  });
};

const createListAccordionElement = (listName) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input", "me-1", "list-checkbox");
  checkbox.type = "checkbox";
  checkbox.id = formatListCheckboxID(listName);
  setListCheckboxUI(checkbox, listName);
  attachListCheckboxListener(checkbox, listName);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("form-check-label", "ms-2");
  checkBoxLabel.htmlFor = checkbox.id;
  checkBoxLabel.textContent = listName;

  li.append(checkbox, checkBoxLabel);
  return li;
};

const formatListCheckboxID = (listName) =>
  `${listName.replace(/\s+/g, "-")}-checkbox`;

/* Handle checked lists */
const setListCheckboxUI = (checkbox, listName) => {
  checkbox.checked = ListManager.getList(listName).isChecked;
};

const updateListCheckedStatus = (listName) => {
  const list = ListManager.getList(listName);
  list.isChecked = !list.isChecked;
};

const attachListCheckboxListener = (checkbox, listName) => {
  checkbox.addEventListener("click", () => {
    updateListCheckedStatus(listName);
    updateScreen();
  });
};

/* Rendering lists in dropdown element in "+ Create Task" form */
export const renderSelectListsAccordion = () => {
  const cardContainer = document.querySelector("#list-select-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const optionEl = createSelectListElement(list.getName());
    cardContainer.appendChild(optionEl);
  });
};

const createSelectListElement = (listName) => {
  const option = document.createElement("option");
  option.textContent = listName;
  return option;
};

/* Reset UI */
export const resetListsUI = () => {
  document.querySelector("#card-container").textContent = "";
  document.querySelector("#lists-accordion-body").textContent = "";
  document.querySelector("#list-select-container").textContent = "";
};

/* List Toast */
export const showListToast = () => {
  const listToast = document.getElementById("list-toast");
  const toast = Toast.getOrCreateInstance(listToast);
  toast.show();
};
