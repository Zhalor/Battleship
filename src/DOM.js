import { ship } from "./ships";
import { gameBoard,checkAllShipsSunk } from "./gameboard";
import { player } from './player';
import { boards, players } from './index';

const modal = document.getElementById('game-over-modal');
const winnerNameDisplay = document.getElementById('winner-name-display');
const titleContainer = document.getElementById('title-container');
const gameContainer = document.getElementById('game-container');
const gameHeader = document.getElementById('game-header');
const playerName = document.getElementById('player-name');
const nameInput = document.getElementById('player-name-input');
const computerCells = document.querySelectorAll('#computer-gameboard .cell');

function displayBoard() {
  titleContainer.style.display = 'none';
  gameContainer.style.display = 'grid';
  gameHeader.style.display = 'grid';

  const name = nameInput.value == '' ? 'Your': nameInput.value + '\'s'
  playerName.innerText = `${name} Board`
}

for(let cell of computerCells) {
  cell.addEventListener('click', () => {
    if(players[0].turn) {
      fire(cell.dataset.coordinates, boards[1]);
      if(boards[1].checkAllShipsSunk()) {
        displayGameOverScreen('Computer loses. You win!');
      }
      players[0].turn = false;

      fire(players[1].makeMove(), boards[0]);
      if(boards[0].checkAllShipsSunk()) {
        displayGameOverScreen('You lose. Computer wins.');
      }
      players[0].turn = true;
    }

  });
}

function fire(coords, board) {
  const hit = board.receiveAttack(coords);
  checkHit(hit, coords, board)
}

function checkHit(hit, coords, board) {
  let cell = null;
  if(board.name === 'player') {
    cell = document.querySelector(`#player-gameboard [data-coordinates="${coords}"]`);
  } else {
    cell = document.querySelector(`#computer-gameboard [data-coordinates="${coords}"]`);
  }

  if(hit) {
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}

function displayGameOverScreen(winner) {
  modal.style.display = 'block';
  winnerNameDisplay.innerText = winner;
  console.log(boards, players)
}


export { displayBoard }