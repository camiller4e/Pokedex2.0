const express = require('express');
const router = new express.Router();

router.use('/pokemon', require('./pokemon'));
router.use('/trainers', require('./trainers'));


router.get('/', function(req, res){
  res.json({data: "I WANT TO BE THE VERY BEST!"})
})

router.get('/about', function(req, res){
  res.json({data: "LIKE NO ONE EVER WAS"})
})

module.exports = router;
