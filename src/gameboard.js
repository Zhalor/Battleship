import { ship } from "./ships";
import { displayStartMatchBtn } from "./DOM";

function gameBoard(name) {
  const coordinates = {
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    b1: '',
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    b7: '',
    b8: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    d7: '',
    d8: '',
    e1: '',
    e2: '',
    e3: '',
    e4: '',
    e5: '',
    e6: '',
    e7: '',
    e8: '',
    f1: '',
    f2: '',
    f3: '',
    f4: '',
    f5: '',
    f6: '',
    f7: '',
    f8: '',
    g1: '',
    g2: '',
    g3: '',
    g4: '',
    g5: '',
    g6: '',
    g7: '',
    g8: '',
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
    h7: '',
    h8: '',
  }

  const ships = [];
  let shipsPlaced = 0;

  const getShipsPlaced = () => {
    return shipsPlaced;
  }

  function checkCellAvailablityHorizontal(shipLength, coordNum, letter) {
    const arr = [];
    for(let i = coordNum; i < coordNum + shipLength; i++) {
      if(coordinates[letter + i]) {
        return false;
      } else {
        arr.push(letter + i);
      }
    }
    return arr;
  }

  function checkCellAvailablityVertical(shipLength, letterCharCode, num ) {
    const arr = [];
    for(let i = letterCharCode; i < letterCharCode + shipLength; i++) {
      let coordLetter = String.fromCharCode(i);
      if(coordinates[coordLetter + num]) {
        return false;
      } else {
        arr.push(coordLetter + num);
      }
    }
    return arr;
  }

  function placeShip(shipObj, shipString, letter, num, vertical, DOM) {
    if(vertical === false) {
      if((num + shipObj.length) < 10) {
        const placeCoordinates = checkCellAvailablityHorizontal(shipObj.length, num, letter);
        if(placeCoordinates != false) {
          for(let coordinate of placeCoordinates) {
            coordinates[coordinate] = shipString;
            if(DOM == true) {
              document.querySelector(`[data-coordinates="${coordinate}"]`).classList.add('ship');
            }
          }
          ships.push(shipObj);
          shipsPlaced++;
          document.getElementById('ship-placement-input').classList.remove('error');
        } else {
          document.getElementById('ship-placement-input').classList.add('error');
        }
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + shipObj.length < 105) {
        const placeCoordinates = checkCellAvailablityVertical(shipObj.length, letter.charCodeAt(), num);
        if(placeCoordinates != false) {
          for(let coordinate of placeCoordinates) {
            coordinates[coordinate] = shipString;
            if(DOM == true) {
              document.querySelector(`[data-coordinates="${coordinate}"]`).classList.add('ship');
            }
          }
          ships.push(shipObj);
          shipsPlaced++;
          document.getElementById('ship-placement-input').classList.remove('error');
        } else {
          document.getElementById('ship-placement-input').classList.add('error');
        }
      }
    }
  }

  const placeCarrier = (coords, vertical, DOM) => {
    const carrier = ship('carrier', 5);
    let [letter, num] = coords.split('');
    num = Number(num);
    if(letter < 'i' && /[a-z]/.test(letter)) {
      placeShip(carrier, 'carrier', letter, num, vertical, DOM);
    }
  }
  
  const placeBattleship = (coords, vertical, DOM) => {
    const battleship = ship('battleship', 4);
    let [letter, num] = coords.split('');
    num = Number(num);
    if(letter < 'i' && /[a-z]/.test(letter)) {
      placeShip(battleship, 'battleship', letter, num, vertical, DOM);
    }
  }

  const placeCruiser = (coords, vertical, DOM) => {
    const cruiser = ship('cruiser', 3);
    let [letter, num] = coords.split('');
    num = Number(num);
    if(letter < 'i' && /[a-z]/.test(letter)) {
      placeShip(cruiser, 'cruiser', letter, num, vertical, DOM); 
    }
  }

  const placeSubmarine = (coords, vertical, DOM) => {
    const submarine = ship('submarine', 3);
    let [letter, num] = coords.split('');
    num = Number(num);
    if(letter < 'i' && /[a-z]/.test(letter)) {
      placeShip(submarine, 'submarine', letter, num, vertical, DOM); 
    }
  }

  const placeDestroyer = (coords, vertical, DOM) => {
    const destroyer = ship('destroyer', 2);
    let [letter, num] = coords.split('');
    num = Number(num);
    if(letter < 'i' && /[a-z]/.test(letter)) {
      placeShip(destroyer, 'destroyer', letter, num, vertical, DOM);
    }
    if (shipsPlaced === 5) {
      displayStartMatchBtn();
    }
  }

  const receiveAttack = (coords) => {
    if(coordinates[coords]) {
      checkCellContainsShip(coordinates[coords]);
      return true;
    } else {
      coordinates[coords] = 'miss';
      return false;
    }
  }

  const checkCellContainsShip = (coords) => {
    switch (coords) {
      case 'carrier':
        ships[0].hit();
        break;
      case 'battleship':
        ships[1].hit();
        break;
      case 'cruiser':
        ships[2].hit();
        break;
      case 'submarine':
        ships[3].hit();
        break;
      case 'destroyer':
        ships[4].hit();
        break;
    }
  }

  const checkAllShipsSunk = () => {
    let count = ships.reduce((prev, curr) => prev + curr.isSunk(), 0);
    if(count === 5) {
      return true;
    }
  }

  return { coordinates, ships, name, placeCarrier, placeBattleship, placeCruiser, placeSubmarine, placeDestroyer,
    receiveAttack, checkAllShipsSunk, getShipsPlaced };
}

export { gameBoard };