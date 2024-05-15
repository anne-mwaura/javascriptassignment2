const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return "rock";
    } else if (randomValue < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
};
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
};
const cheatMode = () => {
    return "scissors";
};
const playGame = (userChoice, useCheatMode = false) => {
    const computerChoice = useCheatMode ? cheatMode() : getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(result);
};
const userChoice = "rock"; 
playGame(userChoice);
playGame(userChoice, true); 