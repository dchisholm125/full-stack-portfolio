var diceRoll1 = "dice" + (Math.floor((Math.random() * 6)) + 1) + ".png";
console.log (diceRoll1);
var dice1 = document.getElementById("dice1").innerHTML += "<img class=\"img\" src=\"./images/" + diceRoll1 + "\">";

var diceRoll2 = "dice" + (Math.floor((Math.random() * 6)) + 1) + ".png";
console.log (diceRoll2);
var dice2 = document.getElementById("dice2").innerHTML += "<img class=\"img\" src=\"./images/" + diceRoll2 + "\">";

if (diceRoll1 > diceRoll2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (diceRoll1 < diceRoll2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
    
}