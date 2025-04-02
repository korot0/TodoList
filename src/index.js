import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Needed to import handleListForm IIFE

import { ListManager } from "./listManager";
import { List, createList } from "./list";

/* For console testing */
window.ListsManager = ListManager;
window.List = List;
window.createList = createList;
