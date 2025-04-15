import { Task } from "./Task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const addTask = (title, description, priority, dueDate) => {
    if (!isDuplicateTask(title)) {
      tasks.push(Task(title, description, priority, dueDate));
    } else {
      console.log("Task already exists!");
    }
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((task) => task.title !== taskTitle);
  };

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

  /* PRIVATE HELPER METHODS */
  const isDuplicateTask = (taskTitle) =>
    tasks.some((task) => task.title === taskTitle);

  return {
    name,
    tasks,
    completedTasks,
    addTask,
    getTask,
    removeTask,
  };
};
