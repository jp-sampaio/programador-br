//Alert é uma mensagem que vai aparecer na tela do usuário;
//Prompt recebe um dado de entrada que pode ser armazenado em uma variavel e pode ser utilizado depois com o alert ou qual outro tipo como o console por exemplo.

// var nome = prompt('Qual é o seu nome?');
// alert('Bom dia, ' + nome);

// var numero = parseInt(prompt('Digite um número para saber o seu dobro:'));
// var dobro = numero + numero;
// alert('O dobro de ' + numero + ' é igual a ' + dobro);


var media = parseFloat(prompt('Qual foi sua media final?'));
var mediaFinal = media > 6.0;
var estaAprovado = mediaFinal && true;
alert('Você foi aprovado? ' + estaAprovado);
