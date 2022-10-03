//Objetos e construtores como utiliza-los, isso que foi feito se chama instanciamento de objeto.


//Primeira versão - Tudo junto
//==========================================================================================================
// var turma = [
//     {
//         nome: 'João',
//         nota1: 9.0,
//         nota2: 8.0,
//         media: function media(){
//             return (this.nota1 + this.nota2) / 2
//         }
//     },

//     {
//         nome: 'Paulo',
//         nota1: 7.0,
//         nota2: 4.0,
//         media: function media(){
//             return (this.nota1 + this.nota2) / 2
//         }
//     }
// ]


// console.log(turma[0].nome + ' - ' + turma[0].nota1 + ' - ' + turma[0].nota2 + ' - ' + turma[0].media());
// console.log(turma[1]);
//============================================================================================================

//Segunda  Versão - Separando a function
//=============================================================================================================

// var calcMedia = function(){
//     return (this.nota1 + this.nota2) / 2
// }

// var turma = [
//     {
//         nome: 'João',
//         nota1: 9.0,
//         nota2: 8.0,
//         media: calcMedia
//     },

//     {
//         nome: 'Paulo',
//         nota1: 7.0,
//         nota2: 4.0,
//         media: calcMedia
//     }
// ]


// console.log(turma[0].nome + ' - ' + turma[0].nota1 + ' - ' + turma[0].nota2 + ' - ' + turma[0].media());
// console.log(turma[1]);

//==============================================================================================================


//Terceira Versão - Criando uma function para de criar aluno
//===============================================================================================================

//Pode ser assim declarando a variavel aluno e com um return no final ou só com o return no começo
// 
// function criarAluno(){
//     var aluno = {
//         nome: 'José',
//         nota1: 8.5,
//         nota2: 7.5,
//         media: function (){
//             return (this.nota1 + this.nota2) / 2
//         }
// }
//     return aluno;
// }

// function criarAluno(nome, n1, n2){
//     return{
//         nome: nome,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2) / 2;
//         }
//     }
// }

// var turma = [ 
//     criarAluno('Marcos', 9.0, 5.0),
//     criarAluno('Marilia', 8.0, 6.0),
//     criarAluno('Marcos', 7.0, 6.0),
// ]

// // var aluno = criarAluno('Marcos', 9.0, 5.0);
// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());

// //forEach é um método mais avançado que varre todos os elementos que funciona parecido com esse for logo a baixo
// turma.forEach(function(elemento){
//     console.log(elemento);
// })

// for(var aluno of turma){
//     console.log(aluno.nome + ' - ' + aluno.nota1 + ' - ' + aluno.nota2 + ' - ' + aluno.media());
// }

//Quarta versão - Com o this e o new para funcionar direitinho
//====================================================================================================

function aluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function media(){
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new aluno('Carlos', 6.0, 7.0);
var b = new aluno('Marcela', 5.0, 6.0);

console.log(a);
console.log(a.media());

console.log(b);
console.log(b.media());