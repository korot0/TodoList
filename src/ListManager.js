import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const getList = (listName) => lists.find((list) => list.name === listName);

  const getCheckedLists = () => lists.filter((list) => list.isChecked === true);

  const renameList = (currentName, newName) => {
    if (isDuplicateList(newName)) return false;
    const list = getList(currentName);
    list.name = newName;
  };

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
    getCheckedLists,
    renameList,
    getList,
    createList,
    removeList,
  };
})();
