let myName = "sergio";
console.log(myName);

//String
let myVariable = "Blue";
//Number
let myNumber = 777;
//Boolean, True or false values which dont need quotes.
let myBoolean = true;
//Array, Multiple values in a single reference
let myArray = [1, "Jennifer", 2];
//object - This can be anything. Object oriented language "IT CAN BE STORED AS A VARIABLE"
const myHeading = document.querySelector("h1");
myHeading.textContent = "POKER IS A SPORT!";

let mySum = ("Hello"+"world");
console.log(mySum)
// = means aassigment

//Strict equality - test for equality
myVariable = 3;
console.log(myVariable === 4);

//Not, Does not equal. It turn ture into false
myVariable = 4;
console.log(myVariable !== 4);

//Conditionals if...else
let iceCream = "cramel";
if (iceCream === "caramel") {
    alert("Thats fire!");
} else {
    alert("Good for you");
}