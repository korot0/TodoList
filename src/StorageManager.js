import { ListManager } from "./ListManager";

export const StorageManager = (() => {
  /* Storing data */
  const storeData = () => {
    const lists = ListManager.getLists();
    storeLists(lists);
    storeTasks(lists);
    storeCompletedTasks(lists);
  };

  const storeLists = (lists) => {
    localStorage.setItem("Lists", JSON.stringify(lists));
  };

  const storeTasks = (lists) => {
    lists.forEach((list) => {
      localStorage.setItem(list.getName(), JSON.stringify(list.getTasks()));
    });
  };

  const storeCompletedTasks = (lists) => {
    lists.forEach((list) => {
      const listName = list.getName() + " Completed";
      localStorage.setItem(listName, JSON.stringify(list.getCompletedTasks()));
    });
  };

  /* Loading data */
  const loadData = () => {
    const JSONLists = localStorage.getItem("Lists");
    if (!JSONLists) return;
    const lists = JSON.parse(JSONLists);
    lists.forEach((list) => {
      loadListsAndTasks(list);
    });
  };

  const loadListsAndTasks = (list) => {
    const listName = list.name;
    ListManager.createList(listName);
    const theList = ListManager.getList(listName);
    loadTasksForList(theList, listName);
    loadCompletedTasksForList(theList, listName + " Completed");
  };

  const loadTasksForList = (theList, listName) => {
    const JSONTasks = localStorage.getItem(listName);
    if (!JSONTasks) return;
    const tasks = JSON.parse(JSONTasks);
    tasks.forEach((task) => {
      theList.addTask(task.title, task.description, task.priority, task.date);
    });
  };

  const loadCompletedTasksForList = (theList, listName) => {
    const JSONCompletedTasks = localStorage.getItem(listName);
    if (!JSONCompletedTasks) return;
    const completedTasks = JSON.parse(JSONCompletedTasks);
    completedTasks.forEach((task) => {
      theList.addCompletedTask(
        task.title,
        task.description,
        task.priority,
        task.date
      );
    });
  };

  /* Remove lists */
  const removeList = (listName) => {
    localStorage.removeItem(listName);
    localStorage.removeItem(listName + " Completed");
  };

  const removeListAndStoreData = (listName) => {
    removeList(listName);
    storeData();
  };

  return {
    storeData,
    loadData,
    removeListAndStoreData,
  };
})();
