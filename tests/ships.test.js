import Ship from '../src/ships';

test('Ship sets proper length', () => {
  expect(Ship(4).shipLength).toBe(4);
});

test('Hit function works', () => {
  const midShip = Ship(3); 
  midShip.hit(1);
  expect(midShip.squares[1].isHit).toBeTruthy();
});

test('Ship is sunk if all squares are hit', () => {
  const bigShip = Ship(4);
  bigShip.hit(0);
  bigShip.hit(1);
  bigShip.hit(2);
  bigShip.hit(3);
  expect(bigShip.isSunk()).toBeTruthy();
});