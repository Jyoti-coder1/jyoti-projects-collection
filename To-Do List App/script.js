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
    li.textContent = taskText;

    //Append to task list
    taskList.appendChild(li);

    //clear input
    taskInput.value = "";
}

//Event listener for Add button
addTaskBtn.addEventListener("click", addTask);