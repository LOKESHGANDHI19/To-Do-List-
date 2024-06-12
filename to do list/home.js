// <-------------------to do list------------------->

document.getElementById('add').onclick = function() {
    var input = document.getElementById('i1'); // Get the input element
    var value = input.value; // Get the value of the input field
    if (value.trim() !== '') { // Check if the input is not just whitespace
        var li = document.createElement('li'); // Create a new list item

        // Create text node for the input value
        var textNode = document.createTextNode(value);
        li.appendChild(textNode);

        // Create a delete button for the li
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete'; // Set button text
        deleteBtn.onclick = function() {
            li.remove(); // Remove the li when delete button is clicked
        };

        // Append the delete button to the li
        li.appendChild(deleteBtn);

         // Append the li to the list
         document.getElementById('lists').appendChild(li);

        // Clear the input field
        input.value = '';

        li.addEventListener('click', function() {
            this.classList.toggle('strikethrough');
        });
    }
}


// Add event listener to the History button
document.getElementById('history').onclick = function() {
    // Get the container where you want to display the history items
    var historyContainer = document.getElementById('historyContainer');
    historyContainer.innerHTML = ''; // Clear previous history items

    // Retrieve all items from local storage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.startsWith('listItem')) { // Check if the key is for a list item
            var value = localStorage.getItem(key);

            // Create a new list item for each stored entry
            var li = document.createElement('li');
            li.textContent = value;

            // Append the new list item to the history container
            historyContainer.appendChild(li);
        }
    }
};