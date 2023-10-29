const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Add a click event listener to the delete (X) button to remove the task
        span.addEventListener("click", function () {
            li.remove();
            saveData();
        });

        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
});

function saveData() {
    // Store the tasks as an array in local storage
    const tasks = Array.from(listContainer.querySelectorAll("li"));
    const taskTexts = tasks.map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(taskTexts));
}

function showTask() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        tasks.forEach(taskText => {
            let li = document.createElement("li");
            li.innerHTML = taskText;
            listContainer.appendChild(li);
        });
    }
}

showTask();
