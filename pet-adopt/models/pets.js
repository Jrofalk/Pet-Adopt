const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  petInfo: Array,
  image: String,
  description: String,
  date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;