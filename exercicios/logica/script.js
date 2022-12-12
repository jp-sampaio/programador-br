let alunos = ["João Paulo", "Marcos", "Manoel", "Vitor", "Ana"];
let notas = [[8.0, 9.1], [10.0, 8.0], [6.0, 7.3], [5.5, 9.1], [4.3, 7.6]];

for(let num in alunos){
    let alunoSelecionado = num;
    let nomeDoAluno = alunos[alunoSelecionado];
    let notaDoAluno = notas[alunoSelecionado];
    let nota1 = notaDoAluno[0];
    let nota2 = notaDoAluno[1];
    let media = (nota1 + nota2) / 2;

    console.log(nomeDoAluno);
    console.log(nota1);
    console.log(nota2)
    console.log(`A média do aluno é de ${media}`);
    console.log("===============================")
}
