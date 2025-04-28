import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const calculateHash = async () => {
  // Write your code here
  const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
  const readStream = createReadStream(filePath, { encoding: 'utf-8' });
  const hash = createHash('sha256');

  try {
    await pipeline(readStream, hash);
    console.log(hash.digest('hex'));
  } catch (err) {
    throw new Error('Hash calculation failed');
  }
};

await calculateHash();
