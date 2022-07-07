(function () {
  const product = {
    id: 1,
    name: "TV",
    price: 40,
    stock: 0,
    addons: {
      decoder: 10,
      qled: 40,
      stereo: 20
    }
  };

  const allPrices = Object.values(product.addons); // [10,40,20]

  let fullOptionalPrice = product.price;
  allPrices.forEach((price) => (fullOptionalPrice += price));

  const fullOptional = allPrices.reduce((acc, price) => {
    acc += price;
    return acc;
  }, product.price);

  console.log({ fullOptionalPrice, fullOptional });
})();