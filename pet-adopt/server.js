// CLIENTS FOLDER PACKAGE.JSON MUST HAVE --PROXY: SET TO LOCALHOST-- -- WILL HAVE TO MANUALLY ALTER THIS FOR FUTURE PROJECTS
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// //Passport


// const passport = require('./passport');

// app.use(passport.initialize())
// app.use(passport.session()) // calls serializeUser and deserializeUser

// const session = require('express-session')

// app.use(
//   session({
//   secret: 'Tomiko101387', 
//   resave: false, //required
//   saveUninitialized: false //required
//   })
// )

// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// });

// app.post('/user', (req, res) => {
//   console.log('user signup');
//   req.session.email = req.body.email;
//   res.end()
// })


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://ds137508.mlab.com:37508/adoptablepets");

// "mongodb://localhost/adoptablepets"


// Start the API server
app.listen(PORT, function() {
  console.log(`${PORT}`);
});

// CLIENTS FOLDER PACKAGE.JSON MUST HAVE --PROXY: SET TO LOCALHOST-- -- WILL HAVE TO MANUALLY ALTER THIS FOR FUTURE PROJECTS