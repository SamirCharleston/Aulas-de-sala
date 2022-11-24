let salario;
let reajuste;

salario = window.prompt("Digite o valor do salario:");
reajuste = window.prompt("Digite o percentual de reajuste:");

salario = Number(salario);
reajuste = Number(reajuste);

salario += salario * reajuste / 100;

console.log("O valor do novo salário é: " + salario);