import { ListManager } from "./ListManager";

const onTaskFormSubmit = (e) => {
  e.preventDefault();
  submitTask();
  resetTaskModal();
};

const submitTask = () => {
  const title = getTaskTitle();
  const description = getTaskDescription();
  const priority = getTaskPriority();
  const dueDate = getTaskDueDate();

  const targetList = getTargetListName();
  const list = ListManager.getList(targetList);
  list.addTask(title, description, priority, dueDate);
};

const getTaskTitle = () => document.querySelector("#task-title").value;

const getTaskDescription = () =>
  document.querySelector("#task-description").value;

const getTaskPriority = () =>
  document.querySelector("#task-priority-select").value;

const getTaskDueDate = () => document.querySelector("#task-due-date").value;

const getTargetListName = () => document.querySelector("#list-select").value;

const resetTaskModal = () => {
  resetTaskForm();
  closeTaskModal();
};

const resetTaskForm = () => {
  document.querySelector("#task-modal-form").reset();
};

const closeTaskModal = () => {
  document.querySelector("#close-task-modal-btn").click();
};

export const handleTaskForm = (() => {
  document
    .querySelector("#task-modal-form")
    .addEventListener("submit", onTaskFormSubmit);
})();
