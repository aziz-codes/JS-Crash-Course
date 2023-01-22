const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const lists = document.getElementById("lists");
inputBtn.addEventListener("click", () => {
  let link = inputEl.value;
  myLeads.push(link);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target='_blank' href=${myLeads[i]}>${myLeads[i]}</a></li>`;
  }
  lists.innerHTML = listItems;
}
