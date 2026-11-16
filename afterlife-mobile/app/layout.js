import './globals.css';
export const metadata = {
  title: 'AFTER LIFE',
  description: '반려동물과 함께한 시간을 기록하고 추모하는 섬',
  manifest: '/manifest.json',
  appleWebApp: { capable: true, title: 'AFTER LIFE', statusBarStyle: 'default' },
  icons: { icon: '/icons/icon-192.png', apple: '/icons/icon-192.png' },
};
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#F8E6DC' };
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/jejumyeongjo.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
