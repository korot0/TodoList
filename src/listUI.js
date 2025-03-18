import { Lists } from "./lists";

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

// This function currently clears the array the re-renders every time an element is added. Think about how we can keep track of the state so we don't have to re-render.+
export const renderLists = () => {
  const listsContainer = document.querySelector("#lists");
  listsContainer.textContent = "";
  Lists.getLists().forEach((list) => {
    renderList(list.getName());
  });
};
