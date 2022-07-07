(function () {
  console.clear();

  const newProducts = Array.from(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      (_, index) => {
        return {
          id: 1,
          name: `TV - ${_}`,
          price: 40 + index,
          stock: index * 2
        };
      }
  ); // Creiamo un array di 12 prodotti

  const shop = {
    page: 0,
    perPage: 5,

    products: [],

    setPage(newPage) {
      this.page = newPage;
      this.renderHTML();
    },

    // torna solo i prodotti dentro shop.products nella vista corrente
    getProducts() {
      const startIndex = this.page * this.perPage;
      const endIndex = startIndex + this.perPage;

      const slicedProducts = this.products.slice(startIndex, endIndex);

      return slicedProducts;
    },

    // imposta i prodotti dentro shop.products e stampa in pagina
    setProducts(products) {
      this.products = products;
      this.renderHTML();
    },

    renderHTML() {
      const productsHTML = this.getProducts()
          .map((product, index) => {
            const {name, price, stock} = product;
            //
            return `<li class="product" 
                      id="${this.page * this.perPage + index}"
                      data-name="${name}" 
                      data-price="${price}"
                      data-alert="${name} solo ${stock} in magazzino a ${price}">
            <h3>${name}</h3> 
            ${price}€ 
            <div>${stock} in magazzino</div>
          </li>`;
          })
          .join("");
      document.querySelector(".shop").innerHTML = `
          <h2>Offerte lampo</h2>
          <div>Page: ${this.page}</div>
          <div>Showing: ${this.getProducts().length}/${
          this.products.length
      }</div>
          <ul>${productsHTML}</ul>
      `;
    }
  };

  shop.setProducts(newProducts);

  const $pagination = document.querySelector(".pagination");
  $pagination.addEventListener("click", function (event) {
    console.clear();
    console.log(new Date().getTime());
    // console.log("click su pagination");
    console.log("event currentTarget:", event.currentTarget);
    console.log("event target:", event.target);

    if (event.target.tagName === "BUTTON") {
      event.preventDefault();
      console.log("stai cliccando su un button");

      const buttonEl = event.target;
      console.log("id button:", buttonEl.id);
      const newPage = Number(buttonEl.id) - 1;

      shop.setPage(newPage);
    }
  });

  const $shop = document.querySelector(".shop");
  $shop.addEventListener("click", function (event) {
    console.log("click sul product!");

    const productEl = event.target.closest(".product");

    if (productEl) {
      console.clear();
      console.log("cafone:", productEl.innerText);
      // dentro il dataset ho tutti gli attributi [data-*], super comodo per passare dati a JS
      console.log("dataset:", productEl.dataset.alert);

      // metodo tramite recupero di id da array
      console.log("productEl.id:", productEl.id);
      console.log(shop.products[productEl.id]);
      return;
    }
  });

// // per ogni bottone che abbiamo trovato con il selettore:
// const $buttons = document.querySelectorAll(".pagination button");
// $buttons.forEach(($button, index, array) => {
//   // facciamo il console log del singolo bottone
//   console.log($button);
//   // impostiamo un id = al suo index
//   $button.id = index;

//   // aggiungiamo un listener al click
//   $button.addEventListener("click", function (event) {
//     // annulla l'evento di default del browser associato all'elemento
//     event.preventDefault();
//     // annulla il natura bubbling dell'evento
//     event.stopPropagation();

//     // ricordiamo sempre che this.innerText/HTML è una stringa
//     // console.log(typeof this.innerText);
//     // voglio partire con le pagine da 0, per cui decremento di 1 il numero
//     const newPage = Number(this.innerText) - 1;
//     // imposto la pagina dentro l'oggetto
//     shop.setPage(newPage);
//     // controllo
//     console.log("shop.page", shop.page);
//   });
// });
})();
