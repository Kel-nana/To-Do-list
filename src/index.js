// Importing the CSS file and necessary functions from other files.
import './style.css';
import { displayArea, displayList } from './dropDownDisplay.js';
import { setItems, getItems } from './localStorage.js';

// Selecting the input element for the todo list.
const addToDo = document.querySelector('.addToDo');

// Retrieving the todo list data from local storage.
let toDoData = getItems();

// Adding an event listener to the input element for adding new todo items.
addToDo.addEventListener('change', () => {
  // If the input element has a value, create a new todo item object and push to todo data array.
  if (addToDo.value) {
    const obj = { description: addToDo.value, completed: false };
    toDoData.push(obj);
    // Clearing the input element after adding the new todo item.
    addToDo.value = '';
    // Updating the display with the new todo item added.
    displayList(toDoData);
    // Updating local storage with the new todo item added.
    setItems(toDoData);
  }
});

// Function to remove a todo item from the list.
function removeItem(item) {
  // Filtering out the todo item to be removed from the todo data array.
  toDoData = toDoData.filter((data) => data.id !== item);
  // Updating the display with the todo item removed.
  displayList(toDoData);
  // Updating local storage with the todo item removed.
  setItems(toDoData);
}

// Adding an event listener to the todo list display area.
displayArea.addEventListener('click', (event) => {
  // If the clicked element is an input element for editing the todo item description.
  if (event.target.classList.contains('input-text')) {
    const input = event.target;
    const originalText = input.value;
    const itemKey = event.target.value;
    // Making the input element editable and focusing on it.
    input.removeAttribute('readonly', 'readonly');
    input.focus();
    // Adding an event listener to the input element for saving the edited todo item description.
    input.addEventListener('change', () => {
      // If the input element value is empty, restore the original todo item description.
      if (input.value === '') {
        input.value = originalText;
      } else {
        // Updating the corresponding todo item description in the todo data array.
        const oldData = toDoData.filter((data) => data.description === itemKey);
        oldData[0].description = input.value;
        // Updating local storage with the todo item description edited.
        setItems(toDoData);
        // Updating the display with the todo item description edited.
        displayList(toDoData);
      }
    });
  }
  // If the clicked element is a delete icon for removing the todo item from the list.
  if (event.target.classList.contains('fa-trash-can')) {
    const parent = event.target.parentElement;
    const added = document.querySelectorAll('.added');
    const itemKey = [...added].indexOf(parent) + 1;
    // Removing the corresponding todo item from the todo data array.
    removeItem(itemKey);
  }
});

// Displaying the todo list on page load.
displayList(toDoData);
