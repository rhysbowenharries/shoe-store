const express = require("express");
const router = express.Router();
const Shoe = require("../models/ShoeSchema");

router.get("/", async (req, res) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const shoe = new Shoe({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    brand: req.body.brand,
    category: req.body.category,
  });

  try {
    const savedShoe = await shoe.save();
    res.json(savedShoe);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:shoeId", async (req, res) => {
  try {
    const shoe = await Shoe.findById(req.params.shoeId);
    res.json(shoe);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:shoeId", async (req, res) => {
  try {
    const removedShoe = await Shoe.deleteOne({ _id: req.params.shoeId });
    res.json(removedShoe);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:shoeId", async (req, res) => {
  try {
    const updatedShoe = await Shoe.updateMany(
      { _id: req.params.shoeId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
          brand: req.body.brand,
          category: req.body.category,
        },
      }
    );
    res.json(updatedShoe);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
