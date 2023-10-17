// Função para gerar um número aleatório entre os valores min e max (inclusive)
function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max]; // Troca os valores de min e max, se necessário
  }
  return new Promise((resolve) => {
    const fator = max - min + 1; // Calcula o intervalo de números possíveis
    const aleatorio = parseInt(Math.random() * fator) + min; // Gera um número aleatório nesse intervalo
    resolve(aleatorio); // Resolve a Promise com o número aleatório gerado
  });
}

// Chamando a função gerarNumerosEntre com valores mínimo (1) e máximo (60)
gerarNumerosEntre(1, 60)
  .then((num) => num * 10) // Multiplica o número gerado por 10
  .then((numX10) => `O número gerado foi ${numX10}.`) // Cria uma string com a mensagem
  .then(console.log); // Exibe a mensagem no console
