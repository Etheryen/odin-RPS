let score = document.getElementById('score');
let log = document.getElementById('log');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let body = document.querySelector('body');

let playerScore = 0;
let computerScore = 0;

gameEnd = () => {
  rock.remove();
  paper.remove();
  scissors.remove();
  const restart = document.createElement('button');
  restart.innerHTML = 'Restart';
  body.appendChild(restart);
  restart.onclick = () => {window.location.reload()};
}

computerPlay = () => {
  const play = ['Rock', 'Paper', 'Scissors'];
  return play[Math.floor(Math.random() * 3)];
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
  return result;
}

round = (playerSelection) => {
  const computerSelection = computerPlay();
  log.innerHTML += playRound(playerSelection, computerSelection);
  log.innerHTML += '<br>'
  score.innerHTML = `${playerScore}:${computerScore}`;

  if(playerScore == 5) {
    log.innerHTML += ('You Won!<br>');
    gameEnd();
  }
  if(computerScore == 5) {
    log.innerHTML += ('You Lost...<br>');
    gameEnd();
  }
}

rock.onclick = () => round('rock');
paper.onclick = () => round('paper');
scissors.onclick = () => round('scissors');