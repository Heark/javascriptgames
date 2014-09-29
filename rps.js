var choice = prompt("Rock, Paper, or Scissors?")
var items = ["Rock","Paper","Scissors"]
var compchoice = items[Math.floor(Math.random()*items.length)];
if (choice == "Rock"){
  if (compchoice == "Rock"){
  console.log("You chose Rock and computer chose Rock. TIE GAME!")
  else if (compchoice == "Paper")
      console.log("You Lose!")
}
}
