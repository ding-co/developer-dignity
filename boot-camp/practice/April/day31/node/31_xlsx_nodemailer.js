require('dotenv').config({ path: `./nodemailer/.env` });
const nodemailer = require('./nodemailer');
require('dotenv').config({ path: `./mysql/.env.test` });
const mysql = require('./mysql');
const xlsx = require('xlsx');

const sendAttachedEmail = async () => {
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

  const emailData = {
    from: 'pangoons@gmail.com',
    to: 'pangoons@naver.com',
    subject: '엑셀 파일 첨부 테스트',
    text: '엑셀 파일 첨부해서 이메일로 보냅니다.',
    attachments: [
      {
        filename: 'Categories.xlsx',
        content: Buffer.from(
          xlsx.write(workbook, { type: 'base64' }),
          'base64'
        ),
      },
      {
        filename: 'dog.jpeg',
        path: './uploads/1649332305974.jpeg',
      },
    ],
  };

  await nodemailer.send(emailData);
};

sendAttachedEmail();
