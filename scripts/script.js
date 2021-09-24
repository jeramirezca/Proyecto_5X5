//Script para movimiento de la barra de inicio

let simbolo_menu = document.querySelector("#simbolo_menu");
let barra_lateral = document.querySelector(".barra_lateral");

simbolo_menu.onclick = function () {
    barra_lateral.classList.toggle("activo");
}

//------------------------------------------------
