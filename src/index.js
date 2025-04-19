import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./ListFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./ListManager";

window.ListManager = ListManager; // For debugging - delete later

/* TODO
- date-fns
- Filter by: (print in console for now)
  - Due today
  - Due this week
  - High priority
*/

// Create list
ListManager.createList("Homework");
const homework = ListManager.getList("Homework");

homework.addTask(
  "Discrete Math Hw",
  "Finish lesson 18 homework",
  "medium",
  "4/20/2025"
);

homework.addTask(
  "OS - Assignment 4",
  "Make your own heap",
  "high",
  "4/10/2025"
);

console.log("Tasks: ");
console.log(homework.tasks);
console.log("Completed Tasks: ");
console.log(homework.completedTasks);

const someTask = homework.getTask("Discrete Math Hw");

homework.markTaskCompleted(someTask);
homework.restoreTask(someTask);
