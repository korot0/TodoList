Things learned so far:

- Need to put styles.css after bootstrap so we don't run into styling conflicts.
- array.find return will be a copy if it's a primitive, or a reference if it's a complex type.
- Test function after implementing it, don't make function after function without testing first.
- When getting an input.value I was closing the modal before accessing the value, which prevented the value from being correctly fetched.
- When modifying arrays inside a factory function, returning the array directly (tasks) causes stale data issues because it won’t reflect internal updates. Instead, return a getter function (e.g., getTasks()) to ensure you're always accessing the current data.
- Does an onclick function in JavaScript add a listener? Yes, assigning a function to element.onclick adds a click event listener, but only one—if you assign another later, it replaces the previous one. To add multiple listeners without overwriting, use addEventListener("click", fn) instead.
- appendChild vs append
- Careful not to call functions unnecessarily inside loops. Ex. Calling ActiveListsManager inside the render loop
- You were calling TaskFilterManager.setCurrentFilter(...), but TaskFilterManager is a factory function — it returns an object. So you need to first create an instance of it. Solution: Wrap IIFE to make it a singleton
- Comment more! no comments on functions
- When using factory functions, internal variables can be updated using functions like editDetails in Task. However, if the returned object exposes those variables as static properties then updates won't be reflected unless using getters. (ES6 getters)

ASSIGNMENT:

TODO:

- HTML:

  - Fix validator issues

- CSS:

  - Fix card height
  - Fix "My Tasks" width when adding a long title. Ex "Loooooooooooooong"
  - Fix list accordion items margins
  - Fix long lists names in accordion
  - Change task dropdown button size
  - Dark/Light mode

- JS:

  - Refactor srp violating functions
    - createTaskElement - TaskUI
    - createCompletedTaskElement - TaskUI
    - createListAccordionElement - ListUI
    - createListCardElement - ListUI
    - createCardHeader - ListUI
    - createDropdown - ListUI
    - onListFormSubmit - ListFormHandler
    - onTaskFormSubmit - TaskFormHandler
    - Task object

- Features:

  - Local storage
