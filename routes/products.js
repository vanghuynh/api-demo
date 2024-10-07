var express = require('express');
var router = express.Router();

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'Margerita Pizza',
    price: 15,
    salePrice: 12,
    image:
      'https://res.cloudinary.com/djjsrrfbj/image/upload/v1728310657/PizzaHouse/menu3.jpg',
  },
  {
    id: 2,
    title: 'Mushroom Pizza',
    price: 19,
    image:
      'https://res.cloudinary.com/djjsrrfbj/image/upload/v1728310656/PizzaHouse/menu4.jpg',
  },
  {
    id: 3,
    title: 'Hawaiian Pizza',
    price: 19,
    salePrice: 12,
    image:
      'https://res.cloudinary.com/djjsrrfbj/image/upload/v1728310657/PizzaHouse/menu2.jpg',
  },
  {
    id: 4,
    title: 'Pesto Pizza',
    price: 19,
    salePrice: 10,
    image:
      'https://res.cloudinary.com/djjsrrfbj/image/upload/v1728310656/PizzaHouse/menu1.jpg',
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');
  res.json({ data: DUMMY_PRODUCTS });
});

module.exports = router;
