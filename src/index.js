import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./listManager";
import { TaskManager } from "./taskManager";

/* For console testing */
window.ListManager = ListManager;
window.TaskManager = TaskManager;

/* TODO 

    Need to make a function to easily add tasks, currently have to:
        - ListManager.getLists()[i].addTask("Discrete Math", "Assignment 15", "high", "4/10/25")

    Need to make a function to easily access tasks attributes, currently have to:
        - ListManager.getLists()[i].getTasks()[i].title

    Need to make a function to easily use TaskManager, currently have to:
        - TaskManager.changeTitle(ListManager.getLists()[i].getTasks()[i].title, "Discrete")

    Need to make a function to easily access a list's tasks, currently have to:
        - ListManager.getLists()[i].getTasks()

    Implement getList() on ListManager

*/
