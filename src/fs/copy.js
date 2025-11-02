import fs from 'fs';
import path, { resolve } from 'path';
import process from 'process';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

export async function copyFile (pathToFile, pathToNewDirectory) {
  try {
    const pathFile = resolve(process.cwd(), pathToFile);
    const pathNewDirectory = resolve(process.cwd(), pathToNewDirectory);
    const fileName = path.basename(pathFile);
    const destinationPath = path.join(pathNewDirectory, fileName);

    if (!fs.existsSync(pathFile)) {
      console.error('Operation failed! Source file does not exist.');
      return;
    }

    if (!fs.existsSync(pathNewDirectory)) {
      console.error('Operation failed! Destination directory does not exist.');
      return;
    }

    if (fs.existsSync(destinationPath)) {
      console.error('Operation failed! File already exists in the destination directory.');
      return;
    }

    const readStream = fs.createReadStream(pathFile);
    const writeStream = fs.createWriteStream(destinationPath);

    await pipelineAsync(readStream, writeStream);

    console.log(`File copied successfully to ${destinationPath}`);
  } catch (err) {
    console.error('Operation failed!', err.message);
  }
  
}