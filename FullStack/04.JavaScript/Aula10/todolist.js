const user = {
  name: "Rodolfo",
  dateOfBirth: "12/09/1997",
  age: 26,
  city: "Lisbon",
  country: "Portugal",
  ocupation: "Web Developer",
};

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let tasksAdded = localStorage.getItem("tasksCounter") || 0;

document.querySelector(".profile-container-js").innerHTML = `<div>
    <img src="" alt="" />
</div>
<div>
    <div class="user-name">
        <label>Name:</label>
        <span>${user.name}</span>
    </div>
    <div class="user-date-of-birth">
        <label>Date of Birth:</label>
        <span>${user.dateOfBirth}</span>
    </div>
    <div class="user-age">
        <label>Age:</label>
        <span>${user.age}</span>
    </div>
    <div class="user-city">
        <label>City:</label>
        <span>${user.city}</span>
    </div>
    <div class="user-country">
        <label>Country:</label>
        <span>${user.country}</span>
    </div>
    <div class="user-ocupation">
        <label>Ocupation:</label>
        <span>${user.ocupation}</span>
    </div>
</div>`;

function displayTasks() {
  document.querySelector(".todo-list-js").innerHTML = tasks.map((task) => {
    return `
        <div class="task">
            <div class="task-name">
            <label>Name:</label>
            <span>${task.name}</span>
            </div>
            <div class="task-creation-date">
            <label>Creation Date:</label>
            <span>${task.creationDate}</span>
            </div>
            <div class="task-end-date">
            <label>End Date:</label>
            <span>${task.endDate}</span>
            </div>
            <div class="task-message">
            <label>Message:</label>
            <span>${task.message}</span>
            </div>
            <div class="task-completed" onClick="toggleComplete('${task.id}')">
            <label>Completed:</label>
            <span>${task.completed}</span>
            </div>
            <button onclick="removeTask('${task.id}')">Remove</button>
         </div>`;
  });
}

displayTasks();

function addNewTask(event) {
  event.preventDefault();
  tasksAdded++;

  const taskName = document.querySelector(".task-name").value;
  const taskCreationDate = new Date();
  const taskEndDate = document.querySelector(".end-date").value;
  const taskMessage = document.querySelector(".message").value;

  tasks.push({
    id: "task" + tasksAdded,
    name: taskName,
    creationDate: taskCreationDate,
    endDate: taskEndDate,
    message: taskMessage,
    completed: false,
  });
  localStorage.setItem("tasksCounter", tasksAdded);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function removeTask(id) {
  const index = tasks.findIndex((t) => t.id === id);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks(tasks);
}

function toggleComplete(id) {
  const index = tasks.findIndex((t) => t.id === id);
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
