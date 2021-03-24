const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = Number(req.body.id);
  const name = req.body.name;
  const slogan = req.body.slogan;
  const description = req.body.description;
  const category = req.body.category;
  const default_price = Number(req.body.default_price);

  const newProduct = new Product({
    id: id,
    name: name,
    slogan: slogan,
    description: description,
    category: category,
    default_price: default_price
  });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;