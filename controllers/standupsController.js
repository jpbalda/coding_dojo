const passport = require('passport');
const mongoose = require('mongoose');
require('../models/Standup');

const Standup = mongoose.model('Standup');

exports.index = async (req, res) => {
  //TODO: filter standups when the logged user is the creator or attendee
  const standups = await Standup
    .find()
    .populate('creator')
    .limit(20);

  //TODO: pagination

  res.json({ data: standups });
};

exports.store = async (req, res) => {
  // TODO: validate input data
  const standup = await (new Store(req.body)).save();

  res.status(201)
  res.json({data: standup});
};

exports.delete = async (req, res) => {
  await Standup.findByIdAndRemove(req.params.id);

  res.json();
};