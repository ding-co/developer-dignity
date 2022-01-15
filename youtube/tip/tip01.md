## 카카오계정으로 로그인하기 (카카오톡 로그인 API 사용하기)

### _카카오 로그인 API_

- 카카오 계정으로 로그인
- Kakao developers (Kakao API 문서)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="javascript:kakaoLogin();"
      ><img
        src="https://developers.kakao.com/docs/static/image/pc/kakaologin.png"
    /></a>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script>
      window.Kakao.init('1ebd166b4c987c5c4338e474383e1f48');

      function kakaoLogin() {
        window.Kakao.Auth.login({
          scope: 'profile_nickname, account_email, gender',
          success: function (authObj) {
            console.log(authObj);
            window.Kakao.API.request({
              url: '/v2/user/me',
              success: (res) => {
                const kakao_account = res.kakao_account;
                console.log(kakao_account);
              },
            });
          },
        });
      }
    </script>
  </body>
</html>
```

#

### [Note]

-

#

[Reference](https://www.youtube.com/watch?v=Re2R2rid1K4)
