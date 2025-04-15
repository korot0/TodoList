import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const createList = (listName) => {
    if (!isDuplicateList(listName)) lists.push(List(listName));
    else console.log("List already exists!");
  };

  const removeList = (listName) => {
    lists = lists.filter((list) => list.name !== listName);
  };

  const getList = (listName) => lists.find((list) => list.name === listName);

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
