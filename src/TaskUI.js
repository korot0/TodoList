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

  // Expand button

  // Edit button

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("material-symbols-outlined", "task-delete-btn");
  deleteBtn.textContent = "delete";
  deleteBtn.value = taskTitle;
  attachDeleteBtnListener(deleteBtn, list);

  li.append(input, label, deleteBtn);
  return li;
};

const formatTaskID = (taskTitle) => taskTitle.replace(/\s+/g, "-");

// Refactor
const attachDeleteBtnListener = (button, list) => {
  button.addEventListener("click", () => {
    list.removeTask(button.value);
    updateScreen();
  });
};

const stylePriority = (priority) => {
  if (priority === "high") return "list-group-item-danger";
  if (priority === "medium") return "list-group-item-warning";
  // "list-group-item-success" for green
};
