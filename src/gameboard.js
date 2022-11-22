import { ship } from "./ships";

function gameBoard() {
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

  const placeCarrier = (coords, vertical) => {
    const carrier = ship(5);
    const [letter, num] = coords.split('');

    if(vertical === false) {
      if((Number(num) + carrier.length) < 10) {
        for(let i = num; i < num + carrier.length; i++) {
          coordinates[letter + i] = 'carrier';
        }
        ships.push(carrier);
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + carrier.length < 105) {
        let letterCharCode = letter.charCodeAt();
        for(let i = letterCharCode; i < letterCharCode + carrier.length; i++) {
          let coordLetter = String.fromCharCode(i);
          coordinates[coordLetter + num] = 'carrier';
        }
        ships.push(carrier);
      }
    }
  }
  
  const placeBattleship = (coords, vertical) => {
    const battleship = ship(4);
    const [letter, num] = coords.split('');

    if(vertical === false) {
      if((Number(num) + battleship.length) < 10) {
        for(let i = num; i < num + battleship.length; i++) {
          coordinates[letter + i] = 'battleship';
        }
        ships.push(battleship);
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + battleship.length < 105) {
        let letterCharCode = letter.charCodeAt();
        for(let i = letterCharCode; i < letterCharCode + battleship.length; i++) {
          let coordLetter = String.fromCharCode(i);
          coordinates[coordLetter + num] = 'battleship';
        }
        ships.push(battleship);
      }
    }
  }

  const placeCruiser = (coords, vertical) => {
    const cruiser = ship(3);
    const [letter, num] = coords.split('');

    if(vertical === false) {
      if((Number(num) + cruiser.length) < 10) {
        for(let i = num; i < num + cruiser.length; i++) {
          coordinates[letter + i] = 'cruiser';
        }
        ships.push(cruiser);
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + cruiser.length < 105) {
        let letterCharCode = letter.charCodeAt();
        for(let i = letterCharCode; i < letterCharCode + cruiser.length; i++) {
          let coordLetter = String.fromCharCode(i);
          coordinates[coordLetter + num] = 'cruiser';
        }
        ships.push(cruiser);
      }
    }
  }

  const placeSubmarine = (coords, vertical) => {
    const submarine = ship(3);
    const [letter, num] = coords.split('');

    if(vertical === false) {
      if((Number(num) + submarine.length) < 10) {
        for(let i = num; i < num + submarine.length; i++) {
          coordinates[letter + i] = 'submarine';
        }
        ships.push(submarine);
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + submarine.length < 105) {
        let letterCharCode = letter.charCodeAt();
        for(let i = letterCharCode; i < letterCharCode + submarine.length; i++) {
          let coordLetter = String.fromCharCode(i);
          coordinates[coordLetter + num] = 'submarine';
        }
        ships.push(submarine);
      }
    }
  }

  const placeDestroyer = (coords, vertical) => {
    const destroyer = ship(2);
    const [letter, num] = coords.split('');

    if(vertical === false) {
      if((Number(num) + destroyer.length) < 10) {
        for(let i = num; i < num + destroyer.length; i++) {
          coordinates[letter + i] = 'destroyer';
        }
        ships.push(destroyer);
      }
    } else if(vertical === true) {
      if(letter.charCodeAt() + destroyer.length < 105) {
        let letterCharCode = letter.charCodeAt();
        for(let i = letterCharCode; i < letterCharCode + destroyer.length; i++) {
          let coordLetter = String.fromCharCode(i);
          coordinates[coordLetter + num] = 'destroyer';
        }
        ships.push(destroyer);
      }
    }
  }

  const receiveAttack = (coords) => {
    if(coordinates[coords]) {
      checkCellContainsShip(coordinates[coords]);
    } else {
      coordinates[coords] = 'miss';
    }

    return checkAllShipsSunk();
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

  return { coordinates, placeCarrier, placeBattleship, placeCruiser, placeSubmarine, placeDestroyer,
    receiveAttack, ships };
}

export { gameBoard };