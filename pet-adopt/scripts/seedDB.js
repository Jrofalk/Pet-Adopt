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
      3,
      1,
      2,
      1,
      1
    ],
    image: "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/Shelter%20Cats%201_0913.jpg?itok=v3OcT_yC",
    description: "He is very shy at first but can be won over with chin rubs." ,  
    date: new Date(Date.now())
  },
  {
    name: "Fritzi",
    petInfo: [
      2,
      2,
      2,
      2,
      2,
      2,
      1
    ],
    image: "https://dyl62eh9y96rk.cloudfront.net/wp-content/uploads/2017/03/16151857/MG_6671-1024x686.jpg",
    description: "Fritzi loves attention. She is comfortable with both dogs and other cats.",
    date: new Date(Date.now())
  },
  {
    name: "Mittens",
    petInfo: [
      3,
      3,
      3,
      4,
      3,
      1,
      1
    ],
    image: "https://media.mnn.com/assets/images/2016/04/IMG_4146.JPG.653x0_q80_crop-smart.jpg",
    description: "Mittens loves people, but would do best in a house where she is the only cat to rule the roost.",
    date: new Date(Date.now())
  },
  {
    name: "Kevin",
    petInfo: [
      2,
      1,
      1,
      1,
      1,
      1,
      1
    ],
    image: "http://www.chicoanimalshelter.org/uploads/1/1/3/2/11329691/header_images/1562787520.jpg",
    description: "If you are looking for a laid back companion, Kevin is your dog.",
    date: new Date(Date.now())
  },
  {
    name: "Rexy",
    petInfo: [
      2,
      1,
      3,
      1,
      2,
      3,
      1
    ],
    image: "https://www.pasadenastarnews.com/wp-content/uploads/2019/04/A473131_Patches_Aust_Cattle_Dog_B-1.jpg?w=467",
    description: "Rexy is approximately 9 years old with lots of love left to give!",
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