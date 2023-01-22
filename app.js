let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let cards = [];
let isAlive = true;
let hasBlackjack = false;
cards.push(num1, num2);
let message = "";
let sum = num1 + num2;
const cardsEl = document.getElementById("card-el");
const sumEl = document.getElementById("sum-el");
const messageEl = document.getElementById("message-el");

function startGame() {
  cardsEl.textContent = "";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card ? ";
  } else if (sum === 21) {
    message = "Boom , you've got a black jack";
  } else {
    message = "You are out the game";
    hasBlackjack = false;
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let num3 = Math.floor(Math.random() * 20) + 1;
    sum += num3;
    cards.push(num3);
    startGame();
  }
}

let array = ["Rock", "Paper", "Scissor"];

function randomItem() {
  let index = Math.floor(Math.random() * 3) + 0;
  console.log(array[index]);
}
randomItem();
