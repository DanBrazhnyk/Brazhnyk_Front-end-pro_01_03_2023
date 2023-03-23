const array = [1, 2, 3, 4, 5, 6,5, 7,"a","b","b","d","b","c","b","b", 5];
const removeElement = (arr,value) => arr.filter(elem => elem !== value);
console.log(removeElement(array, 'b'));

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789_-==+';
const generateKey = (size,str)=>{
    let res ='';
    for(let i = 0 ;i < size;i++){
    const char = str.charAt(Math.random() * str.length);
    res += char;
}   return res}
const key = generateKey(5, characters);
console.log(key); 

const cutElements=(str,userSymbols)=> {
    return  str.split('').filter(symbol =>!userSymbols.some(elem => elem===symbol)).join('')
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