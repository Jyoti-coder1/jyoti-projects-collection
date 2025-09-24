const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Load tasks from localStorage on page load
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render task on the page
function renderTasks() {
    taskList.innerHTML = ""; //Clear existing tasks

    tasks.forEach((task, index) => {
        //Create <li> element
        const li = document.createElement("li");
        // Create checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        // Add event listener to toggle "completed" class on li
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed", checkbox.checked);
            tasks[index].completed = checkbox.checked;
            saveTasks();
        });

        // Create span for text
        const span = document.createElement("span");
        span.textContent = task.text;

        // Create Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit-btn";

        editBtn.addEventListener("click", () => {
            const newText = prompt("Edit your task:", span.textContent);

            if (newText === null) return;

            // Validation: prevent empty edit
            if (newText.trim() === "") {
                alert("Task cannot be empty!");
                return;
            }
            span.textContent = newText.trim();
            tasks[index].text = newText.trim();
            saveTasks();
        });

        // create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        //Delete task on button click
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        //Append checkbox + text + edit + delete button to li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        //Apply completed class if task is completed
        if (task.completed) li.classList.add("completed");

        //Append li to task list
        taskList.appendChild(li);
    });
}

//Function to add a task
function addTask() {
    const taskText = taskInput.value.trim(); //remove spaces

    // Validation: prevent empty task
    if (taskText === "") {
        alert("Please enter a Task!");
        return;
    }
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    renderTasks();

    //clear input
    taskInput.value = "";
}

//Event listener for Add button
addTaskBtn.addEventListener("click", addTask);

//Initial render on page load
renderTasks();