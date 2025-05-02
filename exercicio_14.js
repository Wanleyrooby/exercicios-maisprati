const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
}
console.log(fatorial);
