import fs from "fs";
import path, { resolve } from "path";
import process from "process";
import { createBrotliCompress } from "zlib";
import { pipeline } from "stream/promises";

export async function compressFile(pathToFile, pathToCompressFile) {
  try {
    const pathFile = resolve(process.cwd(), pathToFile);
    const pathCompressFile = resolve(process.cwd(), pathToCompressFile);
    const fileName = path.basename(pathFile);
    const destinationPath = path.join(pathCompressFile, `${fileName}.br`);

    const readable = fs.createReadStream(pathFile);
    const writable = fs.createWriteStream(destinationPath);
    const brotli = createBrotliCompress();

    await pipeline(readable, brotli, writable);
    console.log("File successfully compressed!");
  } catch (err) {
    console.error("Compression failed!", err.message);
  }
}
