## Yorkie를 활용한 동시 편집
- Yorkie 서버가 클라이언트끼리의 통신에 개입해줌
- 바닐라 자바스크립트를 활용해서 구현
- npm install yorkie-js-sdk 설치해주어야 함
- main.js을 보면 될듯!
- const client = new yorkie.Client('https://api.yorkie.dev', {apiKey: '발급받은 apiKey',});
- https://yorkie.dev/ 에 회원가입 해서 프로젝트 만들면 apiKey 발급해줌
- doc.update((root) => 값이 변경되는 경우 업데이트

# 공식문서
https://yorkie.dev/

# 동작과정
![image](https://github.com/sycha11/YorkieTest/assets/76770475/1a0f90c4-4168-4162-9651-f3d00611ae8c)


