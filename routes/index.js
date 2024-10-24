var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ data: { name: 'Your name', code: '123456' } });
});

// user information
router.get('/info', function (req, res, next) {
  res.json({ data: { fullName: 'Nguyen Van A', studentCode: 'HELO1234' } });
});

module.exports = router;
