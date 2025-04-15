import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./ListFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./ListManager";
import { completeTask, restoreTask } from "./List";

window.ListManager = ListManager; // For debugging - delete later

/* TODO
- Handle task completion and restoration
  - Make helper function to move tasks between completed and non completed
  - Filter by:
  - Due today
  - Due this week
  - High priority
- Show list on dom on creation
*/

// Create list
ListManager.createList("Homework");
const homework = ListManager.getList("Homework");

homework.addTask(
  "OS - Assignment 4",
  "Make your own heap",
  "high",
  "4/10/2025"
);

homework.addTask(
  "Discrete Math Homework",
  "Some counting",
  "medium",
  "4/16/2025"
);
