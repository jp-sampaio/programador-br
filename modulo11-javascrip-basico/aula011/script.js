//Condicional Switch
//É usado para comparar o valor que está na variavel com os que vão ser mostrados no case.

//Media do aluno e mostra se ele é Ótimo, Bom, Regular ou Ruim. (média padrão é 7)

var nota1 = 7.0;
var nota2 = 4.0;
var media = (nota1 + nota2) / 2;
var conceito = '';

if (media >= 8.0 && media <= 10.0) {
    conceito = 'Ótimo';
}
else if (media >= 6.5 && media < 8.0) {
    conceito = 'Bom';
}

else if (media >= 5 && media < 6.5) {
    conceito = 'Regular';
}
else {
    conceito = 'Ruim';
}

// conceito = 'Mais ou menos';

switch (conceito) {
    case 'Ótimo':
        console.log('Parabéns!! Você é um excelente aluno com media ' + media);
        break;
    case 'Bom':
        console.log('Parabéns!! Você é um aluno bom e tem media ' + media);
        break;
    case 'Regular':
        console.log('Atenção!! Você é um aluno regular e precisa estudar mais ' + media);
        break;
    case 'Ruim':
        console.log('Atenção!! Você não foi muito bem e precisa estudar mais ' + media);
        break;
    default:
        console.log('Houve algum erro!!');  
}