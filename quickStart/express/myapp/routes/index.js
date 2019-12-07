var express = require('express');
var router = express.Router();
const url = require('url');



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

router.post('*', (req, res, next) => {
  if (req.method === "OPTIONS") {
    //console.log('enter');
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
    res.end();
  } else {
    next();
  }
});



router.get('/user/:username', (req, res) => {
  //用户存在，直接展示用户信息
  //res.send(JSON.stringify(users[req.params.username]));

  if (req.session.isFirst || req.cookies.isFirst) {
    res.send('欢迎再一次访问');
  } else {
    req.session.isFirst = 1;
    res.cookie('isFirst', 1, { maxAge: 60 * 1000, singed: true });
    res.send('欢迎第一次访问');
  }
});

router.get('/login.html|test.css', (req, res) => {
  let arg = url.parse(req.url).pathname;
  let path = __dirname.slice(0, __dirname.length - 6);
  res.sendFile(path + '/views/' + arg);
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.send('received!');
})

router.get('*', (req, res) => {
  console.log('404');
  res.send('404 Not Found!', 404);
})

module.exports = router;
