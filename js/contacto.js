// FUNCIÓN PARA EL FOMULARIO
(function () {
    var floatingLabel;

    floatingLabel = class floatingLabel {
        constructor(form, options = {}) {
            var event, i, input, j, label, len, len1, ref, ref1;
            if (!form) {
                return;
            }
            options.focusClass || (options.focusClass = "focus");
            options.activeClass || (options.activeClass = "active");
            options.errorClass || (options.errorClass = "error");
            form.classList.add('has-floated-label');
            ref = form.querySelectorAll('label');
            for (i = 0, len = ref.length; i < len; i++) {
                label = ref[i];
                if (!(input = document.querySelector(`#${label.getAttribute('for')}`))) {
                    return;
                }
                ref1 = ['keyup', 'input', 'change'];
                for (j = 0, len1 = ref1.length; j < len1; j++) {
                    event = ref1[j];
                    input.addEventListener(event, function () {
                        this.parentNode.classList.remove(options.errorClass);
                        return this.parentNode.classList.toggle(options.activeClass, !!this.value);
                    });
                }
                input.addEventListener('focus', function () {
                    return this.parentNode.classList.add(options.focusClass);
                });
                input.addEventListener('blur', function () {
                    return this.parentNode.classList.remove(options.focusClass);
                });
                input.parentNode.classList.toggle(options.activeClass, !!input.value);
            }
        }

    };

    window.floatingLabel = new floatingLabel(document.querySelector('.form'));

}).call(this);

// FUNCIÓN PARA EL CONTADOR DE CARATERES
function contador() {
    const textarea = document.getElementById("message");
    const count = document.getElementById("contador");

    count.textContent = textarea.maxLength - textarea.value.length;

}

// FUNCIÓN PARA EL  MODAL
function openModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
}
function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.addEventListener('keydown', function () {
    movimiento(event.key);
})

// FUNCIÓN QUE ASIGNA ACCIONES A LAS TECLAS
function movimiento(event) {
    if (event.key == "y") {
        closeModal();
    }
    if (event.key == "n") {
        closeModal();
    }
    if (event.key == "s") {
        closeModal();
    }
    if (event.key == "Escape") {
        closeModal();
    }

}
window.onkeyup = movimiento;

// FUNCIÓN PARA MOSTRAR ALERTA
const mostarAlerta = document.getElementById("alert");
const mostrarBtn = document.getElementById("confirmBtn");
const mostrarBtn2 = document.getElementById("cancelBtn");

mostrarBtn.addEventListener("click", (e) => {
    mostarAlerta.classList.remove("hidden");
    setTimeout(function () {
        mostarAlerta.classList.add("hidden");
    }, 2000);
})
mostrarBtn2.addEventListener("click", (e) => {
    mostarAlerta.classList.remove("hidden");
    setTimeout(function () {
        mostarAlerta.classList.add("hidden");
    }, 2000);
})