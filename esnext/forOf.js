// Iterando por cada letra na string "Cod3r"
for (let letra of "Cod3r") {
  console.log(letra);
}

// Criando um array "assuntosEcma" com elementos
const assuntosEcma = ["Map", "Set", "Promise"];

// Iterando pelos índices do array "assuntosEcma"
for (let i in assuntosEcma) {
  console.log(i);
}

// Iterando por cada elemento do array "assuntosEcma"
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

// Criando um mapa (Map) chamado "assuntosMap" com pares chave-valor
const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

// Iterando por cada entrada (par chave-valor) do mapa "assuntosMap"
for (let assunto of assuntosMap) {
  console.log(assunto);
}

// Iterando pelas chaves do mapa "assuntosMap"
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

// Iterando pelos valores do mapa "assuntosMap"
for (let valor of assuntosMap.values()) {
  console.log(valor);
}

// Iterando por entradas (pares chave-valor) do mapa "assuntosMap"
for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor);
}

// Criando um conjunto (Set) "s" com elementos "a", "b" e "c"
const s = new Set(["a", "b", "c"]);

// Iterando por cada elemento do conjunto "s"
for (let letra of s) {
  console.log(letra);
}
