const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skusSchema = new Schema({
  id: { type: Number, required: true },
  styleId: { type: Number, required: true },
  size: { type: String, required: true },
  quantity: { type: Number, required: true }
}, {
  timestamps: true,
});

const Skus = mongoose.model('Skus', skusSchema);

module.exports = Skus;