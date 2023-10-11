// Declarando uma variável 'a' com 'var' e uma variável 'b' com 'let' dentro de um bloco
{
  var a = 2; // Variável 'a' é visível fora do bloco devido ao uso de 'var'
  let b = 3; // Variável 'b' é visível apenas dentro deste bloco
  console.log(b); // Imprime o valor de 'b' (3)
}
console.log(a); // Imprime o valor de 'a' (2)

// Usando uma template string para criar uma frase
const produto = "iPad";
console.log(`${produto} é caro!`); // Imprime "iPad é caro!"

// Destructuring: Desestruturando uma string em suas partes
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras); // Imprime "C o ['d', '3', 'r']"

// Destructuring: Desestruturando um array em suas partes
const [x, , y] = [1, 2, 3];
console.log(x, y); // Imprime "1 3"

// Destructuring: Desestruturando um objeto em variáveis com nomes personalizados
const { idade: i, nome } = { nome: "Ana", idade: 9 };
console.log(i, nome); // Imprime "9 Ana"
