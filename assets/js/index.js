console.log("Desde el script externo");

let boton = document.getElementById("btn-arriba");
boton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}