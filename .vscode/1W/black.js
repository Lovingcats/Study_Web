var firstcard = 5;
var secondcard = 7;
var sum = firstcard + secondcard;
var hasBlackJack = false;
var isAlive = true;
var message = "";
if(sum < 21){
    message = "카드를 더 뽑으시겠습니까?";
}
else if(sum === 21){
    message = "블랙잭! 승리하셨습니다";
    hasBlackJack = true;
}
else{
    message = "패배";
    isAlive = false;
}
console.log(message);
