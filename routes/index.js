var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res){
  res.redirect('/index')
})

//hoe page
router.get('/index', function (req, res) {
  db.getProfiles(req.app.get('connection'))
    .then(function (profiles) {
      res.render('index', { profiles: profiles })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//list of profiles
router.get('/profiles', function (req, res){
    db.getProfiles(req.app.get('connection'))
    .then(function (profiles){
      res.render('profiles', { profiles: profiles })
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})

//individual profiles
router.get('/profiles/:id', function(req, res) { //route
  db.getProfilePage(req.params.id, req.app.get('connection')) //db function
    .then(function(profile) { //db function response
      res.render('profile-page', profile) //render view with db response data
    })
})

//location route
router.get('/location', function (req, res) {
  db.getLocations(req.app.get('connection'))
    .then(function(locations){
      res.render('locations', {locations: locations})
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})

module.exports = router
