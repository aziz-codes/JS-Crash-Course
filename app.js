let counts = 3;
let sum = 0;
const cardsEl = document.getElementById('cards-el');
let cards = 0;
let isAlive = true;
function replay(){
    counts = 4;
    sum = 0;
    isAlive = true;
}
function drawCard(){
counts-=1;
if(counts>=0){
   cards = Math.floor(Math.random()*11)+1;
   cardsEl.textContent+=cards+"      ";
   sum+=cards;
   document.getElementById('remaing-card-el').textContent = counts;
    document.getElementById('sum-el').textContent=sum;
   if(sum<=20){
    document.getElementById('message-el').textContent = "Do you want to draw again";
    if(counts===0){
        document.getElementById('message-el').textContent = "Your limit has reached";
        document.getElementById('replay-btn').style.display="block";
    }
   }
   else if(sum===21){
    document.getElementById('message-el').textContent = "Black Jack";
    document.getElementById('replay-btn').style.display="block";
   }
   else{
    document.getElementById('message-el').textContent = "You are out of Game";
     isAlive = false;
     document.getElementById('replay-btn').style.display="block";

   }
}

}