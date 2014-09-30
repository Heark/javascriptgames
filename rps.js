// Simple Javascript Rock Paper Scissors
// (C)opyright Heark gaming co. 2014
//  Very elementary.
// Thanks for playing!
var choice = prompt("Rock, Paper, or Scissors?")
var items = ["Rock","Paper","Scissors"]
var compchoice = items[Math.floor(Math.random()*items.length)];
if (choice == "Rock", "rock"){
  if (compchoice == "Rock")
  console.log("You chose Rock and computer chose Rock. TIE GAME!")
  else if (compchoice == "Paper")
      console.log("You chose rock and the computer chose paper You Lose!")
        else if (compchoice == "Scissors")
      console.log("You chose Rock and the computer chose Scissors, You Win!")
}
if (choice == "Paper", "paper"){
    if (compchoice == "Rock")
    console.log("You chose Paper and the computer chose Rock, You win!")
    else if (compchoice == "Paper")
    console.log("You chose Paper and the computer chose Paper, TIE GAME!")
    else if (compchoice == "Scissors")
    console.log("You chose Paper and the computer chose Paper, You Lose!")
}
if (choice == "Scissors", "scissors"){
    if (compchoice == "Scissors")
    console.log("You chose Scissors and the computer chose scissors, TIE GAME!")
    else if (compchoice == "Paper")
    console.log("You chose Scissors and the computer chose paper, You Win!")
    else if (compchoice == "Rock")
    console.log("You chose Scissors and the computer chose rock, You lose! ")
}
