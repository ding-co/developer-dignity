const xlsx = require('xlsx');

const workbook = xlsx.readFile('./xlsx/test.xlsx'); // 엑셀 파일 읽기
const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 이름
const firstSheet = workbook.Sheets[firstSheetName]; // 첫 번째 시트
// console.log(firstSheet['A2'].v);
firstSheet['B2'].v = 'john@gamil.com'; // 이메일 주소 변경
firstSheet['A3'] = { t: 's', v: 'ding-co' }; // 새로운 셀 기록 (타입은 문자열, value 값은 ding-co)

xlsx.writeFile(workbook, './xlsx/test2.xlsx'); // 변경된 내용을 새로운 엑셀 파일로 생성
