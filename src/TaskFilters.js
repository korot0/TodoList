import { updateScreen } from "./UpdateScreen";
import {
  isToday,
  isTomorrow,
  isThisWeek,
  startOfDay,
  isBefore,
} from "date-fns";

const TaskFilters = (() => {
  const today = startOfDay(new Date());

  const filterByAllTasks = (tasks) => tasks;

  const filterByHighPriority = (tasks) =>
    tasks.filter((task) => task.priority === "high");

  const filterByDueToday = (tasks) =>
    tasks.filter((task) => isToday(task.dueDate));

  const filterByDueTomorrow = (tasks) =>
    tasks.filter((task) => isTomorrow(task.dueDate));

  const filterByDueThisWeek = (tasks) =>
    tasks.filter((task) => isThisWeek(task.dueDate));

  const filterByPastDue = (tasks) =>
    tasks.filter((task) => isBefore(task.dueDate, today));

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
      onFilterBtnClick(buttons, button);
    });
  });
};

const onFilterBtnClick = (buttons, button) => {
  applyFilter(button);
  removePreviousHighlight(buttons);
  highlightActiveBtn(button);
  updateScreen();
};

const highlightActiveBtn = (button) => button.classList.add("active");

const removePreviousHighlight = (buttons) => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

const applyFilter = (button) => {
  const filter = button.textContent.trim();
  TaskFilterManager.setCurrentFilter(filter);
};
