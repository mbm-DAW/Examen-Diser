



let imagenes = document.querySelectorAll(".foto-aumenta");
for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", function () {
        imagenes[i].style.width="110%"  //border = "3px solid black";
    });

    imagenes[i].addEventListener("mouseout", function () {
        imagenes[i].style.width="100%";
    });


}
