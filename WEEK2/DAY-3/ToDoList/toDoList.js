const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function createTask(taskText) {
    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    return li;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const taskElement = createTask(text);
    taskList.appendChild(taskElement);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskList.addEventListener("click", function(e) {

    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }

    if (e.target.classList.contains("complete-btn")) {
        e.target.closest("li").classList.toggle("completed");
    }

});