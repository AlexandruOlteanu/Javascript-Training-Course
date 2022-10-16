// 7.1

const button = document.getElementById("story-button");
button.addEventListener("click", makeStory);

function makeStory(){
    let visitedPlaces = document.getElementById("places").value;
    let characteristics = document.getElementById("characteristics").value;
    let people = document.getElementById("people").value;
    let story = people + " visited the " + characteristics + " " + visitedPlaces;
    document.getElementById("story").innerHTML = story;    
}

