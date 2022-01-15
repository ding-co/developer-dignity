## Node.js 설치 및 실행 - 자바스크립트만 알면 클라이언트,서버 개발이 다 되는거야!

### _Node.js_

- 서버 프로그래밍 언어 (JS)
- JS만 알면 클라이언트, 서버 개발 모두 가능
- 내가 원하는 기능 빠르게 만들 수 있음
- NPM (Node Package Manager); 오픈 소스 라이브러리 생태계
- 이미 있는 모듈을 잘 가져다 쓰기만 해도 개발이 매우 편해짐

### _기본_

- 설치
- moment 모듈을 통한 실습

```js
const moment = require('moment');

console.log('today', moment().format('YYYY-MM-DD'));
console.log('today+1', moment().add(1, 'day').format('YYYY-MM-DD'));
console.log('week', moment().add(1, 'week').format('YYYY-MM-DD'));
console.log('month', moment().add(1, 'month').format('YYYY-MM-DD'));
```

#

### [Note]

- NPM; node.js 모듈을 모아둔 저장소
- node.js의 express 모듈 (웹서버)

#

[Reference](https://www.youtube.com/watch?v=qIwtS8PIgo0)
