let userChoices = document.querySelectorAll(".buttons");
let userInput = document.querySelector("#user-input");
let computerInput = document.querySelector("#computer-input");
let comChoices = ["Rock", "Paper", "Scissors"];
let gameStatus = document.querySelector(".game-status");
let comScoreDisp = document.querySelector("#comScoreDisp");
let userScoreDisp = document.querySelector("#userScoreDisp");
let userScore = 0;
let computerScore = 0;

userChoices.forEach(button => {
    button.addEventListener("click", function () {

        userChoice = this.id;
        userInput.textContent = userChoice;
        let comInput = computersRandomInput();
        computerInput.textContent = comInput;

        console.log(comInput);

        if (userChoice === comInput) {
            gameStatus.textContent = "Draw";
        }
        else if (
            (userChoice == "Rock" && comInput == "Scissors") ||
            (userChoice == "Paper" && comInput == "Rock") ||
            (userChoice == "Scissors" && comInput == "Paper")) {
            gameStatus.textContent = "You Win";
            userScore++;
        }
        
        else {
            gameStatus.textContent = "Computer Wins";
            computerScore++;
        }

        userScoreDisp.textContent = userScore;
        comScoreDisp.textContent = computerScore;
    })
})

function computersRandomInput() {
    let random = Math.floor(Math.random() * 3);
    let comInput = comChoices[random];
    return comInput;
}

document.querySelector(".reset").addEventListener("click", () => {

    userScore = 0;
    computerScore = 0;

    userScoreDisp.textContent = 0;
    comScoreDisp.textContent = 0;

    userInput.textContent = "-";
    computerInput.textContent = "-";

    gameStatus.textContent = "Ready to play? Pick Rock, Paper, or Scissors!";
}
);
