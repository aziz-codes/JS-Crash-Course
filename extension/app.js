//Dom Elements
const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const lists = document.getElementById("lists");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("tab-btn");

const leadsInLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsInLocalStorage) {
  myLeads = leadsInLocalStorage;
  render(myLeads);
}
//handler to add item to the localstorage.
inputBtn.addEventListener("click", () => {
  let link = inputEl.value;
  if (myLeads.includes(link)) {
    alert("link already exists");
    return;
  } else {
    myLeads.push(link);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});
// handler to remove all the links from localstorage and clean up the DOM.
deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target='_blank' href=${leads[i]}>${leads[i]}</a></li>`;
  }
  lists.innerHTML = listItems;
}
// deploying with version 1.1

//handler to save the current opened tab

saveTabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});
// Course Completed with time stamp of 07:44:19
