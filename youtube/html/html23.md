## [HTML 제대로 배워 볼래?] Ep#23-Input Types 요소의 속성 알아보기

### _Input Type 속성_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <form action="">
      <input type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" />
      <div>
        아이디
        <input type="text" pattern="" autofocus />
      </div>
      <div>
        비밀번호
        <input type="text" />
      </div>
      <!-- <div>
        <input
          type="text"
          value=""
          maxlength="8"
          style="width: 100%"
          placeholder="010-0000-0000 형식으로 입력하세요."
          required
        />
      </div> -->
      <div>
        <input type="text" value="ABC" readonly />
      </div>
      <div>
        <input type="text" value="ABC" disabled />
      </div>
      <input type="submit" value="저장" />
    </form>
    <script></script>
  </body>
</html>
```

#

### [Note]

- input type 속성 (공통적인 속성)
  - value; 기본값 설정 가능
    - 사용자가 입력 값 수정 시 value 속성 값 변경됨
  - readonly; 수정 불가 (focus 불가), 읽기만 허용
    - form 태그 내부에서 submit 사용 시 특정 URL로 value 값 넘어옴
  - disabled; 색상 자체가 gray 색상으로 변경됨
    - form 태그 내부에서 submit 사용 시 특정 URL로 value 값 넘어가지 않음
  - maxlength; 입력 자릿수 제한
  - placeholder; 입력값에 대한 가이드 제공
  - required; 반드시 입력해야 함 (form 태그 내부에서 submit 시)
  - autofocus
    - 로그인 화면 같은 경우 무조건 ID 먼저 focus 되어야 함
    - 굳이 마우스로 focus 이동할 필요 없음
  - autocomplete="on"
    - 특정 값이 브라우저 캐시에 이미 저장되어 있으면 바로 보임
    - 중요한 값들을 브라우저가 기억하면 보안상 문제 생길 수 있음
  - pattern
    - JS의 정규식 알아야 사용 가능
    - 전화번호 3-4-4 자릿수와 가능 숫자 제한
- div 태그; 화면의 레이아웃 구도 만들기 위해 사용 (블록 요소)
  - 어떤 태그든지 담을 수 있음

#

[Reference](https://www.youtube.com/watch?v=BuNHxgDF9IQ&list=PLqbWuGdVBJd02AYG7pILD8PFDo_kiT9gW&index=23)
