import { player } from '../player';
import { gameBoard } from '../gameboard';

test('test board cell equals miss when no ship is hit', () => {
  const board = gameBoard();
  const computerPlayer = player('Computer');
  board.placeCarrier('b4', false);
  board.placeBattleship('e1', false);
  board.placeCruiser('e7', true);
  board.placeSubmarine('h3', false);
  board.placeDestroyer('a2', true);
  for(let i = 0; i < 10; i++){
    board.receiveAttack(computerPlayer.makeMove());
  }
  console.log(board.coordinates, computerPlayer.movesMade);
  for(let i of board.ships) {
    console.log(i.showHits(), i.name);
  }
});