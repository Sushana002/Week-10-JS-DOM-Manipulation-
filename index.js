// creating a new row by it's ID, add in an event listener and when it's clicked. 
// Add in a table and grab it bt the ID in the html 
// create a new row, and sets attributes to the rows. 
// using template literals and incrementing for the ID's. 

let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date(); 
    let table = document.getElementById('list'); 
    let row = table.insertRow(1); 
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task'). value; 
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value; 
    let action = row.insertCell(4); 
    action.appendChild(createDeleteButton(id++)); 
    document.getElementById('new-task').value = ''; 
})

// Creating a function and button. 
// Targeting the class for the button
// Target the button, adding tasking and deleting tasks. 
// Creating a delete button, making sure to append it the action cell, so it know which id to delete. 

function createDeleteButton(id) {
    let btn = document.createElement('button'); 
    btn.className = 'btn btn-primary'; 
    btn.id = id; 
    btn.innerHTML = "Delete"; 
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`); 
        let elementToDelete = document.getElementById(`item-${id}`); 
        elementToDelete.parentNode.removeChild(elementToDelete); 
    }; 
    return btn; 
}