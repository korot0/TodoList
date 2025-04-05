import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Needed to import handleListForm IIFE

import { ListTaskController } from "./listTaskController";
import { ListManager } from "./listManager";
import { TaskManager } from "./taskManager";

window.ListTaskController = ListTaskController;
window.ListManager = ListManager;
window.TaskManager = TaskManager;

// ListManager.addList("Homework");
// ListTaskController.createTask(
//   "Homework",
//   "Assignment 2",
//   "Some description goes here",
//   "medium",
//   "01/01/2021"
// );
// ListManager.getList("Homework").getTask("Assignment 1");
// ListManager.getList("Homework").getTask("Assignment 2").title;
// TaskManager.changeTitle(ListManager.getList("Homework").getTask("Assignment 2"), "Assignment 1");
// ListManager.getList("Homework").getTasks()

/* TODO 
    const toggleCompleted = (task) => {
    task.completed ? (task.completed = false) : (task.completed = true);
    };
*/
