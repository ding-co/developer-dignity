## 제품판매웹앱 구현 - 09.웹서버 구축(Node.js + Express.js)

### _웹서버 구축_

```js
const express = require('express');
const app = express();
const session = require('express-session');

app.use(
  session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠기 유효시간 1시간
    },
  })
);

const server = app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

let sql = require('./sql.js');

const db = {
  host: '146.56.172.78',
  user: 'kms',
  port: '3306',
  password: 'Studycoding1!',
  database: 'moyadb',
  connectionLimit: 10,
};

const dbPool = require('mysql').createPool(db);

app.post('/api/login', async (request, res) => {
  request.session['email'] = 'pangoons@gmail.com';
  res.send('login ok');
});

app.post('/api/logout', async (request, res) => {
  request.session.destroy();
  res.send('logout ok');
});

app.post('/api/:alias', async (request, res) => {
  if (!request.session.email) {
    return res.status(401).send({
      error: 'You need to login.',
    });
  }

  try {
    res.send(await req.db(request.params.alias));
  } catch (err) {
    res.status(500).send({
      error: err,
    });
  }
});

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY') console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
```

#

### [Note]

- page에서 login 구현 및 서버 세션에서 로그인 id 관리 위해 express-session 모듈 설치
- Postman; 클라이언트 프로그램 개발되지 않은 상태에서 서버로 서버의 특정 url로 특정 data get/post 테스트 가능

#

[Reference](https://www.youtube.com/watch?v=odBMChuTGqs)
