// Importando o módulo http
const http = require("http");

// Definindo uma função chamada getTurma que recebe uma letra e retorna uma Promise
const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  return new Promise((resolve, reject) => {
    // Faz uma requisição HTTP para a URL especificada
    http.get(url, (res) => {
      let resultado = "";

      // Ao receber dados da resposta HTTP, os concatena na variável "resultado"
      res.on("data", (dados) => {
        resultado += dados;
      });

      // Quando a resposta HTTP termina, tenta analisar os dados como JSON e resolve a Promise
      res.on("end", () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

let nomes = [];

// Utiliza Promise.all para fazer as três chamadas assíncronas e aguardar que todas sejam resolvidas
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  .then((turmas) => [].concat(...turmas)) // Concatena os alunos de todas as turmas em uma única lista
  .then((alunos) => alunos.map((aluno) => aluno.nome)) // Extrai apenas os nomes dos alunos
  .then((nomes) => console.log(nomes)) // Exibe os nomes dos alunos no console
  .catch((e) => console.log(e.message)); // Trata qualquer erro que possa ocorrer no processo Promise
