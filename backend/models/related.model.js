const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const relatedSchema = new Schema({
  id: { type: Number, required: true },
  current_product_id: { type: Number, required: true },
  related_product_id: { type: Number, required: true }
}, {
  timestamps: true,
});

const Related = mongoose.model('Related', relatedSchema);

module.exports = Related;