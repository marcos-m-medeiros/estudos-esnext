const fs = require("fs");
const path = require("path");

// Função para ler o conteúdo de um arquivo
function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });
  });
}

// Caminho do arquivo que será lido
const caminho = path.join(__dirname, "dados.txt");

// Lê o arquivo, transforma seu conteúdo em uma única string, formata e exibe no console
lerArquivo(caminho)
  .then((conteudo) => conteudo.split("\n")) // Divide o conteúdo em linhas
  .then((linhas) => linhas.join(", ")) // Junta as linhas usando vírgula e espaço
  .then((conteudo) => `O valor final é: ${conteudo}`) // Adiciona uma mensagem
  .then(console.log); // Exibe o valor final no console
