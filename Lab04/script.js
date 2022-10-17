fetch("http://localhost:3000/dogs")
    .then(

        function(response) {
            if (response.status !== 200) {
                console.log("Error with code " + response.status);
            }
            else {
                response.json().then(function(data) {

                    var len = data.length;
                    data.forEach(element => {
                        let img = document.createElement("img");
                        img.src = element.img;
                        let paragraph = document.createElement("p");
                        paragraph.setAttribute("id", element.name.toLowerCase());
                        paragraph.innerText = element.name;
                        paragraph.style.fontSize = "30px";
                        document.body.appendChild(img);
                        document.body.appendChild(paragraph);
                    
                    });

                });

            }
        }

    )