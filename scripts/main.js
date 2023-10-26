
/*
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Poker is great, ${myName}`;   
  }
  if (!localStorage.getItem("name")) {
   setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Poker is great, ${storedName}`;
  }

myButton.onclick = () => {
  setUserName();
};

*/
let myImage = document.querySelector("img");
myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.jpg"){
    myImage.setAttribute("src", "images/OIG.jpg");
  } else {
    myImage.setAttribute("src", "images/logo.jpg")
  }
}

//personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


  
  
  

