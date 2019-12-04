var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res) {
  res.send('the time is ' + new Date().toString());
});

let users = {
  'cabbage': {
    name: 'cabbage',
    website: 'http://www.huajiyang.com'
  }
}

router.all('/user/:username', (req, res, next) => {
  //检查用户是否存在
  if (users[req.params.username]) {
    next();
  } else {
    next(new Error(req.params.username + ' does\'t exist.'));
  }

});

router.get('/user/:username', (req, res) => {
  //用户存在，直接展示用户信息
  res.send(JSON.stringify(users[req.params.username]));
});

router.put('/user/:username', (req, res) => {
  //修改用户信息
  res.send('Done!');  
})


module.exports = router;
