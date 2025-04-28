import { readdir } from 'fs/promises';

const list = async () => {
  // Write your code here
  const path = 'src/fs/files';
  try {
    const files = await readdir(path);
    console.log(files);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
