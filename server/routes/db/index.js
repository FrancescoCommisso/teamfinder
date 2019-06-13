const express = require("express");
const router = express.Router();
const admin = require("../../firebaseConfig");
const db = admin.firestore();
const usersRef = db.collection("users");
const gamesRef = db.collection("games");

let sendDone = (req, res, next) => {
  res.send("done");
};

module.exports = () => {
  router.get("/", (req, res, next) => {
    res.send("DB Index");
  });
  router.get("/test", (req, res, next) => {
    addTest();
  });

  router.post("/adduser", (req, res, next) => {
    // console.log("received: " + JSON.stringify(req.body));
    let user = req.body;
    usersRef
      .doc(user.id)
      .set(user)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(e => {
        console.log("Error Adding user: " + e.message);
        res.sendStatus(504);
      });
  });

  router.post("/getuserbyuid", (req, res, next) => {
    console.log("received: " + JSON.stringify(req.body));
    var userDoc = usersRef.doc(req.body.uid);
    var getDoc = userDoc
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
          res.sendStatus(404);
        } else {
          console.log("Document data: " + doc.data());
          res.send(JSON.stringify(doc.data()));
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
        res.sendStatus(500);
      });
  });

  router.get("/deleteUser", (req, res, next) => {
    addTest();
  });
  return router;
};
