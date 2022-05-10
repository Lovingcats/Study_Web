let cards = [];
let sum = 0;
var hasBlackJack = false;
var isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardEl = document.querySelector("#card-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");

function newCard() {
  if (hasBlackJack == false && isAlive == true) {
    let card = Math.floor(Math.random() * 13) + 1;
    cards.push(card);
    sum = sum + card;
    renderGame();
  }
}

function startGame() {
  renderGame();
}
let player = {
  playerNmae: "홍길동",
  playerChips: 145,
};

playerEl.textContent =
  "player: " + player.playerNmae + " " + player.playerChips;
function renderGame() {
  if (sum < 21) {
    message = "카드를 더 뽑으시겠습니까?";
  } else if (sum === 21) {
    message = "블랙잭! 승리하셨습니다";
    hasBlackJack = true;
  } else {
    message = "패배";
    isAlive = false;
  }
  sumEl.textContent = sum;
  messageEl.textContent = message;
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "sum: " + sum;
}
