import { parseISO, format } from "date-fns";

export const Task = (title, description, priority, date) => {
  let formattedDate = formatDate();

  function formatDate() {
    if (date !== "") {
      const parsedDate = parseISO(date);
      return format(parsedDate, "MM/dd/yyyy");
    }
  }

  return {
    title,
    description,
    priority,
    formattedDate,
    dueDate: date.replace(/-/g, "/"), // https://stackoverflow.com/questions/68807970/parse-function-in-date-fns-returns-one-day-previous-value
    completed: false,
  };
};
