const shipSquare = () => {
  const isHit = false;
  const isShipSquare = true;
  return { isHit, isShipSquare };
};

const createSquares = (length) => {
  let i = length;
  const squares = [];
    while (i > 0) {
      squares.push(shipSquare());
      i -= 1;
    }
    return squares;
};

const Ship = (length) => {
  const squares = createSquares(length);

  const shipLength = squares.length;

  const hit = (squareNumber) => {
    const square = squares[squareNumber];
    square.isHit = true;
    return 0;
  };

  const isSunk = () => squares.every(square => square.isHit === true);

return { shipLength, squares, hit, isSunk };
};

export default Ship;
