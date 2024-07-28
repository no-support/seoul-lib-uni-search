# Notice

how to run on local environment: pnpm i && pnpm run dev

## History

구로구, 동작구의 경우 X-Frame-Options': 'sameorigin' 설정으로 인해 iframe으로 보여줄 목록에서 제외
X-Frame-Options': 'sameorigin' 문제를 해결하기 위해 했던 여정 기록

1. proxy 서버 설정(vite.config.js에서 주석 처리를 통해 흔적을 확인할 수 있음)
2. 정적 리소스를 불러오지 못하는 문제(localhost에서 해당 파일이 없음)
3. public 폴더에 정적 파일들을 저장
4. 그럼에도 불구하고 CSS가 깨짐
5. 직접 요청 시에 불러오는 CSS 파일들을 proxy로 요청 시에도 동일하게 불러왔음에도 해당 문제가 지속
6. 해당 구는 새 창으로 열기 방식으로 지원하기로 결정
