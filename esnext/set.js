// não aceita repetição/não indexada

// Criando um conjunto (Set) chamado "times"
const times = new Set();

// Adicionando elementos ao conjunto "times"
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corinthians");
times.add("Flamengo");
times.add("Vasco"); // O Vasco é adicionado novamente, mas como conjuntos não permitem duplicatas, isso não terá efeito.

// Exibindo o conjunto "times" no console
console.log(times);

// Exibindo o tamanho (quantidade de elementos) do conjunto "times"
console.log(times.size);

// Verificando se o conjunto "times" contém o elemento "vasco" (com "v" minúsculo)
console.log(times.has("vasco")); // Deve retornar false, pois "vasco" é diferente de "Vasco" (maiúsculo).

// Verificando se o conjunto "times" contém o elemento "Vasco"
console.log(times.has("Vasco")); // Deve retornar true, pois "Vasco" (maiúsculo) foi adicionado anteriormente.

// Removendo o elemento "Flamengo" do conjunto "times"
times.delete("Flamengo");

// Verificando se o conjunto "times" contém o elemento "Flamengo" após a remoção
console.log(times.has("Flamengo")); // Deve retornar false, pois "Flamengo" foi removido.

// Criando um array chamado "nomes" com duplicatas
const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];

// Criando um conjunto "nomesSet" a partir do array "nomes"
const nomesSet = new Set(nomes);

// Exibindo o conjunto "nomesSet" no console
console.log(nomesSet);
