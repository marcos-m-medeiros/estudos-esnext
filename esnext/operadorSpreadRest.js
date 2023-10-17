// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };

// Usando o operador spread (...) para criar um novo objeto "clone"
const clone = { ativo: true, ...funcionario };

// Imprimindo o objeto "clone" no console
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Gloria"];

// Usando o operador spread (...) para criar um novo array "grupoFinal"
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];

// Imprimindo o array "grupoFinal" no console
console.log(grupoFinal);
