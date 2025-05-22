import { ListManager } from "./ListManager";

export const renderTasks = (list, parent) => {
  list.tasks.forEach((task) => {
    const taskEl = createTaskElement(task.title, task.priority);
    parent.appendChild(taskEl);
  });
};

const createTaskElement = (taskTitle, taskPriority) => {
  const li = document.createElement("li");
  const priorityStyle = stylePriority(taskPriority);
  li.classList.add("list-group-item", priorityStyle);

  const input = document.createElement("input");
  input.classList.add("form-check-input");
  input.type = "checkbox";
  input.id = formatTaskID(taskTitle);

  const label = document.createElement("label");
  label.classList.add("ms-2");
  label.htmlFor = input.id;
  label.textContent = taskTitle;

  const deleteIcon = createDeleteIcon(taskTitle);

  li.append(input, label, deleteIcon);
  return li;
};

const formatTaskID = (taskTitle) => taskTitle.replace(/\s+/g, "-");

const createDeleteIcon = (taskTitle) => {
  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "hide", "delete-btn");
  button.textContent = "delete";
  button.value = taskTitle;
  return button;
};

const stylePriority = (priority) => {
  if (priority === "medium") return "list-group-item-warning";
  if (priority === "high") return "list-group-item-danger";
  // "list-group-item-success" for green
};

/* Reset UI */
export const resetTasksUI = () => {
  document.querySelector().textContent = "";
};

/* Task deletion */
export const setupDeleteBtnsListeners = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const listTarget = button.value;
      console.log(listTarget);
    });
  });
};
