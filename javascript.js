let startRound = 1;
let userScore = 0;
let computerScore = 0;


document.getElementById("myscore").innerHTML = "User: " + userScore;
document.getElementById("enemyscore").innerHTML = "Computer: " + computerScore;

document.getElementById("rockButton").addEventListener("click", function() {
	
	function getRandomNum(min, max) {
  		let newNumber = Math.random() * (max - min) + min;
  		return Math.floor(newNumber);
		}
	
	let random_number = getRandomNum(0,3);
	
	const choices = ["rock","paper","scissors"]
	let computerChoice = choices[random_number];
	let userChoice = "rock";
	
	
	let userName = "You";
	let computerName = "Computer";
	
	document.getElementById("userselection").innerHTML = "Your Choice: " + userChoice;
	document.getElementById("computerselection").innerHTML = "Computer's Choice: " + computerChoice;
	
	if(computerChoice == "rock"){
	
		document.getElementById("text").innerHTML = "It's a tie!";
		}
		
	switch (computerChoice){
		
		case "paper": 
		
			document.getElementById("text").innerHTML = computerName + " won the round.";
			newComputerScore = ++computerScore;
			document.getElementById("enemyscore").innerHTML = "Computer: "+newComputerScore;
			break;
			
		case "scissors":
			document.getElementById("text").innerHTML = userName + " won the round!";
			newUserScore = ++userScore;
			document.getElementById("myscore").innerHTML = "User: "+newUserScore;
			break;
			
		default:
			break;
		}
			
	if(newComputerScore == 5 || newUserScore == 5){
		if(newComputerScore == 5){
			alert("Sorry you lost");}
		
		else if(newUserScore == 5){
			alert("Awesome you won!");}
			
		else{
			alert("error");}
		}
	
			
});



document.getElementById("scissorsButton").addEventListener("click", function() {
	
	function getRandomNum(min, max) {
  		let newNumber = Math.random() * (max - min) + min;
  		return Math.floor(newNumber);
		}
	
	let random_number = getRandomNum(0,3);
	
	const choices = ["rock","paper","scissors"]
	let computerChoice = choices[random_number];
	let userChoice = "scissors";
	
	
	let userName = "You";
	let computerName = "Computer";
	
	document.getElementById("userselection").innerHTML = "Your Choice: " + userChoice;
	document.getElementById("computerselection").innerHTML = "Computer's Choice: " + computerChoice;
	
	if(computerChoice == "scissors"){
	
		document.getElementById("text").innerHTML = "It's a tie!";
		}
		
	switch (computerChoice){
		
		case "rock": 
		
			document.getElementById("text").innerHTML = computerName + " won the round.";
			newComputerScore = ++computerScore;
			document.getElementById("enemyscore").innerHTML = "Computer: "+newComputerScore;
			break;
			
		case "paper":
			document.getElementById("text").innerHTML = userName + " won the round!";
			newUserScore = ++userScore;
			document.getElementById("myscore").innerHTML = "User: "+newUserScore;
			break;
			
		default:
			break;
		}
			
	if(newComputerScore == 5 || newUserScore == 5){
		if(newComputerScore == 5){
			alert("Sorry you lost");}
		
		else if(newUserScore == 5){
			alert("Awesome you won!");}
			
		else{
			alert("error");}
		}
	
			
});



document.getElementById("paperButton").addEventListener("click", function() {
	
	function getRandomNum(min, max) {
  		let newNumber = Math.random() * (max - min) + min;
  		return Math.floor(newNumber);
		}
	
	let random_number = getRandomNum(0,3);
	
	const choices = ["rock","paper","scissors"]
	let computerChoice = choices[random_number];
	let userChoice = "paper";
	
	
	let userName = "You";
	let computerName = "Computer";
	
	document.getElementById("userselection").innerHTML = "Your Choice: " + userChoice;
	document.getElementById("computerselection").innerHTML = "Computer's Choice: " + computerChoice;
	
	if(computerChoice == "paper"){
	
		document.getElementById("text").innerHTML = "It's a tie!";
		}
		
	switch (computerChoice){
		
		case "scissors": 
		
			document.getElementById("text").innerHTML = computerName + " won the round.";
			newComputerScore = ++computerScore;
			document.getElementById("enemyscore").innerHTML = "Computer: "+newComputerScore;
			break;
			
		case "rock":
			document.getElementById("text").innerHTML = userName + " won the round!";
			newUserScore = ++userScore;
			document.getElementById("myscore").innerHTML = "User: "+newUserScore;
			break;
			
		default:
			break;
		}
			
	if(newComputerScore == 5 || newUserScore == 5){
		if(newComputerScore == 5){
			alert("Sorry you lost");}
		
		else if(newUserScore == 5){
			alert("Awesome you won!");}
			
		else{
			alert("error");}
		}
	
			
});

