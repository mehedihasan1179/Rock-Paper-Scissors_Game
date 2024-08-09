// call variable

let userScore = 0;
let compScore = 0;

// call HTML selectors

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");


// generates Computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx]; 
};

// Shown result 

const drawGame = () => {
    msg.innerText = "Game was draw, Try again!";
    msg.style.backgroundColor = "#c38fdb";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScoreCount.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#80acff";
    } else {
        compScore++;
        compScoreCount.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#f084a2";
    };
};

// gamr Functionalitity

const playGame = (userChoice) => {
    console.log("user choice", userChoice);

    const compChoice = genCompChoice ();
    console.log("comp choice", compChoice);

    if (compChoice === userChoice) {
        // game draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false: true;
        } else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "rock" ? true: false;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    };
};

// get user choice from HTML

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

