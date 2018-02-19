const User = require('../models/user');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

exports.userFind = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec((error, user) => user)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.changeRole = (req, res) => {
  User.findOneAndUpdate({ email: req.body.email }, { admin: req.body.admin }, { new: true }, (err, doc) => {
    if (err) {
      return res.send(500, { error: err });
    }
    return res.send(doc);
  });
};

exports.deleteUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .remove()
    .exec((error, user) => user)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.isAdmin = (req, res) => {
  User.findOne({ _id: req.user._id })
    .exec((error, user) => user)
    .then((user) => {
      res.json(user.admin);
    })
    .catch((err) => {
      res.json(err);
    });
};
