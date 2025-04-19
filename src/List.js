import { Task } from "./Task";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  const addTask = (title, description, priority, dueDate) => {
    if (!isDuplicateTask(title))
      tasks.push(Task(title, description, priority, dueDate));
    else console.log("Task already exists!");
  };

  const toggleTaskCompletion = (task) => {
    moveTask(task);
    task.completed = !task.completed; // Change task completed to true or false
  };

  const removeTask = (taskTitle) => {
    tasks = tasks.filter((task) => task.title !== taskTitle);
  };

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

  /* PRIVATE HELPER METHODS */
  const isDuplicateTask = (taskTitle) =>
    tasks.some((task) => task.title === taskTitle);

  const moveTask = (task) => {
    const taskTitle = task.title;
    if (task.completed === false) {
      completedTasks.push(task);
      removeTask(taskTitle);
    } else {
      tasks.push(task);
      completedTasks = completedTasks.filter(
        (task) => task.title !== taskTitle
      );
    }
  };

  return {
    name,
    tasks,
    completedTasks,
    addTask,
    getTask,
    toggleTaskCompletion,
    removeTask,
  };
};
