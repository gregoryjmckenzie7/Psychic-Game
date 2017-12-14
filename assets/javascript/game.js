var computerOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;

var letterToBeGuessed = computerOptions[Math.floor(Math.random() * computerOptions.length)];

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessesSoFar.indexOf(userGuess) < 0 && computerOptions.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	if (letterToBeGuessed == userGuess) {
		wins++;
		alert(" Wow, you have psychic powers!!! You Win!")
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = computerOptions[Math.floor(Math.random() * computerOptions.length)];
	}

	if (guessesLeft == 0) {
		losses++;
		alert(" You lose, you have no psychic powers. Try Again?")
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = computerOptions[Math.floor(Math.random() * computerOptions.length)];
	}

	var html = "<h1>The Psychic Game</h1>" + "<h4>Guess what letter I\'m thinking of</h4>" + "<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>" + "<h4>Guesses Left: " + guessesLeft + "</h4>" + "<h4>Your guesses so far: " + guessesSoFar + "</h4>";
	document.querySelector("#game").innerHTML = html;

}