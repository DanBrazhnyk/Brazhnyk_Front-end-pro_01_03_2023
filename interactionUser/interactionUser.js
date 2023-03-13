let userName = prompt("What's your name?")
let surname = prompt ("Your surname")
let age = prompt("Your age")
let ageNum = Number(age)
let userLocation = prompt("What's your location?")
let user = {
    userName,
    surname,
    ageNum,
    userLocation
}
let isAllowedData = confirm("Can we show your data?")
let userData = `User name: ${user.userName}; surname: ${user.surname}; age: ${user.ageNum}; location: ${user.userLocation}.`;
isAllowedData == true? console.log(userData):alert("User doesn't allow to show his data ");