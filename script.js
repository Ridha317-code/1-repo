document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // Only add the task if there's something typed
    if (taskText !== "") {
        // Create new list item
        const li = document.createElement("li");

        // Create text node for task
        const taskTextNode = document.createTextNode(taskText);
        li.appendChild(taskTextNode);

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");

        // When the delete button is clicked, remove the task
        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(deleteBtn);

        // Add the new task to the task list
        document.getElementById("taskList").appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
}
