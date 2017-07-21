var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res){
  res.redirect('/index')
})

router.get('/index', function (req, res) {
  db.getProfiles(req.app.get('connection'))
    .then(function (profiles) {
      res.render('index', { profiles: profiles })

    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles', function (req, res){
    db.getProfilePage(req.app.get('connection'))
    .then(function (profiles){
      res.render('profiles', profiles)
      console.log(profiles);
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})


router.get('/location', function (req, res) {
      res.render('location')
})

module.exports = router
