'use client';
import { useEffect, useRef } from 'react';

// 1단계: 프로토타입 화면을 그대로 옮긴 버전.
// 이후 화면별 컴포넌트로 하나씩 나누고(Island, Recap, Community…) 데이터는 Supabase로 바꿔 갑니다.
const load = (src) => new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.body.appendChild(s); });

export default function Home() {
  const root = useRef(null);
  useEffect(() => {
    let alive = true;
    (async () => {
      const html = await (await fetch('/proto/markup.html')).text();
      if (!alive || !root.current) return;
      root.current.innerHTML = html;
      await load('/proto/fit.js');
      await load('/proto/dog.js');
      await load('/proto/app.js');
    })();
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {});
    return () => { alive = false; };
  }, []);
  return <div ref={root} />;
}
