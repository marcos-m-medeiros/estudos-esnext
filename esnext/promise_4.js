// Função para gerar um número aleatório entre min e max com um atraso de tempo
function gerarNumerosEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]; // Troca os valores de min e max, se necessário
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio); // Resolve a Promise com o número aleatório gerado
    }, tempo);
  });
}

// Função para gerar vários números aleatórios com diferentes atrasos
function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000), // Gera um número após 4 segundos
    gerarNumerosEntre(1, 60, 1000), // Gera um número após 1 segundo
    gerarNumerosEntre(1, 60, 500), // Gera um número após 0.5 segundos
    gerarNumerosEntre(1, 60, 3000), // Gera um número após 3 segundos
    gerarNumerosEntre(1, 60, 100), // Gera um número após 0.1 segundos
    gerarNumerosEntre(1, 60, 1500), // Gera um número após 1.5 segundos
  ]);
}

// Inicia a medição do tempo
console.time("promise");

// Chama a função gerarVariosNumeros para gerar vários números aleatórios
gerarVariosNumeros()
  .then(console.log) // Exibe o array de números gerados no console
  .then(() => {
    // Encerra a medição do tempo e exibe o tempo decorrido
    console.timeEnd("promise");
  });
