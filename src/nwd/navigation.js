import path from 'path';
import { chdir, cwd } from 'process';

export function goUP(rootDir) {
  const currentDir = process.cwd();
  const parentDir = path.dirname(currentDir);

  try {
    if (currentDir === rootDir || currentDir === parentDir) {
      console.log('You are in the root directory!');
    } else {
      chdir(parentDir);
    }
  } catch {
    console.log('Operation failed!');
  }
}