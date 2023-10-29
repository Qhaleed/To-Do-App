const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask (){
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement ("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value ="";
       
   
}
    }
    
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } 
}
)

window.addEventListener('load', () => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);

        tasks.forEach(task => {
            createTaskElement(task);
        });
    }
});

function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.innerHTML = taskText;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Store the updated list of tasks in local storage
    saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
    const tasks = Array.from(listContainer.getElementsByTagName("li")).map(li => li.innerHTML);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

