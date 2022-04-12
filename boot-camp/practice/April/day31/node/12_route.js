const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});

// ?: 0 or 1개
// /abcd, /acd (b는 0 또는 1개)
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd');
});

// +: 1개 이상
// /abcd, /abbcd, ... (b는 1개 이상)
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd');
});

// *: 아무 문자나 들어올 수 있음
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});

// a 포함되어 있으면 다 이리로 옴
app.get(/a/, (req, res) => {
  res.send('/a/');
});

// 라우트 경로가 insert로 시작해야 함
app.get(/^insert/, (req, res) => {
  res.send('/a/');
});
