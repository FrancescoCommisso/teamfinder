const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/test", (req, res) => {
  let test = { test: "sup bitch" };
  res.send(test);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
