import { updateScreen } from "./UpdateScreen";

export const renderTasks = (list, parent) => {
  list.getTasks().forEach((task) => {
    const taskEl = createTaskElement(task.title, task.priority, list);
    parent.appendChild(taskEl);
  });
};

const createTaskElement = (taskTitle, taskPriority, list) => {
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

  const deleteBtn = createDeleteButton(taskTitle, list);

  li.append(input, label, deleteBtn);
  return li;
};

const formatTaskID = (taskTitle) => taskTitle.replace(/\s+/g, "-");

const createDeleteButton = (taskTitle, list) => {
  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "hide", "delete-btn");
  button.textContent = "delete";
  button.value = taskTitle;
  setupDeleteBtnListener(button, list);
  return button;
};

const setupDeleteBtnListener = (button, list) => {
  button.addEventListener("click", () => {
    const taskTarget = button.value;
    list.removeTask(taskTarget);
    updateScreen();
  });
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
