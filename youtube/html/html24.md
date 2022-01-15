## [HTML 제대로 배워 볼래?] Ep#24-그 외 HTML 폼 요소 알아보기

### _그 외 HTML 폼 요소_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <!-- <label for="userName">사용자이름:</label> -->
    <!-- <input type="text" name="" id="userName" /> -->
    <select name="" id="" value="">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <br />
    <h3>관심있는 분야는?</h3>
    <label for=""><input type="radio" name="radio_interest" />인공지능 </label>
    <label for=""><input type="radio" name="radio_interest" />블록체인 </label>
    <label for=""><input type="radio" name="radio_interest" />메타버스 </label>
    <br />
    <textarea name="" id="" style="width: 100%" rows="10"></textarea>
    <button onclick="doSearch()">조회</button>
    <button>저장</button>
    <br />
    <input list="browsers" />
    <datalist id="browsers">
      <option value="Firefox" />
      <option value="Chrome" />
      <option value="Safari" />
    </datalist>
    <script>
      function doSearch() {
        alert('조회가 실행됩니다.');
      }
    </script>
  </body>
</html>
```

#

### [Note]

- label
  - input 태그와 focus 연결
  - 시각 장애분들을 위해 label 연결되도록 꼭 필요
- select 태그; 콤보박스 (select 박스, multiple 속성 가능)
  - option 태그
    - 실제 값은 value 속성을 통해 참조 (select의 value 값으로 들어옴)
- radio 태그
  - 선택 옵션 많지 않은 경우에 유용
  - 만약 전세계 국가 => radio 버튼으로 나타내면 안됨
    - select 박스 이용 (선택 옵션 많은 경우에 유용)
- textarea 태그; 여러 줄 문자열 입력
  - cols 속성; 알파벳 기준 개수
    - 보통 cols 속성 안주고 style의 width 속성 줌
  - rows 속성; 문장 개수
- button 태그; 실제 액션 담는 요소 (data 담는 것이 아니라 사용자의 이벤트 액션 받음)
  - 실무에서는 input type으로 button 태그 안씀
- datalist 태그 (화면에 안보임)
  - option 태그; 종료 태그 없어도 됨
  - input 태그의 list 속성에 datalist 태그의 id 갖다 넣으면 선택하는 것 보임
  - 옵션 많으면 유용 X
  - 무엇을 선택할 지 아는 경우에는 미리 자동완성되서 보임
    - 여러 국가 list 앞 몇글자만 입력해도 바로 보임
    - 옵션 많은 것을 다른 태그 이용하면 렌더링 비용 많이 듦
    - 명확하지 않게 저장될 수 있음
    - 목록에 있는지 체크하는 로직을 별도로 짜는 경우 필요함 (단점)
- JS에서 함수; 특정 기능 하는 코드 집합

#

[Reference](https://www.youtube.com/watch?v=8-WLEp7mLMk&list=PLqbWuGdVBJd02AYG7pILD8PFDo_kiT9gW&index=24)
