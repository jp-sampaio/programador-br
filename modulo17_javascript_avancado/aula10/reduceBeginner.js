// Formas variadas de utilizar o reduce;

const programadores = [
  {nome: "João Paulo", idade: 23, nivel: "JR", teste: 17},
  {nome: "Maria", idade: 45, nivel: "PL", teste: 56},
  {nome: "Joana", idade: 30, nivel: "PL", teste: 38},
  {nome: "Matias", idade: 18, nivel: "JR", teste: 14},
  {nome: "Ricardo", idade: 50, nivel: "SR", teste: 89},
  {nome: "Vania", idade: 50, nivel: "SR", teste: 78},
  {nome: "Alexandre", idade: 45, nivel: "PL", teste: 65},
];

//=========================================================================================
//Fazendo a soma do teste de todos os programadores, mais simples;
let contador = 0;
let somaTeste = 0;
let comprimento = programadores.length;

for(let contador = 0; contador < comprimento ; contador++){
  somaTeste += programadores[contador].teste;
}

// console.log(somaTeste); => 357

//=========================================================================================
// Utilizando o forEach para o mesmo principio;
programadores.forEach(elemento => {
  return somaTeste + elemento.teste;
});

// console.log(somaTeste); => 357

//=========================================================================================
//Outra forma de fazer esse mesmo processo é com o reduce que é a mais indicada talvez, ele recebe um acumulador e um valor atual, tambem pode receber um index e o array completo, os mais usados é p acumulador e valor atual e também no final o acumulador que pode ser numero, objeto etc;

const somaReduce = programadores.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.teste;
}, 0);

// console.log(somaReduce); => 357

//=========================================================================================
//Informa qual é o programador mais velho e o mais novo e a soma das suas idades;

const informacoesIdades = programadores.reduce((acumulador, valorAtual) => {
  const maisVelho = acumulador.maisVelho > valorAtual.idade ? acumulador.maisVelho : valorAtual.idade;
  const maisNovo = acumulador.maisNovo < valorAtual.idade ? acumulador.maisNovo : valorAtual.idade;
  const somaIdades = acumulador.somaIdades + valorAtual.idade;
  return {maisVelho, maisNovo, somaIdades};
}, {maisVelho: undefined, maisNovo: undefined, somaIdades: 0});

// console.log(informacoesIdades);


//=========================================================================================
//Pegar qual o nivel de cada um (JR, PL, SR);

const nivelProgramador = programadores.reduce((acumulador, valorAtual) => {
  if(acumulador[valorAtual.nivel] == null){
    acumulador[valorAtual.nivel] = 1;
  } else {
    ++acumulador[valorAtual.nivel];
  }

  return acumulador;
}, {});

// console.log(nivelProgramador);

//=========================================================================================
const idadesProgramadores = programadores.reduce((acumulador, valorAtual) => {
  if(acumulador[valorAtual.idade] == null)
    acumulador[valorAtual.idade] = [];
    acumulador[valorAtual.idade].push(valorAtual.nome);

    return acumulador;
   
}, {});

console.log(idadesProgramadores);