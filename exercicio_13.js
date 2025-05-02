const prompt = require("prompt-sync")();

let numero = -1;
let acumulador = 0;
let soma = 0;


while (numero !== 0) {
    numero = Number(prompt("Digite um numero: "));
    if (numero === 0) {
        break;
    } else {
        soma += numero; 
        acumulador++;
    } 
}

if (acumulador === 0) {
    console.log("Nenhum número válido foi digitado.");
} else {
    let media = soma / acumulador;
    console.log(`A média dos números é: ${media.toFixed(2)}`);
}

