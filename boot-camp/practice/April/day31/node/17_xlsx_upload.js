const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const xlsx = require('xlsx');

app.use(
  express.json({
    limit: '50mb', // 최대 50메가
  })
); // 클라이언트 요청 body를 json으로 파싱 처리

app.use('/static/images', express.static('uploads'));

const storage = multer.diskStorage({
  // 업로드 폴더에 저장됨
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // 전송된 파일이 저장되는 디렉토리
  },
  // 현재 '년월일시분초.확장자명'
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일 이름을 변경해서 저장
  },
});

const upload = multer({ storage: storage });

app.post('/api/xlsx', upload.single('xlsx'), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  // 엑셀 워크북
  const workbook = xlsx.readFile(req.file.path);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);
  res.send(firstSheetJson);
});

app.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작되었습니다.');
});
