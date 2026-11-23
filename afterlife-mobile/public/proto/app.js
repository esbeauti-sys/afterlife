
const PETS=[{"t": "dog", "img": "dog0", "n": "골든 리트리버"}, {"t": "dog", "img": "dog1", "n": "푸들"}, {"t": "dog", "img": "dog2", "n": "시바"}, {"t": "dog", "img": "dog3", "n": "웰시코기"}, {"t": "dog", "img": "dog4", "n": "닥스훈트"}, {"t": "dog", "img": "dog5", "n": "프렌치 불독"}, {"t": "dog", "img": "dog6", "n": "달마시안"}, {"t": "dog", "img": "dog7", "n": "비글"}, {"t": "dog", "img": "dog8", "n": "슈나우저"}, {"t": "dog", "img": "dog9", "n": "포메라니안"}, {"t": "dog", "img": "dog10", "n": "시추"}, {"t": "dog", "img": "dog11", "n": "말티즈"}, {"t": "cat", "img": "cat0", "n": "페르시안"}, {"t": "cat", "img": "cat1", "n": "아메리칸 숏헤어"}, {"t": "cat", "img": "cat2", "n": "삼색이"}, {"t": "cat", "img": "cat3", "n": "러시안 블루"}, {"t": "cat", "img": "cat4", "n": "샴"}, {"t": "cat", "img": "cat5", "n": "치즈 태비"}, {"t": "cat", "img": "cat6", "n": "터키시 앙고라"}, {"t": "cat", "img": "cat7", "n": "턱시도"}, {"t": "cat", "img": "cat8", "n": "스코티시 폴드"}, {"t": "cat", "img": "cat9", "n": "랙돌"}, {"t": "cat", "img": "cat10", "n": "스핑크스"}, {"t": "cat", "img": "cat11", "n": "벵갈"}, {"t": "etc", "img": "etc0", "n": "비어디드 드래곤"}, {"t": "etc", "img": "etc1", "n": "레오파드 게코"}, {"t": "etc", "img": "etc2", "n": "카멜레온"}, {"t": "etc", "img": "etc3", "n": "볼 파이톤"}, {"t": "etc", "img": "etc4", "n": "거북이"}, {"t": "etc", "img": "etc5", "n": "우파루파"}, {"t": "etc", "img": "etc6", "n": "골든 햄스터"}, {"t": "etc", "img": "etc7", "n": "드워프 햄스터"}, {"t": "etc", "img": "etc8", "n": "저빌"}, {"t": "etc", "img": "etc10", "n": "고슴도치"}, {"t": "etc", "img": "etc11", "n": "롭이어 토끼"}, {"t": "etc", "img": "etc12", "n": "개구리"}, {"t": "etc", "img": "etc13", "n": "페럿"}, {"t": "etc", "img": "etc14", "n": "왕관앵무"}, {"t": "etc", "img": "etc15", "n": "사랑앵무"}, {"t": "etc", "img": "etc16", "n": "모란앵무"}, {"t": "etc", "img": "etc17", "n": "잉꼬"}, {"t": "etc", "img": "etc18", "n": "코카투"}, {"t": "etc", "img": "etc19", "n": "로리킷"}, {"t": "etc", "img": "etc20", "n": "마카우"}, {"t": "etc", "img": "etc21", "n": "금화조"}];
const _render=render;
const TONES=[['base','원래 색',''],['light','밝게','brightness(1.12) saturate(.8)'],['warm','따뜻하게','sepia(.35) saturate(1.3)'],['cream','크림','saturate(.35) brightness(1.1)'],['dark','진하게','brightness(.82) saturate(1.15)'],['grey','잿빛','grayscale(.85)']];
const PACC={ribbon:`<g transform="translate(70 4)"><path d="M0 8 L-12 0 L-12 16Z M0 8 L12 0 L12 16Z" fill="#F2A7A0" stroke="#4A423C" stroke-width="1.6" stroke-linejoin="round"/><circle cx="0" cy="8" r="3.4" fill="#F2A7A0" stroke="#4A423C" stroke-width="1.6"/></g>`,
 crown:`<g transform="translate(62 0)"><path d="M0 16 L2 2 L8 10 L13 0 L18 10 L24 2 L26 16Z" fill="#F6D27A" stroke="#4A423C" stroke-width="1.6" stroke-linejoin="round"/></g>`,
 flower:`<g transform="translate(76 6)"><g fill="#F7C6D9" stroke="#4A423C" stroke-width="1.2"><circle cx="0" cy="-5" r="4.5"/><circle cx="5" cy="0" r="4.5"/><circle cx="0" cy="5" r="4.5"/><circle cx="-5" cy="0" r="4.5"/></g><circle r="3" fill="#F6D27A"/></g>`,
 ball:`<g transform="translate(14 84)"><circle r="9" fill="#9BB073" stroke="#4A423C" stroke-width="1.6"/><path d="M-9 0 Q0 -6 9 0" stroke="#fff" stroke-width="2" fill="none"/></g>`,
 bone:`<g transform="translate(12 88)"><path d="M-8 0 h16" stroke="#4A423C" stroke-width="7" stroke-linecap="round"/><path d="M-8 0 h16" stroke="#FFF6E6" stroke-width="4" stroke-linecap="round"/></g>`,
 heart:`<g transform="translate(86 14)"><path d="M0 6 C-8 0 -4 -6 0 -2 C4 -6 8 0 0 6Z" fill="#E98C8C" stroke="#4A423C" stroke-width="1.4"/></g>`};
