let custoDeFabrica;

custoDeFabrica = Number(window.prompt("Digite o custo de fabrica:"));
custoDeFabrica += (custoDeFabrica * 0.28) + (custoDeFabrica * 0.45);

console.log("O custo total é: " + custoDeFabrica);

