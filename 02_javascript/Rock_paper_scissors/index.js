// Rock-paper-scissors

// Requirements:
// - The computer should choose randomly every turn
// - The player can click on a picture representing the option and choose it.
// - You should see if you won or lost at every turn
// - in order to win the match the player or the computer needs to win twice.
// - there need to be a score keeper to  show the current score of the player and the computer.
// - In case both select the same option then is a draw and no points should be given out.

// ----------

// ***Your solution goes to Rock_paper_scissors folder
// if you are going to add UI ***

function computerChoose (){
    num = Math.floor(Math.random() * Math.floor(3));

    if (num === 0){
        getcomputerImage[0].style.display = "none";
        getcomputerImage[1].style.display = "block";
        getcomputerImage[2].style.display = "none";
        return "paper"
    }else if (num === 1){
        getcomputerImage[0].style.display = "block";
        getcomputerImage[1].style.display = "none";
        getcomputerImage[2].style.display = "none";
        return "rock";
    }else {
        getcomputerImage[0].style.display = "none";
        getcomputerImage[1].style.display = "none";
        getcomputerImage[2].style.display = "block";
        return "scissors";
    }

}

var result = {
    computer: 0,
    player: 0,
}

var getGrid = document.getElementsByClassName("inner")[0];
var getPlayerPoints = document.getElementById("playerPoints");
var getComputerPoints = document.getElementById("computerPoints");
var getcomputerImage = document.getElementsByClassName("computerImage");

getGrid.addEventListener ('click', function(event){

let myChoice = event.target.attributes.id.nodeValue;
let ComputerChoice = computerChoose();
checkResetReults ();
checkResult (myChoice, ComputerChoice);
getPlayerPoints.innerText = result.player;
getComputerPoints.innerText = result.computer;
});



function checkResult (myChoice, ComputerChoice){
    if (myChoice === "rock"){
        if (ComputerChoice === "rock"){
        }else if (ComputerChoice === "paper"){
            result.computer++;
        }else {
            result.player++;
        }
    }else if (myChoice === "paper"){
        if (ComputerChoice === "scissors"){
            result.computer++;
        }else if (ComputerChoice === "paper"){
        }else {
            result.player++;
        }
    }else{
        if (ComputerChoice === "rock"){
            result.computer++;
        }else if (ComputerChoice === "scissors"){
        }else {
            result.player++;
        }
    }
    console.log("My Choice: " + myChoice);
    console.log("Computer Choice: " + ComputerChoice);
    console.log(result);
}

function checkResetReults(){
    if (result.player === 2 || result.computer === 2){
        result.player = 0;
        result.computer = 0;
    }
}