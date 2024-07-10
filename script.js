const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function playGame() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button'.textContent = 'Play Again');
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice(){
    let input = prompt("Enter your choice: (Rock, Paper, Scissors)");
    while (input == null || (input != choices[0] && input != choices[1] && input != choices[2])){
        input = prompt("Invalid input. Please enter your choice: (Rock, Paper, Scissors)");
    }
    input = input.toLowerCase();
    return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(humanChoice, compChoice){
    if(humanChoice === compChoice){
        return "Tie";
    } else if (
        (humanChoice === 'rock' && compChoice === 'scissors') || 
        (humanChoice === 'paper' && compChoice === 'rock') || 
        (humanChoice === 'scissors' && compChoice === 'paper')
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((winner) => winner == "Player").length;
    let computerWins = winners.filter((winner) => winner == "Computer").length;
    let ties = winners.filter((winner) => winner == "Tie").length;
    console.log("Results:");
    console.log('Player Wins: ', playerWins);
    console.log('Computer wins: ', computerWins);
    console.log("Ties : ", ties)
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round: ', round);
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(winner, "Won the round.");
    console.log('------------------------');
}