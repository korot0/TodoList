import { Task } from "./task";

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
    const index = findTaskIndex(taskTitle);
    removeTaskAtIndex(index);
  };

  /* PRIVATE HELPER METHODS */

  const isDuplicateTask = (taskTitle) =>
    tasks.some((task) => task.title === taskTitle);

  const findTaskIndex = (taskTitle) =>
    tasks.findIndex((task) => task.title === taskTitle);

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
