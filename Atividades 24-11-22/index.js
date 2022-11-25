let body = document.getElementById("secao-principal");
let section = document.getElementById("secao");
let botao = document.getElementById("botao");
let controleImagem = 1;

botao.addEventListener("click", adicionarElemento);

function adicionarElemento() {
    let imagem;
    let quadro = section.innerHTML;
    let sectionCreated = document.createElement("section");

    sectionCreated.id = "secao";
    sectionCreated.className = "classe-criada";

    body.appendChild(sectionCreated);

    sectionCreated.innerHTML = quadro;

    imagem = document.getElementsByClassName("imagem")[controleImagem];
    imagem.setAttribute("src", "img-" + controleImagem + ".jpg");

    controleImagem++;
}

