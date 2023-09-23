var express = require('express');
var router = express.Router();

//라우터의 역할 : 패스가 ~~일때 ~~해주겠다!

/* 도서검색 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'books/search.ejs' });
  
});

//렌더링 : ejs 파일(view파일)

module.exports = router;