const express = require('express');
const Rental = require('../models/rental');
const router = express.Router();

router.get('/', async (req, res) => {
  const rental = await Rental.find();
  res.send(rental);
});

router.get('/:id', async (req, res) => {
  const rental = await Rental.findById(req.params.id);
  res.send(rental);
});

router.post('/', async (req, res) => {
  let rental = new Rental({
    title: req.body.title,
    city: req.body.city,
    street: req.body.street,
    category: req.body.category,
    image: req.body.image,
    bedrooms: req.body.bedrooms,
    shared: req.body.shared,
    description: req.body.description,
    dailyRate: req.body.dailyRate
  });

  rental = await rental.save();
  res.send(rental);
});

module.exports = router;
