//Gameboard Object
const gameBoard = (function gameBoard(){
    let board = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
    let isWinner = (board) => {
        //check horizontal combinations
        for (let counter = 0; counter < 6; counter += 3) {
            if (board[counter] !== "*" && board[counter] === board[counter+1] && board[counter+1] === board[counter+2]) {
                alert(`${board[counter]} wins!`)
                return true;
            }
        }
        //check vertical combinations
        for (let counter = 0; counter < 3; counter++) {
            if (board[counter] !== "*" && board[counter] === board[counter+3] && board[counter+3] === board[counter+6]) {
                return true;
            }
        }

        //check crossed combinations
        if ((board[0] !== "*" &&board[0] === board[4] && board[4] === board[8]) || 
        (board[2] !== "*" && board[2] === board[4] && board[4] === board[6])) {
            return true;
        }
    }

    return {board, isWinner};
})();

//Player Object
function player(letter) {
    if (letter !== "X" && letter !== "O") {
        return false;
    }

    const marker = letter;

    function myTurn() {
        while (true) {
            let number = parseInt(prompt(`Player ${marker}, pick a spot (1-9):`), 10);
            if ((number >= 1 && number <= 9) && (gameBoard.board[number-1] === "*")) {
                gameBoard.board[number-1] = marker;
                break;
            }
        }
        console.log(gameBoard.board);
    }
    return {myTurn, marker};
}

//Flow of Game Object
function playGame() {
    let counter = 0;
    while (counter < 9 && !gameBoard.isWinner(gameBoard.board)) {
        if (counter % 2 === 0) {
            player1.myTurn();
        }
        else {
            player2.myTurn();
        }
        counter++;
    }
}

//Global code
let player1 = player("X");
let player2 = player("O");

playGame();
