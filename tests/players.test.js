import Player, { Robot } from '../src/players';
import Gameboard from '../src/gameboard';

describe('Players', () => {

  const GameboardExample = Gameboard();
  const PlayerExample = Player(GameboardExample);

  test('Gets assigned to enemy gameboard', () => {
    expect(PlayerExample.enemyGameboard).toBe(GameboardExample);
  });
  test('Can make attack move on enemy gameboard', () => {
    PlayerExample.sendAttack(0, 0);
    expect(GameboardExample.squares[0][0].isHit).toBeTruthy();
  });
  test('Cannot send 2 attacks on the same coords', () => {
    const PlayerExample2 = Player(GameboardExample);
    PlayerExample2.sendAttack(0, 0);
    const illegalMove = PlayerExample2.sendAttack(0, 0);
    expect(illegalMove).toBe(1);
  });
  
  describe('Human', () => {

  });

  describe('Robot', () => {  
    test('Cannot send 2 attacks on the same coords', () => {
      const PlayerExample2 = Robot(GameboardExample);
      PlayerExample2.sendAttack(0, 0);
      const illegalMove = PlayerExample2.sendAttack(0, 0);
      expect(illegalMove).toBe(1);
    });
  });

});