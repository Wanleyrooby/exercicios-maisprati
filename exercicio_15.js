const prompt = require("prompt-sync")();

let f = [];
f[0] = 0;
f[1] = 1;

console.log("Os primeiros 10 números da sequência de Fibonacci: ");

for (let i = 2; i < 10; i++) {
    f[i] = f[i-1] + f[i-2];
}
console.log(f);





