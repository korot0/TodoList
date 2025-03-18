import { renderLists } from "./listUI";

export const Lists = (function () {
  let lists = [];

  const getLists = () => [...lists];

  const add = (list) => {
    addToArray(lists, list);
  };

  const remove = (listName) => {
    removeFromArray(lists, listName);
  };

  return { getLists, add, remove };
})();

// Create a list
const List = (name) => {
  let tasks = [];

  const getName = () => name;

  const getTasks = () => [...tasks];

  const add = (task) => {};

  const remove = () => {};

  return { getName, getTasks, add, remove };
};

// Helper function to check if array already has an element. If not found the we push that element.
const addToArray = (array, element) => {
  let found = false;
  array.forEach((arrayElement) => {
    if (element.getName() === arrayElement.getName()) found = true;
    return;
  });
  if (found) console.log("Already in array!");
  else array.push(element);
};

// Helper function to remove object from array
const removeFromArray = (array, listName) => {
  const index = array.findIndex((element) => element.getName() === listName);
  if (index != 1) array.splice(index, 1);
};

export const createList = (listName) => {
  const list = List(listName);
  Lists.add(list);
  renderLists();
};
