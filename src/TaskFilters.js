export const TaskFilters = (() => {
  const filterByHighPriority = (lists) => {
    lists.forEach((list) => {
      console.log("------------------");
      console.log(list.name);
      const listTasks = list.tasks.filter((task) => task.priority === "high");
      console.log(listTasks);
    });
  };

  return {
    filterByHighPriority,
  };
})();
