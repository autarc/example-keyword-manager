/**
 * # Serve App
 *
 *
 */

const { createServer } = require('http');
const next = require('next');
// eslint-disable-next-line node/no-unpublished-require
const open = require('open');

const port = Number.parseInt(process.env.PORT || '10000', 10);

const app = next({
  dev: process.env.NODE_ENV === 'development',
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(handle).listen(port, (error) => {
    if (error) {
      throw error;
    }

    const localUrl = `http://localhost:${port}`;

    console.log(`\nReady on ${localUrl}\n`);

    open(localUrl);
  });
});
