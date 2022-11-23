import { player } from '../player';
import { gameBoard } from '../gameboard';

test('test board cell equals miss on no ship is hit', () => {
  const board = gameBoard();
  const computerPlayer = player();
  board.placeCarrier('b4', false);
  board.placeBattleship('e1', false);
  board.placeCruiser('e7', true);
  board.placeSubmarine('h3', false);
  board.placeDestroyer('a2', true);
  for(let i = 0; i < 10; i++){
    computerPlayer.makeMove();
  }
  console.log(board.coordinates, computerPlayer.movesMade);
});