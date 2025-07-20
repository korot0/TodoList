import {
  isToday,
  isTomorrow,
  isThisWeek,
  startOfDay,
  isBefore,
} from "date-fns";
import { updateScreen } from "./UpdateScreen";

const TaskFilters = (() => {
  const filterByAllTasks = (tasks) => {
    return tasks;
  };

  const filterByHighPriority = (tasks) => {
    return tasks.filter((task) => task.priority === "high");
  };

  const filterByDueToday = (tasks) => {
    return tasks.filter((task) => isToday(task.dueDate));
  };

  const filterByDueTomorrow = (tasks) => {
    return tasks.filter((task) => isTomorrow(task.dueDate));
  };

  const filterByDueThisWeek = (tasks) => {
    return tasks.filter((task) => isThisWeek(task.dueDate));
  };

  const filterByPastDue = (tasks) => {
    const today = startOfDay(new Date());
    return tasks.filter((task) => isBefore(task.dueDate, today));
  };

  return {
    filterByAllTasks,
    filterByHighPriority,
    filterByDueToday,
    filterByDueTomorrow,
    filterByDueThisWeek,
    filterByPastDue,
  };
})();

export const TaskFilterManager = (() => {
  let currentFilter = "All Tasks";

  const setCurrentFilter = (filter) => {
    currentFilter = filter;
  };

  const getFilteredTasks = (tasks) => {
    switch (currentFilter) {
      case "All Tasks":
        return TaskFilters.filterByAllTasks(tasks);
      case "High Priority":
        return TaskFilters.filterByHighPriority(tasks);
      case "Today":
        return TaskFilters.filterByDueToday(tasks);
      case "Tomorrow":
        return TaskFilters.filterByDueTomorrow(tasks);
      case "This Week":
        return TaskFilters.filterByDueThisWeek(tasks);
      case "Past Due":
        return TaskFilters.filterByPastDue(tasks);
    }
  };

  return {
    setCurrentFilter,
    getFilteredTasks,
  };
})();

export const attachFilterBtnListener = () => {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.textContent.trim();
      TaskFilterManager.setCurrentFilter(filter);
      // button.classList.add("active");
      updateScreen();
    });
  });
};
