const prompt = require("prompt-sync")();

let macasCompradas = Number(prompt("Digite a quantidade de maçãs compradas: "));
let valorTotal;
let palavraMaca = macasCompradas === 1 ? "maçã" : "maçãs";

if (isNaN(macasCompradas) || macasCompradas < 0) {
    console.log("Por favor, insira uma quantidade válida de maçãs.");
} else if (macasCompradas === 0) {
    console.log("Nenhuma maçã foi comprada.");
} else {
    if (macasCompradas < 12) {
        valorTotal = macasCompradas * 0.30;
    } else {
        valorTotal = macasCompradas * 0.25;
    }
    console.log(`Você comprou ${macasCompradas} ${palavraMaca}, o valor total é: R$${valorTotal.toFixed(2)}.`);
}
