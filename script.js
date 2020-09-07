let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
}
function compareGuesses(huGuess, coGuess, secretNomber){
  if(huGuess < 0 || huGuess > 9){
    window.alert('Falsche Eingabe! Bitte eine Zahl zwischen 0 u. 9 eingeben.');
  }
  if(Math.abs(huGuess - secretNomber) < Math.abs(coGuess - secretNomber) || Math.abs(huGess) === Math.abs(secretNomber)){
    return true;
  } else {
    return false;
  }
}
function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
function advanceRound(){
    currentRoundNumber++;
}
