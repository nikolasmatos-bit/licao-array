// Exercício 1 — Criando array simples
const cores = ["Vermelho", "Verde", "Azul"];
console.log(cores[1]);

// Exercício 2 — Primeiro e último número
const numeros = [10, 20, 30, 40, 50];
console.log("Primeiro:", numeros[0]);
console.log("Último:", numeros[numeros.length - 1]);

// Exercício 3 — Adicionando item ao array
const frutas = ["Maçã", "Banana"];
frutas.push("Laranja");
console.log(frutas);

// Exercício 4 — Removendo o último item
const nomes = ["Ana", "Bruno", "Carlos", "Daniela"];
nomes.pop();
console.log(nomes);

// Exercício 5 — Contando elementos
const times = ["Flamengo", "Palmeiras", "São Paulo", "Corinthians"];
console.log("Quantidade de elementos:", times.length);