import { Transform } from 'stream';

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      const dataTransformed = data.toString().split('').reverse().join('');
      callback(null, dataTransformed);
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
