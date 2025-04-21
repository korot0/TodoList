export const Task = (title, description, priority, date) => {
  return {
    title,
    description,
    priority,
    dueDate: date.replace(/-/g, "/"), // https://stackoverflow.com/questions/68807970/parse-function-in-date-fns-returns-one-day-previous-value
    completed: false,
  };
};
