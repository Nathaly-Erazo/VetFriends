// FUNCIONES PARA EL ACORDEON
function abrirAccordion(item) {
    
    var panel = item.lastElementChild;
    panel.style.display = "block";
    panel.transition ="all 0.5s ease";
}


function cerrarAccordion(item) {

    var panel = item.lastElementChild;
    panel.style.display = "none";
}

