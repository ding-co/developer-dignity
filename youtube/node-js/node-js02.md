## 한시간만에 끝내는 Node.js 입문

### _Node.js_

- JS는 클라이언트 프로그래밍 언어인데 node.js로 서버도 가능

### _연습_

- 이메일 발송 프로그램 (nodemailer 모듈)

```js
const nodemailer = require('nodemailer');
const email = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '1c6525bec23ec2',
    pass: 'a08f059bf556a2',
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) console.log(error);
    else {
      console.log(info);
      return info.response;
    }
  });
};

let emailData = {
  from: 'pangoons@gmail.com',
  to: 'pangoons@gmail.com',
  subject: '테스트 메일 입니다.',
  text: 'nodejs 한시간만에 끝내보자',
};

send(emailData);
```

- 웹서버 만들기 실습 (express 모듈)

```js
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/about', function (req, res) {
  res.render('about.html');
});
```

- db 연동 실습

```js
const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Start Server : localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/about', function (req, res) {
  res.render('about.html');
});

var mysql = require('mysql');
var pool = mysql.createPool({
  host: '',
  user: '',
  port: '',
  password: '',
  database: '',
});

app.get('/db', function (req, res) {
  pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    connection.query('SELECT * from Board', function (error, results, fields) {
      res.send(JSON.stringify(results));
      console.log('results', results);

      // When done with the connection, release it.
      connection.release();

      // Handle error after the release.
      if (error) throw error;

      // Don't use the connection here, it has been returned to the pool.
    });
  });
});
```

#

### [Note]

- 원래는 클라이언트 프로그래밍 언어와 서버 프로그래밍 언어가 다름 <br/>
  => 하지만 JS만 알면 모두 가능!

#

[Reference](https://www.youtube.com/watch?v=toLDNN4FQv0)