const PACC_N=[['ribbon','리본'],['crown','왕관'],['flower','꽃'],['heart','하트'],['ball','공'],['bone','뼈다귀']];
render=function(o,id){ if(o&&o.sp) return petSVG(o,id); if(o&&o.img){ const f=(TONES.find(t=>t[0]===o.tone)||TONES[0])[2]; const ac=Object.keys(o.acc||{}).filter(k=>o.acc[k]).map(k=>PACC[k]).join('');
  return `<span style="position:relative;display:block;width:100%;height:100%"><img src="/img/pet/${o.img}.png" alt="" style="width:100%;height:100%;object-fit:contain;object-position:50% 100%;filter:${f||'none'}">${ac?`<svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">${ac}</svg>`:''}</span>`; } return _render(o,id); };
/* ===== 벡터 동물 (파츠 커스텀) ===== */
const PL_='#4A3B32';
const PSW=`stroke="${PL_}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
function fluff(cx,cy,rx,ry,n,a){ let d=''; for(let i=0;i<=n;i++){ const t=i/n*Math.PI*2; const x=cx+rx*Math.cos(t), y=cy+ry*Math.sin(t);
  if(!i) d+=`M${x.toFixed(1)},${y.toFixed(1)}`; else { const tm=(i-.5)/n*Math.PI*2; d+=` Q${(cx+rx*(1+a)*Math.cos(tm)).toFixed(1)},${(cy+ry*(1+a)*Math.sin(tm)).toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}`; } } return d+'Z'; }
const VP=o=>Object.assign({sp:'dog',ear:'drop',tail:'up',fluffy:false,base:'#F2D3A8',patch:'#D99A5B',belly:'#FFF8EE',pat:'none',acc:{},snout:'long',crest:false},o);
function petSide(o,id){ o=VP(o); id=id||Math.random().toString(36).slice(2,7); const A=o.acc||{};
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><clipPath id="bd${id}"><path id="bp${id}" d="BODY"/></clipPath><clipPath id="hd${id}"><circle cx="74" cy="40" r="20"/></clipPath></defs>`;
  s+=`<ellipse cx="60" cy="111" rx="40" ry="4" fill="#E8C9B8" opacity=".55"/>`;
  if(o.sp==='dog'||o.sp==='cat'){
    const body=o.fluffy?`M58 50 C38 54 22 76 28 100 Q30 108 44 108 L84 108 Q89 104 85 98 L82 70 Q80 56 70 50 Z`:`M60 52 C42 58 28 78 31 100 Q33 108 45 108 L84 108 Q88 104 84 98 L80 70 Q78 58 70 52 Z`;
    s=s.replace('BODY',body);
    // tail
    const T={up:`M34 96 C18 92 12 72 22 62 C28 56 34 60 30 66`,curl:`M34 92 C20 92 16 76 26 72 C36 68 38 80 30 82`,short:`M32 96 C24 94 22 88 26 84`,plume:''}[o.tail]||'';
    if(o.tail==='plume') s+=`<path d="${fluff(24,78,10,18,9,.28)}" fill="${o.base}" ${PSW} transform="rotate(-20 24 78)"/>`;
    else if(T) s+=`<path d="${T}" fill="none" stroke="${PL_}" stroke-width="${o.sp==='cat'?9:10}" stroke-linecap="round"/><path d="${T}" fill="none" stroke="${o.pat==='tuxedo'||o.pat==='siamese'?o.patch:o.base}" stroke-width="${o.sp==='cat'?5:6}" stroke-linecap="round"/>`;
    // body
    s+=`<path d="${body}" fill="${o.pat==='tuxedo'?o.patch:o.base}" ${PSW}/>`;
    s+=`<g clip-path="url(#bd${id})">`;
    s+=`<ellipse cx="80" cy="82" rx="12" ry="30" fill="${o.belly}"/>`;
    if(o.pat==='spots') s+=`<g fill="${o.patch}"><circle cx="44" cy="74" r="3.6"/><circle cx="56" cy="64" r="3"/><circle cx="38" cy="90" r="3.4"/><circle cx="58" cy="86" r="3.2"/><circle cx="48" cy="100" r="2.6"/></g>`;
    if(o.pat==='stripes') s+=`<g stroke="${o.patch}" stroke-width="4" stroke-linecap="round" fill="none"><path d="M46 60 q-6 8 -2 14"/><path d="M38 70 q-6 8 -2 14"/><path d="M34 84 q-4 6 -1 12"/><path d="M56 56 q-4 6 -1 12"/></g>`;
    if(o.pat==='saddle') s+=`<path d="M58 52 C42 56 30 72 32 90 L60 80 Q66 64 66 52Z" fill="${o.patch}"/>`;
    if(o.pat==='calico') s+=`<path d="M40 64 q10 -6 16 4 q-6 10 -16 6z" fill="${o.patch}"/><path d="M36 92 q8 -6 14 2 q-6 8 -14 4z" fill="#5A4A42"/>`;
    s+=`</g>`;
    // legs
    s+=`<ellipse cx="44" cy="99" rx="17" ry="11" fill="${o.pat==='tuxedo'?o.patch:o.base}" ${PSW}/>`;
    s+=`<path d="M70 74 L70 108 L82 108 L82 72" fill="${o.belly}" ${PSW}/><path d="M36 108 h12 M72 108 h10" stroke="${PL_}" stroke-width="2.2"/>`;
    if(o.pat==='siamese'||o.pat==='socks') s+=`<path d="M70.6 96 L70.6 107 L81.4 107 L81.4 96Z" fill="${o.patch}"/><ellipse cx="38" cy="104" rx="8" ry="4" fill="${o.patch}"/>`;
    // back ear
    const earC=o.pat==='mask'||o.pat==='siamese'||o.pat==='tuxedo'?o.patch:(o.pat==='saddle'||o.pat==='patch'?o.patch:o.base);
    if(o.ear==='prick') s+=`<path d="M60 30 L58 10 L72 22Z" fill="${earC}" ${PSW}/>`;
    // head
    const fl=o.fluffy?fluff(72,42,21,19,14,.12):`M54 40 A20 19 0 1 0 94 40 A20 19 0 1 0 54 40Z`;
    s+=`<path d="${fl}" fill="${o.pat==='tuxedo'?o.patch:o.base}" ${PSW}/>`;
    s+=`<g clip-path="url(#hd${id})">`;
    if(o.pat==='mask'||o.pat==='siamese') s+=`<ellipse cx="88" cy="40" rx="14" ry="12" fill="${o.patch}" opacity=".85"/>`;
    if(o.pat==='patch') s+=`<ellipse cx="70" cy="32" rx="12" ry="10" fill="${o.patch}"/>`;
    if(o.pat==='tuxedo') s+=`<path d="M80 30 Q96 36 96 60 L70 60 Q78 46 80 30Z" fill="${o.belly}"/>`;
    s+=`</g>`;
    // snout
    if(o.sp==='dog'){ const sn=o.snout==='short'?`M86 36 Q98 32 98 40 Q96 48 86 48`:`M84 32 Q104 24 106 32 Q106 40 88 46`;
      s+=`<path d="${sn}" fill="${o.pat==='mask'?o.patch:o.belly}" ${PSW}/><ellipse cx="${o.snout==='short'?97:104}" cy="${o.snout==='short'?36:30}" rx="3" ry="2.4" fill="${PL_}"/>`;
      s+=`<path d="M${o.snout==='short'?90:94} ${o.snout==='short'?45:41} q4 2 6 -2" fill="none" stroke="${PL_}" stroke-width="1.8" stroke-linecap="round"/>`; }
    else { s+=`<path d="M90 36 l3 2 l-3 2" fill="#E89A9A" stroke="${PL_}" stroke-width="1.2" stroke-linejoin="round"/><path d="M88 42 q2 2 4 0 q2 2 4 0" fill="none" stroke="${PL_}" stroke-width="1.6" stroke-linecap="round"/>`;
      s+=`<path d="M92 40 l14 -4 M92 43 l14 1" stroke="${PL_}" stroke-width="1.1" stroke-linecap="round"/>`; }
    // eye + blush
    s+=`<path d="M76 34 q4 -3 8 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><ellipse cx="80" cy="42" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/>`;
    // front ear
    if(o.ear==='prick') s+=`<path d="M64 28 L66 6 L80 22Z" fill="${earC}" ${PSW}/><path d="M67 23 L68 12 L75 21Z" fill="#F2B8B0" opacity=".85"/>`;
    if(o.ear==='drop') s+=`<path d="M62 26 Q48 26 46 44 Q46 58 56 58 Q64 56 64 44Z" fill="${earC}" ${PSW}/>`;
    if(o.ear==='fluffy') s+=`<path d="${fluff(54,44,9,16,10,.18)}" fill="${earC}" ${PSW}/>`;
    if(o.ear==='fold') s+=`<path d="M60 26 Q66 16 76 22 Q72 28 64 32Z" fill="${earC}" ${PSW}/>`;
    if(o.ear==='bat') s+=`<path d="M62 30 L56 4 L80 20Z" fill="${earC}" ${PSW}/><path d="M64 24 L60 10 L74 20Z" fill="#F2B8B0" opacity=".85"/>`;
  } else if(o.sp==='rabbit'){
    s=s.replace('BODY','');
    s+=`<path d="${o.fluffy?fluff(56,84,30,24,16,.1):'M26 84 A30 24 0 1 0 86 84 A30 24 0 1 0 26 84Z'}" fill="${o.base}" ${PSW}/><ellipse cx="70" cy="92" rx="12" ry="16" fill="${o.belly}"/>`;
    s+=`<circle cx="26" cy="86" r="7" fill="${o.belly}" ${PSW}/><path d="M64 106 h14" stroke="${PL_}" stroke-width="2.2"/>`;
    if(o.ear!=='drop') s+=`<path d="M62 36 Q56 4 64 4 Q72 6 70 36Z" fill="${o.base}" ${PSW}/><path d="M74 36 Q76 2 84 6 Q90 12 80 38Z" fill="${o.base}" ${PSW}/><path d="M77 32 Q80 10 84 10 Q86 16 80 34Z" fill="#F2B8B0" opacity=".8"/>`;
    s+=`<ellipse cx="74" cy="48" rx="19" ry="17" fill="${o.base}" ${PSW}/>`;
    if(o.pat!=='none') s+=`<ellipse cx="66" cy="44" rx="9" ry="8" fill="${o.patch}"/>`;
    if(o.ear==='drop') s+=`<path d="M60 38 Q44 44 46 72 Q54 76 60 66 Q64 50 66 40Z" fill="${o.pat!=='none'?o.patch:o.base}" ${PSW}/>`;
    s+=`<path d="M78 44 q4 -3 8 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><path d="M90 50 l3 1 l-2 2z" fill="#E89A9A"/><path d="M88 55 q2 2 4 0" fill="none" stroke="${PL_}" stroke-width="1.6"/><ellipse cx="80" cy="54" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/>`;
  } else if(o.sp==='hamster'){
    s=s.replace('BODY','');
    s+=`<path d="${fluff(60,76,34,30,18,.06)}" fill="${o.base}" ${PSW}/><ellipse cx="60" cy="86" rx="22" ry="20" fill="${o.belly}"/>`;
    if(o.pat!=='none') s+=`<path d="M30 70 Q40 46 60 46 Q50 60 52 78Z" fill="${o.patch}"/>`;
    s+=`<circle cx="40" cy="50" r="7" fill="${o.base}" ${PSW}/><circle cx="80" cy="50" r="7" fill="${o.base}" ${PSW}/><circle cx="40" cy="50" r="3.4" fill="#F2B8B0"/><circle cx="80" cy="50" r="3.4" fill="#F2B8B0"/>`;
    s+=`<path d="M48 64 q4 -3 8 0 M64 64 q4 -3 8 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><path d="M58 70 l2 2 l2 -2z" fill="#E89A9A"/><ellipse cx="46" cy="72" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/><ellipse cx="74" cy="72" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/>`;
    s+=`<ellipse cx="60" cy="88" rx="5" ry="8" fill="#6B5B52"/><path d="M52 86 q4 -4 6 0 M68 86 q-4 -4 -6 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><path d="M44 106 h8 M68 106 h8" stroke="${PL_}" stroke-width="2.2"/>`;
  } else if(o.sp==='bird'){
    s=s.replace('BODY','');
    s+=`<path d="M14 100 L106 94" stroke="#A8805C" stroke-width="7" stroke-linecap="round"/><path d="M14 100 L106 94" stroke="${PL_}" stroke-width="1.4" stroke-linecap="round" opacity=".5"/>`;
    s+=`<path d="M38 86 L18 112 L46 92Z" fill="${o.patch}" ${PSW}/>`;
    s+=`<path d="M40 88 C34 60 48 30 72 32 C90 34 92 56 84 74 C78 90 58 96 40 88Z" fill="${o.base}" ${PSW}/>`;
    s+=`<path d="M62 84 C70 80 80 68 82 58 C84 72 76 88 62 90Z" fill="${o.belly}"/>`;
    s+=`<path d="M44 58 C54 54 64 64 62 82 C54 86 44 80 40 70Z" fill="${o.patch}" ${PSW}/>`;
    if(o.pat==='stripes') s+=`<g stroke="${PL_}" stroke-width="1.4" fill="none" opacity=".7"><path d="M60 38 q4 2 8 0"/><path d="M56 44 q4 2 8 0"/><path d="M48 66 q4 2 8 0"/><path d="M46 72 q4 2 8 0"/></g>`;
    if(o.crest) s+=`<path d="M64 34 Q56 14 66 10 Q66 22 70 32 Q72 16 80 14 Q76 26 72 34" fill="${o.patch}" ${PSW}/>`;
    s+=`<path d="M86 42 L100 46 L86 52Z" fill="#F2B866" ${PSW}/><path d="M74 42 q4 -3 8 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><circle cx="76" cy="50" r="5" fill="${o.pat==='cheek'?'#F28A5B':'#F2A7A0'}" opacity="${o.pat==='cheek'?.9:.55}"/>`;
    s+=`<path d="M58 92 l-2 6 M66 92 l0 6" stroke="#E8A07A" stroke-width="2.6" stroke-linecap="round"/>`;
  }
  // accessories at neck/head
  const nx=o.sp==='hamster'?60:o.sp==='bird'?72:74, ny=o.sp==='hamster'?78:o.sp==='bird'?62:o.sp==='rabbit'?64:58, hy=o.sp==='hamster'?40:o.sp==='bird'?26:o.sp==='rabbit'?30:16;
  if(A.collar) s+=`<path d="M${nx-12} ${ny-2} Q${nx} ${ny+6} ${nx+12} ${ny-2}" fill="none" stroke="#E98C8C" stroke-width="5" stroke-linecap="round"/><circle cx="${nx}" cy="${ny+5}" r="3.6" fill="#F6D27A" stroke="${PL_}" stroke-width="1.4"/>`;
  if(A.scarf) s+=`<path d="M${nx-14} ${ny-4} Q${nx} ${ny+6} ${nx+14} ${ny-4} L${nx+14} ${ny+3} Q${nx} ${ny+13} ${nx-14} ${ny+3}Z" fill="#9BC2A0" ${PSW}/><path d="M${nx+6} ${ny+6} L${nx+12} ${ny+20} L${nx+18} ${ny+6}Z" fill="#9BC2A0" ${PSW}/>`;
  if(A.ribbon) s+=`<g transform="translate(${o.sp==='bird'?66:66} ${hy+4})"><path d="M0 0 L-10 -7 L-10 7Z M0 0 L10 -7 L10 7Z" fill="#F2A7A0" ${PSW}/><circle r="3" fill="#F2A7A0" ${PSW}/></g>`;
  if(A.flower) s+=`<g transform="translate(${nx-14} ${hy+10})"><g fill="#F7D36B" stroke="${PL_}" stroke-width="1.2"><circle cy="-4" r="3.6"/><circle cx="4" r="3.6"/><circle cy="4" r="3.6"/><circle cx="-4" r="3.6"/></g><circle r="2.4" fill="#fff"/></g>`;
  if(A.hat) s+=`<g transform="translate(${o.sp==='hamster'?60:70} ${hy})"><path d="M-10 6 L0 -16 L10 6Z" fill="#AFC6E6" ${PSW}/><circle cy="-17" r="3" fill="#F6D27A" ${PSW}/></g>`;
  if(A.ball) s+=`<g transform="translate(100 102)"><circle r="7" fill="#9BB073" ${PSW}/><path d="M-7 0 Q0 -5 7 0" stroke="#fff" stroke-width="1.6" fill="none"/></g>`;
  return s+'</svg>'; }
function petFront(o,id){ const A=o.acc||{}; const B=o.pat==='tuxedo'?o.patch:o.base;
  const earC=['mask','siamese','tuxedo','saddle','patch'].includes(o.pat)?o.patch:o.base;
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><clipPath id="fb${id}"><path d="M36 106 Q30 70 46 58 L74 58 Q90 70 84 106Z"/></clipPath><clipPath id="fh${id}"><circle cx="60" cy="42" r="23"/></clipPath></defs><ellipse cx="60" cy="111" rx="34" ry="4" fill="#E8C9B8" opacity=".55"/>`;
  if(o.tail==='plume') s+=`<path d="${fluff(88,94,8,14,8,.25)}" fill="${B}" ${PSW} transform="rotate(30 88 94)"/>`; else if(o.tail!=='short') s+=`<path d="M82 104 Q100 102 98 84" fill="none" stroke="${PL_}" stroke-width="8" stroke-linecap="round"/><path d="M82 104 Q100 102 98 84" fill="none" stroke="${B}" stroke-width="4.4" stroke-linecap="round"/>`;
  const body=o.fluffy?fluff(60,86,26,22,14,.1):`M36 106 Q30 70 46 58 L74 58 Q90 70 84 106Z`;
  s+=`<path d="${body}" fill="${B}" ${PSW}/><g clip-path="url(#fb${id})"><ellipse cx="60" cy="84" rx="13" ry="26" fill="${o.belly}"/>${o.pat==='spots'?`<g fill="${o.patch}"><circle cx="42" cy="80" r="3"/><circle cx="78" cy="88" r="3.4"/><circle cx="44" cy="98" r="2.6"/></g>`:''}${o.pat==='stripes'?`<g stroke="${o.patch}" stroke-width="3.4" stroke-linecap="round"><path d="M36 76 h8 M36 86 h7 M84 76 h-8 M84 86 h-7"/></g>`:''}</g>`;
  s+=`<path d="M50 84 V106 M70 84 V106" stroke="${PL_}" stroke-width="2"/><ellipse cx="50" cy="106" rx="7" ry="4" fill="${o.pat==='socks'||o.pat==='siamese'?o.patch:o.belly}" ${PSW}/><ellipse cx="70" cy="106" rx="7" ry="4" fill="${o.pat==='socks'||o.pat==='siamese'?o.patch:o.belly}" ${PSW}/>`;
  const ears={prick:(x,d)=>`<path d="M${x} 28 L${x+d*6} 6 L${x+d*18} 22Z" fill="${earC}" ${PSW}/><path d="M${x+d*3} 24 L${x+d*6} 12 L${x+d*13} 21Z" fill="#F2B8B0" opacity=".85"/>`,
    bat:(x,d)=>`<path d="M${x} 30 L${x+d*2} 2 L${x+d*20} 22Z" fill="${earC}" ${PSW}/><path d="M${x+d*3} 25 L${x+d*4} 10 L${x+d*14} 21Z" fill="#F2B8B0" opacity=".85"/>`,
    fold:(x,d)=>`<path d="M${x} 26 Q${x+d*4} 16 ${x+d*16} 22 Q${x+d*10} 28 ${x+d*4} 32Z" fill="${earC}" ${PSW}/>`,
    drop:(x,d)=>`<path d="M${x+d*6} 26 Q${x-d*8} 30 ${x-d*6} 52 Q${x} 60 ${x+d*6} 50Z" fill="${earC}" ${PSW}/>`,
    fluffy:(x,d)=>`<path d="${fluff(x,44,8,15,10,.18)}" fill="${earC}" ${PSW}/>`};
  const E=ears[o.ear]||ears.prick; const back=['prick','bat','fold'].includes(o.ear);
  if(back) s+=E(42,1)+E(78,-1);
  s+=`<path d="${o.fluffy?fluff(60,42,24,21,16,.1):'M37 42 A23 21 0 1 0 83 42 A23 21 0 1 0 37 42Z'}" fill="${B}" ${PSW}/><g clip-path="url(#fh${id})">`;
  if(o.pat==='mask'||o.pat==='siamese') s+=`<ellipse cx="60" cy="50" rx="14" ry="12" fill="${o.patch}" opacity=".85"/>`;
  if(o.pat==='patch') s+=`<ellipse cx="50" cy="38" rx="10" ry="9" fill="${o.patch}"/>`;
  if(o.pat==='tuxedo') s+=`<path d="M52 30 Q60 26 68 30 L74 66 L46 66Z" fill="${o.belly}"/>`;
  if(o.pat==='stripes') s+=`<path d="M54 22 v6 M60 21 v7 M66 22 v6" stroke="${o.patch}" stroke-width="3" stroke-linecap="round"/>`;
  s+=`</g>`;
  if(!back) s+=E(38,1)+E(82,-1);
  if(o.sp==='dog') s+=`<ellipse cx="60" cy="50" rx="${o.snout==='short'?11:9}" ry="8" fill="${o.pat==='mask'?o.patch:o.belly}" ${PSW}/>`;
  s+=`<path d="M48 40 q4 -3 8 0 M64 40 q4 -3 8 0" fill="none" stroke="${PL_}" stroke-width="2" stroke-linecap="round"/><ellipse cx="60" cy="47" rx="3.4" ry="2.6" fill="${o.sp==='cat'?'#E89A9A':PL_}"/><path d="M60 50 v2 M55 53 q2.5 3 5 0 q2.5 3 5 0" fill="none" stroke="${PL_}" stroke-width="1.6" stroke-linecap="round"/>`;
  s+=`<ellipse cx="46" cy="48" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/><ellipse cx="74" cy="48" rx="4" ry="2.4" fill="#F2A7A0" opacity=".6"/>`;
  if(o.sp==='cat') s+=`<path d="M42 48 l-10 -2 M42 51 l-10 2 M78 48 l10 -2 M78 51 l10 2" stroke="${PL_}" stroke-width="1.1" stroke-linecap="round"/>`;
  if(A.collar) s+=`<path d="M46 62 Q60 70 74 62" fill="none" stroke="#E98C8C" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="69" r="3.6" fill="#F6D27A" stroke="${PL_}" stroke-width="1.4"/>`;
  if(A.scarf) s+=`<path d="M44 60 Q60 70 76 60 L76 67 Q60 77 44 67Z" fill="#9BC2A0" ${PSW}/><path d="M64 70 L68 84 L74 70Z" fill="#9BC2A0" ${PSW}/>`;
  if(A.ribbon) s+=`<g transform="translate(76 24)"><path d="M0 0 L-9 -6 L-9 6Z M0 0 L9 -6 L9 6Z" fill="#F2A7A0" ${PSW}/><circle r="3" fill="#F2A7A0" ${PSW}/></g>`;
  if(A.flower) s+=`<g transform="translate(44 26)"><g fill="#F7D36B" stroke="${PL_}" stroke-width="1.2"><circle cy="-4" r="3.6"/><circle cx="4" r="3.6"/><circle cy="4" r="3.6"/><circle cx="-4" r="3.6"/></g><circle r="2.4" fill="#fff"/></g>`;
  if(A.hat) s+=`<g transform="translate(60 20)"><path d="M-10 4 L0 -18 L10 4Z" fill="#AFC6E6" ${PSW}/><circle cy="-19" r="3" fill="#F6D27A" ${PSW}/></g>`;
  if(A.ball) s+=`<g transform="translate(98 104)"><circle r="7" fill="#9BB073" ${PSW}/></g>`;
  return s+'</svg>'; }
function petSVG(o,id){ o=VP(o); if(o.front&&(o.sp==='dog'||o.sp==='cat')) return petFront(o,id||Math.random().toString(36).slice(2,7)); return petSide(o,id); }
const PET_PRESETS=[
 ['dog','골든 리트리버',{sp:'dog',ear:'drop',tail:'plume',fluffy:true,base:'#F2D3A0',patch:'#E8BE84',belly:'#FAE6C6'}],
 ['dog','웰시코기',{sp:'dog',ear:'bat',tail:'short',base:'#F0B27A',patch:'#E8995A',belly:'#FFF8EE',pat:'mask'}],
 ['dog','시바',{sp:'dog',ear:'prick',tail:'curl',base:'#EFB070',patch:'#EFB070',belly:'#FFF6E8'}],
 ['dog','말티즈',{sp:'dog',ear:'fluffy',tail:'plume',fluffy:true,snout:'short',base:'#FFFBF4',patch:'#FFFBF4',belly:'#FFFFFF'}],
 ['dog','푸들',{sp:'dog',ear:'fluffy',tail:'plume',fluffy:true,base:'#F6C9C2',patch:'#F6C9C2',belly:'#FBE1DC'}],
 ['dog','비글',{sp:'dog',ear:'drop',tail:'up',base:'#FFF8EE',patch:'#D9965E',belly:'#FFFFFF',pat:'saddle'}],
 ['dog','닥스훈트',{sp:'dog',ear:'drop',tail:'up',base:'#B7876A',patch:'#8E6550',belly:'#D9AC8C'}],
 ['dog','달마시안',{sp:'dog',ear:'drop',tail:'up',base:'#FFFDF8',patch:'#4A4442',belly:'#FFFFFF',pat:'spots'}],
 ['dog','프렌치 불독',{sp:'dog',ear:'bat',tail:'short',snout:'short',base:'#FFF4E6',patch:'#9B9AA6',belly:'#FFFFFF',pat:'patch'}],
 ['dog','슈나우저',{sp:'dog',ear:'fold',tail:'short',base:'#A3A1A8',patch:'#7B7880',belly:'#E3E1DE',pat:'mask'}],
 ['cat','코리안 숏헤어',{sp:'cat',ear:'prick',tail:'up',base:'#F2D2A8',patch:'#D99A5B',belly:'#FFF8EE',pat:'stripes'}],
 ['cat','러시안 블루',{sp:'cat',ear:'prick',tail:'up',base:'#9C9AA8',patch:'#85839A',belly:'#B9B7C2'}],
 ['cat','샴',{sp:'cat',ear:'prick',tail:'up',base:'#FBF0E0',patch:'#7A5A4E',belly:'#FFF8EE',pat:'siamese'}],
 ['cat','턱시도',{sp:'cat',ear:'prick',tail:'up',base:'#4A4442',patch:'#4A4442',belly:'#FFFFFF',pat:'tuxedo'}],
 ['cat','삼색이',{sp:'cat',ear:'prick',tail:'up',base:'#FFF8EE',patch:'#EFAA6A',belly:'#FFFFFF',pat:'calico'}],
 ['cat','스코티시 폴드',{sp:'cat',ear:'fold',tail:'plume',base:'#EED8BC',patch:'#D9AE84',belly:'#FFF8EE',pat:'stripes'}],
 ['cat','페르시안',{sp:'cat',ear:'prick',tail:'plume',fluffy:true,base:'#FFF6EC',patch:'#FFF6EC',belly:'#FFFFFF'}],
 ['etc','롭이어 토끼',{sp:'rabbit',ear:'drop',base:'#FFF6EC',patch:'#E8C9AE',belly:'#FFFFFF',pat:'patch'}],
 ['etc','토끼',{sp:'rabbit',ear:'up',base:'#E8E2DE',patch:'#B8B0AC',belly:'#FFFFFF'}],
 ['etc','골든 햄스터',{sp:'hamster',base:'#F2C08C',patch:'#E8A86C',belly:'#FFF8EE',pat:'patch'}],
 ['etc','드워프 햄스터',{sp:'hamster',base:'#C8C4C6',patch:'#9C979A',belly:'#FFFFFF',pat:'patch'}],
 ['etc','왕관앵무',{sp:'bird',crest:true,base:'#F6E6A0',patch:'#EEE3D0',belly:'#FAF0C8',pat:'cheek'}],
 ['etc','사랑앵무',{sp:'bird',base:'#A9D6F2',patch:'#F4F4F4',belly:'#C8E6F8',pat:'stripes'}],
 ['etc','모란앵무',{sp:'bird',base:'#B8D98E',patch:'#8FBF6A',belly:'#F2B49A'}]];

let CTYPE='dog';
const $=id=>document.getElementById(id);
const S={guardian:null,photos:[],met:null,dog:null,pets:[],books:[]};
let NAV=['splash'];

/* ---------- navigation ---------- */
function go(id){
  const cur=NAV[NAV.length-1]; if(cur===id) return;
  const a=$(cur), b=$(id);
  if(id==='login'){ b.classList.add('on'); NAV.push(id); return; }   // sheet over splash
  a.classList.remove('on'); a.classList.add('left');
  if(cur==='login') $('splash').classList.remove('on'),$('splash').classList.add('left');
  b.classList.remove('left'); b.classList.add('on'); NAV.push(id);
}
function back(){
  if(NAV[NAV.length-1]==='shelf'&&NAV[NAV.length-2]!=='room'){ openRoom(); return; }
  if(NAV.length<2) return;
  const cur=NAV.pop(), prev=NAV[NAV.length-1];
  $(cur).classList.remove('on','left');
  $(prev).classList.remove('left'); $(prev).classList.add('on');
  if(prev==='login'){ $('splash').classList.remove('left'); $('splash').classList.add('on'); }
}
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]'); if(g){ go(g.dataset.go); return; }
  if(e.target.closest('[data-back]')) back();
});
setTimeout(()=>{ if(NAV.length===1&&NAV[0]==='splash') go('login'); },4500);

function toast(t){const el=$('toast');el.textContent=t;el.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('show'),2200);}

/* ---------- login ---------- */
$('google').onclick=()=>{ S.guardian='하루'; setWelcome(); go('gallery'); };
$('guest').onclick=()=>{ S.guardian=null; setWelcome(); go('gallery'); };
function setWelcome(){
  $('welcome').innerHTML = S.guardian ? `환영합니다. <span class="name-hl"></span> 보호자님.` : '환영합니다. 보호자님.';
  if(S.guardian) $('welcome').querySelector('.name-hl').textContent=S.guardian;
}

/* ---------- gallery ---------- */
$('picker').onchange=e=>{
  const files=[...e.target.files]; if(!files.length) return;
  S.photos.forEach(u=>URL.revokeObjectURL(u));
  S.photos=files.map(f=>URL.createObjectURL(f));
  $('count').textContent=files.length.toLocaleString();
  const cards=$('stack').querySelectorAll('.card');
  [S.photos[2],S.photos[1],S.photos[0]].forEach((u,i)=>{ cards[i].style.backgroundImage=u?`url("${u}")`:''; cards[i].classList.toggle('off',!u); });
  $('stack').classList.remove('pop'); void $('stack').offsetWidth; $('stack').classList.add('pop');
  go('gallery-done');
  e.target.value='';
};

/* ---------- calendar ---------- */
const today=new Date(); today.setHours(0,0,0,0);
let view=new Date(today.getFullYear(),today.getMonth(),1);
const DOW=['일','월','화','수','목','금','토'];
const fmt=d=>`${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 (${DOW[d.getDay()]})`;
const daysSince=d=>Math.round((today-d)/864e5)+1;
$('dateBtn').onclick=()=>{ $('cal').classList.toggle('open'); drawCal(); };
$('prevM').onclick=()=>{ view.setMonth(view.getMonth()-1); drawCal(); };
$('nextM').onclick=()=>{ const n=new Date(view.getFullYear(),view.getMonth()+1,1); if(n<=today){view=n;drawCal();} };
$('calTitle').onclick=()=>{ $('ym').classList.toggle('show'); $('calGrid').style.display=$('ym').classList.contains('show')?'none':''; drawYM(); };
function drawCal(){
  $('calTitle').innerHTML=`${view.getFullYear()}년 ${view.getMonth()+1}월 <svg viewBox="0 0 10 10"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  $('nextM').style.visibility = (view.getFullYear()===today.getFullYear()&&view.getMonth()===today.getMonth())?'hidden':'visible';
  const g=$('calGrid'); g.innerHTML=DOW.map(d=>`<div class="dow">${d}</div>`).join('');
  const first=view.getDay(), days=new Date(view.getFullYear(),view.getMonth()+1,0).getDate();
  for(let i=0;i<first;i++) g.insertAdjacentHTML('beforeend','<div></div>');
  for(let d=1;d<=days;d++){
    const dt=new Date(view.getFullYear(),view.getMonth(),d);
    const b=document.createElement('button'); b.className='day'; b.textContent=d;
    if(+dt===+today) b.classList.add('today');
    if(S.met&&+dt===+S.met) b.classList.add('sel');
    if(dt>today) b.disabled=true;
    b.onclick=()=>{ S.met=dt; setDate(); drawCal(); setTimeout(()=>$('cal').classList.remove('open'),220); };
    g.appendChild(b);
  }
}
function drawYM(){
  const el=$('ym'); el.innerHTML='<div class="label">연도</div>';
  for(let y=today.getFullYear();y>=today.getFullYear()-25;y--){
    const b=document.createElement('button'); b.textContent=y; if(y===view.getFullYear()) b.className='sel';
    b.onclick=()=>{ view.setFullYear(y); if(view>today) view=new Date(today.getFullYear(),today.getMonth(),1); drawYM(); };
    el.appendChild(b);
  }
  el.insertAdjacentHTML('beforeend','<div class="label">월</div>');
  for(let m=0;m<12;m++){
    const b=document.createElement('button'); b.textContent=(m+1)+'월'; if(m===view.getMonth()) b.className='sel';
    const future=new Date(view.getFullYear(),m,1)>today; if(future) b.disabled=true, b.style.opacity=.35;
    b.onclick=()=>{ view=new Date(view.getFullYear(),m,1); el.classList.remove('show'); $('calGrid').style.display=''; drawCal(); };
    el.appendChild(b);
  }
}
function setDate(){
  $('dateTxt').textContent=fmt(S.met); $('dateTxt').classList.remove('ph');
  $('dateSub').textContent=`오늘은 함께한 지 ${daysSince(S.met).toLocaleString()}일째 되는 날이에요`;
}

/* ---------- customizer ---------- */
let D=JSON.parse(JSON.stringify(PET_PRESETS[1][2])); let dName='웰시코기'; let tab='kind';
const TABS=[['kind','종류'],['ear','귀'],['tail','꼬리 · 털'],['color','색'],['pat','무늬'],['pacc','소품']];
$('charBtn').onclick=()=>{ if(S.dog){D=JSON.parse(JSON.stringify(S.dog.s));dName=S.dog.n;} drawCustom(); go('custom'); };
function drawCustom(){ if(!D.sp){ D=JSON.parse(JSON.stringify(PET_PRESETS[1][2])); } if(!TABS.find(t=>t[0]===tab)) tab='kind';
  $('cPreview').innerHTML=render(D,'cp');
  $('tabs').innerHTML=TABS.map(([k,n])=>`<button class="tab${tab===k?' on':''}" data-tab="${k}">${n}</button>`).join('');
  $('tabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;drawCustom();$('panel').scrollTop=0;});
  const p=$('panel'); p.innerHTML='';
  const set=(fn)=>()=>{fn();dName='나만의 아이';drawCustom();};
  const vset=(k,v)=>()=>{D[k]=v;dName='나만의 아이';drawCustom();};
  const vrow=(title,arr,k)=>{ h3(p,title); const c=div('chips'); arr.forEach(([v,n])=>c.appendChild(chip(n,D[k]===v,vset(k,v)))); p.appendChild(c); };
  const vsw=(title,k)=>{ h3(p,title); const w=div('sws'); ['#FFFBF4','#FFF4E6','#F6E6C8','#F2D3A0','#EFB070','#D9965E','#B7876A','#8E6550','#F6C9C2','#E8E2DE','#A3A1A8','#4A4442','#A9D6F2','#B8D98E','#F6E6A0'].forEach(cl=>{const b=document.createElement('button');b.className='sw'+(D[k]===cl?' on':'');b.style.background=cl;b.onclick=vset(k,cl);w.appendChild(b);}); p.appendChild(w); };
  if(tab==='kind'){ if(D.sp==='dog'||D.sp==='cat') vrow('방향',[[false,'옆모습'],[true,'앞모습']],'front'); [['dog','강아지'],['cat','고양이'],['etc','다른 친구']].forEach(([t,tn])=>{ h3(p,tn); const g=div('grid'); PET_PRESETS.filter(x=>x[0]===t).forEach(([_,n,o],i)=>{ const tl=div('tile'+(dName===n?' on':'')); tl.innerHTML=render(o,'k'+t+i)+`<div>${n}</div>`; tl.onclick=()=>{ D=Object.assign(JSON.parse(JSON.stringify(o)),{acc:D.acc||{},front:!!D.front}); dName=n; drawCustom(); }; g.appendChild(tl); }); p.appendChild(g); }); }
  if(tab==='ear'){ if(D.sp==='dog'||D.sp==='cat') vrow('귀 모양',[['prick','쫑긋'],['bat','큰 쫑긋'],['fold','접힌 귀'],['drop','늘어진 귀'],['fluffy','복슬 귀']],'ear'); else if(D.sp==='rabbit') vrow('귀 모양',[['up','쫑긋'],['drop','롭이어']],'ear'); else h3(p,'이 친구는 귀 모양을 바꿀 수 없어요'); if(D.sp==='bird') vrow('머리 깃',[[true,'있음'],[false,'없음']],'crest'); }
  if(tab==='tail'){ if(D.sp==='dog'||D.sp==='cat'){ vrow('꼬리',[['up','올라간 꼬리'],['curl','말린 꼬리'],['plume','복슬 꼬리'],['short','짧은 꼬리']],'tail'); } vrow('털 길이',[[false,'짧은 털'],[true,'복슬 털']],'fluffy'); if(D.sp==='dog') vrow('주둥이',[['long','길게'],['short','짧게']],'snout'); }
  if(tab==='color'){ vsw('몸 색','base'); vsw('무늬 · 포인트 색','patch'); vsw('배 · 가슴 색','belly'); }
  if(tab==='pat'){ const P=D.sp==='bird'?[['none','없음'],['stripes','줄무늬'],['cheek','볼터치']]:D.sp==='dog'||D.sp==='cat'?[['none','없음'],['mask','얼굴 마스크'],['patch','눈 패치'],['saddle','등 무늬'],['spots','점박이'],['stripes','줄무늬'],['tuxedo','턱시도'],['siamese','포인트(샴)'],['calico','삼색'],['socks','양말']]:[['none','없음'],['patch','얼룩']]; vrow('무늬',P,'pat'); }
  if(tab==='pacc'){ h3(p,'여러 개를 함께 고를 수 있어요'); const c=div('chips'); [['collar','목줄'],['scarf','스카프'],['ribbon','리본'],['flower','꽃'],['hat','고깔모자'],['ball','공']].forEach(([k,n])=>{ D.acc=D.acc||{}; c.appendChild(chip(n,!!D.acc[k],()=>{D.acc[k]=!D.acc[k];drawCustom();})); }); p.appendChild(c); }
  if(false){ const g=div('grid'); PETS.filter(x=>x.t===tab).forEach(pr=>{ const t=div('tile'+(D.img===pr.img?' on':'')); t.innerHTML=`<div style="height:96px;padding:6px">${render({img:pr.img})}</div><div>${pr.n}</div>`; t.onclick=()=>{D=Object.assign({},D,{img:pr.img});dName=pr.n;drawCustom();}; g.appendChild(t); }); p.appendChild(g); }
  if(tab==='tone'){ h3(p,'우리 아이 털 색에 가깝게 맞춰 보세요'); const g=div('grid'); TONES.forEach(([k,n])=>{ const t=div('tile'+((D.tone||'base')===k?' on':'')); t.innerHTML=`<div style="height:96px;padding:6px">${render(Object.assign({},D,{tone:k}))}</div><div>${n}</div>`; t.onclick=()=>{D.tone=k;drawCustom();}; g.appendChild(t); }); p.appendChild(g); }
  if(tab==='pacc'){ h3(p,'여러 개를 함께 고를 수 있어요'); const c=div('chips'); PACC_N.forEach(([k,n])=>{ D.acc=D.acc||{}; c.appendChild(chip(n,!!D.acc[k],()=>{D.acc[k]=!D.acc[k];drawCustom();})); }); p.appendChild(c); }
  if(tab==='breed'&&false){
    const g=div('grid'); PRESETS.forEach((pr,i)=>{
      const t=div('tile'+(dName===pr.n?' on':'')); t.innerHTML=render(pr.s,'pb'+i)+`<div>${pr.n}</div>`;
      t.onclick=()=>{D=JSON.parse(JSON.stringify(pr.s));dName=pr.n;drawCustom();}; g.appendChild(t);}); p.appendChild(g);
  }
  if(tab==='ear'){
    const g=div('grid'); EARS.forEach(e=>{
      const t=div('tile'+(D.ear===e.k?' on':'')); t.innerHTML=render(Object.assign({},D,{ear:e.k}),'pe'+e.k)+`<div>${e.n}</div>`;
      t.onclick=set(()=>D.ear=e.k); g.appendChild(t);}); p.appendChild(g);
    h3(p,'귀 색'); p.appendChild(swatches('earColor',true,set));
  }
  if(tab==='color'){
    h3(p,'털 색'); p.appendChild(swatches('base',false,set));
    h3(p,'무늬 색'); p.appendChild(swatches('mark',false,set));
    h3(p,'눈썹 · 포인트 색'); p.appendChild(swatches('accent',false,set));
  }
  if(tab==='mark'){
    h3(p,'여러 개를 함께 고를 수 있어요');
    const c=div('chips'); MARKS.forEach(m=>c.appendChild(chip(m.n,!!D.marks[m.k],set(()=>D.marks[m.k]=D.marks[m.k]?0:1)))); p.appendChild(c);
  }
  if(tab==='etc'){
    h3(p,'털 길이'); let c=div('chips');
    c.appendChild(chip('짧은 털',!D.fluffy,set(()=>D.fluffy=false))); c.appendChild(chip('복슬 털',D.fluffy,set(()=>D.fluffy=true))); p.appendChild(c);
    h3(p,'꼬리'); c=div('chips'); TAILS.forEach(t=>c.appendChild(chip(t.n,D.tail===t.k,set(()=>D.tail=t.k)))); p.appendChild(c);
    h3(p,'표정'); c=div('chips');
    c.appendChild(chip('혀 내밀기',D.tongue,set(()=>D.tongue=!D.tongue))); c.appendChild(chip('볼 터치',D.blush,set(()=>D.blush=!D.blush))); p.appendChild(c);
  }
}
function div(c){const d=document.createElement('div');d.className=c;return d;}
function h3(p,t){const d=div('h3');d.textContent=t;p.appendChild(d);}
function chip(t,on,fn){const b=document.createElement('button');b.className='chip'+(on?' on':'');b.textContent=t;b.onclick=fn;return b;}
function swatches(key,same,set){
  const w=div('sws');
  if(same){const b=document.createElement('button');b.className='sw same'+(D[key]?'':' on');b.textContent='털 색과 같게';b.onclick=set(()=>D[key]=null);w.appendChild(b);}
  COLORS.forEach(c=>{const b=document.createElement('button');b.className='sw'+(D[key]&&D[key].toLowerCase()===c.c.toLowerCase()?' on':'');b.style.background=c.c;b.title=c.n;b.onclick=set(()=>D[key]=c.c);w.appendChild(b);});
  return w;
}
const pick=a=>a[Math.floor(Math.random()*a.length)];
$('dice').onclick=()=>{ const pr=pick(PET_PRESETS); const cols=['#FFFBF4','#F2D3A0','#EFB070','#B7876A','#A3A1A8','#4A4442','#F6C9C2']; D=Object.assign(JSON.parse(JSON.stringify(pr[2])),{base:pick(cols),patch:pick(cols),acc:Math.random()<.5?{collar:true}:{}}); dName='나만의 아이'; drawCustom(); return;
  const marks={};MARKS.forEach(x=>{if(Math.random()<(x.k==='spots'?.12:.35))marks[x.k]=1;});
  D=P({base:pick(COLORS).c,mark:pick([W,W,W,pick(COLORS).c]),accent:pick([W,'#B8683E','#D2CFCB']),earColor:Math.random()<.3?pick(COLORS).c:null,
    ear:pick(EARS).k,fluffy:Math.random()<.35,tail:pick(TAILS).k,marks,tongue:Math.random()<.6});
  dName='나만의 아이'; drawCustom();
};
$('charDone').onclick=()=>{
  if(REG&&REG._custom){ REG.dog=JSON.parse(JSON.stringify(D)); REG._custom=false; back(); return; }
  S.dog={s:JSON.parse(JSON.stringify(D)),n:dName};
  $('charMini').hidden=false; $('charMini').innerHTML=render(D,'mini');
  $('charTxt').innerHTML=`<span></span><small>눌러서 다시 꾸미기</small>`;
  $('charTxt').firstChild.textContent=($('petName').value.trim()||'우리 아이')+' 캐릭터';
  back();
};

/* ---------- save ---------- */
$('petName').oninput=()=>$('nameErr').textContent='';
$('save').onclick=()=>{ if(document.activeElement&&document.activeElement.blur) document.activeElement.blur(); setTimeout(()=>_save(),30); };
function _save(){
  if(!$('petName').value.trim()){ $('nameErr').textContent='아이의 이름을 알려주세요.'; $('petName').focus(); return; }
  const pet={name:$('petName').value.trim(),met:S.met,memo:$('memo').value.trim(),dog:S.dog?S.dog.s:JSON.parse(JSON.stringify(PET_PRESETS[1][2]))};
  S.pets.push(pet); toIsland(pet);
};
$('skipMemo').onclick=()=>toIsland(null);

/* ---------- 나의 섬 ---------- */
const SPOTS=[{x:80,b:498},{x:290,b:503},{x:140,b:514},{x:345,b:496}]; // 슬라이드 기준 발끝 위치(px)
function toIsland(newPet,noMood){
  const cur=NAV[NAV.length-1];
  document.querySelectorAll('.screen').forEach(el=>{el.classList.remove('on','left');});
  $('island').classList.add('on'); NAV=['island']; setTimeout(()=>setIsle(1),0);
  drawPets(newPet); if(noMood) setTimeout(()=>checkAnniv(),900); else openMood();
  S.arrived=newPet;
}
function wa(w){const c=w.charCodeAt(w.length-1);if(c<0xAC00||c>0xD7A3)return '와';return (c-0xAC00)%28?'과':'와';}
function eunneun(w){const c=w.charCodeAt(w.length-1);if(c<0xAC00||c>0xD7A3)return '가';return (c-0xAC00)%28?'이':'가';}
function drawPets(newPet){
  const isle=$('isle'); isle.querySelectorAll('.pet,.tag').forEach(e=>e.remove());
  S.pets.forEach((p,i)=>{
    const sp=SPOTS[i%SPOTS.length]; const size=90; const sat=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat'))||0;
    const el=document.createElement('div'); el.className='pet'+(p===newPet?' arrive':'');
    el.style.left=(sp.x-size/2)+'px'; el.style.top=(sat+sp.b-size*232/240)+'px';
    el.innerHTML=render(p.dog,'isl'+i);
    el.onclick=()=>{ el.classList.remove('hop','arrive'); void el.offsetWidth; el.classList.add('hop'); setTimeout(()=>openPlayer(p),380); return;
      toast(p.met?`${p.name}${wa(p.name)} 함께한 지 ${daysSince(p.met).toLocaleString()}일째`:`${p.name}의 기록을 남겨보세요`); };
    el.addEventListener('animationend',e=>{ if(e.animationName!=='idle') el.classList.remove('hop','arrive'); });
    const tag=document.createElement('div'); tag.className='rough tag'; tag.textContent=p.name;
    tag.style.left=sp.x+'px'; tag.style.top=(sat+sp.b-size*232/240-36)+'px';
    isle.appendChild(el); isle.appendChild(tag);
  });
}
$('addPet').onclick=()=>{ if(S.pets.length>=4){ toast('지금은 네 마리까지 함께할 수 있어요'); return; } NAV=['island']; openReg(); };
let MOOD=null;
const MTXT={sun:'평온한',rain:'무기력한',cloud:'무덤덤한',moon:'그리운'};
let PREV_MOOD=null;
function openMood(){ PREV_MOOD=MOOD; MOOD=null; document.querySelectorAll('.mc').forEach(c=>c.classList.remove('on')); $('moodSave').disabled=true;
  setTimeout(()=>{$('moodDim').classList.add('on');$('mood').classList.add('on');},500); }
function closeMood(msg){ $('mood').classList.remove('on');$('moodDim').classList.remove('on'); setTimeout(()=>checkAnniv(),900);
  const p=S.arrived; S.arrived=null;
  setTimeout(()=>toast(msg|| (p?`${p.name}${eunneun(p.name)} 섬에 도착했어요`: (S.pets.length?'오늘도 섬에 와 주셨네요':'우리 아이를 추가해 섬에 데려와 주세요'))),450); }
document.querySelectorAll('.mc').forEach(c=>c.onclick=()=>{document.querySelectorAll('.mc').forEach(x=>x.classList.remove('on'));c.classList.add('on');MOOD=c.dataset.m;setBg(MOOD);$('moodSave').disabled=false;});
const BG={sun:'bg-day',cloud:'bg-sunset',moon:'bg-night',rain:'bg-base',base:'bg-base'};
Object.values(BG).forEach(n=>{const i=new Image();i.src=`/img/${n}.jpg`;});
let bgTop='A',bgCur='base';
function setBg(m){ if(m===bgCur){$('bgRain').classList.toggle('on',m==='rain');return;} bgCur=m; const nxt=bgTop==='A'?'B':'A'; $('bg'+nxt).style.backgroundImage=`url(/img/${BG[m]}.jpg)`;
  $('bg'+nxt).style.opacity=1; $('bg'+bgTop).style.opacity=0; $('bg'+nxt).style.zIndex=0; $('bg'+bgTop).style.zIndex=-1; bgTop=nxt;
  $('bgRain').classList.toggle('on',m==='rain'); }

let ISI=1, isT=null;
function isleIdx(){ return Math.round($('isles').scrollLeft/$('isles').clientWidth); }
function setIsle(i,smooth){ const el=$('isles'); el.scrollTo({left:i*el.clientWidth,behavior:smooth?'smooth':'auto'}); ISI=i; syncIsleTab(i); }
function syncIsleTab(i){ $('island').classList.toggle('not-home',i!==1); const nav=$('island').querySelector('nav.tabbar'); if(!nav||!nav.querySelector('.blob'))return; const k=['comm','isle','store'][i];
  nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.k===k)); placeBlob(nav,k); }
$('isles').addEventListener('scroll',()=>{ const i=isleIdx(); if(i!==ISI){ ISI=i; syncIsleTab(i); } clearTimeout(isT); isT=setTimeout(()=>{ if(isleIdx()===0){ tabGo('comm'); setTimeout(()=>setIsle(1),450); } },260); });
setTimeout(()=>setIsle(1),0);
$('moodSave').onclick=()=>{ if(!MOOD)return; $('island').classList.remove('m-sun','m-rain','m-cloud','m-moon'); $('island').classList.add('m-'+MOOD); setBg(MOOD); PREV_MOOD=MOOD; S.moods.push({m:MOOD,d:new Date()}); AI_CACHE=null; closeMood(`${MTXT[MOOD]} 마음을 섬에 남겼어요`); };
$('moodSkip').onclick=()=>{ setBg(PREV_MOOD||'base'); closeMood(); };
$('moodBack').onclick=()=>{ setBg(PREV_MOOD||'base'); closeMood(' '); setTimeout(()=>{ $('toast').classList.remove('show'); },460);
  const prev=S.pets.length?'form':'gallery'; NAV=['island']; go(prev); };

/* ---------- 리캡 ---------- */
let RC=null;
const PERIODS=[['month','이번 달'],['year','올해'],['all','함께한 모든 날']];
function openRecap(p){
  RC={pet:p,period:'all',sel:[]};
  $('rcPet').innerHTML=render(p.dog,'rcp');
  $('rcHello').innerHTML=`<span></span>와의 시간을<br>한 권의 이야기로 엮어볼까요?`;
  $('rcHello').firstChild.textContent=p.name; $('rcHello').innerHTML=$('rcHello').innerHTML.replace('와의',wa(p.name)+'의');
  $('rcTitle').value=''; $('rcLine').value='';
  drawPeriod(); drawPhotos(); $('rcScroll').scrollTop=0; go('recap');
}
function drawPeriod(){ const c=$('rcPeriod'); c.innerHTML='';
  PERIODS.forEach(([k,n])=>c.appendChild(chip(n,RC.period===k,()=>{RC.period=k;drawPeriod();}))); }
function drawPhotos(){ const g=$('rcPhotos'); g.innerHTML='';
  if(!S.photos.length){ g.innerHTML='<div class="rc-empty">아직 불러온 사진이 없어요</div>'; return; }
  S.photos.slice(0,40).forEach((u,i)=>{ const d=div('ph-it'); d.style.backgroundImage=`url("${u}")`;
    const k=RC.sel.indexOf(i); if(k>=0){d.classList.add('on');d.dataset.n=k+1;}
    d.onclick=()=>{ const j=RC.sel.indexOf(i); if(j>=0) RC.sel.splice(j,1); else if(RC.sel.length<7) RC.sel.push(i); else toast('사진은 7장까지 고를 수 있어요'); drawPhotos(); };
    g.appendChild(d); }); }
$('rcPick').onchange=e=>{ const f=[...e.target.files]; if(!f.length)return; const start=S.photos.length;
  S.photos=S.photos.concat(f.map(x=>URL.createObjectURL(x))); f.slice(0,7-RC.sel.length).forEach((_,k)=>RC.sel.push(start+k)); drawPhotos(); e.target.value=''; };
$('rcTitle').oninput=()=>{};
$('rcMake').onclick=()=>{
  const t=$('rcTitle').value.trim(); if(!t){ toast('이야기의 제목을 지어주세요'); $('rcTitle').focus(); return; }
  const r={pet:RC.pet,title:t,period:RC.period,photos:RC.sel.map(i=>S.photos[i]),line:$('rcLine').value.trim(),made:new Date()};
  showRecap(r,true);
};
function periodText(r){ const n=r.made; if(r.period==='month') return `${n.getFullYear()}년 ${n.getMonth()+1}월`;
  if(r.period==='year') return `${n.getFullYear()}년`; const m=r.pet.met; return m?`${m.getFullYear()}.${String(m.getMonth()+1).padStart(2,'0')} — ${n.getFullYear()}.${String(n.getMonth()+1).padStart(2,'0')}`:'함께한 모든 날'; }
let VIEW=null;
function showRecap(r,isNew){
  VIEW=r; const v=$('rv'); v.innerHTML='';
  const cov=div('rv-cover'); cov.innerHTML=`<div class="k">AFTER LIFE RECAP</div><h3></h3><div class="d"></div><div class="pet">${render(r.pet.dog,'rv')}</div>`;
  cov.querySelector('h3').textContent=r.title; cov.querySelector('.d').textContent=`${r.pet.name} · ${periodText(r)}`; v.appendChild(cov);
  if(r.photos.length){ const g=div('rv-grid'); r.photos.forEach(u=>{const d=document.createElement('div');d.style.backgroundImage=`url("${u}")`;g.appendChild(d);}); v.appendChild(g); }
  const st=div('rv-stats'); const days=r.pet.met?daysSince(r.pet.met).toLocaleString():'—';
  st.innerHTML=`<div><b>${days}</b><span>함께한 날</span></div><div><b>${r.photos.length}</b><span>담은 사진</span></div><div><b>${S.books.filter(b=>b.pet===r.pet).length+(isNew?1:0)}</b><span>번째 이야기</span></div>`; v.appendChild(st);
  const line=r.line||r.pet.memo; if(line){ const l=div('rv-line'); l.textContent=`“${line}”`; v.appendChild(l); } else v.appendChild(div('rv-line-sp'));
  $('rvFoot').style.display=isNew?'':'none'; go('recapView');
}
$('rvShelf').onclick=()=>{ S.books.push(VIEW); openShelf(VIEW); toast(`'${VIEW.title}'${VIEW.title.match(/[가-힣]$/)&&((VIEW.title.charCodeAt(VIEW.title.length-1)-0xAC00)%28)?'을':'를'} 책장에 꽂았어요`); };

/* ---------- 책장 ---------- */
const BOOKC=['#F0A3A0','#A8C3DF','#F6E8D6','#C4D4A5','#FDD9BD'];
function openShelf(fresh){
  if(fresh!==true){ showOnly('shelf'); } else fresh=null; NAV=['island','shelf'];
  const b=$('books'); b.innerHTML='';
  if(!S.books.length){ b.innerHTML='<div class="shelf-empty">아직 꽂힌 책이 없어요.<br>추모 섬에서 아이를 눌러 리캡을 보고,<br>마음에 드는 리캡을 저장해 보세요.</div>'; return; }
  S.books.forEach((r,i)=>{ const H=$('books').clientHeight-10; const h=Math.min([300,420,380,340,400][i%5],H*[.72,1,.9,.8,.95][i%5]); const w=r.title.length>6?82:Math.max(74,80);
    const el=div('rough book'+(r===fresh?' new':'')); el.style.cssText=`width:${w}px;height:${h}px;background:${BOOKC[i%BOOKC.length]};--pt:${Math.round(h*.22)}px`;
    el.innerHTML='<i></i><i></i><span></span>'; el.querySelector('span').textContent=r.title;
    el.onclick=()=>openAlbum(r); b.appendChild(el); });
}
$('addAlbum').onclick=()=>openAlbumNew(S.pets[0]);



/* ---------- 앨범 만들기 ---------- */
let AN=null;
function openAlbumNew(pet){ AN={pet:pet||S.pets[0]||null,sel:[]}; $('anTitle').value=''; drawAn(); goFrom('albumNew'); }
function goFrom(id){ go(id); }
function drawAn(){ const g=$('anPick'); g.innerHTML='';
  if(!S.photos.length){ const e=div('an-empty'); e.innerHTML='<svg viewBox="0 0 24 24" width="22" height="22"><rect x="2.5" y="3.5" width="19" height="17" rx="3.5" fill="#AF9083"/><circle cx="8.5" cy="9" r="2" fill="#fff"/><path d="M4.5 18 10 12.5l3.5 3.5 2.5-2.5 3.5 3.5z" fill="#fff"/></svg>갤러리에서 사진 고르기'; e.onclick=()=>$('anFile').click(); g.appendChild(e); return; }
  S.photos.forEach((u,i)=>{ const d=div('ph-it'+(AN.sel.includes(i)?' on':'')); d.style.backgroundImage=`url("${u}")`;
    d.onclick=()=>{ const j=AN.sel.indexOf(i); j>=0?AN.sel.splice(j,1):AN.sel.push(i); drawAn(); }; g.appendChild(d); });
  const m=div('more'); m.innerHTML='+<br>더 불러오기'; m.onclick=()=>$('anFile').click(); g.appendChild(m);
  const inf=div('info'); inf.textContent=`${AN.sel.length}장 선택됨`; g.appendChild(inf); }
$('anFile').onchange=e=>{ const f=[...e.target.files]; if(!f.length)return; const st=S.photos.length;
  S.photos=S.photos.concat(f.map(x=>URL.createObjectURL(x))); f.forEach((_,k)=>AN.sel.push(st+k)); drawAn(); e.target.value=''; };
$('anSave').onclick=()=>{ if(document.activeElement&&document.activeElement.blur) document.activeElement.blur(); setTimeout(()=>_anSave(),30); };
function _anSave(){ const t=$('anTitle').value.trim();
  if(!AN.sel.length){ toast('앨범에 담을 사진을 골라주세요'); return; }
  if(!t){ toast('앨범의 이름을 적어 주세요'); $('anTitle').focus(); return; }
  const r={pet:AN.pet,title:t,photos:AN.sel.map(i=>({u:S.photos[i],cap:''})),made:new Date()};
  S.books.push(r); openShelf(r); toast(`'${t}' 앨범이 책장에 꽂혔어요`); };

/* ---------- 앨범 보기 ---------- */
let AV=null, avObs=null;
function openAlbum(r){ AV=r; $('avSoft').checked=false; $('albumView').classList.remove('soft'); $('avTitle').textContent=r.title; drawAlbum(); $('avScroll').scrollTop=0; go('albumView'); }
function drawAlbum(){
  const d=AV.made; $('avMeta').textContent=`${AV.pet?AV.pet.name+' · ':''}사진 ${AV.photos.length}장 · ${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
  const g=$('avGrid'); g.innerHTML='';
  AV.photos.forEach(ph=>{ const c=div('av-card'); c.innerHTML=`<div class="im" style="background-image:url('${ph.u}')"></div><div class="cp${ph.cap?'':' e'}"></div>`;
    c.querySelector('.cp').textContent=ph.cap||'한 줄 남기기'; c.onclick=()=>openLb(ph); g.appendChild(c); }); }
let LB=null;
function openLb(ph){ LB=ph; $('lbImg').src=ph.u; $('lbCap').value=ph.cap||''; $('lb').classList.add('on'); }
$('lbX').onclick=()=>{ LB.cap=$('lbCap').value.trim(); $('lb').classList.remove('on'); drawAlbum(); };
$('lbCap').onkeydown=e=>{ if(e.key==='Enter'&&!e.isComposing) $('lbX').click(); };
$('avEdit').onclick=()=>{ const h=$('avTitle'); if(h.tagName!=='H2')return; const inp=document.createElement('input'); inp.value=AV.title; inp.maxLength=10; h.replaceWith(inp); inp.focus();
  const done=()=>{ if(inp.value.trim()) AV.title=inp.value.trim(); const nh=document.createElement('h2'); nh.id='avTitle'; nh.textContent=AV.title; inp.replaceWith(nh); };
  inp.onblur=done; inp.onkeydown=e=>{if(e.key==='Enter')inp.blur();}; };

/* ---------- 커뮤니티 ---------- */
const COMMS=[{n:'우리 강아지 자랑하기',c:278},{n:'오늘의 산책 인증',c:214},{n:'사고뭉치 시절 썰 풀기',c:186},{n:'견종별 수다방',c:115},{n:'무지개다리 너머 편지',c:342}];
const STONE_X=[0.17,0.40,0.62,0.79,0.93]; let CM=0;
const SAMPLE={0:[['보리맘','보리','오늘 미용하고 왔어요. 세상에서 제일 귀여운 솜뭉치 등장!',24],['콩이네','콩이','간식 앞에서만 이렇게 얌전해요 ㅎㅎ',17]],
 1:[['산책왕','뭉치','한강 한 바퀴 완주! 바람 냄새 맡느라 바빴던 날',31]],2:[['두부아빠','두부','소파 다리를 다 갉아놨던 그 시절… 지금은 그것도 그립네요',42]],
 3:[['웰시러버','코기','코기 키우시는 분들 털 관리 어떻게 하세요?',12]],4:[['하늘이언니','하늘','하늘아, 거기서도 산책 많이 하고 있지? 오늘도 보고 싶어.',88]]};
const POSTS={}; Object.keys(SAMPLE).forEach(k=>POSTS[k]=SAMPLE[k].map(([who,pet,t,l],i)=>({c:+k,who,pet,t,l,on:false,dog:PET_PRESETS[(i*7+ +k*5)%PET_PRESETS.length][2],ago:`${i+1}시간 전`})));
function openComm(){ if(NAV[NAV.length-1]!=='comm'){ showOnly('comm'); NAV=['island','comm']; } $('comm').classList.add('ov'); setTimeout(drawOv,60); $('cmList').classList.remove('open'); $('cmDd').classList.remove('open'); setTimeout(()=>panComm(CM),30); }
function panComm(i){ CM=(i+COMMS.length)%COMMS.length; const W=$('cmZoom').clientWidth; const iw=340*1650/628;
  $('cmPan').style.transform=`translateX(${W/2-STONE_X[CM]*iw}px)`; drawStoneFl(); drawCard(); $('cmEnter').textContent=`'${COMMS[CM].n}' 들어가기`; }
$('cmPrev').onclick=()=>panComm(CM-1); $('cmNext').onclick=()=>panComm(CM+1);
$('cmBack').onclick=()=>{ if(!$('comm').classList.contains('ov')){ $('comm').classList.add('ov'); $('cmBk').textContent='함께 기억하는 섬'; drawOv(); } else tabGo('isle'); };
$('cmDd').onclick=()=>{ $('cmDd').classList.toggle('open'); $('cmList').classList.toggle('open'); };
$('cmList').innerHTML=COMMS.map((c,i)=>`<button class="cm-row" data-i="${i}">${i+1}.&nbsp; ${c.n}<small><svg width="18" height="14" viewBox="0 0 18 14"><g fill="#776257"><circle cx="6" cy="4" r="3"/><circle cx="12.5" cy="4.5" r="2.6"/><path d="M0 13c0-3.3 2.7-5 6-5s6 1.7 6 5zM11 13c0-1.8-.6-3.3-1.7-4.3.9-.4 2-.6 3.2-.6 2.9 0 5.5 1.5 5.5 4.9z"/></g></svg>${c.c}명</small></button>`).join('');
$('cmList').querySelectorAll('.cm-row').forEach(b=>b.onclick=()=>{ $('cmList').classList.remove('open'); $('cmDd').classList.remove('open'); enterStone(+b.dataset.i); });
$('cmEnter').onclick=()=>openFeed(CM);
$('cmZoom').onclick=()=>openFeed(CM);
let FD=0, fdImg=null;
function openFeed(i){ FD=i; $('fdTitle').textContent=COMMS[i].n; $('fdCount').textContent=`${COMMS[i].c}명 참여 중`; drawFeed(); go('feed'); }
function drawFeed(){ const l=$('fdList'); l.innerHTML='';
  POSTS[FD].forEach(p=>{ const e=div('post'); e.innerHTML=`<div class="who"><div class="av">${render(p.dog,'av'+Math.random().toString(36).slice(2,6))}</div><div><span class="nm"></span><small></small></div></div><p></p>${p.img?`<div class="pimg" style="background-image:url('${p.img}')"></div>`:''}<div class="acts"><button class="lk${p.on?' on':''}">♥ <span>${p.l}</span></button><button class="fl">🌼 꽃 남기기</button></div>`;
    e.querySelector('.nm').textContent=p.who; e.querySelector('small').textContent=`${p.pet} 보호자 · ${p.ago}`; e.querySelector('p').textContent=p.t;
    e.querySelector('.lk').onclick=()=>{ p.on=!p.on; p.l+=p.on?1:-1; drawFeed(); };
    e.querySelector('.fl').onclick=()=>toast(`${p.pet}에게 꽃을 남겼어요`);
    l.appendChild(e); }); }
$('fdFile').onchange=e=>{ const f=e.target.files[0]; if(!f)return; fdImg=URL.createObjectURL(f); $('fdPhBtn').classList.add('has'); e.target.value=''; };
$('fdSend').onclick=()=>{ const t=$('fdText').value.trim(); if(!t&&!fdImg){ toast('이야기를 적어주세요'); return; }
  const me=S.pets[0]; (S.myPosts=S.myPosts||[]).push({t,c:FD,d:new Date(),img:fdImg}); POSTS[FD].unshift({c:FD,d:new Date(),me:true,who:S.guardian||'나',pet:me?me.name:'우리 아이',t,l:0,on:false,img:fdImg,dog:me?me.dog:JSON.parse(JSON.stringify(PET_PRESETS[1][2])),ago:'방금'});
  $('fdText').value=''; fdImg=null; $('fdPhBtn').classList.remove('has'); drawFeed(); $('fdList').scrollTop=0; };
$('toComm').onclick=e=>{ e.stopPropagation(); openComm(); };
$('commSlide').onclick=()=>tabGo('comm');


/* ---------- 탭바 ---------- */
const TABS_=[['set','설정','GEAR'],
 ['comm','커뮤니티','<path fill="currentColor" d="M12 3.5c5 0 9 3.3 9 7.4s-4 7.4-9 7.4c-.9 0-1.8-.1-2.6-.3L5 20l1-3.6C4.2 15 3 13.1 3 10.9 3 6.8 7 3.5 12 3.5z"/><g fill="#FAF6F0"><circle cx="8.3" cy="11" r="1.3"/><circle cx="12" cy="11" r="1.3"/><circle cx="15.7" cy="11" r="1.3"/></g>'],
 ['isle','추모 섬','<g fill="currentColor"><ellipse cx="6" cy="10" rx="2.2" ry="2.8"/><ellipse cx="10" cy="6.3" rx="2.2" ry="2.9"/><ellipse cx="14.4" cy="6.3" rx="2.2" ry="2.9"/><ellipse cx="18.2" cy="10" rx="2.2" ry="2.8"/><path d="M12.1 11.2c2.6 0 5.6 3.8 5.6 6 0 1.9-1.5 2.6-3 2.6-1 0-1.7-.5-2.6-.5s-1.6.5-2.6.5c-1.5 0-3-.7-3-2.6 0-2.2 3-6 5.6-6z"/></g>'],
 ['store','저장소','<path fill="currentColor" d="M3 6.5A2 2 0 0 1 5 4.5h4.2l2 2.2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'],
 ['prof','프로필','<g fill="currentColor"><circle cx="12" cy="7.8" r="4.3"/><path d="M3.8 20.5c0-4.3 3.7-7.3 8.2-7.3s8.2 3 8.2 7.3z"/></g>']];
const ICN={set:'gear',comm:'ic-comm',isle:'ic-paw',store:'ic-store',prof:'ic-prof'};
const TAB_OF={room:'store',player:'isle',room:'store',leave:'comm',profile:'prof',settings:'set',island:'isle',comm:'comm',feed:'comm',shelf:'store',albumNew:'store',albumView:'store'};
function buildTabbars(){ document.querySelectorAll('nav.tabbar').forEach(nav=>{
  const scr=nav.closest('.screen').id; const act=scr==='ph'?PH_TAB:scr==='island'?['comm','isle','store'][typeof ISI==='number'?ISI:1]:TAB_OF[scr]||'isle';
  nav.innerHTML='<i class="blob"></i>'+TABS_.map(([k,n,ic])=>`<button data-k="${k}" class="${k===act?'on':''}"><i class="ti" style="--a:url(/img/${ICN[k]}.png);--b:url(/img/${ICN[k]}-on.png)"></i><span>${n}</span></button>`).join('');
  placeBlob(nav,act);
  nav.querySelectorAll('button').forEach(b=>b.onclick=()=>{ const k=b.dataset.k; nav.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); placeBlob(nav,k); setTimeout(()=>tabGo(k),260); }); }); }
function placeBlob(nav,k){ const i=TABS_.findIndex(t=>t[0]===k); requestAnimationFrame(()=>{ const w=nav.clientWidth-16; nav.querySelector('.blob').style.left=(8+w/5*(i+.5))+'px'; }); }
let PH_TAB='set';
function showOnly(id){
  const target=$(id); const others=[...document.querySelectorAll('.screen.on,.screen.left')].filter(e=>e!==target);
  target.style.transition='none'; target.classList.remove('left'); target.classList.add('tabx'); target.style.opacity='0'; void target.offsetWidth;
  target.style.transition=''; target.style.opacity=''; target.classList.add('on'); target.style.zIndex=5;
  others.forEach(e=>{ e.classList.add('tabx'); e.classList.remove('on','left'); });
  setTimeout(()=>{ target.style.zIndex=''; document.querySelectorAll('.screen.tabx').forEach(e=>{ e.style.transition='none'; e.classList.remove('tabx'); void e.offsetWidth; e.style.transition=''; }); },420);
}
function tabGo(k){ if(k==='isle'||k==='store'){ if(NAV[NAV.length-1]!=='island') showOnly('island'); NAV=['island']; setTimeout(()=>setIsle(k==='store'?2:1,true),30); }
  else if(k==='comm'){ showOnly('comm'); NAV=['island','comm']; openComm(); } 
  else if(k==='prof'){ openProfile(); showOnly('profile'); NAV=['island','profile']; }
  else { openSettings(); showOnly('settings'); NAV=['island','settings']; }
  setTimeout(buildTabbars,420); }
buildTabbars();


/* ---------- 보호자 캐릭터 ---------- */
const SKIN=['#F8D9C4','#F2C4B0','#F4B8B0','#E2A879','#C98552','#9A5E3A','#6E4128'];
const HAIRC=['#3B302A','#7A4A2E','#C46A3C','#E9C27A','#D9D6D2','#F2A9B8'];
const CLOTH=['#D9CFF2','#CFE4BE','#FBE7A8','#AFC6E6','#BFE6DA','#F8F2E6','#F2B8B0'];
const HAIRS=[['bob','단발'],['long','긴 생머리'],['bun','올림머리'],['short','짧은 머리'],['curly','곱슬'],['pony','묶은 머리']];
const OUTFIT=[['dress','원피스'],['coat','코트'],['pants','셔츠·바지'],['skirt','조끼·치마']];
const PAT=[['none','무늬 없음'],['dot','물방울'],['check','체크']];
const HATS=[['none','없음'],['beret','베레모'],['beanie','털모자'],['sun','중절모']];
const FACE=[['calm','편안히 감은 눈'],['smile','활짝 웃음'],['wink','윙크'],['shades','선글라스']];
const HOLD=[['none','없음'],['bag','가방'],['cup','찻잔'],['phone','휴대폰'],['cane','지팡이'],['cat','고양이 친구']];
const GP=()=>({skin:SKIN[0],hair:'bob',hairC:HAIRC[1],outfit:'dress',cloth:CLOTH[0],pat:'none',hat:'none',face:'calm',hold:'none',nose:false,scarf:false,tall:'mid',side:false});
function renderP(o){ o=Object.assign(GP(),o||{});
  const L='#2E2622', sw=`stroke="${L}" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"`;
  const H={short:-14,mid:0,tall:14}[o.tall]||0; const hy=40-H; // head top
  const sh=hy+92; // shoulder y
  let s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 260"><defs><pattern id="pd" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.6" fill="#fff" opacity=".85"/></pattern><pattern id="pc" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 0H10M0 0V10" stroke="#fff" stroke-width="1.4" opacity=".8"/></pattern></defs>`;
  s+=`<ellipse cx="80" cy="250" rx="34" ry="4" fill="#E8B7A3" opacity=".5"/>`;
  if(o.hair==='long') s+=`<path d="M60 ${hy+10} Q60 ${hy-6} 80 ${hy-6} Q100 ${hy-6} 100 ${hy+10} L102 ${sh+14} L58 ${sh+14}Z" fill="${o.hairC}" ${sw}/>`;
  if(o.hair==='curly') s+=`<g fill="${o.hairC}" ${sw}><circle cx="62" cy="${hy+10}" r="10"/><circle cx="98" cy="${hy+10}" r="10"/><circle cx="60" cy="${hy+28}" r="9"/><circle cx="100" cy="${hy+28}" r="9"/></g>`;
  // legs
  s+=`<path d="M72 228 V246 M88 228 V246" stroke="${L}" stroke-width="5.5" stroke-linecap="round"/><path d="M72 228 V246 M88 228 V246" stroke="${o.skin}" stroke-width="2.6" stroke-linecap="round"/><path d="M66 247 h10 M84 247 h10" stroke="${L}" stroke-width="3.6" stroke-linecap="round"/>`;
  const fill=o.pat==='dot'?'url(#pd)':o.pat==='check'?'url(#pc)':'none';
  const body=o.outfit==='dress'?`M68 ${sh} L92 ${sh} L112 230 L48 230Z`:o.outfit==='coat'?`M64 ${sh} L96 ${sh} L100 230 L60 230Z`:o.outfit==='pants'?`M64 ${sh} L96 ${sh} L97 ${sh+70} L63 ${sh+70}Z`:`M64 ${sh} L96 ${sh} L97 ${sh+62} L63 ${sh+62}Z`;
  if(o.outfit==='pants') s+=`<path d="M63 ${sh+66} L62 232 L78 232 L80 ${sh+80} L82 232 L98 232 L97 ${sh+66}Z" fill="${o.cloth}" ${sw}/>`;
  if(o.outfit==='skirt') s+=`<path d="M63 ${sh+58} L97 ${sh+58} L108 230 L52 230Z" fill="${CLOTH[(CLOTH.indexOf(o.cloth)+2)%CLOTH.length]}" ${sw}/>`;
  s+=`<path d="${body}" fill="${o.cloth}" ${sw}/>${fill!=='none'?`<path d="${body}" fill="${fill}"/>`:''}`;
  if(o.outfit==='coat') s+=`<path d="M80 ${sh} V230" stroke="${L}" stroke-width="1.6"/><g fill="#F6EED9" stroke="${L}" stroke-width="1.2"><circle cx="80" cy="${sh+28}" r="2.4"/><circle cx="80" cy="${sh+58}" r="2.4"/><circle cx="80" cy="${sh+88}" r="2.4"/></g>`;
  // neck+head capsule
  s+=`<path d="M66 ${hy+16} Q66 ${hy} 80 ${hy} Q94 ${hy} 94 ${hy+16} L94 ${sh+4} L66 ${sh+4}Z" fill="${o.skin}" ${sw}/>`;
  s+=`<path d="M72 ${sh} L80 ${sh+8} L88 ${sh}" fill="none" stroke="${L}" stroke-width="1.6"/>`;
  if(o.scarf) s+=`<path d="M64 ${sh-2} Q80 ${sh+8} 96 ${sh-2} L96 ${sh+5} Q80 ${sh+15} 64 ${sh+5}Z" fill="#E59A9A" ${sw}/><path d="M68 ${sh+6} L64 ${sh+40} L72 ${sh+40} L74 ${sh+8}" fill="#E59A9A" ${sw}/>`;
  // arms
  const armR=o.hold==='none'||o.hold==='bag'?`M96 ${sh+6} Q102 ${sh+40} 98 ${sh+70}`:`M96 ${sh+6} Q104 ${sh+40} 108 ${sh+48}`;
  s+=`<path d="M64 ${sh+6} Q58 ${sh+40} 62 ${sh+70}" fill="none" stroke="${L}" stroke-width="6.5" stroke-linecap="round"/><path d="M64 ${sh+6} Q58 ${sh+40} 62 ${sh+70}" fill="none" stroke="${o.skin}" stroke-width="3.4" stroke-linecap="round"/>`;
  s+=`<path d="${armR}" fill="none" stroke="${L}" stroke-width="6.5" stroke-linecap="round"/><path d="${armR}" fill="none" stroke="${o.skin}" stroke-width="3.4" stroke-linecap="round"/>`;
  if(o.hold==='bag') s+=`<path d="M70 ${sh+4} L98 ${sh+60}" stroke="${L}" stroke-width="1.6"/><rect x="96" y="${sh+58}" width="14" height="16" rx="2" fill="#D98C8C" ${sw}/>`;
  if(o.hold==='cup') s+=`<path d="M106 ${sh+40} h12 l-2 8 h-8z" fill="#fff" ${sw}/><path d="M104 ${sh+49} h16" stroke="${L}" stroke-width="2"/>`;
  if(o.hold==='phone') s+=`<rect x="104" y="${sh+32}" width="8" height="14" rx="2" fill="#8DB4E6" ${sw}/>`;
  if(o.hold==='cane') s+=`<path d="M110 ${sh+44} V248 M104 ${sh+44} q6 -6 6 0" fill="none" stroke="${L}" stroke-width="2.6" stroke-linecap="round"/>`;
  if(o.hold==='cat') s+=`<g transform="translate(16 210)"><path d="M6 30 Q4 14 12 10 L10 2 L16 8 L22 2 L21 10 Q26 16 24 30Z" fill="#A9A6A4" ${sw}/><path d="M24 26 q10 -2 8 -14" fill="none" stroke="${L}" stroke-width="2.4" stroke-linecap="round"/></g>`;
  // hair front
  const hf={bob:`M64 ${hy+40} Q60 ${hy-4} 80 ${hy-4} Q100 ${hy-4} 96 ${hy+40} L92 ${hy+40} L92 ${hy+12} Q80 ${hy+8} 68 ${hy+12} L68 ${hy+40}Z`,
    long:`M64 ${hy+18} Q62 ${hy-4} 80 ${hy-4} Q98 ${hy-4} 96 ${hy+18} Q86 ${hy+6} 80 ${hy+8} Q72 ${hy+6} 64 ${hy+18}Z`,
    bun:`M65 ${hy+18} Q64 ${hy-2} 80 ${hy-2} Q96 ${hy-2} 95 ${hy+18} Q86 ${hy+8} 80 ${hy+8} Q74 ${hy+8} 65 ${hy+18}Z`,
    short:`M65 ${hy+14} Q64 ${hy-2} 80 ${hy-2} Q96 ${hy-2} 95 ${hy+14} Q84 ${hy+6} 65 ${hy+14}Z`,
    curly:`M64 ${hy+14} Q62 ${hy-6} 80 ${hy-6} Q98 ${hy-6} 96 ${hy+14} Q88 ${hy+4} 80 ${hy+8} Q72 ${hy+4} 64 ${hy+14}Z`,
    pony:`M65 ${hy+16} Q64 ${hy-2} 80 ${hy-2} Q96 ${hy-2} 95 ${hy+16} Q84 ${hy+6} 65 ${hy+16}Z`}[o.hair];
  if(o.hair==='bun') s+=`<circle cx="80" cy="${hy-8}" r="9" fill="${o.hairC}" ${sw}/>`;
  if(o.hair==='pony') s+=`<path d="M64 ${hy+8} Q52 ${hy+20} 56 ${hy+46} Q62 ${hy+30} 66 ${hy+16}" fill="${o.hairC}" ${sw}/>`;
  s+=`<path d="${hf}" fill="${o.hairC}" ${sw}/>`;
  // face
  const ey=hy+30;
  if(o.side){
    if(o.hair==='bob'||o.hair==='long'||o.hair==='curly') s+=`<path d="M64 ${hy+4} Q62 ${hy+30} 66 ${o.hair==='long'?sh+10:hy+40} L76 ${o.hair==='long'?sh+10:hy+40} L76 ${hy+6}Z" fill="${o.hairC}" ${sw}/>`;
    s+=`<path d="M93 ${ey-2} L108 ${ey+4} L93 ${ey+8}" fill="${o.skin}" ${sw}/>`;
    if(o.face==='shades') s+=`<ellipse cx="88" cy="${ey}" rx="5" ry="4" fill="${L}"/><path d="M83 ${ey} H70" stroke="${L}" stroke-width="1.6"/>`;
    else if(o.face==='smile') s+=`<path d="M84 ${ey+1} q3 -3 6 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
    else if(o.face==='wink') s+=`<circle cx="87" cy="${ey}" r="1.9" fill="${L}"/>`;
    else s+=`<path d="M84 ${ey} q3 2 6 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
    s+= o.face==='smile'||o.face==='wink'?`<path d="M84 ${ey+16} q5 5 9 -1z" fill="#C8665E" stroke="${L}" stroke-width="1.6" stroke-linejoin="round"/>`:`<path d="M84 ${ey+16} q4 2 8 -1" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
    s+=`<ellipse cx="84" cy="${ey+10}" rx="4" ry="2.4" fill="#F29C9C" opacity=".55"/><circle cx="72" cy="${ey+6}" r="1.8" fill="#E9C27A"/>`;
  } else {
  if(o.face==='shades') s+=`<g fill="${L}"><ellipse cx="73" cy="${ey}" rx="5" ry="4"/><ellipse cx="87" cy="${ey}" rx="5" ry="4"/></g><path d="M78 ${ey} h4" stroke="${L}" stroke-width="1.6"/>`;
  else if(o.face==='smile') s+=`<path d="M70 ${ey+1} q3 -3 6 0 M84 ${ey+1} q3 -3 6 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
  else if(o.face==='wink') s+=`<path d="M70 ${ey} q3 2 6 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/><path d="M84 ${ey-2} l5 2 l-5 2" fill="none" stroke="${L}" stroke-width="1.8" stroke-linejoin="round"/>`;
  else s+=`<path d="M70 ${ey} q3 2 6 0 M84 ${ey} q3 2 6 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
  s+=`<path d="M80 ${ey+4} q-3 6 1 7" fill="none" stroke="${L}" stroke-width="1.5" stroke-linecap="round"/>`;
  s+= o.face==='smile'||o.face==='wink'?`<path d="M74 ${ey+16} q6 7 12 0z" fill="#C8665E" ${sw.replace('2.4','1.6')}/>`:`<path d="M75 ${ey+16} q5 3 10 0" fill="none" stroke="${L}" stroke-width="1.8" stroke-linecap="round"/>`;
  s+=`<ellipse cx="69" cy="${ey+10}" rx="4" ry="2.4" fill="#F29C9C" opacity=".55"/><ellipse cx="91" cy="${ey+10}" rx="4" ry="2.4" fill="#F29C9C" opacity=".55"/>`;
  s+=`<circle cx="66" cy="${ey+6}" r="1.6" fill="#E9C27A"/><circle cx="94" cy="${ey+6}" r="1.6" fill="#E9C27A"/>`;
  }
  // hats
  if(o.hat==='beret') s+=`<path d="M62 ${hy+4} Q60 ${hy-10} 80 ${hy-12} Q100 ${hy-10} 98 ${hy+4} Q80 ${hy} 62 ${hy+4}Z" fill="#D98C8C" ${sw}/><path d="M80 ${hy-12} v-5" stroke="${L}" stroke-width="2.4"/>`;
  if(o.hat==='beanie') s+=`<path d="M64 ${hy+10} Q62 ${hy-14} 80 ${hy-14} Q98 ${hy-14} 96 ${hy+10}Z" fill="#E59A9A" ${sw}/><path d="M63 ${hy+4} h34" stroke="${L}" stroke-width="2"/><circle cx="80" cy="${hy-17}" r="4.5" fill="#fff" ${sw}/>`;
  if(o.hat==='sun') s+=`<path d="M56 ${hy+4} Q80 ${hy-4} 104 ${hy+4}" fill="none" stroke="${L}" stroke-width="2.4"/><path d="M66 ${hy+2} Q66 ${hy-14} 80 ${hy-14} Q94 ${hy-14} 94 ${hy+2}Z" fill="#F4E9D2" ${sw}/><path d="M66 ${hy-2} h28" stroke="#8DB4A6" stroke-width="3"/>`;
  return s+'</svg>'; }
S.me={name:'',id:'',p:GP()}; let PC=null, pcTab='basic';
function openProfile(){ PC=Object.assign(GP(),JSON.parse(JSON.stringify(S.me.p))); $('pfName').value=S.me.name||S.guardian||''; $('pfId').value=S.me.id; $('pfErr').textContent=''; drawPf(); drawPc(); }
function drawPf(){ const c=$('pfCard'); c.innerHTML=`<div class="av">${renderP(S.me.p)}</div><div><b></b><small></small></div>`;
  c.querySelector('b').textContent=S.me.name||'보호자'; c.querySelector('small').textContent=S.me.id?'@'+S.me.id:'아이디를 만들어 주세요'; }
function drawPc(){
  $('pcPrev').innerHTML=renderP(PC);
  const T=[['basic','기본'],['face','얼굴'],['hair','머리'],['cloth','옷'],['acc','소품']];
  $('pcTabs').innerHTML=T.map(([k,n])=>`<button class="tab${pcTab===k?' on':''}" data-k="${k}">${n}</button>`).join('');
  $('pcTabs').querySelectorAll('.tab').forEach(b=>b.onclick=()=>{pcTab=b.dataset.k;drawPc();});
  const p=$('pcPanel'); p.innerHTML='';
  const row=(title,arr,key)=>{ h3(p,title); const c=div('chips'); arr.forEach(([v,n])=>{const b=chip(n,(PC[key]||'')===v,()=>{PC[key]=v; drawPc();});b.classList.add('pk');c.appendChild(b);}); p.appendChild(c); };
  const sws=(title,arr,key)=>{ h3(p,title); const w=div('sws'); arr.forEach(cl=>{const b=document.createElement('button');b.className='sw'+(PC[key]===cl?' on':'');b.style.background=cl;b.onclick=()=>{PC[key]=cl;drawPc();};w.appendChild(b);}); p.appendChild(w); };
  if(pcTab==='basic'){ h3(p,'방향'); { const c=div('chips'); [['정면',false],['옆모습',true]].forEach(([n,v])=>{const b=chip(n,!!PC.side===v,()=>{PC.side=v;drawPc();});b.classList.add('pk');c.appendChild(b);}); p.appendChild(c); } row('키',[['short','작은 편'],['mid','보통'],['tall','큰 편']],'tall'); sws('피부색',SKIN,'skin'); }
  if(pcTab==='face'){ row('표정',FACE,'face'); }
  if(pcTab==='hair'){ row('머리 모양',HAIRS,'hair'); sws('머리 색',HAIRC,'hairC'); row('모자',HATS,'hat'); }
  if(pcTab==='cloth'){ row('옷',OUTFIT,'outfit'); sws('옷 색',CLOTH,'cloth'); row('무늬',PAT,'pat'); }
  if(pcTab==='acc'){ row('들고 있는 것',HOLD,'hold'); h3(p,'목도리'); const c=div('chips'); [['두르기',true],['안 함',false]].forEach(([n,v])=>{const b=chip(n,!!PC.scarf===v,()=>{PC.scarf=v;drawPc();});b.classList.add('pk');c.appendChild(b);}); p.appendChild(c); }
  if(pcTab==='hair'){ row('머리 모양',HAIRS,'hair'); sws('머리 색',HAIRC,'hairC'); }
  if(pcTab==='cloth'){ row('옷',OUTFIT,'outfit'); sws('옷 색',CLOTH,'cloth'); }
}
$('pcRand').onclick=()=>{ PC={skin:pick(SKIN),hair:pick(HAIRS)[0],hairC:pick(HAIRC),outfit:pick(OUTFIT)[0],cloth:pick(CLOTH),pat:pick(PAT)[0],hat:pick(HATS)[0],face:pick(FACE)[0],hold:pick(HOLD)[0],scarf:Math.random()<.3,side:Math.random()<.5,tall:pick(['short','mid','tall'])}; drawPc(); };
$('pfSave').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{
  const n=$('pfName').value.trim(), id=$('pfId').value.trim();
  if(!n){ $('pfErr').textContent='이름을 적어 주세요.'; return; }
  if(!/^[a-zA-Z][a-zA-Z0-9_.]{2,15}$/.test(id)){ $('pfErr').textContent='아이디는 영문으로 시작해 3~16자로 적어 주세요.'; return; }
  S.me={name:n,id:id.toLowerCase(),p:PC}; S.guardian=n; $('pfErr').textContent=''; drawPf(); toast('프로필을 저장했어요'); },30); };

/* ---------- 설정 ---------- */
let ST=null;
const HIDE=['작별 직전의 순간','투병, 아픔이 담긴 사진','채팅 대화 내역','영상','음성녹음','괜찮아요. 모두 볼게요.'];
function openSettings(){ if(!openSettings.keep) SM='list'; openSettings.keep=false; const pet=S.pets[S.stPet||0]; ST=pet?JSON.parse(JSON.stringify({star:Object.assign({on:false,date:'',later:false,letter:'',vis:'me',img:null},pet.star?{...pet.star,date:pet.star.date?ymd(new Date(pet.star.date)):''}:{}),calm:pet.cfg?.calm??55,hide:pet.cfg?.hide||[],dates:pet.cfg?.dates||[{n:'',d:'',t:''}],recall:pet.cfg?.recall??true})):null; drawSt(); }
const CALM=[[10,'파도처럼 밀려와요'],[30,'자주 울컥해요'],[55,'괜찮다가도 그리워요'],[80,'조금 잔잔해요'],[100,'편안히 떠올려요']];
let SM='list';
function drawSt(){
  const b=$('stBody'); const pet=S.pets[S.stPet||0];
  $('settings').classList.toggle('editing',SM==='edit'&&!!pet); $('stSave').onclick=null;
  if(SM==='list'||!pet){ SM='list'; $('settings').classList.remove('editing'); b.innerHTML='<h2 class="st-title">추모 섬에 있는 동물들을<br>편집해 보세요.</h2><div class="pets-list" id="petsRow"></div><p class="sc-d" style="margin:10px 4px 0">아이 코드를 가족에게 보내면 공동 보호자로 함께 기록할 수 있어요.</p><div style="height:130px"></div>'; drawPetsRow(); b.scrollTop=0; return; }
  const nm=pet.name, eul=(nm.charCodeAt(nm.length-1)-0xAC00)%28?'을':'를';
  b.innerHTML=`<div class="ed-who"><span class="av">${render(pet.dog,'edw')}</span><div><b class="pn"></b><button class="ed-info" id="stInfo">기본 정보 고치기 ›</button></div></div>
  <h2 class="st-title">기록을 어떻게<br>마주하고 싶으신가요?</h2>
  <div class="sc"><div class="sc-h"><span class="n">1</span><span class="pn-q"></span></div>
    <div class="calm" id="stCalm">${CALM.map(([v,t])=>`<button class="cm${ST.calm===v?' on':''}" data-v="${v}"><i style="--o:${v/100}"></i>${t}</button>`).join('')}</div>
    <p class="sc-d">마음이 아플수록 사진을 흐릿하게 보여 드려요. 언제든 바꿀 수 있어요.</p>
    <div class="st-prev" id="stPrev"></div></div>
  <div class="sc"><div class="sc-h"><span class="n">2</span><span>아직 보고 싶지 않은 추억은 가려 둘게요</span></div>
    <div class="tg-list" id="stHide">${HIDE.slice(0,5).map((h,i)=>`<label class="tg"><span>${h}</span><input type="checkbox" data-i="${i}" ${ST.hide.includes(i)?'checked':''}><i></i></label>`).join('')}</div>
    <p class="sc-d">켜 둔 항목은 앨범과 리캡에서 보이지 않아요.</p></div>
  <div class="sc"><div class="sc-h"><span class="n">3</span><span>특별히 기억하고 싶은 날</span></div>
    <div id="stDates"></div><button class="dt-add" id="stAdd">+ 날짜 추가하기</button></div>
  <div class="sc"><label class="tg big"><span>기억하는 날이 다가오면<br><small>그날에 어울리는 추억을 먼저 보여 드려요</small></span><input type="checkbox" id="stRecall" ${ST.recall?'checked':''}><i></i></label></div>
  <div class="sc"><div class="sc-h"><span class="n">5</span><span class="pn-s"></span></div>
    <button class="star-btn${ST.star.on?' on':''}" id="stStar">${ST.star.on?'★':'☆'} <span class="pn-st"></span></button>
    <div class="star-box" id="stStarBox" ${ST.star.on?'':'hidden'}>
      <div class="note">그동안 함께 남긴 사진과 기록은 그대로 남아 있어요. <span class="pn"></span>의 섬은 밤하늘 아래 별이 뜬 섬으로 바뀌어요.</div>
      <div class="rg-l" style="margin:4px 0 0">언제 별이 되었나요?</div>
      <div style="display:flex;gap:10px;align-items:center"><input type="date" class="dt-d" id="stStarD" style="flex:1" value="${ST.star.date||''}"><label class="rg-chk" style="margin:0;font-size:13px"><input type="checkbox" id="stStarLater" ${ST.star.later?'checked':''}><i></i>나중에 적을게요</label></div>
      <div class="rg-l" style="margin:4px 0 0"><span class="pn"></span>에게 마지막 편지를 남겨 주세요.</div>
      <div class="lt"><b><span class="pn"></span>에게</b><textarea id="stLetter" maxlength="2000" placeholder="하고 싶었던 말을 천천히 적어 주세요."></textarea>${ST.star.img?`<img class="lt-img" src="${ST.star.img}">`:''}
        <div class="lt-f"><label for="stLtImg">🖼 사진 붙이기</label><input type="file" id="stLtImg" accept="image/*" hidden><span id="stLtN">0 / 2000</span></div></div>
      <p class="sc-d" style="margin:0">지금 쓰기 어렵다면 비워 두셔도 돼요. 언제든 이 화면에서 쓸 수 있어요.</p>
      <div class="rg-l" style="margin:4px 0 0">편지는 누가 볼 수 있나요?</div>
      <div class="opts two" style="margin:0"><button class="opt${ST.star.vis!=='fam'?' on':''}" data-vis="me">나만 볼게요</button><button class="opt${ST.star.vis==='fam'?' on':''}" data-vis="fam">함께 기억하는<br>가족도 볼 수 있어요</button></div>
    </div></div>
  <button class="st-del" id="stDel">나의 섬에서 지우기</button>
  <div style="height:190px"></div>`;
  b.scrollTop=0; $('stInfo').onclick=()=>{ NAV=['island','settings']; openReg(pet); };
  b.querySelector('.pn-q').textContent=`${nm}${eul} 떠올리면 지금 마음은 어떤가요?`;
  b.querySelectorAll('.pn').forEach(e=>e.textContent=nm);
  b.querySelector('.pn-s').textContent=`${nm}${JS.ga(nm)} 별이 되었다면 알려 주세요. 마음이 준비되었을 때 눌러도 괜찮아요.`;
  b.querySelector('.pn-st').textContent=`${nm}${JS.ga(nm)} 별이 되었어요`;
  $('stLetter').value=ST.star.letter||''; $('stLtN').textContent=`${(ST.star.letter||'').length} / 2000`;
  $('stLetter').oninput=()=>{ ST.star.letter=$('stLetter').value; $('stLtN').textContent=`${ST.star.letter.length} / 2000`; };
  $('stStar').onclick=()=>{ ST.star.on=!ST.star.on; $('stStar').classList.toggle('on',ST.star.on); $('stStar').firstChild.textContent=ST.star.on?'★ ':'☆ '; $('stStarBox').hidden=!ST.star.on; };
  $('stStarD').onchange=e=>ST.star.date=e.target.value; $('stStarLater').onchange=e=>{ ST.star.later=e.target.checked; $('stStarD').disabled=e.target.checked; };
  $('stLtImg').onchange=e=>{ const f=e.target.files[0]; if(!f)return; ST.star.img=URL.createObjectURL(f); drawSt(); };
  b.querySelectorAll('[data-vis]').forEach(o=>o.onclick=()=>{ ST.star.vis=o.dataset.vis; b.querySelectorAll('[data-vis]').forEach(x=>x.classList.toggle('on',x===o)); });
  b.querySelectorAll('.sp').forEach((c,i)=>{ c.querySelector('b').textContent=S.pets[i].name; c.onclick=()=>{S.stPet=i;openSettings.keep=true;openSettings();}; });
  const pv=$('stPrev'); const ph=S.photos.slice(0,4); for(let i=0;i<4;i++){ const d=document.createElement('div'); if(ph[i]) d.style.backgroundImage=`url("${ph[i]}")`; pv.appendChild(d); }
  const upd=()=>{ const bl=((100-ST.calm)/100*8).toFixed(1)+'px'; pv.querySelectorAll('div').forEach(d=>d.style.filter=`blur(${bl})`); };
  $('stCalm').querySelectorAll('.cm').forEach(c=>c.onclick=()=>{ ST.calm=+c.dataset.v; $('stCalm').querySelectorAll('.cm').forEach(x=>x.classList.toggle('on',x===c)); upd(); }); upd();
  $('stHide').querySelectorAll('input').forEach(c=>c.onchange=()=>{ const i=+c.dataset.i; ST.hide=ST.hide.filter(x=>x!==i&&x!==5); if(c.checked) ST.hide.push(i); });
  drawDates();
  $('stAdd').onclick=()=>{ ST.dates.push({n:'',d:'',t:''}); drawDates(); };
  $('stRecall').onchange=e=>ST.recall=e.target.checked;
  $('stSave').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{ const was=pet.star&&pet.star.on; pet.cfg=JSON.parse(JSON.stringify(ST)); const st=ST.star;
    pet.star=st.on?{on:true,date:st.date&&!st.later?new Date(st.date):null,letter:st.letter,vis:st.vis,img:st.img,later:st.later}:null; pet.where=st.on?'star':'with';
    applyBlur(); drawPets(); SM='list'; drawSt(); if(st.on&&!was){ setBg('moon'); toast(`${nm}의 섬에 별이 떴어요`); } else toast('저장했어요'); },30); };
  $('stDel').onclick=()=>{ $('stMsg').innerHTML=''; const t=document.createElement('span'); t.textContent=`${nm}${eul} 나의 섬에서 지울까요?`; $('stMsg').appendChild(t); $('stMsg').insertAdjacentHTML('beforeend','<br><small style="color:#AF9083;font-size:13px">앨범과 기록은 책장에 그대로 남아요.</small>'); $('stModal').classList.add('on'); };
}
const DTYPE=['사진','내가 남긴 글','모두'];
function drawDates(){ const w=$('stDates'); w.innerHTML='';
  ST.dates.forEach((d,i)=>{ const r=div('dt-card'); r.innerHTML=`<div class="dt-top"><input class="dt-n" placeholder="어떤 날인가요? (예: 기일)" maxlength="12"><button class="dt-x" aria-label="삭제">×</button></div><input class="dt-d" type="date"><div class="dt-q">어떤 기록을 보고 싶으신가요?</div><div class="dt-t">${DTYPE.map(t=>`<button class="seg${d.t===t?' on':''}">${t}</button>`).join('')}</div>`;
    const n=r.querySelector('.dt-n'), dd=r.querySelector('.dt-d'); n.value=d.n; dd.value=d.d;
    n.oninput=()=>d.n=n.value; dd.onchange=()=>d.d=dd.value;
    r.querySelectorAll('.seg').forEach(b=>b.onclick=()=>{ d.t=b.textContent; r.querySelectorAll('.seg').forEach(x=>x.classList.toggle('on',x===b)); });
    r.querySelector('.dt-x').onclick=()=>{ ST.dates.splice(i,1); if(!ST.dates.length) ST.dates.push({n:'',d:'',t:''}); drawDates(); };
    w.appendChild(r); }); }
$('stNo').onclick=()=>$('stModal').classList.remove('on');
$('stYes').onclick=()=>{ const i=S.stPet||0; const pet=S.pets[i]; S.pets.splice(i,1); S.stPet=0; $('stModal').classList.remove('on'); drawPets(); toast(`${pet.name}${eunneun(pet.name)} 섬을 떠났어요`); SM='list'; openSettings(); };
function applyBlur(){ const pet=S.pets[0]; const v=pet&&pet.cfg?pet.cfg.calm:100; document.documentElement.style.setProperty('--pblur',Math.max(2,(100-v)/100*8).toFixed(1)+'px'); }
document.querySelectorAll('[data-tabhome]').forEach(b=>b.onclick=()=>{ if(b.closest('#settings')&&SM==='edit'){ SM='list'; drawSt(); return; } tabGo('isle'); });


/* ---------- 사운드 ---------- */
const BGM=new Audio('/snd/bgm.mp3'); BGM.loop=true; BGM.volume=.35;
const CLK='/snd/click.mp3'; let musicOn=true, bgmStarted=false;
function clickSnd(){ try{ const a=new Audio(CLK); a.volume=.5; a.play().catch(()=>{}); }catch(e){} }
function startBgm(){ if(bgmStarted||!musicOn) return; bgmStarted=true; BGM.play().then(()=>$('music').classList.add('on')).catch(()=>{bgmStarted=false;}); }
document.addEventListener('click',e=>{ if(e.target.closest('button,label,.pet,.book,.mc,.tile,.ph-it,.opt,.chip,.av-card,.cm-row,[data-go]')) clickSnd(); startBgm(); },true);
$('music').onclick=e=>{ e.stopPropagation(); musicOn=!musicOn; if(musicOn){ BGM.play().catch(()=>{}); bgmStarted=true; } else BGM.pause(); $('music').classList.toggle('on',musicOn); };


/* ---------- 앨범 흐리게 토글 ---------- */
$('avSoft').onchange=e=>{ applyBlur(); $('albumView').classList.toggle('soft',e.target.checked); };

/* ---------- 기억의 집 ---------- */
let RMF='all', RMD=null;
function openRoom(){ showOnly('room'); NAV=['island','room']; $('rmQ').value=''; RMD=null; RMF='all'; drawRmChips(); $('rmRes').innerHTML=''; $('rmTip').style.display=''; setTimeout(()=>$('rmTip').style.display='none',4000); }
$('houseSlide').querySelector('.house-hit').onclick=e=>{ e.stopPropagation(); const h=$('houseSlide').querySelector('.hint'); if(!h.classList.contains('pop')){ h.classList.add('pop'); h.textContent=''; h.innerHTML='그동안 저장한 리캡과 글을 이 집에 보관해 두었어요.<br><b>한 번 더 누르면 집 안으로 들어가요.</b>'; return; } h.classList.remove('pop'); h.innerHTML='집을 터치해서 안으로 들어가보세요.<br>그동안 저장한 사진과 글을 볼 수 있어요.'; openRoom(); };
$('houseSlide').querySelector('.store-btn').onclick=e=>{ e.stopPropagation(); $('houseSlide').querySelector('.house-hit').click(); };
function drawRmChips(){ const c=$('rmChips'); c.innerHTML='';
  const F=[['all','전체'],['album','앨범'],['msg','메시지'],['mood','마음 기록'],['scrap','저장한 글']].concat(S.pets.map((p,i)=>['pet'+i,p.name]));
  F.forEach(([k,n])=>{ const b=chip(n,RMF===k,()=>{RMF=k;drawRmChips();rmSearch();}); c.appendChild(b); });
  if(RMD){ const b=chip(`📅 ${RMD} ✕`,true,()=>{RMD=null;drawRmChips();rmSearch();}); c.prepend(b); } }
const ymd=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
function allItems(){ const it=[];
  S.books.forEach(b=>it.push({k:'album',pet:b.pet,t:b.title,sub:`앨범 · 사진 ${b.photos.length}장`,txt:b.title+' '+b.photos.map(p=>p.cap).join(' '),d:b.made,th:b.photos[0]&&b.photos[0].u,go:()=>openAlbum(b)}));
  (S.myPosts||[]).forEach(p=>it.push({k:'msg',pet:S.pets[0],t:p.t||'그림 메시지',sub:`${COMMS[p.c].n}에 남긴 메시지`,txt:p.t,d:p.d,th:p.img,emoji:'💌',go:()=>{openComm();panComm(p.c);}}));
  (S.moods||[]).forEach(m=>it.push({k:'mood',t:m.line||`${MTXT[m.m]} 마음`,sub:'마음 기록',txt:(m.line||'')+MTXT[m.m],d:m.d,thImg:`/img/${m.m}.png`,go:()=>openDiary()}));
  Object.values(POSTS).flat().filter(p=>p.bm).forEach(p=>it.push({k:'scrap',t:p.t,sub:`${p.who}님의 글 · 저장함`,txt:p.t+p.who,d:p.d||new Date(),emoji:'🔖',go:()=>openFeed(p.c)}));
  return it; }
function rmSearch(){ const q=$('rmQ').value.trim(); const r=$('rmRes'); r.innerHTML='';
  let it=allItems();
  if(RMF.startsWith('pet')) it=it.filter(x=>x.pet===S.pets[+RMF.slice(3)]); else if(RMF!=='all') it=it.filter(x=>x.k===RMF);
  if(q) it=it.filter(x=>(x.txt||'').includes(q)||(x.t||'').includes(q));
  if(RMD) it=it.filter(x=>x.d&&ymd(x.d)===RMD);
  if(!q&&!RMD&&RMF==='all'&&!it.length){ r.innerHTML='<div class="rm-empty">아직 보관한 추억이 없어요.<br>섬에서 아이를 눌러 첫 앨범을 만들어 보세요.</div>'; return; }
  if(!it.length){ r.innerHTML='<div class="rm-empty">찾는 추억이 없어요. 다른 말로 찾아볼까요?</div>'; return; }
  it.sort((a,b)=>(b.d||0)-(a.d||0)).slice(0,30).forEach(x=>{ const b=document.createElement('button'); b.className='rr';
    b.innerHTML=`<span class="th"></span><span><b></b><small></small></span><span class="tag2">${{album:'앨범',msg:'메시지',mood:'마음',scrap:'저장'}[x.k]}</span>`;
    const th=b.querySelector('.th'); if(x.th) th.style.backgroundImage=`url("${x.th}")`; else if(x.thImg) th.innerHTML=`<img src="${x.thImg}" style="width:36px">`; else th.textContent=x.emoji||'📁';
    b.querySelector('b').textContent=x.t; b.querySelector('small').textContent=`${x.sub}${x.d?' · '+ymd(x.d).replace(/-/g,'.'):''}`; b.onclick=x.go; r.appendChild(b); }); }
$('rmQ').oninput=rmSearch; $('rmQ').onfocus=rmSearch; $('rmGo').onclick=rmSearch;
$('rmCal').onclick=()=>{ const d=$('rmDate'); try{ d.showPicker(); }catch(e){ d.click(); } };
$('rmDate').onchange=e=>{ RMD=e.target.value||null; drawRmChips(); rmSearch(); };
$('shelfHit').onclick=()=>{ openShelf(); NAV=['island','room','shelf']; };

/* ---------- 돌탑 꽃 & 카드 ---------- */
const STONE_FL={}; let CARD_I=0;
function drawStoneFl(){ const w=$('cmFl'); w.innerHTML=''; const iw=340*1650/628;
  Object.entries(STONE_FL).forEach(([k,arr])=>arr.forEach(f=>{ const d=div('stone-fl'); d.style.left=(STONE_X[k]*iw+f.dx-35)+'px'; d.style.top=(f.y)+'px'; d.style.animationDelay=f.dl+'s'; d.innerHTML=`<img src="${f.src}" alt="">`; w.appendChild(d); })); }
function drawCard(){ const list=POSTS[CM]; const c=$('cmCard'); if(!list||!list.length){ c.innerHTML='<p style="margin:4px 0">아직 남겨진 메시지가 없어요.<br>첫 꽃을 놓아 주세요.</p>'; return; }
  CARD_I=Math.min(CARD_I,list.length-1); const p=list[CARD_I]; const d=p.d||new Date(Date.now()-3600e3*(CARD_I+1));
  const hh=d.getHours(), ap=hh<12?'am':'pm';
  c.innerHTML=`<div class="who"><div class="av">${p.drawing?`<img src="${p.drawing}">`:(p.me?renderP(S.me.p):render(p.dog,'cc'))}</div><div><b></b><small>${d.getFullYear()}년 ${d.getMonth()+1}월 ${d.getDate()}일 / ${(hh%12)||12}:${String(d.getMinutes()).padStart(2,'0')} ${ap}</small></div></div><p></p>
   <div class="ic"><span class="nav">${CARD_I+1} / ${list.length} · 눌러서 모두 보기</span>
   <button class="bm${p.bm?' on':''}" aria-label="저장"><svg viewBox="0 0 24 24"><path d="M6 3.5h12v17l-6-4-6 4z" fill="none" stroke="#D99B82" stroke-width="1.8" stroke-linejoin="round"/></svg></button>
   <button class="lk${p.on?' on':''}" aria-label="좋아요"><svg viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.6 4.3 4.3 0 0 1 19.5 10C19.5 15.4 12 20 12 20z" fill="none" stroke="#D99B82" stroke-width="1.8" stroke-linejoin="round"/></svg></button>
   <button class="sh" aria-label="공유"><svg viewBox="0 0 24 24" fill="none" stroke="#D99B82" stroke-width="1.8"><circle cx="18" cy="5.5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="18.5" r="2.5"/><path d="M8.2 10.8l7.6-4M8.2 13.2l7.6 4"/></svg></button></div>`;
  c.querySelector('b').textContent=p.who; c.querySelector('p').textContent=p.t;
  c.querySelector('.bm').onclick=e=>{ e.stopPropagation(); p.bm=!p.bm; p.c=CM; S.stat.scrap+=p.bm?1:-1; drawCard(); toast(p.bm?'기억의 집에 저장했어요':'저장을 취소했어요'); };
  c.querySelector('.lk').onclick=e=>{ e.stopPropagation(); p.on=!p.on; p.l+=p.on?1:-1; S.stat.like+=p.on?1:-1; drawCard(); };
  c.querySelector('.sh').onclick=e=>{ e.stopPropagation(); try{navigator.clipboard.writeText(p.t);toast('메시지를 복사했어요');}catch(_){toast('공유 준비 중이에요');} };
}
$('cmCard').onclick=()=>openFeed(CM);
let swX=null; $('cmCard').addEventListener('touchstart',e=>swX=e.touches[0].clientX,{passive:true});
$('cmCard').addEventListener('touchend',e=>{ if(swX==null)return; const dx=e.changedTouches[0].clientX-swX; swX=null; if(Math.abs(dx)>40){ const n=POSTS[CM].length; CARD_I=(CARD_I+(dx<0?1:-1)+n)%n; drawCard(); e.preventDefault(); } });
$('cmLeave').onclick=()=>openLeave();

/* ---------- 꽃 그리기 ---------- */
const PENS=['#F2A7A0','#F6D27A','#C9B3E6','#9BB073','#D99B82','#4A423C']; let pen=PENS[0], drew=false;
function openLeave(){ go('leave'); $('lvNick').value=S.me.name||S.guardian||''; $('lvMsg').value=''; setupCv(); }
function setupCv(){ const cv=$('cv'); const r=cv.getBoundingClientRect(); const dpr=window.devicePixelRatio||1; cv.width=r.width*dpr; cv.height=r.height*dpr;
  const x=cv.getContext('2d'); x.scale(dpr,dpr); x.lineCap='round'; x.lineJoin='round'; drew=false; $('cvPh').style.display='';
  $('pens').innerHTML=PENS.map(c=>`<button class="pen-c${c===pen?' on':''}" style="background:${c}" data-c="${c}"></button>`).join('')+'<button class="clr">다시 그리기</button>';
  $('pens').querySelectorAll('.pen-c').forEach(b=>b.onclick=()=>{pen=b.dataset.c;$('pens').querySelectorAll('.pen-c').forEach(o=>o.classList.toggle('on',o===b));});
  $('pens').querySelector('.clr').onclick=()=>{ x.clearRect(0,0,cv.width,cv.height); drew=false; $('cvPh').style.display=''; };
  let dn=false,lx,ly; const pos=e=>{const b=cv.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return [t.clientX-b.left,t.clientY-b.top];};
  const st=e=>{dn=true;[lx,ly]=pos(e);$('cvPh').style.display='none';e.preventDefault();};
  const mv=e=>{ if(!dn)return; const [nx,ny]=pos(e); x.strokeStyle=pen; x.lineWidth=pen==='#4A423C'?3:7; x.beginPath(); x.moveTo(lx,ly); x.lineTo(nx,ny); x.stroke(); lx=nx;ly=ny; drew=true; e.preventDefault(); };
  const en=()=>dn=false;
  cv.onmousedown=st; cv.onmousemove=mv; window.addEventListener('mouseup',en); cv.ontouchstart=st; cv.ontouchmove=mv; cv.ontouchend=en; }
$('lvSave').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{
  const nick=$('lvNick').value.trim(), msg=$('lvMsg').value.trim();
  if(!drew&&!msg){ toast('꽃을 그리거나 메시지를 남겨 주세요'); return; }
  if(!nick){ toast('닉네임을 적어 주세요'); $('lvNick').focus(); return; }
  let src=null; if(drew){ const cv=$('cv'); src=trimCanvas(cv); (STONE_FL[CM]=STONE_FL[CM]||[]).push({src,dx:(Math.random()*2-1)*80,y:240+Math.random()*25,dl:-Math.random()*3}); S.stat.flower++; }
  const post={who:nick,pet:S.pets[0]?S.pets[0].name:'',t:msg||'꽃을 놓고 갑니다.',l:0,on:false,img:null,drawing:src,me:!src,dog:S.pets[0]?S.pets[0].dog:JSON.parse(JSON.stringify(PET_PRESETS[1][2])),ago:'방금',d:new Date(),c:CM};
  POSTS[CM].unshift(post); (S.myPosts=S.myPosts||[]).push({t:post.t,c:CM,d:post.d,img:src}); CARD_I=0;
  back(); setTimeout(()=>{ panComm(CM); toast('돌탑에 꽃과 메시지를 놓았어요'); },350); },30); };
