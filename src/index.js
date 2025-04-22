import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./ListFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./ListManager";

import { TaskFilters } from "./TaskFilters";

window.ListManager = ListManager; // For debugging - delete later

/* TODO
- date-fns
- Filter by: (print in console for now)
  - Due tomorrow
  - Due past
  - Due this week
*/

ListManager.createList("Homework");
const homework = ListManager.getList("Homework");

homework.addTask(
  "Discrete Math Hw",
  "Have 3 homeworks due tomorrow as well! HELP",
  "medium",
  "2025-04-23"
);

homework.addTask(
  "Calc 2 Hw",
  "Have 3 homeworks due tomorrow!",
  "high",
  "2025-04-22"
);

ListManager.createList("My Tasks");
const myTasks = ListManager.getList("My Tasks");

myTasks.addTask(
  "Make dentist appointment",
  "Have to buy flies too, I am cooked",
  "high",
  "2025-04-22"
);

myTasks.addTask("Clean house", "It's very dirty", "high", "2025-04-05");

const lists = ListManager.getLists();

// console.log(TaskFilters.filterByPastDue(lists));
