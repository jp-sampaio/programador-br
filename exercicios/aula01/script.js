//1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.

var letra = prompt('Digite uma letra para saber se ela é vogal ou consoante?');

if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    console.log('Você digitou uma vogal');
}
else {
    console.log('Você digitou uma consoante');
}

