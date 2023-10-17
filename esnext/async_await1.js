function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    // Cria uma Promise que será resolvida após o tempo especificado.
    setTimeout(() => resolve(), tempo);
  });
}

// função retornarValor() não está sendo usada no código.

async function retornarValorRapido() {
  // Uma função async que retorna imediatamente o valor 20.
  return 20;
}

async function executar() {
  let valor = await retornarValorRapido(); // Aguarda o retorno da função retornarValorRapido().

  await esperarPor(1500); // Aguarda 1500 milissegundos (1,5 segundos).
  console.log(`Async/Await ${valor}...`);

  await esperarPor(1500); // Aguarda mais 1500 milissegundos.
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(1500); // Aguarda novamente 1500 milissegundos.
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3; // Retorna o valor somado a 3.
}

async function executarDeVerdade() {
  const valor = await retornarValorRapido(); // Aguarda o retorno da função retornarValorRapido().
  console.log(valor); // Imprime o valor no console.
}

executar(); // Chama a função executar() para iniciar a execução do código assíncrono.
