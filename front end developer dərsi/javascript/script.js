const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      ${taskText}
      <button class="deleteBtn">Sil</button>
    `;
    taskList.appendChild(li);

    li.querySelector(".deleteBtn").addEventListener("click", () => {
      li.remove();
    });

    taskInput.value = "";
  }
});
