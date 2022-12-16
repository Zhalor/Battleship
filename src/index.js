import { ship } from "./ships";
import { gameBoard } from "./gameboard";
import { player } from './player';
import { displayBoard } from './DOM'
const startGameBtn = document.getElementById('start-game');

const boards = [];
const players = []

startGameBtn.addEventListener('click', () => {
  displayBoard();
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
  const playerBoard = gameBoard();
  playerBoard.placeCarrier('a1', false);
  playerBoard.placeBattleship('b1', false);
  playerBoard.placeCruiser('c1', false);
  playerBoard.placeSubmarine('d1', false);
  playerBoard.placeDestroyer('e1', false);
  boards.push(playerBoard);
  const computerBoard = gameBoard();
  computerBoard.placeCarrier('a1', false);
  computerBoard.placeBattleship('b1', false);
  computerBoard.placeCruiser('c1', false);
  computerBoard.placeSubmarine('d1', false);
  computerBoard.placeDestroyer('e1', false);
  boards.push(computerBoard);
}

export { boards, players }