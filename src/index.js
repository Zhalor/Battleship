import { ship } from "./ships";
import { gameBoard } from "./gameboard";
import { player } from './player';
import { displayBoard } from './DOM'

const startGameBtn = document.getElementById('start-game');
const modal = document.getElementById('game-over-modal');
const gameOverBtn = document.getElementById('game-over-btn');
const boards = [];
const players = []

startGameBtn.addEventListener('click', () => {
  displayBoard();
  createPlayers();
  createBoards();
});

gameOverBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  for(let cell of cells) {
    cell.classList.remove('hit', 'miss');
  }
  modal.style.display = 'none';
  boards.length = 0;
  players.length = 0;
  createPlayers();
  createBoards();
});

function createPlayers() {
  const humanPlayer = player(true);
  players.push(humanPlayer);
  const computerPlayer = player(false);
  players.push(computerPlayer);
}

function createBoards() {
  const playerBoard = gameBoard('player');
  playerBoard.placeCarrier('a1', false);
  playerBoard.placeBattleship('b1', false);
  playerBoard.placeCruiser('c1', false);
  playerBoard.placeSubmarine('d1', false);
  playerBoard.placeDestroyer('e1', false);
  boards.push(playerBoard);

  const computerBoard = gameBoard('computer');
  computerBoard.placeCarrier('a1', false);
  computerBoard.placeBattleship('b1', false);
  computerBoard.placeCruiser('c1', false);
  computerBoard.placeSubmarine('d1', false);
  computerBoard.placeDestroyer('e1', false);
  boards.push(computerBoard);
}

export { boards, players }