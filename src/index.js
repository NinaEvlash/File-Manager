import readline from 'readline';
import { goUP, goToDir } from './nwd/navigation.js';
import { listDir } from './nwd/list.js';
import {  readFile } from './fs/read.js';

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
let username = 'Anonymous';
if (usernameArg) {
  username = usernameArg.split('=')[1];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'fm> ',
});

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${process.cwd()}`);
rl.prompt();


rl.on('line', async (line) => {
  const consoleText = line.trim();
  try {
    if (consoleText === '.exit') {
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit(0);
    } else if (consoleText === 'up') {
      goUP();
    } else if (consoleText.startsWith('cd ')) {
      const pathTo = consoleText.slice(3).trim();
      goToDir(pathTo);
    } else if (consoleText.startsWith('ls')) {
      listDir();
    } else if (consoleText.startsWith('cat ')) {
      const nameFile = consoleText.slice(4).trim();
      await readFile(nameFile);
    } else {
      console.log(`Invalid input!`);
    }
  } catch (err) {
    console.log('Operation failed!');
    console.log(err.message);
  }

  console.log(`You are currently in ${process.cwd()}`);
  rl.prompt();
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});

