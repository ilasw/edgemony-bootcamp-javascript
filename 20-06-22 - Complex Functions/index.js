const sum = (num1, num2) => num1 + num2;
const sumWithCheck = (num1, num2) => {
  // const isBothParametersNumbers = !isNaN(num1) && !isNaN(num2);
  // return isBothParametersNumbers
  // ? (num1+num2)
  // : console.error('Stai sbagiando tutto');

  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }

  console.error("Non hai inserito due numeri >:( ");
  return null;
};

// presi due numeri devo diverli
// se non sono entrambi numeri: do errore
// se il secondo è 0: do errore
const divWithCheck = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Non hai inserito due numeri >:( ");
    return;
  }

  if (num2 === 0) {
    console.error("Non puoi dividere per zero!");
    return;
  }

  return num1 / num2;
};

console.log(sum(1, 3));
console.log(sumWithCheck(1, 3));
console.log(sumWithCheck(1, "3"));
console.log(divWithCheck(4, 1));

// Scriviamo una funzione che possa eseguire le 4 precedenti
// es:
// operation( sum, 1 , 3 ) -> 4
// operation( div, 1 , 0 ) -> Errore: non divisibile per zero :(
const operation = (methodFn, num1, num2) => {
  return methodFn(num1, num2);
};

console.log(operation(sumWithCheck, 1, 3));