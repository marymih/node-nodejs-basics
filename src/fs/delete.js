import { unlink } from 'fs/promises';

const remove = async () => {
  try {
    await unlink('src/fs/files/fileToRemove.txt');
    console.log('File removed successfully');
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await remove();
