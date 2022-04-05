const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('pw1234').digest('base64'));
console.log(crypto.createHash('sha512').update('pw1234').digest('hex'));

// salting 암호화
const createSalt = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(64, (err, buf) => {
      if (err) reject(err);
      resolve(buf.toString('base64'));
    });
  });
};

const createCryptoPassword = async (plainPassword) => {
  const salt = createSalt();
  // 암호화할 문자열, salt 문자열, 반복 횟수, 출력할 바이트 수, 암호화(해시) 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });
};

const getPassword = async (plainPassword, salt) => {
  // 암호화할 문자열, salt 문자열, 반복 횟수, 출력할 바이트 수, 암호화(해시) 알고리즘
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(plainPassword, salt, 100000, 64, 'sha512', (err, key) => {
      if (err) reject(err);
      resolve({ password: key.toString('base64'), salt });
    });
  });
};

// 데이터베이스
// 사용자 아이디, 암호화된 비밀번호, salt 값이 DB에 저장되어 있음
// -> salt (사용자 아이디를 이용하여 DB로부터 salt 값 가져옴)
// getPassword 함수를 이용하여 암호화된 비밀번호 찾아서 DB에 저장된 것(암호화된 비밀번호)과 비교해서 체크함! => 통과하면 로그인됨
