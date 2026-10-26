import{o as Sc}from"./vendor-misc-BzC_QqIU.js";const Vc=()=>{};var io={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},bc=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[e++];t[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[e++],u=r[e++],l=r[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[n++]=String.fromCharCode(55296+(h>>10)),t[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[e++],u=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},la={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],u=s+1<r.length,l=u?r[s+1]:0,h=s+2<r.length,f=h?r[s+2]:0,g=o>>2,v=(o&3)<<4|l>>4;let I=(l&15)<<2|f>>6,P=f&63;h||(P=64,u||(I=64)),n.push(e[g],e[v],e[I],e[P])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(ca(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):bc(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=e[r.charAt(s++)],l=s<r.length?e[r.charAt(s)]:0;++s;const f=s<r.length?e[r.charAt(s)]:64;++s;const v=s<r.length?e[r.charAt(s)]:64;if(++s,o==null||l==null||f==null||v==null)throw new Dc;const I=o<<2|l>>4;if(n.push(I),f!==64){const P=l<<4&240|f>>2;if(n.push(P),v!==64){const b=f<<6&192|v;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Dc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(r){const t=ca(r);return la.encodeByteArray(t,!0)},Xn=function(r){return Nc(r).replace(/\./g,"")},kc=function(r){try{return la.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oc=()=>xc().__FIREBASE_DEFAULTS__,Mc=()=>{if(typeof process>"u"||typeof io>"u")return;const r=io.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Lc=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&kc(r[1]);return t&&JSON.parse(t)},Ai=()=>{try{return Vc()||Oc()||Mc()||Lc()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Fc=r=>{var t,e;return(e=(t=Ai())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[r]},Uc=r=>{const t=Fc(r);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},ha=()=>{var r;return(r=Ai())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(r){return r.endsWith(".cloudworkstations.dev")}async function jc(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function qc(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Xn(JSON.stringify(e)),Xn(JSON.stringify(u)),""].join(".")}const en={};function $c(){const r={prod:[],emulator:[]};for(const t of Object.keys(en))en[t]?r.emulator.push(t):r.prod.push(t);return r}function zc(r){let t=document.getElementById(r),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),e=!0),{created:e,element:t}}let so=!1;function Hc(r,t){if(typeof window>"u"||typeof document>"u"||!wi(window.location.host)||en[r]===t||en[r]||so)return;en[r]=t;function e(I){return`__firebase__banner__${I}`}const n="__firebase__banner",o=$c().prod.length>0;function u(){const I=document.getElementById(n);I&&I.remove()}function l(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,P){I.setAttribute("width","24"),I.setAttribute("id",P),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function f(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{so=!0,u()},I}function g(I,P){I.setAttribute("id",P),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function v(){const I=zc(n),P=e("text"),b=document.getElementById(P)||document.createElement("span"),k=e("learnmore"),D=document.getElementById(k)||document.createElement("a"),G=e("preprendIcon"),B=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const z=I.element;l(z),g(D,k);const tt=f();h(B,G),z.append(B,b,D,tt),document.body.appendChild(z)}o?(b.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kc(){var r;const t=(r=Ai())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qc(){return!Kc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wc(){try{return typeof indexedDB=="object"}catch{return!1}}function Xc(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="FirebaseError";class be extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Yc,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,da.prototype.create)}}class da{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Jc(o,n):"Error",l=`${this.serviceName}: ${u} (${s}).`;return new be(s,l,n)}}function Jc(r,t){return r.replace(Zc,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Zc=/\{\$([^}]+)}/g;function Yn(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const o=r[s],u=t[s];if(oo(o)&&oo(u)){if(!Yn(o,u))return!1}else if(o!==u)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function oo(r){return r!==null&&typeof r=="object"}/**
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
 */function ae(r){return r&&r._delegate?r._delegate:r}class an{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const se="[DEFAULT]";/**
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
 */class tl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Bc;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nl(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(t=se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=se){return this.instances.has(t)}getOptions(t=se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&u.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),o=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:el(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=se){return this.component?this.component.multipleInstances?t:se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function el(r){return r===se?void 0:r}function nl(r){return r.instantiationMode==="EAGER"}/**
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
 */class rl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new tl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})($||($={}));const il={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},sl=$.INFO,ol={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},al=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=ol[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fa{constructor(t){this.name=t,this._logLevel=sl,this._logHandler=al,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?il[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}/**
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
 */class ul{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(cl(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function cl(r){const t=r.getComponent();return t?.type==="VERSION"}const ri="@firebase/app",ao="0.13.1";/**
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
 */const Mt=new fa("@firebase/app"),ll="@firebase/app-compat",hl="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",ml="@firebase/app-check",pl="@firebase/auth",gl="@firebase/auth-compat",_l="@firebase/database",yl="@firebase/data-connect",El="@firebase/database-compat",Tl="@firebase/functions",vl="@firebase/functions-compat",Il="@firebase/installations",Al="@firebase/installations-compat",wl="@firebase/messaging",Rl="@firebase/messaging-compat",Cl="@firebase/performance",Pl="@firebase/performance-compat",Sl="@firebase/remote-config",Vl="@firebase/remote-config-compat",bl="@firebase/storage",Dl="@firebase/storage-compat",Nl="@firebase/firestore",kl="@firebase/ai",xl="@firebase/firestore-compat",Ol="firebase",Ml="11.9.0";/**
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
 */const ii="[DEFAULT]",Ll={[ri]:"fire-core",[ll]:"fire-core-compat",[dl]:"fire-analytics",[hl]:"fire-analytics-compat",[ml]:"fire-app-check",[fl]:"fire-app-check-compat",[pl]:"fire-auth",[gl]:"fire-auth-compat",[_l]:"fire-rtdb",[yl]:"fire-data-connect",[El]:"fire-rtdb-compat",[Tl]:"fire-fn",[vl]:"fire-fn-compat",[Il]:"fire-iid",[Al]:"fire-iid-compat",[wl]:"fire-fcm",[Rl]:"fire-fcm-compat",[Cl]:"fire-perf",[Pl]:"fire-perf-compat",[Sl]:"fire-rc",[Vl]:"fire-rc-compat",[bl]:"fire-gcs",[Dl]:"fire-gcs-compat",[Nl]:"fire-fst",[xl]:"fire-fst-compat",[kl]:"fire-vertex","fire-js":"fire-js",[Ol]:"fire-js-all"};/**
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
 */const Jn=new Map,Fl=new Map,si=new Map;function uo(r,t){try{r.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Zn(r){const t=r.name;if(si.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;si.set(t,r);for(const e of Jn.values())uo(e,r);for(const e of Fl.values())uo(e,r);return!0}function Ul(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Bl(r){return r==null?!1:r.settings!==void 0}/**
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
 */const jl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zt=new da("app","Firebase",jl);/**
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
 */class ql{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw zt.create("app-deleted",{appName:this._name})}}/**
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
 */const $l=Ml;function zl(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:ii,automaticDataCollectionEnabled:!0},t),s=n.name;if(typeof s!="string"||!s)throw zt.create("bad-app-name",{appName:String(s)});if(e||(e=ha()),!e)throw zt.create("no-options");const o=Jn.get(s);if(o){if(Yn(e,o.options)&&Yn(n,o.config))return o;throw zt.create("duplicate-app",{appName:s})}const u=new rl(s);for(const h of si.values())u.addComponent(h);const l=new ql(e,n,u);return Jn.set(s,l),l}function Hl(r=ii){const t=Jn.get(r);if(!t&&r===ii&&ha())return zl();if(!t)throw zt.create("no-app",{appName:r});return t}function ve(r,t,e){var n;let s=(n=Ll[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&l.push("and"),u&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(l.join(" "));return}Zn(new an(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Gl="firebase-heartbeat-database",Kl=1,un="firebase-heartbeat-store";let Jr=null;function ma(){return Jr||(Jr=Sc(Gl,Kl,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(un)}catch(e){console.warn(e)}}}}).catch(r=>{throw zt.create("idb-open",{originalErrorMessage:r.message})})),Jr}async function Ql(r){try{const e=(await ma()).transaction(un),n=await e.objectStore(un).get(pa(r));return await e.done,n}catch(t){if(t instanceof be)Mt.warn(t.message);else{const e=zt.create("idb-get",{originalErrorMessage:t?.message});Mt.warn(e.message)}}}async function co(r,t){try{const n=(await ma()).transaction(un,"readwrite");await n.objectStore(un).put(t,pa(r)),await n.done}catch(e){if(e instanceof be)Mt.warn(e.message);else{const n=zt.create("idb-set",{originalErrorMessage:e?.message});Mt.warn(n.message)}}}function pa(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Wl=1024,Xl=30;class Yl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Zl(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=lo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Xl){const u=th(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Mt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lo(),{heartbeatsToSend:n,unsentEntries:s}=Jl(this._heartbeatsCache.heartbeats),o=Xn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function lo(){return new Date().toISOString().substring(0,10)}function Jl(r,t=Wl){const e=[];let n=r.slice();for(const s of r){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),ho(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),ho(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class Zl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wc()?Xc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ql(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ho(r){return Xn(JSON.stringify({version:2,heartbeats:r})).length}function th(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function eh(r){Zn(new an("platform-logger",t=>new ul(t),"PRIVATE")),Zn(new an("heartbeat",t=>new Yl(t),"PRIVATE")),ve(ri,ao,r),ve(ri,ao,"esm2017"),ve("fire-js","")}eh("");var nh="firebase",rh="11.9.1";/**
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
 */ve(nh,rh,"app");var fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ht,ga;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,w){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var w=T.g[3],p=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=l;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return D(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var v=h(0),I=h(1),P=h(16777216);r=u.prototype,r.m=function(){if(k(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(b(this))return"0";if(k(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=tt(_,m).g;_=G(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,b(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function b(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}r.l=function(T){return T=G(this,T),k(T)?-1:b(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(I)}r.abs=function(){return k(this)?D(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),p=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,w&=65535,p&=65535,_[E]=p<<16|w}return new u(_,_[_.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(D(m))}r.j=function(T){if(b(this)||b(T))return v;if(k(this))return k(T)?D(this).j(D(T)):D(D(this).j(T));if(k(T))return D(this.j(D(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,p=this.i(y)&65535,kt=T.i(E)>>>16,Oe=T.i(E)&65535;_[2*y+2*E]+=p*Oe,B(_,2*y+2*E),_[2*y+2*E+1]+=w*Oe,B(_,2*y+2*E+1),_[2*y+2*E+1]+=p*kt,B(_,2*y+2*E+1),_[2*y+2*E+2]+=w*kt,B(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function B(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function z(T,m){this.g=T,this.h=m}function tt(T,m){if(b(m))throw Error("division by zero");if(b(T))return new z(v,v);if(k(T))return m=tt(D(T),m),new z(D(m.g),D(m.h));if(k(m))return m=tt(T,D(m)),new z(D(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=m;0>=y.l(T);)_=Nt(_),y=Nt(y);var E=ot(_,1),w=ot(y,1);for(y=ot(y,2),_=ot(_,2);!b(y);){var p=w.add(y);0>=p.l(T)&&(E=E.add(_),w=p),y=ot(y,1),_=ot(_,1)}return m=G(T,E.j(m)),new z(E,m)}for(E=v;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),p=w.j(m);k(p)||0<p.l(T);)_-=y,w=f(_),p=w.j(m);b(w)&&(w=I),E=E.add(w),T=G(T,p)}return new z(E,T)}r.A=function(T){return tt(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Nt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,ga=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,Ht=u}).apply(typeof fo<"u"?fo:typeof self<"u"?self:typeof window<"u"?window:{});var Bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _a,Je,ya,Hn,oi,Ea,Ta,va;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,c){return i==Array.prototype||i==Object.prototype||(i[a]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bn=="object"&&Bn];for(var a=0;a<i.length;++a){var c=i[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var n=e(this);function s(i,a){if(a)t:{var c=n;i=i.split(".");for(var d=0;d<i.length-1;d++){var A=i[d];if(!(A in c))break t;c=c[A]}i=i[i.length-1],d=c[i],a=a(d),a!=d&&a!=null&&t(c,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var c=0,d=!1,A={next:function(){if(!d&&c<i.length){var R=c++;return{value:a(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function g(i,a,c){return i.call.apply(i.bind,arguments)}function v(i,a,c){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,d),i.apply(a,A)}}return function(){return i.apply(a,arguments)}}function I(i,a,c){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,I.apply(null,arguments)}function P(i,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function b(i,a){function c(){}c.prototype=a.prototype,i.aa=a.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(d,A,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return a.prototype[A].apply(d,V)}}function k(i){const a=i.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=i[d];return c}return[]}function D(i,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const A=i.length||0,R=d.length||0;i.length=A+R;for(let V=0;V<R;V++)i[A+V]=d[V]}else i.push(d)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var Nt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function ot(i,a,c){for(const d in i)a.call(c,i[d],d,i)}function T(i,a){for(const c in i)a.call(void 0,i[c],c,i)}function m(i){const a={};for(const c in i)a[c]=i[c];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let c,d;for(let A=1;A<arguments.length;A++){d=arguments[A];for(c in d)i[c]=d[c];for(let R=0;R<_.length;R++)c=_[R],Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c])}}function E(i){var a=1;i=i.split(":");const c=[];for(;0<a&&i.length;)c.push(i.shift()),a--;return i.length&&c.push(i.join(":")),c}function w(i){l.setTimeout(()=>{throw i},0)}function p(){var i=Sr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,c){const d=Oe.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var Oe=new G(()=>new Ku,i=>i.reset());class Ku{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,Le=!1,Sr=new kt,is=()=>{const i=l.Promise.resolve(void 0);Me=()=>{i.then(Qu)}};var Qu=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(c){w(c)}var a=Oe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Le=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Wu=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return i}();function Fe(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Nt){t:{try{tt(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else c=="mouseover"?a=i.fromElement:c=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Xu[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Fe.aa.h.call(this)}}b(Fe,ht);var Xu={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),Yu=0;function Ju(i,a,c,d,A){this.listener=i,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=A,this.key=++Yu,this.da=this.fa=!1}function In(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function An(i){this.src=i,this.g={},this.h=0}An.prototype.add=function(i,a,c,d,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=br(i,a,d,A);return-1<V?(a=i[V],c||(a.fa=!1)):(a=new Ju(a,this.src,R,!!d,A),a.fa=c,i.push(a)),a};function Vr(i,a){var c=a.type;if(c in i.g){var d=i.g[c],A=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=A)&&Array.prototype.splice.call(d,A,1),R&&(In(a),i.g[c].length==0&&(delete i.g[c],i.h--))}}function br(i,a,c,d){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==d)return A}return-1}var Dr="closure_lm_"+(1e6*Math.random()|0),Nr={};function ss(i,a,c,d,A){if(Array.isArray(a)){for(var R=0;R<a.length;R++)ss(i,a[R],c,d,A);return null}return c=us(c),i&&i[vn]?i.K(a,c,f(d)?!!d.capture:!!d,A):Zu(i,a,c,!1,d,A)}function Zu(i,a,c,d,A,R){if(!a)throw Error("Invalid event type");var V=f(A)?!!A.capture:!!A,Q=xr(i);if(Q||(i[Dr]=Q=new An(i)),c=Q.add(a,c,d,V,R),c.proxy)return c;if(d=tc(),c.proxy=d,d.src=i,d.listener=c,i.addEventListener)Wu||(A=V),A===void 0&&(A=!1),i.addEventListener(a.toString(),d,A);else if(i.attachEvent)i.attachEvent(as(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function tc(){function i(c){return a.call(i.src,i.listener,c)}const a=ec;return i}function os(i,a,c,d,A){if(Array.isArray(a))for(var R=0;R<a.length;R++)os(i,a[R],c,d,A);else d=f(d)?!!d.capture:!!d,c=us(c),i&&i[vn]?(i=i.i,a=String(a).toString(),a in i.g&&(R=i.g[a],c=br(R,c,d,A),-1<c&&(In(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete i.g[a],i.h--)))):i&&(i=xr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=br(a,c,d,A)),(c=-1<i?a[i]:null)&&kr(c))}function kr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[vn])Vr(a.i,i);else{var c=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(c,d,i.capture):a.detachEvent?a.detachEvent(as(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=xr(a))?(Vr(c,i),c.h==0&&(c.src=null,a[Dr]=null)):In(i)}}}function as(i){return i in Nr?Nr[i]:Nr[i]="on"+i}function ec(i,a){if(i.da)i=!0;else{a=new Fe(a,this);var c=i.listener,d=i.ha||i.src;i.fa&&kr(i),i=c.call(d,a)}return i}function xr(i){return i=i[Dr],i instanceof An?i:null}var Or="__closure_events_fn_"+(1e9*Math.random()>>>0);function us(i){return typeof i=="function"?i:(i[Or]||(i[Or]=function(a){return i.handleEvent(a)}),i[Or])}function dt(){Ut.call(this),this.i=new An(this),this.M=this,this.F=null}b(dt,Ut),dt.prototype[vn]=!0,dt.prototype.removeEventListener=function(i,a,c,d){os(this,i,a,c,d)};function yt(i,a){var c,d=i.F;if(d)for(c=[];d;d=d.F)c.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var A=a;a=new ht(d,i),y(a,A)}if(A=!0,c)for(var R=c.length-1;0<=R;R--){var V=a.g=c[R];A=wn(V,d,!0,a)&&A}if(V=a.g=i,A=wn(V,d,!0,a)&&A,A=wn(V,d,!1,a)&&A,c)for(R=0;R<c.length;R++)V=a.g=c[R],A=wn(V,d,!1,a)&&A}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var c=i.g[a],d=0;d<c.length;d++)In(c[d]);delete i.g[a],i.h--}}this.F=null},dt.prototype.K=function(i,a,c,d){return this.i.add(String(i),a,!1,c,d)},dt.prototype.L=function(i,a,c,d){return this.i.add(String(i),a,!0,c,d)};function wn(i,a,c,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,R=0;R<a.length;++R){var V=a[R];if(V&&!V.da&&V.capture==c){var Q=V.listener,at=V.ha||V.src;V.fa&&Vr(i.i,V),A=Q.call(at,d)!==!1&&A}}return A&&!d.defaultPrevented}function cs(i,a,c){if(typeof i=="function")c&&(i=I(i,c));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(i,a||0)}function ls(i){i.g=cs(()=>{i.g=null,i.i&&(i.i=!1,ls(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class nc extends Ut{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ls(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ue(i){Ut.call(this),this.h=i,this.g={}}b(Ue,Ut);var hs=[];function ds(i){ot(i.g,function(a,c){this.g.hasOwnProperty(c)&&kr(a)},i),i.g={}}Ue.prototype.N=function(){Ue.aa.N.call(this),ds(this)},Ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=l.JSON.stringify,rc=l.JSON.parse,ic=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Lr(){}Lr.prototype.h=null;function fs(i){return i.h||(i.h=i.i())}function ms(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){ht.call(this,"d")}b(Fr,ht);function Ur(){ht.call(this,"c")}b(Ur,ht);var ee={},ps=null;function Rn(){return ps=ps||new dt}ee.La="serverreachability";function gs(i){ht.call(this,ee.La,i)}b(gs,ht);function je(i){const a=Rn();yt(a,new gs(a))}ee.STAT_EVENT="statevent";function _s(i,a){ht.call(this,ee.STAT_EVENT,i),this.stat=a}b(_s,ht);function Et(i){const a=Rn();yt(a,new _s(a,i))}ee.Ma="timingevent";function ys(i,a){ht.call(this,ee.Ma,i),this.size=a}b(ys,ht);function qe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function sc(i,a,c,d,A,R){i.info(function(){if(i.g)if(R)for(var V="",Q=R.split("&"),at=0;at<Q.length;at++){var H=Q[at].split("=");if(1<H.length){var ft=H[0];H=H[1];var mt=ft.split("_");V=2<=mt.length&&mt[1]=="type"?V+(ft+"="+H+"&"):V+(ft+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+d+") [attempt "+A+"]: "+a+`
`+c+`
`+V})}function oc(i,a,c,d,A,R,V){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+A+"]: "+a+`
`+c+`
`+R+" "+V})}function fe(i,a,c,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+uc(i,c)+(d?" "+d:"")})}function ac(i,a){i.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function uc(i,a){if(!i.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var d=c[i];if(!(2>d.length)){var A=d[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return Mr(c)}catch{return a}}var Cn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Es={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Br;function Pn(){}b(Pn,Lr),Pn.prototype.g=function(){return new XMLHttpRequest},Pn.prototype.i=function(){return{}},Br=new Pn;function Bt(i,a,c,d){this.j=i,this.i=a,this.l=c,this.R=d||1,this.U=new Ue(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ts}function Ts(){this.i=null,this.g="",this.h=!1}var vs={},jr={};function qr(i,a,c){i.L=1,i.v=Dn(xt(a)),i.m=c,i.P=!0,Is(i,null)}function Is(i,a){i.F=Date.now(),Sn(i),i.A=xt(i.v);var c=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Ms(c.i,"t",d),i.C=0,c=i.j.J,i.h=new Ts,i.g=to(i.j,c?a:null,!i.m),0<i.O&&(i.M=new nc(I(i.Y,i,i.g),i.O)),a=i.U,c=i.g,d=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(hs[0]=A.toString()),A=hs);for(var R=0;R<A.length;R++){var V=ss(c,A[R],d||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),je(),sc(i.i,i.u,i.A,i.l,i.R,i.m)}Bt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Ot(i)==3?a.j():this.Y(i)},Bt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||$s(this.g)))){this.J||mt!=4||a==7||(a==8||0>=ge?je(3):je(2)),$r(this);var c=this.g.Z();this.X=c;e:if(As(this)){var d=$s(this.g);i="";var A=d.length,R=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ne(this),ze(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(R&&a==A-1)});d.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,oc(this.i,this.u,this.A,this.l,this.R,mt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var H=Q;break e}}H=null}if(c=H)fe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,c);else{this.o=!1,this.s=3,Et(12),ne(this),ze(this);break t}}if(this.P){c=!0;let Rt;for(;!this.J&&this.C<V.length;)if(Rt=cc(this,V),Rt==jr){mt==4&&(this.s=4,Et(14),c=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==vs){this.s=4,Et(15),fe(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else fe(this.i,this.l,Rt,null),zr(this,Rt);if(As(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||V.length!=0||this.h.h||(this.s=1,Et(16),c=!1),this.o=this.o&&c,!c)fe(this.i,this.l,V,"[Invalid Chunked Response]"),ne(this),ze(this);else if(0<V.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Xr(ft),ft.M=!0,Et(11))}}else fe(this.i,this.l,V,null),zr(this,V);mt==4&&ne(this),this.o&&!this.J&&(mt==4?Xs(this.j,this):(this.o=!1,Sn(this)))}else Cc(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ne(this),ze(this)}}}catch{}finally{}};function As(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function cc(i,a){var c=i.C,d=a.indexOf(`
`,c);return d==-1?jr:(c=Number(a.substring(c,d)),isNaN(c)?vs:(d+=1,d+c>a.length?jr:(a=a.slice(d,d+c),i.C=d+c,a)))}Bt.prototype.cancel=function(){this.J=!0,ne(this)};function Sn(i){i.S=Date.now()+i.I,ws(i,i.I)}function ws(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=qe(I(i.ba,i),a)}function $r(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Bt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(ac(this.i,this.A),this.L!=2&&(je(),Et(17)),ne(this),this.s=2,ze(this)):ws(this,this.S-i)};function ze(i){i.j.G==0||i.J||Xs(i.j,i)}function ne(i){$r(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ds(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function zr(i,a){try{var c=i.j;if(c.G!=0&&(c.g==i||Hr(c.h,i))){if(!i.K&&Hr(c.h,i)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var A=d;if(A[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Ln(c),On(c);else break t;Wr(c),Et(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=qe(I(c.Za,c),6e3));if(1>=Ps(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ie(c,11)}else if((i.K||c.g==i)&&Ln(c),!B(a))for(A=c.Da.g.parse(a),a=0;a<A.length;a++){let H=A[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const ft=H[3];ft!=null&&(c.la=ft,c.j.info("VER="+c.la));const mt=H[4];mt!=null&&(c.Aa=mt,c.j.info("SVER="+c.Aa));const ge=H[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Rt=i.g;if(Rt){const Un=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Un){var R=d.h;R.g||Un.indexOf("spdy")==-1&&Un.indexOf("quic")==-1&&Un.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Gr(R,R.h),R.h=null))}if(d.D){const Yr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yr&&(d.ya=Yr,W(d.I,d.D,Yr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var V=i;if(d.qa=Zs(d,d.J?d.ia:null,d.W),V.K){Ss(d.h,V);var Q=V,at=d.L;at&&(Q.I=at),Q.B&&($r(Q),Sn(Q)),d.g=V}else Qs(d);0<c.i.length&&Mn(c)}else H[0]!="stop"&&H[0]!="close"||ie(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ie(c,7):Qr(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}je(4)}catch{}}var lc=class{constructor(i,a){this.g=i,this.map=a}};function Rs(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cs(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ps(i){return i.h?1:i.g?i.g.size:0}function Hr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Gr(i,a){i.g?i.g.add(a):i.h=a}function Ss(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Rs.prototype.cancel=function(){if(this.i=Vs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Vs(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const c of i.g.values())a=a.concat(c.D);return a}return k(i.i)}function hc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],c=i.length,d=0;d<c;d++)a.push(i[d]);return a}a=[],c=0;for(d in i)a[c++]=i[d];return a}function dc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var c=0;c<i;c++)a.push(c);return a}a=[],c=0;for(const d in i)a[c++]=d;return a}}}function bs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var c=dc(i),d=hc(i),A=d.length,R=0;R<A;R++)a.call(void 0,d[R],c&&c[R],i)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(i,a){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var d=i[c].indexOf("="),A=null;if(0<=d){var R=i[c].substring(0,d);A=i[c].substring(d+1)}else R=i[c];a(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function re(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof re){this.h=i.h,Vn(this,i.j),this.o=i.o,this.g=i.g,bn(this,i.s),this.l=i.l;var a=i.i,c=new Ke;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),Ns(this,c),this.m=i.m}else i&&(a=String(i).match(Ds))?(this.h=!1,Vn(this,a[1]||"",!0),this.o=He(a[2]||""),this.g=He(a[3]||"",!0),bn(this,a[4]),this.l=He(a[5]||"",!0),Ns(this,a[6]||"",!0),this.m=He(a[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}re.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ge(a,ks,!0),":");var c=this.g;return(c||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ge(a,ks,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Ge(c,c.charAt(0)=="/"?gc:pc,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Ge(c,yc)),i.join("")};function xt(i){return new re(i)}function Vn(i,a,c){i.j=c?He(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function bn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Ns(i,a,c){a instanceof Ke?(i.i=a,Ec(i.i,i.h)):(c||(a=Ge(a,_c)),i.i=new Ke(a,i.h))}function W(i,a,c){i.i.set(a,c)}function Dn(i){return W(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function He(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ge(i,a,c){return typeof i=="string"?(i=encodeURI(i).replace(a,mc),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function mc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ks=/[#\/\?@]/g,pc=/[#\?:]/g,gc=/[#\?]/g,_c=/[#\?@]/g,yc=/#/g;function Ke(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function jt(i){i.g||(i.g=new Map,i.h=0,i.i&&fc(i.i,function(a,c){i.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}r=Ke.prototype,r.add=function(i,a){jt(this),this.i=null,i=me(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(a),this.h+=1,this};function xs(i,a){jt(i),a=me(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Os(i,a){return jt(i),a=me(i,a),i.g.has(a)}r.forEach=function(i,a){jt(this),this.g.forEach(function(c,d){c.forEach(function(A){i.call(a,A,d,this)},this)},this)},r.na=function(){jt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const A=i[d];for(let R=0;R<A.length;R++)c.push(a[d])}return c},r.V=function(i){jt(this);let a=[];if(typeof i=="string")Os(this,i)&&(a=a.concat(this.g.get(me(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)a=a.concat(i[c])}return a},r.set=function(i,a){return jt(this),this.i=null,i=me(this,i),Os(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},r.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Ms(i,a,c){xs(i,a),0<c.length&&(i.i=null,i.g.set(me(i,a),k(c)),i.h+=c.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const R=encodeURIComponent(String(d)),V=this.V(d);for(d=0;d<V.length;d++){var A=R;V[d]!==""&&(A+="="+encodeURIComponent(String(V[d]))),i.push(A)}}return this.i=i.join("&")};function me(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Ec(i,a){a&&!i.j&&(jt(i),i.i=null,i.g.forEach(function(c,d){var A=d.toLowerCase();d!=A&&(xs(this,d),Ms(this,A,c))},i)),i.j=a}function Tc(i,a){const c=new $e;if(l.Image){const d=new Image;d.onload=P(qt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=P(qt,c,"TestLoadImage: error",!1,a,d),d.onabort=P(qt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(qt,c,"TestLoadImage: timeout",!1,a,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function vc(i,a){const c=new $e,d=new AbortController,A=setTimeout(()=>{d.abort(),qt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(A),R.ok?qt(c,"TestPingServer: ok",!0,a):qt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),qt(c,"TestPingServer: error",!1,a)})}function qt(i,a,c,d,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),d(c)}catch{}}function Ic(){this.g=new ic}function Ac(i,a,c){const d=c||"";try{bs(i,function(A,R){let V=A;f(A)&&(V=Mr(A)),a.push(d+R+"="+encodeURIComponent(V))})}catch(A){throw a.push(d+"type="+encodeURIComponent("_badmap")),A}}function Nn(i){this.l=i.Ub||null,this.j=i.eb||!1}b(Nn,Lr),Nn.prototype.g=function(){return new kn(this.l,this.j)},Nn.prototype.i=function(i){return function(){return i}}({});function kn(i,a){dt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(kn,dt),r=kn.prototype,r.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,We(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},r.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ls(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ls(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}r.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Qe(this):We(this),this.readyState==3&&Ls(this)}},r.Ra=function(i){this.g&&(this.response=this.responseText=i,Qe(this))},r.Qa=function(i){this.g&&(this.response=i,Qe(this))},r.ga=function(){this.g&&Qe(this)};function Qe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,We(i)}r.setRequestHeader=function(i,a){this.u.append(i,a)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=a.next();return i.join(`\r
`)};function We(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Fs(i){let a="";return ot(i,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function Kr(i,a,c){t:{for(d in c){var d=!1;break t}d=!0}d||(c=Fs(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):W(i,a,c))}function Y(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Y,dt);var wc=/^https?$/i,Rc=["POST","PUT"];r=Y.prototype,r.Ha=function(i){this.J=i},r.ea=function(i,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Br.g(),this.v=this.o?fs(this.o):fs(Br),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(R){Us(this,R);return}if(i=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var A in d)c.set(A,d[A]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())c.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),A=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rc,a,void 0))||d||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Us(this,R)}};function Us(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Bs(i),xn(i)}function Bs(i){i.A||(i.A=!0,yt(i,"complete"),yt(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,yt(this,"complete"),yt(this,"abort"),xn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?js(this):this.bb())},r.bb=function(){js(this)};function js(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)cs(i.Ea,0,i);else if(yt(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var d;if(d=V===0){var A=String(i.D).match(Ds)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),d=!wc.test(A?A.toLowerCase():"")}c=d}if(c)yt(i,"complete"),yt(i,"success");else{i.m=6;try{var R=2<Ot(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Bs(i)}}finally{xn(i)}}}}function xn(i,a){if(i.g){qs(i);const c=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||yt(i,"ready");try{c.onreadystatechange=d}catch{}}}function qs(i){i.I&&(l.clearTimeout(i.I),i.I=null)}r.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}r.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),rc(a)}};function $s(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Cc(i){const a={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(B(i[d]))continue;var c=E(i[d]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[A]||[];a[A]=R,R.push(c)}T(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xe(i,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||a}function zs(i){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xe("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xe("baseRetryDelayMs",5e3,i),this.cb=Xe("retryDelaySeedMs",1e4,i),this.Wa=Xe("forwardChannelMaxRetries",2,i),this.wa=Xe("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Rs(i&&i.concurrentRequestLimit),this.Da=new Ic,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=zs.prototype,r.la=8,r.G=1,r.connect=function(i,a,c,d){Et(0),this.W=i,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Zs(this,null,this.W),Mn(this)};function Qr(i){if(Hs(i),i.G==3){var a=i.U++,c=xt(i.I);if(W(c,"SID",i.K),W(c,"RID",a),W(c,"TYPE","terminate"),Ye(i,c),a=new Bt(i,i.j,a),a.L=2,a.v=Dn(xt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=to(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}Js(i)}function On(i){i.g&&(Xr(i),i.g.cancel(),i.g=null)}function Hs(i){On(i),i.u&&(l.clearTimeout(i.u),i.u=null),Ln(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Mn(i){if(!Cs(i.h)&&!i.s){i.s=!0;var a=i.Ga;Me||is(),Le||(Me(),Le=!0),Sr.add(a,i),i.B=0}}function Pc(i,a){return Ps(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=qe(I(i.Ga,i,a),Ys(i,i.B)),i.B++,!0)}r.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Bt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Ks(this,A,a),c=xt(this.I),W(c,"RID",i),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),Ye(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Fs(R)))+"&"+a:this.m&&Kr(c,this.m,R)),Gr(this.h,A),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",a),W(c,"SID","null"),A.T=!0,qr(A,c,null)):qr(A,c,a),this.G=2}}else this.G==3&&(i?Gs(this,i):this.i.length==0||Cs(this.h)||Gs(this))};function Gs(i,a){var c;a?c=a.l:c=i.U++;const d=xt(i.I);W(d,"SID",i.K),W(d,"RID",c),W(d,"AID",i.T),Ye(i,d),i.m&&i.o&&Kr(d,i.m,i.o),c=new Bt(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),a&&(i.i=a.D.concat(i.i)),a=Ks(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Gr(i.h,c),qr(c,d,a)}function Ye(i,a){i.H&&ot(i.H,function(c,d){W(a,d,c)}),i.l&&bs({},function(c,d){W(a,d,c)})}function Ks(i,a,c){c=Math.min(i.i.length,c);var d=i.l?I(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=A[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let Q=!0;for(let at=0;at<c;at++){let H=A[at].g;const ft=A[at].map;if(H-=R,0>H)R=Math.max(0,A[at].g-100),Q=!1;else try{Ac(ft,V,"req"+H+"_")}catch{d&&d(ft)}}if(Q){d=V.join("&");break t}}}return i=i.i.splice(0,c),a.D=i,d}function Qs(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Me||is(),Le||(Me(),Le=!0),Sr.add(a,i),i.v=0}}function Wr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=qe(I(i.Fa,i),Ys(i,i.v)),i.v++,!0)}r.Fa=function(){if(this.u=null,Ws(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=qe(I(this.ab,this),i)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),On(this),Ws(this))};function Xr(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Ws(i){i.g=new Bt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=xt(i.qa);W(a,"RID","rpc"),W(a,"SID",i.K),W(a,"AID",i.T),W(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&W(a,"TO",i.ja),W(a,"TYPE","xmlhttp"),Ye(i,a),i.m&&i.o&&Kr(a,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=Dn(xt(a)),c.m=null,c.P=!0,Is(c,i)}r.Za=function(){this.C!=null&&(this.C=null,On(this),Wr(this),Et(19))};function Ln(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Xs(i,a){var c=null;if(i.g==a){Ln(i),Xr(i),i.g=null;var d=2}else if(Hr(i.h,a))c=a.D,Ss(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var A=i.B;d=Rn(),yt(d,new ys(d,c)),Mn(i)}else Qs(i);else if(A=a.s,A==3||A==0&&0<a.X||!(d==1&&Pc(i,a)||d==2&&Wr(i)))switch(c&&0<c.length&&(a=i.h,a.i=a.i.concat(c)),A){case 1:ie(i,5);break;case 4:ie(i,10);break;case 3:ie(i,6);break;default:ie(i,2)}}}function Ys(i,a){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*a}function ie(i,a){if(i.j.info("Error code "+a),a==2){var c=I(i.fb,i),d=i.Xa;const A=!d;d=new re(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vn(d,"https"),Dn(d),A?Tc(d.toString(),c):vc(d.toString(),c)}else Et(2);i.G=0,i.l&&i.l.sa(a),Js(i),Hs(i)}r.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Js(i){if(i.G=0,i.ka=[],i.l){const a=Vs(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Zs(i,a,c){var d=c instanceof re?xt(c):new re(c);if(d.g!="")a&&(d.g=a+"."+d.g),bn(d,d.s);else{var A=l.location;d=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var R=new re(null);d&&Vn(R,d),a&&(R.g=a),A&&bn(R,A),c&&(R.l=c),d=R}return c=i.D,a=i.ya,c&&a&&W(d,c,a),W(d,"VER",i.la),Ye(i,d),d}function to(i,a,c){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new Y(new Nn({eb:c})):new Y(i.pa),a.Ha(i.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function eo(){}r=eo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Fn(){}Fn.prototype.g=function(i,a){return new It(i,a)};function It(i,a){dt.call(this),this.g=new zs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!B(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new pe(this)}b(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Qr(this.g)},It.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=Mr(i),i=c);a.i.push(new lc(a.Ya++,i)),a.G==3&&Mn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,It.aa.N.call(this)};function no(i){Fr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const c in a){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}b(no,Fr);function ro(){Ur.call(this),this.status=1}b(ro,Ur);function pe(i){this.g=i}b(pe,eo),pe.prototype.ua=function(){yt(this.g,"a")},pe.prototype.ta=function(i){yt(this.g,new no(i))},pe.prototype.sa=function(i){yt(this.g,new ro)},pe.prototype.ra=function(){yt(this.g,"b")},Fn.prototype.createWebChannel=Fn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,va=function(){return new Fn},Ta=function(){return Rn()},Ea=ee,oi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Cn.NO_ERROR=0,Cn.TIMEOUT=8,Cn.HTTP_ERROR=6,Hn=Cn,Es.COMPLETE="complete",ya=Es,ms.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Je=ms,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,_a=Y}).apply(typeof Bn<"u"?Bn:typeof self<"u"?self:typeof window<"u"?window:{});const mo="@firebase/firestore",po="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new fa("@firebase/firestore");function _e(){return ue.logLevel}function N(r,...t){if(ue.logLevel<=$.DEBUG){const e=t.map(Ri);ue.debug(`Firestore (${De}): ${r}`,...e)}}function Lt(r,...t){if(ue.logLevel<=$.ERROR){const e=t.map(Ri);ue.error(`Firestore (${De}): ${r}`,...e)}}function Ae(r,...t){if(ue.logLevel<=$.WARN){const e=t.map(Ri);ue.warn(`Firestore (${De}): ${r}`,...e)}}function Ri(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,Ia(r,n,e)}function Ia(r,t,e){let n=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Lt(n),new Error(n)}function K(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||Ia(t,s,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ih{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class sh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class oh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(K(typeof n.accessToken=="string",31837,{l:n}),new Aa(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class ah{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uh{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new ah(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ch{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const n=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new go(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new go(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function lh(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function wa(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=lh(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function ai(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return U(n,s);{const o=wa(),u=hh(o.encode(_o(r,e)),o.encode(_o(t,e)));return u!==0?u:U(n,s)}}e+=n>65535?2:1}return U(r.length,t.length)}function _o(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function hh(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function we(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=-62135596800,Eo=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Eo);return new rt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<yo)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Eo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-yo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new rt(0,0))}static max(){return new L(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="__name__";class Ct{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=Ct.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ct.isNumericId(t),s=Ct.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):ai(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Ht.fromString(t.substring(4,t.length-2))}}class J extends Ct{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const dh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ct{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return dh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===To}static keyField(){return new ct([To])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,s+=2}else l==="`"?(u=!u,s++):l!=="."||u?(n+=l,s++):(o(),s++)}if(o(),u)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(J.fromString(t))}static fromName(t){return new O(J.fromString(t).popFirst(5))}static empty(){return new O(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new J(t.slice()))}}/**
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
 */const cn=-1;function fh(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=L.fromTimestamp(n===1e9?new rt(e+1,0):new rt(e,n));return new Kt(s,O.empty(),t)}function mh(r){return new Kt(r.readTime,r.key,cn)}class Kt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Kt(L.min(),O.empty(),cn)}static max(){return new Kt(L.max(),O.empty(),cn)}}function ph(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
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
 */const gh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _h{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==gh)throw r;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,n)=>{e(t)})}static reject(t){return new C((e,n)=>{n(t)})}static waitFor(t){return new C((e,n)=>{let s=0,o=0,u=!1;t.forEach(l=>{++s,l.next(()=>{++o,u&&o===s&&e()},h=>n(h))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const n of t)e=e.next(s=>s?C.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new C((n,s)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++l,l===o&&n(u)},g=>s(g))}})}static doWhile(t,e){return new C((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function yh(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ke(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class hr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}hr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-1;function dr(r){return r==null}function tr(r){return r===0&&1/r==-1/0}function Eh(r){return typeof r=="number"&&Number.isInteger(r)&&!tr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="";function Th(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=vo(t)),t=vh(r.get(e),t);return vo(t)}function vh(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":e+="";break;case Ca:e+="";break;default:e+=o}}return e}function vo(r){return r+Ca+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Zt(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Pa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jn(this.root,t,this.comparator,!1)}getReverseIterator(){return new jn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jn(this.root,t,this.comparator,!0)}}class jn{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ut(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,s,o){return this}insert(t,e,n){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ao(this.data.getIterator())}getIteratorFrom(t){return new Ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class Ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new At([])}unionWith(t){let e=new it(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return we(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Sa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Sa("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Ih=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(r){if(K(!!r,39018),typeof r=="string"){let t=0;const e=Ih.exec(r);if(K(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Wt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */const Va="server_timestamp",ba="__type__",Da="__previous_value__",Na="__local_write_time__";function Pi(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ba])===null||e===void 0?void 0:e.stringValue)===Va}function fr(r){const t=r.mapValue.fields[Da];return Pi(t)?fr(t):t}function ln(r){const t=Qt(r.mapValue.fields[Na].timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,n,s,o,u,l,h,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=g}}const er="(default)";class hn{constructor(t,e){this.projectId=t,this.database=e||er}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===er}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ka="__type__",xa="__max__",qn={mapValue:{fields:{__type__:{stringValue:xa}}}},Oa="__vector__",nr="value";function Xt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Pi(r)?4:Rh(r)?9007199254740991:wh(r)?10:11:M(28295,{value:r})}function bt(r,t){if(r===t)return!0;const e=Xt(r);if(e!==Xt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ln(r).isEqual(ln(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Qt(s.timestampValue),l=Qt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,o){return Wt(s.bytesValue).isEqual(Wt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(r,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),l=Z(o.doubleValue);return u===l?tr(u)===tr(l):isNaN(u)&&isNaN(l)}return!1}(r,t);case 9:return we(r.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Io(u)!==Io(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!bt(u[h],l[h])))return!1;return!0}(r,t);default:return M(52216,{left:r})}}function dn(r,t){return(r.values||[]).find(e=>bt(e,t))!==void 0}function Re(r,t){if(r===t)return 0;const e=Xt(r),n=Xt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const l=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(r,t);case 3:return wo(r.timestampValue,t.timestampValue);case 4:return wo(ln(r),ln(t));case 5:return ai(r.stringValue,t.stringValue);case 6:return function(o,u){const l=Wt(o),h=Wt(u);return l.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),h=u.split("/");for(let f=0;f<l.length&&f<h.length;f++){const g=U(l[f],h[f]);if(g!==0)return g}return U(l.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const l=U(Z(o.latitude),Z(u.latitude));return l!==0?l:U(Z(o.longitude),Z(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ro(r.arrayValue,t.arrayValue);case 10:return function(o,u){var l,h,f,g;const v=o.fields||{},I=u.fields||{},P=(l=v[nr])===null||l===void 0?void 0:l.arrayValue,b=(h=I[nr])===null||h===void 0?void 0:h.arrayValue,k=U(((f=P?.values)===null||f===void 0?void 0:f.length)||0,((g=b?.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:Ro(P,b)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===qn.mapValue&&u===qn.mapValue)return 0;if(o===qn.mapValue)return 1;if(u===qn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let v=0;v<h.length&&v<g.length;++v){const I=ai(h[v],g[v]);if(I!==0)return I;const P=Re(l[h[v]],f[g[v]]);if(P!==0)return P}return U(h.length,g.length)}(r.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function wo(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Qt(r),n=Qt(t),s=U(e.seconds,n.seconds);return s!==0?s:U(e.nanos,n.nanos)}function Ro(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=Re(e[s],n[s]);if(o)return o}return U(e.length,n.length)}function Ce(r){return ui(r)}function ui(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Qt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Wt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return O.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=ui(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${ui(e.fields[u])}`;return s+"}"}(r.mapValue):M(61005,{value:r})}function Gn(r){switch(Xt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fr(r);return t?16+Gn(t):16;case 5:return 2*r.stringValue.length;case 6:return Wt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+Gn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Zt(n.fields,(o,u)=>{s+=o.length+Gn(u)}),s}(r.mapValue);default:throw M(13486,{value:r})}}function ci(r){return!!r&&"integerValue"in r}function Si(r){return!!r&&"arrayValue"in r}function Co(r){return!!r&&"nullValue"in r}function Po(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Kn(r){return!!r&&"mapValue"in r}function wh(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ka])===null||e===void 0?void 0:e.stringValue)===Oa}function nn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Zt(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=nn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=nn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Rh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.value=t}static empty(){return new vt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nn(e)}setAll(t){let e=ct.emptyPath(),n={},s=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,n,s),n={},s=[],e=l.popLast()}u?n[l.lastSegment()]=nn(u):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());Kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Kn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Zt(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new vt(nn(this.value))}}function Ma(r){const t=[];return Zt(r.fields,(e,n)=>{const s=new ct([e]);if(Kn(n)){const o=Ma(n.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,n,s,o,u,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),vt.empty(),0)}static newFoundDocument(t,e,n,s){return new _t(t,1,e,L.min(),n,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),vt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),vt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rr{constructor(t,e){this.position=t,this.inclusive=e}}function So(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const o=t[s],u=r.position[s];if(o.field.isKeyField()?n=O.comparator(O.fromName(u.referenceValue),e.key):n=Re(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Vo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!bt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ch(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class La{}class nt extends La{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Sh(t,e,n):e==="array-contains"?new Dh(t,n):e==="in"?new Nh(t,n):e==="not-in"?new kh(t,n):e==="array-contains-any"?new xh(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Vh(t,n):new bh(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Re(e,this.value)):e!==null&&Xt(this.value)===Xt(e)&&this.matchesComparison(Re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends La{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Dt(t,e)}matches(t){return Fa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Fa(r){return r.op==="and"}function Ua(r){return Ph(r)&&Fa(r)}function Ph(r){for(const t of r.filters)if(t instanceof Dt)return!1;return!0}function li(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(Ua(r))return r.filters.map(t=>li(t)).join(",");{const t=r.filters.map(e=>li(e)).join(",");return`${r.op}(${t})`}}function Ba(r,t){return r instanceof nt?function(n,s){return s instanceof nt&&n.op===s.op&&n.field.isEqual(s.field)&&bt(n.value,s.value)}(r,t):r instanceof Dt?function(n,s){return s instanceof Dt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,l)=>o&&Ba(u,s.filters[l]),!0):!1}(r,t):void M(19439)}function ja(r){return r instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`}(r):r instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(ja).join(" ,")+"}"}(r):"Filter"}class Sh extends nt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Vh extends nt{constructor(t,e){super(t,"in",e),this.keys=qa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class bh extends nt{constructor(t,e){super(t,"not-in",e),this.keys=qa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function qa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>O.fromName(n.referenceValue))}class Dh extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Si(e)&&dn(e.arrayValue,this.value)}}class Nh extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&dn(this.value.arrayValue,e)}}class kh extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(dn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!dn(this.value.arrayValue,e)}}class xh extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Si(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>dn(this.value.arrayValue,n))}}/**
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
 */class Oh{constructor(t,e=null,n=[],s=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=l,this.Ie=null}}function bo(r,t=null,e=[],n=[],s=null,o=null,u=null){return new Oh(r,t,e,n,s,o,u)}function Vi(r){const t=F(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>li(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),dr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ce(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ce(n)).join(",")),t.Ie=e}return t.Ie}function bi(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ch(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Ba(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Vo(r.startAt,t.startAt)&&Vo(r.endAt,t.endAt)}function hi(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e=null,n=[],s=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Mh(r,t,e,n,s,o,u,l){return new mr(r,t,e,n,s,o,u,l)}function Di(r){return new mr(r)}function Do(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Lh(r){return r.collectionGroup!==null}function rn(r){const t=F(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new it(ct.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new ir(o,n))}),e.has(ct.keyField().canonicalString())||t.Ee.push(new ir(ct.keyField(),n))}return t.Ee}function Pt(r){const t=F(r);return t.de||(t.de=Fh(t,rn(r))),t.de}function Fh(r,t){if(r.limitType==="F")return bo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ir(s.field,o)});const e=r.endAt?new rr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new rr(r.startAt.position,r.startAt.inclusive):null;return bo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function di(r,t,e){return new mr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function pr(r,t){return bi(Pt(r),Pt(t))&&r.limitType===t.limitType}function $a(r){return`${Vi(Pt(r))}|lt:${r.limitType}`}function ye(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ja(s)).join(", ")}]`),dr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ce(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ce(s)).join(",")),`Target(${n})`}(Pt(r))}; limitType=${r.limitType})`}function gr(r,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,s){for(const o of rn(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(u,l,h){const f=So(u,l,h);return u.inclusive?f<=0:f<0}(n.startAt,rn(n),s)||n.endAt&&!function(u,l,h){const f=So(u,l,h);return u.inclusive?f>=0:f>0}(n.endAt,rn(n),s))}(r,t)}function Uh(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function za(r){return(t,e)=>{let n=!1;for(const s of rn(r)){const o=Bh(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Bh(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):function(o,u,l){const h=u.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Re(h,f):M(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Zt(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return Pa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=new X(O.comparator);function Ft(){return jh}const Ha=new X(O.comparator);function Ze(...r){let t=Ha;for(const e of r)t=t.insert(e.key,e);return t}function Ga(r){let t=Ha;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function oe(){return sn()}function Ka(){return sn()}function sn(){return new he(r=>r.toString(),(r,t)=>r.isEqual(t))}const qh=new X(O.comparator),$h=new it(O.comparator);function j(...r){let t=$h;for(const e of r)t=t.add(e);return t}const zh=new it(U);function Hh(){return zh}/**
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
 */function Ni(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tr(t)?"-0":t}}function Qa(r){return{integerValue:""+r}}function Wa(r,t){return Eh(t)?Qa(t):Ni(r,t)}/**
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
 */class _r{constructor(){this._=void 0}}function Gh(r,t,e){return r instanceof sr?function(s,o){const u={fields:{[ba]:{stringValue:Va},[Na]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Pi(o)&&(o=fr(o)),o&&(u.fields[Da]=o),{mapValue:u}}(e,t):r instanceof fn?Ya(r,t):r instanceof mn?Ja(r,t):function(s,o){const u=Xa(s,o),l=No(u)+No(s.Re);return ci(u)&&ci(s.Re)?Qa(l):Ni(s.serializer,l)}(r,t)}function Kh(r,t,e){return r instanceof fn?Ya(r,t):r instanceof mn?Ja(r,t):e}function Xa(r,t){return r instanceof pn?function(n){return ci(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class sr extends _r{}class fn extends _r{constructor(t){super(),this.elements=t}}function Ya(r,t){const e=Za(t);for(const n of r.elements)e.some(s=>bt(s,n))||e.push(n);return{arrayValue:{values:e}}}class mn extends _r{constructor(t){super(),this.elements=t}}function Ja(r,t){let e=Za(t);for(const n of r.elements)e=e.filter(s=>!bt(s,n));return{arrayValue:{values:e}}}class pn extends _r{constructor(t,e){super(),this.serializer=t,this.Re=e}}function No(r){return Z(r.integerValue||r.doubleValue)}function Za(r){return Si(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e){this.field=t,this.transform=e}}function Wh(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof fn&&s instanceof fn||n instanceof mn&&s instanceof mn?we(n.elements,s.elements,bt):n instanceof pn&&s instanceof pn?bt(n.Re,s.Re):n instanceof sr&&s instanceof sr}(r.transform,t.transform)}class Xh{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class yr{}function tu(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new nu(r.key,St.none()):new _n(r.key,r.data,St.none());{const e=r.data,n=vt.empty();let s=new it(ct.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new te(r.key,n,new At(s.toArray()),St.none())}}function Yh(r,t,e){r instanceof _n?function(s,o,u){const l=s.value.clone(),h=xo(s.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(r,t,e):r instanceof te?function(s,o,u){if(!Qn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const l=xo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(eu(s)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function on(r,t,e,n){return r instanceof _n?function(o,u,l,h){if(!Qn(o.precondition,u))return l;const f=o.value.clone(),g=Oo(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof te?function(o,u,l,h){if(!Qn(o.precondition,u))return l;const f=Oo(o.fieldTransforms,h,u),g=u.data;return g.setAll(eu(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(r,t,e,n):function(o,u,l){return Qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(r,t,e)}function Jh(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),o=Xa(n.transform,s||null);o!=null&&(e===null&&(e=vt.empty()),e.set(n.field,o))}return e||null}function ko(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&we(n,s,(o,u)=>Wh(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class _n extends yr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class te extends yr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function eu(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function xo(r,t,e){const n=new Map;K(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let s=0;s<e.length;s++){const o=r[s],u=o.transform,l=t.data.field(o.field);n.set(o.field,Kh(u,l,e[s]))}return n}function Oo(r,t,e){const n=new Map;for(const s of r){const o=s.transform,u=e.data.field(s.field);n.set(s.field,Gh(o,u,t))}return n}class nu extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zh extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Yh(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=on(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=on(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ka();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(s.key)?null:l;const h=tu(u,l);h!==null&&n.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&we(this.mutations,t.mutations,(e,n)=>ko(e,n))&&we(this.baseMutations,t.baseMutations,(e,n)=>ko(e,n))}}class ki{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){K(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let s=function(){return qh}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,n[u].version);return new ki(t,e,n,s)}}/**
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
 */class ed{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class nd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,q;function rd(r){switch(r){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function ru(r){if(r===void 0)return Lt("GRPC error has no .code"),S.UNKNOWN;switch(r){case et.OK:return S.OK;case et.CANCELLED:return S.CANCELLED;case et.UNKNOWN:return S.UNKNOWN;case et.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case et.INTERNAL:return S.INTERNAL;case et.UNAVAILABLE:return S.UNAVAILABLE;case et.UNAUTHENTICATED:return S.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case et.NOT_FOUND:return S.NOT_FOUND;case et.ALREADY_EXISTS:return S.ALREADY_EXISTS;case et.PERMISSION_DENIED:return S.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case et.ABORTED:return S.ABORTED;case et.OUT_OF_RANGE:return S.OUT_OF_RANGE;case et.UNIMPLEMENTED:return S.UNIMPLEMENTED;case et.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:r})}}(q=et||(et={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const id=new Ht([4294967295,4294967295],0);function Mo(r){const t=wa().encode(r),e=new ga;return e.update(t),new Uint8Array(e.digest())}function Lo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ht([e,n],0),new Ht([s,o],0)]}class xi{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new tn(`Invalid padding: ${e}`);if(n<0)throw new tn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new tn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new tn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Ht.fromNumber(this.pe)}we(t,e,n){let s=t.add(e.multiply(Ht.fromNumber(n)));return s.compare(id)===1&&(s=new Ht([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Mo(t),[n,s]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,s,o);if(!this.be(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new xi(o,s,e);return n.forEach(l=>u.insert(l)),u}insert(t){if(this.pe===0)return;const e=Mo(t),[n,s]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,s,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Er(L.min(),s,new X(U),Ft(),j())}}class yn{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yn(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,n,s){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=s}}class iu{constructor(t,e){this.targetId=t,this.Ce=e}}class su{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Fo{constructor(){this.Fe=0,this.Me=Uo(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),n=j();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:M(38017,{changeType:o})}}),new yn(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=Uo()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class sd{constructor(t){this.ze=t,this.je=new Map,this.He=Ft(),this.Je=$n(),this.Ye=$n(),this.Ze=new X(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,n=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(hi(o))if(n===0){const u=new O(o.path);this.tt(e,u,_t.newNoDocument(u,L.min()))}else K(n===1,20013,{expectedCount:n});else{const u=this.ut(e);if(u!==n){const l=this.ct(t),h=l?this.lt(l,t,u):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,l;try{u=Wt(n).toUint8Array()}catch(h){if(h instanceof Sa)return Ae("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new xi(u,s,o)}catch(h){return Ae(h instanceof tn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.pe===0?null:l}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.ze.Pt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,u)=>{const l=this._t(u);if(l){if(o.current&&hi(l.target)){const h=new O(l.target.path);this.Et(h).has(u)||this.dt(u,h)||this.tt(u,h,_t.newNoDocument(h,t))}o.Le&&(e.set(u,o.qe()),o.Qe())}});let n=j();this.Ye.forEach((o,u)=>{let l=!0;u.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.He.forEach((o,u)=>u.setReadTime(t));const s=new Er(t,e,this.Ze,this.He,n);return this.He=Ft(),this.Je=$n(),this.Ye=$n(),this.Ze=new X(U),s}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Fo,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new it(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new it(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Fo),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function $n(){return new X(O.comparator)}function Uo(){return new X(O.comparator)}const od={asc:"ASCENDING",desc:"DESCENDING"},ad={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ud={and:"AND",or:"OR"};class cd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fi(r,t){return r.useProto3Json||dr(t)?t:{value:t}}function or(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ou(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function ld(r,t){return or(r,t.toTimestamp())}function Vt(r){return K(!!r,49232),L.fromTimestamp(function(e){const n=Qt(e);return new rt(n.seconds,n.nanos)}(r))}function Oi(r,t){return mi(r,t).canonicalString()}function mi(r,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function au(r){const t=J.fromString(r);return K(du(t),10190,{key:t.toString()}),t}function pi(r,t){return Oi(r.databaseId,t.path)}function Zr(r,t){const e=au(t);if(e.get(1)!==r.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O(cu(e))}function uu(r,t){return Oi(r.databaseId,t)}function hd(r){const t=au(r);return t.length===4?J.emptyPath():cu(t)}function gi(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function cu(r){return K(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Bo(r,t,e){return{name:pi(r,t),fields:e.value.mapValue.fields}}function dd(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(K(g===void 0||typeof g=="string",58123),lt.fromBase64String(g||"")):(K(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),lt.fromUint8Array(g||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const g=f.code===void 0?S.UNKNOWN:ru(f.code);return new x(g,f.message||"")}(u);e=new su(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Zr(r,n.document.name),o=Vt(n.document.updateTime),u=n.document.createTime?Vt(n.document.createTime):L.min(),l=new vt({mapValue:{fields:n.document.fields}}),h=_t.newFoundDocument(s,o,u,l),f=n.targetIds||[],g=n.removedTargetIds||[];e=new Wn(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Zr(r,n.document),o=n.readTime?Vt(n.readTime):L.min(),u=_t.newNoDocument(s,o),l=n.removedTargetIds||[];e=new Wn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Zr(r,n.document),o=n.removedTargetIds||[];e=new Wn([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new nd(s,o),l=n.targetId;e=new iu(l,u)}}return e}function fd(r,t){let e;if(t instanceof _n)e={update:Bo(r,t.key,t.value)};else if(t instanceof nu)e={delete:pi(r,t.key)};else if(t instanceof te)e={update:Bo(r,t.key,t.data),updateMask:Id(t.fieldMask)};else{if(!(t instanceof Zh))return M(16599,{ft:t.type});e={verify:pi(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const l=u.transform;if(l instanceof sr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof fn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof mn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof pn)return{fieldPath:u.field.canonicalString(),increment:l.Re};throw M(20930,{transform:u.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:ld(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(r,t.precondition)),e}function md(r,t){return r&&r.length>0?(K(t!==void 0,14353),r.map(e=>function(s,o){let u=s.updateTime?Vt(s.updateTime):Vt(o);return u.isEqual(L.min())&&(u=Vt(o)),new Xh(u,s.transformResults||[])}(e,t))):[]}function pd(r,t){return{documents:[uu(r,t.path)]}}function gd(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=uu(r,s);const o=function(f){if(f.length!==0)return hu(Dt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(I){return{field:Ee(I.field),direction:Ed(I.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=fi(r,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:s}}function _d(r){let t=hd(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){K(n===1,65062);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(v){const I=lu(v);return I instanceof Dt&&Ua(I)?I.getFilters():[I]}(e.where));let u=[];e.orderBy&&(u=function(v){return v.map(I=>function(b){return new ir(Te(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(I))}(e.orderBy));let l=null;e.limit&&(l=function(v){let I;return I=typeof v=="object"?v.value:v,dr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(v){const I=!!v.before,P=v.values||[];return new rr(P,I)}(e.startAt));let f=null;return e.endAt&&(f=function(v){const I=!v.before,P=v.values||[];return new rr(P,I)}(e.endAt)),Mh(t,s,u,o,l,"F",h,f)}function yd(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function lu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Te(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Te(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Te(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Te(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(r):r.fieldFilter!==void 0?function(e){return nt.create(Te(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(n=>lu(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(r):M(30097,{filter:r})}function Ed(r){return od[r]}function Td(r){return ad[r]}function vd(r){return ud[r]}function Ee(r){return{fieldPath:r.canonicalString()}}function Te(r){return ct.fromServerFormat(r.fieldPath)}function hu(r){return r instanceof nt?function(e){if(e.op==="=="){if(Po(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NAN"}};if(Co(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Po(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NAN"}};if(Co(e.value))return{unaryFilter:{field:Ee(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ee(e.field),op:Td(e.op),value:e.value}}}(r):r instanceof Dt?function(e){const n=e.getFilters().map(s=>hu(s));return n.length===1?n[0]:{compositeFilter:{op:vd(e.op),filters:n}}}(r):M(54877,{filter:r})}function Id(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function du(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n,s,o=L.min(),u=L.min(),l=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t){this.wt=t}}function wd(r){const t=_d({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?di(t,t.limit,"L"):t}/**
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
 */class Rd{constructor(){this.Cn=new Cd}addToCollectionParentIndex(t,e){return this.Cn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Kt.min())}updateCollectionGroup(t,e,n){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Cd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new it(J.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new it(J.comparator)).toArray()}}/**
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
 */const jo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fu=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(fu,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Pe(0)}static lr(){return new Pe(-1)}}/**
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
 */const qo="LruGarbageCollector",Pd=1048576;function $o([r,t],[e,n]){const s=U(r,e);return s===0?U(t,n):s}class Sd{constructor(t){this.Er=t,this.buffer=new it($o),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();$o(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Vd{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){N(qo,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ke(e)?N(qo,"Ignoring IndexedDB error during garbage collection: ",e):await Ne(e)}await this.mr(3e5)})}}class bd{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return C.resolve(hr.le);const n=new Sd(e);return this.gr.forEachTarget(t,s=>n.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>n.Rr(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(jo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jo):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,s,o,u,l,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,u=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(n=v,l=Date.now(),this.removeTargets(t,n,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(v=>(f=Date.now(),_e()<=$.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${s} in `+(l-u)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function Dd(r,t){return new bd(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?C.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&on(n.mutation,s,At.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=oe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Ze();return o.forEach((l,h)=>{u=u.insert(l,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,n,s){let o=Ft();const u=sn(),l=function(){return sn()}();return e.forEach((h,f)=>{const g=n.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof te)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),on(g.mutation,f,g.mutation.getFieldMask(),rt.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var v;return l.set(f,new kd(g,(v=u.get(f))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(t,e){const n=sn();let s=new X((u,l)=>u-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=n.get(h)||At.empty();g=l.applyToLocalView(f,g),n.set(h,g);const v=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,v)})}).next(()=>{const u=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,g=h.value,v=Ka();g.forEach(I=>{if(!o.has(I)){const P=tu(e.get(I),n.get(I));P!==null&&v.set(I,P),o=o.add(I)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,v))}return C.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Lh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):C.resolve(oe());let l=cn,h=o;return u.next(f=>C.forEach(f,(g,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(I=>{h=h.insert(g,I)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(g=>({batchId:l,changes:Ga(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(n=>{let s=Ze();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Ze();return this.indexManager.getCollectionParents(t,o).next(l=>C.forEach(l,h=>{const f=function(v,I){return new mr(I,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(g=>{g.forEach((v,I)=>{u=u.insert(v,I)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,_t.newInvalidDocument(g)))});let l=Ze();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&on(g.mutation,f,At.empty(),rt.now()),gr(e,f)&&(l=l.insert(h,f))}),l})}}/**
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
 */class Od{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return C.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:wd(s.bundledQuery),readTime:Vt(s.readTime)}}(e)),C.resolve()}}/**
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
 */class Md{constructor(){this.overlays=new X(O.comparator),this.Qr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.St(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Qr.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(n)),C.resolve()}getOverlaysForCollection(t,e,n){const s=oe(),o=e.length+1,u=new O(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new X((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let g=o.get(f.largestBatchId);g===null&&(g=oe(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const l=oe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>l.set(f,g)),!(l.size()>=s)););return C.resolve(l)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Qr.get(s.largestBatchId).delete(n.key);this.Qr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new ed(e,n));let o=this.Qr.get(e);o===void 0&&(o=j(),this.Qr.set(e,o)),this.Qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.$r=new it(st.Ur),this.Kr=new it(st.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new st(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.zr(new st(t,e))}jr(t,e){t.forEach(n=>this.removeReference(n,e))}Hr(t){const e=new O(new J([])),n=new st(e,t),s=new st(e,t+1),o=[];return this.Kr.forEachInRange([n,s],u=>{this.zr(u),o.push(u.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new O(new J([])),n=new st(e,t),s=new st(e,t+1);let o=j();return this.Kr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.$r.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return O.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new it(st.Ur)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new td(o,e,n,s);this.mutationQueue.push(u);for(const l of s)this.Xr=this.Xr.add(new st(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ti(n),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Ci:this.nr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),s=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([n,s],u=>{const l=this.ei(u.Zr);o.push(l)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new it(U);return e.forEach(s=>{const o=new st(s,0),u=new st(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,u],l=>{n=n.add(l.Zr)})}),C.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const u=new st(new O(o),0);let l=new it(U);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.Zr)),!0)},u),C.resolve(this.ni(l))}ni(t){const e=[];return t.forEach(n=>{const s=this.ei(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return C.forEach(e.mutations,s=>{const o=new st(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=n})}sr(t){}containsKey(t,e){const n=new st(e,0),s=this.Xr.firstAfterOrEqual(n);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t){this.ii=t,this.docs=function(){return new X(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return C.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Ft();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),C.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=Ft();const u=e.path,l=new O(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||ph(mh(g),n)<=0||(s.has(g.key)||gr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,n,s){M(9500)}si(t,e){return C.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Bd(this)}getSize(t){return C.resolve(this.size)}}class Bd extends Nd{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(n)}),C.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t){this.persistence=t,this.oi=new he(e=>Vi(e),bi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new Mi,this.targetCount=0,this.ui=Pe.cr()}forEachTarget(t,e){return this.oi.forEach((n,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),C.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Pe(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.Tr(e),C.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.oi.forEach((u,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.oi.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return C.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),C.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return C.resolve(n)}containsKey(t,e){return C.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e){this.ci={},this.overlays={},this.li=new hr(0),this.hi=!1,this.hi=!0,this.Pi=new Ld,this.referenceDelegate=t(this),this.Ti=new jd(this),this.indexManager=new Rd,this.remoteDocumentCache=function(s){return new Ud(s)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new Ad(e),this.Ei=new Od(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Md,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new Fd(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){N("MemoryPersistence","Starting transaction:",t);const s=new qd(this.li.next());return this.referenceDelegate.di(),n(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return C.or(Object.values(this.ci).map(n=>()=>n.containsKey(t,e)))}}class qd extends _h{constructor(t){super(),this.currentSequenceNumber=t}}class Li{constructor(t){this.persistence=t,this.Vi=new Mi,this.mi=null}static fi(t){return new Li(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),C.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.gi,n=>{const s=O.fromPath(n);return this.pi(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(n=>{n?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return C.or([()=>C.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class ar{constructor(t,e){this.persistence=t,this.yi=new he(n=>Th(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Dd(this,e)}static fi(t,e){return new ar(t,e)}di(){}Ai(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}br(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}yr(t,e){return C.forEach(this.yi,(n,s)=>this.Dr(t,n,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,u=>this.Dr(t,u,e).next(l=>{l||(n++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),C.resolve()}removeReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),C.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Gn(t.data.value)),e}Dr(t,e,n){return C.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return C.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.ds=n,this.As=s}static Rs(t,e){let n=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Fi(t,e.fromCache,n,s)}}/**
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
 */class $d{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class zd{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Qc()?8:yh(Gc())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.ws(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.bs(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new $d;return this.Ss(t,e,u).next(l=>{if(o.result=l,this.fs)return this.Ds(t,e,u,l.size)})}).next(()=>o.result)}Ds(t,e,n,s){return n.documentReadCount<this.gs?(_e()<=$.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",ye(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),C.resolve()):(_e()<=$.DEBUG&&N("QueryEngine","Query:",ye(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ps*s?(_e()<=$.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",ye(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Pt(e))):C.resolve())}ws(t,e){if(Do(e))return C.resolve(null);let n=Pt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=di(e,null,"F"),n=Pt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=j(...o);return this.ys.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.vs(e,l);return this.Cs(e,f,u,h.readTime)?this.ws(t,di(e,null,"F")):this.Fs(t,f,e,h)}))})))}bs(t,e,n,s){return Do(e)||s.isEqual(L.min())?C.resolve(null):this.ys.getDocuments(t,n).next(o=>{const u=this.vs(e,o);return this.Cs(e,u,n,s)?C.resolve(null):(_e()<=$.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ye(e)),this.Fs(t,u,e,fh(s,cn)).next(l=>l))})}vs(t,e){let n=new it(za(t));return e.forEach((s,o)=>{gr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,n){return _e()<=$.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",ye(e)),this.ys.getDocumentsMatchingQuery(t,e,Kt.min(),n)}Fs(t,e,n,s){return this.ys.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const Ui="LocalStore",Hd=3e8;class Gd{constructor(t,e,n,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new X(U),this.Os=new he(o=>Vi(o),bi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xd(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Kd(r,t,e,n){return new Gd(r,t,e,n)}async function pu(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],l=[];let h=j();for(const f of s){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(n,h).next(f=>({ks:f,removedBatchIds:u,addedBatchIds:l}))})})}function Qd(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(l,h,f,g){const v=f.batch,I=v.keys();let P=C.resolve();return I.forEach(b=>{P=P.next(()=>g.getEntry(h,b)).next(k=>{const D=f.docVersions.get(b);K(D!==null,48541),k.version.compareTo(D)<0&&(v.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),g.addEntry(k)))})}),P.next(()=>l.mutationQueue.removeMutationBatch(h,v))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function gu(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Wd(r,t){const e=F(r),n=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const l=[];t.targetChanges.forEach((g,v)=>{const I=s.get(v);if(!I)return;l.push(e.Ti.removeMatchingKeys(o,g.removedDocuments,v).next(()=>e.Ti.addMatchingKeys(o,g.addedDocuments,v)));let P=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,n)),s=s.insert(v,P),function(k,D,G){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=Hd?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,P,g)&&l.push(e.Ti.updateTargetData(o,P))});let h=Ft(),f=j();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),l.push(Xd(o,u,t.documentUpdates).next(g=>{h=g.qs,f=g.Qs})),!n.isEqual(L.min())){const g=e.Ti.getLastRemoteSnapshotVersion(o).next(v=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(g)}return C.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=s,o))}function Xd(r,t,e){let n=j(),s=j();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ft();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):N(Ui,"Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{qs:u,Qs:s}})}function Yd(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Ci),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Jd(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ti.getTargetData(n,t).next(o=>o?(s=o,C.resolve(s)):e.Ti.allocateTargetId(n).next(u=>(s=new $t(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ti.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.xs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(n.targetId,n),e.Os.set(t,n.targetId)),n})}async function _i(r,t,e){const n=F(r),s=n.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ke(u))throw u;N(Ui,`Failed to update sequence numbers for target ${t}: ${u}`)}n.xs=n.xs.remove(t),n.Os.delete(s.target)}function zo(r,t,e){const n=F(r);let s=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const v=F(h),I=v.Os.get(g);return I!==void 0?C.resolve(v.xs.get(I)):v.Ti.getTargetData(f,g)}(n,u,Pt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(u,l.targetId).next(h=>{o=h})}).next(()=>n.Ms.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:j())).next(l=>(Zd(n,Uh(t),l),{documents:l,$s:o})))}function Zd(r,t,e){let n=r.Ns.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Ns.set(t,n)}class Ho{constructor(){this.activeTargetIds=Hh()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tf{constructor(){this.xo=new Ho,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Ho,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ef{No(t){}shutdown(){}}/**
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
 */const Go="ConnectivityMonitor";class Ko{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Go,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){N(Go,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zn=null;function yi(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
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
 */const ti="RestConnection",nf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rf{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${s}`,this.Go=this.databaseId.database===er?`project_id=${n}`:`project_id=${n}&database_id=${s}`}zo(t,e,n,s,o){const u=yi(),l=this.jo(t,e.toUriEncodedString());N(ti,`Sending RPC '${t}' ${u}:`,l,n);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:f}=new URL(l),g=wi(f);return this.Jo(t,l,h,n,g).then(v=>(N(ti,`Received RPC '${t}' ${u}: `,v),v),v=>{throw Ae(ti,`RPC '${t}' ${u} failed with error: `,v,"url: ",l,"request:",n),v})}Yo(t,e,n,s,o,u){return this.zo(t,e,n,s,o)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),n&&n.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const n=nf[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class of extends rf{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,s,o){const u=yi();return new Promise((l,h)=>{const f=new _a;f.setWithCredentials(!0),f.listenOnce(ya.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Hn.NO_ERROR:const v=f.getResponseJson();N(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(v)),l(v);break;case Hn.TIMEOUT:N(pt,`RPC '${t}' ${u} timed out`),h(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case Hn.HTTP_ERROR:const I=f.getStatus();if(N(pt,`RPC '${t}' ${u} failed with status:`,I,"response text:",f.getResponseText()),I>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const b=P?.error;if(b&&b.status&&b.message){const k=function(G){const B=G.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(B)>=0?B:S.UNKNOWN}(b.status);h(new x(k,b.message))}else h(new x(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new x(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:t,streamId:u,P_:f.getLastErrorCode(),T_:f.getLastError()})}}finally{N(pt,`RPC '${t}' ${u} completed.`)}});const g=JSON.stringify(s);N(pt,`RPC '${t}' ${u} sending request:`,s),f.send(e,"POST",g,n,15)})}I_(t,e,n){const s=yi(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=va(),l=Ta(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const g=o.join("");N(pt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const v=u.createWebChannel(g,h);this.E_(v);let I=!1,P=!1;const b=new sf({Zo:D=>{P?N(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(N(pt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),I=!0),N(pt,`RPC '${t}' stream ${s} sending:`,D),v.send(D))},Xo:()=>v.close()}),k=(D,G,B)=>{D.listen(G,z=>{try{B(z)}catch(tt){setTimeout(()=>{throw tt},0)}})};return k(v,Je.EventType.OPEN,()=>{P||(N(pt,`RPC '${t}' stream ${s} transport opened.`),b.__())}),k(v,Je.EventType.CLOSE,()=>{P||(P=!0,N(pt,`RPC '${t}' stream ${s} transport closed`),b.u_(),this.d_(v))}),k(v,Je.EventType.ERROR,D=>{P||(P=!0,Ae(pt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),b.u_(new x(S.UNAVAILABLE,"The operation could not be completed")))}),k(v,Je.EventType.MESSAGE,D=>{var G;if(!P){const B=D.data[0];K(!!B,16349);const z=B,tt=z?.error||((G=z[0])===null||G===void 0?void 0:G.error);if(tt){N(pt,`RPC '${t}' stream ${s} received error:`,tt);const Nt=tt.status;let ot=function(_){const y=et[_];if(y!==void 0)return ru(y)}(Nt),T=tt.message;ot===void 0&&(ot=S.INTERNAL,T="Unknown error status: "+Nt+" with message "+tt.message),P=!0,b.u_(new x(ot,T)),v.close()}else N(pt,`RPC '${t}' stream ${s} received:`,B),b.c_(B)}}),k(l,Ea.STAT_EVENT,D=>{D.stat===oi.PROXY?N(pt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===oi.NOPROXY&&N(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function ei(){return typeof document<"u"?document:null}/**
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
 */function Tr(r){return new cd(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e,n=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=n,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-n);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="PersistentStream";class yu{constructor(t,e,n,s,o,u,l,h){this.xi=t,this.S_=n,this.D_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new _u(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Lt(e.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.v_===e&&this.z_(n,s)},n=>{t(()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.j_(s)})})}z_(t,e){const n=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{n(()=>this.j_(s))}),this.stream.onMessage(s=>{n(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return N(Qo,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(N(Qo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class af extends yu{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=dd(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Vt(u.readTime):L.min()}(t);return this.listener.Y_(e,n)}Z_(t){const e={};e.database=gi(this.serializer),e.addTarget=function(o,u){let l;const h=u.target;if(l=hi(h)?{documents:pd(o,h)}:{query:gd(o,h).gt},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=ou(o,u.resumeToken);const f=fi(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=or(o,u.snapshotVersion.toTimestamp());const f=fi(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const n=yd(this.serializer,t);n&&(e.labels=n),this.Q_(e)}X_(t){const e={};e.database=gi(this.serializer),e.removeTarget=t,this.Q_(e)}}class uf extends yu{constructor(t,e,n,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=md(t.writeResults,t.commitTime),n=Vt(t.commitTime);return this.listener.ra(n,e)}ia(){const t={};t.database=gi(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>fd(this.serializer,n))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{}class lf extends cf{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.zo(t,mi(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())})}Yo(t,e,n,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Yo(t,mi(e,n),s,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(S.UNKNOWN,u.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class hf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Lt(e),this.ua=!1):N("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="RemoteStore";class df{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(u=>{n.enqueueAndForget(async()=>{de(this)&&(N(ce,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.da.add(4),await En(f),f.Va.set("Unknown"),f.da.delete(4),await vr(f)}(this))})}),this.Va=new hf(n,s)}}async function vr(r){if(de(r))for(const t of r.Aa)await t(!0)}async function En(r){for(const t of r.Aa)await t(!1)}function Eu(r,t){const e=F(r);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),$i(e)?qi(e):xe(e).N_()&&ji(e,t))}function Bi(r,t){const e=F(r),n=xe(e);e.Ea.delete(t),n.N_()&&Tu(e,t),e.Ea.size===0&&(n.N_()?n.k_():de(e)&&e.Va.set("Unknown"))}function ji(r,t){if(r.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}xe(r).Z_(t)}function Tu(r,t){r.ma.Ke(t),xe(r).X_(t)}function qi(r){r.ma=new sd({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Ea.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),xe(r).start(),r.Va.ca()}function $i(r){return de(r)&&!xe(r).O_()&&r.Ea.size>0}function de(r){return F(r).da.size===0}function vu(r){r.ma=void 0}async function ff(r){r.Va.set("Online")}async function mf(r){r.Ea.forEach((t,e)=>{ji(r,t)})}async function pf(r,t){vu(r),$i(r)?(r.Va.Pa(t),qi(r)):r.Va.set("Unknown")}async function gf(r,t,e){if(r.Va.set("Online"),t instanceof su&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const l of o.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,u),s.Ea.delete(l),s.ma.removeTarget(l))}(r,t)}catch(n){N(ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ur(r,n)}else if(t instanceof Wn?r.ma.Xe(t):t instanceof iu?r.ma.ot(t):r.ma.nt(t),!e.isEqual(L.min()))try{const n=await gu(r.localStore);e.compareTo(n)>=0&&await function(o,u){const l=o.ma.It(u);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.Ea.get(f);g&&o.Ea.set(f,g.withResumeToken(h.resumeToken,u))}}),l.targetMismatches.forEach((h,f)=>{const g=o.Ea.get(h);if(!g)return;o.Ea.set(h,g.withResumeToken(lt.EMPTY_BYTE_STRING,g.snapshotVersion)),Tu(o,h);const v=new $t(g.target,h,f,g.sequenceNumber);ji(o,v)}),o.remoteSyncer.applyRemoteEvent(l)}(r,e)}catch(n){N(ce,"Failed to raise snapshot:",n),await ur(r,n)}}async function ur(r,t,e){if(!ke(t))throw t;r.da.add(1),await En(r),r.Va.set("Offline"),e||(e=()=>gu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{N(ce,"Retrying IndexedDB access"),await e(),r.da.delete(1),await vr(r)})}function Iu(r,t){return t().catch(e=>ur(r,e,t))}async function Ir(r){const t=F(r),e=Yt(t);let n=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:Ci;for(;_f(t);)try{const s=await Yd(t.localStore,n);if(s===null){t.Ia.length===0&&e.k_();break}n=s.batchId,yf(t,s)}catch(s){await ur(t,s)}Au(t)&&wu(t)}function _f(r){return de(r)&&r.Ia.length<10}function yf(r,t){r.Ia.push(t);const e=Yt(r);e.N_()&&e.ea&&e.ta(t.mutations)}function Au(r){return de(r)&&!Yt(r).O_()&&r.Ia.length>0}function wu(r){Yt(r).start()}async function Ef(r){Yt(r).ia()}async function Tf(r){const t=Yt(r);for(const e of r.Ia)t.ta(e.mutations)}async function vf(r,t,e){const n=r.Ia.shift(),s=ki.from(n,t,e);await Iu(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ir(r)}async function If(r,t){t&&Yt(r).ea&&await async function(n,s){if(function(u){return rd(u)&&u!==S.ABORTED}(s.code)){const o=n.Ia.shift();Yt(n).L_(),await Iu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ir(n)}}(r,t),Au(r)&&wu(r)}async function Wo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),N(ce,"RemoteStore received new credentials");const n=de(e);e.da.add(3),await En(e),n&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await vr(e)}async function Af(r,t){const e=F(r);t?(e.da.delete(2),await vr(e)):t||(e.da.add(2),await En(e),e.Va.set("Unknown"))}function xe(r){return r.fa||(r.fa=function(e,n,s){const o=F(e);return o.oa(),new af(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{e_:ff.bind(null,r),n_:mf.bind(null,r),i_:pf.bind(null,r),Y_:gf.bind(null,r)}),r.Aa.push(async t=>{t?(r.fa.L_(),$i(r)?qi(r):r.Va.set("Unknown")):(await r.fa.stop(),vu(r))})),r.fa}function Yt(r){return r.ga||(r.ga=function(e,n,s){const o=F(e);return o.oa(),new uf(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:Ef.bind(null,r),i_:If.bind(null,r),na:Tf.bind(null,r),ra:vf.bind(null,r)}),r.Aa.push(async t=>{t?(r.ga.L_(),await Ir(r)):(await r.ga.stop(),r.Ia.length>0&&(N(ce,`Stopping write stream with ${r.Ia.length} pending writes`),r.Ia=[]))})),r.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,l=new zi(t,e,u,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hi(r,t){if(Lt("AsyncQueue",`${t}: ${r}`),ke(r))return new x(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static emptySet(t){return new Ie(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=Ze(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ie)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ie;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.pa=new X(O.comparator)}track(t){const e=t.doc.key,n=this.pa.get(e);n?t.type!==0&&n.type===3?this.pa=this.pa.insert(e,t):t.type===3&&n.type!==1?this.pa=this.pa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.pa=this.pa.remove(e):t.type===1&&n.type===2?this.pa=this.pa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,ya:n}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,n)=>{t.push(n)}),t}}class Se{constructor(t,e,n,s,o,u,l,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new Se(t,e,Ie.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class Rf{constructor(){this.queries=Yo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,n){const s=F(e),o=s.queries;s.queries=Yo(),o.forEach((u,l)=>{for(const h of l.Sa)h.onError(n)})})(this,new x(S.ABORTED,"Firestore shutting down"))}}function Yo(){return new he(r=>$a(r),pr)}async function Cf(r,t){const e=F(r);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(n=2):(o=new wf,n=t.va()?0:1);try{switch(n){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const l=Hi(u,`Initialization of query '${ye(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&Gi(e)}async function Pf(r,t){const e=F(r),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Sf(r,t){const e=F(r);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const l of u.Sa)l.Ma(s)&&(n=!0);u.ba=s}}n&&Gi(e)}function Vf(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);n.queries.delete(t)}function Gi(r){r.Ca.forEach(t=>{t.next()})}var Ei,Jo;(Jo=Ei||(Ei={})).xa="default",Jo.Cache="cache";class bf{constructor(t,e,n){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Se(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const n=e!=="Offline";return(!this.options.Qa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Ei.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t){this.key=t}}class Cu{constructor(t){this.key=t}}class Df{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=j(),this.mutatedKeys=j(),this.Za=za(t),this.Xa=new Ie(this.Za)}get eu(){return this.Ha}tu(t,e){const n=e?e.nu:new Xo,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,v)=>{const I=s.get(g),P=gr(this.query,v)?v:null,b=!!I&&this.mutatedKeys.has(I.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;I&&P?I.data.isEqual(P.data)?b!==k&&(n.track({type:3,doc:P}),D=!0):this.ru(I,P)||(n.track({type:2,doc:P}),D=!0,(h&&this.Za(P,h)>0||f&&this.Za(P,f)<0)&&(l=!0)):!I&&P?(n.track({type:0,doc:P}),D=!0):I&&!P&&(n.track({type:1,doc:I}),D=!0,(h||f)&&(l=!0)),D&&(P?(u=u.add(P),o=k?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{Xa:u,nu:n,Cs:l,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const u=t.nu.wa();u.sort((g,v)=>function(P,b){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:D})}};return k(P)-k(b)}(g.type,v.type)||this.Za(g.doc,v.doc)),this.iu(n),s=s!=null&&s;const l=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,f=h!==this.Ja;return this.Ja=h,u.length!==0||f?{snapshot:new Se(this.query,t.Xa,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Xo,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=j(),this.Xa.forEach(n=>{this._u(n.key)&&(this.Ya=this.Ya.add(n.key))});const e=[];return t.forEach(n=>{this.Ya.has(n)||e.push(new Cu(n))}),this.Ya.forEach(n=>{t.has(n)||e.push(new Ru(n))}),e}au(t){this.Ha=t.$s,this.Ya=j();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return Se.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Ki="SyncEngine";class Nf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class kf{constructor(t){this.key=t,this.cu=!1}}class xf{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.lu={},this.hu=new he(l=>$a(l),pr),this.Pu=new Map,this.Tu=new Set,this.Iu=new X(O.comparator),this.Eu=new Map,this.du=new Mi,this.Au={},this.Ru=new Map,this.Vu=Pe.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Of(r,t,e=!0){const n=Nu(r);let s;const o=n.hu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await Pu(n,t,e,!0),s}async function Mf(r,t){const e=Nu(r);await Pu(e,t,!0,!1)}async function Pu(r,t,e,n){const s=await Jd(r.localStore,Pt(t)),o=s.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await Lf(r,t,o,u==="current",s.resumeToken)),r.isPrimaryClient&&e&&Eu(r.remoteStore,s),l}async function Lf(r,t,e,n,s){r.fu=(v,I,P)=>async function(k,D,G,B){let z=D.view.tu(G);z.Cs&&(z=await zo(k.localStore,D.query,!1).then(({documents:T})=>D.view.tu(T,z)));const tt=B&&B.targetChanges.get(D.targetId),Nt=B&&B.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(z,k.isPrimaryClient,tt,Nt);return ta(k,D.targetId,ot.ou),ot.snapshot}(r,v,I,P);const o=await zo(r.localStore,t,!0),u=new Df(t,o.$s),l=u.tu(o.documents),h=yn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),f=u.applyChanges(l,r.isPrimaryClient,h);ta(r,e,f.ou);const g=new Nf(t,e,u);return r.hu.set(t,g),r.Pu.has(e)?r.Pu.get(e).push(t):r.Pu.set(e,[t]),f.snapshot}async function Ff(r,t,e){const n=F(r),s=n.hu.get(t),o=n.Pu.get(s.targetId);if(o.length>1)return n.Pu.set(s.targetId,o.filter(u=>!pr(u,t))),void n.hu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _i(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Bi(n.remoteStore,s.targetId),Ti(n,s.targetId)}).catch(Ne)):(Ti(n,s.targetId),await _i(n.localStore,s.targetId,!0))}async function Uf(r,t){const e=F(r),n=e.hu.get(t),s=e.Pu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Bi(e.remoteStore,n.targetId))}async function Bf(r,t,e){const n=Kf(r);try{const s=await function(u,l){const h=F(u),f=rt.now(),g=l.reduce((P,b)=>P.add(b.key),j());let v,I;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let b=Ft(),k=j();return h.Bs.getEntries(P,g).next(D=>{b=D,b.forEach((G,B)=>{B.isValidDocument()||(k=k.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,b)).next(D=>{v=D;const G=[];for(const B of l){const z=Jh(B,v.get(B.key).overlayedDocument);z!=null&&G.push(new te(B.key,z,Ma(z.value.mapValue),St.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,G,l)}).next(D=>{I=D;const G=D.applyToLocalDocumentSet(v,k);return h.documentOverlayCache.saveOverlays(P,D.batchId,G)})}).then(()=>({batchId:I.batchId,changes:Ga(v)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(u,l,h){let f=u.Au[u.currentUser.toKey()];f||(f=new X(U)),f=f.insert(l,h),u.Au[u.currentUser.toKey()]=f}(n,s.batchId,e),await Tn(n,s.changes),await Ir(n.remoteStore)}catch(s){const o=Hi(s,"Failed to persist write");e.reject(o)}}async function Su(r,t){const e=F(r);try{const n=await Wd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Eu.get(o);u&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.cu=!0:s.modifiedDocuments.size>0?K(u.cu,14607):s.removedDocuments.size>0&&(K(u.cu,42227),u.cu=!1))}),await Tn(e,n,t)}catch(n){await Ne(n)}}function Zo(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.hu.forEach((o,u)=>{const l=u.view.Fa(t);l.snapshot&&s.push(l.snapshot)}),function(u,l){const h=F(u);h.onlineState=l;let f=!1;h.queries.forEach((g,v)=>{for(const I of v.Sa)I.Fa(l)&&(f=!0)}),f&&Gi(h)}(n.eventManager,t),s.length&&n.lu.Y_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function jf(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Eu.get(t),o=s&&s.key;if(o){let u=new X(O.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const l=j().add(o),h=new Er(L.min(),new Map,new X(U),u,l);await Su(n,h),n.Iu=n.Iu.remove(o),n.Eu.delete(t),Qi(n)}else await _i(n.localStore,t,!1).then(()=>Ti(n,t,e)).catch(Ne)}async function qf(r,t){const e=F(r),n=t.batch.batchId;try{const s=await Qd(e.localStore,t);bu(e,n,null),Vu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Tn(e,s)}catch(s){await Ne(s)}}async function $f(r,t,e){const n=F(r);try{const s=await function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,l).next(v=>(K(v!==null,37113),g=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(n.localStore,t);bu(n,t,e),Vu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Tn(n,s)}catch(s){await Ne(s)}}function Vu(r,t){(r.Ru.get(t)||[]).forEach(e=>{e.resolve()}),r.Ru.delete(t)}function bu(r,t,e){const n=F(r);let s=n.Au[n.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),n.Au[n.currentUser.toKey()]=s}}function Ti(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Pu.get(t))r.hu.delete(n),e&&r.lu.gu(n,e);r.Pu.delete(t),r.isPrimaryClient&&r.du.Hr(t).forEach(n=>{r.du.containsKey(n)||Du(r,n)})}function Du(r,t){r.Tu.delete(t.path.canonicalString());const e=r.Iu.get(t);e!==null&&(Bi(r.remoteStore,e),r.Iu=r.Iu.remove(t),r.Eu.delete(e),Qi(r))}function ta(r,t,e){for(const n of e)n instanceof Ru?(r.du.addReference(n.key,t),zf(r,n)):n instanceof Cu?(N(Ki,"Document no longer in limbo: "+n.key),r.du.removeReference(n.key,t),r.du.containsKey(n.key)||Du(r,n.key)):M(19791,{pu:n})}function zf(r,t){const e=t.key,n=e.path.canonicalString();r.Iu.get(e)||r.Tu.has(n)||(N(Ki,"New document in limbo: "+e),r.Tu.add(n),Qi(r))}function Qi(r){for(;r.Tu.size>0&&r.Iu.size<r.maxConcurrentLimboResolutions;){const t=r.Tu.values().next().value;r.Tu.delete(t);const e=new O(J.fromString(t)),n=r.Vu.next();r.Eu.set(n,new kf(e)),r.Iu=r.Iu.insert(e,n),Eu(r.remoteStore,new $t(Pt(Di(e.path)),n,"TargetPurposeLimboResolution",hr.le))}}async function Tn(r,t,e){const n=F(r),s=[],o=[],u=[];n.hu.isEmpty()||(n.hu.forEach((l,h)=>{u.push(n.fu(h,t,e).then(f=>{var g;if((f||e)&&n.isPrimaryClient){const v=f?!f.fromCache:(g=e?.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;n.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){s.push(f);const v=Fi.Rs(h.targetId,f);o.push(v)}}))}),await Promise.all(u),n.lu.Y_(s),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(f,I=>C.forEach(I.ds,P=>g.persistence.referenceDelegate.addReference(v,I.targetId,P)).next(()=>C.forEach(I.As,P=>g.persistence.referenceDelegate.removeReference(v,I.targetId,P)))))}catch(v){if(!ke(v))throw v;N(Ui,"Failed to update sequence numbers: "+v)}for(const v of f){const I=v.targetId;if(!v.fromCache){const P=g.xs.get(I),b=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(b);g.xs=g.xs.insert(I,k)}}}(n.localStore,o))}async function Hf(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){N(Ki,"User change. New user:",t.toKey());const n=await pu(e.localStore,t);e.currentUser=t,function(o,u){o.Ru.forEach(l=>{l.forEach(h=>{h.reject(new x(S.CANCELLED,u))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tn(e,n.ks)}}function Gf(r,t){const e=F(r),n=e.Eu.get(t);if(n&&n.cu)return j().add(n.key);{let s=j();const o=e.Pu.get(t);if(!o)return s;for(const u of o){const l=e.hu.get(u);s=s.unionWith(l.view.eu)}return s}}function Nu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Su.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Gf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jf.bind(null,t),t.lu.Y_=Sf.bind(null,t.eventManager),t.lu.gu=Vf.bind(null,t.eventManager),t}function Kf(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$f.bind(null,t),t}class cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Kd(this.persistence,new zd,t.initialUser,this.serializer)}Su(t){return new mu(Li.fi,this.serializer)}bu(t){return new tf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cr.provider={build:()=>new cr};class Qf extends cr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){K(this.persistence.referenceDelegate instanceof ar,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Vd(n,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new mu(n=>ar.fi(n,e),this.serializer)}}class vi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Zo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hf.bind(null,this.syncEngine),await Af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Rf}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),n=function(o){return new of(o)}(t.databaseInfo);return function(o,u,l,h){return new lf(o,u,l,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,l){return new df(n,s,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Zo(this.syncEngine,e,0),function(){return Ko.C()?new Ko:new ef}())}createSyncEngine(t,e){return function(s,o,u,l,h,f,g){const v=new xf(s,o,u,l,h,f);return g&&(v.mu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);N(ce,"RemoteStore shutting down."),o.da.add(5),await En(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}vi.provider={build:()=>new vi};/**
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
 */class Wf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Lt("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="FirestoreClient";class Xf{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Ra.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{N(Jt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(N(Jt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Hi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ni(r,t){r.asyncQueue.verifyOperationInProgress(),N(Jt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await pu(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ea(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Yf(r);N(Jt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Wo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Wo(t.remoteStore,s)),r._onlineComponents=t}async function Yf(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){N(Jt,"Using user provided OfflineComponentProvider");try{await ni(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Ae("Error using user provided cache. Falling back to memory cache: "+e),await ni(r,new cr)}}else N(Jt,"Using default OfflineComponentProvider"),await ni(r,new Qf(void 0));return r._offlineComponents}async function ku(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(N(Jt,"Using user provided OnlineComponentProvider"),await ea(r,r._uninitializedComponentsProvider._online)):(N(Jt,"Using default OnlineComponentProvider"),await ea(r,new vi))),r._onlineComponents}function Jf(r){return ku(r).then(t=>t.syncEngine)}async function Zf(r){const t=await ku(r),e=t.eventManager;return e.onListen=Of.bind(null,t.syncEngine),e.onUnlisten=Ff.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Mf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Uf.bind(null,t.syncEngine),e}function tm(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,l,h,f){const g=new Wf({next:I=>{g.xu(),u.enqueueAndForget(()=>Pf(o,v));const P=I.docs.has(l);!P&&I.fromCache?f.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&h&&h.source==="server"?f.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(I)},error:I=>f.reject(I)}),v=new bf(Di(l.path),g,{includeMetadataChanges:!0,Qa:!0});return Cf(o,v)}(await Zf(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function xu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */function em(r,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function nm(r,t,e,n){if(t===!0&&n===!0)throw new x(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function ra(r){if(!O.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function le(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wi(r);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const Ou="firestore.googleapis.com",ia=!0;class sa{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ou,this.ssl=ia}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ia;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=fu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Pd)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}nm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Xi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ih;switch(n.type){case"firstParty":return new uh(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=na.get(e);n&&(N("ComponentProvider","Removing Datastore"),na.delete(e),n.terminate())}(this),Promise.resolve()}}function rm(r,t,e,n={}){var s;r=le(r,Xi);const o=wi(t),u=r._getSettings(),l=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(jc(`https://${h}`),Hc("Firestore",!0)),u.host!==Ou&&u.host!==h&&Ae("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:n});if(!Yn(f,l)&&(r._setSettings(f),n.mockUserToken)){let g,v;if(typeof n.mockUserToken=="string")g=n.mockUserToken,v=gt.MOCK_USER;else{g=qc(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const I=n.mockUserToken.sub||n.mockUserToken.user_id;if(!I)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new gt(I)}r._authCredentials=new sh(new Aa(g,v))}}/**
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
 */class Yi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yi(this.firestore,t,this._query)}}class wt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class gn extends Yi{constructor(t,e,n){super(t,e,Di(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new O(t))}withConverter(t){return new gn(this.firestore,t,this._path)}}function vm(r,t,...e){if(r=ae(r),arguments.length===1&&(t=Ra.newId()),em("doc","path",t),r instanceof Xi){const n=J.fromString(t,...e);return ra(n),new wt(r,null,new O(n))}{if(!(r instanceof wt||r instanceof gn))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return ra(n),new wt(r.firestore,r instanceof gn?r.converter:null,new O(n))}}/**
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
 */const oa="AsyncQueue";class aa{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new _u(this,"async_queue_retry"),this.rc=()=>{const n=ei();n&&N(oa,"Visibility state changed to "+n.visibilityState),this.x_.b_()},this.sc=t;const e=ei();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=ei();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new Gt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!ke(t))throw t;N(oa,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(n=>{throw this.Xu=n,this.ec=!1,Lt("INTERNAL UNHANDLED ERROR: ",ua(n)),n}).then(n=>(this.ec=!1,n))));return this.sc=e,e}enqueueAfterDelay(t,e,n){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=zi.createAndSchedule(this,t,e,n,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&M(47125,{cc:ua(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function ua(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Ar extends Xi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new aa,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new aa(t),this._firestoreClient=void 0,await t}}}function Im(r,t){const e=typeof r=="object"?r:Hl(),n=typeof r=="string"?r:er,s=Ul(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Uc("firestore");o&&rm(s,...o)}return s}function Mu(r){if(r._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||im(r),r._firestoreClient}function im(r){var t,e,n;const s=r._freezeSettings(),o=function(l,h,f,g){return new Ah(l,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,xu(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Xf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(l){const h=l?._online.build();return{_offline:l?._offline.build(h),_online:h}}(r._componentsProvider))}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(lt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class wr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Rr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/^__.*__$/;class om{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}class Lu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new te(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Fu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:r})}}class ts{constructor(t,e,n,s,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:n,Rc:!1});return s.Vc(t),s}mc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:n,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return lr(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(Fu(this.Ic)&&sm.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class am{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Tr(t)}bc(t,e,n,s=!1){return new ts({Ic:t,methodName:e,wc:n,path:ct.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uu(r){const t=r._freezeSettings(),e=Tr(r._databaseId);return new am(r._databaseId,!!t.ignoreUndefinedProperties,e)}function um(r,t,e,n,s,o={}){const u=r.bc(o.merge||o.mergeFields?2:0,t,e,s);ns("Data must be an object, but it was:",u,n);const l=Bu(n,u);let h,f;if(o.merge)h=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const v of o.mergeFields){const I=Ii(t,v,e);if(!u.contains(I))throw new x(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);qu(g,I)||g.push(I)}h=new At(g),f=u.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=u.fieldTransforms;return new om(new vt(l),h,f)}class Cr extends Rr{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Cr}}class es extends Rr{constructor(t,e){super(t),this.Dc=e}_toFieldTransform(t){const e=new pn(t.serializer,Wa(t.serializer,this.Dc));return new Qh(t.path,e)}isEqual(t){return t instanceof es&&this.Dc===t.Dc}}function cm(r,t,e,n){const s=r.bc(1,t,e);ns("Data must be an object, but it was:",s,n);const o=[],u=vt.empty();Zt(n,(h,f)=>{const g=rs(t,h,e);f=ae(f);const v=s.mc(g);if(f instanceof Cr)o.push(g);else{const I=Pr(f,v);I!=null&&(o.push(g),u.set(g,I))}});const l=new At(o);return new Lu(u,l,s.fieldTransforms)}function lm(r,t,e,n,s,o){const u=r.bc(1,t,e),l=[Ii(t,n,e)],h=[s];if(o.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)l.push(Ii(t,o[I])),h.push(o[I+1]);const f=[],g=vt.empty();for(let I=l.length-1;I>=0;--I)if(!qu(f,l[I])){const P=l[I];let b=h[I];b=ae(b);const k=u.mc(P);if(b instanceof Cr)f.push(P);else{const D=Pr(b,k);D!=null&&(f.push(P),g.set(P,D))}}const v=new At(f);return new Lu(g,v,u.fieldTransforms)}function Pr(r,t){if(ju(r=ae(r)))return ns("Unsupported field value:",t,r),Bu(r,t);if(r instanceof Rr)return function(n,s){if(!Fu(s.Ic))throw s.gc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(n,s){const o=[];let u=0;for(const l of n){let h=Pr(l,s.fc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,s){if((n=ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Wa(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=rt.fromDate(n);return{timestampValue:or(s.serializer,o)}}if(n instanceof rt){const o=new rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:or(s.serializer,o)}}if(n instanceof Ji)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:ou(s.serializer,n._byteString)};if(n instanceof wt){const o=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw s.gc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Oi(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Zi)return function(u,l){return{mapValue:{fields:{[ka]:{stringValue:Oa},[nr]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw l.gc("VectorValues must only contain numeric values.");return Ni(l.serializer,f)})}}}}}}(n,s);throw s.gc(`Unsupported field value: ${Wi(n)}`)}(r,t)}function Bu(r,t){const e={};return Pa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zt(r,(n,s)=>{const o=Pr(s,t.Ac(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function ju(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof rt||r instanceof Ji||r instanceof Ve||r instanceof wt||r instanceof Rr||r instanceof Zi)}function ns(r,t,e){if(!ju(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Wi(e);throw n==="an object"?t.gc(r+" a custom object"):t.gc(r+" "+n)}}function Ii(r,t,e){if((t=ae(t))instanceof wr)return t._internalPath;if(typeof t=="string")return rs(r,t);throw lr("Field path arguments must be of type string or ",r,!1,void 0,e)}const hm=new RegExp("[~\\*/\\[\\]]");function rs(r,t,e){if(t.search(hm)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new wr(...t.split("."))._internalPath}catch{throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function lr(r,t,e,n,s){const o=n&&!n.isEmpty(),u=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${s}`),h+=")"),new x(S.INVALID_ARGUMENT,l+r+h)}function qu(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class $u{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new dm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(zu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class dm extends $u{data(){return super.data()}}function zu(r,t){return typeof t=="string"?rs(r,t):t instanceof wr?t._internalPath:t._delegate._internalPath}class fm{convertValue(t,e="none"){switch(Xt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Wt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Zt(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[nr].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>Z(u.doubleValue));return new Zi(o)}convertGeoPoint(t){return new Ji(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=fr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ln(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);K(du(n),9688,{name:t});const s=new hn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return s.isEqual(e)||Lt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function mm(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class pm{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hu extends $u{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(zu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class gm extends Hu{data(t={}){return super.data(t)}}/**
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
 */function Am(r){r=le(r,wt);const t=le(r.firestore,Ar);return tm(Mu(t),r._key).then(e=>ym(t,r,e))}class _m extends fm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function wm(r,t,e){r=le(r,wt);const n=le(r.firestore,Ar),s=mm(r.converter,t);return Gu(n,[um(Uu(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,St.none())])}function Rm(r,t,e,...n){r=le(r,wt);const s=le(r.firestore,Ar),o=Uu(s);let u;return u=typeof(t=ae(t))=="string"||t instanceof wr?lm(o,"updateDoc",r._key,t,e,n):cm(o,"updateDoc",r._key,t),Gu(s,[u.toMutation(r._key,St.exists(!0))])}function Gu(r,t){return function(n,s){const o=new Gt;return n.asyncQueue.enqueueAndForget(async()=>Bf(await Jf(n),s,o)),o.promise}(Mu(r),t)}function ym(r,t,e){const n=e.docs.get(t._key),s=new _m(r);return new Hu(r,s,t._key,n,new pm(e.hasPendingWrites,e.fromCache),t.converter)}function Cm(r){return new es("increment",r)}(function(t,e=!0){(function(s){De=s})($l),Zn(new an("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new Ar(new oh(n.getProvider("auth-internal")),new ch(u,n.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(f.options.projectId,g)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ve(mo,po,t),ve(mo,po,"esm2017")})();export{Am as a,Cm as b,vm as d,Im as g,zl as i,wm as s,Rm as u};
