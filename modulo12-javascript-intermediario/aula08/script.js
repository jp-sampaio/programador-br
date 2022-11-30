// localStorage.setItem("nome", "João Paulo") // adiciona o joao paulo em nome

// let nome = localStorage.getItem("nome") // pega esse dado e mostra no console
//console.log(nome)

// localStorage.removeItem("nome") // remove esse dado de nome

//========================================================================================

onload = function(){
    let nome = localStorage.getItem("nome")
   
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome

}


function atualizar(elemento){
    let valor = elemento.value
    console.log(valor)

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
}


//====================================================================================================

let aluno = {
    nome: "Carlos",
    idade: 34
}

localStorage.setItem("a", JSON.stringify(aluno))

let numero = localStorage.getItem("a")
console.log(JSON.parse(numero))
