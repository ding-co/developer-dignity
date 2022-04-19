// express
const express = require('express');
const app = express();
// console.log(app.get('env'));
require('dotenv').config({ path: `mysql/.env` });
// console.log(process.env);
const mysql = require('./mysql');

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});

// 카테고리 리스트 조회
app.get('/api/product/category', async (req, res) => {
  const categoryList = await mysql.query('categoryList');
  res.send(categoryList);
});

app.get('/api/product/category2', async (req, res) => {
  const categoryList = await mysql.query('categoryList2');
  res.send(categoryList);
});

// 카테고리 조회
app.get('/api/product/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const categoryDetail = await mysql.query(
    'categoryDetail',
    product_category_id
  );
  res.send(categoryDetail);
});

// 카테고리 생성
app.post('/api/product/category', async (req, res) => {
  const result = await mysql.query('categoryInsert', req.body.param);
  res.send(result);
});

// 카테고리 수정
app.put('/api/product/category/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query('categoryUpdate', [
    req.body.param,
    product_category_id,
  ]);
  res.send(result);
});

// 카테고리 삭제
app.delete('/api/product/category/:product_category_id', async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query('categoryDelete', product_category_id);
  res.send(result);
});
