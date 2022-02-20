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

  const removeShip = (x, y, Ship) => {
    const {ShipObj} = squares[x][y];
    const {shipLength} = ShipObj;
    ships.splice(ships.indexOf(Ship), 1);

    const squareIndex = x;
    let index = 1;
    while (index <= shipLength) {
      if(ShipObj.rotation === 'vertical') {
        squares[squareIndex + index][y].shipSquare = null;
        squares[squareIndex + index][y].ShipObj = null;
      } else if(ShipObj.rotation === 'horizontal') {
        squares[x][squareIndex + index].shipSquare = null;
        squares[x][squareIndex + index].ShipObj = null;
      }
      index += 1;
    }
    
    squares[x][y].shipSquare = null;
    squares[x][y].ShipObj = null;
  };

  const placeShip = (Ship, x, y) => {
    squares[x][y].ShipObj = Ship;
    const shipSquare = Ship.squares[0];
    squares[x][y].shipSquare = shipSquare;
    
    let index = 1;
    let squareIndex = x;
    while ( index < Ship.shipLength ) {
      squareIndex += 1;
      squares[squareIndex][y].shipSquare = Ship.squares[index];
      squares[squareIndex][y].ShipObj = Ship;
      index += 1;
    }

    if(ships.includes(Ship)) {
      // removeShip(Ship.x, Ship.y, Ship);
    }

    const locationState = {x, y};
    const rotationState = {rotation: 'vertical'};
    ships.push(Object.assign(Ship, locationState, rotationState));
  };

  const rotateShip = (Ship) => {
    const {x} = Ship;
    const {y} = Ship;

    removeShip(x, y, Ship);

    
    if(Ship.rotation === 'vertical') {
      squares[x][y].shipSquare = Ship.squares[0];
      squares[x][y].ShipObj = Ship;
  
      let index = 1;
      while (index <= Ship.shipLength) {
        squares[x][y + index].shipSquare = Ship.squares[index];
        squares[x][y + index].ShipObj = Ship;
        index += 1;
      }

      const locationState = {x, y};
      const rotationState = {rotation: 'horizontal'};
      ships.push(Object.assign(Ship, locationState, rotationState));
    } else if(Ship.rotation === 'horizontal') {
      placeShip(Ship, x, y);
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

  const allSunk = () => ships.every(ship => ship.isSunk() === true);

  return { squares, ships, placeShip, removeShip, rotateShip, recieveAttack, allSunk};
};

export default Gameboard;
