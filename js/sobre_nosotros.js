// FUNCIONES PARA EL ACORDEON
function abrirAccordion(item) {
    
    var panel = item.lastElementChild;
    panel.style.display = "block";
}


function cerrarAccordion(item) {

    var panel = item.lastElementChild;
    panel.style.display = "none";
}

