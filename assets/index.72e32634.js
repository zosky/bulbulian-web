(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function xl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function wi(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Qe(s)?g2(s):wi(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Qe(t))return t;if(He(t))return t}}const f2=/;(?![^(]*\))/g,p2=/:([^]+)/,m2=/\/\*.*?\*\//gs;function g2(t){const e={};return t.replace(m2,"").split(f2).forEach(n=>{if(n){const s=n.split(p2);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ht(t){let e="";if(Qe(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const s=Ht(t[n]);s&&(e+=s+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const y2="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v2=xl(y2);function Sp(t){return!!t||t===""}const En=t=>Qe(t)?t:t==null?"":ce(t)||He(t)&&(t.toString===Dp||!me(t.toString))?JSON.stringify(t,kp,2):String(t),kp=(t,e)=>e&&e.__v_isRef?kp(t,e.value):Ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Lp(e)?{[`Set(${e.size})`]:[...e.values()]}:He(e)&&!ce(e)&&!Mp(e)?String(e):e,Ve={},js=[],Wt=()=>{},_2=()=>!1,w2=/^on[^a-z]/,na=t=>w2.test(t),$l=t=>t.startsWith("onUpdate:"),nt=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},b2=Object.prototype.hasOwnProperty,Se=(t,e)=>b2.call(t,e),ce=Array.isArray,Ks=t=>sa(t)==="[object Map]",Lp=t=>sa(t)==="[object Set]",me=t=>typeof t=="function",Qe=t=>typeof t=="string",Fl=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",Rp=t=>He(t)&&me(t.then)&&me(t.catch),Dp=Object.prototype.toString,sa=t=>Dp.call(t),C2=t=>sa(t).slice(8,-1),Mp=t=>sa(t)==="[object Object]",Hl=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ao=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},T2=/-(\w)/g,dn=ra(t=>t.replace(T2,(e,n)=>n?n.toUpperCase():"")),E2=/\B([A-Z])/g,pr=ra(t=>t.replace(E2,"-$1").toLowerCase()),ia=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),co=ra(t=>t?`on${ia(t)}`:""),Wr=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Eo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Fh;const I2=()=>Fh||(Fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let en;class A2{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}run(e){if(this.active){const n=en;try{return en=this,e()}finally{en=n}}}on(){en=this}off(){en=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function S2(t,e=en){e&&e.active&&e.effects.push(t)}const Ul=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Op=t=>(t.w&Qn)>0,Np=t=>(t.n&Qn)>0,k2=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qn},L2=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Op(r)&&!Np(r)?r.delete(t):e[n++]=r,r.w&=~Qn,r.n&=~Qn}e.length=n}},Bc=new WeakMap;let Rr=0,Qn=1;const qc=30;let jt;const Cs=Symbol(""),jc=Symbol("");class Bl{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,S2(this,s)}run(){if(!this.active)return this.fn();let e=jt,n=Kn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Kn=!0,Qn=1<<++Rr,Rr<=qc?k2(this):Hh(this),this.fn()}finally{Rr<=qc&&L2(this),Qn=1<<--Rr,jt=this.parent,Kn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(Hh(this),this.onStop&&this.onStop(),this.active=!1)}}function Hh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Kn=!0;const Pp=[];function mr(){Pp.push(Kn),Kn=!1}function gr(){const t=Pp.pop();Kn=t===void 0?!0:t}function Mt(t,e,n){if(Kn&&jt){let s=Bc.get(t);s||Bc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ul()),xp(r)}}function xp(t,e){let n=!1;Rr<=qc?Np(t)||(t.n|=Qn,n=!Op(t)):n=!t.has(jt),n&&(t.add(jt),jt.deps.push(t))}function kn(t,e,n,s,r,i){const o=Bc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ce(t)){const c=Gr(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ce(t)?Hl(n)&&a.push(o.get("length")):(a.push(o.get(Cs)),Ks(t)&&a.push(o.get(jc)));break;case"delete":ce(t)||(a.push(o.get(Cs)),Ks(t)&&a.push(o.get(jc)));break;case"set":Ks(t)&&a.push(o.get(Cs));break}if(a.length===1)a[0]&&Kc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Kc(Ul(c))}}function Kc(t,e){const n=ce(t)?t:[...t];for(const s of n)s.computed&&Uh(s);for(const s of n)s.computed||Uh(s)}function Uh(t,e){(t!==jt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const R2=xl("__proto__,__v_isRef,__isVue"),$p=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fl)),D2=ql(),M2=ql(!1,!0),O2=ql(!0),Bh=N2();function N2(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ke(this);for(let i=0,o=this.length;i<o;i++)Mt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ke)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mr();const s=ke(this)[e].apply(this,n);return gr(),s}}),t}function ql(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Y2:Bp:e?Up:Hp).get(s))return s;const o=ce(s);if(!t&&o&&Se(Bh,r))return Reflect.get(Bh,r,i);const a=Reflect.get(s,r,i);return(Fl(r)?$p.has(r):R2(r))||(t||Mt(s,"get",r),e)?a:it(a)?o&&Hl(r)?a:a.value:He(a)?t?qp(a):bi(a):a}}const P2=Vp(),x2=Vp(!0);function Vp(t=!1){return function(n,s,r,i){let o=n[s];if(er(o)&&it(o)&&!it(r))return!1;if(!t&&(!Io(r)&&!er(r)&&(o=ke(o),r=ke(r)),!ce(n)&&it(o)&&!it(r)))return o.value=r,!0;const a=ce(n)&&Hl(s)?Number(s)<n.length:Se(n,s),c=Reflect.set(n,s,r,i);return n===ke(i)&&(a?Wr(r,o)&&kn(n,"set",s,r):kn(n,"add",s,r)),c}}function $2(t,e){const n=Se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&kn(t,"delete",e,void 0),s}function V2(t,e){const n=Reflect.has(t,e);return(!Fl(e)||!$p.has(e))&&Mt(t,"has",e),n}function F2(t){return Mt(t,"iterate",ce(t)?"length":Cs),Reflect.ownKeys(t)}const Fp={get:D2,set:P2,deleteProperty:$2,has:V2,ownKeys:F2},H2={get:O2,set(t,e){return!0},deleteProperty(t,e){return!0}},U2=nt({},Fp,{get:M2,set:x2}),jl=t=>t,oa=t=>Reflect.getPrototypeOf(t);function zi(t,e,n=!1,s=!1){t=t.__v_raw;const r=ke(t),i=ke(e);n||(e!==i&&Mt(r,"get",e),Mt(r,"get",i));const{has:o}=oa(r),a=s?jl:n?Wl:Qr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,s=ke(n),r=ke(t);return e||(t!==r&&Mt(s,"has",t),Mt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Gi(t,e=!1){return t=t.__v_raw,!e&&Mt(ke(t),"iterate",Cs),Reflect.get(t,"size",t)}function qh(t){t=ke(t);const e=ke(this);return oa(e).has.call(e,t)||(e.add(t),kn(e,"add",t,t)),this}function jh(t,e){e=ke(e);const n=ke(this),{has:s,get:r}=oa(n);let i=s.call(n,t);i||(t=ke(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Wr(e,o)&&kn(n,"set",t,e):kn(n,"add",t,e),this}function Kh(t){const e=ke(this),{has:n,get:s}=oa(e);let r=n.call(e,t);r||(t=ke(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&kn(e,"delete",t,void 0),i}function zh(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&kn(t,"clear",void 0,void 0),n}function Qi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ke(o),c=e?jl:t?Wl:Qr;return!t&&Mt(a,"iterate",Cs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Yi(t,e,n){return function(...s){const r=this.__v_raw,i=ke(r),o=Ks(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?jl:e?Wl:Qr;return!e&&Mt(i,"iterate",c?jc:Cs),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Pn(t){return function(...e){return t==="delete"?!1:this}}function B2(){const t={get(i){return zi(this,i)},get size(){return Gi(this)},has:Wi,add:qh,set:jh,delete:Kh,clear:zh,forEach:Qi(!1,!1)},e={get(i){return zi(this,i,!1,!0)},get size(){return Gi(this)},has:Wi,add:qh,set:jh,delete:Kh,clear:zh,forEach:Qi(!1,!0)},n={get(i){return zi(this,i,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Qi(!0,!1)},s={get(i){return zi(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yi(i,!1,!1),n[i]=Yi(i,!0,!1),e[i]=Yi(i,!1,!0),s[i]=Yi(i,!0,!0)}),[t,n,e,s]}const[q2,j2,K2,z2]=B2();function Kl(t,e){const n=e?t?z2:K2:t?j2:q2;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Se(n,r)&&r in s?n:s,r,i)}const W2={get:Kl(!1,!1)},G2={get:Kl(!1,!0)},Q2={get:Kl(!0,!1)},Hp=new WeakMap,Up=new WeakMap,Bp=new WeakMap,Y2=new WeakMap;function X2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J2(t){return t.__v_skip||!Object.isExtensible(t)?0:X2(C2(t))}function bi(t){return er(t)?t:zl(t,!1,Fp,W2,Hp)}function Z2(t){return zl(t,!1,U2,G2,Up)}function qp(t){return zl(t,!0,H2,Q2,Bp)}function zl(t,e,n,s,r){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=J2(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function zs(t){return er(t)?zs(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function Io(t){return!!(t&&t.__v_isShallow)}function jp(t){return zs(t)||er(t)}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function Kp(t){return Eo(t,"__v_skip",!0),t}const Qr=t=>He(t)?bi(t):t,Wl=t=>He(t)?qp(t):t;function zp(t){Kn&&jt&&(t=ke(t),xp(t.dep||(t.dep=Ul())))}function Wp(t,e){t=ke(t),t.dep&&Kc(t.dep)}function it(t){return!!(t&&t.__v_isRef===!0)}function yr(t){return Gp(t,!1)}function ev(t){return Gp(t,!0)}function Gp(t,e){return it(t)?t:new tv(t,e)}class tv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ke(e),this._value=n?e:Qr(e)}get value(){return zp(this),this._value}set value(e){const n=this.__v_isShallow||Io(e)||er(e);e=n?e:ke(e),Wr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Qr(e),Wp(this))}}function _e(t){return it(t)?t.value:t}const nv={get:(t,e,n)=>_e(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return it(r)&&!it(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Qp(t){return zs(t)?t:new Proxy(t,nv)}var Yp;class sv{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yp]=!1,this._dirty=!0,this.effect=new Bl(e,()=>{this._dirty||(this._dirty=!0,Wp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ke(this);return zp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Yp="__v_isReadonly";function rv(t,e,n=!1){let s,r;const i=me(t);return i?(s=t,r=Wt):(s=t.get,r=t.set),new sv(s,r,i||!r,n)}function zn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){aa(i,e,n)}return r}function $t(t,e,n,s){if(me(t)){const i=zn(t,e,n,s);return i&&Rp(i)&&i.catch(o=>{aa(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push($t(t[i],e,n,s));return r}function aa(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){zn(c,null,10,[t,o,a]);return}}iv(t,n,r,s)}function iv(t,e,n,s=!0){console.error(t)}let Yr=!1,zc=!1;const ht=[];let nn=0;const Ws=[];let vn=null,ds=0;const Xp=Promise.resolve();let Gl=null;function ca(t){const e=Gl||Xp;return t?e.then(this?t.bind(this):t):e}function ov(t){let e=nn+1,n=ht.length;for(;e<n;){const s=e+n>>>1;Xr(ht[s])<t?e=s+1:n=s}return e}function Ql(t){(!ht.length||!ht.includes(t,Yr&&t.allowRecurse?nn+1:nn))&&(t.id==null?ht.push(t):ht.splice(ov(t.id),0,t),Jp())}function Jp(){!Yr&&!zc&&(zc=!0,Gl=Xp.then(e1))}function av(t){const e=ht.indexOf(t);e>nn&&ht.splice(e,1)}function cv(t){ce(t)?Ws.push(...t):(!vn||!vn.includes(t,t.allowRecurse?ds+1:ds))&&Ws.push(t),Jp()}function Wh(t,e=Yr?nn+1:0){for(;e<ht.length;e++){const n=ht[e];n&&n.pre&&(ht.splice(e,1),e--,n())}}function Zp(t){if(Ws.length){const e=[...new Set(Ws)];if(Ws.length=0,vn){vn.push(...e);return}for(vn=e,vn.sort((n,s)=>Xr(n)-Xr(s)),ds=0;ds<vn.length;ds++)vn[ds]();vn=null,ds=0}}const Xr=t=>t.id==null?1/0:t.id,lv=(t,e)=>{const n=Xr(t)-Xr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function e1(t){zc=!1,Yr=!0,ht.sort(lv);const e=Wt;try{for(nn=0;nn<ht.length;nn++){const n=ht[nn];n&&n.active!==!1&&zn(n,null,14)}}finally{nn=0,ht.length=0,Zp(),Yr=!1,Gl=null,(ht.length||Ws.length)&&e1()}}function uv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Ve;h&&(r=n.map(f=>Qe(f)?f.trim():f)),d&&(r=n.map(Gr))}let a,c=s[a=co(e)]||s[a=co(dn(e))];!c&&i&&(c=s[a=co(pr(e))]),c&&$t(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,$t(l,t,6,r)}}function t1(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!me(t)){const c=l=>{const u=t1(l,e,!0);u&&(a=!0,nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(He(t)&&s.set(t,null),null):(ce(i)?i.forEach(c=>o[c]=null):nt(o,i),He(t)&&s.set(t,o),o)}function la(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,pr(e))||Se(t,e))}let ot=null,ua=null;function Ao(t){const e=ot;return ot=t,ua=t&&t.type.__scopeId||null,e}function n1(t){ua=t}function s1(){ua=null}function Ci(t,e=ot,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&sd(-1);const i=Ao(e);let o;try{o=t(...r)}finally{Ao(i),s._d&&sd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function oc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:f,ctx:m,inheritAttrs:y}=t;let _,w;const b=Ao(t);try{if(n.shapeFlag&4){const j=r||s;_=tn(u.call(j,j,d,i,f,h,m)),w=c}else{const j=e;_=tn(j.length>1?j(i,{attrs:c,slots:a,emit:l}):j(i,null)),w=e.props?c:hv(c)}}catch(j){Vr.length=0,aa(j,t,1),_=ye(Vt)}let R=_;if(w&&y!==!1){const j=Object.keys(w),{shapeFlag:J}=R;j.length&&J&7&&(o&&j.some($l)&&(w=dv(w,o)),R=Yn(R,w))}return n.dirs&&(R=Yn(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),_=R,Ao(b),_}const hv=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},dv=(t,e)=>{const n={};for(const s in t)(!$l(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function fv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Gh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!la(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gh(s,o,l):!0:!!o;return!1}function Gh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!la(n,i))return!0}return!1}function pv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mv=t=>t.__isSuspense;function gv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):cv(t)}function uo(t,e){if(tt){let n=tt.provides;const s=tt.parent&&tt.parent.provides;s===n&&(n=tt.provides=Object.create(s)),n[t]=e}}function qe(t,e,n=!1){const s=tt||ot;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&me(e)?e.call(s.proxy):e}}function r1(t,e){return Yl(t,null,e)}const Xi={};function Pr(t,e,n){return Yl(t,e,n)}function Yl(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ve){const a=tt;let c,l=!1,u=!1;if(it(t)?(c=()=>t.value,l=Io(t)):zs(t)?(c=()=>t,s=!0):ce(t)?(u=!0,l=t.some(R=>zs(R)||Io(R)),c=()=>t.map(R=>{if(it(R))return R.value;if(zs(R))return ms(R);if(me(R))return zn(R,a,2)})):me(t)?e?c=()=>zn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return d&&d(),$t(t,a,3,[h])}:c=Wt,e&&s){const R=c;c=()=>ms(R())}let d,h=R=>{d=w.onStop=()=>{zn(R,a,4)}},f;if(ti)if(h=Wt,e?n&&$t(e,a,3,[c(),u?[]:void 0,h]):c(),r==="sync"){const R=a_();f=R.__watcherHandles||(R.__watcherHandles=[])}else return Wt;let m=u?new Array(t.length).fill(Xi):Xi;const y=()=>{if(!!w.active)if(e){const R=w.run();(s||l||(u?R.some((j,J)=>Wr(j,m[J])):Wr(R,m)))&&(d&&d(),$t(e,a,3,[R,m===Xi?void 0:u&&m[0]===Xi?[]:m,h]),m=R)}else w.run()};y.allowRecurse=!!e;let _;r==="sync"?_=y:r==="post"?_=()=>Tt(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>Ql(y));const w=new Bl(c,_);e?n?y():m=w.run():r==="post"?Tt(w.run.bind(w),a&&a.suspense):w.run();const b=()=>{w.stop(),a&&a.scope&&Vl(a.scope.effects,w)};return f&&f.push(b),b}function yv(t,e,n){const s=this.proxy,r=Qe(t)?t.includes(".")?i1(s,t):()=>s[t]:t.bind(s,s);let i;me(e)?i=e:(i=e.handler,n=e);const o=tt;nr(this);const a=Yl(r,i.bind(s),n);return o?nr(o):Ts(),a}function i1(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ms(t,e){if(!He(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))ms(t.value,e);else if(ce(t))for(let n=0;n<t.length;n++)ms(t[n],e);else if(Lp(t)||Ks(t))t.forEach(n=>{ms(n,e)});else if(Mp(t))for(const n in t)ms(t[n],e);return t}function o1(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jl(()=>{t.isMounted=!0}),Zl(()=>{t.isUnmounting=!0}),t}const Pt=[Function,Array],vv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pt,onEnter:Pt,onAfterEnter:Pt,onEnterCancelled:Pt,onBeforeLeave:Pt,onLeave:Pt,onAfterLeave:Pt,onLeaveCancelled:Pt,onBeforeAppear:Pt,onAppear:Pt,onAfterAppear:Pt,onAppearCancelled:Pt},setup(t,{slots:e}){const n=Ti(),s=o1();let r;return()=>{const i=e.default&&Xl(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const y of i)if(y.type!==Vt){o=y;break}}const a=ke(t),{mode:c}=a;if(s.isLeaving)return ac(o);const l=Qh(o);if(!l)return ac(o);const u=Jr(l,a,s,n);Zr(l,u);const d=n.subTree,h=d&&Qh(d);let f=!1;const{getTransitionKey:m}=l.type;if(m){const y=m();r===void 0?r=y:y!==r&&(r=y,f=!0)}if(h&&h.type!==Vt&&(!fs(l,h)||f)){const y=Jr(h,a,s,n);if(Zr(h,y),c==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ac(o);c==="in-out"&&l.type!==Vt&&(y.delayLeave=(_,w,b)=>{const R=a1(s,h);R[String(h.key)]=h,_._leaveCb=()=>{w(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},_v=vv;function a1(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Jr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:b}=e,R=String(t.key),j=a1(n,t),J=(W,Y)=>{W&&$t(W,s,9,Y)},ie=(W,Y)=>{const B=Y[1];J(W,Y),ce(W)?W.every(Ie=>Ie.length<=1)&&B():W.length<=1&&B()},ge={mode:i,persisted:o,beforeEnter(W){let Y=a;if(!n.isMounted)if(r)Y=y||a;else return;W._leaveCb&&W._leaveCb(!0);const B=j[R];B&&fs(t,B)&&B.el._leaveCb&&B.el._leaveCb(),J(Y,[W])},enter(W){let Y=c,B=l,Ie=u;if(!n.isMounted)if(r)Y=_||c,B=w||l,Ie=b||u;else return;let V=!1;const P=W._enterCb=k=>{V||(V=!0,k?J(Ie,[W]):J(B,[W]),ge.delayedLeave&&ge.delayedLeave(),W._enterCb=void 0)};Y?ie(Y,[W,P]):P()},leave(W,Y){const B=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return Y();J(d,[W]);let Ie=!1;const V=W._leaveCb=P=>{Ie||(Ie=!0,Y(),P?J(m,[W]):J(f,[W]),W._leaveCb=void 0,j[B]===t&&delete j[B])};j[B]=t,h?ie(h,[W,V]):V()},clone(W){return Jr(W,e,n,s)}};return ge}function ac(t){if(ha(t))return t=Yn(t),t.children=null,t}function Qh(t){return ha(t)?t.children?t.children[0]:void 0:t}function Zr(t,e){t.shapeFlag&6&&t.component?Zr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xl(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Be?(o.patchFlag&128&&r++,s=s.concat(Xl(o.children,e,a))):(e||o.type!==Vt)&&s.push(a!=null?Yn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function mn(t){return me(t)?{setup:t,name:t.name}:t}const xr=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function wv(t,e){c1(t,"a",e)}function bv(t,e){c1(t,"da",e)}function c1(t,e,n=tt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(da(e,s,n),n){let r=n.parent;for(;r&&r.parent;)ha(r.parent.vnode)&&Cv(s,e,n,r),r=r.parent}}function Cv(t,e,n,s){const r=da(e,t,s,!0);u1(()=>{Vl(s[e],r)},n)}function da(t,e,n=tt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mr(),nr(n);const a=$t(e,n,t,o);return Ts(),gr(),a});return s?r.unshift(i):r.push(i),i}}const Nn=t=>(e,n=tt)=>(!ti||t==="sp")&&da(t,(...s)=>e(...s),n),Tv=Nn("bm"),Jl=Nn("m"),Ev=Nn("bu"),l1=Nn("u"),Zl=Nn("bum"),u1=Nn("um"),Iv=Nn("sp"),Av=Nn("rtg"),Sv=Nn("rtc");function kv(t,e=tt){da("ec",t,e)}function hS(t,e){const n=ot;if(n===null)return t;const s=ya(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ve]=e[i];o&&(me(o)&&(o={mounted:o,updated:o}),o.deep&&ms(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function as(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(mr(),$t(c,n,8,[t.el,a,t,e]),gr())}}const eu="components";function Gs(t,e){return d1(eu,t,!0,e)||t}const h1=Symbol();function fa(t){return Qe(t)?d1(eu,t,!1)||t:t||h1}function d1(t,e,n=!0,s=!1){const r=ot||tt;if(r){const i=r.type;if(t===eu){const a=r_(i,!1);if(a&&(a===e||a===dn(e)||a===ia(dn(e))))return i}const o=Yh(r[t]||i[t],e)||Yh(r.appContext[t],e);return!o&&s?i:o}}function Yh(t,e){return t&&(t[e]||t[dn(e)]||t[ia(dn(e))])}function tr(t,e,n,s){let r;const i=n&&n[s];if(ce(t)||Qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(He(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Lv(t,e,n={},s,r){if(ot.isCE||ot.parent&&xr(ot.parent)&&ot.parent.isCE)return e!=="default"&&(n.name=e),ye("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),re();const o=i&&f1(i(n)),a=It(Be,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function f1(t){return t.some(e=>ko(e)?!(e.type===Vt||e.type===Be&&!f1(e.children)):!0)?t:null}function Rv(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:co(s)]=t[s];return n}const Wc=t=>t?E1(t)?ya(t)||t.proxy:Wc(t.parent):null,$r=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wc(t.parent),$root:t=>Wc(t.root),$emit:t=>t.emit,$options:t=>tu(t),$forceUpdate:t=>t.f||(t.f=()=>Ql(t.update)),$nextTick:t=>t.n||(t.n=ca.bind(t.proxy)),$watch:t=>yv.bind(t)}),cc=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Se(t,e),Dv={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(cc(s,e))return o[e]=1,s[e];if(r!==Ve&&Se(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Se(l,e))return o[e]=3,i[e];if(n!==Ve&&Se(n,e))return o[e]=4,n[e];Gc&&(o[e]=0)}}const u=$r[e];let d,h;if(u)return e==="$attrs"&&Mt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ve&&Se(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Se(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return cc(r,e)?(r[e]=n,!0):s!==Ve&&Se(s,e)?(s[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ve&&Se(t,o)||cc(e,o)||(a=i[0])&&Se(a,o)||Se(s,o)||Se($r,o)||Se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Gc=!0;function Mv(t){const e=tu(t),n=t.proxy,s=t.ctx;Gc=!1,e.beforeCreate&&Xh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:m,activated:y,deactivated:_,beforeDestroy:w,beforeUnmount:b,destroyed:R,unmounted:j,render:J,renderTracked:ie,renderTriggered:ge,errorCaptured:W,serverPrefetch:Y,expose:B,inheritAttrs:Ie,components:V,directives:P,filters:k}=e;if(l&&Ov(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const A in o){const x=o[A];me(x)&&(s[A]=x.bind(n))}if(r){const A=r.call(n,n);He(A)&&(t.data=bi(A))}if(Gc=!0,i)for(const A in i){const x=i[A],K=me(x)?x.bind(n,n):me(x.get)?x.get.bind(n,n):Wt,de=!me(x)&&me(x.set)?x.set.bind(n):Wt,we=dt({get:K,set:de});Object.defineProperty(s,A,{enumerable:!0,configurable:!0,get:()=>we.value,set:ve=>we.value=ve})}if(a)for(const A in a)p1(a[A],s,n,A);if(c){const A=me(c)?c.call(n):c;Reflect.ownKeys(A).forEach(x=>{uo(x,A[x])})}u&&Xh(u,t,"c");function H(A,x){ce(x)?x.forEach(K=>A(K.bind(n))):x&&A(x.bind(n))}if(H(Tv,d),H(Jl,h),H(Ev,f),H(l1,m),H(wv,y),H(bv,_),H(kv,W),H(Sv,ie),H(Av,ge),H(Zl,b),H(u1,j),H(Iv,Y),ce(B))if(B.length){const A=t.exposed||(t.exposed={});B.forEach(x=>{Object.defineProperty(A,x,{get:()=>n[x],set:K=>n[x]=K})})}else t.exposed||(t.exposed={});J&&t.render===Wt&&(t.render=J),Ie!=null&&(t.inheritAttrs=Ie),V&&(t.components=V),P&&(t.directives=P)}function Ov(t,e,n=Wt,s=!1){ce(t)&&(t=Qc(t));for(const r in t){const i=t[r];let o;He(i)?"default"in i?o=qe(i.from||r,i.default,!0):o=qe(i.from||r):o=qe(i),it(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Xh(t,e,n){$t(ce(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function p1(t,e,n,s){const r=s.includes(".")?i1(n,s):()=>n[s];if(Qe(t)){const i=e[t];me(i)&&Pr(r,i)}else if(me(t))Pr(r,t.bind(n));else if(He(t))if(ce(t))t.forEach(i=>p1(i,e,n,s));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&Pr(r,i,t)}}function tu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>So(c,l,o,!0)),So(c,e,o)),He(e)&&i.set(e,c),c}function So(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&So(t,i,n,!0),r&&r.forEach(o=>So(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Nv={data:Jh,props:us,emits:us,methods:us,computed:us,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:us,directives:us,watch:xv,provide:Jh,inject:Pv};function Jh(t,e){return e?t?function(){return nt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Pv(t,e){return us(Qc(t),Qc(e))}function Qc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function us(t,e){return t?nt(nt(Object.create(null),t),e):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const s in e)n[s]=bt(t[s],e[s]);return n}function $v(t,e,n,s=!1){const r={},i={};Eo(i,ma,1),t.propsDefaults=Object.create(null),m1(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Z2(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Vv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ke(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(la(t.emitsOptions,h))continue;const f=e[h];if(c)if(Se(i,h))f!==i[h]&&(i[h]=f,l=!0);else{const m=dn(h);r[m]=Yc(c,a,m,f,t,!1)}else f!==i[h]&&(i[h]=f,l=!0)}}}else{m1(t,e,r,i)&&(l=!0);let u;for(const d in a)(!e||!Se(e,d)&&((u=pr(d))===d||!Se(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Yc(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!Se(e,d)&&!0)&&(delete i[d],l=!0)}l&&kn(t,"set","$attrs")}function m1(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ao(c))continue;const l=e[c];let u;r&&Se(r,u=dn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:la(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ke(n),l=a||Ve;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Yc(r,c,d,l[d],t,!Se(l,d))}}return o}function Yc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&me(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(nr(r),s=l[n]=c.call(null,e),Ts())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===pr(n))&&(s=!0))}return s}function g1(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!me(t)){const u=d=>{c=!0;const[h,f]=g1(d,e,!0);nt(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return He(t)&&s.set(t,js),js;if(ce(i))for(let u=0;u<i.length;u++){const d=dn(i[u]);Zh(d)&&(o[d]=Ve)}else if(i)for(const u in i){const d=dn(u);if(Zh(d)){const h=i[u],f=o[d]=ce(h)||me(h)?{type:h}:Object.assign({},h);if(f){const m=nd(Boolean,f.type),y=nd(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||Se(f,"default"))&&a.push(d)}}}const l=[o,a];return He(t)&&s.set(t,l),l}function Zh(t){return t[0]!=="$"}function ed(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function td(t,e){return ed(t)===ed(e)}function nd(t,e){return ce(e)?e.findIndex(n=>td(n,t)):me(e)&&td(e,t)?0:-1}const y1=t=>t[0]==="_"||t==="$stable",nu=t=>ce(t)?t.map(tn):[tn(t)],Fv=(t,e,n)=>{if(e._n)return e;const s=Ci((...r)=>nu(e(...r)),n);return s._c=!1,s},v1=(t,e,n)=>{const s=t._ctx;for(const r in t){if(y1(r))continue;const i=t[r];if(me(i))e[r]=Fv(r,i,s);else if(i!=null){const o=nu(i);e[r]=()=>o}}},_1=(t,e)=>{const n=nu(e);t.slots.default=()=>n},Hv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ke(e),Eo(e,"_",n)):v1(e,t.slots={})}else t.slots={},e&&_1(t,e);Eo(t.slots,ma,1)},Uv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(nt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,v1(e,r)),o=e}else e&&(_1(t,e),o={default:1});if(i)for(const a in r)!y1(a)&&!(a in o)&&delete r[a]};function w1(){return{app:null,config:{isNativeTag:_2,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bv=0;function qv(t,e){return function(s,r=null){me(s)||(s=Object.assign({},s)),r!=null&&!He(r)&&(r=null);const i=w1(),o=new Set;let a=!1;const c=i.app={_uid:Bv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:iu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&me(l.install)?(o.add(l),l.install(c,...u)):me(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,d){if(!a){const h=ye(s,r);return h.appContext=i,u&&e?e(h,l):t(h,l,d),a=!0,c._container=l,l.__vue_app__=c,ya(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Xc(t,e,n,s,r=!1){if(ce(t)){t.forEach((h,f)=>Xc(h,e&&(ce(e)?e[f]:e),n,s,r));return}if(xr(s)&&!r)return;const i=s.shapeFlag&4?ya(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,d=a.setupState;if(l!=null&&l!==c&&(Qe(l)?(u[l]=null,Se(d,l)&&(d[l]=null)):it(l)&&(l.value=null)),me(c))zn(c,a,12,[o,u]);else{const h=Qe(c),f=it(c);if(h||f){const m=()=>{if(t.f){const y=h?Se(d,c)?d[c]:u[c]:c.value;r?ce(y)&&Vl(y,i):ce(y)?y.includes(i)||y.push(i):h?(u[c]=[i],Se(d,c)&&(d[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,Se(d,c)&&(d[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Tt(m,n)):m()}}}const Tt=gv;function jv(t){return Kv(t)}function Kv(t,e){const n=I2();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=Wt,insertStaticContent:m}=t,y=(p,g,v,C=null,I=null,O=null,U=!1,M=null,$=!!g.dynamicChildren)=>{if(p===g)return;p&&!fs(p,g)&&(C=N(p),ve(p,I,O,!0),p=null),g.patchFlag===-2&&($=!1,g.dynamicChildren=null);const{type:S,ref:ee,shapeFlag:G}=g;switch(S){case pa:_(p,g,v,C);break;case Vt:w(p,g,v,C);break;case ho:p==null&&b(g,v,C,U);break;case Be:V(p,g,v,C,I,O,U,M,$);break;default:G&1?J(p,g,v,C,I,O,U,M,$):G&6?P(p,g,v,C,I,O,U,M,$):(G&64||G&128)&&S.process(p,g,v,C,I,O,U,M,$,se)}ee!=null&&I&&Xc(ee,p&&p.ref,O,g||p,!g)},_=(p,g,v,C)=>{if(p==null)s(g.el=a(g.children),v,C);else{const I=g.el=p.el;g.children!==p.children&&l(I,g.children)}},w=(p,g,v,C)=>{p==null?s(g.el=c(g.children||""),v,C):g.el=p.el},b=(p,g,v,C)=>{[p.el,p.anchor]=m(p.children,g,v,C,p.el,p.anchor)},R=({el:p,anchor:g},v,C)=>{let I;for(;p&&p!==g;)I=h(p),s(p,v,C),p=I;s(g,v,C)},j=({el:p,anchor:g})=>{let v;for(;p&&p!==g;)v=h(p),r(p),p=v;r(g)},J=(p,g,v,C,I,O,U,M,$)=>{U=U||g.type==="svg",p==null?ie(g,v,C,I,O,U,M,$):Y(p,g,I,O,U,M,$)},ie=(p,g,v,C,I,O,U,M)=>{let $,S;const{type:ee,props:G,shapeFlag:te,transition:he,dirs:Ce}=p;if($=p.el=o(p.type,O,G&&G.is,G),te&8?u($,p.children):te&16&&W(p.children,$,null,C,I,O&&ee!=="foreignObject",U,M),Ce&&as(p,null,C,"created"),G){for(const Oe in G)Oe!=="value"&&!ao(Oe)&&i($,Oe,null,G[Oe],O,p.children,C,I,F);"value"in G&&i($,"value",null,G.value),(S=G.onVnodeBeforeMount)&&Zt(S,C,p)}ge($,p,p.scopeId,U,C),Ce&&as(p,null,C,"beforeMount");const Pe=(!I||I&&!I.pendingBranch)&&he&&!he.persisted;Pe&&he.beforeEnter($),s($,g,v),((S=G&&G.onVnodeMounted)||Pe||Ce)&&Tt(()=>{S&&Zt(S,C,p),Pe&&he.enter($),Ce&&as(p,null,C,"mounted")},I)},ge=(p,g,v,C,I)=>{if(v&&f(p,v),C)for(let O=0;O<C.length;O++)f(p,C[O]);if(I){let O=I.subTree;if(g===O){const U=I.vnode;ge(p,U,U.scopeId,U.slotScopeIds,I.parent)}}},W=(p,g,v,C,I,O,U,M,$=0)=>{for(let S=$;S<p.length;S++){const ee=p[S]=M?Hn(p[S]):tn(p[S]);y(null,ee,g,v,C,I,O,U,M)}},Y=(p,g,v,C,I,O,U)=>{const M=g.el=p.el;let{patchFlag:$,dynamicChildren:S,dirs:ee}=g;$|=p.patchFlag&16;const G=p.props||Ve,te=g.props||Ve;let he;v&&cs(v,!1),(he=te.onVnodeBeforeUpdate)&&Zt(he,v,g,p),ee&&as(g,p,v,"beforeUpdate"),v&&cs(v,!0);const Ce=I&&g.type!=="foreignObject";if(S?B(p.dynamicChildren,S,M,v,C,Ce,O):U||x(p,g,M,null,v,C,Ce,O,!1),$>0){if($&16)Ie(M,g,G,te,v,C,I);else if($&2&&G.class!==te.class&&i(M,"class",null,te.class,I),$&4&&i(M,"style",G.style,te.style,I),$&8){const Pe=g.dynamicProps;for(let Oe=0;Oe<Pe.length;Oe++){const Ke=Pe[Oe],Bt=G[Ke],$s=te[Ke];($s!==Bt||Ke==="value")&&i(M,Ke,Bt,$s,I,p.children,v,C,F)}}$&1&&p.children!==g.children&&u(M,g.children)}else!U&&S==null&&Ie(M,g,G,te,v,C,I);((he=te.onVnodeUpdated)||ee)&&Tt(()=>{he&&Zt(he,v,g,p),ee&&as(g,p,v,"updated")},C)},B=(p,g,v,C,I,O,U)=>{for(let M=0;M<g.length;M++){const $=p[M],S=g[M],ee=$.el&&($.type===Be||!fs($,S)||$.shapeFlag&70)?d($.el):v;y($,S,ee,null,C,I,O,U,!0)}},Ie=(p,g,v,C,I,O,U)=>{if(v!==C){if(v!==Ve)for(const M in v)!ao(M)&&!(M in C)&&i(p,M,v[M],null,U,g.children,I,O,F);for(const M in C){if(ao(M))continue;const $=C[M],S=v[M];$!==S&&M!=="value"&&i(p,M,S,$,U,g.children,I,O,F)}"value"in C&&i(p,"value",v.value,C.value)}},V=(p,g,v,C,I,O,U,M,$)=>{const S=g.el=p?p.el:a(""),ee=g.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:te,slotScopeIds:he}=g;he&&(M=M?M.concat(he):he),p==null?(s(S,v,C),s(ee,v,C),W(g.children,v,ee,I,O,U,M,$)):G>0&&G&64&&te&&p.dynamicChildren?(B(p.dynamicChildren,te,v,I,O,U,M),(g.key!=null||I&&g===I.subTree)&&b1(p,g,!0)):x(p,g,v,ee,I,O,U,M,$)},P=(p,g,v,C,I,O,U,M,$)=>{g.slotScopeIds=M,p==null?g.shapeFlag&512?I.ctx.activate(g,v,C,U,$):k(g,v,C,I,O,U,$):D(p,g,$)},k=(p,g,v,C,I,O,U)=>{const M=p.component=Zv(p,C,I);if(ha(p)&&(M.ctx.renderer=se),e_(M),M.asyncDep){if(I&&I.registerDep(M,H),!p.el){const $=M.subTree=ye(Vt);w(null,$,g,v)}return}H(M,p,g,v,I,O,U)},D=(p,g,v)=>{const C=g.component=p.component;if(fv(p,g,v))if(C.asyncDep&&!C.asyncResolved){A(C,g,v);return}else C.next=g,av(C.update),C.update();else g.el=p.el,C.vnode=g},H=(p,g,v,C,I,O,U)=>{const M=()=>{if(p.isMounted){let{next:ee,bu:G,u:te,parent:he,vnode:Ce}=p,Pe=ee,Oe;cs(p,!1),ee?(ee.el=Ce.el,A(p,ee,U)):ee=Ce,G&&lo(G),(Oe=ee.props&&ee.props.onVnodeBeforeUpdate)&&Zt(Oe,he,ee,Ce),cs(p,!0);const Ke=oc(p),Bt=p.subTree;p.subTree=Ke,y(Bt,Ke,d(Bt.el),N(Bt),p,I,O),ee.el=Ke.el,Pe===null&&pv(p,Ke.el),te&&Tt(te,I),(Oe=ee.props&&ee.props.onVnodeUpdated)&&Tt(()=>Zt(Oe,he,ee,Ce),I)}else{let ee;const{el:G,props:te}=g,{bm:he,m:Ce,parent:Pe}=p,Oe=xr(g);if(cs(p,!1),he&&lo(he),!Oe&&(ee=te&&te.onVnodeBeforeMount)&&Zt(ee,Pe,g),cs(p,!0),G&&oe){const Ke=()=>{p.subTree=oc(p),oe(G,p.subTree,p,I,null)};Oe?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=oc(p);y(null,Ke,v,C,p,I,O),g.el=Ke.el}if(Ce&&Tt(Ce,I),!Oe&&(ee=te&&te.onVnodeMounted)){const Ke=g;Tt(()=>Zt(ee,Pe,Ke),I)}(g.shapeFlag&256||Pe&&xr(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&p.a&&Tt(p.a,I),p.isMounted=!0,g=v=C=null}},$=p.effect=new Bl(M,()=>Ql(S),p.scope),S=p.update=()=>$.run();S.id=p.uid,cs(p,!0),S()},A=(p,g,v)=>{g.component=p;const C=p.vnode.props;p.vnode=g,p.next=null,Vv(p,g.props,C,v),Uv(p,g.children,v),mr(),Wh(),gr()},x=(p,g,v,C,I,O,U,M,$=!1)=>{const S=p&&p.children,ee=p?p.shapeFlag:0,G=g.children,{patchFlag:te,shapeFlag:he}=g;if(te>0){if(te&128){de(S,G,v,C,I,O,U,M,$);return}else if(te&256){K(S,G,v,C,I,O,U,M,$);return}}he&8?(ee&16&&F(S,I,O),G!==S&&u(v,G)):ee&16?he&16?de(S,G,v,C,I,O,U,M,$):F(S,I,O,!0):(ee&8&&u(v,""),he&16&&W(G,v,C,I,O,U,M,$))},K=(p,g,v,C,I,O,U,M,$)=>{p=p||js,g=g||js;const S=p.length,ee=g.length,G=Math.min(S,ee);let te;for(te=0;te<G;te++){const he=g[te]=$?Hn(g[te]):tn(g[te]);y(p[te],he,v,null,I,O,U,M,$)}S>ee?F(p,I,O,!0,!1,G):W(g,v,C,I,O,U,M,$,G)},de=(p,g,v,C,I,O,U,M,$)=>{let S=0;const ee=g.length;let G=p.length-1,te=ee-1;for(;S<=G&&S<=te;){const he=p[S],Ce=g[S]=$?Hn(g[S]):tn(g[S]);if(fs(he,Ce))y(he,Ce,v,null,I,O,U,M,$);else break;S++}for(;S<=G&&S<=te;){const he=p[G],Ce=g[te]=$?Hn(g[te]):tn(g[te]);if(fs(he,Ce))y(he,Ce,v,null,I,O,U,M,$);else break;G--,te--}if(S>G){if(S<=te){const he=te+1,Ce=he<ee?g[he].el:C;for(;S<=te;)y(null,g[S]=$?Hn(g[S]):tn(g[S]),v,Ce,I,O,U,M,$),S++}}else if(S>te)for(;S<=G;)ve(p[S],I,O,!0),S++;else{const he=S,Ce=S,Pe=new Map;for(S=Ce;S<=te;S++){const kt=g[S]=$?Hn(g[S]):tn(g[S]);kt.key!=null&&Pe.set(kt.key,S)}let Oe,Ke=0;const Bt=te-Ce+1;let $s=!1,xh=0;const Ar=new Array(Bt);for(S=0;S<Bt;S++)Ar[S]=0;for(S=he;S<=G;S++){const kt=p[S];if(Ke>=Bt){ve(kt,I,O,!0);continue}let Jt;if(kt.key!=null)Jt=Pe.get(kt.key);else for(Oe=Ce;Oe<=te;Oe++)if(Ar[Oe-Ce]===0&&fs(kt,g[Oe])){Jt=Oe;break}Jt===void 0?ve(kt,I,O,!0):(Ar[Jt-Ce]=S+1,Jt>=xh?xh=Jt:$s=!0,y(kt,g[Jt],v,null,I,O,U,M,$),Ke++)}const $h=$s?zv(Ar):js;for(Oe=$h.length-1,S=Bt-1;S>=0;S--){const kt=Ce+S,Jt=g[kt],Vh=kt+1<ee?g[kt+1].el:C;Ar[S]===0?y(null,Jt,v,Vh,I,O,U,M,$):$s&&(Oe<0||S!==$h[Oe]?we(Jt,v,Vh,2):Oe--)}}},we=(p,g,v,C,I=null)=>{const{el:O,type:U,transition:M,children:$,shapeFlag:S}=p;if(S&6){we(p.component.subTree,g,v,C);return}if(S&128){p.suspense.move(g,v,C);return}if(S&64){U.move(p,g,v,se);return}if(U===Be){s(O,g,v);for(let G=0;G<$.length;G++)we($[G],g,v,C);s(p.anchor,g,v);return}if(U===ho){R(p,g,v);return}if(C!==2&&S&1&&M)if(C===0)M.beforeEnter(O),s(O,g,v),Tt(()=>M.enter(O),I);else{const{leave:G,delayLeave:te,afterLeave:he}=M,Ce=()=>s(O,g,v),Pe=()=>{G(O,()=>{Ce(),he&&he()})};te?te(O,Ce,Pe):Pe()}else s(O,g,v)},ve=(p,g,v,C=!1,I=!1)=>{const{type:O,props:U,ref:M,children:$,dynamicChildren:S,shapeFlag:ee,patchFlag:G,dirs:te}=p;if(M!=null&&Xc(M,null,v,p,!0),ee&256){g.ctx.deactivate(p);return}const he=ee&1&&te,Ce=!xr(p);let Pe;if(Ce&&(Pe=U&&U.onVnodeBeforeUnmount)&&Zt(Pe,g,p),ee&6)T(p.component,v,C);else{if(ee&128){p.suspense.unmount(v,C);return}he&&as(p,null,g,"beforeUnmount"),ee&64?p.type.remove(p,g,v,I,se,C):S&&(O!==Be||G>0&&G&64)?F(S,g,v,!1,!0):(O===Be&&G&384||!I&&ee&16)&&F($,g,v),C&&$e(p)}(Ce&&(Pe=U&&U.onVnodeUnmounted)||he)&&Tt(()=>{Pe&&Zt(Pe,g,p),he&&as(p,null,g,"unmounted")},v)},$e=p=>{const{type:g,el:v,anchor:C,transition:I}=p;if(g===Be){wt(v,C);return}if(g===ho){j(p);return}const O=()=>{r(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:M}=I,$=()=>U(v,O);M?M(p.el,O,$):$()}else O()},wt=(p,g)=>{let v;for(;p!==g;)v=h(p),r(p),p=v;r(g)},T=(p,g,v)=>{const{bum:C,scope:I,update:O,subTree:U,um:M}=p;C&&lo(C),I.stop(),O&&(O.active=!1,ve(U,p,g,v)),M&&Tt(M,g),Tt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},F=(p,g,v,C=!1,I=!1,O=0)=>{for(let U=O;U<p.length;U++)ve(p[U],g,v,C,I)},N=p=>p.shapeFlag&6?N(p.component.subTree):p.shapeFlag&128?p.suspense.next():h(p.anchor||p.el),z=(p,g,v)=>{p==null?g._vnode&&ve(g._vnode,null,null,!0):y(g._vnode||null,p,g,null,null,null,v),Wh(),Zp(),g._vnode=p},se={p:y,um:ve,m:we,r:$e,mt:k,mc:W,pc:x,pbc:B,n:N,o:t};let be,oe;return e&&([be,oe]=e(se)),{render:z,hydrate:be,createApp:qv(z,be)}}function cs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function b1(t,e,n=!1){const s=t.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Hn(r[i]),a.el=o.el),n||b1(o,a)),a.type===pa&&(a.el=o.el)}}function zv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Wv=t=>t.__isTeleport,Be=Symbol(void 0),pa=Symbol(void 0),Vt=Symbol(void 0),ho=Symbol(void 0),Vr=[];let Kt=null;function re(t=!1){Vr.push(Kt=t?null:[])}function Gv(){Vr.pop(),Kt=Vr[Vr.length-1]||null}let ei=1;function sd(t){ei+=t}function C1(t){return t.dynamicChildren=ei>0?Kt||js:null,Gv(),ei>0&&Kt&&Kt.push(t),t}function Ee(t,e,n,s,r,i){return C1(De(t,e,n,s,r,i,!0))}function It(t,e,n,s,r){return C1(ye(t,e,n,s,r,!0))}function ko(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const ma="__vInternal",T1=({key:t})=>t!=null?t:null,fo=({ref:t,ref_key:e,ref_for:n})=>t!=null?Qe(t)||it(t)||me(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function De(t,e=null,n=null,s=0,r=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&T1(e),ref:e&&fo(e),scopeId:ua,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ot};return a?(ru(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Qe(n)?8:16),ei>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const ye=Qv;function Qv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===h1)&&(t=Vt),ko(t)){const a=Yn(t,e,!0);return n&&ru(a,n),ei>0&&!i&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(t)]=a:Kt.push(a)),a.patchFlag|=-2,a}if(i_(t)&&(t=t.__vccOpts),e){e=Yv(e);let{class:a,style:c}=e;a&&!Qe(a)&&(e.class=Ht(a)),He(c)&&(jp(c)&&!ce(c)&&(c=nt({},c)),e.style=wi(c))}const o=Qe(t)?1:mv(t)?128:Wv(t)?64:He(t)?4:me(t)?2:0;return De(t,e,n,s,r,o,i,!0)}function Yv(t){return t?jp(t)||ma in t?nt({},t):t:null}function Yn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ga(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&T1(a),ref:e&&e.ref?n&&r?ce(r)?r.concat(fo(e)):[r,fo(e)]:fo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Xn(t=" ",e=0){return ye(pa,null,t,e)}function su(t,e){const n=ye(ho,null,t);return n.staticCount=e,n}function rn(t="",e=!1){return e?(re(),It(Vt,null,t)):ye(Vt,null,t)}function tn(t){return t==null||typeof t=="boolean"?ye(Vt):ce(t)?ye(Be,null,t.slice()):typeof t=="object"?Hn(t):ye(pa,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function ru(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ru(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ma in e)?e._ctx=ot:r===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[Xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ga(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Ht([e.class,s.class]));else if(r==="style")e.style=wi([e.style,s.style]);else if(na(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Zt(t,e,n,s=null){$t(t,e,7,[n,s])}const Xv=w1();let Jv=0;function Zv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Xv,i={uid:Jv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new A2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:g1(s,r),emitsOptions:t1(s,r),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:s.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uv.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const Ti=()=>tt||ot,nr=t=>{tt=t,t.scope.on()},Ts=()=>{tt&&tt.scope.off(),tt=null};function E1(t){return t.vnode.shapeFlag&4}let ti=!1;function e_(t,e=!1){ti=e;const{props:n,children:s}=t.vnode,r=E1(t);$v(t,n,r,e),Hv(t,s);const i=r?t_(t,e):void 0;return ti=!1,i}function t_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kp(new Proxy(t.ctx,Dv));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?s_(t):null;nr(t),mr();const i=zn(s,t,0,[t.props,r]);if(gr(),Ts(),Rp(i)){if(i.then(Ts,Ts),e)return i.then(o=>{rd(t,o,e)}).catch(o=>{aa(o,t,0)});t.asyncDep=i}else rd(t,i,e)}else I1(t,e)}function rd(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=Qp(e)),I1(t,n)}let id;function I1(t,e,n){const s=t.type;if(!t.render){if(!e&&id&&!s.render){const r=s.template||tu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=nt(nt({isCustomElement:i,delimiters:a},o),c);s.render=id(r,l)}}t.render=s.render||Wt}nr(t),mr(),Mv(t),gr(),Ts()}function n_(t){return new Proxy(t.attrs,{get(e,n){return Mt(t,"get","$attrs"),e[n]}})}function s_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=n_(t))},slots:t.slots,emit:t.emit,expose:e}}function ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qp(Kp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $r)return $r[n](t)},has(e,n){return n in e||n in $r}}))}function r_(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function i_(t){return me(t)&&"__vccOpts"in t}const dt=(t,e)=>rv(t,e,ti);function A1(t,e,n){const s=arguments.length;return s===2?He(e)&&!ce(e)?ko(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ko(n)&&(n=[n]),ye(t,e,n))}const o_=Symbol(""),a_=()=>qe(o_),iu="3.2.45",c_="http://www.w3.org/2000/svg",ps=typeof document<"u"?document:null,od=ps&&ps.createElement("template"),l_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?ps.createElementNS(c_,t):ps.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ps.createTextNode(t),createComment:t=>ps.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ps.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{od.innerHTML=s?`<svg>${t}</svg>`:t;const a=od.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h_(t,e,n){const s=t.style,r=Qe(n);if(n&&!r){for(const i in n)Jc(s,i,n[i]);if(e&&!Qe(e))for(const i in e)n[i]==null&&Jc(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ad=/\s*!important$/;function Jc(t,e,n){if(ce(n))n.forEach(s=>Jc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=d_(t,e);ad.test(n)?t.setProperty(pr(s),n.replace(ad,""),"important"):t[s]=n}}const cd=["Webkit","Moz","ms"],lc={};function d_(t,e){const n=lc[e];if(n)return n;let s=dn(e);if(s!=="filter"&&s in t)return lc[e]=s;s=ia(s);for(let r=0;r<cd.length;r++){const i=cd[r]+s;if(i in t)return lc[e]=i}return e}const ld="http://www.w3.org/1999/xlink";function f_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ld,e.slice(6,e.length)):t.setAttributeNS(ld,e,n);else{const i=v2(e);n==null||i&&!Sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function p_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Sp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Fs(t,e,n,s){t.addEventListener(e,n,s)}function m_(t,e,n,s){t.removeEventListener(e,n,s)}function g_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=y_(e);if(s){const l=i[e]=w_(s,r);Fs(t,a,l,c)}else o&&(m_(t,a,o,c),i[e]=void 0)}}const ud=/(?:Once|Passive|Capture)$/;function y_(t){let e;if(ud.test(t)){e={};let s;for(;s=t.match(ud);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pr(t.slice(2)),e]}let uc=0;const v_=Promise.resolve(),__=()=>uc||(v_.then(()=>uc=0),uc=Date.now());function w_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$t(b_(s,n.value),e,5,[s])};return n.value=t,n.attached=__(),n}function b_(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const hd=/^on[a-z]/,C_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?u_(t,s,r):e==="style"?h_(t,n,s):na(e)?$l(e)||g_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):T_(t,e,s,r))?p_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),f_(t,e,s,r))};function T_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hd.test(e)&&me(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hd.test(e)&&Qe(n)?!1:e in t}const xn="transition",Sr="animation",S1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},E_=nt({},_v.props,S1),ls=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},dd=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function I_(t){const e={};for(const V in t)V in S1||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=A_(r),y=m&&m[0],_=m&&m[1],{onBeforeEnter:w,onEnter:b,onEnterCancelled:R,onLeave:j,onLeaveCancelled:J,onBeforeAppear:ie=w,onAppear:ge=b,onAppearCancelled:W=R}=e,Y=(V,P,k)=>{Fn(V,P?u:a),Fn(V,P?l:o),k&&k()},B=(V,P)=>{V._isLeaving=!1,Fn(V,d),Fn(V,f),Fn(V,h),P&&P()},Ie=V=>(P,k)=>{const D=V?ge:b,H=()=>Y(P,V,k);ls(D,[P,H]),fd(()=>{Fn(P,V?c:i),yn(P,V?u:a),dd(D)||pd(P,s,y,H)})};return nt(e,{onBeforeEnter(V){ls(w,[V]),yn(V,i),yn(V,o)},onBeforeAppear(V){ls(ie,[V]),yn(V,c),yn(V,l)},onEnter:Ie(!1),onAppear:Ie(!0),onLeave(V,P){V._isLeaving=!0;const k=()=>B(V,P);yn(V,d),L1(),yn(V,h),fd(()=>{!V._isLeaving||(Fn(V,d),yn(V,f),dd(j)||pd(V,s,_,k))}),ls(j,[V,k])},onEnterCancelled(V){Y(V,!1),ls(R,[V])},onAppearCancelled(V){Y(V,!0),ls(W,[V])},onLeaveCancelled(V){B(V),ls(J,[V])}})}function A_(t){if(t==null)return null;if(He(t))return[hc(t.enter),hc(t.leave)];{const e=hc(t);return[e,e]}}function hc(t){return Gr(t)}function yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Fn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function fd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S_=0;function pd(t,e,n,s){const r=t._endId=++S_,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=k1(t,e);if(!o)return s();const l=o+"end";let u=0;const d=()=>{t.removeEventListener(l,h),i()},h=f=>{f.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),t.addEventListener(l,h)}function k1(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),r=s(`${xn}Delay`),i=s(`${xn}Duration`),o=md(r,i),a=s(`${Sr}Delay`),c=s(`${Sr}Duration`),l=md(a,c);let u=null,d=0,h=0;e===xn?o>0&&(u=xn,d=o,h=i.length):e===Sr?l>0&&(u=Sr,d=l,h=c.length):(d=Math.max(o,l),u=d>0?o>l?xn:Sr:null,h=u?u===xn?i.length:c.length:0);const f=u===xn&&/\b(transform|all)(,|$)/.test(s(`${xn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function md(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>gd(n)+gd(t[s])))}function gd(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function L1(){return document.body.offsetHeight}const R1=new WeakMap,D1=new WeakMap,k_={name:"TransitionGroup",props:nt({},E_,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Ti(),s=o1();let r,i;return l1(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!O_(r[0].el,n.vnode.el,o))return;r.forEach(R_),r.forEach(D_);const a=r.filter(M_);L1(),a.forEach(c=>{const l=c.el,u=l.style;yn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",d),l._moveCb=null,Fn(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=ke(t),a=I_(o);let c=o.tag||Be;r=i,i=e.default?Xl(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Zr(u,Jr(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];Zr(u,Jr(u,a,s,n)),R1.set(u,u.el.getBoundingClientRect())}return ye(c,null,i)}}},L_=k_;function R_(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function D_(t){D1.set(t,t.el.getBoundingClientRect())}function M_(t){const e=R1.get(t),n=D1.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function O_(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=k1(s);return r.removeChild(s),i}const yd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>lo(e,n):e};function N_(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dS={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=yd(r);const i=s||r.props&&r.props.type==="number";Fs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gr(a)),t._assign(a)}),n&&Fs(t,"change",()=>{t.value=t.value.trim()}),e||(Fs(t,"compositionstart",N_),Fs(t,"compositionend",vd),Fs(t,"change",vd))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=yd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Gr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},P_=["ctrl","shift","alt","meta"],x_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>P_.some(n=>t[`${n}Key`]&&!e.includes(n))},$_=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=x_[e[r]];if(i&&i(n,e))return}return t(n,...s)},V_=nt({patchProp:C_},l_);let _d;function F_(){return _d||(_d=jv(V_))}const M1=(...t)=>{const e=F_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=H_(s);if(!r)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function H_(t){return Qe(t)?document.querySelector(t):t}var U_=Object.defineProperty,wd=Object.getOwnPropertySymbols,B_=Object.prototype.hasOwnProperty,q_=Object.prototype.propertyIsEnumerable,bd=(t,e,n)=>e in t?U_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,O1=(t,e)=>{for(var n in e||(e={}))B_.call(e,n)&&bd(t,n,e[n]);if(wd)for(var n of wd(e))q_.call(e,n)&&bd(t,n,e[n]);return t},va=t=>typeof t=="function",_a=t=>typeof t=="string",N1=t=>_a(t)&&t.trim().length>0,j_=t=>typeof t=="number",gs=t=>typeof t>"u",ni=t=>typeof t=="object"&&t!==null,K_=t=>on(t,"tag")&&N1(t.tag),P1=t=>window.TouchEvent&&t instanceof TouchEvent,x1=t=>on(t,"component")&&$1(t.component),z_=t=>va(t)||ni(t),$1=t=>!gs(t)&&(_a(t)||z_(t)||x1(t)),Cd=t=>ni(t)&&["height","width","right","left","top","bottom"].every(e=>j_(t[e])),on=(t,e)=>(ni(t)||va(t))&&e in t,W_=(t=>()=>t++)(0);function dc(t){return P1(t)?t.targetTouches[0].clientX:t.clientX}function Td(t){return P1(t)?t.targetTouches[0].clientY:t.clientY}var G_=t=>{gs(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},Ei=t=>x1(t)?Ei(t.component):K_(t)?mn({render(){return t}}):typeof t=="string"?t:ke(_e(t)),Q_=t=>{if(typeof t=="string")return t;const e=on(t,"props")&&ni(t.props)?t.props:{},n=on(t,"listeners")&&ni(t.listeners)?t.listeners:{};return{component:Ei(t),props:e,listeners:n}},Y_=()=>typeof window<"u",ou=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const n=this.getHandlers(t);n.push(e),this.allHandlers[t]=n}off(t,e){const n=this.getHandlers(t);n.splice(n.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(s=>s(e))}},X_=t=>["on","off","emit"].every(e=>on(t,e)&&va(t[e])),Et;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(Et||(Et={}));var Lo;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(Lo||(Lo={}));var Rt;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(Rt||(Rt={}));var zt="Vue-Toastification",qt={type:{type:String,default:Et.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},V1={type:qt.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},po={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:qt.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Zc={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},F1={transition:{type:[Object,String],default:`${zt}__bounce`}},J_={position:{type:String,default:Lo.TOP_RIGHT},draggable:qt.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:qt.trueBoolean,pauseOnHover:qt.trueBoolean,closeOnClick:qt.trueBoolean,timeout:Zc.timeout,hideProgressBar:Zc.hideProgressBar,toastClassName:qt.classNames,bodyClassName:qt.classNames,icon:V1.customIcon,closeButton:po.component,closeButtonClassName:po.classNames,showCloseButtonOnHover:po.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new ou}},Z_={id:{type:[String,Number],required:!0,default:0},type:qt.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},ew={container:{type:[Object,Function],default:()=>document.body},newestOnTop:qt.trueBoolean,maxToasts:{type:Number,default:20},transition:F1.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:qt.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},In={CORE_TOAST:J_,TOAST:Z_,CONTAINER:ew,PROGRESS_BAR:Zc,ICON:V1,TRANSITION:F1,CLOSE_BUTTON:po},H1=mn({name:"VtProgressBar",props:In.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${zt}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function tw(t,e){return re(),Ee("div",{style:wi(t.style),class:Ht(t.cpClass)},null,6)}H1.render=tw;var nw=H1,U1=mn({name:"VtCloseButton",props:In.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Ei(this.component):"button"},classes(){const t=[`${zt}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),sw=Xn(" \xD7 ");function rw(t,e){return re(),It(fa(t.buttonComponent),ga({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:Ci(()=>[sw]),_:1},16,["aria-label","class"])}U1.render=rw;var iw=U1,B1={},ow={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},aw=De("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),cw=[aw];function lw(t,e){return re(),Ee("svg",ow,cw)}B1.render=lw;var uw=B1,q1={},hw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},dw=De("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),fw=[dw];function pw(t,e){return re(),Ee("svg",hw,fw)}q1.render=pw;var Ed=q1,j1={},mw={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},gw=De("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),yw=[gw];function vw(t,e){return re(),Ee("svg",mw,yw)}j1.render=vw;var _w=j1,K1={},ww={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},bw=De("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Cw=[bw];function Tw(t,e){return re(),Ee("svg",ww,Cw)}K1.render=Tw;var Ew=K1,z1=mn({name:"VtIcon",props:In.ICON,computed:{customIconChildren(){return on(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return _a(this.customIcon)?this.trimValue(this.customIcon):on(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return on(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:$1(this.customIcon)?Ei(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Et.DEFAULT]:Ed,[Et.INFO]:Ed,[Et.SUCCESS]:uw,[Et.ERROR]:Ew,[Et.WARNING]:_w}[this.type]},iconClasses(){const t=[`${zt}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return N1(t)?t.trim():e}}});function Iw(t,e){return re(),It(fa(t.component),{class:Ht(t.iconClasses)},{default:Ci(()=>[Xn(En(t.customIconChildren),1)]),_:1},8,["class"])}z1.render=Iw;var Aw=z1,W1=mn({name:"VtToast",components:{ProgressBar:nw,CloseButton:iw,Icon:Aw},inheritAttrs:!1,props:Object.assign({},In.CORE_TOAST,In.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${zt}__toast`,`${zt}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${zt}__toast--rtl`),t},bodyClasses(){return[`${zt}__toast-${_a(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return Cd(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:on,getVueComponentFromObj:Ei,closeToast(){this.eventBus.emit(Rt.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:dc(t),y:Td(t)},this.dragStart=dc(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:dc(t),y:Td(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,Cd(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Sw=["role"];function kw(t,e){const n=Gs("Icon"),s=Gs("CloseButton"),r=Gs("ProgressBar");return re(),Ee("div",{class:Ht(t.classes),style:wi(t.draggableStyle),onClick:e[0]||(e[0]=(...i)=>t.clickHandler&&t.clickHandler(...i)),onMouseenter:e[1]||(e[1]=(...i)=>t.hoverPause&&t.hoverPause(...i)),onMouseleave:e[2]||(e[2]=(...i)=>t.hoverPlay&&t.hoverPlay(...i))},[t.icon?(re(),It(n,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):rn("v-if",!0),De("div",{role:t.accessibility.toastRole||"alert",class:Ht(t.bodyClasses)},[typeof t.content=="string"?(re(),Ee(Be,{key:0},[Xn(En(t.content),1)],2112)):(re(),It(fa(t.getVueComponentFromObj(t.content)),ga({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},Rv(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Sw),t.closeButton?(re(),It(s,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:$_(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):rn("v-if",!0),t.timeout?(re(),It(r,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):rn("v-if",!0)],38)}W1.render=kw;var Lw=W1,G1=mn({name:"VtTransition",props:In.TRANSITION,emits:["leave"],methods:{hasProp:on,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function Rw(t,e){return re(),It(L_,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:Ci(()=>[Lv(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}G1.render=Rw;var Dw=G1,Q1=mn({name:"VueToastification",devtools:{hide:!0},components:{Toast:Lw,VtTransition:Dw},props:Object.assign({},In.CORE_TOAST,In.CONTAINER,In.TRANSITION),data(){return{count:0,positions:Object.values(Lo),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(Rt.ADD,this.addToast),t.on(Rt.CLEAR,this.clearToasts),t.on(Rt.DISMISS,this.dismissToast),t.on(Rt.UPDATE,this.updateToast),t.on(Rt.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){va(t)&&(t=await t()),G_(this.$el),t.appendChild(this.$el)},setToast(t){gs(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=Q_(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),n=this.defaults.filterBeforeCreate(e,this.toastArray);n&&this.setToast(n)},dismissToast(t){const e=this.toasts[t];!gs(e)&&!gs(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(n=>n.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){gs(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:n}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):n&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${zt}__container`,t].concat(this.defaults.containerClassName)}}});function Mw(t,e){const n=Gs("Toast"),s=Gs("VtTransition");return re(),Ee("div",null,[(re(!0),Ee(Be,null,tr(t.positions,r=>(re(),Ee("div",{key:r},[ye(s,{transition:t.defaults.transition,class:Ht(t.getClasses(r))},{default:Ci(()=>[(re(!0),Ee(Be,null,tr(t.getPositionToasts(r),i=>(re(),It(n,ga({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Q1.render=Mw;var Ow=Q1,Id=(t={},e=!0)=>{const n=t.eventBus=t.eventBus||new ou;e&&ca(()=>{const i=M1(Ow,O1({},t)),o=i.mount(document.createElement("div")),a=t.onMounted;if(gs(a)||a(o,i),t.shareAppContext){const c=t.shareAppContext;c===!0?console.warn(`[${zt}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:W_(),type:Et.DEFAULT},o,{content:i});return n.emit(Rt.ADD,a),a.id};s.clear=()=>n.emit(Rt.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Rt.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Rt.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Rt.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Et.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Et.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Et.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Et.WARNING})),s},Nw=()=>{const t=()=>console.warn(`[${zt}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function el(t){return Y_()?X_(t)?Id({eventBus:t},!1):Id(t,!0):Nw()}var Y1=Symbol("VueToastification"),X1=new ou,Pw=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const n=el(O1({eventBus:X1},e));t.provide(Y1,n)},xw=t=>{if(t)return el(t);const e=Ti()?qe(Y1,void 0):void 0;return e||el(X1)},$w=Pw;const Vw={shareAppContext:!0,toastClassName:"toastReshade",bodyClassName:["custom-body"],closeButtonClassName:"custom-close"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Fw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Z1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw Error();const h=i<<2|a>>4;if(s.push(h),l!==64){const f=a<<4&240|l>>2;if(s.push(f),d!==64){const m=l<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hw=function(t){const e=J1(t);return Z1.encodeByteArray(e,!0)},Ro=function(t){return Hw(t).replace(/\./g,"")},e0=function(t){try{return Z1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function t0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Bw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function au(){try{return typeof indexedDB=="object"}catch{return!1}}function cu(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function n0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=()=>jw().__FIREBASE_DEFAULTS__,zw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ww=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&e0(t[1]);return e&&JSON.parse(e)},lu=()=>{try{return Kw()||zw()||Ww()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s0=t=>{var e,n;return(n=(e=lu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gw=t=>{const e=s0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Qw=()=>{var t;return(t=lu())===null||t===void 0?void 0:t.config},r0=t=>{var e;return(e=lu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ro(JSON.stringify(n)),Ro(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Jw,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Zw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yt(r,a,s)}}function Zw(t,e){return t.replace(e5,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const e5=/\{\$([^}]+)}/g;function t5(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function si(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ad(i)&&Ad(o)){if(!si(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function n5(t,e){const n=new s5(t,e);return n.subscribe.bind(n)}class s5{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r5(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fc),r.error===void 0&&(r.error=fc),r.complete===void 0&&(r.complete=fc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r5(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i5=1e3,o5=2,a5=4*60*60*1e3,c5=.5;function Sd(t,e=i5,n=o5){const s=e*Math.pow(n,t),r=Math.round(c5*s*(Math.random()-.5)*2);return Math.min(a5,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Yw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(h5(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:u5(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u5(t){return t===hs?void 0:t}function h5(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l5(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Le||(Le={}));const f5={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},p5=Le.INFO,m5={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},g5=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=m5[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=p5,this._logHandler=g5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?f5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const y5=(t,e)=>e.some(n=>t instanceof n);let kd,Ld;function v5(){return kd||(kd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _5(){return Ld||(Ld=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const i0=new WeakMap,tl=new WeakMap,o0=new WeakMap,pc=new WeakMap,uu=new WeakMap;function w5(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(An(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&i0.set(n,t)}).catch(()=>{}),uu.set(e,t),e}function b5(t){if(tl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||o0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function C5(t){nl=t(nl)}function T5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mc(this),e,...n);return o0.set(s,e.sort?e.sort():[e]),An(s)}:_5().includes(t)?function(...e){return t.apply(mc(this),e),An(i0.get(this))}:function(...e){return An(t.apply(mc(this),e))}}function E5(t){return typeof t=="function"?T5(t):(t instanceof IDBTransaction&&b5(t),y5(t,v5())?new Proxy(t,nl):t)}function An(t){if(t instanceof IDBRequest)return w5(t);if(pc.has(t))return pc.get(t);const e=E5(t);return e!==t&&(pc.set(t,e),uu.set(e,t)),e}const mc=t=>uu.get(t);function ba(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=An(o);return s&&o.addEventListener("upgradeneeded",c=>{s(An(o.result),c.oldVersion,c.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}function gc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),An(n).then(()=>{})}const I5=["get","getKey","getAll","getAllKeys","count"],A5=["put","add","delete","clear"],yc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=A5.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||I5.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return yc.set(e,i),i}C5(t=>({...t,get:(e,n,s)=>Rd(e,n)||t.get(e,n,s),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(k5(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function k5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",Dd="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new wa("@firebase/app"),L5="@firebase/app-compat",R5="@firebase/analytics-compat",D5="@firebase/analytics",M5="@firebase/app-check-compat",O5="@firebase/app-check",N5="@firebase/auth",P5="@firebase/auth-compat",x5="@firebase/database",$5="@firebase/database-compat",V5="@firebase/functions",F5="@firebase/functions-compat",H5="@firebase/installations",U5="@firebase/installations-compat",B5="@firebase/messaging",q5="@firebase/messaging-compat",j5="@firebase/performance",K5="@firebase/performance-compat",z5="@firebase/remote-config",W5="@firebase/remote-config-compat",G5="@firebase/storage",Q5="@firebase/storage-compat",Y5="@firebase/firestore",X5="@firebase/firestore-compat",J5="firebase",Z5="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="[DEFAULT]",e3={[sl]:"fire-core",[L5]:"fire-core-compat",[D5]:"fire-analytics",[R5]:"fire-analytics-compat",[O5]:"fire-app-check",[M5]:"fire-app-check-compat",[N5]:"fire-auth",[P5]:"fire-auth-compat",[x5]:"fire-rtdb",[$5]:"fire-rtdb-compat",[V5]:"fire-fn",[F5]:"fire-fn-compat",[H5]:"fire-iid",[U5]:"fire-iid-compat",[B5]:"fire-fcm",[q5]:"fire-fcm-compat",[j5]:"fire-perf",[K5]:"fire-perf-compat",[z5]:"fire-rc",[W5]:"fire-rc-compat",[G5]:"fire-gcs",[Q5]:"fire-gcs-compat",[Y5]:"fire-fst",[X5]:"fire-fst-compat","fire-js":"fire-js",[J5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Map,il=new Map;function t3(t,e){try{t.container.addComponent(e)}catch(n){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ut(t){const e=t.name;if(il.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Do.values())t3(n,t);return!0}function ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n3={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new ns("app","Firebase",n3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=Z5;function a0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Wn.create("bad-app-name",{appName:String(r)});if(n||(n=Qw()),!n)throw Wn.create("no-options");const i=Do.get(r);if(i){if(si(n,i.options)&&si(s,i.config))return i;throw Wn.create("duplicate-app",{appName:r})}const o=new d5(r);for(const c of il.values())o.addComponent(c);const a=new s3(n,s,o);return Do.set(r,a),a}function Ca(t=rl){const e=Do.get(t);if(!e&&t===rl)return a0();if(!e)throw Wn.create("no-app",{appName:t});return e}function At(t,e,n){var s;let r=(s=e3[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(a.join(" "));return}Ut(new Ot(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3="firebase-heartbeat-database",i3=1,ri="firebase-heartbeat-store";let vc=null;function c0(){return vc||(vc=ba(r3,i3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ri)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),vc}async function o3(t){try{return(await c0()).transaction(ri).objectStore(ri).get(l0(t))}catch(e){if(e instanceof Yt)Ss.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ss.warn(n.message)}}}async function Md(t,e){try{const s=(await c0()).transaction(ri,"readwrite");return await s.objectStore(ri).put(e,l0(t)),s.done}catch(n){if(n instanceof Yt)Ss.warn(n.message);else{const s=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ss.warn(s.message)}}}function l0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a3=1024,c3=30*24*60*60*1e3;class l3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h3(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Od();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=c3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Od(),{heartbeatsToSend:n,unsentEntries:s}=u3(this._heartbeatsCache.heartbeats),r=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Od(){return new Date().toISOString().substring(0,10)}function u3(t,e=a3){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Nd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class h3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return au()?cu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await o3(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nd(t){return Ro(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d3(t){Ut(new Ot("platform-logger",e=>new S5(e),"PRIVATE")),Ut(new Ot("heartbeat",e=>new l3(e),"PRIVATE")),At(sl,Dd,t),At(sl,Dd,"esm2017"),At("fire-js","")}d3("");var f3="firebase",p3="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(f3,p3,"app");const m3={apiKey:"AIzaSyCC_Lmi6FvfVvycQkoaxI7nkIgIzjX48ek",authDomain:"bulbulianweb.firebaseapp.com",projectId:"bulbulianweb",storageBucket:"bulbulianweb.appspot.com",messagingSenderId:"291632338531",appId:"1:291632338531:web:971e6592803fe540670a56",measurementId:"G-7QVLHLJLP5"},hu=a0(m3),u0="@firebase/installations",du="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=1e4,d0=`w:${du}`,f0="FIS_v2",g3="https://firebaseinstallations.googleapis.com/v1",y3=60*60*1e3,v3="installations",_3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ks=new ns(v3,_3,w3);function p0(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0({projectId:t}){return`${g3}/projects/${t}/installations`}function g0(t){return{token:t.token,requestStatus:2,expiresIn:C3(t.expiresIn),creationTime:Date.now()}}async function y0(t,e){const s=(await e.json()).error;return ks.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function v0({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b3(t,{refreshToken:e}){const n=v0(t);return n.append("Authorization",T3(e)),n}async function _0(t){const e=await t();return e.status>=500&&e.status<600?t():e}function C3(t){return Number(t.replace("s","000"))}function T3(t){return`${f0} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=m0(t),r=v0(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:n,authVersion:f0,appId:t.appId,sdkVersion:d0},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await _0(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:g0(l.authToken)}}else throw await y0("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=/^[cdef][\w-]{21}$/,ol="";function S3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=k3(t);return A3.test(n)?n:ol}catch{return ol}}function k3(t){return I3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=new Map;function C0(t,e){const n=Ta(t);T0(n,e),L3(n,e)}function T0(t,e){const n=b0.get(t);if(!!n)for(const s of n)s(e)}function L3(t,e){const n=R3();n&&n.postMessage({key:t,fid:e}),D3()}let ys=null;function R3(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{T0(t.data.key,t.data.fid)}),ys}function D3(){b0.size===0&&ys&&(ys.close(),ys=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3="firebase-installations-database",O3=1,Ls="firebase-installations-store";let _c=null;function fu(){return _c||(_c=ba(M3,O3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ls)}}})),_c}async function Mo(t,e){const n=Ta(t),r=(await fu()).transaction(Ls,"readwrite"),i=r.objectStore(Ls),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&C0(t,e.fid),e}async function E0(t){const e=Ta(t),s=(await fu()).transaction(Ls,"readwrite");await s.objectStore(Ls).delete(e),await s.done}async function Ea(t,e){const n=Ta(t),r=(await fu()).transaction(Ls,"readwrite"),i=r.objectStore(Ls),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&C0(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(t){let e;const n=await Ea(t.appConfig,s=>{const r=N3(s),i=P3(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===ol?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function N3(t){const e=t||{fid:S3(),registrationStatus:0};return I0(e)}function P3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ks.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=x3(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:$3(t)}:{installationEntry:e}}async function x3(t,e){try{const n=await E3(t,e);return Mo(t.appConfig,n)}catch(n){throw p0(n)&&n.customData.serverCode===409?await E0(t.appConfig):await Mo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function $3(t){let e=await Pd(t.appConfig);for(;e.registrationStatus===1;)await w0(100),e=await Pd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await pu(t);return s||n}return e}function Pd(t){return Ea(t,e=>{if(!e)throw ks.create("installation-not-found");return I0(e)})}function I0(t){return V3(t)?{fid:t.fid,registrationStatus:0}:t}function V3(t){return t.registrationStatus===1&&t.registrationTime+h0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F3({appConfig:t,heartbeatServiceProvider:e},n){const s=H3(t,n),r=b3(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:d0,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await _0(()=>fetch(s,a));if(c.ok){const l=await c.json();return g0(l)}else throw await y0("Generate Auth Token",c)}function H3(t,{fid:e}){return`${m0(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e=!1){let n;const s=await Ea(t.appConfig,i=>{if(!A0(i))throw ks.create("not-registered");const o=i.authToken;if(!e&&q3(o))return i;if(o.requestStatus===1)return n=U3(t,e),i;{if(!navigator.onLine)throw ks.create("app-offline");const a=K3(i);return n=B3(t,a),a}});return n?await n:s.authToken}async function U3(t,e){let n=await xd(t.appConfig);for(;n.authToken.requestStatus===1;)await w0(100),n=await xd(t.appConfig);const s=n.authToken;return s.requestStatus===0?mu(t,e):s}function xd(t){return Ea(t,e=>{if(!A0(e))throw ks.create("not-registered");const n=e.authToken;return z3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B3(t,e){try{const n=await F3(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Mo(t.appConfig,s),n}catch(n){if(p0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await E0(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mo(t.appConfig,s)}throw n}}function A0(t){return t!==void 0&&t.registrationStatus===2}function q3(t){return t.requestStatus===2&&!j3(t)}function j3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+y3}function K3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function z3(t){return t.requestStatus===1&&t.requestTime+h0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W3(t){const e=t,{installationEntry:n,registrationPromise:s}=await pu(e);return s?s.catch(console.error):mu(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G3(t,e=!1){const n=t;return await Q3(n),(await mu(n,e)).token}async function Q3(t){const{registrationPromise:e}=await pu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(t){if(!t||!t.options)throw wc("App Configuration");if(!t.name)throw wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wc(t){return ks.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="installations",X3="installations-internal",J3=t=>{const e=t.getProvider("app").getImmediate(),n=Y3(e),s=ss(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Z3=t=>{const e=t.getProvider("app").getImmediate(),n=ss(e,S0).getImmediate();return{getId:()=>W3(n),getToken:r=>G3(n,r)}};function e4(){Ut(new Ot(S0,J3,"PUBLIC")),Ut(new Ot(X3,Z3,"PRIVATE"))}e4();At(u0,du);At(u0,du,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="analytics",t4="firebase_id",n4="origin",s4=60*1e3,r4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",k0="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new wa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function i4(t,e){const n=document.createElement("script");n.src=`${k0}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function o4(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function a4(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await L0(n)).find(l=>l.measurementId===r);c&&await e[c.appId]}}catch(a){Dt.error(a)}t("config",r,i)}async function c4(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await L0(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){Dt.error(i)}}function l4(t,e,n,s){async function r(i,o,a){try{i==="event"?await c4(t,e,n,o,a):i==="config"?await a4(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){Dt.error(c)}}return r}function u4(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=l4(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function h4(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(k0)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ft=new ns("analytics","Analytics",d4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=30,p4=1e3;class m4{constructor(e={},n=p4){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const R0=new m4;function g4(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function y4(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:g4(s)},i=r4.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function v4(t,e=R0,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw Ft.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw Ft.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new b4;return setTimeout(async()=>{a.abort()},n!==void 0?n:s4),D0({appId:s,apiKey:r,measurementId:i},o,a,e)}async function D0(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=R0){var i;const{appId:o,measurementId:a}=t;try{await _4(s,e)}catch(c){if(a)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await y4(t);return r.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!w4(l)){if(r.deleteThrottleMetadata(o),a)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Sd(n,r.intervalMillis,f4):Sd(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return r.setThrottleMetadata(o,d),Dt.debug(`Calling attemptFetch again in ${u} millis`),D0(t,d,s,r)}}function _4(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(Ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function w4(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class b4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function C4(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T4(){if(au())try{await cu()}catch(t){return Dt.warn(Ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Dt.warn(Ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E4(t,e,n,s,r,i,o){var a;const c=v4(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Dt.error(f)),e.push(c);const l=T4().then(f=>{if(f)return s.getId()}),[u,d]=await Promise.all([c,l]);h4(i)||i4(i,u.measurementId),r("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[n4]="firebase",h.update=!0,d!=null&&(h[t4]=d),r("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.app=e}_delete(){return delete Fr[this.app.options.appId],Promise.resolve()}}let Fr={},$d=[];const Vd={};let bc="dataLayer",A4="gtag",Fd,M0,Hd=!1;function S4(){const t=[];if(t0()&&t.push("This is a browser extension environment."),n0()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=Ft.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function k4(t,e,n){S4();const s=t.options.appId;if(!s)throw Ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ft.create("no-api-key");if(Fr[s]!=null)throw Ft.create("already-exists",{id:s});if(!Hd){o4(bc);const{wrappedGtag:i,gtagCore:o}=u4(Fr,$d,Vd,bc,A4);M0=i,Fd=o,Hd=!0}return Fr[s]=E4(t,$d,Vd,e,Fd,bc,n),new I4(t)}function L4(t=Ca()){t=Je(t);const e=ss(t,Oo);return e.isInitialized()?e.getImmediate():R4(t)}function R4(t,e={}){const n=ss(t,Oo);if(n.isInitialized()){const r=n.getImmediate();if(si(e,n.getOptions()))return r;throw Ft.create("already-initialized")}return n.initialize({options:e})}function O0(t,e,n,s){t=Je(t),C4(M0,Fr[t.app.options.appId],e,n,s).catch(r=>Dt.error(r))}const Ud="@firebase/analytics",Bd="0.9.0";function D4(){Ut(new Ot(Oo,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return k4(s,r,n)},"PUBLIC")),Ut(new Ot("analytics-internal",t,"PRIVATE")),At(Ud,Bd),At(Ud,Bd,"esm2017");function t(e){try{const n=e.getProvider(Oo).getImmediate();return{logEvent:(s,r,i)=>O0(n,s,r,i)}}catch(n){throw Ft.create("interop-component-reg-failed",{reason:n})}}}D4();const M4=L4(hu),O4=async t=>await O0(M4,t);var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N0={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(gu,function(){var n=1e3,s=6e4,r=36e5,i="millisecond",o="second",a="minute",c="hour",l="day",u="week",d="month",h="quarter",f="year",m="date",y="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(P){var k=["th","st","nd","rd"],D=P%100;return"["+P+(k[(D-20)%10]||k[D]||k[0])+"]"}},R=function(P,k,D){var H=String(P);return!H||H.length>=k?P:""+Array(k+1-H.length).join(D)+P},j={s:R,z:function(P){var k=-P.utcOffset(),D=Math.abs(k),H=Math.floor(D/60),A=D%60;return(k<=0?"+":"-")+R(H,2,"0")+":"+R(A,2,"0")},m:function P(k,D){if(k.date()<D.date())return-P(D,k);var H=12*(D.year()-k.year())+(D.month()-k.month()),A=k.clone().add(H,d),x=D-A<0,K=k.clone().add(H+(x?-1:1),d);return+(-(H+(D-A)/(x?A-K:K-A))||0)},a:function(P){return P<0?Math.ceil(P)||0:Math.floor(P)},p:function(P){return{M:d,y:f,w:u,d:l,D:m,h:c,m:a,s:o,ms:i,Q:h}[P]||String(P||"").toLowerCase().replace(/s$/,"")},u:function(P){return P===void 0}},J="en",ie={};ie[J]=b;var ge=function(P){return P instanceof Ie},W=function P(k,D,H){var A;if(!k)return J;if(typeof k=="string"){var x=k.toLowerCase();ie[x]&&(A=x),D&&(ie[x]=D,A=x);var K=k.split("-");if(!A&&K.length>1)return P(K[0])}else{var de=k.name;ie[de]=k,A=de}return!H&&A&&(J=A),A||!H&&J},Y=function(P,k){if(ge(P))return P.clone();var D=typeof k=="object"?k:{};return D.date=P,D.args=arguments,new Ie(D)},B=j;B.l=W,B.i=ge,B.w=function(P,k){return Y(P,{locale:k.$L,utc:k.$u,x:k.$x,$offset:k.$offset})};var Ie=function(){function P(D){this.$L=W(D.locale,null,!0),this.parse(D)}var k=P.prototype;return k.parse=function(D){this.$d=function(H){var A=H.date,x=H.utc;if(A===null)return new Date(NaN);if(B.u(A))return new Date;if(A instanceof Date)return new Date(A);if(typeof A=="string"&&!/Z$/i.test(A)){var K=A.match(_);if(K){var de=K[2]-1||0,we=(K[7]||"0").substring(0,3);return x?new Date(Date.UTC(K[1],de,K[3]||1,K[4]||0,K[5]||0,K[6]||0,we)):new Date(K[1],de,K[3]||1,K[4]||0,K[5]||0,K[6]||0,we)}}return new Date(A)}(D),this.$x=D.x||{},this.init()},k.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},k.$utils=function(){return B},k.isValid=function(){return this.$d.toString()!==y},k.isSame=function(D,H){var A=Y(D);return this.startOf(H)<=A&&A<=this.endOf(H)},k.isAfter=function(D,H){return Y(D)<this.startOf(H)},k.isBefore=function(D,H){return this.endOf(H)<Y(D)},k.$g=function(D,H,A){return B.u(D)?this[H]:this.set(A,D)},k.unix=function(){return Math.floor(this.valueOf()/1e3)},k.valueOf=function(){return this.$d.getTime()},k.startOf=function(D,H){var A=this,x=!!B.u(H)||H,K=B.p(D),de=function(z,se){var be=B.w(A.$u?Date.UTC(A.$y,se,z):new Date(A.$y,se,z),A);return x?be:be.endOf(l)},we=function(z,se){return B.w(A.toDate()[z].apply(A.toDate("s"),(x?[0,0,0,0]:[23,59,59,999]).slice(se)),A)},ve=this.$W,$e=this.$M,wt=this.$D,T="set"+(this.$u?"UTC":"");switch(K){case f:return x?de(1,0):de(31,11);case d:return x?de(1,$e):de(0,$e+1);case u:var F=this.$locale().weekStart||0,N=(ve<F?ve+7:ve)-F;return de(x?wt-N:wt+(6-N),$e);case l:case m:return we(T+"Hours",0);case c:return we(T+"Minutes",1);case a:return we(T+"Seconds",2);case o:return we(T+"Milliseconds",3);default:return this.clone()}},k.endOf=function(D){return this.startOf(D,!1)},k.$set=function(D,H){var A,x=B.p(D),K="set"+(this.$u?"UTC":""),de=(A={},A[l]=K+"Date",A[m]=K+"Date",A[d]=K+"Month",A[f]=K+"FullYear",A[c]=K+"Hours",A[a]=K+"Minutes",A[o]=K+"Seconds",A[i]=K+"Milliseconds",A)[x],we=x===l?this.$D+(H-this.$W):H;if(x===d||x===f){var ve=this.clone().set(m,1);ve.$d[de](we),ve.init(),this.$d=ve.set(m,Math.min(this.$D,ve.daysInMonth())).$d}else de&&this.$d[de](we);return this.init(),this},k.set=function(D,H){return this.clone().$set(D,H)},k.get=function(D){return this[B.p(D)]()},k.add=function(D,H){var A,x=this;D=Number(D);var K=B.p(H),de=function($e){var wt=Y(x);return B.w(wt.date(wt.date()+Math.round($e*D)),x)};if(K===d)return this.set(d,this.$M+D);if(K===f)return this.set(f,this.$y+D);if(K===l)return de(1);if(K===u)return de(7);var we=(A={},A[a]=s,A[c]=r,A[o]=n,A)[K]||1,ve=this.$d.getTime()+D*we;return B.w(ve,this)},k.subtract=function(D,H){return this.add(-1*D,H)},k.format=function(D){var H=this,A=this.$locale();if(!this.isValid())return A.invalidDate||y;var x=D||"YYYY-MM-DDTHH:mm:ssZ",K=B.z(this),de=this.$H,we=this.$m,ve=this.$M,$e=A.weekdays,wt=A.months,T=function(se,be,oe,p){return se&&(se[be]||se(H,x))||oe[be].slice(0,p)},F=function(se){return B.s(de%12||12,se,"0")},N=A.meridiem||function(se,be,oe){var p=se<12?"AM":"PM";return oe?p.toLowerCase():p},z={YY:String(this.$y).slice(-2),YYYY:this.$y,M:ve+1,MM:B.s(ve+1,2,"0"),MMM:T(A.monthsShort,ve,wt,3),MMMM:T(wt,ve),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:T(A.weekdaysMin,this.$W,$e,2),ddd:T(A.weekdaysShort,this.$W,$e,3),dddd:$e[this.$W],H:String(de),HH:B.s(de,2,"0"),h:F(1),hh:F(2),a:N(de,we,!0),A:N(de,we,!1),m:String(we),mm:B.s(we,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:K};return x.replace(w,function(se,be){return be||z[se]||K.replace(":","")})},k.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},k.diff=function(D,H,A){var x,K=B.p(H),de=Y(D),we=(de.utcOffset()-this.utcOffset())*s,ve=this-de,$e=B.m(this,de);return $e=(x={},x[f]=$e/12,x[d]=$e,x[h]=$e/3,x[u]=(ve-we)/6048e5,x[l]=(ve-we)/864e5,x[c]=ve/r,x[a]=ve/s,x[o]=ve/n,x)[K]||ve,A?$e:B.a($e)},k.daysInMonth=function(){return this.endOf(d).$D},k.$locale=function(){return ie[this.$L]},k.locale=function(D,H){if(!D)return this.$L;var A=this.clone(),x=W(D,H,!0);return x&&(A.$L=x),A},k.clone=function(){return B.w(this.$d,this)},k.toDate=function(){return new Date(this.valueOf())},k.toJSON=function(){return this.isValid()?this.toISOString():null},k.toISOString=function(){return this.$d.toISOString()},k.toString=function(){return this.$d.toUTCString()},P}(),V=Ie.prototype;return Y.prototype=V,[["$ms",i],["$s",o],["$m",a],["$H",c],["$W",l],["$M",d],["$y",f],["$D",m]].forEach(function(P){V[P[1]]=function(k){return this.$g(k,P[0],P[1])}}),Y.extend=function(P,k){return P.$i||(P(k,Ie,Y),P.$i=!0),Y},Y.locale=W,Y.isDayjs=ge,Y.unix=function(P){return Y(1e3*P)},Y.en=ie[J],Y.Ls=ie,Y.p={},Y})})(N0);const yu=N0.exports;var P0={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(gu,function(){return function(n,s,r){n=n||{};var i=s.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,d,h){return i.fromToBase(l,u,d,h)}r.en.relativeTime=o,i.fromToBase=function(l,u,d,h,f){for(var m,y,_,w=d.$locale().relativeTime||o,b=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],R=b.length,j=0;j<R;j+=1){var J=b[j];J.d&&(m=h?r(l).diff(d,J.d,!0):d.diff(l,J.d,!0));var ie=(n.rounding||Math.round)(Math.abs(m));if(_=m>0,ie<=J.r||!J.r){ie<=1&&j>0&&(J=b[j-1]);var ge=w[J.l];f&&(ie=f(""+ie)),y=typeof ge=="string"?ge.replace("%d",ie):ge(ie,u,J.l,_);break}}if(u)return y;var W=_?w.future:w.past;return typeof W=="function"?W(y):W.replace("%s",y)},i.to=function(l,u){return a(l,u,this,!0)},i.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?r.utc():r()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(P0);const N4=P0.exports;var x0={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(gu,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,a={},c=function(y){return(y=+y)+(y>68?1900:2e3)},l=function(y){return function(_){this[y]=+_}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var w=_.match(/([+-]|\d\d)/g),b=60*w[1]+(+w[2]||0);return b===0?0:w[0]==="+"?-b:b}(y)}],d=function(y){var _=a[y];return _&&(_.indexOf?_:_.s.concat(_.f))},h=function(y,_){var w,b=a.meridiem;if(b){for(var R=1;R<=24;R+=1)if(y.indexOf(b(R,0,_))>-1){w=R>12;break}}else w=y===(_?"pm":"PM");return w},f={A:[o,function(y){this.afternoon=h(y,!1)}],a:[o,function(y){this.afternoon=h(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[r,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[o,function(y){var _=a.ordinal,w=y.match(/\d+/);if(this.day=w[0],_)for(var b=1;b<=31;b+=1)_(b).replace(/\[|\]/g,"")===y&&(this.day=b)}],M:[i,l("month")],MM:[r,l("month")],MMM:[o,function(y){var _=d("months"),w=(d("monthsShort")||_.map(function(b){return b.slice(0,3)})).indexOf(y)+1;if(w<1)throw new Error;this.month=w%12||w}],MMMM:[o,function(y){var _=d("months").indexOf(y)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(y){this.year=c(y)}],YYYY:[/\d{4}/,l("year")],Z:u,ZZ:u};function m(y){var _,w;_=y,w=a&&a.formats;for(var b=(y=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(Y,B,Ie){var V=Ie&&Ie.toUpperCase();return B||w[Ie]||n[Ie]||w[V].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,k,D){return k||D.slice(1)})})).match(s),R=b.length,j=0;j<R;j+=1){var J=b[j],ie=f[J],ge=ie&&ie[0],W=ie&&ie[1];b[j]=W?{regex:ge,parser:W}:J.replace(/^\[|\]$/g,"")}return function(Y){for(var B={},Ie=0,V=0;Ie<R;Ie+=1){var P=b[Ie];if(typeof P=="string")V+=P.length;else{var k=P.regex,D=P.parser,H=Y.slice(V),A=k.exec(H)[0];D.call(B,A),Y=Y.replace(A,"")}}return function(x){var K=x.afternoon;if(K!==void 0){var de=x.hours;K?de<12&&(x.hours+=12):de===12&&(x.hours=0),delete x.afternoon}}(B),B}}return function(y,_,w){w.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(c=y.parseTwoDigitYear);var b=_.prototype,R=b.parse;b.parse=function(j){var J=j.date,ie=j.utc,ge=j.args;this.$u=ie;var W=ge[1];if(typeof W=="string"){var Y=ge[2]===!0,B=ge[3]===!0,Ie=Y||B,V=ge[2];B&&(V=ge[2]),a=this.$locale(),!Y&&V&&(a=w.Ls[V]),this.$d=function(H,A,x){try{if(["x","X"].indexOf(A)>-1)return new Date((A==="X"?1e3:1)*H);var K=m(A)(H),de=K.year,we=K.month,ve=K.day,$e=K.hours,wt=K.minutes,T=K.seconds,F=K.milliseconds,N=K.zone,z=new Date,se=ve||(de||we?1:z.getDate()),be=de||z.getFullYear(),oe=0;de&&!we||(oe=we>0?we-1:z.getMonth());var p=$e||0,g=wt||0,v=T||0,C=F||0;return N?new Date(Date.UTC(be,oe,se,p,g,v,C+60*N.offset*1e3)):x?new Date(Date.UTC(be,oe,se,p,g,v,C)):new Date(be,oe,se,p,g,v,C)}catch{return new Date("")}}(J,W,ie),this.init(),V&&V!==!0&&(this.$L=this.locale(V).$L),Ie&&J!=this.format(W)&&(this.$d=new Date("")),a={}}else if(W instanceof Array)for(var P=W.length,k=1;k<=P;k+=1){ge[1]=W[k-1];var D=w.apply(this,ge);if(D.isValid()){this.$d=D.$d,this.$L=D.$L,this.init();break}k===P&&(this.$d=new Date(""))}else R.call(this,j)}}})})(x0);const P4=x0.exports;yu.extend(N4);yu.extend(P4);const $0=()=>yu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4="/firebase-messaging-sw.js",$4="/firebase-cloud-messaging-push-scope",V0="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",V4="https://fcmregistrations.googleapis.com/v1",F0="google.c.a.c_id",F4="google.c.a.c_l",H4="google.c.a.ts",U4="google.c.a.e";var qd;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(qd||(qd={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ii;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ii||(ii={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function B4(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),r=new Uint8Array(s.length);for(let i=0;i<s.length;++i)r[i]=s.charCodeAt(i);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="fcm_token_details_db",q4=5,jd="fcm_token_object_Store";async function j4(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Cc))return null;let e=null;return(await ba(Cc,q4,{upgrade:async(s,r,i,o)=>{var a;if(r<2||!s.objectStoreNames.contains(jd))return;const c=o.objectStore(jd),l=await c.index("fcmSenderId").get(t);if(await c.clear(),!!l){if(r===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:_n(u.vapidKey)}}}else if(r===3){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:_n(u.auth),p256dh:_n(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:_n(u.vapidKey)}}}else if(r===4){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:_n(u.auth),p256dh:_n(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:_n(u.vapidKey)}}}}}})).close(),await gc(Cc),await gc("fcm_vapid_details_db"),await gc("undefined"),K4(e)?e:null}function K4(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4="firebase-messaging-database",W4=1,Rs="firebase-messaging-store";let Tc=null;function vu(){return Tc||(Tc=ba(z4,W4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rs)}}})),Tc}async function H0(t){const e=wu(t),s=await(await vu()).transaction(Rs).objectStore(Rs).get(e);if(s)return s;{const r=await j4(t.appConfig.senderId);if(r)return await _u(t,r),r}}async function _u(t,e){const n=wu(t),r=(await vu()).transaction(Rs,"readwrite");return await r.objectStore(Rs).put(e,n),await r.done,e}async function G4(t){const e=wu(t),s=(await vu()).transaction(Rs,"readwrite");await s.objectStore(Rs).delete(e),await s.done}function wu({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},pt=new ns("messaging","Messaging",Q4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y4(t,e){const n=await Cu(t),s=B0(e),r={method:"POST",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(bu(t.appConfig),r)).json()}catch(o){throw pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw pt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw pt.create("token-subscribe-no-token");return i.token}async function X4(t,e){const n=await Cu(t),s=B0(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(s)};let i;try{i=await(await fetch(`${bu(t.appConfig)}/${e.token}`,r)).json()}catch(o){throw pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw pt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw pt.create("token-update-no-token");return i.token}async function U0(t,e){const s={method:"DELETE",headers:await Cu(t)};try{const i=await(await fetch(`${bu(t.appConfig)}/${e}`,s)).json();if(i.error){const o=i.error.message;throw pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(r){throw pt.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function bu({projectId:t}){return`${V4}/projects/${t}/registrations`}async function Cu({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function B0({p256dh:t,auth:e,endpoint:n,vapidKey:s}){const r={web:{endpoint:n,auth:e,p256dh:t}};return s!==V0&&(r.web.applicationPubKey=s),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4=7*24*60*60*1e3;async function Z4(t){const e=await nb(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:_n(e.getKey("auth")),p256dh:_n(e.getKey("p256dh"))},s=await H0(t.firebaseDependencies);if(s){if(sb(s.subscriptionOptions,n))return Date.now()>=s.createTime+J4?tb(t,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await U0(t.firebaseDependencies,s.token)}catch(r){console.warn(r)}return Kd(t.firebaseDependencies,n)}else return Kd(t.firebaseDependencies,n)}async function eb(t){const e=await H0(t.firebaseDependencies);e&&(await U0(t.firebaseDependencies,e.token),await G4(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function tb(t,e){try{const n=await X4(t.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await _u(t.firebaseDependencies,s),n}catch(n){throw await eb(t),n}}async function Kd(t,e){const s={token:await Y4(t,e),createTime:Date.now(),subscriptionOptions:e};return await _u(t,s),s.token}async function nb(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:B4(e)})}function sb(t,e){const n=e.vapidKey===t.vapidKey,s=e.endpoint===t.endpoint,r=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&s&&r&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return rb(e,t),ib(e,t),ob(e,t),e}function rb(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const s=e.notification.body;s&&(t.notification.body=s);const r=e.notification.image;r&&(t.notification.image=r);const i=e.notification.icon;i&&(t.notification.icon=i)}function ib(t,e){!e.data||(t.data=e.data)}function ob(t,e){var n,s,r,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&r!==void 0?r:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(t){return typeof t=="object"&&!!t&&F0 in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */q0("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");q0("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function q0(t,e){const n=[];for(let s=0;s<t.length;s++)n.push(t.charAt(s)),s<e.length&&n.push(e.charAt(s));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){if(!t||!t.options)throw Ec("App Configuration Object");if(!t.name)throw Ec("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const s of e)if(!n[s])throw Ec(s);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ec(t){return pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=cb(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t){try{t.swRegistration=await navigator.serviceWorker.register(x4,{scope:$4}),t.swRegistration.update().catch(()=>{})}catch(e){throw pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(t,e){if(!e&&!t.swRegistration&&await ub(t),!(!e&&!!t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=V0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){if(!navigator)throw pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw pt.create("permission-blocked");return await db(t,e==null?void 0:e.vapidKey),await hb(t,e==null?void 0:e.serviceWorkerRegistration),Z4(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(t,e,n){const s=pb(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[F0],message_name:n[F4],message_time:n[H4],message_device_time:Math.floor(Date.now()/1e3)})}function pb(t){switch(t){case ii.NOTIFICATION_CLICKED:return"notification_open";case ii.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ii.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(zd(n)):t.onMessageHandler.next(zd(n)));const s=n.data;ab(s)&&s[U4]==="1"&&await fb(t,n.messageType,s)}const Wd="@firebase/messaging",Gd="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=t=>{const e=new lb(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>mb(e,n)),e},yb=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:s=>j0(e,s)}};function vb(){Ut(new Ot("messaging",gb,"PUBLIC")),Ut(new Ot("messaging-internal",yb,"PRIVATE")),At(Wd,Gd),At(Wd,Gd,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(){try{await cu()}catch{return!1}return typeof window<"u"&&au()&&n0()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e){if(!navigator)throw pt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t=Ca()){return _b().then(e=>{if(!e)throw pt.create("unsupported-browser")},e=>{throw pt.create("indexed-db-unsupported")}),ss(Je(t),"messaging").getImmediate()}async function Cb(t,e){return t=Je(t),j0(t,e)}function Tb(t,e){return t=Je(t),wb(t,e)}vb();var Eb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q,Tu=Tu||{},ue=Eb||self;function No(){}function Ia(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Ib(t){return Object.prototype.hasOwnProperty.call(t,Ic)&&t[Ic]||(t[Ic]=++Ab)}var Ic="closure_uid_"+(1e9*Math.random()>>>0),Ab=0;function Sb(t,e,n){return t.call.apply(t.bind,arguments)}function kb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=Sb:mt=kb,mt.apply(null,arguments)}function Ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function rs(){this.s=this.s,this.o=this.o}var Lb=0;rs.prototype.s=!1;rs.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Lb!=0)&&Ib(this)};rs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const K0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Eu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Qd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ia(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function gt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Rb=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",No,e),ue.removeEventListener("test",No,e)}catch{}return t}();function Po(t){return/^[\s\xa0]*$/.test(t)}var Yd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ac(t,e){return t<e?-1:t>e?1:0}function Aa(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function sn(t){return Aa().indexOf(t)!=-1}function Iu(t){return Iu[" "](t),t}Iu[" "]=No;function Db(t){var e=Nb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Mb=sn("Opera"),sr=sn("Trident")||sn("MSIE"),z0=sn("Edge"),al=z0||sr,W0=sn("Gecko")&&!(Aa().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge"))&&!(sn("Trident")||sn("MSIE"))&&!sn("Edge"),Ob=Aa().toLowerCase().indexOf("webkit")!=-1&&!sn("Edge");function G0(){var t=ue.document;return t?t.documentMode:void 0}var xo;e:{var Sc="",kc=function(){var t=Aa();if(W0)return/rv:([^\);]+)(\)|;)/.exec(t);if(z0)return/Edge\/([\d\.]+)/.exec(t);if(sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Ob)return/WebKit\/(\S+)/.exec(t);if(Mb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kc&&(Sc=kc?kc[1]:""),sr){var Lc=G0();if(Lc!=null&&Lc>parseFloat(Sc)){xo=String(Lc);break e}}xo=Sc}var Nb={};function Pb(){return Db(function(){let t=0;const e=Yd(String(xo)).split("."),n=Yd("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Ac(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ac(r[2].length==0,i[2].length==0)||Ac(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var cl;if(ue.document&&sr){var Xd=G0();cl=Xd||parseInt(xo,10)||void 0}else cl=void 0;var xb=cl;function oi(t,e){if(gt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(W0){e:{try{Iu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:$b[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&oi.X.h.call(this)}}ct(oi,gt);var $b={2:"touch",3:"pen",4:"mouse"};oi.prototype.h=function(){oi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ki="closure_listenable_"+(1e6*Math.random()|0),Vb=0;function Fb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Vb,this.ba=this.ea=!1}function Sa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Au(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Q0(t){const e={};for(const n in t)e[n]=t[n];return e}const Jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y0(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Jd.length;i++)n=Jd[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ka(t){this.src=t,this.g={},this.h=0}ka.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ul(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Fb(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function ll(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=K0(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Sa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ul(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Su="closure_lm_"+(1e6*Math.random()|0),Rc={};function X0(t,e,n,s,r){if(s&&s.once)return Z0(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)X0(t,e[i],n,s,r);return null}return n=Ru(n),t&&t[ki]?t.N(e,n,Si(s)?!!s.capture:!!s,r):J0(t,e,n,!1,s,r)}function J0(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Si(r)?!!r.capture:!!r,a=Lu(t);if(a||(t[Su]=a=new ka(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Hb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Rb||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(tm(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Hb(){function t(n){return e.call(t.src,t.listener,n)}const e=Ub;return t}function Z0(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Z0(t,e[i],n,s,r);return null}return n=Ru(n),t&&t[ki]?t.O(e,n,Si(s)?!!s.capture:!!s,r):J0(t,e,n,!0,s,r)}function em(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)em(t,e[i],n,s,r);else s=Si(s)?!!s.capture:!!s,n=Ru(n),t&&t[ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ul(i,n,s,r),-1<n&&(Sa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ul(e,n,s,r)),(n=-1<t?e[t]:null)&&ku(n))}function ku(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ki])ll(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tm(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lu(e))?(ll(n,t),n.h==0&&(n.src=null,e[Su]=null)):Sa(t)}}}function tm(t){return t in Rc?Rc[t]:Rc[t]="on"+t}function Ub(t,e){if(t.ba)t=!0;else{e=new oi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ku(t),t=n.call(s,e)}return t}function Lu(t){return t=t[Su],t instanceof ka?t:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ru(t){return typeof t=="function"?t:(t[Dc]||(t[Dc]=function(e){return t.handleEvent(e)}),t[Dc])}function st(){rs.call(this),this.i=new ka(this),this.P=this,this.I=null}ct(st,rs);st.prototype[ki]=!0;st.prototype.removeEventListener=function(t,e,n,s){em(this,t,e,n,s)};function at(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new gt(e,t);else if(e instanceof gt)e.target=e.target||t;else{var r=e;e=new gt(s,t),Y0(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Zi(o,s,!0,e)&&r}if(o=e.g=t,r=Zi(o,s,!0,e)&&r,r=Zi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Zi(o,s,!1,e)&&r}st.prototype.M=function(){if(st.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Sa(n[s]);delete t.g[e],t.h--}}this.I=null};st.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};st.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Zi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ll(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Du=ue.JSON.stringify;function Bb(){var t=rm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class qb{constructor(){this.h=this.g=null}add(e,n){const s=nm.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nm=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jb,t=>t.reset());class jb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Kb(t){ue.setTimeout(()=>{throw t},0)}function sm(t,e){hl||zb(),dl||(hl(),dl=!0),rm.add(t,e)}var hl;function zb(){var t=ue.Promise.resolve(void 0);hl=function(){t.then(Wb)}}var dl=!1,rm=new qb;function Wb(){for(var t;t=Bb();){try{t.h.call(t.g)}catch(n){Kb(n)}var e=nm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dl=!1}function La(t,e){st.call(this),this.h=t||1,this.g=e||ue,this.j=mt(this.lb,this),this.l=Date.now()}ct(La,st);Q=La.prototype;Q.ca=!1;Q.R=null;Q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),at(this,"tick"),this.ca&&(Mu(this),this.start()))}};Q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Mu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Q.M=function(){La.X.M.call(this),Mu(this),delete this.g};function Ou(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function im(t){t.g=Ou(()=>{t.g=null,t.i&&(t.i=!1,im(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Gb extends rs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:im(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){rs.call(this),this.h=t,this.g={}}ct(ai,rs);var Zd=[];function om(t,e,n,s){Array.isArray(n)||(n&&(Zd[0]=n.toString()),n=Zd);for(var r=0;r<n.length;r++){var i=X0(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function am(t){Au(t.g,function(e,n){this.g.hasOwnProperty(n)&&ku(e)},t),t.g={}}ai.prototype.M=function(){ai.X.M.call(this),am(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ra(){this.g=!0}Ra.prototype.Aa=function(){this.g=!1};function Qb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Yb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function qs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jb(t,n)+(s?" "+s:"")})}function Xb(t,e){t.info(function(){return"TIMEOUT: "+e})}Ra.prototype.info=function(){};function Jb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Du(n)}catch{return e}}var Ns={},ef=null;function Da(){return ef=ef||new st}Ns.Pa="serverreachability";function cm(t){gt.call(this,Ns.Pa,t)}ct(cm,gt);function ci(t){const e=Da();at(e,new cm(e))}Ns.STAT_EVENT="statevent";function lm(t,e){gt.call(this,Ns.STAT_EVENT,t),this.stat=e}ct(lm,gt);function Ct(t){const e=Da();at(e,new lm(e,t))}Ns.Qa="timingevent";function um(t,e){gt.call(this,Ns.Qa,t),this.size=e}ct(um,gt);function Li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var Ma={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},hm={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Nu(){}Nu.prototype.h=null;function tf(t){return t.h||(t.h=t.i())}function dm(){}var Ri={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pu(){gt.call(this,"d")}ct(Pu,gt);function xu(){gt.call(this,"c")}ct(xu,gt);var fl;function Oa(){}ct(Oa,Nu);Oa.prototype.g=function(){return new XMLHttpRequest};Oa.prototype.i=function(){return{}};fl=new Oa;function Di(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new ai(this),this.O=Zb,t=al?125:void 0,this.T=new La(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fm}function fm(){this.i=null,this.g="",this.h=!1}var Zb=45e3,pl={},$o={};Q=Di.prototype;Q.setTimeout=function(t){this.O=t};function ml(t,e,n){t.K=1,t.v=Pa(Ln(e)),t.s=n,t.P=!0,pm(t,null)}function pm(t,e){t.F=Date.now(),Mi(t),t.A=Ln(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Cm(n.i,"t",s),t.C=0,n=t.l.H,t.h=new fm,t.g=qm(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gb(mt(t.La,t,t.g),t.N)),om(t.S,t.g,"readystatechange",t.ib),e=t.H?Q0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ci(),Qb(t.j,t.u,t.A,t.m,t.U,t.s)}Q.ib=function(t){t=t.target;const e=this.L;e&&bn(t)==3?e.l():this.La(t)};Q.La=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||al||this.g&&(this.h.h||this.g.fa()||of(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?ci(3):ci(2)),Na(this);var n=this.g.aa();this.Y=n;t:if(mm(this)){var s=of(this.g);t="";var r=s.length,i=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vs(this),Hr(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Yb(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Po(a)){var l=a;break t}}l=null}if(n=l)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gl(this,n);else{this.i=!1,this.o=3,Ct(12),vs(this),Hr(this);break e}}this.P?(gm(this,u,o),al&&this.i&&u==3&&(om(this.S,this.T,"tick",this.hb),this.T.start())):(qs(this.j,this.m,o,null),gl(this,o)),u==4&&vs(this),this.i&&!this.I&&(u==4?Fm(this.l,this):(this.i=!1,Mi(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ct(12)):(this.o=0,Ct(13)),vs(this),Hr(this)}}}catch{}finally{}};function mm(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gm(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=e6(t,n),r==$o){e==4&&(t.o=4,Ct(14),s=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==pl){t.o=4,Ct(15),qs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else qs(t.j,t.m,r,null),gl(t,r);mm(t)&&r!=$o&&r!=pl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ct(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qu(e),e.K=!0,Ct(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),vs(t),Hr(t))}Q.hb=function(){if(this.g){var t=bn(this.g),e=this.g.fa();this.C<e.length&&(Na(this),gm(this,t,e),this.i&&t!=4&&Mi(this))}};function e6(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?$o:(n=Number(e.substring(n,s)),isNaN(n)?pl:(s+=1,s+n>e.length?$o:(e=e.substr(s,n),t.C=s+n,e)))}Q.cancel=function(){this.I=!0,vs(this)};function Mi(t){t.V=Date.now()+t.O,ym(t,t.O)}function ym(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Li(mt(t.gb,t),e)}function Na(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}Q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Xb(this.j,this.A),this.K!=2&&(ci(),Ct(17)),vs(this),this.o=2,Hr(this)):ym(this,this.V-t)};function Hr(t){t.l.G==0||t.I||Fm(t.l,t)}function vs(t){Na(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Mu(t.T),am(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yl(n.h,t))){if(!t.J&&yl(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ho(n),Va(n);else break e;Bu(n),Ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Li(mt(n.cb,n),6e3));if(1>=Im(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _s(n,11)}else if((t.J||n.g==t)&&Ho(n),!Po(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=s.h;i.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&($u(i,i.h),i.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Ue(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Bm(s,s.H?s.ka:null,s.V),o.J){Am(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Na(a),Mi(a)),s.g=o}else $m(s);0<n.i.length&&Fa(n)}else l[0]!="stop"&&l[0]!="close"||_s(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?_s(n,7):Uu(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ci(4)}catch{}}function t6(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ia(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function n6(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ia(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ia(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=n6(t),s=t6(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var _m=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s6(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Es(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Es){this.h=e!==void 0?e:t.h,Vo(this,t.j),this.s=t.s,this.g=t.g,Fo(this,t.m),this.l=t.l,e=t.i;var n=new li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nf(this,n),this.o=t.o}else t&&(n=String(t).match(_m))?(this.h=!!e,Vo(this,n[1]||"",!0),this.s=Dr(n[2]||""),this.g=Dr(n[3]||"",!0),Fo(this,n[4]),this.l=Dr(n[5]||"",!0),nf(this,n[6]||"",!0),this.o=Dr(n[7]||"")):(this.h=!!e,this.i=new li(null,this.h))}Es.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Mr(e,sf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Mr(e,sf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Mr(n,n.charAt(0)=="/"?o6:i6,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Mr(n,c6)),t.join("")};function Ln(t){return new Es(t)}function Vo(t,e,n){t.j=n?Dr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nf(t,e,n){e instanceof li?(t.i=e,l6(t.i,t.h)):(n||(e=Mr(e,a6)),t.i=new li(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function Pa(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Dr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Mr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,r6),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function r6(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sf=/[#\/\?@]/g,i6=/[#\?:]/g,o6=/[#\?]/g,a6=/[#\?@]/g,c6=/#/g;function li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function is(t){t.g||(t.g=new Map,t.h=0,t.i&&s6(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=li.prototype;Q.add=function(t,e){is(this),this.i=null,t=vr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wm(t,e){is(t),e=vr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bm(t,e){return is(t),e=vr(t,e),t.g.has(e)}Q.forEach=function(t,e){is(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};Q.oa=function(){is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};Q.W=function(t){is(this);let e=[];if(typeof t=="string")bm(this,t)&&(e=e.concat(this.g.get(vr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Q.set=function(t,e){return is(this),this.i=null,t=vr(this,t),bm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Cm(t,e,n){wm(t,e),0<n.length&&(t.i=null,t.g.set(vr(t,e),Eu(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function vr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function l6(t,e){e&&!t.j&&(is(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(wm(this,s),Cm(this,r,n))},t)),t.j=e}var u6=class{constructor(t,e){this.h=t,this.g=e}};function Tm(t){this.l=t||h6,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ga&&ue.g.Ga()&&ue.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var h6=10;function Em(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Im(t){return t.h?1:t.g?t.g.size:0}function yl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function $u(t,e){t.g?t.g.add(e):t.h=e}function Am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tm.prototype.cancel=function(){if(this.i=Sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Eu(t.i)}function Vu(){}Vu.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)};Vu.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};function d6(){this.g=new Vu}function f6(t,e,n){const s=n||"";try{vm(t,function(r,i){let o=r;Si(r)&&(o=Du(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function p6(t,e){const n=new Ra;if(ue.Image){const s=new Image;s.onload=Ji(eo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ji(eo,n,s,"TestLoadImage: error",!1,e),s.onabort=Ji(eo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ji(eo,n,s,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function eo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Oi(t){this.l=t.ac||null,this.j=t.jb||!1}ct(Oi,Nu);Oi.prototype.g=function(){return new xa(this.l,this.j)};Oi.prototype.i=function(t){return function(){return t}}({});function xa(t,e){st.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(xa,st);var Fu=0;Q=xa.prototype;Q.open=function(t,e){if(this.readyState!=Fu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ue).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=Fu};Q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;km(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function km(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}Q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):ui(this),this.readyState==3&&km(this)}};Q.Va=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};Q.Ua=function(t){this.g&&(this.response=t,Ni(this))};Q.ga=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var m6=ue.JSON.parse;function je(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Lm,this.K=this.L=!1}ct(je,st);var Lm="",g6=/^https?$/i,y6=["POST","PUT"];Q=je.prototype;Q.Ka=function(t){this.L=t};Q.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fl.g(),this.C=this.u?tf(this.u):tf(fl),this.g.onreadystatechange=mt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){rf(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=ue.FormData&&t instanceof ue.FormData,!(0<=K0(y6,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mm(this),0<this.B&&((this.K=v6(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.qa,this)):this.A=Ou(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rf(this,i)}};function v6(t){return sr&&Pb()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Q.qa=function(){typeof Tu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function rf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rm(t),$a(t)}function Rm(t){t.D||(t.D=!0,at(t,"complete"),at(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),$a(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$a(this,!0)),je.X.M.call(this)};Q.Ha=function(){this.s||(this.F||this.v||this.l?Dm(this):this.fb())};Q.fb=function(){Dm(this)};function Dm(t){if(t.h&&typeof Tu<"u"&&(!t.C[1]||bn(t)!=4||t.aa()!=2)){if(t.v&&bn(t)==4)Ou(t.Ha,0,t);else if(at(t,"readystatechange"),bn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(_m)[1]||null;if(!r&&ue.self&&ue.self.location){var i=ue.self.location.protocol;r=i.substr(0,i.length-1)}s=!g6.test(r?r.toLowerCase():"")}n=s}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var o=2<bn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rm(t)}}finally{$a(t)}}}}function $a(t,e){if(t.g){Mm(t);const n=t.g,s=t.C[0]?No:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=s}catch{}}}function Mm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function bn(t){return t.g?t.g.readyState:0}Q.aa=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};Q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),m6(e)}};function of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Lm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Ea=function(){return this.m};Q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Om(t){let e="";return Au(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Hu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Om(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function kr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Nm(t){this.Ca=0,this.i=[],this.j=new Ra,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=kr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=kr("baseRetryDelayMs",5e3,t),this.bb=kr("retryDelaySeedMs",1e4,t),this.$a=kr("forwardChannelMaxRetries",2,t),this.ta=kr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Tm(t&&t.concurrentRequestLimit),this.Fa=new d6,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Q=Nm.prototype;Q.ma=8;Q.G=1;function Uu(t){if(Pm(t),t.G==3){var e=t.U++,n=Ln(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Pi(t,n),e=new Di(t,t.j,e,void 0),e.K=2,e.v=Pa(Ln(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.v.toString(),"")),!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=qm(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mi(e)}Um(t)}function Va(t){t.g&&(qu(t),t.g.cancel(),t.g=null)}function Pm(t){Va(t),t.u&&(ue.clearTimeout(t.u),t.u=null),Ho(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function Fa(t){Em(t.h)||t.m||(t.m=!0,sm(t.Ja,t),t.C=0)}function _6(t,e){return Im(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Li(mt(t.Ja,t,e),Hm(t,t.C)),t.C++,!0)}Q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Di(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Q0(i),Y0(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xm(this,r,e),n=Ln(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Pi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Om(i)))+"&"+e:this.o&&Hu(n,this.o,i)),$u(this.h,r),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),r.Z=!0,ml(r,n,null)):ml(r,n,e),this.G=2}}else this.G==3&&(t?af(this,t):this.i.length==0||Em(this.h)||af(this))};function af(t,e){var n;e?n=e.m:n=t.U++;const s=Ln(t.F);Ue(s,"SID",t.I),Ue(s,"RID",n),Ue(s,"AID",t.T),Pi(t,s),t.o&&t.s&&Hu(s,t.o,t.s),n=new Di(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xm(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),$u(t.h,n),ml(n,s,e)}function Pi(t,e){t.ia&&Au(t.ia,function(n,s){Ue(e,s,n)}),t.l&&vm({},function(n,s){Ue(e,s,n)})}function xm(t,e,n){n=Math.min(t.i.length,n);var s=t.l?mt(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{f6(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function $m(t){t.g||t.u||(t.Z=1,sm(t.Ia,t),t.A=0)}function Bu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Li(mt(t.Ia,t),Hm(t,t.A)),t.A++,!0)}Q.Ia=function(){if(this.u=null,Vm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Li(mt(this.eb,this),t)}};Q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ct(10),Va(this),Vm(this))};function qu(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function Vm(t){t.g=new Di(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Ln(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Pi(t,e),t.o&&t.s&&Hu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Pa(Ln(e)),n.s=null,n.P=!0,pm(n,t)}Q.cb=function(){this.v!=null&&(this.v=null,Va(this),Bu(this),Ct(19))};function Ho(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function Fm(t,e){var n=null;if(t.g==e){Ho(t),qu(t),t.g=null;var s=2}else if(yl(t.h,e))n=e.D,Am(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Da(),at(s,new um(s,n)),Fa(t)}else $m(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&_6(t,e)||s==2&&Bu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:_s(t,5);break;case 4:_s(t,10);break;case 3:_s(t,6);break;default:_s(t,2)}}}function Hm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function _s(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=mt(t.kb,t);n||(n=new Es("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||Vo(n,"https"),Pa(n)),p6(n.toString(),s)}else Ct(2);t.G=0,t.l&&t.l.va(e),Um(t),Pm(t)}Q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function Um(t){if(t.G=0,t.la=[],t.l){const e=Sm(t.h);(e.length!=0||t.i.length!=0)&&(Qd(t.la,e),Qd(t.la,t.i),t.h.i.length=0,Eu(t.i),t.i.length=0),t.l.ua()}}function Bm(t,e,n){var s=n instanceof Es?Ln(n):new Es(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fo(s,s.m);else{var r=ue.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Es(null,void 0);s&&Vo(i,s),e&&(i.g=e),r&&Fo(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ue(s,n,e),Ue(s,"VER",t.ma),Pi(t,s),s}function qm(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Oi({jb:!0})):new je(t.ra),e.Ka(t.H),e}function jm(){}Q=jm.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Ra=function(){};function Uo(){if(sr&&!(10<=Number(xb)))throw Error("Environmental error: no available transport.")}Uo.prototype.g=function(t,e){return new Nt(t,e)};function Nt(t,e){st.call(this),this.g=new Nm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Po(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Po(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _r(this)}ct(Nt,st);Nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ct(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bm(t,null,t.V),Fa(t)};Nt.prototype.close=function(){Uu(this.g)};Nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Du(t),t=n);e.i.push(new u6(e.ab++,t)),e.G==3&&Fa(e)};Nt.prototype.M=function(){this.g.l=null,delete this.j,Uu(this.g),delete this.g,Nt.X.M.call(this)};function Km(t){Pu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(Km,Pu);function zm(){xu.call(this),this.status=1}ct(zm,xu);function _r(t){this.g=t}ct(_r,jm);_r.prototype.xa=function(){at(this.g,"a")};_r.prototype.wa=function(t){at(this.g,new Km(t))};_r.prototype.va=function(t){at(this.g,new zm)};_r.prototype.ua=function(){at(this.g,"b")};Uo.prototype.createWebChannel=Uo.prototype.g;Nt.prototype.send=Nt.prototype.u;Nt.prototype.open=Nt.prototype.m;Nt.prototype.close=Nt.prototype.close;Ma.NO_ERROR=0;Ma.TIMEOUT=8;Ma.HTTP_ERROR=6;hm.COMPLETE="complete";dm.EventType=Ri;Ri.OPEN="a";Ri.CLOSE="b";Ri.ERROR="c";Ri.MESSAGE="d";st.prototype.listen=st.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var w6=function(){return new Uo},b6=function(){return Da()},Mc=Ma,C6=hm,T6=Ns,cf={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},E6=Oi,to=dm,I6=je;const lf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new wa("@firebase/firestore");function uf(){return Ds.logLevel}function X(t,...e){if(Ds.logLevel<=Le.DEBUG){const n=e.map(ju);Ds.debug(`Firestore (${wr}): ${t}`,...n)}}function Rn(t,...e){if(Ds.logLevel<=Le.ERROR){const n=e.map(ju);Ds.error(`Firestore (${wr}): ${t}`,...n)}}function vl(t,...e){if(Ds.logLevel<=Le.WARN){const n=e.map(ju);Ds.warn(`Firestore (${wr}): ${t}`,...n)}}function ju(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function xe(t,e){t||ae()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class S6{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class k6{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new Wm(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new lt(e)}}class L6{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(xe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class R6{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new L6(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D6{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M6{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.A=n.token,new D6(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=O6(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Re(t,e){return t<e?-1:t>e?1:0}function rr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ye(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Ye(0,0))}static max(){return new fe(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends hi{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new q(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const N6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends hi{construct(e,n,s){return new ft(e,n,s)}static isValidIdentifier(e){return N6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new q(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Fe.fromString(e))}static fromName(e){return new Z(Fe.fromString(e).popFirst(5))}static empty(){return new Z(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Fe(e.slice()))}}function P6(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(s===1e9?new Ye(n+1,0):new Ye(n,s));return new Jn(r,Z.empty(),e)}function x6(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Jn(fe.min(),Z.empty(),-1)}static max(){return new Jn(fe.max(),Z.empty(),-1)}}function $6(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V6="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F6{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==V6)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,s)=>{n(e)})}static reject(e){return new L((n,s)=>{s(e)})}static waitFor(e){return new L((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=L.resolve(!1);for(const s of e)n=n.next(r=>r?L.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new L((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new L((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function $i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ku.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H6{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Qm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return t==null}function Bo(t){return t===0&&1/t==-1/0}function U6(t){return typeof t=="number"&&Number.isInteger(t)&&!Bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const B6=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(xe(!!t),typeof t=="string"){let e=0;const n=B6.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xm(t){const e=t.mapValue.fields.__previous_value__;return Ym(e)?Xm(e):e}function fi(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:q6(t)?9007199254740991:10:ae()}function fn(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Zn(s.timestampValue),o=Zn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ir(s.bytesValue).isEqual(ir(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return We(s.geoPointValue.latitude)===We(r.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return We(s.integerValue)===We(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=We(s.doubleValue),o=We(r.doubleValue);return i===o?Bo(i)===Bo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rr(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(hf(i)!==hf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!fn(i[a],o[a])))return!1;return!0}(t,e);default:return ae()}}function pi(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function or(t,e){if(t===e)return 0;const n=Ms(t),s=Ms(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=We(r.integerValue||r.doubleValue),a=We(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return df(t.timestampValue,e.timestampValue);case 4:return df(fi(t),fi(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ir(r),a=ir(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Re(o[c],a[c]);if(l!==0)return l}return Re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Re(We(r.latitude),We(i.latitude));return o!==0?o:Re(We(r.longitude),We(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=or(o[c],a[c]);if(l)return l}return Re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===no.mapValue&&i===no.mapValue)return 0;if(r===no.mapValue)return 1;if(i===no.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const d=Re(a[u],l[u]);if(d!==0)return d;const h=or(o[a[u]],c[l[u]]);if(h!==0)return h}return Re(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ae()}}function df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Zn(t),s=Zn(e),r=Re(n.seconds,s.seconds);return r!==0?r:Re(n.nanos,s.nanos)}function ar(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Zn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ir(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=_l(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${_l(s.fields[a])}`;return i+"}"}(t.mapValue):ae();var e,n}function ff(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wl(t){return!!t&&"integerValue"in t}function zu(t){return!!t&&"arrayValue"in t}function pf(t){return!!t&&"nullValue"in t}function mf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function mo(t){return!!t&&"mapValue"in t}function Ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function q6(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.position=e,this.inclusive=n}}function gf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=Z.comparator(Z.fromName(o.referenceValue),n.key):s=or(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function yf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{}class Ge extends Jm{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new z6(e,n,s):n==="array-contains"?new Q6(e,s):n==="in"?new Y6(e,s):n==="not-in"?new X6(e,s):n==="array-contains-any"?new J6(e,s):new Ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new W6(e,s):new G6(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(or(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Gt extends Jm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Gt(e,n)}matches(e){return Zm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Zm(t){return t.op==="and"}function j6(t){return K6(t)&&Zm(t)}function K6(t){for(const e of t.filters)if(e instanceof Gt)return!1;return!0}function eg(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ar(t.value);{const e=t.filters.map(n=>eg(n)).join(",");return`${t.op}(${e})`}}function tg(t,e){return t instanceof Ge?function(n,s){return s instanceof Ge&&n.op===s.op&&n.field.isEqual(s.field)&&fn(n.value,s.value)}(t,e):t instanceof Gt?function(n,s){return s instanceof Gt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&tg(i,s.filters[o]),!0):!1}(t,e):void ae()}function ng(t){return t instanceof Ge?function(e){return`${e.field.canonicalString()} ${e.op} ${ar(e.value)}`}(t):t instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(ng).join(" ,")+"}"}(t):"Filter"}class z6 extends Ge{constructor(e,n,s){super(e,n,s),this.key=Z.fromName(s.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class W6 extends Ge{constructor(e,n){super(e,"in",n),this.keys=sg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G6 extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=sg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>Z.fromName(s.referenceValue))}class Q6 extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zu(n)&&pi(n.arrayValue,this.value)}}class Y6 extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class X6 extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class J6 extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>pi(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function Z6(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:rt.RED,this.left=r!=null?r:rt.EMPTY,this.right=i!=null?i:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new rt(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return rt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(t,e,n,s,r){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vf(this.data.getIterator())}getIteratorFrom(e){return new vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new an([])}unionWith(e){let n=new Xe(ft.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(n)}setAll(e){let n=ft.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ur(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];mo(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){br(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new xt(Ur(this.value))}}function rg(t){const e=[];return br(t.fields,(n,s)=>{const r=new ft([n]);if(mo(s)){const i=rg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,fe.min(),fe.min(),fe.min(),xt.empty(),0)}static newFoundDocument(e,n,s,r){return new ut(e,1,n,fe.min(),s,r,0)}static newNoDocument(e,n){return new ut(e,2,n,fe.min(),fe.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,fe.min(),fe.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e9{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function _f(t,e=null,n=[],s=[],r=null,i=null,o=null){return new e9(t,e,n,s,r,i,o)}function Wu(t){const e=pe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>eg(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ha(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ar(s)).join(",")),e.ft=n}return e.ft}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Z6(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yf(t.startAt,e.startAt)&&yf(t.endAt,e.endAt)}function bl(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function t9(t,e,n,s,r,i,o,a){return new Cr(t,e,n,s,r,i,o,a)}function Qu(t){return new Cr(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ua(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function ig(t){return t.collectionGroup!==null}function Ys(t){const e=pe(t);if(e.dt===null){e.dt=[];const n=Ua(e),s=Yu(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(ft.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(ft.keyField(),i))}}}return e.dt}function Dn(t){const e=pe(t);if(!e._t)if(e.limitType==="F")e._t=_f(e.path,e.collectionGroup,Ys(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ys(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qs(i.field,o))}const s=e.endAt?new qo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qo(e.startAt.position,e.startAt.inclusive):null;e._t=_f(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Cl(t,e){e.getFirstInequalityField(),Ua(t);const n=t.filters.concat([e]);return new Cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function jo(t,e,n){return new Cr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ba(t,e){return Gu(Dn(t),Dn(e))&&t.limitType===e.limitType}function og(t){return`${Wu(Dn(t))}|lt:${t.limitType}`}function Tl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ng(s)).join(", ")}]`),Ha(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ar(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ar(s)).join(",")),`Target(${n})`}(Dn(t))}; limitType=${t.limitType})`}function Xu(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):Z.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Ys(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=gf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Ys(n),s)||n.endAt&&!function(r,i,o){const a=gf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Ys(n),s))}(t,e)}function n9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ag(t){return(e,n)=>{let s=!1;for(const r of Ys(t)){const i=s9(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function s9(t,e,n){const s=t.field.isKeyField()?Z.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?or(a,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(e)?"-0":e}}function lg(t){return{integerValue:""+t}}function r9(t,e){return U6(e)?lg(e):cg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function i9(t,e,n){return t instanceof Ko?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof mi?hg(t,e):t instanceof gi?dg(t,e):function(s,r){const i=ug(s,r),o=bf(i)+bf(s.gt);return wl(i)&&wl(s.gt)?lg(o):cg(s.yt,o)}(t,e)}function o9(t,e,n){return t instanceof mi?hg(t,e):t instanceof gi?dg(t,e):n}function ug(t,e){return t instanceof zo?wl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ko extends qa{}class mi extends qa{constructor(e){super(),this.elements=e}}function hg(t,e){const n=fg(e);for(const s of t.elements)n.some(r=>fn(r,s))||n.push(s);return{arrayValue:{values:n}}}class gi extends qa{constructor(e){super(),this.elements=e}}function dg(t,e){let n=fg(e);for(const s of t.elements)n=n.filter(r=>!fn(r,s));return{arrayValue:{values:n}}}class zo extends qa{constructor(e,n){super(),this.yt=e,this.gt=n}}function bf(t){return We(t.integerValue||t.doubleValue)}function fg(t){return zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function a9(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof mi&&s instanceof mi||n instanceof gi&&s instanceof gi?rr(n.elements,s.elements,fn):n instanceof zo&&s instanceof zo?fn(n.gt,s.gt):n instanceof Ko&&s instanceof Ko}(t.transform,e.transform)}class c9{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function pg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ju(t.key,cn.none()):new Vi(t.key,t.data,cn.none());{const n=t.data,s=xt.empty();let r=new Xe(ft.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ps(t.key,s,new an(r.toArray()),cn.none())}}function l9(t,e,n){t instanceof Vi?function(s,r,i){const o=s.value.clone(),a=Tf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ps?function(s,r,i){if(!go(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Tf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(mg(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Br(t,e,n,s){return t instanceof Vi?function(r,i,o,a){if(!go(r.precondition,i))return o;const c=r.value.clone(),l=Ef(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ps?function(r,i,o,a){if(!go(r.precondition,i))return o;const c=Ef(r.fieldTransforms,a,i),l=i.data;return l.setAll(mg(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return go(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function u9(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ug(s.transform,r||null);i!=null&&(n===null&&(n=xt.empty()),n.set(s.field,i))}return n||null}function Cf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rr(n,s,(r,i)=>a9(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends ja{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ps extends ja{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Tf(t,e,n){const s=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,o9(o,a,n[r]))}return s}function Ef(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,i9(i,o,e))}return s}class Ju extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h9 extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ae;function f9(t){switch(t){default:return ae();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function gg(t){if(t===void 0)return Rn("GRPC error has no .code"),E.UNKNOWN;switch(t){case ze.OK:return E.OK;case ze.CANCELLED:return E.CANCELLED;case ze.UNKNOWN:return E.UNKNOWN;case ze.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ze.INTERNAL:return E.INTERNAL;case ze.UNAVAILABLE:return E.UNAVAILABLE;case ze.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ze.NOT_FOUND:return E.NOT_FOUND;case ze.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ze.ABORTED:return E.ABORTED;case ze.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ze.DATA_LOSS:return E.DATA_LOSS;default:return ae()}}(Ae=ze||(ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Qm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p9=new Ze(Z.comparator);function Mn(){return p9}const yg=new Ze(Z.comparator);function Or(...t){let e=yg;for(const n of t)e=e.insert(n.key,n);return e}function vg(t){let e=yg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ws(){return qr()}function _g(){return qr()}function qr(){return new Tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const m9=new Ze(Z.comparator),g9=new Xe(Z.comparator);function Te(...t){let e=g9;for(const n of t)e=e.add(n);return e}const y9=new Xe(Re);function wg(){return y9}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ka(fe.min(),r,wg(),Mn(),Te())}}class Fi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Fi(s,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class bg{constructor(e,n){this.targetId=e,this.Et=n}}class Cg{constructor(e,n,s=vt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class If{constructor(){this.At=0,this.Rt=Sf(),this.bt=vt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Te(),n=Te(),s=Te();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ae()}}),new Fi(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Sf()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class v9{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Mn(),this.qt=Af(),this.Ut=new Xe(Re)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(bl(i))if(s===0){const o=new Z(i.path);this.Qt(n,o,ut.newNoDocument(o,fe.min()))}else xe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&bl(a.target)){const c=new Z(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ut.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=Te();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Ka(e,n,this.Ut,this.Lt,s);return this.Lt=Mn(),this.qt=Af(),this.Ut=new Xe(Re),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new If,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Xe(Re),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new If),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Af(){return new Ze(Z.comparator)}function Sf(){return new Ze(Z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _9=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w9=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),b9=(()=>({and:"AND",or:"OR"}))();class C9{constructor(e,n){this.databaseId=e,this.wt=n}}function Wo(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tg(t,e){return t.wt?e.toBase64():e.toUint8Array()}function T9(t,e){return Wo(t,e.toTimestamp())}function ln(t){return xe(!!t),fe.fromTimestamp(function(e){const n=Zn(e);return new Ye(n.seconds,n.nanos)}(t))}function Zu(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Eg(t){const e=Fe.fromString(t);return xe(kg(e)),e}function El(t,e){return Zu(t.databaseId,e.path)}function Oc(t,e){const n=Eg(e);if(n.get(1)!==t.databaseId.projectId)throw new q(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Ig(n))}function Il(t,e){return Zu(t.databaseId,e)}function E9(t){const e=Eg(t);return e.length===4?Fe.emptyPath():Ig(e)}function Al(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ig(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kf(t,e,n){return{name:El(t,e),fields:n.value.mapValue.fields}}function I9(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(xe(l===void 0||typeof l=="string"),vt.fromBase64String(l||"")):(xe(l===void 0||l instanceof Uint8Array),vt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:gg(c.code);return new q(l,c.message||"")}(o);n=new Cg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Oc(t,s.document.name),i=ln(s.document.updateTime),o=s.document.createTime?ln(s.document.createTime):fe.min(),a=new xt({mapValue:{fields:s.document.fields}}),c=ut.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new yo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Oc(t,s.document),i=s.readTime?ln(s.readTime):fe.min(),o=ut.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Oc(t,s.document),i=s.removedTargetIds||[];n=new yo([],i,r,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new d9(r),o=s.targetId;n=new bg(o,i)}}return n}function A9(t,e){let n;if(e instanceof Vi)n={update:kf(t,e.key,e.value)};else if(e instanceof Ju)n={delete:El(t,e.key)};else if(e instanceof Ps)n={update:kf(t,e.key,e.data),updateMask:P9(e.fieldMask)};else{if(!(e instanceof h9))return ae();n={verify:El(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ko)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof mi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw ae()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:T9(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ae()}(t,e.precondition)),n}function S9(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?ln(s.updateTime):ln(r);return i.isEqual(fe.min())&&(i=ln(r)),new c9(i,s.transformResults||[])}(n,e))):[]}function k9(t,e){return{documents:[Il(t,e.path)]}}function L9(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Il(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Il(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Sg(Gt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Hs(u.field),direction:M9(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Ha(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function R9(t){let e=E9(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){xe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const d=Ag(u);return d instanceof Gt&&j6(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new Qs(Us(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Ha(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(u){const d=!!u.before,h=u.values||[];return new qo(h,d)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const d=!u.before,h=u.values||[];return new qo(h,d)}(n.endAt)),t9(e,r,o,i,a,"F",c,l)}function D9(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ag(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Us(e.unaryFilter.field);return Ge.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Us(e.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Us(e.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Us(e.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(e){return Ge.create(Us(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(n=>Ag(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ae()}}(e.compositeFilter.op))}(t):ae()}function M9(t){return _9[t]}function O9(t){return w9[t]}function N9(t){return b9[t]}function Hs(t){return{fieldPath:t.canonicalString()}}function Us(t){return ft.fromServerFormat(t.fieldPath)}function Sg(t){return t instanceof Ge?function(e){if(e.op==="=="){if(mf(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NAN"}};if(pf(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(mf(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NAN"}};if(pf(e.value))return{unaryFilter:{field:Hs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hs(e.field),op:O9(e.op),value:e.value}}}(t):t instanceof Gt?function(e){const n=e.getFilters().map(s=>Sg(s));return n.length===1?n[0]:{compositeFilter:{op:N9(e.op),filters:n}}}(t):ae()}function P9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function kg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x9{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&l9(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Br(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=_g();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=pg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&rr(this.mutations,e.mutations,(n,s)=>Cf(n,s))&&rr(this.baseMutations,e.baseMutations,(n,s)=>Cf(n,s))}}class eh{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){xe(e.mutations.length===s.length);let r=m9;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new eh(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,r,i=fe.min(),o=fe.min(),a=vt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Is(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Is(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V9{constructor(e){this.ie=e}}function F9(t){const e=R9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9{constructor(){this.Je=new U9}addToCollectionParentIndex(e,n){return this.Je.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Jn.min())}updateCollectionGroup(e,n,s){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class U9{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Xe(Fe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Xe(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new cr(0)}static vn(){return new cr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B9{constructor(){this.changes=new Tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?L.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j9{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Br(s.mutation,r,an.empty(),Ye.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Or();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Mn();const o=qr(),a=qr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Ps)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),Br(u.mutation,l,u.mutation.getFieldMask(),Ye.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var d;return a.set(l,new q9(u,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=qr();let r=new Ze((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||an.empty();u=a.applyToLocalView(l,u),s.set(c,u);const d=(r.get(a.batchId)||Te()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,d=_g();u.forEach(h=>{if(!i.has(h)){const f=pg(n.get(h),s.get(h));f!==null&&d.set(h,f),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return L.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ig(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):L.resolve(ws());let a=-1,c=i;return o.next(l=>L.forEach(l,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(u)?L.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,Te())).next(u=>({batchId:a,changes:vg(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(s=>{let r=Or();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Or();return this.indexManager.getCollectionParents(e,r).next(o=>L.forEach(o,a=>{const c=function(l,u){return new Cr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,d)=>{i=i.insert(u,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ut.newInvalidDocument(l)))});let o=Or();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Br(l.mutation,c,an.empty(),Ye.now()),Xu(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return L.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:ln(s.createTime)}),L.resolve()}getNamedQuery(e,n){return L.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:F9(s.bundledQuery),readTime:ln(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(){this.overlays=new Ze(Z.comparator),this.es=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ws();return L.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),L.resolve()}getOverlaysForCollection(e,n,s){const r=ws(),i=n.length+1,o=new Z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return L.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ze((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ws(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ws(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return L.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new $9(n,s));let i=this.es.get(n);i===void 0&&(i=Te(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.ns=new Xe(et.ss),this.rs=new Xe(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new et(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new Z(new Fe([])),s=new et(n,e),r=new et(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new Z(new Fe([])),s=new et(n,e),r=new et(n,e+1);let i=Te();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return Z.comparator(e.key,n.key)||Re(e._s,n._s)}static os(e,n){return Re(e._s,n._s)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Xe(et.ss)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new x9(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),r=new et(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Xe(Re);return n.forEach(r=>{const i=new et(r,0),o=new et(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),L.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;Z.isDocumentKey(i)||(i=i.child(""));const o=new et(new Z(i),0);let a=new Xe(Re);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c._s)),!0)},o),L.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return L.forEach(n.mutations,r=>{const i=new et(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new et(n,0),r=this.gs.firstAfterOrEqual(s);return L.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G9{constructor(e){this.Es=e,this.docs=new Ze(Z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return L.resolve(s?s.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let s=Mn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ut.newInvalidDocument(r))}),L.resolve(s)}getAllFromCollection(e,n,s){let r=Mn();const i=new Z(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||$6(x6(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,n,s,r){ae()}As(e,n){return L.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Q9(this)}getSize(e){return L.resolve(this.size)}}class Q9 extends B9{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),L.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y9{constructor(e){this.persistence=e,this.Rs=new Tr(n=>Wu(n),Gu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new th,this.targetCount=0,this.vs=cr.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),L.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new cr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Dn(n),L.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),L.waitFor(i).next(()=>r)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return L.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),L.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),L.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return L.resolve(s)}containsKey(e,n){return L.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X9{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ku(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Y9(this),this.indexManager=new H9,this.remoteDocumentCache=function(s){return new G9(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new V9(n),this.Ns=new K9(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new W9(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){X("MemoryPersistence","Starting transaction:",e);const r=new J9(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return L.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class J9 extends F6{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Fs=new th,this.$s=null}static Bs(e){return new nh(e)}get Ls(){if(this.$s)return this.$s;throw ae()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),L.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),L.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Ls,s=>{const r=Z.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,fe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return L.or([()=>L.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=Te(),r=Te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z9{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(wf(n))return L.resolve(null);let s=Dn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=jo(n,null,"F"),s=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Te(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,jo(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,s,r){return wf(n)||r.isEqual(fe.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(uf()<=Le.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Tl(n)),this.Bi(e,o,n,P6(r,-1)))})}Fi(e,n){let s=new Xe(ag(e));return n.forEach((r,i)=>{Xu(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return uf()<=Le.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Tl(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ze(Re),this.Ui=new Tr(i=>Wu(i),Gu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j9(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function tC(t,e,n,s){return new eC(t,e,n,s)}async function Lg(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Te();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function nC(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,d=u.keys();let h=L.resolve();return d.forEach(f=>{h=h.next(()=>l.getEntry(a,f)).next(m=>{const y=c.docVersions.get(f);xe(y!==null),m.version.compareTo(y)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),l.addEntry(m)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Rg(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function sC(t,e){const n=pe(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((u,d)=>{const h=r.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,d)));let f=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(vt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),r=r.insert(d,f),function(m,y,_){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,f,u)&&a.push(n.Cs.updateTargetData(i,f))});let c=Mn(),l=Te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(rC(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!s.isEqual(fe.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(d=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return L.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=r,i))}function rC(t,e,n){let s=Te(),r=Te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Mn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function iC(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function oC(t,e){const n=pe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,L.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Is(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Sl(t,e,n){const s=pe(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$i(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Lf(t,e,n){const s=pe(t);let r=fe.min(),i=Te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=pe(a),d=u.Ui.get(l);return d!==void 0?L.resolve(u.qi.get(d)):u.Cs.getTargetData(c,l)}(s,o,Dn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:fe.min(),n?i:Te())).next(a=>(aC(s,n9(e),a),{documents:a,Hi:i})))}function aC(t,e,n){let s=t.Ki.get(e)||fe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Rf{constructor(){this.activeTargetIds=wg()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cC{constructor(){this.Lr=new Rf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Rf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);X("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(X("RestConnection","Received: ",c),c),c=>{throw vl("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=uC[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new I6;a.setWithCredentials(!0),a.listenOnce(C6.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Mc.NO_ERROR:const l=a.getResponseJson();X("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Mc.TIMEOUT:X("Connection",'RPC "'+e+'" timed out'),o(new q(E.DEADLINE_EXCEEDED,"Request time out"));break;case Mc.HTTP_ERROR:const u=a.getStatus();if(X("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const f=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(y)>=0?y:E.UNKNOWN}(h.status);o(new q(f,h.message))}else o(new q(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new q(E.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{X("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=w6(),o=b6(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new E6({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");X("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,d=!1;const h=new hC({Hr:m=>{d?X("Connection","Not sending because WebChannel is closed:",m):(u||(X("Connection","Opening WebChannel transport."),l.open(),u=!0),X("Connection","WebChannel sending:",m),l.send(m))},Jr:()=>l.close()}),f=(m,y,_)=>{m.listen(y,w=>{try{_(w)}catch(b){setTimeout(()=>{throw b},0)}})};return f(l,to.EventType.OPEN,()=>{d||X("Connection","WebChannel transport opened.")}),f(l,to.EventType.CLOSE,()=>{d||(d=!0,X("Connection","WebChannel transport closed"),h.io())}),f(l,to.EventType.ERROR,m=>{d||(d=!0,vl("Connection","WebChannel transport errored:",m),h.io(new q(E.UNAVAILABLE,"The operation could not be completed")))}),f(l,to.EventType.MESSAGE,m=>{var y;if(!d){const _=m.data[0];xe(!!_);const w=_,b=w.error||((y=w[0])===null||y===void 0?void 0:y.error);if(b){X("Connection","WebChannel received error:",b);const R=b.status;let j=function(ie){const ge=ze[ie];if(ge!==void 0)return gg(ge)}(R),J=b.message;j===void 0&&(j=E.INTERNAL,J="Unknown error status: "+R+" with message "+b.message),d=!0,h.io(new q(j,J)),l.close()}else X("Connection","WebChannel received:",_),h.ro(_)}}),f(o,T6.STAT_EVENT,m=>{m.stat===cf.PROXY?X("Connection","Detected buffering proxy"):m.stat===cf.NOPROXY&&X("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function Nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){return new C9(t,!0)}class Dg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&X("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Dg(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new q(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fC extends Mg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=I9(this.yt,e),s=function(r){if(!("targetChange"in r))return fe.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?fe.min():i.readTime?ln(i.readTime):fe.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Al(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=bl(a)?{documents:k9(r,a)}:{query:L9(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Tg(r,i.resumeToken):i.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=Wo(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=D9(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Al(this.yt),n.removeTarget=e,this.Bo(n)}}class pC extends Mg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=S9(e.writeResults,e.commitTime),s=ln(e.commitTime);return this.listener.Zo(s,n)}return xe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Al(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>A9(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new q(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(E.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(E.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class gC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Rn(n),this.ou=!1):X("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{xs(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=pe(a);c._u.add(4),await Hi(c),c.gu.set("Unknown"),c._u.delete(4),await Wa(c)}(this))})}),this.gu=new gC(s,r)}}async function Wa(t){if(xs(t))for(const e of t.wu)await e(!0)}async function Hi(t){for(const e of t.wu)await e(!1)}function Og(t,e){const n=pe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),oh(n)?ih(n):Er(n).ko()&&rh(n,e))}function Ng(t,e){const n=pe(t),s=Er(n);n.du.delete(e),s.ko()&&Pg(n,e),n.du.size===0&&(s.ko()?s.Fo():xs(n)&&n.gu.set("Unknown"))}function rh(t,e){t.yu.Ot(e.targetId),Er(t).zo(e)}function Pg(t,e){t.yu.Ot(e),Er(t).Ho(e)}function ih(t){t.yu=new v9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Er(t).start(),t.gu.uu()}function oh(t){return xs(t)&&!Er(t).No()&&t.du.size>0}function xs(t){return pe(t)._u.size===0}function xg(t){t.yu=void 0}async function vC(t){t.du.forEach((e,n)=>{rh(t,e)})}async function _C(t,e){xg(t),oh(t)?(t.gu.hu(e),ih(t)):t.gu.set("Unknown")}async function wC(t,e,n){if(t.gu.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Go(t,s)}else if(e instanceof yo?t.yu.Kt(e):e instanceof bg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(fe.min()))try{const s=await Rg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.du.get(c);l&&r.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(vt.EMPTY_BYTE_STRING,c.snapshotVersion)),Pg(r,a);const l=new Is(c.target,a,1,c.sequenceNumber);rh(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){X("RemoteStore","Failed to raise snapshot:",s),await Go(t,s)}}async function Go(t,e,n){if(!$i(e))throw e;t._u.add(1),await Hi(t),t.gu.set("Offline"),n||(n=()=>Rg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Wa(t)})}function $g(t,e){return e().catch(n=>Go(t,n,e))}async function Ga(t){const e=pe(t),n=es(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;bC(e);)try{const r=await iC(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,CC(e,r)}catch(r){await Go(e,r)}Vg(e)&&Fg(e)}function bC(t){return xs(t)&&t.fu.length<10}function CC(t,e){t.fu.push(e);const n=es(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Vg(t){return xs(t)&&!es(t).No()&&t.fu.length>0}function Fg(t){es(t).start()}async function TC(t){es(t).eu()}async function EC(t){const e=es(t);for(const n of t.fu)e.Xo(n.mutations)}async function IC(t,e,n){const s=t.fu.shift(),r=eh.from(s,e,n);await $g(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ga(t)}async function AC(t,e){e&&es(t).Yo&&await async function(n,s){if(r=s.code,f9(r)&&r!==E.ABORTED){const i=n.fu.shift();es(n).Mo(),await $g(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ga(n)}var r}(t,e),Vg(t)&&Fg(t)}async function Mf(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const s=xs(n);n._u.add(3),await Hi(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Wa(n)}async function SC(t,e){const n=pe(t);e?(n._u.delete(2),await Wa(n)):e||(n._u.add(2),await Hi(n),n.gu.set("Unknown"))}function Er(t){return t.pu||(t.pu=function(e,n,s){const r=pe(e);return r.su(),new fC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:vC.bind(null,t),Zr:_C.bind(null,t),Wo:wC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),oh(t)?ih(t):t.gu.set("Unknown")):(await t.pu.stop(),xg(t))})),t.pu}function es(t){return t.Iu||(t.Iu=function(e,n,s){const r=pe(e);return r.su(),new pC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:TC.bind(null,t),Zr:AC.bind(null,t),tu:EC.bind(null,t),Zo:IC.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ga(t)):(await t.Iu.stop(),t.fu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new ah(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),$i(t))return new q(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||Z.comparator(n.key,s.key):(n,s)=>Z.comparator(n.key,s.key),this.keyedMap=Or(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Xs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.Tu=new Ze(Z.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ae():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class lr{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new lr(e,n,Xs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.Au=void 0,this.listeners=[]}}class LC{constructor(){this.queries=new Tr(e=>og(e),Ba),this.onlineState="Unknown",this.Ru=new Set}}async function Hg(t,e){const n=pe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new kC),r)try{i.Au=await n.onListen(s)}catch(o){const a=ch(o,`Initialization of query '${Tl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&lh(n)}async function Ug(t,e){const n=pe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function RC(t,e){const n=pe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&lh(n)}function DC(t,e,n){const s=pe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function lh(t){t.Ru.forEach(e=>{e.next()})}class Bg{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new lr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=lr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e){this.key=e}}class jg{constructor(e){this.key=e}}class MC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Te(),this.mutatedKeys=Te(),this.Gu=ag(e),this.Qu=new Xs(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Of,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,d)=>{const h=r.get(u),f=Xu(this.query,d)?d:null,m=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;h&&f?h.data.isEqual(f.data)?m!==y&&(s.track({type:3,doc:f}),_=!0):this.Hu(h,f)||(s.track({type:2,doc:f}),_=!0,(c&&this.Gu(f,c)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),_=!0):h&&!f&&(s.track({type:1,doc:h}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(d,h){const f=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return f(d)-f(h)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new lr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Of,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Te(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new jg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new qg(s))}),n}tc(e){this.qu=e.Hi,this.Ku=Te();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return lr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class OC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class NC{constructor(e){this.key=e,this.nc=!1}}class PC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Tr(a=>og(a),Ba),this.rc=new Map,this.oc=new Set,this.uc=new Ze(Z.comparator),this.cc=new Map,this.ac=new th,this.hc={},this.lc=new Map,this.fc=cr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function xC(t,e){const n=zC(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await oC(n.localStore,Dn(e));n.isPrimaryClient&&Og(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await $C(n,e,s,a==="current",o.resumeToken)}return r}async function $C(t,e,n,s,r){t._c=(d,h,f)=>async function(m,y,_,w){let b=y.view.Wu(_);b.$i&&(b=await Lf(m.localStore,y.query,!1).then(({documents:J})=>y.view.Wu(J,b)));const R=w&&w.targetChanges.get(y.targetId),j=y.view.applyChanges(b,m.isPrimaryClient,R);return Pf(m,y.targetId,j.Xu),j.snapshot}(t,d,h,f);const i=await Lf(t.localStore,e,!0),o=new MC(e,i.Hi),a=o.Wu(i.documents),c=Fi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Pf(t,n,l.Xu);const u=new OC(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function VC(t,e){const n=pe(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Ba(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Sl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ng(n.remoteStore,s.targetId),kl(n,s.targetId)}).catch(xi)):(kl(n,s.targetId),await Sl(n.localStore,s.targetId,!0))}async function FC(t,e,n){const s=WC(t);try{const r=await function(i,o){const a=pe(i),c=Ye.now(),l=o.reduce((h,f)=>h.add(f.key),Te());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=Mn(),m=Te();return a.Gi.getEntries(h,l).next(y=>{f=y,f.forEach((_,w)=>{w.isValidDocument()||(m=m.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(y=>{u=y;const _=[];for(const w of o){const b=u9(w,u.get(w.key).overlayedDocument);b!=null&&_.push(new Ps(w.key,b,rg(b.value.mapValue),cn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,_,o)}).next(y=>{d=y;const _=y.applyToLocalDocumentSet(u,m);return a.documentOverlayCache.saveOverlays(h,y.batchId,_)})}).then(()=>({batchId:d.batchId,changes:vg(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ze(Re)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ui(s,r.changes),await Ga(s.remoteStore)}catch(r){const i=ch(r,"Failed to persist write");n.reject(i)}}async function Kg(t,e){const n=pe(t);try{const s=await sC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?xe(o.nc):r.removedDocuments.size>0&&(xe(o.nc),o.nc=!1))}),await Ui(n,s,e)}catch(s){await xi(s)}}function Nf(t,e,n){const s=pe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=pe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const d of u.listeners)d.bu(o)&&(c=!0)}),c&&lh(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HC(t,e,n){const s=pe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ze(Z.comparator);o=o.insert(i,ut.newNoDocument(i,fe.min()));const a=Te().add(i),c=new Ka(fe.min(),new Map,new Xe(Re),o,a);await Kg(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),uh(s)}else await Sl(s.localStore,e,!1).then(()=>kl(s,e,n)).catch(xi)}async function UC(t,e){const n=pe(t),s=e.batch.batchId;try{const r=await nC(n.localStore,e);Wg(n,s,null),zg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ui(n,r)}catch(r){await xi(r)}}async function BC(t,e,n){const s=pe(t);try{const r=await function(i,o){const a=pe(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(xe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);Wg(s,e,n),zg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ui(s,r)}catch(r){await xi(r)}}function zg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Wg(t,e,n){const s=pe(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Gg(t,s)})}function Gg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ng(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),uh(t))}function Pf(t,e,n){for(const s of n)s instanceof qg?(t.ac.addReference(s.key,e),qC(t,s)):s instanceof jg?(X("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Gg(t,s.key)):ae()}function qC(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(X("SyncEngine","New document in limbo: "+n),t.oc.add(s),uh(t))}function uh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Z(Fe.fromString(e)),s=t.fc.next();t.cc.set(s,new NC(n)),t.uc=t.uc.insert(n,s),Og(t.remoteStore,new Is(Dn(Qu(n.path)),s,2,Ku.at))}}async function Ui(t,e,n){const s=pe(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=sh.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const l=pe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>L.forEach(c,d=>L.forEach(d.Si,h=>l.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>L.forEach(d.Di,h=>l.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!$i(u))throw u;X("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const d=u.targetId;if(!u.fromCache){const h=l.qi.get(d),f=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(f);l.qi=l.qi.insert(d,m)}}}(s.localStore,i))}async function jC(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const s=await Lg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new q(E.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ui(n,s.ji)}}function KC(t,e){const n=pe(t),s=n.cc.get(e);if(s&&s.nc)return Te().add(s.key);{let r=Te();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function zC(t){const e=pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HC.bind(null,e),e.sc.Wo=RC.bind(null,e.eventManager),e.sc.wc=DC.bind(null,e.eventManager),e}function WC(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BC.bind(null,e),e}class GC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=za(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return tC(this.persistence,new Z9,e.initialUser,this.yt)}yc(e){return new X9(nh.Bs,this.yt)}gc(e){return new cC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Nf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jC.bind(null,this.syncEngine),await SC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LC}createDatastore(e){const n=za(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new dC(r));var r;return function(i,o,a,c){return new mC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Nf(this.syncEngine,a,0),o=Df.C()?new Df:new lC,new yC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new PC(s,r,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=pe(e);X("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Hi(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e,n){if(!n)throw new q(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YC(t,e,n,s){if(e===!0&&s===!0)throw new q(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xf(t){if(!Z.isDocumentKey(t))throw new q(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $f(t){if(Z.isDocumentKey(t))throw new q(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function ts(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new q(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function XC(t,e){if(e<=0)throw new q(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;class Ff{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new q(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ff({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ff(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new A6;switch(n.type){case"gapi":const s=n.client;return new R6(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Vf.get(e);n&&(X("ComponentProvider","Removing Datastore"),Vf.delete(e),n.terminate())}(this),Promise.resolve()}}function JC(t,e,n,s={}){var r;const i=(t=ts(t,Ya))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&vl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=lt.MOCK_USER;else{o=Xw(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new q(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(c)}t._authCredentials=new S6(new Wm(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class os{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new os(this.firestore,e,this._query)}}class Gn extends os{constructor(e,n,s){super(e,n,Qu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new Z(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function hh(t,e,...n){if(t=Je(t),Qg("collection","path",e),t instanceof Ya){const s=Fe.fromString(e,...n);return $f(s),new Gn(t,null,s)}{if(!(t instanceof St||t instanceof Gn))throw new q(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return $f(s),new Gn(t.firestore,null,s)}}function dh(t,e,...n){if(t=Je(t),arguments.length===1&&(e=Gm.R()),Qg("doc","path",e),t instanceof Ya){const s=Fe.fromString(e,...n);return xf(s),new St(t,null,new Z(s))}{if(!(t instanceof St||t instanceof Gn))throw new q(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return xf(s),new St(t.firestore,t instanceof Gn?t.converter:null,new Z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=lt.UNAUTHENTICATED,this.clientId=Gm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{X("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(X("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ch(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function eT(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Lg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function tT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nT(t);X("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Mf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Mf(e.remoteStore,i)),t.onlineComponents=e}async function nT(t){return t.offlineComponents||(X("FirestoreClient","Using default OfflineComponentProvider"),await eT(t,new GC)),t.offlineComponents}async function Xg(t){return t.onlineComponents||(X("FirestoreClient","Using default OnlineComponentProvider"),await tT(t,new QC)),t.onlineComponents}function sT(t){return Xg(t).then(e=>e.syncEngine)}async function Jg(t){const e=await Xg(t),n=e.eventManager;return n.onListen=xC.bind(null,e.syncEngine),n.onUnlisten=VC.bind(null,e.syncEngine),n}function rT(t,e,n={}){const s=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Yg({next:d=>{i.enqueueAndForget(()=>Ug(r,u));const h=d.docs.has(o);!h&&d.fromCache?c.reject(new q(E.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?c.reject(new q(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new Bg(Qu(o.path),l,{includeMetadataChanges:!0,Nu:!0});return Hg(r,u)}(await Jg(t),t.asyncQueue,e,n,s)),s.promise}function iT(t,e,n={}){const s=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new Yg({next:d=>{i.enqueueAndForget(()=>Ug(r,u)),d.fromCache&&a.source==="server"?c.reject(new q(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),u=new Bg(o,l,{includeMetadataChanges:!0,Nu:!0});return Hg(r,u)}(await Jg(t),t.asyncQueue,e,n,s)),s.promise}class oT{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Dg(this,"async_queue_retry"),this.Wc=()=>{const n=Nc();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Nc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Sn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$i(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Rn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=ah.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&ae()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Bi extends Ya{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new oT,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zg(this),this._firestoreClient.terminate()}}function aT(t,e){const n=typeof t=="object"?t:Ca(),s=typeof t=="string"?t:e||"(default)",r=ss(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Gw("firestore");i&&JC(r,...i)}return r}function fh(t){return t._firestoreClient||Zg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new H6(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ZC(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ur(vt.fromBase64String(e))}catch(n){throw new q(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ur(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=/^__.*__$/;class lT{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class gh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new gh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Qo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(ty(this.sa)&&cT.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class uT{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||za(e)}da(e,n,s,r=!1){return new gh({sa:e,methodName:n,fa:s,path:ft.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ny(t){const e=t._freezeSettings(),n=za(t._databaseId);return new uT(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hT(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);iy("Data must be an object, but it was:",o,s);const a=sy(s,o);let c,l;if(i.merge)c=new an(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const d of i.mergeFields){const h=fT(e,d,n);if(!o.contains(h))throw new q(E.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);mT(u,h)||u.push(h)}c=new an(u),l=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=o.fieldTransforms;return new lT(new xt(a),c,l)}function dT(t,e,n,s=!1){return yh(n,t.da(s?4:3,e))}function yh(t,e){if(ry(t=Je(t)))return iy("Unsupported field value:",e,t),sy(t,e);if(t instanceof ey)return function(n,s){if(!ty(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=yh(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return r9(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ye.fromDate(n);return{timestampValue:Wo(s.yt,r)}}if(n instanceof Ye){const r=new Ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wo(s.yt,r)}}if(n instanceof mh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ur)return{bytesValue:Tg(s.yt,n._byteString)};if(n instanceof St){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Zu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Qa(n)}`)}(t,e)}function sy(t,e){const n={};return Qm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(s,r)=>{const i=yh(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof mh||t instanceof ur||t instanceof St||t instanceof ey)}function iy(t,e,n){if(!ry(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qa(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function fT(t,e,n){if((e=Je(e))instanceof ph)return e._internalPath;if(typeof e=="string")return oy(t,e);throw Qo("Field path arguments must be of type string or ",t,!1,void 0,n)}const pT=new RegExp("[~\\*/\\[\\]]");function oy(t,e,n){if(e.search(pT)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ph(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new q(E.INVALID_ARGUMENT,a+t+c)}function mT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gT extends ay{data(){return super.data()}}function Xa(t,e){return typeof e=="string"?oy(t,e):e instanceof ph?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vh{}class _h extends vh{}function cy(t,e,...n){let s=[];e instanceof vh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof wh).length,o=r.filter(a=>a instanceof Ja).length;if(i>1||i>0&&o>0)throw new q(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ja extends _h{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ja(e,n,s)}_apply(e){const n=this._parse(e);return hy(e._query,n),new os(e.firestore,e.converter,Cl(e._query,n))}_parse(e){const n=ny(e.firestore);return function(r,i,o,a,c,l,u){let d;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new q(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Uf(u,l);const h=[];for(const f of u)h.push(Hf(a,r,f));d={arrayValue:{values:h}}}else d=Hf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Uf(u,l),d=dT(o,i,u,l==="in"||l==="not-in");return Ge.create(c,l,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vT(t,e,n){const s=e,r=Xa("where",t);return Ja._create(r,s,n)}class wh extends vh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Gt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)hy(i,a),i=Cl(i,a)}(e._query,n),new os(e.firestore,e.converter,Cl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bh extends _h{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bh(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new q(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Qs(r,i);return function(a,c){if(Yu(a)===null){const l=Ua(a);l!==null&&dy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new os(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Cr(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ly(t,e="asc"){const n=e,s=Xa("orderBy",t);return bh._create(s,n)}class Ch extends _h{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Ch(e,n,s)}_apply(e){return new os(e.firestore,e.converter,jo(e._query,this._limit,this._limitType))}}function uy(t){return XC("limit",t),Ch._create("limit",t,"F")}function Hf(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new q(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ig(e)&&n.indexOf("/")!==-1)throw new q(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Fe.fromString(n));if(!Z.isDocumentKey(s))throw new q(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ff(t,new Z(s))}if(n instanceof St)return ff(t,n._key);throw new q(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Uf(t,e){if(!Array.isArray(t)||t.length===0)throw new q(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new q(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function hy(t,e){if(e.isInequality()){const s=Ua(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new q(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Yu(t);i!==null&&dy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dy(t,e,n){if(!n.isEqual(e))throw new q(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class _T{convertValue(e,n="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){const s={};return br(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new mh(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);xe(kg(s));const r=new di(s.get(1),s.get(3)),i=new Z(s.popFirst(5));return r.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fy extends ay{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Xa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vo extends fy{data(e={}){return super.data(e)}}class bT{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Nr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vo(this._firestore,this._userDataWriter,s.key,s,new Nr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:CT(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){t=ts(t,St);const e=ts(t.firestore,Bi);return rT(fh(e),t._key).then(n=>AT(e,t,n))}class py extends _T{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Th(t){t=ts(t,os);const e=ts(t.firestore,Bi),n=fh(e),s=new py(e);return yT(t._query),iT(n,t._query).then(r=>new bT(e,s,t,r))}function ET(t,e,n){t=ts(t,St);const s=ts(t.firestore,Bi),r=wT(t.converter,e,n);return my(s,[hT(ny(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,cn.none())])}function IT(t){return my(ts(t.firestore,Bi),[new Ju(t._key,cn.none())])}function my(t,e){return function(n,s){const r=new Sn;return n.asyncQueue.enqueueAndForget(async()=>FC(await sT(n),s,r)),r.promise}(fh(t),e)}function AT(t,e,n){const s=n.docs.get(e._key),r=new py(t);return new fy(t,r,e._key,s,new Nr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){wr=n})(Ai),Ut(new Ot("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Bi(new k6(n.getProvider("auth-internal")),new M6(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),At(lf,"3.8.0",t),At(lf,"3.8.0","esm2017")})();const Ir=aT(hu),gy=async(t,e,n)=>{try{await ET(dh(Ir,t,e),n,{merge:!0})}catch(s){console.error("Error adding document: ",s)}},ST=async t=>{const e=await Th(hh(Ir,t)),n=[];return e.forEach(s=>{n.push(s.data())}),n},kT=async(t,e,n=!1,s)=>{const r=cy(hh(Ir,t),ly(e,n?"desc":"asc"),uy(s)),i=await Th(r),o=[];return i.forEach(a=>{o.push(a.data())}),o},LT=async(t,e,n,s,r,i=!1,o)=>{const a=cy(hh(Ir,t),vT(e,n,s),ly(r,i?"desc":"asc"),uy(o)),c=await Th(a),l=[];return c.forEach(u=>{l.push(u.data())}),l},RT=async(t,e)=>{const n=dh(Ir,t,e);return(await TT(n)).data()},DT=async(t,e)=>await IT(dh(Ir,t,e)),MT=$0(),yy=bb(hu),OT="users/messaging/tokens",NT=xw(),vy=async()=>await Cb(yy,{vapidKey:"BAzyuaAmkBwEKjpIk5o7t_JNF9JBFBtQykGkRSSzx0SyoGH47-q0CHkGfGglnPjnSI8ri0jiospmdVcgVX2aWj8"}),Ll=yr([]);Tb(yy,t=>{var e,n,s;if(t!=null&&t.notification&&(console.log(`msgCached=${Ll.value.length}... +1:`,t),t!=null&&t.notification)){const r=((e=t==null?void 0:t.notification)==null?void 0:e.title)+" "+((n=t==null?void 0:t.notification)==null?void 0:n.body),i=NT(r,{timeout:12241,type:Et.SUCCESS,icon:(s=t==null?void 0:t.notification)==null?void 0:s.icon});Ll.value.push({...t.notification,nID:i})}});const PT=async t=>{const n={token:await vy(),lastLoginAt:MT().format("X"),displayName:t==null?void 0:t.displayName,photoURL:t==null?void 0:t.photoURL,email:t==null?void 0:t.email};Object.values(n).filter(r=>r).length==5?gy(OT,n.token,n):console.log("tokenNOT saved",n)};function Eh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function _y(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xT=_y,wy=new ns("auth","Firebase",_y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new wa("@firebase/auth");function _o(t,...e){Bf.logLevel<=Le.ERROR&&Bf.error(`Auth (${Ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw Ih(t,...e)}function un(t,...e){return Ih(t,...e)}function by(t,e,n){const s=Object.assign(Object.assign({},xT()),{[e]:n});return new ns("auth","Firebase",s).create(e,{appName:t.name})}function $T(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&pn(t,"argument-error"),by(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ih(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wy.create(t,...e)}function le(t,e,...n){if(!t)throw Ih(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function On(t,e){t||Cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;function Tn(t){On(t instanceof Function,"Expected a class definition");let e=qf.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qf.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t,e){const n=ss(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(si(i,e!=null?e:{}))return r;pn(r,"already-initialized")}return n.initialize({options:e})}function FT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HT(){return jf()==="http:"||jf()==="https:"}function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HT()||t0()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Uw()||Bw()}get(){return UT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new qi(3e4,6e4);function KT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Za(t,e,n,s,r={}){return Ty(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ii(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Cy.fetch()(Ey(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Ty(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},qT),e);try{const r=new WT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ro(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw by(t,u,l);pn(t,u)}}catch(r){if(r instanceof Yt)throw r;pn(t,"network-request-failed")}}async function zT(t,e,n,s,r={}){const i=await Za(t,e,n,s,r);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ey(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ah(t.config,r):`${t.config.apiScheme}://${r}`}class WT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(un(this.auth,"network-request-failed")),jT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=un(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e){return Za(t,"POST","/v1/accounts:delete",e)}async function QT(t,e){return Za(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YT(t,e=!1){const n=Je(t),s=await n.getIdToken(e),r=Sh(s);le(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jr(Pc(r.auth_time)),issuedAtTime:jr(Pc(r.iat)),expirationTime:jr(Pc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Pc(t){return Number(t)*1e3}function Sh(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const r=e0(n);return r?JSON.parse(r):(_o("Failed to decode base64 JWT payload"),null)}catch(r){return _o("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function XT(t){const e=Sh(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&JT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function JT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await yi(t,QT(n,{idToken:s}));le(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nE(i.providerUserInfo):[],a=tE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Iy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function eE(t){const e=Je(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function nE(t){return t.map(e=>{var{providerId:n}=e,s=Eh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){const n=await Ty(t,{},async()=>{const s=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Ey(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Cy.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):XT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await sE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new vi;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(le(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class As{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Iy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YT(this,e)}reload(){return eE(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new As(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yi(this,GT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:j,isAnonymous:J,providerData:ie,stsTokenManager:ge}=n;le(R&&ge,e,"internal-error");const W=vi.fromJSON(this.name,ge);le(typeof R=="string",e,"internal-error"),$n(d,e.name),$n(h,e.name),le(typeof j=="boolean",e,"internal-error"),le(typeof J=="boolean",e,"internal-error"),$n(f,e.name),$n(m,e.name),$n(y,e.name),$n(_,e.name),$n(w,e.name),$n(b,e.name);const Y=new As({uid:R,auth:e,email:h,emailVerified:j,displayName:d,isAnonymous:J,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:W,createdAt:w,lastLoginAt:b});return ie&&Array.isArray(ie)&&(Y.providerData=ie.map(B=>Object.assign({},B))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,n,s=!1){const r=new vi;r.updateFromServerResponse(n);const i=new As({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yo(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ay.type="NONE";const Kf=Ay;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=wo(this.userKey,r.apiKey,i),this.fullPersistenceKey=wo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?As._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Js(Tn(Kf),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Tn(Kf);const o=wo(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=As._fromJSON(e,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Js(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Js(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dy(e))return"Blackberry";if(My(e))return"Webos";if(kh(e))return"Safari";if((e.includes("chrome/")||ky(e))&&!e.includes("edge/"))return"Chrome";if(Ry(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sy(t=yt()){return/firefox\//i.test(t)}function kh(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ky(t=yt()){return/crios\//i.test(t)}function Ly(t=yt()){return/iemobile/i.test(t)}function Ry(t=yt()){return/android/i.test(t)}function Dy(t=yt()){return/blackberry/i.test(t)}function My(t=yt()){return/webos/i.test(t)}function ec(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rE(t=yt()){var e;return ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iE(){return qw()&&document.documentMode===10}function Oy(t=yt()){return ec(t)||Ry(t)||My(t)||Dy(t)||/windows phone/i.test(t)||Ly(t)}function oE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e=[]){let n;switch(t){case"Browser":n=zf(yt());break;case"Worker":n=`${zf(yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ai}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new aE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ns("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return le(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function tc(t){return Je(t)}class Wf{constructor(e){this.auth=e,this.observer=null,this.addObserver=n5(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lE(t,e,n){const s=tc(t);le(s._canInitEmulator,s,"emulator-config-failed"),le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Py(e),{host:o,port:a}=uE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||hE()}function Py(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uE(t){const e=Py(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Gf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Gf(o)}}}function Gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return zT(t,"POST","/v1/accounts:signInWithIdp",KT(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="http://localhost";class Os extends xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Eh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Zs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:dE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ji{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Os._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ji{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ji{constructor(){super("twitter.com")}static credential(e,n){return Os._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jn.credential(n,s)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await As._fromIdTokenResponse(e,s,r),o=Qf(s);return new hr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Qf(s);return new hr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Xo(e,n,s,r)}}function $y(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(t,i,e,s):i})}async function fE(t,e,n=!1){const s=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await yi(t,$y(s,r,e,t),n);le(i.idToken,s,"internal-error");const o=Sh(i.idToken);le(o,s,"internal-error");const{sub:a}=o;return le(t.uid===a,s,"user-mismatch"),hr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(t,e,n=!1){const s="signIn",r=await $y(t,s,e),i=await hr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function gE(t,e,n,s){return Je(t).onIdTokenChanged(e,n,s)}function yE(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function vE(t,e,n,s){return Je(t).onAuthStateChanged(e,n,s)}function _E(t){return Je(t).signOut()}const Jo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){const t=yt();return kh(t)||ec(t)}const bE=1e3,CE=10;class Fy extends Vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wE()&&oE(),this.fallbackToPolling=Oy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);iE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,CE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fy.type="LOCAL";const TE=Fy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy extends Vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hy.type="SESSION";const Uy=Hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new nc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await EE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Rh("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return window}function AE(t){hn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function SE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LE(){return By()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy="firebaseLocalStorageDb",RE=1,Zo="firebaseLocalStorage",jy="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function DE(){const t=indexedDB.deleteDatabase(qy);return new Ki(t).toPromise()}function Dl(){const t=indexedDB.open(qy,RE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zo,{keyPath:jy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zo)?e(s):(s.close(),await DE(),e(await Dl()))})})}async function Yf(t,e,n){const s=sc(t,!0).put({[jy]:e,value:n});return new Ki(s).toPromise()}async function ME(t,e){const n=sc(t,!1).get(e),s=await new Ki(n).toPromise();return s===void 0?null:s.value}function Xf(t,e){const n=sc(t,!0).delete(e);return new Ki(n).toPromise()}const OE=800,NE=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>NE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await SE(),!this.activeServiceWorker)return;this.sender=new IE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dl();return await Yf(e,Jo,"1"),await Xf(e,Jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ME(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=sc(r,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),OE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const PE=Ky;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $E(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=un("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",xE().appendChild(s)})}function VE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t,e){return e?Tn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends xy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FE(t){return mE(t.auth,new Dh(t),t.bypassAuthState)}function HE(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),pE(n,new Dh(t),t.bypassAuthState)}async function UE(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),fE(n,new Dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FE;case"linkViaPopup":case"linkViaRedirect":return UE;case"reauthViaPopup":case"reauthViaRedirect":return HE;default:pn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new qi(2e3,1e4);async function qE(t,e,n){const s=tc(t);$T(t,e,Lh);const r=zy(s,n);return new bs(s,"signInViaPopup",e,r).executeNotNull()}class bs extends Wy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BE.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="pendingRedirect",bo=new Map;class KE extends Wy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const s=await zE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zE(t,e){const n=QE(e),s=GE(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function WE(t,e){bo.set(t._key(),e)}function GE(t){return Tn(t._redirectPersistence)}function QE(t){return wo(jE,t.config.apiKey,t.name)}async function YE(t,e,n=!1){const s=tc(t),r=zy(s,e),o=await new KE(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=10*60*1e3;class JE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(un(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jf(e))}saveEventToCache(e){this.cachedEventUids.add(Jf(e)),this.lastProcessedEventTime=Date.now()}}function Jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e7(t,e={}){return Za(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n7=/^https?/;async function s7(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e7(t);for(const n of e)try{if(r7(n))return}catch{}pn(t,"unauthorized-domain")}function r7(t){const e=Rl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!n7.test(n))return!1;if(t7.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i7=new qi(3e4,6e4);function Zf(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o7(t){return new Promise((e,n)=>{var s,r,i;function o(){Zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(un(t,"network-request-failed"))},timeout:i7.get()})}if(!((r=(s=hn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const a=VE("iframefcb");return hn()[a]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},$E(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Co=null,e})}let Co=null;function a7(t){return Co=Co||o7(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c7=new qi(5e3,15e3),l7="__/auth/iframe",u7="emulator/auth/iframe",h7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f7(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ah(e,u7):`https://${t.config.authDomain}/${l7}`,s={apiKey:e.apiKey,appName:t.name,v:Ai},r=d7.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ii(s).slice(1)}`}async function p7(t){const e=await a7(t),n=hn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:f7(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h7,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),a=hn().setTimeout(()=>{i(o)},c7.get());function c(){hn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g7=500,y7=600,v7="_blank",_7="http://localhost";class ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w7(t,e,n,s=g7,r=y7){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},m7),{width:s.toString(),height:r.toString(),top:i,left:o}),l=yt().toLowerCase();n&&(a=ky(l)?v7:n),Sy(l)&&(e=e||_7,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(rE(l)&&a!=="_self")return b7(e||"",a),new ep(null);const d=window.open(e||"",a,u);le(d,t,"popup-blocked");try{d.focus()}catch{}return new ep(d)}function b7(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C7="__/auth/handler",T7="emulator/auth/handler";function tp(t,e,n,s,r,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ai,eventId:r};if(e instanceof Lh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",t5(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ji){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${E7(t)}?${Ii(a).slice(1)}`}function E7({config:t}){return t.emulator?Ah(t,T7):`https://${t.authDomain}/${C7}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="webStorageSupport";class I7{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=YE,this._overrideRedirectResult=WE}async _openPopup(e,n,s,r){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=tp(e,n,s,Rl(),r);return w7(e,o,Rh())}async _openRedirect(e,n,s,r){return await this._originValidation(e),AE(tp(e,n,s,Rl(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(On(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await p7(e),s=new JE(e);return n.register("authEvent",r=>(le(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=s7(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oy()||kh()||ec()}}const A7=I7;var np="@firebase/auth",sp="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S7{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k7(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function L7(t){Ut(new Ot("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{le(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),le(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(t)},u=new cE(a,c,l);return FT(u,n),u})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ut(new Ot("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(s=>new S7(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(np,sp,k7(t)),At(np,sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R7=5*60,D7=r0("authIdTokenMaxAge")||R7;let rp=null;const M7=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>D7)return;const r=n==null?void 0:n.token;rp!==r&&(rp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Qy(t=Ca()){const e=ss(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VT(t,{popupRedirectResolver:A7,persistence:[PE,TE,Uy]}),s=r0("authTokenSyncURL");if(s){const i=M7(s);yE(n,i,()=>i(n.currentUser)),gE(n,o=>i(o))}const r=s0("auth");return r&&lE(n,`http://${r}`),n}L7("Browser");const Lt=yr({isLoading:!1,hasFailed:!1,user:{}}),O7=async(t=!1)=>{console.log("auth goTime",t?"goIn":"goOut");const e=Qy();if(t)return _E(e),Lt.value.user={},Lt.value;const n=new wn;Lt.value.isLoading=!0,Lt.value.hasFailed=!1,console.log("auth TRY");try{console.log("auth CHECK");const s=await qE(e,n);Lt.value.user=s.user}catch(s){console.log("auth ERROR",s),Lt.value.hasFailed=!0}finally{Lt.value.isLoading=!1}return console.log("auth DONE",Lt.value),Lt.value};vE(Qy(),t=>{Lt.value.isLoading=!1,Lt.value.hasFailed=!1,Lt.value.user=t!=null?t:{}});const Xt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},N7={},P7={id:"bul1",viewBox:"0 0 43.39169 8.7312555",class:"fill-current h-[1em] self-center pb-0.5 -mr-0.5"},x7=su('<g class="bul" data-v-f17367da><path id="path120885" d="m 3.846456,5.36649 q 0,-0.991397 -0.315023,-1.496361 Q 3.21641,3.365166 2.600261,3.365166 q -0.620781,0 -0.940437,0.509596 -0.319656,0.504964 -0.319656,1.491728 0,0.982131 0.319656,1.491728 0.319656,0.509596 0.940437,0.509596 0.616149,0 0.931172,-0.504964 Q 3.846456,6.357887 3.846456,5.36649 Z M 1.340168,3.430023 Q 1.544007,3.050142 1.900725,2.846304 2.262075,2.642465 2.73461,2.642465 q 0.935804,0 1.473197,0.722701 0.537392,0.718067 0.537392,1.982793 0,1.283257 -0.542025,2.015223 -0.537393,0.727333 -1.47783,0.727333 -0.463269,0 -0.819987,-0.199206 Q 1.553272,7.68747 1.340168,7.302956 v 0.65321 H 0.4877525 V 0.747693 H 1.340168 Z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120887" d="M 5.332149,5.991904 V 2.776813 h 0.852416 v 3.215091 q 0,0.699537 0.245533,1.028458 0.250165,0.328921 0.769027,0.328921 0.602251,0 0.921907,-0.421575 Q 8.440688,6.5015 8.440688,5.709309 V 2.776813 H 9.297736 V 7.956166 H 8.440688 V 7.177874 Q 8.213685,7.627245 7.819906,7.85888 7.43076,8.090515 6.907265,8.090515 q -0.796823,0 -1.18597,-0.518862 Q 5.332149,7.048158 5.332149,5.991904 Z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120889" d="m 11.04792,6.075292 q 0,0.574454 0.208471,0.866314 0.213104,0.29186 0.625414,0.29186 h 0.996029 v 0.7227 h -1.079418 q -0.764394,0 -1.18597,-0.491065 Q 10.195504,6.974035 10.195504,6.075292 V 1.363841 H 8.828859 V 0.696733 h 2.219061 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path></g><path id="d1" d="m 12.30943,4.426053 q 0,-0.574454 0.398412,-0.968233 0.398412,-0.398412 0.977499,-0.398412 0.574454,0 0.972865,0.398412 0.403045,0.398411 0.403045,0.968233 0,0.574454 -0.403045,0.977498 -0.403044,0.398412 -0.982131,0.398412 -0.574454,0 -0.972866,-0.393779 Q 12.30943,5.009772 12.30943,4.426053 Z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" class="d" data-v-f17367da></path><g id="bul2" class="bul" data-v-f17367da><path id="path120893" d="m 19.483888,5.36649 q 0,-0.991397 -0.315024,-1.496361 -0.315023,-0.504963 -0.931171,-0.504963 -0.620782,0 -0.940437,0.509596 Q 16.9776,4.379726 16.9776,5.36649 q 0,0.982131 0.319656,1.491728 0.319655,0.509596 0.940437,0.509596 0.616148,0 0.931171,-0.504964 0.315024,-0.504963 0.315024,-1.49636 z M 16.9776,3.430023 q 0.203838,-0.379881 0.560556,-0.583719 0.36135,-0.203839 0.833885,-0.203839 0.935804,0 1.473197,0.722701 0.537392,0.718067 0.537392,1.982793 0,1.283257 -0.542025,2.015223 -0.537392,0.727333 -1.47783,0.727333 -0.463269,0 -0.819987,-0.199206 Q 17.190704,7.68747 16.9776,7.302956 v 0.65321 H 16.125184 V 0.747693 H 16.9776 Z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120895" d="M 20.969581,5.991904 V 2.776813 h 0.852416 v 3.215091 q 0,0.699537 0.245532,1.028458 0.250166,0.328921 0.769028,0.328921 0.60225,0 0.921906,-0.421575 Q 24.078119,6.5015 24.078119,5.709309 V 2.776813 h 0.857049 V 7.956166 H 24.078119 V 7.177874 q -0.227002,0.449371 -0.620781,0.681006 -0.389146,0.231635 -0.912641,0.231635 -0.796824,0 -1.18597,-0.518862 -0.389146,-0.523495 -0.389146,-1.579749 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120897" d="m 26.554654,6.075292 q 0,0.574454 0.208471,0.866314 0.213104,0.29186 0.625414,0.29186 h 0.996029 v 0.7227 H 27.30515 q -0.764394,0 -1.18597,-0.491065 Q 25.702238,6.974035 25.702238,6.075292 V 1.363841 H 24.335593 V 0.696733 h 2.219061 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path></g><path id="d2" d="m 27.816164,4.426053 q 0,-0.574454 0.398412,-0.968233 0.398412,-0.398412 0.977498,-0.398412 0.574455,0 0.972866,0.398412 0.403045,0.398411 0.403045,0.968233 0,0.574454 -0.403045,0.977498 -0.403044,0.398412 -0.982131,0.398412 -0.574454,0 -0.972866,-0.393779 -0.393779,-0.398412 -0.393779,-0.982131 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" class="d" data-v-f17367da></path><g id="ian" data-v-f17367da><path id="path120901" d="m 31.046675,2.767548 h 2.182 v 4.526143 h 1.690934 V 7.956166 H 30.685325 V 7.293691 h 1.690934 V 3.430023 h -1.329584 z m 1.329584,-2.019855 h 0.852416 v 1.079418 h -0.852416 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120903" d="m 36.816112,5.347959 h -0.282594 q -0.745864,0 -1.125745,0.264064 -0.375248,0.259431 -0.375248,0.778293 0,0.467902 0.282594,0.727333 0.282594,0.259431 0.782925,0.259431 0.70417,0 1.107215,-0.486433 Q 37.608303,6.399581 37.612936,5.5379 V 5.347959 Z M 38.469984,4.995874 V 7.956166 H 37.612936 V 7.187139 q -0.273329,0.46327 -0.690272,0.685639 -0.41231,0.217737 -1.005295,0.217737 -0.792191,0 -1.264725,-0.444739 -0.472535,-0.449372 -0.472535,-1.199868 0,-0.866314 0.579087,-1.315686 0.583719,-0.449371 1.709464,-0.449371 h 1.144276 V 4.546503 q -0.0046,-0.620781 -0.315024,-0.898743 -0.31039,-0.282594 -0.991396,-0.282594 -0.435474,0 -0.880212,0.125082 -0.444739,0.125083 -0.866314,0.365983 V 3.003815 q 0.472535,-0.180675 0.903375,-0.268696 0.435474,-0.09265 0.843151,-0.09265 0.643944,0 1.097948,0.189941 0.458637,0.18994 0.741232,0.569821 0.176042,0.231635 0.250165,0.574454 0.07412,0.338187 0.07412,1.019193 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path><path id="path120905" d="m 42.832394,4.741076 v 3.21509 h -0.857049 v -3.21509 q 0,-0.699537 -0.245532,-1.028458 -0.245533,-0.328922 -0.769028,-0.328922 -0.597617,0 -0.921906,0.426208 Q 39.719223,4.23148 39.719223,5.02367 V 7.956166 H 38.866807 V 2.767548 h 0.852416 v 0.778293 q 0.227002,-0.444739 0.616148,-0.671741 0.389147,-0.231635 0.921907,-0.231635 0.792191,0 1.181337,0.523495 0.393779,0.518862 0.393779,1.575116 z" style="font-weight:normal;-inkscape-font-specification:monospace;stroke-width:0.0832897;stroke-opacity:0.9;" data-v-f17367da></path></g>',5),$7=[x7];function V7(t,e){return re(),Ee("svg",P7,$7)}const F7=Xt(N7,[["render",V7],["__scopeId","data-v-f17367da"]]);/*!
  * mdue v0.1.4
  * (c) 2020 Sharad Chand
  * @license MIT
  */const H7={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 24 24"},U7=t=>ye("path",{d:t},null,-1),ne=(t,e)=>mn({name:t,render:()=>(re(),It("svg",H7,[U7(e)]))}),ip=ne(name,"M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z"),B7=ne(name,"M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5M9,13C11.67,13 17,14.34 17,17V20H1V17C1,14.34 6.33,13 9,13M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H15.1V17C15.1,16.36 11.97,14.9 9,14.9M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z"),q7=ne(name,"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"),fS=ne(name,"M19,4C20.11,4 21,4.9 21,6V18A2,2 0 0,1 19,20H5C3.89,20 3,19.1 3,18V6A2,2 0 0,1 5,4H19M19,18V8H5V18H19Z"),pS=ne(name,"M11,6H13V14L16.5,10.5L17.92,11.92L12,17.84L6.08,11.92L7.5,10.5L11,14V6M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20Z"),mS=ne(name,"M18,11V13H10L13.5,16.5L12.08,17.92L6.16,12L12.08,6.08L13.5,7.5L10,11H18M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12Z"),j7=ne(name,"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"),gS=ne(name,"M6,13V11H14L10.5,7.5L11.92,6.08L17.84,12L11.92,17.92L10.5,16.5L14,13H6M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12Z"),yS=ne(name,"M13,18H11V10L7.5,13.5L6.08,12.08L12,6.16L17.92,12.08L16.5,13.5L13,10V18M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"),vS=ne(name,"M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"),_S=ne(name,"M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z"),K7=ne(name,"M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z"),wS=ne(name,"M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"),bS=ne(name,"M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z"),CS=ne(name,"M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z"),TS=ne(name,"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"),ES=ne(name,"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"),z7=ne(name,"M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11M20 12V18H22V12H20M20 20V22H22V20H20M18 20C16.3 21.3 14.3 22 12 22C6.5 22 2 17.5 2 12S6.5 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.6 4 4 7.6 4 12S7.6 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"),W7=ne(name,"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"),IS=ne(name,"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"),AS=ne(name,"M19,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10H6.71C7.37,7.69 9.5,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15A3,3 0 0,1 19,18M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"),op=ne(name,"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"),SS=ne(name,"M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z"),kS=ne(name,"M20,18.69L12.7,22.74C12.2,23 11.7,23 11.2,22.74L4,18.69L17.05,5.54L17.4,5.44C17.7,5.44 17.87,5.57 17.9,5.84L20,18.69M9.35,5.74L4.8,13.29L6.7,1.34C6.73,1.07 6.9,0.94 7.2,0.94C7.4,0.94 7.53,1 7.6,1.19L9.75,5.14L9.35,5.74M13.85,7L4.3,16.59L11.55,4.29C11.65,4.09 11.8,4 12,4C12.2,4 12.33,4.09 12.4,4.29L13.85,7Z"),LS=ne(name,"M5,8A4,4 0 0,1 9,12A4,4 0 0,1 5,16A4,4 0 0,1 1,12A4,4 0 0,1 5,8M5,10A2,2 0 0,0 3,12A2,2 0 0,0 5,14A2,2 0 0,0 7,12A2,2 0 0,0 5,10M12,1A4,4 0 0,1 16,5A4,4 0 0,1 12,9A4,4 0 0,1 8,5A4,4 0 0,1 12,1M12,3A2,2 0 0,0 10,5A2,2 0 0,0 12,7A2,2 0 0,0 14,5A2,2 0 0,0 12,3M12,15A4,4 0 0,1 16,19A4,4 0 0,1 12,23A4,4 0 0,1 8,19A4,4 0 0,1 12,15M12,17A2,2 0 0,0 10,19A2,2 0 0,0 12,21A2,2 0 0,0 14,19A2,2 0 0,0 12,17M19,8A4,4 0 0,1 23,12A4,4 0 0,1 19,16A4,4 0 0,1 15,12A4,4 0 0,1 19,8M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z"),RS=ne(name,"M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z"),DS=ne(name,"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"),MS=ne(name,"M15.5,21.27L14.66,21.18C13.9,21.11 13.25,20.6 13,19.87C12.47,17.91 12.47,15.83 13,13.87C15.32,13.4 17,11.37 17,9C17,7 15,2 15,2H9C9,2 7,7 7,9C7,11.38 8.67,13.42 11,13.9C11.53,15.86 11.53,17.94 11,19.9C10.76,20.62 10.12,21.13 9.37,21.21L8.5,21.3C8.5,21.3 8,21.28 8,22H16C16,21.28 15.5,21.27 15.5,21.27M9.44,7L10.44,4H13.56L14.56,7H9.44Z"),G7=ne(name,"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"),OS=ne(name,"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"),Q7=ne(name,"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"),NS=ne(name,"M21.79,13L16,16L17,18L13,17.25V21H11V17.25L7,18L8,16L2.21,13L3.21,11.27L1.61,8L5.21,7.77L6.21,6L9.63,9.9L8,5H10L12,2L14,5H16L14.37,9.9L17.79,6L18.79,7.73L22.39,7.96L20.79,11.19L21.79,13Z"),PS=ne(name,"M14.62,8.35C14.2,8.63 12.87,9.39 12.67,9.54C12.28,9.85 11.92,9.83 11.53,9.53C11.33,9.37 10,8.61 9.58,8.34C9.1,8.03 9.13,7.64 9.66,7.42C11.3,6.73 12.94,6.78 14.57,7.45C15.06,7.66 15.08,8.05 14.62,8.35M21.84,15.63C20.91,13.54 19.64,11.64 18,9.97C17.47,9.42 17.14,8.8 16.94,8.09C16.84,7.76 16.77,7.42 16.7,7.08C16.5,6.2 16.41,5.3 16,4.47C15.27,2.89 14,2.07 12.16,2C10.35,2.05 9,2.81 8.21,4.4C8,4.83 7.85,5.28 7.75,5.74C7.58,6.5 7.43,7.29 7.25,8.06C7.1,8.71 6.8,9.27 6.29,9.77C4.68,11.34 3.39,13.14 2.41,15.12C2.27,15.41 2.13,15.7 2.04,16C1.85,16.66 2.33,17.12 3.03,16.96C3.47,16.87 3.91,16.78 4.33,16.65C4.74,16.5 4.9,16.6 5,17C5.65,19.15 7.07,20.66 9.24,21.5C13.36,23.06 18.17,20.84 19.21,16.92C19.28,16.65 19.38,16.55 19.68,16.65C20.14,16.79 20.61,16.89 21.08,17C21.57,17.09 21.93,16.84 22,16.36C22.03,16.1 21.94,15.87 21.84,15.63"),xS=ne(name,"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"),$S=ne(name,"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"),Y7=ne(name,"M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"),VS=ne(name,"M18 4L20 7H17L15 4H13L15 7H12L10 4H8L10 7H7L5 4H4C2.9 4 2 4.9 2 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4H18M11.25 15.25L10 18L8.75 15.25L6 14L8.75 12.75L10 10L11.25 12.75L14 14L11.25 15.25M16.94 11.94L16 14L15.06 11.94L13 11L15.06 10.06L16 8L16.94 10.06L19 11L16.94 11.94Z"),FS=ne(name,"M5.76,10H20V18H4V6.47M22,4H18L20,8H17L15,4H13L15,8H12L10,4H8L10,8H7L5,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V4Z"),HS=ne(name,"M11.03 20H4C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13.05C20.85 11.22 18.82 10 16.5 10C12.92 10 10 12.92 10 16.5C10 17.79 10.38 19 11.03 20M23.39 22L22 23.39L18.88 20.32C18.19 20.75 17.37 21 16.5 21C14 21 12 19 12 16.5S14 12 16.5 12 21 14 21 16.5C21 17.38 20.75 18.21 20.31 18.9L23.39 22M19 16.5C19 15.12 17.88 14 16.5 14S14 15.12 14 16.5 15.12 19 16.5 19 19 17.88 19 16.5Z"),US=ne(name,"M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"),BS=ne(name,"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"),qS=ne(name,"M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2S10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14M8.68 17.04L7.5 15.86L6.32 17.04L5.14 15.86L7.5 13.5L9.86 15.86L8.68 17.04M17.68 17.04L16.5 15.86L15.32 17.04L14.14 15.86L16.5 13.5L18.86 15.86L17.68 17.04Z"),jS=ne(name,"M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,4.5L8.95,4.53C8.71,5.05 8.34,5.93 8.07,7H10.93C10.66,5.93 10.29,5.05 10.05,4.53C9.87,4.5 9.69,4.5 9.5,4.5M13.83,7C13.24,5.97 12.29,5.17 11.15,4.78C11.39,5.31 11.7,6.08 11.93,7H13.83M5.17,7H7.07C7.3,6.08 7.61,5.31 7.85,4.78C6.71,5.17 5.76,5.97 5.17,7M4.5,9.5C4.5,10 4.58,10.53 4.73,11H6.87L6.75,9.5L6.87,8H4.73C4.58,8.47 4.5,9 4.5,9.5M14.27,11C14.42,10.53 14.5,10 14.5,9.5C14.5,9 14.42,8.47 14.27,8H12.13C12.21,8.5 12.25,9 12.25,9.5C12.25,10 12.21,10.5 12.13,11H14.27M7.87,8L7.75,9.5L7.87,11H11.13C11.21,10.5 11.25,10 11.25,9.5C11.25,9 11.21,8.5 11.13,8H7.87M9.5,14.5C9.68,14.5 9.86,14.5 10.03,14.47C10.28,13.95 10.66,13.07 10.93,12H8.07C8.34,13.07 8.72,13.95 8.97,14.47L9.5,14.5M13.83,12H11.93C11.7,12.92 11.39,13.69 11.15,14.22C12.29,13.83 13.24,13.03 13.83,12M5.17,12C5.76,13.03 6.71,13.83 7.85,14.22C7.61,13.69 7.3,12.92 7.07,12H5.17Z"),KS=ne(name,"M9.25 5L12.5 1.75L15.75 5H9.25M8.89 14.3H6L5.28 17H2.91L6 7H9L12.13 17H9.67L8.89 14.3M6.33 12.68H8.56L7.93 10.56L7.67 9.59L7.42 8.63H7.39L7.17 9.6L6.93 10.58L6.33 12.68M13.05 17V15.74L17.8 8.97V8.91H13.5V7H20.73V8.34L16.09 15V15.08H20.8V17H13.05Z"),zS=ne(name,"M19 7H16L20 3L24 7H21V21H19V7M8 16H11V13H8V16M13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5M3 18L3 11H13L13 18L3 18Z"),WS=ne(name,"M8.58,17.25L9.5,13.36L6.5,10.78L10.45,10.41L12,6.8L13.55,10.45L17.5,10.78L14.5,13.36L15.42,17.25L12,15.19L8.58,17.25M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"),GS=ne(name,"M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.26 8.69 11.81 9.24 12.41 9.85C13.39 10.85 14.5 12 17 12C19.67 12 21.33 10.67 22 8C21 9.33 19.83 9.83 18.5 9.5C17.74 9.31 17.2 8.76 16.59 8.15C15.61 7.15 14.5 6 12 6M7 12C4.33 12 2.67 13.33 2 16C3 14.67 4.17 14.17 5.5 14.5C6.26 14.69 6.8 15.24 7.41 15.85C8.39 16.85 9.5 18 12 18C14.67 18 16.33 16.67 17 14C16 15.33 14.83 15.83 13.5 15.5C12.74 15.31 12.2 14.76 11.59 14.15C10.61 13.15 9.5 12 7 12Z"),X7=ne(name,"M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z"),QS=ne(name,"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"),YS=ne(name,"M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"),XS=ne(name,"M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z"),JS=ne(name,"M22.61,19L13.53,9.91C14.46,7.57 14,4.81 12.09,2.91C9.79,0.61 6.21,0.4 3.66,2.26L7.5,6.11L6.08,7.5L2.25,3.69C0.39,6.23 0.6,9.82 2.9,12.11C4.76,13.97 7.47,14.46 9.79,13.59L18.9,22.7C19.29,23.09 19.92,23.09 20.31,22.7L22.61,20.4C23,20 23,19.39 22.61,19M19.61,20.59L10.15,11.13C9.54,11.58 8.86,11.85 8.15,11.95C6.79,12.15 5.36,11.74 4.32,10.7C3.37,9.76 2.93,8.5 3,7.26L6.09,10.35L10.33,6.11L7.24,3C8.5,2.95 9.73,3.39 10.68,4.33C11.76,5.41 12.17,6.9 11.92,8.29C11.8,9 11.5,9.66 11.04,10.25L20.5,19.7L19.61,20.59Z"),ZS=ne(name,"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z");const Yy=t=>(n1("data-v-9920d946"),t=t(),s1(),t),J7={key:0,class:"wrapAll"},Z7={class:"wrap"},eI=Yy(()=>De("div",{class:"ins"},"install",-1)),tI=Yy(()=>De("div",{class:"com"},".com",-1)),nI={key:1,id:"spacer",class:"h-24 md:hidden"},sI={__name:"AppInstall",setup(t){const e=qe("$msgCache"),n=yr(!0);Jl(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),window.addEventListener("beforeinstallprompt",r=>{var o;r.preventDefault(),window.deferredPrompt=r,n.value=!1;const i={title:"install today",body:'"you may be missing some of the benefits stereo can provide \u{1F3B6} waa waa! \u{1F3B6}"',icon:op,id:"install"};(o=e==null?void 0:e.value)==null||o.push(i)}),window.addEventListener("appinstalled",()=>{window.deferredPrompt=null})});const s=async()=>{const r=window.deferredPrompt;!r||(r.prompt(),await r.userChoice,window.deferredPrompt=null,n.value=!0)};return(r,i)=>{const o=F7;return re(),Ee(Be,null,[_e(n)?rn("",!0):(re(),Ee("div",J7,[De("button",{class:Ht(_e(n)?"hidden":"flex"),onClick:i[0]||(i[0]=a=>s())},[ye(_e(op),{class:"i"}),De("div",Z7,[eI,ye(o,{class:"b"}),tI])],2)])),_e(n)?rn("",!0):(re(),Ee("div",nI))],64)}}},rI=Xt(sI,[["__scopeId","data-v-9920d946"]]);const iI={},oI={class:"background"},aI=su("<span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span><span data-v-be4aedc9></span>",20),cI=[aI];function lI(t,e){return re(),Ee("div",oI,cI)}const uI=Xt(iI,[["render",lI],["__scopeId","data-v-be4aedc9"]]),hI="modulepreload",dI=function(t){return"/"+t},ap={},Ne=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=dI(i),i in ap)return;ap[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const d=r[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":hI,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Bs=typeof window<"u";function fI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Me=Object.assign;function $c(t,e){const n={};for(const s in e){const r=e[s];n[s]=Qt(r)?r.map(t):t(r)}return n}const Kr=()=>{},Qt=Array.isArray,pI=/\/$/,mI=t=>t.replace(pI,"");function Vc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=_I(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function gI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&dr(e.matched[s],n.matched[r])&&Xy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Xy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vI(t[n],e[n]))return!1;return!0}function vI(t,e){return Qt(t)?lp(t,e):Qt(e)?lp(e,t):t===e}function lp(t,e){return Qt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function _I(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var zr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zr||(zr={}));function wI(t){if(!t)if(Bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mI(t)}const bI=/^[^#]+#/;function CI(t,e){return t.replace(bI,"#")+e}function TI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const rc=()=>({left:window.pageXOffset,top:window.pageYOffset});function EI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=TI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function up(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function II(t,e){Ml.set(t,e)}function AI(t){const e=Ml.get(t);return Ml.delete(t),e}let SI=()=>location.protocol+"//"+location.host;function Jy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),cp(c,"")}return cp(n,t)+s+r}function kI(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const f=Jy(t,location),m=n.value,y=e.value;let _=0;if(h){if(n.value=f,e.value=h,o&&o===m){o=null;return}_=y?h.position-y.position:0}else s(f);r.forEach(w=>{w(n.value,m,{delta:_,type:_i.pop,direction:_?_>0?zr.forward:zr.back:zr.unknown})})};function c(){o=n.value}function l(h){r.push(h);const f=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return i.push(f),f}function u(){const{history:h}=window;!h.state||h.replaceState(Me({},h.state,{scroll:rc()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function hp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?rc():null}}function LI(t){const{history:e,location:n}=window,s={value:Jy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:SI()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),r.value=l}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(c,l){const u=Me({},e.state,hp(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Me({},r.value,e.state,{forward:c,scroll:rc()});i(u.current,u,!0);const d=Me({},hp(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function RI(t){t=wI(t);const e=LI(t),n=kI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Me({location:"",base:t,go:s,createHref:CI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function DI(t){return typeof t=="string"||t&&typeof t=="object"}function Zy(t){return typeof t=="string"||typeof t=="symbol"}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},e2=Symbol("");var dp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dp||(dp={}));function fr(t,e){return Me(new Error,{type:t,[e2]:!0},e)}function gn(t,e){return t instanceof Error&&e2 in t&&(e==null||!!(t.type&e))}const fp="[^/]+?",MI={sensitive:!1,strict:!1,start:!0,end:!0},OI=/[.+*?^${}()[\]/\\]/g;function NI(t,e){const n=Me({},MI,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const h=l[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(OI,"\\$&"),f+=40;else if(h.type===1){const{value:m,repeatable:y,optional:_,regexp:w}=h;i.push({name:m,repeatable:y,optional:_});const b=w||fp;if(b!==fp){f+=10;try{new RegExp(`(${b})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+j.message)}}let R=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(R=_&&l.length<2?`(?:/${R})`:"/"+R),_&&(R+="?"),r+=R,f+=20,_&&(f+=-8),y&&(f+=-20),b===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",m=i[h-1];d[m.name]=f&&m.repeatable?f.split("/"):f}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:_}=f,w=m in l?l[m]:"";if(Qt(w)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=Qt(w)?w.join("/"):w;if(!b)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function PI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function xI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=PI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(pp(s))return 1;if(pp(r))return-1}return r.length-s.length}function pp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $I={type:0,value:""},VI=/[a-zA-Z0-9_]/;function FI(t){if(!t)return[[]];if(t==="/")return[[$I]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:VI.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function HI(t,e,n){const s=NI(FI(t.path),n),r=Me(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function UI(t,e){const n=[],s=new Map;e=yp({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,d,h){const f=!h,m=BI(u);m.aliasOf=h&&h.record;const y=yp(e,u),_=[m];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const j of R)_.push(Me({},m,{components:h?h.record.components:m.components,path:j,aliasOf:h?h.record:m}))}let w,b;for(const R of _){const{path:j}=R;if(d&&j[0]!=="/"){const J=d.record.path,ie=J[J.length-1]==="/"?"":"/";R.path=d.record.path+(j&&ie+j)}if(w=HI(R,d,y),h?h.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),f&&u.name&&!gp(w)&&o(u.name)),m.children){const J=m.children;for(let ie=0;ie<J.length;ie++)i(J[ie],w,h&&h.children[ie])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return b?()=>{o(b)}:Kr}function o(u){if(Zy(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let d=0;for(;d<n.length&&xI(u,n[d])>=0&&(u.record.path!==n[d].record.path||!t2(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!gp(u)&&s.set(u.record.name,u)}function l(u,d){let h,f={},m,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw fr(1,{location:u});y=h.record.name,f=Me(mp(d.params,h.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&mp(u.params,h.keys.map(b=>b.name))),m=h.stringify(f)}else if("path"in u)m=u.path,h=n.find(b=>b.re.test(m)),h&&(f=h.parse(m),y=h.record.name);else{if(h=d.name?s.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw fr(1,{location:u,currentLocation:d});y=h.record.name,f=Me({},d.params,u.params),m=h.stringify(f)}const _=[];let w=h;for(;w;)_.unshift(w.record),w=w.parent;return{name:y,path:m,params:f,matched:_,meta:jI(_)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function mp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function BI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function gp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function jI(t){return t.reduce((e,n)=>Me(e,n.meta),{})}function yp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function t2(t,e){return e.children.some(n=>n===t||t2(t,n))}const n2=/#/g,KI=/&/g,zI=/\//g,WI=/=/g,GI=/\?/g,s2=/\+/g,QI=/%5B/g,YI=/%5D/g,r2=/%5E/g,XI=/%60/g,i2=/%7B/g,JI=/%7C/g,o2=/%7D/g,ZI=/%20/g;function Mh(t){return encodeURI(""+t).replace(JI,"|").replace(QI,"[").replace(YI,"]")}function e8(t){return Mh(t).replace(i2,"{").replace(o2,"}").replace(r2,"^")}function Ol(t){return Mh(t).replace(s2,"%2B").replace(ZI,"+").replace(n2,"%23").replace(KI,"%26").replace(XI,"`").replace(i2,"{").replace(o2,"}").replace(r2,"^")}function t8(t){return Ol(t).replace(WI,"%3D")}function n8(t){return Mh(t).replace(n2,"%23").replace(GI,"%3F")}function s8(t){return t==null?"":n8(t).replace(zI,"%2F")}function ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function r8(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(s2," "),o=i.indexOf("="),a=ea(o<0?i:i.slice(0,o)),c=o<0?null:ea(i.slice(o+1));if(a in e){let l=e[a];Qt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function vp(t){let e="";for(let n in t){const s=t[n];if(n=t8(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(s)?s.map(i=>i&&Ol(i)):[s&&Ol(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function i8(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Qt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const o8=Symbol(""),_p=Symbol(""),ic=Symbol(""),Oh=Symbol(""),Nl=Symbol("");function Lr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Un(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(fr(4,{from:n,to:e})):d instanceof Error?a(d):DI(d)?a(fr(2,{from:e,to:d})):(i&&s.enterCallbacks[r]===i&&typeof d=="function"&&i.push(d),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>a(d))})}function Fc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(a8(a)){const l=(a.__vccOpts||a)[e];l&&r.push(Un(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=fI(l)?l.default:l;i.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Un(h,n,s,i,o)()}))}}return r}function a8(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wp(t){const e=qe(ic),n=qe(Oh),s=dt(()=>e.resolve(_e(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(dr.bind(null,u));if(h>-1)return h;const f=bp(c[l-2]);return l>1&&bp(u)===f&&d[d.length-1].path!==f?d.findIndex(dr.bind(null,c[l-2])):h}),i=dt(()=>r.value>-1&&h8(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&Xy(n.params,s.value.params));function a(c={}){return u8(c)?e[_e(t.replace)?"replace":"push"](_e(t.to)).catch(Kr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const c8=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wp,setup(t,{slots:e}){const n=bi(wp(t)),{options:s}=qe(ic),r=dt(()=>({[Cp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:A1("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),l8=c8;function u8(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function h8(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Qt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function bp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cp=(t,e,n)=>t!=null?t:e!=null?e:n,d8=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=qe(Nl),r=dt(()=>t.route||s.value),i=qe(_p,0),o=dt(()=>{let l=_e(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=dt(()=>r.value.matched[o.value]);uo(_p,dt(()=>o.value+1)),uo(o8,a),uo(Nl,r);const c=yr();return Pr(()=>[c.value,a.value,t.name],([l,u,d],[h,f,m])=>{u&&(u.instances[d]=l,f&&f!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!dr(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Tp(n.default,{Component:h,route:l});const f=d.props[u],m=f?f===!0?l.params:typeof f=="function"?f(l):f:null,_=A1(h,Me({},m,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Tp(n.default,{Component:_,route:l})||_}}});function Tp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const f8=d8;function p8(t){const e=UI(t.routes,t),n=t.parseQuery||r8,s=t.stringifyQuery||vp,r=t.history,i=Lr(),o=Lr(),a=Lr(),c=ev(Vn);let l=Vn;Bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$c.bind(null,T=>""+T),d=$c.bind(null,s8),h=$c.bind(null,ea);function f(T,F){let N,z;return Zy(T)?(N=e.getRecordMatcher(T),z=F):z=T,e.addRoute(z,N)}function m(T){const F=e.getRecordMatcher(T);F&&e.removeRoute(F)}function y(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function w(T,F){if(F=Me({},F||c.value),typeof T=="string"){const p=Vc(n,T,F.path),g=e.resolve({path:p.path},F),v=r.createHref(p.fullPath);return Me(p,g,{params:h(g.params),hash:ea(p.hash),redirectedFrom:void 0,href:v})}let N;if("path"in T)N=Me({},T,{path:Vc(n,T.path,F.path).path});else{const p=Me({},T.params);for(const g in p)p[g]==null&&delete p[g];N=Me({},T,{params:d(T.params)}),F.params=d(F.params)}const z=e.resolve(N,F),se=T.hash||"";z.params=u(h(z.params));const be=gI(s,Me({},T,{hash:e8(se),path:z.path})),oe=r.createHref(be);return Me({fullPath:be,hash:se,query:s===vp?i8(T.query):T.query||{}},z,{redirectedFrom:void 0,href:oe})}function b(T){return typeof T=="string"?Vc(n,T,c.value.path):Me({},T)}function R(T,F){if(l!==T)return fr(8,{from:F,to:T})}function j(T){return ge(T)}function J(T){return j(Me(b(T),{replace:!0}))}function ie(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:N}=F;let z=typeof N=="function"?N(T):N;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=b(z):{path:z},z.params={}),Me({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function ge(T,F){const N=l=w(T),z=c.value,se=T.state,be=T.force,oe=T.replace===!0,p=ie(N);if(p)return ge(Me(b(p),{state:typeof p=="object"?Me({},se,p.state):se,force:be,replace:oe}),F||N);const g=N;g.redirectedFrom=F;let v;return!be&&yI(s,z,N)&&(v=fr(16,{to:g,from:z}),de(z,z,!0,!1)),(v?Promise.resolve(v):Y(g,z)).catch(C=>gn(C)?gn(C,2)?C:K(C):A(C,g,z)).then(C=>{if(C){if(gn(C,2))return ge(Me({replace:oe},b(C.to),{state:typeof C.to=="object"?Me({},se,C.to.state):se,force:be}),F||g)}else C=Ie(g,z,!0,oe,se);return B(g,z,C),C})}function W(T,F){const N=R(T,F);return N?Promise.reject(N):Promise.resolve()}function Y(T,F){let N;const[z,se,be]=m8(T,F);N=Fc(z.reverse(),"beforeRouteLeave",T,F);for(const p of z)p.leaveGuards.forEach(g=>{N.push(Un(g,T,F))});const oe=W.bind(null,T,F);return N.push(oe),Vs(N).then(()=>{N=[];for(const p of i.list())N.push(Un(p,T,F));return N.push(oe),Vs(N)}).then(()=>{N=Fc(se,"beforeRouteUpdate",T,F);for(const p of se)p.updateGuards.forEach(g=>{N.push(Un(g,T,F))});return N.push(oe),Vs(N)}).then(()=>{N=[];for(const p of T.matched)if(p.beforeEnter&&!F.matched.includes(p))if(Qt(p.beforeEnter))for(const g of p.beforeEnter)N.push(Un(g,T,F));else N.push(Un(p.beforeEnter,T,F));return N.push(oe),Vs(N)}).then(()=>(T.matched.forEach(p=>p.enterCallbacks={}),N=Fc(be,"beforeRouteEnter",T,F),N.push(oe),Vs(N))).then(()=>{N=[];for(const p of o.list())N.push(Un(p,T,F));return N.push(oe),Vs(N)}).catch(p=>gn(p,8)?p:Promise.reject(p))}function B(T,F,N){for(const z of a.list())z(T,F,N)}function Ie(T,F,N,z,se){const be=R(T,F);if(be)return be;const oe=F===Vn,p=Bs?history.state:{};N&&(z||oe?r.replace(T.fullPath,Me({scroll:oe&&p&&p.scroll},se)):r.push(T.fullPath,se)),c.value=T,de(T,F,N,oe),K()}let V;function P(){V||(V=r.listen((T,F,N)=>{if(!wt.listening)return;const z=w(T),se=ie(z);if(se){ge(Me(se,{replace:!0}),z).catch(Kr);return}l=z;const be=c.value;Bs&&II(up(be.fullPath,N.delta),rc()),Y(z,be).catch(oe=>gn(oe,12)?oe:gn(oe,2)?(ge(oe.to,z).then(p=>{gn(p,20)&&!N.delta&&N.type===_i.pop&&r.go(-1,!1)}).catch(Kr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),A(oe,z,be))).then(oe=>{oe=oe||Ie(z,be,!1),oe&&(N.delta&&!gn(oe,8)?r.go(-N.delta,!1):N.type===_i.pop&&gn(oe,20)&&r.go(-1,!1)),B(z,be,oe)}).catch(Kr)}))}let k=Lr(),D=Lr(),H;function A(T,F,N){K(T);const z=D.list();return z.length?z.forEach(se=>se(T,F,N)):console.error(T),Promise.reject(T)}function x(){return H&&c.value!==Vn?Promise.resolve():new Promise((T,F)=>{k.add([T,F])})}function K(T){return H||(H=!T,P(),k.list().forEach(([F,N])=>T?N(T):F()),k.reset()),T}function de(T,F,N,z){const{scrollBehavior:se}=t;if(!Bs||!se)return Promise.resolve();const be=!N&&AI(up(T.fullPath,0))||(z||!N)&&history.state&&history.state.scroll||null;return ca().then(()=>se(T,F,be)).then(oe=>oe&&EI(oe)).catch(oe=>A(oe,T,F))}const we=T=>r.go(T);let ve;const $e=new Set,wt={currentRoute:c,listening:!0,addRoute:f,removeRoute:m,hasRoute:_,getRoutes:y,resolve:w,options:t,push:j,replace:J,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:D.add,isReady:x,install(T){const F=this;T.component("RouterLink",l8),T.component("RouterView",f8),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),Bs&&!ve&&c.value===Vn&&(ve=!0,j(r.location).catch(se=>{}));const N={};for(const se in Vn)N[se]=dt(()=>c.value[se]);T.provide(ic,F),T.provide(Oh,bi(N)),T.provide(Nl,c);const z=T.unmount;$e.add(T),T.unmount=function(){$e.delete(T),$e.size<1&&(l=Vn,V&&V(),V=null,c.value=Vn,ve=!1,H=!1),z()}}};return wt}function Vs(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function m8(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>dr(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>dr(l,c))||r.push(c))}return[n,s,r]}function g8(){return qe(ic)}function y8(){return qe(Oh)}const Ep=[{path:"/",name:"/",component:()=>Ne(()=>import("./index.ae16bb10.js"),["assets/index.ae16bb10.js","assets/movies.be6a6559.js","assets/GamePlayHistory.d0536f36.js","assets/GameControllers.48064ecc.js","assets/GameControllers.c3226c6e.css","assets/lutris.ffae8dc9.js","assets/GamePlayHistory.876d391e.css","assets/route-block.6a611cbf.js","assets/index.14698378.css"]),meta:{title:"Home"}},{path:"/:404(.*)",name:"/[...404]",component:()=>Ne(()=>import("./_...404_.571fa6bc.js"),[])},{path:"/amira",children:[{path:"",name:"/amira/",component:()=>Ne(()=>import("./index.0f011659.js"),["assets/index.0f011659.js","assets/index.d49fdc3b.css"])}]},{path:"/ben",children:[{path:"",name:"/ben/",component:()=>Ne(()=>import("./index.567ccc9b.js"),["assets/index.567ccc9b.js","assets/YouTube.bf1ff784.js","assets/index.92179722.css"])},{path:"CalamitySanctuary",name:"/ben/CalamitySanctuary",component:()=>Ne(()=>import("./CalamitySanctuary.4d7a76ac.js"),["assets/CalamitySanctuary.4d7a76ac.js","assets/YouTube.bf1ff784.js"])},{path:"cuteConvos",name:"/ben/cuteConvos",component:()=>Ne(()=>import("./cuteConvos.2627bcd4.js"),["assets/cuteConvos.2627bcd4.js","assets/cuteConvos.7dcc151e.css"])},{path:"familyChannel",name:"/ben/familyChannel",component:()=>Ne(()=>import("./familyChannel.36079779.js"),["assets/familyChannel.36079779.js","assets/familyChannel.d36af0c2.css"]),children:[{path:":video",name:"/ben/familyChannel/[video]",component:()=>Ne(()=>import("./_video_.cbcc4828.js"),["assets/_video_.cbcc4828.js","assets/YouTube.bf1ff784.js"])}]}]},{path:"/chris",children:[{path:"",name:"/chris/",component:()=>Ne(()=>import("./index.e102b552.js"),["assets/index.e102b552.js","assets/index.8dba8acd.css"])},{path:"blog",name:"/chris/blog",component:()=>Ne(()=>import("./blog.125fb5d5.js"),["assets/blog.125fb5d5.js","assets/blog.8da4b33b.css"])},{path:"blogEdit",children:[{path:":thisID?",name:"blog Edit",component:()=>Ne(()=>import("./__thisID__.8479922f.js"),["assets/__thisID__.8479922f.js","assets/route-block.6a611cbf.js","assets/__thisID__.e8bb586d.css"]),meta:{title:"edit online"}}]},{path:"games",children:[{path:":platform?",children:[{path:"",name:"/chris/games/[[platform]]/",component:()=>Ne(()=>import("./index.d729b94d.js"),[])}]},{path:"full",children:[{path:"",name:"/chris/games/full/",component:()=>Ne(()=>import("./index.971b7316.js"),["assets/index.971b7316.js","assets/index.cf2b3f1c.css"])}]},{path:"snes",name:"/chris/games/snes",component:()=>Ne(()=>import("./snes.7beb44d5.js"),[])},{path:"top",children:[{path:"",name:"/chris/games/top/",component:()=>Ne(()=>import("./index.00fdb5aa.js"),["assets/index.00fdb5aa.js","assets/index.4eb44920.css"])}]}]},{path:"myGames",name:"/chris/myGames",component:()=>Ne(()=>import("./myGames.62fb9b5e.js"),["assets/myGames.62fb9b5e.js","assets/GameControllers.48064ecc.js","assets/GameControllers.c3226c6e.css","assets/myGames.7b190daa.css"])}]},{path:"/marc",children:[{path:"",name:"/marc/",component:()=>Ne(()=>import("./index.ca9218cc.js"),[])},{path:"appHowTo",name:"/marc/appHowTo",component:()=>Ne(()=>import("./README.e50f9f84.js"),[])},{path:"games",name:"/marc/games",component:()=>Ne(()=>import("./games.5baceab8.js"),["assets/games.5baceab8.js","assets/GameControllers.48064ecc.js","assets/GameControllers.c3226c6e.css","assets/snes.c2e4fb8f.js","assets/games.78e4f2b1.css"])},{path:"gamesAll",name:"/marc/gamesAll",component:()=>Ne(()=>import("./gamesAll.50dcbbc2.js"),["assets/gamesAll.50dcbbc2.js","assets/GameControllers.48064ecc.js","assets/GameControllers.c3226c6e.css","assets/snes.c2e4fb8f.js","assets/lutris.ffae8dc9.js","assets/gamesAll.aaca0ba8.css"])},{path:"nibbles",name:"/marc/nibbles",component:()=>Ne(()=>import("./nibbles.046715bd.js"),["assets/nibbles.046715bd.js","assets/nibbles.c692b6c6.css"]),children:[{path:"why",name:"/marc/nibbles/why",component:()=>Ne(()=>import("./why.5b0e8887.js"),["assets/why.5b0e8887.js","assets/YouTube.bf1ff784.js"])}]},{path:"other",children:[{path:"paramExample",name:"/marc/other/paramExample",component:()=>Ne(()=>import("./paramExample.4ae2ed11.js"),[])},{path:"TestingNewFeatures",name:"/marc/other/TestingNewFeatures",component:()=>Ne(()=>import("./TestingNewFeatures.b955a50d.js"),["assets/TestingNewFeatures.b955a50d.js","assets/GamePlayHistory.d0536f36.js","assets/GameControllers.48064ecc.js","assets/GameControllers.c3226c6e.css","assets/lutris.ffae8dc9.js","assets/GamePlayHistory.876d391e.css"])}]}]},{path:"/mel",children:[{path:"",name:"/mel/",component:()=>Ne(()=>import("./index.8c96b3f0.js"),["assets/index.8c96b3f0.js","assets/index.a88a5ee4.css"])},{path:"movies",name:"/mel/movies",component:()=>Ne(()=>import("./movies.a72315d2.js"),["assets/movies.a72315d2.js","assets/movies.be6a6559.js","assets/movies.94d874fd.css"])}]},{path:"/roger",children:[{path:"",name:"/roger/",component:()=>Ne(()=>import("./index.cc85f520.js"),[])}]}];function v8(t){const{extendRoutes:e}=t;return p8(Object.assign(t,{routes:typeof e=="function"?e(Ep):Ep}))}const _8={class:"w-full px-2 bg-opacity-20 bg-gray-300 flex flex-row"},w8={class:"max-w-7xl w-full mx-auto flex flex-row p-2"},b8={class:"px-3 flex flex-row items-center gap-2"},C8=["onClick"],T8={__name:"NavPersonPages",setup(t){const e=y8(),n=g8(),s=dt(()=>{var i,o;return(o=(i=e==null?void 0:e.path)==null?void 0:i.split("/"))==null?void 0:o[1]}),r=dt(()=>{var i,o,a,c;return(c=(a=(o=(i=n==null?void 0:n.options)==null?void 0:i.routes)==null?void 0:o.find(l=>l.path==`/${s.value}`))==null?void 0:a.children)==null?void 0:c.filter(l=>l.name)});return(i,o)=>(re(),Ee("div",_8,[De("div",w8,[De("div",b8,[(re(!0),Ee(Be,null,tr(_e(r),a=>{var c,l;return re(),Ee("button",{key:a,class:Ht({hereNow:i.$route.name==a.name}),onClick:u=>i.$router.push(a)},[ye(_e(K7),{class:"inline mb-0.5"}),Xn(" "+En(((l=(c=a==null?void 0:a.name)==null?void 0:c.split("/"))==null?void 0:l.pop())||"home"),1)],10,C8)}),128))])])]))}},E8=Xt(T8,[["__scopeId","data-v-d669cd6a"]]);const I8={key:0},A8=["textContent"],S8=["onClick"],k8=["src"],L8={class:"Vue-Toastification__toast-body custom-body"},R8=["textContent"],D8=["textContent"],M8={__name:"TopNavNotifications",setup(t){const e=qe("$msgCache"),n=qe("$localUser"),s=qe("$saveToken"),r=dt(()=>e==null?void 0:e.value),i=c=>{e.value.splice(c,1)},o=yr(null);qe("$smashToken")().then(c=>o.value=c),r1(()=>{const c=n==null?void 0:n.user,l=o.value;(c==null?void 0:c.uid)&&l&&(console.log("\u2705 \u{1F471} \u{1F5EF}\uFE0F \u{1F4BE}"),s(c))});const a=async()=>{const c=window.deferredPrompt;if(!c)return;c.prompt(),await c.userChoice,window.deferredPrompt=null;const l=e.value.findIndex(u=>u.id=="install");i(l)};return(c,l)=>{var u,d;return(u=_e(r))!=null&&u.length?(re(),Ee("details",I8,[De("summary",null,[ye(_e(q7)),De("div",{textContent:En((d=_e(r))==null?void 0:d.length)},null,8,A8)]),De("ul",null,[(re(!0),Ee(Be,null,tr(_e(r),(h,f)=>{var m,y;return re(),Ee("li",{key:f,class:Ht(["Vue-Toastification__toast top-right toastReshade",`Vue-Toastification__toast--${(m=h==null?void 0:h.type)!=null?m:"info"}`]),onClick:_=>(h==null?void 0:h.id)=="install"?a():""},[typeof(h==null?void 0:h.icon)=="string"&&((y=h==null?void 0:h.icon)==null?void 0:y.match(/(^http.*)/))?(re(),Ee("img",{key:0,src:h==null?void 0:h.icon},null,8,k8)):(re(),It(fa(h.icon),{key:1,class:"h-8 w-8 mr-1 scale-125 origin-right"})),De("div",L8,[De("div",{class:"t",textContent:En(h==null?void 0:h.title)},null,8,R8),De("div",{class:"b",textContent:En(h==null?void 0:h.body)},null,8,D8)]),ye(_e(W7),{class:"close",onClick:_=>i(f)},null,8,["onClick"])],10,S8)}),128))])])):rn("",!0)}}},O8=Xt(M8,[["__scopeId","data-v-fcdcc48e"]]);const N8=t=>(n1("data-v-e14ac47f"),t=t(),s1(),t),P8={class:"h-min my-auto"},x8={class:"icons"},$8=N8(()=>De("div",{class:"text-xs",textContent:"login w/google"},null,-1)),V8=["src","alt"],F8={__name:"GoogleLogin",setup(t){const e=$0(),n=qe("$localUser"),s=qe("$doAuth"),r=qe("$saveToken"),i=async()=>{await s().then(a=>r(a.user))},o=async()=>{await confirm("logout ?")&&await s(!0)};return(a,c)=>{var l,u,d,h,f,m,y,_,w,b;return re(),Ee("div",P8,[(u=(l=_e(n))==null?void 0:l.user)!=null&&u.uid?(re(),Ee("label",{key:1,class:"u logOUT",onClick:c[1]||(c[1]=R=>o())},[De("ul",null,[De("li",null,[ye(_e(ip)),Xn(" "+En((h=(d=_e(n))==null?void 0:d.user)==null?void 0:h.displayName),1)]),De("li",null,[ye(_e(z7)),Xn(" "+En(_e(e)((m=(f=_e(n))==null?void 0:f.user)==null?void 0:m.lastLoginAt).fromNow(!0)),1)])]),De("img",{src:(_=(y=_e(n))==null?void 0:y.user)==null?void 0:_.photoURL,alt:(b=(w=_e(n))==null?void 0:w.user)==null?void 0:b.displayName},null,8,V8),ye(_e(ip),{class:"imgReplace"})])):(re(),Ee("button",{key:0,class:"login",onClick:c[0]||(c[0]=R=>i())},[De("div",x8,[ye(_e(B7)),ye(_e(Y7)),ye(_e(G7))]),$8]))])}}},H8=Xt(F8,[["__scopeId","data-v-e14ac47f"]]),U8="/assets/amira.3a77a347.webp",B8="/assets/ben.cca03a9f.webp",q8="/assets/chris.12c59c11.webp",j8="/assets/marc.bbea1b57.webp",K8="/assets/mel.b169e2c2.webp",z8="/assets/roger.c2bb3d00.webp";const W8=["src"],G8={__name:"PersonBubble",props:{name:{type:String,default:"ben"}},setup(t){const e=t,n=new URL(Object.assign({"./photos/amira.webp":U8,"./photos/ben.webp":B8,"./photos/chris.webp":q8,"./photos/marc.webp":j8,"./photos/mel.webp":K8,"./photos/roger.webp":z8})[`./photos/${e.name}.webp`],self.location).href;return(s,r)=>(re(),Ee("img",{src:_e(n),class:"person"},null,8,W8))}},Q8=Xt(G8,[["__scopeId","data-v-c43f94f7"]]);const Y8={key:0,class:"max-w-md flex flex-row gap-2 -mt-2 md:pb-0 md:-mb-16 mx-auto justify-center"},X8={key:0,class:"isMe"},J8={__name:"TopNavPeople",setup(t){const e=qe("$localUser"),n=dt(()=>{var r,i,o;return(o=(i=(r=e==null?void 0:e.user)==null?void 0:r.email)==null?void 0:i.match(/^(\w+)@bulbulian.com$/))==null?void 0:o[1]}),s=["roger","amira","chris","marc","mel","ben"];return(r,i)=>{var a,c;const o=Q8;return((c=(a=r.$route)==null?void 0:a.meta)==null?void 0:c.title)!="Home"?(re(),Ee("div",Y8,[(re(),Ee(Be,null,tr(s,l=>{var u,d;return De("div",{key:l,class:"relative"},[ye(o,{name:l,class:Ht(["w-10 p",{hereNow:(d=(u=r.$route)==null?void 0:u.name)==null?void 0:d.includes(l),isMe:_e(n)==l}]),onClick:h=>r.$router.push({name:`/${l}/`})},null,8,["name","class","onClick"]),_e(n)==l?(re(),Ee("div",X8)):rn("",!0)])}),64))])):rn("",!0)}}},Z8=Xt(J8,[["__scopeId","data-v-ff50d793"]]);const eA={},tA={viewBox:"0 0 61.383361 34.925001",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"},nA=su('<g id="logo" data-v-2720f2c2><g id="bul" aria-label="bul" style="font-weight:bold;font-size:19.1191px;line-height:125%;font-family:monospace;-inkscape-font-specification:&#39;monospace Bold&#39;;text-align:end;letter-spacing:-1.94311px;word-spacing:0px;text-anchor:end;fill:#ff0000;stroke-width:0.477977px;" data-v-2720f2c2><path id="path120866" d="m 17.28635,15.970425 q 0,-1.512351 -0.504117,-2.371217 -0.504117,-0.858865 -1.390989,-0.858865 -0.886872,0 -1.400325,0.858865 -0.513452,0.858866 -0.513452,2.371217 0,1.512351 0.513452,2.371217 0.513453,0.858865 1.400325,0.858865 0.886872,0 1.390989,-0.858865 0.504117,-0.858866 0.504117,-2.371217 z m -3.808883,-3.771541 q 0.504117,-0.868202 1.166937,-1.297635 0.672156,-0.438768 1.512351,-0.438768 1.857764,0 2.856662,1.418996 1.008234,1.418996 1.008234,4.070277 0,2.61394 -0.989563,4.051606 -0.989562,1.437667 -2.781978,1.437667 -0.942885,0 -1.643048,-0.457439 -0.700162,-0.45744 -1.129595,-1.362983 v 1.549693 H 10.751501 V 6.6442622 h 2.725966 z" data-v-2720f2c2></path><path id="path120868" d="m 20.852133,17.520118 v -6.805579 h 2.735301 v 6.385481 q 0,1.129596 0.317407,1.615042 0.317407,0.485445 1.054911,0.485445 0.737505,0 1.148266,-0.653484 0.420098,-0.653485 0.420098,-1.829758 v -6.002726 h 2.735301 v 10.455759 h -2.735301 v -1.549693 q -0.289401,0.868201 -0.989563,1.344312 -0.690827,0.47611 -1.671054,0.47611 -1.49368,0 -2.259191,-0.989563 -0.756175,-0.989563 -0.756175,-2.931346 z" data-v-2720f2c2></path><path id="path120870" d="M 30.379841,17.140408 V 9.0745372 H 27.607198 V 6.9740501 h 5.507944 V 17.140408 q 0,1.232286 0.382756,1.745738 0.382755,0.513452 1.297634,0.513452 h 2.184507 v 2.100488 h -2.950018 q -1.951119,0 -2.800649,-1.008234 -0.849531,-1.008234 -0.849531,-3.351444 z" data-v-2720f2c2></path></g><g id="brR" aria-label="(" style="fill:#ff9955;stroke-width:0.678199px;" data-v-2720f2c2><path id="path120863" d="M 11.714823,2.4231014 Q 9.9530856,5.4432218 9.0788402,8.4500961 8.217841,11.443724 8.217841,14.490337 q 0,3.033367 0.8609992,6.040241 0.8742454,3.006874 2.6359828,6.053487 H 9.5954398 Q 7.5952723,23.431483 6.6150577,20.451101 5.6348432,17.457473 5.6348432,14.490337 q 0,-2.95389 0.9802145,-5.9475179 0.9802146,-2.9936282 2.9803821,-6.1197177 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path></g><g id="brL" aria-label=")" style="fill:#ff9955;stroke-width:0.678199px;" data-v-2720f2c2><path id="path120860" d="m 37.615547,2.3989028 h 2.119383 q 2.000167,3.1260896 2.980382,6.1197178 0.980214,2.9936284 0.980214,5.9475174 0,2.980382 -0.980214,5.974011 -0.980215,2.993628 -2.980382,6.119717 h -2.119383 q 1.761737,-3.073105 2.622736,-6.079979 0.874245,-3.006874 0.874245,-6.013749 0,-3.02012 -0.874245,-6.0269943 -0.860999,-3.0068743 -2.622736,-6.0402409 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path></g><path id="line" class="onHover" style="fill:#ff7f2a;stroke-width:0.678199px;" d="m 41.975145,22.38612 c -0.141974,0.326822 -0.368576,0.848095 -0.528262,1.177218 h 18.917735 v -0.983566 z m -2.873595,1.170305 c 0.140582,-0.328481 0.394788,-0.826626 0.519583,-1.153948 L 9.7811046,22.579772 c 0.125448,0.327508 0.2570294,0.655355 0.3981384,0.983566 z m -31.2186574,0.0069 C 7.7234766,23.233806 7.5756076,22.906253 7.4338716,22.579738 H 0.91304357 l -0.01047,0.983567 z" data-v-2720f2c2></path><g id="cube" aria-label="2" style="font-weight:bold;font-size:7.98016px;line-height:125%;font-family:monospace;-inkscape-font-specification:&#39;monospace Bold&#39;;text-align:end;letter-spacing:-0.81104px;word-spacing:0px;text-anchor:end;fill:#ff2a2a;stroke-width:0.199504px;" data-v-2720f2c2><path id="path120873" d="m 35.181442,9.1119669 h 2.673042 V 9.7743826 H 34.320302 V 9.1119669 q 0.728657,-0.7676228 1.274176,-1.3560037 0.545519,-0.588381 0.752036,-0.8299679 0.389657,-0.4753806 0.526036,-0.7676228 0.13638,-0.2961388 0.13638,-0.6039672 0,-0.4870703 -0.288346,-0.7637263 -0.284449,-0.2766559 -0.783209,-0.2766559 -0.354587,0 -0.744243,0.1285865 -0.389656,0.1285866 -0.826071,0.3896563 V 4.2373671 q 0.401345,-0.1909316 0.787105,-0.2883456 0.389656,-0.097414 0.767623,-0.097414 0.853347,0 1.37159,0.4558978 0.522139,0.4520013 0.522139,1.1884516 0,0.3740701 -0.175345,0.7481401 -0.171449,0.37407 -0.561105,0.8260712 -0.218207,0.2532766 -0.63514,0.7013813 -0.413035,0.4481047 -1.262486,1.3404175 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path></g><g id="ian" aria-label="+ian" style="opacity:0.5;fill:#ff9955;stroke-width:0.196639px;" data-v-2720f2c2><path id="path120876" d="m 46.057961,17.016529 v 1.705233 h 1.709074 v 0.652905 H 46.057961 V 21.0799 h -0.645223 v -1.705233 h -1.705233 v -0.652905 h 1.705233 v -1.705233 z" style="opacity:0.75;" data-v-2720f2c2></path><path id="path120878" d="m 47.566587,17.2124 h 1.80893 v 3.752281 h 1.401824 v 0.549208 h -3.510322 v -0.549208 h 1.401824 v -3.203073 h -1.102256 z m 1.102256,-1.674508 h 0.706674 v 0.894863 h -0.706674 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120880" d="m 52.85453,19.351623 h -0.234278 q -0.618339,0 -0.933269,0.218915 -0.31109,0.215074 -0.31109,0.645223 0,0.387902 0.234277,0.602977 0.234278,0.215074 0.649064,0.215074 0.583774,0 0.917907,-0.403264 0.334134,-0.407105 0.337974,-1.12146 v -0.157465 z m 1.371099,-0.291887 v 2.454153 h -0.710514 v -0.637542 q -0.226596,0.384062 -0.572251,0.568411 -0.341815,0.180509 -0.833414,0.180509 -0.656745,0 -1.048488,-0.368699 -0.391742,-0.37254 -0.391742,-0.994719 0,-0.718195 0.480076,-1.090735 0.483918,-0.37254 1.417187,-0.37254 h 0.948632 v -0.111378 q -0.0038,-0.514642 -0.261161,-0.745079 -0.257322,-0.234277 -0.821892,-0.234277 -0.361018,0 -0.729717,0.103696 -0.368699,0.103697 -0.718195,0.303409 v -0.706673 q 0.391743,-0.149784 0.74892,-0.222756 0.361018,-0.07681 0.698992,-0.07681 0.533845,0 0.910226,0.157465 0.380221,0.157465 0.614498,0.472395 0.145944,0.192031 0.207393,0.476237 0.06145,0.280365 0.06145,0.844935 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120882" d="m 57.769933,18.848502 v 2.665387 h -0.710514 v -2.665387 q 0,-0.579933 -0.203552,-0.852616 -0.203553,-0.272684 -0.637542,-0.272684 -0.49544,0 -0.764283,0.353337 -0.265002,0.349496 -0.265002,1.006241 v 2.431109 H 54.482367 V 17.2124 h 0.706673 v 0.645224 q 0.18819,-0.368699 0.510802,-0.55689 0.322611,-0.19203 0.764282,-0.19203 0.656745,0 0.979357,0.433989 0.326452,0.430149 0.326452,1.305809 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path></g><g id="bulbulian" aria-label="bul\u2022bul\u2022ian" class="onHover stroke-slate-200 dark:stroke-red-900 text-blue-900 dark:text-yellow-500" style="fill:currentColor;stroke-width:0.0832897;stroke-opacity:.9;" data-v-2720f2c2><path id="path120885" d="m 13.17712,29.327186 q 0,-0.991397 -0.315023,-1.496361 -0.315023,-0.504963 -0.931172,-0.504963 -0.620781,0 -0.940437,0.509596 -0.319656,0.504964 -0.319656,1.491728 0,0.982131 0.319656,1.491728 0.319656,0.509596 0.940437,0.509596 0.616149,0 0.931172,-0.504964 0.315023,-0.504963 0.315023,-1.49636 z m -2.506288,-1.936467 q 0.203839,-0.379881 0.560557,-0.583719 0.36135,-0.203839 0.833885,-0.203839 0.935804,0 1.473197,0.722701 0.537392,0.718067 0.537392,1.982793 0,1.283257 -0.542025,2.015223 -0.537393,0.727333 -1.47783,0.727333 -0.463269,0 -0.819987,-0.199206 -0.352085,-0.203839 -0.565189,-0.588353 v 0.65321 H 9.8184165 v -7.208473 h 0.8524155 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120887" d="m 14.662813,29.9526 v -3.215091 h 0.852416 V 29.9526 q 0,0.699537 0.245533,1.028458 0.250165,0.328921 0.769027,0.328921 0.602251,0 0.921907,-0.421575 0.319656,-0.426208 0.319656,-1.218399 V 26.737509 H 18.6284 v 5.179353 H 17.771352 V 31.13857 q -0.227003,0.449371 -0.620782,0.681006 -0.389146,0.231635 -0.912641,0.231635 -0.796823,0 -1.18597,-0.518862 -0.389146,-0.523495 -0.389146,-1.579749 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120889" d="m 20.378584,30.035988 q 0,0.574454 0.208471,0.866314 0.213104,0.29186 0.625414,0.29186 h 0.996029 v 0.7227 H 21.12908 q -0.764394,0 -1.18597,-0.491065 -0.416942,-0.491066 -0.416942,-1.389809 v -4.711451 h -1.366645 v -0.667108 h 2.219061 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120891" d="m 21.640094,28.386749 q 0,-0.574454 0.398412,-0.968233 0.398412,-0.398412 0.977499,-0.398412 0.574454,0 0.972865,0.398412 0.403045,0.398411 0.403045,0.968233 0,0.574454 -0.403045,0.977498 -0.403044,0.398412 -0.982131,0.398412 -0.574454,0 -0.972866,-0.393779 -0.393779,-0.398412 -0.393779,-0.982131 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120893" d="m 28.814552,29.327186 q 0,-0.991397 -0.315024,-1.496361 -0.315023,-0.504963 -0.931171,-0.504963 -0.620782,0 -0.940437,0.509596 -0.319656,0.504964 -0.319656,1.491728 0,0.982131 0.319656,1.491728 0.319655,0.509596 0.940437,0.509596 0.616148,0 0.931171,-0.504964 0.315024,-0.504963 0.315024,-1.49636 z m -2.506288,-1.936467 q 0.203838,-0.379881 0.560556,-0.583719 0.36135,-0.203839 0.833885,-0.203839 0.935804,0 1.473197,0.722701 0.537392,0.718067 0.537392,1.982793 0,1.283257 -0.542025,2.015223 -0.537392,0.727333 -1.47783,0.727333 -0.463269,0 -0.819987,-0.199206 -0.352084,-0.203839 -0.565188,-0.588353 v 0.65321 h -0.852416 v -7.208473 h 0.852416 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120895" d="m 30.300245,29.9526 v -3.215091 h 0.852416 V 29.9526 q 0,0.699537 0.245532,1.028458 0.250166,0.328921 0.769028,0.328921 0.60225,0 0.921906,-0.421575 0.319656,-0.426208 0.319656,-1.218399 v -2.932496 h 0.857049 v 5.179353 H 33.408783 V 31.13857 q -0.227002,0.449371 -0.620781,0.681006 -0.389146,0.231635 -0.912641,0.231635 -0.796824,0 -1.18597,-0.518862 -0.389146,-0.523495 -0.389146,-1.579749 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120897" d="m 35.885318,30.035988 q 0,0.574454 0.208471,0.866314 0.213104,0.29186 0.625414,0.29186 h 0.996029 v 0.7227 h -1.079418 q -0.764394,0 -1.18597,-0.491065 -0.416942,-0.491066 -0.416942,-1.389809 v -4.711451 h -1.366645 v -0.667108 h 2.219061 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120899" d="m 37.146828,28.386749 q 0,-0.574454 0.398412,-0.968233 0.398412,-0.398412 0.977498,-0.398412 0.574455,0 0.972866,0.398412 0.403045,0.398411 0.403045,0.968233 0,0.574454 -0.403045,0.977498 -0.403044,0.398412 -0.982131,0.398412 -0.574454,0 -0.972866,-0.393779 -0.393779,-0.398412 -0.393779,-0.982131 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120901" d="m 40.377339,26.728244 h 2.182 v 4.526143 h 1.690934 v 0.662475 h -4.234284 v -0.662475 h 1.690934 v -3.863668 h -1.329584 z m 1.329584,-2.019855 h 0.852416 v 1.079418 h -0.852416 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120903" d="m 46.146776,29.308655 h -0.282594 q -0.745864,0 -1.125745,0.264064 -0.375248,0.259431 -0.375248,0.778293 0,0.467902 0.282594,0.727333 0.282594,0.259431 0.782925,0.259431 0.70417,0 1.107215,-0.486433 0.403044,-0.491066 0.407677,-1.352747 v -0.189941 z m 1.653872,-0.352085 v 2.960292 H 46.9436 v -0.769027 q -0.273329,0.46327 -0.690272,0.685639 -0.41231,0.217737 -1.005295,0.217737 -0.792191,0 -1.264725,-0.444739 -0.472535,-0.449372 -0.472535,-1.199868 0,-0.866314 0.579087,-1.315686 0.583719,-0.449371 1.709464,-0.449371 H 46.9436 v -0.134348 q -0.0046,-0.620781 -0.315024,-0.898743 -0.31039,-0.282594 -0.991396,-0.282594 -0.435474,0 -0.880212,0.125082 -0.444739,0.125083 -0.866314,0.365983 v -0.852416 q 0.472535,-0.180675 0.903375,-0.268696 0.435474,-0.09265 0.843151,-0.09265 0.643944,0 1.097948,0.189941 0.458637,0.18994 0.741232,0.569821 0.176042,0.231635 0.250165,0.574454 0.07412,0.338187 0.07412,1.019193 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path><path id="path120905" d="m 52.163058,28.701772 v 3.21509 h -0.857049 v -3.21509 q 0,-0.699537 -0.245532,-1.028458 -0.245533,-0.328922 -0.769028,-0.328922 -0.597617,0 -0.921906,0.426208 -0.319656,0.421576 -0.319656,1.213766 v 2.932496 h -0.852416 v -5.188618 h 0.852416 v 0.778293 q 0.227002,-0.444739 0.616148,-0.671741 0.389147,-0.231635 0.921907,-0.231635 0.792191,0 1.181337,0.523495 0.393779,0.518862 0.393779,1.575116 z" style="font-weight:normal;-inkscape-font-specification:monospace;" data-v-2720f2c2></path></g></g>',1),sA=[nA];function rA(t,e){return re(),Ee("svg",tA,sA)}const iA=Xt(eA,[["render",rA],["__scopeId","data-v-2720f2c2"]]);const oA={class:"wrap"},aA={title:"Bulbulian.com"},cA={class:"rSide"},lA={__name:"TopNav",setup(t){const e=()=>{localStorage.getItem("theme")=="dark"?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))};return localStorage.getItem("theme")=="dark"&&document.documentElement.classList.add("dark"),(s,r)=>{var l,u,d,h,f,m,y;const i=iA,o=Z8,a=H8,c=O8;return re(),Ee("header",null,[De("div",oA,[De("h1",aA,[((u=(l=s.$route)==null?void 0:l.meta)==null?void 0:u.title)=="Home"?(re(),It(_e(Q7),{key:0,class:"home"})):((h=(d=s.$route)==null?void 0:d.meta)==null?void 0:h.title)!="Home"?(re(),Ee(Be,{key:1},[ye(i,{class:"logo",onClick:r[0]||(r[0]=_=>s.$router.push({name:"/"}))}),(re(!0),Ee(Be,null,tr((y=(m=(f=s.$route)==null?void 0:f.name)==null?void 0:m.split("/"))==null?void 0:y.filter(_=>_),_=>(re(),Ee("div",{key:_,class:"crumbs"},[ye(_e(j7),{class:"next"}),Xn(" "+En(_),1)]))),128))],64)):rn("",!0)]),De("div",cA,[ye(o,{class:"peeps"}),ye(a),ye(c),ye(_e(X7),{class:"darkLight",onClick:r[1]||(r[1]=_=>e())})])])])}}},uA=Xt(lA,[["__scopeId","data-v-a5f5794c"]]),hA={};function dA(t,e){var a;const n=uA,s=E8,r=Gs("router-view"),i=uI,o=rI;return re(),Ee("div",null,[ye(n),((a=t.$route)==null?void 0:a.path)!="/"?(re(),It(s,{key:0,class:"z-10"})):rn("",!0),De("main",null,[ye(r)]),ye(i),ye(o)])}const fA=Xt(hA,[["render",dA]]);function Pl(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Pl(r,e,i):typeof r=="function"&&(e[i]=r)}return e}function pA(t,e){return t.reduce((n,s)=>n.then(()=>s.apply(void 0,e)),Promise.resolve())}function mA(t,e){return Promise.all(t.map(n=>n.apply(void 0,e)))}function Hc(t,e){for(const n of t)n(e)}class gA{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];this._hooks[e]=void 0;for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Pl(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Pl(e);for(const s in n)this.removeHook(s,n[s])}callHook(e,...n){return this.callHookWith(pA,e,...n)}callHookParallel(e,...n){return this.callHookWith(mA,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Hc(this._before,r);const i=e(this._hooks[n]||[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Hc(this._after,r)}):(this._after&&r&&Hc(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}function yA(){return new gA}const vA=["script","style","noscript"],_A=["base","meta","link","style","script","noscript"],wA=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function bA(t,e){const{props:n,tag:s}=t;if(wA.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const io=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([r,i])=>{i=String(i);const o=`attr:${r}`;if(r==="class"){if(!i)return;for(const a of i.split(" ")){const c=`${o}:${a}`;e&&e(t,c,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(r)),s.getAttribute(r)!==i&&s.setAttribute(r,i)}),vA.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function Nh(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function a2(t,e={}){var u,d;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,r=t._popSideEffectQueue();t.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([f,m])=>{r[f]=m})});const i=async h=>{const f=t.headEntries().find(y=>y._i===h._e),m={renderId:h._d||Nh(JSON.stringify({...h,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:h,entry:f,staleSideEffects:r};return await t.hooks.callHook("dom:beforeRenderTag",m),m},o=[],a={body:[],head:[]},c=(h,f,m)=>{f=`${h.renderId}:${f}`,h.entry&&(h.entry._sde[f]=m),delete r[f]},l=h=>{t._elMap[h.renderId]=h.$el,o.push(h),c(h,"el",()=>{var f;(f=h.$el)==null||f.remove(),delete t._elMap[h.renderId]})};for(const h of await t.resolveTags()){const f=await i(h);if(!f.shouldRender)continue;const{tag:m}=f;if(m.tag==="title"){s.title=m.children||"",o.push(f);continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){f.$el=s[m.tag==="htmlAttrs"?"documentElement":"body"],io(f,c),o.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&m._hash&&(f.$el=s.querySelector(`${(u=m.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${m.tag}[data-h-${m._hash}]`)),f.$el){f.tag._d&&io(f),l(f);continue}f.$el=s.createElement(m.tag),io(f),a[(d=m.tagPosition)!=null&&d.startsWith("body")?"body":"head"].push(f)}Object.entries(a).forEach(([h,f])=>{if(!!f.length){for(const m of[...s[h].children].reverse()){const y=m.tagName.toLowerCase();if(!_A.includes(y))continue;const _=bA({tag:y,props:m.getAttributeNames().reduce((b,R)=>({...b,[R]:m.getAttribute(R)}),{})}),w=f.findIndex(b=>b&&(b.tag._d===_||m.isEqualNode(b.$el)));if(w!==-1){const b=f[w];b.$el=m,io(b),l(b),delete f[w]}}f.forEach(m=>{if(!!m.$el){switch(m.tag.tagPosition){case"bodyClose":s.body.appendChild(m.$el);break;case"bodyOpen":s.body.insertBefore(m.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(m.$el);break}l(m)}})}});for(const h of o)await t.hooks.callHook("dom:renderTag",h);Object.values(r).forEach(h=>h())}let To=null;async function CA(t,e={}){function n(){return To=null,a2(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return To=To||new Promise(r=>s(()=>r(n())))}const TA={__proto__:null,debouncedRenderDOMHead:CA,get domUpdatePromise(){return To},hashCode:Nh,renderDOMHead:a2},EA=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],IA=["tagPosition","tagPriority","tagDuplicateStrategy"];async function AA(t,e){const n={tag:t,props:{}};return t==="title"||t==="titleTemplate"?(n.children=e instanceof Promise?await e:e,n):(n.props=await SA({...e}),["children","innerHtml","innerHTML"].forEach(s=>{typeof n.props[s]<"u"&&(n.children=n.props[s],typeof n.children=="object"&&(n.children=JSON.stringify(n.children)),delete n.props[s])}),Object.keys(n.props).filter(s=>IA.includes(s)).forEach(s=>{n[s]=n.props[s],delete n.props[s]}),typeof n.props.class=="object"&&!Array.isArray(n.props.class)&&(n.props.class=Object.keys(n.props.class).filter(s=>n.props.class[s])),Array.isArray(n.props.class)&&(n.props.class=n.props.class.join(" ")),n.props.content&&Array.isArray(n.props.content)?n.props.content.map((s,r)=>{const i={...n,props:{...n.props}};return i.props.content=s,i.key=`${n.props.name||n.props.property}:${r}`,i}):n)}async function SA(t){for(const e of Object.keys(t))t[e]instanceof Promise&&(t[e]=await t[e]),String(t[e])==="true"?t[e]="":String(t[e])==="false"&&delete t[e];return t}const Ip=t=>{if(typeof t.tagPriority=="number")return t.tagPriority;switch(t.tagPriority){case"critical":return 2;case"high":return 9;case"low":return 12}switch(t.tag){case"base":return-1;case"title":return 1;case"meta":return t.props.charset?-2:t.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},kA=(t,e)=>Ip(t)-Ip(e),LA=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function RA(t,e){const{props:n,tag:s}=t;if(LA.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const Ap=(t,e)=>t==null?e||null:typeof t=="function"?t(e):t.replace("%s",e!=null?e:"");function DA(t){let e=t.findIndex(s=>s.tag==="titleTemplate");const n=t.findIndex(s=>s.tag==="title");if(n!==-1&&e!==-1){const s=Ap(t[e].children,t[n].children);s!==null?t[n].children=s||t[n].children:delete t[n]}else if(e!==-1){const s=Ap(t[e].children);s!==null&&(t[e].children=s,t[e].tag="title",e=-1)}return e!==-1&&delete t[e],t.filter(Boolean)}const MA=t=>{t=t||{};const e=t.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:n}){e.forEach(r=>{n.props[r]&&(n.key=n.props[r],delete n.props[r])});const s=n.key?`${n.tag}:${n.key}`:RA(n);s&&(n._d=s)},"tags:resolve":function(n){const s={};n.tags.forEach(r=>{let i=r._d||r._p;const o=s[i];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&(r.tag==="htmlAttrs"||r.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const l=o.props;["class","style"].forEach(u=>{r.props[u]&&l[u]&&(u==="style"&&!l[u].endsWith(";")&&(l[u]+=";"),r.props[u]=`${l[u]} ${r.props[u]}`)}),s[i].props={...l,...r.props};return}else r._e===o._e&&(i=r._d=`${i}:${r._p}`);const c=Object.keys(r.props).length;if((c===0||c===1&&typeof r.props["data-h-key"]<"u")&&!r.children){delete s[i];return}}s[i]=r}),n.tags=Object.values(s)}}}},OA=()=>({hooks:{"tags:resolve":t=>{const e=n=>{var s;return(s=t.tags.find(r=>r._d===n))==null?void 0:s._p};for(const n of t.tags){if(!n.tagPriority||typeof n.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:r,offset:i}of s)if(n.tagPriority.startsWith(r)){const o=n.tagPriority.replace(r,""),a=e(o);typeof a<"u"&&(n._p=a+i)}}t.tags.sort((n,s)=>n._p-s._p).sort(kA)}}}),NA=()=>({hooks:{"tags:resolve":t=>{t.tags=DA(t.tags)}}}),PA=()=>({hooks:{"tag:normalise":function({tag:t}){typeof t.props.body<"u"&&(t.tagPosition="bodyClose",delete t.props.body)}}}),xA=typeof window<"u",$A=()=>({hooks:{"tag:normalise":t=>{var r,i;const{tag:e,entry:n}=t,s=typeof e.props._dynamic<"u";!c2.includes(e.tag)||!e.key||(e._hash=Nh(JSON.stringify({tag:e.tag,key:e.key})),!(xA||((i=(r=u2())==null?void 0:r.resolvedOptions)==null?void 0:i.document))&&(n._m==="server"||s)&&(e.props[`data-h-${e._hash}`]=""))},"tags:resolve":t=>{t.tags=t.tags.map(e=>(delete e.props._dynamic,e))}}}),VA=t=>({hooks:{"entries:updated":function(e){if(typeof(t==null?void 0:t.document)>"u"&&typeof window>"u")return;let n=t==null?void 0:t.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),Promise.resolve().then(function(){return TA}).then(({debouncedRenderDOMHead:s})=>{s(e,{document:(t==null?void 0:t.document)||window.document,delayFn:n})})}}}),FA=()=>{const t=(e,n)=>{const s={},r={};Object.entries(n.props).forEach(([o,a])=>{o.startsWith("on")&&typeof a=="function"?r[o]=a:s[o]=a});let i;return e==="dom"&&n.tag==="script"&&typeof s.src=="string"&&typeof r.onload<"u"&&(i=s.src,delete s.src),{props:s,eventHandlers:r,delayedSrc:i}};return{hooks:{"ssr:render":function(e){e.tags=e.tags.map(n=>(n.props=t("ssr",n).props,n))},"dom:beforeRenderTag":function(e){const{props:n,eventHandlers:s,delayedSrc:r}=t("dom",e.tag);!Object.keys(s).length||(e.tag.props=n,e.tag._eventHandlers=s,e.tag._delayedSrc=r)},"dom:renderTag":function(e){const n=e.$el;if(!e.tag._eventHandlers||!n)return;const s=e.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(e.tag._eventHandlers).forEach(([r,i])=>{const o=`${e.tag._d||e.tag._p}:${r}`,a=r.slice(2).toLowerCase(),c=`data-h-${a}`;if(delete e.staleSideEffects[o],n.hasAttribute(c))return;const l=i;n.setAttribute(c,""),s.addEventListener(a,l),e.entry&&(e.entry._sde[o]=()=>{s.removeEventListener(a,l),n.removeAttribute(c)})}),e.tag._delayedSrc&&n.setAttribute("src",e.tag._delayedSrc)}}}};function HA(t){return Array.isArray(t)?t:[t]}const c2=["base","meta","link","style","script","noscript"];let l2;const UA=t=>l2=t,u2=()=>l2,BA=10;async function qA(t){const e=[];return Object.entries(t.resolvedInput||t.input).filter(([n,s])=>typeof s<"u"&&EA.includes(n)).forEach(([n,s])=>{const r=HA(s);e.push(...r.map(i=>AA(n,i)).flat())}),(await Promise.all(e)).flat().map((n,s)=>(n._e=t._i,n._p=(t._i<<BA)+s,n))}const jA=()=>[MA(),OA(),NA(),$A(),FA(),PA()],KA=(t={})=>[VA({document:t==null?void 0:t.document,delayFn:t==null?void 0:t.domDelayFn})];function zA(t={}){const e=WA({...t,plugins:[...KA(t),...(t==null?void 0:t.plugins)||[]]});return UA(e),e}function WA(t={}){let e=[],n={},s=0;const r=yA();t!=null&&t.hooks&&r.addHooks(t.hooks),t.plugins=[...jA(),...(t==null?void 0:t.plugins)||[]],t.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks));const i=()=>r.callHook("entries:updated",o),o={resolvedOptions:t,headEntries(){return e},get hooks(){return r},use(a){a.hooks&&r.addHooks(a.hooks)},push(a,c){const l={_i:s++,input:a,_sde:{}};return c!=null&&c.mode&&(l._m=c==null?void 0:c.mode),e.push(l),i(),{dispose(){e=e.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},i(),!1))},patch(u){e=e.map(d=>(d._i===l._i&&(l.input=d.input=u,i()),d))}}},async resolveTags(){const a={tags:[],entries:[...e]};await r.callHook("entries:resolve",a);for(const c of a.entries)for(const l of await qA(c)){const u={tag:l,entry:c};await r.callHook("tag:normalise",u),a.tags.push(u.tag)}return await r.callHook("tags:resolve",a),a.tags},_elMap:{},_popSideEffectQueue(){const a={...n};return n={},a}};return o.hooks.callHook("init",o),o}function GA(t){return typeof t=="function"?t():_e(t)}function ta(t,e=""){if(t instanceof Promise)return t;const n=GA(t);if(!t||!n)return n;if(Array.isArray(n))return n.map(s=>ta(s,e));if(typeof n=="object"){let s=!1;const r=Object.fromEntries(Object.entries(n).map(([i,o])=>i==="titleTemplate"||i.startsWith("on")?[i,_e(o)]:((typeof o=="function"||it(o))&&(s=!0),[i,ta(o,i)])));return s&&c2.includes(String(e))&&(r._dynamic=!0),r}return n}const QA=iu.startsWith("3"),YA=typeof window<"u",h2="usehead";function Ph(){return Ti()&&qe(h2)||u2()}function XA(t={}){const e=zA({...t,domDelayFn:s=>setTimeout(()=>ca(()=>s()),10),plugins:[JA(),...(t==null?void 0:t.plugins)||[]]}),n={install(s){QA&&(s.config.globalProperties.$unhead=e,s.provide(h2,e))}};return e.install=n.install,e}const JA=()=>({hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=ta(e.input)}}});function ZA(t,e={}){const n=Ph(),s=yr({});r1(()=>{s.value=ta(t)});const r=n.push(s.value,e);return Pr(s,o=>r.patch(o)),Ti()&&Zl(()=>{r.dispose()}),r}function eS(t,e={}){return Ph().push(t,e)}function tS(t,e={}){var s;const n=Ph();if(n){const r=YA||!!((s=n.resolvedOptions)!=null&&s.document);return e.mode==="server"&&r||e.mode==="client"&&!r?void 0:r?ZA(t,e):eS(t,e)}}const nS=["script","style","noscript"],sS=["base","meta","link","style","script","noscript"],rS=["base","title","titleTemplate","bodyAttrs","htmlAttrs"];function iS(t,e){const{props:n,tag:s}=t;if(rS.includes(s))return s;if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];s==="meta"&&r.push("name","property","http-equiv");for(const i of r)if(typeof n[i]<"u"){const o=String(n[i]);return e&&!e(o)?!1:`${s}:${i}:${o}`}return!1}const oo=(t,e)=>{const{tag:n,$el:s}=t;!s||(Object.entries(n.props).forEach(([r,i])=>{i=String(i);const o=`attr:${r}`;if(r==="class"){if(!i)return;for(const a of i.split(" ")){const c=`${o}:${a}`;e&&e(t,c,()=>s.classList.remove(a)),s.classList.contains(a)||s.classList.add(a)}return}e&&!r.startsWith("data-h-")&&e(t,o,()=>s.removeAttribute(r)),s.getAttribute(r)!==i&&s.setAttribute(r,i)}),nS.includes(n.tag)&&s.innerHTML!==(n.children||"")&&(s.innerHTML=n.children||""))};function oS(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}async function d2(t,e={}){var u,d;const n={shouldRender:!0};if(await t.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const s=e.document||window.document,r=t._popSideEffectQueue();t.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([f,m])=>{r[f]=m})});const i=async h=>{const f=t.headEntries().find(y=>y._i===h._e),m={renderId:h._d||oS(JSON.stringify({...h,_e:void 0,_p:void 0})),$el:null,shouldRender:!0,tag:h,entry:f,staleSideEffects:r};return await t.hooks.callHook("dom:beforeRenderTag",m),m},o=[],a={body:[],head:[]},c=(h,f,m)=>{f=`${h.renderId}:${f}`,h.entry&&(h.entry._sde[f]=m),delete r[f]},l=h=>{t._elMap[h.renderId]=h.$el,o.push(h),c(h,"el",()=>{var f;(f=h.$el)==null||f.remove(),delete t._elMap[h.renderId]})};for(const h of await t.resolveTags()){const f=await i(h);if(!f.shouldRender)continue;const{tag:m}=f;if(m.tag==="title"){s.title=m.children||"",o.push(f);continue}if(m.tag==="htmlAttrs"||m.tag==="bodyAttrs"){f.$el=s[m.tag==="htmlAttrs"?"documentElement":"body"],oo(f,c),o.push(f);continue}if(f.$el=t._elMap[f.renderId],!f.$el&&m._hash&&(f.$el=s.querySelector(`${(u=m.tagPosition)!=null&&u.startsWith("body")?"body":"head"} > ${m.tag}[data-h-${m._hash}]`)),f.$el){f.tag._d&&oo(f),l(f);continue}f.$el=s.createElement(m.tag),oo(f),a[(d=m.tagPosition)!=null&&d.startsWith("body")?"body":"head"].push(f)}Object.entries(a).forEach(([h,f])=>{if(!!f.length){for(const m of[...s[h].children].reverse()){const y=m.tagName.toLowerCase();if(!sS.includes(y))continue;const _=iS({tag:y,props:m.getAttributeNames().reduce((b,R)=>({...b,[R]:m.getAttribute(R)}),{})}),w=f.findIndex(b=>b&&(b.tag._d===_||m.isEqualNode(b.$el)));if(w!==-1){const b=f[w];b.$el=m,oo(b),l(b),delete f[w]}}f.forEach(m=>{if(!!m.$el){switch(m.tag.tagPosition){case"bodyClose":s.body.appendChild(m.$el);break;case"bodyOpen":s.body.insertBefore(m.$el,s.body.firstChild);break;case"head":default:s.head.appendChild(m.$el);break}l(m)}})}});for(const h of o)await t.hooks.callHook("dom:renderTag",h);Object.values(r).forEach(h=>h())}let Uc=null;async function aS(t,e={}){function n(){return Uc=null,d2(t,e)}const s=e.delayFn||(r=>setTimeout(r,10));return Uc=Uc||new Promise(r=>s(()=>r(n())))}function cS(t){const e=XA(),n={unhead:e,install(s){iu.startsWith("3")&&(s.config.globalProperties.$head=e,s.provide("usehead",e))},use(s){e.use(s)},resolveTags(){return e.resolveTags()},headEntries(){return e.headEntries()},headTags(){return e.resolveTags()},push(s,r){return e.push(s,r)},addEntry(s,r){return e.push(s,r)},addHeadObjs(s,r){return e.push(s,r)},addReactiveEntry(s,r){const i=tS(s,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,r){r?d2(e,{document:s}):aS(e,{delayFn:i=>setTimeout(()=>i(),50),document:s})},internalHooks:e.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return e.addHeadObjs=n.addHeadObjs,e.updateDOM=n.updateDOM,e.hooks.hook("dom:beforeRender",s=>{for(const r of n.hooks["before:dom"])r()===!1&&(s.shouldRender=!1)}),t&&n.addHeadObjs(t),n}const _t=M1(fA),lS=cS(),uS=v8({history:RI()});_t.use(uS);_t.use(lS);_t.use($w,Vw);_t.provide("$smashEvent",O4);_t.provide("$smashToken",vy);_t.provide("$saveToken",PT);_t.provide("$getData",ST);_t.provide("$rDoc",RT);_t.provide("$qData",kT);_t.provide("$fData",LT);_t.provide("$saveData",gy);_t.provide("$rmData",DT);_t.provide("$doAuth",O7);_t.provide("$localUser",Lt.value);_t.provide("$msgCache",Ll);_t.mount(document.body);export{qe as $,fS as A,bS as B,AS as C,SS as D,F7 as E,Be as F,DS as G,OS as H,YS as I,ES as J,wi as K,xS as L,$_ as M,US as N,dt as O,hS as P,dS as Q,it as R,jS as S,GS as T,wS as U,XS as V,JS as W,_S as X,ZS as Y,QS as Z,Xt as _,De as a,$S as a0,y8 as a1,Ci as a2,RS as a3,Jl as a4,r1 as a5,BS as a6,yS as a7,qS as a8,mS as a9,pS as aa,gS as ab,IS as ac,xw as ad,kS as ae,NS as af,HS as ag,FS as ah,KS as ai,zS as aj,TS as ak,VS as al,WS as am,ye as b,Ee as c,vS as d,Xn as e,Q8 as f,s1 as g,Gs as h,tr as i,It as j,rn as k,Ht as l,iA as m,$0 as n,re as o,n1 as p,tS as q,yr as r,PS as s,En as t,_e as u,MS as v,CS as w,LS as x,su as y,fa as z};
