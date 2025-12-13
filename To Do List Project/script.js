const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAll = document.getElementById("clearAll");

document.getElementById("addBtn").addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

window.onload = () => {
  input.focus();
  loadTasks();
};

function updateCount() {
  const total = taskList.querySelectorAll("li").length;
  taskCount.textContent = `Tasks: ${total}`;
}

function addTask() {
  let task = input.value.trim();
  if (task === "") return;

  createTaskElement(task);
  saveTasks();
  input.value = "";
  updateCount();
}

function createTaskElement(task) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="taskText">${task}</span>
    <span class="deleteBtn">Delete</span>
  `;

  li.querySelector(".taskText").addEventListener("click", function () {
    this.classList.toggle("taskDone");
    saveTasks();
  });

  li.querySelector(".deleteBtn").addEventListener("click", function () {
    li.remove();
    saveTasks();
    updateCount();
  });

  taskList.appendChild(li);
}

clearAll.addEventListener("click", () => {
  taskList.innerHTML = "";
  saveTasks();
  updateCount();
});

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.querySelector(".taskText").textContent,
      done: li.querySelector(".taskText").classList.contains("taskDone")
    });
  });

  localStorage.setItem("todoGenZ", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("todoGenZ")) || [];

  saved.forEach(item => {
    createTaskElement(item.text);
    if (item.done) {
      taskList.lastChild.querySelector(".taskText").classList.add("taskDone");
    }
  });

  updateCount();
}
