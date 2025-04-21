import { isToday } from "date-fns";

export const TaskFilters = (() => {
  const filterByHighPriority = (lists) => {
    lists.forEach((list) => {
      console.log(list.name + " filtered by high priority" + ": ");
      console.log(list.tasks.filter((task) => task.priority === "high"));
    });
  };

  const filterByByDueToday = (lists) => {
    lists.forEach((list) => {
      console.log(list.name + " filtered by due today" + ": ");
      console.log(list.tasks.filter((task) => isToday(task.dueDate)));
    });
  };

  const filterByDueTomorrow = (lists) => {
    lists.forEach((list) => {});
  };

  const filterByDueThisWeek = (lists) => {
    lists.forEach((list) => {});
  };

  return {
    filterByHighPriority,
    filterByByDueToday,
    filterByDueTomorrow,
    filterByDueThisWeek,
  };
})();
