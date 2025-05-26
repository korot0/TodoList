Things learned so far:

- Need to put styles.css after bootstrap so we don't run into styling conflicts.
- array.find return will be a copy if it's a primitive, or a reference if it's a complex type.
- Test function after implementing it, don't make function after function without testing first.
- When getting an input.value I was closing the modal before accessing the value, which prevented the value from being correctly fetched.
- When modifying arrays inside a factory function, returning the array directly (tasks) causes stale data issues because it won’t reflect internal updates. Instead, return a getter function (e.g., getTasks()) to ensure you're always accessing the current data

TODO:

- JS:

  - Coupling when it comes to deleting tasks through UI
  - are you sure? pop up when deleting

- CSS:

  - Make global font smaller
  - Fix card height
  - Fix "My Tasks" width when adding a long title. Ex "Loooooooooooooong"
  - Fix list accordion items margins
  - Fix long lists names in accordion
