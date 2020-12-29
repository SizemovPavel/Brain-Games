import readlineSync from 'readline-sync';
import calc from './games/game-calc';
import even from './games/game-even';
import gcd from './games/game-gcd';
import prime from './games/game-prime';
import progression from './games/game-progression';

const runMenu = () => {
  console.log('-brain-calc \n-brain-even \n-brain-gcd \n-brain-prime \n-brain-progression');
  const choisUser = readlineSync.question('What game do you want to play?  ');

  switch (choisUser) {
    case 'brain-calc':
      calc();
      break;
    case 'brain-even':
      even();
      break;
    case 'brain-gcd':
      gcd();
      break;
    case 'brain-prime':
      prime();
      break;
    case 'brain-progression':
      progression();
      break;
    default:
      console.log('What game do you want to play');
      runMenu();
      break;
  }
};
export default runMenu;
