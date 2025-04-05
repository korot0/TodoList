import { List } from "./list";

export const ListManager = (() => {
  let lists = [];

  const addList = (listName) => {
    if (!isDuplicateList(listName)) {
      lists.push(List(listName));
    } else {
      console.log("List already exists!");
    }
  };

  const removeList = (listName) => {
    const index = findListIndex(listName);
    removeListAtIndex(index);
  };

  const getList = (listName) =>
    lists.find((list) => list.getName() === listName);

  /* PRIVATE HELPER METHODS */

  const isDuplicateList = (listName) =>
    lists.some((list) => list.getName() === listName);

  const findListIndex = (listName) =>
    lists.findIndex((list) => list.getName() === listName);

  const removeListAtIndex = (index) => {
    if (index !== -1) lists.splice(index, 1);
    else console.log("Did not find list");
  };

  return {
    getLists: () => lists,
    getList,
    addList,
    removeList,
  };
})();
