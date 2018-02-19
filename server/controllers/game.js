const User = require('../models/user');
const Game = require('../models/game');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

exports.saveIntro = (req, res, next) => {
  const {
    faction,
    factionID,
    characterName,
    gender,
    currentScene,
    determination,
    finesse,
    intellect,
    maxHp,
    hp,
    logo,
  } = req.body;
  const playerID = req.user._id;

  // *ONLY CREATING Game (not saved yet)
  const game = new Game({
    playerID,
    faction,
    factionID,
    characterName,
    gender,
    currentScene,
    determination,
    finesse,
    intellect,
    maxHp,
    hp,
    logo,
  });

    // *Now SAVING Game to database
  game.save((err, gameID) => {
    if (err) {
      return next(err);
    }
    User.findOneAndUpdate({ _id: playerID }, { $push: { games: game.id } }, { new: true }, (err, doc) => {
      if (err) {
        return console.log('erreur');
      }
      return console.log(doc);
    });
    // Response--> Request: Send the current Game id
    res.json({ game: gameID.id });
  });
};

exports.saveNewAction = (req, res, next) => {
  Game.findOneAndUpdate({ _id: req.body.game }, { currentScene: req.body.currentScene }, { new: true }, (err, doc) => {
    if (err) {
      return res.send(500, { error: err });
    }
    return res.send(doc);
  });
};


exports.loadGames = (req, res) => {
  User.findOne({ _id: req.user.id })
    .populate('Game')
    .exec((error, user) => user)
    .then((user) => {
      const promises = user.games.map(gameId => Game.findOne({ _id: gameId }));

      return Promise.all(promises);
    })
    .then(data => res.json({ games: data }));
};

exports.checkLastGame = (req, res) => {
  Game.findOne({ playerID: req.user.id })
    .sort({ date: -1 })
    .exec((error, game) => game)
    .then((game) => {
      res.json(game.id);
    })
    .catch(err => res.send(err));
};

exports.loadPreviousGame = (req, res) => {
  Game.findOne({ _id: req.body.game })
    .exec((error, game) => game)
    .then((data) => {
      res.json(data);
    })
    .catch(err => res.send(err));
};
