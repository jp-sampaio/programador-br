let tela = document.getElementById("tela");

let contexto = tela.getContext("2d");

let imagem = new Image();
imagem.src = "./images/carro.png";
imagem.onload = desenharImagem;

function desenharImagem(){
    contexto.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2);
}
