import { createReadStream } from 'fs';

const read = async () => {
  const filePath = 'src/streams/files/fileToRead.txt';
  const readStream = createReadStream(filePath, { encoding: 'utf8' });

  readStream.on('readable', () => {
    const data = readStream.read();
    if (data) {
      process.stdout.write(data);
      process.stdout.write('\n');
    }
  });

  readStream.on('error', () => {
    throw new Error('Stream operation failed');
  });
};

await read();
