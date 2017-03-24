var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dr. Kung Chen' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hello World! It is me.'});
});
module.exports = router;
