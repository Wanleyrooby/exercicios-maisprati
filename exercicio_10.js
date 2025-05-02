const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero inteiro: "));

let i = 0;
for (i ; i < 10; i++) {
    console.log(numero);
}
console.log(`O numero ${numero} foi escrito 10 vezes`);