const express = require('express');
const app = express();
const router = express.Router();
const mysql = require('../mysql');

// 카테고리 리스트 조회
router.get('/category', async (req, res) => {
  const categoryList = await mysql.query('categoryList');
  res.send(categoryList);
});

// 카테고리 조회
app.get('/category/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const categoryDetail = await mysql.query(
    'categoryDetail',
    product_category_id
  );
  res.send(categoryDetail);
});

// 카테고리 생성
router.post('/category', async (req, res) => {
  const result = await mysql.query('categoryInsert', req.body.param);
  res.send(result);
});

// 카테고리 수정
router.put('/category/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query('categoryUpdate', [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

// 카테고리 삭제
router.delete('/category/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const count = await mysql.query('productCount', product_category_id);
  if (count[0] === 0) {
    const result = await mysql.query('categoryDelete', product_category_id);
    res.send(result);
  } else {
    // status code 고민
    res.send({ status: 501, count: count[0] });
  }
});

module.exports = router;
