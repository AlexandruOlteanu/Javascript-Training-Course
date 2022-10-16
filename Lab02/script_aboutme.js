// 6.1

// document.getElementsByClassName("lnXdpd").src = "https://logos-world.net/wp-content/uploads/2020/10/Yahoo-Logo.png";

// 6.2

document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "Alex";
document.getElementById("favorites").innerHTML = "Dogs";
document.getElementById("hometown").innerHTML = "Targoviste";

const array = document.querySelectorAll("li");

array.forEach(element => {
    element.setAttribute("class", "list-item");
});

const img = document.createElement("img");
img.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
document.body.appendChild(img);

// 6.3


