"strict"
let count = 0;
let countEl = document.getElementById('counter');

function increment(){
    count+=1;
    countEl.innerText = count;;
}


function save(){
    console.log(count);
}

  let name = "Aziz";
  let greeting = "This is my greeting message";

  let myGreeting = name+" "+greeting;
  console.log(myGreeting)