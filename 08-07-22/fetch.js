const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list"); // lista

// const API_URL = "https://openlibrary.org/subjects/harry_potter.json";
const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

console.clear();

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = inputEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  console.log("sto chiamando:", apiURL);

  fetch(apiURL)
      .then((response) => {
        // richiamo il metodo json della risposta in modo da ottere un oggetto valido
        console.log({ response });
        const json = response.json();
        console.log({ json });
        return json;
      })
      .then((json) => {
        // log dell'oggeto che abbiamo in return nel primo .then()
        console.log(json);
        // da tutti gli oggetti dentro json.docs prendiamo solo il titolo
        // const titles = json.docs.map((work) => work.title);
        // facciamo il log per controllo
        // console.log({ titles });

        // stampiamo la lista usando il map che crea "n" elementi <li>
        listEl.innerHTML = json.docs
            .map((doc) => {
              return `<li>${doc.title} <button data-key="${doc.key}">Vedi dettaglio</button></li>`;
            })
            // così togliamo la "," tra un elmento e l'altro
            .join("");

        // return titles; // array di stringa con i titoli
      })
      .catch((err) => {
        // gestiamo la casistica di errore
        console.error(err);
        listEl.innerHTML = `<li>C'è stato un piccolo errore, riprovare!</li>`;
        return []; // array vuoto
      })
      // questa roba non funziona a Luca
      .finally(console.log);
});
