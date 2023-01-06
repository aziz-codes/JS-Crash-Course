
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

function change(){
    document.body.style.backgroundColor = "skyblue";
}