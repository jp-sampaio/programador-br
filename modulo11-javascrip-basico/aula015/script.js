//Juntando todos os conhecimentos
//Objetivo - pegar os nomes de alunos e suas duas notas e descobrir a sua media final.

var nomes = ['João', 'Carlos', 'Marcela', 'Joana', 'Marcia'];
var nota1 = [8.0, 9.0, 7.0, 4.0, 3.0];
var nota2 = [7.0, 8.0, 6.0, 5.0, 6.0];

function media(n1, n2){
    return (n1 + n2)/2;
}

function passou(media){
    if(media >= 7){
        return 'Aprovado';
    }
    else{
        return 'Reprovado';
    }
}

for(var i in nomes){
    var notaA = nota1[i];
    var notaB = nota2[i];
    var m = media(nota1[i], nota2[i]);

    console.log('Aluno(a) ' + nomes[i] + 
            ' - primeira nota - ', notaA, 
            ' - segunda nota - ', notaB, 
            ' - e media = ', m, 
            ' - assim sendo - ' + passou(m));
}