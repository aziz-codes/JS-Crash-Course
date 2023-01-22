const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const lists = document.getElementById("lists");
inputBtn.addEventListener("click", () => {
  let link = inputEl.value;
  if (myLeads.includes(link)) {
    alert("sorry this path already exists");
  } else {
    myLeads.push(link);
  }
  for (let i = 0; i < myLeads.length; i++) {
    lists.textContent += myLeads[i];
  }
});
