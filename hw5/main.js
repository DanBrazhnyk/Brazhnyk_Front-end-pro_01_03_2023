const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

const sumNums = arr.reduce((sum, current) => sum + current, 0);
console.log("Sum array:" + sumNums);

const positiveNums = arr.filter((item) => item >= 0);
const sumPositiveNums =  positiveNums.reduce((sum,current)=> sum + current,0)
console.log(
  "Positive numbers:" + positiveNums +
  "\nAmount of positive numbers:" + positiveNums.length +
  "\nSum of positive numbers:" + sumPositiveNums
);

const min = Math.min(...arr);
let indexMin;
arr.forEach((item, index) => {
  if (item === min) indexMin = index;
});
console.log("Minimal number:" + min + " His index:" + indexMin);

const max = Math.max(...arr);
let indexMax;
arr.forEach((item, index) => {
  if (item === max) indexMax = index;
});
console.log("Maximal number:" + max + " His index:" + indexMax);

const negativeNums = arr.filter((item) => item < 0);
console.log(
  "Negative numbers:" + negativeNums +
  "\nAmount of negative positive numbers:" + negativeNums.length
);

const countOfUnpaired = positiveNums.filter((item) => item % 2 !== 0);
console.log(
  "Unpaired:" + countOfUnpaired +
  "\nAmount of unpaired positive numbers:" + countOfUnpaired.length
);

const countOfPaired = positiveNums.filter((item) => item % 2 === 0);
console.log(
  "Paired:" + countOfPaired + "\nAmount of paired numbers:" + countOfPaired.length
);

const sumUnpaired = countOfUnpaired.reduce((sum, current) => sum + current, 0);
console.log("Sum of unpaired positive numbers:" + sumUnpaired);

const sumPaired = countOfPaired.reduce((sum, current) => sum + current, 0);
console.log("Sum of paired positive numbers:" + sumPaired);

const product = positiveNums.reduce(
  (multiplication, current) => multiplication * current,
  1
);
console.log("Product of positive elements: " + product);

const zeroedElems = arr.map((item) => {
  if (item < max) {
    return 0;
  } else {
    return item;
  }
});
console.log("Zeroed elements:" + zeroedElems);
