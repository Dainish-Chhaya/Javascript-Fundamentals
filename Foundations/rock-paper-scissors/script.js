
function getComputerChoice(){
    const response = Math.random()*10;

    if(response <= 4) return "Rock";
    if(response > 4 && response <= 7) return "Paper";
    if(response > 7 && response <=10) return "Scissors";

    return response;
}

