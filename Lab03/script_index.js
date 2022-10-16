var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;

let myTimeout = setTimeout(timeoutMessage, 30000);

let info = document.getElementById("info");
let paragraph = document.createElement("p");
paragraph.innerHTML = "Speed of " + 1000 / delayMs * movePixels + " pixels per second";
paragraph.setAttribute("id", "speed-value");
info.appendChild(paragraph);

// Move the image on screen with 10px
function dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + movePixels + "px";
    paragraph.innerHTML = "Speed of " + 1000 / delayMs * movePixels + " pixels per second";
    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
    img.style.left = "0px";
    }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
    start.disabled = true;
    dogTimer = window.setInterval(dogWalk, delayMs);
    stopTimeout()
}

function stopDogWalk() {
    start.disabled = false;
    window.clearInterval(dogTimer);
    stopTimeout()
}

function speedDogWalk() {
    movePixels += 10;
    stopTimeout()
}

function resetWalk() {
    start.disabled = false;
    stopDogWalk();
    stopTimeout()
    movePixels = 10;
    var img = document.getElementsByTagName("img")[0];
    img.style.left = "0px";
    paragraph.innerHTML = "Speed of " + 1000 / delayMs * movePixels + " pixels per second";
}

const start = document.getElementById("start-button");
start.addEventListener("click", startDogWalk);

let stop = document.getElementById("stop-button");
stop.addEventListener("click", stopDogWalk);

let goFaster = document.getElementById("speed-button");
goFaster.addEventListener("click", speedDogWalk);

let reset = document.createElement("button");
let buttons = document.getElementById("buttons");
reset.innerHTML = "Reset";
reset.setAttribute("id", "reset-button");
buttons.appendChild(reset);

let getReset = document.getElementById("reset-button");
getReset.addEventListener("click", resetWalk);

function timeoutMessage() {
    let p1 = document.createElement("p");
    p1.innerHTML = "Session Expired";
    document.body.appendChild(p1);
}

function stopTimeout() {
    clearTimeout(myTimeout);
    myTimeout = setTimeout(timeoutMessage, 30000);
}


