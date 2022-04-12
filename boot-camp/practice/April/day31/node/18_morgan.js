const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

// 파일 만들어지는 시간, 파일 만들어진 순서
const generator = (time, index) => {
  if (!time) return 'file.log';

  const yearMonth =
    time.getFullYear() + (time.getMonth() + 1).toString().padStart(2, '0');
  const day = time.getDate().toString().padStart(2, '0');
  const hour = time.getHours().toString().padStart(2, '0');
  const minute = time.getMinutes().toString().padStart(2, '0');

  return `${yearMonth}/${yearMonth}${day}-${hour}${minute}-${index}-file.log`;
};

// 첫 번째 인자는 파일명 (자동으로 만들어져야 함)
const accessLogStream = rfs.createStream(generator, {
  // 1분 단위로 로그 생성
  // 실무에서는 보통 1d (하루 단위)
  interval: '1m',
  size: '10M',
  // log 폴더에 관리
  path: path.join(__dirname, 'log'),
});

// combined; log 남기는 기본 포맷
// stream => 파일 만들어 내는 형식 지정
// app.use(morgan('combined', { stream: accessLogStream }));

app.use(
  morgan('combined', {
    stream: accessLogStream,
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  })
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});
