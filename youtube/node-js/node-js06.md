## Node.js - 이메일 보내기 기능 구현하기 (nodemailer)

### _nodemailer 모듈_

- 시스템에서 이메일을 보내는 기능
- 서비스 운영 위해 반드시 필요한 기능
- 이메일 발송 가능한 메일 서버 필요 <br/>
  => Mailtrap.io 이용! (무료 개발 테스트 용도로 활용 가능)

```js
const nodemailer = require('nodemailer');

const email = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '1c6525bec23ec2',
    pass: 'a08f059bf556a2',
  },
};

const send = async (data) => {
  nodemailer.createTransport(email).sendMail(data, (err, info) => {
    if (error) console.log(error);
    else {
      console.log(info);
      return info.response;
    }
  });
};

const content = {
  from: 'pangoons@gmail.com',
  to: '339802414c-296c7d@inbox.mailtrap.io',
  subject: '개발자의 품격',
  // text: '개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현',
  html: '<h2>개발자의 품격 - nodemailer를 이용한 이메일 보내기 구현</h2>',
};

send(content);
```

#

### [Note]

- 활용
  - 특정 웹사이트 회원가입 하고 나면, 확인 인증 메일 발송
  - 기업용 업무 시스템; 매니저가 업무 등록하면서 특정 담당자 지정하면 <br/>
    그 업무 등록되는 순간에 담당자에게 업무 지시 메일 발송됨
  - 매월, 매주, 판매 실적을 임원 혹은 매니저에게 집계해서 발송되는 이메일
  - 뉴스레터; 해당 웹사이트로부터 정기적으로 이메일이 발송됨
  - 스케줄러와 함께 활용 (첨부파일도 보낼 수 있음)

#

[Reference](https://www.youtube.com/watch?v=ezReImKeq2U)
