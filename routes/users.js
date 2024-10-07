var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.json({ data: { name: 'John', age: 30 } });
});

/* POST login. */
router.post('/login', function (req, res, next) {
  const { username, password } = req.body;
  console.log('username', username);
  console.log('password', password);
  //res.send('respond with a resource');
  res.json({ data: { name: 'John', age: 30 } });
});

module.exports = router;
