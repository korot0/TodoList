export const Task = (title, description, priority, dueDate) => {
  let completed = false;
  return {
    title,
    description,
    priority,
    dueDate,
    completed,
  };
};

export const toggleTaskCompletion = (task) =>
  (task.completed = !task.completed);
