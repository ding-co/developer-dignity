const process = require('process');

process.on('beforeExit', (code) => {
  // 이벤트 루프에 등록된 작업이 모두 종료되고 노드 프로세스가 종료되기 직전
  console.log('beforeExit 이벤트 리스너', code);
});

// 노드 프로세스 강제 종료
// 참고 예제) 관리자 초기 환경 세팅 등록 후 웹 서버 강제 종료할 때 사용 가능
// process.exit();

process.on('exit', (code) => {
  // 노드 프로세스 종료 될 때
  console.log('exit 이벤트 리스너', code);
});

console.log('출력');
