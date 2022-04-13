// express
const express = require('express');
const app = express();
require('dotenv').config({ path: `./mysql/.env.test` });
const mysql = require('./mysql');
const xlsx = require('xlsx');

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});

app.get('/api/xlsx/categoryList', async (req, res) => {
  const workbook = xlsx.utils.book_new();
  const categoryList = await mysql.query('categoryList');

  const firstSheet = xlsx.utils.json_to_sheet(categoryList, {
    header: ['product_category_id', 'category_name', 'category_description'], // 사용할 키만 적어둠
    skipHeader: true,
  });

  firstSheet['!cols'] = [
    { wpx: 120 }, // product_category_id 열 너비
    { wpx: 250 }, // category_name 열 너비
    { wpx: 300 }, // category_description 열 너비
  ];

  xlsx.utils.book_append_sheet(workbook, firstSheet, 'Categories');
  res.setHeader('Content-disposition', 'attachments; filename=Categories.xlsx');
  res.setHeader(
    'Content-type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  );
  const downloadFile = Buffer.from(
    xlsx.write(workbook, { type: 'base64' }),
    'base64'
  );
  res.end(downloadFile);
});
