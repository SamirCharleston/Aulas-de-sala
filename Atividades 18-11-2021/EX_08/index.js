const valor = [0, 0];

for (i = 0; i < valor.length; i++) {
    valor[i] = Number(window.prompt("Digite o " + (i + 1) + "° valor:"));
}

if (valor[0] > valor[1]) {
    console.log(valor[0]);
} else {
    console.log(valor[1]);
}