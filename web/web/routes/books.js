var express = require('express');
var router = express.Router();

//라우터의 역할 : 패스가 ~~일때 ~~해주겠다!

/* 도서검색 */
router.get('/', function(req, res, next) { 
  res.render('index', { title: '도서검색', pageName:'books/search.ejs' });
  
});

//장바구니 페이지 이동
router.get('/cart', function(req,res){ 
  res.render('index',{title:'장바구니',pageName:'books/cart.ejs'});
})

//렌더링 : ejs 파일(view파일)

module.exports = router;