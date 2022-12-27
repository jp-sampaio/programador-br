//FILTER

function novosAlunos(nome, idade){
    return{nome, idade}
}

let alunos = [
    novosAlunos("Mateus", 22),
    novosAlunos("Angela", 65),
    novosAlunos("Fabricio", 30),
    novosAlunos("Pablo", 15),
    novosAlunos("Tadeu", 41),
    novosAlunos("Gustavo", 19)
];

function idadeMaiorQue30(aluno){
    return aluno.idade < 30
}

function idadeMenorQue30(aluno){
    return aluno.idade > 30
}

let listaDeAlunos = alunos.filter(idadeMenorQue30);

console.log(listaDeAlunos);
console.log(alunos);