// cors - Cross-Origin Resource Sharing
// Origin - URL 구조의 프로토콜, 호스트, 포트 합친 것

const express = require('express');
const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:8080', // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('OK');
});

// 써드파티 ex. 고객사 에서 우리 서버로 데이터 요청할 일 필요

const corsOptions2 = {
  origin: 'http://localhost:8081', // 허용할 도메인 설정
  optionsSuccessStatus: 200,
};

app.get('/products/:id', cors(corsOptions2), (req, res) => {});

app.listen(3000, function () {
  console.log('3000번 포트로 서버 실행.');
});
