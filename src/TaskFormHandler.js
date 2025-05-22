import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";

const onTaskFormSubmit = (e) => {
  e.preventDefault();
  submitTask();
  resetTaskModal();
  updateScreen();
};

const submitTask = () => {
  const title = document.querySelector("#task-title").value;
  const description = document.querySelector("#task-description").value;
  const priority = document.querySelector("#task-priority-select").value;
  const dueDate = document.querySelector("#task-due-date").value;

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
