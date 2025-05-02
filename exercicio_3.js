const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite a nota do aluno (0 a 10): "));

if (nota >= 0 && nota <= 10) {
    if (nota >= 7){
        console.log("APROVADO 😁");
    } else if (nota >= 5 && nota < 7) {
        console.log("EM RECUPERAÇÃO 🙁");
    } else if (nota < 5) {
        console.log("REPROVADO 😢");
    } 
} else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
}

