interface Task {
  name: string;
  creationDate: Date;
  endDate: string;
  message: string;
  completed: boolean;
}

let tasks: Task[] = [
  {
    name: "Test1",
    creationDate: new Date(),
    endDate: "new date",
    message: "test 1",
    completed: false,
  },
  {
    name: "Test2",
    creationDate: new Date(),
    endDate: "new date",
    message: "test 1",
    completed: false,
  },
];

function displayTasks() {
  const profileContainerElement = document.querySelector(
    ".todo-list-js"
  ) as HTMLElement;
  profileContainerElement.innerHTML = tasks
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
      <div class="task-completed">
      <label>Completed:</label>
      <span>${t.completed}</span></div>
      
    </div>`;
    })
    .join("");
}
displayTasks();

function addNewTask() {
  const taskName = document.querySelector(".task-name") as HTMLElement;
  const taskCreationDate = new Date();
  const taskEndDate = document.querySelector(".task-end-date") as HTMLElement;
  const taskMessage = document.querySelector(".task.message") as HTMLElement;

  tasks.push({
    name: taskName,
    creationDate: taskCreationDate,
    endDate: taskEndDate,
    message: taskMessage,
  });
}
