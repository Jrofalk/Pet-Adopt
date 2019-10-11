// CLIENTS FOLDER PACKAGE.JSON MUST HAVE --PROXY: SET TO LOCALHOST-- -- WILL HAVE TO MANUALLY ALTER THIS FOR FUTURE PROJECTS

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adoptablepets");

// Start the API server
app.listen(PORT, function() {
  console.log(`${PORT}`);
});

// CLIENTS FOLDER PACKAGE.JSON MUST HAVE --PROXY: SET TO LOCALHOST-- -- WILL HAVE TO MANUALLY ALTER THIS FOR FUTURE PROJECTS