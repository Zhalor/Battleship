import { gameBoard } from "./gameboard";
import { player } from './player';
import { displayBoard, displayComputerGameboard } from './DOM'

const startGameBtn = document.getElementById('start-game');
const modal = document.getElementById('game-over-modal');
const gameOverBtn = document.getElementById('game-over-btn');
const shipPlacementInput = document.getElementById('ship-placement-input');
const rotateBtn = document.getElementById('rotate-btn');
const startRoundBtn = document.getElementById('start-round-btn');
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

startRoundBtn.addEventListener('click', () => {
  while(boards[1].getShipsPlaced() < 1) {
    boards[1].placeCarrier(players[1].generateCoordinate(), players[1].generateBoolean());
  }
  while(boards[1].getShipsPlaced() < 2) {
    boards[1].placeBattleship(players[1].generateCoordinate(), players[1].generateBoolean());
  }
  while(boards[1].getShipsPlaced() < 3) {
    boards[1].placeCruiser(players[1].generateCoordinate(), players[1].generateBoolean());
  }
  while(boards[1].getShipsPlaced() < 4) {
    boards[1].placeSubmarine(players[1].generateCoordinate(), players[1].generateBoolean());
  }
  while(boards[1].getShipsPlaced() < 5) {
    boards[1].placeDestroyer(players[1].generateCoordinate(), players[1].generateBoolean());
  }
  displayComputerGameboard();
});

gameOverBtn.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  for(let cell of cells) {
    cell.classList.remove('hit', 'miss', 'ship');
  }
  modal.style.display = 'none';
  boards.length = 0;
  players.length = 0;
  createPlayers();
  createBoards();
  displayBoard();
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
      boards[0].placeCarrier(shipPlacementInput.value, vertical, true);
      vertical = false;
      break;
    case 1:
      boards[0].placeBattleship(shipPlacementInput.value, vertical, true);
      vertical = false;
      break;
    case 2:
      boards[0].placeCruiser(shipPlacementInput.value, vertical, true);
      vertical = false;
      break;
    case 3:
      boards[0].placeSubmarine(shipPlacementInput.value, vertical, true);
      vertical = false;
      break;
    case 4:
      boards[0].placeDestroyer(shipPlacementInput.value, vertical, true);
      vertical = false;
      break;
  }
}

export { boards, players }