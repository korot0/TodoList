import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap";
import { handleListForm } from "./ListFormHandler";
import { handleTaskForm } from "./TaskFormHandler";
import { handleDetailsTaskForm } from "./TaskFormHandler";
import { ListManager } from "./ListManager";
import { updateScreen } from "./UpdateScreen";
import { attachFilterBtnListener } from "./TaskFilters";
import { StorageManager } from "./StorageManager";

/* If "My Tasks" does not exist then create it and store it */
// if (!localStorage.getItem("My Tasks")) {
//   ListManager.createList("My Tasks");
// }

/* Load data then update UI */
StorageManager.loadData();
updateScreen();
