// /*Selecionando o pai */
// let table = document.getElementsByTagName("table")[0];

// /*Criamos o filho */
// let linha = document.createElement("tr");

// /*Criando mais celulas*/
// let celula = document.createElement("td");

// /* Criamos um id e uma classe para o filho, mas não será usado*/
// linha.id = "id-da-linha";
// linha.className = "classe-da-linha";

// let filhoTrTexto = document.createTextNode("Texto criado");

// celula.appendChild(filhoTrTexto);
// linha.appendChild(celula);
// table.appendChild(linha);
let botaoAdicionar = document.getElementById("adicionar");
let botaoRemover = document.getElementById("remover");
let tabela = document.getElementById("tabela");
let controle = 0;

let novaLinha = [{
    linha: undefined,
    grupoCelulas: {
        0: undefined,
        1: undefined,
        2: undefined,
        3: undefined
    }
}];

botaoAdicionar.addEventListener("click", adicionarAluno);

function adicionarAluno() {

    let infoTexto = ["id", "nome", "curso", "e-mail"];
    let infoAluno = [];

    if (controle > 0) {
        novaLinha.push({
            linha: undefined,
            grupoCelulas: {
                0: undefined,
                1: undefined,
                2: undefined,
                3: undefined
            }
        });
    }

    for (i = 0; i < 4; i++) {
        if (i) {
            infoAluno[i] = window.prompt("Digite o " + infoTexto[i]);
        } else {
            infoAluno[i] = controle;
        }
    }

    novaLinha[controle].linha = document.createElement("tr");
    tabela.appendChild(novaLinha[controle].linha);

    for (i = 0; i < 4; i++) {
        novaLinha[controle].grupoCelulas[i] = document.createElement("td");
        novaLinha[controle].linha.appendChild(novaLinha[controle].grupoCelulas[i]);
        novaLinha[controle].grupoCelulas[i].innerText = novaLinha[controle].grupoCelulas[i] = infoAluno[i];
    }

    ++controle;
}
