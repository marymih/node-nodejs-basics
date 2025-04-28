import { writeFile } from 'fs/promises';

const create = async () => {
  // Write your code here
  const content = 'I am fresh and young';
  const fileName = 'fresh.txt';

  try {
    await writeFile(`src/fs/files/${fileName}`, content, { flag: 'wx' });
    console.log(`File ${fileName} created successfully`);
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error(`FS operation failed`);
    } else {
      throw err;
    }
  }
};

await create();
