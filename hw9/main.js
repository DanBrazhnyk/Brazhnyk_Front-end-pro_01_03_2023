const arr1 = [1,2,3,4,5,1,2,3,4,2,5,'b','b','b','b']
const findUnique = (arr) => {const newArr= [...new Set(arr)]; console.log(newArr)};
findUnique(arr1)

// const uniqeSymbol = (arr)=>{
//   const mas = [];
//   for(const elem of arr){
//     mas[elem]=elem
//   }
//   const newArr =Object.values(mas)
//   console.log(newArr)}
// говно кодерское решение)
const uniqueSymbols =(arr)=>arr.filter((item,index)=> index===arr.indexOf(item))
console.log(uniqueSymbols(arr1))

function mostFrequent(arr){
  let mostFrequent = arr[0];
  let counter = 1;
  const findFrequentElem = arr.reduce((mas, elem) => {
    if (elem in mas) {
      mas[elem]++;
    } else {
      mas[elem] = 1;
    }
    if (mas[elem] > counter || (mas[elem] === counter && arr.indexOf(elem) < arr.indexOf(mostFrequent))) {
      counter = mas[elem];
      mostFrequent = elem;
    }
    return mas;
  }, {});
  return mostFrequent;}
console.log(mostFrequent(arr1))

let y = 5;
let x = () => y;
let z = t => {
  let y = 5;
  t();
};
console.log(z(x))
// мы создаём сначала у равный 5,после передаем это в значение в функцию х как возврат , после этого создаем функцию z в которой 
//создаём переменную у равную 5 которую нигде не юзаем и параметр t который пытаемcя вызвать как функцию,
//но так как t мы не возвращаем с помощью return оно выведет undefined,если сделать внутри return t();то все будет гуд) и выведется у который передавали в х,
//такой нюанс произошел из-за того что юзаем фигурные скобочки и есть несколько выражений и стрелочной функции нужно понять что мы хотим от нее

function debounce(f, delay) {
  let time;
  return function(...elem) { 
    if (time === undefined) {
      f.apply(this, elem);
      time = Date.now();
  } else {
      let intervalTime = Date.now() - time;
      if (intervalTime > delay) {
        f.apply(this, elem);
        time = Date.now();
        }};
  }
}

let f = debounce(alert, 1000);


f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)