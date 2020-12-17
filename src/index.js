import readlineSync from 'readline-sync';

console.log('\nWelcome to the Brain-games!');
console.log('Answer"yes" if number even oterwise answer "no"\n');
const printName = readlineSync.question('May I have your name? ');
export const userName = () => {
  console.log(`Hello, ${printName}!\n`);
};
const getRandomNumber = () => {
  const num = Math.floor(Math.random() * 101);
  console.log(`Quastion: ${num}`);
  return num;
};
const getCheckNumber = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const brainEven = () => {
  let step = 1;
  const steps = 3;
  for (step; step <= steps; step += 1) {
    const checkNumber = getCheckNumber(getRandomNumber());
    const answerUser = readlineSync.question('Your answer: ');
    if (checkNumber === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${checkNumber}'. Let's try again, ${printName}!`);
      return;
    }
  }
  console.log(`Congratulation, ${printName}!`);
};
