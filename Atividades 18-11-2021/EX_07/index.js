let quantidadeDeMacas = 0;

quantidadeDeMacas = Number(window.prompt("Digite a quantidade de maçãs:"));

if (quantidadeDeMacas < 12) {
    quantidadeDeMacas *= 1.3;
}

console.log("O valor total é R$" + quantidadeDeMacas);