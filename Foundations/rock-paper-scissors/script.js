
let humanScore = 0;
let computerScore = 0;
let count = 0;

//Accepting Computer Response
function getComputerChoice(){
    const response = Math.random()*10;
    if(response <= 4) return "Rock";
    if(response > 4 && response <= 7) return "Paper";
    if(response > 7 && response <=10) return "Scissors";

    return response;
}

//Accepting Human Response
function getHumanResponse(){
    const response = prompt("Enter Your Input","no value"); 
    if(response != null){
        console.log("Your response -" +response);
    }
    else console.log("No response");

    return response;
}

const playGame = function(){

    let humanResponse = getHumanResponse();
    let computerResponse = getComputerChoice();

return function playRound(){

    var r1 = humanResponse.toLowerCase();
    var r2 = computerResponse.toLowerCase();    
    
    if(r1 == "rock"){
        if(r2 == "paper"){
            console.log("Computer won, Paper beats Rock. " + "Your Score: " +humanScore+ " Computer Score: "+ ++computerScore);
        }
        if(r2 =="scissors"){
            console.log("You Won!, Rock beats Scissors. " +"Your Score: "+ ++humanScore + " Computer Score: " +computerScore);
        }
        if(r2 == "rock"){console.log("Tie - Both gave input as Rock "+ "Your Score:  "+humanScore+ " Computer Score: " +computerScore);}
    }
     if(r1 == "paper"){
        if(r2 == "scissors"){
            console.log("Computer won, Scissors beats Paper. " + "Your Score: "+ humanScore + " Computer Score: "+ ++computerScore);
        }
        if(r2 =="rock"){
            console.log("You Won!, Paper beats Rock. " +"Your Score: "+ ++humanScore+ " Computer Score: " +computerScore);
        }
        if(r2 == "paper"){
            console.log("Tie - Both gave input as Paper. " + "Your Score: " +humanScore+ " Computer Score: " +computerScore);
        }
    }
    if(r1 == "scissors"){
        if(r2 == "rock"){
            console.log("Computer won, Rock beats Scissors. " +"Your Score: " +humanScore+ " Computer Score: "+ ++computerScore);
        }
        if(r2 =="paper"){
            console.log("You Won, Scissors beats Paper. "+ "Your Score: " + ++humanScore + "Computer Score: " +computerScore);
        }
        if(r2 == "scissors"){
            console.log("Tie - Both gave input as Scissors. " +"Your Score: "+ humanScore + " Computer Score: " +computerScore);}
    }   
    
    count++;

    if(count == 5){
            if(humanScore > computerScore ){
                console.log("You Won! " + "Human Score - " +humanScore +" Computer Score " +computerScore);
            }
            else if (humanScore < computerScore){
                console.log("Computer Won! " + " Computer Score - " +computerScore+  " Human Score " +humanScore);
            }
            else {
                console.log("Match tie!" +" Human scores -" +humanScore+ " Computer Score - " +computerScore);
            }
        }
    }
}

for(let j = 0; j<5; j++) playGame(getHumanResponse,getComputerChoice)();
    
