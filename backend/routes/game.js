const router = require('express').Router();

const Game = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const games = await Game.find();
    return res.json(games);
  } catch (err) {
    return next(err);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const newGame = await Game.create(req.body);
    return res.status(201).json(newGame);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
