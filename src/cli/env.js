const parseEnv = () => {
  try {
    const parsedEnv = Object.entries(process.env)
      .filter(([key]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`)
      .join(`; `);
    console.log(parsedEnv);
  } catch (err) {
    throw new Error('CLI operation failed');
  }
};

parseEnv();
