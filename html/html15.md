## [HTML 제대로 배워 볼래?] Ep#15-Text Formatting

### _HTML Text Formatting_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <p>일반 <b>글자</b>로 화면에 보여집니다.</p>
    <b>볼드체로 화면에 보여집니다.</b>
    <br />
    <strong>강조하는 글씨체로 화면에 보여집니다.</strong>
    <p style="font-weight: bold">p 태그도 볼드체처럼 보이게 할 수 있어요.</p>

    <i>이탤릭체로 화면에 보여집니다.</i>
    <em>em 태그이지만 이탤릭체처럼 보입니다. 하지만 이건 강조를 의미합니다.</em>

    <p>텍스트가 <small>작게</small>보이게 됩니다.</p>

    <p>집에 오는 길에 <mark>우유</mark>를 사는 걸 잊지 마라.</p>

    <p>제품 할인 <del>3만원</del> 2만 5천원</p>

    <p>내가 제일 좋아하는 색상은 <ins>노란색</ins>입니다.</p>

    <p>X<sub>2</sub></p>
    <p>X<sup>2</sup></p>

    <script></script>
  </body>
</html>
```

#

### [Note]

- p 태그
  - 블록 태그 (한줄 전체 차지)
- b 태그; bold (글자 굵게)
  - 인라인 태그 (그 너비만큼만 차지)
- strong 태그; 강조하는 글씨체
- br 태그; 줄바꿈
  - empty 태그 (단독 태그)
- b 태그 vs. strong 태그
  - 차이가 무엇일까??
  - b 태그; 눈에 보이는 글자만 굵게
  - strong 태그; 눈에 보이는 글자 굵게 + 내부적으로 강조까지 의미 줌
    - 웹 브라우저 분석기(해석기)가 강하게 읽어줌
    - 검색 엔진이 강하게 인지
  - p태그에 스타일 속성으로 bold 줘도 검색 엔진이나 웹 해석기가 읽어들이는 방식은 차이가 있음
- i 태그 vs. em 태그
  - i 태그; 이탤릭체
  - em 태그; 이탤릭체처럼 보이지만 강조 의미
- small 태그; 글씨 크기 작게
- mark 태그; 형광펜 색칠
- del 태그; 가운데 줄 긋기 (취소선)
- ins 태그; 밑줄
- sub 태그; 아래 첨자
- sup 태그; 윗 첨자

#

[Reference](https://www.youtube.com/watch?v=Djegb4z3x0M)
