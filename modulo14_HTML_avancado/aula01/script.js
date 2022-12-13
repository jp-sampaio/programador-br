let image = document.getElementById("like");

image.addEventListener("click", function (){
    let lastImage = image.getAttribute("src");
    
    image.setAttribute("src", "./images/dislike.jpg");
    
    console.log(lastImage)
});

//=======================================================

let lista = document.getElementById("lista");

lista.dataset.num = "5"
// let numero = Number(lista.getAttribute("num"));
let numero = Number(lista.dataset.num);

let conteudo = "";

for(let i = 0; i < numero; i++){
    conteudo += `<li> ${i} </li> `;
}

lista.innerHTML = conteudo