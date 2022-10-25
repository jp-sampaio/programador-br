//01: Fazer com que duas variavéis possam receber o valor uma da outra;

// let nome1 = 'João Paulo';
// let nome2 = 'Sampaio';
// let nome3 = nome1;

// nome1 = nome2;
// nome2 = nome3;

// console.log(nome1);
// console.log(nome2);

//===============================================================================

//02: Escreva uma função que usa dois números e retorna o maior entre eles;

// function maiorDosDois(num1, num2){
//     maior = num1 > num2 ? num1 : num2;
//     return maior;
// }
// console.log(maiorDosDois(11,100));

//================================================================================

//03: FizzBuzz fazer uma função que retorne o resultado dessa função
//Se o número for divisivel por 3 vai mostrar fizz;
//Se o número for divisivel por 5 vai mostra Buzz;
//Se for divisivel pelos os dois vai mostra fizzBuzz;
//Se não for divisivel por nenhum dos dois vai mostra o próprio número;
//Agora de não for digitado um número vai mostra a mensagem não é um número.

// const resultado = fizzBuzz(45);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if(typeof entrada !== 'number'){
//         return 'Não é um número';
//     }
//     else if(entrada % 3 === 0 && entrada % 5 !== 0){
//         return 'Fizz';
//     }
//     else if(entrada % 5 === 0 && entrada % 3 !== 0){
//         return 'Buzz';
//     }
//     else if(entrada % 3 === 0 && entrada % 5 === 0){
//         return 'FizzBuzz';
//     }
//     else if(entrada % 3 !== 0 && entrada % 5 !== 0){
//         return entrada;
//     }
// }

//==============================================================================

//04: Medir a velocidade de um motorista e ver se ele está na velocidade correta que é 70km/h, caso passe dessa velocidade ele vai levar multa e a cada 5km/h a mais é contado um ponto na carteira e se por acaso ele passar de 12 pontos a sua carteira é suspensa.


//primeira forma
// verificarVelocidade(110);

// function verificarVelocidade(velocidade){
//     const velocidadeMaxima = 70;
//     const khPraDarPontos = 5;
//     const pontosSuspensao = 12;
//     const pontos = (velocidade - velocidadeMaxima) / khPraDarPontos;
//     if(velocidade <= velocidadeMaxima){
//         console.log('Sua velocidade está ok');
//     }
//     else if(velocidade > velocidadeMaxima && velocidade < 130){
//         console.log('Multa de : ' + pontos);
//     }
//     else if(pontos >= pontosSuspensao){
//         console.log('Carteira suspensa')
//     }
// }

//segunda forma

// verificarVelocidade(130)

// function verificarVelocidade(velocidade){
//     const velocidadeMaxima = 70;
//     const kmParaDarPontos = 5;
//     const quantidadeDePontosPraSuspensao = 12;
//     if(velocidade <= velocidadeMaxima){
//         console.log('Velocidade aceita');
//     }else{
//         const pontos = Math.floor((velocidade - velocidadeMaxima) / kmParaDarPontos)
//         if(pontos >= quantidadeDePontosPraSuspensao){
//             console.log('Carteira Suspensa')
//         }else{
//             console.log('Multa de' + ' ' + pontos)
//         }
//     }
// }

//=============================================================================================

//05: Receber uma quantidade de números e informa se eles são Impares ou Pares

// exibirtipo(10);

// function exibirtipo(limite){
//     for(let i = 0; i <= limite; i++){
//         if(i % 2 === 0){
//             console.log('Esse número é par:', i)
//         }
//         else{
//             console.log('Esse número é impar:',i);
//         }
//     }
// }


//==========================================================================================

//06: Criar um metodo que leia as propriedades de um objeto e mostre somente as que são strings.

// let filme = {
//     nome: 'Vingadores',
//     ano: 2018,
//     produtor: 'Edson',
//     personagem:'Capitão',
//     bilheteria: 1000029875,
//     lingua: 'ingles'
// }

// exibirPropriedade(filme);

// function exibirPropriedade(obj){
//     for(prop in obj){
//         if(typeof obj[prop] === 'string'){
//         console.log(prop, obj[prop])
//         }
//     }
// }

//================================================================================================

//07: Criar a função que retorna a soma de todos os multiplos de 3 e 5;

//primeira forma
// somaMultiplo(10);

// function somaMultiplo(limite){
//     multiplo3 = 0;
//     multiplo5 = 0;
//     soma = 0;
//     for(let i = 3; i <= limite; i += 3){
//         multiplo3 += i;
//     }

//     for(let j = 5; j <= limite; j += 5){
//         multiplo5 += j;
//     }

//     soma = multiplo3 + multiplo5;
//     console.log(soma);
// }

//segunda forma

// soma(10);

// function soma(contador){
//     let multiploDe3 = 0;
//     let multiploDe5 = 0;
//     for(let i = 0; i <= contador; i++){
//         if(i % 3 === 0){
//             multiploDe3 += i;
//         }
//         else if(i % 5 === 0){
//             multiploDe5 += i;
//         }
//     }
//     console.log(multiploDe3 + multiploDe5);
// }

//=================================================================================================

//08: Encontrar a media escolar a partir de uma array;

//0-59 -> E;
//60-69 -> D;
//70-79 -> C;
//80-89 -> B;
//90-100 -> A;

//primeira forma
// const primeiro = [100, 90, 90];

// console.log(mediaDoAluno(primeiro));

// function mediaDoAluno(notas){
//     let media = 0;
//     for(let nota of notas){
//         media = (notas[0] + notas[1] + notas[2]) / (notas.length);
//     }
//     if(media < 60){
//         return 'E';
//     }
//     else if(media >= 60 && media < 70){
//         return 'D'
//     }
//     else if(media >=70 && media < 80){
//         return 'C';
//     }
//     else if(media >= 80 && media < 90){
//         return 'B';
//     }
//     else if(media >= 90 && media <= 100){
//         return 'A';
//     }
//     else{
//         return 'Inválido';
//     }
// }

//segunda forma

// const primeirasNotas = [100, 80, 90];

// console.log(mediaDoAluno(primeirasNotas));

// function mediaDoAluno(notas){
//     const media = calcularMedia(notas);

//     if(media < 60){
//         return 'E';
//     }
//     else if(media >= 60 && media < 70){
//         return 'D'
//     }
//     else if(media >=70 && media < 80){
//         return 'C';
//     }
//     else if(media >= 80 && media < 90){
//         return 'B';
//     }
//     else if(media >= 90 && media <= 100){
//         return 'A';
//     }
//     else{
//         return 'Inválido';
//     }
// }

// function calcularMedia(primeirasNotas){
//     let soma = 0;
//     for(let nota of primeirasNotas){
//         soma = (primeirasNotas[0] + primeirasNotas[1] + primeirasNotas[2]) / (primeirasNotas.length);
//     }
//     return soma;
// }


//======================================================================================================

//09: Criar uma função que exiba a quantidade de asterisco que aquela linha possui;


//primeira forma
// exibirAsteriscos(10);

// function exibirAsteriscos(linhas){
//     let padrao = '';
//     for( let linha = 1; linha <= linhas; linha++){
//         padrao += '*';
//         console.log(padrao);
//     }
// }

//Segunda Forma

exibirAsteriscos(8)

function exibirAsteriscos(linhas){
    for(let linha = 1; linha <= linhas; linha++){
        padrao = '';
        for(let i = 0; i <= linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}