import runGame from '..';
import getRandomInt from '../utilities';

const rules = () => 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElement = getRandomInt(1, 50);
  const arr = [firstElement];
  const steps = 9;
  let step = 1;
  for (step; step <= steps; step += 1) {
    arr[step] = arr[step - 1] + 3;
  }
  const getRadnomElement = getRandomInt(2, 9);
  const correctAnswer = arr[getRadnomElement];
  arr.splice(getRadnomElement, 1, '..');
  const question = `${arr}`;
  return [question, correctAnswer];
};

export default () => runGame(rules, getQuestionAndAnswer);
