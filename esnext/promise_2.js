// Definindo uma função chamada 'esperarPor' que retorna uma Promise
function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    // Dentro da Promise, usamos setTimeout para aguardar o tempo especificado
    setTimeout(function () {
      console.log("Executando Promise..."); // Mensagem exibida após o tempo definido
      resolve(); // Resolvendo a Promise quando o tempo passado expira
    }, tempo);
  });
}

// Chamando a função 'esperarPor' com um tempo de 3000ms, aguardando 3 segundos
esperarPor(3000)
  // Encadeando Promises com .then() para executar sequencialmente
  .then(() => esperarPor()) // Após a primeira Promise, esperamos o tempo padrão (2000ms)
  .then(esperarPor()); // Executando a função esperarPor sem passar um tempo, também usando o tempo padrão
