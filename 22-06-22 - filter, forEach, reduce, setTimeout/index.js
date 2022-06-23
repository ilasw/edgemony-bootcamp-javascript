const array = [1, 2, 3, 4, 5, 6, 7, 8];

// forEach
// [ok] fare console.log() di ogni elemento di array
// fare un console.log() di ogni elemento, dopo un set timeout di (elemento * index)
// risultato: dopo 0s: console.log(1)
//            dopo 1s: console.log(2)
//            dopo 2s: console.log(3)

const logItemFn = (item) => console.log(item);
array.forEach(logItemFn);

console.clear();

const ONE_SEC = 1000;
const logItemInFuture = (item, index) => {
  const timeIntoFuture = ONE_SEC * index;

  setTimeout(() => {
    console.log(`Sono ${item}`);
  }, timeIntoFuture);
};
array.forEach(logItemInFuture);

// --- Metodo con reduce ---
const reduceFn = (time, item) => {
  setTimeout(() => {
    console.log(`Sono ${item}`);
  }, time);

  return time + 1000;
};
const timeMax = array.reduce(reduceFn, 0);
console.log({timeMax});

// array.forEach((item, index) => {
//   setTimeout(() => console.log(item), 1000 * index);
// });

// filter
// tenere dentro l'array solo i numeri pari
// const comparingArray = [2, 4, 6, 8];
console.log(array.filter((item) => (item % 0 === 0)))

// tenere solo i numeri in comune con questo array:
// [10, 1, 2, 5, 6]
// utility: Array.includes oppure Array.indexOf
// risultato: [1,2,5,6]

const comparingArray = [10, 1, 2, 5, 6];
const getNumberInCommon = (item) => {
  const isInComparingArray = comparingArray.includes(item);
  // const isInIndexOfComparing = comparingArray.indexOf(item) > -1;

  return isInComparingArray;
};
const commonNumbers = array.filter(getNumberInCommon);
console.log({commonNumbers});