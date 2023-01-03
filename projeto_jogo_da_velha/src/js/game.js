//Iniciar minhas variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let symbols = ["o", "x"];
let winStates = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {

    if(gameOver) {
        return;
    }

    if(board[position] == "") {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if(gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }
    return gameOver;
}

function isWin(){
    for(let i = 0; i < winStates.length; i++){
        let sequencia = winStates[i];

        let posicao1 = sequencia[0];
        let posicao2 = sequencia[1];
        let posicao3 = sequencia[2];

        if(board[posicao1] == board[posicao2] && board[posicao1] == board[posicao3] && board[posicao1] != ""){
            return true;
        }
    }
    return false;
}