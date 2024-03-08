import{j as p}from"./jsx-runtime.CfVuv60F.js";import{r as U,g as Ru,R as Mo}from"./index.BG0d_8j_.js";import{I as tr}from"./iconify.Gi37SqeE.js";const Ai=e=>{let t;const n=new Set,r=(l,h)=>{const d=typeof l=="function"?l(t):l;if(!Object.is(d,t)){const f=t;t=h??(typeof d!="object"||d===null)?d:Object.assign({},t,d),n.forEach(I=>I(t,f))}},s=()=>t,c={setState:r,getState:s,getInitialState:()=>u,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}},u=t=e(r,s,c);return c},Su=e=>e?Ai(e):Ai;var Lo={exports:{}},Fo={},jo={exports:{}},Uo={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=U;function Cu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pu=typeof Object.is=="function"?Object.is:Cu,bu=ce.useState,Vu=ce.useEffect,Du=ce.useLayoutEffect,xu=ce.useDebugValue;function Nu(e,t){var n=t(),r=bu({inst:{value:n,getSnapshot:t}}),s=r[0].inst,i=r[1];return Du(function(){s.value=n,s.getSnapshot=t,Vr(s)&&i({inst:s})},[e,n,t]),Vu(function(){return Vr(s)&&i({inst:s}),e(function(){Vr(s)&&i({inst:s})})},[e]),xu(n),n}function Vr(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pu(e,n)}catch{return!0}}function ku(e,t){return t()}var Ou=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ku:Nu;Uo.useSyncExternalStore=ce.useSyncExternalStore!==void 0?ce.useSyncExternalStore:Ou;jo.exports=Uo;var Mu=jo.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=U,Lu=Mu;function Fu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ju=typeof Object.is=="function"?Object.is:Fu,Uu=Lu.useSyncExternalStore,Bu=er.useRef,qu=er.useEffect,$u=er.useMemo,zu=er.useDebugValue;Fo.useSyncExternalStoreWithSelector=function(e,t,n,r,s){var i=Bu(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=$u(function(){function c(f){if(!u){if(u=!0,l=f,f=r(f),s!==void 0&&o.hasValue){var I=o.value;if(s(I,f))return h=I}return h=f}if(I=h,ju(l,f))return I;var y=r(f);return s!==void 0&&s(I,y)?I:(l=f,h=y)}var u=!1,l,h,d=n===void 0?null:n;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,n,r,s]);var a=Uu(e,i[0],i[1]);return qu(function(){o.hasValue=!0,o.value=a},[a]),zu(a),a};Lo.exports=Fo;var Qu=Lo.exports;const Gu=Ru(Qu),{useDebugValue:Ku}=Mo,{useSyncExternalStoreWithSelector:Wu}=Gu;const Hu=e=>e;function Xu(e,t=Hu,n){const r=Wu(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Ku(r),r}const Ri=e=>{const t=typeof e=="function"?Su(e):e,n=(r,s)=>Xu(t,r,s);return Object.assign(n,t),n},Bo=e=>e?Ri(e):Ri;function Yu(e,t){let n;try{n=e()}catch{return}return{getItem:s=>{var i;const o=c=>c===null?null:JSON.parse(c,t?.reviver),a=(i=n.getItem(s))!=null?i:null;return a instanceof Promise?a.then(o):o(a)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,t?.replacer)),removeItem:s=>n.removeItem(s)}}const Ue=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return Ue(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ue(r)(n)}}}},Ju=(e,t)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:_=>_,version:0,merge:(_,v)=>({...v,..._}),...t},o=!1;const a=new Set,c=new Set;let u;try{u=i.getStorage()}catch{}if(!u)return e((..._)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(..._)},r,s);const l=Ue(i.serialize),h=()=>{const _=i.partialize({...r()});let v;const S=l({state:_,version:i.version}).then(M=>u.setItem(i.name,M)).catch(M=>{v=M});if(v)throw v;return S},d=s.setState;s.setState=(_,v)=>{d(_,v),h()};const f=e((..._)=>{n(..._),h()},r,s);let I;const y=()=>{var _;if(!u)return;o=!1,a.forEach(S=>S(r()));const v=((_=i.onRehydrateStorage)==null?void 0:_.call(i,r()))||void 0;return Ue(u.getItem.bind(u))(i.name).then(S=>{if(S)return i.deserialize(S)}).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return i.migrate(S.state,S.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return S.state}).then(S=>{var M;return I=i.merge(S,(M=r())!=null?M:f),n(I,!0),h()}).then(()=>{v?.(I,void 0),o=!0,c.forEach(S=>S(I))}).catch(S=>{v?.(void 0,S)})};return s.persist={setOptions:_=>{i={...i,..._},_.getStorage&&(u=_.getStorage())},clearStorage:()=>{u?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>y(),hasHydrated:()=>o,onHydrate:_=>(a.add(_),()=>{a.delete(_)}),onFinishHydration:_=>(c.add(_),()=>{c.delete(_)})},y(),I||f},Zu=(e,t)=>(n,r,s)=>{let i={storage:Yu(()=>localStorage),partialize:y=>y,version:0,merge:(y,_)=>({..._,...y}),...t},o=!1;const a=new Set,c=new Set;let u=i.storage;if(!u)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...y)},r,s);const l=()=>{const y=i.partialize({...r()});return u.setItem(i.name,{state:y,version:i.version})},h=s.setState;s.setState=(y,_)=>{h(y,_),l()};const d=e((...y)=>{n(...y),l()},r,s);s.getInitialState=()=>d;let f;const I=()=>{var y,_;if(!u)return;o=!1,a.forEach(S=>{var M;return S((M=r())!=null?M:d)});const v=((_=i.onRehydrateStorage)==null?void 0:_.call(i,(y=r())!=null?y:d))||void 0;return Ue(u.getItem.bind(u))(i.name).then(S=>{if(S)if(typeof S.version=="number"&&S.version!==i.version){if(i.migrate)return i.migrate(S.state,S.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return S.state}).then(S=>{var M;return f=i.merge(S,(M=r())!=null?M:d),n(f,!0),l()}).then(()=>{v?.(f,void 0),f=r(),o=!0,c.forEach(S=>S(f))}).catch(S=>{v?.(void 0,S)})};return s.persist={setOptions:y=>{i={...i,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u?.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>I(),hasHydrated:()=>o,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},i.skipHydration||I(),f||d},tl=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?Ju(e,t):Zu(e,t),el=tl;var Si={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},nl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},$o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):nl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new rl;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sl=function(e){const t=qo(e);return $o.encodeByteArray(t,!0)},Ln=function(e){return sl(e).replace(/\./g,"")},il=function(e){try{return $o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ol(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const al=()=>ol().__FIREBASE_DEFAULTS__,cl=()=>{if(typeof process>"u"||typeof Si>"u")return;const e=Si.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ul=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&il(e[1]);return t&&JSON.parse(t)},nr=()=>{try{return al()||cl()||ul()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ll=e=>{var t,n;return(n=(t=nr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},hl=e=>{const t=ll(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zo=()=>{var e;return(e=nr())===null||e===void 0?void 0:e.config},_g=e=>{var t;return(t=nr())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function fl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ln(JSON.stringify(n)),Ln(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function pl(){var e;const t=(e=nr())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tg(){const e=ue();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function ml(){return!pl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qo(){try{return typeof indexedDB=="object"}catch{return!1}}function gl(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="FirebaseError";class Wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_l,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?yl(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wt(s,a,r)}}function yl(e,t){return e.replace(vl,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const vl=/\{\$([^}]+)}/g;function wg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Wr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Ci(i)&&Ci(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ci(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ag(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function Rg(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Sg(e,t){const n=new El(e,t);return n.subscribe.bind(n)}class El{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tl(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Dr),s.error===void 0&&(s.error=Dr),s.complete===void 0&&(s.complete=Dr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tl(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Dr(){}/**
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
 */function le(e){return e&&e._delegate?e._delegate:e}class Be{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class wl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new dl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Al(t))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Lt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Lt){return this.instances.has(t)}getOptions(t=Lt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Il(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Lt){return this.component?this.component.multipleInstances?t:Lt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Il(e){return e===Lt?void 0:e}function Al(e){return e.instantiationMode==="EAGER"}/**
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
 */class Rl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new wl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const Sl={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},Cl=N.INFO,Pl={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},bl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Pl[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ko{constructor(t){this.name=t,this._logLevel=Cl,this._logHandler=bl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const Vl=(e,t)=>t.some(n=>e instanceof n);let Pi,bi;function Dl(){return Pi||(Pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return bi||(bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wo=new WeakMap,Hr=new WeakMap,Ho=new WeakMap,xr=new WeakMap,As=new WeakMap;function Nl(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(bt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wo.set(n,e)}).catch(()=>{}),As.set(t,e),t}function kl(e){if(Hr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Hr.set(e,t)}let Xr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Hr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ho.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ol(e){Xr=e(Xr)}function Ml(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Nr(this),t,...n);return Ho.set(r,t.sort?t.sort():[t]),bt(r)}:xl().includes(e)?function(...t){return e.apply(Nr(this),t),bt(Wo.get(this))}:function(...t){return bt(e.apply(Nr(this),t))}}function Ll(e){return typeof e=="function"?Ml(e):(e instanceof IDBTransaction&&kl(e),Vl(e,Dl())?new Proxy(e,Xr):e)}function bt(e){if(e instanceof IDBRequest)return Nl(e);if(xr.has(e))return xr.get(e);const t=Ll(e);return t!==e&&(xr.set(e,t),As.set(t,e)),t}const Nr=e=>As.get(e);function Fl(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jl=["get","getKey","getAll","getAllKeys","count"],Ul=["put","add","delete","clear"],kr=new Map;function Vi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ul.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jl.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return kr.set(t,i),i}Ol(e=>({...e,get:(t,n,r)=>Vi(t,n)||e.get(t,n,r),has:(t,n)=>!!Vi(t,n)||e.has(t,n)}));/**
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
 */class Bl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ql(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ql(e){const t=e.getComponent();return t?.type==="VERSION"}const Yr="@firebase/app",Di="0.9.28";/**
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
 */const zt=new Ko("@firebase/app"),$l="@firebase/app-compat",zl="@firebase/analytics-compat",Ql="@firebase/analytics",Gl="@firebase/app-check-compat",Kl="@firebase/app-check",Wl="@firebase/auth",Hl="@firebase/auth-compat",Xl="@firebase/database",Yl="@firebase/database-compat",Jl="@firebase/functions",Zl="@firebase/functions-compat",th="@firebase/installations",eh="@firebase/installations-compat",nh="@firebase/messaging",rh="@firebase/messaging-compat",sh="@firebase/performance",ih="@firebase/performance-compat",oh="@firebase/remote-config",ah="@firebase/remote-config-compat",ch="@firebase/storage",uh="@firebase/storage-compat",lh="@firebase/firestore",hh="@firebase/firestore-compat",dh="firebase",fh="10.8.1";/**
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
 */const Jr="[DEFAULT]",ph={[Yr]:"fire-core",[$l]:"fire-core-compat",[Ql]:"fire-analytics",[zl]:"fire-analytics-compat",[Kl]:"fire-app-check",[Gl]:"fire-app-check-compat",[Wl]:"fire-auth",[Hl]:"fire-auth-compat",[Xl]:"fire-rtdb",[Yl]:"fire-rtdb-compat",[Jl]:"fire-fn",[Zl]:"fire-fn-compat",[th]:"fire-iid",[eh]:"fire-iid-compat",[nh]:"fire-fcm",[rh]:"fire-fcm-compat",[sh]:"fire-perf",[ih]:"fire-perf-compat",[oh]:"fire-rc",[ah]:"fire-rc-compat",[ch]:"fire-gcs",[uh]:"fire-gcs-compat",[lh]:"fire-fst",[hh]:"fire-fst-compat","fire-js":"fire-js",[dh]:"fire-js-all"};/**
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
 */const Fn=new Map,Zr=new Map;function mh(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jn(e){const t=e.name;if(Zr.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Zr.set(t,e);for(const n of Fn.values())mh(n,e);return!0}function gh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const _h={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Go("app","Firebase",_h);/**
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
 */class yh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const vh=fh;function Xo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Jr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(n||(n=zo()),!n)throw Vt.create("no-options");const i=Fn.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const o=new Rl(s);for(const c of Zr.values())o.addComponent(c);const a=new yh(n,r,o);return Fn.set(s,a),a}function Eh(e=Jr){const t=Fn.get(e);if(!t&&e===Jr&&zo())return Xo();if(!t)throw Vt.create("no-app",{appName:e});return t}function se(e,t,n){var r;let s=(r=ph[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}jn(new Be(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Th="firebase-heartbeat-database",wh=1,qe="firebase-heartbeat-store";let Or=null;function Yo(){return Or||(Or=Fl(Th,wh,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(qe)}catch(n){console.warn(n)}}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),Or}async function Ih(e){try{const n=(await Yo()).transaction(qe),r=await n.objectStore(qe).get(Jo(e));return await n.done,r}catch(t){if(t instanceof Wt)zt.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t?.message});zt.warn(n.message)}}}async function xi(e,t){try{const r=(await Yo()).transaction(qe,"readwrite");await r.objectStore(qe).put(t,Jo(e)),await r.done}catch(n){if(n instanceof Wt)zt.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n?.message});zt.warn(r.message)}}}function Jo(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ah=1024,Rh=30*24*60*60*1e3;class Sh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ph(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ni();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Rh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ni(),{heartbeatsToSend:r,unsentEntries:s}=Ch(this._heartbeatsCache.heartbeats),i=Ln(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ni(){return new Date().toISOString().substring(0,10)}function Ch(e,t=Ah){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ki(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ki(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ph{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qo()?gl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ih(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ki(e){return Ln(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function bh(e){jn(new Be("platform-logger",t=>new Bl(t),"PRIVATE")),jn(new Be("heartbeat",t=>new Sh(t),"PRIVATE")),se(Yr,Di,e),se(Yr,Di,"esm2017"),se("fire-js","")}bh("");var Vh="firebase",Dh="10.8.1";/**
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
 */se(Vh,Dh,"app");var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Rs=Rs||{},P=xh||self;function rr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function on(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Nh(e){return Object.prototype.hasOwnProperty.call(e,Mr)&&e[Mr]||(e[Mr]=++kh)}var Mr="closure_uid_"+(1e9*Math.random()>>>0),kh=0;function Oh(e,t,n){return e.call.apply(e.bind,arguments)}function Mh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function st(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=Oh:st=Mh,st.apply(null,arguments)}function In(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function H(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ot(){this.s=this.s,this.o=this.o}var Lh=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Lh!=0)&&Nh(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ss(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Oi(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function it(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var Fh=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};P.addEventListener("test",n,t),P.removeEventListener("test",n,t)}catch{}return e}();function $e(e){return/^[\s\xa0]*$/.test(e)}function sr(){var e=P.navigator;return e&&(e=e.userAgent)?e:""}function mt(e){return sr().indexOf(e)!=-1}function Cs(e){return Cs[" "](e),e}Cs[" "]=function(){};function jh(e,t){var n=Dd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Uh=mt("Opera"),he=mt("Trident")||mt("MSIE"),ta=mt("Edge"),ts=ta||he,ea=mt("Gecko")&&!(sr().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge"))&&!(mt("Trident")||mt("MSIE"))&&!mt("Edge"),Bh=sr().toLowerCase().indexOf("webkit")!=-1&&!mt("Edge");function na(){var e=P.document;return e?e.documentMode:void 0}var es;t:{var Lr="",Fr=function(){var e=sr();if(ea)return/rv:([^\);]+)(\)|;)/.exec(e);if(ta)return/Edge\/([\d\.]+)/.exec(e);if(he)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Bh)return/WebKit\/(\S+)/.exec(e);if(Uh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fr&&(Lr=Fr?Fr[1]:""),he){var jr=na();if(jr!=null&&jr>parseFloat(Lr)){es=String(jr);break t}}es=Lr}var ns;if(P.document&&he){var Mi=na();ns=Mi||parseInt(es,10)||void 0}else ns=void 0;var qh=ns;function ze(e,t){if(it.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ea){t:{try{Cs(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:$h[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ze.$.h.call(this)}}H(ze,it);var $h={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),zh=0;function Qh(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++zh,this.fa=this.ia=!1}function ir(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ps(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Gh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ra(e){const t={};for(const n in e)t[n]=e[n];return t}const Li="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sa(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Li.length;i++)n=Li[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function or(e){this.src=e,this.g={},this.h=0}or.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ss(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Qh(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function rs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=Zo(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ir(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ss(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Ur={};function ia(e,t,n,r,s){if(r&&r.once)return aa(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ia(e,t[i],n,r,s);return null}return n=xs(n),e&&e[an]?e.O(t,n,on(r)?!!r.capture:!!r,s):oa(e,t,n,!1,r,s)}function oa(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=on(s)?!!s.capture:!!s,a=Ds(e);if(a||(e[bs]=a=new or(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Kh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Fh||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ua(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Kh(){function e(n){return t.call(e.src,e.listener,n)}const t=Wh;return e}function aa(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)aa(e,t[i],n,r,s);return null}return n=xs(n),e&&e[an]?e.P(t,n,on(r)?!!r.capture:!!r,s):oa(e,t,n,!0,r,s)}function ca(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ca(e,t[i],n,r,s);else r=on(r)?!!r.capture:!!r,n=xs(n),e&&e[an]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ss(i,n,r,s),-1<n&&(ir(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ds(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ss(t,n,r,s)),(n=-1<e?t[e]:null)&&Vs(n))}function Vs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[an])rs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ua(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ds(t))?(rs(n,e),n.h==0&&(n.src=null,t[bs]=null)):ir(e)}}}function ua(e){return e in Ur?Ur[e]:Ur[e]="on"+e}function Wh(e,t){if(e.fa)e=!0;else{t=new ze(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Vs(e),e=n.call(r,t)}return e}function Ds(e){return e=e[bs],e instanceof or?e:null}var Br="__closure_events_fn_"+(1e9*Math.random()>>>0);function xs(e){return typeof e=="function"?e:(e[Br]||(e[Br]=function(t){return e.handleEvent(t)}),e[Br])}function W(){Ot.call(this),this.i=new or(this),this.S=this,this.J=null}H(W,Ot);W.prototype[an]=!0;W.prototype.removeEventListener=function(e,t,n,r){ca(this,e,t,n,r)};function Z(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new it(t,e);else if(t instanceof it)t.target=t.target||e;else{var s=t;t=new it(r,e),sa(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=An(o,r,!0,t)&&s}if(o=t.g=e,s=An(o,r,!0,t)&&s,s=An(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=An(o,r,!1,t)&&s}W.prototype.N=function(){if(W.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ir(n[r]);delete e.g[t],e.h--}}this.J=null};W.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};W.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function An(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&rs(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ns=P.JSON.stringify;class Hh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Xh(){var e=ks;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Yh{constructor(){this.h=this.g=null}add(t,n){const r=la.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var la=new Hh(()=>new Jh,e=>e.reset());class Jh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function td(e){P.setTimeout(()=>{throw e},0)}let Qe,Ge=!1,ks=new Yh,ha=()=>{const e=P.Promise.resolve(void 0);Qe=()=>{e.then(ed)}};var ed=()=>{for(var e;e=Xh();){try{e.h.call(e.g)}catch(n){td(n)}var t=la;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ge=!1};function ar(e,t){W.call(this),this.h=e||1,this.g=t||P,this.j=st(this.qb,this),this.l=Date.now()}H(ar,W);T=ar.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Z(this,"tick"),this.ga&&(Os(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Os(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}T.N=function(){ar.$.N.call(this),Os(this),delete this.g};function Ms(e,t,n){if(typeof e=="function")n&&(e=st(e,n));else if(e&&typeof e.handleEvent=="function")e=st(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(e,t||0)}function da(e){e.g=Ms(()=>{e.g=null,e.i&&(e.i=!1,da(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class nd extends Ot{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:da(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(e){Ot.call(this),this.h=e,this.g={}}H(Ke,Ot);var Fi=[];function fa(e,t,n,r){Array.isArray(n)||(n&&(Fi[0]=n.toString()),n=Fi);for(var s=0;s<n.length;s++){var i=ia(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function pa(e){Ps(e.g,function(t,n){this.g.hasOwnProperty(n)&&Vs(t)},e),e.g={}}Ke.prototype.N=function(){Ke.$.N.call(this),pa(this)};Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cr(){this.g=!0}cr.prototype.Ea=function(){this.g=!1};function rd(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function sd(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function re(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+od(e,n)+(r?" "+r:"")})}function id(e,t){e.info(function(){return"TIMEOUT: "+t})}cr.prototype.info=function(){};function od(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ns(n)}catch{return t}}var Ht={},ji=null;function ur(){return ji=ji||new W}Ht.Ta="serverreachability";function ma(e){it.call(this,Ht.Ta,e)}H(ma,it);function We(e){const t=ur();Z(t,new ma(t))}Ht.STAT_EVENT="statevent";function ga(e,t){it.call(this,Ht.STAT_EVENT,e),this.stat=t}H(ga,it);function at(e){const t=ur();Z(t,new ga(t,e))}Ht.Ua="timingevent";function _a(e,t){it.call(this,Ht.Ua,e),this.size=t}H(_a,it);function cn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){e()},t)}var lr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ya={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function Ui(e){return e.h||(e.h=e.i())}function va(){}var un={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Fs(){it.call(this,"d")}H(Fs,it);function js(){it.call(this,"c")}H(js,it);var is;function hr(){}H(hr,Ls);hr.prototype.g=function(){return new XMLHttpRequest};hr.prototype.i=function(){return{}};is=new hr;function ln(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ke(this),this.P=ad,e=ts?125:void 0,this.V=new ar(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ea}function Ea(){this.i=null,this.g="",this.h=!1}var ad=45e3,Ta={},os={};T=ln.prototype;T.setTimeout=function(e){this.P=e};function as(e,t,n){e.L=1,e.A=fr(St(t)),e.u=n,e.S=!0,wa(e,null)}function wa(e,t){e.G=Date.now(),hn(e),e.B=St(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Va(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Ea,e.g=Ya(e.l,n?t:null,!e.u),0<e.O&&(e.M=new nd(st(e.Pa,e,e.g),e.O)),fa(e.U,e.g,"readystatechange",e.nb),t=e.I?ra(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),We(),rd(e.j,e.v,e.B,e.m,e.W,e.u)}T.nb=function(e){e=e.target;const t=this.M;t&&gt(e)==3?t.l():this.Pa(e)};T.Pa=function(e){try{if(e==this.g)t:{const l=gt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ts||this.g&&(this.h.h||this.g.ja()||zi(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?We(3):We(2)),dr(this);var n=this.g.da();this.ca=n;e:if(Ia(this)){var r=zi(this.g);e="";var s=r.length,i=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Ne(this);var o="";break e}this.h.i=new P.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sd(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var u=a;break e}}u=null}if(n=u)re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cs(this,n);else{this.i=!1,this.s=3,at(12),jt(this),Ne(this);break t}}this.S?(Aa(this,l,o),ts&&this.i&&l==3&&(fa(this.U,this.V,"tick",this.mb),this.V.start())):(re(this.j,this.m,o,null),cs(this,o)),l==4&&jt(this),this.i&&!this.J&&(l==4?Ka(this.l,this):(this.i=!1,hn(this)))}else Pd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,at(12)):(this.s=0,at(13)),jt(this),Ne(this)}}}catch{}finally{}};function Ia(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Aa(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=cd(e,n),s==os){t==4&&(e.s=4,at(14),r=!1),re(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Ta){e.s=4,at(15),re(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else re(e.j,e.m,s,null),cs(e,s);Ia(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,at(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qs(t),t.M=!0,at(11))):(re(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),Ne(e))}T.mb=function(){if(this.g){var e=gt(this.g),t=this.g.ja();this.o<t.length&&(dr(this),Aa(this,e,t),this.i&&e!=4&&hn(this))}};function cd(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?os:(n=Number(t.substring(n,r)),isNaN(n)?Ta:(r+=1,r+n>t.length?os:(t=t.slice(r,r+n),e.o=r+n,t)))}T.cancel=function(){this.J=!0,jt(this)};function hn(e){e.Y=Date.now()+e.P,Ra(e,e.P)}function Ra(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=cn(st(e.lb,e),t)}function dr(e){e.C&&(P.clearTimeout(e.C),e.C=null)}T.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(id(this.j,this.B),this.L!=2&&(We(),at(17)),jt(this),this.s=2,Ne(this)):Ra(this,this.Y-e)};function Ne(e){e.l.H==0||e.J||Ka(e.l,e)}function jt(e){dr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Os(e.V),pa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function cs(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||us(n.i,e))){if(!e.K&&us(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)qn(n),_r(n);else break t;zs(n),at(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=cn(st(n.ib,n),6e3));if(1>=Na(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&qn(n),!$e(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const I=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var i=r.i;i.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Us(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,F(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Xa(r,r.J?r.pa:null,r.Y),o.K){ka(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(dr(a),hn(a)),r.g=o}else Qa(r);0<n.j.length&&yr(n)}else u[0]!="stop"&&u[0]!="close"||Ut(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ut(n,7):$s(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}We(4)}catch{}}function ud(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ld(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Sa(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ld(e),r=ud(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function $t(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=e.h,Un(this,e.j),this.s=e.s,this.g=e.g,Bn(this,e.m),this.l=e.l;var t=e.i,n=new He;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bi(this,n),this.o=e.o}else e&&(t=String(e).match(Ca))?(this.h=!1,Un(this,t[1]||"",!0),this.s=be(t[2]||""),this.g=be(t[3]||"",!0),Bn(this,t[4]),this.l=be(t[5]||"",!0),Bi(this,t[6]||"",!0),this.o=be(t[7]||"")):(this.h=!1,this.i=new He(null,this.h))}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ve(t,qi,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ve(t,qi,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ve(n,n.charAt(0)=="/"?pd:fd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ve(n,gd)),e.join("")};function St(e){return new $t(e)}function Un(e,t,n){e.j=n?be(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bi(e,t,n){t instanceof He?(e.i=t,_d(e.i,e.h)):(n||(t=Ve(t,md)),e.i=new He(t,e.h))}function F(e,t,n){e.i.set(t,n)}function fr(e){return F(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function be(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,dd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qi=/[#\/\?@]/g,fd=/[#\?:]/g,pd=/[#\?]/g,md=/[#\?@]/g,gd=/#/g;function He(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Mt(e){e.g||(e.g=new Map,e.h=0,e.i&&hd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}T=He.prototype;T.add=function(e,t){Mt(this),this.i=null,e=ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Pa(e,t){Mt(e),t=ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ba(e,t){return Mt(e),t=ve(e,t),e.g.has(t)}T.forEach=function(e,t){Mt(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};T.ta=function(){Mt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};T.Z=function(e){Mt(this);let t=[];if(typeof e=="string")ba(this,e)&&(t=t.concat(this.g.get(ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};T.set=function(e,t){return Mt(this),this.i=null,e=ve(this,e),ba(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};T.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Va(e,t,n){Pa(e,t),0<n.length&&(e.i=null,e.g.set(ve(e,t),Ss(n)),e.h+=n.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function _d(e,t){t&&!e.j&&(Mt(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Pa(this,r),Va(this,s,n))},e)),e.j=t}var yd=class{constructor(e,t){this.g=e,this.map=t}};function Da(e){this.l=e||vd,P.PerformanceNavigationTiming?(e=P.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vd=10;function xa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Na(e){return e.h?1:e.g?e.g.size:0}function us(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Us(e,t){e.g?e.g.add(t):e.h=t}function ka(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Da.prototype.cancel=function(){if(this.i=Oa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Oa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ss(e.i)}var Ed=class{stringify(e){return P.JSON.stringify(e,void 0)}parse(e){return P.JSON.parse(e,void 0)}};function Td(){this.g=new Ed}function wd(e,t,n){const r=n||"";try{Sa(e,function(s,i){let o=s;on(s)&&(o=Ns(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Id(e,t){const n=new cr;if(P.Image){const r=new Image;r.onload=In(Rn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=In(Rn,n,r,"TestLoadImage: error",!1,t),r.onabort=In(Rn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=In(Rn,n,r,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Rn(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function pr(e){this.l=e.ec||null,this.j=e.ob||!1}H(pr,Ls);pr.prototype.g=function(){return new mr(this.l,this.j)};pr.prototype.i=function(e){return function(){return e}}({});function mr(e,t){W.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Bs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}H(mr,W);var Bs=0;T=mr.prototype;T.open=function(e,t){if(this.readyState!=Bs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xe(this)};T.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||P).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=Bs};T.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ma(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ma(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}T.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?dn(this):Xe(this),this.readyState==3&&Ma(this)}};T.Za=function(e){this.g&&(this.response=this.responseText=e,dn(this))};T.Ya=function(e){this.g&&(this.response=e,dn(this))};T.ka=function(){this.g&&dn(this)};function dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xe(e)}T.setRequestHeader=function(e,t){this.v.append(e,t)};T.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Ad=P.JSON.parse;function q(e){W.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=La,this.L=this.M=!1}H(q,W);var La="",Rd=/^https?$/i,Sd=["POST","PUT"];T=q.prototype;T.Oa=function(e){this.M=e};T.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():is.g(),this.C=this.u?Ui(this.u):Ui(is),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){$i(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=P.FormData&&e instanceof P.FormData,!(0<=Zo(Sd,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ua(this),0<this.B&&((this.L=Cd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Ms(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){$i(this,i)}};function Cd(e){return he&&typeof e.timeout=="number"&&e.ontimeout!==void 0}T.ua=function(){typeof Rs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Z(this,"timeout"),this.abort(8))};function $i(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Fa(e),gr(e)}function Fa(e){e.F||(e.F=!0,Z(e,"complete"),Z(e,"error"))}T.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Z(this,"complete"),Z(this,"abort"),gr(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gr(this,!0)),q.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?ja(this):this.kb())};T.kb=function(){ja(this)};function ja(e){if(e.h&&typeof Rs<"u"&&(!e.C[1]||gt(e)!=4||e.da()!=2)){if(e.v&&gt(e)==4)Ms(e.La,0,e);else if(Z(e,"readystatechange"),gt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Ca)[1]||null;!s&&P.self&&P.self.location&&(s=P.self.location.protocol.slice(0,-1)),r=!Rd.test(s?s.toLowerCase():"")}n=r}if(n)Z(e,"complete"),Z(e,"success");else{e.m=6;try{var i=2<gt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Fa(e)}}finally{gr(e)}}}}function gr(e,t){if(e.g){Ua(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Z(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ua(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(P.clearTimeout(e.A),e.A=null)}T.isActive=function(){return!!this.g};function gt(e){return e.g?e.g.readyState:0}T.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Ad(t)}};function zi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case La:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Pd(e){const t={};e=(e.g&&2<=gt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if($e(e[r]))continue;var n=Zh(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Gh(t,function(r){return r.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ba(e){let t="";return Ps(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function qs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ba(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):F(e,t,n))}function Se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function qa(e){this.Ga=0,this.j=[],this.l=new cr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Se("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Se("baseRetryDelayMs",5e3,e),this.hb=Se("retryDelaySeedMs",1e4,e),this.eb=Se("forwardChannelMaxRetries",2,e),this.xa=Se("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Da(e&&e.concurrentRequestLimit),this.Ja=new Td,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=qa.prototype;T.ra=8;T.H=1;function $s(e){if($a(e),e.H==3){var t=e.W++,n=St(e.I);if(F(n,"SID",e.K),F(n,"RID",t),F(n,"TYPE","terminate"),fn(e,n),t=new ln(e,e.l,t),t.L=2,t.A=fr(St(n)),n=!1,P.navigator&&P.navigator.sendBeacon)try{n=P.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&P.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ya(t.l,null),t.g.ha(t.A)),t.G=Date.now(),hn(t)}Ha(e)}function _r(e){e.g&&(Qs(e),e.g.cancel(),e.g=null)}function $a(e){_r(e),e.u&&(P.clearTimeout(e.u),e.u=null),qn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&P.clearTimeout(e.m),e.m=null)}function yr(e){if(!xa(e.i)&&!e.m){e.m=!0;var t=e.Na;Qe||ha(),Ge||(Qe(),Ge=!0),ks.add(t,e),e.C=0}}function bd(e,t){return Na(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=cn(st(e.Na,e,t),Wa(e,e.C)),e.C++,!0)}T.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new ln(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ra(i),sa(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=za(this,s,t),n=St(this.I),F(n,"RID",e),F(n,"CVER",22),this.F&&F(n,"X-HTTP-Session-Id",this.F),fn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Ba(i)))+"&"+t:this.o&&qs(n,this.o,i)),Us(this.i,s),this.bb&&F(n,"TYPE","init"),this.P?(F(n,"$req",t),F(n,"SID","null"),s.aa=!0,as(s,n,null)):as(s,n,t),this.H=2}}else this.H==3&&(e?Qi(this,e):this.j.length==0||xa(this.i)||Qi(this))};function Qi(e,t){var n;t?n=t.m:n=e.W++;const r=St(e.I);F(r,"SID",e.K),F(r,"RID",n),F(r,"AID",e.V),fn(e,r),e.o&&e.s&&qs(r,e.o,e.s),n=new ln(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=za(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Us(e.i,n),as(n,r,t)}function fn(e,t){e.na&&Ps(e.na,function(n,r){F(t,r,n)}),e.h&&Sa({},function(n,r){F(t,r,n)})}function za(e,t,n){n=Math.min(e.j.length,n);var r=e.h?st(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{wd(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Qa(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Qe||ha(),Ge||(Qe(),Ge=!0),ks.add(t,e),e.A=0}}function zs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=cn(st(e.Ma,e),Wa(e,e.A)),e.A++,!0)}T.Ma=function(){if(this.u=null,Ga(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=cn(st(this.jb,this),e)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,at(10),_r(this),Ga(this))};function Qs(e){e.B!=null&&(P.clearTimeout(e.B),e.B=null)}function Ga(e){e.g=new ln(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=St(e.wa);F(t,"RID","rpc"),F(t,"SID",e.K),F(t,"AID",e.V),F(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&F(t,"TO",e.qa),F(t,"TYPE","xmlhttp"),fn(e,t),e.o&&e.s&&qs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=fr(St(t)),n.u=null,n.S=!0,wa(n,e)}T.ib=function(){this.v!=null&&(this.v=null,_r(this),zs(this),at(19))};function qn(e){e.v!=null&&(P.clearTimeout(e.v),e.v=null)}function Ka(e,t){var n=null;if(e.g==t){qn(e),Qs(e),e.g=null;var r=2}else if(us(e.i,t))n=t.F,ka(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=ur(),Z(r,new _a(r,n)),yr(e)}else Qa(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&bd(e,t)||r==2&&zs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function Wa(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=st(e.pb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Un(n,"https"),fr(n)),Id(n.toString(),r)}else at(2);e.H=0,e.h&&e.h.za(t),Ha(e),$a(e)}T.pb=function(e){e?(this.l.info("Successfully pinged google.com"),at(2)):(this.l.info("Failed to ping google.com"),at(1))};function Ha(e){if(e.H=0,e.ma=[],e.h){const t=Oa(e.i);(t.length!=0||e.j.length!=0)&&(Oi(e.ma,t),Oi(e.ma,e.j),e.i.i.length=0,Ss(e.j),e.j.length=0),e.h.ya()}}function Xa(e,t,n){var r=n instanceof $t?St(n):new $t(n);if(r.g!="")t&&(r.g=t+"."+r.g),Bn(r,r.m);else{var s=P.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new $t(null);r&&Un(i,r),t&&(i.g=t),s&&Bn(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&F(r,n,t),F(r,"VER",e.ra),fn(e,r),r}function Ya(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new q(new pr({ob:n})):new q(e.va),t.Oa(e.J),t}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Ja(){}T=Ja.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function $n(){if(he&&!(10<=Number(qh)))throw Error("Environmental error: no available transport.")}$n.prototype.g=function(e,t){return new ut(e,t)};function ut(e,t){W.call(this),this.g=new qa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!$e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$e(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ee(this)}H(ut,W);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Xa(e,null,e.Y),yr(e)};ut.prototype.close=function(){$s(this.g)};ut.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ns(e),e=n);t.j.push(new yd(t.fb++,e)),t.H==3&&yr(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,$s(this.g),delete this.g,ut.$.N.call(this)};function Za(e){Fs.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}H(Za,Fs);function tc(){js.call(this),this.status=1}H(tc,js);function Ee(e){this.g=e}H(Ee,Ja);Ee.prototype.Ba=function(){Z(this.g,"a")};Ee.prototype.Aa=function(e){Z(this.g,new Za(e))};Ee.prototype.za=function(e){Z(this.g,new tc)};Ee.prototype.ya=function(){Z(this.g,"b")};function Vd(){this.blockSize=-1}function ft(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}H(ft,Vd);ft.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ft.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)qr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){qr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){qr(this,r),s=0;break}}this.h=s,this.i+=t};ft.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function O(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Dd={};function Gs(e){return-128<=e&&128>e?jh(e,function(t){return new O([t|0],0>t?-1:0)}):new O([e|0],0>e?-1:0)}function _t(e){if(isNaN(e)||!isFinite(e))return ie;if(0>e)return Y(_t(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ls;return new O(t,0)}function ec(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Y(ec(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=_t(Math.pow(t,8)),r=ie,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=_t(Math.pow(t,i)),r=r.R(i).add(_t(o))):(r=r.R(n),r=r.add(_t(o)))}return r}var ls=4294967296,ie=Gs(0),hs=Gs(1),Gi=Gs(16777216);T=O.prototype;T.ea=function(){if(lt(this))return-Y(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ls+r)*t,t*=ls}return e};T.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(It(this))return"0";if(lt(this))return"-"+Y(this).toString(e);for(var t=_t(Math.pow(e,6)),n=this,r="";;){var s=Qn(n,t).g;n=zn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,It(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};T.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function It(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function lt(e){return e.h==-1}T.X=function(e){return e=zn(this,e),lt(e)?-1:It(e)?0:1};function Y(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new O(n,~e.h).add(hs)}T.abs=function(){return lt(this)?Y(this):this};T.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new O(n,n[n.length-1]&-2147483648?-1:0)};function zn(e,t){return e.add(Y(t))}T.R=function(e){if(It(this)||It(e))return ie;if(lt(this))return lt(e)?Y(this).R(Y(e)):Y(Y(this).R(e));if(lt(e))return Y(this.R(Y(e)));if(0>this.X(Gi)&&0>e.X(Gi))return _t(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Sn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Sn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Sn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Sn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new O(n,0)};function Sn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ce(e,t){this.g=e,this.h=t}function Qn(e,t){if(It(t))throw Error("division by zero");if(It(e))return new Ce(ie,ie);if(lt(e))return t=Qn(Y(e),t),new Ce(Y(t.g),Y(t.h));if(lt(t))return t=Qn(e,Y(t)),new Ce(Y(t.g),t.h);if(30<e.g.length){if(lt(e)||lt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=hs,r=t;0>=r.X(e);)n=Ki(n),r=Ki(r);var s=Zt(n,1),i=Zt(r,1);for(r=Zt(r,2),n=Zt(n,2);!It(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=Zt(r,1),n=Zt(n,1)}return t=zn(e,s.R(t)),new Ce(s,t)}for(s=ie;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=_t(n),o=i.R(t);lt(o)||0<o.X(e);)n-=r,i=_t(n),o=i.R(t);It(i)&&(i=hs),s=s.add(i),e=zn(e,o)}return new Ce(s,e)}T.gb=function(e){return Qn(this,e).h};T.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new O(n,this.h&e.h)};T.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new O(n,this.h|e.h)};T.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new O(n,this.h^e.h)};function Ki(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new O(n,e.h)}function Zt(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new O(s,e.h)}$n.prototype.createWebChannel=$n.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;lr.NO_ERROR=0;lr.TIMEOUT=8;lr.HTTP_ERROR=6;ya.COMPLETE="complete";va.EventType=un;un.OPEN="a";un.CLOSE="b";un.ERROR="c";un.MESSAGE="d";W.prototype.listen=W.prototype.O;q.prototype.listenOnce=q.prototype.P;q.prototype.getLastError=q.prototype.Sa;q.prototype.getLastErrorCode=q.prototype.Ia;q.prototype.getStatus=q.prototype.da;q.prototype.getResponseJson=q.prototype.Wa;q.prototype.getResponseText=q.prototype.ja;q.prototype.send=q.prototype.ha;q.prototype.setWithCredentials=q.prototype.Oa;ft.prototype.digest=ft.prototype.l;ft.prototype.reset=ft.prototype.reset;ft.prototype.update=ft.prototype.j;O.prototype.add=O.prototype.add;O.prototype.multiply=O.prototype.R;O.prototype.modulo=O.prototype.gb;O.prototype.compare=O.prototype.X;O.prototype.toNumber=O.prototype.ea;O.prototype.toString=O.prototype.toString;O.prototype.getBits=O.prototype.D;O.fromNumber=_t;O.fromString=ec;var xd=function(){return new $n},Nd=function(){return ur()},$r=lr,kd=ya,Od=Ht,Wi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Cn=va,Md=q,Ld=ft,oe=O;const Hi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Te="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Ko("@firebase/firestore");function Pe(){return Qt.logLevel}function E(e,...t){if(Qt.logLevel<=N.DEBUG){const n=t.map(Ks);Qt.debug(`Firestore (${Te}): ${e}`,...n)}}function Et(e,...t){if(Qt.logLevel<=N.ERROR){const n=t.map(Ks);Qt.error(`Firestore (${Te}): ${e}`,...n)}}function de(e,...t){if(Qt.logLevel<=N.WARN){const n=t.map(Ks);Qt.warn(`Firestore (${Te}): ${e}`,...n)}}function Ks(e){if(typeof e=="string")return e;try{/**
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
 */function C(e="Unexpected state"){const t=`FIRESTORE (${Te}) INTERNAL ASSERTION FAILED: `+e;throw Et(t),new Error(t)}function L(e,t){e||C()}function V(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Wt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class jd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ud{constructor(t){this.t=t,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(L(typeof r.accessToken=="string"),new nc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new nt(t)}}class Bd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qd{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Bd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $d{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(L(typeof n.token=="string"),this.R=n.token,new $d(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Qd(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function k(e,t){return e<t?-1:e>t?1:0}function fe(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return G.fromMillis(Date.now())}static fromDate(t){return G.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new G(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.timestamp=t}static fromTimestamp(t){return new b(t)}static min(){return new b(new G(0,0))}static max(){return new b(new G(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,r){n===void 0?n=0:n>t.length&&C(),r===void 0?r=t.length-n:r>t.length-n&&C(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class j extends Ye{construct(t,n,r){return new j(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new j(n)}static emptyPath(){return new j([])}}const Gd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Ye{construct(t,n,r){return new J(t,n,r)}static isValidIdentifier(t){return Gd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new w(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.path=t}static fromPath(t){return new R(j.fromString(t))}static fromName(t){return new R(j.fromString(t).popFirst(5))}static empty(){return new R(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&j.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return j.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new R(new j(t.slice()))}}function Kd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=b.fromTimestamp(r===1e9?new G(n+1,0):new G(n,r));return new xt(s,R.empty(),t)}function Wd(e){return new xt(e.readTime,e.key,-1)}class xt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new xt(b.min(),R.empty(),-1)}static max(){return new xt(b.max(),R.empty(),-1)}}function Hd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=R.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const Xd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Xd)throw e;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(s=>s?g.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new g((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new g((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new At,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ke(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Hs(r.target.error);this.V.reject(new ke(t,s))}}static open(t,n,r,s){try{return new Ws(n,t.transaction(s,r))}catch(i){throw new ke(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(E("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Zd(n)}}class Bt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Bt.S(ue())===12.2&&Et("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return E("SimpleDb","Removing database:",t),Ft(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Qo())return!1;if(Bt.C())return!0;const t=ue(),n=Bt.S(t),r=0<n&&n<10,s=Bt.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(E("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ke(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new w(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ke(t,o))},s.onupgradeneeded=i=>{E("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{E("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ws.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),g.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(E("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Jd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Ft(this.k.delete())}}class ke extends w{constructor(t,n){super(m.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mn(e){return e.name==="IndexedDbTransactionError"}class Zd{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(E("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(E("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Ft(r)}add(t){return E("SimpleDb","ADD",this.store.name,t,t),Ft(this.store.add(t))}get(t){return Ft(this.store.get(t)).next(n=>(n===void 0&&(n=null),E("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return E("SimpleDb","DELETE",this.store.name,t),Ft(this.store.delete(t))}count(){return E("SimpleDb","COUNT",this.store.name),Ft(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new g((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new g((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){E("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new g((r,s)=>{n.onerror=i=>{const o=Hs(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new g((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Jd(a),u=n(a.primaryKey,a.value,c);if(u instanceof g){const l=u.catch(h=>(c.done(),g.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>g.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Ft(e){return new g((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=Hs(r.target.error);n(s)}})}let Xi=!1;function Hs(e){const t=Bt.S(ue());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Xi||(Xi=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class Xs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Xs._e=-1;function vr(e){return e==null}function Gn(e){return e===0&&1/e==-1/0}function tf(e){return typeof e=="number"&&Number.isInteger(e)&&!Gn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function we(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function sc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,n){this.comparator=t,this.root=n||X.EMPTY}insert(t,n){return new B(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(t){return new B(this.comparator,this.root.remove(t,this.comparator).copy(null,null,X.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pn(this.root,t,this.comparator,!0)}}class Pn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class X{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??X.RED,this.left=s??X.EMPTY,this.right=i??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new X(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return X.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,n,r,s,i){return this}insert(t,n,r){return new X(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new B(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ji(this.data.getIterator())}getIteratorFrom(t){return new Ji(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class Ji{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class dt{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new dt([])}unionWith(t){let n=new tt(J.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new dt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ic("Invalid base64 string: "+i):i}}(t);return new ot(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new ot(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const ef=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nt(e){if(L(!!e),typeof e=="string"){let t=0;const n=ef.exec(e);if(L(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Gt(e){return typeof e=="string"?ot.fromBase64String(e):ot.fromUint8Array(e)}/**
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
 */function Ys(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Js(e){const t=e.mapValue.fields.__previous_value__;return Ys(t)?Js(t):t}function Je(e){const t=Nt(e.mapValue.fields.__local_write_time__.timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const bn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ys(e)?4:rf(e)?9007199254740991:10:C()}function Tt(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Je(e).isEqual(Je(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nt(s.timestampValue),a=Nt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Gt(s.bytesValue).isEqual(Gt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return z(s.geoPointValue.latitude)===z(i.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return z(s.integerValue)===z(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=z(s.doubleValue),a=z(i.doubleValue);return o===a?Gn(o)===Gn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return fe(e.arrayValue.values||[],t.arrayValue.values||[],Tt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Yi(o)!==Yi(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Tt(o[c],a[c])))return!1;return!0}(e,t);default:return C()}}function tn(e,t){return(e.values||[]).find(n=>Tt(n,t))!==void 0}function pe(e,t){if(e===t)return 0;const n=Kt(e),r=Kt(t);if(n!==r)return k(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=z(i.integerValue||i.doubleValue),c=z(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Zi(e.timestampValue,t.timestampValue);case 4:return Zi(Je(e),Je(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Gt(i),c=Gt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=k(a[u],c[u]);if(l!==0)return l}return k(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=k(z(i.latitude),z(o.latitude));return a!==0?a:k(z(i.longitude),z(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=pe(a[u],c[u]);if(l)return l}return k(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===bn.mapValue&&o===bn.mapValue)return 0;if(i===bn.mapValue)return 1;if(o===bn.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=k(c[h],l[h]);if(d!==0)return d;const f=pe(a[c[h]],u[l[h]]);if(f!==0)return f}return k(c.length,l.length)}(e.mapValue,t.mapValue);default:throw C()}}function Zi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Nt(e),r=Nt(t),s=k(n.seconds,r.seconds);return s!==0?s:k(n.nanos,r.nanos)}function me(e){return ds(e)}function ds(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Nt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Gt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return R.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ds(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ds(n.fields[o])}`;return s+"}"}(e.mapValue):C()}function to(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fs(e){return!!e&&"integerValue"in e}function Zs(e){return!!e&&"arrayValue"in e}function eo(e){return!!e&&"nullValue"in e}function no(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nn(e){return!!e&&"mapValue"in e}function Oe(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return we(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Oe(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Oe(e.arrayValue.values[n]);return t}return Object.assign({},e)}function rf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.value=t}static empty(){return new ht({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Oe(n)}setAll(t){let n=J.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Oe(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Nn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){we(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ht(Oe(this.value))}}function oc(e){const t=[];return we(e.fields,(n,r)=>{const s=new J([n]);if(Nn(r)){const i=oc(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new rt(t,0,b.min(),b.min(),b.min(),ht.empty(),0)}static newFoundDocument(t,n,r,s){return new rt(t,1,n,b.min(),r,s,0)}static newNoDocument(t,n){return new rt(t,2,n,b.min(),b.min(),ht.empty(),0)}static newUnknownDocument(t,n){return new rt(t,3,n,b.min(),b.min(),ht.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof rt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Kn{constructor(t,n){this.position=t,this.inclusive=n}}function ro(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=R.comparator(R.fromName(o.referenceValue),n.key):r=pe(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function so(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Wn{constructor(t,n="asc"){this.field=t,this.dir=n}}function sf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ac{}class Q extends ac{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new af(t,n,r):n==="array-contains"?new lf(t,r):n==="in"?new hf(t,r):n==="not-in"?new df(t,r):n==="array-contains-any"?new ff(t,r):new Q(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new cf(t,r):new uf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pe(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(pe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends ac{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new pt(t,n)}matches(t){return cc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function cc(e){return e.op==="and"}function uc(e){return of(e)&&cc(e)}function of(e){for(const t of e.filters)if(t instanceof pt)return!1;return!0}function ps(e){if(e instanceof Q)return e.field.canonicalString()+e.op.toString()+me(e.value);if(uc(e))return e.filters.map(t=>ps(t)).join(",");{const t=e.filters.map(n=>ps(n)).join(",");return`${e.op}(${t})`}}function lc(e,t){return e instanceof Q?function(r,s){return s instanceof Q&&r.op===s.op&&r.field.isEqual(s.field)&&Tt(r.value,s.value)}(e,t):e instanceof pt?function(r,s){return s instanceof pt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&lc(o,s.filters[a]),!0):!1}(e,t):void C()}function hc(e){return e instanceof Q?function(n){return`${n.field.canonicalString()} ${n.op} ${me(n.value)}`}(e):e instanceof pt?function(n){return n.op.toString()+" {"+n.getFilters().map(hc).join(" ,")+"}"}(e):"Filter"}class af extends Q{constructor(t,n,r){super(t,n,r),this.key=R.fromName(r.referenceValue)}matches(t){const n=R.comparator(t.key,this.key);return this.matchesComparison(n)}}class cf extends Q{constructor(t,n){super(t,"in",n),this.keys=dc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class uf extends Q{constructor(t,n){super(t,"not-in",n),this.keys=dc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function dc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>R.fromName(r.referenceValue))}class lf extends Q{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Zs(n)&&tn(n.arrayValue,this.value)}}class hf extends Q{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&tn(this.value.arrayValue,n)}}class df extends Q{constructor(t,n){super(t,"not-in",n)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!tn(this.value.arrayValue,n)}}class ff extends Q{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Zs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tn(this.value.arrayValue,r))}}/**
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
 */class pf{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function io(e,t=null,n=[],r=[],s=null,i=null,o=null){return new pf(e,t,n,r,s,i,o)}function ti(e){const t=V(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ps(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>me(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>me(r)).join(",")),t.ce=n}return t.ce}function ei(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!sf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!lc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!so(e.startAt,t.startAt)&&so(e.endAt,t.endAt)}function ms(e){return R.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function mf(e,t,n,r,s,i,o,a){return new gn(e,t,n,r,s,i,o,a)}function fc(e){return new gn(e)}function oo(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function pc(e){return e.collectionGroup!==null}function Me(e){const t=V(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(J.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Wn(i,r))}),n.has(J.keyField().canonicalString())||t.le.push(new Wn(J.keyField(),r))}return t.le}function yt(e){const t=V(e);return t.he||(t.he=gf(t,Me(e))),t.he}function gf(e,t){if(e.limitType==="F")return io(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wn(s.field,i)});const n=e.endAt?new Kn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Kn(e.startAt.position,e.startAt.inclusive):null;return io(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function gs(e,t){const n=e.filters.concat([t]);return new gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function _s(e,t,n){return new gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Er(e,t){return ei(yt(e),yt(t))&&e.limitType===t.limitType}function mc(e){return`${ti(yt(e))}|lt:${e.limitType}`}function te(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>hc(s)).join(", ")}]`),vr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>me(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>me(s)).join(",")),`Target(${r})`}(yt(e))}; limitType=${e.limitType})`}function Tr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):R.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Me(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=ro(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Me(r),s)||r.endAt&&!function(o,a,c){const u=ro(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Me(r),s))}(e,t)}function _f(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function gc(e){return(t,n)=>{let r=!1;for(const s of Me(e)){const i=yf(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yf(e,t,n){const r=e.field.isKeyField()?R.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?pe(c,u):C()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){we(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=new B(R.comparator);function Ct(){return vf}const _c=new B(R.comparator);function De(...e){let t=_c;for(const n of e)t=t.insert(n.key,n);return t}function yc(e){let t=_c;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function qt(){return Le()}function vc(){return Le()}function Le(){return new Ie(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ef=new B(R.comparator),Tf=new tt(R.comparator);function D(...e){let t=Tf;for(const n of e)t=t.add(n);return t}const wf=new tt(k);function If(){return wf}/**
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
 */function Ec(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function Tc(e){return{integerValue:""+e}}function Af(e,t){return tf(t)?Tc(t):Ec(e,t)}/**
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
 */class wr{constructor(){this._=void 0}}function Rf(e,t,n){return e instanceof Hn?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ys(i)&&(i=Js(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof en?Ic(e,t):e instanceof nn?Ac(e,t):function(s,i){const o=wc(s,i),a=ao(o)+ao(s.Ie);return fs(o)&&fs(s.Ie)?Tc(a):Ec(s.serializer,a)}(e,t)}function Sf(e,t,n){return e instanceof en?Ic(e,t):e instanceof nn?Ac(e,t):n}function wc(e,t){return e instanceof Xn?function(r){return fs(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Hn extends wr{}class en extends wr{constructor(t){super(),this.elements=t}}function Ic(e,t){const n=Rc(t);for(const r of e.elements)n.some(s=>Tt(s,r))||n.push(r);return{arrayValue:{values:n}}}class nn extends wr{constructor(t){super(),this.elements=t}}function Ac(e,t){let n=Rc(t);for(const r of e.elements)n=n.filter(s=>!Tt(s,r));return{arrayValue:{values:n}}}class Xn extends wr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function ao(e){return z(e.integerValue||e.doubleValue)}function Rc(e){return Zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Cf(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof en&&s instanceof en||r instanceof nn&&s instanceof nn?fe(r.elements,s.elements,Tt):r instanceof Xn&&s instanceof Xn?Tt(r.Ie,s.Ie):r instanceof Hn&&s instanceof Hn}(e.transform,t.transform)}class Pf{constructor(t,n){this.version=t,this.transformResults=n}}class Rt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ir{}function Sc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Pc(e.key,Rt.none()):new _n(e.key,e.data,Rt.none());{const n=e.data,r=ht.empty();let s=new tt(J.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Xt(e.key,r,new dt(s.toArray()),Rt.none())}}function bf(e,t,n){e instanceof _n?function(s,i,o){const a=s.value.clone(),c=uo(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Xt?function(s,i,o){if(!kn(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=uo(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Cc(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Fe(e,t,n,r){return e instanceof _n?function(i,o,a,c){if(!kn(i.precondition,o))return a;const u=i.value.clone(),l=lo(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Xt?function(i,o,a,c){if(!kn(i.precondition,o))return a;const u=lo(i.fieldTransforms,c,o),l=o.data;return l.setAll(Cc(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return kn(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Vf(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=wc(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function co(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fe(r,s,(i,o)=>Cf(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _n extends Ir{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xt extends Ir{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cc(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function uo(e,t,n){const r=new Map;L(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Sf(o,a,n[s]))}return r}function lo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Rf(i,o,t))}return r}class Pc extends Ir{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Df extends Ir{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&bf(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Fe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Fe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=vc();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Sc(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(n,r)=>co(n,r))&&fe(this.baseMutations,t.baseMutations,(n,r)=>co(n,r))}}class ni{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){L(t.mutations.length===r.length);let s=function(){return Ef}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ni(t,n,r,s)}}/**
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
 */class Nf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class kf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,x;function Of(e){switch(e){default:return C();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function bc(e){if(e===void 0)return Et("GRPC error has no .code"),m.UNKNOWN;switch(e){case $.OK:return m.OK;case $.CANCELLED:return m.CANCELLED;case $.UNKNOWN:return m.UNKNOWN;case $.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case $.INTERNAL:return m.INTERNAL;case $.UNAVAILABLE:return m.UNAVAILABLE;case $.UNAUTHENTICATED:return m.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case $.NOT_FOUND:return m.NOT_FOUND;case $.ALREADY_EXISTS:return m.ALREADY_EXISTS;case $.PERMISSION_DENIED:return m.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case $.ABORTED:return m.ABORTED;case $.OUT_OF_RANGE:return m.OUT_OF_RANGE;case $.UNIMPLEMENTED:return m.UNIMPLEMENTED;case $.DATA_LOSS:return m.DATA_LOSS;default:return C()}}(x=$||($={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Mf(){return new TextEncoder}/**
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
 */const Lf=new oe([4294967295,4294967295],0);function ho(e){const t=Mf().encode(e),n=new Ld;return n.update(t),new Uint8Array(n.digest())}function fo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new oe([n,r],0),new oe([s,i],0)]}class ri{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xe(`Invalid padding: ${n}`);if(r<0)throw new xe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new xe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=oe.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(oe.fromNumber(r)));return s.compare(Lf)===1&&(s=new oe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=ho(t),[r,s]=fo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new ri(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=ho(t),[r,s]=fo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class xe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ar(b.min(),s,new B(k),Ct(),D())}}class yn{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new yn(r,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class Vc{constructor(t,n){this.targetId=t,this.fe=n}}class Dc{constructor(t,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class po{constructor(){this.ge=0,this.pe=go(),this.ye=ot.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=D(),n=D(),r=D();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:C()}}),new yn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=go()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,L(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Ff{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ct(),this.Qe=mo(),this.Ke=new B(k)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:C()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(ms(i))if(r===0){const o=new R(i.path);this.We(n,o,rt.newNoDocument(o,b.min()))}else L(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Gt(r).toUint8Array()}catch(c){if(c instanceof ic)return de("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ri(o,s,i)}catch(c){return de(c instanceof xe?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ms(a.target)){const c=new R(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,rt.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=D();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Ar(t,n,this.Ke,this.qe,r);return this.qe=Ct(),this.Qe=mo(),this.Ke=new B(k),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new po,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new tt(k),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||E("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new po),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function mo(){return new B(R.comparator)}function go(){return new B(R.comparator)}const jf={asc:"ASCENDING",desc:"DESCENDING"},Uf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bf={and:"AND",or:"OR"};class qf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ys(e,t){return e.useProto3Json||vr(t)?t:{value:t}}function Yn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function $f(e,t){return Yn(e,t.toTimestamp())}function vt(e){return L(!!e),b.fromTimestamp(function(n){const r=Nt(n);return new G(r.seconds,r.nanos)}(e))}function si(e,t){return vs(e,t).canonicalString()}function vs(e,t){const n=function(s){return new j(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Nc(e){const t=j.fromString(e);return L(Fc(t)),t}function Es(e,t){return si(e.databaseId,t.path)}function zr(e,t){const n=Nc(t);if(n.get(1)!==e.databaseId.projectId)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new R(Oc(n))}function kc(e,t){return si(e.databaseId,t)}function zf(e){const t=Nc(e);return t.length===4?j.emptyPath():Oc(t)}function Ts(e){return new j(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oc(e){return L(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _o(e,t,n){return{name:Es(e,t),fields:n.value.mapValue.fields}}function Qf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(L(l===void 0||typeof l=="string"),ot.fromBase64String(l||"")):(L(l===void 0||l instanceof Uint8Array),ot.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?m.UNKNOWN:bc(u.code);return new w(l,u.message||"")}(o);n=new Dc(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=zr(e,r.document.name),i=vt(r.document.updateTime),o=r.document.createTime?vt(r.document.createTime):b.min(),a=new ht({mapValue:{fields:r.document.fields}}),c=rt.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new On(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=zr(e,r.document),i=r.readTime?vt(r.readTime):b.min(),o=rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new On([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=zr(e,r.document),i=r.removedTargetIds||[];n=new On([],i,s,null)}else{if(!("filter"in t))return C();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new kf(s,i),a=r.targetId;n=new Vc(a,o)}}return n}function Gf(e,t){let n;if(t instanceof _n)n={update:_o(e,t.key,t.value)};else if(t instanceof Pc)n={delete:Es(e,t.key)};else if(t instanceof Xt)n={update:_o(e,t.key,t.data),updateMask:ep(t.fieldMask)};else{if(!(t instanceof Df))return C();n={verify:Es(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Hn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof en)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof nn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw C()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$f(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:C()}(e,t.precondition)),n}function Kf(e,t){return e&&e.length>0?(L(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?vt(s.updateTime):vt(i);return o.isEqual(b.min())&&(o=vt(i)),new Pf(o,s.transformResults||[])}(n,t))):[]}function Wf(e,t){return{documents:[kc(e,t.path)]}}function Hf(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kc(e,s);const i=function(u){if(u.length!==0)return Lc(pt.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(d){return{field:ee(d.field),direction:Jf(d.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ys(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:s}}function Xf(e){let t=zf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){L(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const d=Mc(h);return d instanceof pt&&uc(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(I){return new Wn(ne(I.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,vr(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Kn(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Kn(f,d)}(n.endAt)),mf(t,s,o,i,a,"F",c,u)}function Yf(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Mc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ne(n.unaryFilter.field);return Q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ne(n.unaryFilter.field);return Q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ne(n.unaryFilter.field);return Q.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ne(n.unaryFilter.field);return Q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(e):e.fieldFilter!==void 0?function(n){return Q.create(ne(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return pt.create(n.compositeFilter.filters.map(r=>Mc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return C()}}(n.compositeFilter.op))}(e):C()}function Jf(e){return jf[e]}function Zf(e){return Uf[e]}function tp(e){return Bf[e]}function ee(e){return{fieldPath:e.canonicalString()}}function ne(e){return J.fromServerFormat(e.fieldPath)}function Lc(e){return e instanceof Q?function(n){if(n.op==="=="){if(no(n.value))return{unaryFilter:{field:ee(n.field),op:"IS_NAN"}};if(eo(n.value))return{unaryFilter:{field:ee(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(no(n.value))return{unaryFilter:{field:ee(n.field),op:"IS_NOT_NAN"}};if(eo(n.value))return{unaryFilter:{field:ee(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ee(n.field),op:Zf(n.op),value:n.value}}}(e):e instanceof pt?function(n){const r=n.getFilters().map(s=>Lc(s));return r.length===1?r[0]:{compositeFilter:{op:tp(n.op),filters:r}}}(e):C()}function ep(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Fc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,s,i=b.min(),o=b.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Pt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(t){this.ct=t}}function rp(e){const t=Xf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_s(t,t.limit,"L"):t}/**
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
 */class sp{constructor(){this._n=new ip}addToCollectionParentIndex(t,n){return this._n.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(xt.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class ip{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new tt(j.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new tt(j.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ge(0)}static Bn(){return new ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.changes=new Ie(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,rt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ap{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Fe(r.mutation,s,dt.empty(),G.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,D()).next(()=>r))}getLocalViewOfDocuments(t,n,r=D()){const s=qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=De();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,D()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ct();const o=Le(),a=function(){return Le()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Xt)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Fe(l.mutation,u,l.mutation.getFieldMask(),G.now())):o.set(u.key,dt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new ap(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Le();let s=new B((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||dt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||D()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=vc();l.forEach(d=>{if(!i.has(d)){const f=Sc(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return R.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):pc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):g.resolve(qt());let a=-1,c=i;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,D())).next(l=>({batchId:a,changes:yc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new R(n)).next(r=>{let s=De();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=De();return this.indexManager.getCollectionParents(t,i).next(a=>g.forEach(a,c=>{const u=function(h,d){return new gn(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(l=>{l.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,rt.newInvalidDocument(l)))});let a=De();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&Fe(l.mutation,u,dt.empty(),G.now()),Tr(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class up{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return g.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vt(s.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:rp(s.bundledQuery),readTime:vt(s.readTime)}}(n)),g.resolve()}}/**
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
 */class lp{constructor(){this.overlays=new B(R.comparator),this.hr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=qt();return g.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const s=qt(),i=n.length+1,o=new R(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return g.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new B((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=qt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return g.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nf(n,r));let i=this.hr.get(n);i===void 0&&(i=D(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.Pr=new tt(K.Ir),this.Tr=new tt(K.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new K(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new K(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new R(new j([])),r=new K(n,t),s=new K(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new R(new j([])),r=new K(n,t),s=new K(n,t+1);let i=D();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new K(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class K{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return R.comparator(t.key,n.key)||k(t.pr,n.pr)}static Er(t,n){return k(t.pr,n.pr)||R.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new tt(K.Ir)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new K(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return g.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new K(n,0),s=new K(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),g.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new tt(k);return n.forEach(s=>{const i=new K(s,0),o=new K(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),g.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;R.isDocumentKey(i)||(i=i.child(""));const o=new K(new R(i),0);let a=new tt(k);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),g.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){L(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return g.forEach(n.mutations,s=>{const i=new K(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new K(n,0),s=this.wr.firstAfterOrEqual(r);return g.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.vr=t,this.docs=function(){return new B(R.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(t,n){let r=Ct();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ct();const o=n.path,a=new R(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Hd(Wd(l),r)<=0||(s.has(l.key)||Tr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(t,n,r,s){C()}Fr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new fp(this)}getSize(t){return g.resolve(this.size)}}class fp extends op{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.persistence=t,this.Mr=new Ie(n=>ti(n),ei),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ii,this.targetCount=0,this.Br=ge.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),g.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new ge(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.qn(n),g.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),g.waitFor(i).next(()=>s)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),g.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n){this.Lr={},this.overlays={},this.kr=new Xs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new pp(this),this.indexManager=new sp,this.remoteDocumentCache=function(s){return new dp(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new np(n),this.$r=new up(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new lp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new hp(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){E("MemoryPersistence","Starting transaction:",t);const s=new gp(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return g.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class gp extends Yd{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.zr=new ii,this.jr=null}static Hr(t){return new oi(t)}get Jr(){if(this.jr)return this.jr;throw C()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),g.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Jr,r=>{const s=R.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,b.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return g.or([()=>g.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=D(),s=D();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ai(t,n.fromCache,r,s)}}/**
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
 */class _p{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class yp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return ml()?8:Bt.v(ue())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new _p;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(Pe()<=N.DEBUG&&E("QueryEngine","SDK will not create cache indexes for query:",te(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),g.resolve()):(Pe()<=N.DEBUG&&E("QueryEngine","Query:",te(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Pe()<=N.DEBUG&&E("QueryEngine","The SDK decides to create cache indexes for query:",te(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,yt(n))):g.resolve())}ji(t,n){if(oo(n))return g.resolve(null);let r=yt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=_s(n,null,"F"),r=yt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=D(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,_s(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,s){return oo(n)||s.isEqual(b.min())?g.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?g.resolve(null):(Pe()<=N.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),te(n)),this.es(t,o,n,Kd(s,-1)).next(a=>a))})}Zi(t,n){let r=new tt(gc(t));return n.forEach((s,i)=>{Tr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return Pe()<=N.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",te(n)),this.zi.getDocumentsMatchingQuery(t,n,xt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class vp{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new B(k),this.rs=new Ie(i=>ti(i),ei),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Ep(e,t,n,r){return new vp(e,t,n,r)}async function jc(e,t){const n=V(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=D();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Tp(e,t){const n=V(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(I=>{f=f.next(()=>l.getEntry(c,I)).next(y=>{const _=u.docVersions.get(I);L(_!==null),y.version.compareTo(_)<0&&(h.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),l.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=D();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Uc(e){const t=V(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function wp(e,t){const n=V(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(ot.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),s=s.insert(h,f),function(y,_,v){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(d,f,l)&&a.push(n.Qr.updateTargetData(i,f))});let c=Ct(),u=D();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ip(i,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(b.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function Ip(e,t,n){let r=D(),s=D();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ct();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function Ap(e,t){const n=V(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Rp(e,t){const n=V(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,g.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Pt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function ws(e,t,n){const r=V(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!mn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function yo(e,t,n){const r=V(e);let s=b.min(),i=D();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=V(c),d=h.rs.get(l);return d!==void 0?g.resolve(h.ns.get(d)):h.Qr.getTargetData(u,l)}(r,o,yt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:b.min(),n?i:D())).next(a=>(Sp(r,_f(t),a),{documents:a,hs:i})))}function Sp(e,t,n){let r=e.ss.get(t)||b.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class vo{constructor(){this.activeTargetIds=If()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cp{constructor(){this.no=new vo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new vo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Pp{io(t){}shutdown(){}}/**
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
 */class Eo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vn=null;function Qr(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
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
 */const bp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Dp extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Qr(),c=this.bo(n,r.toUriEncodedString());E("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(E("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw de("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Te}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=bp[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=Qr();return new Promise((o,a)=>{const c=new Md;c.setWithCredentials(!0),c.listenOnce(kd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $r.NO_ERROR:const l=c.getResponseJson();E(et,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case $r.TIMEOUT:E(et,`RPC '${t}' ${i} timed out`),a(new w(m.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const h=c.getStatus();if(E(et,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const I=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(v)>=0?v:m.UNKNOWN}(f.status);a(new w(I,f.message))}else a(new w(m.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(m.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{E(et,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);E(et,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const s=Qr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=xd(),a=Nd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");E(et,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const I=new Vp({lo:_=>{f?E(et,`Not sending because RPC '${t}' stream ${s} is closed:`,_):(d||(E(et,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),E(et,`RPC '${t}' stream ${s} sending:`,_),h.send(_))},ho:()=>h.close()}),y=(_,v,S)=>{_.listen(v,M=>{try{S(M)}catch(wt){setTimeout(()=>{throw wt},0)}})};return y(h,Cn.EventType.OPEN,()=>{f||E(et,`RPC '${t}' stream ${s} transport opened.`)}),y(h,Cn.EventType.CLOSE,()=>{f||(f=!0,E(et,`RPC '${t}' stream ${s} transport closed`),I.Vo())}),y(h,Cn.EventType.ERROR,_=>{f||(f=!0,de(et,`RPC '${t}' stream ${s} transport errored:`,_),I.Vo(new w(m.UNAVAILABLE,"The operation could not be completed")))}),y(h,Cn.EventType.MESSAGE,_=>{var v;if(!f){const S=_.data[0];L(!!S);const M=S,wt=M.error||((v=M[0])===null||v===void 0?void 0:v.error);if(wt){E(et,`RPC '${t}' stream ${s} received error:`,wt);const Tn=wt.status;let Jt=function(Au){const Ii=$[Au];if(Ii!==void 0)return bc(Ii)}(Tn),wn=wt.message;Jt===void 0&&(Jt=m.INTERNAL,wn="Unknown error status: "+Tn+" with message "+wt.message),f=!0,I.Vo(new w(Jt,wn)),h.close()}else E(et,`RPC '${t}' stream ${s} received:`,S),I.mo(S)}}),y(a,Od.STAT_EVENT,_=>{_.stat===Wi.PROXY?E(et,`RPC '${t}' stream ${s} detected buffering proxy`):_.stat===Wi.NOPROXY&&E(et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function Gr(){return typeof document<"u"?document:null}/**
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
 */function Rr(e){return new qf(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&E("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Bc(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Et(n.toString()),Et("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new w(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return E("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xp extends qc{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Qf(this.serializer,t),r=function(i){if(!("targetChange"in i))return b.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?b.min():o.readTime?vt(o.readTime):b.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Ts(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ms(c)?{documents:Wf(i,c)}:{query:Hf(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xc(i,o.resumeToken);const u=ys(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(b.min())>0){a.readTime=Yn(i,o.snapshotVersion.toTimestamp());const u=ys(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Yf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Ts(this.serializer),n.removeTarget=t,this.t_(n)}}class Np extends qc{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=Kf(t.writeResults,t.commitTime),r=vt(t.commitTime);return this.listener.T_(r,n)}return L(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=Ts(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Gf(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,vs(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(m.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,vs(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new w(m.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Op{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Et(n),this.g_=!1):E("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Yt(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=V(c);u.v_.add(4),await vn(u),u.x_.set("Unknown"),u.v_.delete(4),await Sr(u)}(this))})}),this.x_=new Op(r,s)}}async function Sr(e){if(Yt(e))for(const t of e.F_)await t(!0)}async function vn(e){for(const t of e.F_)await t(!1)}function $c(e,t){const n=V(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),li(n)?ui(n):Ae(n).Jo()&&ci(n,t))}function zc(e,t){const n=V(e),r=Ae(n);n.C_.delete(t),r.Jo()&&Qc(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Yt(n)&&n.x_.set("Unknown"))}function ci(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(b.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ae(e).c_(t)}function Qc(e,t){e.O_.Oe(t),Ae(e).l_(t)}function ui(e){e.O_=new Ff({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Ae(e).start(),e.x_.p_()}function li(e){return Yt(e)&&!Ae(e).Ho()&&e.C_.size>0}function Yt(e){return V(e).v_.size===0}function Gc(e){e.O_=void 0}async function Lp(e){e.C_.forEach((t,n)=>{ci(e,t)})}async function Fp(e,t){Gc(e),li(e)?(e.x_.S_(t),ui(e)):e.x_.set("Unknown")}async function jp(e,t,n){if(e.x_.set("Online"),t instanceof Dc&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){E("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Jn(e,r)}else if(t instanceof On?e.O_.$e(t):t instanceof Vc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(b.min()))try{const r=await Uc(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(ot.EMPTY_BYTE_STRING,l.snapshotVersion)),Qc(i,c);const h=new Pt(l.target,c,u,l.sequenceNumber);ci(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){E("RemoteStore","Failed to raise snapshot:",r),await Jn(e,r)}}async function Jn(e,t,n){if(!mn(t))throw t;e.v_.add(1),await vn(e),e.x_.set("Offline"),n||(n=()=>Uc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Sr(e)})}function Kc(e,t){return t().catch(n=>Jn(e,n,t))}async function Cr(e){const t=V(e),n=kt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;Up(t);)try{const s=await Ap(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,Bp(t,s)}catch(s){await Jn(t,s)}Wc(t)&&Hc(t)}function Up(e){return Yt(e)&&e.D_.length<10}function Bp(e,t){e.D_.push(t);const n=kt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Wc(e){return Yt(e)&&!kt(e).Ho()&&e.D_.length>0}function Hc(e){kt(e).start()}async function qp(e){kt(e).d_()}async function $p(e){const t=kt(e);for(const n of e.D_)t.I_(n.mutations)}async function zp(e,t,n){const r=e.D_.shift(),s=ni.from(r,t,n);await Kc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Cr(e)}async function Qp(e,t){t&&kt(e).P_&&await async function(r,s){if(function(o){return Of(o)&&o!==m.ABORTED}(s.code)){const i=r.D_.shift();kt(r).Zo(),await Kc(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cr(r)}}(e,t),Wc(e)&&Hc(e)}async function To(e,t){const n=V(e);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const r=Yt(n);n.v_.add(3),await vn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Sr(n)}async function Gp(e,t){const n=V(e);t?(n.v_.delete(2),await Sr(n)):t||(n.v_.add(2),await vn(n),n.x_.set("Unknown"))}function Ae(e){return e.N_||(e.N_=function(n,r,s){const i=V(n);return i.R_(),new xp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:Lp.bind(null,e),To:Fp.bind(null,e),u_:jp.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),li(e)?ui(e):e.x_.set("Unknown")):(await e.N_.stop(),Gc(e))})),e.N_}function kt(e){return e.B_||(e.B_=function(n,r,s){const i=V(n);return i.R_(),new Np(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:qp.bind(null,e),To:Qp.bind(null,e),E_:$p.bind(null,e),T_:zp.bind(null,e)}),e.F_.push(async t=>{t?(e.B_.Zo(),await Cr(e)):(await e.B_.stop(),e.D_.length>0&&(E("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new hi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(e,t){if(Et("AsyncQueue",`${t}: ${e}`),mn(e))return new w(m.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.comparator=t?(n,r)=>t(n,r)||R.comparator(n.key,r.key):(n,r)=>R.comparator(n.key,r.key),this.keyedMap=De(),this.sortedSet=new B(this.comparator)}static emptySet(t){return new ae(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof ae)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new ae;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.L_=new B(R.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):C():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class _e{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _e(t,n,ae.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Er(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.q_=void 0,this.Q_=[]}}class Wp{constructor(){this.queries=new Ie(t=>mc(t),Er),this.onlineState="Unknown",this.K_=new Set}}async function Hp(e,t){const n=V(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Kp),s)try{i.q_=await n.onListen(r)}catch(o){const a=di(o,`Initialization of query '${te(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.Q_.push(t),t.U_(n.onlineState),i.q_&&t.W_(i.q_)&&fi(n)}async function Xp(e,t){const n=V(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Yp(e,t){const n=V(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&fi(n)}function Jp(e,t,n){const r=V(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function fi(e){e.K_.forEach(t=>{t.next()})}class Zp{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=_e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t){this.key=t}}class Yc{constructor(t){this.key=t}}class tm{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=D(),this.mutatedKeys=D(),this.ua=gc(t),this.ca=new ae(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new wo,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const d=s.get(l),f=Tr(this.query,h)?h:null,I=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?I!==y&&(r.track({type:3,doc:f}),_=!0):this.Ia(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.ua(f,c)>0||u&&this.ua(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||u)&&(a=!0)),_&&(f?(o=o.add(f),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,h)=>function(f,I){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return y(f)-y(I)}(l.type,h.type)||this.ua(l.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,u=c!==this._a;return this._a=c,o.length!==0||u?{snapshot:new _e(this.query,t.ca,i,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new wo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=D(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new Yc(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new Xc(r))}),n}Ra(t){this.oa=t.hs,this.aa=D();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return _e.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class em{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class nm{constructor(t){this.key=t,this.ma=!1}}class rm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Ie(a=>mc(a),Er),this.pa=new Map,this.ya=new Set,this.wa=new B(R.comparator),this.Sa=new Map,this.ba=new ii,this.Da={},this.Ca=new Map,this.va=ge.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function sm(e,t){const n=pm(e);let r,s;const i=n.ga.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await Rp(n.localStore,yt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await im(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&$c(n.remoteStore,o)}return s}async function im(e,t,n,r,s){e.Ma=(h,d,f)=>async function(y,_,v,S){let M=_.view.ha(v);M.Xi&&(M=await yo(y.localStore,_.query,!1).then(({documents:wn})=>_.view.ha(wn,M)));const wt=S&&S.targetChanges.get(_.targetId),Tn=S&&S.targetMismatches.get(_.targetId)!=null,Jt=_.view.applyChanges(M,y.isPrimaryClient,wt,Tn);return Ao(y,_.targetId,Jt.da),Jt.snapshot}(e,h,d,f);const i=await yo(e.localStore,t,!0),o=new tm(t,i.hs),a=o.ha(i.documents),c=yn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);Ao(e,n,u.da);const l=new em(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function om(e,t){const n=V(e),r=n.ga.get(t),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!Er(i,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ws(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),zc(n.remoteStore,r.targetId),Is(n,r.targetId)}).catch(pn)):(Is(n,r.targetId),await ws(n.localStore,r.targetId,!0))}async function am(e,t,n){const r=mm(e);try{const s=await function(o,a){const c=V(o),u=G.now(),l=a.reduce((f,I)=>f.add(I.key),D());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let I=Ct(),y=D();return c.os.getEntries(f,l).next(_=>{I=_,I.forEach((v,S)=>{S.isValidDocument()||(y=y.add(v))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,I)).next(_=>{h=_;const v=[];for(const S of a){const M=Vf(S,h.get(S.key).overlayedDocument);M!=null&&v.push(new Xt(S.key,M,oc(M.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,v,a)}).next(_=>{d=_;const v=_.applyToLocalDocumentSet(h,y);return c.documentOverlayCache.saveOverlays(f,_.batchId,v)})}).then(()=>({batchId:d.batchId,changes:yc(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.Da[o.currentUser.toKey()];u||(u=new B(k)),u=u.insert(a,c),o.Da[o.currentUser.toKey()]=u}(r,s.batchId,n),await En(r,s.changes),await Cr(r.remoteStore)}catch(s){const i=di(s,"Failed to persist write");n.reject(i)}}async function Jc(e,t){const n=V(e);try{const r=await wp(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?L(o.ma):s.removedDocuments.size>0&&(L(o.ma),o.ma=!1))}),await En(n,r,t)}catch(r){await pn(r)}}function Io(e,t,n){const r=V(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=V(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.Q_)d.U_(a)&&(u=!0)}),u&&fi(c)}(r.eventManager,t),s.length&&r.fa.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cm(e,t,n){const r=V(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Sa.get(t),i=s&&s.key;if(i){let o=new B(R.comparator);o=o.insert(i,rt.newNoDocument(i,b.min()));const a=D().add(i),c=new Ar(b.min(),new Map,new B(k),o,a);await Jc(r,c),r.wa=r.wa.remove(i),r.Sa.delete(t),pi(r)}else await ws(r.localStore,t,!1).then(()=>Is(r,t,n)).catch(pn)}async function um(e,t){const n=V(e),r=t.batch.batchId;try{const s=await Tp(n.localStore,t);tu(n,r,null),Zc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await En(n,s)}catch(s){await pn(s)}}async function lm(e,t,n){const r=V(e);try{const s=await function(o,a){const c=V(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(L(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);tu(r,t,n),Zc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await En(r,s)}catch(s){await pn(s)}}function Zc(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function tu(e,t,n){const r=V(e);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Da[r.currentUser.toKey()]=s}}function Is(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||eu(e,r)})}function eu(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(zc(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),pi(e))}function Ao(e,t,n){for(const r of n)r instanceof Xc?(e.ba.addReference(r.key,t),hm(e,r)):r instanceof Yc?(E("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||eu(e,r.key)):C()}function hm(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(E("SyncEngine","New document in limbo: "+n),e.ya.add(r),pi(e))}function pi(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new R(j.fromString(t)),r=e.va.next();e.Sa.set(r,new nm(n)),e.wa=e.wa.insert(n,r),$c(e.remoteStore,new Pt(yt(fc(n.path)),r,"TargetPurposeLimboResolution",Xs._e))}}async function En(e,t,n){const r=V(e),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u?.fromCache?"not-current":"current"),u){s.push(u);const l=ai.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,u){const l=V(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.qi,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.Qi,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!mn(h))throw h;E("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.ns.get(d),I=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(I);l.ns=l.ns.insert(d,y)}}}(r.localStore,i))}async function dm(e,t){const n=V(e);if(!n.currentUser.isEqual(t)){E("SyncEngine","User change. New user:",t.toKey());const r=await jc(n.localStore,t);n.currentUser=t,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new w(m.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await En(n,r.us)}}function fm(e,t){const n=V(e),r=n.Sa.get(t);if(r&&r.ma)return D().add(r.key);{let s=D();const i=n.pa.get(t);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function pm(e){const t=V(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=fm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cm.bind(null,t),t.fa.u_=Yp.bind(null,t.eventManager),t.fa.xa=Jp.bind(null,t.eventManager),t}function mm(e){const t=V(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=um.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lm.bind(null,t),t}class Ro{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Rr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Ep(this.persistence,new yp,t.initialUser,this.serializer)}createPersistence(t){return new mp(oi.Hr,this.serializer)}createSharedClientState(t){return new Cp}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Io(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dm.bind(null,this.syncEngine),await Gp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wp}()}createDatastore(t){const n=Rr(t.databaseInfo.databaseId),r=function(i){return new Dp(i)}(t.databaseInfo);return function(i,o,a,c){return new kp(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Mp(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Io(this.syncEngine,n,0),function(){return Eo.D()?new Eo:new Pp}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new rm(s,i,o,a,c,u);return l&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=V(r);E("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await vn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class _m{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):Et("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=di(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Kr(e,t){e.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function So(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Em(e);E("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>To(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>To(t.remoteStore,s)),e._onlineComponents=t}function vm(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Em(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){E("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!vm(n))throw n;de("Error using user provided cache. Falling back to memory cache: "+n),await Kr(e,new Ro)}}else E("FirestoreClient","Using default OfflineComponentProvider"),await Kr(e,new Ro);return e._offlineComponents}async function nu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(E("FirestoreClient","Using user provided OnlineComponentProvider"),await So(e,e._uninitializedComponentsProvider._online)):(E("FirestoreClient","Using default OnlineComponentProvider"),await So(e,new gm))),e._onlineComponents}function Tm(e){return nu(e).then(t=>t.syncEngine)}async function wm(e){const t=await nu(e),n=t.eventManager;return n.onListen=sm.bind(null,t.syncEngine),n.onUnlisten=om.bind(null,t.syncEngine),n}function Im(e,t,n={}){const r=new At;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const l=new _m({next:d=>{o.enqueueAndForget(()=>Xp(i,h)),d.fromCache&&c.source==="server"?u.reject(new w(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Zp(a,l,{includeMetadataChanges:!0,Z_:!0});return Hp(i,h)}(await wm(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function ru(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e,t,n){if(!n)throw new w(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Am(e,t,n,r){if(t===!0&&r===!0)throw new w(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Po(e){if(!R.isDocumentKey(e))throw new w(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function bo(e){if(R.isDocumentKey(e))throw new w(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Pr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function rn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pr(e);throw new w(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Vo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Am("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ru((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(m.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class br{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fd;switch(r.type){case"firstParty":return new qd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Co.get(n);r&&(E("ComponentProvider","Removing Datastore"),Co.delete(n),r.terminate())}(this),Promise.resolve()}}function Rm(e,t,n,r={}){var s;const i=(e=rn(e,br))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&de("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=nt.MOCK_USER;else{a=fl(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nt(u)}e._authCredentials=new jd(new nc(a,c))}}/**
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
 */class Re{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Re(this.firestore,t,this._query)}}class ct{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class Dt extends Re{constructor(t,n,r){super(t,n,fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new R(t))}withConverter(t){return new Dt(this.firestore,t,this._path)}}function iu(e,t,...n){if(e=le(e),su("collection","path",t),e instanceof br){const r=j.fromString(t,...n);return bo(r),new Dt(e,null,r)}{if(!(e instanceof ct||e instanceof Dt))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return bo(r),new Dt(e.firestore,null,r)}}function Sm(e,t,...n){if(e=le(e),arguments.length===1&&(t=rc.newId()),su("doc","path",t),e instanceof br){const r=j.fromString(t,...n);return Po(r),new ct(e,null,new R(r))}{if(!(e instanceof ct||e instanceof Dt))throw new w(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(j.fromString(t,...n));return Po(r),new ct(e.firestore,e instanceof Dt?e.converter:null,new R(r))}}/**
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
 */class Cm{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Bc(this,"async_queue_retry"),this._u=()=>{const n=Gr();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Gr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new At;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!mn(t))throw t;E("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Et("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const s=hi.createAndSchedule(this,t,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&C()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class mi extends br{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new Cm}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||cu(this),this._firestoreClient.terminate()}}function ou(e,t){const n=typeof e=="object"?e:Eh(),r=typeof e=="string"?e:t||"(default)",s=gh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hl("firestore");i&&Rm(s,...i)}return s}function au(e){return e._firestoreClient||cu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function cu(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new nf(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ru(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new ym(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ye(ot.fromBase64String(t))}catch(n){throw new w(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ye(ot.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class gi{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class uu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=/^__.*__$/;class bm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Xt(t,this.data,this.fieldMask,n,this.fieldTransforms):new _n(t,this.data,n,this.fieldTransforms)}}function lu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class yi{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new yi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.mu(t),s}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Zn(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(lu(this.du)&&Pm.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Vm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Rr(t)}Su(t,n,r,s=!1){return new yi({du:t,methodName:n,wu:r,path:J.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(e){const t=e._freezeSettings(),n=Rr(e._databaseId);return new Vm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Dm(e,t,n,r,s,i={}){const o=e.Su(i.merge||i.mergeFields?2:0,t,n,s);pu("Data must be an object, but it was:",o,r);const a=du(r,o);let c,u;if(i.merge)c=new dt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Nm(t,h,n);if(!o.contains(d))throw new w(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Om(l,d)||l.push(d)}c=new dt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new bm(new ht(a),c,u)}function xm(e,t,n,r=!1){return vi(n,e.Su(r?4:3,t))}function vi(e,t){if(fu(e=le(e)))return pu("Unsupported field value:",t,e),du(e,t);if(e instanceof uu)return function(r,s){if(!lu(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=vi(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Af(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=G.fromDate(r);return{timestampValue:Yn(s.serializer,i)}}if(r instanceof G){const i=new G(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yn(s.serializer,i)}}if(r instanceof _i)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ye)return{bytesValue:xc(s.serializer,r._byteString)};if(r instanceof ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:si(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${Pr(r)}`)}(e,t)}function du(e,t){const n={};return sc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(e,(r,s)=>{const i=vi(s,t.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof G||e instanceof _i||e instanceof ye||e instanceof ct||e instanceof uu)}function pu(e,t,n){if(!fu(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pr(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function Nm(e,t,n){if((t=le(t))instanceof gi)return t._internalPath;if(typeof t=="string")return mu(e,t);throw Zn("Field path arguments must be of type string or ",e,!1,void 0,n)}const km=new RegExp("[~\\*/\\[\\]]");function mu(e,t,n){if(t.search(km)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gi(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zn(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new w(m.INVALID_ARGUMENT,a+e+c)}function Om(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class gu{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Mm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_u("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Mm extends gu{data(){return super.data()}}function _u(e,t){return typeof t=="string"?mu(e,t):t instanceof gi?t._internalPath:t._delegate._internalPath}/**
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
 */function Lm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ei{}class Fm extends Ei{}function yu(e,t,...n){let r=[];t instanceof Ei&&r.push(t),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof wi).length,a=i.filter(c=>c instanceof Ti).length;if(o>1||o>0&&a>0)throw new w(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class Ti extends Fm{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Ti(t,n,r)}_apply(t){const n=this._parse(t);return vu(t._query,n),new Re(t.firestore,t.converter,gs(t._query,n))}_parse(t){const n=hu(t.firestore);return function(i,o,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new w(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){xo(h,l);const f=[];for(const I of h)f.push(Do(c,i,I));d={arrayValue:{values:f}}}else d=Do(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||xo(h,l),d=xm(a,o,h,l==="in"||l==="not-in");return Q.create(u,l,d)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class wi extends Ei{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new wi(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)vu(o,c),o=gs(o,c)}(t._query,n),new Re(t.firestore,t.converter,gs(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Do(e,t,n){if(typeof(n=le(n))=="string"){if(n==="")throw new w(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pc(t)&&n.indexOf("/")!==-1)throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(j.fromString(n));if(!R.isDocumentKey(r))throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return to(e,new R(r))}if(n instanceof ct)return to(e,n._key);throw new w(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pr(n)}.`)}function xo(e,t){if(!Array.isArray(e)||e.length===0)throw new w(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function vu(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class jm{convertValue(t,n="none"){switch(Kt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Gt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw C()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return we(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new _i(z(t.latitude),z(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Js(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Je(t));default:return null}}convertTimestamp(t){const n=Nt(t);return new G(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=j.fromString(t);L(Fc(r));const s=new Ze(r.get(1),r.get(3)),i=new R(r.popFirst(5));return s.isEqual(n)||Et(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Um(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class Dn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bm extends gu{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(_u("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mn extends Bm{data(t={}){return super.data(t)}}class qm{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Dn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Mn(this._firestore,this._userDataWriter,r.key,r,new Dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Mn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Dn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Mn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Dn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:$m(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $m(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}class zm extends jm{constructor(t){super(),this.firestore=t}convertBytes(t){return new ye(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Eu(e){e=rn(e,Re);const t=rn(e.firestore,mi),n=au(t),r=new zm(t);return Lm(e._query),Im(n,e._query).then(s=>new qm(t,r,e,s))}function Qm(e,t,n){e=rn(e,ct);const r=rn(e.firestore,mi),s=Um(e.converter,t,n);return Gm(r,[Dm(hu(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,Rt.none())])}function Gm(e,t){return function(r,s){const i=new At;return r.asyncQueue.enqueueAndForget(async()=>am(await Tm(r),s,i)),i.promise}(au(e),t)}(function(t,n=!0){(function(s){Te=s})(vh),jn(new Be("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new mi(new Ud(r.getProvider("auth-internal")),new zd(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),se(Hi,"4.4.3",t),se(Hi,"4.4.3","esm2017")})();const Km={apiKey:"AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",authDomain:"markit-a6d25.firebaseapp.com",projectId:"markit-a6d25",storageBucket:"markit-a6d25.appspot.com",messagingSenderId:"103527109310",appId:"1:103527109310:web:487002e25ba0676f3404ef"},je=Xo(Km),Tu=ou(je),wu=async e=>{const t=yu(iu(Tu,`users/${e}/Collections`)),r=(await Eu(t)).docs.map(s=>({id:s.id,...s.data()}));return console.log("fetchedCollections",r),r};wu("uid");const sn=Bo()(el(e=>({user:null,setUser:t=>e({user:t}),logout:()=>e({user:null})}),{name:"auth-storage-local"})),A=Bo(e=>({currentStep:0,setCurrentStep:t=>e(n=>({currentStep:typeof t=="function"?t(n.currentStep):t})),isCenterButtonEnabled:!0,setIsCenterButtonEnabled:t=>e({isCenterButtonEnabled:t}),leftButtonIcon:"ep:back",setCenterButtonIcon:t=>e({centerButtonIcon:t}),centerButtonIcon:"tabler:plus",setLeftButtonIcon:t=>e({leftButtonIcon:t}),titlePreview:"",setTitlePreview:t=>e({titlePreview:t}),descriptionPreview:"",setDescriptionPreview:t=>e({descriptionPreview:t}),selectedCollection:"",setSelectedCollection:t=>e({selectedCollection:t}),initializeCollections:async t=>{const n=await wu(t);n.length>0&&e({selectedCollection:n[0].id})},QRCode:"",setQRCode:t=>e({QRCode:t}),dumpWorkingItem:()=>{e({QRCode:"",actionType:"",title:"",description:"",photo1:"",photo2:"",photo3:"",titlePreview:"",descriptionPreview:""})},actionType:"",setActionType:t=>e({actionType:t}),photo1:"",setPhoto1:t=>e({photo1:t}),photo2:"",setPhoto2:t=>e({photo2:t}),photo3:"",setPhoto3:t=>e({photo3:t}),title:"",setTitle:t=>e({title:t}),description:"",setDescription:t=>e({description:t}),priceRange:[0,500],setPriceRange:t=>e({priceRange:t})})),Wm=ou(je),Hm=()=>{const e=sn(h=>h.user),t=A(h=>h.QRCode),n=A(h=>h.selectedCollection),r=A(h=>h.actionType),s=A(h=>h.photo1),i=A(h=>h.photo2),o=A(h=>h.photo3),a=A(h=>h.title),c=A(h=>h.description),u=A(h=>h.priceRange);return async()=>{if(!e){console.error("User is not logged in");return}const h={QRCode:t,actionType:r,title:a,description:c,photos:[s,i,o].filter(Boolean),priceRange:{min:u[0],max:u[1]},createdAt:new Date,updatedAt:new Date},d=Sm(Wm,`users/${e.uid}/Collections/${n}/Items`,t);try{await Qm(d,h),console.log("Item submitted successfully")}catch(f){console.error("Error submitting item:",f)}}};function Xm(){const e=U.useRef(null),t=A(u=>u.isCenterButtonEnabled),n=A(u=>u.centerButtonIcon),r=A(u=>u.setCurrentStep),s=t?"green":"gray",i=Hm(),o=A(u=>u.setPhoto1),a=u=>{const l=u.target.files?.[0];l&&(console.log("Captured file:",l),o(URL.createObjectURL(l)))},c=()=>{if(n==="tabler:camera"&&t){e.current?.click();return}(t&&n==="tabler:arrow-right"||n==="tabler:plus")&&r(u=>u===9?0:u+1),t&&n==="ph:check-bold"&&(i(),r(0))};return p.jsxs(p.Fragment,{children:[p.jsx("input",{type:"file",accept:"image/*",capture:"environment",onChange:a,style:{display:"none"},ref:e}),p.jsx("button",{className:`border rounded-2xl ${t?"":"cursor-not-allowed"}`,onClick:c,disabled:!t,children:n&&p.jsx(tr,{icon:n,height:76,width:112,color:s})})]})}function Ym(){const e=A(r=>r.leftButtonIcon),t=A(r=>r.setCurrentStep),n=()=>{e==="ep:back"&&t(r=>r-1)};return p.jsx("button",{onClick:n,children:e&&p.jsx(tr,{icon:e,height:46,width:52})})}function Jm(){return p.jsxs("div",{className:"flex justify-evenly items-center border-t fixed bottom-0 z-10 bg-ltbg1 dark:bg-dkbg1 w-full h-[12vh]",children:[p.jsx(Ym,{}),p.jsx(Xm,{}),p.jsx("button",{children:p.jsx(tr,{icon:"charm:menu-hamburger",height:46,width:52,className:"dark:text-black text-white"})})]})}const No=()=>{const e=sn(h=>h.user),t=A(h=>h.initializeCollections),n=A(h=>h.setSelectedCollection),r=A(h=>h.selectedCollection),[s,i]=U.useState([]),[o,a]=U.useState(!1),c=U.useRef(null);U.useEffect(()=>{e?.uid&&t(e.uid)},[e,t]),U.useEffect(()=>{const h=d=>{c.current&&!c.current.contains(d.target)&&a(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[c]);const u=()=>a(!o),l=h=>{n(h),a(!1)};return p.jsxs("div",{className:"relative mb-4",ref:c,children:[p.jsxs("div",{className:"border rounded-full flex flex-row w-72 mx-auto p-2 justify-between text-center cursor-pointer",onClick:u,children:[p.jsx("div",{className:"flex overflow-clip",children:p.jsx("h3",{className:"px-2 overflow-clip",children:r||"Select a Collection"})}),p.jsx("div",{className:"w-16 flex justify-center items-center border-l-2",children:p.jsx(tr,{icon:"bi:caret-down-fill",height:20,width:20})})]}),o&&s.length>0&&p.jsx("div",{className:"absolute z-10 w-72 border mt-1 rounded-md",children:s.map(h=>p.jsx("div",{onClick:()=>l(h.ownerId),className:"p-2 hover:bg-gray-100 cursor-pointer",children:h.collectionName},h.ownerId))})]})},Iu=({photos:e,title:t,priceRange:n,actionType:r,description:s})=>p.jsxs("div",{className:"flex flex-col w-full mx-4 max-w-sm rounded-3xl text-center justify-stretch border",children:[p.jsx("div",{className:"w-full aspect-square rounded-t-3xl flex items-center",children:p.jsx("img",{className:"w-full h-full object-cover rounded-t-3xl",src:e[0],alt:t})}),p.jsx("div",{className:"py-2 border",children:t}),p.jsxs("div",{className:"border flex flex-row justify-between rounded-b-3xl",children:[p.jsxs("div",{className:"border py-2 text-center w-1/3 rounded-bl-3xl",children:["$",typeof n=="object"?n.min:n]}),p.jsx("div",{className:"border py-2 action-type text-center w-2/3 rounded-br-3xl",children:r})]})]}),Zm=()=>{const e=A(r=>r.setQRCode),t=()=>`${Math.floor((1+Math.random())*16777216).toString(16).substring(1)}`,n=()=>{const r=t();e(r),console.log("QR code set to",r)};return p.jsxs("div",{className:"flex flex-col text-center items-center",children:[p.jsx("div",{className:"aspect-square w-[100vw] bg-ltbg1 dark:bg-dkbg1 mb-2 max-w-md",onClick:n}),p.jsx("p",{children:"Scan a barcode or MarkIt sticker to begin."})]})},tg=()=>{const{actionType:e,setActionType:t}=A(s=>({actionType:s.actionType,setActionType:s.setActionType})),n=s=>{const i=s.currentTarget.textContent?.toLowerCase();i&&t(i)},r=s=>`border p-2 rounded-full ${e===s?"bg-green-500":"bg-ltbg2 dark:bg-dkbg2"}`;return p.jsxs("div",{className:"flex flex-col gap-1 w-full text-center p-8 ",children:[p.jsx("h3",{children:"Mark this item as:"}),p.jsxs("div",{className:"flex flex-col justify-evenly gap-3 ",children:[p.jsx("button",{className:r("store"),onClick:n,children:"Store"}),p.jsx("button",{className:r("rent"),onClick:n,children:"Rent"}),p.jsx("button",{className:r("sell"),onClick:n,children:"Sell"})]})]})},eg=()=>{const e=A(t=>t.photo1);return A(t=>t.photo2),A(t=>t.photo3),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Take Photo"}),p.jsx("div",{className:"mx-8 rounded-full flex justify-center gap-4",children:p.jsx("div",{className:`h-8 w-8 rounded-full border ${e?"bg-black":"bg-white"}`})})]})},ng=({photos:e,title:t})=>p.jsxs("div",{className:"flex items-center flex-col mb-4",children:[p.jsx("div",{className:"aspect-square bg-slate-100 mb-2",children:p.jsx("img",{src:e[0],alt:t})}),p.jsx("div",{className:"flex justify-center",children:p.jsx("div",{className:"w-4 h-4 bg-dkbg2 dark:bg-ltbg2 border rounded-full mx-0.5"})})]}),xn=({photos:e,title:t,priceRange:n,actionType:r,description:s})=>{const i=typeof n=="object"?n.max:n;return p.jsxs("div",{className:"flex relative flex-col w-[90vw] text-center justify-start h-full md:w-full md:box-border md:px-4 py-4",children:[p.jsx("div",{className:"py-2 border mb-4",children:t}),p.jsx(ng,{photos:e,title:t}),p.jsx("div",{className:"border py-2 mb-4 action-type text-center rounded-3xl",children:r}),p.jsxs("div",{className:"border flex flex-row justify-between mb-4",children:[p.jsx("div",{className:"border py-2 text-center w-[30%]",children:i}),p.jsx("div",{className:"border py-2 action-type text-center w-[70%]",children:"location"})]}),p.jsx("p",{children:s})]})},rg=({rows:e})=>{const{currentStep:t,titlePreview:n,setTitlePreview:r,setTitle:s}=A(c=>({currentStep:c.currentStep,titlePreview:c.titlePreview,setTitlePreview:c.setTitlePreview,setTitle:c.setTitle})),[i,o]=U.useState("");U.useEffect(()=>{o(n)},[n]);const a=c=>{const u=c.target.value;o(u),r(u)};return U.useEffect(()=>{t===7&&s(n)},[t,n,s]),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Enter Title"}),p.jsx("textarea",{name:"title",id:"title",rows:e,value:i,onChange:a,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},sg=({rows:e})=>{const{currentStep:t,descriptionPreview:n,setDescriptionPreview:r,setDescription:s}=A(c=>({currentStep:c.currentStep,descriptionPreview:c.descriptionPreview,setDescriptionPreview:c.setDescriptionPreview,setDescription:c.setDescription})),[i,o]=U.useState("");U.useEffect(()=>{o(n)},[n]);const a=c=>{const u=c.target.value;o(u),r(u)};return U.useEffect(()=>{t===8&&s(n)},[t,n,s]),p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2",children:"Enter Description"}),p.jsx("textarea",{name:"description",id:"description",rows:e,value:i,onChange:a,className:"bg-white p-4 w-stretch rounded-3xl border mx-8"})]})},ig=({min:e,max:t,step:n,instructions:r})=>{const s=A(d=>d.priceRange),i=A(d=>d.setPriceRange),[o,a]=U.useState(s[0]),[c,u]=U.useState(s[1]),l=d=>{const f=Math.min(parseInt(d.target.value,10),c-n);a(f),i([f,c])},h=d=>{const f=Math.max(parseInt(d.target.value,10),o+n);u(f),i([o,f])};return p.jsxs("div",{className:"h-fit w-screen mx-auto rounded-t-3xl text-center bg-ltbg1 dark:bg-dkbg1 fixed bottom-[12vh] py-8 border-t flex flex-col",children:[p.jsx("h2",{className:"mb-2 px-4",children:r}),p.jsxs("div",{style:{padding:"20px"},children:[p.jsx("input",{type:"range",min:e,max:t,value:o,step:n,onChange:l,className:"slider",style:{zIndex:o>t-(t-e)/2?"5":"1"}}),p.jsx("input",{type:"range",min:e,max:t,value:c,step:n,onChange:h,className:"slider"}),p.jsx("div",{className:"text-center",children:p.jsxs("p",{children:["Price range: $",o," - $",c]})})]})]})},og="modulepreload",ag=function(e){return"/"+e},ko={},Oo=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=ag(o),o in ko)return;ko[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":og,a||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),a)return new Promise((h,d)=>{l.addEventListener("load",h),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},cg=({message:e})=>{const t=sn(d=>d.user),n=sn(d=>d.setUser),[r,s]=U.useState(!1),[i,o]=U.useState(""),[a,c]=U.useState({email:"",password:""});async function u(){s(!0),console.log(je);const{signInWithEmailAndPassword:d,getAuth:f}=await Oo(()=>import("./index.esm.Bxfn6aIv.js"),__vite__mapDeps([0,1,2,3])),I=f(je);console.log(I);const y=await d(I,a.email,a.password).catch(_=>{if(s(!1),_.constructor!==Wt)throw alert("fix this"),new Error("this is broke in a special way");_.code==="auth/invalid-email"&&alert("Invalid Email"),_.code==="auth/missing-password"&&alert("Missing Password"),_.code==="auth/wrong-password"&&alert("Incorrect Password"),_.code==="auth/too-many-requests"&&alert("Access to this account has been temporarily disabled due to many failed login attempts."),console.log(_)});if(y&&y.user){const _={uid:y.user.uid,email:y.user.email,username:y.user.displayName};s(!0),n(_)}}const l=d=>{const{name:f,value:I}=d.target;c(y=>({...y,[f]:I}))},h=async()=>{const{getAuth:d}=await Oo(()=>import("./index.esm.Bxfn6aIv.js"),__vite__mapDeps([0,1,2,3]));d(je).signOut(),n(null)};return U.useEffect(()=>{if(r){const d=setInterval(()=>{o(f=>f.length>=3?"":f+".")},500);return()=>clearInterval(d)}}),t&&t.uid?p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsx("div",{className:"text-center",children:p.jsx("button",{onClick:h,className:"mt-4 px-4 py-2 bg-blue-500 text-white rounded-md",children:"Logout"})})}):r?p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsx("div",{className:"text-center",children:p.jsxs("div",{className:"text-xl",children:["Signing You In",i]})})}):p.jsx("div",{className:"flex justify-center items-center h-screen",children:p.jsxs("div",{className:"text-center flex flex-col ",children:[p.jsx("div",{className:"mb-4",children:e}),p.jsxs("div",{className:"flex flex-col",children:[p.jsx("input",{type:"email",name:"email",placeholder:"email",value:a.email,onChange:l,className:"px-4 py-2 border rounded-md mb-2"}),p.jsx("input",{type:"password",name:"password",placeholder:"password",minLength:6,value:a.password,onChange:l,className:"px-4 py-2 border rounded-md mb-2"}),p.jsx("div",{children:p.jsx("button",{onClick:u,className:"px-4 py-2 bg-blue-500 text-white rounded-md",children:"Login"})})]})]})})},ug=({photos:e,title:t,priceRange:n,actionType:r,description:s})=>p.jsxs("div",{className:"flex w-full items-center justify-between p-4 border-b h-32",children:[p.jsx("img",{src:e[0],alt:t,className:"w-20 h-20 object-cover mr-4"}),p.jsxs("div",{className:"flex-grow overflow-hidden",children:[p.jsx("h5",{className:"text-lg font-bold truncate",children:t}),p.jsx("p",{className:"text-ellipsis overflow-hidden line-clamp-2",children:s})]}),p.jsxs("div",{className:"text-right pl-2",children:[p.jsx("div",{className:"text-sm uppercase",children:r}),p.jsxs("div",{className:"font-bold whitespace-nowrap",children:["$",typeof n=="number"?n:`${n.min}-${n.max}`]})]})]}),lg=({userId:e})=>{const[t,n]=U.useState([]),[r,s]=U.useState(!1),i=A(a=>a.selectedCollection),o=i;return U.useEffect(()=>{(async()=>{try{console.log("collectionId",o);const c=yu(iu(Tu,`users/${e}/Collections/${o}/Items`)),l=(await Eu(c)).docs.map(h=>({...h.data(),id:h.id}));console.log("fetchedItems",l),n(l)}catch(c){console.error("Error fetching items:",c)}})()},[e,o,i]),p.jsxs("div",{className:"flex flex-wrap w-screen flex-row justify-center gap-4",children:[t.map(a=>r?p.jsx(ug,{...a},a.id):p.jsx(Iu,{...a},a.id)),p.jsx("button",{onClick:()=>s(!r),className:"fixed bottom-[13vh] right-2 p-4 border bg-ltbg2 dark:bg-dkbg2 text-white rounded-full shadow-lg",children:r?p.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}):p.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 36 36",stroke:"currentColor",children:[p.jsx("rect",{x:"5",y:"5",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"21",y:"5",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"5",y:"21",width:"12",height:"12",fill:"currentColor"}),p.jsx("rect",{x:"21",y:"21",width:"12",height:"12",fill:"currentColor"})]})})]})},hg=()=>{const e=A(v=>v.selectedCollection),t=A(v=>v.setSelectedCollection),n=A(v=>v.setIsCenterButtonEnabled),r=A(v=>v.QRCode),s=A(v=>v.setLeftButtonIcon),i=A(v=>v.dumpWorkingItem),o=A(v=>v.actionType),a=A(v=>v.setCenterButtonIcon),c=A(v=>v.title),u=A(v=>v.setTitle),l=A(v=>v.description),h=A(v=>v.titlePreview),d=A(v=>v.photo1);A(v=>v.photo2),A(v=>v.photo3);const f=A(v=>v.descriptionPreview),I=A(v=>v.setDescription),y=A(v=>v.priceRange);return{0:()=>{i(),a("tabler:plus"),console.log("selectedCollection",e),t(e),n(!0),s("material-symbols:search")},1:()=>{s("ep:back"),a("tabler:arrow-right"),n(!!(e&&r!==""))},2:()=>{n(!!(e&&r!==""&&o))},3:()=>{n(!0),e&&r!==""&&o&&d?(a("tabler:arrow-right"),n(!0)):a("tabler:camera")},4:()=>{n(!0),e&&r!==""&&o&&d?(a("tabler:arrow-right"),n(!0)):a("tabler:camera")},5:()=>{u(h),n(!!(e&&r!==""&&o&&d&&c&&f!==""))},6:()=>{I(f),n(!!(e&&r!==""&&o&&d&&c&&l))},7:()=>{a("ph:check-bold"),e&&r!==""&&o&&d&&c&&l&&y.length>0?n(!0):n(!1)}}},dg=()=>{const e=A(u=>u.currentStep),t=A(u=>u.actionType),n=A(u=>u.photo1),r=A(u=>u.title),s=A(u=>u.description),i=A(u=>u.priceRange),o=sn(u=>u.user),a=A(u=>u.QRCode);A(u=>u.selectedCollection);const c={0:()=>o&&o.uid==="45GunbHNtcZTq0X3GOpQEXXbIw43"?[p.jsx(No,{}),p.jsx(lg,{userId:o.uid})]:[p.jsx(cg,{})],1:()=>[p.jsx(Zm,{}),p.jsx(No,{})],2:()=>[p.jsx(tg,{})],3:()=>[p.jsx(Iu,{id:a,actionType:t,photos:[n],priceRange:20,title:r}),p.jsx(eg,{})],4:()=>[p.jsx(xn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(rg,{rows:2})],5:()=>[p.jsx(xn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(sg,{rows:4})],6:()=>[p.jsx(xn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a}),p.jsx(ig,{instructions:"Select acceptable price minimum and maximum.",min:0,max:500,step:5})],7:()=>[p.jsx(xn,{actionType:t,photos:[n],priceRange:i[1],title:r,description:s,id:a})]};return c[e]?c[e]():[]},Vg=()=>{const e=dg(),t=A(r=>r.currentStep),n=hg();return U.useEffect(()=>{const r=n[t];typeof r=="function"&&r()},[t,n]),p.jsxs("div",{className:"mx-auto bg-ltbg1 dark:bg-dkbg2 relative top-[7.5vh] box-border",children:[p.jsx("div",{className:"mb-[12vh] pt-[4vh] pb-[16vh] min-h-[80.5vh] flex items-center flex-col justify-evenly overflow-scroll",children:e.map((r,s)=>p.jsx(Mo.Fragment,{children:r},s))}),p.jsx(Jm,{})]})};export{Be as C,Go as E,Wt as F,Ko as L,Vg as M,vh as S,gh as _,Ag as a,il as b,_g as c,Wr as d,Rg as e,ll as f,le as g,Eh as h,N as i,yg as j,Eg as k,jn as l,vg as m,ue as n,Tg as o,Sg as p,Ig as q,se as r,wg as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/index.esm.Bxfn6aIv.js","_astro/jsx-runtime.CfVuv60F.js","_astro/index.BG0d_8j_.js","_astro/iconify.Gi37SqeE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
