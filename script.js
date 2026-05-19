


function sortear() {
    const numero1 = parseInt(document.getElementById("input1").value);
    const numero2 = parseInt(document.getElementById("input2").value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    if (numero1 >= numero2) {
        alert("O primeiro número deve ser menor que o segundo.");
        return;
    }


    
    const resultado = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
    document.getElementById("result").textContent = `Resultado: ${resultado}`;


}
