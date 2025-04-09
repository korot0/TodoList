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

/* TEST */

ListManager.addList("Homework"); // Create Homework list

// Create task for Homework
ListTaskController.createTask(
  "Homework",
  "Assignment 1",
  "Some description goes here",
  "medium",
  "01/01/2021"
);

// Create another task for Homework
ListTaskController.createTask(
  "Homework",
  "Calc 2 test",
  "",
  "high",
  "04/10/2025"
);

ListTaskController.createTask("Test", "Calc 2 test", "", "high", "04/10/2025"); // Need to check if list exists

// ListManager.getList("Homework").getTask("Assignment 1"); /* Use on console */

ListManager.getList("Homework").getTask("Assignment 2").title; // Cannot read title bug

// TaskManager.changeTitle(ListManager.getList("Homework").getTask("Assignment 2"), "Assignment 1");
// ListManager.getList("Homework").getTasks();
// ListTaskController.retrieveTasks("Homework");

/* TODO 
    const toggleCompleted = (task) => {
    task.completed ? (task.completed = false) : (task.completed = true);
    };

    Test:
        listTaskController
        list
        listManager
        task
        TaskManager
*/
