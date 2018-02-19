const mongoose = require('mongoose');
// Schema is used to tell Mongoose what fields will exist
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

// Defining ('User') MODEL
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin: Boolean,
  games: [{
    type: Schema.ObjectId,
    ref: 'Game',
  }],
});

// On SAVE HOOK, encrypt password
/* eslint-disable func-names */
// Copyright Eric Mok (partly)

userSchema.pre('save', function (next) {
  // accessing (this) user model
  const user = this;

  // generate a 'salt'--> run Callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    // hash password = salt + user password
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      // overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

/* Cross-reference password - (REQUEST) 'Password' VS. (STORE) USER.PASSWORD
1. Create (NEW) [Salt + Hashed Password]: By Encrypting (sign-in) REQUEST 'Password' with Salt
2. Compare STORED password with NEW REQUEST password */
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    // this.password (hashed password as observed in model)
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};
// Creating ('User') MODEL CLASS - Is a "class" of users
const UserModelClass = mongoose.model('user', userSchema);

// Exporting ('User') MODEL
module.exports = UserModelClass;
