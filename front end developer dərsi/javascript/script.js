const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = Json.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    saveTasks();
    taskInput.value = "";
  }
});

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// İlk açılışda siyahını göstər
renderTasks();