
function calcularNota() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);

    let resultado = document.getElementById("resultado");

    if ([nota1, nota2, nota3, nota4].some(
        nota => !Number.isFinite(nota) || nota < 0 || nota > 20
    )) {
        resultado.innerHTML = "Ingresa las cuatro notas entre 0 y 20.";
        resultado.style.color = "red";
        return;
    }

    let promedio =
        (nota1 * 0.20) +
        (nota2 * 0.25) +
        (nota3 * 0.20) +
        (nota4 * 0.35);

    resultado.innerHTML =
        "Tu promedio final es: " + promedio.toFixed(2) +
        "<br>" +
        (promedio >= 11 ? "¡APROBADO!" : "DESAPROBADO");

    resultado.style.color = promedio >= 11 ? "green" : "red";
}
