// Criando um Map chamado 'tecnologias'
const tecnologias = new Map();

// Adicionando pares chave-valor ao Map 'tecnologias'
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// Acessando e imprimindo o valor associado à chave "react" no Map
console.log(tecnologias.get("react").framework);

// Criando um Map chamado 'chavesVariadas' com várias chaves e tipos de valores
const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

// Iterando pelo Map 'chavesVariadas' com forEach e imprimindo chave e valor
chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

// Verificando se o Map 'chavesVariadas' possui a chave 123
console.log(chavesVariadas.has(123));

// Deletando a chave 123 do Map 'chavesVariadas'
chavesVariadas.delete(123);

// Verificando se o Map 'chavesVariadas' ainda possui a chave 123 após a exclusão
console.log(chavesVariadas.has(123));

// Imprimindo o tamanho (número de pares chave-valor) do Map 'chavesVariadas'
console.log(chavesVariadas.size);
