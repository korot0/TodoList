import { Task } from "./Task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

  const getTasks = () => tasks;

  const addTask = (title, description, priority, dueDate) => {
    if (isDuplicateTask(title)) console.log("Task already exists!");
    else tasks.push(Task(title, description, priority, dueDate));
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((t) => t.title !== taskTitle);
    console.log(tasks);
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

  /* PRIVATE HELPER METHODS */
  const isDuplicateTask = (taskTitle) =>
    tasks.some((task) => task.title == taskTitle);

  return {
    name,
    getTasks,
    completedTasks,
    getTask,
    addTask,
    removeTask,
    markTaskCompleted,
    restoreTask,
  };
};
