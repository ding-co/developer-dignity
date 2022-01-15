## [HTML 제대로 배워 볼래?] Ep#18-하이퍼링크 속성 사용하기

### _하이퍼링크 속성_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- <a href="http://www.youtube.com/c/개발자의품격">개발자의품격</a> -->

    <!-- <a href="#last">last P</a>
    <a href="#middle">center P</a>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p id="middle">중간입니다.</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p>foofoofofoo</p>
    <p id="last">마지막 문장입니다.</p> -->

    <a href="javascript:showAlert();">경고</a>
    <button></button>
    <script>
      function showAlert() {
        alert('경고 메시지입니다.');
      }
    </script>
  </body>
</html>
```

#

### [Note]

- a 태그 3가지 용도
  1. 특정 페이지 이동
  2. 북마크
  3. 특정 JS 함수 호출
- a 태그 속성
  - \_self (default): 자기 자신이 바뀌는 것
  - \_blank: 새로운 탭이 열림
  - \_parent: 과거 iframe 태그 (html 안에 다른 html 넣음)
    - 부모 html - 자식 html
    - 자식 입장에서 부모에 해당하는 html 바뀌도록 원함
  - \_top: 최상위 html 바꾸도록 함 (iframe 태그)
- href 속성; 페이지 내 특정 위치로 이동도 가능 (스크롤처럼 긴 경우)
- 모든 html 요소에 id 속성 줄 수 있음 (유일한 값)

#

[Reference](https://www.youtube.com/watch?v=DLCentDpS9A)
