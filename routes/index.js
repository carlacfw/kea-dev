var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res){
  res.redirect('/index')
})

router.get('/index', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (profiles) {
      res.render('index', { profiles: profiles })
      console.log(profiles);
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile', function (req, res){
    db.getUsers(req.app.get('connection'))
    .then(function (profiles){
      res.render('profile', profiles)
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})

router.get('profiles', function(req, res){
  res.render('profiles')
})

router.get('/location', function (req, res) {
      res.render('location')
})

module.exports = router
