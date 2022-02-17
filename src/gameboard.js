const Square = (x, y) => {
  const ShipObj = null;
  const shipSquare = null;
  const isHit = false;
  return { ShipObj, shipSquare, isHit, x, y };
};
const createGameboardSquares = (width, height) => {
  const arr = [];
  let i = 0;
  while ( i < width ) {
    const heightArr = [];
    arr.push(heightArr);
    let j = 0;
    while ( j < height ) {
      heightArr.push(Square(i, j));
      j += 1;
    }
    i += 1;
  }
  return arr;
};

const Gameboard = () => {
  const squares = createGameboardSquares(10, 10);
  const ships = [];

  const placeShip = (Ship, x, y) => {
    ships.push(Ship);

    squares[x][y].ShipObj = Ship;
    const shipSquare = Ship.squares[0];
    squares[x][y].shipSquare = shipSquare;

    let index = 1;
    let squareIndex = x;
    while ( index < Ship.shipLength ) {
      squareIndex += 1;
      squares[squareIndex][y].shipSquare = Ship.squares[index];
      index += 1;
    }
  };

  const recieveAttack = (x, y) => {
    const square = squares[x][y];
    square.isHit = true;

    if(square.ShipObj !== null) {
      const {ShipObj} = square;
      const index = ShipObj.squares.indexOf(square.shipSquare);
      ShipObj.hit(index);
    }
  };

  const checkShip = (ship) => (ship.isSunk);
  const allSunk = () => ships.every(checkShip);

  return { squares, placeShip, recieveAttack, allSunk};
};

export default Gameboard;