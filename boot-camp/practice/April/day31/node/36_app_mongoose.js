const express = require('express');
require('dotenv').config({ path: 'mongodb/.env' });
const mongoDB = require('./mongoose');
const Customer = require('./mongoose/schema/customer');
const app = express();

mongoDB.connect();

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log('3000번 포트로 서버가 시작되었습니다.');
});

app.get('/api/customers', async (req, res) => {
  // 스키마 모델명: Customer
  // 몽고DB 콜렉션명: customers
  // find() 할 때 이름 생략 가능 (자동으로 연결됨)
  const customers = await Customer.find();
  res.send(customers);
});

app.post('/api/customer', async (req, res) => {
  const r = await Customer.create(req.body.params);
  res.send(r);
});
