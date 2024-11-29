const alunos = [
    { nome: "Eduardo", nota: 8 },
    { nome: "Camila", nota: 5 },
    { nome: "Dorival", nota: 6 },
    { nome: "Denis", nota: 9 },
    { nome: "Calos", nota: 4 }
];

const filtrarAprovados = (listaAlunos) => listaAlunos.filter(aluno => aluno.nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log(aprovados);
