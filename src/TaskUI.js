import { updateScreen } from "./UpdateScreen";

export const renderTasks = (list, parent) => {
  const tasks = list.getTasks();
  if (tasks.length === 0) renderEmptyState(parent);
  else renderTaskList(tasks, parent, list);
};

const renderTaskList = (tasks, parent, list) => {
  tasks.forEach((task) => {
    const taskEl = renderTaskElement(
      task.title,
      task.description,
      task.priority,
      task.formattedDate,
      list
    );
    parent.appendChild(taskEl);
  });
};

const renderEmptyState = (parent) => {
  const span = document.createElement("span");
  span.classList.add("text-center");
  span.textContent = "•ᴗ•";
  span.classList.add("list-empty-state");
  parent.appendChild(span);
};

const renderTaskElement = (
  taskTitle,
  taskDescription,
  taskPriority,
  taskDueDate,
  list
) => {
  const li = createLi(taskPriority);
  const titleAndBtnFlexContainer = createFlexContainer();
  const checkbox = createCheckbox(taskTitle);
  const label = createLabel(taskTitle, checkbox.id);
  const description = createDescription(taskDescription);

  // Delete Btn
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("material-symbols-outlined", "task-delete-btn");
  deleteBtn.textContent = "delete";
  deleteBtn.setAttribute("data-bs-toggle", "modal");
  deleteBtn.setAttribute("data-bs-target", "#deleteTaskModal");
  attachDeleteBtnListener(deleteBtn, taskTitle, list);

  titleAndBtnFlexContainer.append(checkbox, label, deleteBtn);
  li.append(titleAndBtnFlexContainer, description);

  createDueDate(taskDueDate, li);

  return li;
};

const createLi = (taskPriority) => {
  const li = document.createElement("li");
  const priorityStyle = stylePriority(taskPriority);
  li.classList.add("list-group-item", priorityStyle);
  return li;
};

const createFlexContainer = () => {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("card-li-container");
  return flexContainer;
};

const createCheckbox = (taskTitle) => {
  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input");
  checkbox.type = "checkbox";
  checkbox.id = formatTaskID(taskTitle);
  return checkbox;
};

const createLabel = (taskTitle, checkBoxId) => {
  const label = document.createElement("label");
  label.classList.add("ms-2");
  label.htmlFor = checkBoxId;
  label.textContent = taskTitle;
  return label;
};

const createDescription = (taskDescription) => {
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = taskDescription;
  return description;
};

const createDueDate = (taskDueDate, li) => {
  if (taskDueDate !== undefined) {
    const div = document.createElement("div");
    div.textContent = taskDueDate;
    div.classList.add("date", "text-body");
    li.appendChild(div);
  }
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
  return "no-priority";
};
