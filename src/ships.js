function ship(length) {
  let sunk = false;
  let hits = 0;

  const hit = () => {
    ++hits;
    if(hits === length) {
      sunk = true;
    }
  };

  const showHits = () => hits;

  const isSunk = () => {
    return sunk;
  }
  
  return { hit, length, showHits, isSunk };
}



export { ship };