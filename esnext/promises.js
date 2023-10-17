// Definindo uma função chamada falarDepoisDe que retorna uma Promise
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    // Dentro da Promise, configuramos um temporizador para resolver após um número específico de segundos
    setTimeout(() => {
      resolve(frase); // Quando o temporizador terminar, a Promise é resolvida com a frase fornecida
    }, segundos * 1000); // Atraso é calculado em milissegundos
  });
}

// Chama a função falarDepoisDe com um atraso de 3 segundos e a frase "Que legal!"
falarDepoisDe(3, "Que legal!")
  // O método .then é encadeado para tratar o resultado quando a Promise é resolvida
  .then((frase) => frase.concat("?!?")) // Concatena "?!?" à frase resolvida
  .then((outraFrase) => console.log(outraFrase)) // Exibe a frase concatenada no console
  .catch((e) => console.log(e)); // Trata qualquer erro que possa ocorrer durante o processo da Promise
