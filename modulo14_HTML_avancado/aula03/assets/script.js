let video = document.getElementsByClassName("video")[0];

function retroceder(){
    video.currentTime -= 10;
}

function avancar(){
    video.currentTime += 10
}

function aumentar(){
    video.playbackRate += 0.1;
}

function diminuir(){
    video.playbackRate -= 0.1;
}

function iniciar(){
    video.play();
}

function pausar(){
    video.pause();
    video.currentTime = 0;
}

let controle = document.getElementsByClassName("controle")[0];

controle.addEventListener("mouseover", function (){
    if(controle.style.display == "block"){
        controle.style.display = "none";
    }
    // if(controle.style.display == "none"){
    //     controle.style.display = "block";
    // }
});