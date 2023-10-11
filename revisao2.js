// Arrow Function: Declaração de uma função 'soma' usando arrow function
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // Chama a função 'soma' e imprime o resultado (5)

// Arrow Function (this): Demonstração de como as funções arrow lidam com 'this'
const lexico1 = () => console.log(this === exports); // Imprime se 'this' é igual a 'exports'
const lexico2 = lexico1.bind({}); // Tentativa de modificar 'this' usando 'bind', mas não funciona
lexico1(); // Chama a função 'lexico1' e imprime 'true' (o 'this' é igual a 'exports')
lexico2(); // Chama a função 'lexico2' e também imprime 'true'

// Parâmetro default: Função 'log' com um parâmetro padrão
function log(texto = "Node") {
  console.log(texto);
}

log(); // Chama a função 'log' sem argumentos, imprime "Node" (o valor padrão)
log("Sou mais forte!"); // Chama a função 'log' com argumento, imprime o argumento ("Sou mais forte!")

// Operador rest: Função 'total' que calcula a soma de um número variável de argumentos
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n)); // Soma todos os números passados como argumentos
  return total;
}
console.log(total(2, 3, 4, 5)); // Chama a função 'total' com vários argumentos e imprime a soma (14)
