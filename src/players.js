const Player = (enemyGameboard) => {
  const attacks = [];

  const sendAttack = (x, y) => {
    let result;
    const attack = [x, y];
    if( !attacks.includes(attack) ) {
      enemyGameboard.recieveAttack(x, y);
      attacks.push(attack);
      result = 0;
    } 
    if (attacks.includes(attack)) {
      result = 1;
    }
    return result;
  };

  return {enemyGameboard, sendAttack};
};

export const Robot = (enemyGameboard) => {
  const attacks = [];
  const randomNumber = (max) => Math.floor(Math.random() * max);
  const sendAttack = () => {
    let result;
    const x = randomNumber(10);
    const y = randomNumber(10);
    const attack = [x, y];
    if(!attacks.includes(attack)) {
      enemyGameboard.recieveAttack(x, y);
      attacks.push(attack);
      result = 0;
    } 
    if (attacks.includes(attack)) {
      result = 1;
    }
    return result;
  };

  return { enemyGameboard, sendAttack };
};

export default Player;