export const Task = (title, description, priority, dueDate) => {
  return {
    title,
    description,
    priority,
    dueDate,
    completed: false,
  };
};
