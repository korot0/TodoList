import { parseISO, format } from "date-fns";

export const Task = (title, description, priority, date) => {
  const formatDate = () => {
    if (date === "") return "n/a";
    const parsedDate = parseISO(date);
    return format(parsedDate, "MM/dd/yyyy");
  };

  let formattedDate = formatDate();

  return {
    title,
    description,
    priority,
    formattedDate,
    dueDate: date.replace(/-/g, "/"), // https://stackoverflow.com/questions/68807970/parse-function-in-date-fns-returns-one-day-previous-value
    completed: false,
  };
};
