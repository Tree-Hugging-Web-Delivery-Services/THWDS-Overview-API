const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const featuresSchema = new Schema({
  id: { type: Number, required: true },
  fabric: { type: String, required: true },
  canvas: { type: String, required: true },
}, {
  timestamps: true,
});

const Feature = mongoose.model('Features', featuresSchema);

module.exports = Feature;