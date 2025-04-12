import { Lists } from "./lists";
/* TODO */
// Doing too many things at once, need to refactor
const renderList = (name) => {
  // ul element
  const listsContainer = document.querySelector("#lists");
  // li element
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  listsContainer.appendChild(li);
  // label element
  const label = document.createElement("label");
  li.appendChild(label);
  // input element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = true;
  checkbox.classList.add("form-check-input");
  checkbox.classList.add("me-2");
  label.appendChild(checkbox);
  // span text
  const span = document.createElement("span");
  span.textContent = name;
  label.appendChild(span);
};

/* TODO */
// Render list
