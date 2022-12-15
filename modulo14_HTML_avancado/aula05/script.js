let tela = document.querySelector("#tela");

let linha = tela.getContext("2d");
/* 
CRIAÇÃO DE LINHAS EM V
    linha.moveTo(0, 0);
    linha.lineTo(250, 250);
    linha.lineTo(500, 0);
    linha.strokeStyle = "#007734";
    linha.lineWidth = 5;
    linha.stroke();
*/
//================================

//CRIAÇÃO DE RETANGULO

// linha.fillStyle = "pink"; 
// // linha.fillRect(10, 10, 100, 200);
// // linha.strokeRect(5, 5, 110, 210);
// linha.rect(50, 50, 70, 80);
// linha.lineWidth = 3;
// linha.strokeStyle = "blue";

// linha.fill();
// linha.stroke();

// linha.clearRect(60, 60, 30, 30);

//=================================================

// linha.beginPath();
// linha.lineWidth = 3;
// linha.strokeStyle = "red";
// linha.moveTo(10, 10);
// linha.lineTo(350, 300);
// linha.stroke();

// linha.beginPath();
// linha.lineWidth = 6;
// linha.strokeStyle = "yellow";
// linha.fillStyle = "orange";
// linha.moveTo(70, 20);
// linha.lineTo(200, 300);
// linha.lineTo(300, 100);
// linha.closePath();
// linha.stroke();
// linha.fill();


//===============================================================

linha.beginPath();

let x = 250;
let y = 250;
let raio = 100;
let inicio = 0;
let fim = 2 * Math.PI;

linha.arc(x, y, raio, inicio, fim);
linha.strokeStyle = "white";
linha.lineWidth = 3;
linha.fillStyle = "blue";

linha.stroke();
linha.fill();