import { List } from "./List";

export const ListManager = (() => {
  let lists = [];

  const getList = (listName) =>
    lists.find((list) => list.getName() === listName);

  const getCheckedLists = () => lists.filter((list) => list.isChecked === true);

  const createList = (listName) => {
    if (isDuplicateList(listName)) return false;
    lists.push(List(listName));
  };

  const renameList = (currentName, newName) => {
    if (isDuplicateList(newName)) return false;
    const list = getList(currentName);
    list.setName(newName);
  };

  const removeList = (list) => {
    lists = lists.filter((l) => l.name !== list.getName());
  };

  const isDuplicateList = (listName) =>
    lists.some(
      (list) => list.getName().toLowerCase() === listName.toLowerCase()
    );

  return {
    getLists: () => lists,
    getCheckedLists,
    renameList,
    getList,
    createList,
    removeList,
  };
})();
