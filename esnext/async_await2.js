function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max]; // Inverte min e max se min for maior que max.
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min; // Gera um número aleatório no intervalo [min, max].
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido!"); // Se o número gerado estiver na lista de números proibidos, rejeita a Promise.
    } else {
      resolve(aleatorio); // Caso contrário, resolve a Promise com o número aleatório gerado.
    }
  });
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
      // Gera números da Mega Sena usando a função gerarNumerosEntre e evita repetições.
    }
    return numeros; // Retorna a lista de números gerados.
  } catch (e) {
    if (tentativas > 10) {
      throw "Não deu certo!"; // Se excedeu 10 tentativas, lança um erro.
    } else {
      return gerarMegaSena(qtdeNumeros, tentativas + 1);
      // Caso contrário, tenta gerar novamente com um incremento nas tentativas.
    }
  }
}

gerarMegaSena(15)
  .then(console.log) // Exibe os números gerados no console em caso de sucesso.
  .catch(console.log); // Captura e exibe erros no console.
