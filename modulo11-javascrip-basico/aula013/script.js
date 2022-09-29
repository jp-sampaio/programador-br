//Arrays é como um conjunto de elementos que funcionam como várias variaveis agrupadas.
//Ela possui um indice que começa pelo 0 e vai até o número de elementos que forem adicionados, é separado de virgula independente do tipo;
//Pode utilizar com o for por exemplo e se for uzar o in mostra o indice e se usar o of mostra o elemento. 

//Primeira forma de fazer um array
var numero = new Array(1, 7, 10, 8, 99, 23);
console.log('Comprimento do array', numero.length);
console.log('Posição 0', numero[0]);
console.log('Posição 1', numero[1]);
console.log('Posição 2', numero[2]);
console.log('Posição 3', numero[3]);
console.log('Posição 4', numero[4]);
console.log('Posição 5', numero[5]);

var alunos = ['João Paulo', 'Maria', 'Carlos', 'Júlio', 'Lilian', 'José'];

// for(var i = 0; i < alunos.length; i++){
//     console.log(alunos[i], i);
// }

//Mostra o indice
// for( var i in alunos){
//     console.log(i);
// }

//mostra o elemento
for(var aluno of alunos){
    console.log(aluno);
}