// Peça ao usuário para inserir dois números inteiros positivos;
// Armazene os números inseridos pelo usuário em duas variáveis;
// Crie uma função para dividir números inteiros;
// Exiba na tela uma caixa de diálogo com o resultado da divisão precedido pela frase “O resultado da divisão é igual a:”.

var numero1 = parseInt(prompt('Digite um número inteiro positivo:'));
var numero2 = parseInt(prompt('Digite outro número inteiro positivo:'));
var operacao = prompt('Informe o sinal da operação que você deseja realizar com esses números (+) (-) (x) (/):');

function somar(numero1, numero2){
    return numero1 + numero2;
}

function subtrair(numero1, numero2){
    return numero1 - numero2;
}

function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

function dividir(numero1, numero2){
    return numero1 / numero2;
}

switch(operacao){
    case '+':
        alert('A soma dos dois numeros é igual a: ' + somar(numero1, numero2));
        break;
    case '-':
        alert('A subtração dos dois numeros é igual a: ' + subtrair(numero1, numero2));
        break;
    case '*':
        alert('A multiplicação dos dois numeros é igual a: ' + multiplicar(numero1, numero2));
        break;
    case '/':
        alert('A divisão dos dois numeros é igual a: ' + dividir(numero1, numero2));
        break;
    default:
        alert('Ocorreu algum erro!!!');
        break;
}

// function divisao(numero1, numero2){
//     return numero1 / numero2;
// }
// var resultado = divisao(numero1, numero2);
// console.log('O resultado da divisão é igual a ' + resultado);
