const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: { type: String, required: true },
  choiceOne: { type: Number, required: true },
  choiceTwo: Number,
  choiceThree: String,
  date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;