function trimCanvas(cv){ const x=cv.getContext('2d'); const {width:w,height:h}=cv; const d=x.getImageData(0,0,w,h).data; let x0=w,y0=h,x1=0,y1=0;
  for(let y=0;y<h;y+=2)for(let i=0;i<w;i+=2){ if(d[(y*w+i)*4+3]>10){ if(i<x0)x0=i; if(i>x1)x1=i; if(y<y0)y0=y; if(y>y1)y1=y; } }
  const pad=8; x0=Math.max(0,x0-pad); y0=Math.max(0,y0-pad); x1=Math.min(w,x1+pad); y1=Math.min(h,y1+pad);
  const c=document.createElement('canvas'); c.width=x1-x0; c.height=y1-y0; c.getContext('2d').drawImage(cv,x0,y0,c.width,c.height,0,0,c.width,c.height); return c.toDataURL('image/png'); }

/* ---------- 오늘의 쪽지: 감정 다이어리 + AI ---------- */
S.moods=[]; S.stat={like:0,scrap:0,flower:0}; let AI_CACHE=null, aiNS=null;
(async()=>{ try{ if(window.claude&&claude.use) aiNS=await claude.use('sample'); }catch(e){ aiNS=null; } })();
function openDiary(){ $('dDim').classList.add('on'); $('diary').classList.add('on'); $('mailDot').style.display='none'; drawDiary(); if(!AI_CACHE) runAI(); else drawAI(AI_CACHE); }
function closeDiary(){ $('dDim').classList.remove('on'); $('diary').classList.remove('on'); }
$('dyX').onclick=closeDiary;
$('pvBday').onclick=()=>{ if(!S.pets.length){toast('먼저 아이를 등록해 주세요');return;} closeDiary(); tabGo('isle'); setTimeout(()=>checkAnniv('bday'),500); };
$('pvStar').onclick=()=>{ if(!S.pets.length){toast('먼저 아이를 등록해 주세요');return;} closeDiary(); tabGo('isle'); setTimeout(()=>checkAnniv('star'),500); }; $('dDim').onclick=closeDiary;
$('dySave').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{ const t=$('dyLine').value.trim(); if(!t)return;
  S.moods.push({m:MOOD||PREV_MOOD||'cloud',line:t,d:new Date()}); $('dyLine').value=''; drawDiary(); toast('마음 한 줄을 남겼어요'); AI_CACHE=null; runAI(); },30); };
