 const alphabet = 'abcdefghijklmnopqrstuvwxyz'
 const alphabetArr = [...alphabet]
 const checkSymbols = (str) =>{
    const strToLowerCase = str.toLowerCase()
    const checkStr = alphabetArr.every(symbol => strToLowerCase.includes(symbol)) 
    console.log(checkStr)
 }
 checkSymbols("wyyga") // false

 checkSymbols("qwertyuioplkjhgfdsazxcvbnm") // true
 
 checkSymbols("ejuxggfsts") // false
 
 checkSymbols("qpwoeirutyalskdjfhgmznxbcv") // true
 
 checkSymbols("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
 
 checkSymbols("0123456789abcdefghijklmnop") // false

const getFilterWords = (str)=>
{
    str.map(string => {
    const strToArray = [...string]
    const filterSymbols = strToArray.filter(symbol => symbol !=='.' && symbol !=='!' && symbol !==',' && symbol !=='-' && symbol !==';' &&symbol !==':' &&symbol !=='_' && symbol !=='=' && symbol !=='?')
    const editStr = filterSymbols.join('').split(' ')
    const sumOfWords = editStr.reduce((initialWord , currentWord) => initialWord + currentWord.length,0)
    const iterations = editStr.reduce(elem => {elem++  ;return elem},0)
    const getAverage = sumOfWords/iterations;
    const filterWords = editStr.filter(word => word.length > getAverage)
    console.log(filterWords)})
}
getFilterWords(["This is a sample string"]) //expected ["This" "sample" "string"]

getFilterWords(["Some another sample"]) //expected ["another" "sample"]

getFilterWords(["Do, do, do, do... do it!"]) //expected []

const DB = {
    passwordDB:123455775,
    guests:[]
}
const verifiedUser = {
    name:'Ban',
    surname:'White',
    mail:'banwhite123@gmail.com',
    phone:'+48455655111',
    sex:'male',
    city:'Barcelona',
    country:'Spain',
    __proto__:DB
}
const user = {
    login:'banwh321',
    password:5353434,
    __proto__:verifiedUser
}
const guest = {
    registration(info){
        DB.guests.push(info)
    },
    __proto__:DB
}
guest.registration('Garik')
guest.registration('Vasia')
guest.registration('Boria')

console.log(DB.guests)
console.log(guest)
console.log(user)
console.log(user.surname)
console.log(verifiedUser)
console.log(verifiedUser.passwordDB)
console.log(DB)