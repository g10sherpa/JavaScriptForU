let taskFormEl = document.querySelector("#task-form");
taskFormEl.addEventListener("submit", (event) => {
  let taskInputEl = document.querySelector("#input-item");
  let task = taskInputEl.value.trim();

  //get task
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  taskList.unshift(task);

  //set to local storage
  localStorage.setItem("tasks", JSON.stringify(taskList));

  displayTask();
});

//display tasks
let displayTask = () => {
  let taskListEl = document.querySelector("#taskLists");
  let taskList = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  if (taskList.length !== 0) {
    let eachTask = "";
    for (let task of taskList) {
      eachTask += `<li
              class="
                list-group-item
                bg-success
                list-group-item-action list-group-item-warning
              "
            >
              <span class="font-weight-bold text-dark">${task}</span>
              <button class="close">
                <i class="fa fa-times-circle fa-2x"></i>
              </button>
            </li>`;
    }
    taskListEl.innerHTML = eachTask;
  }
};
displayTask();

//remove task
let taskListEl = document.querySelector("#taskLists");
taskListEl.addEventListener("click", function (event) {
  let targetElement = event.target;
  if (targetElement.classList.contains("fa-times-circle")) {
    let actualEl = targetElement.parentElement.parentElement;
    let selectedTask = actualEl.innerText;

    //get task from local storage
    let taskList = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

    taskList = taskList.filter(function (task) {
      return task.trim() !== selectedTask.trim();
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    displayTask();

    window.reload();
  }
});
