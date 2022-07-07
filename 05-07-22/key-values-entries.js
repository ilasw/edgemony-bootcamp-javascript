(function () {
  const product = {
    id: 1,
    name: "TV",
    price: 40,
    addons: {
      decoder: 10,
      qled: 40,
      stereo: 20
    }
  }; // -> 110

  const addonList = [];
  for (const addon in product.addons) {
    addonList.push(addon);
  }
  // console.log(addonList);

  console.log(Object.keys(product));
  console.log(Object.keys(product.addons));
  console.log(Object.values(product.addons));

  console.log("Matrix from addons", Object.entries(product.addons));

  const matrix = [
    ["prop", "value"],
    ["prop2", "value2"]
  ];

  const matrixObj = {
    prop: "value",
    prop2: "value2"
  };
  console.log("Object from matrix", Object.fromEntries(matrix));
})();