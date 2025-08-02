import { parseISO, format, isToday, isTomorrow } from "date-fns";

export const Task = (title, description, priority, date) => {
  let parsedDate = parseISO(date);
  let dueDate = date.replace(/-/g, "/"); // https://stackoverflow.com/questions/68807970/parse-function-in-date-fns-returns-one-day-previous-value

  function updateDerivedDateValues() {
    parsedDate = parseISO(date);
    dueDate = date.replace(/-/g, "/");
  }

  function getFormattedDate() {
    if (date !== "") {
      if (isToday(parsedDate)) return "Today";
      if (isTomorrow(parsedDate)) return "Tomorrow";
      return format(parsedDate, "MM/dd/yyyy");
    }
  }

  function editDetails(e_title, e_description, e_priority, e_date) {
    title = e_title;
    description = e_description;
    priority = e_priority;
    date = e_date;
    updateDerivedDateValues();
  }

  return {
    title,
    description,
    priority,
    date,
    editDetails,
    get formattedDate() {
      return getFormattedDate();
    },
    get dueDate() {
      return dueDate;
    },
  };
};
