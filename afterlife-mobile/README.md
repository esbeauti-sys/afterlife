# AFTER LIFE 모바일 (Next.js · PWA)

## 실행
```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Vercel 배포
1. 이 폴더를 GitHub 저장소에 올립니다.
2. vercel.com → Add New Project → 저장소 선택 → Framework: Next.js → Deploy.
3. 휴대폰에서 주소를 열고 공유 → '홈 화면에 추가' 하면 앱처럼 열립니다.

## 구조
- `app/page.js` : 화면을 불러오는 진입점
- `public/proto/markup.html` : 화면 마크업 (1단계: 프로토타입 그대로)
- `public/proto/app.js` : 화면 동작 / 캐릭터(petSVG, renderP)
- `app/globals.css` : 디자인 토큰과 스타일
- `public/manifest.json`, `public/sw.js`, `public/icons/` : PWA

## 다음 단계
- 3단계: Supabase 로그인·DB·사진 저장 연결 (현재는 새로고침하면 데이터가 사라짐)
- 4단계: Claude API(오늘의 쪽지), 웹 푸시
- 이후 화면을 React 컴포넌트로 하나씩 분리
