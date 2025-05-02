const prompt = require("prompt-sync")();

let A = Number(prompt("Digite o valor do lado A em cm: "));
let B = Number(prompt("Digite o valor do lado B em cm: "));
let C = Number(prompt("Digite o valor do lado C em cm: "));

if ((A + B > C) && (A + C > B) && (B + C > A)) {
    if ((A === B) && (B === C)) {
        console.log(`lado A = ${A}, lado B = ${B} e lado C = ${C}. Triângulo EQUILÁTERO.`);
    } else if ((A === B) || (B === C) || (A === C)) {
        console.log(`lado A = ${A}, lado B = ${B} e lado C = ${C}. Triângulo ISÓSCELES.`);
    } else {
        console.log(`lado A = ${A}, lado B = ${B} e lado C = ${C}. Triângulo ESCALENO.`);
    }

} else {
    console.log("Os lados fornecidos não podem formar um triângulo.");
}