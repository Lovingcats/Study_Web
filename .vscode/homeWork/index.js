// SETTING THE STAGE
let player = "Seongho"
let opponent = "Chaewon"
let game = "Sprinting"
let points = 0
let hasWon = false

// PLAYING THE GAME
points += 100
hasWon = true

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(player + " got " + points + " points and won the " + game + " game!")
} else {
    console.log("The winner is " + opponent + "! " + player + " lost the game")
}
