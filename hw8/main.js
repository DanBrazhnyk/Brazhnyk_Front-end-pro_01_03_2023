const arr = [ [ [ [8],[[[5]]],[[[[[[[[3]]]]]]]] ] ] ];

function factorial(arr){
    if(!Array.isArray(arr)){
        return 0;
    }else{
    const factorialArr=[];
    const editArr = arr.flat(Infinity);
    editArr.forEach(elem=>{
        const iterator = Array.from(Array(elem).keys()).map(n => n + 1);
        const mulFactorial = iterator.reduce((acc, cur) => acc * cur, 1);
        factorialArr.push(mulFactorial) }
        )
    return factorialArr}
}
console.log("Factorial: "+factorial(arr).join('\nFacotrial: '))

let calculator = {
    a:0, 
    b:0,
    read(){
    this.a = +prompt("write a num"),
    this.b = +prompt("write b num")},
    sum(){return this.a+this.b;},
    mul(){return this.a*this.b}
};
  
  calculator.read();
  alert("Sum of values: "+ calculator.sum());
  alert("Mul of value: " + calculator.mul());