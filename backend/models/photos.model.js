const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  id: { type: Number, required: true },
  styleId: { type: Number, required: true },
  url: { type: String, required: true },
  thumbnail_url: { type: String, required: true }
}, {
  timestamps: true,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;