function drawDiary(){
  const days=['일','월','화','수','목','금','토']; const w=$('dyWeek'); w.innerHTML='';
  for(let i=6;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); const m=[...S.moods].reverse().find(x=>ymd(x.d)===ymd(d));
    w.insertAdjacentHTML('beforeend',`<div>${m?`<img src="/img/${m.m}.png" alt="">`:'<span class="no" style="display:block"></span>'}${i===0?'오늘':days[d.getDay()]}</div>`); }
  $('dyStats').innerHTML=`<div><b>${S.moods.length}</b><span>마음 기록</span></div><div><b>${S.books.length}</b><span>앨범</span></div><div><b>${S.stat.like+S.stat.scrap}</b><span>공감·저장</span></div><div><b>${S.stat.flower}</b><span>놓은 꽃</span></div>`;
  const l=$('dyList'); l.innerHTML=''; S.moods.slice(-5).reverse().forEach(m=>{ const e=document.createElement('div'); e.innerHTML=`<small>${m.d.getMonth()+1}.${m.d.getDate()} ${MTXT[m.m]}</small>`; e.append(m.line||''); l.appendChild(e); }); }
const ACTS={album:{e:'📷',go:()=>{closeDiary();openAlbumNew(S.pets[0]);}},comm:{e:'🌼',go:()=>{closeDiary();tabGo('comm');}},room:{e:'🏠',go:()=>{closeDiary();openRoom();}},
  island:{e:'🐾',go:()=>{closeDiary();}},diary:{e:'✏️',go:()=>$('dyLine').focus()},rest:{e:'🍵',go:()=>{closeDiary();toast('오늘은 천천히 쉬어 가요');}},walk:{e:'🌿',go:()=>{closeDiary();toast('잠깐 바깥 공기를 마셔 보세요');}},help:{e:'☎️',go:()=>toast('자살예방상담전화 109 · 정신건강상담 1577-0199')}};
