const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/adoptablepets"
);

const petSeed = [
  {
    name: "Henry",
    choiceOne: 1,
    choiceTwo: 2,
    choiceThree: 3,
    date: new Date(Date.now())
  },
  {
    name: "Mittens",
    choiceOne: 2,
    choiceTwo: 2,
    choiceThree: 2,
    date: new Date(Date.now())
  },
  {
    name: "George",
    choiceOne: 3,
    choiceTwo: 3,
    choiceThree: 3,
    date: new Date(Date.now())
  }
];

db.Pet
  .remove({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });