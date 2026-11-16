
(function(){ function fit(){ const vw=window.innerWidth, vh=window.innerHeight; const pad=vw>=500?32:0;
  const k=Math.min((vw-pad)/402,(vh-pad)/874); document.documentElement.style.setProperty('--fit',k); }
  fit(); addEventListener('resize',fit); addEventListener('orientationchange',()=>setTimeout(fit,200)); })();
