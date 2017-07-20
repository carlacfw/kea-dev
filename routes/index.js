var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/index', function (req, res) {
      res.render('index')
})

router.get('/users', function (req, res) {
      res.render('profile')
})
//add :id to route
router.get('/profile/edit', function (req, res) {
      res.render('profile')
})

router.get('/location', function (req, res) {
      res.render('location')
})

module.exports = router
