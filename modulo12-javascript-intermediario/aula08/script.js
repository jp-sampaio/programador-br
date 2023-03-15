//O localStorage funciona só para aquele dominio que ele está sendo executado, e ele armazena somente string e podemos contorna isso utilizando strings;

// localStorage.setItem("nome", "João Paulo") // adiciona um dado na memoria do computador, ele recebe dois argumentos, uma chave e um valor;

// let nome = localStorage.getItem("nome") // pega esse dado e mostra no console
//console.log(nome)

// localStorage.removeItem("nome") // remove esse dado de nome

//========================================================================================

onload = function(){
    let nome = localStorage.getItem("nome");
   
    let h1 = document.getElementById("nome");
    h1.innerHTML = nome;
}


function atualizar(elemento){
    let valor = elemento.value;
    console.log(valor);

    let h1 = document.getElementById("nome");
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor);
}


//====================================================================================================
//Como o localStorage só recebe strings, então nesse caso nós transformamos um objeto em uma string pelo JSON e depois fazemos o inverso;

let aluno = {
    nome: "Carlos",
    idade: 34
};

localStorage.setItem("aluno", JSON.stringify(aluno));

let numero = localStorage.getItem("aluno");
console.log(JSON.parse(numero));

//=============================================================================================
//Mostra como podemos armazenar um número;

localStorage.setItem("numero", 23);

let number = localStorage.getItem("numero");

console.log(Number(number));

