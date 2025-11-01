import * as fs from 'fs/promises';
import { resolve } from 'path';
import process from 'process';

export async function deleteFile (file) {
  const pathToFile = resolve(process.cwd(), file);

  try {
      await fs.unlink(pathToFile);
      console.log('File successfully deleted!');
  } catch(err) {
    if (err.code === 'ENOENT') {
      console.log('FS operation failed!');
    } else {
      console.error('Unexpected error:', err.message);
    }
  }
}