const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  Food: { type: String },
  id: { type: String },
  Utencils: { type: String },
  Toys: { type: String },
  foodType: { type: String },
  foodQuantity: { type: String },
  toysQuantity: { type: String },
  utencilsQuantity: { type: String }
});

const itemModel = mongoose.model("Item", itemSchema);

module.exports = { itemModel };
