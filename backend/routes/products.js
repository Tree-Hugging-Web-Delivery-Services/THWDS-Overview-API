const router = require('express').Router();
let Product = require('../models/product.model');
let Style = require('../models/styles.model');
let Related = require('../models/related.model');

// Atlier Product API
// GET /products
// GET /products/:product_id
// GET /products/:product_id/styles
// GET /products/:product_id/related

router.route('/').get((req, res) => {
  let random = [Math.floor(Math.random() * 504000), Math.floor(Math.random() * 504000), Math.floor(Math.random() * 504000)];
  Product.find({id: {$in: random }}, {_id: 0})
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:product_id').get((req, res) => {
  let param = req.params;
  console.log(param.product_id);
  Product.findOne({ id: param.product_id })
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:product_id/styles').get((req, res) => {
  let random = [Math.floor(Math.random() * 504000), Math.floor(Math.random() * 504000), Math.floor(Math.random() * 504000)];
  Style.find({id: {$in: random }}, {_id: 0})
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:product_id/related').get((req, res) => {
  console.log(req.params);
  Related.find({id: parseInt(req.params.product_id)}, {_id: 0})
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