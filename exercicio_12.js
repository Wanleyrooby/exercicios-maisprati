const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

console.log(`TABUADA DE ${numero}:`);

for (let i = 1; i <= 10; i++) {
    produto = numero * i;
    console.log(numero + " x " + i + " = " + produto);
}



