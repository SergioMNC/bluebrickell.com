

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
//Note the space in hello was added in the argument
let mySum = ("Hello "+"world");
console.log(mySum)
// = means aassigment

//Strict equality - test for equality
myVariable = 3;
console.log(myVariable === 4);

//Not, Does not equal. It turn ture into false
myVariable = 4;
console.log(myVariable !== 4);

//Conditionals if...else
let iceCream = "caramel";
if (iceCream === "caramel") {
    alert("Thats fire!");
} else {
    alert("Good for you");
}

//poker game
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  };
  
const array = ["A*", "K*", "Q*", "J*", "0*", "9*", "8*", "7*", "6*", "5*", "4*", "3*", "2*","A^", "K^", "Q^", "J^", "0^", "9^", "8^", "7^", "6^", "5^", "4^", "3^", "2^","A!", "K!", "Q!", "J!", "0!", "9!", "8!", "7!", "6!", "5!", "4!", "3!", "2!","A@", "K@", "Q@", "J@", "0@", "9@", "8@", "7@", "6@", "5@", "4@", "3@", "2@" ];
  
const shuffledArray = shuffleArray(array);
  
console.log(shuffledArray);

//An argument is a value(primitive or object) passed as input to a function
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // passing two arguments

// This function takes two values
function example(parameter1, parameter2) {
  console.log(parameter1); // Output = "Web"
  console.log(parameter2); // Output = "Development"
}
//The argument order within the function call should be the same as the parameters order in the func definition

//This fucntion multiplies arguments; must call function
function multiply(n1 ,n2){
  let result = n1 * n2;
  return result;
}
/*
The following add a message event when the page is clicked. 
Function () === ()=>
*/
document.querySelector('p').addEventListener("click", () => {
  alert("Keep thinking is just luck!");
})

document.querySelector('h2').addEventListener("click", function() {
  alert(array)
})
