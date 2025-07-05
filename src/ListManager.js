import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const getList = (listName) => lists.find((list) => list.name === listName);

  const createList = (listName) => {
    if (isDuplicateList(listName)) return false;
    lists.push(List(listName));
  };

  const removeList = (list) => {
    lists = lists.filter((l) => l.name !== list.name);
  };

  const isDuplicateList = (listName) =>
    lists.some((list) => list.name.toLowerCase() === listName.toLowerCase());

  return {
    getLists: () => lists,
    getList,
    createList,
    removeList,
  };
})();
