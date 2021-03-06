const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// /** DB */
const db = require("./models")
// console.log(db.Article)
const { Article } = db

//Get Route
app.get("/api/saved", (req, res) => {
  Article.find({}).then(articles => res.json(articles))
})

//Post Route
app.post("/api/saved", (req, res) => {
  //get the posted object
var article = req.body
// console.log(article)
  Article.create(article)
  .then(() => {
    res.json(article)
  })
  .catch((err) => {
    res.json(err)
  })
})


//Delete Route
app.delete("/api/saved/:id", (req, res) => {
  
  Article.remove({ _id: req.params.id})
    .then(() => {
      res.json(req.body)
    })
    .catch((error) => {
      res.json(error)
  })
})
/** End of Routes */


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
