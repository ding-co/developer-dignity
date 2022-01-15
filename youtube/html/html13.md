## [HTML 제대로 배워 볼래?] Ep#13-HTML Attribute(속성)

### _HTML Attribute_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- HTML 속성(attribute) -->
    <!-- HTML 요소의 추가적인 정보 제공 -->
    <!-- 반드시 시작태그에만 사용 가능 -->

    <!-- 속성이름=속성값 -->
    <!-- href는 a 태그에만 쓰임 -->
    <a href="https://google.com">구글</a>

    <!-- 1. 정상 이미지 주소 안넣었을 떄 alt 값 나옴 -->
    <!-- 2. 시각 장애 가지신 분들은 기계(SW/HW)를 이용 -> 페이지 내용 읽어주는 부가적인 역할 -->
    <!-- src 속성은 img와 script 등 몇가지 태그에만 쓰임 -->
    <img
      src=""
      style="width: 100px; height: 100px"
      alt="이미지에 대한 부가 정보, test.html, 연습"
    />

    <!-- style 속성 -> 현재 HTML에 다양한 스타일 입힘 -->
    <!-- 디자인-속성이름=디자인-속성값 -->
    <p style="color: red; background-color: blue">문장입니다.</p>
    <script></script>
  </body>
</html>
```

#

### [Note]

- HTML Attribute (속성)
  - HTML element에 대한 추가 정보 제공 위함
  - 반드시 시작 태그에만 사용 가능 (종료태그에는 사용 불가)
  - 속성이름과 속성값 형태로 사용됨
- HTML 요소마다 사용 가능한 속성들 차이가 조금 있음
- HTML은 element(tag)들의 집합

#

[Reference](https://www.youtube.com/watch?v=Y4VIqmH4uo4)
