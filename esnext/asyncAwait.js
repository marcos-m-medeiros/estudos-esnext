const http = require("http");

// Função para obter os dados da turma com base na letra passada como parâmetro
const getTurma = (letra) => {
  // Constrói a URL com a letra passada
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  // Retorna uma Promise que realiza uma requisição HTTP
  return new Promise((resolve, reject) => {
    // Faz uma requisição HTTP GET para a URL especificada
    http.get(url, (res) => {
      let resultado = "";

      // Evento que lida com os dados recebidos durante a requisição
      res.on("data", (dados) => {
        resultado += dados;
      });

      // Evento que lida com o término da requisição
      res.on("end", () => {
        try {
          // Tenta analisar os dados JSON obtidos e resolve a Promise com o resultado
          resolve(JSON.parse(resultado));
        } catch (e) {
          // Em caso de erro na análise JSON, rejeita a Promise com o erro
          reject(e);
        }
      });
    });
  });
};

// Função assíncrona que obtém os alunos das turmas A, B e C e os combina em uma única lista
let obterAlunos = async () => {
  // Espera até que cada chamada à função getTurma seja resolvida
  const ta = await getTurma("A");
  const tb = await getTurma("B");
  const tc = await getTurma("C");

  // Combina os resultados das três turmas em uma única lista
  return [].concat(ta, tb, tc);
};

// Chama a função obterAlunos e lida com a lista resultante
obterAlunos()
  .then((alunos) => alunos.map((a) => a.nome))
  .then((nomes) => console.log(nomes));
