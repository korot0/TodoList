import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { TaskFilters } from "./TaskFilters";

window.ListManager = ListManager; // For debugging - delete later

ListManager.createList("School");
const school = ListManager.getList("School");

school.addTask(
  "Study for discrete math",
  "You don't have to study as hard",
  "low",
  "2025-05-08"
);

ListManager.createList("Work");

// Debugging
import { renderAccordion, renderCards } from "./ListUI";
renderCards();
renderAccordion();

// const lists = ListManager.getLists();
// console.log(TaskFilters.filterByPastDue(lists));
