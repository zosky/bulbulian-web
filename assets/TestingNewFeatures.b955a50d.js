import{_,o as a,j as i,f as m,ad as k,r as B,c as x,a as s,b as c,F as w,ae as $}from"./index.72e32634.js";import{_ as O}from"./GamePlayHistory.d0536f36.js";import{a as P,_ as T}from"./GameControllers.48064ecc.js";import"./lutris.ffae8dc9.js";const h={};function v(r,e){const o=m;return a(),i(o,{name:"ben"})}const y=_(h,[["render",v]]),C={};function F(r,e){const o=m;return a(),i(o,{name:"mel"})}const N=_(C,[["render",F]]),H={class:"flex flex-row flex-wrap gap-2"},V={__name:"TestingNewFeatures",setup(r){const e=k(),o=B([]),u=()=>{e.info("here. take some info",{timeout:16e3}),e.success("youWin",{timeout:6254,icon:N}),e.warning("thats not right",{timeout:15e3,icon:{component:y}});const n=e.error("NOOOOOO",{timeout:212121,icon:$});o.value.push(n)},l=(n,t)=>e.update(n,t),p=()=>l(o.value.at(-1),{content:"hacked",options:{type:"warning",timeout:12121}});return(n,t)=>{const f=P,b=T,d=O;return a(),x(w,null,[s("div",H,[s("button",{onClick:t[0]||(t[0]=g=>u())},"testToasts"),s("button",{onClick:t[1]||(t[1]=g=>p())},"testHack"),c(f,{class:"w-10"}),c(b,{i:"lutris",class:"w-10"})]),c(d)],64)}}};export{V as default};
