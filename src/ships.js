function ship(name, length) {
  let sunk = 0;
  let hits = 0;

  const hit = () => {
    ++hits;
    if(hits === length) {
      ++sunk;
    }
  };

  const showHits = () => hits;

  const isSunk = () => sunk;

  return { name, hit, length, showHits, isSunk };
}

export { ship };