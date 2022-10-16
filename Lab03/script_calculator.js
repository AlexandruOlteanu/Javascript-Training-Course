// 7.2

const square = document.getElementById("square-button");
square.addEventListener("click", calcSquare);

const half = document.getElementById("half-button");
half.addEventListener("click", calcHalf);

const percent = document.getElementById("percent-button");
percent.addEventListener("click", calcPercent);

const area = document.getElementById("area-input");
area.addEventListener("keypress", calcCircleRadius);

let solution = document.getElementById("solution");
let myList = document.createElement("ul");
solution.appendChild(myList);


function calcSquare() {
    let number = document.getElementById("square-input").value;
    let newItem = document.createElement("li");
    newItem.innerText = "Squared value of " + number + " = " + number * number;
    myList.appendChild(newItem);
}

function calcHalf() {
    let number = document.getElementById("half-input").value;
    let newItem = document.createElement("li");
    newItem.innerText = "Half of " + number + " = " + number / 2;
    myList.appendChild(newItem);
}

function calcPercent() {
    let numberPercent = document.getElementById("percent1-input").value;
    let number = document.getElementById("percent2-input").value;
    let newItem = document.createElement("li");
    newItem.innerText = numberPercent + "% of " + number + " = " + numberPercent / 100 * number;
    myList.appendChild(newItem);
}

function calcCircleRadius() {
    let radius = document.getElementById("area-input").value;
    let newItem = document.createElement("li");
    newItem.innerText = "Are of a circle with radius " + radius + " = " + Math.PI * radius * radius;
    myList.appendChild(newItem);
}