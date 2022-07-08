# Esercizi

Scriviamo un'applicazione JavaScript che permetta, dato un input di testo in un form, al submit di effettuare una
ricerca su https://openlibrary.org/ e motrare i risultati su una lista `<ul>`.

```js
const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".task-list"); // lista

// const API_URL = "https://openlibrary.org/subjects/harry_potter.json";
const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";
```

