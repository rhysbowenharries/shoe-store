const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Brands", brandSchema);
