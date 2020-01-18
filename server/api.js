/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|
// /user (get)
// /sky (get, post)
// /constellation (get, post)

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.get("/sky", (req, res) => {
  Sky.find({
    creator: req.user._id,
  }).then((sky) => {
    res.send(sky);
  });
});

router.post("/sky", (req, res) => {
  const newSky = new Sky({
    name: req.body.name,
    creator: req.user._id,
  });

  newSky.save().then((sky) => res.send(sky));
});

router.get("/constellation", (req, res) => {
  Constellation.find({
    creator: req.user._id,
    sky_id: req.query.sky_id,
  }).then((constellation) => {
    res.send(constellation);
  });
});

router.post("/constellation", (req, res) => {
  const newConstellation = new Constellation({
    name: req.body.name,
    creator: req.user._id,
  });

  newConstellation.save().then((constellation) => res.send(constellation));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
