var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  res.redirect('/index')
})

router.get('/index', function (req, res) {
  res.render('index')
})

router.get('/profiles', function (req, res) {
  db.getProfiles(req.app.get('connection'))
    .then(function (profiles) {
      console.log(profiles);
      res.render('profiles', { profiles: profiles })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

//add :id to route
router.get('/profile/edit', function (req, res) {
      res.render('profile')
})

router.get('/location', function (req, res) {
      res.render('location')
})

module.exports = router
