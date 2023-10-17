// Importando o módulo http
const http = require("http");

// Definindo uma função chamada getTurma que recebe uma letra e um callback
const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  // Faz uma requisição HTTP para a URL especificada
  http.get(url, (res) => {
    let resultado = "";

    // Ao receber dados da resposta HTTP, os concatena na variável "resultado"
    res.on("data", (dados) => {
      resultado += dados;
    });

    // Quando a resposta HTTP termina, chama o callback com os dados parseados em formato JSON
    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];

// Chama a função getTurma para as turmas "A", "B" e "C" sequencialmente
getTurma("A", (alunos) => {
  // Concatena os nomes dos alunos da turma "A" no array "nomes"
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  console.log(nomes);

  // Chama a função getTurma para a turma "B"
  getTurma("B", (alunos) => {
    // Concatena os nomes dos alunos da turma "B" no array "nomes"
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    console.log(nomes);
  });

  // Chama a função getTurma para a turma "C"
  getTurma("C", (alunos) => {
    // Concatena os nomes dos alunos da turma "C" no array "nomes"
    nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
    console.log(nomes);
  });
});
