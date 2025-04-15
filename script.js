//Gameboard Object
const gameBoard = (function gameBoard(){
    let board = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
    return {board};
})();

//Player Object
function player(letter) {
    if (letter !== "X" && letter !== "O") {
        return false;
    }
    const marker = letter;


    function myTurn(number) {
        if ((number >= 1 && number <= 9) && (gameBoard.board[number-1] === "*")) {
            gameBoard.board[number-1] = marker;
        }
    }
    return {myTurn, marker};
}

//Flow of Game Object


//Global code
console.log(gameBoard.board);

let player1 = player("X");
let player2 = player("O");
console.log(player1);
player1.myTurn(1);
player2.myTurn(2);

console.log(gameBoard.board);