import { ship } from "./ships";
import { gameBoard } from "./gameboard";
import { player } from './player';
import { boards, players } from './index';

const titleContainer = document.getElementById('title-container');
const gameContainer = document.getElementById('game-container');
const gameHeader = document.getElementById('game-header');
const playerName = document.getElementById('player-name');
const nameInput = document.getElementById('player-name-input');
const cells = document.querySelectorAll('.cell');

function displayBoard() {
  titleContainer.style.display = 'none';
  gameContainer.style.display = 'grid';
  gameHeader.style.display = 'grid';

  const name = nameInput.value == '' ? 'Your': nameInput.value + '\'s'
  playerName.innerText = `${name} Board`
}

for(let cell of cells) {
  cell.addEventListener('click', () => {
    console.log(cell.dataset.coordinates);
  });
}


export { displayBoard }