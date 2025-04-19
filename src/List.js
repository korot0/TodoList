import { Task } from "./Task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const addTask = (title, description, priority, dueDate) => {
    if (!isDuplicateTask(title))
      tasks.push(Task(title, description, priority, dueDate));
    else console.log("Task already exists!");
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((task) => task.title !== taskTitle);
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
    markTaskCompleted,
    restoreTask,
  };
};
