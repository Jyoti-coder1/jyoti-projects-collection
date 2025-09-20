const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); //remove spaces
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

    //Append checkbox + text to li
    li.appendChild(checkbox);
    li.appendChild(span);

    //Append li to task list
    taskList.appendChild(li);

    //clear input
    taskInput.value = "";
}

//Event listener for Add button
addTaskBtn.addEventListener("click", addTask);