function digest(){ const pet=S.pets[0]; return { pet:pet?{name:pet.name,metDaysAgo:pet.met?daysSince(pet.met):null,memo:pet.memo||''}:null,
  recentMoods:S.moods.slice(-14).map(m=>({date:ymd(m.d),mood:MTXT[m.m],line:m.line||''})), todayMood:MOOD?MTXT[MOOD]:null,
  albums:S.books.map(b=>({title:b.title,photos:b.photos.length,date:ymd(b.made)})), likes:S.stat.like, scraps:S.stat.scrap, flowers:S.stat.flower,
  hiddenTopics:(pet&&pet.cfg&&pet.cfg.hide||[]).map(i=>HIDE[i]), calmLevel:pet&&pet.cfg?pet.cfg.calm:null,
  specialDates:(pet&&pet.cfg&&pet.cfg.dates||[]).filter(d=>d.d).map(d=>({name:d.n,date:d.d})) }; }
function fallbackAI(){ const D=digest(); const name=D.pet?D.pet.name:'아이'; const last=S.moods[S.moods.length-1]; const mm=MOOD||(last&&last.m);
  const sad=['rain','moon'].includes(mm);
  const todos=sad?[{action:'diary',title:'마음을 한 줄로 적어 보기',why:'말로 꺼내는 것만으로도 조금 가벼워질 수 있어요'},{action:'rest',title:'따뜻한 차 한 잔과 쉬어 가기',why:'오늘은 애쓰지 않아도 괜찮아요'},{action:'comm',title:'같은 마음의 보호자들과 꽃 나누기',why:'혼자가 아니라는 걸 느낄 수 있어요'}]
   :[{action:'album',title:`${name}의 사진으로 앨범 엮기`,why:'좋았던 장면을 한 권에 모아 두면 언제든 꺼내 볼 수 있어요'},{action:'walk',title:`${name}${wa(name)} 걷던 길 산책하기`,why:'익숙한 길에서 좋은 기억이 떠오를지도 몰라요'},{action:'comm',title:'돌탑에 꽃 한 송이 그려 놓기',why:'다른 보호자에게 작은 위로가 돼요'}];
  return {greeting:sad?`오늘은 ${name}${eunneun(name)} 많이 그리운 날이네요.`:`오늘도 ${name}${wa(name)}의 기억을 찾아와 주셨네요.`,insight:S.moods.length?`최근 ${S.moods.length}번의 마음 기록 중 '${MTXT[mm]||'잔잔한'}' 마음이 가장 가까이 있어요.`:'마음 기록이 쌓이면 흐름을 함께 살펴 드릴게요.',todos,src:'basic'}; }
