import { unlink } from 'fs/promises';

const remove = async () => {
  // Write your code here
  try {
    await unlink('src/fs/files/fileToRemove.txt');
    console.log('File removed successfully');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
