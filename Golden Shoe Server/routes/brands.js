const express = require("express");
const router = express.Router();
const Brand = require("../models/BrandSchema");

router.get("/", async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const brand = new Brand({
    title: req.body.title,
  });

  try {
    const savedBrand = await brand.save();
    res.json(savedBrand);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:brandId", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.brandId);
    res.json(brand);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:brandId", async (req, res) => {
  try {
    const removedBrand = await Brand.deleteOne({ _id: req.params.brandId });
    res.json(removedBrand);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:brandId", async (req, res) => {
  try {
    const updatedBrand = await Brand.updateMany(
      { _id: req.params.brandId },
      {
        $set: {
          title: req.body.title,
        },
      }
    );
    res.json(updatedBrand);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
