const express = require('express');
const port = process.env.PORT_NODE_SERVER;
const app = express();
const pid = process.pid;

app.listen(port, () => {
  console.log(`The simplest possible express server is listening!\nPort: ${port}, Pid: ${pid}`);
});
