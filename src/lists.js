// Lists
export const Lists = () => {
  let lists = [];

  const add = (list) => {
    lists.push(list);
  };

  const remove = (listName) => {
    removeFromArray(lists, listName);
  };

  return { lists, add, remove };
};

// Create a list
export const List = (name) => {
  let todoLists = [];

  const add = (todo) => {
    todoLists.push(todo);
  };

  const remove = (todoTitle) => {
    removeFromArray(todoLists, todoTitle);
  };

  return { name, todoLists, add, remove };
};

// Remove from array helper function
const removeFromArray = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) array.splice(index, 1);
};
