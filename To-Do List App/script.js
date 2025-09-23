const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); //remove spaces

    // Validation: prevent empty task
    if(taskText === "") {
        alert("Please enter a Task!");
        return;
    }

    //Create <li> element
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Add event listener to toggle "completed" class on li
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
    });

    // Create span for text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit your task:", span.textContent);
        
        if (newText === null) return;
        // Validation: prevent empty edit
        
        if(newText.trim() === "") {
            alert("Task cannot be empty!");
            return;
        }
        span.textContent = newText.trim();
    });

    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    //Delete task on button click
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    //Append checkbox + text + edit + delete button to li
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    //Append li to task list
    taskList.appendChild(li);

    //clear input
    taskInput.value = "";
}

//Event listener for Add button
addTaskBtn.addEventListener("click", addTask);