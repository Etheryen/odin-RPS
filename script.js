let playerScore = 0;
let computerScore = 0;


computerPlay = () => {
  const play = ['Rock', 'Paper', 'Scissors'];
  return play[Math.floor(Math.random() * 3)]
}

playRound = (playerSelection, computerSelection) => {
  let result;
  if(playerSelection.toLowerCase() == 'rock') {
    if(computerSelection.toLowerCase() == 'rock') {
      result = 'Draw! Rock draws against Rock';
    }
    if(computerSelection.toLowerCase() == 'paper') {
      result = 'You Lose! Paper beats Rock';
      computerScore++;
    }
    if(computerSelection.toLowerCase() == 'scissors') {
      result = 'You Win! Rock beats Scissors';
      playerScore++;
    }
  }
  if(playerSelection.toLowerCase() == 'paper') {
    if(computerSelection.toLowerCase() == 'rock') {
      result = 'You Win! Paper beats Rock';
      playerScore++;
    }
    if(computerSelection.toLowerCase() == 'paper') {
      result = 'Draw! Paper draws against Paper';
    }
    if(computerSelection.toLowerCase() == 'scissors') {
      result = 'You Lose! Scissors beat Paper';
      computerScore++;
    }
  }
  if(playerSelection.toLowerCase() == 'scissors') {
    if(computerSelection.toLowerCase() == 'rock') {
      result = 'You Lose! Rock beats Scissors';
      computerScore++;
    }
    if(computerSelection.toLowerCase() == 'paper') {
      result = 'You Win! Scissors beat Paper';
    }
    if(computerSelection.toLowerCase() == 'scissors') {
      result = 'Draw! Scissors draw against Scissors';
      playerScore++;
    }
  }
  console.log(`${result}. Score ${playerScore}:${computerScore}`);
  return result;
}

round = () => {
  const playerSelection = prompt('Rock Paper Scissors?');
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

game = () => {
  while(playerScore < 5 && computerScore < 5) {
    round();
  }
  if(playerScore == 5) {
    console.log('You Won!');
  }
  else {
    console.log('You Lost...');
  }
}

game();