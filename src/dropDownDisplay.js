export const displayArea = document.querySelector('.display');

export function displayList(toDoData) {
// Clear the display area
  displayArea.innerHTML = '';

  // Loop through each data in toDoData array
  toDoData.forEach((data, i) => {
    // Set the id of each data
    data.id = i + 1;
    // Create a new list item element
    const li = document.createElement('li');

    // Add a class name to the list item
    li.className = 'added';

    // Append the list item to the display area
    displayArea.appendChild(li);

    // Create a new paragraph element
    const p = document.createElement('p');

    // Append the paragraph element to the list item
    li.appendChild(p);

    // Create a new checkbox input element
    const checkbox = document.createElement('input');

    // Set the type and id of the checkbox
    checkbox.type = 'checkbox';
    checkbox.id = 'checkbox';

    // Append the checkbox to the paragraph element
    p.appendChild(checkbox);

    // Create a new input element for the text content
    const textContent = document.createElement('input');

    // Add a class name and set the type and value of the text content input
    textContent.className = 'input-text';
    textContent.type = 'text';
    textContent.value = data.description;

    // Set the input as readonly
    textContent.setAttribute('readonly', 'readonly');

    // Append the text content input to the paragraph element
    p.appendChild(textContent);

    // Create a new icon element
    const icon = document.createElement('i');

    // Add a class name to the icon element
    icon.className = 'fa-solid fa-ellipsis-vertical';

    // Append the icon to the list item
    li.appendChild(icon);
  });

  // Check if there are any added list items
  if (document.querySelectorAll('.added')) {
    // Get all added list items
    const added = document.querySelectorAll('.added');
    // Loop through each added list item
    added.forEach((el) => {
    // Add mouseover event listener
      el.addEventListener('mouseover', () => {
      // Toggle the hover-list class
        el.classList.toggle('hover-list');

        // Toggle the classes of the icon element
        el.children[1].classList.toggle('fa-ellipsis-vertical');
        el.children[1].classList.toggle('fa-trash-can');
      });

      // Add mouseout event listener
      el.addEventListener('mouseout', () => {
      // Toggle the hover-list class
        el.classList.toggle('hover-list');

        // Toggle the classes of the icon element
        el.children[1].classList.toggle('fa-trash-can');
        el.children[1].classList.toggle('fa-ellipsis-vertical');
      });
    });
  }
}