import { gameBoard } from "../gameboard";


//Carrier test
test('test horizontal Carrier ship placement', () => {
  const board = gameBoard();
  board.placeCarrier('c3', false);
  expect(board.coordinates.c3).toMatch("carrier");
  expect(board.coordinates.c4).toMatch("carrier");
  expect(board.coordinates.c5).toMatch("carrier");
  expect(board.coordinates.c6).toMatch("carrier");
  expect(board.coordinates.c7).toMatch("carrier");
  expect(board.coordinates.c8).toMatch("");
});

test('test Carrier ship will not be placed if horizontal cells are too few', () => {
  const board = gameBoard();
  board.placeCarrier('a5', false);
  expect(board.coordinates.a5).toMatch("");
  expect(board.coordinates.a6).toMatch("");
  expect(board.coordinates.a7).toMatch("");
  expect(board.coordinates.a8).toMatch("");
});

test('test vertical Carrier ship placement', () => {
  const board = gameBoard();
  board.placeCarrier('a1', true);
  expect(board.coordinates.a1).toMatch("carrier");
  expect(board.coordinates.b1).toMatch("carrier");
  expect(board.coordinates.c1).toMatch("carrier");
  expect(board.coordinates.d1).toMatch("carrier");
  expect(board.coordinates.e1).toMatch("carrier");
  expect(board.coordinates.f1).toMatch("");
});

test('test Carrier ship will not be placed if vertical cells are too few', () => {
  const board = gameBoard();
  board.placeCarrier('e1', true);
  expect(board.coordinates.e1).toMatch("");
  expect(board.coordinates.f1).toMatch("");
  expect(board.coordinates.g1).toMatch("");
  expect(board.coordinates.h1).toMatch("");
});

//Battleship tests
test('test horizontal Battleship ship placement', () => {
  const board = gameBoard();
  board.placeBattleship('a3', false);
  expect(board.coordinates.a3).toMatch("battleship");
  expect(board.coordinates.a4).toMatch("battleship");
  expect(board.coordinates.a5).toMatch("battleship");
  expect(board.coordinates.a6).toMatch("battleship");
  expect(board.coordinates.a7).toMatch("");
});

test('test Battleship ship will not be placed if horizontal cells are too few', () => {
  const board = gameBoard();
  board.placeBattleship('a6', false);
  expect(board.coordinates.a5).toMatch("");
  expect(board.coordinates.a6).toMatch("");
  expect(board.coordinates.a7).toMatch("");
  expect(board.coordinates.a8).toMatch("");
});

test('test vertical Battleship ship placement', () => {
  const board = gameBoard();
  board.placeBattleship('a1', true);
  expect(board.coordinates.a1).toMatch("battleship");
  expect(board.coordinates.b1).toMatch("battleship");
  expect(board.coordinates.c1).toMatch("battleship");
  expect(board.coordinates.d1).toMatch("battleship");
  expect(board.coordinates.e1).toMatch("");
});

test('test Battleship ship will not be placed if vertical cells are too few', () => {
  const board = gameBoard();
  board.placeBattleship('f1', true);
  expect(board.coordinates.e1).toMatch("");
  expect(board.coordinates.f1).toMatch("");
  expect(board.coordinates.g1).toMatch("");
  expect(board.coordinates.h1).toMatch("");
});