const prompt = require("prompt-sync")();

let peso = Number(prompt("Digite o seu peso em kg: "));
let altura = Number(prompt("Digite a sua altura em cm: "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu imc é ${imc.toFixed(2)}. Você está ABAIXO DO PESO.`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu imc é ${imc.toFixed(2)}. Você está com PESO NORMAL.`);
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu imc é ${imc.toFixed(2)}. Você está com SOBREPESO.`);
} else if (imc >= 30) {
    console.log(`Seu imc é ${imc.toFixed(2)}. Você está com OBESIDADE.`);
} 
