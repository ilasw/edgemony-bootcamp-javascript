(function () {
  // Esercizi svolti:

  // Spread
  const obj1 = { foo: "bar" };
  const obj2 = { name: "Mio nome" };

  const mergeTwoObjects = function (firstObj, secondObj, newProp) {
    return { ...firstObj, ...secondObj, [newProp]: "value" };
  };

  console.log(mergeTwoObjects(obj1, obj2, "name"));

  // Destructuring
  const array = ["a", "ab", "jgwroifmwe,fwfe", "nfmwfr"];
  const filterdArray = array.filter((string) => {
    // possiamo anche mettere ({length}) => length >= 10
    const { length } = string;
    return length >= 10;
  });

  // Get/Set
  // -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>
  const getProductHTML = (product) => {
    const { name, price } = product;
    return `<li>${name} - ${price}€</li>`;
  };

  const shop = {
    name: "Negozio di elettronica",
    _products: [],
    _page: 0,
    _per_page: 2,

    get products() {
      console.log("Stai leggendo i prodotti di ", this.name);
      return this._products;
    },

    set products(newProducts) {
      console.log("nuovi prodotti", newProducts);

      // document.body.innerHTML = "";
      // newProducts.forEach((product) => {
      //   document.body.insertAdjacentHTML("beforeend", getProductHTML(product));
      //   // document.body.innerHTML += getProductHTML(product);
      // });

      const productsHTML = newProducts.map(getProductHTML).join("");
      document.body.innerHTML = `
        <h2>Offerte lampo</h2>
        <ul>${productsHTML}</ul>
      `;

      this._products = newProducts;
    }
  };

  console.log(shop.products);

  shop.products = [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
    { id: 3, name: "Smartphone", price: 40 },
    { id: 4, name: "Apple", price: 30 }
  ];

  // --- Aggiorniamo ogni 3s con un prodotto in offerta:

  // const bucket = [
  //   { id: 1, name: "TV", price: 40 },
  //   { id: 2, name: "PC", price: 30 },
  //   { id: 3, name: "Smartphone", price: 40 },
  //   { id: 4, name: "Apple", price: 30 }
  // ];

  // setInterval(() => {
  //   const randomIndex = Math.floor(Math.random() * bucket.length);
  //   shop.products = [bucket.at(randomIndex)];
  // }, 3_000);

})();