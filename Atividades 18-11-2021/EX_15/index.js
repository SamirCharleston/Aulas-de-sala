let numero = 0, contador = 0;

for (i = 0; i < 10; i++) {
    numero = Number(window.prompt("Digite o " + (i + 1) + "° numero"));

    if (numero < 0) {
        contador++;
    }
}

console.log("O total de numeros negativos é " + contador);