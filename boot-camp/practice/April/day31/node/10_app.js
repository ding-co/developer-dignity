// express
const express = require('express');
const app = express();

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});

// http://localhost:3000
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/customers', (req, res) => {
  // DB에서 데이터 가져왔다고 가정
  const customers = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'ding-co', email: 'ding-co@gmail.com' },
  ];
  res.send(customers);
});

app.post('/customers', (req, res) => {
  console.log(req.body.param);
  res.send('OK');
});
