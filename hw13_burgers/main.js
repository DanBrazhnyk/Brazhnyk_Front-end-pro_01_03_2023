class Hamburger {
    constructor(size,filling){
        this.size = size,
        this.filling = filling,
        this.burger =[]
    }
    static SIZE_BIG={
        price : 100,
        calories:40
    }
    static SIZE_SMALL={
        price : 50,
        calories:20
    }
    static STUFFING_CHEESE={
        price : 10,
        calories:20
    }
    static SALAT={
        price : 20,
        calories:5
    }
    static POTATO={
        price : 15,
        calories:10
    }
    static TOPPING_SAUCE={
        price:15,
        calories:0
    }
    static TOPPING_MAYO ={
        price:20,
        calories:5
    }
    addTopping(topping){
    return this.burger.push(topping)
    }
    calculate(){
        let calculateCalories = this.size.calories + this.filling.calories
        this.burger.forEach(souce => calculateCalories += souce.calories)
        return calculateCalories
    }
    calculatePrice(){
        let calculatePrice = this.size.price + this.filling.price
        this.burger.forEach(souce => calculatePrice += souce.price)
        return calculatePrice
    }
}
const burger = new Hamburger(Hamburger.SIZE_BIG,Hamburger.STUFFING_CHEESE)
burger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Calories: " + burger.calculate())
console.log("Price: " + burger.calculatePrice())

burger.addTopping(Hamburger .TOPPING_SAUCE);
console.log("Calories: " + burger.calculate())
console.log("Price: " + burger.calculatePrice())