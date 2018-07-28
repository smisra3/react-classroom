const express = require('express');
const router = express.Router();
const Products = require('../models/products');

router.get('/', (request, response, next) => {
  const query = Products.find((err, product) => {
    response.json(product);
  });
});

router.post('/', (req, res, next) => {
  const product = new Products(req.body);
  product.save()
    .then(product => {
      res.json(product);
    }).catch(err => {
      res.status(400).json(err);
    });
});

router.get('/:pid', (req, res) => {
  const pid = req.params.pid;
  Products.find({ 'pid': pid }, (err, product) => {
    res.json(product);
  });
});

module.exports = router;