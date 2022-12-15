const player = () => {

  const movesMade = {};

  const makeMove = () => {
    let coords = generateCoordinate();
    while(coords in movesMade){
      coords = generateCoordinate();
    }
    movesMade[coords] = true;
    return coords;
  }

  const generateCoordinate = () => {
    let letter = String.fromCharCode(String(Math.round(Math.random() * (104 - 97) + 97)));
    let num = String(Math.floor(Math.random() * 8) + 1);
    return letter.concat(num);
  }

  return { makeMove, movesMade }
}

export { player };