import { set } from "date-fns";
import { ListManager } from "./ListManager";
import { TaskFilterManager } from "./TaskFilters";
import { updateScreen } from "./UpdateScreen";

export const displayTasksUI = (list, parent) => {
  displayActiveTasks(list, parent);
  displayCompletedTasks(list, parent);
};

const displayActiveTasks = (list, parent) => {
  const tasks = list.getTasks();
  if (tasks.length === 0) renderEmptyState(parent);
  else renderTasks(list, parent, tasks);
};

const displayCompletedTasks = (list, parent) => {
  if (TaskFilterManager.getCurrentFilter() !== "All Tasks") return;

  const completedTasks = list.getCompletedTasks();
  if (completedTasks.length !== 0) renderCompletedTasksHeader(parent);
  renderCompletedTasks(parent, completedTasks, list);
};

const renderTasks = (list, parent, tasks) => {
  tasks.forEach((task) => {
    const taskEl = createTaskElement(
      task.title,
      task.description,
      task.priority,
      task.formattedDate,
      list,
      task
    );
    parent.appendChild(taskEl);
  });
};

const renderEmptyState = (parent) => {
  const span = document.createElement("span");
  span.textContent = "family_star";
  span.classList.add(
    "material-symbols-outlined",
    "list-empty-state",
    "text-secondary"
  );
  parent.appendChild(span);
};

const createTaskElement = (
  taskTitle,
  taskDescription,
  taskPriority,
  taskDueDate,
  list,
  task
) => {
  const li = createLi(taskPriority);
  const titleAndBtnFlexContainer = createFlexContainer();
  const checkbox = createCheckbox(taskTitle, list);
  const label = createLabel(taskTitle, checkbox.id);
  const description = createDescription(taskDescription);
  const dropdown = createDropdown(taskTitle, task, list);
  titleAndBtnFlexContainer.append(checkbox, label, dropdown);
  li.append(titleAndBtnFlexContainer, description);
  createDueDate(taskDueDate, li);
  return li;
};

const createDropdown = (taskTitle, task, list) => {
  const div = document.createElement("div");
  div.classList.add("list-dropdown");

  const button = document.createElement("button");
  button.classList.add("material-symbols-outlined", "task-dropdown");
  button.setAttribute("data-bs-toggle", "dropdown");
  button.setAttribute("aria-expanded", "false");
  button.textContent = "more_vert";

  const ul = document.createElement("ul");
  ul.classList.add("dropdown-menu");

  const detailsLi = document.createElement("li");
  const detailsBtn = document.createElement("button");
  detailsBtn.classList.add("dropdown-item");
  detailsBtn.setAttribute("data-bs-toggle", "modal");
  detailsBtn.setAttribute("data-bs-target", "#details-modal");
  detailsBtn.textContent = "Details";
  detailsLi.appendChild(detailsBtn);
  attachDetailsBtnListener(detailsBtn, task);

  const deleteLi = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("dropdown-item", "text-danger");
  deleteBtn.setAttribute("data-bs-toggle", "modal");
  deleteBtn.setAttribute("data-bs-target", "#deleteTaskModal");
  deleteBtn.textContent = "Delete";
  deleteLi.appendChild(deleteBtn);
  attachDeleteBtnListener(deleteBtn, taskTitle, list);

  ul.append(detailsLi, deleteLi);
  ul.append(deleteLi);
  div.append(button, ul);
  return div;
};

const attachDetailsBtnListener = (button, task) => {
  button.addEventListener("click", () => {
    populateTaskDetailsForm(task);
    DetailsActiveTaskManager.setCurrentTask(task);
  });
};

const populateTaskDetailsForm = (task) => {
  document.querySelector("#details-task-title").value = task.title;
  document.querySelector("#details-task-description").value = task.description;
  document.querySelector("#details-task-priority-select").value = task.priority;
  document.querySelector("#details-task-due-date").value = task.date;
};

export const DetailsActiveTaskManager = (() => {
  let activeTask;
  return {
    setCurrentTask: (task) => (activeTask = task),
    getCurrentTask: () => activeTask,
  };
})();

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

const createCheckbox = (taskTitle, list) => {
  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input");
  checkbox.type = "checkbox";
  checkbox.id = formatTaskID(taskTitle);
  attachCheckboxListener(checkbox, taskTitle, list);
  return checkbox;
};

const attachCheckboxListener = (checkbox, taskTitle, list) => {
  checkbox.addEventListener("click", () => {
    list.completeTask(taskTitle);
    updateScreen();
  });
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

/* COMPLETED TASKS */
const renderCompletedTasks = (parent, completedTasks, list) => {
  completedTasks.forEach((task) => {
    const completedTaskEl = createCompletedTaskElement(
      task.title,
      task.description,
      task.priority,
      task.formattedDate,
      list
    );
    parent.appendChild(completedTaskEl);
  });
};

const createCompletedTaskElement = (
  taskTitle,
  taskDescription,
  taskPriority,
  taskDueDate,
  list
) => {
  const li = createLi(taskPriority);
  const titleAndBtnFlexContainer = createFlexContainer();
  const checkbox = createCompletedCheckbox();
  const label = createLabel(taskTitle, checkbox.id);
  const description = createDescription(taskDescription);
  const deleteBtn = createDeleteBtn(list, taskTitle);
  titleAndBtnFlexContainer.append(checkbox, label, deleteBtn);
  applyCompletedTaskStyle(li, label);
  li.append(titleAndBtnFlexContainer, description);
  createDueDate(taskDueDate, li);
  return li;
};

const applyCompletedTaskStyle = (li, label) => {
  li.style.opacity = "0.8";
  label.classList.add("completed-task-label");
};

const createCompletedCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  applyCompletedCheckboxStyle(checkbox);
  return checkbox;
};

const applyCompletedCheckboxStyle = (checkbox) => {
  checkbox.classList.add("form-check-input");
  checkbox.checked = true;
  checkbox.style.pointerEvents = "none";
};

const createCompletedTasksHeader = () => {
  const header = document.createElement("h6");
  header.textContent = "Completed:";
  header.classList.add("completed-tasks-header");
  return header;
};

const createDeleteBtn = (list, taskTitle) => {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.classList.add(
    "material-symbols-outlined",
    "completed-task-delete-btn"
  );
  attachCompletedTaskDeleteListener(deleteBtn, list, taskTitle);
  return deleteBtn;
};

const attachCompletedTaskDeleteListener = (deleteBtn, list, taskTitle) => {
  deleteBtn.addEventListener("click", () =>
    handleCompletedTaskDelete(list, taskTitle)
  );
};

const handleCompletedTaskDelete = (list, taskTitle) => {
  const targetList = ListManager.getList(list.name);
  targetList.removeCompletedTask(taskTitle);
  updateScreen();
};

const renderCompletedTasksHeader = (parent) => {
  const header = createCompletedTasksHeader();
  parent.appendChild(header);
};
