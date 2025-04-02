export const ListManager = (() => {
  let lists = [];

  const addList = (list) => {
    lists.push(list);
  };

  const removeList = (list) => {
    const index = findListIndex(lists, list);
    removeListAtIndex(lists, index);
  };

  /* UTILITY FUNCTIONS */

  // @param: listName must be a string, not an object
  const findListIndex = (listName) =>
    lists.findIndex((list) => list.getName() == listName);

  const removeListAtIndex = (index) => {
    if (index !== -1) lists.splice(index, 1);
    else console.log("Did not find list");
  };

  return { getLists: () => lists, addList, removeList };
})();
