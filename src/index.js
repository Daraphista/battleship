import './css/style.css';
import Ship from "./ships";
import Gameboard from "./gameboard";
import Player, { Robot } from "./players";
import DOM from './DOM';

const createShips = () => {
  const Carrier = Ship(5);
  const Battleship = Ship(4);
  const Cruiser = Ship(3);
  const Submarine = Ship(3);
  const Destroyer = Ship(2);

  return { Carrier, Battleship, Cruiser, Submarine, Destroyer };
};

const ships1 = createShips();
const ships2 = createShips();

const Gameboard1 = Gameboard();

const Gameboard2 = Gameboard();

const Player1 = Player(Gameboard2);
const Player2 = Player(Gameboard1);

DOM.load(Gameboard1, Gameboard2, ships1);

// const gameLoop = () => {
//   const populateGame();
//   const playGame();
//   const displayWinner();
// }