export const Task = (title, description, priority, dueDate) => {
  let completed = false;
  return {
    title,
    description,
    priority,
    dueDate,
  };
};

// const toggleCompleted = (task) => {
//   task.completed ? (task.completed = false) : (task.completed = true);
// };
