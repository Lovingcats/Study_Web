let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = Json.parse(localStorage.getItem("myLeads"));
const inputBtn1 = document.getElementById("input-btn1");
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render();
}
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        // use `url` here inside the callback because it's asynchronous!
    });
})

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render();
});


inputBtn1.addEventListener("dbclick", function () {
    myLeads=[];
    localStorage.clear
    render(myLeads);
  });

function render() {
    
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
    }); 
  let listItems = "";
  for (var i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
