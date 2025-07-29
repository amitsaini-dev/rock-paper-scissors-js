let userChoices = document.querySelectorAll(".buttons");
let userInput = document.querySelector("#user-input");
let computerInput = document.querySelector("#computer-input");

let comChoices = ["Rock", "Paper", "Scissors"];

userChoices.forEach(button => {
    button.addEventListener("click", function () {
        userChoice = this.id;
        userInput.textContent = userChoice;
        let comInput = computersRandomInput();
        computerInput.textContent = comInput;
    })
})

function computersRandomInput() {
    let random = Math.floor(Math.random() * 3);
    let comInput = comChoices[random];
    return comInput;
}
