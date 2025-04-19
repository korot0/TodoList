import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const getList = (listName) => lists.find((list) => list.name === listName);

  const createList = (listName) => {
    if (isDuplicateList(listName)) console.log("List already exists!");
    else lists.push(List(listName));
  };

  const removeList = (list) => {
    lists = lists.filter((l) => l.name !== list.name);
  };

  /* PRIVATE HELPER METHODS */
  const isDuplicateList = (listName) =>
    lists.some((list) => list.name === listName);

  return {
    getLists: () => lists,
    getList,
    createList,
    removeList,
  };
})();
