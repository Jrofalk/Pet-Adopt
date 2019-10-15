const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below.

//Must run this file in order to actually seed the database. Go to scripts folder and in the terminal run node seedDB.js or whatever the name of the seed file is.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/adoptablepets"
);

const userSeed = [
  {
    email: "my@example.com",
    password: "mypassword"
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });