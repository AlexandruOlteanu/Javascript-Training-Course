let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addDog);

let id = 1;
function addDog() {
    let name = document.getElementById("name").value;
    let imageUrl = document.getElementById("image_url").value;
    let img = document.createElement("img");
    img.src = imageUrl;
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", name.toLowerCase());
    paragraph.innerText = name;
    paragraph.style.fontSize = "30px";
    document.body.appendChild(img);
    document.body.appendChild(paragraph);
    let postRequest = new XMLHttpRequest();
    // postRequest.open("POST", "http://localhost:3000/dogs");
    // let data = {
    //     "name" : name,
    //     "img" : imageUrl
    // }
    // postRequest.send(data);
}