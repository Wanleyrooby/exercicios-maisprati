const prompt = require("prompt-sync")();


function categorizarPessoa(idade) {
    if (idade >= 0 && idade <= 11) {
        console.log(`Sua idade é ${idade}, você é uma CRIANÇA.`);
    } else if (idade >= 12 && idade <= 17) {
        console.log(`Sua idade é ${idade}, você é um(a) ADOLESCENTE.`);
    } else if (idade >= 18 && idade <= 59) {
        console.log(`Sua idade é ${idade}, você é um(a) ADULTO(A).`);
    } else if (idade >= 60) {
        console.log(`Sua idade é ${idade}, você é um(a) IDOSO(A).`);
    } else {
        console.log("Idade inválida. Digite um número positivo.");
    }
    
}

let idade = Number(prompt("Digite a idade da pessoa: "));
categorizarPessoa(idade);