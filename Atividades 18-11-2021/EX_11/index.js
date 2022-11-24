let combustivel = 0, opc, preco = 0;

opc = window.prompt("Escolha o combustivel: 'A' para alcool ou 'G' para gasolina");
combustivel = Number(window.prompt("Digite a quantidade de combustível em litros:"));

if (opc == 'A') {

    preco = combustivel * 2.9;

    if (combustivel <= 20) {
        preco -= preco * 0.03;
    } else {
        preco -= preco * 0.05;
    }
} else if (opc == 'G') {

    preco = combustivel * 3.3;

    if (combustivel <= 20) {
        preco -= preco * 0.04;
    } else {
        preco -= preco * 0.06;
    }
}

console.log("O valor total é de R$" + preco);