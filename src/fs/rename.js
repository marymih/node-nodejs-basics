import { rename as renameFile, access } from 'fs/promises';
import { constants } from 'fs';

const rename = async () => {
  // Write your code here
  const fileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const filePath = `src/fs/files/${fileName}`;
  const newFilePath = `src/fs/files/${newFileName}`;

  try {
    await access(filePath, constants.F_OK);
  } catch (err) {
    throw new Error('FS operation failed');
  }

  try {
    await access(newFilePath, constants.F_OK);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }
  await renameFile(filePath, newFilePath);
  console.log('File renamed successfully');
};

await rename();
