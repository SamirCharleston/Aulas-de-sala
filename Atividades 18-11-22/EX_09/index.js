const time = [[], []];

for (i = 0; i < time.length; i++) {
    time[i][0] = window.prompt("Digite o nome do " + (i + 1) + "° time:");
    time[i][1] = Number(window.prompt("Digite a quantidade de gols:"));
}

if (time[0][1] > time[1][1]) {
    console.log("O time " + time[0][0] + " foi o vencedor!");
} else if (time[0][1] < time[1][1]) {
    console.log("O time " + time[1][0] + " foi o vencedor!")
} else {
    console.log("O jogo empatou!");
}
