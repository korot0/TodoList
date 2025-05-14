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

myTasks.addTask("Walk the dogs", "poor dogs", "low", "2025-05-14");

myTasks.addTask(
  "Wash the dishes",
  "otherwise you get bugs",
  "medium",
  "2025-05-15"
);

myTasks.addTask("Home title transfer", "do this ASAP", "high", "2025-05-20");

// Debugging
import { renderAccordion, renderCards } from "./ListUI";
import { renderTasks } from "./TaskUI";
renderCards();
renderAccordion();
renderTasks();
