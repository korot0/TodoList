import { isToday, isTomorrow, isThisWeek } from "date-fns";

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
    lists.forEach((list) => {
      console.log(list.name + " filtered by due tomorrow" + ": ");
      console.log(list.tasks.filter((task) => isTomorrow(task.dueDate)));
    });
  };

  const filterByDueThisWeek = (lists) => {
    lists.forEach((list) => {
      console.log(list.name + " filtered by due this week" + ": ");
      console.log(list.tasks.filter((task) => isThisWeek(task.dueDate)));
    });
  };

  const filterByPastDue = (lists) => {
    lists.forEach((list) => {
      console.log(list.name + " filtered by past due" + ": ");
      // console.log(list.tasks.filter((task) => isThisWeek(task.dueDate)));
    });
  };

  return {
    filterByHighPriority,
    filterByByDueToday,
    filterByDueTomorrow,
    filterByDueThisWeek,
    filterByPastDue,
  };
})();
