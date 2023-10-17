// Função para simular algo que pode funcionar ou não com uma chance de erro
function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log("temp"); // Erro de digitação: "con.log" deveria ser "console.log"
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro!"); // Rejeita a Promise com uma mensagem de erro
      } else {
        resolve(valor); // Resolve a Promise com o valor fornecido
      }
    } catch (e) {
      reject(e); // Se ocorrer um erro no bloco try, a Promise é rejeitada com o erro
    }
  });
}

// Chama a função funcionarOuNao com um valor e uma chance de erro de 50%
funcionarOuNao("Testando...", 0.5)
  .then((v) => console.log(`Valor: ${v}`)) // Em caso de sucesso, exibe o valor no console
  .then(
    (v) => console.log(v), // Este bloco não será executado, pois o anterior já tratou o valor
    (err) => console.log(`Erro Esp.: ${err}`) // Em caso de erro, exibe uma mensagem de erro específica
  )
  .then(() => console.log("Quase fim!")) // Esta parte será executada, independentemente do resultado anterior
  .catch((err) => console.log(`Erro Geral: ${err}`)) // Captura erros gerais, exibe uma mensagem de erro geral
  .then(() => console.log("Fim!")); // Esta parte é executada, independentemente do resultado anterior
