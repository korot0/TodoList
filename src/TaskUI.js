import { updateScreen } from "./UpdateScreen";

export const renderTasks = (list, parent) => {
  list.getTasks().forEach((task) => {
    const taskEl = createTaskElement(
      task.title,
      task.priority,
      task.formattedDate,
      list
    );
    parent.appendChild(taskEl);
  });
};

const createTaskElement = (taskTitle, taskPriority, taskDueDate, list) => {
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
  const div = document.createElement("div");
  div.textContent = taskDueDate;
  div.classList.add("date", "text-dark-emphasis", "shadow-lg");
  label.append(div);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("material-symbols-outlined", "task-delete-btn");
  deleteBtn.textContent = "delete";
  deleteBtn.setAttribute("data-bs-toggle", "modal");
  deleteBtn.setAttribute("data-bs-target", "#deleteTaskModal");
  attachDeleteBtnListener(deleteBtn, taskTitle, list);

  li.append(input, label, deleteBtn);
  return li;
};

const attachDeleteBtnListener = (button, taskTitle, list) => {
  button.addEventListener("click", () => {
    renderDeleteTextConfirmation(taskTitle);
    deleteTaskConfirmation(taskTitle, list);
  });
};

const deleteTaskConfirmation = (taskTitle, list) => {
  const taskModalDeleteBtn = document.querySelector("#task-modal-delete-btn");
  taskModalDeleteBtn.onclick = () => {
    list.removeTask(taskTitle);
    updateScreen();
  };
};

const renderDeleteTextConfirmation = (taskTitle) => {
  const text = document.querySelector("#delete-text-confirmation");
  text.textContent = `Are you sure you want to delete "${taskTitle}"?`;
};

const formatTaskID = (taskTitle) => taskTitle.replace(/\s+/g, "-");

const stylePriority = (priority) => {
  if (priority === "high") return "list-group-item-danger";
  if (priority === "medium") return "list-group-item-warning";
  // "list-group-item-success" for green
};
