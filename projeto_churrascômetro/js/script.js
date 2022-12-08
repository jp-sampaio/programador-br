/* 
    Carne - 400 kg por pessoa + de 6 horas - 650 kg;
    Cerveja - 1200 ml por pessoa + de 6 horas - 2000 ml;
    Água/Refrigerante - 1000 ml por pessoa + de 6 horas 1500 ml;

    Crianças valem pela metade 0,5.
*/

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");


function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalDeCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas);
    let quantidadeTotalDeCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalDeBebidas =  bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalDeCarne / 1000} kg de carne.</p>`;
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalDeCerveja / 355)} Latas de cerveja.</p>`;
    resultado.innerHTML += `<p>${Math.ceil(quantidadeTotalDeBebidas / 2000)} Garrafas pets de 2 litros.</p>`;
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 600;
    }else{
        return 400;
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}