const express = require('express');
require('dotenv').config({ path: 'mysql/.env' });
const mysql = require('mysql');
const uuidAPIKey = require('uuid-apikey');
const app = express();

// console.log(uuidAPIKey.create());

const accessKey = {
  apiKey: 'FWE5FRR-XF04YBC-JAV9XJR-97E7ERQ',
  uuid: '7f1c57e3-ebc0-4f2d-92b6-9ecb49dc7762',
};

app.listen(3001, () => {
  console.log('API 서버가 3001번 포트로 시작되었습니다.');
});

app.get('/api/:apikey/category', async (req, res) => {
  if (uuidAPIKey.toUUID(req.params.apikey) !== accessKey.uuid) {
    console.log('비정상적인 API KEY를 사용했습니다.');
    return res.send('Access denied');
  }
  const categoryList = await mysql.query('categoryList');
  res.send(categoryList);
});
