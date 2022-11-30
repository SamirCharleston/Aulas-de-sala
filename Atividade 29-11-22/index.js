let form = document.getElementsByTagName("form")[0];
let fieldset = document.createElement("fieldset");
let button = document.createElement("input");
let funcaoAcessada = false;
let labels = [];
let inputs = [];
let infoVotos = ["Votos Brancos: ", "Votos Nulos: ", "Votos Válidos: "];

form.innerHTML = "<h1>Contador de Votos</h1>";
form.appendChild(fieldset);


for (i = 0; i < 3; i++) {
    labels[i] = document.createElement("label");
    inputs[i] = document.createElement("input");

    labels[i].innerText = infoVotos[i];

    fieldset.appendChild(labels[i]);
    labels[i].appendChild(inputs[i]);

    labels[i].setAttribute("for", `input-${i}`);

    inputs[i].id = `input-${i}`;
    inputs[i].setAttribute("name", `input-${i}`);
    inputs[i].setAttribute("type", "number");
    inputs[i].setAttribute("min", "0");
}


fieldset.appendChild(button);
button.setAttribute("type", "button");
button.setAttribute("value", "Enviar");
button.id = "button";

button.addEventListener("click", contarVotos);


function contarVotos() {

    let resultadoExibido;
    let tituloResultado;
    let valores = [];
    let somaDosValores = 0;

    if (!funcaoAcessada) {
        resultadoExibido = document.createElement("div");
        tituloResultado = document.createElement("h2");

        fieldset.appendChild(resultadoExibido);
        resultadoExibido.appendChild(tituloResultado);
        tituloResultado.innerText = "Resultado:";

        resultadoExibido.id = "resultado-exibido";
    }

    for (i in inputs) {
        valores[i] = Number(inputs[i].value);
        somaDosValores += valores[i];
    }

    for (i in valores) {
        valores[i] = (valores[i] * 100) / somaDosValores;

        if (!funcaoAcessada) {
            let nomeDoGrafico = document.createElement("label");
            let grafico = document.createElement("div");
            nomeDoGrafico.innerText = infoVotos[i];
        }
    }

    funcaoAcessada = true;
}