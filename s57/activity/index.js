console.log("Hello FullStack!");
// Universal sector
let firstElement = document.querySelectorAll('*');

// document refers to the whole webpage and querySelector is used to select a specific object (HTML element) from the document (webpage).

// The quesryselector function takes a string input that is formatted like a CSS selector when applying styles. This allows us to get a specific element much like how CSS do it.

console.log(firstElement);

let secondElement = document.getElementById('txt-first-name');
console.log(secondElement);

let thirdElement = document.getElementsByClassName('txt-inputs');
console.log(thirdElement);

let fourthElement = document.getElementsByTagName('input');
console.log(fourthElement);


const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

function updateFullName() {
    const firstName = txtFirstName.value.trim();
    const lastName = txtLastName.value.trim();
    spanFullName.innerHTML = `${firstName} ${lastName}`;
}

txtFirstName.addEventListener('input', updateFullName);
txtLastName.addEventListener('input', updateFullName);

// let bodyElement = document.querySelector("body");
// console.log(bodyElement.innerHTML);