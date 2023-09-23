var express = require('express');
var router = express.Router();

/* 지역 검색. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs' });
});

//렌더링 :ejs파일

module.exports = router;