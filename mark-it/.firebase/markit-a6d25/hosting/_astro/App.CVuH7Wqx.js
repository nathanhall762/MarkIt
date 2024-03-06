import{j as a}from"./jsx-runtime.CfVuv60F.js";import{I as $}from"./iconify.Gi37SqeE.js";import{r as E,g as Te,R as ge}from"./index.BG0d_8j_.js";const te=t=>{let e;const n=new Set,r=(p,v)=>{const d=typeof p=="function"?p(e):p;if(!Object.is(d,e)){const g=e;e=v??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(y=>y(e,g))}},s=()=>e,c={setState:r,getState:s,getInitialState:()=>f,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{n.clear()}},f=e=t(r,s,c);return c},Pe=t=>t?te(t):te;var be={exports:{}},ve={},ye={exports:{}},Se={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=E;function Oe(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $e=typeof Object.is=="function"?Object.is:Oe,ke=j.useState,Me=j.useEffect,Le=j.useLayoutEffect,He=j.useDebugValue;function Fe(t,e){var n=e(),r=ke({inst:{value:n,getSnapshot:e}}),s=r[0].inst,o=r[1];return Le(function(){s.value=n,s.getSnapshot=e,M(s)&&o({inst:s})},[t,n,e]),Me(function(){return M(s)&&o({inst:s}),t(function(){M(s)&&o({inst:s})})},[t]),He(n),n}function M(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$e(t,n)}catch{return!0}}function Ue(t,e){return e()}var Ve=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ue:Fe;Se.useSyncExternalStore=j.useSyncExternalStore!==void 0?j.useSyncExternalStore:Ve;ye.exports=Se;var ze=ye.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=E,We=ze;function qe(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ge=typeof Object.is=="function"?Object.is:qe,Qe=We.useSyncExternalStore,Je=k.useRef,Xe=k.useEffect,Ke=k.useMemo,Ye=k.useDebugValue;ve.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var o=Je(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=Ke(function(){function c(g){if(!f){if(f=!0,p=g,g=r(g),s!==void 0&&i.hasValue){var y=i.value;if(s(y,g))return v=y}return v=g}if(y=v,Ge(p,g))return y;var b=r(g);return s!==void 0&&s(y,b)?y:(p=g,v=b)}var f=!1,p,v,d=n===void 0?null:n;return[function(){return c(e())},d===null?void 0:function(){return c(d())}]},[e,n,r,s]);var l=Qe(t,o[0],o[1]);return Xe(function(){i.hasValue=!0,i.value=l},[l]),Ye(l),l};be.exports=ve;var Ze=be.exports;const et=Te(Ze),{useDebugValue:tt}=ge,{useSyncExternalStoreWithSelector:nt}=et;const rt=t=>t;function st(t,e=rt,n){const r=nt(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return tt(r),r}const ne=t=>{const e=typeof t=="function"?Pe(t):t,n=(r,s)=>st(e,r,s);return Object.assign(n,e),n},we=t=>t?ne(t):ne;function ot(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var o;const i=c=>c===null?null:JSON.parse(c,e?.reviver),l=(o=n.getItem(s))!=null?o:null;return l instanceof Promise?l.then(i):i(l)},setItem:(s,o)=>n.setItem(s,JSON.stringify(o,e?.replacer)),removeItem:s=>n.removeItem(s)}}const N=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return N(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return N(r)(n)}}}},it=(t,e)=>(n,r,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:m=>m,version:0,merge:(m,w)=>({...w,...m}),...e},i=!1;const l=new Set,c=new Set;let f;try{f=o.getStorage()}catch{}if(!f)return t((...m)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...m)},r,s);const p=N(o.serialize),v=()=>{const m=o.partialize({...r()});let w;const u=p({state:m,version:o.version}).then(x=>f.setItem(o.name,x)).catch(x=>{w=x});if(w)throw w;return u},d=s.setState;s.setState=(m,w)=>{d(m,w),v()};const g=t((...m)=>{n(...m),v()},r,s);let y;const b=()=>{var m;if(!f)return;i=!1,l.forEach(u=>u(r()));const w=((m=o.onRehydrateStorage)==null?void 0:m.call(o,r()))||void 0;return N(f.getItem.bind(f))(o.name).then(u=>{if(u)return o.deserialize(u)}).then(u=>{if(u)if(typeof u.version=="number"&&u.version!==o.version){if(o.migrate)return o.migrate(u.state,u.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return u.state}).then(u=>{var x;return y=o.merge(u,(x=r())!=null?x:g),n(y,!0),v()}).then(()=>{w?.(y,void 0),i=!0,c.forEach(u=>u(y))}).catch(u=>{w?.(void 0,u)})};return s.persist={setOptions:m=>{o={...o,...m},m.getStorage&&(f=m.getStorage())},clearStorage:()=>{f?.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>b(),hasHydrated:()=>i,onHydrate:m=>(l.add(m),()=>{l.delete(m)}),onFinishHydration:m=>(c.add(m),()=>{c.delete(m)})},b(),y||g},at=(t,e)=>(n,r,s)=>{let o={storage:ot(()=>localStorage),partialize:b=>b,version:0,merge:(b,m)=>({...m,...b}),...e},i=!1;const l=new Set,c=new Set;let f=o.storage;if(!f)return t((...b)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...b)},r,s);const p=()=>{const b=o.partialize({...r()});return f.setItem(o.name,{state:b,version:o.version})},v=s.setState;s.setState=(b,m)=>{v(b,m),p()};const d=t((...b)=>{n(...b),p()},r,s);s.getInitialState=()=>d;let g;const y=()=>{var b,m;if(!f)return;i=!1,l.forEach(u=>{var x;return u((x=r())!=null?x:d)});const w=((m=o.onRehydrateStorage)==null?void 0:m.call(o,(b=r())!=null?b:d))||void 0;return N(f.getItem.bind(f))(o.name).then(u=>{if(u)if(typeof u.version=="number"&&u.version!==o.version){if(o.migrate)return o.migrate(u.state,u.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return u.state}).then(u=>{var x;return g=o.merge(u,(x=r())!=null?x:d),n(g,!0),p()}).then(()=>{w?.(g,void 0),g=r(),i=!0,c.forEach(u=>u(g))}).catch(u=>{w?.(void 0,u)})};return s.persist={setOptions:b=>{o={...o,...b},b.storage&&(f=b.storage)},clearStorage:()=>{f?.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>i,onHydrate:b=>(l.add(b),()=>{l.delete(b)}),onFinishHydration:b=>(c.add(b),()=>{c.delete(b)})},o.skipHydration||y(),g||d},ct=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?it(t,e):at(t,e),lt=ct,W=we()(lt(t=>({user:null,setUser:e=>t({user:e}),logout:()=>t({user:null})}),{name:"auth-storage-local"})),h=we(t=>({currentStep:0,setCurrentStep:e=>t(n=>({currentStep:typeof e=="function"?e(n.currentStep):e})),isCenterButtonEnabled:!0,setIsCenterButtonEnabled:e=>t({isCenterButtonEnabled:e}),leftButtonIcon:"ep:back",setCenterButtonIcon:e=>t({centerButtonIcon:e}),centerButtonIcon:"tabler:plus",setLeftButtonIcon:e=>t({leftButtonIcon:e}),titlePreview:"",setTitlePreview:e=>t({titlePreview:e}),descriptionPreview:"",setDescriptionPreview:e=>t({descriptionPreview:e}),selectedCollection:"My Storage Unit",setSelectedCollection:e=>t({selectedCollection:e}),QRCode:"",setQRCode:e=>t({QRCode:e}),dumpWorkingItem:()=>{t({selectedCollection:"My Storage Unit",QRCode:"",actionType:"",title:"",description:"",photo1:"",photo2:"",photo3:"",titlePreview:"",descriptionPreview:""})},actionType:"",setActionType:e=>t({actionType:e}),photo1:"",setPhoto1:e=>t({photo1:e}),photo2:"",setPhoto2:e=>t({photo2:e}),photo3:"",setPhoto3:e=>t({photo3:e}),title:"",setTitle:e=>t({title:e}),description:"",setDescription:e=>t({description:e}),priceRange:[0,500],setPriceRange:e=>t({priceRange:e})})),dt=()=>{const t=h(p=>p.QRCode),e=h(p=>p.selectedCollection),n=h(p=>p.actionType),r=h(p=>p.photo1),s=h(p=>p.photo2),o=h(p=>p.photo3),i=h(p=>p.title),l=h(p=>p.description),c=h(p=>p.priceRange);return()=>{console.log(`QRCode: ${t}, selectedCollection: ${e}, actionType: ${n}, photo1: ${r}, photo2: ${s}, photo3: ${o}, title: ${i}, description: ${l}, priceRange: ${c}`)}};function ut(){const t=h(d=>d.isCenterButtonEnabled),e=h(d=>d.centerButtonIcon),n=h(d=>d.setCurrentStep),r=t?"green":"gray",s=h(d=>d.photo1),o=h(d=>d.photo2),i=h(d=>d.photo3),l=h(d=>d.setPhoto1),c=h(d=>d.setPhoto2),f=h(d=>d.setPhoto3),p=dt(),v=()=>{(t&&e==="tabler:arrow-right"||e==="tabler:plus")&&n(d=>d===9?0:d+1),t&&e==="tabler:camera"&&(s?o?i||f("https://via.placeholder.com/150"):c("https://via.placeholder.com/150"):l("https://via.placeholder.com/150")),t&&e==="ph:check-bold"&&(p(),n(0))};return a.jsx("button",{className:`border rounded-2xl ${t?"":"cursor-not-allowed"}`,onClick:v,disabled:!t,children:e&&a.jsx($,{icon:e,height:76,width:112,color:r})})}function ht(){const t=h(r=>r.leftButtonIcon),e=h(r=>r.setCurrentStep),n=()=>{t==="ep:back"&&e(r=>r-1)};return a.jsx("button",{onClick:n,children:t&&a.jsx($,{icon:t,height:46,width:52})})}function ft(){return a.jsxs("div",{className:"flex justify-evenly items-center border-t relative w-full h-[12vh]",children:[a.jsx(ht,{}),a.jsx(ut,{}),a.jsx("button",{children:a.jsx($,{icon:"charm:menu-hamburger",height:46,width:52,className:"dark:text-black text-white"})})]})}const re=()=>{const t=h(n=>n.setSelectedCollection),e=h(n=>n.selectedCollection);return E.useEffect(()=>{t(e)},[t]),a.jsxs("div",{className:"border rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center",children:[a.jsx("div",{className:"w-full",children:a.jsx("h3",{children:e})}),a.jsx("div",{className:"w-16 flex justify-center items-center border-l-2",children:a.jsx($,{icon:"bi:caret-down-fill",height:20,width:20})})]})},se=({imageSrc:t,title:e,price:n,actionType:r})=>a.jsxs("div",{className:"flex flex-col h-fit w-[90vw] max-w-[70vh] max-h-[70vh] rounded-3xl text-center justify-stretch border",children:[a.jsx("div",{className:"w-full h-[90vw] rounded-t-3xl flex items-center",children:a.jsx("img",{className:"w-full h-full object-cover rounded-t-3xl",src:t,alt:e})}),a.jsx("div",{className:"py-2 border",children:e}),a.jsxs("div",{className:"border flex flex-row justify-between rounded-b-3xl",children:[a.jsxs("div",{className:"border py-2 text-center w-[30%] rounded-bl-3xl",children:["$",n]}),a.jsx("div",{className:"border py-2 action-type text-center w-[70%] rounded-br-3xl",children:r})]})]}),pt=()=>{const t=h(r=>r.setQRCode),e=()=>{const r=()=>Math.floor((1+Math.random())*65536).toString(16).substring(1);return`${r()+r()}-${r()}-${r()}-${r()}-${r()+r()+r()}`},n=()=>{const r=e();t(r),console.log("QR code set to",r)};return a.jsxs("div",{className:"flex flex-col text-center items-center",children:[a.jsx("div",{className:"aspect-square w-[100vw] bg-ltbg2 dark:bg-dkbg2 mb-2 max-w-xl",onClick:n}),a.jsx("p",{children:"Scan a barcode or MarkIt sticker to begin."})]})},mt=()=>{const{actionType:t,setActionType:e}=h(s=>({actionType:s.actionType,setActionType:s.setActionType})),n=s=>{const o=s.currentTarget.textContent?.toLowerCase();o&&e(o)},r=s=>`border p-2 rounded-full ${t===s?"bg-green-500":"bg-ltbg2 dark:bg-dkbg2"}`;return a.jsxs("div",{className:"flex flex-col gap-1 w-full text-center p-8 ",children:[a.jsx("h3",{children:"Mark this item as:"}),a.jsxs("div",{className:"flex flex-col justify-evenly gap-3 ",children:[a.jsx("button",{className:r("store"),onClick:n,children:"Store"}),a.jsx("button",{className:r("rent"),onClick:n,children:"Rent"}),a.jsx("button",{className:r("sell"),onClick:n,children:"Sell"})]})]})},gt=()=>{const t=h(e=>e.photo1);return h(e=>e.photo2),h(e=>e.photo3),a.jsxs("div",{className:"h-fit w-full mx-auto max-w-3xl rounded-t-3xl text-center bg-ltbg2 dark:bg-dkbg2 absolute bottom-[12vh] py-4 border-t",children:[a.jsx("h2",{className:"mb-2",children:"Take Photo"}),a.jsx("div",{className:"mx-8 rounded-full flex justify-center gap-4",children:a.jsx("div",{className:`h-8 w-8 rounded-full border ${t?"bg-black":"bg-white"}`})})]})},bt=({imageSrc:t,title:e})=>a.jsxs("div",{className:"flex items-center flex-col mb-4",children:[a.jsx("div",{className:"aspect-square bg-slate-100 mb-2",children:a.jsx("img",{src:t,alt:e})}),a.jsx("div",{className:"flex justify-center",children:a.jsx("div",{className:"w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border rounded-full mx-0.5"})})]}),B=({imageSrc:t,title:e,price:n,actionType:r,description:s})=>a.jsxs("div",{className:"flex relative flex-col w-[90vw] text-center justify-start h-full md:w-full md:box-border md:px-4 py-4",children:[a.jsx("div",{className:"py-2 border mb-4",children:e}),a.jsx(bt,{imageSrc:t,title:e}),a.jsx("div",{className:"border py-2 mb-4 action-type text-center rounded-3xl",children:r}),a.jsxs("div",{className:"border flex flex-row justify-between mb-4",children:[a.jsxs("div",{className:"border py-2 text-center w-[30%]",children:["$",n]}),a.jsx("div",{className:"border py-2 action-type text-center w-[70%]",children:"location"})]}),a.jsx("p",{children:s})]}),vt=({rows:t})=>{const{currentStep:e,titlePreview:n,setTitlePreview:r,setTitle:s}=h(c=>({currentStep:c.currentStep,titlePreview:c.titlePreview,setTitlePreview:c.setTitlePreview,setTitle:c.setTitle})),[o,i]=E.useState("");E.useEffect(()=>{i(n)},[n]);const l=c=>{const f=c.target.value;i(f),r(f)};return E.useEffect(()=>{e===7&&s(n)},[e,n,s]),a.jsxs("div",{className:"h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-ltbg2 dark:bg-dkbg2 absolute bottom-[12vh] py-8 border-t flex flex-col",children:[a.jsx("h2",{className:"mb-2",children:"Enter Title"}),a.jsx("textarea",{name:"title",id:"title",rows:t,value:o,onChange:l,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},yt=({rows:t})=>{const{currentStep:e,descriptionPreview:n,setDescriptionPreview:r,setDescription:s}=h(c=>({currentStep:c.currentStep,descriptionPreview:c.descriptionPreview,setDescriptionPreview:c.setDescriptionPreview,setDescription:c.setDescription})),[o,i]=E.useState("");E.useEffect(()=>{i(n)},[n]);const l=c=>{const f=c.target.value;i(f),r(f)};return E.useEffect(()=>{e===8&&s(n)},[e,n,s]),a.jsxs("div",{className:"h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-ltbg2 dark:bg-dkbg2 absolute bottom-[12vh] py-8 border-t flex flex-col",children:[a.jsx("h2",{className:"mb-2",children:"Enter Description"}),a.jsx("textarea",{name:"description",id:"description",rows:t,value:o,onChange:l,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},St=({min:t,max:e,step:n,instructions:r})=>{const s=h(d=>d.priceRange),o=h(d=>d.setPriceRange),[i,l]=E.useState(s[0]),[c,f]=E.useState(s[1]),p=d=>{const g=Math.min(parseInt(d.target.value,10),c-n);l(g),o([g,c])},v=d=>{const g=Math.max(parseInt(d.target.value,10),i+n);f(g),o([i,g])};return a.jsxs("div",{className:"h-fit w-screen mx-auto max-w-3xl rounded-t-3xl text-center bg-ltbg2 dark:bg-dkbg2 absolute bottom-[12vh] py-8 border-t",children:[a.jsx("h2",{className:"mb-2 px-4",children:r}),a.jsxs("div",{style:{padding:"20px"},children:[a.jsx("input",{type:"range",min:t,max:e,value:i,step:n,onChange:p,className:"slider",style:{zIndex:i>e-(e-t)/2?"5":"1"}}),a.jsx("input",{type:"range",min:t,max:e,value:c,step:n,onChange:v,className:"slider"}),a.jsx("div",{className:"text-center",children:a.jsxs("p",{children:["Price range: $",i," - $",c]})})]})]})},wt="modulepreload",Et=function(t){return"/"+t},oe={},ie=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");s=Promise.all(n.map(i=>{if(i=Et(i),i in oe)return;oe[i]=!0;const l=i.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(!!r)for(let v=o.length-1;v>=0;v--){const d=o[v];if(d.href===i&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":wt,l||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),l)return new Promise((v,d)=>{p.addEventListener("load",v),p.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>e()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var ae={};/**
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
 */const Ee=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],l=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},xe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,l=i?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,p=o>>2,v=(o&3)<<4|l>>4;let d=(l&15)<<2|f>>6,g=f&63;c||(g=64,i||(d=64)),r.push(n[p],n[v],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ee(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const v=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||l==null||f==null||v==null)throw new It;const d=o<<2|l>>4;if(r.push(d),f!==64){const g=l<<4&240|f>>2;if(r.push(g),v!==64){const y=f<<6&192|v;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class It extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _t=function(t){const e=Ee(t);return xe.encodeByteArray(e,!0)},Ie=function(t){return _t(t).replace(/\./g,"")},Ct=function(t){try{return xe.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jt=()=>Dt().__FIREBASE_DEFAULTS__,At=()=>{if(typeof process>"u"||typeof ae>"u")return;const t=ae.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ct(t[1]);return e&&JSON.parse(e)},Z=()=>{try{return jt()||At()||Nt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tr=t=>{var e,n;return(n=(e=Z())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_e=()=>{var t;return(t=Z())===null||t===void 0?void 0:t.config},nr=t=>{var e;return(e=Z())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Rt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function sr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function or(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ir(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bt(){try{return typeof indexedDB=="object"}catch{return!1}}function Tt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pt="FirebaseError";class A extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pt,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Ot(o,r):"Error",l=`${this.serviceName}: ${i} (${s}).`;return new A(s,l,r)}}function Ot(t,e){return t.replace($t,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $t=/\{\$([^}]+)}/g;function ar(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function q(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(ce(o)&&ce(i)){if(!q(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ce(t){return t!==null&&typeof t=="object"}/**
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
 */function cr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ur(t,e){const n=new kt(t,e);return n.subscribe.bind(n)}class kt{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mt(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=L),s.error===void 0&&(s.error=L),s.complete===void 0&&(s.complete=L);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mt(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function L(){}/**
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
 */function hr(t){return t&&t._delegate?t._delegate:t}class P{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const C="[DEFAULT]";/**
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
 */class Lt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ft(e))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=C){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=C){return this.instances.has(e)}getOptions(e=C){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ht(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=C){return this.component?this.component.multipleInstances?e:C:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ht(t){return t===C?void 0:t}function Ft(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ut{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const Vt={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},zt=S.INFO,Wt={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},qt=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wt[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gt{constructor(e){this.name=e,this._logLevel=zt,this._logHandler=qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Qt=(t,e)=>e.some(n=>t instanceof n);let le,de;function Jt(){return le||(le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xt(){return de||(de=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const je=new WeakMap,G=new WeakMap,Ae=new WeakMap,H=new WeakMap,ee=new WeakMap;function Kt(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(I(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&je.set(n,t)}).catch(()=>{}),ee.set(e,t),e}function Yt(t){if(G.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});G.set(t,e)}let Q={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return G.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ae.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zt(t){Q=t(Q)}function en(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(F(this),e,...n);return Ae.set(r,e.sort?e.sort():[e]),I(r)}:Xt().includes(t)?function(...e){return t.apply(F(this),e),I(je.get(this))}:function(...e){return I(t.apply(F(this),e))}}function tn(t){return typeof t=="function"?en(t):(t instanceof IDBTransaction&&Yt(t),Qt(t,Jt())?new Proxy(t,Q):t)}function I(t){if(t instanceof IDBRequest)return Kt(t);if(H.has(t))return H.get(t);const e=tn(t);return e!==t&&(H.set(t,e),ee.set(e,t)),e}const F=t=>ee.get(t);function nn(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),l=I(i);return r&&i.addEventListener("upgradeneeded",c=>{r(I(i.result),c.oldVersion,c.newVersion,I(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const rn=["get","getKey","getAll","getAllKeys","count"],sn=["put","add","delete","clear"],U=new Map;function ue(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(U.get(e))return U.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rn.includes(n)))return;const o=async function(i,...l){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return U.set(e,o),o}Zt(t=>({...t,get:(e,n,r)=>ue(e,n)||t.get(e,n,r),has:(e,n)=>!!ue(e,n)||t.has(e,n)}));/**
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
 */class on{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(an(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function an(t){const e=t.getComponent();return e?.type==="VERSION"}const J="@firebase/app",he="0.9.28";/**
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
 */const D=new Gt("@firebase/app"),cn="@firebase/app-compat",ln="@firebase/analytics-compat",dn="@firebase/analytics",un="@firebase/app-check-compat",hn="@firebase/app-check",fn="@firebase/auth",pn="@firebase/auth-compat",mn="@firebase/database",gn="@firebase/database-compat",bn="@firebase/functions",vn="@firebase/functions-compat",yn="@firebase/installations",Sn="@firebase/installations-compat",wn="@firebase/messaging",En="@firebase/messaging-compat",xn="@firebase/performance",In="@firebase/performance-compat",_n="@firebase/remote-config",Cn="@firebase/remote-config-compat",Dn="@firebase/storage",jn="@firebase/storage-compat",An="@firebase/firestore",Nn="@firebase/firestore-compat",Rn="firebase",Bn="10.8.1";/**
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
 */const X="[DEFAULT]",Tn={[J]:"fire-core",[cn]:"fire-core-compat",[dn]:"fire-analytics",[ln]:"fire-analytics-compat",[hn]:"fire-app-check",[un]:"fire-app-check-compat",[fn]:"fire-auth",[pn]:"fire-auth-compat",[mn]:"fire-rtdb",[gn]:"fire-rtdb-compat",[bn]:"fire-fn",[vn]:"fire-fn-compat",[yn]:"fire-iid",[Sn]:"fire-iid-compat",[wn]:"fire-fcm",[En]:"fire-fcm-compat",[xn]:"fire-perf",[In]:"fire-perf-compat",[_n]:"fire-rc",[Cn]:"fire-rc-compat",[Dn]:"fire-gcs",[jn]:"fire-gcs-compat",[An]:"fire-fst",[Nn]:"fire-fst-compat","fire-js":"fire-js",[Rn]:"fire-js-all"};/**
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
 */const O=new Map,K=new Map;function Pn(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Y(t){const e=t.name;if(K.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;K.set(e,t);for(const n of O.values())Pn(n,t);return!0}function fr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const On={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_=new De("app","Firebase",On);/**
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
 */class $n{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _.create("app-deleted",{appName:this._name})}}/**
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
 */const pr=Bn;function Ne(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:X,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _.create("bad-app-name",{appName:String(s)});if(n||(n=_e()),!n)throw _.create("no-options");const o=O.get(s);if(o){if(q(n,o.options)&&q(r,o.config))return o;throw _.create("duplicate-app",{appName:s})}const i=new Ut(s);for(const c of K.values())i.addComponent(c);const l=new $n(n,r,i);return O.set(s,l),l}function mr(t=X){const e=O.get(t);if(!e&&t===X&&_e())return Ne();if(!e)throw _.create("no-app",{appName:t});return e}function T(t,e,n){var r;let s=(r=Tn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const l=[`Unable to register library "${s}" with version "${e}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&l.push("and"),i&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),D.warn(l.join(" "));return}Y(new P(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kn="firebase-heartbeat-database",Mn=1,R="firebase-heartbeat-store";let V=null;function Re(){return V||(V=nn(kn,Mn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(R)}catch(n){console.warn(n)}}}}).catch(t=>{throw _.create("idb-open",{originalErrorMessage:t.message})})),V}async function Ln(t){try{const n=(await Re()).transaction(R),r=await n.objectStore(R).get(Be(t));return await n.done,r}catch(e){if(e instanceof A)D.warn(e.message);else{const n=_.create("idb-get",{originalErrorMessage:e?.message});D.warn(n.message)}}}async function fe(t,e){try{const r=(await Re()).transaction(R,"readwrite");await r.objectStore(R).put(e,Be(t)),await r.done}catch(n){if(n instanceof A)D.warn(n.message);else{const r=_.create("idb-set",{originalErrorMessage:n?.message});D.warn(r.message)}}}function Be(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hn=1024,Fn=30*24*60*60*1e3;class Un{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=pe();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const l=new Date(i.date).valueOf();return Date.now()-l<=Fn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pe(),{heartbeatsToSend:r,unsentEntries:s}=Vn(this._heartbeatsCache.heartbeats),o=Ie(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function pe(){return new Date().toISOString().substring(0,10)}function Vn(t,e=Hn){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),me(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),me(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bt()?Tt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ln(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function me(t){return Ie(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wn(t){Y(new P("platform-logger",e=>new on(e),"PRIVATE")),Y(new P("heartbeat",e=>new Un(e),"PRIVATE")),T(J,he,t),T(J,he,"esm2017"),T("fire-js","")}Wn("");var qn="firebase",Gn="10.8.1";/**
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
 */T(qn,Gn,"app");const Qn={apiKey:"AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",authDomain:"markit-a6d25.firebaseapp.com",projectId:"markit-a6d25",storageBucket:"markit-a6d25.appspot.com",messagingSenderId:"103527109310",appId:"1:103527109310:web:487002e25ba0676f3404ef"},z=Ne(Qn),Jn=({message:t})=>{const e=W(d=>d.user),n=W(d=>d.setUser),[r,s]=E.useState(!1),[o,i]=E.useState(""),[l,c]=E.useState({email:"",password:""});async function f(){s(!0),console.log(z);const{signInWithEmailAndPassword:d,getAuth:g}=await ie(()=>import("./index.esm.BTcM0fOZ.js"),__vite__mapDeps([0,1,2,3])),y=g(z);console.log(y);const b=await d(y,l.email,l.password).catch(m=>{if(s(!1),m.constructor!==A)throw alert("fix this"),new Error("this is broke in a special way");m.code==="auth/invalid-email"&&alert("Invalid Email"),m.code==="auth/missing-password"&&alert("Missing Password"),m.code==="auth/wrong-password"&&alert("Incorrect Password"),m.code==="auth/too-many-requests"&&alert("Access to this account has been temporarily disabled due to many failed login attempts."),console.log(m)});if(b&&b.user){const m={uid:b.user.uid,email:b.user.email};s(!0),n(m)}}const p=d=>{const{name:g,value:y}=d.target;c(b=>({...b,[g]:y}))},v=async()=>{const{getAuth:d}=await ie(()=>import("./index.esm.BTcM0fOZ.js"),__vite__mapDeps([0,1,2,3]));d(z).signOut(),n(null)};return E.useEffect(()=>{if(r){const d=setInterval(()=>{i(g=>g.length>=3?"":g+".")},500);return()=>clearInterval(d)}}),e&&e.uid?a.jsx("div",{className:"flex justify-center items-center h-screen",children:a.jsx("div",{className:"text-center",children:a.jsx("button",{onClick:v,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md",children:"Logout"})})}):r?a.jsx("div",{className:"flex justify-center items-center h-screen",children:a.jsx("div",{className:"text-center",children:a.jsxs("div",{className:"text-xl",children:["Signing You In",o]})})}):a.jsx("div",{className:"flex justify-center items-center h-screen",children:a.jsxs("div",{className:"text-center flex flex-col ",children:[a.jsx("div",{className:"mb-4",children:t}),a.jsxs("div",{className:"flex flex-col",children:[a.jsx("input",{type:"email",name:"email",placeholder:"email",value:l.email,onChange:p,className:"px-4 py-2 border rounded-md mb-2"}),a.jsx("input",{type:"password",name:"password",placeholder:"password",minLength:6,value:l.password,onChange:p,className:"px-4 py-2 border rounded-md mb-2"}),a.jsx("div",{children:a.jsx("button",{onClick:f,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:"Login"})})]})]})})},Xn=()=>{const t=h(u=>u.selectedCollection),e=h(u=>u.setSelectedCollection),n=h(u=>u.setIsCenterButtonEnabled),r=h(u=>u.QRCode),s=h(u=>u.setLeftButtonIcon),o=h(u=>u.dumpWorkingItem),i=h(u=>u.actionType),l=h(u=>u.setCenterButtonIcon),c=h(u=>u.title),f=h(u=>u.setTitle),p=h(u=>u.description),v=h(u=>u.titlePreview),d=h(u=>u.photo1),g=h(u=>u.photo2);h(u=>u.photo3);const y=h(u=>u.descriptionPreview),b=h(u=>u.setDescription),m=h(u=>u.priceRange);return{0:()=>{o(),l("tabler:plus"),e("My Storage Unit"),n(!0),s("material-symbols:search")},1:()=>{s("ep:back"),l("tabler:arrow-right"),n(!!(t&&r!==""))},2:()=>{n(!!(t&&r!==""&&i))},3:()=>{n(!0),t&&r!==""&&i&&d?(l("tabler:arrow-right"),n(!0)):l("tabler:camera")},4:()=>{n(!0),t&&r!==""&&i&&d&&g?(l("tabler:arrow-right"),n(!0)):l("tabler:camera")},5:()=>{f(v),n(!!(t&&r!==""&&i&&d&&c&&y!==""))},6:()=>{b(y),n(!!(t&&r!==""&&i&&d&&c&&p))},7:()=>{l("ph:check-bold"),t&&r!==""&&i&&d&&c&&p&&m.length>0?n(!0):n(!1)}}},Kn=()=>{const t=h(c=>c.currentStep),e=h(c=>c.actionType),n=h(c=>c.photo1),r=h(c=>c.title),s=h(c=>c.description),o=h(c=>c.priceRange),i=W(c=>c.user),l={0:()=>i&&i.uid==="45GunbHNtcZTq0X3GOpQEXXbIw43"?[a.jsx(re,{}),a.jsx(se,{actionType:"Rent",imageSrc:"https://via.placeholder.com/150",price:20,title:"Digital Optical Audio Toslink Sound Bar TV Cable"})]:[a.jsx(Jn,{})],1:()=>[a.jsx(pt,{}),a.jsx(re,{})],2:()=>[a.jsx(mt,{})],3:()=>[a.jsx(se,{actionType:e,imageSrc:n,price:20,title:r}),a.jsx(gt,{})],4:()=>[a.jsx(B,{actionType:e,imageSrc:n,price:o[1],title:r,description:s}),a.jsx(vt,{rows:2})],5:()=>[a.jsx(B,{actionType:e,imageSrc:n,price:o[1],title:r,description:s}),a.jsx(yt,{rows:4})],6:()=>[a.jsx(B,{actionType:e,imageSrc:n,price:o[1],title:r,description:s}),a.jsx(St,{instructions:"Select acceptable price minimum and maximum.",min:0,max:500,step:5})],7:()=>[a.jsx(B,{actionType:e,imageSrc:n,price:o[1],title:r,description:s})]};return l[t]?l[t]():[]},gr=()=>{const t=Kn(),e=h(r=>r.currentStep),n=Xn();return E.useEffect(()=>{const r=n[e];typeof r=="function"&&r()},[e,n]),a.jsxs("div",{className:"mx-auto max-w-3xl bg-ltbg1 dark:bg-dkbg1 relative top-[7.5vh]",children:[a.jsx("div",{className:"h-[80.5vh] flex items-center flex-col justify-evenly overflow-scroll md:overflow-auto",children:t.map((r,s)=>a.jsx(ge.Fragment,{children:r},s))}),a.jsx(ft,{})]})};export{P as C,De as E,A as F,Gt as L,gr as M,pr as S,fr as _,lr as a,Ct as b,nr as c,q as d,dr as e,tr as f,hr as g,mr as h,S as i,rr as j,or as k,Y as l,sr as m,Ce as n,ir as o,ur as p,cr as q,T as r,ar as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/index.esm.BTcM0fOZ.js","_astro/jsx-runtime.CfVuv60F.js","_astro/index.BG0d_8j_.js","_astro/iconify.Gi37SqeE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
