## [HTML 제대로 배워 볼래?] Ep#19-표 삽입(table 태그)

### _table 태그_

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      table,
      th,
      td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      table {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <!-- <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>연락처</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>유재석</td>
          <td>010-0000-0000</td>
          <td>ryu@email.com</td>
        </tr>
        <tr>
          <td>김종국</td>
          <td>010-0000-0000</td>
          <td>kim@email.com</td>
        </tr>
        <tr>
          <td>송지효</td>
          <td>010-0000-0000</td>
          <td>song@email.com</td>
        </tr>
      </tbody>
    </table> -->
    <table>
      <thead>
        <tr>
          <th>학년</th>
          <th>반</th>
          <th>학생수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3">1학년</td>
          <td>1반</td>
          <td>18명</td>
        </tr>
        <tr>
          <!-- <td>1학년</td> -->
          <td>2반</td>
          <td>19명</td>
        </tr>
        <tr>
          <!-- <td>1학년</td> -->
          <td>3반</td>
          <td>18명</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2">합계</td>
          <!-- <td></td> -->
          <td>55명</td>
        </tr>
      </tfoot>
    </table>
    <script></script>
  </body>
</html>
```

#

### [Note]

- table 태그; 표
  - 하위 태그 존재
  - thead; 열 마다 제목
    - tr 내부에 td 대신에 th 태그 사용! (명확히, bold체)
  - tbody; 실제 data 들어가는 곳
    - tr 태그; 하나의 행을 만들어줌
      - td 태그; 각각의 셀
  - tfoot; 표 전체 집계
    - tr 태그 안에 td 태그 이용
- head 태그 안에 style 태그 이용하여 디자인 입히기 (inline/internal CSS)
- border-collapse 디자인 속성; 모두 border 주면 겹겹히 쌓임
  - collapse로 값 설정하면 모두 한 라인으로 붙게 됨
- 셀 병합
  - 셀 병합하고자 하는 첫번째 셀에 row/colspan 속성 사용
  - 병합되는 나머지 셀들은 삭제

#

[Reference](https://www.youtube.com/watch?v=wgaq7SnSs9U)
