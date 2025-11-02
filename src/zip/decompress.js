import fs from 'fs';
import path, { resolve } from 'path';
import process from 'process';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';

export async function decompressFile (pathToFile, pathToDecompressFile) {
  try {
    const pathFile = resolve(process.cwd(), pathToFile);
    const pathCompressFile = resolve(process.cwd(), pathToDecompressFile);
    const originalFileName = path.basename(pathFile, '.br');
    const destinationPath = path.join(pathCompressFile, originalFileName);

    const readable = fs.createReadStream(pathFile);
    const writable = fs.createWriteStream(destinationPath);
    const brotli = createBrotliDecompress();

    await pipeline(readable, brotli, writable);
    console.log('File successfully decompressed!');
  } catch (err) {
    console.error('Compression failed!', err.message);
  }
}