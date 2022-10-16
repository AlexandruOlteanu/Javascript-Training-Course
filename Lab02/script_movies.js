// 6.3

let movie1 = {

    title : "World War Z",
    durations : 120,
    actors : ["Brad Pit", "Alex", "Mariana"]
}

let movie2 = {
    title : "Icerde",
    durations : 130,
    actors : ["Cagatay Ulusoy", "Alex", "Mariana"]
}

let array = []
array.push(movie1);
array.push(movie2);

let i = 1;
array.forEach(element => {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = element.title;

    // 6.4

    paragraph.setAttribute("id", "movie-" + i);
    ++i;
    document.body.appendChild(paragraph);
    
    let myList = document.createElement("ul");
    let a1 = document.createElement("li");
    let a2 = document.createElement("li");
    a1.innerHTML = element.durations;
    a2.innerHTML = element.actors;
    myList.appendChild(a1);
    myList.appendChild(a2);
    paragraph.appendChild(myList);
});

