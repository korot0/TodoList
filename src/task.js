export const Task = (
  title,
  description,
  dueDate,
  priority,
  checklist,
  project
) => {
  return { title, description, dueDate, priority, checklist, project };
};

export const changePriority = (todoPriority, newPriority) => {
  todoPriority = newPriority;
};
