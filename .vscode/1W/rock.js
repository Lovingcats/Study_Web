let rock = ["rock", "scissor", "paper"];
let randomEl = document.querySelector("#random-el");

function change() {
  let rand = Math.floor(Math.random() * 4) + 1;
  randomEl.textContent = rock[rand];
}
