const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpg") {
    myImage.setAttribute("src", "images/fast_michael_scott.jpeg");
  } else {
    myImage.setAttribute("src", "images/cat.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Your name is cool, ' + myName;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'I remember your name was ' + storedName;
}

myButton.onclick = () => {
    setUserName();
};
  
