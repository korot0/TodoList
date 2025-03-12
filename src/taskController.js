const Task = (name, description, dueDate, priority, checklist, project) => {
  return { name, description, dueDate, priority, checklist, project };
};

const changeTaskPriority = (priority, newPriority) => {
  priority = newPriority;
};
