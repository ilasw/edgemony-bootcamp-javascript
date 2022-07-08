import "./styles.css";

/**
 *
 * Da utente vogliamo trovare al caricamento della pagina una barra di testo vuota
 * Da utente vogliamo che, dopo aver compilato l'input, premere invio e aggiungere un elemento alla lista
 * Da utente vorrei vedere una lista con gli elementi che ho aggiunto
 * Da utente voglio poter segnare alcuni elementi come fatti
 *
 * */

console.clear();

const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list"); // lista

/// --- LocalStorage ---
const TASK_LIST_STORAGE = "taskList";
const localStorageList = localStorage.getItem(TASK_LIST_STORAGE);
console.log({ localStorageList });

if (localStorageList) {
  listEl.innerHTML = localStorageList;
}
// ----- end local storage

const taskList = [];

console.log(formEl);
// formEl.onsubmit = () => console.log("ciao");

formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // preveniamo il reaload della pagina

  // const $form = this || event.target || event.currentTarget;

  const newTask = inputEl.value;
  const currentDate = new Date();
  const date = ` ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const newTaskHTML = `<li>
    <input type="checkbox" /> 
    <time>${date}</time> 
    <span>${newTask}</span>
    <button>elimina</button>
  </li>`;

  // potremmo iniziare ad aggiungere le task ad un array per usarlo in futuro...
  // taskList.push(newTask);

  // console.log(listEl);
  // same as: listEl.innerHTML = listEl.innerHTML + newTaskHTML;
  listEl.innerHTML += newTaskHTML;

  // const newLI = document.createElement("li");
  // newLI.innerHTML = newTaskHTML;
  // listEl.append(newLI);
  // newLI.querySelector("button").addEventListener("click", () => {
  //   console.log("click su elimina");
  // });

  // listEl.insertAdjacentHTML("beforeend", newTaskHTML);
  // Reset del value dell'input di testo
  inputEl.value = "";

  localStorage.setItem(TASK_LIST_STORAGE, listEl.innerHTML);
});

listEl.addEventListener("click", function (event) {
  const targetEL = event.target;

  console.log(event.target); // event.target l'element primo che ha generato
  console.log(event.currentTarget);

  if (targetEL.tagName === "INPUT") {
    console.log("click su input");
  }

  if (targetEL.tagName === "BUTTON") {
    console.log("sono un button elimina");
    const parentLI = targetEL.closest("li");

    if (parentLI) {
      parentLI.remove();
      localStorage.setItem(TASK_LIST_STORAGE, listEl.innerHTML);
    }
  }
});
