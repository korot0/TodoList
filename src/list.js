import { ListManager } from "./listManager";

export const List = (name) => {
  let tasks = [];
  let completedTasks = [];

  /* TODO */
  const addTask = () => {};

  /* TODO */
  const removeTask = () => {};

  return {
    getName: () => name,
    getTasks: () => tasks,
    getCompletedTasks: () => completedTasks,
    addTask,
    removeTask,
  };
};

/* 
  Check for a duplicate list

  @param: listName must be a string not an object
  @return true if found duplicate
*/
const isDuplicateList = (listName) =>
  ListManager.getLists().some((list) => list.getName() == listName);

export const createList = (name) => {
  if (!isDuplicateList(name)) return List(name);
  else return console.log("List already exists!");
};
