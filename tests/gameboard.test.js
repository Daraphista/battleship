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
      expect(GameboardExample.squares[2][3].shipSquare).toBe(Bigship.squares[0]);
      expect(GameboardExample.squares[2][4].shipSquare).toBe(Bigship.squares[1]);
      expect(GameboardExample.squares[2][5].shipSquare).toBe(Bigship.squares[2]);
      expect(GameboardExample.squares[2][6].shipSquare).toBe(Bigship.squares[3]);
    });

    test('records which ship placed in each square', () => {
      // const Bigship = Ship(4);
      const smallShip = Ship(1);

      // GameboardExample.placeShip(Bigship, 0, 0);
      GameboardExample.placeShip(smallShip, 5, 5);

      // expect(GameboardExample.squares[0][0].Ship).toBe(Bigship);
      expect(GameboardExample.squares[5][5].ShipObj).toBe(smallShip);
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
      GameboardExample.placeShip(Ship(1), 0, 0);
      GameboardExample.placeShip(Ship(1), 5, 5);
      GameboardExample.placeShip(Ship(2), 8, 9);

      GameboardExample.recieveAttack(0, 0);
      GameboardExample.recieveAttack(5, 5);
      GameboardExample.recieveAttack(8, 9);
      GameboardExample.recieveAttack(9, 9);

      expect(GameboardExample.allSunk()).toBeTruthy();
    });
  });
});
