import{r as au,g as Cp,R as Pp}from"./index.BG0d_8j_.js";const dl=n=>{let t;const e=new Set,s=(u,h)=>{const d=typeof u=="function"?u(t):u;if(!Object.is(d,t)){const f=t;t=h??(typeof d!="object"||d===null)?d:Object.assign({},t,d),e.forEach(g=>g(t,f))}},i=()=>t,l={setState:s,getState:i,getInitialState:()=>c,subscribe:u=>(e.add(u),()=>e.delete(u)),destroy:()=>{e.clear()}},c=t=n(s,i,l);return l},bp=n=>n?dl(n):dl;var lu={exports:{}},cu={},uu={exports:{}},hu={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cn=au;function Np(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Dp=typeof Object.is=="function"?Object.is:Np,kp=cn.useState,Op=cn.useEffect,Vp=cn.useLayoutEffect,xp=cn.useDebugValue;function Mp(n,t){var e=t(),s=kp({inst:{value:e,getSnapshot:t}}),i=s[0].inst,r=s[1];return Vp(function(){i.value=e,i.getSnapshot=t,fr(i)&&r({inst:i})},[n,e,t]),Op(function(){return fr(i)&&r({inst:i}),n(function(){fr(i)&&r({inst:i})})},[n]),xp(e),e}function fr(n){var t=n.getSnapshot;n=n.value;try{var e=t();return!Dp(n,e)}catch{return!0}}function Lp(n,t){return t()}var Fp=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Lp:Mp;hu.useSyncExternalStore=cn.useSyncExternalStore!==void 0?cn.useSyncExternalStore:Fp;uu.exports=hu;var Up=uu.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=au,Bp=Up;function qp(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var jp=typeof Object.is=="function"?Object.is:qp,$p=Bp.useSyncExternalStore,Wp=Di.useRef,zp=Di.useEffect,Hp=Di.useMemo,Gp=Di.useDebugValue;cu.useSyncExternalStoreWithSelector=function(n,t,e,s,i){var r=Wp(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=Hp(function(){function l(f){if(!c){if(c=!0,u=f,f=s(f),i!==void 0&&o.hasValue){var g=o.value;if(i(g,f))return h=g}return h=f}if(g=h,jp(u,f))return g;var y=s(f);return i!==void 0&&i(g,y)?g:(u=f,h=y)}var c=!1,u,h,d=e===void 0?null:e;return[function(){return l(t())},d===null?void 0:function(){return l(d())}]},[t,e,s,i]);var a=$p(n,r[0],r[1]);return zp(function(){o.hasValue=!0,o.value=a},[a]),Gp(a),a};lu.exports=cu;var Kp=lu.exports;const Qp=Cp(Kp),{useDebugValue:Yp}=Pp,{useSyncExternalStoreWithSelector:Xp}=Qp;const Jp=n=>n;function Zp(n,t=Jp,e){const s=Xp(n.subscribe,n.getState,n.getServerState||n.getInitialState,t,e);return Yp(s),s}const fl=n=>{const t=typeof n=="function"?bp(n):n,e=(s,i)=>Zp(t,s,i);return Object.assign(e,t),e},du=n=>n?fl(n):fl;function t_(n,t){let e;try{e=n()}catch{return}return{getItem:i=>{var r;const o=l=>l===null?null:JSON.parse(l,t?.reviver),a=(r=e.getItem(i))!=null?r:null;return a instanceof Promise?a.then(o):o(a)},setItem:(i,r)=>e.setItem(i,JSON.stringify(r,t?.replacer)),removeItem:i=>e.removeItem(i)}}const ns=n=>t=>{try{const e=n(t);return e instanceof Promise?e:{then(s){return ns(s)(e)},catch(s){return this}}}catch(e){return{then(s){return this},catch(s){return ns(s)(e)}}}},e_=(n,t)=>(e,s,i)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,R)=>({...R,..._}),...t},o=!1;const a=new Set,l=new Set;let c;try{c=r.getStorage()}catch{}if(!c)return n((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),e(..._)},s,i);const u=ns(r.serialize),h=()=>{const _=r.partialize({...s()});let R;const w=u({state:_,version:r.version}).then(N=>c.setItem(r.name,N)).catch(N=>{R=N});if(R)throw R;return w},d=i.setState;i.setState=(_,R)=>{d(_,R),h()};const f=n((..._)=>{e(..._),h()},s,i);let g;const y=()=>{var _;if(!c)return;o=!1,a.forEach(w=>w(s()));const R=((_=r.onRehydrateStorage)==null?void 0:_.call(r,s()))||void 0;return ns(c.getItem.bind(c))(r.name).then(w=>{if(w)return r.deserialize(w)}).then(w=>{if(w)if(typeof w.version=="number"&&w.version!==r.version){if(r.migrate)return r.migrate(w.state,w.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return w.state}).then(w=>{var N;return g=r.merge(w,(N=s())!=null?N:f),e(g,!0),h()}).then(()=>{R?.(g,void 0),o=!0,l.forEach(w=>w(g))}).catch(w=>{R?.(void 0,w)})};return i.persist={setOptions:_=>{r={...r,..._},_.getStorage&&(c=_.getStorage())},clearStorage:()=>{c?.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(l.add(_),()=>{l.delete(_)})},y(),g||f},n_=(n,t)=>(e,s,i)=>{let r={storage:t_(()=>localStorage),partialize:y=>y,version:0,merge:(y,_)=>({..._,...y}),...t},o=!1;const a=new Set,l=new Set;let c=r.storage;if(!c)return n((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),e(...y)},s,i);const u=()=>{const y=r.partialize({...s()});return c.setItem(r.name,{state:y,version:r.version})},h=i.setState;i.setState=(y,_)=>{h(y,_),u()};const d=n((...y)=>{e(...y),u()},s,i);i.getInitialState=()=>d;let f;const g=()=>{var y,_;if(!c)return;o=!1,a.forEach(w=>{var N;return w((N=s())!=null?N:d)});const R=((_=r.onRehydrateStorage)==null?void 0:_.call(r,(y=s())!=null?y:d))||void 0;return ns(c.getItem.bind(c))(r.name).then(w=>{if(w)if(typeof w.version=="number"&&w.version!==r.version){if(r.migrate)return r.migrate(w.state,w.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return w.state}).then(w=>{var N;return f=r.merge(w,(N=s())!=null?N:d),e(f,!0),u()}).then(()=>{R?.(f,void 0),f=s(),o=!0,l.forEach(w=>w(f))}).catch(w=>{R?.(void 0,w)})};return i.persist={setOptions:y=>{r={...r,...y},y.storage&&(c=y.storage)},clearStorage:()=>{c?.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>g(),hasHydrated:()=>o,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},r.skipHydration||g(),f||d},s_=(n,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?e_(n,t):n_(n,t),i_=s_;var pl={};/**
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
 */const fu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(n,t){if(!n)throw wn(t)},wn=function(n){return new Error("Firebase Database ("+fu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const pu=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},r_=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const i=n[e++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[e++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[e++],o=n[e++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(e[u],e[h],e[d],e[f])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(pu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):r_(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new o_;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class o_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _u=function(n){const t=pu(n);return Vo.encodeByteArray(t,!0)},oi=function(n){return _u(n).replace(/\./g,"")},Br=function(n){try{return Vo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function a_(n){return mu(void 0,n)}function mu(n,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const e=t;return new Date(e.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return t}for(const e in t)!t.hasOwnProperty(e)||!l_(e)||(n[e]=mu(n[e],t[e]));return n}function l_(n){return n!=="__proto__"}/**
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
 */function c_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u_=()=>c_().__FIREBASE_DEFAULTS__,h_=()=>{if(typeof process>"u"||typeof pl>"u")return;const n=pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},d_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Br(n[1]);return t&&JSON.parse(t)},ki=()=>{try{return u_()||h_()||d_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},f_=n=>{var t,e;return(e=(t=ki())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},gu=n=>{const t=f_(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},yu=()=>{var n;return(n=ki())===null||n===void 0?void 0:n.config},KA=n=>{var t;return(t=ki())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
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
 */function Eu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[oi(JSON.stringify(e)),oi(JSON.stringify(o)),""].join(".")}/**
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
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function p_(){var n;const t=(n=ki())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function __(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YA(){const n=un();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Tu(){return fu.NODE_ADMIN===!0}function m_(){return!p_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Iu(){try{return typeof indexedDB=="object"}catch{return!1}}function g_(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(e){t(e)}})}/**
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
 */const y_="FirebaseError";class je extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=y_,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wu.prototype.create)}}class wu{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?E_(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new je(i,a,s)}}function E_(n,t){return n.replace(v_,(e,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const v_=/\{\$([^}]+)}/g;/**
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
 */function ss(n){return JSON.parse(n)}function ct(n){return JSON.stringify(n)}/**
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
 */const Au=function(n){let t={},e={},s={},i="";try{const r=n.split(".");t=ss(Br(r[0])||""),e=ss(Br(r[1])||""),i=r[2],s=e.d||{},delete e.d}catch{}return{header:t,claims:e,data:s,signature:i}},T_=function(n){const t=Au(n),e=t.claims;return!!e&&typeof e=="object"&&e.hasOwnProperty("iat")},I_=function(n){const t=Au(n).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function oe(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function hn(n,t){if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}function _l(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function ai(n,t,e){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=t.call(e,n[i],i,n));return s}function qr(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const i of e){if(!s.includes(i))return!1;const r=n[i],o=t[i];if(ml(r)&&ml(o)){if(!qr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!e.includes(i))return!1;return!0}function ml(n){return n!==null&&typeof n=="object"}/**
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
 */function w_(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function XA(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");t[decodeURIComponent(i)]=decodeURIComponent(r)}}),t}function JA(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}/**
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
 */class A_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const s=this.W_;if(typeof t=="string")for(let h=0;h<16;h++)s[h]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let h=0;h<16;h++)s[h]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,e){if(t==null)return;e===void 0&&(e=t.length);const s=e-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<e;){if(o===0)for(;i<=s;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<e;)if(r[o]=t[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=e}digest(){const t=[];let e=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=e&255,e/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)t[s]=this.chain_[i]>>r&255,++s;return t}}function ZA(n,t){const e=new R_(n,t);return e.subscribe.bind(e)}class R_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let i;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");S_(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:s},i.next===void 0&&(i.next=pr),i.error===void 0&&(i.error=pr),i.complete===void 0&&(i.complete=pr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function S_(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function pr(){}function C_(n,t){return`${n} failed: ${t} argument `}/**
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
 */const P_=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):i<65536?(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Oi=function(n){let t=0;for(let e=0;e<n.length;e++){const s=n.charCodeAt(e);s<128?t++:s<2048?t+=2:s>=55296&&s<=56319?(t+=4,e++):t+=3}return t};/**
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
 */function Ft(n){return n&&n._delegate?n._delegate:n}class De{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ve="[DEFAULT]";/**
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
 */class b_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new xo;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t?.identifier),i=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(D_(t))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ve){return this.instances.has(t)}getOptions(t=ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,e){var s;const i=this.normalizeInstanceIdentifier(e),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const i of s)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:N_(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ve){return this.component?this.component.multipleInstances?t:ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function N_(n){return n===ve?void 0:n}function D_(n){return n.instantiationMode==="EAGER"}/**
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
 */class k_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new b_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(V||(V={}));const O_={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},V_=V.INFO,x_={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},M_=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),i=x_[t];if(i)console[i](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mo{constructor(t){this.name=t,this._logLevel=V_,this._logHandler=M_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?O_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const L_=(n,t)=>t.some(e=>n instanceof e);let gl,yl;function F_(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function U_(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ru=new WeakMap,jr=new WeakMap,Su=new WeakMap,_r=new WeakMap,Lo=new WeakMap;function B_(n){const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{e(ce(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Ru.set(e,n)}).catch(()=>{}),Lo.set(t,n),t}function q_(n){if(jr.has(n))return;const t=new Promise((e,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{e(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});jr.set(n,t)}let $r={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return jr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Su.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ce(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function j_(n){$r=n($r)}function $_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(mr(this),t,...e);return Su.set(s,t.sort?t.sort():[t]),ce(s)}:U_().includes(n)?function(...t){return n.apply(mr(this),t),ce(Ru.get(this))}:function(...t){return ce(n.apply(mr(this),t))}}function W_(n){return typeof n=="function"?$_(n):(n instanceof IDBTransaction&&q_(n),L_(n,F_())?new Proxy(n,$r):n)}function ce(n){if(n instanceof IDBRequest)return B_(n);if(_r.has(n))return _r.get(n);const t=W_(n);return t!==n&&(_r.set(n,t),Lo.set(t,n)),t}const mr=n=>Lo.get(n);function z_(n,t,{blocked:e,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,t),a=ce(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ce(o.result),l.oldVersion,l.newVersion,ce(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const H_=["get","getKey","getAll","getAllKeys","count"],G_=["put","add","delete","clear"],gr=new Map;function El(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(gr.get(t))return gr.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,i=G_.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(i||H_.includes(e)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),i&&l.done]))[0]};return gr.set(t,r),r}j_(n=>({...n,get:(t,e,s)=>El(t,e)||n.get(t,e,s),has:(t,e)=>!!El(t,e)||n.has(t,e)}));/**
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
 */class K_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Q_(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function Q_(n){const t=n.getComponent();return t?.type==="VERSION"}const Wr="@firebase/app",vl="0.9.28";/**
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
 */const ke=new Mo("@firebase/app"),Y_="@firebase/app-compat",X_="@firebase/analytics-compat",J_="@firebase/analytics",Z_="@firebase/app-check-compat",tm="@firebase/app-check",em="@firebase/auth",nm="@firebase/auth-compat",sm="@firebase/database",im="@firebase/database-compat",rm="@firebase/functions",om="@firebase/functions-compat",am="@firebase/installations",lm="@firebase/installations-compat",cm="@firebase/messaging",um="@firebase/messaging-compat",hm="@firebase/performance",dm="@firebase/performance-compat",fm="@firebase/remote-config",pm="@firebase/remote-config-compat",_m="@firebase/storage",mm="@firebase/storage-compat",gm="@firebase/firestore",ym="@firebase/firestore-compat",Em="firebase",vm="10.8.1";/**
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
 */const zr="[DEFAULT]",Tm={[Wr]:"fire-core",[Y_]:"fire-core-compat",[J_]:"fire-analytics",[X_]:"fire-analytics-compat",[tm]:"fire-app-check",[Z_]:"fire-app-check-compat",[em]:"fire-auth",[nm]:"fire-auth-compat",[sm]:"fire-rtdb",[im]:"fire-rtdb-compat",[rm]:"fire-fn",[om]:"fire-fn-compat",[am]:"fire-iid",[lm]:"fire-iid-compat",[cm]:"fire-fcm",[um]:"fire-fcm-compat",[hm]:"fire-perf",[dm]:"fire-perf-compat",[fm]:"fire-rc",[pm]:"fire-rc-compat",[_m]:"fire-gcs",[mm]:"fire-gcs-compat",[gm]:"fire-fst",[ym]:"fire-fst-compat","fire-js":"fire-js",[Em]:"fire-js-all"};/**
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
 */const li=new Map,Hr=new Map;function Im(n,t){try{n.container.addComponent(t)}catch(e){ke.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function dn(n){const t=n.name;if(Hr.has(t))return ke.debug(`There were multiple attempts to register component ${t}.`),!1;Hr.set(t,n);for(const e of li.values())Im(e,n);return!0}function Cu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const wm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ue=new wu("app","Firebase",wm);/**
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
 */class Am{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Fo=vm;function Pu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:zr,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(e||(e=yu()),!e)throw ue.create("no-options");const r=li.get(i);if(r){if(qr(e,r.options)&&qr(s,r.config))return r;throw ue.create("duplicate-app",{appName:i})}const o=new k_(i);for(const l of Hr.values())o.addComponent(l);const a=new Am(e,s,o);return li.set(i,a),a}function bu(n=zr){const t=li.get(n);if(!t&&n===zr&&yu())return Pu();if(!t)throw ue.create("no-app",{appName:n});return t}function Gt(n,t,e){var s;let i=(s=Tm[n])!==null&&s!==void 0?s:n;e&&(i+=`-${e}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ke.warn(a.join(" "));return}dn(new De(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Rm="firebase-heartbeat-database",Sm=1,is="firebase-heartbeat-store";let yr=null;function Nu(){return yr||(yr=z_(Rm,Sm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(is)}catch(e){console.warn(e)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),yr}async function Cm(n){try{const e=(await Nu()).transaction(is),s=await e.objectStore(is).get(Du(n));return await e.done,s}catch(t){if(t instanceof je)ke.warn(t.message);else{const e=ue.create("idb-get",{originalErrorMessage:t?.message});ke.warn(e.message)}}}async function Tl(n,t){try{const s=(await Nu()).transaction(is,"readwrite");await s.objectStore(is).put(t,Du(n)),await s.done}catch(e){if(e instanceof je)ke.warn(e.message);else{const s=ue.create("idb-set",{originalErrorMessage:e?.message});ke.warn(s.message)}}}function Du(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Pm=1024,bm=30*24*60*60*1e3;class Nm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new km(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Il();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:s,unsentEntries:i}=Dm(this._heartbeatsCache.heartbeats),r=oi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Il(){return new Date().toISOString().substring(0,10)}function Dm(n,t=Pm){const e=[];let s=n.slice();for(const i of n){const r=e.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),wl(e)>t){r.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),wl(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class km{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Iu()?g_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Cm(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tl(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function wl(n){return oi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Om(n){dn(new De("platform-logger",t=>new K_(t),"PRIVATE")),dn(new De("heartbeat",t=>new Nm(t),"PRIVATE")),Gt(Wr,vl,n),Gt(Wr,vl,"esm2017"),Gt("fire-js","")}Om("");var Vm="firebase",xm="10.8.1";/**
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
 */Gt(Vm,xm,"app");var Mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Uo=Uo||{},C=Mm||self;function Vi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ts(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Lm(n){return Object.prototype.hasOwnProperty.call(n,Er)&&n[Er]||(n[Er]=++Fm)}var Er="closure_uid_"+(1e9*Math.random()>>>0),Fm=0;function Um(n,t,e){return n.call.apply(n.bind,arguments)}function Bm(n,t,e){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Et(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=Um:Et=Bm,Et.apply(null,arguments)}function $s(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var s=e.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function at(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function ye(){this.s=this.s,this.o=this.o}var qm=0;ye.prototype.s=!1;ye.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qm!=0)&&Lm(this)};ye.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ku=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Bo(n){const t=n.length;if(0<t){const e=Array(t);for(let s=0;s<t;s++)e[s]=n[s];return e}return[]}function Al(n,t){for(let e=1;e<arguments.length;e++){const s=arguments[e];if(Vi(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let o=0;o<r;o++)n[i+o]=s[o]}else n.push(s)}}function vt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};var jm=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};C.addEventListener("test",e,t),C.removeEventListener("test",e,t)}catch{}return n}();function rs(n){return/^[\s\xa0]*$/.test(n)}function xi(){var n=C.navigator;return n&&(n=n.userAgent)?n:""}function jt(n){return xi().indexOf(n)!=-1}function qo(n){return qo[" "](n),n}qo[" "]=function(){};function $m(n,t){var e=xg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Wm=jt("Opera"),fn=jt("Trident")||jt("MSIE"),Ou=jt("Edge"),Gr=Ou||fn,Vu=jt("Gecko")&&!(xi().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge"))&&!(jt("Trident")||jt("MSIE"))&&!jt("Edge"),zm=xi().toLowerCase().indexOf("webkit")!=-1&&!jt("Edge");function xu(){var n=C.document;return n?n.documentMode:void 0}var Kr;t:{var vr="",Tr=function(){var n=xi();if(Vu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ou)return/Edge\/([\d\.]+)/.exec(n);if(fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(zm)return/WebKit\/(\S+)/.exec(n);if(Wm)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Tr&&(vr=Tr?Tr[1]:""),fn){var Ir=xu();if(Ir!=null&&Ir>parseFloat(vr)){Kr=String(Ir);break t}}Kr=vr}var Qr;if(C.document&&fn){var Rl=xu();Qr=Rl||parseInt(Kr,10)||void 0}else Qr=void 0;var Hm=Qr;function os(n,t){if(vt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Vu){t:{try{qo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Gm[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&os.$.h.call(this)}}at(os,vt);var Gm={2:"touch",3:"pen",4:"mouse"};os.prototype.h=function(){os.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Is="closure_listenable_"+(1e6*Math.random()|0),Km=0;function Qm(n,t,e,s,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!s,this.la=i,this.key=++Km,this.fa=this.ia=!1}function Mi(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function jo(n,t,e){for(const s in n)t.call(e,n[s],s,n)}function Ym(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Mu(n){const t={};for(const e in n)t[e]=n[e];return t}const Sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lu(n,t){let e,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(e in s)n[e]=s[e];for(let r=0;r<Sl.length;r++)e=Sl[r],Object.prototype.hasOwnProperty.call(s,e)&&(n[e]=s[e])}}function Li(n){this.src=n,this.g={},this.h=0}Li.prototype.add=function(n,t,e,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Xr(n,t,s,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Qm(t,this.src,r,!!s,i),t.ia=e,n.push(t)),t};function Yr(n,t){var e=t.type;if(e in n.g){var s=n.g[e],i=ku(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Mi(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Xr(n,t,e,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.fa&&r.listener==t&&r.capture==!!e&&r.la==s)return i}return-1}var $o="closure_lm_"+(1e6*Math.random()|0),wr={};function Fu(n,t,e,s,i){if(s&&s.once)return Bu(n,t,e,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fu(n,t[r],e,s,i);return null}return e=Ho(e),n&&n[Is]?n.O(t,e,Ts(s)?!!s.capture:!!s,i):Uu(n,t,e,!1,s,i)}function Uu(n,t,e,s,i,r){if(!t)throw Error("Invalid event type");var o=Ts(i)?!!i.capture:!!i,a=zo(n);if(a||(n[$o]=a=new Li(n)),e=a.add(t,e,s,o,r),e.proxy)return e;if(s=Xm(),e.proxy=s,s.src=n,s.listener=e,n.addEventListener)jm||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),s,i);else if(n.attachEvent)n.attachEvent(ju(t.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Xm(){function n(e){return t.call(n.src,n.listener,e)}const t=Jm;return n}function Bu(n,t,e,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Bu(n,t[r],e,s,i);return null}return e=Ho(e),n&&n[Is]?n.P(t,e,Ts(s)?!!s.capture:!!s,i):Uu(n,t,e,!0,s,i)}function qu(n,t,e,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)qu(n,t[r],e,s,i);else s=Ts(s)?!!s.capture:!!s,e=Ho(e),n&&n[Is]?(n=n.i,t=String(t).toString(),t in n.g&&(r=n.g[t],e=Xr(r,e,s,i),-1<e&&(Mi(r[e]),Array.prototype.splice.call(r,e,1),r.length==0&&(delete n.g[t],n.h--)))):n&&(n=zo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Xr(t,e,s,i)),(e=-1<n?t[n]:null)&&Wo(e))}function Wo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Is])Yr(t.i,n);else{var e=n.type,s=n.proxy;t.removeEventListener?t.removeEventListener(e,s,n.capture):t.detachEvent?t.detachEvent(ju(e),s):t.addListener&&t.removeListener&&t.removeListener(s),(e=zo(t))?(Yr(e,n),e.h==0&&(e.src=null,t[$o]=null)):Mi(n)}}}function ju(n){return n in wr?wr[n]:wr[n]="on"+n}function Jm(n,t){if(n.fa)n=!0;else{t=new os(t,this);var e=n.listener,s=n.la||n.src;n.ia&&Wo(n),n=e.call(s,t)}return n}function zo(n){return n=n[$o],n instanceof Li?n:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ho(n){return typeof n=="function"?n:(n[Ar]||(n[Ar]=function(t){return n.handleEvent(t)}),n[Ar])}function ot(){ye.call(this),this.i=new Li(this),this.S=this,this.J=null}at(ot,ye);ot.prototype[Is]=!0;ot.prototype.removeEventListener=function(n,t,e,s){qu(this,n,t,e,s)};function ht(n,t){var e,s=n.J;if(s)for(e=[];s;s=s.J)e.push(s);if(n=n.S,s=t.type||t,typeof t=="string")t=new vt(t,n);else if(t instanceof vt)t.target=t.target||n;else{var i=t;t=new vt(s,n),Lu(t,i)}if(i=!0,e)for(var r=e.length-1;0<=r;r--){var o=t.g=e[r];i=Ws(o,s,!0,t)&&i}if(o=t.g=n,i=Ws(o,s,!0,t)&&i,i=Ws(o,s,!1,t)&&i,e)for(r=0;r<e.length;r++)o=t.g=e[r],i=Ws(o,s,!1,t)&&i}ot.prototype.N=function(){if(ot.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],s=0;s<e.length;s++)Mi(e[s]);delete n.g[t],n.h--}}this.J=null};ot.prototype.O=function(n,t,e,s){return this.i.add(String(n),t,!1,e,s)};ot.prototype.P=function(n,t,e,s){return this.i.add(String(n),t,!0,e,s)};function Ws(n,t,e,s){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Yr(n.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Go=C.JSON.stringify;class Zm{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function tg(){var n=Ko;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class eg{constructor(){this.h=this.g=null}add(t,e){const s=$u.get();s.set(t,e),this.h?this.h.next=s:this.g=s,this.h=s}}var $u=new Zm(()=>new ng,n=>n.reset());class ng{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function sg(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function ig(n){C.setTimeout(()=>{throw n},0)}let as,ls=!1,Ko=new eg,Wu=()=>{const n=C.Promise.resolve(void 0);as=()=>{n.then(rg)}};var rg=()=>{for(var n;n=tg();){try{n.h.call(n.g)}catch(e){ig(e)}var t=$u;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}ls=!1};function Fi(n,t){ot.call(this),this.h=n||1,this.g=t||C,this.j=Et(this.qb,this),this.l=Date.now()}at(Fi,ot);T=Fi.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Qo(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){Fi.$.N.call(this),Qo(this),delete this.g};function Yo(n,t,e){if(typeof n=="function")e&&(n=Et(n,e));else if(n&&typeof n.handleEvent=="function")n=Et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(n,t||0)}function zu(n){n.g=Yo(()=>{n.g=null,n.i&&(n.i=!1,zu(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class og extends ye{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zu(this)}N(){super.N(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(n){ye.call(this),this.h=n,this.g={}}at(cs,ye);var Cl=[];function Hu(n,t,e,s){Array.isArray(e)||(e&&(Cl[0]=e.toString()),e=Cl);for(var i=0;i<e.length;i++){var r=Fu(t,e[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Gu(n){jo(n.g,function(t,e){this.g.hasOwnProperty(e)&&Wo(t)},n),n.g={}}cs.prototype.N=function(){cs.$.N.call(this),Gu(this)};cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ui(){this.g=!0}Ui.prototype.Ea=function(){this.g=!1};function ag(n,t,e,s,i,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function lg(n,t,e,s,i,r,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+e+`
`+r+" "+o})}function tn(n,t,e,s){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+ug(n,e)+(s?" "+s:"")})}function cg(n,t){n.info(function(){return"TIMEOUT: "+t})}Ui.prototype.info=function(){};function ug(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var s=e[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Go(e)}catch{return t}}var $e={},Pl=null;function Bi(){return Pl=Pl||new ot}$e.Ta="serverreachability";function Ku(n){vt.call(this,$e.Ta,n)}at(Ku,vt);function us(n){const t=Bi();ht(t,new Ku(t))}$e.STAT_EVENT="statevent";function Qu(n,t){vt.call(this,$e.STAT_EVENT,n),this.stat=t}at(Qu,vt);function wt(n){const t=Bi();ht(t,new Qu(t,n))}$e.Ua="timingevent";function Yu(n,t){vt.call(this,$e.Ua,n),this.size=t}at(Yu,vt);function ws(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){n()},t)}var qi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xo(){}Xo.prototype.h=null;function bl(n){return n.h||(n.h=n.i())}function Ju(){}var As={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jo(){vt.call(this,"d")}at(Jo,vt);function Zo(){vt.call(this,"c")}at(Zo,vt);var Jr;function ji(){}at(ji,Xo);ji.prototype.g=function(){return new XMLHttpRequest};ji.prototype.i=function(){return{}};Jr=new ji;function Rs(n,t,e,s){this.l=n,this.j=t,this.m=e,this.W=s||1,this.U=new cs(this),this.P=hg,n=Gr?125:void 0,this.V=new Fi(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Zu}function Zu(){this.i=null,this.g="",this.h=!1}var hg=45e3,th={},Zr={};T=Rs.prototype;T.setTimeout=function(n){this.P=n};function to(n,t,e){n.L=1,n.A=Wi(ie(t)),n.u=e,n.S=!0,eh(n,null)}function eh(n,t){n.G=Date.now(),Ss(n),n.B=ie(n.A);var e=n.B,s=n.W;Array.isArray(s)||(s=[String(s)]),ch(e.i,"t",s),n.o=0,e=n.l.J,n.h=new Zu,n.g=Nh(n.l,e?t:null,!n.u),0<n.O&&(n.M=new og(Et(n.Pa,n,n.g),n.O)),Hu(n.U,n.g,"readystatechange",n.nb),t=n.I?Mu(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),us(),ag(n.j,n.v,n.B,n.m,n.W,n.u)}T.nb=function(n){n=n.target;const t=this.M;t&&$t(n)==3?t.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)t:{const u=$t(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Gr||this.g&&(this.h.h||this.g.ja()||Ol(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?us(3):us(2)),$i(this);var e=this.g.da();this.ca=e;e:if(nh(this)){var s=Ol(this.g);n="";var i=s.length,r=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){we(this),Hn(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,lg(this.j,this.v,this.B,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rs(a)){var c=a;break e}}c=null}if(e=c)tn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eo(this,e);else{this.i=!1,this.s=3,wt(12),we(this),Hn(this);break t}}this.S?(sh(this,u,o),Gr&&this.i&&u==3&&(Hu(this.U,this.V,"tick",this.mb),this.V.start())):(tn(this.j,this.m,o,null),eo(this,o)),u==4&&we(this),this.i&&!this.J&&(u==4?Sh(this.l,this):(this.i=!1,Ss(this)))}else kg(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),we(this),Hn(this)}}}catch{}finally{}};function nh(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function sh(n,t,e){let s=!0,i;for(;!n.J&&n.o<e.length;)if(i=dg(n,e),i==Zr){t==4&&(n.s=4,wt(14),s=!1),tn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==th){n.s=4,wt(15),tn(n.j,n.m,e,"[Invalid Chunk]"),s=!1;break}else tn(n.j,n.m,i,null),eo(n,i);nh(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,wt(16),s=!1),n.i=n.i&&s,s?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ra(t),t.M=!0,wt(11))):(tn(n.j,n.m,e,"[Invalid Chunked Response]"),we(n),Hn(n))}T.mb=function(){if(this.g){var n=$t(this.g),t=this.g.ja();this.o<t.length&&($i(this),sh(this,n,t),this.i&&n!=4&&Ss(this))}};function dg(n,t){var e=n.o,s=t.indexOf(`
`,e);return s==-1?Zr:(e=Number(t.substring(e,s)),isNaN(e)?th:(s+=1,s+e>t.length?Zr:(t=t.slice(s,s+e),n.o=s+e,t)))}T.cancel=function(){this.J=!0,we(this)};function Ss(n){n.Y=Date.now()+n.P,ih(n,n.P)}function ih(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=ws(Et(n.lb,n),t)}function $i(n){n.C&&(C.clearTimeout(n.C),n.C=null)}T.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(cg(this.j,this.B),this.L!=2&&(us(),wt(17)),we(this),this.s=2,Hn(this)):ih(this,this.Y-n)};function Hn(n){n.l.H==0||n.J||Sh(n.l,n)}function we(n){$i(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Qo(n.V),Gu(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function eo(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||no(e.i,n))){if(!n.K&&no(e.i,n)&&e.H==3){try{var s=e.Ja.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)hi(e),Ki(e);else break t;ia(e),wt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=ws(Et(e.ib,e),6e3));if(1>=dh(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Ae(e,11)}else if((n.K||e.g==n)&&hi(e),!rs(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,e.L=s,e.l.info("backChannelRequestTimeoutMs_="+s)),s=e;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ta(r,r.h),r.h=null))}if(s.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.Da=y,z(s.I,s.F,y))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),s=e;var o=n;if(s.wa=bh(s,s.J?s.pa:null,s.Y),o.K){fh(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&($i(a),Ss(a)),s.g=o}else Ah(s);0<e.j.length&&Qi(e)}else c[0]!="stop"&&c[0]!="close"||Ae(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ae(e,7):sa(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}us(4)}catch{}}function fg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Vi(n)){for(var t=[],e=n.length,s=0;s<e;s++)t.push(n[s]);return t}t=[],e=0;for(s in n)t[e++]=n[s];return t}function pg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Vi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const s in n)t[e++]=s;return t}}}function rh(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Vi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=pg(n),s=fg(n),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],e&&e[r],n)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _g(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var s=n[e].indexOf("="),i=null;if(0<=s){var r=n[e].substring(0,s);i=n[e].substring(s+1)}else r=n[e];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pe(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Pe){this.h=n.h,ci(this,n.j),this.s=n.s,this.g=n.g,ui(this,n.m),this.l=n.l;var t=n.i,e=new hs;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Nl(this,e),this.o=n.o}else n&&(t=String(n).match(oh))?(this.h=!1,ci(this,t[1]||"",!0),this.s=jn(t[2]||""),this.g=jn(t[3]||"",!0),ui(this,t[4]),this.l=jn(t[5]||"",!0),Nl(this,t[6]||"",!0),this.o=jn(t[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Pe.prototype.toString=function(){var n=[],t=this.j;t&&n.push($n(t,Dl,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push($n(t,Dl,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push($n(e,e.charAt(0)=="/"?yg:gg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",$n(e,vg)),n.join("")};function ie(n){return new Pe(n)}function ci(n,t,e){n.j=e?jn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ui(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Nl(n,t,e){t instanceof hs?(n.i=t,Tg(n.i,n.h)):(e||(t=$n(t,Eg)),n.i=new hs(t,n.h))}function z(n,t,e){n.i.set(t,e)}function Wi(n){return z(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function jn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function $n(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,mg),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function mg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Dl=/[#\/\?@]/g,gg=/[#\?:]/g,yg=/[#\?]/g,Eg=/[#\?@]/g,vg=/#/g;function hs(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Ee(n){n.g||(n.g=new Map,n.h=0,n.i&&_g(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}T=hs.prototype;T.add=function(n,t){Ee(this),this.i=null,n=An(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function ah(n,t){Ee(n),t=An(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function lh(n,t){return Ee(n),t=An(n,t),n.g.has(t)}T.forEach=function(n,t){Ee(this),this.g.forEach(function(e,s){e.forEach(function(i){n.call(t,i,s,this)},this)},this)};T.ta=function(){Ee(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let s=0;s<t.length;s++){const i=n[s];for(let r=0;r<i.length;r++)e.push(t[s])}return e};T.Z=function(n){Ee(this);let t=[];if(typeof n=="string")lh(this,n)&&(t=t.concat(this.g.get(An(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};T.set=function(n,t){return Ee(this),this.i=null,n=An(this,n),lh(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};T.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function ch(n,t,e){ah(n,t),0<e.length&&(n.i=null,n.g.set(An(n,t),Bo(e)),n.h+=e.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var s=t[e];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),n.push(i)}}return this.i=n.join("&")};function An(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Tg(n,t){t&&!n.j&&(Ee(n),n.i=null,n.g.forEach(function(e,s){var i=s.toLowerCase();s!=i&&(ah(this,s),ch(this,i,e))},n)),n.j=t}var Ig=class{constructor(n,t){this.g=n,this.map=t}};function uh(n){this.l=n||wg,C.PerformanceNavigationTiming?(n=C.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(C.g&&C.g.Ka&&C.g.Ka()&&C.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wg=10;function hh(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function dh(n){return n.h?1:n.g?n.g.size:0}function no(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function ta(n,t){n.g?n.g.add(t):n.h=t}function fh(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}uh.prototype.cancel=function(){if(this.i=ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ph(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Bo(n.i)}var Ag=class{stringify(n){return C.JSON.stringify(n,void 0)}parse(n){return C.JSON.parse(n,void 0)}};function Rg(){this.g=new Ag}function Sg(n,t,e){const s=e||"";try{rh(n,function(i,r){let o=i;Ts(i)&&(o=Go(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Cg(n,t){const e=new Ui;if(C.Image){const s=new Image;s.onload=$s(zs,e,s,"TestLoadImage: loaded",!0,t),s.onerror=$s(zs,e,s,"TestLoadImage: error",!1,t),s.onabort=$s(zs,e,s,"TestLoadImage: abort",!1,t),s.ontimeout=$s(zs,e,s,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else t(!1)}function zs(n,t,e,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function zi(n){this.l=n.ec||null,this.j=n.ob||!1}at(zi,Xo);zi.prototype.g=function(){return new Hi(this.l,this.j)};zi.prototype.i=function(n){return function(){return n}}({});function Hi(n,t){ot.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=ea,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}at(Hi,ot);var ea=0;T=Hi.prototype;T.open=function(n,t){if(this.readyState!=ea)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,ds(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||C).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=ea};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_h(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function _h(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Cs(this):ds(this),this.readyState==3&&_h(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,Cs(this))};T.Ya=function(n){this.g&&(this.response=n,Cs(this))};T.ka=function(){this.g&&Cs(this)};function Cs(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ds(n)}T.setRequestHeader=function(n,t){this.v.append(n,t)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function ds(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Pg=C.JSON.parse;function K(n){ot.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mh,this.L=this.M=!1}at(K,ot);var mh="",bg=/^https?$/i,Ng=["POST","PUT"];T=K.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,t,e,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jr.g(),this.C=this.u?bl(this.u):bl(Jr),this.g.onreadystatechange=Et(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(r){kl(this,r);return}if(n=e||"",e=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)e.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())e.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(e.keys()).find(r=>r.toLowerCase()=="content-type"),i=C.FormData&&n instanceof C.FormData,!(0<=ku(Ng,t))||s||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of e)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Eh(this),0<this.B&&((this.L=Dg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.ua,this)):this.A=Yo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){kl(this,r)}};function Dg(n){return fn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof Uo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function kl(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,gh(n),Gi(n)}function gh(n){n.F||(n.F=!0,ht(n,"complete"),ht(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ht(this,"complete"),ht(this,"abort"),Gi(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gi(this,!0)),K.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?yh(this):this.kb())};T.kb=function(){yh(this)};function yh(n){if(n.h&&typeof Uo<"u"&&(!n.C[1]||$t(n)!=4||n.da()!=2)){if(n.v&&$t(n)==4)Yo(n.La,0,n);else if(ht(n,"readystatechange"),$t(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var s;if(s=o===0){var i=String(n.I).match(oh)[1]||null;!i&&C.self&&C.self.location&&(i=C.self.location.protocol.slice(0,-1)),s=!bg.test(i?i.toLowerCase():"")}e=s}if(e)ht(n,"complete"),ht(n,"success");else{n.m=6;try{var r=2<$t(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",gh(n)}}finally{Gi(n)}}}}function Gi(n,t){if(n.g){Eh(n);const e=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||ht(n,"ready");try{e.onreadystatechange=s}catch{}}}function Eh(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(C.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function $t(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Pg(t)}};function Ol(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case mh:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function kg(n){const t={};n=(n.g&&2<=$t(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(rs(n[s]))continue;var e=sg(n[s]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const r=t[i]||[];t[i]=r,r.push(e)}Ym(t,function(s){return s.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vh(n){let t="";return jo(n,function(e,s){t+=s,t+=":",t+=e,t+=`\r
`}),t}function na(n,t,e){t:{for(s in e){var s=!1;break t}s=!0}s||(e=vh(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):z(n,t,e))}function Vn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Th(n){this.Ga=0,this.j=[],this.l=new Ui,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vn("baseRetryDelayMs",5e3,n),this.hb=Vn("retryDelaySeedMs",1e4,n),this.eb=Vn("forwardChannelMaxRetries",2,n),this.xa=Vn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new uh(n&&n.concurrentRequestLimit),this.Ja=new Rg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Th.prototype;T.ra=8;T.H=1;function sa(n){if(Ih(n),n.H==3){var t=n.W++,e=ie(n.I);if(z(e,"SID",n.K),z(e,"RID",t),z(e,"TYPE","terminate"),Ps(n,e),t=new Rs(n,n.l,t),t.L=2,t.A=Wi(ie(e)),e=!1,C.navigator&&C.navigator.sendBeacon)try{e=C.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&C.Image&&(new Image().src=t.A,e=!0),e||(t.g=Nh(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ss(t)}Ph(n)}function Ki(n){n.g&&(ra(n),n.g.cancel(),n.g=null)}function Ih(n){Ki(n),n.u&&(C.clearTimeout(n.u),n.u=null),hi(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&C.clearTimeout(n.m),n.m=null)}function Qi(n){if(!hh(n.i)&&!n.m){n.m=!0;var t=n.Na;as||Wu(),ls||(as(),ls=!0),Ko.add(t,n),n.C=0}}function Og(n,t){return dh(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ws(Et(n.Na,n,t),Ch(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Rs(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Mu(r),Lu(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var s=this.j[e];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=wh(this,i,t),e=ie(this.I),z(e,"RID",n),z(e,"CVER",22),this.F&&z(e,"X-HTTP-Session-Id",this.F),Ps(this,e),r&&(this.O?t="headers="+encodeURIComponent(String(vh(r)))+"&"+t:this.o&&na(e,this.o,r)),ta(this.i,i),this.bb&&z(e,"TYPE","init"),this.P?(z(e,"$req",t),z(e,"SID","null"),i.aa=!0,to(i,e,null)):to(i,e,t),this.H=2}}else this.H==3&&(n?Vl(this,n):this.j.length==0||hh(this.i)||Vl(this))};function Vl(n,t){var e;t?e=t.m:e=n.W++;const s=ie(n.I);z(s,"SID",n.K),z(s,"RID",e),z(s,"AID",n.V),Ps(n,s),n.o&&n.s&&na(s,n.o,n.s),e=new Rs(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=wh(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ta(n.i,e),to(e,s,t)}function Ps(n,t){n.na&&jo(n.na,function(e,s){z(t,s,e)}),n.h&&rh({},function(e,s){z(t,s,e)})}function wh(n,t,e){e=Math.min(n.j.length,e);var s=n.h?Et(n.h.Va,n.h,n):null;t:{var i=n.j;let r=-1;for(;;){const o=["count="+e];r==-1?0<e?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<e;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{Sg(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,s}function Ah(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;as||Wu(),ls||(as(),ls=!0),Ko.add(t,n),n.A=0}}function ia(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ws(Et(n.Ma,n),Ch(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,Rh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ws(Et(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,wt(10),Ki(this),Rh(this))};function ra(n){n.B!=null&&(C.clearTimeout(n.B),n.B=null)}function Rh(n){n.g=new Rs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=ie(n.wa);z(t,"RID","rpc"),z(t,"SID",n.K),z(t,"AID",n.V),z(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&z(t,"TO",n.qa),z(t,"TYPE","xmlhttp"),Ps(n,t),n.o&&n.s&&na(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=Wi(ie(t)),e.u=null,e.S=!0,eh(e,n)}T.ib=function(){this.v!=null&&(this.v=null,Ki(this),ia(this),wt(19))};function hi(n){n.v!=null&&(C.clearTimeout(n.v),n.v=null)}function Sh(n,t){var e=null;if(n.g==t){hi(n),ra(n),n.g=null;var s=2}else if(no(n.i,t))e=t.F,fh(n.i,t),s=1;else return;if(n.H!=0){if(t.i)if(s==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;s=Bi(),ht(s,new Yu(s,e)),Qi(n)}else Ah(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(s==1&&Og(n,t)||s==2&&ia(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Ae(n,5);break;case 4:Ae(n,10);break;case 3:Ae(n,6);break;default:Ae(n,2)}}}function Ch(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Ae(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var s=Et(n.pb,n);e||(e=new Pe("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||ci(e,"https"),Wi(e)),Cg(e.toString(),s)}else wt(2);n.H=0,n.h&&n.h.za(t),Ph(n),Ih(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),wt(2)):(this.l.info("Failed to ping google.com"),wt(1))};function Ph(n){if(n.H=0,n.ma=[],n.h){const t=ph(n.i);(t.length!=0||n.j.length!=0)&&(Al(n.ma,t),Al(n.ma,n.j),n.i.i.length=0,Bo(n.j),n.j.length=0),n.h.ya()}}function bh(n,t,e){var s=e instanceof Pe?ie(e):new Pe(e);if(s.g!="")t&&(s.g=t+"."+s.g),ui(s,s.m);else{var i=C.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Pe(null);s&&ci(r,s),t&&(r.g=t),i&&ui(r,i),e&&(r.l=e),s=r}return e=n.F,t=n.Da,e&&t&&z(s,e,t),z(s,"VER",n.ra),Ps(n,s),s}function Nh(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new K(new zi({ob:e})):new K(n.va),t.Oa(n.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Dh(){}T=Dh.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function di(){if(fn&&!(10<=Number(Hm)))throw Error("Environmental error: no available transport.")}di.prototype.g=function(n,t){return new Pt(n,t)};function Pt(n,t){ot.call(this),this.g=new Th(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!rs(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rs(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Rn(this)}at(Pt,ot);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;wt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=bh(n,null,n.Y),Qi(n)};Pt.prototype.close=function(){sa(this.g)};Pt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Go(n),n=e);t.j.push(new Ig(t.fb++,n)),t.H==3&&Qi(t)};Pt.prototype.N=function(){this.g.h=null,delete this.j,sa(this.g),delete this.g,Pt.$.N.call(this)};function kh(n){Jo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}at(kh,Jo);function Oh(){Zo.call(this),this.status=1}at(Oh,Zo);function Rn(n){this.g=n}at(Rn,Dh);Rn.prototype.Ba=function(){ht(this.g,"a")};Rn.prototype.Aa=function(n){ht(this.g,new kh(n))};Rn.prototype.za=function(n){ht(this.g,new Oh)};Rn.prototype.ya=function(){ht(this.g,"b")};function Vg(){this.blockSize=-1}function Ut(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}at(Ut,Vg);Ut.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rr(n,t,e){e||(e=0);var s=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)s[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)s[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var r=n.g[3],o=t+(r^e&(i^r))+s[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[1]+3905402710&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[5]+1200080426&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[9]+2336552879&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(r^e&(i^r))+s[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=r+(i^t&(e^i))+s[13]+4254626195&4294967295,r=t+(o<<12&4294967295|o>>>20),o=i+(e^r&(t^e))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=e+(t^i&(r^t))+s[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^r&(e^i))+s[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[6]+3225465664&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[10]+38016083&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[14]+3275163606&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^r&(e^i))+s[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=r+(e^i&(t^e))+s[2]+4243563512&4294967295,r=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(r^t))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=e+(r^t&(i^r))+s[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^r)+s[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[8]+2272392833&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[4]+1272893353&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[0]+3936430074&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^r)+s[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=r+(t^e^i)+s[12]+3873151461&4294967295,r=t+(o<<11&4294967295|o>>>21),o=i+(r^t^e)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=e+(i^r^t)+s[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~r))+s[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[7]+1126891415&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[3]+2399980690&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[15]+4264355552&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~r))+s[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=r+(e^(t|~i))+s[11]+3174756917&4294967295,r=t+(o<<10&4294967295|o>>>22),o=i+(t^(r|~e))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=e+(r^(i|~t))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+r&4294967295}Ut.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(i==0)for(;r<=e;)Rr(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<t;)if(s[i++]=n.charCodeAt(r++),i==this.blockSize){Rr(this,s),i=0;break}}else for(;r<t;)if(s[i++]=n[r++],i==this.blockSize){Rr(this,s),i=0;break}}this.h=i,this.i+=t};Ut.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var s=0;32>s;s+=8)n[e++]=this.g[t]>>>s&255;return n};function U(n,t){this.h=t;for(var e=[],s=!0,i=n.length-1;0<=i;i--){var r=n[i]|0;s&&r==t||(e[i]=r,s=!1)}this.g=e}var xg={};function oa(n){return-128<=n&&128>n?$m(n,function(t){return new U([t|0],0>t?-1:0)}):new U([n|0],0>n?-1:0)}function Wt(n){if(isNaN(n)||!isFinite(n))return sn;if(0>n)return lt(Wt(-n));for(var t=[],e=1,s=0;n>=e;s++)t[s]=n/e|0,e*=so;return new U(t,0)}function Vh(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return lt(Vh(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Wt(Math.pow(t,8)),s=sn,i=0;i<n.length;i+=8){var r=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+r),t);8>r?(r=Wt(Math.pow(t,r)),s=s.R(r).add(Wt(o))):(s=s.R(e),s=s.add(Wt(o)))}return s}var so=4294967296,sn=oa(0),io=oa(1),xl=oa(16777216);T=U.prototype;T.ea=function(){if(bt(this))return-lt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var s=this.D(e);n+=(0<=s?s:so+s)*t,t*=so}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(te(this))return"0";if(bt(this))return"-"+lt(this).toString(n);for(var t=Wt(Math.pow(n,6)),e=this,s="";;){var i=pi(e,t).g;e=fi(e,i.R(t));var r=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,te(e))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function te(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function bt(n){return n.h==-1}T.X=function(n){return n=fi(this,n),bt(n)?-1:te(n)?0:1};function lt(n){for(var t=n.g.length,e=[],s=0;s<t;s++)e[s]=~n.g[s];return new U(e,~n.h).add(io)}T.abs=function(){return bt(this)?lt(this):this};T.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0,i=0;i<=t;i++){var r=s+(this.D(i)&65535)+(n.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,e[i]=o<<16|r}return new U(e,e[e.length-1]&-2147483648?-1:0)};function fi(n,t){return n.add(lt(t))}T.R=function(n){if(te(this)||te(n))return sn;if(bt(this))return bt(n)?lt(this).R(lt(n)):lt(lt(this).R(n));if(bt(n))return lt(this.R(lt(n)));if(0>this.X(xl)&&0>n.X(xl))return Wt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],s=0;s<2*t;s++)e[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<n.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*s+2*i]+=o*l,Hs(e,2*s+2*i),e[2*s+2*i+1]+=r*l,Hs(e,2*s+2*i+1),e[2*s+2*i+1]+=o*a,Hs(e,2*s+2*i+1),e[2*s+2*i+2]+=r*a,Hs(e,2*s+2*i+2)}for(s=0;s<t;s++)e[s]=e[2*s+1]<<16|e[2*s];for(s=t;s<2*t;s++)e[s]=0;return new U(e,0)};function Hs(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function xn(n,t){this.g=n,this.h=t}function pi(n,t){if(te(t))throw Error("division by zero");if(te(n))return new xn(sn,sn);if(bt(n))return t=pi(lt(n),t),new xn(lt(t.g),lt(t.h));if(bt(t))return t=pi(n,lt(t)),new xn(lt(t.g),t.h);if(30<n.g.length){if(bt(n)||bt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=io,s=t;0>=s.X(n);)e=Ml(e),s=Ml(s);var i=Qe(e,1),r=Qe(s,1);for(s=Qe(s,2),e=Qe(e,2);!te(s);){var o=r.add(s);0>=o.X(n)&&(i=i.add(e),r=o),s=Qe(s,1),e=Qe(e,1)}return t=fi(n,i.R(t)),new xn(i,t)}for(i=sn;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),s=Math.ceil(Math.log(e)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Wt(e),o=r.R(t);bt(o)||0<o.X(n);)e-=s,r=Wt(e),o=r.R(t);te(r)&&(r=io),i=i.add(r),n=fi(n,o)}return new xn(i,n)}T.gb=function(n){return pi(this,n).h};T.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)&n.D(s);return new U(e,this.h&n.h)};T.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)|n.D(s);return new U(e,this.h|n.h)};T.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],s=0;s<t;s++)e[s]=this.D(s)^n.D(s);return new U(e,this.h^n.h)};function Ml(n){for(var t=n.g.length+1,e=[],s=0;s<t;s++)e[s]=n.D(s)<<1|n.D(s-1)>>>31;return new U(e,n.h)}function Qe(n,t){var e=t>>5;t%=32;for(var s=n.g.length-e,i=[],r=0;r<s;r++)i[r]=0<t?n.D(r+e)>>>t|n.D(r+e+1)<<32-t:n.D(r+e);return new U(i,n.h)}di.prototype.createWebChannel=di.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;qi.NO_ERROR=0;qi.TIMEOUT=8;qi.HTTP_ERROR=6;Xu.COMPLETE="complete";Ju.EventType=As;As.OPEN="a";As.CLOSE="b";As.ERROR="c";As.MESSAGE="d";ot.prototype.listen=ot.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;Ut.prototype.digest=Ut.prototype.l;Ut.prototype.reset=Ut.prototype.reset;Ut.prototype.update=Ut.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Wt;U.fromString=Vh;var Mg=function(){return new di},Lg=function(){return Bi()},Sr=qi,Fg=Xu,Ug=$e,Ll={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Gs=Ju,Bg=K,qg=Ut,rn=U;const Fl="@firebase/firestore";/**
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
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Sn="10.8.1";/**
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
 */const Oe=new Mo("@firebase/firestore");function Mn(){return Oe.logLevel}function E(n,...t){if(Oe.logLevel<=V.DEBUG){const e=t.map(aa);Oe.debug(`Firestore (${Sn}): ${n}`,...e)}}function Yt(n,...t){if(Oe.logLevel<=V.ERROR){const e=t.map(aa);Oe.error(`Firestore (${Sn}): ${n}`,...e)}}function pn(n,...t){if(Oe.logLevel<=V.WARN){const e=t.map(aa);Oe.warn(`Firestore (${Sn}): ${n}`,...e)}}function aa(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function S(n="Unexpected state"){const t=`FIRESTORE (${Sn}) INTERNAL ASSERTION FAILED: `+n;throw Yt(t),new Error(t)}function j(n,t){n||S()}function b(n,t){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends je{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class xh{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class $g{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Wg{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let s=this.i;const i=l=>this.i!==s?(s=this.i,e(l)):Promise.resolve();let r=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ne,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ne)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new xh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return j(t===null||typeof t=="string"),new pt(t)}}class zg{constructor(t,e,s){this.l=t,this.h=e,this.P=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Hg{constructor(t,e,s){this.l=t,this.h=e,this.P=s}getToken(){return Promise.resolve(new zg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const s=r=>{r.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(j(typeof e.token=="string"),this.R=e.token,new Gg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
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
 */class Mh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Qg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<e&&(s+=t.charAt(i[r]%t.length))}return s}}function L(n,t){return n<t?-1:n>t?1:0}function _n(n,t,e){return n.length===t.length&&n.every((s,i)=>e(s,t[i]))}/**
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
 */class et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*e));return new et(e,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class P{constructor(t){this.timestamp=t}static fromTimestamp(t){return new P(t)}static min(){return new P(new et(0,0))}static max(){return new P(new et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class fs{constructor(t,e,s){e===void 0?e=0:e>t.length&&S(),s===void 0?s=t.length-e:s>t.length-e&&S(),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return fs.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof fs?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let i=0;i<s;i++){const r=t.get(i),o=e.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends fs{construct(t,e,s){return new H(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new I(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(i=>i.length>0))}return new H(e)}static emptyPath(){return new H([])}}const Yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends fs{construct(t,e,s){return new ut(t,e,s)}static isValidIdentifier(t){return Yg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new I(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
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
 */class A{constructor(t){this.path=t}static fromPath(t){return new A(H.fromString(t))}static fromName(t){return new A(H.fromString(t).popFirst(5))}static empty(){return new A(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new A(new H(t.slice()))}}function Xg(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=P.fromTimestamp(s===1e9?new et(e+1,0):new et(e,s));return new pe(i,A.empty(),t)}function Jg(n){return new pe(n.readTime,n.key,-1)}class pe{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new pe(P.min(),A.empty(),-1)}static max(){return new pe(P.max(),A.empty(),-1)}}function Zg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=A.comparator(n.documentKey,t.documentKey),e!==0?e:L(n.largestBatchId,t.largestBatchId))}/**
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
 */const ty="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ey{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function bs(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ty)throw n;E("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(e,r).next(s,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,s)=>{e(t)})}static reject(t){return new m((e,s)=>{s(t)})}static waitFor(t){return new m((e,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&e()},l=>s(l))}),o=!0,r===i&&e()})}static or(t){let e=m.resolve(!1);for(const s of t)e=e.next(i=>i?m.resolve(i):s());return e}static forEach(t,e){const s=[];return t.forEach((i,r)=>{s.push(e.call(this,i,r))}),this.waitFor(s)}static mapArray(t,e){return new m((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;e(t[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(t,e){return new m((s,i)=>{const r=()=>{t()===!0?e().next(()=>{r()},i):s()};r()})}}/**
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
 */class la{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new ne,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Gn(t,e.error)):this.V.resolve()},this.transaction.onerror=s=>{const i=ca(s.target.error);this.V.reject(new Gn(t,i))}}static open(t,e,s,i){try{return new la(e,t.transaction(i,s))}catch(r){throw new Gn(e,r)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(E("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new sy(e)}}class Re{constructor(t,e,s){this.name=t,this.version=e,this.p=s,Re.S(un())===12.2&&Yt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return E("SimpleDb","Removing database:",t),Ie(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Iu())return!1;if(Re.C())return!0;const t=un(),e=Re.S(t),s=0<e&&e<10,i=Re.v(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||s||r)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static v(t){const e=t.match(/Android ([\d.]+)/i),s=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async O(t){return this.db||(E("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;e(o)},i.onblocked=()=>{s(new Gn(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new I(p.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new I(p.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Gn(t,o))},i.onupgradeneeded=r=>{E("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,i.transaction,r.oldVersion,this.version).next(()=>{E("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,s,i){const r=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=la.open(this.db,t,r?"readonly":"readwrite",s),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),m.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(E("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ny{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ie(this.k.delete())}}class Gn extends I{constructor(t,e){super(p.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ns(n){return n.name==="IndexedDbTransactionError"}class sy{constructor(t){this.store=t}put(t,e){let s;return e!==void 0?(E("SimpleDb","PUT",this.store.name,t,e),s=this.store.put(e,t)):(E("SimpleDb","PUT",this.store.name,"<auto-key>",t),s=this.store.put(t)),Ie(s)}add(t){return E("SimpleDb","ADD",this.store.name,t,t),Ie(this.store.add(t))}get(t){return Ie(this.store.get(t)).next(e=>(e===void 0&&(e=null),E("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return E("SimpleDb","DELETE",this.store.name,t),Ie(this.store.delete(t))}count(){return E("SimpleDb","COUNT",this.store.name),Ie(this.store.count())}W(t,e){const s=this.options(t,e),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){const r=i.getAll(s.range);return new m((o,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{const r=this.cursor(s),o=[];return this.G(r,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const s=this.store.getAll(t,e===null?void 0:e);return new m((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}H(t,e){E("SimpleDb","DELETE ALL",this.store.name);const s=this.options(t,e);s.J=!1;const i=this.cursor(s);return this.G(i,(r,o,a)=>a.delete())}Y(t,e){let s;e?s=t:(s={},e=t);const i=this.cursor(s);return this.G(i,e)}Z(t){const e=this.cursor({});return new m((s,i)=>{e.onerror=r=>{const o=ca(r.target.error);i(o)},e.onsuccess=r=>{const o=r.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(t,e){const s=[];return new m((i,r)=>{t.onerror=o=>{r(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new ny(a),c=e(a.primaryKey,a.value,l);if(c instanceof m){const u=c.catch(h=>(l.done(),m.reject(h)));s.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>m.waitFor(s))}options(t,e){let s;return t!==void 0&&(typeof t=="string"?s=t:e=t),{index:s,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const s=this.store.index(t.index);return t.J?s.openKeyCursor(t.range,e):s.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ie(n){return new m((t,e)=>{n.onsuccess=s=>{const i=s.target.result;t(i)},n.onerror=s=>{const i=ca(s.target.error);e(i)}})}let Ul=!1;function ca(n){const t=Re.S(un());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const s=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ul||(Ul=!0,setTimeout(()=>{throw s},0)),s}}return n}/**
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
 */class ua{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.se(s),this.oe=s=>e.writeSequenceNumber(s))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ua._e=-1;function Yi(n){return n==null}function _i(n){return n===0&&1/n==-1/0}function iy(n){return typeof n=="number"&&Number.isInteger(n)&&!_i(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Cn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Lh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */let tt=class ro{constructor(t,e){this.comparator=t,this.root=e||he.EMPTY}insert(t,e){return new ro(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,he.BLACK,null,null))}remove(t){return new ro(this.comparator,this.root.remove(t,this.comparator).copy(null,null,he.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return e+s.left.size;i<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ks(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ks(this.root,t,this.comparator,!0)}},Ks=class{constructor(t,e,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?s(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},he=class Zt{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??Zt.RED,this.left=i??Zt.EMPTY,this.right=r??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,i,r){return new Zt(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}};he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,e,s,i,r){return this}insert(t,e,s){return new he(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ql(this.data.getIterator())}getIteratorFrom(t){return new ql(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class ql{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new dt(ut.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _n(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
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
 */class Fh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Fh("Invalid base64 string: "+r):r}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const ry=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _e(n){if(j(!!n),typeof n=="string"){let t=0;const e=ry.exec(n);if(j(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ve(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
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
 */function ha(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function da(n){const t=n.mapValue.fields.__previous_value__;return ha(t)?da(t):t}function ps(n){const t=_e(n.mapValue.fields.__local_write_time__.timestampValue);return new et(t.seconds,t.nanos)}/**
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
 */class oy{constructor(t,e,s,i,r,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class _s{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _s("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof _s&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ha(n)?4:ay(n)?9007199254740991:10:S()}function Xt(n,t){if(n===t)return!0;const e=xe(n);if(e!==xe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ps(n).isEqual(ps(t));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=_e(i.timestampValue),a=_e(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,r){return Ve(i.bytesValue).isEqual(Ve(r.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,r){return J(i.geoPointValue.latitude)===J(r.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(r.geoPointValue.longitude)}(n,t);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return J(i.integerValue)===J(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=J(i.doubleValue),a=J(r.doubleValue);return o===a?_i(o)===_i(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return _n(n.arrayValue.values||[],t.arrayValue.values||[],Xt);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Bl(o)!==Bl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Xt(o[l],a[l])))return!1;return!0}(n,t);default:return S()}}function ms(n,t){return(n.values||[]).find(e=>Xt(e,t))!==void 0}function mn(n,t){if(n===t)return 0;const e=xe(n),s=xe(t);if(e!==s)return L(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return L(n.booleanValue,t.booleanValue);case 2:return function(r,o){const a=J(r.integerValue||r.doubleValue),l=J(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return jl(n.timestampValue,t.timestampValue);case 4:return jl(ps(n),ps(t));case 5:return L(n.stringValue,t.stringValue);case 6:return function(r,o){const a=Ve(r),l=Ve(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=L(a[c],l[c]);if(u!==0)return u}return L(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(r,o){const a=L(J(r.latitude),J(o.latitude));return a!==0?a:L(J(r.longitude),J(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=mn(a[c],l[c]);if(u)return u}return L(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(r,o){if(r===Qs.mapValue&&o===Qs.mapValue)return 0;if(r===Qs.mapValue)return 1;if(o===Qs.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=L(l[h],u[h]);if(d!==0)return d;const f=mn(a[l[h]],c[u[h]]);if(f!==0)return f}return L(l.length,u.length)}(n.mapValue,t.mapValue);default:throw S()}}function jl(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return L(n,t);const e=_e(n),s=_e(t),i=L(e.seconds,s.seconds);return i!==0?i:L(e.nanos,s.nanos)}function gn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=_e(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ve(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return A.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",i=!0;for(const r of e.values||[])i?i=!1:s+=",",s+=oo(r);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${oo(e.fields[o])}`;return i+"}"}(n.mapValue):S()}function $l(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ao(n){return!!n&&"integerValue"in n}function fa(n){return!!n&&"arrayValue"in n}function Wl(n){return!!n&&"nullValue"in n}function zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function Kn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Cn(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=Kn(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Kn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ay(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(t){this.value=t}static empty(){return new Nt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Kn(e)}setAll(t){let e=ut.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,s,i),s={},i=[],e=a.popLast()}o?s[a.lastSegment()]=Kn(o):i.push(a.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,s,i)}delete(t){const e=this.field(t.popLast());ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=e.mapValue.fields[t.get(s)];ni(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,s){Cn(e,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new Nt(Kn(this.value))}}function Uh(n){const t=[];return Cn(n.fields,(e,s)=>{const i=new ut([e]);if(ni(s)){const r=Uh(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new Vt(t)}/**
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
 */class _t{constructor(t,e,s,i,r,o,a){this.key=t,this.documentType=e,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new _t(t,0,P.min(),P.min(),P.min(),Nt.empty(),0)}static newFoundDocument(t,e,s,i){return new _t(t,1,e,P.min(),s,i,0)}static newNoDocument(t,e){return new _t(t,2,e,P.min(),P.min(),Nt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,P.min(),P.min(),Nt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(P.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=P.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mi{constructor(t,e){this.position=t,this.inclusive=e}}function Hl(n,t,e){let s=0;for(let i=0;i<n.position.length;i++){const r=t[i],o=n.position[i];if(r.field.isKeyField()?s=A.comparator(A.fromName(o.referenceValue),e.key):s=mn(o,e.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Gl(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Xt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class gi{constructor(t,e="asc"){this.field=t,this.dir=e}}function ly(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Bh{}class Z extends Bh{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new uy(t,e,s):e==="array-contains"?new fy(t,s):e==="in"?new py(t,s):e==="not-in"?new _y(t,s):e==="array-contains-any"?new my(t,s):new Z(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new hy(t,s):new dy(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(mn(e,this.value)):e!==null&&xe(this.value)===xe(e)&&this.matchesComparison(mn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends Bh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Bt(t,e)}matches(t){return qh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function qh(n){return n.op==="and"}function jh(n){return cy(n)&&qh(n)}function cy(n){for(const t of n.filters)if(t instanceof Bt)return!1;return!0}function lo(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+gn(n.value);if(jh(n))return n.filters.map(t=>lo(t)).join(",");{const t=n.filters.map(e=>lo(e)).join(",");return`${n.op}(${t})`}}function $h(n,t){return n instanceof Z?function(s,i){return i instanceof Z&&s.op===i.op&&s.field.isEqual(i.field)&&Xt(s.value,i.value)}(n,t):n instanceof Bt?function(s,i){return i instanceof Bt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&$h(o,i.filters[a]),!0):!1}(n,t):void S()}function Wh(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${gn(e.value)}`}(n):n instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wh).join(" ,")+"}"}(n):"Filter"}class uy extends Z{constructor(t,e,s){super(t,e,s),this.key=A.fromName(s.referenceValue)}matches(t){const e=A.comparator(t.key,this.key);return this.matchesComparison(e)}}class hy extends Z{constructor(t,e){super(t,"in",e),this.keys=zh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dy extends Z{constructor(t,e){super(t,"not-in",e),this.keys=zh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function zh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>A.fromName(s.referenceValue))}class fy extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fa(e)&&ms(e.arrayValue,this.value)}}class py extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ms(this.value.arrayValue,e)}}class _y extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ms(this.value.arrayValue,e)}}class my extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fa(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>ms(this.value.arrayValue,s))}}/**
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
 */class gy{constructor(t,e=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Kl(n,t=null,e=[],s=[],i=null,r=null,o=null){return new gy(n,t,e,s,i,r,o)}function pa(n){const t=b(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>lo(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Yi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>gn(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>gn(s)).join(",")),t.ce=e}return t.ce}function _a(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ly(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!$h(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Gl(n.startAt,t.startAt)&&Gl(n.endAt,t.endAt)}function co(n){return A.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ds{constructor(t,e=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function yy(n,t,e,s,i,r,o,a){return new Ds(n,t,e,s,i,r,o,a)}function Hh(n){return new Ds(n)}function Ql(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gh(n){return n.collectionGroup!==null}function Qn(n){const t=b(n);if(t.le===null){t.le=[];const e=new Set;for(const r of t.explicitOrderBy)t.le.push(r),e.add(r.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new dt(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new gi(r,s))}),e.has(ut.keyField().canonicalString())||t.le.push(new gi(ut.keyField(),s))}return t.le}function Kt(n){const t=b(n);return t.he||(t.he=Ey(t,Qn(n))),t.he}function Ey(n,t){if(n.limitType==="F")return Kl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new gi(i.field,r)});const e=n.endAt?new mi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new mi(n.startAt.position,n.startAt.inclusive):null;return Kl(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function uo(n,t){const e=n.filters.concat([t]);return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,t,e){return new Ds(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Xi(n,t){return _a(Kt(n),Kt(t))&&n.limitType===t.limitType}function Kh(n){return`${pa(Kt(n))}|lt:${n.limitType}`}function Xe(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(i=>Wh(i)).join(", ")}]`),Yi(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(i=>gn(i)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(i=>gn(i)).join(",")),`Target(${s})`}(Kt(n))}; limitType=${n.limitType})`}function Ji(n,t){return t.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):A.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(n,t)&&function(s,i){for(const r of Qn(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(n,t)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(n,t)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Hl(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Qn(s),i)||s.endAt&&!function(o,a,l){const c=Hl(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Qn(s),i))}(n,t)}function vy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qh(n){return(t,e)=>{let s=!1;for(const i of Qn(n)){const r=Ty(i,t,e);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Ty(n,t,e){const s=n.field.isKeyField()?A.comparator(t.key,e.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?mn(l,c):S()}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
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
 */class Pn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[e]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Cn(this.inner,(e,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return Lh(this.inner)}size(){return this.innerSize}}/**
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
 */const Iy=new tt(A.comparator);function re(){return Iy}const Yh=new tt(A.comparator);function Wn(...n){let t=Yh;for(const e of n)t=t.insert(e.key,e);return t}function Xh(n){let t=Yh;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function Se(){return Yn()}function Jh(){return Yn()}function Yn(){return new Pn(n=>n.toString(),(n,t)=>n.isEqual(t))}const wy=new tt(A.comparator),Ay=new dt(A.comparator);function D(...n){let t=Ay;for(const e of n)t=t.add(e);return t}const Ry=new dt(L);function Sy(){return Ry}/**
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
 */function Zh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_i(t)?"-0":t}}function td(n){return{integerValue:""+n}}function Cy(n,t){return iy(t)?td(t):Zh(n,t)}/**
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
 */class Zi{constructor(){this._=void 0}}function Py(n,t,e){return n instanceof yi?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&ha(r)&&(r=da(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(e,t):n instanceof gs?nd(n,t):n instanceof ys?sd(n,t):function(i,r){const o=ed(i,r),a=Yl(o)+Yl(i.Ie);return ao(o)&&ao(i.Ie)?td(a):Zh(i.serializer,a)}(n,t)}function by(n,t,e){return n instanceof gs?nd(n,t):n instanceof ys?sd(n,t):e}function ed(n,t){return n instanceof Ei?function(s){return ao(s)||function(r){return!!r&&"doubleValue"in r}(s)}(t)?t:{integerValue:0}:null}class yi extends Zi{}class gs extends Zi{constructor(t){super(),this.elements=t}}function nd(n,t){const e=id(t);for(const s of n.elements)e.some(i=>Xt(i,s))||e.push(s);return{arrayValue:{values:e}}}class ys extends Zi{constructor(t){super(),this.elements=t}}function sd(n,t){let e=id(t);for(const s of n.elements)e=e.filter(i=>!Xt(i,s));return{arrayValue:{values:e}}}class Ei extends Zi{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Yl(n){return J(n.integerValue||n.doubleValue)}function id(n){return fa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ny(n,t){return n.field.isEqual(t.field)&&function(s,i){return s instanceof gs&&i instanceof gs||s instanceof ys&&i instanceof ys?_n(s.elements,i.elements,Xt):s instanceof Ei&&i instanceof Ei?Xt(s.Ie,i.Ie):s instanceof yi&&i instanceof yi}(n.transform,t.transform)}class Dy{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function si(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class tr{}function rd(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ma(n.key,Mt.none()):new ks(n.key,n.data,Mt.none());{const e=n.data,s=Nt.empty();let i=new dt(ut.comparator);for(let r of t.fields)if(!i.has(r)){let o=e.field(r);o===null&&r.length>1&&(r=r.popLast(),o=e.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new We(n.key,s,new Vt(i.toArray()),Mt.none())}}function ky(n,t,e){n instanceof ks?function(i,r,o){const a=i.value.clone(),l=Jl(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof We?function(i,r,o){if(!si(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Jl(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(od(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Xn(n,t,e,s){return n instanceof ks?function(r,o,a,l){if(!si(r.precondition,o))return a;const c=r.value.clone(),u=Zl(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,s):n instanceof We?function(r,o,a,l){if(!si(r.precondition,o))return a;const c=Zl(r.fieldTransforms,l,o),u=o.data;return u.setAll(od(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,t,e,s):function(r,o,a){return si(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Oy(n,t){let e=null;for(const s of n.fieldTransforms){const i=t.data.field(s.field),r=ed(s.transform,i||null);r!=null&&(e===null&&(e=Nt.empty()),e.set(s.field,r))}return e||null}function Xl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&_n(s,i,(r,o)=>Ny(r,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ks extends tr{constructor(t,e,s,i=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class We extends tr{constructor(t,e,s,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function od(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function Jl(n,t,e){const s=new Map;j(n.length===e.length);for(let i=0;i<e.length;i++){const r=n[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,by(o,a,e[i]))}return s}function Zl(n,t,e){const s=new Map;for(const i of n){const r=i.transform,o=e.data.field(i.field);s.set(i.field,Py(r,o,t))}return s}class ma extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vy extends tr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xy{constructor(t,e,s,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&ky(r,t,s[i])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Xn(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Xn(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=Jh();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=e.has(i.key)?null:a;const l=rd(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(P.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),D())}isEqual(t){return this.batchId===t.batchId&&_n(this.mutations,t.mutations,(e,s)=>Xl(e,s))&&_n(this.baseMutations,t.baseMutations,(e,s)=>Xl(e,s))}}class ga{constructor(t,e,s,i){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=i}static from(t,e,s){j(t.mutations.length===s.length);let i=function(){return wy}();const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ga(t,e,s,i)}}/**
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
 */class My{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ly{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var X,O;function Fy(n){switch(n){default:return S();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function ad(n){if(n===void 0)return Yt("GRPC error has no .code"),p.UNKNOWN;switch(n){case X.OK:return p.OK;case X.CANCELLED:return p.CANCELLED;case X.UNKNOWN:return p.UNKNOWN;case X.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case X.INTERNAL:return p.INTERNAL;case X.UNAVAILABLE:return p.UNAVAILABLE;case X.UNAUTHENTICATED:return p.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case X.NOT_FOUND:return p.NOT_FOUND;case X.ALREADY_EXISTS:return p.ALREADY_EXISTS;case X.PERMISSION_DENIED:return p.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case X.ABORTED:return p.ABORTED;case X.OUT_OF_RANGE:return p.OUT_OF_RANGE;case X.UNIMPLEMENTED:return p.UNIMPLEMENTED;case X.DATA_LOSS:return p.DATA_LOSS;default:return S()}}(O=X||(X={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Uy(){return new TextEncoder}/**
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
 */const By=new rn([4294967295,4294967295],0);function tc(n){const t=Uy().encode(n),e=new qg;return e.update(t),new Uint8Array(e.digest())}function ec(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new rn([e,s],0),new rn([i,r],0)]}class ya{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new zn(`Invalid padding: ${e}`);if(s<0)throw new zn(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new zn(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new zn(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=rn.fromNumber(this.Te)}de(t,e,s){let i=t.add(e.multiply(rn.fromNumber(s)));return i.compare(By)===1&&(i=new rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=tc(t),[s,i]=ec(e);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(t,e,s){const i=t%8==0?0:8-t%8,r=new Uint8Array(Math.ceil(t/8)),o=new ya(r,i,e);return s.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=tc(t),[s,i]=ec(e);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class er{constructor(t,e,s,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const i=new Map;return i.set(t,Os.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new er(P.min(),i,new tt(L),re(),D())}}class Os{constructor(t,e,s,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Os(s,e,D(),D(),D())}}/**
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
 */class ii{constructor(t,e,s,i){this.Ve=t,this.removedTargetIds=e,this.key=s,this.me=i}}class ld{constructor(t,e){this.targetId=t,this.fe=e}}class cd{constructor(t,e,s=Tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=i}}class nc{constructor(){this.ge=0,this.pe=ic(),this.ye=Tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=D(),e=D(),s=D();return this.pe.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:s=s.add(i);break;default:S()}}),new Os(this.ye,this.we,t,e,s)}Fe(){this.Se=!1,this.pe=ic()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,j(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class qy{constructor(t){this.Le=t,this.ke=new Map,this.qe=re(),this.Qe=sc(),this.Ke=new tt(L)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const s=this.ze(e);switch(t.state){case 0:this.je(e)&&s.Ce(t.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(t.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(e);break;case 3:this.je(e)&&(s.Be(),s.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),s.Ce(t.resumeToken));break;default:S()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((s,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,s=t.fe.count,i=this.Ye(e);if(i){const r=i.target;if(co(r))if(s===0){const o=new A(r.path);this.We(e,o,_t.newNoDocument(o,P.min()))}else j(s===1);else{const o=this.Ze(e);if(o!==s){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=e;let o,a;try{o=Ve(s).toUint8Array()}catch(l){if(l instanceof Fh)return pn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ya(o,i,r)}catch(l){return pn(l instanceof zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,s){return e.fe.count===s-this.rt(t,e.targetId)?0:2}rt(t,e){const s=this.Le.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;t.mightContain(a)||(this.We(e,r,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&co(a.target)){const l=new A(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,_t.newNoDocument(l,t))}r.De&&(e.set(o,r.ve()),r.Fe())}});let s=D();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(t));const i=new er(t,e,this.Ke,this.qe,s);return this.qe=re(),this.Qe=sc(),this.Ke=new tt(L),i}Ue(t,e){if(!this.je(t))return;const s=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,s),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,s){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),s&&(this.qe=this.qe.insert(e,s))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new nc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new dt(L),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||E("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new nc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sc(){return new tt(A.comparator)}function ic(){return new tt(A.comparator)}const jy={asc:"ASCENDING",desc:"DESCENDING"},$y={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wy={and:"AND",or:"OR"};class zy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fo(n,t){return n.useProto3Json||Yi(t)?t:{value:t}}function vi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ud(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Hy(n,t){return vi(n,t.toTimestamp())}function Qt(n){return j(!!n),P.fromTimestamp(function(e){const s=_e(e);return new et(s.seconds,s.nanos)}(n))}function Ea(n,t){return po(n,t).canonicalString()}function po(n,t){const e=function(i){return new H(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function hd(n){const t=H.fromString(n);return j(md(t)),t}function _o(n,t){return Ea(n.databaseId,t.path)}function Cr(n,t){const e=hd(t);if(e.get(1)!==n.databaseId.projectId)throw new I(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new I(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new A(fd(e))}function dd(n,t){return Ea(n.databaseId,t)}function Gy(n){const t=hd(n);return t.length===4?H.emptyPath():fd(t)}function mo(n){return new H(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fd(n){return j(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rc(n,t,e){return{name:_o(n,t),fields:e.value.mapValue.fields}}function Ky(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(j(u===void 0||typeof u=="string"),Tt.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),Tt.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:ad(c.code);return new I(u,c.message||"")}(o);e=new cd(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Cr(n,s.document.name),r=Qt(s.document.updateTime),o=s.document.createTime?Qt(s.document.createTime):P.min(),a=new Nt({mapValue:{fields:s.document.fields}}),l=_t.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];e=new ii(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Cr(n,s.document),r=s.readTime?Qt(s.readTime):P.min(),o=_t.newNoDocument(i,r),a=s.removedTargetIds||[];e=new ii([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Cr(n,s.document),r=s.removedTargetIds||[];e=new ii([],r,i,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new Ly(i,r),a=s.targetId;e=new ld(a,o)}}return e}function Qy(n,t){let e;if(t instanceof ks)e={update:rc(n,t.key,t.value)};else if(t instanceof ma)e={delete:_o(n,t.key)};else if(t instanceof We)e={update:rc(n,t.key,t.data),updateMask:iE(t.fieldMask)};else{if(!(t instanceof Vy))return S();e={verify:_o(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ys)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ei)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw S()}(0,s))),t.precondition.isNone||(e.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Hy(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(n,t.precondition)),e}function Yy(n,t){return n&&n.length>0?(j(t!==void 0),n.map(e=>function(i,r){let o=i.updateTime?Qt(i.updateTime):Qt(r);return o.isEqual(P.min())&&(o=Qt(r)),new Dy(o,i.transformResults||[])}(e,t))):[]}function Xy(n,t){return{documents:[dd(n,t.path)]}}function Jy(n,t){const e={structuredQuery:{}},s=t.path;let i;t.collectionGroup!==null?(i=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=dd(n,i);const r=function(c){if(c.length!==0)return _d(Bt.create(c,"and"))}(t.filters);r&&(e.structuredQuery.where=r);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Je(d.field),direction:eE(d.dir)}}(u))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=fo(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:e,parent:i}}function Zy(n){let t=Gy(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let i=null;if(s>0){j(s===1);const u=e.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];e.where&&(r=function(h){const d=pd(h);return d instanceof Bt&&jh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(g){return new gi(Ze(g.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Yi(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new mi(f,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new mi(f,d)}(e.endAt)),yy(t,i,o,r,a,"F",l,c)}function tE(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pd(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=Ze(e.unaryFilter.field);return Z.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ze(e.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ze(e.unaryFilter.field);return Z.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ze(e.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(Ze(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(s=>pd(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function eE(n){return jy[n]}function nE(n){return $y[n]}function sE(n){return Wy[n]}function Je(n){return{fieldPath:n.canonicalString()}}function Ze(n){return ut.fromServerFormat(n.fieldPath)}function _d(n){return n instanceof Z?function(e){if(e.op==="=="){if(zl(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zl(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NAN"}};if(Wl(e.value))return{unaryFilter:{field:Je(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Je(e.field),op:nE(e.op),value:e.value}}}(n):n instanceof Bt?function(e){const s=e.getFilters().map(i=>_d(i));return s.length===1?s[0]:{compositeFilter:{op:sE(e.op),filters:s}}}(n):S()}function iE(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function md(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class le{constructor(t,e,s,i,r=P.min(),o=P.min(),a=Tt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new le(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new le(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class rE{constructor(t){this.ct=t}}function oE(n){const t=Zy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(t,t.limit,"L"):t}/**
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
 */class aE{constructor(){this._n=new lE}addToCollectionParentIndex(t,e){return this._n.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(pe.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(pe.min())}updateCollectionGroup(t,e,s){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class lE{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e]||new dt(H.comparator),r=!i.has(s);return this.index[e]=i.add(s),r}has(t){const e=t.lastSegment(),s=t.popLast(),i=this.index[e];return i&&i.has(s)}getEntries(t){return(this.index[t]||new dt(H.comparator)).toArray()}}/**
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
 */class yn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new yn(0)}static Bn(){return new yn(-1)}}/**
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
 */class cE{constructor(){this.changes=new Pn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?m.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class uE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class hE{constructor(t,e,s,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(s!==null&&Xn(s.mutation,i,Vt.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,D()).next(()=>s))}getLocalViewOfDocuments(t,e,s=D()){const i=Se();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,s).next(r=>{let o=Wn();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const s=Se();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,D()))}populateOverlays(t,e,s){const i=[];return s.forEach(r=>{e.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,s,i){let r=re();const o=Yn(),a=function(){return Yn()}();return e.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof We)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Xn(u.mutation,c,u.mutation.getFieldMask(),et.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return a.set(c,new uE(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const s=Yn();let i=new tt((o,a)=>o-a),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let u=s.get(l)||Vt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||D()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Jh();u.forEach(d=>{if(!r.has(d)){const f=rd(e.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,i){return function(o){return A.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Gh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,i):this.getDocumentsMatchingCollectionQuery(t,e,s,i)}getNextDocuments(t,e,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,i-r.size):m.resolve(Se());let a=-1,l=r;return o.next(c=>m.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?m.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,r)).next(()=>this.computeViews(t,l,c,D())).next(u=>({batchId:a,changes:Xh(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new A(e)).next(s=>{let i=Wn();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,s,i){const r=e.collectionGroup;let o=Wn();return this.indexManager.getCollectionParents(t,r).next(a=>m.forEach(a,l=>{const c=function(h,d){return new Ds(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,l.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,_t.newInvalidDocument(u)))});let a=Wn();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Xn(u.mutation,c,Vt.empty(),et.now()),Ji(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class dE{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return m.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Qt(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:oE(i.bundledQuery),readTime:Qt(i.readTime)}}(e)),m.resolve()}}/**
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
 */class fE{constructor(){this.overlays=new tt(A.comparator),this.hr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const s=Se();return m.forEach(e,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((i,r)=>{this.ht(t,e,r)}),m.resolve()}removeOverlaysForBatchId(t,e,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),m.resolve()}getOverlaysForCollection(t,e,s){const i=Se(),r=e.length+1,o=new A(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,s,i){let r=new tt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Se(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Se(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return m.resolve(a)}ht(t,e,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new My(e,s));let r=this.hr.get(e);r===void 0&&(r=D(),this.hr.set(e,r)),this.hr.set(e,r.add(s.key))}}/**
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
 */class va{constructor(){this.Pr=new dt(st.Ir),this.Tr=new dt(st.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const s=new st(t,e);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.Ar(new st(t,e))}Rr(t,e){t.forEach(s=>this.removeReference(s,e))}Vr(t){const e=new A(new H([])),s=new st(e,t),i=new st(e,t+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new A(new H([])),s=new st(e,t),i=new st(e,t+1);let r=D();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const e=new st(t,0),s=this.Pr.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class st{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return A.comparator(t.key,e.key)||L(t.pr,e.pr)}static Er(t,e){return L(t.pr,e.pr)||A.comparator(t.key,e.key)}}/**
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
 */class pE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new dt(st.Ir)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xy(r,e,s,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new st(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,i=this.br(s),r=i<0?0:i;return m.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const a=this.Sr(o.pr);r.push(a)}),m.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new dt(L);return e.forEach(i=>{const r=new st(i,0),o=new st(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{s=s.add(a.pr)})}),m.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,i=s.length+1;let r=s;A.isDocumentKey(r)||(r=r.child(""));const o=new st(new A(r),0);let a=new dt(L);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),m.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(s=>{const i=this.Sr(s);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){j(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return m.forEach(e.mutations,i=>{const r=new st(i.key,e.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=s})}Mn(t){}containsKey(t,e){const s=new st(e,0),i=this.wr.firstAfterOrEqual(s);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class _E{constructor(t){this.vr=t,this.docs=function(){return new tt(A.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return m.resolve(s?s.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let s=re();return e.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():_t.newInvalidDocument(i))}),m.resolve(s)}getDocumentsMatchingQuery(t,e,s,i){let r=re();const o=e.path,a=new A(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Zg(Jg(u),s)<=0||(i.has(u.key)||Ji(e,u))&&(r=r.insert(u.key,u.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(t,e,s,i){S()}Fr(t,e){return m.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new mE(this)}getSize(t){return m.resolve(this.size)}}class mE extends cE{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(s)}),m.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class gE{constructor(t){this.persistence=t,this.Mr=new Pn(e=>pa(e),_a),this.lastRemoteSnapshotVersion=P.min(),this.highestTargetId=0,this.Or=0,this.Nr=new va,this.targetCount=0,this.Br=yn.Nn()}forEachTarget(t,e){return this.Mr.forEach((s,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this.Or&&(this.Or=e),m.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new yn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.qn(e),m.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,s){let i=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&s.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),m.waitFor(r).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const s=this.Mr.get(e)||null;return m.resolve(s)}addMatchingKeys(t,e,s){return this.Nr.dr(e,s),m.resolve()}removeMatchingKeys(t,e,s){this.Nr.Rr(e,s);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const s=this.Nr.gr(e);return m.resolve(s)}containsKey(t,e){return m.resolve(this.Nr.containsKey(e))}}/**
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
 */class yE{constructor(t,e){this.Lr={},this.overlays={},this.kr=new ua(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new gE(this),this.indexManager=new aE,this.remoteDocumentCache=function(i){return new _E(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new rE(e),this.$r=new dE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.Lr[t.toKey()];return s||(s=new pE(e,this.referenceDelegate),this.Lr[t.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,s){E("MemoryPersistence","Starting transaction:",t);const i=new EE(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(t,e){return m.or(Object.values(this.Lr).map(s=>()=>s.containsKey(t,e)))}}class EE extends ey{constructor(t){super(),this.currentSequenceNumber=t}}class Ta{constructor(t){this.persistence=t,this.zr=new va,this.jr=null}static Hr(t){return new Ta(t)}get Jr(){if(this.jr)return this.jr;throw S()}addReference(t,e,s){return this.zr.addReference(s,e),this.Jr.delete(s.toString()),m.resolve()}removeReference(t,e,s){return this.zr.removeReference(s,e),this.Jr.add(s.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),m.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Jr,s=>{const i=A.fromPath(s);return this.Yr(t,i).next(r=>{r||e.removeEntry(i,P.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(s=>{s?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return m.or([()=>m.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Ia{constructor(t,e,s,i){this.targetId=t,this.fromCache=e,this.qi=s,this.Qi=i}static Ki(t,e){let s=D(),i=D();for(const r of e.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Ia(t,e.fromCache,s,i)}}/**
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
 */class vE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class TE{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return m_()?8:Re.v(un())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,s,i){const r={result:null};return this.ji(t,e).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(t,e,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new vE;return this.Ji(t,e,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>r.result)}Yi(t,e,s,i){return s.documentReadCount<this.Wi?(Mn()<=V.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",Xe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),m.resolve()):(Mn()<=V.DEBUG&&E("QueryEngine","Query:",Xe(e),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(Mn()<=V.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",Xe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):m.resolve())}ji(t,e){if(Ql(e))return m.resolve(null);let s=Kt(e);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ho(e,null,"F"),s=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=D(...r);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.Zi(e,a);return this.Xi(e,c,o,l.readTime)?this.ji(t,ho(e,null,"F")):this.es(t,c,e,l)}))})))}Hi(t,e,s,i){return Ql(e)||i.isEqual(P.min())?m.resolve(null):this.zi.getDocuments(t,s).next(r=>{const o=this.Zi(e,r);return this.Xi(e,o,s,i)?m.resolve(null):(Mn()<=V.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xe(e)),this.es(t,o,e,Xg(i,-1)).next(a=>a))})}Zi(t,e){let s=new dt(Qh(t));return e.forEach((i,r)=>{Ji(t,r)&&(s=s.add(r))}),s}Xi(t,e,s,i){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const r=t.limitType==="F"?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,s){return Mn()<=V.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Xe(e)),this.zi.getDocumentsMatchingQuery(t,e,pe.min(),s)}es(t,e,s,i){return this.zi.getDocumentsMatchingQuery(t,s,i).next(r=>(e.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class IE{constructor(t,e,s,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new tt(L),this.rs=new Pn(r=>pa(r),_a),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(s)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hE(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function wE(n,t,e,s){return new IE(n,t,e,s)}async function gd(n,t){const e=b(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let i;return e.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,e._s(t),e.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=D();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return e.localDocuments.getDocuments(s,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function AE(n,t){const e=b(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=e.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=m.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const _=c.docVersions.get(g);j(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(e,s,t,r).next(()=>r.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=D();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(s,i))})}function yd(n){const t=b(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function RE(n,t){const e=b(n),s=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(e.Qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>e.Qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Tt.EMPTY_BYTE_STRING,P.min()).withLastLimboFreeSnapshotVersion(P.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(y,_,R){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(d,f,u)&&a.push(e.Qr.updateTargetData(r,f))});let l=re(),c=D();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(SE(r,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!s.isEqual(P.min())){const u=e.Qr.getLastRemoteSnapshotVersion(r).next(h=>e.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return m.waitFor(a).next(()=>o.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(e.ns=i,r))}function SE(n,t,e){let s=D(),i=D();return e.forEach(r=>s=s.add(r)),t.getEntries(n,s).next(r=>{let o=re();return e.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(P.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function CE(n,t){const e=b(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function PE(n,t){const e=b(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return e.Qr.getTargetData(s,t).next(r=>r?(i=r,m.resolve(i)):e.Qr.allocateTargetId(s).next(o=>(i=new le(t,o,"TargetPurposeListen",s.currentSequenceNumber),e.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=e.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(s.targetId,s),e.rs.set(t,s.targetId)),s})}async function go(n,t,e){const s=b(n),i=s.ns.get(t),r=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ns(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ns=s.ns.remove(t),s.rs.delete(i.target)}function oc(n,t,e){const s=b(n);let i=P.min(),r=D();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=b(l),d=h.rs.get(u);return d!==void 0?m.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(s,o,Kt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ts.getDocumentsMatchingQuery(o,t,e?i:P.min(),e?r:D())).next(a=>(bE(s,vy(t),a),{documents:a,hs:r})))}function bE(n,t,e){let s=n.ss.get(t)||P.min();e.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.ss.set(t,s)}class ac{constructor(){this.activeTargetIds=Sy()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class NE{constructor(){this.no=new ac,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,s){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ac,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class DE{io(t){}shutdown(){}}/**
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
 */class lc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ys=null;function Pr(){return Ys===null?Ys=function(){return 268435456+Math.round(2147483648*Math.random())}():Ys++,"0x"+Ys.toString(16)}/**
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
 */const kE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OE{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const ft="WebChannelConnection";class VE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const s=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=s+"://"+e.host,this.po=`projects/${i}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get wo(){return!1}So(e,s,i,r,o){const a=Pr(),l=this.bo(e,s.toUriEncodedString());E("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,r,o),this.Co(e,l,c,i).then(u=>(E("RestConnection",`Received RPC '${e}' ${a}: `,u),u),u=>{throw pn("RestConnection",`RPC '${e}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(e,s,i,r,o,a){return this.So(e,s,i,r,o)}Do(e,s,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>e[o]=r),i&&i.headers.forEach((r,o)=>e[o]=r)}bo(e,s){const i=kE[e];return`${this.fo}/v1/${s}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,s,i){const r=Pr();return new Promise((o,a)=>{const l=new Bg;l.setWithCredentials(!0),l.listenOnce(Fg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sr.NO_ERROR:const u=l.getResponseJson();E(ft,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(u)),o(u);break;case Sr.TIMEOUT:E(ft,`RPC '${t}' ${r} timed out`),a(new I(p.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const h=l.getStatus();if(E(ft,`RPC '${t}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const g=function(_){const R=_.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(R)>=0?R:p.UNKNOWN}(f.status);a(new I(g,f.message))}else a(new I(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new I(p.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{E(ft,`RPC '${t}' ${r} completed.`)}});const c=JSON.stringify(i);E(ft,`RPC '${t}' ${r} sending request:`,i),l.send(e,"POST",c,s,15)})}Fo(t,e,s){const i=Pr(),r=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Mg(),a=Lg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,s),l.encodeInitMessageHeaders=!0;const u=r.join("");E(ft,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new OE({lo:_=>{f?E(ft,`Not sending because RPC '${t}' stream ${i} is closed:`,_):(d||(E(ft,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),E(ft,`RPC '${t}' stream ${i} sending:`,_),h.send(_))},ho:()=>h.close()}),y=(_,R,w)=>{_.listen(R,N=>{try{w(N)}catch(q){setTimeout(()=>{throw q},0)}})};return y(h,Gs.EventType.OPEN,()=>{f||E(ft,`RPC '${t}' stream ${i} transport opened.`)}),y(h,Gs.EventType.CLOSE,()=>{f||(f=!0,E(ft,`RPC '${t}' stream ${i} transport closed`),g.Vo())}),y(h,Gs.EventType.ERROR,_=>{f||(f=!0,pn(ft,`RPC '${t}' stream ${i} transport errored:`,_),g.Vo(new I(p.UNAVAILABLE,"The operation could not be completed")))}),y(h,Gs.EventType.MESSAGE,_=>{var R;if(!f){const w=_.data[0];j(!!w);const N=w,q=N.error||((R=N[0])===null||R===void 0?void 0:R.error);if(q){E(ft,`RPC '${t}' stream ${i} received error:`,q);const Jt=q.status;let qt=function(Sp){const hl=X[Sp];if(hl!==void 0)return ad(hl)}(Jt),Ke=q.message;qt===void 0&&(qt=p.INTERNAL,Ke="Unknown error status: "+Jt+" with message "+q.message),f=!0,g.Vo(new I(qt,Ke)),h.close()}else E(ft,`RPC '${t}' stream ${i} received:`,w),g.mo(w)}}),y(a,Ug.STAT_EVENT,_=>{_.stat===Ll.PROXY?E(ft,`RPC '${t}' stream ${i} detected buffering proxy`):_.stat===Ll.NOPROXY&&E(ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function br(){return typeof document<"u"?document:null}/**
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
 */function nr(n){return new zy(n,!0)}/**
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
 */class Ed{constructor(t,e,s=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.Mo=s,this.xo=i,this.Oo=r,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),s=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-s);i>0&&E("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class vd{constructor(t,e,s,i,r,o,a,l){this.oi=t,this.$o=s,this.Uo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Ed(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(Yt(e.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Wo===e&&this.o_(s,i)},s=>{t(()=>{const i=new I(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.__(i)})})}o_(t,e){const s=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{s(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{s(()=>this.__(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xE extends vd{constructor(t,e,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=Ky(this.serializer,t),s=function(r){if(!("targetChange"in r))return P.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?P.min():o.readTime?Qt(o.readTime):P.min()}(t);return this.listener.u_(e,s)}c_(t){const e={};e.database=mo(this.serializer),e.addTarget=function(r,o){let a;const l=o.target;if(a=co(l)?{documents:Xy(r,l)}:{query:Jy(r,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ud(r,o.resumeToken);const c=fo(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(P.min())>0){a.readTime=vi(r,o.snapshotVersion.toTimestamp());const c=fo(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const s=tE(this.serializer,t);s&&(e.labels=s),this.t_(e)}l_(t){const e={};e.database=mo(this.serializer),e.removeTarget=t,this.t_(e)}}class ME extends vd{constructor(t,e,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,i,o),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,e){return this.connection.Fo("Write",t,e)}onMessage(t){if(j(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const e=Yy(t.writeResults,t.commitTime),s=Qt(t.commitTime);return this.listener.T_(s,e)}return j(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=mo(this.serializer),this.t_(t)}I_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>Qy(this.serializer,s))};this.t_(e)}}/**
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
 */class LE extends class{}{constructor(t,e,s,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new I(p.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(t,po(e,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(p.UNKNOWN,r.toString())})}vo(t,e,s,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,po(e,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(p.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class FE{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Yt(e),this.g_=!1):E("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class UE{constructor(t,e,s,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{s.enqueueAndForget(async()=>{ze(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=b(l);c.v_.add(4),await Vs(c),c.x_.set("Unknown"),c.v_.delete(4),await sr(c)}(this))})}),this.x_=new FE(s,i)}}async function sr(n){if(ze(n))for(const t of n.F_)await t(!0)}async function Vs(n){for(const t of n.F_)await t(!1)}function Td(n,t){const e=b(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Ra(e)?Aa(e):bn(e).Jo()&&wa(e,t))}function Id(n,t){const e=b(n),s=bn(e);e.C_.delete(t),s.Jo()&&wd(e,t),e.C_.size===0&&(s.Jo()?s.Xo():ze(e)&&e.x_.set("Unknown"))}function wa(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(P.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}bn(n).c_(t)}function wd(n,t){n.O_.Oe(t),bn(n).l_(t)}function Aa(n){n.O_=new qy({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),bn(n).start(),n.x_.p_()}function Ra(n){return ze(n)&&!bn(n).Ho()&&n.C_.size>0}function ze(n){return b(n).v_.size===0}function Ad(n){n.O_=void 0}async function BE(n){n.C_.forEach((t,e)=>{wa(n,t)})}async function qE(n,t){Ad(n),Ra(n)?(n.x_.S_(t),Aa(n)):n.x_.set("Unknown")}async function jE(n,t,e){if(n.x_.set("Online"),t instanceof cd&&t.state===2&&t.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Ti(n,s)}else if(t instanceof ii?n.O_.$e(t):t instanceof ld?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(P.min()))try{const s=await yd(n.localStore);e.compareTo(s)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.C_.get(c);u&&r.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.C_.get(l);if(!u)return;r.C_.set(l,u.withResumeToken(Tt.EMPTY_BYTE_STRING,u.snapshotVersion)),wd(r,l);const h=new le(u.target,l,c,u.sequenceNumber);wa(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await Ti(n,s)}}async function Ti(n,t,e){if(!Ns(t))throw t;n.v_.add(1),await Vs(n),n.x_.set("Offline"),e||(e=()=>yd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await sr(n)})}function Rd(n,t){return t().catch(e=>Ti(n,e,t))}async function ir(n){const t=b(n),e=me(t);let s=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;$E(t);)try{const i=await CE(t.localStore,s);if(i===null){t.D_.length===0&&e.Xo();break}s=i.batchId,WE(t,i)}catch(i){await Ti(t,i)}Sd(t)&&Cd(t)}function $E(n){return ze(n)&&n.D_.length<10}function WE(n,t){n.D_.push(t);const e=me(n);e.Jo()&&e.P_&&e.I_(t.mutations)}function Sd(n){return ze(n)&&!me(n).Ho()&&n.D_.length>0}function Cd(n){me(n).start()}async function zE(n){me(n).d_()}async function HE(n){const t=me(n);for(const e of n.D_)t.I_(e.mutations)}async function GE(n,t,e){const s=n.D_.shift(),i=ga.from(s,t,e);await Rd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ir(n)}async function KE(n,t){t&&me(n).P_&&await async function(s,i){if(function(o){return Fy(o)&&o!==p.ABORTED}(i.code)){const r=s.D_.shift();me(s).Zo(),await Rd(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ir(s)}}(n,t),Sd(n)&&Cd(n)}async function cc(n,t){const e=b(n);e.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=ze(e);e.v_.add(3),await Vs(e),s&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await sr(e)}async function QE(n,t){const e=b(n);t?(e.v_.delete(2),await sr(e)):t||(e.v_.add(2),await Vs(e),e.x_.set("Unknown"))}function bn(n){return n.N_||(n.N_=function(e,s,i){const r=b(e);return r.R_(),new xE(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:BE.bind(null,n),To:qE.bind(null,n),u_:jE.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Ra(n)?Aa(n):n.x_.set("Unknown")):(await n.N_.stop(),Ad(n))})),n.N_}function me(n){return n.B_||(n.B_=function(e,s,i){const r=b(e);return r.R_(),new ME(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(n.datastore,n.asyncQueue,{Po:zE.bind(null,n),To:KE.bind(null,n),E_:HE.bind(null,n),T_:GE.bind(null,n)}),n.F_.push(async t=>{t?(n.B_.Zo(),await ir(n)):(await n.B_.stop(),n.D_.length>0&&(E("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.B_}/**
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
 */class Sa{constructor(t,e,s,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,i,r){const o=Date.now()+s,a=new Sa(t,e,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ca(n,t){if(Yt("AsyncQueue",`${t}: ${n}`),Ns(n))return new I(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class on{constructor(t){this.comparator=t?(e,s)=>t(e,s)||A.comparator(e.key,s.key):(e,s)=>A.comparator(e.key,s.key),this.keyedMap=Wn(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new on(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof on)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new on;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
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
 */class uc{constructor(){this.L_=new tt(A.comparator)}track(t){const e=t.doc.key,s=this.L_.get(e);s?t.type!==0&&s.type===3?this.L_=this.L_.insert(e,t):t.type===3&&s.type!==1?this.L_=this.L_.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.L_=this.L_.remove(e):t.type===1&&s.type===2?this.L_=this.L_.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):S():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,s)=>{t.push(s)}),t}}class En{constructor(t,e,s,i,r,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,s,i,r){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new En(t,e,on.emptySet(e),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Xi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==s[i].type||!e[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class YE{constructor(){this.q_=void 0,this.Q_=[]}}class XE{constructor(){this.queries=new Pn(t=>Kh(t),Xi),this.onlineState="Unknown",this.K_=new Set}}async function JE(n,t){const e=b(n),s=t.query;let i=!1,r=e.queries.get(s);if(r||(i=!0,r=new YE),i)try{r.q_=await e.onListen(s)}catch(o){const a=Ca(o,`Initialization of query '${Xe(t.query)}' failed`);return void t.onError(a)}e.queries.set(s,r),r.Q_.push(t),t.U_(e.onlineState),r.q_&&t.W_(r.q_)&&Pa(e)}async function ZE(n,t){const e=b(n),s=t.query;let i=!1;const r=e.queries.get(s);if(r){const o=r.Q_.indexOf(t);o>=0&&(r.Q_.splice(o,1),i=r.Q_.length===0)}if(i)return e.queries.delete(s),e.onUnlisten(s)}function tv(n,t){const e=b(n);let s=!1;for(const i of t){const r=i.query,o=e.queries.get(r);if(o){for(const a of o.Q_)a.W_(i)&&(s=!0);o.q_=i}}s&&Pa(e)}function ev(n,t,e){const s=b(n),i=s.queries.get(t);if(i)for(const r of i.Q_)r.onError(e);s.queries.delete(t)}function Pa(n){n.K_.forEach(t=>{t.next()})}class nv{constructor(t,e,s){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=s||{}}W_(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new En(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const s=e!=="Offline";return(!this.options.Z_||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=En.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class Pd{constructor(t){this.key=t}}class bd{constructor(t){this.key=t}}class sv{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=D(),this.mutatedKeys=D(),this.ua=Qh(t),this.ca=new on(this.ua)}get la(){return this.oa}ha(t,e){const s=e?e.Pa:new uc,i=e?e.ca:this.ca;let r=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=Ji(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(s.track({type:2,doc:f}),_=!0,(l&&this.ua(f,l)>0||c&&this.ua(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),_=!0):d&&!f&&(s.track({type:1,doc:d}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{ca:o,Pa:s,Xi:a,mutatedKeys:r}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,i){const r=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((u,h)=>function(f,g){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return y(f)-y(g)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(s),i=i!=null&&i;const a=e&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,c=l!==this._a;return this._a=l,o.length!==0||c?{snapshot:new En(this.query,t.ca,r,o,t.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new uc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=D(),this.ca.forEach(s=>{this.Aa(s.key)&&(this.aa=this.aa.add(s.key))});const e=[];return t.forEach(s=>{this.aa.has(s)||e.push(new bd(s))}),this.aa.forEach(s=>{t.has(s)||e.push(new Pd(s))}),e}Ra(t){this.oa=t.hs,this.aa=D();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return En.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class iv{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class rv{constructor(t){this.key=t,this.ma=!1}}class ov{constructor(t,e,s,i,r,o){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Pn(a=>Kh(a),Xi),this.pa=new Map,this.ya=new Set,this.wa=new tt(A.comparator),this.Sa=new Map,this.ba=new va,this.Da={},this.Ca=new Map,this.va=yn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function av(n,t){const e=gv(n);let s,i;const r=e.ga.get(t);if(r)s=r.targetId,e.sharedClientState.addLocalQueryTarget(s),i=r.view.Va();else{const o=await PE(e.localStore,Kt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await lv(e,t,s,a==="current",o.resumeToken),e.isPrimaryClient&&Td(e.remoteStore,o)}return i}async function lv(n,t,e,s,i){n.Ma=(h,d,f)=>async function(y,_,R,w){let N=_.view.ha(R);N.Xi&&(N=await oc(y.localStore,_.query,!1).then(({documents:Ke})=>_.view.ha(Ke,N)));const q=w&&w.targetChanges.get(_.targetId),Jt=w&&w.targetMismatches.get(_.targetId)!=null,qt=_.view.applyChanges(N,y.isPrimaryClient,q,Jt);return dc(y,_.targetId,qt.da),qt.snapshot}(n,h,d,f);const r=await oc(n.localStore,t,!0),o=new sv(t,r.hs),a=o.ha(r.documents),l=Os.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);dc(n,e,c.da);const u=new iv(t,e,o);return n.ga.set(t,u),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),c.snapshot}async function cv(n,t){const e=b(n),s=e.ga.get(t),i=e.pa.get(s.targetId);if(i.length>1)return e.pa.set(s.targetId,i.filter(r=>!Xi(r,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(s.targetId),e.sharedClientState.isActiveQueryTarget(s.targetId)||await go(e.localStore,s.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(s.targetId),Id(e.remoteStore,s.targetId),yo(e,s.targetId)}).catch(bs)):(yo(e,s.targetId),await go(e.localStore,s.targetId,!0))}async function uv(n,t,e){const s=yv(n);try{const i=await function(o,a){const l=b(o),c=et.now(),u=a.reduce((f,g)=>f.add(g.key),D());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=re(),y=D();return l.os.getEntries(f,u).next(_=>{g=_,g.forEach((R,w)=>{w.isValidDocument()||(y=y.add(R))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(_=>{h=_;const R=[];for(const w of a){const N=Oy(w,h.get(w.key).overlayedDocument);N!=null&&R.push(new We(w.key,N,Uh(N.value.mapValue),Mt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,R,a)}).next(_=>{d=_;const R=_.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,_.batchId,R)})}).then(()=>({batchId:d.batchId,changes:Xh(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Da[o.currentUser.toKey()];c||(c=new tt(L)),c=c.insert(a,l),o.Da[o.currentUser.toKey()]=c}(s,i.batchId,e),await xs(s,i.changes),await ir(s.remoteStore)}catch(i){const r=Ca(i,"Failed to persist write");e.reject(r)}}async function Nd(n,t){const e=b(n);try{const s=await RE(e.localStore,t);t.targetChanges.forEach((i,r)=>{const o=e.Sa.get(r);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?j(o.ma):i.removedDocuments.size>0&&(j(o.ma),o.ma=!1))}),await xs(e,s,t)}catch(s){await bs(s)}}function hc(n,t,e){const s=b(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const i=[];s.ga.forEach((r,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=b(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(c=!0)}),c&&Pa(l)}(s.eventManager,t),i.length&&s.fa.u_(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function hv(n,t,e){const s=b(n);s.sharedClientState.updateQueryState(t,"rejected",e);const i=s.Sa.get(t),r=i&&i.key;if(r){let o=new tt(A.comparator);o=o.insert(r,_t.newNoDocument(r,P.min()));const a=D().add(r),l=new er(P.min(),new Map,new tt(L),o,a);await Nd(s,l),s.wa=s.wa.remove(r),s.Sa.delete(t),ba(s)}else await go(s.localStore,t,!1).then(()=>yo(s,t,e)).catch(bs)}async function dv(n,t){const e=b(n),s=t.batch.batchId;try{const i=await AE(e.localStore,t);kd(e,s,null),Dd(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await xs(e,i)}catch(i){await bs(i)}}async function fv(n,t,e){const s=b(n);try{const i=await function(o,a){const l=b(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(j(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,t);kd(s,t,e),Dd(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await xs(s,i)}catch(i){await bs(i)}}function Dd(n,t){(n.Ca.get(t)||[]).forEach(e=>{e.resolve()}),n.Ca.delete(t)}function kd(n,t,e){const s=b(n);let i=s.Da[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(e?r.reject(e):r.resolve(),i=i.remove(t)),s.Da[s.currentUser.toKey()]=i}}function yo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.pa.get(t))n.ga.delete(s),e&&n.fa.xa(s,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(s=>{n.ba.containsKey(s)||Od(n,s)})}function Od(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(Id(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),ba(n))}function dc(n,t,e){for(const s of e)s instanceof Pd?(n.ba.addReference(s.key,t),pv(n,s)):s instanceof bd?(E("SyncEngine","Document no longer in limbo: "+s.key),n.ba.removeReference(s.key,t),n.ba.containsKey(s.key)||Od(n,s.key)):S()}function pv(n,t){const e=t.key,s=e.path.canonicalString();n.wa.get(e)||n.ya.has(s)||(E("SyncEngine","New document in limbo: "+e),n.ya.add(s),ba(n))}function ba(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new A(H.fromString(t)),s=n.va.next();n.Sa.set(s,new rv(e)),n.wa=n.wa.insert(e,s),Td(n.remoteStore,new le(Kt(Hh(e.path)),s,"TargetPurposeLimboResolution",ua._e))}}async function xs(n,t,e){const s=b(n),i=[],r=[],o=[];s.ga.isEmpty()||(s.ga.forEach((a,l)=>{o.push(s.Ma(l,t,e).then(c=>{if((c||e)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){i.push(c);const u=Ia.Ki(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.fa.u_(i),await async function(l,c){const u=b(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,d=>m.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ns(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,y)}}}(s.localStore,r))}async function _v(n,t){const e=b(n);if(!e.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const s=await gd(e.localStore,t);e.currentUser=t,function(r,o){r.Ca.forEach(a=>{a.forEach(l=>{l.reject(new I(p.CANCELLED,o))})}),r.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await xs(e,s.us)}}function mv(n,t){const e=b(n),s=e.Sa.get(t);if(s&&s.ma)return D().add(s.key);{let i=D();const r=e.pa.get(t);if(!r)return i;for(const o of r){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function gv(n){const t=b(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Nd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hv.bind(null,t),t.fa.u_=tv.bind(null,t.eventManager),t.fa.xa=ev.bind(null,t.eventManager),t}function yv(n){const t=b(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fv.bind(null,t),t}class fc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return wE(this.persistence,new TE,t.initialUser,this.serializer)}createPersistence(t){return new yE(Ta.Hr,this.serializer)}createSharedClientState(t){return new NE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ev{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hc(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=_v.bind(null,this.syncEngine),await QE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new XE}()}createDatastore(t){const e=nr(t.databaseInfo.databaseId),s=function(r){return new VE(r)}(t.databaseInfo);return function(r,o,a,l){return new LE(r,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,i,r,o,a){return new UE(s,i,r,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>hc(this.syncEngine,e,0),function(){return lc.D()?new lc:new DE}())}createSyncEngine(t,e){return function(i,r,o,a,l,c,u){const h=new ov(i,r,o,a,l,c);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(s){const i=b(s);E("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Vs(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class vv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Yt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Tv{constructor(t,e,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Mh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{E("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(E("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Ca(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Nr(n,t){n.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await gd(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function pc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wv(n);E("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>cc(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>cc(t.remoteStore,i)),n._onlineComponents=t}function Iv(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Iv(e))throw e;pn("Error using user provided cache. Falling back to memory cache: "+e),await Nr(n,new fc)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Nr(n,new fc);return n._offlineComponents}async function Vd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await pc(n,n._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await pc(n,new Ev))),n._onlineComponents}function Av(n){return Vd(n).then(t=>t.syncEngine)}async function Rv(n){const t=await Vd(n),e=t.eventManager;return e.onListen=av.bind(null,t.syncEngine),e.onUnlisten=cv.bind(null,t.syncEngine),e}function Sv(n,t,e={}){const s=new ne;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new vv({next:d=>{o.enqueueAndForget(()=>ZE(r,h)),d.fromCache&&l.source==="server"?c.reject(new I(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new nv(a,u,{includeMetadataChanges:!0,Z_:!0});return JE(r,h)}(await Rv(n),n.asyncQueue,t,e,s)),s.promise}/**
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
 */function xd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const _c=new Map;/**
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
 */function Md(n,t,e){if(!e)throw new I(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Cv(n,t,e,s){if(t===!0&&s===!0)throw new I(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function mc(n){if(!A.isDocumentKey(n))throw new I(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gc(n){if(A.isDocumentKey(n))throw new I(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":S()}function Me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new I(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=rr(n);throw new I(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class yc{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new I(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Cv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xd((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new I(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new I(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new I(p.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class or{constructor(t,e,s,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yc(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jg;switch(s.type){case"firstParty":return new Hg(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new I(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=_c.get(e);s&&(E("ComponentProvider","Removing Datastore"),_c.delete(e),s.terminate())}(this),Promise.resolve()}}function Pv(n,t,e,s={}){var i;const r=(n=Me(n,or))._getSettings(),o=`${t}:${e}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=pt.MOCK_USER;else{a=Eu(s.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new I(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(c)}n._authCredentials=new $g(new xh(a,l))}}/**
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
 */class Nn{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Nn(this.firestore,t,this._query)}}class St{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new de(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class de extends Nn{constructor(t,e,s){super(t,e,Hh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new A(t))}withConverter(t){return new de(this.firestore,t,this._path)}}function bv(n,t,...e){if(n=Ft(n),Md("collection","path",t),n instanceof or){const s=H.fromString(t,...e);return gc(s),new de(n,null,s)}{if(!(n instanceof St||n instanceof de))throw new I(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(H.fromString(t,...e));return gc(s),new de(n.firestore,null,s)}}function Nv(n,t,...e){if(n=Ft(n),arguments.length===1&&(t=Mh.newId()),Md("doc","path",t),n instanceof or){const s=H.fromString(t,...e);return mc(s),new St(n,null,new A(s))}{if(!(n instanceof St||n instanceof de))throw new I(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(H.fromString(t,...e));return mc(s),new St(n.firestore,n instanceof de?n.converter:null,new A(s))}}/**
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
 */class Dv{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Ed(this,"async_queue_retry"),this._u=()=>{const e=br();e&&E("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=br();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=br();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new ne;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Ns(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(s=>{this.ru=s,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Yt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.iu=!1,s))));return this.Xa=e,e}enqueueAfterDelay(t,e,s){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=Sa.createAndSchedule(this,t,e,s,r=>this.lu(r));return this.nu.push(i),i}au(){this.ru&&S()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Ms extends or{constructor(t,e,s,i){super(t,e,s,i),this.type="firestore",this._queue=function(){return new Dv}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fd(this),this._firestoreClient.terminate()}}function kv(n,t){const e=typeof n=="object"?n:bu(),s=typeof n=="string"?n:t||"(default)",i=Cu(e,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=gu("firestore");r&&Pv(i,...r)}return i}function Ld(n){return n._firestoreClient||Fd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Fd(n){var t,e,s;const i=n._freezeSettings(),r=function(a,l,c,u){return new oy(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,xd(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Tv(n._authCredentials,n._appCheckCredentials,n._queue,r),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class vn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vn(Tt.fromBase64String(t))}catch(e){throw new I(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new vn(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Na{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new I(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ud{constructor(t){this._methodName=t}}/**
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
 */class Da{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}/**
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
 */const Ov=/^__.*__$/;class Vv{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new We(t,this.data,this.fieldMask,e,this.fieldTransforms):new ks(t,this.data,e,this.fieldTransforms)}}function Bd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class ka{constructor(t,e,s,i,r,o){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Eu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new ka(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:s,Vu:!1});return i.mu(t),i}fu(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:s,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Ii(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(Bd(this.du)&&Ov.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class xv{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||nr(t)}Su(t,e,s,i=!1){return new ka({du:t,methodName:e,wu:s,path:ut.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oa(n){const t=n._freezeSettings(),e=nr(n._databaseId);return new xv(n._databaseId,!!t.ignoreUndefinedProperties,e)}function qd(n,t,e,s,i,r={}){const o=n.Su(r.merge||r.mergeFields?2:0,t,e,i);Wd("Data must be an object, but it was:",o,s);const a=jd(s,o);let l,c;if(r.merge)l=new Vt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Lv(t,h,e);if(!o.contains(d))throw new I(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Uv(u,d)||u.push(d)}l=new Vt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Vv(new Nt(a),l,c)}function Mv(n,t,e,s=!1){return Va(e,n.Su(s?4:3,t))}function Va(n,t){if($d(n=Ft(n)))return Wd("Unsupported field value:",t,n),jd(n,t);if(n instanceof Ud)return function(s,i){if(!Bd(i.du))throw i.pu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Va(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(n,t)}return function(s,i){if((s=Ft(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Cy(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=et.fromDate(s);return{timestampValue:vi(i.serializer,r)}}if(s instanceof et){const r=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:vi(i.serializer,r)}}if(s instanceof Da)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vn)return{bytesValue:ud(i.serializer,s._byteString)};if(s instanceof St){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ea(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.pu(`Unsupported field value: ${rr(s)}`)}(n,t)}function jd(n,t){const e={};return Lh(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Cn(n,(s,i)=>{const r=Va(i,t.Ru(s));r!=null&&(e[s]=r)}),{mapValue:{fields:e}}}function $d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof Da||n instanceof vn||n instanceof St||n instanceof Ud)}function Wd(n,t,e){if(!$d(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const s=rr(e);throw s==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+s)}}function Lv(n,t,e){if((t=Ft(t))instanceof Na)return t._internalPath;if(typeof t=="string")return zd(n,t);throw Ii("Field path arguments must be of type string or ",n,!1,void 0,e)}const Fv=new RegExp("[~\\*/\\[\\]]");function zd(n,t,e){if(t.search(Fv)>=0)throw Ii(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Na(...t.split("."))._internalPath}catch{throw Ii(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ii(n,t,e,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new I(p.INVALID_ARGUMENT,a+n+l)}function Uv(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Hd{constructor(t,e,s,i,r){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Bv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(xa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Bv extends Hd{data(){return super.data()}}function xa(n,t){return typeof t=="string"?zd(n,t):t instanceof Na?t._internalPath:t._delegate._internalPath}/**
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
 */function qv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ma{}class jv extends Ma{}function $v(n,t,...e){let s=[];t instanceof Ma&&s.push(t),s=s.concat(e),function(r){const o=r.filter(l=>l instanceof La).length,a=r.filter(l=>l instanceof ar).length;if(o>1||o>0&&a>0)throw new I(p.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)n=i._apply(n);return n}class ar extends jv{constructor(t,e,s){super(),this._field=t,this._op=e,this._value=s,this.type="where"}static _create(t,e,s){return new ar(t,e,s)}_apply(t){const e=this._parse(t);return Gd(t._query,e),new Nn(t.firestore,t.converter,uo(t._query,e))}_parse(t){const e=Oa(t.firestore);return function(r,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new I(p.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){vc(h,u);const f=[];for(const g of h)f.push(Ec(l,r,g));d={arrayValue:{values:f}}}else d=Ec(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||vc(h,u),d=Mv(a,o,h,u==="in"||u==="not-in");return Z.create(c,u,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function iR(n,t,e){const s=t,i=xa("where",n);return ar._create(i,s,e)}class La extends Ma{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new La(t,e)}_parse(t){const e=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return e.length===1?e[0]:Bt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const l of a)Gd(o,l),o=uo(o,l)}(t._query,e),new Nn(t.firestore,t.converter,uo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ec(n,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new I(p.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gh(t)&&e.indexOf("/")!==-1)throw new I(p.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const s=t.path.child(H.fromString(e));if(!A.isDocumentKey(s))throw new I(p.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $l(n,new A(s))}if(e instanceof St)return $l(n,e._key);throw new I(p.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rr(e)}.`)}function vc(n,t){if(!Array.isArray(n)||n.length===0)throw new I(p.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Gd(n,t){const e=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new I(p.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(p.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Wv{convertValue(t,e="none"){switch(xe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ve(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw S()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return Cn(t,(i,r)=>{s[i]=this.convertValue(r,e)}),s}convertGeoPoint(t){return new Da(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=da(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(ps(t));default:return null}}convertTimestamp(t){const e=_e(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=H.fromString(t);j(md(s));const i=new _s(s.get(1),s.get(3)),r=new A(s.popFirst(5));return i.isEqual(e)||Yt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}/**
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
 */function Kd(n,t,e){let s;return s=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,s}/**
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
 */class Xs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zv extends Hd{constructor(t,e,s,i,r,o){super(t,e,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(xa("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class ri extends zv{data(t={}){return super.data(t)}}class Hv{constructor(t,e,s,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Xs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new ri(this._firestore,this._userDataWriter,s.key,s,new Xs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ri(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new ri(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Gv(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Gv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Kv extends Wv{constructor(t){super(),this.firestore=t}convertBytes(t){return new vn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new St(this.firestore,null,e)}}function Qv(n){n=Me(n,Nn);const t=Me(n.firestore,Ms),e=Ld(t),s=new Kv(t);return qv(n._query),Sv(e,n._query).then(i=>new Hv(t,s,n,i))}function rR(n,t,e){n=Me(n,St);const s=Me(n.firestore,Ms),i=Kd(n.converter,t,e);return Fa(s,[qd(Oa(s),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Mt.none())])}function oR(n){return Fa(Me(n.firestore,Ms),[new ma(n._key,Mt.none())])}function aR(n,t){const e=Me(n.firestore,Ms),s=Nv(n),i=Kd(n.converter,t);return Fa(e,[qd(Oa(n.firestore),"addDoc",s._key,i,n.converter!==null,{}).toMutation(s._key,Mt.exists(!1))]).then(()=>s)}function Fa(n,t){return function(s,i){const r=new ne;return s.asyncQueue.enqueueAndForget(async()=>uv(await Av(s),i,r)),r.promise}(Ld(n),t)}(function(t,e=!0){(function(i){Sn=i})(Fo),dn(new De("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ms(new Wg(s.getProvider("auth-internal")),new Kg(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new I(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _s(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:e},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Gt(Fl,"4.4.3",t),Gt(Fl,"4.4.3","esm2017")})();/**
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
 */const Qd="firebasestorage.googleapis.com",Yd="storageBucket",Yv=2*60*1e3,Xv=10*60*1e3;/**
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
 */class Y extends je{constructor(t,e,s=0){super(Dr(t),`Firebase Storage: ${e} (${Dr(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Dr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Q;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Q||(Q={}));function Dr(n){return"storage/"+n}function Ua(){const n="An unknown error occurred, please check the error payload for server response.";return new Y(Q.UNKNOWN,n)}function Jv(n){return new Y(Q.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Zv(n){return new Y(Q.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tT(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Y(Q.UNAUTHENTICATED,n)}function eT(){return new Y(Q.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nT(n){return new Y(Q.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function sT(){return new Y(Q.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iT(){return new Y(Q.CANCELED,"User canceled the upload/download.")}function rT(n){return new Y(Q.INVALID_URL,"Invalid URL '"+n+"'.")}function oT(n){return new Y(Q.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aT(){return new Y(Q.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Yd+"' property when initializing the app?")}function lT(){return new Y(Q.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function cT(){return new Y(Q.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uT(n){return new Y(Q.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Eo(n){return new Y(Q.INVALID_ARGUMENT,n)}function Xd(){return new Y(Q.APP_DELETED,"The Firebase app was deleted.")}function hT(n){return new Y(Q.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Jn(n,t){return new Y(Q.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function Ln(n){throw new Y(Q.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Rt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=Rt.makeFromUrl(t,e)}catch{return new Rt(t,"")}if(s.path==="")return s;throw oT(t)}static makeFromUrl(t,e){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(q){q.path_=decodeURIComponent(q.path)}const u="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},y=e===Qd?"(?:storage.googleapis.com|storage.cloud.google.com)":e,_="([^?#]*)",R=new RegExp(`^https?://${y}/${i}/${_}`,"i"),N=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let q=0;q<N.length;q++){const Jt=N[q],qt=Jt.regex.exec(t);if(qt){const Ke=qt[Jt.indices.bucket];let js=qt[Jt.indices.path];js||(js=""),s=new Rt(Ke,js),Jt.postModify(s);break}}if(s==null)throw rT(t);return s}}class dT{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function fT(n,t,e){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(..._){c||(c=!0,t.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,n(f,l())},_)}function d(){r&&clearTimeout(r)}function f(_,...R){if(c){d();return}if(_){d(),u.call(null,_,...R);return}if(l()||o){d(),u.call(null,_,...R);return}s<64&&(s*=2);let N;a===1?(a=2,N=0):N=(s+Math.random())*1e3,h(N)}let g=!1;function y(_){g||(g=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,y(!0)},e),y}function pT(n){n(!1)}/**
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
 */function _T(n){return n!==void 0}function mT(n){return typeof n=="object"&&!Array.isArray(n)}function Ba(n){return typeof n=="string"||n instanceof String}function Tc(n){return qa()&&n instanceof Blob}function qa(){return typeof Blob<"u"}function Ic(n,t,e,s){if(s<t)throw Eo(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw Eo(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
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
 */function ja(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Jd(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const i=t(s)+"="+t(n[s]);e=e+i+"&"}return e=e.slice(0,-1),e}/**
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
 */var be;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(be||(be={}));/**
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
 */function gT(n,t){const e=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=t.indexOf(n)!==-1;return e||i||r}/**
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
 */class yT{constructor(t,e,s,i,r,o,a,l,c,u,h,d=!0){this.url_=t,this.method_=e,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new Js(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===be.NO_ERROR,l=r.getStatus();if(!a||gT(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===be.ABORT;s(!1,new Js(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Js(c,r))})},e=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_T(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Ua();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Xd():iT();o(l)}else{const l=sT();o(l)}};this.canceled_?e(!1,new Js(!1,null,!0)):this.backoffId_=fT(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&pT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Js{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function ET(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function vT(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function TT(n,t){t&&(n["X-Firebase-GMPID"]=t)}function IT(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function wT(n,t,e,s,i,r,o=!0){const a=Jd(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return TT(c,t),ET(c,e),vT(c,r),IT(c,s),new yT(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
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
 */function AT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RT(...n){const t=AT();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(qa())return new Blob(n);throw new Y(Q.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ST(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
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
 */function CT(n){if(typeof atob>"u")throw uT("base-64");return atob(n)}/**
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
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class kr{constructor(t,e){this.data=t,this.contentType=e||null}}function PT(n,t){switch(n){case zt.RAW:return new kr(Zd(t));case zt.BASE64:case zt.BASE64URL:return new kr(tf(n,t));case zt.DATA_URL:return new kr(NT(t),DT(t))}throw Ua()}function Zd(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const r=s,o=n.charCodeAt(++e);s=65536|(r&1023)<<10|o&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function bT(n){let t;try{t=decodeURIComponent(n)}catch{throw Jn(zt.DATA_URL,"Malformed data URL.")}return Zd(t)}function tf(n,t){switch(n){case zt.BASE64:{const i=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(i||r)throw Jn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(i||r)throw Jn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=CT(t)}catch(i){throw i.message.includes("polyfill")?i:Jn(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return s}class ef{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Jn(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=kT(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function NT(n){const t=new ef(n);return t.base64?tf(zt.BASE64,t.rest):bT(t.rest)}function DT(n){return new ef(n).contentType}function kT(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
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
 */class ae{constructor(t,e){let s=0,i="";Tc(t)?(this.data_=t,s=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(Tc(this.data_)){const s=this.data_,i=ST(s,t,e);return i===null?null:new ae(i)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new ae(s,!0)}}static getBlob(...t){if(qa()){const e=t.map(s=>s instanceof ae?s.data_:s);return new ae(RT.apply(null,e))}else{const e=t.map(o=>Ba(o)?PT(zt.RAW,o).data:o.data_);let s=0;e.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return e.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ae(i,!0)}}uploadData(){return this.data_}}/**
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
 */function nf(n){let t;try{t=JSON.parse(n)}catch{return null}return mT(t)?t:null}/**
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
 */function OT(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function VT(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function sf(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
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
 */function xT(n,t){return t}class It{constructor(t,e,s,i){this.server=t,this.local=e||t,this.writable=!!s,this.xform=i||xT}}let Zs=null;function MT(n){return!Ba(n)||n.length<2?n:sf(n)}function rf(){if(Zs)return Zs;const n=[];n.push(new It("bucket")),n.push(new It("generation")),n.push(new It("metageneration")),n.push(new It("name","fullPath",!0));function t(r,o){return MT(o)}const e=new It("name");e.xform=t,n.push(e);function s(r,o){return o!==void 0?Number(o):o}const i=new It("size");return i.xform=s,n.push(i),n.push(new It("timeCreated")),n.push(new It("updated")),n.push(new It("md5Hash",null,!0)),n.push(new It("cacheControl",null,!0)),n.push(new It("contentDisposition",null,!0)),n.push(new It("contentEncoding",null,!0)),n.push(new It("contentLanguage",null,!0)),n.push(new It("contentType",null,!0)),n.push(new It("metadata","customMetadata",!0)),Zs=n,Zs}function LT(n,t){function e(){const s=n.bucket,i=n.fullPath,r=new Rt(s,i);return t._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:e})}function FT(n,t,e){const s={};s.type="file";const i=e.length;for(let r=0;r<i;r++){const o=e[r];s[o.local]=o.xform(s,t[o.server])}return LT(s,n),s}function of(n,t,e){const s=nf(t);return s===null?null:FT(n,s,e)}function UT(n,t,e,s){const i=nf(t);if(i===null||!Ba(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=ja(d,e,s),g=Jd({alt:"media",token:c});return f+g})[0]}function BT(n,t){const e={},s=t.length;for(let i=0;i<s;i++){const r=t[i];r.writable&&(e[r.server]=n[r.local])}return JSON.stringify(e)}class af{constructor(t,e,s,i){this.url=t,this.method=e,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function lf(n){if(!n)throw Ua()}function qT(n,t){function e(s,i){const r=of(n,i,t);return lf(r!==null),r}return e}function jT(n,t){function e(s,i){const r=of(n,i,t);return lf(r!==null),UT(r,i,n.host,n._protocol)}return e}function cf(n){function t(e,s){let i;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?i=eT():i=tT():e.getStatus()===402?i=Zv(n.bucket):e.getStatus()===403?i=nT(n.path):i=s,i.status=e.getStatus(),i.serverResponse=s.serverResponse,i}return t}function $T(n){const t=cf(n);function e(s,i){let r=t(s,i);return s.getStatus()===404&&(r=Jv(n.path)),r.serverResponse=i.serverResponse,r}return e}function WT(n,t,e){const s=t.fullServerUrl(),i=ja(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new af(i,r,jT(n,e),o);return a.errorHandler=$T(t),a}function zT(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function HT(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=zT(null,t)),s}function GT(n,t,e,s,i){const r=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let q=0;q<2;q++)N=N+Math.random().toString().slice(2);return N}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=HT(t,s,i),u=BT(c,e),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ae.getBlob(h,s,d);if(f===null)throw lT();const g={name:c.fullPath},y=ja(r,n.host,n._protocol),_="POST",R=n.maxUploadRetryTime,w=new af(y,_,qT(n,e),R);return w.urlParams=g,w.headers=o,w.body=f.uploadData(),w.errorHandler=cf(t),w}class KT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=be.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=be.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=be.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,i){if(this.sent_)throw Ln("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ln("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ln("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ln("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ln("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class QT extends KT{initXhr(){this.xhr_.responseType="text"}}function uf(){return new QT}/**
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
 */class Le{constructor(t,e){this._service=t,e instanceof Rt?this._location=e:this._location=Rt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Le(t,e)}get root(){const t=new Rt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sf(this._location.path)}get storage(){return this._service}get parent(){const t=OT(this._location.path);if(t===null)return null;const e=new Rt(this._location.bucket,t);return new Le(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw hT(t)}}function YT(n,t,e){n._throwIfRoot("uploadBytes");const s=GT(n.storage,n._location,rf(),new ae(t,!0),e);return n.storage.makeRequestWithTokens(s,uf).then(i=>({metadata:i,ref:n}))}function XT(n){n._throwIfRoot("getDownloadURL");const t=WT(n.storage,n._location,rf());return n.storage.makeRequestWithTokens(t,uf).then(e=>{if(e===null)throw cT();return e})}function JT(n,t){const e=VT(n._location.path,t),s=new Rt(n._location.bucket,e);return new Le(n.storage,s)}/**
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
 */function ZT(n){return/^[A-Za-z]+:\/\//.test(n)}function tI(n,t){return new Le(n,t)}function hf(n,t){if(n instanceof $a){const e=n;if(e._bucket==null)throw aT();const s=new Le(e,e._bucket);return t!=null?hf(s,t):s}else return t!==void 0?JT(n,t):n}function eI(n,t){if(t&&ZT(t)){if(n instanceof $a)return tI(n,t);throw Eo("To use ref(service, url), the first argument must be a Storage instance.")}else return hf(n,t)}function wc(n,t){const e=t?.[Yd];return e==null?null:Rt.makeFromBucketSpec(e,n)}function nI(n,t,e,s={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Eu(i,n.app.options.projectId))}class $a{constructor(t,e,s,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Qd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yv,this._maxUploadRetryTime=Xv,this._requests=new Set,i!=null?this._bucket=Rt.makeFromBucketSpec(i,this._host):this._bucket=wc(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,t):this._bucket=wc(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Ic("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Ic("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Le(this,t)}_makeRequest(t,e,s,i,r=!0){if(this._deleted)return new dT(Xd());{const o=wT(t,this._appId,s,i,e,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,e){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,i).getPromise()}}const Ac="@firebase/storage",Rc="0.12.2";/**
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
 */const df="storage";function lR(n,t,e){return n=Ft(n),YT(n,t,e)}function cR(n){return n=Ft(n),XT(n)}function uR(n,t){return n=Ft(n),eI(n,t)}function sI(n=bu(),t){n=Ft(n);const s=Cu(n,df).getImmediate({identifier:t}),i=gu("storage");return i&&iI(s,...i),s}function iI(n,t,e,s={}){nI(n,t,e,s)}function rI(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new $a(e,s,i,t,Fo)}function oI(){dn(new De(df,rI,"PUBLIC").setMultipleInstances(!0)),Gt(Ac,Rc,""),Gt(Ac,Rc,"esm2017")}oI();const aI={apiKey:"AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",authDomain:"markit-a6d25.firebaseapp.com",projectId:"markit-a6d25",storageBucket:"markit-a6d25.appspot.com",messagingSenderId:"103527109310",appId:"1:103527109310:web:487002e25ba0676f3404ef"},ff=Pu(aI),lI=kv(ff),hR=sI(ff),pf=async n=>{const t=$v(bv(lI,`users/${n}/Collections`)),s=(await Qv(t)).docs.map(i=>({id:i.id,...i.data()}));return console.log("fetchedCollections",s),s};pf("uid");const dR=du()(i_(n=>({user:null,setUser:t=>n({user:t}),logout:()=>n({user:null})}),{name:"auth-storage-local"})),fR=du(n=>({currentStep:0,setCurrentStep:t=>n(e=>({currentStep:typeof t=="function"?t(e.currentStep):t})),isCenterButtonEnabled:!0,setIsCenterButtonEnabled:t=>n({isCenterButtonEnabled:t}),leftButtonIcon:"ep:back",setCenterButtonIcon:t=>n({centerButtonIcon:t}),centerButtonIcon:"tabler:plus",setLeftButtonIcon:t=>n({leftButtonIcon:t}),titlePreview:"",setTitlePreview:t=>n({titlePreview:t}),descriptionPreview:"",setDescriptionPreview:t=>n({descriptionPreview:t}),fetchFlag:!1,toggleFetchFlag:()=>n(t=>({fetchFlag:!t.fetchFlag})),selectedCollection:"",setSelectedCollection:t=>n({selectedCollection:t}),initializeCollections:async t=>{const e=await pf(t);e.length>0&&n({selectedCollection:e[0].id})},QRCode:"",setQRCode:t=>n({QRCode:t}),dumpWorkingItem:()=>{n({QRCode:"",actionType:"",title:"",description:"",photo1:"",photo2:"",photo3:"",titlePreview:"",descriptionPreview:""})},actionType:"",setActionType:t=>n({actionType:t}),photo1:"",setPhoto1:t=>n({photo1:t}),photo2:"",setPhoto2:t=>n({photo2:t}),photo3:"",setPhoto3:t=>n({photo3:t}),title:"",setTitle:t=>n({title:t}),description:"",setDescription:t=>n({description:t}),priceRange:[0,500],setPriceRange:t=>n({priceRange:t})}));var Sc={};const Cc="@firebase/database",Pc="1.0.3";/**
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
 */let _f="";function cI(n){_f=n}/**
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
 */class uI{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,e){e==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),ct(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return e==null?null:ss(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class hI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,e){e==null?delete this.cache_[t]:this.cache_[t]=e}get(t){return oe(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const mf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const t=window[n];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new uI(t)}}catch{}return new hI},Ce=mf("localStorage"),vo=mf("sessionStorage");/**
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
 */const an=new Mo("@firebase/database"),dI=function(){let n=1;return function(){return n++}}(),gf=function(n){const t=P_(n),e=new A_;e.update(t);const s=e.digest();return Vo.encodeByteArray(s)},Ls=function(...n){let t="";for(let e=0;e<n.length;e++){const s=n[e];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?t+=Ls.apply(null,s):typeof s=="object"?t+=ct(s):t+=s,t+=" "}return t};let Ne=null,bc=!0;const fI=function(n,t){v(!t||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(an.logLevel=V.VERBOSE,Ne=an.log.bind(an),t&&vo.set("logging_enabled",!0)):typeof n=="function"?Ne=n:(Ne=null,vo.remove("logging_enabled"))},mt=function(...n){if(bc===!0&&(bc=!1,Ne===null&&vo.get("logging_enabled")===!0&&fI(!0)),Ne){const t=Ls.apply(null,n);Ne(t)}},Fs=function(n){return function(...t){mt(n,...t)}},To=function(...n){const t="FIREBASE INTERNAL ERROR: "+Ls(...n);an.error(t)},Fe=function(...n){const t=`FIREBASE FATAL ERROR: ${Ls(...n)}`;throw an.error(t),new Error(t)},Ct=function(...n){const t="FIREBASE WARNING: "+Ls(...n);an.warn(t)},pI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_I=function(n){if(document.readyState==="complete")n();else{let t=!1;const e=function(){if(!document.body){setTimeout(e,Math.floor(10));return}t||(t=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",e,!1),window.addEventListener("load",e,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&e()}),window.attachEvent("onload",e))}},Tn="[MIN_NAME]",Ue="[MAX_NAME]",Dn=function(n,t){if(n===t)return 0;if(n===Tn||t===Ue)return-1;if(t===Tn||n===Ue)return 1;{const e=Nc(n),s=Nc(t);return e!==null?s!==null?e-s===0?n.length-t.length:e-s:-1:s!==null?1:n<t?-1:1}},mI=function(n,t){return n===t?0:n<t?-1:1},Fn=function(n,t){if(t&&n in t)return t[n];throw new Error("Missing required key ("+n+") in object: "+ct(t))},Wa=function(n){if(typeof n!="object"||n===null)return ct(n);const t=[];for(const s in n)t.push(s);t.sort();let e="{";for(let s=0;s<t.length;s++)s!==0&&(e+=","),e+=ct(t[s]),e+=":",e+=Wa(n[t[s]]);return e+="}",e},Ef=function(n,t){const e=n.length;if(e<=t)return[n];const s=[];for(let i=0;i<e;i+=t)i+t>e?s.push(n.substring(i,e)):s.push(n.substring(i,i+t));return s};function kt(n,t){for(const e in n)n.hasOwnProperty(e)&&t(e,n[e])}const vf=function(n){v(!yf(n),"Invalid JSON number");const t=11,e=52,s=(1<<t-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,e-a)-Math.pow(2,e))):(r=0,o=Math.round(n/Math.pow(2,1-s-e))));const c=[];for(l=e;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},EI=new RegExp("^-?(0*)\\d{1,10}$"),vI=-2147483648,TI=2147483647,Nc=function(n){if(EI.test(n)){const t=Number(n);if(t>=vI&&t<=TI)return t}return null},Us=function(n){try{n()}catch(t){setTimeout(()=>{const e=t.stack||"";throw Ct("Exception was thrown by user callback.",e),t},Math.floor(0))}},II=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(n,t){const e=setTimeout(n,t);return typeof e=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(e):typeof e=="object"&&e.unref&&e.unref(),e};/**
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
 */class wI{constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=e?.getImmediate({optional:!0}),this.appCheck||e?.get().then(s=>this.appCheck=s)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((e,s)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(e,s):e(null)},0)})}addTokenChangeListener(t){var e;(e=this.appCheckProvider)===null||e===void 0||e.get().then(s=>s.addTokenListener(t))}notifyForInvalidToken(){Ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class AI{constructor(t,e,s){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(e=>e&&e.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((e,s)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(e,s):e(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(e=>e.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(e=>e.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ct(t)}}class Io{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Io.OWNER="owner";/**
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
 */const za="5",Tf="v",If="s",wf="r",Af="f",Rf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sf="ls",Cf="p",wo="ac",Pf="websocket",bf="long_polling";/**
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
 */class RI{constructor(t,e,s,i,r=!1,o="",a=!1,l=!1){this.secure=e,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ce.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ce.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}}function SI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Nf(n,t,e){v(typeof t=="string","typeof type must == string"),v(typeof e=="object","typeof params must == object");let s;if(t===Pf)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(t===bf)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);SI(n)&&(e.ns=n.namespace);const i=[];return kt(e,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class CI{constructor(){this.counters_={}}incrementCounter(t,e=1){oe(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return a_(this.counters_)}}/**
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
 */const Or={},Vr={};function Ha(n){const t=n.toString();return Or[t]||(Or[t]=new CI),Or[t]}function PI(n,t){const e=n.toString();return Vr[e]||(Vr[e]=t()),Vr[e]}/**
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
 */class bI{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Us(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Dc="start",NI="close",DI="pLPCommand",kI="pRTLPCB",Df="id",kf="pw",Of="ser",OI="cb",VI="seg",xI="ts",MI="d",LI="dframe",Vf=1870,xf=30,FI=Vf-xf,UI=25e3,BI=3e4;class en{constructor(t,e,s,i,r,o,a){this.connId=t,this.repoInfo=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(t),this.stats_=Ha(e),this.urlFn=l=>(this.appCheckToken&&(l[wo]=this.appCheckToken),Nf(e,bf,l))}open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new bI(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BI)),_I(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ga((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dc)this.id=a,this.password=l;else if(o===NI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Dc]="t",s[Of]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[OI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Tf]=za,this.transportSessionId&&(s[If]=this.transportSessionId),this.lastSessionId&&(s[Sf]=this.lastSessionId),this.applicationId&&(s[Cf]=this.applicationId),this.appCheckToken&&(s[wo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rf.test(location.hostname)&&(s[wf]=Af);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gI()&&!yI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=ct(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const s=_u(e),i=Ef(s,FI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(t,e){this.myDisconnFrame=document.createElement("iframe");const s={};s[LI]="t",s[Df]=t,s[kf]=e,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=ct(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}}class Ga{constructor(t,e,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dI(),window[DI+this.uniqueCallbackIdentifier]=t,window[kI+this.uniqueCallbackIdentifier]=e,this.myIFrame=Ga.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Df]=this.myID,t[kf]=this.myPW,t[Of]=this.currentSerial;let e=this.urlFn(t),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xf+s.length<=Vf;){const o=this.pendingSegs.shift();s=s+"&"+VI+i+"="+o.seg+"&"+xI+i+"="+o.ts+"&"+MI+i+"="+o.d,i++}return e=e+s,this.addLongPollTag_(e,this.currentSerial),!0}else return!1}enqueueSegment(t,e,s){this.pendingSegs.push({seg:t,ts:e,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const s=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(s,Math.floor(UI)),r=()=>{clearTimeout(i),s()};this.addTag(t,r)}addTag(t,e){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=t,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),e())},s.onerror=()=>{mt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const qI=16384,jI=45e3;let wi=null;typeof MozWebSocket<"u"?wi=MozWebSocket:typeof WebSocket<"u"&&(wi=WebSocket);class Ot{constructor(t,e,s,i,r,o,a){this.connId=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=Ha(e),this.connURL=Ot.connectionURL_(e,o,a,i,s),this.nodeAdmin=e.nodeAdmin}static connectionURL_(t,e,s,i,r){const o={};return o[Tf]=za,typeof location<"u"&&location.hostname&&Rf.test(location.hostname)&&(o[wf]=Af),e&&(o[If]=e),s&&(o[Sf]=s),i&&(o[wo]=i),r&&(o[Cf]=r),Nf(t,Pf,o)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ce.set("previous_websocket_failure",!0);try{let s;Tu(),this.mySock=new wi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(e);s&&s.length>1&&parseFloat(s[1])<4.4&&(t=!0)}return!t&&wi!==null&&!Ot.forceDisallow_}static previouslyFailed(){return Ce.isInMemoryStorage||Ce.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ce.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const s=ss(e);this.onMessage(s)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(v(this.frames===null,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(e);else{const s=this.extractFrameCount_(e);s!==null&&this.appendFrame_(s)}}send(t){this.resetKeepAlive();const e=ct(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const s=Ef(e,qI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jI))}sendString_(t){try{this.mySock.send(t)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ot.responsesRequiredToBeHealthy=2;Ot.healthyTimeout=3e4;/**
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
 */class Es{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[en,Ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Ot&&Ot.isAvailable();let s=e&&!Ot.previouslyFailed();if(t.webSocketOnly&&(e||Ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ot];else{const i=this.transports_=[];for(const r of Es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Es.globalTransportInitialized_=!1;/**
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
 */const $I=6e4,WI=5e3,zI=10*1024,HI=100*1024,xr="t",kc="d",GI="s",Oc="r",KI="e",Vc="o",xc="a",Mc="n",Lc="p",QI="h";class YI{constructor(t,e,s,i,r,o,a,l,c,u){this.id=t,this.repoInfo_=e,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Es(e),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(e,s)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(xr in t){const e=t[xr];e===xc?this.upgradeIfSecondaryHealthy_():e===Oc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):e===Vc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=Fn("t",t),s=Fn("d",t);if(e==="c")this.onSecondaryControl_(s);else if(e==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+e)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:xc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=Fn("t",t),s=Fn("d",t);e==="c"?this.onControl_(s):e==="d"&&this.onDataMessage_(s)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=Fn(xr,t);if(kc in t){const s=t[kc];if(e===QI){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(e===Mc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else e===GI?this.onConnectionShutdown_(s):e===Oc?this.onReset_(s):e===KI?To("Server Error: "+s):e===Vc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):To("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,s=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),za!==s&&Ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,s),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($I))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(WI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lc,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ce.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mf{put(t,e,s,i){}merge(t,e,s,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,s){}onDisconnectMerge(t,e,s){}onDisconnectCancel(t,e){}reportStats(t){}}/**
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
 */class Lf{constructor(t){this.allowedEvents_=t,this.listeners_={},v(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...e){if(Array.isArray(this.listeners_[t])){const s=[...this.listeners_[t]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,e)}}on(t,e,s){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:s});const i=this.getInitialEvent(t);i&&e.apply(s,i)}off(t,e,s){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let r=0;r<i.length;r++)if(i[r].callback===e&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(t){v(this.allowedEvents_.find(e=>e===t),"Unknown event: "+t)}}/**
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
 */class Ai extends Lf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ai}getInitialEvent(t){return v(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fc=32,Uc=768;class G{constructor(t,e){if(e===void 0){this.pieces_=t.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)this.pieces_[e]!==""&&(t+="/"+this.pieces_[e]);return t||"/"}}function B(){return new G("")}function x(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ge(n){return n.pieces_.length-n.pieceNum_}function W(n){let t=n.pieceNum_;return t<n.pieces_.length&&t++,new G(n.pieces_,t)}function Ff(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function XI(n){let t="";for(let e=n.pieceNum_;e<n.pieces_.length;e++)n.pieces_[e]!==""&&(t+="/"+encodeURIComponent(String(n.pieces_[e])));return t||"/"}function Uf(n,t=0){return n.pieces_.slice(n.pieceNum_+t)}function Bf(n){if(n.pieceNum_>=n.pieces_.length)return null;const t=[];for(let e=n.pieceNum_;e<n.pieces_.length-1;e++)t.push(n.pieces_[e]);return new G(t,0)}function rt(n,t){const e=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)e.push(n.pieces_[s]);if(t instanceof G)for(let s=t.pieceNum_;s<t.pieces_.length;s++)e.push(t.pieces_[s]);else{const s=t.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&e.push(s[i])}return new G(e,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function Dt(n,t){const e=x(n),s=x(t);if(e===null)return t;if(e===s)return Dt(W(n),W(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+n+")")}function qf(n,t){if(ge(n)!==ge(t))return!1;for(let e=n.pieceNum_,s=t.pieceNum_;e<=n.pieces_.length;e++,s++)if(n.pieces_[e]!==t.pieces_[s])return!1;return!0}function xt(n,t){let e=n.pieceNum_,s=t.pieceNum_;if(ge(n)>ge(t))return!1;for(;e<n.pieces_.length;){if(n.pieces_[e]!==t.pieces_[s])return!1;++e,++s}return!0}class JI{constructor(t,e){this.errorPrefix_=e,this.parts_=Uf(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oi(this.parts_[s]);jf(this)}}function ZI(n,t){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(t),n.byteLength_+=Oi(t),jf(n)}function tw(n){const t=n.parts_.pop();n.byteLength_-=Oi(t),n.parts_.length>0&&(n.byteLength_-=1)}function jf(n){if(n.byteLength_>Uc)throw new Error(n.errorPrefix_+"has a key path longer than "+Uc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fc+") or object contains a cycle "+Te(n))}function Te(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ka extends Lf{constructor(){super(["visible"]);let t,e;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(e="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(e="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(e="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,()=>{const s=!document[t];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ka}getInitialEvent(t){return v(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Un=1e3,ew=60*5*1e3,Bc=30*1e3,nw=1.3,sw=3e4,iw="server_kill",qc=3;class se extends Mf{constructor(t,e,s,i,r,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=se.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Un,this.maxReconnectDelay_=ew,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Tu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ka.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ai.getInstance().on("online",this.onOnline_,this)}sendRequest(t,e,s){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_(ct(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(t){this.initConnection_();const e=new xo,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?e.resolve(a):e.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),e.promise}listen(t,e,s,i){this.initConnection_();const r=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:e,query:t,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,s=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(s)})}sendListen_(t){const e=t.query,s=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";t.tag&&(r.q=e._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;se.warnOnListenWarnings_(l,e),(this.listens.get(s)&&this.listens.get(s).get(i))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,e){if(t&&typeof t=="object"&&oe(t,"w")){const s=hn(t,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+e._queryParams.getIndex().toString()+'"',r=e._path.toString();Ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||I_(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bc)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=T_(t)?"auth":"gauth",s={cred:t};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(e,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===t&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const e=t.s,s=t.d||"error";e==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,s)})}unlisten(t,e){const s=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,t._queryObject,e)}sendUnlisten_(t,e,s,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(t,e,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,s):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:s})}onDisconnectMerge(t,e,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,s):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:s})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,s,i){const r={p:e,d:s};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,e,s,i){this.putInternal("p",t,e,s,i)}merge(t,e,s,i){this.putInternal("m",t,e,s,i)}putInternal(t,e,s,i,r){this.initConnection_();const o={p:e,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,s=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,s,r=>{this.log_(e+" response",r),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+ct(t));const e=t.r,s=this.requestCBHash_[e];s&&(delete this.requestCBHash_[e],s(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),t==="d"?this.onDataUpdate_(e.p,e.d,!1,e.t):t==="m"?this.onDataUpdate_(e.p,e.d,!0,e.t):t==="c"?this.onListenRevoked_(e.p,e.q):t==="ac"?this.onAuthRevoked_(e.s,e.d):t==="apc"?this.onAppCheckRevoked_(e.s,e.d):t==="sd"?this.onSecurityDebugPacket_(e):To("Unrecognized action received from server: "+ct(t)+`
Are you using the latest client?`)}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sw&&(this.reconnectDelay_=Un),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+se.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new YI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,s,f=>{Ct(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(iw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ct(h),l())}}}interrupt(t){mt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){mt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],_l(this.interruptReasons_)&&(this.reconnectDelay_=Un,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let s;e?s=e.map(r=>Wa(r)).join("$"):s="default";const i=this.removeListen_(t,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const s=new G(t).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(e),r.delete(e),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(t,e){mt("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qc&&(this.reconnectDelay_=Bc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){mt("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";t["sdk."+e+"."+_f.replace(/\./g,"-")]=1,vu()?t["framework.cordova"]=1:__()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ai.getInstance().currentlyOnline();return _l(this.interruptReasons_)&&t}}se.nextPersistentConnectionId_=0;se.nextConnectionId_=0;/**
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
 */class M{constructor(t,e){this.name=t,this.node=e}static Wrap(t,e){return new M(t,e)}}/**
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
 */class lr{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const s=new M(Tn,t),i=new M(Tn,e);return this.compare(s,i)!==0}minPost(){return M.MIN}}/**
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
 */let ti;class $f extends lr{static get __EMPTY_NODE(){return ti}static set __EMPTY_NODE(t){ti=t}compare(t,e){return Dn(t.name,e.name)}isDefinedOn(t){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return M.MIN}maxPost(){return new M(Ue,ti)}makePost(t,e){return v(typeof t=="string","KeyIndex indexValue must always be a string."),new M(t,ti)}toString(){return".key"}}const ln=new $f;/**
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
 */class ei{constructor(t,e,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=e?s(t.key,e):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),e;if(this.resultGenerator_?e=this.resultGenerator_(t.key,t.value):e={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class it{constructor(t,e,s,i,r){this.key=t,this.value=e,this.color=s??it.RED,this.left=i??At.EMPTY_NODE,this.right=r??At.EMPTY_NODE}copy(t,e,s,i,r){return new it(t??this.key,e??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let i=this;const r=s(t,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(t,e,s),null):r===0?i=i.copy(null,e,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,e,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return At.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let s,i;if(s=this,e(t,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),e(t,s.key)===0){if(s.right.isEmpty())return At.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class rw{copy(t,e,s,i,r){return this}insert(t,e,s){return new it(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class At{constructor(t,e=At.EMPTY_NODE){this.comparator_=t,this.root_=e}insert(t,e){return new At(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(t){return new At(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,it.BLACK,null,null))}get(t){let e,s=this.root_;for(;!s.isEmpty();){if(e=this.comparator_(t,s.key),e===0)return s.value;e<0?s=s.left:e>0&&(s=s.right)}return null}getPredecessorKey(t){let e,s=this.root_,i=null;for(;!s.isEmpty();)if(e=this.comparator_(t,s.key),e===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else e<0?s=s.left:e>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ei(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new ei(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new ei(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new ei(this.root_,null,this.comparator_,!0,t)}}At.EMPTY_NODE=new rw;/**
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
 */function ow(n,t){return Dn(n.name,t.name)}function Qa(n,t){return Dn(n,t)}/**
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
 */let Ao;function aw(n){Ao=n}const Wf=function(n){return typeof n=="number"?"number:"+vf(n):"string:"+n},zf=function(n){if(n.isLeafNode()){const t=n.val();v(typeof t=="string"||typeof t=="number"||typeof t=="object"&&oe(t,".sv"),"Priority must be a string or number.")}else v(n===Ao||n.isEmpty(),"priority of unexpected type.");v(n===Ao||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jc;class nt{constructor(t,e=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zf(this.priorityNode_)}static set __childrenNodeConstructor(t){jc=t}static get __childrenNodeConstructor(){return jc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new nt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return k(t)?this:x(t)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return t===".priority"?this.updatePriority(e):e.isEmpty()&&t!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const s=x(t);return s===null?e:e.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||ge(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Wf(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",e==="number"?t+=vf(this.value_):t+=this.value_,this.lazyHash_=gf(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===nt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof nt.__childrenNodeConstructor?-1:(v(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,s=typeof this.value_,i=nt.VALUE_TYPE_ORDER.indexOf(e),r=nt.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+e),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hf,Gf;function lw(n){Hf=n}function cw(n){Gf=n}class uw extends lr{compare(t,e){const s=t.node.getPriority(),i=e.node.getPriority(),r=s.compareTo(i);return r===0?Dn(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Ue,new nt("[PRIORITY-POST]",Gf))}makePost(t,e){const s=Hf(t);return new M(e,new nt("[PRIORITY-POST]",s))}toString(){return".priority"}}const yt=new uw;/**
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
 */const hw=Math.log(2);class dw{constructor(t){const e=r=>parseInt(Math.log(r)/hw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=e(t+1),this.current_=this.count-1;const i=s(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ri=function(n,t,e,s){n.sort(t);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=e?e(h):h,new it(d,h.node,it.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),y=i(f+1,c);return h=n[f],d=e?e(h):h,new it(d,h.node,it.BLACK,g,y)}},r=function(l){let c=null,u=null,h=n.length;const d=function(g,y){const _=h-g,R=h;h-=g;const w=i(_+1,R),N=n[_],q=e?e(N):N;f(new it(q,N.node,y,null,w))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),_=Math.pow(2,l.count-(g+1));y?d(_,it.BLACK):(d(_,it.BLACK),d(_,it.RED))}return u},o=new dw(n.length),a=r(o);return new At(s||t,a)};/**
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
 */let Mr;const Ye={};class ee{constructor(t,e){this.indexes_=t,this.indexSet_=e}static get Default(){return v(Ye&&yt,"ChildrenNode.ts has not been loaded"),Mr=Mr||new ee({".priority":Ye},{".priority":yt}),Mr}get(t){const e=hn(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof At?e:null}hasIndex(t){return oe(this.indexSet_,t.toString())}addIndex(t,e){v(t!==ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=e.getIterator(M.Wrap);let o=r.getNext();for(;o;)i=i||t.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ri(s,t.getCompare()):a=Ye;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new ee(u,c)}addToIndexes(t,e){const s=ai(this.indexes_,(i,r)=>{const o=hn(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===Ye)if(o.isDefinedOn(t.node)){const a=[],l=e.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),Ri(a,o.getCompare())}else return Ye;else{const a=e.get(t.name);let l=i;return a&&(l=l.remove(new M(t.name,a))),l.insert(t,t.node)}});return new ee(s,this.indexSet_)}removeFromIndexes(t,e){const s=ai(this.indexes_,i=>{if(i===Ye)return i;{const r=e.get(t.name);return r?i.remove(new M(t.name,r)):i}});return new ee(s,this.indexSet_)}}/**
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
 */let Bn;class F{constructor(t,e,s){this.children_=t,this.priorityNode_=e,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&zf(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bn||(Bn=new F(new At(Qa),null,ee.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bn}updatePriority(t){return this.children_.isEmpty()?this:new F(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const e=this.children_.get(t);return e===null?Bn:e}}getChild(t){const e=x(t);return e===null?this:this.getImmediateChild(e).getChild(W(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,e){if(v(e,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(e);{const s=new M(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bn:this.priorityNode_;return new F(i,o,r)}}updateChild(t,e){const s=x(t);if(s===null)return e;{v(x(t)!==".priority"||ge(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(W(t),e);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let s=0,i=0,r=!0;if(this.forEachChild(yt,(o,a)=>{e[o]=a.val(t),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!t&&r&&i<2*s){const o=[];for(const a in e)o[a]=e[a];return o}else return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Wf(this.getPriority().val())+":"),this.forEachChild(yt,(e,s)=>{const i=s.hash();i!==""&&(t+=":"+e+":"+i)}),this.lazyHash_=t===""?"":gf(t)}return this.lazyHash_}getPredecessorChildName(t,e,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new M(t,e));return r?r.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const s=e.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new M(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const s=e.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new M(e,this.children_.get(e)):null}forEachChild(t,e){const s=this.resolveIndex_(t);return s?s.inorderTraversal(i=>e(i.name,i.node)):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const s=this.resolveIndex_(e);if(s)return s.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,M.Wrap);let r=i.peek();for(;r!=null&&e.compare(r,t)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const s=this.resolveIndex_(e);if(s)return s.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,M.Wrap);let r=i.peek();for(;r!=null&&e.compare(r,t)>0;)i.getNext(),r=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Bs?-1:0}withIndex(t){if(t===ln||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new F(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===ln||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority()))if(this.children_.count()===e.children_.count()){const s=this.getIterator(yt),i=e.getIterator(yt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ln?null:this.indexMap_.get(t.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fw extends F{constructor(){super(new At(Qa),F.EMPTY_NODE,ee.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return F.EMPTY_NODE}isEmpty(){return!1}}const Bs=new fw;Object.defineProperties(M,{MIN:{value:new M(Tn,F.EMPTY_NODE)},MAX:{value:new M(Ue,Bs)}});$f.__EMPTY_NODE=F.EMPTY_NODE;nt.__childrenNodeConstructor=F;aw(Bs);cw(Bs);/**
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
 */const pw=!0;function gt(n,t=null){if(n===null)return F.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(t=n[".priority"]),v(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const e=n;return new nt(e,gt(t))}if(!(n instanceof Array)&&pw){const e=[];let s=!1;if(kt(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),e.push(new M(o,l)))}}),e.length===0)return F.EMPTY_NODE;const r=Ri(e,ow,o=>o.name,Qa);if(s){const o=Ri(e,yt.getCompare());return new F(r,gt(t),new ee({".priority":o},{".priority":yt}))}else return new F(r,gt(t),ee.Default)}else{let e=F.EMPTY_NODE;return kt(n,(s,i)=>{if(oe(n,s)&&s.substring(0,1)!=="."){const r=gt(i);(r.isLeafNode()||!r.isEmpty())&&(e=e.updateImmediateChild(s,r))}}),e.updatePriority(gt(t))}}lw(gt);/**
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
 */class _w extends lr{constructor(t){super(),this.indexPath_=t,v(!k(t)&&x(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const s=this.extractChild(t.node),i=this.extractChild(e.node),r=s.compareTo(i);return r===0?Dn(t.name,e.name):r}makePost(t,e){const s=gt(t),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new M(e,i)}maxPost(){const t=F.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new M(Ue,t)}toString(){return Uf(this.indexPath_,0).join("/")}}/**
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
 */class mw extends lr{compare(t,e){const s=t.node.compareTo(e.node);return s===0?Dn(t.name,e.name):s}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(t,e){const s=gt(t);return new M(e,s)}toString(){return".value"}}const gw=new mw;/**
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
 */function yw(n){return{type:"value",snapshotNode:n}}function Ew(n,t){return{type:"child_added",snapshotNode:t,childName:n}}function vw(n,t){return{type:"child_removed",snapshotNode:t,childName:n}}function $c(n,t,e){return{type:"child_changed",snapshotNode:t,childName:n,oldSnap:e}}function Tw(n,t){return{type:"child_moved",snapshotNode:t,childName:n}}/**
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
 */class Ya{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ue}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yt}copy(){const t=new Ya;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Wc(n){const t={};if(n.isDefault())return t;let e;if(n.index_===yt?e="$priority":n.index_===gw?e="$value":n.index_===ln?e="$key":(v(n.index_ instanceof _w,"Unrecognized index type!"),e=n.index_.toString()),t.orderBy=ct(e),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";t[s]=ct(n.indexStartValue_),n.startNameSet_&&(t[s]+=","+ct(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";t[s]=ct(n.indexEndValue_),n.endNameSet_&&(t[s]+=","+ct(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?t.limitToFirst=n.limit_:t.limitToLast=n.limit_),t}function zc(n){const t={};if(n.startSet_&&(t.sp=n.indexStartValue_,n.startNameSet_&&(t.sn=n.indexStartName_),t.sin=!n.startAfterSet_),n.endSet_&&(t.ep=n.indexEndValue_,n.endNameSet_&&(t.en=n.indexEndName_),t.ein=!n.endBeforeSet_),n.limitSet_){t.l=n.limit_;let e=n.viewFrom_;e===""&&(n.isViewFromLeft()?e="l":e="r"),t.vf=e}return n.index_!==yt&&(t.i=n.index_.toString()),t}/**
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
 */class Si extends Mf{constructor(t,e,s,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fs("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return e!==void 0?"tag$"+e:(v(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,s,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const o=Si.getListenId_(t,s),a={};this.listens_[o]=a;const l=Wc(t._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),hn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(t,e){const s=Si.getListenId_(t,e);delete this.listens_[s]}get(t){const e=Wc(t._queryParams),s=t._path.toString(),i=new xo;return this.restRequest_(s+".json",e,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,e={},s){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(e.auth=i.accessToken),r&&r.token&&(e.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+w_(e);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ss(a.responseText)}catch{Ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Iw{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}}/**
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
 */function Ci(){return{value:null,children:new Map}}function Kf(n,t,e){if(k(t))n.value=e,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(t,e);else{const s=x(t);n.children.has(s)||n.children.set(s,Ci());const i=n.children.get(s);t=W(t),Kf(i,t,e)}}function Ro(n,t,e){n.value!==null?e(t,n.value):ww(n,(s,i)=>{const r=new G(t.toString()+"/"+s);Ro(i,r,e)})}function ww(n,t){n.children.forEach((e,s)=>{t(s,e)})}/**
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
 */class Aw{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&kt(this.last_,(s,i)=>{e[s]=e[s]-i}),this.last_=t,e}}/**
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
 */const Hc=10*1e3,Rw=30*1e3,Sw=5*60*1e3;class Cw{constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Aw(t);const s=Hc+(Rw-Hc)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const t=this.statsListener_.get(),e={};let s=!1;kt(t,(i,r)=>{r>0&&oe(this.statsToReport_,i)&&(e[i]=r,s=!0)}),s&&this.server_.reportStats(e),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Sw))}}/**
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
 */var Ht;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function Qf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xf(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Pi{constructor(t,e,s){this.path=t,this.affectedTree=e,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=Qf()}operationForChild(t){if(k(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new G(t));return new Pi(B(),e,this.revert)}}else return v(x(this.path)===t,"operationForChild called for unrelated child."),new Pi(W(this.path),this.affectedTree,this.revert)}}/**
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
 */class Be{constructor(t,e,s){this.source=t,this.path=e,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(t){return k(this.path)?new Be(this.source,B(),this.snap.getImmediateChild(t)):new Be(this.source,W(this.path),this.snap)}}/**
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
 */class vs{constructor(t,e,s){this.source=t,this.path=e,this.children=s,this.type=Ht.MERGE}operationForChild(t){if(k(this.path)){const e=this.children.subtree(new G(t));return e.isEmpty()?null:e.value?new Be(this.source,B(),e.value):new vs(this.source,B(),e)}else return v(x(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Xa{constructor(t,e,s){this.node_=t,this.fullyInitialized_=e,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(k(t))return this.isFullyInitialized()&&!this.filtered_;const e=x(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function Pw(n,t,e,s){const i=[],r=[];return t.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tw(o.childName,o.snapshotNode))}),qn(n,i,"child_removed",t,s,e),qn(n,i,"child_added",t,s,e),qn(n,i,"child_moved",r,s,e),qn(n,i,"child_changed",t,s,e),qn(n,i,"value",t,s,e),i}function qn(n,t,e,s,i,r){const o=s.filter(a=>a.type===e);o.sort((a,l)=>Nw(n,a,l)),o.forEach(a=>{const l=bw(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,n.query_))})})}function bw(n,t,e){return t.type==="value"||t.type==="child_removed"||(t.prevName=e.getPredecessorChildName(t.childName,t.snapshotNode,n.index_)),t}function Nw(n,t,e){if(t.childName==null||e.childName==null)throw wn("Should only compare child_ events.");const s=new M(t.childName,t.snapshotNode),i=new M(e.childName,e.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Jf(n,t){return{eventCache:n,serverCache:t}}function ts(n,t,e,s){return Jf(new Xa(t,e,s),n.serverCache)}function Zf(n,t,e,s){return Jf(n.eventCache,new Xa(t,e,s))}function So(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Lr;const Dw=()=>(Lr||(Lr=new At(mI)),Lr);class ${constructor(t,e=Dw()){this.value=t,this.children=e}static fromObject(t){let e=new $(null);return kt(t,(s,i)=>{e=e.set(new G(s),i)}),e}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(this.value!=null&&e(this.value))return{path:B(),value:this.value};if(k(t))return null;{const s=x(t),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(W(t),e);return r!=null?{path:rt(new G(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(k(t))return this;{const e=x(t),s=this.children.get(e);return s!==null?s.subtree(W(t)):new $(null)}}set(t,e){if(k(t))return new $(e,this.children);{const s=x(t),r=(this.children.get(s)||new $(null)).set(W(t),e),o=this.children.insert(s,r);return new $(this.value,o)}}remove(t){if(k(t))return this.children.isEmpty()?new $(null):new $(null,this.children);{const e=x(t),s=this.children.get(e);if(s){const i=s.remove(W(t));let r;return i.isEmpty()?r=this.children.remove(e):r=this.children.insert(e,i),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(t){if(k(t))return this.value;{const e=x(t),s=this.children.get(e);return s?s.get(W(t)):null}}setTree(t,e){if(k(t))return e;{const s=x(t),r=(this.children.get(s)||new $(null)).setTree(W(t),e);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new $(this.value,o)}}fold(t){return this.fold_(B(),t)}fold_(t,e){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(rt(t,i),e)}),e(t,this.value,s)}findOnPath(t,e){return this.findOnPath_(t,B(),e)}findOnPath_(t,e,s){const i=this.value?s(e,this.value):!1;if(i)return i;if(k(t))return null;{const r=x(t),o=this.children.get(r);return o?o.findOnPath_(W(t),rt(e,r),s):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,B(),e)}foreachOnPath_(t,e,s){if(k(t))return this;{this.value&&s(e,this.value);const i=x(t),r=this.children.get(i);return r?r.foreachOnPath_(W(t),rt(e,i),s):new $(null)}}foreach(t){this.foreach_(B(),t)}foreach_(t,e){this.children.inorderTraversal((s,i)=>{i.foreach_(rt(t,s),e)}),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal((e,s)=>{s.value&&t(e,s.value)})}}/**
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
 */class Lt{constructor(t){this.writeTree_=t}static empty(){return new Lt(new $(null))}}function es(n,t,e){if(k(t))return new Lt(new $(e));{const s=n.writeTree_.findRootMostValueAndPath(t);if(s!=null){const i=s.path;let r=s.value;const o=Dt(i,t);return r=r.updateChild(o,e),new Lt(n.writeTree_.set(i,r))}else{const i=new $(e),r=n.writeTree_.setTree(t,i);return new Lt(r)}}}function Gc(n,t,e){let s=n;return kt(e,(i,r)=>{s=es(s,rt(t,i),r)}),s}function Kc(n,t){if(k(t))return Lt.empty();{const e=n.writeTree_.setTree(t,new $(null));return new Lt(e)}}function Co(n,t){return He(n,t)!=null}function He(n,t){const e=n.writeTree_.findRootMostValueAndPath(t);return e!=null?n.writeTree_.get(e.path).getChild(Dt(e.path,t)):null}function Qc(n){const t=[],e=n.writeTree_.value;return e!=null?e.isLeafNode()||e.forEachChild(yt,(s,i)=>{t.push(new M(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&t.push(new M(s,i.value))}),t}function fe(n,t){if(k(t))return n;{const e=He(n,t);return e!=null?new Lt(new $(e)):new Lt(n.writeTree_.subtree(t))}}function Po(n){return n.writeTree_.isEmpty()}function In(n,t){return tp(B(),n.writeTree_,t)}function tp(n,t,e){if(t.value!=null)return e.updateChild(n,t.value);{let s=null;return t.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):e=tp(rt(n,i),r,e)}),!e.getChild(n).isEmpty()&&s!==null&&(e=e.updateChild(rt(n,".priority"),s)),e}}/**
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
 */function ep(n,t){return op(t,n)}function kw(n,t,e,s,i){v(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:t,snap:e,writeId:s,visible:i}),i&&(n.visibleWrites=es(n.visibleWrites,t,e)),n.lastWriteId=s}function Ow(n,t){for(let e=0;e<n.allWrites.length;e++){const s=n.allWrites[e];if(s.writeId===t)return s}return null}function Vw(n,t){const e=n.allWrites.findIndex(a=>a.writeId===t);v(e>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[e];n.allWrites.splice(e,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=e&&xw(a,s.path)?i=!1:xt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Mw(n),!0;if(s.snap)n.visibleWrites=Kc(n.visibleWrites,s.path);else{const a=s.children;kt(a,l=>{n.visibleWrites=Kc(n.visibleWrites,rt(s.path,l))})}return!0}else return!1}function xw(n,t){if(n.snap)return xt(n.path,t);for(const e in n.children)if(n.children.hasOwnProperty(e)&&xt(rt(n.path,e),t))return!0;return!1}function Mw(n){n.visibleWrites=np(n.allWrites,Lw,B()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Lw(n){return n.visible}function np(n,t,e){let s=Lt.empty();for(let i=0;i<n.length;++i){const r=n[i];if(t(r)){const o=r.path;let a;if(r.snap)xt(e,o)?(a=Dt(e,o),s=es(s,a,r.snap)):xt(o,e)&&(a=Dt(o,e),s=es(s,B(),r.snap.getChild(a)));else if(r.children){if(xt(e,o))a=Dt(e,o),s=Gc(s,a,r.children);else if(xt(o,e))if(a=Dt(o,e),k(a))s=Gc(s,B(),r.children);else{const l=hn(r.children,x(a));if(l){const c=l.getChild(W(a));s=es(s,B(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return s}function sp(n,t,e,s,i){if(!s&&!i){const r=He(n.visibleWrites,t);if(r!=null)return r;{const o=fe(n.visibleWrites,t);if(Po(o))return e;if(e==null&&!Co(o,B()))return null;{const a=e||F.EMPTY_NODE;return In(o,a)}}}else{const r=fe(n.visibleWrites,t);if(!i&&Po(r))return e;if(!i&&e==null&&!Co(r,B()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(xt(c.path,t)||xt(t,c.path))},a=np(n.allWrites,o,t),l=e||F.EMPTY_NODE;return In(a,l)}}}function Fw(n,t,e){let s=F.EMPTY_NODE;const i=He(n.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(yt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(e){const r=fe(n.visibleWrites,t);return e.forEachChild(yt,(o,a)=>{const l=In(fe(r,new G(o)),a);s=s.updateImmediateChild(o,l)}),Qc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fe(n.visibleWrites,t);return Qc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Uw(n,t,e,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=rt(t,e);if(Co(n.visibleWrites,r))return null;{const o=fe(n.visibleWrites,r);return Po(o)?i.getChild(e):In(o,i.getChild(e))}}function Bw(n,t,e,s){const i=rt(t,e),r=He(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(e)){const o=fe(n.visibleWrites,i);return In(o,s.getNode().getImmediateChild(e))}else return null}function qw(n,t){return He(n.visibleWrites,t)}function jw(n,t,e,s,i,r,o){let a;const l=fe(n.visibleWrites,t),c=He(l,B());if(c!=null)a=c;else if(e!=null)a=In(l,e);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function $w(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function bo(n,t,e,s){return sp(n.writeTree,n.treePath,t,e,s)}function ip(n,t){return Fw(n.writeTree,n.treePath,t)}function Yc(n,t,e,s){return Uw(n.writeTree,n.treePath,t,e,s)}function bi(n,t){return qw(n.writeTree,rt(n.treePath,t))}function Ww(n,t,e,s,i,r){return jw(n.writeTree,n.treePath,t,e,s,i,r)}function Ja(n,t,e){return Bw(n.writeTree,n.treePath,t,e)}function rp(n,t){return op(rt(n.treePath,t),n.writeTree)}function op(n,t){return{treePath:n,writeTree:t}}/**
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
 */class zw{constructor(){this.changeMap=new Map}trackChildChange(t){const e=t.type,s=t.childName;v(e==="child_added"||e==="child_changed"||e==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(e==="child_added"&&r==="child_removed")this.changeMap.set(s,$c(s,t.snapshotNode,i.snapshotNode));else if(e==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(e==="child_removed"&&r==="child_changed")this.changeMap.set(s,vw(s,i.oldSnap));else if(e==="child_changed"&&r==="child_added")this.changeMap.set(s,Ew(s,t.snapshotNode));else if(e==="child_changed"&&r==="child_changed")this.changeMap.set(s,$c(s,t.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(s,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Hw{getCompleteChild(t){return null}getChildAfterChild(t,e,s){return null}}const ap=new Hw;class Za{constructor(t,e,s=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=s}getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const s=this.optCompleteServerCache_!=null?new Xa(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ja(this.writes_,t,s)}}getChildAfterChild(t,e,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),r=Ww(this.writes_,i,e,1,s,t);return r.length===0?null:r[0]}}function Gw(n,t){v(t.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(t.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Kw(n,t,e,s,i){const r=new zw;let o,a;if(e.type===Ht.OVERWRITE){const c=e;c.source.fromUser?o=No(n,t,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!k(c.path),o=Ni(n,t,c.path,c.snap,s,i,a,r))}else if(e.type===Ht.MERGE){const c=e;c.source.fromUser?o=Yw(n,t,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Do(n,t,c.path,c.children,s,i,a,r))}else if(e.type===Ht.ACK_USER_WRITE){const c=e;c.revert?o=Zw(n,t,c.path,s,i,r):o=Xw(n,t,c.path,c.affectedTree,s,i,r)}else if(e.type===Ht.LISTEN_COMPLETE)o=Jw(n,t,e.path,s,r);else throw wn("Unknown operation type: "+e.type);const l=r.getChanges();return Qw(t,o,l),{viewCache:o,changes:l}}function Qw(n,t,e){const s=t.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=So(n);(e.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&e.push(yw(So(t)))}}function lp(n,t,e,s,i,r){const o=t.eventCache;if(bi(s,e)!=null)return t;{let a,l;if(k(e))if(v(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=qe(t),u=c instanceof F?c:F.EMPTY_NODE,h=ip(s,u);a=n.filter.updateFullNode(t.eventCache.getNode(),h,r)}else{const c=bo(s,qe(t));a=n.filter.updateFullNode(t.eventCache.getNode(),c,r)}else{const c=x(e);if(c===".priority"){v(ge(e)===1,"Can't have a priority with additional path components");const u=o.getNode();l=t.serverCache.getNode();const h=Yc(s,e,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=W(e);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const d=Yc(s,e,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ja(s,c,t.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ts(t,a,o.isFullyInitialized()||k(e),n.filter.filtersNodes())}}function Ni(n,t,e,s,i,r,o,a){const l=t.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(k(e))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(e,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=x(e);if(!l.isCompleteForPath(e)&&ge(e)>1)return t;const g=W(e),_=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),_):c=u.updateChild(l.getNode(),f,_,g,ap,null)}const h=Zf(t,c,l.isFullyInitialized()||k(e),u.filtersNodes()),d=new Za(i,h,r);return lp(n,h,e,i,d,a)}function No(n,t,e,s,i,r,o){const a=t.eventCache;let l,c;const u=new Za(i,t,r);if(k(e))c=n.filter.updateFullNode(t.eventCache.getNode(),s,o),l=ts(t,c,!0,n.filter.filtersNodes());else{const h=x(e);if(h===".priority")c=n.filter.updatePriority(t.eventCache.getNode(),s),l=ts(t,c,a.isFullyInitialized(),a.isFiltered());else{const d=W(e),f=a.getNode().getImmediateChild(h);let g;if(k(d))g=s;else{const y=u.getCompleteChild(h);y!=null?Ff(d)===".priority"&&y.getChild(Bf(d)).isEmpty()?g=y:g=y.updateChild(d,s):g=F.EMPTY_NODE}if(f.equals(g))l=t;else{const y=n.filter.updateChild(a.getNode(),h,g,d,u,o);l=ts(t,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Xc(n,t){return n.eventCache.isCompleteForChild(t)}function Yw(n,t,e,s,i,r,o){let a=t;return s.foreach((l,c)=>{const u=rt(e,l);Xc(t,x(u))&&(a=No(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=rt(e,l);Xc(t,x(u))||(a=No(n,a,u,c,i,r,o))}),a}function Jc(n,t,e){return e.foreach((s,i)=>{t=t.updateChild(s,i)}),t}function Do(n,t,e,s,i,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;k(e)?c=s:c=new $(null).setTree(e,s);const u=t.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=t.serverCache.getNode().getImmediateChild(h),g=Jc(n,f,d);l=Ni(n,l,new G(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!t.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=t.serverCache.getNode().getImmediateChild(h),y=Jc(n,g,d);l=Ni(n,l,new G(h),y,i,r,o,a)}}),l}function Xw(n,t,e,s,i,r,o){if(bi(i,e)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(s.value!=null){if(k(e)&&l.isFullyInitialized()||l.isCompleteForPath(e))return Ni(n,t,e,l.getNode().getChild(e),i,r,a,o);if(k(e)){let c=new $(null);return l.getNode().forEachChild(ln,(u,h)=>{c=c.set(new G(u),h)}),Do(n,t,e,c,i,r,a,o)}else return t}else{let c=new $(null);return s.foreach((u,h)=>{const d=rt(e,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Do(n,t,e,c,i,r,a,o)}}function Jw(n,t,e,s,i){const r=t.serverCache,o=Zf(t,r.getNode(),r.isFullyInitialized()||k(e),r.isFiltered());return lp(n,o,e,s,ap,i)}function Zw(n,t,e,s,i,r){let o;if(bi(s,e)!=null)return t;{const a=new Za(s,t,i),l=t.eventCache.getNode();let c;if(k(e)||x(e)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=bo(s,qe(t));else{const h=t.serverCache.getNode();v(h instanceof F,"serverChildren would be complete if leaf node"),u=ip(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=x(e);let h=Ja(s,u,t.serverCache);h==null&&t.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,W(e),a,r):t.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,F.EMPTY_NODE,W(e),a,r):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=bo(s,qe(t)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||bi(s,B())!=null,ts(t,c,o,n.filter.filtersNodes())}}function tA(n,t){const e=qe(n.viewCache_);return e&&(n.query._queryParams.loadsAllData()||!k(t)&&!e.getImmediateChild(x(t)).isEmpty())?e.getChild(t):null}function Zc(n,t,e,s){t.type===Ht.MERGE&&t.source.queryId!==null&&(v(qe(n.viewCache_),"We should always have a full cache before handling merges"),v(So(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Kw(n.processor_,i,t,e,s);return Gw(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,eA(n,r.changes,r.viewCache.eventCache.getNode(),null)}function eA(n,t,e,s){const i=s?[s]:n.eventRegistrations_;return Pw(n.eventGenerator_,t,e,i)}/**
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
 */let tu;function nA(n){v(!tu,"__referenceConstructor has already been defined"),tu=n}function tl(n,t,e,s){const i=t.source.queryId;if(i!==null){const r=n.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),Zc(r,t,e,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Zc(o,t,e,s));return r}}function el(n,t){let e=null;for(const s of n.views.values())e=e||tA(s,t);return e}/**
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
 */let eu;function sA(n){v(!eu,"__referenceConstructor has already been defined"),eu=n}class nu{constructor(t){this.listenProvider_=t,this.syncPointTree_=new $(null),this.pendingWriteTree_=$w(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iA(n,t,e,s,i){return kw(n.pendingWriteTree_,t,e,s,i),i?ur(n,new Be(Qf(),t,e)):[]}function nn(n,t,e=!1){const s=Ow(n.pendingWriteTree_,t);if(Vw(n.pendingWriteTree_,t)){let r=new $(null);return s.snap!=null?r=r.set(B(),!0):kt(s.children,o=>{r=r.set(new G(o),!0)}),ur(n,new Pi(s.path,r,e))}else return[]}function cr(n,t,e){return ur(n,new Be(Yf(),t,e))}function rA(n,t,e){const s=$.fromObject(e);return ur(n,new vs(Yf(),t,s))}function oA(n,t,e,s){const i=dp(n,s);if(i!=null){const r=fp(i),o=r.path,a=r.queryId,l=Dt(o,t),c=new Be(Xf(a),l,e);return pp(n,o,c)}else return[]}function aA(n,t,e,s){const i=dp(n,s);if(i){const r=fp(i),o=r.path,a=r.queryId,l=Dt(o,t),c=$.fromObject(e),u=new vs(Xf(a),l,c);return pp(n,o,u)}else return[]}function cp(n,t,e){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(t,(o,a)=>{const l=Dt(o,t),c=el(a,l);if(c)return c});return sp(i,t,r,e,!0)}function ur(n,t){return up(t,n.syncPointTree_,null,ep(n.pendingWriteTree_,B()))}function up(n,t,e,s){if(k(n.path))return hp(n,t,e,s);{const i=t.get(B());e==null&&i!=null&&(e=el(i,B()));let r=[];const o=x(n.path),a=n.operationForChild(o),l=t.children.get(o);if(l&&a){const c=e?e.getImmediateChild(o):null,u=rp(s,o);r=r.concat(up(a,l,c,u))}return i&&(r=r.concat(tl(i,n,s,e))),r}}function hp(n,t,e,s){const i=t.get(B());e==null&&i!=null&&(e=el(i,B()));let r=[];return t.children.inorderTraversal((o,a)=>{const l=e?e.getImmediateChild(o):null,c=rp(s,o),u=n.operationForChild(o);u&&(r=r.concat(hp(u,a,l,c)))}),i&&(r=r.concat(tl(i,n,s,e))),r}function dp(n,t){return n.tagToQueryMap.get(t)}function fp(n){const t=n.indexOf("$");return v(t!==-1&&t<n.length-1,"Bad queryKey."),{queryId:n.substr(t+1),path:new G(n.substr(0,t))}}function pp(n,t,e){const s=n.syncPointTree_.get(t);v(s,"Missing sync point for query tag that we're tracking");const i=ep(n.pendingWriteTree_,t);return tl(s,e,i,null)}/**
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
 */class nl{constructor(t){this.node_=t}getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new nl(e)}node(){return this.node_}}class sl{constructor(t,e){this.syncTree_=t,this.path_=e}getImmediateChild(t){const e=rt(this.path_,t);return new sl(this.syncTree_,e)}node(){return cp(this.syncTree_,this.path_)}}const lA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},su=function(n,t,e){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return cA(n[".sv"],t,e);if(typeof n[".sv"]=="object")return uA(n[".sv"],t);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},cA=function(n,t,e){switch(n){case"timestamp":return e.timestamp;default:v(!1,"Unexpected server value: "+n)}},uA=function(n,t,e){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=t.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},hA=function(n,t,e,s){return il(t,new sl(e,n),s)},dA=function(n,t,e){return il(n,new nl(t),e)};function il(n,t,e){const s=n.getPriority().val(),i=su(s,t.getImmediateChild(".priority"),e);let r;if(n.isLeafNode()){const o=n,a=su(o.getValue(),t,e);return a!==o.getValue()||i!==o.getPriority().val()?new nt(a,gt(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new nt(i))),o.forEachChild(yt,(a,l)=>{const c=il(l,t.getImmediateChild(a),e);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class rl{constructor(t="",e=null,s={children:{},childCount:0}){this.name=t,this.parent=e,this.node=s}}function ol(n,t){let e=t instanceof G?t:new G(t),s=n,i=x(e);for(;i!==null;){const r=hn(s.node.children,i)||{children:{},childCount:0};s=new rl(i,s,r),e=W(e),i=x(e)}return s}function kn(n){return n.node.value}function _p(n,t){n.node.value=t,ko(n)}function mp(n){return n.node.childCount>0}function fA(n){return kn(n)===void 0&&!mp(n)}function hr(n,t){kt(n.node.children,(e,s)=>{t(new rl(e,n,s))})}function gp(n,t,e,s){e&&!s&&t(n),hr(n,i=>{gp(i,t,!0,s)}),e&&s&&t(n)}function pA(n,t,e){let s=e?n:n.parent;for(;s!==null;){if(t(s))return!0;s=s.parent}return!1}function qs(n){return new G(n.parent===null?n.name:qs(n.parent)+"/"+n.name)}function ko(n){n.parent!==null&&_A(n.parent,n.name,n)}function _A(n,t,e){const s=fA(e),i=oe(n.node.children,t);s&&i?(delete n.node.children[t],n.node.childCount--,ko(n)):!s&&!i&&(n.node.children[t]=e.node,n.node.childCount++,ko(n))}/**
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
 */const mA=/[\[\].#$\/\u0000-\u001F\u007F]/,gA=/[\[\].#$\u0000-\u001F\u007F]/,Fr=10*1024*1024,yp=function(n){return typeof n=="string"&&n.length!==0&&!mA.test(n)},yA=function(n){return typeof n=="string"&&n.length!==0&&!gA.test(n)},EA=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),yA(n)},Ep=function(n,t,e){const s=e instanceof G?new JI(e,n):e;if(t===void 0)throw new Error(n+"contains undefined "+Te(s));if(typeof t=="function")throw new Error(n+"contains a function "+Te(s)+" with contents = "+t.toString());if(yf(t))throw new Error(n+"contains "+t.toString()+" "+Te(s));if(typeof t=="string"&&t.length>Fr/3&&Oi(t)>Fr)throw new Error(n+"contains a string greater than "+Fr+" utf8 bytes "+Te(s)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,r=!1;if(kt(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yp(o)))throw new Error(n+" contains an invalid key ("+o+") "+Te(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZI(s,o),Ep(n,a,s),tw(s)}),i&&r)throw new Error(n+' contains ".value" child '+Te(s)+" in addition to actual children.")}},vA=function(n,t){const e=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!yp(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||e.length!==0&&!EA(e))throw new Error(C_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function IA(n,t){let e=null;for(let s=0;s<t.length;s++){const i=t[s],r=i.getPath();e!==null&&!qf(r,e.path)&&(n.eventLists_.push(e),e=null),e===null&&(e={events:[],path:r}),e.events.push(i)}e&&n.eventLists_.push(e)}function Ge(n,t,e){IA(n,e),wA(n,s=>xt(s,t)||xt(t,s))}function wA(n,t){n.recursionDepth_++;let e=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;t(r)?(AA(n.eventLists_[s]),n.eventLists_[s]=null):e=!1}}e&&(n.eventLists_=[]),n.recursionDepth_--}function AA(n){for(let t=0;t<n.events.length;t++){const e=n.events[t];if(e!==null){n.events[t]=null;const s=e.getEventRunner();Ne&&mt("event: "+e.toString()),Us(s)}}}/**
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
 */const RA="repo_interrupt",SA=25;class CA{constructor(t,e,s,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ci(),this.transactionQueueTree_=new rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PA(n,t,e){if(n.stats_=Ha(n.repoInfo_),n.forceRestClient_||II())n.server_=new Si(n.repoInfo_,(s,i,r,o)=>{iu(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ru(n,!0),0);else{if(typeof e<"u"&&e!==null){if(typeof e!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(e)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new se(n.repoInfo_,t,(s,i,r,o)=>{iu(n,s,i,r,o)},s=>{ru(n,s)},s=>{NA(n,s)},n.authTokenProvider_,n.appCheckProvider_,e),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=PI(n.repoInfo_,()=>new Cw(n.stats_,n.server_)),n.infoData_=new Iw,n.infoSyncTree_=new nu({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=cr(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),al(n,"connected",!1),n.serverSyncTree_=new nu({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ge(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function bA(n){const e=n.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+e}function vp(n){return lA({timestamp:bA(n)})}function iu(n,t,e,s,i){n.dataUpdateCount++;const r=new G(t);e=n.interceptServerDataCallback_?n.interceptServerDataCallback_(t,e):e;let o=[];if(i)if(s){const l=ai(e,c=>gt(c));o=aA(n.serverSyncTree_,r,l,i)}else{const l=gt(e);o=oA(n.serverSyncTree_,r,l,i)}else if(s){const l=ai(e,c=>gt(c));o=rA(n.serverSyncTree_,r,l)}else{const l=gt(e);o=cr(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=cl(n,r)),Ge(n.eventQueue_,a,o)}function ru(n,t){al(n,"connected",t),t===!1&&kA(n)}function NA(n,t){kt(t,(e,s)=>{al(n,e,s)})}function al(n,t,e){const s=new G("/.info/"+t),i=gt(e);n.infoData_.updateSnapshot(s,i);const r=cr(n.infoSyncTree_,s,i);Ge(n.eventQueue_,s,r)}function DA(n){return n.nextWriteId_++}function kA(n){Tp(n,"onDisconnectEvents");const t=vp(n),e=Ci();Ro(n.onDisconnect_,B(),(i,r)=>{const o=hA(i,r,n.serverSyncTree_,t);Kf(e,i,o)});let s=[];Ro(e,B(),(i,r)=>{s=s.concat(cr(n.serverSyncTree_,i,r));const o=MA(n,i);cl(n,o)}),n.onDisconnect_=Ci(),Ge(n.eventQueue_,B(),s)}function OA(n){n.persistentConnection_&&n.persistentConnection_.interrupt(RA)}function Tp(n,...t){let e="";n.persistentConnection_&&(e=n.persistentConnection_.id+":"),mt(e,...t)}function Ip(n,t,e){return cp(n.serverSyncTree_,t,e)||F.EMPTY_NODE}function ll(n,t=n.transactionQueueTree_){if(t||dr(n,t),kn(t)){const e=Ap(n,t);v(e.length>0,"Sending zero length transaction queue"),e.every(i=>i.status===0)&&VA(n,qs(t),e)}else mp(t)&&hr(t,e=>{ll(n,e)})}function VA(n,t,e){const s=e.map(c=>c.currentWriteId),i=Ip(n,t,s);let r=i;const o=i.hash();for(let c=0;c<e.length;c++){const u=e[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Dt(t,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;n.server_.put(l.toString(),a,c=>{Tp(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<e.length;d++)e[d].status=2,u=u.concat(nn(n.serverSyncTree_,e[d].currentWriteId)),e[d].onComplete&&h.push(()=>e[d].onComplete(null,!0,e[d].currentOutputSnapshotResolved)),e[d].unwatcher();dr(n,ol(n.transactionQueueTree_,t)),ll(n,n.transactionQueueTree_),Ge(n.eventQueue_,t,u);for(let d=0;d<h.length;d++)Us(h[d])}else{if(c==="datastale")for(let h=0;h<e.length;h++)e[h].status===3?e[h].status=4:e[h].status=0;else{Ct("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<e.length;h++)e[h].status=4,e[h].abortReason=c}cl(n,t)}},o)}function cl(n,t){const e=wp(n,t),s=qs(e),i=Ap(n,e);return xA(n,i,s),s}function xA(n,t,e){if(t.length===0)return;const s=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=Dt(e,l.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(nn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SA)u=!0,h="maxretry",i=i.concat(nn(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ip(n,l.path,o);l.currentInputSnapshot=d;const f=t[a].update(d.val());if(f!==void 0){Ep("transaction failed: Data returned ",f,l.path);let g=gt(f);typeof f=="object"&&f!=null&&oe(f,".priority")||(g=g.updatePriority(d.getPriority()));const _=l.currentWriteId,R=vp(n),w=dA(g,d,R);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=w,l.currentWriteId=DA(n),o.splice(o.indexOf(_),1),i=i.concat(iA(n.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),i=i.concat(nn(n.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(nn(n.serverSyncTree_,l.currentWriteId,!0))}Ge(n.eventQueue_,e,i),i=[],u&&(t[a].status=2,function(d){setTimeout(d,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(h==="nodata"?s.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):s.push(()=>t[a].onComplete(new Error(h),!1,null))))}dr(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Us(s[a]);ll(n,n.transactionQueueTree_)}function wp(n,t){let e,s=n.transactionQueueTree_;for(e=x(t);e!==null&&kn(s)===void 0;)s=ol(s,e),t=W(t),e=x(t);return s}function Ap(n,t){const e=[];return Rp(n,t,e),e.sort((s,i)=>s.order-i.order),e}function Rp(n,t,e){const s=kn(t);if(s)for(let i=0;i<s.length;i++)e.push(s[i]);hr(t,i=>{Rp(n,i,e)})}function dr(n,t){const e=kn(t);if(e){let s=0;for(let i=0;i<e.length;i++)e[i].status!==2&&(e[s]=e[i],s++);e.length=s,_p(t,e.length>0?e:void 0)}hr(t,s=>{dr(n,s)})}function MA(n,t){const e=qs(wp(n,t)),s=ol(n.transactionQueueTree_,t);return pA(s,i=>{Ur(n,i)}),Ur(n,s),gp(s,i=>{Ur(n,i)}),e}function Ur(n,t){const e=kn(t);if(e){const s=[];let i=[],r=-1;for(let o=0;o<e.length;o++)e[o].status===3||(e[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,e[o].status=3,e[o].abortReason="set"):(v(e[o].status===0,"Unexpected transaction status in abort"),e[o].unwatcher(),i=i.concat(nn(n.serverSyncTree_,e[o].currentWriteId,!0)),e[o].onComplete&&s.push(e[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?_p(t,void 0):e.length=r+1,Ge(n.eventQueue_,qs(t),i);for(let o=0;o<s.length;o++)Us(s[o])}}/**
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
 */function LA(n){let t="";const e=n.split("/");for(let s=0;s<e.length;s++)if(e[s].length>0){let i=e[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function FA(n){const t={};n.charAt(0)==="?"&&(n=n.substring(1));for(const e of n.split("&")){if(e.length===0)continue;const s=e.split("=");s.length===2?t[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ct(`Invalid query segment '${e}' in query '${n}'`)}return t}const ou=function(n,t){const e=UA(n),s=e.namespace;e.domain==="firebase.com"&&Fe(e.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&e.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),e.secure||pI();const i=e.scheme==="ws"||e.scheme==="wss";return{repoInfo:new RI(e.host,e.secure,s,i,t,"",s!==e.subdomain),path:new G(e.pathString)}},UA=function(n){let t="",e="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),t=n.substring(0,Math.min(u,h)),u<h&&(i=LA(n.substring(u,h)));const d=FA(n.substring(Math.min(n.length,h)));c=t.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if(f.toLowerCase()==="localhost")e="localhost";else if(f.split(".").length<=2)e=f;else{const g=t.indexOf(".");s=t.substring(0,g).toLowerCase(),e=t.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:e,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ul{constructor(t,e,s,i){this._repo=t,this._path=e,this._queryParams=s,this._orderByCalled=i}get key(){return k(this._path)?null:Ff(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const t=zc(this._queryParams),e=Wa(t);return e==="{}"?"default":e}get _queryObject(){return zc(this._queryParams)}isEqual(t){if(t=Ft(t),!(t instanceof ul))return!1;const e=this._repo===t._repo,s=qf(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+XI(this._path)}}class On extends ul{constructor(t,e){super(t,e,new Ya,!1)}get parent(){const t=Bf(this._path);return t===null?null:new On(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}nA(On);sA(On);/**
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
 */const BA="FIREBASE_DATABASE_EMULATOR_HOST",Oo={};let qA=!1;function jA(n,t,e,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ou(r,i),a=o.repoInfo,l,c;typeof process<"u"&&Sc&&(c=Sc[BA]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=ou(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Io(Io.OWNER):new AI(n.name,n.options,t);vA("Invalid Firebase Database URL",o),k(o.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=WA(a,n,u,new wI(n.name,e));return new zA(h,n)}function $A(n,t){const e=Oo[t];(!e||e[n.key]!==n)&&Fe(`Database ${t}(${n.repoInfo_}) has already been deleted.`),OA(n),delete e[n.key]}function WA(n,t,e,s){let i=Oo[t.name];i||(i={},Oo[t.name]=i);let r=i[n.toURLString()];return r&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new CA(n,qA,e,s),i[n.toURLString()]=r,r}class zA{constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&($A(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Fe("Cannot call "+t+" on a deleted database.")}}/**
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
 */function HA(n){cI(Fo),dn(new De("database",(t,{instanceIdentifier:e})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return jA(s,i,r,e)},"PUBLIC").setMultipleInstances(!0)),Gt(Cc,Pc,n),Gt(Cc,Pc,"esm2017")}se.prototype.simpleListen=function(n,t){this.sendRequest("q",{p:n},t)};se.prototype.echo=function(n,t){this.sendRequest("echo",{d:n},t)};HA();export{hR as A,lR as B,De as C,cR as D,wu as E,je as F,pf as G,aR as H,bv as I,lI as J,oR as K,Mo as L,$v as M,iR as N,Qv as O,Fo as S,Cu as _,XA as a,Br as b,KA as c,qr as d,JA as e,f_ as f,Ft as g,bu as h,V as i,vu as j,__ as k,dn as l,QA as m,un as n,YA as o,ZA as p,w_ as q,Gt as r,_l as s,kv as t,ff as u,dR as v,fR as w,Nv as x,rR as y,uR as z};
