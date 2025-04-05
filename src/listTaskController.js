import { ListManager } from "./listManager";

export const ListTaskController = (() => {
  const createTask = (listName, title, description, priority, dueDate) => {
    const list = ListManager.getList(listName);
    list.addTask(title, description, priority, dueDate);
  };

  const deleteTask = (listName, title) => {
    const list = ListManager.getList(listName);
    list.removeTask(title);
  };

  const retrieveTasks = (listName) => {
    const list = ListManager.getList(listName);
    return list.getTasks();
  };

  return {
    createTask,
    deleteTask,
    retrieveTasks,
  };
})();