async function runAI(){ const box=$('dyAi'); box.innerHTML='<div class="dy-t">오늘 해 보면 좋을 일</div><div class="ai-load"><i></i><i></i><i></i></div>';
  if(!aiNS){ AI_CACHE=fallbackAI(); drawAI(AI_CACHE); return; }
  const prompt=`당신은 반려동물을 떠나보냈거나 함께하는 보호자의 마음을 돌보는 추모 앱 'AFTER LIFE'의 동반자입니다. 아래 사용자 기록(JSON)을 읽고 오늘 하루를 위한 짧은 쪽지를 만드세요.
규칙: 한국어, 따뜻하고 담백한 존댓말, 과장·진단·훈계 금지. 슬픔을 서둘러 극복하라고 하지 말 것. 사용자가 가려 둔 주제(hiddenTopics)는 언급하지 말 것.
자해나 극단적 생각의 신호가 보이면 todos 첫 항목을 action "help"로 하고 전문 상담(109) 연결을 부드럽게 권할 것.
todos는 정확히 3개, action은 album|comm|room|island|diary|rest|walk|help 중 하나, title은 20자 이내 행동 문장, why는 35자 이내.
JSON만 출력: {"greeting":"..(40자 이내)","insight":"기록에서 읽힌 흐름 한 문장(60자 이내)","todos":[{"action":"..","title":"..","why":".."}]}
기록: ${JSON.stringify(digest())}`;
  try{ let v; if(aiNS.json) v=await aiNS.json(prompt,{modelTier:'quick'}); else { const r=await aiNS(prompt,{modelTier:'quick'}); v=JSON.parse(r.text.replace(/^[^{]*/,'').replace(/[^}]*$/,'')); }
    if(!v||!v.todos) throw 0; v.src='ai'; AI_CACHE=v; drawAI(v); }
  catch(e){ AI_CACHE=fallbackAI(); drawAI(AI_CACHE); } }
