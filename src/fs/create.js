import * as fs from 'fs/promises';
import { resolve } from 'path';
import process from 'process';

export async function createFile (file) {
  const filePath = resolve(process.cwd(), file);
  try {
    await fs.access(filePath);
    console.log(`The file "${file}" already exists in ${process.cwd()}`);
  } catch(err) {
     if (err.code === 'ENOENT') {
      await fs.writeFile(filePath, '');
      console.log(`The file "${file}" has been created successfully!`);
    } else {
      console.log('Unexpected error:', err);
    }
  }

}