const express = require("express");
const Sneaker = require("../models/Sneaker");
const Tag = require('../models/Tag');
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get('/sneakers/collection', async (req, res) => {
  res.render('products', { 
    sneakers : await Sneaker.find(),
    tags: await Tag.find(),
    scripts: ['client.js']
  });
});

router.get("/sneakers/:cat", async (req, res) => {
  res.render('products', { 
    sneakers : await Sneaker.find({ category: req.params.cat }),
    tags: await Tag.find(),
    scripts: ['client.js']
  });
});

router.get("/one-product/:id", async (req, res) => {
  const sneaker = await Sneaker.find({ _id: req.params.id })
  res.render('one_product', { sneaker : sneaker[0] });
});


/*
router.get("/signup", (req, res) => {
  res.send("signup");
});

router.get("/signin", (req, res) => {
  res.send("");
});
*/


module.exports = router;
