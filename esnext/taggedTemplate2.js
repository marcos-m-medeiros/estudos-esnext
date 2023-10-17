// Definindo uma função chamada 'real' que recebe duas arrays:
// - 'partes': uma array de strings contendo partes do template literal
// - 'valores': uma array com os valores das expressões no template literal
function real(partes, ...valores) {
  // Criando um array vazio para armazenar o resultado
  const resultado = [];

  // Iterando pelos valores das expressões no template literal
  valores.forEach((valor, indice) => {
    // Verificando se o valor é numérico (um número)
    // Se for, formata como uma string com o formato "R$xx.xx"
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;

    // Adicionando a parte atual do template (string) e o valor formatado ao resultado
    resultado.push(partes[indice], valor);
  });

  // Juntando as partes e os valores no resultado para criar a string final
  return resultado.join("");
}

// Definindo variáveis
const preco = 29.99;
const precoParcela = 11;

// Chamando a função 'real' com um template literal marcado (tagged template)
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
