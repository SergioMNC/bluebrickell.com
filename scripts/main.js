
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
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.jpg"){
    myImage.setAttribute("src", "images/OIG.jpg");
  } else {
    myImage.setAttribute("src", "images/logo.jpg")
  }
};



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Whats your name');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'WELCOME TO POKER GODS, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'WELCOME TO POKER GODS, ' + storedName;
}

myButton.onclick = () => {
  setUserName();
}

  
  
  

