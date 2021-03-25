const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stylesSchema = new Schema({
  id: { type: Number, required: true },
  productId: { type: Number, required: true },
  name: { type: String, required: true },
  sale_price: { type: Number, required: true },
  original_price: { type: String, required: true },
  default_style: { type: Number, required: true }
}, {
  timestamps: true,
});

const Style = mongoose.model('Style', stylesSchema);

module.exports = Style;