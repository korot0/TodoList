import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const createList = (listName) => {
    if (!isDuplicateList(listName)) lists.push(List(listName));
    else console.log("List already exists!");
  };

  const removeList = (listName) => {
    const index = findListIndex(listName);
    removeListAtIndex(index);
  };

  const getList = (listName) => lists.find((list) => list.name === listName);

  /* PRIVATE HELPER METHODS */

  const isDuplicateList = (listName) =>
    lists.some((list) => list.name === listName);

  const findListIndex = (listName) =>
    lists.findIndex((list) => list.name === listName);

  const removeListAtIndex = (index) => {
    if (index !== -1) lists.splice(index, 1);
    else console.log("Did not find list");
  };

  return {
    getLists: () => lists,
    getList,
    createList,
    removeList,
  };
})();
