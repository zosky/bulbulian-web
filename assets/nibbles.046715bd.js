import{_ as we,r as x,O as ke,q as ge,a4 as $e,a5 as ae,o as u,c as f,a as t,u as l,t as k,k as L,e as ie,l as E,F as Q,i as W,j as J,b,a6 as ue,a7 as re,a8 as ce,a9 as de,aa as ve,ab as xe,H as Be,ac as Ie,n as Me,$ as Z,f as Oe,h as Se,p as De,g as Fe}from"./index.72e32634.js";const fe={0:[],10:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(o=>({x:8+o,y:16})),20:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(o=>[{x:8,y:8+o},{x:24,y:8+o}]).flat(),30:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(o=>[{x:8,y:0+o},{x:24,y:20+o},{x:0+o,y:24},{x:20+o,y:8}]).flat(),40:[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(o=>[{x:8,y:10+o},{x:26,y:10+o},{x:9+o,y:8},{x:9+o,y:27}]).flat(),50:[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(o=>[1,2,3,4,5,6,7].map(C=>[{x:C*7,y:o},{x:C*7,y:20+o}])).flat(1/0),60:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(o=>({x:16,y:o*2})).flat(),70:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map(o=>[1,2,3,4,5,6,7].map(C=>[{x:C*6,y:o},{x:3+C*6,y:8+o}])).flat(1/0),80:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(o=>[{x:6+o,y:10+o},{x:12+o,y:3+o}]).flat(),90:[1,2,3,4,5,6].map(o=>[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(C=>[{x:o*6,y:2*C},{x:o*6+3,y:1+2*C}])).flat(1/0)};const v=o=>(De("data-v-4db5bf61"),o=o(),Fe(),o),je={class:"relative"},qe={id:"header",class:"flex flex-row gap-1 justify-between"},He=v(()=>t("h1",null," nibbbles vue3 style",-1)),Le=["textContent"],Ne={key:1},Ee={key:2,class:"animate-pulse"},Xe=["textContent"],Ye={key:0,id:"scoreBoard"},Ae=["textContent"],Te=["textContent"],Ve={class:"flex flex-row justify-between w-full"},Pe=v(()=>t("div",{class:"font-extralight opacity-75 px-2 md:px-10"},"live leaderBoard",-1)),Ge={key:0,class:"text-xs font-mono italic text-left pr-7 self-center"},Re={class:"flex flex-row gap-1"},ze={class:"flex flex-row gap-2"},Ke=["textContent"],Qe=["textContent"],We=["textContent"],Je=["textContent"],Ze={id:"contolTest",class:"mt-2 flex flex-row flex-wrap justify-center items-center gap-3 w-full py-4 border-b border-t border-blue-600"},Ue=v(()=>t("div",{class:"flex flex-col justify-end items-end font-light opacity-50 -ml-10"},[t("label",{class:"text-2xl -mb-2",textContent:"test drive"}),t("label",{class:"text-4xl",textContent:"controls"})],-1)),et={class:"flex flex-col items-center justify-center gap-2"},tt={class:"flex gap-2"},lt=v(()=>t("label",{textContent:"q"},null,-1)),nt=v(()=>t("label",{textContent:"w"},null,-1)),st=v(()=>t("label",{textContent:"p"},null,-1)),ot={class:"flex gap-2"},at={id:"a",class:"keyboardButton"},it=v(()=>t("label",{textContent:"a"},null,-1)),ut=v(()=>t("label",{textContent:"s"},null,-1)),rt=v(()=>t("label",{textContent:"d"},null,-1)),ct=v(()=>t("div",{class:"text-center w-full text-2xl p-3 pt-3 pb-0 flex-row gap-2 hidden sm:flex"},[t("div",{class:"keyboardButton start w-full",textContent:"q"}),t("div",{class:"keyboardButton robot w-full",textContent:"p"})],-1)),dt=["textContent"],vt={class:"flex flex-col items-center justify-center gap-2"},xt={class:"flex gap-2"},ft=v(()=>t("label",{textContent:"q"},null,-1)),mt=v(()=>t("label",{textContent:"w"},null,-1)),yt=v(()=>t("label",{textContent:"p"},null,-1)),pt={class:"flex gap-2"},bt={id:"a",class:"keyboardButton"},_t=v(()=>t("label",{textContent:"a"},null,-1)),Ct=v(()=>t("label",{textContent:"s"},null,-1)),ht=v(()=>t("label",{textContent:"d"},null,-1)),wt={key:1,id:"scoreBKG"},kt=["textContent"],gt={__name:"nibbles",setup(o){const C=Me(),m=x(!1),N=x(!1),j=x(!1),g=x(null),B=x(1e3),c=x(0),R=ke(()=>{const n=c.value,e=Math.floor(n/10);return(y=>y*(y+1)/2)(n)*100-e*1e3}),r=x([]),U="nibblesHighScore",$=Z("$localUser"),me=Z("$qData"),ye=Z("$saveData");me(U,"score",!0,5).then(n=>{var i;const e=n==null?void 0:n.sort((y,_)=>y.score<_.score?1:-1);r.value=e;const a=`${(i=e[0])==null?void 0:i.name} ${e[0].score}`;ge({title:`nibbles champion: [${a}]`})});const M=x(3),O=x(3),h=x("x+"),X=x(3),S=x([]),P=x([]),Y=x({x:32,y:32}),q=x(null),ee=["\u{1F32D}","\u{1F32E}","\u{1F32F}","\u{1F330}","\u{1F336}\uFE0F","\u{1F33D}","\u{1F344}","\u{1F345}","\u{1F346}","\u{1F347}","\u{1F348}","\u{1F349}","\u{1F34A}","\u{1F34B}","\u{1F34C}","\u{1F34D}","\u{1F34E}","\u{1F34F}","\u{1F350}","\u{1F351}","\u{1F352}","\u{1F353}","\u{1F354}","\u{1F355}","\u{1F356}","\u{1F357}","\u{1F358}","\u{1F359}","\u{1F35A}","\u{1F35B}","\u{1F35C}","\u{1F35D}","\u{1F35E}","\u{1F35F}","\u{1F360}","\u{1F361}","\u{1F362}","\u{1F363}","\u{1F364}","\u{1F365}","\u{1F366}","\u{1F366}","\u{1F367}","\u{1F368}","\u{1F369}","\u{1F36A}","\u{1F36B}","\u{1F36C}","\u{1F36D}","\u{1F36E}","\u{1F36F}","\u{1F370}","\u{1F371}","\u{1F372}","\u{1F373}","\u{1F374}","\u{1F375}","\u{1F376}","\u{1F377}","\u{1F378}","\u{1F379}","\u{1F37A}","\u{1F37B}","\u{1F37C}","\u{1F37D}\uFE0F","\u{1F37E}","\u{1F37F}","\u{1F382}","\u{1F942}","\u{1F943}","\u{1F944}","\u{1F950}","\u{1F951}","\u{1F952}","\u{1F953}","\u{1F954}","\u{1F955}","\u{1F956}","\u{1F957}","\u{1F958}","\u{1F959}","\u{1F95A}","\u{1F95B}","\u{1F95C}","\u{1F95D}","\u{1F95E}","\u{1F95F}","\u{1F960}","\u{1F961}","\u{1F962}","\u{1F963}","\u{1F964}","\u{1F965}","\u{1F966}","\u{1F967}","\u{1F968}","\u{1F969}","\u{1F96A}","\u{1F96B}","\u{1F96C}","\u{1F96D}","\u{1F96E}","\u{1F96F}","\u{1F9AA}","\u{1F9C0}","\u{1F9C1}","\u{1F9C2}","\u{1F9C3}","\u{1F9C4}","\u{1F9C5}","\u{1F9C6}","\u{1F9C7}","\u{1F9C8}","\u{1F9C9}","\u{1F9CA}","\u{1F9CB}","\u{1FAD0}","\u{1FAD1}","\u{1FAD2}","\u{1FAD3}","\u{1FAD4}","\u{1FAD5}","\u{1FAD6}"];$e(()=>{window.addEventListener("keypress",function(n){n.preventDefault();const e=String.fromCharCode(n.keyCode),a=["w","a","s","d"].includes(e);if(["q","p"].includes(e))A(e);else if((!m.value||j.value)&&a){const i=document.getElementById(e);i.classList.add("keyBlink"),setTimeout(()=>{i.classList.remove("keyBlink")},150)}else if(a){const i=(["a","d"].includes(e)?"x":"y")+(["a","w"].includes(e)?"-":"+");h.value=i,I(i)}}.bind(this))});const A=n=>{m.value?(j.value=!j.value,j.value?clearInterval(g.value):g.value=setInterval(()=>{I()},B.value)):(m.value=!0,M.value=3,O.value=3,S.value=[],X.value=3,N.value=n=="p",B.value=N.value?420:1e3,c.value=0,P.value=fe[0],h.value="x+")},I=n=>{var a,i,y;if(n=(a=n!=null?n:h.value)!=null?a:"x+",N.value==!0){const[_,s]=[M.value,O.value],[p,D]=[(i=q.value)==null?void 0:i.x,(y=q.value)==null?void 0:y.y],[F,w]=[_-p,s-D],[G,T]=[Math.abs(F),Math.abs(w)],[H,V]=[T>0&&n[0]=="x"?`y${w>0?"-":"+"}`:null,`x${F>0?"-":"+"}`];console.log("autoDebug",`c:${_}/${s}`,`f:${p}/${D}`,`a:${G}/${T}`,`d:${n}`,`n:${H}/${V}`),n=H!=null?H:V}S.value.unshift({x:M.value,y:O.value}),S.value.length>=X.value&&S.value.pop();const e=n[1]=="+"?1:-1;n[0]=="x"?M.value=M.value+e:O.value=O.value+e,clearInterval(g.value),g.value=setInterval(()=>{I()},B.value)};ae(()=>{var p,D,F,w,G,T,H,V,le,ne;const n=M.value,e=O.value,a=Y.value,i=n>a.x||!n,y=e>a.y||!e,_=S.value.find(d=>(d==null?void 0:d.x)==n&&(d==null?void 0:d.y)==e),s=P.value.find(d=>(d==null?void 0:d.x)==n&&(d==null?void 0:d.y)==e);if(i||y||_||s){clearInterval(g.value),g.value=null,m.value=!1;const d=c.value>((D=(p=r==null?void 0:r.value)==null?void 0:p.at(-1))==null?void 0:D.score),se=((F=r==null?void 0:r.value)==null?void 0:F.length)==5;if(console.log("GAME OVER // u",(w=$==null?void 0:$.user)==null?void 0:w.displayName,"auth",!N.value,"score",c.value,"LOW:",c.value>((T=(G=r==null?void 0:r.value)==null?void 0:G.at(-1))==null?void 0:T.score)),((H=$==null?void 0:$.user)==null?void 0:H.displayName)&&!N.value&&(d&&se&&(r.value=r.value.slice(0,-1)),d)){const pe=(V=$==null?void 0:$.user)==null?void 0:V.displayName,oe=C().format("X"),be=R.value,K={name:pe,score:be,date:oe};r.value.push(K),r.value=r.value.sort((Ce,he)=>Ce.score>he.score?-1:1);const _e=(ne=(le=r.value)==null?void 0:le.at(-1))==null?void 0:ne.date;console.log("newHighScore",K,`full:${se}`,"rm",_e),ye(U,oe,K)}}});const z=n=>{if(n){c.value=c.value+1,clearInterval(g.value);const a=B.value-c.value*10;B.value=a>200?a:B.value-10,g.value=setInterval(()=>{I()},B.value),c.value%10==0?(P.value=fe[c.value],B.value=420,X.value=1,S.value=[]):X.value=X.value+1}const e={fruit:ee[Math.floor(Math.random()*ee.length)],x:Math.ceil(Math.random()*Y.value.x),y:Math.ceil(Math.random()*Y.value.y)};S.value.find(a=>(a==null?void 0:a.x)==e.x&&(a==null?void 0:a.y)==e.y)?z():q.value=e};ae(()=>{const n=m.value,e=q.value,a={x:M.value,y:O.value},i=(e==null?void 0:e.x)==(a==null?void 0:a.x)&&(e==null?void 0:e.y)==(a==null?void 0:a.y);n&&!e?z():i&&z(1),n&&!g.value&&(g.value=setInterval(()=>{I()},B.value))});const te=n=>{var _;const[e,a]=(_=n.split(" "))!=null?_:[null,null],i=(a==null?void 0:a.toLowerCase())=="bulbulian",y=["ben","mel","marc","roger","chris","amira"].find(s=>s==e);return i?y:null};return(n,e)=>{var y,_;const a=Oe,i=Se("router-view");return u(),f("div",je,[t("div",qe,[He,l(c)?(u(),f("div",{key:0,class:"text-xs self-center font-mono",textContent:k(`level ${Math.floor(l(c)/10)+1}`)},null,8,Le)):L("",!0),l(m)?L("",!0):(u(),f("h2",Ne,"Q to (re)start")),l(m)?(u(),f("h2",Ee,[ie(" score: "),t("b",{textContent:k(`${l(c)} [${l(R)}]`)},null,8,Xe)])):L("",!0)]),!l(m)||l(j)?(u(),f("div",Ye,[t("div",{class:E([{"opacity-50":!l(c)},"lastScore"])},[t("div",{textContent:k(`${l(N)?"robot":"my"} ${l(j)?"current":"last"} score`)},null,8,Ae),t("div",{class:"scale-150 pr-4",textContent:k(l(R))},null,8,Te)],2),t("div",Ve,[Pe,(_=(y=l($))==null?void 0:y.user)!=null&&_.email?L("",!0):(u(),f("div",Ge,"*only for logged in users"))]),(u(!0),f(Q,null,W(l(r),(s,p)=>(u(),f("div",{key:p,class:"flex flex-row justify-between px-2 md:px-10 gap-4"},[t("div",Re,[t("div",ze,[t("div",{class:"rank font-bold text-right w-6 self-center",textContent:k(p+1)},null,8,Ke),te(s==null?void 0:s.name)?(u(),J(a,{key:0,class:"h-[2.1em] m-1",name:te(s==null?void 0:s.name)},null,8,["name"])):(u(),f("div",{key:1,textContent:k(s.name)},null,8,Qe)),t("div",{class:"text-xs font-light self-center",textContent:k(l(C)(s==null?void 0:s.date,"X").fromNow())},null,8,We)])]),t("div",{class:"font-bold text-xl",textContent:k(s==null?void 0:s.score)},null,8,Je)]))),128)),t("div",Ze,[Ue,t("div",et,[t("div",tt,[t("div",{id:"q",class:"keyboardStart flex flex-row gap-1 items-center",onClick:e[0]||(e[0]=s=>A())},[b(l(ue)),lt]),t("div",{id:"w",class:"keyboardButton",onClick:e[1]||(e[1]=s=>h.value="y-")},[b(l(re)),nt]),t("div",{id:"q",class:E(["keyboardStart flex flex-row gap-1 items-center ml-10",{"opacity-25":l(m)}]),onClick:e[2]||(e[2]=s=>l(m)?null:A("p"))},[b(l(ce)),st],2)]),t("div",ot,[t("div",at,[b(l(de),{onClick:e[3]||(e[3]=s=>h.value="x-")}),it]),t("div",{id:"s",class:"keyboardButton",onClick:e[4]||(e[4]=s=>h.value="y-")},[b(l(ve)),ut]),t("div",{id:"d",class:"keyboardButton",onClick:e[5]||(e[5]=s=>h.value="x+")},[b(l(xe)),rt])])])]),ct,t("button",{id:"why",class:"p-4 flex flex-row gap-1 ring-1 mt-4 rounded-xl items-center",onClick:e[6]||(e[6]=s=>n.$router.push(`/marc/nibbles${n.$route.name=="/marc/nibbles/why"?"":"/why"}`))},[n.$route.name=="/marc/nibbles"?(u(),J(l(Be),{key:0})):(u(),J(l(Ie),{key:1,class:"animate-spin"})),ie(" "+k(n.$route.name=="/marc/nibbles"?"why is this here?":"close"),1)]),b(i)])):L("",!0),t("div",{id:"game",class:E(["flex flex-col w-full max-w-3xl mx-auto",l(m)?"gameOn":"gameOff"])},[(u(!0),f(Q,null,W(l(Y).y,s=>(u(),f("div",{key:s,class:"flex flex-row w-full max-w-3xl"},[(u(!0),f(Q,null,W(l(Y).x,p=>{var D,F;return u(),f("div",{key:p,class:E({gCell:!0,tailHere:l(S).find(w=>w.x==p&&w.y==s),headHere:l(M)==p&&l(O)==s,wallHere:l(P).find(w=>w.x==p&&w.y==s)})},[((D=l(q))==null?void 0:D.x)==p&&((F=l(q))==null?void 0:F.y)==s?(u(),f("div",{key:0,id:"food",textContent:k(l(q).fruit)},null,8,dt)):L("",!0)],2)}),128))]))),128))],2),t("div",{id:"mobileControl",class:E(["mt-2 sm:hidden flex-row flex-wrap justify-center items-center gap-3 w-full py-4 border-b border-t border-blue-600",l(m)&&!l(j)?"flex":"hidden"])},[t("div",vt,[t("div",xt,[t("div",{id:"q",class:"keyboardStart flex flex-row gap-1 items-center",onClick:e[7]||(e[7]=s=>A())},[b(l(ue)),ft]),t("div",{id:"w",class:"keyboardButton",onClick:e[8]||(e[8]=s=>h.value="y-")},[b(l(re)),mt]),t("div",{id:"p",class:E([{"opacity-25":l(m)},"keyboardStart flex flex-row gap-1 items-center ml-10"]),onClick:e[9]||(e[9]=()=>{l(m)||(A(n.p),I())})},[b(l(ce)),yt],2)]),t("div",pt,[t("div",bt,[b(l(de),{onClick:e[10]||(e[10]=s=>{h.value="x-",I()})}),_t]),t("div",{id:"s",class:"keyboardButton",onClick:e[11]||(e[11]=s=>{h.value="y+",I()})},[b(l(ve)),Ct]),t("div",{id:"d",class:"keyboardButton",onClick:e[12]||(e[12]=s=>{h.value="x+",I()})},[b(l(xe)),ht])])])],2),l(c)?(u(),f("div",wt,[t("div",{textContent:k(l(c))},null,8,kt)])):L("",!0)])}}},Bt=we(gt,[["__scopeId","data-v-4db5bf61"]]);export{Bt as default};
