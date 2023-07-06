interface Task {
  id: string;
  name: string;
  creationDate: Date;
  endDate: string;
  message: string;
  completed: boolean;
}

let tasks: Task[] = [];
let tasksAdded: number = 0;

function displayTasks() {
  (document.querySelector(".todo-list-js") as HTMLElement).innerHTML = tasks
    .map((t) => {
      return `<div class="task">
      <div class="task-name">
      <label>Name:</label>
      <span>${t.name}</span></div>
      <div class="task-creation-date">
      <label>Creation Date:</label>
      <span>${t.creationDate}</span></div>
      <div class="task-end-date">
      <label>End Date:</label>
      <span>${t.endDate}</span></div>
      <div class="task-message">
      <label>Message:</label>
      <span>${t.message}</span></div>
      <div class="task-completed" onClick="completedTask('${t.id}')">
      <label>Completed:</label>
      <span>${t.completed}</span></div>
      <div>
      <button onClick="removeTask('${t.id}')">remove</button>
      </div>
      
    </div>`;
    })
    .join("");
}
displayTasks();

function addNewTask(event: Event) {
  event.preventDefault();
  tasksAdded++;

  const taskName = (document.querySelector(".task-name") as HTMLInputElement)
    .value;
  const taskCreationDate = new Date();
  const taskEndDate = (
    document.querySelector(".task-end-date") as HTMLInputElement
  ).value;
  const taskMessage = (
    document.querySelector(".task-message") as HTMLInputElement
  ).value;

  tasks.push({
    id: "task" + tasksAdded,
    name: taskName,
    creationDate: taskCreationDate,
    endDate: taskEndDate,
    message: taskMessage,
    completed: false,
  });
  displayTasks();
}

function removeTask(id: string) {
  const index = tasks.findIndex((t) => t.id === id);
  tasks.splice(index, 1);
  displayTasks();
}

function completedTask(id: string) {
  const index = tasks.findIndex((t) => t.id === id);
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}
