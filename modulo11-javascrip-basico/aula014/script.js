//Function => serve para criar um código que pode ser usado em diferente lugares só chamando o seu nome, como também pode retorna um valor.
//Uma function pode ser armazenada dentro de uma variável e se por acaso eu declarar uma function e esquecer os parenteses ela vai receber o valor da function como um todo. As variáveis não precisam ser declaradas dentro da função.


//Utilizando valores fixos.
// function media(){
//     var nota1 = 9.0;
//     var nota2 = 7.0;
//     var media = (nota1 + nota2)/2;
//     console.log(media);
// }

// media();

//==============================================================

//Utilizando valores mutavéis
// function media(n1, n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) / 2;
//     console.log(media);
// }

// media(4, 9);
// media(6, 8);
// media(3, 9);
// media(6, 8); 

//=============================================================

//Retornando um valor
// function media(n1, n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2)/2;
    
//     return media;
// }

// var resultado1 = media(9, 8);
// var resultado2 = media(4, 6);

// console.log(resultado1 + " e " + resultado2);

//===============================================================


//Function recebendo o valor da function
// function media(n1, n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2)/2;

//     return media;
// }

// var resultado = media(9, 7);
// var m = media;

// console.log('Recebeu o valor da function: \n', m);
// console.log('Resultado', resultado);

//===================================================================

//Function anônima que vai ser atribuida a uma variável
// var media = function(n1, n2){

//     return((n1 + n2)/2);
// }

// var resultado = media(9, 6);
// console.log(resultado);

//======================================================================

//Arrow function simplifica muito o código.
var media = (n1, n2) => {
    return (n1 + n2) / 2
}

console.log(media(8,9));