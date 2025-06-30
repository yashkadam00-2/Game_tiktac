let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innertext = "Game was drawn, Play Again Mate!";
    msg.style.backgroundColor = rgb(8, 27, 49);
};

const showWinner = (userwin, userChoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innertext = userscore;
        msg.innertext = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innertext = compscore;
        msg.innertext = `You Lost. ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";

    };
};

const playgame = (userChoice) => {
    // Generate computer response when we play 
    const compchoice = gencompchoice();

    if (userChoice === compchoice) {
        // drawgame
        drawgame(); 
    } else {
        let userwin = true;
        if (userChoice === "rock"){
            // scissors, paper
            userwin = compchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playgame(userChoice);
    });
});