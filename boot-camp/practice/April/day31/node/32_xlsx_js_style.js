const xlsx = require('xlsx-js-style');
const workbook = xlsx.utils.book_new(); // 가상의 엑셀 파일 생성

const customers = [
  { name: '고객명', email: '이메일', phone: '연락처' }, // 첫 번째 행 (컬럼명)
  { name: '김종국', email: 'kim@gmail.com', phone: '010-0000-0001' },
  { name: '유재석', email: 'ryu@gmail.com', phone: '010-0000-0002' },
  { name: '송지효', email: 'song@gmail.com', phone: '010-0000-0003' },
];

const firstSheet = xlsx.utils.json_to_sheet(customers, {
  header: ['name', 'email', 'phone'], // 사용할 키만 적어둠
  skipHeader: true, // skipHeader가 false이면 엑셀 시트의 첫 번째 행에 header에 해당하는 name, email, phone이 나오게 됨
});

firstSheet['!cols'] = [
  { wpx: 120 }, // name 열 너비
  { wpx: 250 }, // email 열 너비
  { wpx: 200 }, // phone 열 너비
];

firstSheet['A1'].s = {
  font: {
    name: 'Calibri',
    sz: 24,
    bold: true,
    color: { rgb: 'ff0000' },
  },
};

xlsx.utils.book_append_sheet(workbook, firstSheet, 'Customers');
xlsx.writeFile(workbook, './xlsx/customers_styled.xlsx');
