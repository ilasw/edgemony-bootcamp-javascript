(function () {
  console.clear();

  const newProducts = Array.from(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      (_, index) => {
        return {
          id: 1,
          name: `TV - ${_}`,
          price: 40 + index
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
      // this.products
      // calcoliamo gli indici di inizio e fine

      const productsHTML = this.getProducts()
          .map((product) => {
            const { name, price } = product;
            //
            return `<li>${name} - ${price}€</li>`;
          })
          // --- Questa versione è meno ottimizata e mostra tutti i prodotti della pagina
          // --- nascondendo con il display:none se non sono da visualizzare
          // .map((product, index) => {
          //   const startIndex = this.page * this.perPage;
          //   const endIndex = startIndex + this.perPage;
          //   //
          //   const { name, price } = product;
          //   //
          //   const isToShow = index >= startIndex && index < endIndex;
          //   const display = isToShow ? "block" : "none";
          //   //
          //   return `<li style="display: ${display}">${name} - ${price}€</li>`;
          // })
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
  const $buttons = document.querySelectorAll(".pagination button");

  $pagination.addEventListener("click", function (event) {
    console.log("click su pagination");
    // console.log("event target:", event.target);

    if (event.target.tagName === "BUTTON") {
      event.preventDefault();

      console.log("stai cliccando su un button");
      const buttonEl = event.target;
      const newPage = Number(buttonEl.innerText) - 1;

      shop.setPage(newPage);
    }
  });

  // // per ogni bottone che abbiamo trovato con il selettore:
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