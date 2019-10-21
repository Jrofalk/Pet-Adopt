const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below

//Must run this file in order to actually seed the database. Go to scripts folder and in the terminal run node seedDB.js or whatever the name of the seed file is.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/adoptablepets"
);

const petSeed = [
  {
    name: "Henry",
    petInfo: [
      1,
      2,
      3
    ],
    image: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",  
    date: new Date(Date.now())
  },
  {
    name: "Mittens",
    petInfo: [
      2,
      2,
      2
    ],
    image: "https://dyl62eh9y96rk.cloudfront.net/wp-content/uploads/2017/03/16151857/MG_6671-1024x686.jpg",
    date: new Date(Date.now())
  },
  {
    name: "George",
    petInfo: [
      3,
      3,
      3
    ],
    image: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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