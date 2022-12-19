import{_ as M,r as B,o,c,a as s,b as i,F as G,i as I,j as r,u as e,L as D,s as y,v,t as l,w as P,k as b,x as N,D as S,n as W,f as Y,p as $,g as H}from"./index.72e32634.js";import{_ as O}from"./GameControllers.48064ecc.js";import{g as V}from"./lutris.ffae8dc9.js";const C=d=>($("data-v-f07b0bb9"),d=d(),H(),d),X={class:"flex flex-col p-3 max-w-7xl mx-auto"},j={class:"header"},F=C(()=>s("div",{class:"tLabel",textContent:"&"},null,-1)),R=C(()=>s("div",{class:"tLabel",textContent:"last"},null,-1)),E={class:"cards"},q={class:"front"},z=["src","alt"],A={class:"infoWrap"},J=["textContent"],K={class:"infoBar"},Q={key:0,class:"line1"},T=["textContent"],U=["textContent"],Z={class:"back"},g={class:"font-extrabold text-xl"},tt=["textContent"],st=["textContent"],et={class:"text-lg"},nt=["textContent"],ot={class:"text-base font-light -mt-3"},lt=["textContent"],at=["textContent"],ct={__name:"GamePlayHistory",setup(d){var p,x,f,h;const u=W(),w=B((h=(f=(x=(p=V)==null?void 0:p.filter(n=>!n.hidden))==null?void 0:x.sort((n,a)=>n.lastplayed>a.lastplayed?-1:1))==null?void 0:f.slice(0,6))==null?void 0:h.map(n=>n={...n,img:`/images/games/lutris/coverart/${n.slug}.jpg`})),k=n=>{const a=Math.floor(n),_=Math.round((n-a)*60);return`${a>0?a+"h":""}${_>0?_+"m":""}`};return(n,a)=>{const _=Y,m=O;return o(),c("div",X,[s("div",j,[i(_,{name:"ben",class:"i"}),F,i(_,{name:"marc",class:"i"}),R,i(m,{class:"i -rotate-12 animate scale-[3] translate-x-full"})]),s("div",E,[(o(!0),c(G,null,I(e(w),(t,L)=>(o(),c("div",{key:L,class:"game flip"},[s("div",q,[t!=null&&t.img?(o(),c("img",{key:0,src:t==null?void 0:t.img,alt:t==null?void 0:t.name},null,8,z)):(o(),r(e(D),{key:1})),s("div",A,[t.platform=="Linux"?(o(),r(e(y),{key:0,class:"pIcon mix-blend-difference text-yellow-300 w-12 h-12 -rotate-12 -mr-6"})):t.platform=="Windows"?(o(),r(e(v),{key:1,class:"pIcon mix-blend-difference text-yellow-300 w-10 h-10 -mr-1 -mb-1"})):(o(),c("div",{key:2,textContent:l(t.platform)},null,8,J)),s("div",K,[(t==null?void 0:t.playtime)>.1?(o(),c("div",Q,[i(e(P)),s("div",{textContent:l(k(t.playtime))},null,8,T)])):b("",!0),s("div",{class:"tRel",textContent:l(e(u)(t.lastplayed,"X").fromNow(!0))},null,8,U)])])]),s("div",Z,[s("div",g,[s("h1",{class:"w-full",textContent:l(t.name)},null,8,tt),s("h2",{class:"opacity-75 font-mono",textContent:l(t.year)},null,8,st)]),s("div",et,[i(e(N)),s("h3",{textContent:l(e(u)(t.lastplayed,"X").format("MMM D"))},null,8,nt)]),s("div",ot,[i(e(S),{class:"scale-125"}),s("h4",{textContent:l(e(u)(t.installed_at,"X").format("MMM D YYYY"))},null,8,lt)]),s("div",null,[t.platform=="Linux"?(o(),r(e(y),{key:0,class:"mix-blend-difference text-yellow-300 w-12 h-12 -rotate-12 -mr-6"})):t.platform=="Windows"?(o(),r(e(v),{key:1,class:"mix-blend-difference text-yellow-300 w-10 h-10 -mr-1 -mb-1"})):b("",!0),s("div",{class:"font-bold",textContent:l(t.runner)},null,8,at)])])]))),128))])])}}},dt=M(ct,[["__scopeId","data-v-f07b0bb9"]]);export{dt as _};
