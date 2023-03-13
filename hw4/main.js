console.log("nums in range from 10 to 20:");
let output = "";
let i = 10;
while (i <= 19) {
  i++;
  i === 20 ? (output += i) : (output += i + ",");
}
console.log(output);

console.log("square of numbers:");
let out = "";
for (let i = 10; i <= 20; i++) {
  i === 20 ? (out += Math.pow(i, 2)) : (out += Math.pow(i, 2) + ",");
}
console.log(out);

console.log("product of all integers:");
let result = 1;
for (let i = 15; i <= 35; i++) {
  result = result * i;
}
console.log(result);

console.log("average number:");
let iterations = 0;
let sum = 0;
let average;
for (let i = 1; i < 500; i++) {
  sum = sum + i;
  iterations++;
  average = sum / iterations;
}
console.log(average);

console.log("double numbers:");
let sumNumbers = 0;
for (let i = 30; i <= 80; i++) {
  i % 2 === 0 ? (sumNumbers += i) : false;
}
console.log(sumNumbers);

console.log("multiples of 3:");
let outNums = "";
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    i === 198 ? (outNums += i) : (outNums += i + ",");
  }
}
console.log(outNums);

let inputNumber = +prompt("Write a number");
if (inputNumber > 1) {
  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i !== 0) {
      alert("Number is simple");
      break;
    } else {
      alert("Number isn't simple");
      break;
    }
  }
}