function drawAI(v){ const box=$('dyAi'); box.innerHTML=`<div class="dy-t">오늘 해 보면 좋을 일</div><p class="ai-hi"></p><p class="ai-in"></p>`;
  box.querySelector('.ai-hi').textContent=v.greeting; box.querySelector('.ai-in').textContent=v.insight;
  (v.todos||[]).slice(0,3).forEach(t=>{ const a=ACTS[t.action]||ACTS.rest; const b=document.createElement('button'); b.className='todo';
    b.innerHTML=`<span class="e">${a.e}</span><span><b></b><small></small></span><span class="go">›</span>`; b.querySelector('b').textContent=t.title; b.querySelector('small').textContent=t.why; b.onclick=a.go; box.appendChild(b); });
  box.insertAdjacentHTML('beforeend',`<div class="ai-meta"><span>${v.src==='ai'?'AI가 마음 기록을 읽고 제안했어요':'마음 기록을 바탕으로 제안했어요'}</span><button id="aiRe">다시 제안받기</button></div>`);
  $('aiRe').onclick=()=>{ AI_CACHE=null; runAI(); }; }


/* ---------- 아이 등록 4단계 ---------- */
const jong=w=>{const c=w.charCodeAt(w.length-1);return c>=0xAC00&&c<=0xD7A3&&(c-0xAC00)%28>0;};
const JS={eul:w=>jong(w)?'을':'를',eun:w=>jong(w)?'은':'는',ga:w=>jong(w)?'이':'가',wa:w=>jong(w)?'과':'와'};
let REG=null, RS=1;
function newCode(){ const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s='AL-'; for(let i=0;i<4;i++) s+=c[Math.floor(Math.random()*c.length)]; return s; }
function openReg(edit){ REG=edit?JSON.parse(JSON.stringify({...edit,dog:edit.dog})):{name:'',type:'dog',etc:'',breed:'',memo:'',photos:S.photos.slice(0,9),rep:0,met:null,yearOnly:false,where:'with',star:null,mood:null};
  REG._edit=edit||null; RS=1; $('rgName').value=REG.name; $('rgBreed').value=REG.breed||''; $('rgMemo').value=REG.memo||''; $('rgEtc').value=REG.etc||''; $('rgCode').value='';
  $('rgPopDim').classList.add('off'); if(!edit) setTimeout(()=>$('rgPopDim').classList.remove('off'),450);
  drawYMD('rgMet',REG.met); drawYMD('rgStar',REG.star&&REG.star.date); drawReg(); go('reg'); }
function drawYMD(id,val){ const d=val?new Date(val):null; const now=new Date(); const el=$(id);
  const y=[`<option value="">연도</option>`]; for(let i=now.getFullYear();i>=now.getFullYear()-30;i--) y.push(`<option value="${i}" ${d&&d.getFullYear()===i?'selected':''}>${i}년</option>`);
  const m=[`<option value="">월</option>`]; for(let i=1;i<=12;i++) m.push(`<option value="${i}" ${d&&d.getMonth()+1===i?'selected':''}>${i}월</option>`);
  const dd=[`<option value="">일</option>`]; for(let i=1;i<=31;i++) dd.push(`<option value="${i}" ${d&&d.getDate()===i?'selected':''}>${i}일</option>`);
  el.innerHTML=`<select>${y.join('')}</select><select>${m.join('')}</select><select>${dd.join('')}</select>`; }
function readYMD(id){ const [y,m,d]=[...$(id).querySelectorAll('select')].map(s=>s.value); if(!y) return null; return new Date(+y,m?+m-1:0,d?+d:1); }
function drawReg(){
  document.querySelectorAll('.rg-s').forEach(e=>e.classList.toggle('on',+e.dataset.s===RS));
  $('rgStep').textContent=`${RS} / 4`;
  const n=REG.name||'아이'; document.querySelectorAll('#reg .nm').forEach(e=>e.textContent=n);
  ['eul','eun','ga','wa'].forEach(k=>document.querySelectorAll('#reg .'+k).forEach(e=>e.textContent=JS[k](n)));
  $('rgType').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.t===REG.type)); $('rgEtcBox').hidden=REG.type!=='etc';
  document.querySelectorAll('#reg .rg-opt').forEach(b=>b.classList.toggle('on',b.dataset.w===REG.where)); $('rgStarBox').hidden=REG.where!=='star';
  $('rgMood').querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.m===REG.mood));
  const later={2:'기억이 나지 않아요.',3:'오늘은 건너뛸게요.'}[RS]; $('rgLater').style.display=later?'':'none'; if(later) $('rgLater').textContent=later;
  $('rgNext').textContent={1:'저장하기',2:'다음으로 넘어가기',3:'오늘의 마음 기록하기',4:`${n}${JS.eul(n)} 섬에 데려가기`}[RS];
  $('rgNext').disabled=(RS===1&&!$('rgName').value.trim())||(RS===3&&!REG.mood);
  $('rgBody').scrollTop=0;
}
$('rgName').oninput=()=>{ REG.name=$('rgName').value.trim(); $('rgNext').disabled=!REG.name; };
$('rgBreed').oninput=()=>REG.breed=$('rgBreed').value.trim();
$('rgType').querySelectorAll('button').forEach(b=>b.onclick=()=>{REG.type=b.dataset.t;drawReg(); if(REG.type==='etc') setTimeout(()=>$('rgEtc').focus(),50);});
document.querySelectorAll('#reg .rg-opt').forEach(b=>b.onclick=()=>{REG.where=b.dataset.w;drawReg();});
$('rgMood').querySelectorAll('button').forEach(b=>b.onclick=()=>{REG.mood=b.dataset.m;setBg(REG.mood);drawReg();});
$('rgPopX').onclick=()=>$('rgPopDim').classList.add('off'); $('rgPopDim').onclick=e=>{ if(e.target.id==='rgPopDim') $('rgPopDim').classList.add('off'); };
$('rgCode').onkeydown=e=>{ if(e.key==='Enter') $('rgJoin').click(); };
function regDog(){ if(REG.dog&&REG.dog.sp) return REG.dog; const br=(REG.breed||'').replace(/ /g,''); const t=REG.type==='cat'?'cat':'dog'; const hit=br&&PET_PRESETS.find(x=>x[1].replace(/ /g,'').includes(br)||br.includes(x[1].replace(/ /g,''))); const pool=PET_PRESETS.filter(x=>x[0]===t); return JSON.parse(JSON.stringify((hit||pool[t==='dog'?1:0])[2])); }
function rgSkipMood(){ return !!REG._edit; }
$('rgNext').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{
  if(RS===1){ REG.name=$('rgName').value.trim(); if(!REG.name) return; REG.memo=$('rgMemo').value.trim(); REG.etc=$('rgEtc').value.trim(); REG.breed=$('rgBreed').value.trim(); }
  if(RS===2){ REG.met=readYMD('rgMet'); if(rgSkipMood()){ RS=4; drawReg(); return; } }
  if(RS===3&&!REG.mood) return;
  if(RS===4){ REG.star=REG.where==='star'?{on:true,date:readYMD('rgStar'),letter:'',vis:'me'}:null; REG.dog=regDog(); finishReg(); return; }
  RS++; drawReg(); },30); };
$('rgLater').onclick=()=>{ if(RS===2){ REG.met=null; RS=rgSkipMood()?4:3; } else if(RS===3){ REG.mood=null; setBg(PREV_MOOD||'base'); RS=4; } drawReg(); };
$('rgBack').onclick=()=>{ if(RS>1){ RS=(RS===4&&rgSkipMood())?2:RS-1; drawReg(); } else back(); };
$('rgJoin').onclick=()=>{ const c=$('rgCode').value.trim().toUpperCase(); if(!/^AL-[A-Z0-9]{4}$/.test(c)){ toast('AL-로 시작하는 아이 코드를 확인해 주세요'); return; }
  const mine=S.pets.find(p=>p.code===c); if(mine){ toast(`이미 함께하고 있는 ${mine.name}예요`); return; }
  const pet={name:c==='AL-BORI'?'보리':'함께 돌보는 아이',type:'dog',breed:'말티즈',sex:'f',photos:[],rep:0,met:new Date(2015,3,12),where:'with',star:null,dog:JSON.parse(JSON.stringify(PET_PRESETS[3][2])),code:c,shared:true,memo:''};
  S.pets.push(pet); toast(`${pet.name}의 공동 보호자가 되었어요`); toIsland(pet); };
function finishReg(){ const ed=REG._edit; const data={name:REG.name,type:REG.type,etc:REG.etc,breed:REG.breed,memo:REG.memo,photos:REG.photos,rep:REG.rep,met:REG.met,where:REG.where,star:REG.star,dog:REG.dog};
  if(ed){ Object.assign(ed,data); toIsland(null,true); toast('아이 정보를 고쳤어요'); return; }
  const pet=Object.assign({code:newCode()},data); S.pets.push(pet);
  const m=REG.mood; if(m){ MOOD=m; PREV_MOOD=m; S.moods.push({m,d:new Date()}); $('island').classList.remove('m-sun','m-rain','m-cloud','m-moon'); $('island').classList.add('m-'+m); setBg(m); }
  else if(pet.star&&pet.star.on){ setBg('moon'); }
  toIsland(pet,true); if(m) setTimeout(()=>toast(`${MTXT[m]} 마음을 섬에 남겼어요`),700); }
$('goReg').onclick=()=>openReg(); $('skipGal').onclick=()=>openReg();


function drawPetsRow(){ const r=$('petsRow'); if(!r)return; r.innerHTML='';
  const addBtn=()=>{ const a=document.createElement('button'); a.className='pc-addbar'; a.innerHTML='<span>+</span> 우리 아이 추가하기'; a.onclick=()=>{ NAV=['island','settings']; openReg(); }; return a; };
  S.pets.forEach((p,i)=>{ const c=div('pc-card'); c.innerHTML=`<div class="av">${render(p.dog,'pc'+i)}</div><div class="inf"><div><b></b><br><small></small></div><button class="code" title="코드 복사"></button><button class="ed">편집</button></div>`;
    c.querySelector('b').textContent=(p.star&&p.star.on?'⭐ ':'')+p.name; c.querySelector('small').textContent=(p.breed||{dog:'강아지',cat:'고양이',etc:'다른 친구'}[p.type]||'강아지')+(p.shared?' · 공동 보호':'');
    c.querySelector('.code').textContent='코드 '+(p.code||(p.code=newCode()));
    c.querySelector('.code').onclick=()=>{ try{navigator.clipboard.writeText(p.code);}catch(e){} toast(`${p.code} 코드를 복사했어요. 가족에게 보내 주세요`); };
    c.querySelector('.ed').onclick=()=>{ S.stPet=i; SM='edit'; openSettings.keep=true; openSettings(); }; r.appendChild(c); }); r.appendChild(addBtn()); }

