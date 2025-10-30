import readline from 'readline';
//import os from 'os';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
let username = 'Anonymous';
if (usernameArg) {
  username = usernameArg.split('=')[1];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  promt: 'fm> ',
});

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${process.cwd()}`);
rl.prompt();


rl.on('line', (line) => {
  const consoleText = line.trim();
  try {
    if (consoleText === '.exit') {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit(0);
    } else {
      console.log(`Invalid input!`);
    }
  } catch {
    console.log('Operation failed!');
  }

  console.log(`You are currently in ${process.cwd()}`);
  rl.prompt();
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

