// Definindo a função primeiroElemento que retorna o primeiro elemento de um array ou string
const primeiroElemento = (arrayOuString) => arrayOuString[0];

// Definindo a função letraMinuscula que transforma uma letra em minúscula
const letraMinuscula = (letra) => letra.toLowerCase();

// Criando uma nova Promise que resolve com um array de nomes
new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
})
  // Encadeando várias chamadas .then para processar os dados de forma sequencial
  .then(primeiroElemento) // Pega o primeiro elemento do array de nomes ("Ana")
  .then(primeiroElemento) // Pega o primeiro elemento da string "Ana" ("A")
  .then(letraMinuscula) // Transforma a letra "A" em minúscula "a"
  .then(console.log); // Exibe o resultado no console
