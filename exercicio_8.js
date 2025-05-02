const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: (diferente do primeiro)"));

if (numero1 === numero2) {
    console.log("Os 2 numeros tem que ser diferentes.");
} else {
    if (numero1 < numero2) {
        console.log(`${numero1}, ${numero2}`);
    } else {
        console.log(`${numero2}, ${numero1}`);
    }
}


