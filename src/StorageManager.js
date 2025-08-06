import { ListManager } from "./ListManager";

export const StorageManager = (() => {
  const storeData = () => {
    const lists = ListManager.getLists();
    /* Store lists */
    localStorage.setItem("Lists", JSON.stringify(lists));
    /* Store tasks */
    lists.forEach((list) => {
      localStorage.setItem(list.getName(), JSON.stringify(list.getTasks()));
    });
  };

  const loadData = () => {
    const JSONLists = localStorage.getItem("Lists") || [];
    const lists = JSON.parse(JSONLists);
    lists.forEach((list) => {
      const listName = list.name;
      ListManager.createList(listName);
      const theList = ListManager.getList(listName);

      const JSONTasks = localStorage.getItem(listName);
      const tasks = JSON.parse(JSONTasks);
      tasks.forEach((task) => {
        theList.addTask(task.title, task.description, task.priority, task.date);
      });
    });
  };

  return {
    storeData,
    loadData,
  };
})();
