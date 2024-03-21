import{j as p}from"./jsx-runtime.CfVuv60F.js";import{r as B,g as Rl,R as _a}from"./index.BG0d_8j_.js";import{I as vn}from"./iconify.Gi37SqeE.js";import Sl from"./ItemImageCarousel.DiS6k_5m.js";const Zi=e=>{let t;const n=new Set,r=(l,h)=>{const d=typeof l=="function"?l(t):l;if(!Object.is(d,t)){const f=t;t=h??(typeof d!="object"||d===null)?d:Object.assign({},t,d),n.forEach(E=>E(t,f))}},s=()=>t,c={setState:r,getState:s,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}},u=t=e(r,s,c);return c},bl=e=>e?Zi(e):Zi;var ya={exports:{}},va={},Ea={exports:{}},wa={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=B;function Cl(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pl=typeof Object.is=="function"?Object.is:Cl,Dl=Te.useState,xl=Te.useEffect,Vl=Te.useLayoutEffect,Nl=Te.useDebugValue;function kl(e,t){var n=t(),r=Dl({inst:{value:n,getSnapshot:t}}),s=r[0].inst,i=r[1];return Vl(function(){s.value=n,s.getSnapshot=t,Kr(s)&&i({inst:s})},[e,n,t]),xl(function(){return Kr(s)&&i({inst:s}),e(function(){Kr(s)&&i({inst:s})})},[e]),Nl(n),n}function Kr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pl(e,n)}catch{return!0}}function Ol(e,t){return t()}var Ll=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ol:kl;wa.useSyncExternalStore=Te.useSyncExternalStore!==void 0?Te.useSyncExternalStore:Ll;Ea.exports=wa;var Ml=Ea.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mr=B,Fl=Ml;function Ul(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jl=typeof Object.is=="function"?Object.is:Ul,Bl=Fl.useSyncExternalStore,$l=mr.useRef,ql=mr.useEffect,zl=mr.useMemo,Hl=mr.useDebugValue;va.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var i=$l(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=zl(function(){function c(f){if(!u){if(u=!0,l=f,f=r(f),s!==void 0&&o.hasValue){var E=o.value;if(s(E,f))return h=E}return h=f}if(E=h,jl(l,f))return E;var v=r(f);return s!==void 0&&s(E,v)?E:(l=f,h=v)}var u=!1,l,h,d=n===void 0?null:n;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,n,r,s]);var a=Bl(e,i[0],i[1]);return ql(function(){o.hasValue=!0,o.value=a},[a]),Hl(a),a};ya.exports=va;var Kl=ya.exports;const Wl=Rl(Kl),{useDebugValue:Gl}=_a,{useSyncExternalStoreWithSelector:Ql}=Wl;const Xl=e=>e;function Yl(e,t=Xl,n){const r=Ql(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Gl(r),r}const to=e=>{const t=typeof e=="function"?bl(e):e,n=(r,s)=>Yl(t,r,s);return Object.assign(n,t),n},Ta=e=>e?to(e):to;function Jl(e,t){let n;try{n=e()}catch{return}return{getItem:s=>{var i;const o=c=>c===null?null:JSON.parse(c,t?.reviver),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,t?.replacer)),removeItem:s=>n.removeItem(s)}}const en=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return en(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return en(r)(n)}}}},Zl=(e,t)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,S)=>({...S,..._}),...t},o=!1;const a=new Set,c=new Set;let u;try{u=i.getStorage()}catch{}if(!u)return e((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(..._)},r,s);const l=en(i.serialize),h=()=>{const _=i.partialize({...r()});let S;const y=l({state:_,version:i.version}).then(x=>u.setItem(i.name,x)).catch(x=>{S=x});if(S)throw S;return y},d=s.setState;s.setState=(_,S)=>{d(_,S),h()};const f=e((..._)=>{n(..._),h()},r,s);let E;const v=()=>{var _;if(!u)return;o=!1,a.forEach(y=>y(r()));const S=((_=i.onRehydrateStorage)==null?void 0:_.call(i,r()))||void 0;return en(u.getItem.bind(u))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return E=i.merge(y,(x=r())!=null?x:f),n(E,!0),h()}).then(()=>{S?.(E,void 0),o=!0,c.forEach(y=>y(E))}).catch(y=>{S?.(void 0,y)})};return s.persist={setOptions:_=>{i={...i,..._},_.getStorage&&(u=_.getStorage())},clearStorage:()=>{u?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(c.add(_),()=>{c.delete(_)})},v(),E||f},th=(e,t)=>(n,r,s)=>{let i={storage:Jl(()=>localStorage),partialize:v=>v,version:0,merge:(v,_)=>({..._,...v}),...t},o=!1;const a=new Set,c=new Set;let u=i.storage;if(!u)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...v)},r,s);const l=()=>{const v=i.partialize({...r()});return u.setItem(i.name,{state:v,version:i.version})},h=s.setState;s.setState=(v,_)=>{h(v,_),l()};const d=e((...v)=>{n(...v),l()},r,s);s.getInitialState=()=>d;let f;const E=()=>{var v,_;if(!u)return;o=!1,a.forEach(y=>{var x;return y((x=r())!=null?x:d)});const S=((_=i.onRehydrateStorage)==null?void 0:_.call(i,(v=r())!=null?v:d))||void 0;return en(u.getItem.bind(u))(i.name).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return f=i.merge(y,(x=r())!=null?x:d),n(f,!0),l()}).then(()=>{S?.(f,void 0),f=r(),o=!0,c.forEach(y=>y(f))}).catch(y=>{S?.(void 0,y)})};return s.persist={setOptions:v=>{i={...i,...v},v.storage&&(u=v.storage)},clearStorage:()=>{u?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>E(),hasHydrated:()=>o,onHydrate:v=>(a.add(v),()=>{a.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},i.skipHydration||E(),f||d},eh=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?Zl(e,t):th(e,t),nh=eh;var eo={};/**
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
 */const Ia=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},rh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ia(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new sh;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class sh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ih=function(e){const t=Ia(e);return Aa.encodeByteArray(t,!0)},Zn=function(e){return ih(e).replace(/\./g,"")},oh=function(e){try{return Aa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ch=()=>ah().__FIREBASE_DEFAULTS__,uh=()=>{if(typeof process>"u"||typeof eo>"u")return;const e=eo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},lh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&oh(e[1]);return t&&JSON.parse(t)},gr=()=>{try{return ch()||uh()||lh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},hh=e=>{var t,n;return(n=(t=gr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ra=e=>{const t=hh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Sa=()=>{var e;return(e=gr())===null||e===void 0?void 0:e.config},Ry=e=>{var t;return(t=gr())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class dh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ba(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Zn(JSON.stringify(n)),Zn(JSON.stringify(o)),""].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function fh(){var e;const t=(e=gr())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function by(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Py(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ph(){return!fh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ca(){try{return typeof indexedDB=="object"}catch{return!1}}function mh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const gh="FirebaseError";class Kt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=gh,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?_h(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Kt(s,a,r)}}function _h(e,t){return e.replace(yh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yh=/\{\$([^}]+)}/g;function Dy(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ds(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(no(i)&&no(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function no(e){return e!==null&&typeof e=="object"}/**
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
 */function xy(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Vy(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Ny(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function ky(e,t){const n=new vh(e,t);return n.subscribe.bind(n)}class vh{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Eh(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Eh(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Wr(){}/**
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class Ae{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class wh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new dh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ih(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Th(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Th(e){return e===Qt?void 0:e}function Ih(e){return e.instantiationMode==="EAGER"}/**
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
 */class Ah{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new wh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(k||(k={}));const Rh={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Sh=k.INFO,bh={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Ch=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=bh[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=Sh,this._logHandler=Ch,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in k))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...t),this._logHandler(this,k.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...t),this._logHandler(this,k.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,k.INFO,...t),this._logHandler(this,k.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,k.WARN,...t),this._logHandler(this,k.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...t),this._logHandler(this,k.ERROR,...t)}}const Ph=(e,t)=>t.some(n=>e instanceof n);let ro,so;function Dh(){return ro||(ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xh(){return so||(so=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xa=new WeakMap,fs=new WeakMap,Va=new WeakMap,Gr=new WeakMap,qs=new WeakMap;function Vh(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ut(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xa.set(n,e)}).catch(()=>{}),qs.set(t,e),t}function Nh(e){if(fs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});fs.set(e,t)}let ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Va.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kh(e){ps=e(ps)}function Oh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Qr(this),t,...n);return Va.set(r,t.sort?t.sort():[t]),Ut(r)}:xh().includes(e)?function(...t){return e.apply(Qr(this),t),Ut(xa.get(this))}:function(...t){return Ut(e.apply(Qr(this),t))}}function Lh(e){return typeof e=="function"?Oh(e):(e instanceof IDBTransaction&&Nh(e),Ph(e,Dh())?new Proxy(e,ps):e)}function Ut(e){if(e instanceof IDBRequest)return Vh(e);if(Gr.has(e))return Gr.get(e);const t=Lh(e);return t!==e&&(Gr.set(e,t),qs.set(t,e)),t}const Qr=e=>qs.get(e);function Mh(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ut(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ut(o.result),c.oldVersion,c.newVersion,Ut(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Fh=["get","getKey","getAll","getAllKeys","count"],Uh=["put","add","delete","clear"],Xr=new Map;function io(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Xr.get(t))return Xr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Uh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Xr.set(t,i),i}kh(e=>({...e,get:(t,n,r)=>io(t,n)||e.get(t,n,r),has:(t,n)=>!!io(t,n)||e.has(t,n)}));/**
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
 */class jh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bh(e){const t=e.getComponent();return t?.type==="VERSION"}const ms="@firebase/app",oo="0.9.28";/**
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
 */const re=new Da("@firebase/app"),$h="@firebase/app-compat",qh="@firebase/analytics-compat",zh="@firebase/analytics",Hh="@firebase/app-check-compat",Kh="@firebase/app-check",Wh="@firebase/auth",Gh="@firebase/auth-compat",Qh="@firebase/database",Xh="@firebase/database-compat",Yh="@firebase/functions",Jh="@firebase/functions-compat",Zh="@firebase/installations",td="@firebase/installations-compat",ed="@firebase/messaging",nd="@firebase/messaging-compat",rd="@firebase/performance",sd="@firebase/performance-compat",id="@firebase/remote-config",od="@firebase/remote-config-compat",ad="@firebase/storage",cd="@firebase/storage-compat",ud="@firebase/firestore",ld="@firebase/firestore-compat",hd="firebase",dd="10.8.1";/**
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
 */const gs="[DEFAULT]",fd={[ms]:"fire-core",[$h]:"fire-core-compat",[zh]:"fire-analytics",[qh]:"fire-analytics-compat",[Kh]:"fire-app-check",[Hh]:"fire-app-check-compat",[Wh]:"fire-auth",[Gh]:"fire-auth-compat",[Qh]:"fire-rtdb",[Xh]:"fire-rtdb-compat",[Yh]:"fire-fn",[Jh]:"fire-fn-compat",[Zh]:"fire-iid",[td]:"fire-iid-compat",[ed]:"fire-fcm",[nd]:"fire-fcm-compat",[rd]:"fire-perf",[sd]:"fire-perf-compat",[id]:"fire-rc",[od]:"fire-rc-compat",[ad]:"fire-gcs",[cd]:"fire-gcs-compat",[ud]:"fire-fst",[ld]:"fire-fst-compat","fire-js":"fire-js",[hd]:"fire-js-all"};/**
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
 */const tr=new Map,_s=new Map;function pd(e,t){try{e.container.addComponent(t)}catch(n){re.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function nn(e){const t=e.name;if(_s.has(t))return re.debug(`There were multiple attempts to register component ${t}.`),!1;_s.set(t,e);for(const n of tr.values())pd(n,e);return!0}function Na(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const md={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},jt=new Pa("app","Firebase",md);/**
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
 */class gd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const ka=dd;function Oa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw jt.create("bad-app-name",{appName:String(s)});if(n||(n=Sa()),!n)throw jt.create("no-options");const i=tr.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw jt.create("duplicate-app",{appName:s})}const o=new Ah(s);for(const c of _s.values())o.addComponent(c);const a=new gd(n,r,o);return tr.set(s,a),a}function La(e=gs){const t=tr.get(e);if(!t&&e===gs&&Sa())return Oa();if(!t)throw jt.create("no-app",{appName:e});return t}function Bt(e,t,n){var r;let s=(r=fd[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),re.warn(a.join(" "));return}nn(new Ae(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const _d="firebase-heartbeat-database",yd=1,rn="firebase-heartbeat-store";let Yr=null;function Ma(){return Yr||(Yr=Mh(_d,yd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rn)}catch(n){console.warn(n)}}}}).catch(e=>{throw jt.create("idb-open",{originalErrorMessage:e.message})})),Yr}async function vd(e){try{const n=(await Ma()).transaction(rn),r=await n.objectStore(rn).get(Fa(e));return await n.done,r}catch(t){if(t instanceof Kt)re.warn(t.message);else{const n=jt.create("idb-get",{originalErrorMessage:t?.message});re.warn(n.message)}}}async function ao(e,t){try{const r=(await Ma()).transaction(rn,"readwrite");await r.objectStore(rn).put(t,Fa(e)),await r.done}catch(n){if(n instanceof Kt)re.warn(n.message);else{const r=jt.create("idb-set",{originalErrorMessage:n?.message});re.warn(r.message)}}}function Fa(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ed=1024,wd=30*24*60*60*1e3;class Td{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ad(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=co();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=co(),{heartbeatsToSend:r,unsentEntries:s}=Id(this._heartbeatsCache.heartbeats),i=Zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function co(){return new Date().toISOString().substring(0,10)}function Id(e,t=Ed){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),uo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ad{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ca()?mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vd(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ao(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function uo(e){return Zn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Rd(e){nn(new Ae("platform-logger",t=>new jh(t),"PRIVATE")),nn(new Ae("heartbeat",t=>new Td(t),"PRIVATE")),Bt(ms,oo,e),Bt(ms,oo,"esm2017"),Bt("fire-js","")}Rd("");var Sd="firebase",bd="10.8.1";/**
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
 */Bt(Sd,bd,"app");var Cd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,zs=zs||{},C=Cd||self;function _r(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function En(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Pd(e){return Object.prototype.hasOwnProperty.call(e,Jr)&&e[Jr]||(e[Jr]=++Dd)}var Jr="closure_uid_"+(1e9*Math.random()>>>0),Dd=0;function xd(e,t,n){return e.call.apply(e.bind,arguments)}function Vd(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function at(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?at=xd:at=Vd,at.apply(null,arguments)}function Mn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function J(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Wt(){this.s=this.s,this.o=this.o}var Nd=0;Wt.prototype.s=!1;Wt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nd!=0)&&Pd(this)};Wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ua=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Hs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function lo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(_r(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var kd=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};C.addEventListener("test",n,t),C.removeEventListener("test",n,t)}catch{}return e}();function sn(e){return/^[\s\xa0]*$/.test(e)}function yr(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return yr().indexOf(e)!=-1}function Ks(e){return Ks[" "](e),e}Ks[" "]=function(){};function Od(e,t){var n=Cf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Ld=Tt("Opera"),Re=Tt("Trident")||Tt("MSIE"),ja=Tt("Edge"),ys=ja||Re,Ba=Tt("Gecko")&&!(yr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),Md=yr().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function $a(){var e=C.document;return e?e.documentMode:void 0}var vs;t:{var Zr="",ts=function(){var e=yr();if(Ba)return/rv:([^\);]+)(\)|;)/.exec(e);if(ja)return/Edge\/([\d\.]+)/.exec(e);if(Re)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Md)return/WebKit\/(\S+)/.exec(e);if(Ld)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ts&&(Zr=ts?ts[1]:""),Re){var es=$a();if(es!=null&&es>parseFloat(Zr)){vs=String(es);break t}}vs=Zr}var Es;if(C.document&&Re){var ho=$a();Es=ho||parseInt(vs,10)||void 0}else Es=void 0;var Fd=Es;function on(e,t){if(ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ba){t:{try{Ks(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ud[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&on.$.h.call(this)}}J(on,ct);var Ud={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var wn="closure_listenable_"+(1e6*Math.random()|0),jd=0;function Bd(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++jd,this.fa=this.ia=!1}function vr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ws(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function $d(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function qa(e){const t={};for(const n in e)t[n]=e[n];return t}const fo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<fo.length;i++)n=fo[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Er(e){this.src=e,this.g={},this.h=0}Er.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ts(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Bd(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ws(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Ua(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(vr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ts(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Gs="closure_lm_"+(1e6*Math.random()|0),ns={};function Ha(e,t,n,r,s){if(r&&r.once)return Wa(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ha(e,t[i],n,r,s);return null}return n=Ys(n),e&&e[wn]?e.O(t,n,En(r)?!!r.capture:!!r,s):Ka(e,t,n,!1,r,s)}function Ka(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=En(s)?!!s.capture:!!s,a=Xs(e);if(a||(e[Gs]=a=new Er(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=qd(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)kd||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Qa(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qd(){function e(n){return t.call(e.src,e.listener,n)}const t=zd;return e}function Wa(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Wa(e,t[i],n,r,s);return null}return n=Ys(n),e&&e[wn]?e.P(t,n,En(r)?!!r.capture:!!r,s):Ka(e,t,n,!0,r,s)}function Ga(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ga(e,t[i],n,r,s);else r=En(r)?!!r.capture:!!r,n=Ys(n),e&&e[wn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ts(i,n,r,s),-1<n&&(vr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Xs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ts(t,n,r,s)),(n=-1<e?t[e]:null)&&Qs(n))}function Qs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[wn])ws(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Qa(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Xs(t))?(ws(n,e),n.h==0&&(n.src=null,t[Gs]=null)):vr(e)}}}function Qa(e){return e in ns?ns[e]:ns[e]="on"+e}function zd(e,t){if(e.fa)e=!0;else{t=new on(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Qs(e),e=n.call(r,t)}return e}function Xs(e){return e=e[Gs],e instanceof Er?e:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ys(e){return typeof e=="function"?e:(e[rs]||(e[rs]=function(t){return e.handleEvent(t)}),e[rs])}function Y(){Wt.call(this),this.i=new Er(this),this.S=this,this.J=null}J(Y,Wt);Y.prototype[wn]=!0;Y.prototype.removeEventListener=function(e,t,n,r){Ga(this,e,t,n,r)};function nt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ct(t,e);else if(t instanceof ct)t.target=t.target||e;else{var s=t;t=new ct(r,e),za(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Fn(o,r,!0,t)&&s}if(o=t.g=e,s=Fn(o,r,!0,t)&&s,s=Fn(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Fn(o,r,!1,t)&&s}Y.prototype.N=function(){if(Y.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)vr(n[r]);delete e.g[t],e.h--}}this.J=null};Y.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Y.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Fn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ws(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Js=C.JSON.stringify;class Hd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Kd(){var e=Zs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wd{constructor(){this.h=this.g=null}add(t,n){const r=Xa.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Xa=new Hd(()=>new Gd,e=>e.reset());class Gd{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Qd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Xd(e){C.setTimeout(()=>{throw e},0)}let an,cn=!1,Zs=new Wd,Ya=()=>{const e=C.Promise.resolve(void 0);an=()=>{e.then(Yd)}};var Yd=()=>{for(var e;e=Kd();){try{e.h.call(e.g)}catch(n){Xd(n)}var t=Xa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}cn=!1};function wr(e,t){Y.call(this),this.h=e||1,this.g=t||C,this.j=at(this.qb,this),this.l=Date.now()}J(wr,Y);T=wr.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(ti(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ti(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}T.N=function(){wr.$.N.call(this),ti(this),delete this.g};function ei(e,t,n){if(typeof e=="function")n&&(e=at(e,n));else if(e&&typeof e.handleEvent=="function")e=at(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Ja(e){e.g=ei(()=>{e.g=null,e.i&&(e.i=!1,Ja(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Jd extends Wt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ja(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(e){Wt.call(this),this.h=e,this.g={}}J(un,Wt);var po=[];function Za(e,t,n,r){Array.isArray(n)||(n&&(po[0]=n.toString()),n=po);for(var s=0;s<n.length;s++){var i=Ha(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function tc(e){Ws(e.g,function(t,n){this.g.hasOwnProperty(n)&&Qs(t)},e),e.g={}}un.prototype.N=function(){un.$.N.call(this),tc(this)};un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tr(){this.g=!0}Tr.prototype.Ea=function(){this.g=!1};function Zd(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function tf(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function _e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+nf(e,n)+(r?" "+r:"")})}function ef(e,t){e.info(function(){return"TIMEOUT: "+t})}Tr.prototype.info=function(){};function nf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Js(n)}catch{return t}}var ue={},mo=null;function Ir(){return mo=mo||new Y}ue.Ta="serverreachability";function ec(e){ct.call(this,ue.Ta,e)}J(ec,ct);function ln(e){const t=Ir();nt(t,new ec(t))}ue.STAT_EVENT="statevent";function nc(e,t){ct.call(this,ue.STAT_EVENT,e),this.stat=t}J(nc,ct);function ht(e){const t=Ir();nt(t,new nc(t,e))}ue.Ua="timingevent";function rc(e,t){ct.call(this,ue.Ua,e),this.size=t}J(rc,ct);function Tn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var Ar={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ni(){}ni.prototype.h=null;function go(e){return e.h||(e.h=e.i())}function ic(){}var In={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ri(){ct.call(this,"d")}J(ri,ct);function si(){ct.call(this,"c")}J(si,ct);var Is;function Rr(){}J(Rr,ni);Rr.prototype.g=function(){return new XMLHttpRequest};Rr.prototype.i=function(){return{}};Is=new Rr;function An(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new un(this),this.P=rf,e=ys?125:void 0,this.V=new wr(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new oc}function oc(){this.i=null,this.g="",this.h=!1}var rf=45e3,ac={},As={};T=An.prototype;T.setTimeout=function(e){this.P=e};function Rs(e,t,n){e.L=1,e.A=br(kt(t)),e.u=n,e.S=!0,cc(e,null)}function cc(e,t){e.G=Date.now(),Rn(e),e.B=kt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),gc(n.i,"t",r),e.o=0,n=e.l.J,e.h=new oc,e.g=Mc(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Jd(at(e.Pa,e,e.g),e.O)),Za(e.U,e.g,"readystatechange",e.nb),t=e.I?qa(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ln(),Zd(e.j,e.v,e.B,e.m,e.W,e.u)}T.nb=function(e){e=e.target;const t=this.M;t&&It(e)==3?t.l():this.Pa(e)};T.Pa=function(e){try{if(e==this.g)t:{const l=It(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ys||this.g&&(this.h.h||this.g.ja()||Eo(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?ln(3):ln(2)),Sr(this);var n=this.g.da();this.ca=n;e:if(uc(this)){var r=Eo(this.g);e="";var s=r.length,i=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Ge(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,tf(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!sn(a)){var u=a;break e}}u=null}if(n=u)_e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ss(this,n);else{this.i=!1,this.s=3,ht(12),Yt(this),Ge(this);break t}}this.S?(lc(this,l,o),ys&&this.i&&l==3&&(Za(this.U,this.V,"tick",this.mb),this.V.start())):(_e(this.j,this.m,o,null),Ss(this,o)),l==4&&Yt(this),this.i&&!this.J&&(l==4?Nc(this.l,this):(this.i=!1,Rn(this)))}else Rf(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Yt(this),Ge(this)}}}catch{}finally{}};function uc(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function lc(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=sf(e,n),s==As){t==4&&(e.s=4,ht(14),r=!1),_e(e.j,e.m,null,"[Incomplete Response]");break}else if(s==ac){e.s=4,ht(15),_e(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else _e(e.j,e.m,s,null),Ss(e,s);uc(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ht(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),li(t),t.M=!0,ht(11))):(_e(e.j,e.m,n,"[Invalid Chunked Response]"),Yt(e),Ge(e))}T.mb=function(){if(this.g){var e=It(this.g),t=this.g.ja();this.o<t.length&&(Sr(this),lc(this,e,t),this.i&&e!=4&&Rn(this))}};function sf(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?As:(n=Number(t.substring(n,r)),isNaN(n)?ac:(r+=1,r+n>t.length?As:(t=t.slice(r,r+n),e.o=r+n,t)))}T.cancel=function(){this.J=!0,Yt(this)};function Rn(e){e.Y=Date.now()+e.P,hc(e,e.P)}function hc(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Tn(at(e.lb,e),t)}function Sr(e){e.C&&(C.clearTimeout(e.C),e.C=null)}T.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(ef(this.j,this.B),this.L!=2&&(ln(),ht(17)),Yt(this),this.s=2,Ge(this)):hc(this,this.Y-e)};function Ge(e){e.l.H==0||e.J||Nc(e.l,e)}function Yt(e){Sr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ti(e.V),tc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ss(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||bs(n.i,e))){if(!e.K&&bs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)rr(n),xr(n);else break t;ui(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Tn(at(n.ib,n),6e3));if(1>=vc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jt(n,11)}else if((e.K||n.g==e)&&rr(n),!sn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ii(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,F(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lc(r,r.J?r.pa:null,r.Y),o.K){Ec(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Sr(a),Rn(a)),r.g=o}else xc(r);0<n.j.length&&Vr(n)}else u[0]!="stop"&&u[0]!="close"||Jt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jt(n,7):ci(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ln(4)}catch{}}function of(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(_r(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function af(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(_r(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function dc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(_r(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=af(e),r=of(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ee(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ee){this.h=e.h,er(this,e.j),this.s=e.s,this.g=e.g,nr(this,e.m),this.l=e.l;var t=e.i,n=new hn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),_o(this,n),this.o=e.o}else e&&(t=String(e).match(fc))?(this.h=!1,er(this,t[1]||"",!0),this.s=ze(t[2]||""),this.g=ze(t[3]||"",!0),nr(this,t[4]),this.l=ze(t[5]||"",!0),_o(this,t[6]||"",!0),this.o=ze(t[7]||"")):(this.h=!1,this.i=new hn(null,this.h))}ee.prototype.toString=function(){var e=[],t=this.j;t&&e.push(He(t,yo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(He(t,yo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(He(n,n.charAt(0)=="/"?hf:lf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",He(n,ff)),e.join("")};function kt(e){return new ee(e)}function er(e,t,n){e.j=n?ze(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function _o(e,t,n){t instanceof hn?(e.i=t,pf(e.i,e.h)):(n||(t=He(t,df)),e.i=new hn(t,e.h))}function F(e,t,n){e.i.set(t,n)}function br(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ze(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function He(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,uf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function uf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var yo=/[#\/\?@]/g,lf=/[#\?:]/g,hf=/[#\?]/g,df=/[#\?@]/g,ff=/#/g;function hn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Gt(e){e.g||(e.g=new Map,e.h=0,e.i&&cf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}T=hn.prototype;T.add=function(e,t){Gt(this),this.i=null,e=Ne(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function pc(e,t){Gt(e),t=Ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mc(e,t){return Gt(e),t=Ne(e,t),e.g.has(t)}T.forEach=function(e,t){Gt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};T.ta=function(){Gt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};T.Z=function(e){Gt(this);let t=[];if(typeof e=="string")mc(this,e)&&(t=t.concat(this.g.get(Ne(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};T.set=function(e,t){return Gt(this),this.i=null,e=Ne(this,e),mc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};T.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function gc(e,t,n){pc(e,t),0<n.length&&(e.i=null,e.g.set(Ne(e,t),Hs(n)),e.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pf(e,t){t&&!e.j&&(Gt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(pc(this,r),gc(this,s,n))},e)),e.j=t}var mf=class{constructor(e,t){this.g=e,this.map=t}};function _c(e){this.l=e||gf,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var gf=10;function yc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function vc(e){return e.h?1:e.g?e.g.size:0}function bs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ii(e,t){e.g?e.g.add(t):e.h=t}function Ec(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}_c.prototype.cancel=function(){if(this.i=wc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function wc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Hs(e.i)}var _f=class{stringify(e){return C.JSON.stringify(e,void 0)}parse(e){return C.JSON.parse(e,void 0)}};function yf(){this.g=new _f}function vf(e,t,n){const r=n||"";try{dc(e,function(s,i){let o=s;En(s)&&(o=Js(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Ef(e,t){const n=new Tr;if(C.Image){const r=new Image;r.onload=Mn(Un,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Mn(Un,n,r,"TestLoadImage: error",!1,t),r.onabort=Mn(Un,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Mn(Un,n,r,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Un(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Cr(e){this.l=e.ec||null,this.j=e.ob||!1}J(Cr,ni);Cr.prototype.g=function(){return new Pr(this.l,this.j)};Cr.prototype.i=function(e){return function(){return e}}({});function Pr(e,t){Y.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=oi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(Pr,Y);var oi=0;T=Pr.prototype;T.open=function(e,t){if(this.readyState!=oi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,dn(this)};T.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sn(this)),this.readyState=oi};T.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Tc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}T.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sn(this):dn(this),this.readyState==3&&Tc(this)}};T.Za=function(e){this.g&&(this.response=this.responseText=e,Sn(this))};T.Ya=function(e){this.g&&(this.response=e,Sn(this))};T.ka=function(){this.g&&Sn(this)};function Sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,dn(e)}T.setRequestHeader=function(e,t){this.v.append(e,t)};T.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function dn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wf=C.JSON.parse;function q(e){Y.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ic,this.L=this.M=!1}J(q,Y);var Ic="",Tf=/^https?$/i,If=["POST","PUT"];T=q.prototype;T.Oa=function(e){this.M=e};T.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Is.g(),this.C=this.u?go(this.u):go(Is),this.g.onreadystatechange=at(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){vo(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=C.FormData&&e instanceof C.FormData,!(0<=Ua(If,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sc(this),0<this.B&&((this.L=Af(this.g))?(this.g.timeout=this.B,this.g.ontimeout=at(this.ua,this)):this.A=ei(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){vo(this,i)}};function Af(e){return Re&&typeof e.timeout=="number"&&e.ontimeout!==void 0}T.ua=function(){typeof zs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function vo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ac(e),Dr(e)}function Ac(e){e.F||(e.F=!0,nt(e,"complete"),nt(e,"error"))}T.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,nt(this,"complete"),nt(this,"abort"),Dr(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dr(this,!0)),q.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Rc(this):this.kb())};T.kb=function(){Rc(this)};function Rc(e){if(e.h&&typeof zs<"u"&&(!e.C[1]||It(e)!=4||e.da()!=2)){if(e.v&&It(e)==4)ei(e.La,0,e);else if(nt(e,"readystatechange"),It(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(fc)[1]||null;!s&&C.self&&C.self.location&&(s=C.self.location.protocol.slice(0,-1)),r=!Tf.test(s?s.toLowerCase():"")}n=r}if(n)nt(e,"complete"),nt(e,"success");else{e.m=6;try{var i=2<It(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Ac(e)}}finally{Dr(e)}}}}function Dr(e,t){if(e.g){Sc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||nt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Sc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}T.isActive=function(){return!!this.g};function It(e){return e.g?e.g.readyState:0}T.da=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wf(t)}};function Eo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ic:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Rf(e){const t={};e=(e.g&&2<=It(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(sn(e[r]))continue;var n=Qd(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}$d(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bc(e){let t="";return Ws(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ai(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=bc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function je(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Cc(e){this.Ga=0,this.j=[],this.l=new Tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=je("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=je("baseRetryDelayMs",5e3,e),this.hb=je("retryDelaySeedMs",1e4,e),this.eb=je("forwardChannelMaxRetries",2,e),this.xa=je("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new _c(e&&e.concurrentRequestLimit),this.Ja=new yf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Cc.prototype;T.ra=8;T.H=1;function ci(e){if(Pc(e),e.H==3){var t=e.W++,n=kt(e.I);if(F(n,"SID",e.K),F(n,"RID",t),F(n,"TYPE","terminate"),bn(e,n),t=new An(e,e.l,t),t.L=2,t.A=br(kt(n)),n=!1,C.navigator&&C.navigator.sendBeacon)try{n=C.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&C.Image&&(new Image().src=t.A,n=!0),n||(t.g=Mc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Rn(t)}Oc(e)}function xr(e){e.g&&(li(e),e.g.cancel(),e.g=null)}function Pc(e){xr(e),e.u&&(C.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function Vr(e){if(!yc(e.i)&&!e.m){e.m=!0;var t=e.Na;an||Ya(),cn||(an(),cn=!0),Zs.add(t,e),e.C=0}}function Sf(e,t){return vc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Tn(at(e.Na,e,t),kc(e,e.C)),e.C++,!0)}T.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new An(this,this.l,e);let i=this.s;if(this.U&&(i?(i=qa(i),za(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Dc(this,s,t),n=kt(this.I),F(n,"RID",e),F(n,"CVER",22),this.F&&F(n,"X-HTTP-Session-Id",this.F),bn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(bc(i)))+"&"+t:this.o&&ai(n,this.o,i)),ii(this.i,s),this.bb&&F(n,"TYPE","init"),this.P?(F(n,"$req",t),F(n,"SID","null"),s.aa=!0,Rs(s,n,null)):Rs(s,n,t),this.H=2}}else this.H==3&&(e?wo(this,e):this.j.length==0||yc(this.i)||wo(this))};function wo(e,t){var n;t?n=t.m:n=e.W++;const r=kt(e.I);F(r,"SID",e.K),F(r,"RID",n),F(r,"AID",e.V),bn(e,r),e.o&&e.s&&ai(r,e.o,e.s),n=new An(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Dc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ii(e.i,n),Rs(n,r,t)}function bn(e,t){e.na&&Ws(e.na,function(n,r){F(t,r,n)}),e.h&&dc({},function(n,r){F(t,r,n)})}function Dc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?at(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{vf(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function xc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;an||Ya(),cn||(an(),cn=!0),Zs.add(t,e),e.A=0}}function ui(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Tn(at(e.Ma,e),kc(e,e.A)),e.A++,!0)}T.Ma=function(){if(this.u=null,Vc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Tn(at(this.jb,this),e)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),xr(this),Vc(this))};function li(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function Vc(e){e.g=new An(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=kt(e.wa);F(t,"RID","rpc"),F(t,"SID",e.K),F(t,"AID",e.V),F(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&F(t,"TO",e.qa),F(t,"TYPE","xmlhttp"),bn(e,t),e.o&&e.s&&ai(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=br(kt(t)),n.u=null,n.S=!0,cc(n,e)}T.ib=function(){this.v!=null&&(this.v=null,xr(this),ui(this),ht(19))};function rr(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function Nc(e,t){var n=null;if(e.g==t){rr(e),li(e),e.g=null;var r=2}else if(bs(e.i,t))n=t.F,Ec(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=Ir(),nt(r,new rc(r,n)),Vr(e)}else xc(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&Sf(e,t)||r==2&&ui(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Jt(e,5);break;case 4:Jt(e,10);break;case 3:Jt(e,6);break;default:Jt(e,2)}}}function kc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Jt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=at(e.pb,e);n||(n=new ee("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||er(n,"https"),br(n)),Ef(n.toString(),r)}else ht(2);e.H=0,e.h&&e.h.za(t),Oc(e),Pc(e)}T.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function Oc(e){if(e.H=0,e.ma=[],e.h){const t=wc(e.i);(t.length!=0||e.j.length!=0)&&(lo(e.ma,t),lo(e.ma,e.j),e.i.i.length=0,Hs(e.j),e.j.length=0),e.h.ya()}}function Lc(e,t,n){var r=n instanceof ee?kt(n):new ee(n);if(r.g!="")t&&(r.g=t+"."+r.g),nr(r,r.m);else{var s=C.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new ee(null);r&&er(i,r),t&&(i.g=t),s&&nr(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&F(r,n,t),F(r,"VER",e.ra),bn(e,r),r}function Mc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new q(new Cr({ob:n})):new q(e.va),t.Oa(e.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Fc(){}T=Fc.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function sr(){if(Re&&!(10<=Number(Fd)))throw Error("Environmental error: no available transport.")}sr.prototype.g=function(e,t){return new pt(e,t)};function pt(e,t){Y.call(this),this.g=new Cc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!sn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!sn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ke(this)}J(pt,Y);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ht(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lc(e,null,e.Y),Vr(e)};pt.prototype.close=function(){ci(this.g)};pt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Js(e),e=n);t.j.push(new mf(t.fb++,e)),t.H==3&&Vr(t)};pt.prototype.N=function(){this.g.h=null,delete this.j,ci(this.g),delete this.g,pt.$.N.call(this)};function Uc(e){ri.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}J(Uc,ri);function jc(){si.call(this),this.status=1}J(jc,si);function ke(e){this.g=e}J(ke,Fc);ke.prototype.Ba=function(){nt(this.g,"a")};ke.prototype.Aa=function(e){nt(this.g,new Uc(e))};ke.prototype.za=function(e){nt(this.g,new jc)};ke.prototype.ya=function(){nt(this.g,"b")};function bf(){this.blockSize=-1}function vt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}J(vt,bf);vt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ss(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}vt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)ss(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){ss(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){ss(this,r),s=0;break}}this.h=s,this.i+=t};vt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function L(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Cf={};function hi(e){return-128<=e&&128>e?Od(e,function(t){return new L([t|0],0>t?-1:0)}):new L([e|0],0>e?-1:0)}function At(e){if(isNaN(e)||!isFinite(e))return ye;if(0>e)return tt(At(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Cs;return new L(t,0)}function Bc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return tt(Bc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=At(Math.pow(t,8)),r=ye,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=At(Math.pow(t,i)),r=r.R(i).add(At(o))):(r=r.R(n),r=r.add(At(o)))}return r}var Cs=4294967296,ye=hi(0),Ps=hi(1),To=hi(16777216);T=L.prototype;T.ea=function(){if(mt(this))return-tt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Cs+r)*t,t*=Cs}return e};T.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Vt(this))return"0";if(mt(this))return"-"+tt(this).toString(e);for(var t=At(Math.pow(e,6)),n=this,r="";;){var s=or(n,t).g;n=ir(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Vt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};T.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Vt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function mt(e){return e.h==-1}T.X=function(e){return e=ir(this,e),mt(e)?-1:Vt(e)?0:1};function tt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new L(n,~e.h).add(Ps)}T.abs=function(){return mt(this)?tt(this):this};T.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new L(n,n[n.length-1]&-2147483648?-1:0)};function ir(e,t){return e.add(tt(t))}T.R=function(e){if(Vt(this)||Vt(e))return ye;if(mt(this))return mt(e)?tt(this).R(tt(e)):tt(tt(this).R(e));if(mt(e))return tt(this.R(tt(e)));if(0>this.X(To)&&0>e.X(To))return At(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,jn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,jn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,jn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,jn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new L(n,0)};function jn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Be(e,t){this.g=e,this.h=t}function or(e,t){if(Vt(t))throw Error("division by zero");if(Vt(e))return new Be(ye,ye);if(mt(e))return t=or(tt(e),t),new Be(tt(t.g),tt(t.h));if(mt(t))return t=or(e,tt(t)),new Be(tt(t.g),t.h);if(30<e.g.length){if(mt(e)||mt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ps,r=t;0>=r.X(e);)n=Io(n),r=Io(r);var s=fe(n,1),i=fe(r,1);for(r=fe(r,2),n=fe(n,2);!Vt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=fe(r,1),n=fe(n,1)}return t=ir(e,s.R(t)),new Be(s,t)}for(s=ye;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=At(n),o=i.R(t);mt(o)||0<o.X(e);)n-=r,i=At(n),o=i.R(t);Vt(i)&&(i=Ps),s=s.add(i),e=ir(e,o)}return new Be(s,e)}T.gb=function(e){return or(this,e).h};T.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new L(n,this.h&e.h)};T.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new L(n,this.h|e.h)};T.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new L(n,this.h^e.h)};function Io(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new L(n,e.h)}function fe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new L(s,e.h)}sr.prototype.createWebChannel=sr.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;Ar.NO_ERROR=0;Ar.TIMEOUT=8;Ar.HTTP_ERROR=6;sc.COMPLETE="complete";ic.EventType=In;In.OPEN="a";In.CLOSE="b";In.ERROR="c";In.MESSAGE="d";Y.prototype.listen=Y.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;vt.prototype.digest=vt.prototype.l;vt.prototype.reset=vt.prototype.reset;vt.prototype.update=vt.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=At;L.fromString=Bc;var Pf=function(){return new sr},Df=function(){return Ir()},is=Ar,xf=sc,Vf=ue,Ao={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Bn=ic,Nf=q,kf=vt,ve=L;const Ro="@firebase/firestore";/**
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
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Oe="10.8.1";/**
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
 */const se=new Da("@firebase/firestore");function $e(){return se.logLevel}function w(e,...t){if(se.logLevel<=k.DEBUG){const n=t.map(di);se.debug(`Firestore (${Oe}): ${e}`,...n)}}function Pt(e,...t){if(se.logLevel<=k.ERROR){const n=t.map(di);se.error(`Firestore (${Oe}): ${e}`,...n)}}function Se(e,...t){if(se.logLevel<=k.WARN){const n=t.map(di);se.warn(`Firestore (${Oe}): ${e}`,...n)}}function di(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function b(e="Unexpected state"){const t=`FIRESTORE (${Oe}) INTERNAL ASSERTION FAILED: `+e;throw Pt(t),new Error(t)}function M(e,t){e||b()}function D(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class $c{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Of{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Lf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Mf{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new $c(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new it(t)}}class Ff{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uf{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ff(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.R=n.token,new jf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $f(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=$f(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function O(e,t){return e<t?-1:e>t?1:0}function be(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class Q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new Q(0,0))}static max(){return new P(new Q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fn{constructor(t,n,r){n===void 0?n=0:n>t.length&&b(),r===void 0?r=t.length-n:r>t.length-n&&b(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return fn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class U extends fn{construct(t,n,r){return new U(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new U(n)}static emptyPath(){return new U([])}}const qf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends fn{construct(t,n,r){return new et(t,n,r)}static isValidIdentifier(t){return qf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class R{constructor(t){this.path=t}static fromPath(t){return new R(U.fromString(t))}static fromName(t){return new R(U.fromString(t).popFirst(5))}static empty(){return new R(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&U.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return U.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new R(new U(t.slice()))}}function zf(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=P.fromTimestamp(r===1e9?new Q(n+1,0):new Q(n,r));return new qt(s,R.empty(),t)}function Hf(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new qt(P.min(),R.empty(),-1)}static max(){return new qt(P.max(),R.empty(),-1)}}function Kf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=R.comparator(e.documentKey,t.documentKey),n!==0?n:O(e.largestBatchId,t.largestBatchId))}/**
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
 */const Wf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Cn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Wf)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new g((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new g((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class fi{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Nt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Qe(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=pi(r.target.error);this.V.reject(new Qe(t,s))}}static open(t,n,r,s){try{return new fi(n,t.transaction(s,r))}catch(i){throw new Qe(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(w("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Xf(n)}}class Zt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Zt.S(Ie())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return w("SimpleDb","Removing database:",t),Xt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Ca())return!1;if(Zt.C())return!0;const t=Ie(),n=Zt.S(t),r=0<n&&n<10,s=Zt.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(w("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Qe(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new I(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new I(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Qe(t,o))},s.onupgradeneeded=i=>{w("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{w("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=fi.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(w("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Qf{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Xt(this.k.delete())}}class Qe extends I{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Pn(e){return e.name==="IndexedDbTransactionError"}class Xf{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(w("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(w("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Xt(r)}add(t){return w("SimpleDb","ADD",this.store.name,t,t),Xt(this.store.add(t))}get(t){return Xt(this.store.get(t)).next(n=>(n===void 0&&(n=null),w("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return w("SimpleDb","DELETE",this.store.name,t),Xt(this.store.delete(t))}count(){return w("SimpleDb","COUNT",this.store.name),Xt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new g((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){w("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{const o=pi(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new g((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Qf(a),u=n(a.primaryKey,a.value,c);if(u instanceof g){const l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>g.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Xt(e){return new g((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=pi(r.target.error);n(s)}})}let So=!1;function pi(e){const t=Zt.S(Ie());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return So||(So=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class mi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}mi._e=-1;function Nr(e){return e==null}function ar(e){return e===0&&1/e==-1/0}function Yf(e){return typeof e=="number"&&Number.isInteger(e)&&!ar(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function bo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function zc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ${constructor(t,n){this.comparator=t,this.root=n||Z.EMPTY}insert(t,n){return new $(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(t){return new $(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $n(this.root,t,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $n(this.root,t,this.comparator,!0)}}class $n{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Z{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Z.RED,this.left=s??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Z(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Z.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Z(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(t){this.comparator=t,this.data=new $(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(t){return new Co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new rt(this.comparator);return n.data=t,n}}class Co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new _t([])}unionWith(t){let n=new rt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new _t(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Hc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hc("Invalid base64 string: "+i):i}}(t);return new ut(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Jf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(e){if(M(!!e),typeof e=="string"){let t=0;const n=Jf.exec(e);if(M(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:W(e.seconds),nanos:W(e.nanos)}}function W(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ie(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
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
 */function gi(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _i(e){const t=e.mapValue.fields.__previous_value__;return gi(t)?_i(t):t}function pn(e){const t=zt(e.mapValue.fields.__local_write_time__.timestampValue);return new Q(t.seconds,t.nanos)}/**
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
 */class Zf{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class mn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const qn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gi(e)?4:tp(e)?9007199254740991:10:b()}function Dt(e,t){if(e===t)return!0;const n=oe(e);if(n!==oe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return pn(e).isEqual(pn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zt(s.timestampValue),a=zt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return ie(s.bytesValue).isEqual(ie(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return W(s.geoPointValue.latitude)===W(i.geoPointValue.latitude)&&W(s.geoPointValue.longitude)===W(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return W(s.integerValue)===W(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=W(s.doubleValue),a=W(i.doubleValue);return o===a?ar(o)===ar(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return be(e.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bo(o)!==bo(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Dt(o[c],a[c])))return!1;return!0}(e,t);default:return b()}}function gn(e,t){return(e.values||[]).find(n=>Dt(n,t))!==void 0}function Ce(e,t){if(e===t)return 0;const n=oe(e),r=oe(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=W(i.integerValue||i.doubleValue),c=W(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Po(e.timestampValue,t.timestampValue);case 4:return Po(pn(e),pn(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(i,o){const a=ie(i),c=ie(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=O(a[u],c[u]);if(l!==0)return l}return O(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=O(W(i.latitude),W(o.latitude));return a!==0?a:O(W(i.longitude),W(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ce(a[u],c[u]);if(l)return l}return O(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===qn.mapValue&&o===qn.mapValue)return 0;if(i===qn.mapValue)return 1;if(o===qn.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=O(c[h],l[h]);if(d!==0)return d;const f=Ce(a[c[h]],u[l[h]]);if(f!==0)return f}return O(c.length,l.length)}(e.mapValue,t.mapValue);default:throw b()}}function Po(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return O(e,t);const n=zt(e),r=zt(t),s=O(n.seconds,r.seconds);return s!==0?s:O(n.nanos,r.nanos)}function Pe(e){return Ds(e)}function Ds(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=zt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ie(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return R.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ds(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ds(n.fields[o])}`;return s+"}"}(e.mapValue):b()}function Do(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function xs(e){return!!e&&"integerValue"in e}function yi(e){return!!e&&"arrayValue"in e}function xo(e){return!!e&&"nullValue"in e}function Vo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qn(e){return!!e&&"mapValue"in e}function Xe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Le(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Xe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(t){this.value=t}static empty(){return new gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xe(n)}setAll(t){let n=et.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Qn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Le(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new gt(Xe(this.value))}}function Kc(e){const t=[];return Le(e.fields,(n,r)=>{const s=new et([n]);if(Qn(r)){const i=Kc(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new _t(t)}/**
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
 */class ot{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ot(t,0,P.min(),P.min(),P.min(),gt.empty(),0)}static newFoundDocument(t,n,r,s){return new ot(t,1,n,P.min(),r,s,0)}static newNoDocument(t,n){return new ot(t,2,n,P.min(),P.min(),gt.empty(),0)}static newUnknownDocument(t,n){return new ot(t,3,n,P.min(),P.min(),gt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ot&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class cr{constructor(t,n){this.position=t,this.inclusive=n}}function No(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),n.key):r=Ce(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ko(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Dt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class ur{constructor(t,n="asc"){this.field=t,this.dir=n}}function ep(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Wc{}class G extends Wc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new rp(t,n,r):n==="array-contains"?new op(t,r):n==="in"?new ap(t,r):n==="not-in"?new cp(t,r):n==="array-contains-any"?new up(t,r):new G(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new sp(t,r):new ip(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ce(n,this.value)):n!==null&&oe(this.value)===oe(n)&&this.matchesComparison(Ce(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends Wc{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Et(t,n)}matches(t){return Gc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Gc(e){return e.op==="and"}function Qc(e){return np(e)&&Gc(e)}function np(e){for(const t of e.filters)if(t instanceof Et)return!1;return!0}function Vs(e){if(e instanceof G)return e.field.canonicalString()+e.op.toString()+Pe(e.value);if(Qc(e))return e.filters.map(t=>Vs(t)).join(",");{const t=e.filters.map(n=>Vs(n)).join(",");return`${e.op}(${t})`}}function Xc(e,t){return e instanceof G?function(r,s){return s instanceof G&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(e,t):e instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xc(o,s.filters[a]),!0):!1}(e,t):void b()}function Yc(e){return e instanceof G?function(n){return`${n.field.canonicalString()} ${n.op} ${Pe(n.value)}`}(e):e instanceof Et?function(n){return n.op.toString()+" {"+n.getFilters().map(Yc).join(" ,")+"}"}(e):"Filter"}class rp extends G{constructor(t,n,r){super(t,n,r),this.key=R.fromName(r.referenceValue)}matches(t){const n=R.comparator(t.key,this.key);return this.matchesComparison(n)}}class sp extends G{constructor(t,n){super(t,"in",n),this.keys=Jc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class ip extends G{constructor(t,n){super(t,"not-in",n),this.keys=Jc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Jc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>R.fromName(r.referenceValue))}class op extends G{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return yi(n)&&gn(n.arrayValue,this.value)}}class ap extends G{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class cp extends G{constructor(t,n){super(t,"not-in",n)}matches(t){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class up extends G{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!yi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gn(this.value.arrayValue,r))}}/**
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
 */class lp{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Oo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new lp(e,t,n,r,s,i,o)}function vi(e){const t=D(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Vs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Pe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Pe(r)).join(",")),t.ce=n}return t.ce}function Ei(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ep(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ko(e.startAt,t.startAt)&&ko(e.endAt,t.endAt)}function Ns(e){return R.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Dn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hp(e,t,n,r,s,i,o,a){return new Dn(e,t,n,r,s,i,o,a)}function Zc(e){return new Dn(e)}function Lo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function tu(e){return e.collectionGroup!==null}function Ye(e){const t=D(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(et.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new ur(i,r))}),n.has(et.keyField().canonicalString())||t.le.push(new ur(et.keyField(),r))}return t.le}function St(e){const t=D(e);return t.he||(t.he=dp(t,Ye(e))),t.he}function dp(e,t){if(e.limitType==="F")return Oo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ur(s.field,i)});const n=e.endAt?new cr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new cr(e.startAt.position,e.startAt.inclusive):null;return Oo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function ks(e,t){const n=e.filters.concat([t]);return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Os(e,t,n){return new Dn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kr(e,t){return Ei(St(e),St(t))&&e.limitType===t.limitType}function eu(e){return`${vi(St(e))}|lt:${e.limitType}`}function pe(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Yc(s)).join(", ")}]`),Nr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Pe(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Pe(s)).join(",")),`Target(${r})`}(St(e))}; limitType=${e.limitType})`}function Or(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):R.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Ye(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=No(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Ye(r),s)||r.endAt&&!function(o,a,c){const u=No(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Ye(r),s))}(e,t)}function fp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nu(e){return(t,n)=>{let r=!1;for(const s of Ye(e)){const i=pp(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pp(e,t,n){const r=e.field.isKeyField()?R.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ce(c,u):b()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
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
 */class Me{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Le(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return zc(this.inner)}size(){return this.innerSize}}/**
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
 */const mp=new $(R.comparator);function Ot(){return mp}const ru=new $(R.comparator);function Ke(...e){let t=ru;for(const n of e)t=t.insert(n.key,n);return t}function su(e){let t=ru;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function te(){return Je()}function iu(){return Je()}function Je(){return new Me(e=>e.toString(),(e,t)=>e.isEqual(t))}const gp=new $(R.comparator),_p=new rt(R.comparator);function V(...e){let t=_p;for(const n of e)t=t.add(n);return t}const yp=new rt(O);function vp(){return yp}/**
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
 */function ou(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(t)?"-0":t}}function au(e){return{integerValue:""+e}}function Ep(e,t){return Yf(t)?au(t):ou(e,t)}/**
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
 */class Lr{constructor(){this._=void 0}}function wp(e,t,n){return e instanceof lr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gi(i)&&(i=_i(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof _n?uu(e,t):e instanceof yn?lu(e,t):function(s,i){const o=cu(s,i),a=Mo(o)+Mo(s.Ie);return xs(o)&&xs(s.Ie)?au(a):ou(s.serializer,a)}(e,t)}function Tp(e,t,n){return e instanceof _n?uu(e,t):e instanceof yn?lu(e,t):n}function cu(e,t){return e instanceof hr?function(r){return xs(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class lr extends Lr{}class _n extends Lr{constructor(t){super(),this.elements=t}}function uu(e,t){const n=hu(t);for(const r of e.elements)n.some(s=>Dt(s,r))||n.push(r);return{arrayValue:{values:n}}}class yn extends Lr{constructor(t){super(),this.elements=t}}function lu(e,t){let n=hu(t);for(const r of e.elements)n=n.filter(s=>!Dt(s,r));return{arrayValue:{values:n}}}class hr extends Lr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Mo(e){return W(e.integerValue||e.doubleValue)}function hu(e){return yi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ip(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof _n&&s instanceof _n||r instanceof yn&&s instanceof yn?be(r.elements,s.elements,Dt):r instanceof hr&&s instanceof hr?Dt(r.Ie,s.Ie):r instanceof lr&&s instanceof lr}(e.transform,t.transform)}class Ap{constructor(t,n){this.version=t,this.transformResults=n}}class yt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new yt}static exists(t){return new yt(void 0,t)}static updateTime(t){return new yt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Xn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Mr{}function du(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new wi(e.key,yt.none()):new xn(e.key,e.data,yt.none());{const n=e.data,r=gt.empty();let s=new rt(et.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new le(e.key,r,new _t(s.toArray()),yt.none())}}function Rp(e,t,n){e instanceof xn?function(s,i,o){const a=s.value.clone(),c=Uo(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof le?function(s,i,o){if(!Xn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Uo(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(fu(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Ze(e,t,n,r){return e instanceof xn?function(i,o,a,c){if(!Xn(i.precondition,o))return a;const u=i.value.clone(),l=jo(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof le?function(i,o,a,c){if(!Xn(i.precondition,o))return a;const u=jo(i.fieldTransforms,c,o),l=o.data;return l.setAll(fu(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return Xn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Sp(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=cu(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function Fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&be(r,s,(i,o)=>Ip(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class xn extends Mr{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class le extends Mr{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Uo(e,t,n){const r=new Map;M(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Tp(o,a,n[s]))}return r}function jo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,wp(i,o,t))}return r}class wi extends Mr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bp extends Mr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Cp{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Rp(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ze(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=iu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=du(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(P.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),V())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(n,r)=>Fo(n,r))&&be(this.baseMutations,t.baseMutations,(n,r)=>Fo(n,r))}}class Ti{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){M(t.mutations.length===r.length);let s=function(){return gp}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ti(t,n,r,s)}}/**
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
 */class Pp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Dp{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var K,N;function xp(e){switch(e){default:return b();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function pu(e){if(e===void 0)return Pt("GRPC error has no .code"),m.UNKNOWN;switch(e){case K.OK:return m.OK;case K.CANCELLED:return m.CANCELLED;case K.UNKNOWN:return m.UNKNOWN;case K.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case K.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case K.INTERNAL:return m.INTERNAL;case K.UNAVAILABLE:return m.UNAVAILABLE;case K.UNAUTHENTICATED:return m.UNAUTHENTICATED;case K.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case K.NOT_FOUND:return m.NOT_FOUND;case K.ALREADY_EXISTS:return m.ALREADY_EXISTS;case K.PERMISSION_DENIED:return m.PERMISSION_DENIED;case K.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case K.ABORTED:return m.ABORTED;case K.OUT_OF_RANGE:return m.OUT_OF_RANGE;case K.UNIMPLEMENTED:return m.UNIMPLEMENTED;case K.DATA_LOSS:return m.DATA_LOSS;default:return b()}}(N=K||(K={}))[N.OK=0]="OK",N[N.CANCELLED=1]="CANCELLED",N[N.UNKNOWN=2]="UNKNOWN",N[N.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",N[N.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",N[N.NOT_FOUND=5]="NOT_FOUND",N[N.ALREADY_EXISTS=6]="ALREADY_EXISTS",N[N.PERMISSION_DENIED=7]="PERMISSION_DENIED",N[N.UNAUTHENTICATED=16]="UNAUTHENTICATED",N[N.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",N[N.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",N[N.ABORTED=10]="ABORTED",N[N.OUT_OF_RANGE=11]="OUT_OF_RANGE",N[N.UNIMPLEMENTED=12]="UNIMPLEMENTED",N[N.INTERNAL=13]="INTERNAL",N[N.UNAVAILABLE=14]="UNAVAILABLE",N[N.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Vp(){return new TextEncoder}/**
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
 */const Np=new ve([4294967295,4294967295],0);function Bo(e){const t=Vp().encode(e),n=new kf;return n.update(t),new Uint8Array(n.digest())}function $o(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ve([n,r],0),new ve([s,i],0)]}class Ii{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new We(`Invalid padding: ${n}`);if(r<0)throw new We(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new We(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new We(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ve.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ve.fromNumber(r)));return s.compare(Np)===1&&(s=new ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Bo(t),[r,s]=$o(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ii(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Bo(t),[r,s]=$o(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class We extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,Vn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Fr(P.min(),s,new $(O),Ot(),V())}}class Vn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new Vn(r,n,V(),V(),V())}}/**
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
 */class Yn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class mu{constructor(t,n){this.targetId=t,this.fe=n}}class gu{constructor(t,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class qo{constructor(){this.ge=0,this.pe=Ho(),this.ye=ut.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),n=V(),r=V();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:b()}}),new Vn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ho()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,M(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class kp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ot(),this.Qe=zo(),this.Ke=new $(O)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:b()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ns(i))if(r===0){const o=new R(i.path);this.We(n,o,ot.newNoDocument(o,P.min()))}else M(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ie(r).toUint8Array()}catch(c){if(c instanceof Hc)return Se("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ii(o,s,i)}catch(c){return Se(c instanceof We?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ns(a.target)){const c=new R(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ot.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=V();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Fr(t,n,this.Ke,this.qe,r);return this.qe=Ot(),this.Qe=zo(),this.Ke=new $(O),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new qo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new rt(O),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new qo),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function zo(){return new $(R.comparator)}function Ho(){return new $(R.comparator)}const Op={asc:"ASCENDING",desc:"DESCENDING"},Lp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mp={and:"AND",or:"OR"};class Fp{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ls(e,t){return e.useProto3Json||Nr(t)?t:{value:t}}function dr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _u(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Up(e,t){return dr(e,t.toTimestamp())}function bt(e){return M(!!e),P.fromTimestamp(function(n){const r=zt(n);return new Q(r.seconds,r.nanos)}(e))}function Ai(e,t){return Ms(e,t).canonicalString()}function Ms(e,t){const n=function(s){return new U(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function yu(e){const t=U.fromString(e);return M(Iu(t)),t}function Fs(e,t){return Ai(e.databaseId,t.path)}function os(e,t){const n=yu(t);if(n.get(1)!==e.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new R(Eu(n))}function vu(e,t){return Ai(e.databaseId,t)}function jp(e){const t=yu(e);return t.length===4?U.emptyPath():Eu(t)}function Us(e){return new U(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Eu(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ko(e,t,n){return{name:Fs(e,t),fields:n.value.mapValue.fields}}function Bp(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(M(l===void 0||typeof l=="string"),ut.fromBase64String(l||"")):(M(l===void 0||l instanceof Uint8Array),ut.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:pu(u.code);return new I(l,u.message||"")}(o);n=new gu(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=os(e,r.document.name),i=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):P.min(),a=new gt({mapValue:{fields:r.document.fields}}),c=ot.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Yn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=os(e,r.document),i=r.readTime?bt(r.readTime):P.min(),o=ot.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Yn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=os(e,r.document),i=r.removedTargetIds||[];n=new Yn([],i,s,null)}else{if(!("filter"in t))return b();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Dp(s,i),a=r.targetId;n=new mu(a,o)}}return n}function $p(e,t){let n;if(t instanceof xn)n={update:Ko(e,t.key,t.value)};else if(t instanceof wi)n={delete:Fs(e,t.key)};else if(t instanceof le)n={update:Ko(e,t.key,t.data),updateMask:Yp(t.fieldMask)};else{if(!(t instanceof bp))return b();n={verify:Fs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof lr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hr)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw b()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Up(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(e,t.precondition)),n}function qp(e,t){return e&&e.length>0?(M(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?bt(s.updateTime):bt(i);return o.isEqual(P.min())&&(o=bt(i)),new Ap(o,s.transformResults||[])}(n,t))):[]}function zp(e,t){return{documents:[vu(e,t.path)]}}function Hp(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=vu(e,s);const i=function(u){if(u.length!==0)return Tu(Et.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:me(d.field),direction:Gp(d.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ls(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:s}}function Kp(e){let t=jp(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){M(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=wu(h);return d instanceof Et&&Qc(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new ur(ge(E.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Nr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new cr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new cr(f,d)}(n.endAt)),hp(t,s,o,i,a,"F",c,u)}function Wp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function wu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ge(n.unaryFilter.field);return G.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ge(n.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ge(n.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ge(n.unaryFilter.field);return G.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(e):e.fieldFilter!==void 0?function(n){return G.create(ge(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Et.create(n.compositeFilter.filters.map(r=>wu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(e):b()}function Gp(e){return Op[e]}function Qp(e){return Lp[e]}function Xp(e){return Mp[e]}function me(e){return{fieldPath:e.canonicalString()}}function ge(e){return et.fromServerFormat(e.fieldPath)}function Tu(e){return e instanceof G?function(n){if(n.op==="=="){if(Vo(n.value))return{unaryFilter:{field:me(n.field),op:"IS_NAN"}};if(xo(n.value))return{unaryFilter:{field:me(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vo(n.value))return{unaryFilter:{field:me(n.field),op:"IS_NOT_NAN"}};if(xo(n.value))return{unaryFilter:{field:me(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(n.field),op:Qp(n.op),value:n.value}}}(e):e instanceof Et?function(n){const r=n.getFilters().map(s=>Tu(s));return r.length===1?r[0]:{compositeFilter:{op:Xp(n.op),filters:r}}}(e):b()}function Yp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Iu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ft{constructor(t,n,r,s,i=P.min(),o=P.min(),a=ut.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Ft(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Jp{constructor(t){this.ct=t}}function Zp(e){const t=Kp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class tm{constructor(){this._n=new em}addToCollectionParentIndex(t,n){return this._n.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(qt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class em{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new rt(U.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(U.comparator)).toArray()}}/**
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
 */class De{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new De(0)}static Bn(){return new De(-1)}}/**
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
 */class nm{constructor(){this.changes=new Me(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ot.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class rm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class sm{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Ze(r.mutation,s,_t.empty(),Q.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,n,r=V()){const s=te();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Ke();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=te();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,V()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ot();const o=Je(),a=function(){return Je()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof le)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Ze(l.mutation,u,l.mutation.getFieldMask(),Q.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new rm(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Je();let s=new $((o,a)=>o-a),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||_t.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||V()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=iu();l.forEach(d=>{if(!i.has(d)){const f=du(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return R.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):tu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):g.resolve(te());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,V())).next(l=>({batchId:a,changes:su(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new R(n)).next(r=>{let s=Ke();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Ke();return this.indexManager.getCollectionParents(t,i).next(a=>g.forEach(a,c=>{const u=function(h,d){return new Dn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,ot.newInvalidDocument(l)))});let a=Ke();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&Ze(l.mutation,u,_t.empty(),Q.now()),Or(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class im{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Zp(s.bundledQuery),readTime:bt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class om{constructor(){this.overlays=new $(R.comparator),this.hr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=te();return g.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const s=te(),i=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new $((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=te(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=te(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Pp(n,r));let i=this.hr.get(n);i===void 0&&(i=V(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Ri{constructor(){this.Pr=new rt(X.Ir),this.Tr=new rt(X.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new X(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new X(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new R(new U([])),r=new X(n,t),s=new X(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new R(new U([])),r=new X(n,t),s=new X(n,t+1);let i=V();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new X(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class X{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return R.comparator(t.key,n.key)||O(t.pr,n.pr)}static Er(t,n){return O(t.pr,n.pr)||R.comparator(t.key,n.key)}}/**
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
 */class am{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new rt(X.Ir)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cp(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new X(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new X(n,0),s=new X(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new rt(O);return n.forEach(s=>{const i=new X(s,0),o=new X(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;R.isDocumentKey(i)||(i=i.child(""));const o=new X(new R(i),0);let a=new rt(O);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){M(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,s=>{const i=new X(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new X(n,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class cm{constructor(t){this.vr=t,this.docs=function(){return new $(R.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(t,n){let r=Ot();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ot();const o=n.path,a=new R(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Kf(Hf(l),r)<=0||(s.has(l.key)||Or(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,r,s){b()}Fr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new um(this)}getSize(t){return g.resolve(this.size)}}class um extends nm{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class lm{constructor(t){this.persistence=t,this.Mr=new Me(n=>vi(n),Ei),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ri,this.targetCount=0,this.Br=De.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new De(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.qn(n),g.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Nr.containsKey(n))}}/**
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
 */class hm{constructor(t,n){this.Lr={},this.overlays={},this.kr=new mi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new lm(this),this.indexManager=new tm,this.remoteDocumentCache=function(s){return new cm(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Jp(n),this.$r=new im(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new om,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new am(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){w("MemoryPersistence","Starting transaction:",t);const s=new dm(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class dm extends Gf{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.zr=new Ri,this.jr=null}static Hr(t){return new Si(t)}get Jr(){if(this.jr)return this.jr;throw b()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const s=R.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,P.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class bi{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=V(),s=V();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bi(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class pm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ph()?8:Zt.v(Ie())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fm;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?($e()<=k.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",pe(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):($e()<=k.DEBUG&&w("QueryEngine","Query:",pe(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?($e()<=k.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",pe(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(n))):g.resolve())}ji(t,n){if(Lo(n))return g.resolve(null);let r=St(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Os(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=V(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,Os(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,s){return Lo(n)||s.isEqual(P.min())?g.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?g.resolve(null):($e()<=k.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pe(n)),this.es(t,o,n,zf(s,-1)).next(a=>a))})}Zi(t,n){let r=new rt(nu(t));return n.forEach((s,i)=>{Or(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return $e()<=k.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",pe(n)),this.zi.getDocumentsMatchingQuery(t,n,qt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class mm{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new $(O),this.rs=new Me(i=>vi(i),Ei),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function gm(e,t,n,r){return new mm(e,t,n,r)}async function Au(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=V();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function _m(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(E=>{f=f.next(()=>l.getEntry(c,E)).next(v=>{const _=u.docVersions.get(E);M(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=V();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ru(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function ym(e,t){const n=D(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(v,_,S){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,l)&&a.push(n.Qr.updateTargetData(i,f))});let c=Ot(),u=V();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(vm(i,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(P.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function vm(e,t,n){let r=V(),s=V();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ot();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(P.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function Em(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function wm(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,g.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Ft(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function js(e,t,n){const r=D(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Pn(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Wo(e,t,n){const r=D(e);let s=P.min(),i=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=D(c),d=h.rs.get(l);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,St(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:P.min(),n?i:V())).next(a=>(Tm(r,fp(t),a),{documents:a,hs:i})))}function Tm(e,t,n){let r=e.ss.get(t)||P.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Go{constructor(){this.activeTargetIds=vp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Im{constructor(){this.no=new Go,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Go,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Am{io(t){}shutdown(){}}/**
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
 */class Qo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let zn=null;function as(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
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
 */const Rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const st="WebChannelConnection";class bm extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=as(),c=this.bo(n,r.toUriEncodedString());w("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(w("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw Se("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oe}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Rm[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=as();return new Promise((o,a)=>{const c=new Nf;c.setWithCredentials(!0),c.listenOnce(xf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case is.NO_ERROR:const l=c.getResponseJson();w(st,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case is.TIMEOUT:w(st,`RPC '${t}' ${i} timed out`),a(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case is.HTTP_ERROR:const h=c.getStatus();if(w(st,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const E=function(_){const S=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(S)>=0?S:m.UNKNOWN}(f.status);a(new I(E,f.message))}else a(new I(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(m.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{w(st,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);w(st,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const s=as(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Pf(),a=Df(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");w(st,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const E=new Sm({lo:_=>{f?w(st,`Not sending because RPC '${t}' stream ${s} is closed:`,_):(d||(w(st,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),w(st,`RPC '${t}' stream ${s} sending:`,_),h.send(_))},ho:()=>h.close()}),v=(_,S,y)=>{_.listen(S,x=>{try{y(x)}catch(j){setTimeout(()=>{throw j},0)}})};return v(h,Bn.EventType.OPEN,()=>{f||w(st,`RPC '${t}' stream ${s} transport opened.`)}),v(h,Bn.EventType.CLOSE,()=>{f||(f=!0,w(st,`RPC '${t}' stream ${s} transport closed`),E.Vo())}),v(h,Bn.EventType.ERROR,_=>{f||(f=!0,Se(st,`RPC '${t}' stream ${s} transport errored:`,_),E.Vo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),v(h,Bn.EventType.MESSAGE,_=>{var S;if(!f){const y=_.data[0];M(!!y);const x=y,j=x.error||((S=x[0])===null||S===void 0?void 0:S.error);if(j){w(st,`RPC '${t}' stream ${s} received error:`,j);const xt=j.status;let wt=function(Al){const Ji=K[Al];if(Ji!==void 0)return pu(Ji)}(xt),de=j.message;wt===void 0&&(wt=m.INTERNAL,de="Unknown error status: "+xt+" with message "+j.message),f=!0,E.Vo(new I(wt,de)),h.close()}else w(st,`RPC '${t}' stream ${s} received:`,y),E.mo(y)}}),v(a,Vf.STAT_EVENT,_=>{_.stat===Ao.PROXY?w(st,`RPC '${t}' stream ${s} detected buffering proxy`):_.stat===Ao.NOPROXY&&w(st,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function cs(){return typeof document<"u"?document:null}/**
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
 */function Ur(e){return new Fp(e,!0)}/**
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
 */class Su{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&w("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class bu{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Su(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Pt(n.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new I(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cm extends bu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Bp(this.serializer,t),r=function(i){if(!("targetChange"in i))return P.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?bt(o.readTime):P.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Us(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ns(c)?{documents:zp(i,c)}:{query:Hp(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=_u(i,o.resumeToken);const u=Ls(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=dr(i,o.snapshotVersion.toTimestamp());const u=Ls(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Wp(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Us(this.serializer),n.removeTarget=t,this.t_(n)}}class Pm extends bu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=qp(t.writeResults,t.commitTime),r=bt(t.commitTime);return this.listener.T_(r,n)}return M(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Us(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>$p(this.serializer,r))};this.t_(n)}}/**
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
 */class Dm extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Ms(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Ms(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class xm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Pt(n),this.g_=!1):w("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Vm{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{he(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=D(c);u.v_.add(4),await Nn(u),u.x_.set("Unknown"),u.v_.delete(4),await jr(u)}(this))})}),this.x_=new xm(r,s)}}async function jr(e){if(he(e))for(const t of e.F_)await t(!0)}async function Nn(e){for(const t of e.F_)await t(!1)}function Cu(e,t){const n=D(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Di(n)?Pi(n):Fe(n).Jo()&&Ci(n,t))}function Pu(e,t){const n=D(e),r=Fe(n);n.C_.delete(t),r.Jo()&&Du(n,t),n.C_.size===0&&(r.Jo()?r.Xo():he(n)&&n.x_.set("Unknown"))}function Ci(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Fe(e).c_(t)}function Du(e,t){e.O_.Oe(t),Fe(e).l_(t)}function Pi(e){e.O_=new kp({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Fe(e).start(),e.x_.p_()}function Di(e){return he(e)&&!Fe(e).Ho()&&e.C_.size>0}function he(e){return D(e).v_.size===0}function xu(e){e.O_=void 0}async function Nm(e){e.C_.forEach((t,n)=>{Ci(e,t)})}async function km(e,t){xu(e),Di(e)?(e.x_.S_(t),Pi(e)):e.x_.set("Unknown")}async function Om(e,t,n){if(e.x_.set("Online"),t instanceof gu&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await fr(e,r)}else if(t instanceof Yn?e.O_.$e(t):t instanceof mu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(P.min()))try{const r=await Ru(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(ut.EMPTY_BYTE_STRING,l.snapshotVersion)),Du(i,c);const h=new Ft(l.target,c,u,l.sequenceNumber);Ci(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){w("RemoteStore","Failed to raise snapshot:",r),await fr(e,r)}}async function fr(e,t,n){if(!Pn(t))throw t;e.v_.add(1),await Nn(e),e.x_.set("Offline"),n||(n=()=>Ru(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await jr(e)})}function Vu(e,t){return t().catch(n=>fr(e,n,t))}async function Br(e){const t=D(e),n=Ht(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Lm(t);)try{const s=await Em(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Mm(t,s)}catch(s){await fr(t,s)}Nu(t)&&ku(t)}function Lm(e){return he(e)&&e.D_.length<10}function Mm(e,t){e.D_.push(t);const n=Ht(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Nu(e){return he(e)&&!Ht(e).Ho()&&e.D_.length>0}function ku(e){Ht(e).start()}async function Fm(e){Ht(e).d_()}async function Um(e){const t=Ht(e);for(const n of e.D_)t.I_(n.mutations)}async function jm(e,t,n){const r=e.D_.shift(),s=Ti.from(r,t,n);await Vu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Br(e)}async function Bm(e,t){t&&Ht(e).P_&&await async function(r,s){if(function(o){return xp(o)&&o!==m.ABORTED}(s.code)){const i=r.D_.shift();Ht(r).Zo(),await Vu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Br(r)}}(e,t),Nu(e)&&ku(e)}async function Xo(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const r=he(n);n.v_.add(3),await Nn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await jr(n)}async function $m(e,t){const n=D(e);t?(n.v_.delete(2),await jr(n)):t||(n.v_.add(2),await Nn(n),n.x_.set("Unknown"))}function Fe(e){return e.N_||(e.N_=function(n,r,s){const i=D(n);return i.R_(),new Cm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Nm.bind(null,e),To:km.bind(null,e),u_:Om.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Di(e)?Pi(e):e.x_.set("Unknown")):(await e.N_.stop(),xu(e))})),e.N_}function Ht(e){return e.B_||(e.B_=function(n,r,s){const i=D(n);return i.R_(),new Pm(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Fm.bind(null,e),To:Bm.bind(null,e),E_:Um.bind(null,e),T_:jm.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Br(e)):(await e.B_.stop(),e.D_.length>0&&(w("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
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
 */class xi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new xi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vi(e,t){if(Pt("AsyncQueue",`${t}: ${e}`),Pn(e))return new I(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Ee{constructor(t){this.comparator=t?(n,r)=>t(n,r)||R.comparator(n.key,r.key):(n,r)=>R.comparator(n.key,r.key),this.keyedMap=Ke(),this.sortedSet=new $(this.comparator)}static emptySet(t){return new Ee(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ee)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ee;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Yo{constructor(){this.L_=new $(R.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):b():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class xe{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xe(t,n,Ee.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&kr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class qm{constructor(){this.q_=void 0,this.Q_=[]}}class zm{constructor(){this.queries=new Me(t=>eu(t),kr),this.onlineState="Unknown",this.K_=new Set}}async function Hm(e,t){const n=D(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new qm),s)try{i.q_=await n.onListen(r)}catch(o){const a=Vi(o,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&Ni(n)}async function Km(e,t){const n=D(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Wm(e,t){const n=D(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&Ni(n)}function Gm(e,t,n){const r=D(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Ni(e){e.K_.forEach(t=>{t.next()})}class Qm{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new xe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class Ou{constructor(t){this.key=t}}class Lu{constructor(t){this.key=t}}class Xm{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=V(),this.mutatedKeys=V(),this.ua=nu(t),this.ca=new Ee(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Yo,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const d=s.get(l),f=Or(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?E!==v&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(f?(o=o.add(f),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,h)=>function(f,E){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return v(f)-v(E)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new xe(this.query,t.ca,i,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Yo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=V(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Lu(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Ou(r))}),n}Ra(t){this.oa=t.hs,this.aa=V();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return xe.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class Ym{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Jm{constructor(t){this.key=t,this.ma=!1}}class Zm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Me(a=>eu(a),kr),this.pa=new Map,this.ya=new Set,this.wa=new $(R.comparator),this.Sa=new Map,this.ba=new Ri,this.Da={},this.Ca=new Map,this.va=De.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function tg(e,t){const n=lg(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await wm(n.localStore,St(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await eg(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Cu(n.remoteStore,o)}return s}async function eg(e,t,n,r,s){e.Ma=(h,d,f)=>async function(v,_,S,y){let x=_.view.ha(S);x.Xi&&(x=await Wo(v.localStore,_.query,!1).then(({documents:de})=>_.view.ha(de,x)));const j=y&&y.targetChanges.get(_.targetId),xt=y&&y.targetMismatches.get(_.targetId)!=null,wt=_.view.applyChanges(x,v.isPrimaryClient,j,xt);return Zo(v,_.targetId,wt.da),wt.snapshot}(e,h,d,f);const i=await Wo(e.localStore,t,!0),o=new Xm(t,i.hs),a=o.ha(i.documents),c=Vn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);Zo(e,n,u.da);const l=new Ym(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function ng(e,t){const n=D(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!kr(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await js(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pu(n.remoteStore,r.targetId),Bs(n,r.targetId)}).catch(Cn)):(Bs(n,r.targetId),await js(n.localStore,r.targetId,!0))}async function rg(e,t,n){const r=hg(e);try{const s=await function(o,a){const c=D(o),u=Q.now(),l=a.reduce((f,E)=>f.add(E.key),V());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Ot(),v=V();return c.os.getEntries(f,l).next(_=>{E=_,E.forEach((S,y)=>{y.isValidDocument()||(v=v.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,E)).next(_=>{h=_;const S=[];for(const y of a){const x=Sp(y,h.get(y.key).overlayedDocument);x!=null&&S.push(new le(y.key,x,Kc(x.value.mapValue),yt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,S,a)}).next(_=>{d=_;const S=_.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,_.batchId,S)})}).then(()=>({batchId:d.batchId,changes:su(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new $(O)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await kn(r,s.changes),await Br(r.remoteStore)}catch(s){const i=Vi(s,"Failed to persist write");n.reject(i)}}async function Mu(e,t){const n=D(e);try{const r=await ym(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(M(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?M(o.ma):s.removedDocuments.size>0&&(M(o.ma),o.ma=!1))}),await kn(n,r,t)}catch(r){await Cn(r)}}function Jo(e,t,n){const r=D(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=D(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&Ni(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sg(e,t,n){const r=D(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new $(R.comparator);o=o.insert(i,ot.newNoDocument(i,P.min()));const a=V().add(i),c=new Fr(P.min(),new Map,new $(O),o,a);await Mu(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),ki(r)}else await js(r.localStore,t,!1).then(()=>Bs(r,t,n)).catch(Cn)}async function ig(e,t){const n=D(e),r=t.batch.batchId;try{const s=await _m(n.localStore,t);Uu(n,r,null),Fu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await kn(n,s)}catch(s){await Cn(s)}}async function og(e,t,n){const r=D(e);try{const s=await function(o,a){const c=D(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(M(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);Uu(r,t,n),Fu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await kn(r,s)}catch(s){await Cn(s)}}function Fu(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function Uu(e,t,n){const r=D(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Bs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||ju(e,r)})}function ju(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(Pu(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),ki(e))}function Zo(e,t,n){for(const r of n)r instanceof Ou?(e.ba.addReference(r.key,t),ag(e,r)):r instanceof Lu?(w("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||ju(e,r.key)):b()}function ag(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(w("SyncEngine","New document in limbo: "+n),e.ya.add(r),ki(e))}function ki(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new R(U.fromString(t)),r=e.va.next();e.Sa.set(r,new Jm(n)),e.wa=e.wa.insert(n,r),Cu(e.remoteStore,new Ft(St(Zc(n.path)),r,"TargetPurposeLimboResolution",mi._e))}}async function kn(e,t,n){const r=D(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){s.push(u);const l=bi.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){const l=D(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Pn(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ns.get(d),E=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(E);l.ns=l.ns.insert(d,v)}}}(r.localStore,i))}async function cg(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const r=await Au(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new I(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await kn(n,r.us)}}function ug(e,t){const n=D(e),r=n.Sa.get(t);if(r&&r.ma)return V().add(r.key);{let s=V();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function lg(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ug.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sg.bind(null,t),t.fa.u_=Wm.bind(null,t.eventManager),t.fa.xa=Gm.bind(null,t.eventManager),t}function hg(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ig.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=og.bind(null,t),t}class ta{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ur(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return gm(this.persistence,new pm,t.initialUser,this.serializer)}createPersistence(t){return new hm(Si.Hr,this.serializer)}createSharedClientState(t){return new Im}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cg.bind(null,this.syncEngine),await $m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zm}()}createDatastore(t){const n=Ur(t.databaseInfo.databaseId),r=function(i){return new bm(i)}(t.databaseInfo);return function(i,o,a,c){return new Dm(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Vm(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Jo(this.syncEngine,n,0),function(){return Qo.D()?new Qo:new Am}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new Zm(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=D(r);w("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Nn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class fg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Pt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class pg{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=qc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{w("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(w("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Vi(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function us(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Au(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ea(e,t){e.asyncQueue.verifyOperationInProgress();const n=await gg(e);w("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Xo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Xo(t.remoteStore,s)),e._onlineComponents=t}function mg(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function gg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){w("FirestoreClient","Using user provided OfflineComponentProvider");try{await us(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!mg(n))throw n;Se("Error using user provided cache. Falling back to memory cache: "+n),await us(e,new ta)}}else w("FirestoreClient","Using default OfflineComponentProvider"),await us(e,new ta);return e._offlineComponents}async function Bu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w("FirestoreClient","Using user provided OnlineComponentProvider"),await ea(e,e._uninitializedComponentsProvider._online)):(w("FirestoreClient","Using default OnlineComponentProvider"),await ea(e,new dg))),e._onlineComponents}function _g(e){return Bu(e).then(t=>t.syncEngine)}async function yg(e){const t=await Bu(e),n=t.eventManager;return n.onListen=tg.bind(null,t.syncEngine),n.onUnlisten=ng.bind(null,t.syncEngine),n}function vg(e,t,n={}){const r=new Nt;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new fg({next:d=>{o.enqueueAndForget(()=>Km(i,h)),d.fromCache&&c.source==="server"?u.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Qm(a,l,{includeMetadataChanges:!0,Z_:!0});return Hm(i,h)}(await yg(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function $u(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const na=new Map;/**
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
 */function qu(e,t,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Eg(e,t,n,r){if(t===!0&&r===!0)throw new I(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ra(e){if(!R.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sa(e){if(R.isDocumentKey(e))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function $r(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":b()}function ae(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$r(e);throw new I(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class ia{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Eg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$u((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new I(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class qr{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Of;switch(r.type){case"firstParty":return new Uf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=na.get(n);r&&(w("ComponentProvider","Removing Datastore"),na.delete(n),r.terminate())}(this),Promise.resolve()}}function wg(e,t,n,r={}){var s;const i=(e=ae(e,qr))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=it.MOCK_USER;else{a=ba(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new it(u)}e._authCredentials=new Lf(new $c(a,c))}}/**
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
 */class Ue{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ue(this.firestore,t,this._query)}}class ft{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class $t extends Ue{constructor(t,n,r){super(t,n,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new R(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function Oi(e,t,...n){if(e=Ct(e),qu("collection","path",t),e instanceof qr){const r=U.fromString(t,...n);return sa(r),new $t(e,null,r)}{if(!(e instanceof ft||e instanceof $t))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return sa(r),new $t(e.firestore,null,r)}}function Li(e,t,...n){if(e=Ct(e),arguments.length===1&&(t=qc.newId()),qu("doc","path",t),e instanceof qr){const r=U.fromString(t,...n);return ra(r),new ft(e,null,new R(r))}{if(!(e instanceof ft||e instanceof $t))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(U.fromString(t,...n));return ra(r),new ft(e.firestore,e instanceof $t?e.converter:null,new R(r))}}/**
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
 */class Tg{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Su(this,"async_queue_retry"),this._u=()=>{const n=cs();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=cs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=cs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new Nt;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Pn(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=xi.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&b()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class On extends qr{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Tg}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ku(this),this._firestoreClient.terminate()}}function zu(e,t){const n=typeof e=="object"?e:La(),r=typeof e=="string"?e:t||"(default)",s=Na(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ra("firestore");i&&wg(s,...i)}return s}function Hu(e){return e._firestoreClient||Ku(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ku(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new Zf(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,$u(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new pg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(ut.fromBase64String(t))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ve(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Mi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Wu{constructor(t){this._methodName=t}}/**
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
 */class Fi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}/**
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
 */const Ig=/^__.*__$/;class Ag{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,n,this.fieldTransforms):new xn(t,this.data,n,this.fieldTransforms)}}function Gu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Ui{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Ui(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return pr(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Gu(this.du)&&Ig.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Rg{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ur(t)}Su(t,n,r,s=!1){return new Ui({du:t,methodName:n,wu:r,path:et.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ji(e){const t=e._freezeSettings(),n=Ur(e._databaseId);return new Rg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Qu(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);Ju("Data must be an object, but it was:",o,r);const a=Xu(r,o);let c,u;if(i.merge)c=new _t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=bg(t,h,n);if(!o.contains(d))throw new I(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Pg(l,d)||l.push(d)}c=new _t(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Ag(new gt(a),c,u)}function Sg(e,t,n,r=!1){return Bi(n,e.Su(r?4:3,t))}function Bi(e,t){if(Yu(e=Ct(e)))return Ju("Unsupported field value:",t,e),Xu(e,t);if(e instanceof Wu)return function(r,s){if(!Gu(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Bi(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ep(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Q.fromDate(r);return{timestampValue:dr(s.serializer,i)}}if(r instanceof Q){const i=new Q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dr(s.serializer,i)}}if(r instanceof Fi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:_u(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ai(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${$r(r)}`)}(e,t)}function Xu(e,t){const n={};return zc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Le(e,(r,s)=>{const i=Bi(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Yu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Q||e instanceof Fi||e instanceof Ve||e instanceof ft||e instanceof Wu)}function Ju(e,t,n){if(!Yu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$r(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function bg(e,t,n){if((t=Ct(t))instanceof Mi)return t._internalPath;if(typeof t=="string")return Zu(e,t);throw pr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Cg=new RegExp("[~\\*/\\[\\]]");function Zu(e,t,n){if(t.search(Cg)>=0)throw pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mi(...t.split("."))._internalPath}catch{throw pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new I(m.INVALID_ARGUMENT,a+e+c)}function Pg(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class tl{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field($i("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Dg extends tl{data(){return super.data()}}function $i(e,t){return typeof t=="string"?Zu(e,t):t instanceof Mi?t._internalPath:t._delegate._internalPath}/**
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
 */function xg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qi{}class Vg extends qi{}function el(e,t,...n){let r=[];t instanceof qi&&r.push(t),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof zi).length,a=i.filter(c=>c instanceof zr).length;if(o>1||o>0&&a>0)throw new I(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class zr extends Vg{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new zr(t,n,r)}_apply(t){const n=this._parse(t);return nl(t._query,n),new Ue(t.firestore,t.converter,ks(t._query,n))}_parse(t){const n=ji(t.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new I(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ca(h,l);const f=[];for(const E of h)f.push(aa(c,i,E));d={arrayValue:{values:f}}}else d=aa(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ca(h,l),d=Sg(a,o,h,l==="in"||l==="not-in");return G.create(u,l,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function oa(e,t,n){const r=t,s=$i("where",e);return zr._create(s,r,n)}class zi extends qi{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new zi(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Et.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)nl(o,c),o=ks(o,c)}(t._query,n),new Ue(t.firestore,t.converter,ks(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function aa(e,t,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new I(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tu(t)&&n.indexOf("/")!==-1)throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(U.fromString(n));if(!R.isDocumentKey(r))throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Do(e,new R(r))}if(n instanceof ft)return Do(e,n._key);throw new I(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$r(n)}.`)}function ca(e,t){if(!Array.isArray(e)||e.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function nl(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ng{convertValue(t,n="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw b()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Le(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Fi(W(t.latitude),W(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=_i(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(pn(t));default:return null}}convertTimestamp(t){const n=zt(t);return new Q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=U.fromString(t);M(Iu(r));const s=new mn(r.get(1),r.get(3)),i=new R(r.popFirst(5));return s.isEqual(n)||Pt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function rl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Hn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kg extends tl{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Jn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field($i("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jn extends kg{data(t={}){return super.data(t)}}class Og{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Hn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Jn(this._firestore,this._userDataWriter,r.key,r,new Hn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Jn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Jn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Hn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Lg(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Lg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}class Mg extends Ng{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function sl(e){e=ae(e,Ue);const t=ae(e.firestore,On),n=Hu(t),r=new Mg(t);return xg(e._query),vg(n,e._query).then(s=>new Og(t,r,e,s))}function Fg(e,t,n){e=ae(e,ft);const r=ae(e.firestore,On),s=rl(e.converter,t,n);return Hi(r,[Qu(ji(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,yt.none())])}function Ug(e){return Hi(ae(e.firestore,On),[new wi(e._key,yt.none())])}function jg(e,t){const n=ae(e.firestore,On),r=Li(e),s=rl(e.converter,t);return Hi(n,[Qu(ji(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,yt.exists(!1))]).then(()=>r)}function Hi(e,t){return function(r,s){const i=new Nt;return r.asyncQueue.enqueueAndForget(async()=>rg(await _g(r),s,i)),i.promise}(Hu(e),t)}(function(t,n=!0){(function(s){Oe=s})(ka),nn(new Ae("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new On(new Mf(r.getProvider("auth-internal")),new Bf(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Bt(Ro,"4.4.3",t),Bt(Ro,"4.4.3","esm2017")})();/**
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
 */const il="firebasestorage.googleapis.com",ol="storageBucket",Bg=2*60*1e3,$g=10*60*1e3;/**
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
 */class H extends Kt{constructor(t,n,r=0){super(ls(t),`Firebase Storage: ${n} (${ls(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,H.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ls(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var z;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(z||(z={}));function ls(e){return"storage/"+e}function Ki(){const e="An unknown error occurred, please check the error payload for server response.";return new H(z.UNKNOWN,e)}function qg(e){return new H(z.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function zg(e){return new H(z.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hg(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new H(z.UNAUTHENTICATED,e)}function Kg(){return new H(z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Wg(e){return new H(z.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Gg(){return new H(z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qg(){return new H(z.CANCELED,"User canceled the upload/download.")}function Xg(e){return new H(z.INVALID_URL,"Invalid URL '"+e+"'.")}function Yg(e){return new H(z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Jg(){return new H(z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ol+"' property when initializing the app?")}function Zg(){return new H(z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function t_(){return new H(z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function e_(e){return new H(z.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $s(e){return new H(z.INVALID_ARGUMENT,e)}function al(){return new H(z.APP_DELETED,"The Firebase app was deleted.")}function n_(e){return new H(z.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function tn(e,t){return new H(z.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function qe(e){throw new H(z.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class dt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=dt.makeFromUrl(t,n)}catch{return new dt(t,"")}if(r.path==="")return r;throw Yg(t)}static makeFromUrl(t,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(j){j.path_=decodeURIComponent(j.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${s}/o${d}`,"i"),E={bucket:1,path:3},v=n===il?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",S=new RegExp(`^https?://${v}/${s}/${_}`,"i"),x=[{regex:a,indices:c,postModify:i},{regex:f,indices:E,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let j=0;j<x.length;j++){const xt=x[j],wt=xt.regex.exec(t);if(wt){const de=wt[xt.indices.bucket];let Ln=wt[xt.indices.path];Ln||(Ln=""),r=new dt(de,Ln),xt.postModify(r);break}}if(r==null)throw Xg(t);return r}}class r_{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function s_(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,t.apply(null,_))}function h(_){s=setTimeout(()=>{s=null,e(f,c())},_)}function d(){i&&clearTimeout(i)}function f(_,...S){if(u){d();return}if(_){d(),l.call(null,_,...S);return}if(c()||o){d(),l.call(null,_,...S);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,h(x)}let E=!1;function v(_){E||(E=!0,d(),!u&&(s!==null?(_||(a=2),clearTimeout(s),h(0)):_||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function i_(e){e(!1)}/**
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
 */function o_(e){return e!==void 0}function a_(e){return typeof e=="object"&&!Array.isArray(e)}function Wi(e){return typeof e=="string"||e instanceof String}function ua(e){return Gi()&&e instanceof Blob}function Gi(){return typeof Blob<"u"}function la(e,t,n,r){if(r<t)throw $s(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw $s(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
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
 */function Qi(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function cl(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var ne;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(ne||(ne={}));/**
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
 */function c_(e,t){const n=e>=500&&e<600,s=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||s||i}/**
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
 */class u_{constructor(t,n,r,s,i,o,a,c,u,l,h,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,E)=>{this.resolve_=f,this.reject_=E,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new Kn(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ne.NO_ERROR,c=i.getStatus();if(!a||c_(c,this.additionalRetryCodes_)&&this.retry){const l=i.getErrorCode()===ne.ABORT;r(!1,new Kn(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Kn(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());o_(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ki();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?al():Qg();o(c)}else{const c=Gg();o(c)}};this.canceled_?n(!1,new Kn(!1,null,!0)):this.backoffId_=s_(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&i_(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kn{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function l_(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function h_(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function d_(e,t){t&&(e["X-Firebase-GMPID"]=t)}function f_(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function p_(e,t,n,r,s,i,o=!0){const a=cl(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return d_(u,t),l_(u,n),h_(u,i),f_(u,r),new u_(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}/**
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
 */function m_(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function g_(...e){const t=m_();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Gi())return new Blob(e);throw new H(z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function __(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
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
 */function y_(e){if(typeof atob>"u")throw e_("base-64");return atob(e)}/**
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
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hs{constructor(t,n){this.data=t,this.contentType=n||null}}function v_(e,t){switch(e){case Rt.RAW:return new hs(ul(t));case Rt.BASE64:case Rt.BASE64URL:return new hs(ll(e,t));case Rt.DATA_URL:return new hs(w_(t),T_(t))}throw Ki()}function ul(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=r,o=e.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function E_(e){let t;try{t=decodeURIComponent(e)}catch{throw tn(Rt.DATA_URL,"Malformed data URL.")}return ul(t)}function ll(e,t){switch(e){case Rt.BASE64:{const s=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(s||i)throw tn(e,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const s=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(s||i)throw tn(e,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=y_(t)}catch(s){throw s.message.includes("polyfill")?s:tn(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class hl{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw tn(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=I_(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function w_(e){const t=new hl(e);return t.base64?ll(Rt.BASE64,t.rest):E_(t.rest)}function T_(e){return new hl(e).contentType}function I_(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class Mt{constructor(t,n){let r=0,s="";ua(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,n){if(ua(this.data_)){const r=this.data_,s=__(r,t,n);return s===null?null:new Mt(s)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new Mt(r,!0)}}static getBlob(...t){if(Gi()){const n=t.map(r=>r instanceof Mt?r.data_:r);return new Mt(g_.apply(null,n))}else{const n=t.map(o=>Wi(o)?v_(Rt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mt(s,!0)}}uploadData(){return this.data_}}/**
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
 */function dl(e){let t;try{t=JSON.parse(e)}catch{return null}return a_(t)?t:null}/**
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
 */function A_(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function R_(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function fl(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function S_(e,t){return t}class lt{constructor(t,n,r,s){this.server=t,this.local=n||t,this.writable=!!r,this.xform=s||S_}}let Wn=null;function b_(e){return!Wi(e)||e.length<2?e:fl(e)}function pl(){if(Wn)return Wn;const e=[];e.push(new lt("bucket")),e.push(new lt("generation")),e.push(new lt("metageneration")),e.push(new lt("name","fullPath",!0));function t(i,o){return b_(o)}const n=new lt("name");n.xform=t,e.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new lt("size");return s.xform=r,e.push(s),e.push(new lt("timeCreated")),e.push(new lt("updated")),e.push(new lt("md5Hash",null,!0)),e.push(new lt("cacheControl",null,!0)),e.push(new lt("contentDisposition",null,!0)),e.push(new lt("contentEncoding",null,!0)),e.push(new lt("contentLanguage",null,!0)),e.push(new lt("contentType",null,!0)),e.push(new lt("metadata","customMetadata",!0)),Wn=e,Wn}function C_(e,t){function n(){const r=e.bucket,s=e.fullPath,i=new dt(r,s);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function P_(e,t,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,t[o.server])}return C_(r,e),r}function ml(e,t,n){const r=dl(t);return r===null?null:P_(e,r,n)}function D_(e,t,n,r){const s=dl(t);if(s===null||!Wi(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const l=e.bucket,h=e.fullPath,d="/b/"+o(l)+"/o/"+o(h),f=Qi(d,n,r),E=cl({alt:"media",token:u});return f+E})[0]}function x_(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const i=t[s];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class gl{constructor(t,n,r,s){this.url=t,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _l(e){if(!e)throw Ki()}function V_(e,t){function n(r,s){const i=ml(e,s,t);return _l(i!==null),i}return n}function N_(e,t){function n(r,s){const i=ml(e,s,t);return _l(i!==null),D_(i,s,e.host,e._protocol)}return n}function yl(e){function t(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Kg():s=Hg():n.getStatus()===402?s=zg(e.bucket):n.getStatus()===403?s=Wg(e.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return t}function k_(e){const t=yl(e);function n(r,s){let i=t(r,s);return r.getStatus()===404&&(i=qg(e.path)),i.serverResponse=s.serverResponse,i}return n}function O_(e,t,n){const r=t.fullServerUrl(),s=Qi(r,e.host,e._protocol),i="GET",o=e.maxOperationRetryTime,a=new gl(s,i,N_(e,n),o);return a.errorHandler=k_(t),a}function L_(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function M_(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=L_(null,t)),r}function F_(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let j=0;j<2;j++)x=x+Math.random().toString().slice(2);return x}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=M_(t,r,s),l=x_(u,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Mt.getBlob(h,r,d);if(f===null)throw Zg();const E={name:u.fullPath},v=Qi(i,e.host,e._protocol),_="POST",S=e.maxUploadRetryTime,y=new gl(v,_,V_(e,n),S);return y.urlParams=E,y.headers=o,y.body=f.uploadData(),y.errorHandler=yl(t),y}class U_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ne.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ne.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ne.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,s){if(this.sent_)throw qe("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qe("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qe("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qe("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qe("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class j_ extends U_{initXhr(){this.xhr_.responseType="text"}}function vl(){return new j_}/**
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
 */class ce{constructor(t,n){this._service=t,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new ce(t,n)}get root(){const t=new dt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fl(this._location.path)}get storage(){return this._service}get parent(){const t=A_(this._location.path);if(t===null)return null;const n=new dt(this._location.bucket,t);return new ce(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw n_(t)}}function B_(e,t,n){e._throwIfRoot("uploadBytes");const r=F_(e.storage,e._location,pl(),new Mt(t,!0),n);return e.storage.makeRequestWithTokens(r,vl).then(s=>({metadata:s,ref:e}))}function $_(e){e._throwIfRoot("getDownloadURL");const t=O_(e.storage,e._location,pl());return e.storage.makeRequestWithTokens(t,vl).then(n=>{if(n===null)throw t_();return n})}function q_(e,t){const n=R_(e._location.path,t),r=new dt(e._location.bucket,n);return new ce(e.storage,r)}/**
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
 */function z_(e){return/^[A-Za-z]+:\/\//.test(e)}function H_(e,t){return new ce(e,t)}function El(e,t){if(e instanceof Xi){const n=e;if(n._bucket==null)throw Jg();const r=new ce(n,n._bucket);return t!=null?El(r,t):r}else return t!==void 0?q_(e,t):e}function K_(e,t){if(t&&z_(t)){if(e instanceof Xi)return H_(e,t);throw $s("To use ref(service, url), the first argument must be a Storage instance.")}else return El(e,t)}function ha(e,t){const n=t?.[ol];return n==null?null:dt.makeFromBucketSpec(n,e)}function W_(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken=typeof s=="string"?s:ba(s,e.app.options.projectId))}class Xi{constructor(t,n,r,s,i){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=il,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Bg,this._maxUploadRetryTime=$g,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=ha(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,t):this._bucket=ha(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){la("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){la("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ce(this,t)}_makeRequest(t,n,r,s,i=!0){if(this._deleted)return new r_(al());{const o=p_(t,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,s).getPromise()}}const da="@firebase/storage",fa="0.12.2";/**
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
 */const wl="storage";function G_(e,t,n){return e=Ct(e),B_(e,t,n)}function Q_(e){return e=Ct(e),$_(e)}function X_(e,t){return e=Ct(e),K_(e,t)}function Y_(e=La(),t){e=Ct(e);const r=Na(e,wl).getImmediate({identifier:t}),s=Ra("storage");return s&&J_(r,...s),r}function J_(e,t,n,r={}){W_(e,t,n,r)}function Z_(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Xi(n,r,s,t,ka)}function ty(){nn(new Ae(wl,Z_,"PUBLIC").setMultipleInstances(!0)),Bt(da,fa,""),Bt(da,fa,"esm2017")}ty();const ey={apiKey:"AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",authDomain:"markit-a6d25.firebaseapp.com",projectId:"markit-a6d25",storageBucket:"markit-a6d25.appspot.com",messagingSenderId:"103527109310",appId:"1:103527109310:web:487002e25ba0676f3404ef"},we=Oa(ey),Hr=zu(we),ny=Y_(we),Yi=async e=>{const t=el(Oi(Hr,`users/${e}/Collections`)),r=(await sl(t)).docs.map(s=>({id:s.id,...s.data()}));return console.log("fetchedCollections",r),r};Yi("uid");const Lt=Ta()(nh(e=>({user:null,setUser:t=>e({user:t}),logout:()=>e({user:null})}),{name:"auth-storage-local"})),A=Ta(e=>({currentStep:0,setCurrentStep:t=>e(n=>({currentStep:typeof t=="function"?t(n.currentStep):t})),isCenterButtonEnabled:!0,setIsCenterButtonEnabled:t=>e({isCenterButtonEnabled:t}),leftButtonIcon:"ep:back",setCenterButtonIcon:t=>e({centerButtonIcon:t}),centerButtonIcon:"tabler:plus",setLeftButtonIcon:t=>e({leftButtonIcon:t}),titlePreview:"",setTitlePreview:t=>e({titlePreview:t}),descriptionPreview:"",setDescriptionPreview:t=>e({descriptionPreview:t}),fetchFlag:!1,toggleFetchFlag:()=>e(t=>({fetchFlag:!t.fetchFlag})),selectedCollection:"",setSelectedCollection:t=>e({selectedCollection:t}),initializeCollections:async t=>{const n=await Yi(t);n.length>0&&e({selectedCollection:n[0].id})},QRCode:"",setQRCode:t=>e({QRCode:t}),dumpWorkingItem:()=>{e({QRCode:"",actionType:"",title:"",description:"",photo1:"",photo2:"",photo3:"",titlePreview:"",descriptionPreview:""})},actionType:"",setActionType:t=>e({actionType:t}),photo1:"",setPhoto1:t=>e({photo1:t}),photo2:"",setPhoto2:t=>e({photo2:t}),photo3:"",setPhoto3:t=>e({photo3:t}),title:"",setTitle:t=>e({title:t}),description:"",setDescription:t=>e({description:t}),priceRange:[0,500],setPriceRange:t=>e({priceRange:t})})),ry=zu(we),sy=()=>{const e=Lt(h=>h.user),t=A(h=>h.QRCode),n=A(h=>h.selectedCollection),r=A(h=>h.actionType),s=A(h=>h.photo1),i=A(h=>h.photo2),o=A(h=>h.photo3),a=A(h=>h.title),c=A(h=>h.description),u=A(h=>h.priceRange);return async()=>{if(!e){console.error("User is not logged in");return}const h={userID:e.uid,actionType:r,itemDetails:{collectionName:n,title:a,description:c,photos:[s,i,o].filter(Boolean),priceRange:{min:u[0],max:u[1]},QRCode:t,createdAt:new Date,updatedAt:new Date}},d=Li(ry,"Items",t);try{await Fg(d,h),console.log("Item submitted successfully")}catch(f){console.error("Error submitting item:",f)}}};function iy(){const e=B.useRef(null),t=A(h=>h.isCenterButtonEnabled),n=A(h=>h.centerButtonIcon),r=A(h=>h.setCurrentStep),s=t?"green":"gray",i=sy(),o=A(h=>h.setPhoto1),a=Lt(h=>h.user),c=A(h=>h.QRCode),u=async h=>{const d=h.target.files?.[0];if(d)try{const f=X_(ny,`${a?.uid}/${c}`),E=await G_(f,d),v=await Q_(E.ref);console.log("File available at",v),o(v)}catch(f){console.error("Error uploading file:",f)}},l=()=>{if(n==="tabler:camera"&&t){e.current?.click();return}(t&&n==="tabler:arrow-right"||n==="tabler:plus")&&r(h=>h===9?0:h+1),t&&n==="ph:check-bold"&&(i(),r(0))};return p.jsxs(p.Fragment,{children:[p.jsx("input",{type:"file",accept:"image/*",capture:"environment",onChange:u,style:{display:"none"},ref:e}),p.jsx("button",{className:`border rounded-2xl ${t?"":"cursor-not-allowed"}`,onClick:l,disabled:!t,children:n&&p.jsx(vn,{icon:n,height:76,width:112,color:s})})]})}function oy(){const e=A(r=>r.leftButtonIcon),t=A(r=>r.setCurrentStep),n=()=>{e==="ep:back"&&t(r=>r-1)};return p.jsx("button",{onClick:n,children:e&&p.jsx(vn,{icon:e,height:46,width:52})})}function ay(){return p.jsxs("div",{className:"flex justify-evenly items-center border-t fixed bottom-0 z-10 bg-ltbg1 dark:bg-dkbg1 w-full h-[12vh]",children:[p.jsx(oy,{}),p.jsx(iy,{}),p.jsx("button",{children:p.jsx(vn,{icon:"charm:menu-hamburger",height:46,width:52,className:"dark:text-black text-white"})})]})}const pa=()=>{const e=Lt(d=>d.user),t=A(d=>d.initializeCollections),n=A(d=>d.setSelectedCollection),r=A(d=>d.selectedCollection),[s,i]=B.useState([]),[o,a]=B.useState(!1),c=B.useRef(null);B.useEffect(()=>{e?.uid&&t(e.uid)},[e,t]),B.useEffect(()=>{const d=f=>{c.current&&!c.current.contains(f.target)&&a(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[c]);const u=()=>a(!o),l=d=>{n(d),a(!1)},h=async()=>{const d=prompt("Enter new collection name:");if(d&&e)try{if(await jg(Oi(Hr,`users/${e.uid}/Collections`),{collectionName:d,description:""}),alert("New collection added successfully."),e?.uid){const f=await Yi(e.uid);i(f)}}catch(f){console.error("Error adding collection:",f),alert("Failed to add new collection.")}};return p.jsxs("div",{className:"relative mb-4",ref:c,children:[p.jsxs("div",{className:"border rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center cursor-pointer",onClick:u,children:[p.jsx("div",{className:"flex overflow-clip",children:p.jsx("h3",{className:"px-2 overflow-clip",children:r||"Select a Collection"})}),p.jsx("div",{className:"w-16 flex justify-center items-center border-l-2",children:p.jsx(vn,{icon:"bi:caret-down-fill",height:20,width:20})})]}),o&&p.jsxs("div",{className:"absolute z-10 w-72 border mt-1 rounded-md bg-white",children:[s.map(d=>p.jsx("div",{onClick:()=>l(d.id),className:"p-2 bg-ltbg1 dark:bg-dkbg1 text-black dark:text-white cursor-pointer",children:d.collectionName},d.id)),p.jsx("div",{onClick:h,className:"p-2 bg-ltbg1 dark:bg-dkbg1 text-black dark:text-white cursor-pointer border-t",children:"Add Collection"})]})]})},Tl=({itemId:e,collectionId:t,userId:n})=>{A(s=>s.setSelectedCollection);const r=async()=>{try{await Ug(Li(Hr,`users/${n}/Collections/${t}/Items`,e)),A.getState().toggleFetchFlag(),alert("Item deleted successfully.")}catch(s){console.error("Error deleting item:",s),alert("Failed to delete item.")}};return p.jsx("button",{onClick:r,className:"text-red-500 md:opacity-100 lg:opacity-50 border hover:opacity-100 hover:text-red-700 w-fit bg-ltbg1 dark:bg-dkbg1 p-2 rounded-full absolute right-0 m-2",children:p.jsx(vn,{icon:"bi:trash",height:24,width:24})})},Il=({id:e,photos:t,title:n,priceRange:r,actionType:s,description:i})=>{const o=A(c=>c.selectedCollection),a=Lt(c=>c.user?.uid);return p.jsxs("div",{className:"flex flex-col w-full mx-4 max-w-sm rounded-3xl text-center justify-stretch border relative",children:[p.jsx("div",{className:"w-full rounded-t-3xl",children:p.jsx("img",{className:"w-full aspect-square object-cover rounded-t-3xl",src:t[0],alt:n})}),p.jsx("div",{className:"py-2 border",children:n}),p.jsxs("div",{className:"border flex flex-row justify-between rounded-b-3xl",children:[p.jsxs("div",{className:"border py-2 text-center w-1/3 rounded-bl-3xl",children:["$",typeof r=="object"?r.min:r]}),p.jsx("div",{className:"border py-2 action-type text-center w-2/3 rounded-br-3xl",children:s})]}),a&&p.jsx(Tl,{itemId:e,collectionId:o,userId:a})]})},cy=()=>{const e=A(r=>r.setQRCode),t=()=>`${Math.floor((1+Math.random())*16777216).toString(16).substring(1)}`,n=()=>{const r=t();e(r),console.log("QR code set to",r)};return p.jsxs("div",{className:"flex flex-col text-center items-center",children:[p.jsx("div",{className:"aspect-square w-[100vw] bg-ltbg1 dark:bg-dkbg1 mb-2 max-w-md",onClick:n}),p.jsx("p",{children:"Scan a barcode or MarkIt sticker to begin."})]})},uy=()=>{const{actionType:e,setActionType:t}=A(s=>({actionType:s.actionType,setActionType:s.setActionType})),n=s=>{const i=s.currentTarget.textContent?.toLowerCase();i&&t(i)},r=s=>`border p-2 rounded-full ${e===s?"bg-green-500":"bg-ltbg2 dark:bg-dkbg2"}`;return p.jsxs("div",{className:"flex flex-col gap-1 w-full text-center p-8 ",children:[p.jsx("h3",{children:"Mark this item as:"}),p.jsxs("div",{className:"flex flex-col justify-evenly gap-3 ",children:[p.jsx("button",{className:r("store"),onClick:n,children:"Store"}),p.jsx("button",{className:r("rent"),onClick:n,children:"Rent"}),p.jsx("button",{className:r("sell"),onClick:n,children:"Sell"})]})]})},ly=()=>{const e=A(t=>t.photo1);return A(t=>t.photo2),A(t=>t.photo3),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Take Photo"}),p.jsx("div",{className:"mx-8 rounded-full flex justify-center gap-4",children:p.jsx("div",{className:`h-8 w-8 rounded-full border ${e?"bg-black":"bg-white"}`})})]})},Gn=({photos:e,title:t,priceRange:n,actionType:r,description:s})=>{const i=typeof n=="object"?n.max:n;return p.jsxs("div",{className:"flex relative flex-col w-[90vw] text-center justify-start h-full max-w-lg py-4",children:[p.jsx("div",{className:"py-2 border mb-4",children:t}),p.jsx(Sl,{photos:e,title:t}),p.jsx("div",{className:"border py-2 mb-4 action-type text-center rounded-3xl",children:r}),p.jsxs("div",{className:"border flex flex-row justify-between mb-4",children:[p.jsx("div",{className:"border py-2 text-center w-[30%]",children:i}),p.jsx("div",{className:"border py-2 action-type text-center w-[70%]",children:"location"})]}),p.jsx("p",{children:s})]})},hy=({rows:e})=>{const{currentStep:t,titlePreview:n,setTitlePreview:r,setTitle:s}=A(c=>({currentStep:c.currentStep,titlePreview:c.titlePreview,setTitlePreview:c.setTitlePreview,setTitle:c.setTitle})),[i,o]=B.useState("");B.useEffect(()=>{o(n)},[n]);const a=c=>{const u=c.target.value;o(u),r(u)};return B.useEffect(()=>{t===7&&s(n)},[t,n,s]),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Enter Title"}),p.jsx("textarea",{name:"title",id:"title",rows:e,value:i,onChange:a,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},dy=({rows:e})=>{const{currentStep:t,descriptionPreview:n,setDescriptionPreview:r,setDescription:s}=A(c=>({currentStep:c.currentStep,descriptionPreview:c.descriptionPreview,setDescriptionPreview:c.setDescriptionPreview,setDescription:c.setDescription})),[i,o]=B.useState("");B.useEffect(()=>{o(n)},[n]);const a=c=>{const u=c.target.value;o(u),r(u)};return B.useEffect(()=>{t===8&&s(n)},[t,n,s]),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Enter Description"}),p.jsx("textarea",{name:"description",id:"description",rows:e,value:i,onChange:a,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},fy=({min:e,max:t,step:n,instructions:r})=>{const s=A(d=>d.priceRange),i=A(d=>d.setPriceRange),[o,a]=B.useState(s[0]),[c,u]=B.useState(s[1]),l=d=>{const f=Math.min(parseInt(d.target.value,10),c-n);a(f),i([f,c])},h=d=>{const f=Math.max(parseInt(d.target.value,10),o+n);u(f),i([o,f])};return p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2 px-4",children:r}),p.jsxs("div",{style:{padding:"20px"},children:[p.jsx("input",{type:"range",min:e,max:t,value:o,step:n,onChange:l,className:"slider",style:{zIndex:o>t-(t-e)/2?"5":"1"}}),p.jsx("input",{type:"range",min:e,max:t,value:c,step:n,onChange:h,className:"slider"}),p.jsx("div",{className:"text-center",children:p.jsxs("p",{children:["Price range: $",o," - $",c]})})]})]})},py="modulepreload",my=function(e){return"/"+e},ma={},ga=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=my(o),o in ma)return;ma[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":py,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((h,d)=>{l.addEventListener("load",h),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},gy=({message:e})=>{const t=Lt(d=>d.user),n=Lt(d=>d.setUser),[r,s]=B.useState(!1),[i,o]=B.useState(""),[a,c]=B.useState({email:"",password:""});async function u(){s(!0),console.log(we);const{signInWithEmailAndPassword:d,getAuth:f}=await ga(()=>import("./index.esm.BSV4bYqk.js"),__vite__mapDeps([0,1,2,3,4])),E=f(we);console.log(E);const v=await d(E,a.email,a.password).catch(_=>{if(s(!1),_.constructor!==Kt)throw alert("fix this"),new Error("this is broke in a special way");_.code==="auth/invalid-email"&&alert("Invalid Email"),_.code==="auth/missing-password"&&alert("Missing Password"),_.code==="auth/wrong-password"&&alert("Incorrect Password"),_.code==="auth/too-many-requests"&&alert("Access to this account has been temporarily disabled due to many failed login attempts."),console.log(_)});if(v&&v.user){const _={uid:v.user.uid,email:v.user.email,username:v.user.displayName};s(!0),n(_)}}const l=d=>{const{name:f,value:E}=d.target;c(v=>({...v,[f]:E}))},h=async()=>{const{getAuth:d}=await ga(()=>import("./index.esm.BSV4bYqk.js"),__vite__mapDeps([0,1,2,3,4]));d(we).signOut(),n(null)};return B.useEffect(()=>{if(r){const d=setInterval(()=>{o(f=>f.length>=3?"":f+".")},500);return()=>clearInterval(d)}}),t&&t.uid?p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsx("div",{className:"text-center",children:p.jsx("button",{onClick:h,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md",children:"Logout"})})}):r?p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsx("div",{className:"text-center",children:p.jsxs("div",{className:"text-xl",children:["Signing You In",i]})})}):p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsxs("div",{className:"text-center flex flex-col ",children:[p.jsx("div",{className:"mb-4",children:e}),p.jsxs("div",{className:"flex flex-col",children:[p.jsx("input",{type:"email",name:"email",placeholder:"email",value:a.email,onChange:l,className:"px-4 py-2 border rounded-md mb-2"}),p.jsx("input",{type:"password",name:"password",placeholder:"password",minLength:6,value:a.password,onChange:l,className:"px-4 py-2 border rounded-md mb-2"}),p.jsx("div",{children:p.jsx("button",{onClick:u,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:"Login"})})]})]})})},_y=({id:e,photos:t,title:n,priceRange:r,actionType:s,description:i})=>{const o=A(c=>c.selectedCollection),a=Lt(c=>c.user?.uid);return p.jsxs("div",{className:"flex w-full items-center justify-between p-4 border-b h-32",children:[p.jsx("img",{src:t[0],alt:n,className:"w-20 h-20 object-cover mr-4"}),p.jsxs("div",{className:"flex-grow overflow-hidden",children:[p.jsx("h5",{className:"text-lg font-bold truncate",children:n}),p.jsx("p",{className:"text-ellipsis overflow-hidden line-clamp-2",children:i})]}),p.jsxs("div",{className:"text-right pl-2",children:[p.jsx("div",{className:"text-sm uppercase",children:s}),p.jsxs("div",{className:"font-bold whitespace-nowrap",children:["$",typeof r=="number"?r:`${r.min}-${r.max}`]}),a&&p.jsx(Tl,{itemId:e,collectionId:o,userId:a})]})]})},yy=({userId:e})=>{const[t,n]=B.useState([]),[r,s]=B.useState(!1),o=A(u=>u.selectedCollection),a=A(u=>u.fetchFlag),c=async()=>{try{const u=el(Oi(Hr,"Items"),oa("userID","==",e),oa("itemDetails.collectionName","==",o)),h=(await sl(u)).docs.map(d=>({id:d.id,...d.data().itemDetails}));console.log("fetchedItems",h),n(h)}catch(u){console.error("Error fetching items:",u)}};return B.useEffect(()=>{c()},[e,o,a]),p.jsxs("div",{className:"flex flex-wrap w-screen flex-row justify-center gap-4",children:[t.map(u=>r?p.jsx(_y,{...u},u.id):p.jsx(Il,{...u},u.id)),p.jsx("button",{onClick:()=>s(!r),className:"fixed bottom-[13vh] right-2 p-4 border bg-ltbg2 dark:bg-dkbg2 text-white rounded-full shadow-lg",children:r?p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}):p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 36 36",stroke:"currentColor",children:[p.jsx("rect",{x:"5",y:"5",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"21",y:"5",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"5",y:"21",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"21",y:"21",width:"12",height:"12",fill:"currentColor"})]})})]})},vy=()=>{const e=A(y=>y.selectedCollection),t=A(y=>y.setSelectedCollection),n=A(y=>y.setIsCenterButtonEnabled),r=A(y=>y.QRCode),s=A(y=>y.setLeftButtonIcon),i=A(y=>y.dumpWorkingItem),o=A(y=>y.actionType),a=A(y=>y.setCenterButtonIcon),c=A(y=>y.title),u=A(y=>y.setTitle),l=A(y=>y.description),h=A(y=>y.titlePreview),d=A(y=>y.photo1);A(y=>y.photo2),A(y=>y.photo3);const f=A(y=>y.descriptionPreview),E=A(y=>y.setDescription),v=A(y=>y.priceRange),_=Lt(y=>y.user);return{0:()=>{i(),a("tabler:plus"),console.log("selectedCollection",e),t(e),s("material-symbols:search"),n(!1),_&&_.uid&&n(!0)},1:()=>{s("ep:back"),a("tabler:arrow-right"),n(!!(e&&r!==""))},2:()=>{n(!!(e&&r!==""&&o))},3:()=>{n(!0),e&&r!==""&&o&&d?(a("tabler:arrow-right"),n(!0)):a("tabler:camera")},4:()=>{n(!0),e&&r!==""&&o&&d?(a("tabler:arrow-right"),n(!0)):a("tabler:camera")},5:()=>{u(h),n(!!(e&&r!==""&&o&&d&&c&&f!==""))},6:()=>{E(f),n(!!(e&&r!==""&&o&&d&&c&&l))},7:()=>{a("ph:check-bold"),e&&r!==""&&o&&d&&c&&l&&v.length>0?n(!0):n(!1)}}},Ey=()=>{const e=A(u=>u.currentStep),t=A(u=>u.actionType),n=A(u=>u.photo1),r=A(u=>u.title),s=A(u=>u.description),i=A(u=>u.priceRange),o=Lt(u=>u.user),a=A(u=>u.QRCode);A(u=>u.selectedCollection);const c={0:()=>o&&o.uid?[p.jsx(pa,{}),p.jsx(yy,{userId:o.uid})]:[p.jsx(gy,{})],1:()=>[p.jsx(cy,{}),p.jsx(pa,{})],2:()=>[p.jsx(uy,{})],3:()=>[p.jsx(Il,{id:a,actionType:t,photos:[n],priceRange:20,title:r}),p.jsx(ly,{})],4:()=>[p.jsx(Gn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(hy,{rows:2})],5:()=>[p.jsx(Gn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(dy,{rows:4})],6:()=>[p.jsx(Gn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(fy,{instructions:"Select acceptable price minimum and maximum.",min:0,max:500,step:5})],7:()=>[p.jsx(Gn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a})]};return c[e]?c[e]():[]},Fy=()=>{const e=Ey(),t=A(r=>r.currentStep),n=vy();return B.useEffect(()=>{const r=n[t];typeof r=="function"&&r()},[t,n]),p.jsxs("div",{className:"mx-auto bg-ltbg1 dark:bg-dkbg2 relative top-[7.5vh] box-border",children:[p.jsx("div",{className:"mb-[12vh] pt-[4vh] pb-[16vh] min-h-[80.5vh] flex items-center flex-col justify-evenly overflow-scroll",children:e.map((r,s)=>p.jsx(_a.Fragment,{children:r},s))}),p.jsx(ay,{})]})};export{Ae as C,Pa as E,Kt as F,Da as L,Fy as M,ka as S,Na as _,Vy as a,oh as b,Ry as c,ds as d,Ny as e,hh as f,Ct as g,La as h,k as i,Sy as j,Cy as k,nn as l,by as m,Ie as n,Py as o,ky as p,xy as q,Bt as r,Dy as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/index.esm.BSV4bYqk.js","_astro/jsx-runtime.CfVuv60F.js","_astro/index.BG0d_8j_.js","_astro/iconify.Gi37SqeE.js","_astro/ItemImageCarousel.DiS6k_5m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
