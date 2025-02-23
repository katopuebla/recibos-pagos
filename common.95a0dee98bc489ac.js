"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(C,w,l)=>{l.d(w,{c:()=>o});var m=l(4261),f=l(1086),e=l(8607);const o=(s,i)=>{let t,n;const g=(d,_,M)=>{if(typeof document>"u")return;const E=document.elementFromPoint(d,_);E&&i(E)&&!E.disabled?E!==t&&(r(),h(E,M)):r()},h=(d,_)=>{t=d,n||(n=t);const M=t;(0,m.w)(()=>M.classList.add("ion-activated")),_()},r=(d=!1)=>{if(!t)return;const _=t;(0,m.w)(()=>_.classList.remove("ion-activated")),d&&n!==t&&t.click(),t=void 0};return(0,e.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>g(d.currentX,d.currentY,f.a),onMove:d=>g(d.currentX,d.currentY,f.b),onEnd:()=>{r(!0),(0,f.h)(),n=void 0}})}},8438:(C,w,l)=>{l.d(w,{g:()=>f});var m=l(8476);const f=()=>{if(void 0!==m.w)return m.w.Capacitor}},5572:(C,w,l)=>{l.d(w,{c:()=>m,i:()=>f});const m=(e,o,s)=>"function"==typeof s?s(e,o):"string"==typeof s?e[s]===o[s]:Array.isArray(o)?o.includes(e):e===o,f=(e,o,s)=>void 0!==e&&(Array.isArray(e)?e.some(i=>m(i,o,s)):m(e,o,s))},3351:(C,w,l)=>{l.d(w,{g:()=>m});const m=(i,t,n,g,h)=>e(i[1],t[1],n[1],g[1],h).map(r=>f(i[0],t[0],n[0],g[0],r)),f=(i,t,n,g,h)=>h*(3*t*Math.pow(h-1,2)+h*(-3*n*h+3*n+g*h))-i*Math.pow(h-1,3),e=(i,t,n,g,h)=>s((g-=h)-3*(n-=h)+3*(t-=h)-(i-=h),3*n-6*t+3*i,3*t-3*i,i).filter(d=>d>=0&&d<=1),s=(i,t,n,g)=>{if(0===i)return((i,t,n)=>{const g=t*t-4*i*n;return g<0?[]:[(-t+Math.sqrt(g))/(2*i),(-t-Math.sqrt(g))/(2*i)]})(t,n,g);const h=(3*(n/=i)-(t/=i)*t)/3,r=(2*t*t*t-9*t*n+27*(g/=i))/27;if(0===h)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-h),-Math.sqrt(-h)];const d=Math.pow(r/2,2)+Math.pow(h/3,3);if(0===d)return[Math.pow(r/2,.5)-t/3];if(d>0)return[Math.pow(-r/2+Math.sqrt(d),1/3)-Math.pow(r/2+Math.sqrt(d),1/3)-t/3];const _=Math.sqrt(Math.pow(-h/3,3)),M=Math.acos(-r/(2*Math.sqrt(Math.pow(-h/3,3)))),E=2*Math.pow(_,1/3);return[E*Math.cos(M/3)-t/3,E*Math.cos((M+2*Math.PI)/3)-t/3,E*Math.cos((M+4*Math.PI)/3)-t/3]}},5083:(C,w,l)=>{l.d(w,{i:()=>m});const m=f=>f&&""!==f.dir?"rtl"===f.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(C,w,l)=>{l.r(w),l.d(w,{startFocusVisible:()=>o});const m="ion-focused",e=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=s=>{let i=[],t=!0;const n=s?s.shadowRoot:document,g=s||document.body,h=c=>{i.forEach(a=>a.classList.remove(m)),c.forEach(a=>a.classList.add(m)),i=c},r=()=>{t=!1,h([])},d=c=>{t=e.includes(c.key),t||h([])},_=c=>{if(t&&void 0!==c.composedPath){const a=c.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));h(a)}},M=()=>{n.activeElement===g&&h([])};return n.addEventListener("keydown",d),n.addEventListener("focusin",_),n.addEventListener("focusout",M),n.addEventListener("touchstart",r,{passive:!0}),n.addEventListener("mousedown",r),{destroy:()=>{n.removeEventListener("keydown",d),n.removeEventListener("focusin",_),n.removeEventListener("focusout",M),n.removeEventListener("touchstart",r),n.removeEventListener("mousedown",r)},setFocus:h}}},1086:(C,w,l)=>{l.d(w,{I:()=>f,a:()=>t,b:()=>n,c:()=>i,d:()=>h,h:()=>g});var m=l(8438),f=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(f||{});const o={getEngine(){const r=(0,m.g)();if(null!=r&&r.isPluginAvailable("Haptics"))return r.Plugins.Haptics},available(){if(!this.getEngine())return!1;const d=(0,m.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(r){const d=this.getEngine();d&&d.impact({style:r.style})},notification(r){const d=this.getEngine();d&&d.notification({type:r.type})},selection(){this.impact({style:f.Light})},selectionStart(){const r=this.getEngine();r&&r.selectionStart()},selectionChanged(){const r=this.getEngine();r&&r.selectionChanged()},selectionEnd(){const r=this.getEngine();r&&r.selectionEnd()}},s=()=>o.available(),i=()=>{s()&&o.selection()},t=()=>{s()&&o.selectionStart()},n=()=>{s()&&o.selectionChanged()},g=()=>{s()&&o.selectionEnd()},h=r=>{s()&&o.impact(r)}},909:(C,w,l)=>{l.d(w,{I:()=>i,a:()=>h,b:()=>s,c:()=>_,d:()=>E,f:()=>r,g:()=>g,i:()=>n,p:()=>M,r:()=>c,s:()=>d});var m=l(467),f=l(4920),e=l(4929);const s="ion-content",i=".ion-content-scroll-host",t=`${s}, ${i}`,n=a=>"ION-CONTENT"===a.tagName,g=function(){var a=(0,m.A)(function*(u){return n(u)?(yield new Promise(p=>(0,f.c)(u,p)),u.getScrollElement()):u});return function(p){return a.apply(this,arguments)}}(),h=a=>a.querySelector(i)||a.querySelector(t),r=a=>a.closest(t),d=(a,u)=>n(a)?a.scrollToTop(u):Promise.resolve(a.scrollTo({top:0,left:0,behavior:u>0?"smooth":"auto"})),_=(a,u,p,O)=>n(a)?a.scrollByPoint(u,p,O):Promise.resolve(a.scrollBy({top:p,left:u,behavior:O>0?"smooth":"auto"})),M=a=>(0,e.b)(a,s),E=a=>{if(n(a)){const p=a.scrollY;return a.scrollY=!1,p}return a.style.setProperty("overflow","hidden"),!0},c=(a,u)=>{n(a)?a.scrollY=u:a.style.removeProperty("overflow")}},3992:(C,w,l)=>{l.d(w,{a:()=>m,b:()=>_,c:()=>t,d:()=>M,e:()=>D,f:()=>i,g:()=>E,h:()=>e,i:()=>f,j:()=>v,k:()=>b,l:()=>n,m:()=>r,n:()=>c,o:()=>h,p:()=>s,q:()=>o,r:()=>y,s:()=>k,t:()=>d,u:()=>p,v:()=>O,w:()=>g,x:()=>a,y:()=>u});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(C,w,l)=>{l.d(w,{c:()=>o,g:()=>s});var m=l(8476),f=l(4920),e=l(4929);const o=(t,n,g)=>{let h,r;if(void 0!==m.w&&"MutationObserver"in m.w){const E=Array.isArray(n)?n:[n];h=new MutationObserver(c=>{for(const a of c)for(const u of a.addedNodes)if(u.nodeType===Node.ELEMENT_NODE&&E.includes(u.slot))return g(),void(0,f.r)(()=>d(u))}),h.observe(t,{childList:!0,subtree:!0})}const d=E=>{var c;r&&(r.disconnect(),r=void 0),r=new MutationObserver(a=>{g();for(const u of a)for(const p of u.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===n&&M()}),r.observe(null!==(c=E.parentElement)&&void 0!==c?c:E,{subtree:!0,childList:!0})},M=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{h&&(h.disconnect(),h=void 0),M()}}},s=(t,n,g)=>{const h=null==t?0:t.toString().length,r=i(h,n);if(void 0===g)return r;try{return g(h,n)}catch(d){return(0,e.a)("Exception in provided `counterFormatter`.",d),r}},i=(t,n)=>`${t} / ${n}`},1622:(C,w,l)=>{l.r(w),l.d(w,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>o,copyVisualViewport:()=>y,keyboardDidClose:()=>a,keyboardDidOpen:()=>E,keyboardDidResize:()=>c,resetKeyboardAssist:()=>h,setKeyboardClose:()=>M,setKeyboardOpen:()=>_,startKeyboardAssist:()=>r,trackViewportChanges:()=>O});var m=l(4379);l(8438),l(8476);const o="ionKeyboardDidShow",s="ionKeyboardDidHide";let t={},n={},g=!1;const h=()=>{t={},n={},g=!1},r=v=>{if(m.K.getEngine())d(v);else{if(!v.visualViewport)return;n=y(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||c(v)?_(v):a(v)&&M(v)}}},d=v=>{v.addEventListener("keyboardDidShow",b=>_(v,b)),v.addEventListener("keyboardDidHide",()=>M(v))},_=(v,b)=>{u(v,b),g=!0},M=v=>{p(v),g=!1},E=()=>!g&&t.width===n.width&&(t.height-n.height)*n.scale>150,c=v=>g&&!a(v),a=v=>g&&n.height===v.innerHeight,u=(v,b)=>{const D=new CustomEvent(o,{detail:{keyboardHeight:b?b.keyboardHeight:v.innerHeight-n.height}});v.dispatchEvent(D)},p=v=>{const b=new CustomEvent(s);v.dispatchEvent(b)},O=v=>{t=Object.assign({},n),n=y(v.visualViewport)},y=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},4379:(C,w,l)=>{l.d(w,{K:()=>o,a:()=>e});var m=l(8438),f=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(f||{}),e=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(e||{});const o={getEngine(){const s=(0,m.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(i=>{if(i.code!==f.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(C,w,l)=>{l.d(w,{c:()=>i});var m=l(467),f=l(8476),e=l(4379);const o=t=>{if(void 0===f.d||t===e.a.None||void 0===t)return null;const n=f.d.querySelector("ion-app");return null!=n?n:f.d.body},s=t=>{const n=o(t);return null===n?0:n.clientHeight},i=function(){var t=(0,m.A)(function*(n){let g,h,r,d;const _=function(){var u=(0,m.A)(function*(){const p=yield e.K.getResizeMode(),O=void 0===p?void 0:p.mode;g=()=>{void 0===d&&(d=s(O)),r=!0,M(r,O)},h=()=>{r=!1,M(r,O)},null==f.w||f.w.addEventListener("keyboardWillShow",g),null==f.w||f.w.addEventListener("keyboardWillHide",h)});return function(){return u.apply(this,arguments)}}(),M=(u,p)=>{n&&n(u,E(p))},E=u=>{if(0===d||d===s(u))return;const p=o(u);return null!==p?new Promise(O=>{const v=new ResizeObserver(()=>{p.clientHeight===d&&(v.disconnect(),O())});v.observe(p)}):void 0};return yield _(),{init:_,destroy:()=>{null==f.w||f.w.removeEventListener("keyboardWillShow",g),null==f.w||f.w.removeEventListener("keyboardWillHide",h),g=h=void 0},isKeyboardVisible:()=>r}});return function(g){return t.apply(this,arguments)}}()},7838:(C,w,l)=>{l.d(w,{c:()=>f});var m=l(467);const f=()=>{let e;return{lock:function(){var s=(0,m.A)(function*(){const i=e;let t;return e=new Promise(n=>t=n),void 0!==i&&(yield i),t});return function(){return s.apply(this,arguments)}}()}}},9001:(C,w,l)=>{l.d(w,{c:()=>e});var m=l(8476),f=l(4920);const e=(o,s,i)=>{let t;const n=()=>!(void 0===s()||void 0!==o.label||null===i()),h=()=>{const d=s();if(void 0===d)return;if(!n())return void d.style.removeProperty("width");const _=i().scrollWidth;if(0===_&&null===d.offsetParent&&void 0!==m.w&&"IntersectionObserver"in m.w){if(void 0!==t)return;const M=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(h(),M.disconnect(),t=void 0)},{threshold:.01,root:o});M.observe(d)}else d.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{n()&&(0,f.r)(()=>{h()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(C,w,l)=>{l.d(w,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(e,o,s)=>{const i=e*o/s-e+"ms",t=2*Math.PI*o/s;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,o,s)=>{const i=o/s,t=e*i-e+"ms",n=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(e,o,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":e*o/s-e+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(e,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*o+(o<s/2?180:-180)}deg)`,"animation-delay":e*o/s-e+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(e,o,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":e*o/s-e+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(e,o,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":e*o/s-e+"ms"}})}}},7166:(C,w,l)=>{l.r(w),l.d(w,{createSwipeBackGesture:()=>s});var m=l(4920),f=l(5083),e=l(8607);l(1970);const s=(i,t,n,g,h)=>{const r=i.ownerDocument.defaultView;let d=(0,f.i)(i);const M=p=>d?-p.deltaX:p.deltaX;return(0,e.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p=>(d=(0,f.i)(i),(p=>{const{startX:y}=p;return d?y>=r.innerWidth-50:y<=50})(p)&&t()),onStart:n,onMove:p=>{const y=M(p)/r.innerWidth;g(y)},onEnd:p=>{const O=M(p),y=r.innerWidth,v=O/y,b=(p=>d?-p.velocityX:p.velocityX)(p),D=b>=0&&(b>.2||O>y/2),P=(D?1-v:v)*y;let A=0;if(P>5){const L=P/Math.abs(b);A=Math.min(L,540)}h(D,v<=0?.01:(0,m.j)(0,v,.9999),A)}})}},2935:(C,w,l)=>{l.d(w,{w:()=>m});const m=(o,s,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{i(f(n,s))});return t.observe(o,{childList:!0,subtree:!0}),t},f=(o,s)=>{let i;return o.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)i=e(t.addedNodes[n],s)||i}),i},e=(o,s)=>{if(1!==o.nodeType)return;const i=o;return(i.tagName===s.toUpperCase()?[i]:Array.from(i.querySelectorAll(s))).find(n=>n.value===i.value)}},4885:(C,w,l)=>{l.d(w,{c:()=>d});var m=l(4341),f=l(7568),e=l(4438),o=l(4742),s=l(7492),i=l(3511),t=l(177);function n(_,M){if(1&_&&(e.j41(0,"ion-select-option",19),e.EFF(1),e.k0s()),2&_){const E=M.$implicit;e.Y8G("value",E),e.R7$(),e.Lme("",E.ID,"--",E.NOMBRE," ")}}function g(_,M){if(1&_&&(e.j41(0,"ion-select-option",19),e.EFF(1),e.k0s()),2&_){const E=M.$implicit;e.Y8G("value",E.NOMBRE),e.R7$(),e.SpI(" ",E.NOMBRE," ")}}function h(_,M){if(1&_){const E=e.RV6();e.j41(0,"ion-button",27),e.bIt("click",function(){e.eBV(E);const a=e.XpG().index,u=e.XpG();return e.Njj(u.removeInputField(a))}),e.nrm(1,"ion-icon",2),e.EFF(2," eliminar "),e.k0s()}}function r(_,M){if(1&_){const E=e.RV6();e.j41(0,"section",20)(1,"ion-item-group")(2,"ion-item-divider",21),e.EFF(3),e.k0s(),e.j41(4,"ion-item")(5,"ion-select",22),e.bIt("ionChange",function(a){const u=e.eBV(E).index,p=e.XpG();return e.Njj(p.onChangeConcepto(a,u))}),e.DNE(6,g,2,2,"ion-select-option",8),e.k0s()(),e.j41(7,"ion-item")(8,"ion-label",23),e.EFF(9,"Mes:"),e.k0s(),e.nrm(10,"ion-datetime",24),e.k0s(),e.j41(11,"ion-item"),e.nrm(12,"ion-input",25),e.k0s(),e.DNE(13,h,3,0,"ion-button",26),e.k0s()()}if(2&_){const E=M.index,c=e.XpG();e.Y8G("formGroupName",E),e.R7$(3),e.SpI("Conceptos #",E+1,""),e.R7$(3),e.Y8G("ngForOf",c.conceptos),e.R7$(4),e.Y8G("preferWheel",!0),e.R7$(3),e.Y8G("ngIf",c.conceptoForm.length>1)}}let d=(()=>{var _;class M extends f.L{constructor(c,a,u,p,O){super(p),this.modalCtrl=c,this.formBuilder=a,this.service=u,this.toastUtil=O,this.item={},this.itemDetail=[],this.casas=[],this.conceptos=[],this.data=!1,this.sendEmail=!1,this.date=new Date,this.today=new Date(this.date.getTime()-6e4*this.date.getTimezoneOffset()),this.fields=this.formBuilder.group({folio:["",m.k0.required],casa:["",m.k0.required],nombre:["",m.k0.required],fecha:["",m.k0.required],email:["",m.k0.required],sendEmail:"",cantidad:["",m.k0.required],conceptos:this.formBuilder.array([this.frmConceptos()])})}frmConceptos(){return this.formBuilder.group({concepto:["",m.k0.required],mes:["",m.k0.required],monto:["",m.k0.required]})}get conceptoForm(){return this.fields.get("conceptos")}ngOnInit(){this.service.getSpreadSheetId().then(()=>{const c=this.today.toJSON().split("T")[0];this.fields.patchValue({fecha:c}),this.inittial()}),this.showLoading()}getMaxFolio(){this.service.getRecibos().subscribe({next:c=>{const a=Math.max(...c.map(u=>u.FOLIO))+1;this.fields.patchValue({folio:a}),this.loadingDismiss()},error:c=>{this.fields.patchValue({folio:1}),this.loadingDismiss()}})}inittial(){this.service.getFullData().subscribe(c=>{this.casas=c||[],this.service.getConceptos().subscribe(a=>{this.conceptos=a||[],this.getMaxFolio()})})}onChangeCasa(c){const a=c.detail.value;a.ID&&(this.casa=this.casas.find(u=>u.ID===a.ID&&u.NOMBRE===a.NOMBRE?u:null),this.fields.patchValue({nombre:this.casa.NOMBRE,email:this.casa.EMAIL,sendEmail:!0}))}onChangeConcepto(c,a){if(c.detail.value){const p=this.fields.controls.conceptos;let O=this.calMontoConcepto();p.at(a).patchValue({mes:this.getFirstDayOfMonth(),monto:O})}}calMontoConcepto(){let a=0;return this.fields.controls.conceptos.controls.forEach(u=>{a+=u.value.monto}),this.fields.value.cantidad-a}getFirstDayOfMonth(){return new Date(this.today.getFullYear(),this.today.getMonth(),1).toJSON().split("T")[0]}onSave(c){c.casa=c.casa.ID,this.fillEvent(c),this.service.save(this.item,this.itemDetail).subscribe({next:u=>{if(this.sendEmail){let p=new Date(c.fecha),O=new Date(p.getTime()+6e4*this.date.getTimezoneOffset());c.fecha=O.toLocaleDateString(),this.service.sendEmail(c,c.conceptos).subscribe({next:y=>{this.meesageToast("correo enviado")},error:y=>{console.log("Error email: ",y)}})}this.meesageToast("Se guardo exitosamente"),this.loadingDismiss(),this.confirm()},error:u=>{this.meesageToast("No se pudo guardar el dato"),this.loadingDismiss()}}),this.showLoading(),c.sendEmail=!0}fillEvent(c){this.item.FOLIO=c.folio,new Date(c.fecha),this.item.FECHA=c.fecha,this.item.CASA=c.casa,this.item.NOMBRE=c.nombre,this.item.CORREO=c.email,this.item.CANTIDAD=c.cantidad;var u=c.conceptos;this.itemDetail=[],u&&(this.item.CONCEPTO=c.conceptos[0].concepto,u.forEach(p=>{var O={};O.FOLIO=c.folio,O.CASA=c.casa,O.NOMBRE=c.nombre,O.CONCEPTO=p.concepto,O.MES=p.mes,O.MONTO=p.monto,this.itemDetail.push(O)}))}removeInputField(c){this.fields.controls.conceptos.removeAt(c)}addNewInputField(){this.fields.controls.conceptos.push(this.frmConceptos())}meesageToast(c){this.toastUtil.presentToast(c,"top")}confirm(){this.modalCtrl.dismiss(null,"confirm")}close(){this.modalCtrl.dismiss(null,"cancel")}}return(_=M).\u0275fac=function(c){return new(c||_)(e.rXU(o.W3),e.rXU(m.ok),e.rXU(s.f),e.rXU(o.Xi),e.rXU(i.w))},_.\u0275cmp=e.VBU({type:_,selectors:[["app-add-recibos"]],standalone:!1,features:[e.Vt3],decls:33,vars:4,consts:[["slot","start"],[3,"click"],["name","close"],[1,"ion-padding"],[3,"ngSubmit","formGroup"],["label","Folio","labelPlacement","floating","id","folio","type","number","formControlName","folio"],["label","Fecha","labelPlacement","floating","id","fecha","type","date","formControlName","fecha"],["label","Casa","labelPlacement","floating","id","casa","interface","popover","formControlName","casa",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["label","Nombre","labelPlacement","floating","id","nombre","type","text","formControlName","nombre"],["label","Email","labelPlacement","floating","id","email","type","email","formControlName","email"],["id","sendEmail","item-right","","secondary","","formControlName","sendEmail","color","green"],["label","Cantidad","labelPlacement","floating","id","cantidad","type","number","formControlName","cantidad"],["slot","start","name","cash","aria-hidden","true"],["formArrayName","conceptos","margin-bottom",""],[3,"formGroupName",4,"ngFor","ngForOf"],["size","small","fill","clear","color","primary",3,"click"],["slot","start","name","add"],["type","submit","expand","block",3,"disabled"],[3,"value"],[3,"formGroupName"],["color","light"],["label","Concepto:","labelPlacement","floating","interface","popover","id","concepto","formControlName","concepto",3,"ionChange"],["floating",""],["id","mes","displayFormat","MMM. YYYY","formControlName","mes","monthShortNames","Ene, Feb, Mar, Apr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic","presentation","month-year",3,"preferWheel"],["label","Monto:","labelPlacement","floating","id","monto","type","number","maxlength","50","formControlName","monto"],["size","small","fill","clear","color","danger",3,"click",4,"ngIf"],["size","small","fill","clear","color","danger",3,"click"]],template:function(c,a){1&c&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Agregar Recibos"),e.k0s(),e.j41(4,"ion-buttons",0)(5,"ion-button",1),e.bIt("click",function(){return a.close()}),e.nrm(6,"ion-icon",2),e.k0s()()()(),e.j41(7,"ion-content",3)(8,"form",4),e.bIt("ngSubmit",function(){return a.onSave(a.fields.value)}),e.j41(9,"ion-item"),e.nrm(10,"ion-input",5),e.k0s(),e.j41(11,"ion-item"),e.nrm(12,"ion-input",6),e.k0s(),e.j41(13,"ion-item")(14,"ion-select",7),e.bIt("ionChange",function(p){return a.onChangeCasa(p)}),e.DNE(15,n,2,3,"ion-select-option",8),e.nrm(16,"ion-select-option")(17,"ion-select-option"),e.k0s()(),e.j41(18,"ion-item"),e.nrm(19,"ion-input",9),e.k0s(),e.j41(20,"ion-item"),e.nrm(21,"ion-input",10)(22,"ion-checkbox",11),e.k0s(),e.j41(23,"ion-item")(24,"ion-input",12),e.nrm(25,"ion-icon",13),e.k0s()(),e.j41(26,"div",14),e.DNE(27,r,14,5,"section",15),e.k0s(),e.j41(28,"ion-button",16),e.bIt("click",function(){return a.addNewInputField()}),e.nrm(29,"ion-icon",17),e.EFF(30," nuevo concepto "),e.k0s(),e.j41(31,"ion-button",18),e.EFF(32,"Agregar"),e.k0s()()()),2&c&&(e.R7$(8),e.Y8G("formGroup",a.fields),e.R7$(7),e.Y8G("ngForOf",a.casas),e.R7$(12),e.Y8G("ngForOf",a.conceptoForm.controls),e.R7$(4),e.Y8G("disabled",!a.fields.valid))},dependencies:[t.Sq,t.bT,m.qT,m.BC,m.cb,m.tU,o.Jm,o.QW,o.eY,o.W9,o.A9,o.eU,o.iq,o.$w,o.uz,o.Dg,o.jh,o.he,o.Nm,o.Ip,o.BC,o.ai,o.hB,o.su,o.Je,o.Gw,m.j4,m.JD,m.$R,m.v8],styles:["ion-select[_ngcontent-%COMP%]{min-width:100%;padding-left:0}"]}),M})()},4435:(C,w,l)=>{l.d(w,{l:()=>f});var m=l(4438);let f=(()=>{var e;class o{transform(i,t,n="asc"){if(!i)return[];let g=i.reduce((d,_)=>(d[_[t]]=[...d[_[t]]||[],_],d),{}),r=Object.keys(g).map(d=>({header:d,details:g[d]})).sort((d,_)=>isNaN(+d.header)?0-(d.header>_.header?-1:1):0-(d>_?-1:1));return("desc"==n||"DESC"==n||"reverse"==n)&&r.reverse(),r}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275pipe=m.EJ8({name:"groupBy",type:e,pure:!0}),o})()}}]);