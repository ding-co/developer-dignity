## [HTML 제대로 배워 볼래?] Ep#21-Block 요소와 Inline 요소

### _Block 요소와 Inline 요소_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- Block level elements -->
    <!-- 화면의 너비 전체 차지 -->
    <!-- address, ul, li, dl, dt, ol, p, table, div, ... -->
    <h1 style="background-color: red">제목입니다.</h1>
    안녕하세요.
    <p style="background-color: green">문장입니다.</p>

    <!-- Inline elements -->
    <!-- a, span, img, ... -->
    <a href="" style="background-color: yellow">개발자의 품격</a> 안녕하세요.
    <span style="display: block; background-color: yellow"
      >span 태그입니다.</span
    >
    <script></script>
  </body>
</html>
```

#

### [Note]

- HTML 요소들 보여지는 형태 다름
  - 블록 요소; 무조건 한줄 전체 차지 (화면의 시작과 끝)
    - 실제 컨텐츠 너비와 상관없이 화면의 전체 길이만큼 다 차지하는 요소
  - 인라인 요소; HTML 요소가 가지고 있는 너비 만큼만 차지
    - 실제 컨텐츠가 가지고 있는 너비만큼만 차지
  - 디자인 속성을 이용하여 블록, 인라인 특성 바꿀 수 있음
  - 위의 블록, 인라인 요소들은 기본값이 그렇다는 것임

#

[Reference](https://www.youtube.com/watch?v=GYlrvYBxXEc)
