import Gameboard from "../src/gameboard";
import Ship from "../src/ships";

describe('Gameboard', () => {
  const FakeShip = Ship(1);
  const GameboardExample = Gameboard();
  
  test('Gameboard is 10 x 10', () => {
    expect(GameboardExample.squares).toHaveLength(10);
    GameboardExample.squares.forEach(arr => {
      expect(arr).toHaveLength(10);
    });
  });

  describe('placeShip', () => {
    test('Gameboard can place ships at 0, 0', () => {
      GameboardExample.placeShip(FakeShip, 0, 0);
      // true if filled
      expect(GameboardExample.squares[0][0]).not.toBe(null); 
    });
    
    test('Gameboard can place ships at 9, 9', () => {
      GameboardExample.placeShip(FakeShip, 9, 9);
      expect(GameboardExample.squares[9][9]).not.toBe(null);
    });

    test('places the all squares of the ship', () => {
      const Bigship = Ship(3);
      GameboardExample.placeShip(Bigship, 0, 0);
      expect(GameboardExample.squares[0][0].shipSquare).toBe(Bigship.squares[0]);
      expect(GameboardExample.squares[1][0].shipSquare).toBe(Bigship.squares[1]);
      expect(GameboardExample.squares[2][0].shipSquare).toBe(Bigship.squares[2]);    
    });

    test('all squares of ship works with other locations', () => {
      const Bigship = Ship(4);
      GameboardExample.placeShip(Bigship, 3, 2);
      expect(GameboardExample.squares[3][2].shipSquare).toBe(Bigship.squares[0]);
      expect(GameboardExample.squares[4][2].shipSquare).toBe(Bigship.squares[1]);
      expect(GameboardExample.squares[5][2].shipSquare).toBe(Bigship.squares[2]);
      expect(GameboardExample.squares[6][2].shipSquare).toBe(Bigship.squares[3]);
    });

    test('records all ships placed on the board', () => {
      const Carrier = Ship(5);
      const Battleship = Ship(5);
      const Cruiser = Ship(3);

      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(Carrier, 0, 0);
      GameboardExample1.placeShip(Battleship, 0, 2);
      GameboardExample1.placeShip(Cruiser, 0, 4);

      const ships = [Carrier, Battleship, Cruiser];

      expect(GameboardExample1.ships).toEqual(ships);
    });

    test('moves ship if already placed', () => {
      const miniShip = Ship(1);

      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(miniShip, 0, 0);
      expect(GameboardExample1.squares[0][0].ShipObj).toBe(miniShip);
      GameboardExample1.placeShip(miniShip, 0, 2);
      expect(GameboardExample1.squares[0][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[0][2].ShipObj).toBe(miniShip);
      expect(GameboardExample1.ships).toEqual([miniShip]);
    });

    test('can rotate ship', () => {
      const mediumShip = Ship(3);
      const GameboardExample1 = Gameboard();

      GameboardExample1.placeShip(mediumShip, 0, 0);
      GameboardExample1.rotateShip(mediumShip);
      
      expect(GameboardExample1.squares[0][0].shipSquare).toBe(mediumShip.squares[0]);
      expect(GameboardExample1.squares[0][1].shipSquare).toBe(mediumShip.squares[1]);
      expect(GameboardExample1.squares[0][2].shipSquare).toBe(mediumShip.squares[2]);
    });
    
    test('can rotate ship twice', () => {
      const mediumShip = Ship(3);
      const GameboardExample1 = Gameboard();
      
      GameboardExample1.placeShip(mediumShip, 0, 0);
      GameboardExample1.rotateShip(mediumShip);
      GameboardExample1.rotateShip(mediumShip);
      
      expect(GameboardExample1.squares[0][0].shipSquare).toBe(mediumShip.squares[0]);
      expect(GameboardExample1.squares[1][0].shipSquare).toBe(mediumShip.squares[1]);
      expect(GameboardExample1.squares[2][0].shipSquare).toBe(mediumShip.squares[2]);
    });
  });

  describe('recieveAttack', () => {
    test('Can record recieved attack', () => {
      GameboardExample.recieveAttack(0, 0);  
      expect(GameboardExample.squares[0][0].isHit).toBeTruthy();  
    });
  
    test('If attack hits ship, calls ship.hit()', () => {
      const ShipExample = Ship(1);
      GameboardExample.placeShip(ShipExample, 0, 0);
      GameboardExample.recieveAttack(0, 0);
      expect(ShipExample.hit(0)).toBe(0);
    });

    test('If attack hits ship, record ship square that was hit', () => {
      const smallShip = Ship(1);
      GameboardExample.placeShip(smallShip, 0, 0);
      GameboardExample.recieveAttack(0, 0);
      expect(smallShip.squares[0].isHit).toBeTruthy();
    });

    test('Reports if all ships are sunk', () => {
      const smallShip1 = Ship(1);
      const smallShip2 = Ship(1);
      const mediumShip = Ship(2);
      
      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(smallShip1, 0, 0);
      GameboardExample1.placeShip(smallShip2, 0, 2);
      GameboardExample1.placeShip(mediumShip, 0, 4);

      GameboardExample1.recieveAttack(0, 0);
      GameboardExample1.recieveAttack(0, 2);
      GameboardExample1.recieveAttack(0, 4);
      GameboardExample1.recieveAttack(1, 4);

      expect(GameboardExample1.allSunk).toBeTruthy();
    });

    test('Does not return true if ships are not sunk', () => {
      const smallShip1 = Ship(1);
      const smallShip2 = Ship(1);
      const mediumShip = Ship(2);

      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(smallShip1, 0, 0);
      GameboardExample1.placeShip(smallShip2, 0, 2);
      GameboardExample1.placeShip(mediumShip, 0, 4);

      GameboardExample1.recieveAttack(0, 0);
      GameboardExample1.recieveAttack(0, 2);
      GameboardExample1.recieveAttack(0, 4);

      expect(GameboardExample1.allSunk()).toBeFalsy();
    });
  });

  describe('removeShip', () => { // if tests break, delete them
    test('can remove a 1 block ship', () => {
      const miniShip = Ship(1);

      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(miniShip, 0, 0);
      
      GameboardExample1.removeShip(0, 0, miniShip);
      expect(GameboardExample1.squares[0][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[0][0].shipSquare).toBe(null);
      expect(GameboardExample1.ships).toEqual([]);
    });

    test('can remove bigger ships', () => {
      const bigShip = Ship(4);

      const GameboardExample1 = Gameboard();
      GameboardExample1.placeShip(bigShip, 0, 0);

      GameboardExample1.removeShip(0, 0);
      expect(GameboardExample1.squares[0][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[0][0].shipSquare).toBe(null);
      expect(GameboardExample1.squares[1][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[1][0].shipSquare).toBe(null);
      expect(GameboardExample1.squares[2][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[2][0].shipSquare).toBe(null);
      expect(GameboardExample1.squares[3][0].ShipObj).toBe(null);
      expect(GameboardExample1.squares[3][0].shipSquare).toBe(null);
    });
  });
});
