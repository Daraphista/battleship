const DOM = (() => {
  const loadGameBoard = (gameboard, elementSelector) => {
    const gameboardContainer = document.querySelector(elementSelector);
    gameboard.squares.forEach(arr => {
      const row = document.createElement('tr');
      gameboardContainer.appendChild(row);
      arr.forEach(squareObj => {
        const square = document.createElement('th');
        row.appendChild(square);
        square.classList.add('square');
        square.squareObj = squareObj;
        square.dataset.x = squareObj.x;
        square.dataset.y = squareObj.y;
        square.gameboardObj = gameboard;
      });
    });
  };
  const displayShipsOnGameboard = (squares) => {
    squares.forEach(square => {
      if (square.squareObj.shipSquare !== null) {
        square.classList.add('filled');
      }
    });
  };
  const clickAttacks = () => {
    const squares = Array.from(document.querySelectorAll('.gameboard .square'));
    squares.forEach(square => square.addEventListener('click', () => {
      const {x} = square.dataset;
      const {y} = square.dataset;
      square.gameboardObj.recieveAttack(x, y);
      square.classList.add('hit');
    }));
  };
  const displayShips = (ships, elementSelector) => {
    const container = document.querySelector(elementSelector);
    Object.keys(ships).forEach(key => {
      const table = document.createElement('table');
      container.appendChild(table);
      table.classList.add('ship');
      table.dataset.length = ships[key].shipLength;
      table.id = key.toLowerCase();
      table.shipObj = ships[key];
      
      ships[key].squares.forEach(() => {
        const shipRow = document.createElement('tr');
        table.appendChild(shipRow);
        const shipSquare = document.createElement('th');
        shipRow.appendChild(shipSquare);
        shipSquare.classList.add('square');
      });
    });
  };
  const shipFits = (shipLength, shipPosition) => (shipLength - 1) + shipPosition <= 9;
  const noShipNearby = (ship, x, y) => {
    const adjacentSquares = [];
    
    const shipLength = Number(ship.dataset.length);
    let index = -1;
    while (index <= shipLength) {
      adjacentSquares.push(document.querySelector(`[data-x="${x + index}"][data-y="${y - 1}"]`));
      if(index === -1 || index === shipLength) {
        adjacentSquares.push(document.querySelector(`[data-x="${x + index}"][data-y="${y}"]`));
      }
      adjacentSquares.push(document.querySelector(`[data-x="${x + index}"][data-y="${y + 1}"]`));
      index += 1;
    }

    return adjacentSquares.every(adjacentSquare => {
      let result;
      if(adjacentSquare === null) {
        result = true;
      } else if(adjacentSquare !== null) {
        result = !adjacentSquare.classList.contains('filled');
      }
      return result;
    });
  };
  const handleDragAndDrop = (parentSelector) => {
    const shipElements = Array.from(document.querySelectorAll('.ship'));
    const squareElements = Array.from(document.querySelectorAll('.gameboard .square'));
    shipElements.forEach(shipElement => {
      shipElement.draggable = 'true';
      shipElement.addEventListener('dragstart', e => {
        const selector = `${parentSelector} #${shipElement.id}`;
        e.dataTransfer.setData('text', selector);
        e.currentTarget.style.opacity = '0.4';
      });
      shipElement.addEventListener('dragend', e => {
        e.currentTarget.style.opacity = '1';
      });
    });

    squareElements.forEach(squareElement => {
      squareElement.addEventListener('dragover', e => {
        e.target.classList.add('drag-over');
        e.preventDefault();
      });
      squareElement.addEventListener('dragleave', e => {
        e.target.classList.remove('drag-over');
      });
      squareElement.addEventListener('drop', e => {
        e.target.classList.remove('drag-over');
        e.preventDefault();

        const selector = e.dataTransfer.getData('text');
        const ship = document.querySelector(selector);
        const {gameboardObj} = squareElement;
        const x = Number(squareElement.dataset.x);
        const y = Number(squareElement.dataset.y);
        
        const shipLength = Number(ship.dataset.length);
        const shipPosition = Number(squareElement.dataset.x);
        
        if (shipFits(shipLength, shipPosition) 
        && noShipNearby(ship, x, y) 
        // && !ship.classList.contains('horizontal')
        ) { // vertically
          e.target.appendChild(ship);
          ship.classList.add('placed');
          const {shipObj} = ship;
          gameboardObj.placeShip(shipObj, x, y);
        }        
        
      });
    });
  };
  const handleShipRotations = (gameboardObj) => {
    const shipElements = Array.from(document.querySelectorAll('.ship'));
    shipElements.forEach(shipElement => {
      shipElement.addEventListener('click', () => {
        const {shipObj} = shipElement;
        const shipLength = Number(shipObj.shipLength);
        const shipPosition = Number(shipElement.parentElement.dataset.y);

        if(shipFits(shipLength, shipPosition)) {
          shipElement.classList.toggle('horizontal');
          gameboardObj.rotateShip(shipObj);
        }
        
        console.log(gameboardObj.squares);
      });
    });
  };
  const load = (GameboardObj1, GameboardObj2, ships1, ships2) => {
    loadGameBoard(GameboardObj1, '.gameboard.player1');
    loadGameBoard(GameboardObj2, '.gameboard.player2');

    displayShips(ships1, '.ships.player1');
    handleDragAndDrop('.player1');
    handleShipRotations(GameboardObj1);

    // clickAttacks();
  };

  return { load };
})();

export default DOM;