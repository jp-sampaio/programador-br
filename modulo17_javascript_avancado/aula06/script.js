//MAP

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

function daqui5Anos(aluno){
    return{
        nome: aluno.nome,
        idade: aluno.idade
    }
}

console.log(alunos.map(daqui5Anos))