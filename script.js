let doc = document;

doc.getElementById("container-loader").addEventListener("click", function(e) {

    fetch("data.json").then((response) => {
        response.json().then((obj) => {
            let container = doc.getElementById("container");
            let ul = container.querySelector("ul");

            container.querySelector("h3").innerHTML = obj.title;
            
            obj.items.forEach((item, index) => {
                let li = doc.createElement("li");
                li.innerHTML = item;

                ul.appendChild(li);
            });

            ul.classList.add("fade-in");

            doc.querySelectorAll("#container ul li").forEach((element, index) => {
                element.classList.add("color-red");
            });
        });
        
    });
});

// $("#container-loader").on("click", function(e) {

//     $.getJSON("data.json").done((obj) => {
//         let container = $("#container");
//         let ul = container.find("ul");

//         container.find("h3").html(obj.title);
        
//         obj.items.forEach((item, index) => {
//             $("<li>").html(item).appendTo(ul);
//         });

//         ul.fadeIn();
//     });
// });