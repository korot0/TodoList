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

  const dropdown = renderDropdown();
  // attachDropdownListener(dropdown, listName);

  cardHeader.append(h5, dropdown);
  return cardHeader;
};

const attachDropdownListener = (button, listName) => {
  button.addEventListener("click", () => {
    onClick(listName);
    // updateScreen();
  });
};

const renderDropdown = () => {
  const div = document.createElement("div");
  div.classList.add("list-dropdown-btn");

  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "dropdown-btn");
  button.setAttribute("data-bs-toggle", "dropdown");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "more_vert";

  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu");

  const renameLi = document.createElement("li");
  const renameBtn = document.createElement("button");
  renameBtn.classList.add("dropdown-item");
  renameBtn.textContent = "Rename";
  renameLi.appendChild(renameBtn);

  const deleteLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dropdown-item");
  deleteBtn.textContent = "Delete";
  deleteLi.appendChild(deleteBtn);

  ul.append(renameLi, deleteLi);
  div.append(button, ul);
  return div;
};

const onClick = (listName) => {
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

  li.append(checkBoxInput, checkBoxLabel);
  return li;
};

const attachDeleteBtnListener = (button, listName) => {
  button.addEventListener("click", () => {
    renderDeleteTextConfirmation(listName);
    deleteListConfirmation(listName);
  });
};

// const deleteBtn = document.createElement("button");
// deleteBtn.classList.add("material-symbols-outlined", "list-delete-btn");
// deleteBtn.textContent = "delete";
// deleteBtn.setAttribute("data-bs-toggle", "modal");
// deleteBtn.setAttribute("data-bs-target", "#deleteListModal");
// attachDeleteBtnListener(deleteBtn, listName);

const deleteListConfirmation = (listName) => {
  const listModalDeleteBtn = document.querySelector("#list-modal-delete-btn");
  listModalDeleteBtn.onclick = () => {
    const list = ListManager.getList(listName);
    ListManager.removeList(list);
    updateScreen();
  };
};

const renderDeleteTextConfirmation = (listName) => {
  const text = document.querySelector("#delete-list-text-confirmation");
  text.textContent = `This action will delete "${listName}" and all of its tasks.`;
};

const formatListCheckboxID = (listName) =>
  `${listName.replace(/\s+/g, "-")}-checkbox`;

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
