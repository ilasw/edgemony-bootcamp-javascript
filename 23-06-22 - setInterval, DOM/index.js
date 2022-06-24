const getCurrentTime = () => {
  const hours = `${new Date().getHours()}`.padStart(2, "0");
  return `${hours} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
};

const logCurrentTime = () => {
  console.log(getCurrentTime());
};

// Timeout
//  Stampiamo dopo 1,5,10 secondi la data corrente in questo formato
//  "Ora : Minuti"
// possono essere 3 timeout diversi oppure bonus:
setTimeout(logCurrentTime, 1_000);
setTimeout(logCurrentTime, 5_000);
setTimeout(logCurrentTime, 10_000);

// usare un array ti timeout [1,5,10].forEach
[1, 5, 10].forEach((time) => {
  setTimeout(logCurrentTime, 1_000 * time);
});

// Interval
// 1) Fare il console.log analogo a quello mostrato su time.is
setInterval(() => {
  console.clear();
  logCurrentTime();
}, 1_000);

// 2) dato un array ( [42, 23, 1, 7, 12, 99] )
//    ogni secondo se abbiamo ancora elementi non dichiarati peschiamo un nuovo numero,
//    quando non abbiamo più numeri fare il clearInterval
//   tip: dobbiamo contare quante volte abbiamo fatto parte l'interval
const numbers = [42, 23, 1, 7, 12, 99];
// Se volessimo un sort randomico fare: numbers.sort(() => Math.random() * -0.5 - 1);
let index = 0;

const timerId = setInterval(() => {
  const currentNumber = numbers[index];
  if (typeof currentNumber === "undefined") {
    clearInterval(timerId);
    return;
  }

  console.log({currentNumber});
  index += 1;
}, 1_000);

// DOM
// 1) Prendiamo l'esercizo 1 e lo applichiamo al document.body.innerHTML
setInterval(() => {
  document.body.innerHTML = `
    <h1>Orario corrente:</h1>
    <time>${getCurrentTime()}</time>
  `;
}, 1_000);

// ---- Esercizio dei ragazzi da correggere
let timesRun = 0;
// il problema è che qui stiamo definendo array2 ad ogni ciclo!
let extractRandomNumbers = setInterval(function () {
  const array2 = [42, 23, 1, 7, 12, 99]; // spostare questa variabile sopra, prima della funzione.
  timesRun += 1;

  if (timesRun === array2.length) {
    clearInterval(extractRandomNumbers);
  }

  const random = Math.floor(Math.random() * array2.length);
  array2.splice(random, 1);
  console.log(array2[random]);
}, 1000); // ---> da risolvere