import { ship } from "./ships";
import { gameBoard,checkAllShipsSunk } from "./gameboard";
import { player } from './player';
import { boards, players } from './index';

const titleContainer = document.getElementById('title-container');
const gameContainer = document.getElementById('game-container');
const gameHeader = document.getElementById('game-header');
const playerName = document.getElementById('player-name');
const nameInput = document.getElementById('player-name-input');
const playerCells = document.querySelectorAll('#player-gameboard .cell');
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
      const hit = boards[1].receiveAttack(cell.dataset.coordinates);
      checkHit(hit, cell);
      const gameOver = boards[1].checkAllShipsSunk();
      players[0].turn = false;
      if(gameOver) {
        alert('Computer loses. You win!');
      }

      boards[0].receiveAttack(players[1].makeMove());
      console.log(boards[0].coordinates);
      players[0].turn = true;
    }

  });
}

function checkHit(hit, cell) {
  if(hit) {
    cell.style.backgroundColor = 'rgba(255, 30, 30, 0.7)';
  } else {
    cell.style.backgroundColor = 'rgba(0, 0, 255, 0.7)';
  }
}


export { displayBoard }