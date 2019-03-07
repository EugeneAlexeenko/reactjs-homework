const express = require('express');
const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`The simplest possible express server is listening on ${port}!`);
});
