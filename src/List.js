import { Task } from "./Task";
import { TaskFilterManager } from "./TaskFilters";

export const List = (name) => {
  let isChecked = true;

  let tasks = [];
  let completedTasks = [];

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

  const getCompletedTask = (taskTitle) =>
    completedTasks.find((task) => task.title === taskTitle);

  const getTasks = () => {
    return TaskFilterManager.getFilteredTasks(tasks);
  };

  const addTask = (title, description, priority, dueDate) => {
    tasks.push(Task(title, description, priority, dueDate));
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((t) => t.title !== taskTitle);
  };

  const completeTask = (taskTitle) => {
    const task = getTask(taskTitle);
    completedTasks.push(task);
    tasks = tasks.filter((t) => t.title !== taskTitle);
  };

  return {
    name,
    isChecked,
    getName: () => name,
    getCompletedTasks: () => completedTasks,
    getTasks,
    getTask,
    addTask,
    removeTask,
    completeTask,
  };
};
