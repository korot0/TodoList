import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { TaskFilters } from "./TaskFilters";

window.ListManager = ListManager; // For debugging - delete later

ListManager.createList("My Tasks");
const myTasks = ListManager.getList("My Tasks");

myTasks.addTask(
  "Make dentist appointment",
  "Have to buy flights too, I am cooked",
  "high",
  "2025-05-26"
);

myTasks.addTask(
  "List Chair",
  "Check the price online and list it already!",
  "medium",
  "2025-05-10"
);

ListManager.createList("School");
const school = ListManager.getList("School");

// Debugging
import { renderCards } from "./ListUI";
renderCards();

// const lists = ListManager.getLists();
// console.log(TaskFilters.filterByPastDue(lists));
