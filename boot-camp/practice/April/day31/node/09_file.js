// file system (비동기/동기 함수 pair)
const fs = require('fs');

// 비동기 함수
fs.readFile('./sample/test.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// 동기 함수
const data = fs.readFileSync('./sample/test.txt', 'utf-8');
console.log(data);

// 비동기 함수
const txt = '파일 쓰기 테스트';
fs.writeFile('./sample/test_w.txt', txt, 'utf-8', (err) => {
  if (err) throw err;

  const data2 = fs.readFileSync('./sample/test_w.txt', 'utf-8');
  console.log(data2);
});

// 동기 함수
fs.writeFileSync('./sample/test_ww.txt', txt, 'utf-8');
