
const LINE='#4B3A30', EYE='#2E2622', PINK='#F2B4AC', TONGUE='#E98C8C';
const COLORS=[
  {n:'화이트',c:'#FBF7F1'},{n:'크림',c:'#F3DEC0'},{n:'살구',c:'#EBC29C'},{n:'황금',c:'#E2AE72'},
  {n:'레드',c:'#D68A52'},{n:'갈색',c:'#A8714A'},{n:'초코',c:'#6B4632'},{n:'실버',c:'#D2CFCB'},
  {n:'회색',c:'#A3A1A3'},{n:'블랙',c:'#3A3431'}
];
const EARS=[
  {k:'prick',n:'쫑긋'},{k:'bat',n:'큰 쫑긋'},{k:'fold',n:'반접힘'},
  {k:'drop',n:'늘어짐'},{k:'curly',n:'복슬 늘어짐'},{k:'round',n:'동글'}
];
const TAILS=[{k:'straight',n:'일자'},{k:'curl',n:'말린 꼬리'},{k:'plume',n:'복슬 꼬리'}];
const MARKS=[
  {k:'bib',n:'가슴 털'},{k:'paws',n:'흰 발'},{k:'blaze',n:'이마 줄'},{k:'mask',n:'아래 얼굴'},
  {k:'brows',n:'눈썹 점'},{k:'patch',n:'눈 패치'},{k:'spots',n:'점박이'}
];
const W='#FBF7F1';
const P=(o)=>Object.assign({base:'#E2AE72',mark:W,accent:W,earColor:null,ear:'prick',fluffy:false,tail:'straight',marks:{},tongue:true,blush:true},o);
const PRESETS=[
  {n:'시바견',s:P({base:'#D68A52',ear:'prick',tail:'curl',marks:{bib:1,paws:1,mask:1,brows:1}})},
  {n:'웰시코기',s:P({base:'#E2AE72',ear:'bat',marks:{bib:1,paws:1,mask:1,blaze:1}})},
  {n:'말티즈',s:P({base:W,ear:'curly',fluffy:true,tail:'plume',tongue:false})},
  {n:'토이푸들',s:P({base:'#C98656',ear:'curly',fluffy:true,tail:'plume'})},
  {n:'비글',s:P({base:'#E2AE72',earColor:'#A8714A',ear:'drop',marks:{bib:1,paws:1,mask:1,blaze:1}})},
  {n:'시베리안 허스키',s:P({base:'#A3A1A3',ear:'prick',tail:'plume',marks:{bib:1,paws:1,mask:1,blaze:1},tongue:false})},
  {n:'닥스훈트',s:P({base:'#A8714A',ear:'drop'})},
  {n:'슈나우저',s:P({base:'#A3A1A3',mark:'#D2CFCB',accent:'#D2CFCB',ear:'fold',fluffy:true,marks:{mask:1,brows:1},tongue:false})},
  {n:'프렌치 불독',s:P({base:'#F3DEC0',ear:'bat',tongue:false})},
  {n:'달마시안',s:P({base:W,mark:'#3A3431',ear:'drop',marks:{spots:1,patch:1}})},
  {n:'보더콜리',s:P({base:'#3A3431',ear:'fold',tail:'plume',marks:{bib:1,paws:1,mask:1,blaze:1}})},
  {n:'버니즈',s:P({base:'#3A3431',accent:'#B8683E',ear:'drop',tail:'plume',marks:{bib:1,paws:1,mask:1,blaze:1,brows:1}})},
  {n:'포메라니안',s:P({base:'#EBC29C',ear:'round',fluffy:true,tail:'plume'})},
  {n:'믹스견',s:P({base:'#F3DEC0',earColor:'#A8714A',ear:'fold',marks:{patch:1},mark:'#A8714A'})}
];


const f=n=>Math.round(n*10)/10;
function mix(a,b,t){const pa=parseInt(a.slice(1),16),pb=parseInt(b.slice(1),16);
  const r=c=>(c>>16)&255,g=c=>(c>>8)&255,bl=c=>c&255;
  const m=(x,y)=>Math.round(x+(y-x)*t);
  return '#'+[m(r(pa),r(pb)),m(g(pa),g(pb)),m(bl(pa),bl(pb))].map(v=>v.toString(16).padStart(2,'0')).join('');}
