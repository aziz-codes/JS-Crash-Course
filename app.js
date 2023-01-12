let num1 = 5;
let num2 = 7;
let message = "";
let sum = num1+num2;
const cardsEl = document.getElementById('card-el');
const sumEl = document.getElementById('sum-el');
const messageEl = document.getElementById('message-el');
function startGame(){
cardsEl.textContent = "Cards: "+num1+ " "+num2;
  sumEl.textContent = "Sum: "+sum;

  if(sum<=20){
    message = "Do you want to draw a new card ? ";
  }
  else if(sum===21){
    message = "Boom , you've got a black jack";
  }
  else
  message = "You are out the game";

  messageEl.textContent = message;
}

function newCard()
{
   let num3 = 7;
   sum+=num3;
   startGame();
}