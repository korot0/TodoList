import { Task, toggleTaskCompletion } from "./Task";

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

  const getTask = (taskTitle) => tasks.find((task) => task.title === taskTitle);

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
    tasks,
    completedTasks,
    addTask,
    getTask,
    removeTask,
  };
};

export const completeTask = (list, taskTitle) => {
  const task = list.getTask(taskTitle);
  toggleTaskCompletion(task); // Mark task as completed
  list.completedTasks.push(task); // Push task to completed tasks
  list.removeTask(task); // Remove task from non-completed tasks
};
