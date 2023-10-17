// tagged templates, processa o template dentro de uma função

// Definindo uma função chamada 'tag' que recebe duas arrays:
// - 'partes': uma array de strings contendo partes do template literal
// - 'valores': uma array com os valores das expressões no template literal
function tag(partes, ...valores) {
  // Imprimindo a array 'partes' no console
  console.log(partes);
  // Imprimindo a array 'valores' no console
  console.log(valores);
  // Retornando uma string, mas não usaremos essa string neste exemplo
  return "Outra string";
}

// Definindo variáveis
const aluno = "Gui";
const situacao = "Aprovado";

// Chamando a função 'tag' com um template literal marcado (tagged template)
console.log(tag`${aluno} está ${situacao}.`);
