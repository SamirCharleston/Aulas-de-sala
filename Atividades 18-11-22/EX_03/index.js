calcularMedia();

function calcularMedia() {
    let fibonacci = [0, 1, 2], mediaFinal = 0, nota = 0;

    for (i = 0; i < 3; i++) {

        nota = window.prompt("Digite o valor da " + (i + 1) + "° nota");
        nota = Number(nota) * fibonacci[2];

        mediaFinal += nota;

        fibonacci[0] = fibonacci[1];
        fibonacci[2] += fibonacci[1];
        fibonacci[1] = fibonacci[2] - fibonacci[0];
    }

    mediaFinal /= 3;

    console.log("A media final é " + mediaFinal);
}