function lum(h){const p=parseInt(h.slice(1),16);return (0.299*((p>>16)&255)+0.587*((p>>8)&255)+0.114*(p&255))/255;}

const LW=1.6;
const SL=`stroke="${LINE}" stroke-width="${LW}" stroke-linejoin="round" stroke-linecap="round"`;
const mirrorT='translate(240 0) scale(-1 1)';
const ell=(cx,cy,rx,ry)=>`M${cx-rx},${cy} A${rx},${ry} 0 1 0 ${cx+rx},${cy} A${rx},${ry} 0 1 0 ${cx-rx},${cy} Z`;
const leg=(x,y,w,h)=>`M${x},${y+w/2} A${w/2},${w/2} 0 0 1 ${x+w},${y+w/2} L${x+w},${y+h-w/2} A${w/2},${w/2} 0 0 1 ${x},${y+h-w/2} Z`;
const rad=d=>d*Math.PI/180;
// outline generator: ellipse with fur tufts or cloud bumps
function furShape(cx,cy,rx,ry,o={}){
  const N=o.n||220, rot=rad(o.rot||0); let p='';
  for(let i=0;i<N;i++){
    const deg=i/N*360, a=rad(deg); let r=1;
    if(o.cloud){ r=1+o.cloud*(0.75+0.25*Math.sin(a*3.3))*Math.abs(Math.sin(a*o.k/2)); }
    (o.tufts||[]).forEach(([a0,a1,k,amp])=>{ if(deg>=a0&&deg<=a1){const t=((deg-a0)/(a1-a0)*k)%1; const tri=1-Math.abs(2*t-1); r+=amp*Math.pow(tri,1.8);} });
    let x=rx*r*Math.cos(a), y=ry*r*Math.sin(a);
    if(o.cheek && Math.sin(a)>0) x*=1+o.cheek*Math.sin(a);
    const X=cx+x*Math.cos(rot)-y*Math.sin(rot), Y=cy+x*Math.sin(rot)+y*Math.cos(rot);
    p+=(i?'L':'M')+f(X)+','+f(Y);
  }
  return p+'Z';
}
function scallop(cx,cy,rx,ry,n,d){return furShape(cx,cy,rx,ry,{cloud:d,k:n});}

const HEAD_SHORT=furShape(120,92,57,48,{cheek:.05,tufts:[[8,60,3,.075],[120,172,3,.075]]});
const HEAD_FLUFF=furShape(120,92,58,50,{cloud:.055,k:30,cheek:.03});
const BODY='M90,128 C76,150 72,190 78,222 L162,222 C168,190 164,150 150,128 Z';

function earSvg(type,col,front,id){
  const inner=lum(col)<.35?mix(col,'#ffffff',.28):PINK;
  const one=(d,extra='')=>sh(d,col,id)+extra;
  const both=s=>s+`<g transform="${mirrorT}">${s}</g>`;
  if(!front){
    if(type==='prick') return both(one('M78,76 Q70,40 72,22 Q74,15 81,19 Q100,32 114,50 Z',
      `<path d="M84,64 Q78,42 79,31 Q92,40 102,53 Z" fill="${inner}" opacity=".75" filter="url(#bl${id})"/><path d="M86,58 l-4,-5 M90,56 l-3,-6 M94,57 l-2,-5" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".6"/>`));
    if(type==='bat') return both(one('M76,82 Q58,40 54,16 Q56,5 66,10 Q96,28 116,48 Z',
      `<path d="M82,70 Q68,42 63,24 Q86,36 104,51 Z" fill="${inner}" opacity=".75" filter="url(#bl${id})"/><path d="M86,62 l-4,-6 M91,60 l-3,-7 M96,60 l-2,-6" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".6"/>`));
    if(type==='round') return both(one(ell(78,56,18,17),`<ellipse cx="79" cy="58" rx="9" ry="8" fill="${inner}" opacity=".7" filter="url(#bl${id})"/>`));
    return '';
  }
  if(type==='fold') return both(one('M70,70 Q80,46 108,46 Q104,66 80,92 Q65,86 70,70 Z',`<path d="M84,58 Q93,54 101,52" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".5"/>`));
  if(type==='drop') return both(one('M80,58 Q58,54 53,86 Q48,124 61,138 Q79,146 84,120 Q89,88 87,62 Z',`<path d="M64,98 Q62,114 67,128 M71,92 Q70,104 72,114" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".45"/>`));
  if(type==='curly') return both(one(furShape(66,106,22,38,{cloud:.1,k:16,rot:8}),`<path d="M59,92 q4,3 8,0 M57,108 q4,3 8,0 M61,124 q4,3 8,0" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".5"/>`));
  return '';
}
// fill + soft shade + line
function sh(d,fill,id,noShade){
  return `<path d="${d}" fill="${fill}"/>`+(noShade?'':`<path d="${d}" fill="url(#sh${id})"/>`)+`<path d="${d}" fill="none" ${SL}/>`;
}

