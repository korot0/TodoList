import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./listManager";

window.ListManager = ListManager;

/* TODO
  - Set task as completed
  - Refactor remove methods in listManager and list
  - Change task priority, title etc...
  - Show list on dom on creation
  - Filter by:
    - Due today
    - Due this week
    - High priority
*/
