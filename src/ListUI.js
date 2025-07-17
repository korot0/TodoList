import { handleRenameListForm } from "./ListFormHandler";
import { ListManager } from "./ListManager";
import { renderTasks } from "./TaskUI";
import { updateScreen } from "./UpdateScreen";
import { ActiveListsManager } from "./ActiveListsManager";

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

  const dropdown = renderDropdown(listName);

  cardHeader.append(h5, dropdown);
  return cardHeader;
};

const renderDropdown = (listName) => {
  const div = document.createElement("div");
  div.classList.add("list-dropdown");

  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "list-dropdown-btn");
  button.setAttribute("data-bs-toggle", "dropdown");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "more_vert";

  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu");

  const renameLi = document.createElement("li");
  const renameBtn = document.createElement("button");
  renameBtn.classList.add("dropdown-item");
  renameBtn.setAttribute("data-bs-toggle", "modal");
  renameBtn.setAttribute("data-bs-target", "#renameListModal");
  renameBtn.textContent = "Rename";
  renameLi.appendChild(renameBtn);
  attachRenameBtnListener(renameBtn, listName);

  const deleteLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dropdown-item", "text-danger");
  deleteBtn.setAttribute("data-bs-toggle", "modal");
  deleteBtn.setAttribute("data-bs-target", "#deleteListModal");
  deleteBtn.textContent = "Delete";
  deleteLi.appendChild(deleteBtn);
  attachDeleteBtnListener(deleteBtn, listName);

  ul.append(renameLi, deleteLi);
  div.append(button, ul);
  return div;
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
    const accordionList = createListAccordionElement(list.name);
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
  checkbox.checked = true;
  attachListCheckboxListener(checkbox);

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.classList.add("form-check-label", "ms-2");
  checkBoxLabel.htmlFor = checkbox.id;
  checkBoxLabel.textContent = listName;

  li.append(checkbox, checkBoxLabel);
  return li;
};

const formatListCheckboxID = (listName) =>
  `${listName.replace(/\s+/g, "-")}-checkbox`;

/* Handle checked lists filter */
const updateListCheckboxStatus = () => {
  const checkedLists = [];
  const checkboxes = document.querySelectorAll(".list-checkbox");

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const listLabelText = document.querySelector(
        `label[for="${checkbox.id}"]`
      ).textContent;
      checkedLists.push(listLabelText);
    }
  });
  ActiveListsManager.setSelectedLists(checkedLists);
  checkedLists.forEach((list) => console.log(list));
};

const attachListCheckboxListener = (checkbox) => {
  checkbox.addEventListener("click", () => {
    updateListCheckboxStatus();
  });
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
  option.textContent = listName;
  return option;
};

/* Reset UI */
export const resetListsUI = () => {
  document.querySelector("#card-container").textContent = "";
  document.querySelector("#lists-accordion-body").textContent = "";
  document.querySelector("#list-select-container").textContent = "";
};
