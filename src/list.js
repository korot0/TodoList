import { Task } from "./task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const addTask = (taskName) => {
    if (!isDuplicateTask(taskName)) {
      tasks.push(Task(taskName));
    } else {
      console.log("Task already exists!");
    }
  };

  const removeTask = (taskName) => {
    const index = findTaskIndex(taskName);
    removeTaskAtIndex(index);
  };

  /* Private helper methods */

  const isDuplicateTask = (taskName) =>
    tasks.some((task) => task.getName() === taskName);

  const findTaskIndex = (taskName) =>
    tasks.findIndex((task) => task.getName() === taskName);

  const removeTaskAtIndex = (index) => {
    if (index !== -1) tasks.splice(index, 1);
    else console.log("Did not find task");
  };

  return {
    name,
    getName: () => name,
    getTasks: () => tasks,
    getCompletedTasks: () => completedTasks,
    addTask,
    removeTask,
  };
};
