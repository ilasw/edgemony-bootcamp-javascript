import "./styles.css";

console.clear();

const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list"); // lista
const TASK_LIST_STORAGE = "taskList";
const localStorageList = localStorage.getItem(TASK_LIST_STORAGE);
console.log({ localStorageList });

const taskList = {
  list: [],
  addTask(task) {
    this.list.push(task);
    this.renderHTML();
    this.saveOnLocalStorage();
  },
  removeTask(index) {
    this.list.splice(index, 1);
    this.renderHTML();
    this.saveOnLocalStorage();
  },
  renderHTML() {
    listEl.innerHTML = this.list // ['Ciao']
        .map((task, index) => {
          // Ciao
          const currentDate = new Date();
          const date = ` ${currentDate.getHours()}:${currentDate.getMinutes()}`;

          const newTaskHTML = `<li>
          <input type="checkbox" /> 
          <time>${date}</time> 
          <span>${task}</span>
          <button data-index="${index}">elimina</button>
        </li>`;

          return newTaskHTML;
        })
        .join("");
  },
  saveOnLocalStorage() {
    localStorage.setItem(TASK_LIST_STORAGE, JSON.stringify(this.list));
  }
};

taskList.list = JSON.parse(localStorageList) || [];

if (taskList.length !== 0) {
  taskList.renderHTML();
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTask = inputEl.value;
  taskList.addTask(newTask);

  inputEl.value = "";
});

listEl.addEventListener("click", function (event) {
  const targetEL = event.target;

  // console.log(event.target);
  // console.log(event.currentTarget);

  if (targetEL.tagName === "INPUT") {
    console.log("click su input");
  }

  if (targetEL.tagName === "BUTTON") {
    taskList.removeTask(targetEL.getAttribute("data-index"));

    if (taskList.list.length === 0) {
      console.log("inserisco nuovamente i primi elementi in array");
      taskList.list = ["Primo"];
      taskList.renderHTML();
    }
  }
});
