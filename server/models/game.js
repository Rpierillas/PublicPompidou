const mongoose = require('mongoose');
// Schema is used to tell Mongoose what fields will exist
const { Schema } = mongoose;

// Defining ('Game') MODEL
const gameSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  playerID: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  factionID: Number,
  characterName: String,
  currentScene: Number,
  gender: String,
  determination: Number,
  finesse: Number,
  intellect: Number,
  maxHp: Number,
  hp: Number,
  logo: String,
});


// Creating ('Game') MODEL CLASS - Is a "class" of users
const GameModelClass = mongoose.model('game', gameSchema);

// Exporting ('Game') MODEL
module.exports = GameModelClass;
