import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { pipeline } from 'stream/promises';
import { resolve } from 'path';
import process from 'process';

export async function calculateHash (file) {
  const filePath = resolve(process.cwd(), file);;
  const hash = createHash('sha256');

  try {
    await pipeline(
      createReadStream(filePath),
      hash
    );
    const result = hash.digest('hex');
    console.log('SHA256 hash:', result);
  } catch (err) {
    console.error('Error while calculating hash:', err);
  }
}