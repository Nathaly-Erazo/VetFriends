function copyInnerHTML(element) {
	const textArea = document.createElement("textarea");
	textArea.value = element.innerHTML;
	var textoPartido = textArea.value.split("</i> ");
	textArea.value = textoPartido [1]
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.remove();
}


document.addEventListener('keydown', function () {
	movimiento(event.key);
})

function movimiento(event) {
	if (event.key == "1") {
		window.location.href = 'index.html';
	}
	if (event.key == "2") {
		window.location.href = 'sobre_nosotros.html';
	}
	if (event.key == "3") {
		window.location.href = 'servicios.html';
	}
	if (event.key == "4") {
		window.location.href = 'contacto.html';
	}

}
window.onkeyup = movimiento;