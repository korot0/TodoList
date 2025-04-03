import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Needed to import handleListForm IIFE
import { ListManager } from "./listManager";

/* For console testing */
window.ListManager = ListManager;
