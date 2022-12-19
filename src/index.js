import { ship } from "./ships";
import { gameBoard } from "./gameboard";
import { player } from './player';
import { displayBoard, displayStartMatchBtn } from './DOM'

const startGameBtn = document.getElementById('start-game');
const modal = document.getElementById('game-over-modal');
const gameOverBtn = document.getElementById('game-over-btn');
const shipPlacementInput = document.getElementById('ship-placement-input');
const rotateBtn = document.getElementById('rotate-btn');
const placeShipBtn = document.getElementById('place-ship-btn');

const boards = [];
const players = []
let vertical = false;

startGameBtn.addEventListener('click', () => {
  displayBoard();
  createPlayers();
  createBoards();
  shipPlacementInput.focus();
});

placeShipBtn.addEventListener('click', () => {
  placeShip();
  shipPlacementInput.value = '';
  shipPlacementInput.focus();
});

rotateBtn.addEventListener('click', () => {
  vertical = vertical == false ? true : false;
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
  const computerPlayer = player(false);
  players.push(humanPlayer);
  players.push(computerPlayer);
}

function createBoards() {
  const playerBoard = gameBoard('player');
  const computerBoard = gameBoard('computer');
  boards.push(playerBoard);
  boards.push(computerBoard);
}

function placeShip() {
  switch (boards[0].getShipsPlaced()) {
    case 0:
      boards[0].placeCarrier(shipPlacementInput.value, vertical);
      vertical = false;
      break;
    case 1:
      boards[0].placeBattleship(shipPlacementInput.value, vertical);
      vertical = false;
      break;
    case 2:
      boards[0].placeCruiser(shipPlacementInput.value, vertical);
      vertical = false;
      break;
    case 3:
      boards[0].placeSubmarine(shipPlacementInput.value, vertical);
      vertical = false;
      break;
    case 4:
      boards[0].placeDestroyer(shipPlacementInput.value, vertical);
      displayStartMatchBtn();
      break;
  }
}

export { boards, players }