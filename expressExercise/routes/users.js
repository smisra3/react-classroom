const express = require('express');
const router = express.Router();
const Users = require('../models/users');

router.get('/:username', (req, res) => {
  Users.find({ 'username': req.params.username }, (err, user) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(user);
  });
});

router.post('/', (req, res) => {
  const user = new Users(req.body);
  user.save().then(user => res.json(user)).catch(err => res.status(400).json(err));
});

router.get('/', (req, res) => {
  Users.find((err, user) => {
    if (err) {
      return new Error();
    }
    res.json(user);
  })
})

module.exports = router;