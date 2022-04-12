const express = require('express');
const app = express();
require('dotenv').config({ path: `./nodemailer/.env` });
const nodemailer = require('./nodemailer');

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});

app.post('/api/email', async (req, res) => {
  const r = await nodemailer.send(req.body.param);
  res.send(r);
});
