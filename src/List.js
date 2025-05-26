import { Task } from "./Task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

  const addTask = (title, description, priority, dueDate) => {
    tasks.push(Task(title, description, priority, dueDate));
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((t) => t.title !== taskTitle);
  };

  const markTaskCompleted = (task) => {
    task.completed = true;
    tasks = tasks.filter((t) => t.title !== task.title);
    completedTasks.push(task);
  };

  const restoreTask = (task) => {
    task.completed = false;
    completedTasks = completedTasks.filter((t) => t.title !== task.title);
    tasks.push(task);
  };

  return {
    name,
    getTasks: () => tasks,
    getCompletedTasks: () => completedTasks,
    getTask,
    addTask,
    removeTask,
    markTaskCompleted,
    restoreTask,
  };
};
