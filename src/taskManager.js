export const TaskManager = (() => {
  const changeTitle = (task, newTitle) => {
    task.title = newTitle;
  };

  const changeDescription = (task, newDescription) => {
    task.description = newDescription;
  };

  const changePriority = (task, newPriority) => {
    task.priority = newPriority;
  };

  const changeDueDate = (task, newDueDate) => {
    task.dueDate = newDueDate;
  };

  return {
    changeTitle,
    changeDescription,
    changePriority,
    changeDueDate,
  };
})();
