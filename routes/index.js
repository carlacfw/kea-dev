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
    db.getProfiles(req.app.get('connection'))
    .then(function (profiles){
      res.render('profiles', { profiles: profiles })
      console.log(profiles);
    })
    .catch(function(err){
      res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})

router.get('/profiles/:id', function(req, res){
  var id = req.params.id
  db.getProfilePage(id, req.app.get('connection'))
  .then(function(profile){
    console.log({profile});
    res.render('profile-page', profile)
  })
  .catch(function(err){
    res.status(500).send('DATABASE ERROR: '+ err.message)
    })
})

// router.get('/profiles/:id', function(req, res) { //route
//   db.getProfilePage(req.params.id, req.app.get('connection')) //db function
//     .then(function(profile) { //db function response
//       res.render('profile-page', profile) //render view with db response data
//     })
// })

router.get('/location', function (req, res) {
      res.render('location')
})

module.exports = router
