
let count = 0;
let countEl = document.getElementById('counter');
let entriesEl = document.getElementById('entries-el');
let entries = "Previous Entires : ";


function increment(){
    count+=1;
    countEl.innerText = count;;
    
}

function save(){
    entries+=count+" - ";
    entriesEl.textContent = entries;
}

function Parent(){
   let myCount = 0;

    function Child(){
   myCount = 6;
   console.log(myCount);
   }
  return Child();
}


Parent();