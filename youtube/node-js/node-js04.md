## Node.js에서 API 서버 만들기

### _API 서버 만들기_

- 시스템의 특정 데이터 혹은 특정 기능을 사용하고 싶은 다른 Third-party 시스템에게 <br/>
  프로그램 코드 노출시키지 않고, 혹은 데이터베이스에 직접 연결해서 <br/>
  데이터를 컨넥션하고 컨트롤하는 권한을 주지 않고 시스템에서 제공하는 기능이나 <br/>
  데이터를 제공할 떄 API 서버 사용
- REST API 방식; 웹 HTTP를 이용해서 API 서버에 URL 방식으로 데이터 호출

```js
const express = require('express');
const app = express();

const server = app.listen(3001, function (req, res) {
  console.log('Start Server : localhost:3001');
});

// : (콜론) 있는 path에는 어떤 값이든 들어올 수 있음
app.get('/api/users/:type', async (req, res) => {
  let { type } = req.params;

  if (type == 'seoul') {
    let data = [
      {
        name: '홍길동',
        city: 'seoul',
      },
      {
        name: '김철수',
        city: 'seoul',
      },
    ];

    res.send(data);
  } else if (type == 'jeju') {
    let data = [
      {
        name: '박지성',
        city: 'jeju',
      },
      {
        name: '손흥민',
        city: 'jeju',
      },
    ];
    res.send(data);
  } else {
    res.send('Type is not correct.');
  }
});
```

- key 추가 (아무나 정보 받아가면 안됨)
  - uuid-apikey (API key 생성해주는 모듈)

```js
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, function (req, res) {
  console.log('Start Server : localhost:3001');
});

const key = {
  apiKey: '5PB37WM-5ACM5D2-QV7HB6X-GX5VDVV',
  uuid: '2d9633f2-2a99-42b4-becf-159b874bb6ef',
};

// : (콜론) 있는 path에는 어떤 값이든 들어올 수 있음
app.get('/api/users/:apikey/:type', async (req, res) => {
  let { apikey, type } = req.params;

  if (!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)) {
    res.send('apikey is not valid');
  } else {
    if (type == 'seoul') {
      let data = [
        {
          name: '홍길동',
          city: 'seoul',
        },
        {
          name: '김철수',
          city: 'seoul',
        },
      ];

      res.send(data);
    } else if (type == 'jeju') {
      let data = [
        {
          name: '박지성',
          city: 'jeju',
        },
        {
          name: '손흥민',
          city: 'jeju',
        },
      ];
      res.send(data);
    } else {
      res.send('Type is not correct.');
    }
  }
});
```

#

### [Note]

- express 모듈; node.js로 웹 서버 빠르게 구축할 수 있도록 해주는 모듈
- Postman; 개발한 API를 테스트할 수 있는 API 개발 생산성 높여주는 플랫폼

#

[Reference](https://www.youtube.com/watch?v=8XpVJaEWesM)
