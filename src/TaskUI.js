import { ListManager } from "./ListManager";

export const renderTasks = () => {
  const tasksContainer = document.querySelector(".tasks-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const tasks = list.tasks;
    tasks.forEach((task) => {
      const taskEl = createTaskElement(task.title);
      tasksContainer.appendChild(taskEl);
    });
  });
};

const createTaskElement = (taskTitle) => {
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  const input = document.createElement("input");
  input.classList.add("form-check-input");
  input.type = "checkbox";
  input.value = "";
  input.id = taskTitle;

  const label = document.createElement("label");
  label.classList.add("ms-2");
  label.htmlFor = "form-check-label"; // is this needed?
  label.htmlFor = taskTitle;
  label.textContent = taskTitle;

  li.appendChild(input);
  li.appendChild(label);

  return li;
};
