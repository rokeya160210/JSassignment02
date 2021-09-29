var express = require('express');
var router = express.Router();
const temperature = require('../utils/temperature.json')
// let temperature = [
//   {
//     name: 'khulna',
//     tmep: '20'
//   },
//   {
//     name: 'jessore',
//     tmep: '10'
//   },
//   {
//     name: 'satkhira',
//     tmep: '30'
//   },
// ]
/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    name: 'No data found',
    tmep: 'No temperature'
  }
    for(let i=0; i<temperature.length; i++){
        if(req.query.name === temperature[i].name){
            data = temperature[i]
        }
    }
  res.render('index', data);
});

module.exports = router;
