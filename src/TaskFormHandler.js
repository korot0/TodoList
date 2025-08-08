import { ListManager } from "./ListManager";
import { StorageManager } from "./StorageManager";
import { DetailsActiveTaskManager } from "./TaskUI";
import { updateScreen } from "./UpdateScreen";

const onTaskFormSubmit = (e) => {
  e.preventDefault();
  submitTaskForm();
  resetTaskModal();
  updateScreen();
  StorageManager.storeData();
};

const submitTaskForm = () => {
  const title = document.querySelector("#task-title").value;
  const description = document.querySelector("#task-description").value;
  const priority = document.querySelector("#task-priority-select").value;
  const dueDate = document.querySelector("#task-due-date").value;
  createTask(title, description, priority, dueDate);
};

const createTask = (title, description, priority, dueDate) => {
  const targetList = document.querySelector("#list-select-container").value;
  const list = ListManager.getList(targetList);
  list.addTask(title, description, priority, dueDate);
};

const resetTaskModal = () => {
  document.querySelector("#task-modal-form").reset();
  document.querySelector("#close-task-modal-btn").click();
};

export const handleTaskForm = (() => {
  document
    .querySelector("#task-modal-form")
    .addEventListener("submit", onTaskFormSubmit);
})();

/* EDITING TASK DETAILS */
const onDetailsTaskFormSubmit = (e) => {
  e.preventDefault();
  submitDetailsForm();
  closeDetailsFormModal();
  updateScreen();
  StorageManager.storeData();
};

const submitDetailsForm = () => {
  const title = document.querySelector("#details-task-title").value;
  const description = document.querySelector("#details-task-description").value;
  const priority = document.querySelector(
    "#details-task-priority-select"
  ).value;
  const dueDate = document.querySelector("#details-task-due-date").value;

  editTask(title, description, priority, dueDate);
};

const editTask = (title, description, priority, dueDate) => {
  const task = DetailsActiveTaskManager.getCurrentTask();
  task.editDetails(title, description, priority, dueDate);
};

const closeDetailsFormModal = () => {
  document.querySelector("#close-details-modal-btn").click();
};

export const handleDetailsTaskForm = (() => {
  document
    .querySelector("#details-modal-form")
    .addEventListener("submit", onDetailsTaskFormSubmit);
})();
