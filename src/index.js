import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";

// For debugging - delete later
window.ListManager = ListManager;

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

ListManager.createList("School");
const school = ListManager.getList("School");
school.addTask(
  "Transfer transcripts",
  "Need to check daily for posted grades",
  "medium",
  "2025-05-14"
);

updateScreen();
