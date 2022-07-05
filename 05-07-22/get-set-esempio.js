(function () {
  const first = {
    nomeNascosto: "Eleonora",
    counterPremi: 0,
    get name() {
      console.log(
        `Congraturazione ${this.nomeNascosto}! Sei andata a premi :))`
      );
      this.counterPremi += 1;
      console.log(
        `Counter premi di ${this.nomeNascosto}: ${this.counterPremi}`
      );

      return this.nomeNascosto;
    }
  };

  const second = {
    name: "Marco"
  };

  const podioCorsa = [first.name, second.name];
  //

  const podioOstacoli = [first.name, second.name];
  const podioNuoto = [second.name];

  console.log({ podioCorsa, podioOstacoli, podioNuoto });
  console.log(first.counterPremi);
})();