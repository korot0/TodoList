import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { handleDetailsTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";
import { attachFilterBtnListener } from "./TaskFilters";

attachFilterBtnListener();

// For debugging - delete later
window.ListManager = ListManager;

ListManager.createList("My Tasks");
const myTasks = ListManager.getList("My Tasks");

myTasks.addTask("Walk the dogs", "", "low", "2025-05-14");

myTasks.addTask(
  "Wash the dishes",
  "Otherwise you get bugs then they bite then it's itchy then it sucks then you get irritated",
  "medium",
  ""
);

myTasks.addTask("Home title transfer", "Do this ASAP", "high", "2025-05-20");

ListManager.createList("School");

updateScreen();
