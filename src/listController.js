const Lists = (function () {
  let lists = [];

  const add = (list) => {
    lists.push(list);
  };

  const remove = (listName) => {
    removeFromArray(lists, listName);
  };

  return { lists, add, remove };
})();

// Create a list
const List = (name, priority) => {
  let tasks = [];

  const add = (todo) => {
    tasks.push(todo);
  };

  const remove = (taskName) => {
    removeFromArray(tasks, taskName);
  };

  return { name, priority, tasks, add, remove };
};

// Helper function for removing elements from array
const removeFromArray = (array, element) => {
  const index = array.indexOf(element);
  if (index > -1) array.splice(index, 1);
};

export const createList = (name, priority) => {
  const list = List(name, priority);
  Lists.add(list);
  console.log(list);
};
