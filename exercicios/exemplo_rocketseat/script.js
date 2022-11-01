/*
** Escreva um programa que leia as notas das duas avaliações normais e a nota da avaliação optativa;

** Caso o aluno não tenha feito a optativa deve ser fornecido o valor de -1;

** Calcular a media do semestre considerando que a nota optativa substitui a nota mais baixa das duas notas caso ela seja maior que alguma das duas notas;

** Escrever a media e a mensagem que indiquem se o aluno foi aprovado, reprovado ou está em exame, de acordo com as informações abaixo;

** Se a media maior e igual a 6
    aprovado
   Se a media for menor que 3
    reprovado
   Se a media for igual a 3 e menor que 6  
    exame
*/

console.log('Inicio da Aplicação');

function calcularMedia(nota1, nota2, notaOptativa){
    
    if(avaliacaoOptativa === undefined){
        avaliacaoOptativa = -1;
        console.log(avaliacaoOptativa);
    }

    if(nota1 < nota2){
        nota1 = nota1 < notaOptativa ? notaOptativa : nota1;
    }else if(nota2 < nota1){
        nota2 = nota2 < notaOptativa ? notaOptativa : nota2;
    }
    let media = (nota1 + nota2)/2;
    return media;
}

function escreverMensagem(media){
    if(media >= 6){
        return 'Aprovado';
    }else if(media < 3){
        return 'Reprovado';
    }else{
        return 'Exame';
    }
}

//Aluno 01
const avaliacao1 = 6;
const avaliacao2 = 7;
let avaliacaoOptativa;

const aluno1 = calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa);
console.log(calcularMedia(avaliacao1, avaliacao2, avaliacaoOptativa));
console.log(escreverMensagem(aluno1));

//Aluno 02
const aluno2 = calcularMedia(1, 6, 2);
console.log(aluno2);
console.log(escreverMensagem(aluno2));

//Aluno 03

const aluno3 = calcularMedia(2, 3);
console.log(aluno3);
console.log(escreverMensagem(aluno3));