import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from './src/App';

const port = process.env.PORT_NODE_SERVER;
const app = express();
const pid = process.pid;

// From where serve static content
app.use(express.static(path.resolve(__dirname, "../dist" )));

// Server-side rendering middleware
app.use(handleRender);

// Server-side rendering
app.get('/*', (req, res) => {

  const context = {};

  const appJsx = (
    <App
      Router={StaticRouter}
      location={req.url}
      context={context}
    />
  );

  // render app to static HTML string
  const appHtml = renderToString(appJsx);

  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    return res.send(
      data.replace(
        '<div id="app"></div>',
        `<div id="app">${appHtml}</div>`
      )
    );
  })
});

app.listen(port, () => {
  console.log(`SSR server is running:\nPort       -> ${port}\nProcess ID -> ${pid}\n`);
});

function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(counterApp)

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState) {

}
