const express = require("express");
const router = express.Router();

const dbRoute = require("./db");

module.exports = () => {
  router.get("/", (req, res, next) => {
    res.send("Index");
  });
  router.use("/db", dbRoute());

  return router;
};
