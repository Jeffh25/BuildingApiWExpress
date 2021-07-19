// require express to run server/send data
// similar to imports in react
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const app = express();

app.use(cors());
//parsing incoming request to json
app.use(express.json());

// since server.js is entry point, this tells the computer
// that we want to use functionality in the 'index.js' of the routes
// folder when user goes to localhost:3000/api

app.use('/api', apiRouter);

app.listen(3000);