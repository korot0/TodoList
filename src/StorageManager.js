import { ListManager } from "./ListManager";

export const StorageManager = (() => {
  const storeData = () => {
    ListManager.getLists().forEach((list) => {
      const listName = list.getName();
      const tasks = list.getTasks();
      console.log(listName);
      localStorage.setItem(listName, JSON.stringify(tasks));
    });
  };

  const loadData = () => {};

  return {
    storeData,
    loadData,
  };
})();
