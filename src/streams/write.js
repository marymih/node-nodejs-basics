import { createWriteStream } from 'fs';

const write = async () => {
  const filePath = 'src/streams/files/fileToWrite.txt';
  const writeStream = createWriteStream(filePath, { encoding: 'utf8' });

  process.stdin.pipe(writeStream);

  writeStream.on('error', () => {
    throw new Error('Stream operation failed');
  });
};

await write();
