const form = document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();


    const primeiroValor = document.getElementById("valor1").value;
    const segundoValor = document.getElementById("valor2").value;
    const calcular = document.getElementById("btn-calcular");

    if (segundoValor > primeiroValor) {
        alert("Formulário válido! Campo B é maior que Campo A.");

    } else {
        alert("Formulário inválido! Campo B deve ser maior que Campo A.");
    }

    document.getElementById("formulario").reset();
})
