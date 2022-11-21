import { ship } from "../ships";

test('test adding a hit to ship', () => {
  const testShip = ship(4);
  expect(testShip.showHits()).toBe(0);
  for(let i = 0; i < 3; i++) {
    testShip.hit();
  }
  expect(testShip.showHits()).toBe(3);
});

test('test if a ship is sunk when hits is equal to length of ship', () => {
  const testShip = ship(7);
  for(let i = 0; i < 7; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBeTruthy();
});

test('test if a ship is not sunk when hits is less than length of ship', () => {
  const testShip = ship(7);
  for(let i = 0; i < 5; i++) {
    testShip.hit();
  }
  expect(testShip.isSunk()).toBeFalsy();
});