let data = new Date, nome, nascimento, entradaNaEmpresa, ano;

nome = Number(window.prompt("Digite seu nome:"));
nascimento = Number(window.prompt("Digite seu ano de nascimento:"));
entradaNaEmpresa = Number(window.prompt("Digite seu ano de ingresso na empresa:"));

ano = data.getFullYear();

console.log("Idade " + (ano - nascimento) + " anos");
console.log("Tempo de empresa " + (ano - entradaNaEmpresa) + " ano(s)");

if (ano - nascimento >= 65 || ano - entradaNaEmpresa >= 30 || (ano - nascimento >= 60 && ano - entradaNaEmpresa >= 25)) {
    console.log("Requerer aposentadoria");
} else {
    console.log("Não requerer");
}
