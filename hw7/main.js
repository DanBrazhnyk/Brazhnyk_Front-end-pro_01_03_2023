const array = [1, 2, 3, 4, 5, 6,5, 7,"a","b","b","d","b","c","b","b", 5];
const removeElement = (arr,userValue) => arr.filter(elem => elem !== userValue);
console.log(removeElement(array, 'b'));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_-==+';
const generateKey = (sizeOfKey,inputStr)=>{
    let generateStr ='';
    for(let i = 0 ;i < sizeOfKey;i++){
    const randomSymbol = inputStr.charAt(Math.random() * inputStr.length);
    generateStr += randomSymbol;
}   return generateStr}
const key = generateKey(5, characters);
console.log(key); 

const cutElements=(initialStr,userSymbols)=> {
    return  initialStr.split('').filter(symbol =>!userSymbols.some(elem => elem===symbol)).join('')
} 
console.log(cutElements("hello world",['o','w']))

function summator(){
    let initialVAlue = 0;
    return function(userValue){
        return initialVAlue+=userValue;
    }
}
const sum = summator()
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));