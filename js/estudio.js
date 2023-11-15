// script.js

// Función para consultar el crédito
function consultar() {
    var resultado;
    var salario = document.credito.txtsalario.value;

    if (salario === "") {
        alert("No ha ingresado salario");
    } else {
        var slm = 1160000;

        if (salario >= slm) {
            resultado = "Eres apto para crédito";
        } else {
            resultado = "No eres apto para crédito";
        }

        document.credito.txtresultado.value = resultado;
    }
}

// Evento para ejecutar la función al hacer clic en el botón Consultar
document.querySelector('input[name="btnConsultar"]').addEventListener('click', consultar);
