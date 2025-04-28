import { cp, access } from 'fs/promises';
import { constants } from 'fs';

const copy = async () => {
  // Write your code here
  const source = 'src/fs/files';
  const destination = 'src/fs/files_copy';

  try {
    await access(source, constants.F_OK);
  } catch (err) {
    throw new Error(`FS operation failed`);
  }

  try {
    await access(destination, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  await cp(source, destination, { recursive: true });
  console.log(`Files copied successfully from ${source} to ${destination}`);
};

await copy();