/* ---------- 별이 된 아이 표시 & 기념일 ---------- */
const _drawPets=drawPets;
drawPets=function(np){ _drawPets(np); const sat=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat'))||0;
  S.pets.forEach((p,i)=>{ if(p.star&&p.star.on){ const sp=SPOTS[i%SPOTS.length]; const e=document.createElement('span'); e.className='pet-star'; e.textContent='⭐'; e.style.left=(sp.x+30)+'px'; e.style.top=(sat+sp.b-130)+'px'; $('isle').appendChild(e);} }); };
const sameMD=(a,b)=>a&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
function checkAnniv(force){ const t=new Date(); for(const p of S.pets){
    const sd=p.star&&p.star.date?new Date(p.star.date):null;
    if(force==='star'||(sd&&sameMD(sd,t)&&sd.getFullYear()<t.getFullYear())){ const y=sd?t.getFullYear()-sd.getFullYear():1; showAnniv(p,'star',y); return true; }
    if(force==='bday'||(p.met&&!p.yearOnly&&sameMD(p.met,t)&&p.met.getFullYear()<t.getFullYear())){ const y=p.met?t.getFullYear()-p.met.getFullYear():1; showAnniv(p,'bday',y); return true; } }
  return false; }
const ORD=['','첫','두','세','네','다섯','여섯','일곱','여덟','아홉','열','열한','열두','열세','열네','열다섯','열여섯','열일곱','열여덟','열아홉','스무'];
function showAnniv(p,k,y){ const n=p.name; const nb=S.books.filter(b=>b.pet===p).reduce((a,b)=>a+b.photos.length,0);
  $('anvTag').textContent=k==='star'?`🕯 오늘 · ${n}${JS.ga(n)} 별이 된 날`:`🎂 오늘 · ${n}${JS.wa(n)} 만난 날`;
  $('anvT').textContent=k==='star'?`${n}${JS.ga(n)} 별이 된 지 ${y}년이 되었어요`:`오늘은 ${n}${JS.wa(n)} 함께한 ${ORD[y]||y} 번째 기념일이에요`;
  $('anvD').textContent=k==='star'?`${n}의 섬에 작은 촛불을 켜 두었어요. 함께한 시간을 천천히 둘러보셔도 좋아요.`:`${p.star&&p.star.on?'별에서도 축하해. ':''}그날 남긴 사진과 기록 ${nb}개를 모아 두었어요.`;
  $('anvA').textContent=k==='star'?'추억 모음 보기':'편지 쓰기'; $('anvB').textContent=k==='star'?`${n}의 섬으로 ›`:'기념일 추억 보기 ›';
  $('anvA').onclick=()=>{ closeAnv(); if(k==='star') openRoom(); else { S.stPet=S.pets.indexOf(p); tabGo('set'); } };
  $('anvB').onclick=()=>{ closeAnv(); if(k==='star'){} else { const b=S.books.find(b=>b.pet===p); b?openAlbum(b):openRoom(); } };
  const i=S.pets.indexOf(p), sp=SPOTS[i%SPOTS.length], sat=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sat'))||0;
  document.querySelectorAll('.balloon,.candle').forEach(e=>e.remove());
  const deco=document.createElement('span'); if(k==='star'){ deco.className='candle'; deco.style.left=(sp.x+44)+'px'; deco.style.top=(sat+sp.b-26)+'px'; setBg('moon'); }
  else { deco.className='balloon'; deco.textContent='🎈'; deco.style.left=(sp.x-60)+'px'; deco.style.top=(sat+sp.b-150)+'px'; }
  $('isle').appendChild(deco); $('anv').classList.add('on'); }
function closeAnv(){ $('anv').classList.remove('on'); }
$('anvX').onclick=closeAnv;


/* ---------- 리캡 저장·공유 ---------- */
let SH={tab:'save',title:true,logo:false,what:'all',ratio:'4:5',who:'fam',days:7}, dl=null;
(async()=>{ try{ if(window.claude&&claude.use) dl=await claude.use('downloads'); }catch(e){ dl=null; } })();
function openShare(){ $('shT').textContent=`${AV.title} 리캡 남기기`; SH.tab='save'; drawShare(); $('shDim').classList.add('on'); $('share').classList.add('on'); }
function closeShare(){ $('shDim').classList.remove('on'); $('share').classList.remove('on'); }
$('avShare').onclick=openShare; $('shX').onclick=closeShare; $('shDim').onclick=closeShare;
document.querySelectorAll('.sh-tabs button').forEach(b=>b.onclick=()=>{ SH.tab=b.dataset.t; drawShare(); });
const slug=()=>{ if(!AV.sid) AV.sid=Math.random().toString(36).slice(2,8); return 'r/'+(AV.pet&&AV.pet.code?AV.pet.code.toLowerCase()+'-':'')+AV.sid; };
function opt(arr,key,cls){ return `<div class="sh-opts ${cls||''}">${arr.map(([v,t,sm])=>`<button data-k="${key}" data-v="${v}" class="${SH[key]==v?'on':''}">${t}${sm?`<small>${sm}</small>`:''}</button>`).join('')}</div>`; }
function drawShare(){ document.querySelectorAll('.sh-tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t===SH.tab)); const b=$('shBody');
  if(SH.tab==='save'){ b.innerHTML=`<div class="sh-prev"><canvas id="shCv"></canvas><div><div class="sh-q" style="margin-top:0">이렇게 저장돼요</div>
      <label class="rg-chk"><input type="checkbox" id="shTitle" ${SH.title?'checked':''}><i></i>제목과 날짜 넣기</label><label class="rg-chk"><input type="checkbox" id="shLogo" ${SH.logo?'checked':''}><i></i>After Life 로고 넣기</label></div></div>
    <div class="sh-q">무엇을 저장할까요?</div>${opt([['one','대표 사진만'],['all','리캡 전체',`사진 ${AV.photos.length}장`],['grid','한 장으로','모아 보기']],'what')}
    <div class="sh-q">어떤 비율로 저장할까요?</div>${opt([['4:5','4:5','게시물'],['9:16','9:16','스토리'],['1:1','1:1','정사각']],'ratio')}`;
    $('shGo').textContent=AV._tmp?'저장소 책장에 꽂기':(dl?'이미지로 저장하기':'이미지 미리 보기');
    $('shTitle').onchange=e=>{SH.title=e.target.checked;paintRecap($('shCv'),.25);}; $('shLogo').onchange=e=>{SH.logo=e.target.checked;paintRecap($('shCv'),.25);};
    paintRecap($('shCv'),.25);
  } else { const url='afterlife.app/'+slug(); b.innerHTML=`<div class="sh-q" style="margin-top:16px">리캡 링크</div><div class="sh-link">🔗<span>${url}</span><button id="shCopy">복사</button></div>
    <div class="sh-q">누가 볼 수 있나요?</div>${opt([['fam','함께 기억하는<br>가족만'],['any','링크가 있는<br>누구나']],'who','two')}
    <div class="sh-q">언제까지 열어 둘까요?</div>${opt([['7','7일'],['30','30일'],['0','기한 없이']],'days')}
    <div class="sh-q">바로 보내기</div><div class="sh-send"><button data-s="msg"><i style="background:#FDD9BD">💬</i>메시지</button><button data-s="fam"><i style="background:#E4EACE">👨‍👩‍👧</i>가족에게</button><button data-s="mail"><i style="background:#E6E3F5">✉️</i>메일</button><button data-s="etc"><i style="background:#F3ECE6">···</i>다른 앱</button></div>
    <p class="sh-note">공유한 링크는 설정에서 언제든 닫을 수 있어요.</p>`;
    $('shGo').textContent='링크 복사하기';
    const cp=()=>{ try{navigator.clipboard.writeText('https://'+url);}catch(e){} toast('링크를 복사했어요'); }; $('shCopy').onclick=cp;
    b.querySelectorAll('[data-s]').forEach(x=>x.onclick=async()=>{ if(x.dataset.s==='fam'){ toast('공동 보호자에게 리캡을 보냈어요'); return; }
      if(navigator.share){ try{ await navigator.share({title:AV.title,url:'https://'+url}); return; }catch(e){} } cp(); }); }
  b.querySelectorAll('.sh-opts button').forEach(x=>x.onclick=()=>{ SH[x.dataset.k]=x.dataset.v; drawShare(); });
  $('shGo').onclick=SH.tab==='save'?(AV._tmp?()=>{ delete AV._tmp; S.books.push(AV); closeShare(); toast(`'${AV.title}'${'이'} 저장소 책장에 꽂혔어요`); }:saveRecap):()=>{ try{navigator.clipboard.writeText('https://afterlife.app/'+slug());}catch(e){} toast('링크를 복사했어요'); };
}
const loadImg=src=>new Promise(r=>{ const i=new Image(); i.onload=()=>r(i); i.onerror=()=>r(null); i.src=src; });
async function paintRecap(cv,scale){ const [rw,rh]=SH.ratio.split(':').map(Number); const W=1080, H=Math.round(W*rh/rw); cv.width=W*scale; cv.height=H*scale; const x=cv.getContext('2d'); x.setTransform(scale,0,0,scale,0,0);
  x.fillStyle='#FCEDE6'; x.fillRect(0,0,W,H);
  const ph=SH.what==='one'?[AV.photos[0]]:AV.photos; const imgs=(await Promise.all(ph.slice(0,9).map(p=>p&&loadImg(p.u)))).filter(Boolean);
  const pad=70, top=SH.title?220:pad, bottom=SH.logo?150:pad; const aw=W-pad*2, ah=H-top-bottom;
  const cover=(im,dx,dy,dw,dh)=>{ const r=Math.max(dw/im.width,dh/im.height); const sw=dw/r, sh=dh/r; x.drawImage(im,(im.width-sw)/2,(im.height-sh)/2,sw,sh,dx,dy,dw,dh); };
  x.save(); x.shadowColor='rgba(74,66,60,.18)'; x.shadowBlur=24;
  if(SH.what==='grid'&&imgs.length>1){ const n=imgs.length, c=n<=4?2:3, r=Math.ceil(n/c), g=14, cw=(aw-g*(c-1))/c, ch=(ah-g*(r-1))/r;
    imgs.forEach((im,i)=>{ const dx=pad+(i%c)*(cw+g), dy=top+Math.floor(i/c)*(ch+g); x.fillStyle='#fff'; x.fillRect(dx-6,dy-6,cw+12,ch+12); cover(im,dx,dy,cw,ch); }); }
  else if(imgs[0]){ x.fillStyle='#fff'; x.fillRect(pad-12,top-12,aw+24,ah+24); cover(imgs[0],pad,top,aw,ah); }
  x.restore();
  if(SH.title){ x.fillStyle='#4A423C'; x.font='400 64px "Jeju Myeongjo","Gowun Batang",serif'; x.textAlign='center'; x.fillText(AV.title,W/2,120);
    x.fillStyle='#AF9083'; x.font='400 30px "SUIT Variable",sans-serif'; const d=AV.made; x.fillText(`${AV.pet?AV.pet.name+' · ':''}${d.getFullYear()}. ${String(d.getMonth()+1).padStart(2,'0')}. ${String(d.getDate()).padStart(2,'0')}`,W/2,170); }
  if(SH.logo){ const lg=await loadImg('/img/logo-s.png'); if(lg){ const lw=260, lh=lw*lg.height/lg.width; x.drawImage(lg,(W-lw)/2,H-bottom/2-lh/2,lw,lh); } }
  return cv; }
async function saveRecap(){ const cv=document.createElement('canvas'); await paintRecap(cv,1);
  const blob=await new Promise(r=>cv.toBlob(r,'image/png')); const name=`${AV.title}_${SH.ratio.replace(':','x')}.png`;
  if(dl){ try{ await dl.save({filename:name,data:blob}); toast('이미지로 저장했어요'); closeShare(); return; }catch(e){ if(e&&e.code==='declined') return; } }
  openLb({u:cv.toDataURL('image/png'),cap:''}); toast('이미지를 길게 눌러 저장해 주세요'); }


/* ---------- 추모 섬 리캡 플레이어 ---------- */
let PL=null;
function openPlayer(pet){ const ph=[...new Set(pet.photos&&pet.photos.length?pet.photos:S.photos)];
  if(!ph.length){ toast(`${pet.name}의 사진을 먼저 불러와 주세요`); NAV=['island']; openReg(pet); RS=2; drawReg(); return; }
  PL={pet,ph,i:0,play:true,sp:4,bm:new Set(),cap:{},title:''}; $('plT').textContent=`${pet.name}의 리캡`;
  $('plStage').querySelectorAll('.pl-ph').forEach(e=>e.remove());
  ph.forEach(u=>{ const d=div('pl-ph'); d.style.backgroundImage=`url("${u}")`; $('plStage').prepend(d); });
  $('plSoft').checked=false; $('player').classList.remove('soft'); $('plPop').classList.remove('on'); go('player'); plShow(0); plTick(); }
function plShow(i){ const n=PL.ph.length; PL.i=(i+n)%n; const els=[...$('plStage').querySelectorAll('.pl-ph')].reverse();
  els.forEach((e,k)=>e.classList.toggle('on',k===PL.i)); $('plS').textContent=`${PL.pet.name} · ${PL.i+1} / ${n}`;
  $('plDots').innerHTML=PL.ph.map((_,k)=>`<i class="${k===PL.i?'on':''}"></i>`).join(''); $('plBm').classList.toggle('on',PL.bm.has(PL.i));
  $('plCap').textContent=(PL.cap&&PL.cap[PL.ph[PL.i]])||''; }
function plTick(){ clearTimeout(PL.t); if(PL.play) PL.t=setTimeout(()=>{ if(NAV[NAV.length-1]!=='player')return; if(PL.i===PL.ph.length-1){PL.play=false;plUi();return;} plShow(PL.i+1); plTick(); },PL.sp*1000); }
function plUi(){ $('plPause').querySelector('i').textContent=PL.play?'❚❚':'▶'; $('plPause').querySelector('span').textContent=PL.play?'일시정지':'다시 재생'; }
$('plPrev').onclick=()=>{plShow(PL.i-1);plTick();}; $('plNext').onclick=()=>{plShow(PL.i+1);plTick();};
$('plPause').onclick=()=>{ PL.play=!PL.play; if(PL.play&&PL.i===PL.ph.length-1) plShow(0); plUi(); plTick(); };
$('plBm').onclick=()=>{ PL.bm.has(PL.i)?PL.bm.delete(PL.i):PL.bm.add(PL.i); plShow(PL.i); };
$('plSpeed').onclick=()=>{ $('plPop').classList.toggle('on'); $('plSp').innerHTML=[[6,'천천히'],[4,'보통'],[2.5,'빠르게']].map(([v,t])=>`<button data-v="${v}" class="${PL.sp==v?'on':''}">${t}</button>`).join('');
  $('plSp').querySelectorAll('button').forEach(b=>b.onclick=()=>{PL.sp=+b.dataset.v;$('plSpeed').click();$('plSpeed').click();plTick();}); };
$('plSoft').onchange=e=>{ applyBlur(); $('player').classList.toggle('soft',e.target.checked); };
$('plEnd').onclick=()=>{ clearTimeout(PL.t); back(); };
function plRecap(){ const sel=PL.bm.size?[...PL.bm].sort((a,b)=>a-b).map(i=>PL.ph[i]):PL.ph;
  return {pet:PL.pet,title:PL.title||`${PL.pet.name}의 리캡`,photos:sel.map(u=>({u,cap:(PL.cap&&PL.cap[u])||''})),made:new Date(),_tmp:true}; }
$('plSave').onclick=()=>{ PL.play=false; plUi(); clearTimeout(PL.t); AV=plRecap(); openShare(); };


const TAGPOS=[[.12,.42,0],[.36,.12,-40],[.60,.25,0],[.78,.38,-40],[.92,.42,0]];
function drawOv(){ const w=$('cmTags'); w.innerHTML=''; const W=$('cmOv').clientWidth-12, ih=W*628/1650;
  COMMS.forEach((c,i)=>{ const b=document.createElement('button'); b.className='cm-tg'; b.style.left=(6+TAGPOS[i][0]*W)+'px'; b.style.top=(90+TAGPOS[i][1]*ih)+'px'; b.querySelector||0; b.style.setProperty('--lift',TAGPOS[i][2]+'px'); b.style.setProperty('--sx',Math.max(-1,Math.min(1,(TAGPOS[i][0]-.5)*2)));
    b.innerHTML='<span></span><small></small><i></i>'; b.querySelector('span').textContent=c.n; b.querySelector('small').textContent=`${c.c}명`;
    b.onmouseenter=()=>b.classList.add('peek'); b.onmouseleave=()=>b.classList.remove('peek');
    b.onclick=()=>{ if(!b.classList.contains('peek')&&matchMedia('(hover:none)').matches){ w.querySelectorAll('.cm-tg').forEach(x=>x.classList.remove('peek')); b.classList.add('peek'); return; } enterStone(i); };
    w.appendChild(b); });  }
function enterStone(i){ $('comm').classList.remove('ov'); panComm(i); $('cmBk').textContent=COMMS[i].n; }


/* ---------- 리캡 고치기 ---------- */
function openEdit(){ PL.play=false; plUi(); clearTimeout(PL.t); PL.cap=PL.cap||{}; $('edTitle').value=PL.title||`${PL.pet.name}의 리캡`; drawEd(); $('edDim').classList.add('on'); $('edit').classList.add('on'); }
function drawEd(){ const l=$('edList'); l.innerHTML='';
  PL.ph.forEach((u,i)=>{ const r=div('ed-row'); r.innerHTML=`<span class="th" style="background-image:url('${u}')"></span><input placeholder="이 장면에 한 줄 남기기" maxlength="30"><span class="bt"><button>▲</button><button>▼</button></span><button class="del">삭제</button>`;
    const inp=r.querySelector('input'); inp.value=PL.cap[u]||''; inp.oninput=()=>PL.cap[u]=inp.value;
    const [up,dn]=r.querySelectorAll('.bt button');
    up.onclick=()=>{ if(i>0){ [PL.ph[i-1],PL.ph[i]]=[PL.ph[i],PL.ph[i-1]]; drawEd(); } }; dn.onclick=()=>{ if(i<PL.ph.length-1){ [PL.ph[i+1],PL.ph[i]]=[PL.ph[i],PL.ph[i+1]]; drawEd(); } };
    r.querySelector('.del').onclick=()=>{ if(PL.ph.length<=1){ toast('사진이 한 장은 있어야 해요'); return; } PL.ph.splice(i,1); drawEd(); };
    l.appendChild(r); }); }
$('edFile').onchange=e=>{ const f=[...e.target.files]; const u=f.map(x=>URL.createObjectURL(x)); PL.ph=PL.ph.concat(u); S.photos=S.photos.concat(u); PL.pet.photos=(PL.pet.photos||[]).concat(u); drawEd(); e.target.value=''; };
function closeEdit(){ $('edDim').classList.remove('on'); $('edit').classList.remove('on'); }
$('edX').onclick=closeEdit; $('edDim').onclick=closeEdit;
$('edDone').onclick=()=>{ document.activeElement.blur&&document.activeElement.blur(); setTimeout(()=>{ PL.title=$('edTitle').value.trim()||`${PL.pet.name}의 리캡`; $('plT').textContent=PL.title;
  $('plStage').querySelectorAll('.pl-ph').forEach(e=>e.remove()); PL.ph.forEach(u=>{ const d=div('pl-ph'); d.style.backgroundImage=`url("${u}")`; $('plStage').prepend(d); }); PL.bm=new Set();
  closeEdit(); plShow(0); toast('리캡을 고쳤어요'); },30); };
$('plEdit').onclick=openEdit;

$('mail').onclick=()=>openDiary();
document.querySelectorAll('span.i-mail').forEach(m=>{m.style.cursor='pointer';m.onclick=()=>openDiary();});

