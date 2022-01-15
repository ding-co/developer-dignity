## [HTML 제대로 배워 볼래?] Ep#16-참조,인용관련 요소

### _참조, 인용 관련 요소_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
      For 50 years, WWF has been protecting the future of nature. ... For 50
      years, WWF has been protecting the future of nature. The world's leading
      conservation organization, WWF works in 100 countries and is supported by
      1.2 million members in the United States and close to 5 million globally.
    </blockquote>

    <p>
      WWF's goal is to:
      <q>Build a future where people live in harmony with nature.</q>
    </p>

    <p>
      The <abbr title="World Health Organization">WHO</abbr> was founded in
      1948.
    </p>

    <address>제주특별자치<br /></address>

    <p><cite>절규</cite>는 뭉크가 1893년에 그린 그림입니다.</p>

    <script></script>
  </body>
</html>
```

#

### [Note]

- blockquote 태그; 외부 긴 인용문 담는 태그
  - cite 속성; 출처 밝힘 (웹 해석기가 이해함)
- q 태그; 짧은 인용문 태그
- abbr 태그; 약어
  - title 속성; 약어에 대한 원래 공식 명칭 (풀네임)
- address 태그; 실제 물리적 주소에 대한 태그 (검색 엔진 or 웹 해석기가 용도 이해)
- cite 태그; 예술 작품에 대한 제목 (책, 소설, 영화, 조각품 등 예술)

#

[Reference](https://www.youtube.com/watch?v=AKgBFkLg4mo)
