import { Chalk } from 'chalk';
const chalk = new Chalk({ level: 1 });

import { createServer } from 'cors-anywhere';
import { HOST, CORS_PROXY_PORT, PROTOCOL } from './app';

const host = HOST;
const port = CORS_PROXY_PORT;

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
}).listen(port, host, () => {
  const proxyUrl = `${PROTOCOL}${host}:${port}/`;

  const title = chalk.green(`CORS Anywhere`);
  const url = chalk.cyan(proxyUrl);

  console.log(`\n👷🏻 Running 🌐 ${title} on 🔌 ${url}\n`);
});
