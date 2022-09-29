//Condicionais If, Else If, Else
//( se, senao se, se)

var idade = 65;

if (idade >= 16 && idade < 60) {
    console.log('Acesso Autorizado');
    console.log('Pode votar');
}
else if (idade >= 60){
    console.log('Acesso Autorizado');
    console.log('Não é obrigatório votar nessa idade');
}
else {
    console.log('Acesso Negado');
    console.log('Não pode votar antes do 16 anos');
}

//Media escolar

var num1 = 8.0;
var num2 = 9.0;
var media  = (num1 + num2) / 2;

console.log('Primeira nota: ' + num1);
console.log('Segunda nota: ' + num2);
console.log('Media final: ' + media);

if (media >= 7.0 && media <= 10.0) {
    console.log('Parabéns você foi aprovado!');
}
else if (media >= 5.0 && media < 7.0) {
    console.log('Você está de recuperação, ainda tem chances!');
}
else if (media >= 0.0 && media < 5.0) {
    console.log('Você foi reprovado, estude mais na próxima!');
}
else {
    console.log('Dado ínvalido');
}
