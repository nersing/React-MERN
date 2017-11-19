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

app.use(routes);

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

// /** TO DO move DB stuff out 11:25 time in video  */
// /** DB */
// const db = require("./models")
// // console.log(db.Article)
// const { Article } = db

// // Article.create ({
// //   title: "Manual insert",
// //   url: "http://example.org/insert"
// // }).then(x => console.log(x))
// // .catch(x => console.error(x))

// /** END DB */

// /** Routes */

// app.post("/api/saved", (req, res) => {
//   //get the posted object
// var article = req.body
// // console.log(article)
//   //call Article.create
//    // then return some json (success|error)
//   Article.create(article)
//   .then(() => {
//     res.json(article)
//   })
//   .catch((err) => {
//     res.json(err)
//   })

 
// })

// app.get("/api/saved", (req, res) => {
//   Article.find({}).then(articles => res.json(articles))
// })

/** End of Routes */


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
