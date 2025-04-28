const choices = ['rock' , 'paper' , 'scissors'];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const result = document.getElementById("resultDisplay");

function playGame (playerChoices){
    const computerChoices = choices[Math.floor(Math.random() *3)];
     let result = "";
    if(playerChoices === computerChoices){
        result = "Draw";
    }
    else{
        switch(playerChoices){
            case "rock":
           result =(computerChoices === "scissors") ? "YOU WIN": "YOU LOSE";
           break;
           case "paper":
            result =(computerChoices === "rock") ? "YOU WIN": "YOU LOSE";
           break;
           case "scissors":
            result =(computerChoices === "paper") ? "YOU WIN": "YOU LOSE";
           break;
            
        }
    }
     playerDisplay.textContent = ` player ${playerChoices}`;
      computerDisplay.textContent = ` computer ${computerChoices}`;
       resultDisplay.textContent = result;
}

 
