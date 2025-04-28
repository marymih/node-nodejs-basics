const parseArgs = () => {
  // Write your code here
  try {
    const args = process.argv.slice(2);
    const parsedArgs = [];
    for (let i = 0; i < args.length; i += 2) {
      if (i + 1 < args.length) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];
        parsedArgs.push(`${key} is ${value}`);
      }
    }
    console.log(parsedArgs.join(', '));
  } catch (err) {
    throw new Error('CLI operation failed');
  }
};

parseArgs();
