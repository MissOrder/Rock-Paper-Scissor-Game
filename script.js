const choices = ['rock','paper','scissors'];
const player = document.getElementById(playerDisplay);
const computer = document.getElementById(computerDisplay);
const result = document.getElementById(resultDisplay);

function playGame (playerChioces){

    const computerChoices = choices[Math.floor(Math.random()* 3)];
    let result ="";

    if(playerChioces === computerChoices){
        result = "Its a tie";
    }
    else{
        switch(playerChioces){
          case "rock":
            result = (computerChoices === "scissors" )? "YOU WIN" : "YOU LOSE";
            break;

          case "paper":
            result = (computerChoices === "rock") ? "YOU WIN" : "YOU LOSE";
            break;
          case "scissors":
            result = (computerChoices === "paper") ? " YOU WIN" : "YOU LOSE";
            break;
        }
    }
    playerDisplay.textcontent = `player ${playerChioces}`;
    computerDisplay.textcontent = `computer ${computerChoices}`;
    resultDisplay.textcontent = result;
      
}


    