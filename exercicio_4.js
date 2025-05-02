const prompt = require("prompt-sync")();

function menu() {
    let opcao;

    while (true) {
        console.log("\n****** MENU ******");
        console.log("1 - Adição");
        console.log("2 - Divisão");
        console.log("3 - Subtração");
        console.log("4 - Multiplicação");
        console.log("0 - Sair");

        opcao = Number(prompt("Digite a sua opção: "));
        console.log();

        if (opcao === 0) {
            console.log("Saindo do programa...");
            break;
        }

        let numero1 = Number(prompt("Digite o primeiro número: "));
        let numero2 = Number(prompt("Digite o segundo número: "));

        switch (opcao) {
            case 1:
                console.log("A soma dos 2 números é: " + (numero1 + numero2));
                break;
            case 2:
                if (numero2 !== 0) {
                    console.log("O quociente dos 2 números é: " + (numero1 / numero2));
                } else {
                    console.log("Erro: divisão por zero.");
                }
                break;
            case 3:
                console.log("A diferença dos 2 números é: " + (numero1 - numero2));
                break;
            case 4:
                console.log("O produto dos 2 números é: " + (numero1 * numero2));
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();
