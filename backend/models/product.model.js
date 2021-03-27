const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  slogan: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  default_price: { type: Number, required: true },
  created_at: { type: Date },
  updated_at: { type: Date },
  features: { type: Array },
  avgRating: { type: Number },
  percentRecommended: { type: Number },
  ratingsBreakdown: { type: Array },
  styles: { type: Array }
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;