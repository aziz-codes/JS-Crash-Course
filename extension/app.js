const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const lists = document.getElementById("lists");
const deleteBtn = document.getElementById("delete-btn");
const leads = JSON.parse(localStorage.getItem("myLeads"));
if (leads) {
  myLeads = leads;
  renderLeads();
}
//handler to add item to the localstorage.
inputBtn.addEventListener("click", () => {
  let link = inputEl.value;
  myLeads.push(link);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});
// handler to remove all the links from localstorage and clean up the DOM.
deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target='_blank' href=${myLeads[i]}>${myLeads[i]}</a></li>`;
  }
  lists.innerHTML = listItems;
}
// deploying with version 1.0
