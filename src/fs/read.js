import { stat } from 'fs/promises';
import { createReadStream } from 'fs';
import { resolve } from 'path';

export async function readFile (file) {
  const pathCheck = resolve(file);
  
  try {
    const stats = await stat(pathCheck);
    if (stats.isFile()) {
      const readable = createReadStream(pathCheck, { encoding: 'utf-8' });
      readable.pipe(process.stdout);
    } else if (stats.isDirectory()) {
      console.log(`${pathCheck} is folder!`);
    } else {
      console.log(`${pathCheck} is't file!`);
    }
  } catch (err) {
    console.error('Invalid path!');
  }
}