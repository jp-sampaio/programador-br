//objetos e seus métodos
//Quando tem uma variavel em uma objeto chamamos de propriedades e quando temos uma função chamamos de método;
//O this é utilizado dentro de um método para reverenciar aquele objeto e sua propriedades.    


//Primeira fase 
//============================================================================
// var aluno = {
//     nome: 'Harry',
//     notas: [9, 4],
    
//     media: function (n1, n2){
//         return (n1 + n2) / 2
//     }
// }

// var aluno1 = {
//     nome: 'Potter',
//     notas: [9, 6],
    
//     media: function (n1, n2){
//         return (n1 + n2) / 2
//     }
// }

// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// console.log(aluno1.nome);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

//==============================================================================


//Segunda fase - simplificando a função para funciona tudo de uma
//==============================================================================

// function calcMedia(n1, n2) {
//     return (n1 * 2 + n2) / 2
// }

// var aluno = {
//     nome: 'Harry',
//     notas: [9, 4],
    
//     media: calcMedia
// }

// var aluno1 = {
//     nome: 'Potter',
//     notas: [9, 6],
    
//     media: calcMedia
// }

// console.log(aluno.nome);
// console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

// console.log(aluno1.nome);
// console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));

//============================================================================


//Terceira fase - simplificar media no console.log para algo mais clean. O this aqui ta referênciando as notas que estão nos objetos.
//============================================================================

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: 'Harry',
    notas: [10.0, 9.0],
    
    media: calcMedia,
}

var aluno1 = {
    nome: 'Potter',
    notas: [9.5, 8.5],
    
    media: calcMedia,
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());
