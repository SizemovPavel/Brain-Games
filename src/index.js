import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain-games!');
  const printName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${printName}!`);
};

export default userName;
