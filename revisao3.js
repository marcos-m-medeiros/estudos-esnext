// ES8: Object.values/Object.entries - Mostrando como usar Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Imprime os valores do objeto em um array [1, 2, 3]
console.log(Object.entries(obj)); // Imprime as entradas (chave-valor) do objeto em uma matriz de arrays

// Melhorias na Notação Literal - Demonstração de melhorias na notação literal de objetos
const nome = "Carla";
const pessoa = {
  nome, // A chave "nome" e seu valor são automaticamente definidos com a variável 'nome'
  ola() {
    // Declaração de uma função diretamente em um objeto
    return "Olá!";
  },
};

console.log(pessoa.nome, pessoa.ola()); // Imprime o valor de 'nome' (Carla) e o resultado da função 'ola' (Olá)

// Class - Definição de classes em JavaScript
class Animal {} // Classe base Animal
class Cachorro extends Animal {
  // Classe Cachorro que herda de Animal
  falar() {
    return "Woof!";
  }
}

console.log(new Cachorro().falar()); // Cria uma instância de Cachorro e chama o método 'falar' (Imprime "Woof!")
