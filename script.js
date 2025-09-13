 // script.js
 // Section 1: TODOs
 // TODO: Register submissions from the user on the form.
 // TODO: Determine the value of the data submitted and add it to a JavaScript array calle
 // TODO: Call the render function to update the table with the new tasks.

 // Section 2 : App State Variables
 let tasks = [];

const taskForm = document.getElementById("taskForm")
const taskTable = document.getElementById("taskTable")

console.log("taskForm:", taskForm)
console.log("taskTable:", taskTable)

 //Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();

    const taskName = document.getElementById('taskName').value
    const taskDescription = document.getElementById('taskDescription').value
    const taskDeadline = document.getElementById('taskDeadline').value

    if (taskName == "" || taskDeadline == "") {
        alert('Task name and deadline are required!')
    }

    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline })

    render();
}


// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(${index})">Complete</button></td>
            <td><button onclick="removeTask(${index})">Remove</button></td>
        </tr>
     `).join('');
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

// Function to mark a task as complete
function markTaskComplete(index) {
    tasks[index].deadline = '✅';
    tasks[index].completed = true;
    render();
}

// Function to initialize the table
function init() {
    taskTable.innerHTML = '';
    tasks = [];
    render();
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

init();