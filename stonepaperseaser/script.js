let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("game was draw. play again.");
    msg.innerText = "Game was draw, play again.";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin) => {
    if (userWin) {
        userscore++
        userscorepara.innerText = userscore;
        msg.innerText = "You Won!"
        msg.style.backgroundColor = "green";
        console.log("You Won.")
    } else {
        compscore++
        compscorepara.innerText = compscore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";

        console.log("You lose.")
    }
}
const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    })
})