// Might need to refactor the way html ids are being created

export const renderTasks = (list, parent) => {
  const tasks = list.tasks;
  tasks.forEach((task) => {
    const taskEl = createTaskElement(task.title, task.priority);
    parent.appendChild(taskEl);
  });
};

const createTaskElement = (taskTitle, taskPriority) => {
  const li = document.createElement("li");
  const priority = assignPriorityClass(taskPriority);
  li.classList.add("list-group-item", priority);

  const input = document.createElement("input");
  input.classList.add("form-check-input");
  input.type = "checkbox";
  input.value = "";
  input.id = taskTitle.replace(/\s+/g, "-");

  const label = document.createElement("label");
  label.classList.add("ms-2");
  label.htmlFor = input.id;
  label.textContent = taskTitle;

  li.appendChild(input);
  li.appendChild(label);

  return li;
};

const assignPriorityClass = (priority) => {
  if (priority === "medium") return "list-group-item-warning";
  if (priority === "high") return "list-group-item-danger";
  // "list-group-item-success" for green
};
