import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { accordion, modal } from "bootstrap"; // Needed to use those bootstrap components
import { handleListForm } from "./listFormHandler"; // Import IIFE
import { createList } from "./lists";

createList("My Tasks"); // Create default list
