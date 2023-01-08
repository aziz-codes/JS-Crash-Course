
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

const name = "Aziz";
const age = 24;

let check = Boolean(age>20 && name.toLowerCase()==="Aziz".toLocaleLowerCase());
