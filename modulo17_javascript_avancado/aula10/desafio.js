//Desafio map sem usar o map

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

function daqui5anos(aluno){
    return{
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}

function filtro(callback){
    let filtroDeAlunos = [];
    for(let aluno of alunos){
        if(callback(aluno)){
            filtroDeAlunos.push(aluno);
        }
    }
    return filtroDeAlunos;
}

console.log(filtro(daqui5anos))
