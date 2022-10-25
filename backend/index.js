const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const gameRoutes = require('./routes/game');

app.use('/game', gameRoutes);

const server = app.listen(5_000, () => {
  console.log(`Server started on port ${server.address().port}`);
});

module.exports = server;
