var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aula de Node Noturna - Christian controlando saporra' });
});

module.exports = router;
