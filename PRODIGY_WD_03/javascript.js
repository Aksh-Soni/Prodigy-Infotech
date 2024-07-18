


// Game variables
let currentPlayer = 'X';
let gameStatus = ["", "", "", "", "", "", "", "", ""]; // Represents the 3x3 board

// Winning combinations
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle a player's move
function boxClicked(boxNum) {
    if (gameStatus[boxNum] === "") { // Check if the box is empty
        gameStatus[boxNum] = currentPlayer;
        document.getElementById(`box${boxNum}`).innerText = currentPlayer;
        
        // Check for a winner
        if (checkWinner(currentPlayer)) {
            document.getElementById('status').innerText = `${currentPlayer} wins!`;
            disableBoard();
        } else if (!gameStatus.includes("")) { // Check for a tie
            document.getElementById('status').innerText = "It's a tie!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
            document.getElementById('status').innerText = `Current Turn: ${currentPlayer}`;
        }
    }
}

// Function to check if there is a winner
function checkWinner(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return gameStatus[index] === player;
        });
    });
}

// Function to reset the game
function resetGame() {
    currentPlayer = 'X';
    gameStatus = ["", "", "", "", "", "", "", "", ""];
    document.getElementById('status').innerText = `Current Turn: ${currentPlayer}`;
    document.querySelectorAll('.box').forEach(box => {
        box.innerText = "";
        box.classList.remove('disabled');
    });
}

// Function to disable the board after a game ends
function disableBoard() {
    document.querySelectorAll('.box').forEach(box => {
        box.classList.add('disabled');
    });
}

// Event listeners for each box
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        if (!box.classList.contains('disabled')) {
            let boxNum = parseInt(box.id.slice(3)); // Extract box number from id
            boxClicked(boxNum);
        }
    });
});

// Keyboard input handling
document.addEventListener('keydown', function(event) {
    if (event.key.toUpperCase() === 'X' || event.key.toUpperCase() === 'O') {
        let player = event.key.toUpperCase();
        let index = gameStatus.indexOf("");
        if (index !== -1) {
            gameStatus[index] = player;
            document.getElementById(`box${index}`).innerText = player;
            
            // Check for a winner
            if (checkWinner(player)) {
                document.getElementById('status').innerText = `${player} wins!`;
                disableBoard();
            } else if (!gameStatus.includes("")) { // Check for a tie
                document.getElementById('status').innerText = "It's a tie!";
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
                document.getElementById('status').innerText = `Current Turn: ${currentPlayer}`;
            }
        }
    }
});
