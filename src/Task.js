import { parseISO, format, isToday, isTomorrow } from "date-fns";

export const Task = (title, description, priority, date) => {
  const parsedDate = parseISO(date);
  const today = isToday(parsedDate);
  const tomorrow = isTomorrow(parsedDate);

  let formattedDate = formatDate();

  function formatDate() {
    if (date !== "") {
      if (today) return "Today";
      else if (tomorrow) return "Tomorrow";
      return format(parsedDate, "MM/dd/yyyy");
    }
  }

  return {
    title,
    description,
    priority,
    date,
    formattedDate,
    dueDate: date.replace(/-/g, "/"), // https://stackoverflow.com/questions/68807970/parse-function-in-date-fns-returns-one-day-previous-value
  };
};
