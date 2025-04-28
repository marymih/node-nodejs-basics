import { readFile } from 'fs/promises';

const read = async () => {
  try {
    const data = await readFile('src/fs/files/fileToRead.txt', 'utf8');
    console.log(data);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
