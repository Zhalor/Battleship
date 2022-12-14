import { boards, players } from './index';

const modal = document.getElementById('game-over-modal');
const winnerNameDisplay = document.getElementById('winner-name-display');
const titleContainer = document.getElementById('title-container');
const gameContainer = document.getElementById('game-container');
const gameHeader = document.getElementById('game-header');
const playerName = document.getElementById('player-name');
const enemyName = document.getElementById('enemy-name');
const nameInput = document.getElementById('player-name-input');
const shipPlacementContainer = document.getElementById('ship-placement-container');
const placeShipHeader = document.getElementById('place-ship-header');
const shipName = document.getElementById('ship-name');
const shipPlacementInput = document.getElementById('ship-placement-input');
const placeShipBtn = document.getElementById('place-ship-btn');
const rotateBtn = document.getElementById('rotate-btn');
const startRoundBtn = document.getElementById('start-round-btn');
const computerGameboard = document.getElementById('computer-gameboard');
const computerCells = document.querySelectorAll('#computer-gameboard .cell');


function displayBoard() {
  titleContainer.style.display = 'none';
  gameContainer.style.display = 'grid';
  gameHeader.style.display = 'grid';
  computerGameboard.style.display = 'none';
  shipPlacementContainer.style.display = 'flex';
  placeShipBtn.style.display = 'inline';
  rotateBtn.style.display = 'inline';
  startRoundBtn.style.display = 'none';

  const name = nameInput.value == '' ? 'Your': nameInput.value + '\'s'
  playerName.innerText = `${name} Board`
  shipName.innerText = 'Carrier';
}

for(let cell of computerCells) {
  cell.addEventListener('click', () => {
    const classNames = ['hit', 'miss'];
    if(!classNames.some(className => cell.classList.contains(className))) {
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

function displayStartMatchBtn() {
  placeShipBtn.style.display = 'none';
  rotateBtn.style.display = 'none';
  shipName.style.display = 'none';
  shipPlacementInput.style.display = 'none';
  startRoundBtn.style.display = 'inline';
  placeShipHeader.innerText = 'Prepare For Battle!';
}

function displayComputerGameboard() {
  shipPlacementContainer.style.display = 'none';
  computerGameboard.style.display = 'block';
  enemyName.innerText = 'Enemy\'s Board'
}

function displayGameOverScreen(winner) {
  modal.style.display = 'block';
  winnerNameDisplay.innerText = winner;
}


export { displayBoard, displayStartMatchBtn, displayComputerGameboard }