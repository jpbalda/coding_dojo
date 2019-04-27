const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: 'Por favor ingrese un nombre'
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] 
});

module.exports = mongoose.model('Standup', standupSchema);