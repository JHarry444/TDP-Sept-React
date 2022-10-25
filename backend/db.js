const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tdp_db', { useNewUrlParser: true });

const gameSchema = new mongoose.Schema({
  title: String,
  platform: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