function tailSvg(s,id){
  const c=s.base;
  if(s.tail==='plume') return sh(furShape(182,166,16,28,{cloud:.12,k:14,rot:20}),c,id);
  if(s.tail==='curl'){const d='M148,186 C184,186 198,152 182,134 C170,122 154,136 166,148';
    return `<path d="${d}" fill="none" stroke="${LINE}" stroke-width="14.5" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="11.4" stroke-linecap="round"/>`;}
  return sh('M150,204 C174,202 188,186 190,160 C190,153 198,152 199,160 C200,190 180,212 154,214 Z',c,id);
}

const HEAD_SPOTS=[[94,64,5,3.8,20],[152,70,4.2,3.4,-15],[76,96,3.6,3,40],[160,104,3,2.6,0]];
const BODY_SPOTS=[[104,150,5,4,15],[144,152,5.5,4.4,-20],[90,198,4.5,3.6,30],[154,202,5,4,-10],[131,192,3.6,3,0],[112,184,3.2,2.6,45]];
const spot=([x,y,rx,ry,r],c)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" transform="rotate(${r} ${x} ${y})" fill="${c}"/>`;

function render(s,id){
  const m=s.marks||{}, earC=s.earColor||s.base;
  const muzzle=m.mask?s.mark:mix(s.base,'#ffffff',.55);
  const dark=lum(s.base)<.35;
  const headD=s.fluffy?HEAD_FLUFF:HEAD_SHORT;
  let o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">`;
  o+=`<defs>
<radialGradient id="sh${id}" cx=".45" cy=".36" r=".72"><stop offset="0" stop-color="#ffffff" stop-opacity=".14"/><stop offset=".5" stop-color="#ffffff" stop-opacity="0"/><stop offset="1" stop-color="#5a3a24" stop-opacity=".13"/></radialGradient>
<filter id="bl${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.8"/></filter>
<filter id="bm${id}" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.6"/></filter>
<filter id="sb${id}" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
<clipPath id="hc${id}"><path d="${headD}"/></clipPath>
<clipPath id="bc${id}"><path d="${BODY}"/><ellipse cx="84" cy="208" rx="24" ry="15"/><ellipse cx="156" cy="208" rx="24" ry="15"/></clipPath>
</defs>`;
  o+=`<ellipse cx="120" cy="226" rx="70" ry="6.5" fill="${LINE}" opacity=".12" filter="url(#sb${id})"/>`;
  o+=tailSvg(s,id);
  // body
  o+=sh(BODY,s.base,id);
  o+=`<g clip-path="url(#bc${id})"><ellipse cx="120" cy="138" rx="34" ry="9" fill="#5a3a24" opacity=".12" filter="url(#bl${id})"/>`;
  if(m.spots) o+=BODY_SPOTS.map(p=>spot(p,s.mark)).join('');
  o+=`</g>`;
  o+=sh(ell(84,208,24,15),s.base,id)+sh(ell(156,208,24,15),s.base,id);
  // legs
  o+=sh(leg(100,158,18,60),s.base,id)+sh(leg(122,158,18,60),s.base,id);
  const pawC=m.paws?s.mark:s.base;
  o+=sh(ell(108.5,217.5,11.5,6.2),pawC,id,true)+sh(ell(131.5,217.5,11.5,6.2),pawC,id,true);
  o+=`<path d="M105,215 l0,3.5 M112,215 l0,3.5 M128,215 l0,3.5 M135,215 l0,3.5" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".55"/>`;
  if(m.bib) o+=`<path d="M100,138 Q120,130 140,138 Q144,158 135,170 L131,166 L128,176 L124,169 L120,182 L116,169 L112,176 L109,166 L105,170 Q96,158 100,138 Z" fill="${s.mark}"/>`;
  o+=`<path d="M114,148 l2,5 M121,150 l-1,5 M127,148 l-2,5" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".4"/>`;
  // ears behind head
  o+=earSvg(s.ear,earC,false,id);
  if(s.fluffy) o+=sh(furShape(120,50,26,15,{cloud:.14,k:12}),s.base,id);
  // head
  o+=`<path d="${headD}" fill="${s.base}"/>`;
  o+=`<g clip-path="url(#hc${id})">`;
  if(m.mask) o+=`<path d="M56,100 Q66,150 120,152 Q174,150 184,100 Q154,118 138,105 Q120,95 102,105 Q86,118 56,100 Z" fill="${s.mark}" filter="url(#bm${id})"/>`;
  if(m.blaze) o+=`<path d="M114,34 Q120,30 126,34 Q129,70 127,102 Q120,106 113,102 Q111,70 114,34 Z" fill="${s.mark}" filter="url(#bm${id})"/>`;
  if(m.patch) o+=`<ellipse cx="143" cy="95" rx="15" ry="14" fill="${s.mark}" filter="url(#bl${id})"/>`;
  if(m.spots) o+=HEAD_SPOTS.map(p=>spot(p,s.mark)).join('');
  if(m.brows) o+=`<g filter="url(#bl${id})"><ellipse cx="97" cy="84" rx="5.5" ry="3.8" fill="${s.accent}"/><ellipse cx="143" cy="84" rx="5.5" ry="3.8" fill="${s.accent}"/></g>`;
  o+=`<path d="${headD}" fill="url(#sh${id})"/>`;
  o+=`</g>`;
  o+=`<path d="${headD}" fill="none" ${SL}/>`;
  o+=`<path d="M116,48 l1,6 M124,48 l-1,6 M120,46 l0,6" fill="none" stroke="${LINE}" stroke-width="1" stroke-linecap="round" opacity=".35"/>`;
  // ears in front of head
  o+=earSvg(s.ear,earC,true,id);
  // face
  o+=`<ellipse cx="120" cy="114" rx="22" ry="15" fill="${muzzle}" opacity=".95" filter="url(#bl${id})"/>`;
  if(s.blush) o+=`<g filter="url(#bl${id})" opacity=".55"><ellipse cx="88" cy="114" rx="8" ry="4.6" fill="${PINK}"/><ellipse cx="152" cy="114" rx="8" ry="4.6" fill="${PINK}"/></g>`;
  o+=`<ellipse cx="98" cy="99" rx="4.3" ry="4.8" fill="${EYE}"/><ellipse cx="142" cy="99" rx="4.3" ry="4.8" fill="${EYE}"/>`;
  if(dark||m.patch) o+=`<circle cx="99.4" cy="97.4" r="1.3" fill="#fff" opacity=".9"/><circle cx="143.4" cy="97.4" r="1.3" fill="#fff" opacity=".9"/>`;
  if(s.tongue) o+=`<path d="M115.2,120.8 Q114.6,131 120,131 Q125.4,131 124.8,120.8 Q120,123 115.2,120.8 Z" fill="${TONGUE}" stroke="${LINE}" stroke-width="1.2" stroke-linejoin="round"/><path d="M120,123 l0,4.5" stroke="${LINE}" stroke-width=".9" opacity=".45"/>`;
  o+=`<path d="M113,108.5 Q120,105 127,108.5 Q126.5,114 120,115.5 Q113.5,114 113,108.5 Z" fill="${EYE}"/><ellipse cx="117.6" cy="108.2" rx="2" ry="1" fill="#fff" opacity=".55"/>`;
  o+=`<path d="M120,115.5 L120,118.8 M112.5,117.6 Q116.2,122 120,118.8 Q123.8,122 127.5,117.6" fill="none" stroke="${LINE}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`;
  o+=`</svg>`;
  return o;
}

