## [HTML 제대로 배워 볼래?] Ep#22-폼 필드 Input Types

### _Form 필드_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <input type="button" value="조회" />
    <br />
    <h3>선호하는 언어는?</h3>
    <input type="checkbox" name="chk_lang" value="html" id="html" />
    <label for="html">HTML</label>
    <label><input type="checkbox" name="chk_lang" value="css" />CSS</label>
    <h3>관심있는 분야는?</h3>
    <label
      ><input type="checkbox" name="chk_interest" value="ai" />인공지능</label
    >
    <label
      ><input
        type="checkbox"
        name="chk_interest"
        value="blockchain"
      />블록체인</label
    >
    <label
      ><input
        type="checkbox"
        name="chk_interest"
        value="metabus"
        checked
      />메타버스</label
    >
    <br />
    <input type="color" name="" id="" value="" />
    <br />
    <input type="date" name="" id="" />
    <br />
    <input type="datetime-local" name="" id="" />
    <br />
    <input type="email" name="" id="" />
    <br />
    <input type="file" name="" id="" />
    <br />
    <input type="hidden" name="" id="user_id" value="jeremy" />
    <br />
    <input
      type="image"
      src="이미지"
      style="width: 100px; height: auto"
      alt=""
    />
    <img src="이미지" style="width: 50px; height: auto" alt="" />
    <br />
    <input type="month" name="" id="" />
    <br />
    <input type="number" name="" id="" min="0" max="50" step="10" />
    <br />
    <input type="password" name="" id="" />
    <br />
    <h3>관심있는 분야는?</h3>
    <label
      ><input
        type="radio"
        name="radio_interest"
        value="ai"
        checked
      />인공지능</label
    >
    <label
      ><input
        type="radio"
        name="radio_interest"
        value="blockchain"
      />블록체인</label
    >
    <label
      ><input
        type="radio"
        name="radio_interest"
        value="metabus"
      />메타버스</label
    >
    <br />
    <input type="range" min="0" max="50" value="10" />
    <br />
    <input type="search" name="" id="" />
    <br />
    <input type="tel" name="" id="" />
    <br />
    <input type="text" name="" id="" />
    <br />
    <h3>사용자 정보</h3>
    <form action="">
      이메일
      <input type="email" name="" id="" required />
      <br />
      <input type="submit" value="저장" />
    </form>
    <br />
    <input type="time" name="" id="" />
    <br />
    <input type="url" name="" id="" />
    <br />
    <input type="week" name="" id="" />
    <script></script>
  </body>
</html>
```

#

### [Note]

- form 필드
  - 사용자로부터 데이터 입력받을 수 있는 HTML 요소
- input 태그
  - 인라인 요소
- input type button은 실무에서 거의 사용 X
  - button 또는 a 태그 이용
- input type checkbox
  - 여러 개 항목 중 여러 개 선택 가능
  - label 태그
    - 네모 박스 선택하기 쉽지 않음 (연세 드신 분들)
    - label하고 checkbox 연결
    - id와 for 값 똑같이 매칭
    - 또는 label 태그 안에 input 태그 넣기 (권장)
      - event bubbling
  - checkbox의 name 속성 매우 중요
    - name은 동일한 값 가질 수 있음
    - 같은 체크박스에 해당하는 것들은 같은 name으로 세팅
    - 프로그램적으로 명확히 해야 함
    - js 할 때 이용
  - checkbox는 value를 직접 만들어줘야 함
- input type color
  - value에 선택한 색상 값 들어옴
- input type date
  - 날짜 값 입력 받음
- input type datetime-local
  - 날짜 연/월/일 및 시간까지
  - local은 각 나라별 시간대로 브라우저에 맞춰서 해줌
- input type email
  - 이메일 주소 받기 위한 용도
- input type file
  - 첨부 파일 (파일 업로드 용도)
- input type hidden
  - 화면에 나타나지 않음
  - 숨어있는 필드
  - 사용자로부터 입력받는 용도 X
  - 개발자가 무언가 특정 값 저장해서 숨겨놓고 쓰는 용도
  - 현재 로그인한 유저 누구인지 확인할 때 쓸 수도 있음
- input type image
  - 커서가 손모양으로 바뀜 (img 태그는 안바뀜)
  - 이미지 자체가 버튼 같은 역할 수행
- 이미지 비율 맞추는 팁
  - width 적당히 설정, height: auto;
- input type month
  - 년/월 까지만 입력 받음
- input type number
  - 숫자 입력 받음
  - min/max 속성
  - step 속성
- input type password
  - 화면에 눈으로 안보임
  - 비밀번호 입력 받기 위한 HTML 요소
- input type radio
  - 동그란 모양
  - 여러 개 선택지에서 하나만 선택 가능
  - checked 속성 (default check) <- checkbox도 사용법은 동일
  - 반드시 같은 name 값으로 묶어줘야 함 (안하면 여러개 선택 가능 -> 본래 목적 위배)
- input type range
  - 볼륨 조절 같은 조절 바
- input type search
  - 검색용 키워드 입력 받음
- input type tel
  - 전화번호 입력 받음
- input type text
  - 어떠한 문자도 입력 받을 수 있음
- form 요소
  - action 속성; 특정 url 기입
  - input 태그 내 required 속성 (값은 없음)
  - input type submit
    - 반드시 form 요소 내부에서만 쓸 수 있음
    - 버튼 같은 역할
    - action 속성에 기입한 URL로 모든 정보 다 보냄
  - form 태그 실제로 실무에서 잘 사용 안함
    - 리액트나 뷰 같은 라이브러리/프레임워크 사용 시 Ajax 같은 비동기 통신으로 서버/특정 페이지로 전달 가능
    - 최근 거의 사용하지 않는 추세임
- input type time
  - 시간만 입력 받음
- input type url
  - 웹페이지 주소 정보 받음
- input type week
  - 연도 기준 몇번째 주에 속하는지 파악
- HTML5 이전까지는 다 input type text 가지고 다 구현했음
  - HTML5 부터는 용도에 맞는 태그 다 나와서 그걸 이용하는 것을 권장

#

[Reference](https://www.youtube.com/watch?v=Ol2TzDqnMcY&list=PLqbWuGdVBJd02AYG7pILD8PFDo_kiT9gW&index=22)
