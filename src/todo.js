export const Todo = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  project
) => {
  return { title, description, dueDate, priority, notes, checklist, project };
};

export const changePriority = (todoPriority, newPriority) => {
  todoPriority = newPriority;
};
