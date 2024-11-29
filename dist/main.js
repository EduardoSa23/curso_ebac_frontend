"use strict";

var alunos = [{
  nome: "Eduardo",
  nota: 8
}, {
  nome: "Camila",
  nota: 5
}, {
  nome: "Dorival",
  nota: 6
}, {
  nome: "Denis",
  nota: 9
}, {
  nome: "Calos",
  nota: 4
}];
var filtrarAprovados = function filtrarAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var aprovados = filtrarAprovados(alunos);
console.log(aprovados);