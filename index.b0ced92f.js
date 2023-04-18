function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=Object.defineProperty,n=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);const s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r=/^-?[0-9]\d*$/,o=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,l=t=>"string"!=typeof t||""===t;var c=(t=>(t.Required="required",t.Email="email",t.MinLength="minLength",t.MaxLength="maxLength",t.Password="password",t.Number="number",t.Integer="integer",t.MaxNumber="maxNumber",t.MinNumber="minNumber",t.StrongPassword="strongPassword",t.CustomRegexp="customRegexp",t.MinFilesCount="minFilesCount",t.MaxFilesCount="maxFilesCount",t.Files="files",t))(c||{}),h=(t=>(t.Required="required",t))(h||{}),u=(t=>(t.Label="label",t.LabelArrow="labelArrow",t))(u||{});const d=[{key:c.Required,dict:{en:"The field is required"}},{key:c.Email,dict:{en:"Email has invalid format"}},{key:c.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:c.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:c.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:c.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:c.Number,dict:{en:"Value should be a number"}},{key:c.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:c.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:c.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:c.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:c.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],f=t=>"object"==typeof t&&null!==t&&"then"in t&&"function"==typeof t.then,p=t=>Array.isArray(t)?t.filter((t=>t.length>0)):"string"==typeof t&&t.trim()?[...t.split(" ").filter((t=>t.length>0))]:[],g=t=>t instanceof Element||t instanceof HTMLDocument,m={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1};var y,v,b={};
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */y=b,v=function(t){var e=function(t){return new e.lib.init(t)};function i(t,e){return e.offset[t]?isNaN(e.offset[t])?e.offset[t]:e.offset[t]+"px":"0px"}function n(t,e){return!(!t||"string"!=typeof e||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(e)>-1))}return e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:"1.12.0",constructor:e,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||e.defaults.text,this.options.node=t.node||e.defaults.node,this.options.duration=0===t.duration?0:t.duration||e.defaults.duration,this.options.selector=t.selector||e.defaults.selector,this.options.callback=t.callback||e.defaults.callback,this.options.destination=t.destination||e.defaults.destination,this.options.newWindow=t.newWindow||e.defaults.newWindow,this.options.close=t.close||e.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=t.positionLeft||e.defaults.positionLeft,this.options.position=t.position||e.defaults.position,this.options.backgroundColor=t.backgroundColor||e.defaults.backgroundColor,this.options.avatar=t.avatar||e.defaults.avatar,this.options.className=t.className||e.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?e.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||e.defaults.onClick,this.options.offset=t.offset||e.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||e.defaults.ariaLive,this.options.style=t.style||e.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var e in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[e]=this.options.style[e];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var n=document.createElement("img");n.src=this.options.avatar,n.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(n):t.insertAdjacentElement("afterbegin",n)}if(!0===this.options.close){var s=document.createElement("button");s.type="button",s.setAttribute("aria-label","Close"),s.className="toast-close",s.innerHTML="&#10006;",s.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var r=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&r>360?t.insertAdjacentElement("afterbegin",s):t.appendChild(s)}if(this.options.stopOnFocus&&this.options.duration>0){var o=this;t.addEventListener("mouseover",(function(e){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){o.removeElement(t)}),o.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=i("x",this.options),l=i("y",this.options),c="left"==this.options.position?a:"-"+a,h="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+c+","+h+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var i=e.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,i),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),e.reposition()}.bind(this),400)}},e.reposition=function(){for(var t,e={top:15,bottom:15},i={top:15,bottom:15},s={top:15,bottom:15},r=document.getElementsByClassName("toastify"),o=0;o<r.length;o++){t=!0===n(r[o],"toastify-top")?"toastify-top":"toastify-bottom";var a=r[o].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(r[o].style[t]=s[t]+"px",s[t]+=a+15):!0===n(r[o],"toastify-left")?(r[o].style[t]=e[t]+"px",e[t]+=a+15):(r[o].style[t]=i[t]+"px",i[t]+=a+15)}return this},e.lib.init.prototype=e.lib,e},b?b=v():y.Toastify=v();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var w,E,C,T=w={};function S(){throw new Error("setTimeout has not been defined")}function I(){throw new Error("clearTimeout has not been defined")}function A(t){if(E===setTimeout)return setTimeout(t,0);if((E===S||!E)&&setTimeout)return E=setTimeout,setTimeout(t,0);try{return E(t,0)}catch(e){try{return E.call(null,t,0)}catch(e){return E.call(this,t,0)}}}!function(){try{E="function"==typeof setTimeout?setTimeout:S}catch(t){E=S}try{C="function"==typeof clearTimeout?clearTimeout:I}catch(t){C=I}}();var k,D=[],N=!1,_=-1;function L(){N&&k&&(N=!1,k.length?D=k.concat(D):_=-1,D.length&&F())}function F(){if(!N){var t=A(L);N=!0;for(var e=D.length;e;){for(k=D,D=[];++_<e;)k&&k[_].run();_=-1,e=D.length}k=null,N=!1,function(t){if(C===clearTimeout)return clearTimeout(t);if((C===I||!C)&&clearTimeout)return C=clearTimeout,clearTimeout(t);try{return C(t)}catch(e){try{return C.call(null,t)}catch(e){return C.call(this,t)}}}(t)}}function O(t,e){this.fun=t,this.array=e}function x(){}T.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];D.push(new O(t,e)),1!==D.length||N||A(F)},O.prototype.run=function(){this.fun.apply(null,this.array)},T.title="browser",T.browser=!0,T.env={},T.argv=[],T.version="",T.versions={},T.on=x,T.addListener=x,T.once=x,T.off=x,T.removeListener=x,T.removeAllListeners=x,T.emit=x,T.prependListener=x,T.prependOnceListener=x,T.listeners=function(t){return[]},T.binding=function(t){throw new Error("process.binding is not supported")},T.cwd=function(){return"/"},T.chdir=function(t){throw new Error("process.chdir is not supported")},T.umask=function(){return 0};const M=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=63&s|128):55296==(64512&s)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++n)),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=63&s|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=63&s|128)}return e},R={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),n.push(i[c],i[h],i[u],i[d])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,n=0;for(;i<t.length;){const s=t[i++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[i++];e[n++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[n++]=String.fromCharCode(55296+(r>>10)),e[n++]=String.fromCharCode(56320+(1023&r))}else{const r=t[i++],o=t[i++];e[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let e=0;e<t.length;){const s=i[t.charAt(e++)],r=e<t.length?i[t.charAt(e)]:0;++e;const o=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw new V;const l=s<<2|r>>4;if(n.push(l),64!==o){const t=r<<4&240|o>>2;if(n.push(t),64!==a){const t=o<<6&192|a;n.push(t)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P=function(t){return function(t){const e=M(t);return R.encodeByteArray(e,!0)}(t).replace(/\./g,"")},U=function(t){try{return R.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const B=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,j=()=>{try{return B()||(()=>{if(void 0===w||void 0===w.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&U(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},$=t=>{const e=(t=>{var e,i;return null===(i=null===(e=j())||void 0===e?void 0:e.emulatorHosts)||void 0===i?void 0:i[t]})(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(i+1),10);return"["===e[0]?[e.substring(1,i-1),n]:[e.substring(0,i),n]},q=()=>{var t;return null===(t=j())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
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
 */function H(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=e||"demo-project",n=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[P(JSON.stringify({alg:"none",type:"JWT"})),P(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){try{return"object"==typeof indexedDB}catch(t){return!1}}class K extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Q.prototype.create)}}class Q{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(W,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(s,i):"Error",o=`${this.serviceName}: ${r} (${n}).`;return new K(n,o,i)}}const W=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const s of i){if(!n.includes(s))return!1;const i=t[s],r=e[s];if(Y(i)&&Y(r)){if(!X(i,r))return!1}else if(i!==r)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function Y(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function J(t){return t&&t._delegate?t._delegate:t}class Z{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const tt="[DEFAULT]";
/**
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
 */class et{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new G;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:tt})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t=tt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=tt){return this.instances.has(t)}getOptions(t=tt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(t)&&e.resolve(n)}return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),s=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;s.add(t),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&t(r,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,n===tt?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t=tt){return this.component?this.component.multipleInstances?t:tt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class it{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new et(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=[];var st,rt;(rt=st||(st={}))[rt.DEBUG=0]="DEBUG",rt[rt.VERBOSE=1]="VERBOSE",rt[rt.INFO=2]="INFO",rt[rt.WARN=3]="WARN",rt[rt.ERROR=4]="ERROR",rt[rt.SILENT=5]="SILENT";const ot={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},at=st.INFO,lt={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},ct=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),s=lt[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${n}]  ${t.name}:`,...i)};class ht{constructor(t){this.name=t,this._logLevel=at,this._logHandler=ct,this._userLogHandler=null,nt.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ot[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const ut=(t,e)=>e.some((e=>t instanceof e));let dt,ft;const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap,vt=new WeakMap;let bt={get(t,e,i){if(t instanceof IDBTransaction){if("done"===e)return gt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||mt.get(t);if("store"===e)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Ct(t[e])},set:(t,e,i)=>(t[e]=i,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function wt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ft||(ft=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Tt(this),e),Ct(pt.get(this))}:function(...e){return Ct(t.apply(Tt(this),e))}:function(e,...i){const n=t.call(Tt(this),e,...i);return mt.set(n,e.sort?e.sort():[e]),Ct(n)}}function Et(t){return"function"==typeof t?wt(t):(t instanceof IDBTransaction&&function(t){if(gt.has(t))return;const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),n()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));gt.set(t,e)}(t),ut(t,dt||(dt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,bt):t)}function Ct(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,i)=>{const n=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(Ct(t.result)),n()},r=()=>{i(t.error),n()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&pt.set(e,t)})).catch((()=>{})),vt.set(e,t),e}(t);if(yt.has(t))return yt.get(t);const e=Et(t);return e!==t&&(yt.set(t,e),vt.set(e,t)),e}const Tt=t=>vt.get(t);function St(t,e,{blocked:i,upgrade:n,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ct(o);return n&&o.addEventListener("upgradeneeded",(t=>{n(Ct(o.result),t.oldVersion,t.newVersion,Ct(o.transaction))})),i&&o.addEventListener("blocked",(()=>i())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const It=["get","getKey","getAll","getAllKeys","count"],At=["put","add","delete","clear"],kt=new Map;function Dt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(kt.get(e))return kt.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,s=At.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!s&&!It.includes(i))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return n&&(o=o.index(e.shift())),(await Promise.all([o[i](...e),s&&r.done]))[0]};return kt.set(e,r),r}bt=(t=>({...t,get:(e,i,n)=>Dt(e,i)||t.get(e,i,n),has:(e,i)=>!!Dt(e,i)||t.has(e,i)}))(bt);
/**
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
 */
class Nt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const _t="@firebase/app",Lt="0.9.8",Ft=new ht("@firebase/app"),Ot="[DEFAULT]",xt={[_t]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Mt=new Map,Rt=new Map;function Vt(t,e){try{t.container.addComponent(e)}catch(i){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function Pt(t){const e=t.name;if(Rt.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Rt.set(e,t);for(const e of Mt.values())Vt(e,t);return!0}function Ut(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Bt=new Q("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class jt{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Z("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}
/**
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
 */function $t(t,e={}){let i=t;if("object"!=typeof e){e={name:e}}const n=Object.assign({name:Ot,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(i||(i=q()),!i)throw Bt.create("no-options");const r=Mt.get(s);if(r){if(X(i,r.options)&&X(n,r.config))return r;throw Bt.create("duplicate-app",{appName:s})}const o=new it(s);for(const t of Rt.values())o.addComponent(t);const a=new jt(i,n,o);return Mt.set(s,a),a}function qt(t=Ot){const e=Mt.get(t);if(!e&&t===Ot)return $t();if(!e)throw Bt.create("no-app",{appName:t});return e}function Gt(t,e,i){var n;let s=null!==(n=xt[t])&&void 0!==n?n:t;i&&(s+=`-${i}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ft.warn(t.join(" "))}Pt(new Z(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */
const Ht="firebase-heartbeat-database",zt=1,Kt="firebase-heartbeat-store";let Qt=null;function Wt(){return Qt||(Qt=St(Ht,zt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Kt)}}).catch((t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})}))),Qt}async function Xt(t,e){try{const i=(await Wt()).transaction(Kt,"readwrite"),n=i.objectStore(Kt);return await n.put(e,Yt(t)),i.done}catch(t){if(t instanceof K)Ft.warn(t.message);else{const e=Bt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ft.warn(e.message)}}}function Yt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Jt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new te(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Zt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Zt(),{heartbeatsToSend:e,unsentEntries:i}=function(t,e=1024){const i=[];let n=t.slice();for(const s of t){const t=i.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),ee(i)>e){t.dates.pop();break}}else if(i.push({agent:s.agent,dates:[s.date]}),ee(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=P(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Zt(){return(new Date).toISOString().substring(0,10)}class te{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!z()&&new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Wt()).transaction(Kt).objectStore(Kt).get(Yt(t))}catch(t){if(t instanceof K)Ft.warn(t.message);else{const e=Bt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ft.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}}}function ee(t){return P(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var ie;ie="",Pt(new Z("platform-logger",(t=>new Nt(t)),"PRIVATE")),Pt(new Z("heartbeat",(t=>new Jt(t)),"PRIVATE")),Gt(_t,Lt,ie),Gt(_t,Lt,"esm2017"),Gt("fire-js","");
/**
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
 */
Gt("firebase","9.20.0","app");var ne,se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},re={},oe=oe||{},ae=se||self;function le(){}function ce(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function he(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ue="closure_uid_"+(1e9*Math.random()>>>0),de=0;function fe(t,e,i){return t.call.apply(t.bind,arguments)}function pe(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ge(t,e,i){return(ge=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fe:pe).apply(null,arguments)}function me(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ye(t,e){function i(){}i.prototype=e.prototype,t.X=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.Wb=function(t,i,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[i].apply(t,s)}}function ve(){this.s=this.s,this.o=this.o}ve.prototype.s=!1,ve.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,ue)&&t[ue]||(t[ue]=++de))},ve.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const be=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1};function we(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function Ee(t,e){for(let e=1;e<arguments.length;e++){const i=arguments[e];if(ce(i)){const e=t.length||0,n=i.length||0;t.length=e+n;for(let s=0;s<n;s++)t[e+s]=i[s]}else t.push(i)}}function Ce(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",le,e),ae.removeEventListener("test",le,e)}catch(t){}return t}();function Se(t){return/^[\s\xa0]*$/.test(t)}var Ie=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ae(t,e){return t<e?-1:t>e?1:0}function ke(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function De(t){return-1!=ke().indexOf(t)}function Ne(t){return Ne[" "](t),t}Ne[" "]=le;var _e,Le,Fe=De("Opera"),Oe=De("Trident")||De("MSIE"),xe=De("Edge"),Me=xe||Oe,Re=De("Gecko")&&!(-1!=ke().toLowerCase().indexOf("webkit")&&!De("Edge"))&&!(De("Trident")||De("MSIE"))&&!De("Edge"),Ve=-1!=ke().toLowerCase().indexOf("webkit")&&!De("Edge");function Pe(){var t=ae.document;return t?t.documentMode:void 0}t:{var Ue="",Be=(Le=ke(),Re?/rv:([^\);]+)(\)|;)/.exec(Le):xe?/Edge\/([\d\.]+)/.exec(Le):Oe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Le):Ve?/WebKit\/(\S+)/.exec(Le):Fe?/(?:Version)[ \/]?(\S+)/.exec(Le):void 0);if(Be&&(Ue=Be?Be[1]:""),Oe){var je=Pe();if(null!=je&&je>parseFloat(Ue)){_e=String(je);break t}}_e=Ue}var $e,qe={};function Ge(){return function(t){var e=qe;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ie(String(_e)).split("."),i=Ie("9").split("."),n=Math.max(e.length,i.length);for(let o=0;0==t&&o<n;o++){var s=e[o]||"",r=i[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ae(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ae(0==s[2].length,0==r[2].length)||Ae(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(ae.document&&Oe){var He=Pe();$e=He||(parseInt(_e,10)||void 0)}else $e=void 0;var ze=$e;function Ke(t,e){if(Ce.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Re){t:{try{Ne(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Qe[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ke.X.h.call(this)}}ye(Ke,Ce);var Qe={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),Xe=0;function Ye(t,e,i,n,s){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.ha=s,this.key=++Xe,this.ba=this.ea=!1}function Je(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ze(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function ti(t){const e={};for(const i in t)e[i]=t[i];return e}const ei="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ii(t,e){let i,n;for(let e=1;e<arguments.length;e++){for(i in n=arguments[e],n)t[i]=n[i];for(let e=0;e<ei.length;e++)i=ei[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function ni(t){this.src=t,this.g={},this.h=0}function si(t,e){var i=e.type;if(i in t.g){var n,s=t.g[i],r=be(s,e);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(Je(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function ri(t,e,i,n){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!i&&r.ha==n)return s}return-1}ni.prototype.add=function(t,e,i,n,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ri(t,e,n,s);return-1<o?(e=t[o],i||(e.ea=!1)):((e=new Ye(e,this.src,r,!!n,s)).ea=i,t.push(e)),e};var oi="closure_lm_"+(1e6*Math.random()|0),ai={};function li(t,e,i,n,s){if(n&&n.once)return hi(t,e,i,n,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)li(t,e[r],i,n,s);return null}return i=yi(i),t&&t[We]?t.N(e,i,he(n)?!!n.capture:!!n,s):ci(t,e,i,!1,n,s)}function ci(t,e,i,n,s,r){if(!e)throw Error("Invalid event type");var o=he(s)?!!s.capture:!!s,a=gi(t);if(a||(t[oi]=a=new ni(t)),(i=a.add(e,i,n,o,r)).proxy)return i;if(n=function(){function t(i){return e.call(t.src,t.listener,i)}const e=pi;return t}(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)Te||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),n,s);else if(t.attachEvent)t.attachEvent(fi(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function hi(t,e,i,n,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)hi(t,e[r],i,n,s);return null}return i=yi(i),t&&t[We]?t.O(e,i,he(n)?!!n.capture:!!n,s):ci(t,e,i,!0,n,s)}function ui(t,e,i,n,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)ui(t,e[r],i,n,s);else n=he(n)?!!n.capture:!!n,i=yi(i),t&&t[We]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(i=ri(r=t.g[e],i,n,s))&&(Je(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=gi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ri(e,i,n,s)),(i=-1<t?e[t]:null)&&di(i))}function di(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[We])si(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(fi(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=gi(e))?(si(i,t),0==i.h&&(i.src=null,e[oi]=null)):Je(t)}}}function fi(t){return t in ai?ai[t]:ai[t]="on"+t}function pi(t,e){if(t.ba)t=!0;else{e=new Ke(e,this);var i=t.listener,n=t.ha||t.src;t.ea&&di(t),t=i.call(n,e)}return t}function gi(t){return(t=t[oi])instanceof ni?t:null}var mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function yi(t){return"function"==typeof t?t:(t[mi]||(t[mi]=function(e){return t.handleEvent(e)}),t[mi])}function vi(){ve.call(this),this.i=new ni(this),this.P=this,this.I=null}function bi(t,e){var i,n=t.I;if(n)for(i=[];n;n=n.I)i.push(n);if(t=t.P,n=e.type||e,"string"==typeof e)e=new Ce(e,t);else if(e instanceof Ce)e.target=e.target||t;else{var s=e;ii(e=new Ce(n,t),s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var o=e.g=i[r];s=wi(o,n,!0,e)&&s}if(s=wi(o=e.g=t,n,!0,e)&&s,s=wi(o,n,!1,e)&&s,i)for(r=0;r<i.length;r++)s=wi(o=e.g=i[r],n,!1,e)&&s}function wi(t,e,i,n){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==i){var a=o.listener,l=o.ha||o.src;o.ea&&si(t.i,o),s=!1!==a.call(l,n)&&s}}return s&&!n.defaultPrevented}ye(vi,ve),vi.prototype[We]=!0,vi.prototype.removeEventListener=function(t,e,i,n){ui(this,t,e,i,n)},vi.prototype.M=function(){if(vi.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)Je(i[n]);delete e.g[t],e.h--}}this.I=null},vi.prototype.N=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},vi.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var Ei=ae.JSON.stringify;function Ci(){var t=Ni;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ti,Si=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ii),(t=>t.reset()));class Ii{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ai(t){ae.setTimeout((()=>{throw t}),0)}function ki(t,e){Ti||function(){var t=ae.Promise.resolve(void 0);Ti=function(){t.then(_i)}}(),Di||(Ti(),Di=!0),Ni.add(t,e)}var Di=!1,Ni=new class{constructor(){this.h=this.g=null}add(t,e){const i=Si.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}};function _i(){for(var t;t=Ci();){try{t.h.call(t.g)}catch(t){Ai(t)}var e=Si;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Di=!1}function Li(t,e){vi.call(this),this.h=t||1,this.g=e||ae,this.j=ge(this.lb,this),this.l=Date.now()}function Fi(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Oi(t,e,i){if("function"==typeof t)i&&(t=ge(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ge(t.handleEvent,t)}return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function xi(t){t.g=Oi((()=>{t.g=null,t.i&&(t.i=!1,xi(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ye(Li,vi),(ne=Li.prototype).ca=!1,ne.R=null,ne.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),bi(this,"tick"),this.ca&&(Fi(this),this.start()))}},ne.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ne.M=function(){Li.X.M.call(this),Fi(this),delete this.g};class Mi extends ve{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:xi(this)}M(){super.M(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){ve.call(this),this.h=t,this.g={}}ye(Ri,ve);var Vi=[];function Pi(t,e,i,n){Array.isArray(i)||(i&&(Vi[0]=i.toString()),i=Vi);for(var s=0;s<i.length;s++){var r=li(e,i[s],n||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ui(t){Ze(t.g,(function(t,e){this.g.hasOwnProperty(e)&&di(t)}),t),t.g={}}function Bi(){this.g=!0}function ji(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Ei(i)}catch(t){return e}}(t,i)+(n?" "+n:"")}))}Ri.prototype.M=function(){Ri.X.M.call(this),Ui(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Bi.prototype.Aa=function(){this.g=!1},Bi.prototype.info=function(){};var $i={},qi=null;function Gi(){return qi=qi||new vi}function Hi(t){Ce.call(this,$i.Pa,t)}function zi(t){const e=Gi();bi(e,new Hi(e))}function Ki(t,e){Ce.call(this,$i.STAT_EVENT,t),this.stat=e}function Qi(t){const e=Gi();bi(e,new Ki(e,t))}function Wi(t,e){Ce.call(this,$i.Qa,t),this.size=e}function Xi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ae.setTimeout((function(){t()}),e)}$i.Pa="serverreachability",ye(Hi,Ce),$i.STAT_EVENT="statevent",ye(Ki,Ce),$i.Qa="timingevent",ye(Wi,Ce);var Yi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ji={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Zi(){}function tn(t){return t.h||(t.h=t.i())}function en(){}Zi.prototype.h=null;var nn,sn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function rn(){Ce.call(this,"d")}function on(){Ce.call(this,"c")}function an(){}function ln(t,e,i,n){this.l=t,this.j=e,this.m=i,this.U=n||1,this.S=new Ri(this),this.O=hn,t=Me?125:void 0,this.T=new Li(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new cn}function cn(){this.i=null,this.g="",this.h=!1}ye(rn,Ce),ye(on,Ce),ye(an,Zi),an.prototype.g=function(){return new XMLHttpRequest},an.prototype.i=function(){return{}},nn=new an;var hn=45e3,un={},dn={};function fn(t,e,i){t.K=1,t.v=Fn(kn(e)),t.s=i,t.P=!0,pn(t,null)}function pn(t,e){t.F=Date.now(),vn(t),t.A=kn(t.v);var i=t.A,n=t.U;Array.isArray(n)||(n=[String(n)]),Hn(i.i,"t",n),t.C=0,i=t.l.H,t.h=new cn,t.g=Gs(t.l,i?e:null,!t.s),0<t.N&&(t.L=new Mi(ge(t.La,t,t.g),t.N)),Pi(t.S,t.g,"readystatechange",t.ib),e=t.H?ti(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),zi(),function(t,e,i,n,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+e+"\n"+i+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function gn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function mn(t,e,i){let n,s=!0;for(;!t.I&&t.C<i.length;){if(n=yn(t,i),n==dn){4==e&&(t.o=4,Qi(14),s=!1),ji(t.j,t.m,null,"[Incomplete Response]");break}if(n==un){t.o=4,Qi(15),ji(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}ji(t.j,t.m,n,null),Tn(t,n)}gn(t)&&n!=dn&&n!=un&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,Qi(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),Rs(e),e.K=!0,Qi(11))):(ji(t.j,t.m,i,"[Invalid Chunked Response]"),Cn(t),En(t))}function yn(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?dn:(i=Number(e.substring(i,n)),isNaN(i)?un:(n+=1)+i>e.length?dn:(e=e.substr(n,i),t.C=n+i,e))}function vn(t){t.V=Date.now()+t.O,bn(t,t.O)}function bn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Xi(ge(t.gb,t),e)}function wn(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}function En(t){0==t.l.G||t.I||Us(t.l,t)}function Cn(t){wn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fi(t.T),Ui(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Tn(t,e){try{var i=t.l;if(0!=i.G&&(i.g==t||Yn(i.h,t)))if(!t.J&&Yn(i.h,t)&&3==i.G){try{var n=i.Fa.g.parse(e)}catch(t){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.F+3e3<t.F))break t;Ps(i),Ds(i)}Ms(i),Qi(18)}}else i.Ba=s[1],0<i.Ba-i.T&&37500>s[2]&&i.L&&0==i.A&&!i.v&&(i.v=Xi(ge(i.cb,i),6e3));if(1>=Xn(i.h)&&i.ja){try{i.ja()}catch(t){}i.ja=void 0}}else js(i,11)}else if((t.J||i.g==t)&&Ps(i),!Se(e))for(s=i.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(i.T=c[0],c=c[1],2==i.G)if("c"==c[0]){i.I=c[1],i.ka=c[2];const e=c[3];null!=e&&(i.ma=e,i.j.info("VER="+i.ma));const s=c[4];null!=s&&(i.Ca=s,i.j.info("SVER="+i.Ca));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(n=1.5*h,i.J=n,i.j.info("backChannelRequestTimeoutMs_="+n)),n=i;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=n.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Jn(r,r.h),r.h=null))}if(n.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.za=t,Ln(n.F,n.D,t))}}i.G=3,i.l&&i.l.xa(),i.$&&(i.P=Date.now()-t.F,i.j.info("Handshake RTT: "+i.P+"ms"));var o=t;if((n=i).sa=qs(n,n.H?n.ka:null,n.V),o.J){Zn(n.h,o);var a=o,l=n.J;l&&a.setTimeout(l),a.B&&(wn(a),vn(a)),n.g=o}else xs(n);0<i.i.length&&_s(i)}else"stop"!=c[0]&&"close"!=c[0]||js(i,7);else 3==i.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?js(i,7):ks(i):"noop"!=c[0]&&i.l&&i.l.wa(c),i.A=0)}zi()}catch(t){}}function Sn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ce(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var i=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ce(t)||"string"==typeof t){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const n in t)e[i++]=n;return e}}}(t),n=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ce(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}(t),s=n.length,r=0;r<s;r++)e.call(void 0,n[r],i&&i[r],t)}(ne=ln.prototype).setTimeout=function(t){this.O=t},ne.ib=function(t){t=t.target;const e=this.L;e&&3==Es(t)?e.l():this.La(t)},ne.La=function(t){try{if(t==this.g)t:{const h=Es(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Me||this.g&&(this.h.h||this.g.fa()||Cs(this.g)))){this.I||4!=h||7==e||zi(),wn(this);var i=this.g.aa();this.Y=i;e:if(gn(this)){var n=Cs(this.g);t="";var s=n.length,r=4==Es(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Cn(this),En(this);var o="";break e}this.h.i=new ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:r&&e==s-1});n.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==i,function(t,e,i,n,s,r,o){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+e+"\n"+i+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,i),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Se(a)){var c=a;break e}}c=null}if(!(i=c)){this.i=!1,this.o=3,Qi(12),Cn(this),En(this);break t}ji(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Tn(this,i)}this.P?(mn(this,h,o),Me&&this.i&&3==h&&(Pi(this.S,this.T,"tick",this.hb),this.T.start())):(ji(this.j,this.m,o,null),Tn(this,o)),4==h&&Cn(this),this.i&&!this.I&&(4==h?Us(this.l,this):(this.i=!1,vn(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.o=3,Qi(12)):(this.o=0,Qi(13)),Cn(this),En(this)}}}catch(t){}},ne.hb=function(){if(this.g){var t=Es(this.g),e=this.g.fa();this.C<e.length&&(wn(this),mn(this,t,e),this.i&&4!=t&&vn(this))}},ne.cancel=function(){this.I=!0,Cn(this)},ne.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(zi(),Qi(17)),Cn(this),this.o=2,En(this)):bn(this,this.V-t)};var In=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function An(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof An){this.h=void 0!==e?e:t.h,Dn(this,t.j),this.s=t.s,this.g=t.g,Nn(this,t.m),this.l=t.l,e=t.i;var i=new jn;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),_n(this,i),this.o=t.o}else t&&(i=String(t).match(In))?(this.h=!!e,Dn(this,i[1]||"",!0),this.s=On(i[2]||""),this.g=On(i[3]||"",!0),Nn(this,i[4]),this.l=On(i[5]||"",!0),_n(this,i[6]||"",!0),this.o=On(i[7]||"")):(this.h=!!e,this.i=new jn(null,this.h))}function kn(t){return new An(t)}function Dn(t,e,i){t.j=i?On(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Nn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _n(t,e,i){e instanceof jn?(t.i=e,function(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(qn(this,e),Hn(this,i,t))}),t)),t.j=e}(t.i,t.h)):(i||(e=xn(e,Un)),t.i=new jn(e,t.h))}function Ln(t,e,i){t.i.set(e,i)}function Fn(t){return Ln(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function On(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xn(t,e,i){return"string"==typeof t?(t=encodeURI(t).replace(e,Mn),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Mn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}An.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xn(e,Rn,!0),":");var i=this.g;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(xn(e,Rn,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&t.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&t.push("/"),t.push(xn(i,"/"==i.charAt(0)?Pn:Vn,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.o)&&t.push("#",xn(i,Bn)),t.join("")};var Rn=/[#\/\?@]/g,Vn=/[#\?:]/g,Pn=/[#\?]/g,Un=/[#\?@]/g,Bn=/#/g;function jn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),s=null;if(0<=n){var r=t[i].substring(0,n);s=t[i].substring(n+1)}else r=t[i];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function qn(t,e){$n(t),e=zn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gn(t,e){return $n(t),e=zn(t,e),t.g.has(e)}function Hn(t,e,i){qn(t,e),0<i.length&&(t.i=null,t.g.set(zn(t,e),we(i)),t.h+=i.length)}function zn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ne=jn.prototype).add=function(t,e){$n(this),this.i=null,t=zn(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},ne.forEach=function(t,e){$n(this),this.g.forEach((function(i,n){i.forEach((function(i){t.call(e,i,n,this)}),this)}),this)},ne.oa=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let n=0;n<e.length;n++){const s=t[n];for(let t=0;t<s.length;t++)i.push(e[n])}return i},ne.W=function(t){$n(this);let e=[];if("string"==typeof t)Gn(this,t)&&(e=e.concat(this.g.get(zn(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},ne.set=function(t,e){return $n(this),this.i=null,Gn(this,t=zn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ne.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},ne.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var n=e[i];const r=encodeURIComponent(String(n)),o=this.W(n);for(n=0;n<o.length;n++){var s=r;""!==o[n]&&(s+="="+encodeURIComponent(String(o[n]))),t.push(s)}}return this.i=t.join("&")};function Kn(t){this.l=t||Qn,ae.PerformanceNavigationTiming?t=0<(t=ae.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ae.g&&ae.g.Ga&&ae.g.Ga()&&ae.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qn=10;function Wn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Xn(t){return t.h?1:t.g?t.g.size:0}function Yn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Jn(t,e){t.g?t.g.add(e):t.h=e}function Zn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ts(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.D);return e}return we(t.i)}function es(){}function is(){this.g=new es}function ns(t,e,i){const n=i||"";try{Sn(t,(function(t,i){let s=t;he(t)&&(s=Ei(t)),e.push(n+i+"="+encodeURIComponent(s))}))}catch(t){throw e.push(n+"type="+encodeURIComponent("_badmap")),t}}function ss(t,e,i,n,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(n)}catch(t){}}function rs(t){this.l=t.ac||null,this.j=t.jb||!1}function os(t,e){vi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=as,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Kn.prototype.cancel=function(){if(this.i=ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},es.prototype.stringify=function(t){return ae.JSON.stringify(t,void 0)},es.prototype.parse=function(t){return ae.JSON.parse(t,void 0)},ye(rs,Zi),rs.prototype.g=function(){return new os(this.l,this.j)},rs.prototype.i=function(t){return function(){return t}}({}),ye(os,vi);var as=0;function ls(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ne=os.prototype).open=function(t,e){if(this.readyState!=as)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)},ne.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ae).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},ne.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cs(this)),this.readyState=as},ne.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ae.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ls(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},ne.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cs(this):hs(this),3==this.readyState&&ls(this)}},ne.Va=function(t){this.g&&(this.response=this.responseText=t,cs(this))},ne.Ua=function(t){this.g&&(this.response=t,cs(this))},ne.ga=function(){this.g&&cs(this)},ne.setRequestHeader=function(t,e){this.v.append(t,e)},ne.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ne.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(os.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var us=ae.JSON.parse;function ds(t){vi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fs,this.K=this.L=!1}ye(ds,vi);var fs="",ps=/^https?$/i,gs=["POST","PUT"];function ms(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ys(t),bs(t)}function ys(t){t.D||(t.D=!0,bi(t,"complete"),bi(t,"error"))}function vs(t){if(t.h&&void 0!==oe&&(!t.C[1]||4!=Es(t)||2!=t.aa()))if(t.v&&4==Es(t))Oi(t.Ha,0,t);else if(bi(t,"readystatechange"),4==Es(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===a){var s=String(t.H).match(In)[1]||null;if(!s&&ae.self&&ae.self.location){var r=ae.self.location.protocol;s=r.substr(0,r.length-1)}n=!ps.test(s?s.toLowerCase():"")}i=n}if(i)bi(t,"complete"),bi(t,"success");else{t.m=6;try{var o=2<Es(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ys(t)}}finally{bs(t)}}}function bs(t,e){if(t.g){ws(t);const i=t.g,n=t.C[0]?le:null;t.g=null,t.C=null,e||bi(t,"ready");try{i.onreadystatechange=n}catch(t){}}}function ws(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}function Es(t){return t.g?t.g.readyState:0}function Cs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ts(t){let e="";return Ze(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function Ss(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=Ts(i),"string"==typeof t?null!=i&&encodeURIComponent(String(i)):Ln(t,e,i))}function Is(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function As(t){this.Ca=0,this.i=[],this.j=new Bi,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Is("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Is("baseRetryDelayMs",5e3,t),this.bb=Is("retryDelaySeedMs",1e4,t),this.$a=Is("forwardChannelMaxRetries",2,t),this.ta=Is("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Kn(t&&t.concurrentRequestLimit),this.Fa=new is,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ks(t){if(Ns(t),3==t.G){var e=t.U++,i=kn(t.F);Ln(i,"SID",t.I),Ln(i,"RID",e),Ln(i,"TYPE","terminate"),Fs(t,i),(e=new ln(t,t.j,e,void 0)).K=2,e.v=Fn(kn(i)),i=!1,ae.navigator&&ae.navigator.sendBeacon&&(i=ae.navigator.sendBeacon(e.v.toString(),"")),!i&&ae.Image&&((new Image).src=e.v,i=!0),i||(e.g=Gs(e.l,null),e.g.da(e.v)),e.F=Date.now(),vn(e)}$s(t)}function Ds(t){t.g&&(Rs(t),t.g.cancel(),t.g=null)}function Ns(t){Ds(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Ps(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ae.clearTimeout(t.m),t.m=null)}function _s(t){Wn(t.h)||t.m||(t.m=!0,ki(t.Ja,t),t.C=0)}function Ls(t,e){var i;i=e?e.m:t.U++;const n=kn(t.F);Ln(n,"SID",t.I),Ln(n,"RID",i),Ln(n,"AID",t.T),Fs(t,n),t.o&&t.s&&Ss(n,t.o,t.s),i=new ln(t,t.j,i,t.C+1),null===t.o&&(i.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Os(t,i,1e3),i.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Jn(t.h,i),fn(i,n,e)}function Fs(t,e){t.ia&&Ze(t.ia,(function(t,i){Ln(e,i,t)})),t.l&&Sn({},(function(t,i){Ln(e,i,t)}))}function Os(t,e,i){i=Math.min(t.i.length,i);var n=t.l?ge(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<i;o++){let i=s[o].h;const a=s[o].g;if(i-=e,0>i)e=Math.max(0,s[o].h-100),r=!1;else try{ns(a,t,"req"+i+"_")}catch(t){n&&n(a)}}if(r){n=t.join("&");break t}}}return t=t.i.splice(0,i),e.D=t,n}function xs(t){t.g||t.u||(t.Z=1,ki(t.Ia,t),t.A=0)}function Ms(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Xi(ge(t.Ia,t),Bs(t,t.A)),t.A++,!0)}function Rs(t){null!=t.B&&(ae.clearTimeout(t.B),t.B=null)}function Vs(t){t.g=new ln(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=kn(t.sa);Ln(e,"RID","rpc"),Ln(e,"SID",t.I),Ln(e,"CI",t.L?"0":"1"),Ln(e,"AID",t.T),Ln(e,"TYPE","xmlhttp"),Fs(t,e),t.o&&t.s&&Ss(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var i=t.g;t=t.ka,i.K=1,i.v=Fn(kn(e)),i.s=null,i.P=!0,pn(i,t)}function Ps(t){null!=t.v&&(ae.clearTimeout(t.v),t.v=null)}function Us(t,e){var i=null;if(t.g==e){Ps(t),Rs(t),t.g=null;var n=2}else{if(!Yn(t.h,e))return;i=e.D,Zn(t.h,e),n=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;bi(n=Gi(),new Wi(n,i)),_s(t)}else xs(t);else if(3==(s=e.o)||0==s&&0<t.pa||!(1==n&&function(t,e){return!(Xn(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Xi(ge(t.Ja,t,e),Bs(t,t.C)),t.C++,0)))}(t,e)||2==n&&Ms(t)))switch(i&&0<i.length&&(e=t.h,e.i=e.i.concat(i)),s){case 1:js(t,5);break;case 4:js(t,10);break;case 3:js(t,6);break;default:js(t,2)}}function Bs(t,e){let i=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(i*=2),i*e}function js(t,e){if(t.j.info("Error code "+e),2==e){var i=null;t.l&&(i=null);var n=ge(t.kb,t);i||(i=new An("//www.google.com/images/cleardot.gif"),ae.location&&"http"==ae.location.protocol||Dn(i,"https"),Fn(i)),function(t,e){const i=new Bi;if(ae.Image){const n=new Image;n.onload=me(ss,i,n,"TestLoadImage: loaded",!0,e),n.onerror=me(ss,i,n,"TestLoadImage: error",!1,e),n.onabort=me(ss,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=me(ss,i,n,"TestLoadImage: timeout",!1,e),ae.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}(i.toString(),n)}else Qi(2);t.G=0,t.l&&t.l.va(e),$s(t),Ns(t)}function $s(t){if(t.G=0,t.la=[],t.l){const e=ts(t.h);0==e.length&&0==t.i.length||(Ee(t.la,e),Ee(t.la,t.i),t.h.i.length=0,we(t.i),t.i.length=0),t.l.ua()}}function qs(t,e,i){var n=i instanceof An?kn(i):new An(i,void 0);if(""!=n.g)e&&(n.g=e+"."+n.g),Nn(n,n.m);else{var s=ae.location;n=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new An(null,void 0);n&&Dn(r,n),e&&(r.g=e),s&&Nn(r,s),i&&(r.l=i),n=r}return i=t.D,e=t.za,i&&e&&Ln(n,i,e),Ln(n,"VER",t.ma),Fs(t,n),n}function Gs(t,e,i){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=i&&t.Da&&!t.ra?new ds(new rs({jb:!0})):new ds(t.ra)).Ka(t.H),e}function Hs(){}function zs(){if(Oe&&!(10<=Number(ze)))throw Error("Environmental error: no available transport.")}function Ks(t,e){vi.call(this),this.g=new As(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Se(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Se(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Xs(this)}function Qs(t){rn.call(this);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ws(){on.call(this),this.status=1}function Xs(t){this.g=t}(ne=ds.prototype).Ka=function(t){this.L=t},ne.da=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nn.g(),this.C=this.u?tn(this.u):tn(nn),this.g.onreadystatechange=ge(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ms(this,t)}if(t=i||"",i=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)i.set(s,n[s]);else{if("function"!=typeof n.keys||"function"!=typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())i.set(t,n.get(t))}n=Array.from(i.keys()).find((t=>"content-type"==t.toLowerCase())),s=ae.FormData&&t instanceof ae.FormData,!(0<=be(gs,e))||n||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of i)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ws(this),0<this.B&&((this.K=function(t){return Oe&&Ge()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.qa,this)):this.A=Oi(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ms(this,t)}},ne.qa=function(){void 0!==oe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,bi(this,"timeout"),this.abort(8))},ne.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,bi(this,"complete"),bi(this,"abort"),bs(this))},ne.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bs(this,!0)),ds.X.M.call(this)},ne.Ha=function(){this.s||(this.F||this.v||this.l?vs(this):this.fb())},ne.fb=function(){vs(this)},ne.aa=function(){try{return 2<Es(this)?this.g.status:-1}catch(t){return-1}},ne.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ne.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),us(e)}},ne.Ea=function(){return this.m},ne.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(ne=As.prototype).ma=8,ne.G=1,ne.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ln(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ti(r),ii(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,i=0;i<this.i.length;i++){var n=this.i[i];if(void 0===(n="__data__"in n.g&&"string"==typeof(n=n.g.__data__)?n.length:void 0))break;if(4096<(e+=n)){e=i;break t}if(4096===e||i===this.i.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=Os(this,s,e),Ln(i=kn(this.F),"RID",t),Ln(i,"CVER",22),this.D&&Ln(i,"X-HTTP-Session-Id",this.D),Fs(this,i),r&&(this.N?e="headers="+encodeURIComponent(String(Ts(r)))+"&"+e:this.o&&Ss(i,this.o,r)),Jn(this.h,s),this.Ya&&Ln(i,"TYPE","init"),this.O?(Ln(i,"$req",e),Ln(i,"SID","null"),s.Z=!0,fn(s,i,null)):fn(s,i,e),this.G=2}}else 3==this.G&&(t?Ls(this,t):0==this.i.length||Wn(this.h)||Ls(this))},ne.Ia=function(){if(this.u=null,Vs(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Xi(ge(this.eb,this),t)}},ne.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Qi(10),Ds(this),Vs(this))},ne.cb=function(){null!=this.v&&(this.v=null,Ds(this),Ms(this),Qi(19))},ne.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Qi(2)):(this.j.info("Failed to ping google.com"),Qi(1))},(ne=Hs.prototype).xa=function(){},ne.wa=function(){},ne.va=function(){},ne.ua=function(){},ne.Ra=function(){},zs.prototype.g=function(t,e){return new Ks(t,e)},ye(Ks,vi),Ks.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,i=this.h||void 0;Qi(0),t.V=e,t.ia=i||{},t.L=t.Y,t.F=qs(t,null,t.V),_s(t)},Ks.prototype.close=function(){ks(this.g)},Ks.prototype.u=function(t){var e=this.g;if("string"==typeof t){var i={};i.__data__=t,t=i}else this.v&&((i={}).__data__=Ei(t),t=i);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&_s(e)},Ks.prototype.M=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,Ks.X.M.call(this)},ye(Qs,rn),ye(Ws,on),ye(Xs,Hs),Xs.prototype.xa=function(){bi(this.g,"a")},Xs.prototype.wa=function(t){bi(this.g,new Qs(t))},Xs.prototype.va=function(t){bi(this.g,new Ws)},Xs.prototype.ua=function(){bi(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,Ks.prototype.send=Ks.prototype.u,Ks.prototype.open=Ks.prototype.m,Ks.prototype.close=Ks.prototype.close,Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Ji.COMPLETE="complete",en.EventType=sn,sn.OPEN="a",sn.CLOSE="b",sn.ERROR="c",sn.MESSAGE="d",vi.prototype.listen=vi.prototype.N,ds.prototype.listenOnce=ds.prototype.O,ds.prototype.getLastError=ds.prototype.Oa,ds.prototype.getLastErrorCode=ds.prototype.Ea,ds.prototype.getStatus=ds.prototype.aa,ds.prototype.getResponseJson=ds.prototype.Sa,ds.prototype.getResponseText=ds.prototype.fa,ds.prototype.send=ds.prototype.da,ds.prototype.setWithCredentials=ds.prototype.Ka;var Ys=re.createWebChannelTransport=function(){return new zs},Js=re.getStatEventTarget=function(){return Gi()},Zs=re.ErrorCode=Yi,tr=re.EventType=Ji,er=re.Event=$i,ir=re.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},nr=re.FetchXmlHttpFactory=rs,sr=re.WebChannel=en,rr=re.XhrIo=ds;const or="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ar.UNAUTHENTICATED=new ar(null),ar.GOOGLE_CREDENTIALS=new ar("google-credentials-uid"),ar.FIRST_PARTY=new ar("first-party-uid"),ar.MOCK_USER=new ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let lr="9.20.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new ht("@firebase/firestore");function hr(){return cr.logLevel}function ur(t,...e){if(cr.logLevel<=st.DEBUG){const i=e.map(pr);cr.debug(`Firestore (${lr}): ${t}`,...i)}}function dr(t,...e){if(cr.logLevel<=st.ERROR){const i=e.map(pr);cr.error(`Firestore (${lr}): ${t}`,...i)}}function fr(t,...e){if(cr.logLevel<=st.WARN){const i=e.map(pr);cr.warn(`Firestore (${lr}): ${t}`,...i)}}function pr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw dr(e),new Error(e)}function mr(t,e){t||gr()}function yr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class br extends K{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ar.UNAUTHENTICATED)))}shutdown(){}}class Tr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Sr{constructor(t){this.t=t,this.currentUser=ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,t.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},o=t=>{ur("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ur("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(ur("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(mr("string"==typeof e.accessToken),new Er(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return mr(null===t||"string"==typeof t),new ar(t)}}class Ir{constructor(t,e,i){this.h=t,this.l=e,this.m=i,this.type="FirstParty",this.user=ar.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ar{constructor(t,e,i){this.h=t,this.l=e,this.m=i}getToken(){return Promise.resolve(new Ir(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dr{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const i=t=>{null!=t.error&&ur("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.T;return this.T=t.token,ur("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{ur("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?n(t):ur("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(mr("string"==typeof t.token),this.T=t.token,new kr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Nr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let e=0;e<t;e++)i[e]=Math.floor(256*Math.random());return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let i="";for(;i.length<20;){const n=Nr(40);for(let s=0;s<n.length;++s)i.length<20&&n[s]<e&&(i+=t.charAt(n[s]%62))}return i}}function Lr(t,e){return t<e?-1:t>e?1:0}function Fr(t,e,i){return t.length===e.length&&t.every(((t,n)=>i(t,e[n])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new br(vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new br(vr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new br(vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new br(vr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Or.fromMillis(Date.now())}static fromDate(t){return Or.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Or(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Lr(this.nanoseconds,t.nanoseconds):Lr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xr(t)}static min(){return new xr(new Or(0,0))}static max(){return new xr(new Or(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,i){void 0===e?e=0:e>t.length&&gr(),void 0===i?i=t.length-e:i>t.length-e&&gr(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===Mr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),s=e.get(n);if(i<s)return-1;if(i>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Rr extends Mr{construct(t,e,i){return new Rr(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new br(vr.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new Rr(e)}static emptyPath(){return new Rr([])}}const Vr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pr extends Mr{construct(t,e,i){return new Pr(t,e,i)}static isValidIdentifier(t){return Vr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Pr(["__name__"])}static fromServerFormat(t){const e=[];let i="",n=0;const s=()=>{if(0===i.length)throw new br(vr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let r=!1;for(;n<t.length;){const e=t[n];if("\\"===e){if(n+1===t.length)throw new br(vr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[n+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new br(vr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=e,n+=2}else"`"===e?(r=!r,n++):"."!==e||r?(i+=e,n++):(s(),n++)}if(s(),r)throw new br(vr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pr(e)}static emptyPath(){return new Pr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.path=t}static fromPath(t){return new Ur(Rr.fromString(t))}static fromName(t){return new Ur(Rr.fromString(t).popFirst(5))}static empty(){return new Ur(Rr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Rr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Rr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ur(new Rr(t.slice()))}}
/**
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
 */class Br{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}Br.UNKNOWN_ID=-1;function jr(t,e){const i=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,s=xr.fromTimestamp(1e9===n?new Or(i+1,0):new Or(i,n));return new qr(s,Ur.empty(),e)}function $r(t){return new qr(t.readTime,t.key,-1)}class qr{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new qr(xr.min(),Ur.empty(),-1)}static max(){return new qr(xr.max(),Ur.empty(),-1)}}function Gr(t,e){let i=t.readTime.compareTo(e.readTime);return 0!==i?i:(i=Ur.comparator(t.documentKey,e.documentKey),0!==i?i:Lr(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Hr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t){if(t.code!==vr.FAILED_PRECONDITION||t.message!==Hr)throw t;ur("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qr(((i,n)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(i,n)},this.catchCallback=t=>{this.wrapFailure(e,t).next(i,n)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Qr?e:Qr.resolve(e)}catch(t){return Qr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Qr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Qr.reject(e)}static resolve(t){return new Qr(((e,i)=>{e(t)}))}static reject(t){return new Qr(((e,i)=>{i(t)}))}static waitFor(t){return new Qr(((e,i)=>{let n=0,s=0,r=!1;t.forEach((t=>{++n,t.next((()=>{++s,r&&s===n&&e()}),(t=>i(t)))})),r=!0,s===n&&e()}))}static or(t){let e=Qr.resolve(!1);for(const i of t)e=e.next((t=>t?Qr.resolve(t):i()));return e}static forEach(t,e){const i=[];return t.forEach(((t,n)=>{i.push(e.call(this,t,n))})),this.waitFor(i)}static mapArray(t,e){return new Qr(((i,n)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&i(r)}),(t=>n(t)))}}))}static doWhile(t,e){return new Qr(((i,n)=>{const s=()=>{!0===t()?e().next((()=>{s()}),n):i()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Xr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Yr(t){return null==t}function Jr(t){return 0===t&&1/t==-1/0}function Zr(t){return"number"==typeof t&&Number.isInteger(t)&&!Jr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xr.ct=-1;const to=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],eo=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],io=eo;
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function no(t){let e=0;for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e++;return e}function so(t,e){for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&e(i,t[i])}function ro(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){this.comparator=t,this.root=e||lo.EMPTY}insert(t,e){return new oo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lo.BLACK,null,null))}remove(t){return new oo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ao(this.root,t,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ao(this.root,t,this.comparator,!0)}}class ao{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&n&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lo{constructor(t,e,i,n,s){this.key=t,this.value=e,this.color=null!=i?i:lo.RED,this.left=null!=n?n:lo.EMPTY,this.right=null!=s?s:lo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,s){return new lo(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const s=i(t,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===s?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return lo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return lo.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw gr();if(this.right.isRed())throw gr();const t=this.left.check();if(t!==this.right.check())throw gr();return t+(this.isRed()?0:1)}}lo.EMPTY=null,lo.RED=!0,lo.BLACK=!1,lo.EMPTY=new class{constructor(){this.size=0}get key(){throw gr()}get value(){throw gr()}get color(){throw gr()}get left(){throw gr()}get right(){throw gr()}copy(t,e,i,n,s){return this}insert(t,e,i){return new lo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(t){this.comparator=t,this.data=new oo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ho(this.data.getIterator())}getIteratorFrom(t){return new ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof co))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new co(this.comparator);return e.data=t,e}}class ho{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class uo{constructor(t){this.fields=t,t.sort(Pr.comparator)}static empty(){return new uo([])}unionWith(t){let e=new co(Pr.comparator);for(const t of this.fields)e=e.add(t);for(const i of t)e=e.add(i);return new uo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class fo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class po{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new fo("Invalid base64 string: "+t):t}}(t);return new po(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new po(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Lr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}po.EMPTY_BYTE_STRING=new po("");const go=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mo(t){if(mr(!!t),"string"==typeof t){let e=0;const i=go.exec(t);if(mr(!!i),i[1]){let t=i[1];t=(t+"000000000").substr(0,9),e=Number(t)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:yo(t.seconds),nanos:yo(t.nanos)}}function yo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function vo(t){return"string"==typeof t?po.fromBase64String(t):po.fromUint8Array(t)}
/**
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
 */function bo(t){var e,i;return"server_timestamp"===(null===(i=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}function wo(t){const e=mo(t.mapValue.fields.__local_write_time__.timestampValue);return new Or(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t,e,i,n,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Co{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Co&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function So(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bo(t)?4:Mo(t)?9007199254740991:10:gr()}function Io(t,e){if(t===e)return!0;const i=So(t);if(i!==So(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const i=mo(t.timestampValue),n=mo(e.timestampValue);return i.seconds===n.seconds&&i.nanos===n.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return vo(t.bytesValue).isEqual(vo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return yo(t.geoPointValue.latitude)===yo(e.geoPointValue.latitude)&&yo(t.geoPointValue.longitude)===yo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return yo(t.integerValue)===yo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const i=yo(t.doubleValue),n=yo(e.doubleValue);return i===n?Jr(i)===Jr(n):isNaN(i)&&isNaN(n)}return!1}(t,e);case 9:return Fr(t.arrayValue.values||[],e.arrayValue.values||[],Io);case 10:return function(t,e){const i=t.mapValue.fields||{},n=e.mapValue.fields||{};if(no(i)!==no(n))return!1;for(const t in i)if(i.hasOwnProperty(t)&&(void 0===n[t]||!Io(i[t],n[t])))return!1;return!0}(t,e);default:return gr()}}function Ao(t,e){return void 0!==(t.values||[]).find((t=>Io(t,e)))}function ko(t,e){if(t===e)return 0;const i=So(t),n=So(e);if(i!==n)return Lr(i,n);switch(i){case 0:case 9007199254740991:return 0;case 1:return Lr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const i=yo(t.integerValue||t.doubleValue),n=yo(e.integerValue||e.doubleValue);return i<n?-1:i>n?1:i===n?0:isNaN(i)?isNaN(n)?0:-1:1}(t,e);case 3:return Do(t.timestampValue,e.timestampValue);case 4:return Do(wo(t),wo(e));case 5:return Lr(t.stringValue,e.stringValue);case 6:return function(t,e){const i=vo(t),n=vo(e);return i.compareTo(n)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const i=t.split("/"),n=e.split("/");for(let t=0;t<i.length&&t<n.length;t++){const e=Lr(i[t],n[t]);if(0!==e)return e}return Lr(i.length,n.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const i=Lr(yo(t.latitude),yo(e.latitude));return 0!==i?i:Lr(yo(t.longitude),yo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const i=t.values||[],n=e.values||[];for(let t=0;t<i.length&&t<n.length;++t){const e=ko(i[t],n[t]);if(e)return e}return Lr(i.length,n.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===To.mapValue&&e===To.mapValue)return 0;if(t===To.mapValue)return 1;if(e===To.mapValue)return-1;const i=t.fields||{},n=Object.keys(i),s=e.fields||{},r=Object.keys(s);n.sort(),r.sort();for(let t=0;t<n.length&&t<r.length;++t){const e=Lr(n[t],r[t]);if(0!==e)return e;const o=ko(i[n[t]],s[r[t]]);if(0!==o)return o}return Lr(n.length,r.length)}(t.mapValue,e.mapValue);default:throw gr()}}function Do(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Lr(t,e);const i=mo(t),n=mo(e),s=Lr(i.seconds,n.seconds);return 0!==s?s:Lr(i.nanos,n.nanos)}function No(t){return _o(t)}function _o(t){var e,i;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=mo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?vo(t.bytesValue).toBase64():"referenceValue"in t?(i=t.referenceValue,Ur.fromName(i).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",i=!0;for(const n of t.values||[])i?i=!1:e+=",",e+=_o(n);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let i="{",n=!0;for(const s of e)n?n=!1:i+=",",i+=`${s}:${_o(t.fields[s])}`;return i+"}"}(t.mapValue):gr()}function Lo(t){return!!t&&"integerValue"in t}function Fo(t){return!!t&&"arrayValue"in t}function Oo(t){return!!t&&"mapValue"in t}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return so(t.mapValue.fields,((t,i)=>e.mapValue.fields[t]=xo(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(t.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=xo(t.arrayValue.values[i]);return e}return Object.assign({},t)}function Mo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ro{constructor(t){this.value=t}static empty(){return new Ro({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Oo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xo(e)}setAll(t){let e=Pr.emptyPath(),i={},n=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,i,n),i={},n=[],e=s.popLast()}t?i[s.lastSegment()]=xo(t):n.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,i,n)}delete(t){const e=this.field(t.popLast());Oo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Io(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let n=e.mapValue.fields[t.get(i)];Oo(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=n),e=n}return e.mapValue.fields}applyChanges(t,e,i){so(e,((e,i)=>t[e]=i));for(const e of i)delete t[e]}clone(){return new Ro(xo(this.value))}}function Vo(t){const e=[];return so(t.fields,((t,i)=>{const n=new Pr([t]);if(Oo(i)){const t=Vo(i.mapValue).fields;if(0===t.length)e.push(n);else for(const i of t)e.push(n.child(i))}else e.push(n)})),new uo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Po{constructor(t,e,i,n,s,r,o){this.key=t,this.documentType=e,this.version=i,this.readTime=n,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new Po(t,0,xr.min(),xr.min(),xr.min(),Ro.empty(),0)}static newFoundDocument(t,e,i,n){return new Po(t,1,e,xr.min(),i,n,0)}static newNoDocument(t,e){return new Po(t,2,e,xr.min(),xr.min(),Ro.empty(),0)}static newUnknownDocument(t,e){return new Po(t,3,e,xr.min(),xr.min(),Ro.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(xr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ro.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ro.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Po&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Po(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Uo{constructor(t,e){this.position=t,this.inclusive=e}}function Bo(t,e,i){let n=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(n=r.field.isKeyField()?Ur.comparator(Ur.fromName(o.referenceValue),i.key):ko(o,i.data.field(r.field)),"desc"===r.dir&&(n*=-1),0!==n)break}return n}function jo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let i=0;i<t.position.length;i++)if(!Io(t.position[i],e.position[i]))return!1;return!0}
/**
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
 */class $o{constructor(t,e="asc"){this.field=t,this.dir=e}}function qo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Go{}class Ho extends Go{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,i):new Zo(t,e,i):"array-contains"===e?new na(t,i):"in"===e?new sa(t,i):"not-in"===e?new ra(t,i):"array-contains-any"===e?new oa(t,i):new Ho(t,e,i)}static createKeyFieldInFilter(t,e,i){return"in"===e?new ta(t,i):new ea(t,i)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ko(e,this.value)):null!==e&&So(this.value)===So(e)&&this.matchesComparison(ko(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return gr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class zo extends Go{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new zo(t,e)}matches(t){return Ko(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ko(t){return"and"===t.op}function Qo(t){return Wo(t)&&Ko(t)}function Wo(t){for(const e of t.filters)if(e instanceof zo)return!1;return!0}function Xo(t){if(t instanceof Ho)return t.field.canonicalString()+t.op.toString()+No(t.value);if(Qo(t))return t.filters.map((t=>Xo(t))).join(",");{const e=t.filters.map((t=>Xo(t))).join(",");return`${t.op}(${e})`}}function Yo(t,e){return t instanceof Ho?function(t,e){return e instanceof Ho&&t.op===e.op&&t.field.isEqual(e.field)&&Io(t.value,e.value)}(t,e):t instanceof zo?function(t,e){return e instanceof zo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,i,n)=>t&&Yo(i,e.filters[n])),!0)}(t,e):void gr()}function Jo(t){return t instanceof Ho?function(t){return`${t.field.canonicalString()} ${t.op} ${No(t.value)}`}(t):t instanceof zo?function(t){return t.op.toString()+" {"+t.getFilters().map(Jo).join(" ,")+"}"}(t):"Filter"}class Zo extends Ho{constructor(t,e,i){super(t,e,i),this.key=Ur.fromName(i.referenceValue)}matches(t){const e=Ur.comparator(t.key,this.key);return this.matchesComparison(e)}}class ta extends Ho{constructor(t,e){super(t,"in",e),this.keys=ia("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ea extends Ho{constructor(t,e){super(t,"not-in",e),this.keys=ia("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ia(t,e){var i;return((null===(i=e.arrayValue)||void 0===i?void 0:i.values)||[]).map((t=>Ur.fromName(t.referenceValue)))}class na extends Ho{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fo(e)&&Ao(e.arrayValue,this.value)}}class sa extends Ho{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ao(this.value.arrayValue,e)}}class ra extends Ho{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ao(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ao(this.value.arrayValue,e)}}class oa extends Ho{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ao(this.value.arrayValue,t)))}}
/**
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
 */class aa{constructor(t,e=null,i=[],n=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=n,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function la(t,e=null,i=[],n=[],s=null,r=null,o=null){return new aa(t,e,i,n,s,r,o)}function ca(t){const e=yr(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Xo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Yr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>No(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>No(t))).join(",")),e.ft=t}return e.ft}function ha(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qo(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(!Yo(t.filters[i],e.filters[i]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jo(t.startAt,e.startAt)&&jo(t.endAt,e.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(t,e=null,i=[],n=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=n,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function da(t,e,i,n,s,r,o,a){return new ua(t,e,i,n,s,r,o,a)}function fa(t){return new ua(t)}function pa(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ga(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ma(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ya(t){return null!==t.collectionGroup}function va(t){const e=yr(t);if(null===e.dt){e.dt=[];const t=ma(e),i=ga(e);if(null!==t&&null===i)t.isKeyField()||e.dt.push(new $o(t)),e.dt.push(new $o(Pr.keyField(),"asc"));else{let t=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new $o(Pr.keyField(),t))}}}return e.dt}function ba(t){const e=yr(t);if(!e.wt)if("F"===e.limitType)e.wt=la(e.path,e.collectionGroup,va(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of va(e)){const e="desc"===i.dir?"asc":"desc";t.push(new $o(i.field,e))}const i=e.endAt?new Uo(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Uo(e.startAt.position,e.startAt.inclusive):null;e.wt=la(e.path,e.collectionGroup,t,e.filters,e.limit,i,n)}return e.wt}function wa(t,e,i){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,i,t.startAt,t.endAt)}function Ea(t,e){return ha(ba(t),ba(e))&&t.limitType===e.limitType}function Ca(t){return`${ca(ba(t))}|lt:${t.limitType}`}function Ta(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Jo(t))).join(", ")}]`),Yr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>No(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>No(t))).join(",")),`Target(${e})`}(ba(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(t,e){const i=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):Ur.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(t,e)&&function(t,e){for(const i of va(t))if(!i.field.isKeyField()&&null===e.data.field(i.field))return!1;return!0}(t,e)&&function(t,e){for(const i of t.filters)if(!i.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,i){const n=Bo(t,e,i);return t.inclusive?n<=0:n<0}(t.startAt,va(t),e))&&!(t.endAt&&!function(t,e,i){const n=Bo(t,e,i);return t.inclusive?n>=0:n>0}(t.endAt,va(t),e))}(t,e)}function Ia(t){return(e,i)=>{let n=!1;for(const s of va(t)){const t=Aa(s,e,i);if(0!==t)return t;n=n||s.field.isKeyField()}return 0}}function Aa(t,e,i){const n=t.field.isKeyField()?Ur.comparator(e.key,i.key):function(t,e,i){const n=e.data.field(t),s=i.data.field(t);return null!==n&&null!==s?ko(n,s):gr()}(t.field,e,i);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return gr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0!==i)for(const[e,n]of i)if(this.equalsFn(e,t))return n}has(t){return void 0!==this.get(t)}set(t,e){const i=this.mapKeyFn(t),n=this.inner[i];if(void 0===n)return this.inner[i]=[[t,e]],void this.innerSize++;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return void(n[i]=[t,e]);n.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return!1;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return 1===i.length?delete this.inner[e]:i.splice(n,1),this.innerSize--,!0;return!1}forEach(t){so(this.inner,((e,i)=>{for(const[e,n]of i)t(e,n)}))}isEmpty(){return ro(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new oo(Ur.comparator);function Na(){return Da}const _a=new oo(Ur.comparator);function La(...t){let e=_a;for(const i of t)e=e.insert(i.key,i);return e}function Fa(t){let e=_a;return t.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Oa(){return Ma()}function xa(){return Ma()}function Ma(){return new ka((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ra=new oo(Ur.comparator),Va=new co(Ur.comparator);function Pa(...t){let e=Va;for(const i of t)e=e.add(i);return e}const Ua=new co(Lr);function Ba(){return Ua}
/**
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
 */function ja(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(e)?"-0":e}}function $a(t){return{integerValue:""+t}}function qa(t,e){return Zr(e)?$a(e):ja(t,e)}
/**
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
 */class Ga{constructor(){this._=void 0}}function Ha(t,e,i){return t instanceof Qa?function(t,e){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(i.fields.__previous_value__=e),{mapValue:i}}(i,e):t instanceof Wa?Xa(t,e):t instanceof Ya?Ja(t,e):function(t,e){const i=Ka(t,e),n=tl(i)+tl(t._t);return Lo(i)&&Lo(t._t)?$a(n):ja(t.serializer,n)}(t,e)}function za(t,e,i){return t instanceof Wa?Xa(t,e):t instanceof Ya?Ja(t,e):i}function Ka(t,e){var i;return t instanceof Za?Lo(i=e)||function(t){return!!t&&"doubleValue"in t}(i)?e:{integerValue:0}:null}class Qa extends Ga{}class Wa extends Ga{constructor(t){super(),this.elements=t}}function Xa(t,e){const i=el(e);for(const e of t.elements)i.some((t=>Io(t,e)))||i.push(e);return{arrayValue:{values:i}}}class Ya extends Ga{constructor(t){super(),this.elements=t}}function Ja(t,e){let i=el(e);for(const e of t.elements)i=i.filter((t=>!Io(t,e)));return{arrayValue:{values:i}}}class Za extends Ga{constructor(t,e){super(),this.serializer=t,this._t=e}}function tl(t){return yo(t.integerValue||t.doubleValue)}function el(t){return Fo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){this.version=t,this.transformResults=e}}class nl{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new nl}static exists(t){return new nl(void 0,t)}static updateTime(t){return new nl(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function sl(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class rl{}function ol(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ml(t.key,nl.none()):new ul(t.key,t.data,nl.none());{const i=t.data,n=Ro.empty();let s=new co(Pr.comparator);for(let t of e.fields)if(!s.has(t)){let e=i.field(t);null===e&&t.length>1&&(t=t.popLast(),e=i.field(t)),null===e?n.delete(t):n.set(t,e),s=s.add(t)}return new dl(t.key,n,new uo(s.toArray()),nl.none())}}function al(t,e,i){t instanceof ul?function(t,e,i){const n=t.value.clone(),s=pl(t.fieldTransforms,e,i.transformResults);n.setAll(s),e.convertToFoundDocument(i.version,n).setHasCommittedMutations()}(t,e,i):t instanceof dl?function(t,e,i){if(!sl(t.precondition,e))return void e.convertToUnknownDocument(i.version);const n=pl(t.fieldTransforms,e,i.transformResults),s=e.data;s.setAll(fl(t)),s.setAll(n),e.convertToFoundDocument(i.version,s).setHasCommittedMutations()}(t,e,i):function(t,e,i){e.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,i)}function ll(t,e,i,n){return t instanceof ul?function(t,e,i,n){if(!sl(t.precondition,e))return i;const s=t.value.clone(),r=gl(t.fieldTransforms,n,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,i,n):t instanceof dl?function(t,e,i,n){if(!sl(t.precondition,e))return i;const s=gl(t.fieldTransforms,n,e),r=e.data;return r.setAll(fl(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===i?null:i.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,i,n):function(t,e,i){return sl(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):i}(t,e,i)}function cl(t,e){let i=null;for(const n of t.fieldTransforms){const t=e.data.field(n.field),s=Ka(n.transform,t||null);null!=s&&(null===i&&(i=Ro.empty()),i.set(n.field,s))}return i||null}function hl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Fr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Wa&&e instanceof Wa||t instanceof Ya&&e instanceof Ya?Fr(t.elements,e.elements,Io):t instanceof Za&&e instanceof Za?Io(t._t,e._t):t instanceof Qa&&e instanceof Qa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ul extends rl{constructor(t,e,i,n=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class dl extends rl{constructor(t,e,i,n,s=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function fl(t){const e=new Map;return t.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const n=t.data.field(i);e.set(i,n)}})),e}function pl(t,e,i){const n=new Map;mr(t.length===i.length);for(let s=0;s<i.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);n.set(r.field,za(o,a,i[s]))}return n}function gl(t,e,i){const n=new Map;for(const s of t){const t=s.transform,r=i.data.field(s.field);n.set(s.field,Ha(t,r,e))}return n}class ml extends rl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yl extends rl{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e,i,n){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=n}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const n=this.mutations[e];n.key.isEqual(t.key)&&al(n,t,i[e])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=ll(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=ll(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=xa();return this.mutations.forEach((n=>{const s=t.get(n.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(n.key)?null:o;const a=ol(r,o);null!==a&&i.set(n.key,a),r.isValidDocument()||r.convertToNoDocument(xr.min())})),i}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Pa())}isEqual(t){return this.batchId===t.batchId&&Fr(this.mutations,t.mutations,((t,e)=>hl(t,e)))&&Fr(this.baseMutations,t.baseMutations,((t,e)=>hl(t,e)))}}class bl{constructor(t,e,i,n){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=n}static from(t,e,i){mr(t.mutations.length===i.length);let n=Ra;const s=t.mutations;for(let t=0;t<s.length;t++)n=n.insert(s[t].key,i[t].version);return new bl(t,e,i,n)}}
/**
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
 */class wl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var El,Cl;function Tl(t){switch(t){default:return gr();case vr.CANCELLED:case vr.UNKNOWN:case vr.DEADLINE_EXCEEDED:case vr.RESOURCE_EXHAUSTED:case vr.INTERNAL:case vr.UNAVAILABLE:case vr.UNAUTHENTICATED:return!1;case vr.INVALID_ARGUMENT:case vr.NOT_FOUND:case vr.ALREADY_EXISTS:case vr.PERMISSION_DENIED:case vr.FAILED_PRECONDITION:case vr.ABORTED:case vr.OUT_OF_RANGE:case vr.UNIMPLEMENTED:case vr.DATA_LOSS:return!0}}function Sl(t){if(void 0===t)return dr("GRPC error has no .code"),vr.UNKNOWN;switch(t){case El.OK:return vr.OK;case El.CANCELLED:return vr.CANCELLED;case El.UNKNOWN:return vr.UNKNOWN;case El.DEADLINE_EXCEEDED:return vr.DEADLINE_EXCEEDED;case El.RESOURCE_EXHAUSTED:return vr.RESOURCE_EXHAUSTED;case El.INTERNAL:return vr.INTERNAL;case El.UNAVAILABLE:return vr.UNAVAILABLE;case El.UNAUTHENTICATED:return vr.UNAUTHENTICATED;case El.INVALID_ARGUMENT:return vr.INVALID_ARGUMENT;case El.NOT_FOUND:return vr.NOT_FOUND;case El.ALREADY_EXISTS:return vr.ALREADY_EXISTS;case El.PERMISSION_DENIED:return vr.PERMISSION_DENIED;case El.FAILED_PRECONDITION:return vr.FAILED_PRECONDITION;case El.ABORTED:return vr.ABORTED;case El.OUT_OF_RANGE:return vr.OUT_OF_RANGE;case El.UNIMPLEMENTED:return vr.UNIMPLEMENTED;case El.DATA_LOSS:return vr.DATA_LOSS;default:return gr()}}(Cl=El||(El={}))[Cl.OK=0]="OK",Cl[Cl.CANCELLED=1]="CANCELLED",Cl[Cl.UNKNOWN=2]="UNKNOWN",Cl[Cl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Cl[Cl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Cl[Cl.NOT_FOUND=5]="NOT_FOUND",Cl[Cl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Cl[Cl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Cl[Cl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Cl[Cl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Cl[Cl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Cl[Cl.ABORTED=10]="ABORTED",Cl[Cl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Cl[Cl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Cl[Cl.INTERNAL=13]="INTERNAL",Cl[Cl.UNAVAILABLE=14]="UNAVAILABLE",Cl[Cl.DATA_LOSS=15]="DATA_LOSS";class Il{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kl(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Dl(t,e){return Al(t,e.toTimestamp())}function Nl(t){return mr(!!t),xr.fromTimestamp(function(t){const e=mo(t);return new Or(e.seconds,e.nanos)}(t))}function _l(t,e){return function(t){return new Rr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ll(t){const e=Rr.fromString(t);return mr($l(e)),e}function Fl(t,e){return _l(t.databaseId,e.path)}function Ol(t){const e=Ll(t);return 4===e.length?Rr.emptyPath():Ml(e)}function xl(t){return new Rr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ml(t){return mr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Rl(t,e,i){return{name:Fl(t,e),fields:i.value.mapValue.fields}}function Vl(t,e){let i;if(e instanceof ul)i={update:Rl(t,e.key,e.value)};else if(e instanceof ml)i={delete:Fl(t,e.key)};else if(e instanceof dl)i={update:Rl(t,e.key,e.data),updateMask:jl(e.fieldMask)};else{if(!(e instanceof yl))return gr();i={verify:Fl(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const i=e.transform;if(i instanceof Qa)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof Wa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof Ya)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof Za)return{fieldPath:e.field.canonicalString(),increment:i._t};throw gr()}(0,t)))),e.precondition.isNone||(i.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Dl(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:gr()}(t,e.precondition)),i}function Pl(t){let e=Ol(t.parent);const i=t.structuredQuery,n=i.from?i.from.length:0;let s=null;if(n>0){mr(1===n);const t=i.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];i.where&&(r=function(t){const e=Ul(t);return e instanceof zo&&Qo(e)?e.getFilters():[e]}(i.where));let o=[];i.orderBy&&(o=i.orderBy.map((t=>function(t){return new $o(Bl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;i.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Yr(e)?null:e}(i.limit));let l=null;i.startAt&&(l=function(t){const e=!!t.before,i=t.values||[];return new Uo(i,e)}(i.startAt));let c=null;return i.endAt&&(c=function(t){const e=!t.before,i=t.values||[];return new Uo(i,e)}(i.endAt)),da(e,s,o,r,a,"F",l,c)}function Ul(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bl(t.unaryFilter.field);return Ho.create(e,"==",{doubleValue:NaN});case"IS_NULL":const i=Bl(t.unaryFilter.field);return Ho.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=Bl(t.unaryFilter.field);return Ho.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Bl(t.unaryFilter.field);return Ho.create(s,"!=",{nullValue:"NULL_VALUE"});default:return gr()}}(t):void 0!==t.fieldFilter?function(t){return Ho.create(Bl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return gr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return zo.create(t.compositeFilter.filters.map((t=>Ul(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return gr()}}(t.compositeFilter.op))}(t):gr()}function Bl(t){return Pr.fromServerFormat(t.fieldPath)}function jl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $l(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t){this.se=t}}function Gl(t){const e=Pl({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?wa(e,e.limit,"L"):e}
/**
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
 */class Hl{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(yo(t.integerValue));else if("doubleValue"in t){const i=yo(t.doubleValue);isNaN(i)?this.ae(e,13):(this.ae(e,15),Jr(i)?e.he(0):e.he(i))}else if("timestampValue"in t){const i=t.timestampValue;this.ae(e,20),"string"==typeof i?e.le(i):(e.le(`${i.seconds||""}`),e.he(i.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(vo(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.ae(e,45),e.he(i.latitude||0),e.he(i.longitude||0)}else"mapValue"in t?Mo(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):gr()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const i=t.fields||{};this.ae(e,55);for(const t of Object.keys(i))this.fe(t,e),this.ue(i[t],e)}ge(t,e){const i=t.values||[];this.ae(e,50);for(const t of i)this.ue(t,e)}_e(t,e){this.ae(e,37),Ur.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Hl.pe=new Hl;
/**
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
 */
class zl{constructor(){this.He=new Kl}addToCollectionParentIndex(t,e){return this.He.add(e),Qr.resolve()}getCollectionParents(t,e){return Qr.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return Qr.resolve()}deleteFieldIndex(t,e){return Qr.resolve()}getDocumentsMatchingTarget(t,e){return Qr.resolve(null)}getIndexType(t,e){return Qr.resolve(0)}getFieldIndexes(t,e){return Qr.resolve([])}getNextCollectionGroupToUpdate(t){return Qr.resolve(null)}getMinOffset(t,e){return Qr.resolve(qr.min())}getMinOffsetFromCollectionGroup(t,e){return Qr.resolve(qr.min())}updateCollectionGroup(t,e,i){return Qr.resolve()}updateIndexEntries(t,e){return Qr.resolve()}}class Kl{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e]||new co(Rr.comparator),s=!n.has(i);return this.index[e]=n.add(i),s}has(t){const e=t.lastSegment(),i=t.popLast(),n=this.index[e];return n&&n.has(i)}getEntries(t){return(this.index[t]||new co(Rr.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Ql{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new Ql(t,Ql.DEFAULT_COLLECTION_PERCENTILE,Ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ql.DEFAULT_COLLECTION_PERCENTILE=10,Ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ql.DEFAULT=new Ql(41943040,Ql.DEFAULT_COLLECTION_PERCENTILE,Ql.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ql.DISABLED=new Ql(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Wl(0)}static bn(){return new Wl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xl{constructor(){this.changes=new ka((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Po.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return void 0!==i?Qr.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class Yl{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(t,e,i,n){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=n}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next((n=>(i=n,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==i&&ll(i.mutation,t,uo.empty(),Or.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Pa()).next((()=>e))))}getLocalViewOfDocuments(t,e,i=Pa()){const n=Oa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,i).next((t=>{let e=La();return t.forEach(((t,i)=>{e=e.insert(t,i.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const i=Oa();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,Pa())))}populateOverlays(t,e,i){const n=[];return i.forEach((t=>{e.has(t)||n.push(t)})),this.documentOverlayCache.getOverlays(t,n).next((t=>{t.forEach(((t,i)=>{e.set(t,i)}))}))}computeViews(t,e,i,n){let s=Na();const r=Ma(),o=Ma();return e.forEach(((t,e)=>{const o=i.get(e.key);n.has(e.key)&&(void 0===o||o.mutation instanceof dl)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),ll(o.mutation,e,o.mutation.getFieldMask(),Or.now())):r.set(e.key,uo.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var i;return o.set(t,new Yl(e,null!==(i=r.get(t))&&void 0!==i?i:null))})),o)))}recalculateAndSaveOverlays(t,e){const i=Ma();let n=new oo(((t,e)=>t-e)),s=Pa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=i.get(t)||uo.empty();o=s.applyToLocalView(r,o),i.set(t,o);const a=(n.get(s.batchId)||Pa()).add(t);n=n.insert(s.batchId,a)}))})).next((()=>{const r=[],o=n.getReverseIterator();for(;o.hasNext();){const n=o.getNext(),a=n.key,l=n.value,c=xa();l.forEach((t=>{if(!s.has(t)){const n=ol(e.get(t),i.get(t));null!==n&&c.set(t,n),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Qr.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,i){return function(t){return Ur.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ya(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i):this.getDocumentsMatchingCollectionQuery(t,e,i)}getNextDocuments(t,e,i,n){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,n).next((s=>{const r=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,n-s.size):Qr.resolve(Oa());let o=-1,a=s;return r.next((e=>Qr.forEach(e,((e,i)=>(o<i.largestBatchId&&(o=i.largestBatchId),s.get(e)?Qr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Pa()))).next((t=>({batchId:o,changes:Fa(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Ur(e)).next((t=>{let e=La();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,i){const n=e.collectionGroup;let s=La();return this.indexManager.getCollectionParents(t,n).next((r=>Qr.forEach(r,(r=>{const o=function(t,e){return new ua(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(n));return this.getDocumentsMatchingCollectionQuery(t,o,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,i){let n;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next((s=>(n=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,n)))).next((t=>{n.forEach(((e,i)=>{const n=i.getKey();null===t.get(n)&&(t=t.insert(n,Po.newInvalidDocument(n)))}));let i=La();return t.forEach(((t,s)=>{const r=n.get(t);void 0!==r&&ll(r.mutation,s,uo.empty(),Or.now()),Sa(e,s)&&(i=i.insert(t,s))})),i}))}}
/**
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
 */class Zl{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Qr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var i;return this.Zn.set(e.id,{id:(i=e).id,version:i.version,createTime:Nl(i.createTime)}),Qr.resolve()}getNamedQuery(t,e){return Qr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Gl(t.bundledQuery),readTime:Nl(t.readTime)}}(e)),Qr.resolve()}}
/**
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
 */class tc{constructor(){this.overlays=new oo(Ur.comparator),this.ts=new Map}getOverlay(t,e){return Qr.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Oa();return Qr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&i.set(e,t)})))).next((()=>i))}saveOverlays(t,e,i){return i.forEach(((i,n)=>{this.re(t,e,n)})),Qr.resolve()}removeOverlaysForBatchId(t,e,i){const n=this.ts.get(i);return void 0!==n&&(n.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(i)),Qr.resolve()}getOverlaysForCollection(t,e,i){const n=Oa(),s=e.length+1,r=new Ur(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>i&&n.set(t.getKey(),t)}return Qr.resolve(n)}getOverlaysForCollectionGroup(t,e,i,n){let s=new oo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>i){let e=s.get(t.largestBatchId);null===e&&(e=Oa(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Oa(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=n)););return Qr.resolve(o)}re(t,e,i){const n=this.overlays.get(i.key);if(null!==n){const t=this.ts.get(n.largestBatchId).delete(i.key);this.ts.set(n.largestBatchId,t)}this.overlays=this.overlays.insert(i.key,new wl(e,i));let s=this.ts.get(e);void 0===s&&(s=Pa(),this.ts.set(e,s)),this.ts.set(e,s.add(i.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.es=new co(ic.ns),this.ss=new co(ic.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const i=new ic(t,e);this.es=this.es.add(i),this.ss=this.ss.add(i)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new ic(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new Ur(new Rr([])),i=new ic(e,t),n=new ic(e,t+1),s=[];return this.ss.forEachInRange([i,n],(t=>{this.us(t),s.push(t.key)})),s}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new Ur(new Rr([])),i=new ic(e,t),n=new ic(e,t+1);let s=Pa();return this.ss.forEachInRange([i,n],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new ic(t,0),i=this.es.firstAfterOrEqual(e);return null!==i&&t.isEqual(i.key)}}class ic{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return Ur.comparator(t.key,e.key)||Lr(t.ds,e.ds)}static rs(t,e){return Lr(t.ds,e.ds)||Ur.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new co(ic.ns)}checkEmpty(t){return Qr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,i,n){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new vl(s,e,i,n);this.mutationQueue.push(r);for(const e of n)this._s=this._s.add(new ic(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Qr.resolve(r)}lookupMutationBatch(t,e){return Qr.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,n=this.ys(i),s=n<0?0:n;return Qr.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Qr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Qr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new ic(e,0),n=new ic(e,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([i,n],(t=>{const e=this.gs(t.ds);s.push(e)})),Qr.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new co(Lr);return e.forEach((t=>{const e=new ic(t,0),n=new ic(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,n],(t=>{i=i.add(t.ds)}))})),Qr.resolve(this.ps(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,n=i.length+1;let s=i;Ur.isDocumentKey(s)||(s=s.child(""));const r=new ic(new Ur(s),0);let o=new co(Lr);return this._s.forEachWhile((t=>{const e=t.key.path;return!!i.isPrefixOf(e)&&(e.length===n&&(o=o.add(t.ds)),!0)}),r),Qr.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const i=this.gs(t);null!==i&&e.push(i)})),e}removeMutationBatch(t,e){mr(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let i=this._s;return Qr.forEach(e.mutations,(n=>{const s=new ic(n.key,e.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,n.key)})).next((()=>{this._s=i}))}En(t){}containsKey(t,e){const i=new ic(e,0),n=this._s.firstAfterOrEqual(i);return Qr.resolve(e.isEqual(n&&n.key))}performConsistencyCheck(t){return this.mutationQueue.length,Qr.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(t){this.Ts=t,this.docs=new oo(Ur.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,n=this.docs.get(i),s=n?n.size:0,r=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return Qr.resolve(i?i.document.mutableCopy():Po.newInvalidDocument(e))}getEntries(t,e){let i=Na();return e.forEach((t=>{const e=this.docs.get(t);i=i.insert(t,e?e.document.mutableCopy():Po.newInvalidDocument(t))})),Qr.resolve(i)}getDocumentsMatchingQuery(t,e,i,n){let s=Na();const r=e.path,o=new Ur(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Gr($r(o),i)<=0||(n.has(o.key)||Sa(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Qr.resolve(s)}getAllFromCollectionGroup(t,e,i,n){gr()}Es(t,e){return Qr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new rc(this)}getSize(t){return Qr.resolve(this.size)}}class rc extends Xl{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((i,n)=>{n.isValidDocument()?e.push(this.Jn.addEntry(t,n)):this.Jn.removeEntry(i)})),Qr.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t){this.persistence=t,this.As=new ka((t=>ca(t)),ha),this.lastRemoteSnapshotVersion=xr.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ec,this.targetCount=0,this.bs=Wl.vn()}forEachTarget(t,e){return this.As.forEach(((t,i)=>e(i))),Qr.resolve()}getLastRemoteSnapshotVersion(t){return Qr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qr.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),Qr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Rs&&(this.Rs=e),Qr.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Wl(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,Qr.resolve()}updateTargetData(t,e){return this.Sn(e),Qr.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,Qr.resolve()}removeTargets(t,e,i){let n=0;const s=[];return this.As.forEach(((r,o)=>{o.sequenceNumber<=e&&null===i.get(o.targetId)&&(this.As.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),n++)})),Qr.waitFor(s).next((()=>n))}getTargetCount(t){return Qr.resolve(this.targetCount)}getTargetData(t,e){const i=this.As.get(e)||null;return Qr.resolve(i)}addMatchingKeys(t,e,i){return this.vs.os(e,i),Qr.resolve()}removeMatchingKeys(t,e,i){this.vs.cs(e,i);const n=this.persistence.referenceDelegate,s=[];return n&&e.forEach((e=>{s.push(n.markPotentiallyOrphaned(t,e))})),Qr.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),Qr.resolve()}getMatchingKeysForTargetId(t,e){const i=this.vs.fs(e);return Qr.resolve(i)}containsKey(t,e){return Qr.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new Xr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new oc(this),this.indexManager=new zl,this.remoteDocumentCache=function(t){return new sc(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new ql(e),this.xs=new Zl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.Ps[t.toKey()];return i||(i=new nc(e,this.referenceDelegate),this.Ps[t.toKey()]=i),i}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,i){ur("MemoryPersistence","Starting transaction:",t);const n=new lc(this.Vs.next());return this.referenceDelegate.Ns(),i(n).next((t=>this.referenceDelegate.ks(n).next((()=>t)))).toPromise().then((t=>(n.raiseOnCommittedEvent(),t)))}Os(t,e){return Qr.or(Object.values(this.Ps).map((i=>()=>i.containsKey(t,e))))}}class lc extends zr{constructor(t){super(),this.currentSequenceNumber=t}}class cc{constructor(t){this.persistence=t,this.$s=new ec,this.Ms=null}static Fs(t){return new cc(t)}get Bs(){if(this.Ms)return this.Ms;throw gr()}addReference(t,e,i){return this.$s.addReference(i,e),this.Bs.delete(i.toString()),Qr.resolve()}removeReference(t,e,i){return this.$s.removeReference(i,e),this.Bs.add(i.toString()),Qr.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),Qr.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>i.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qr.forEach(this.Bs,(i=>{const n=Ur.fromPath(i);return this.Ls(t,n).next((t=>{t||e.removeEntry(n,xr.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return Qr.or([()=>Qr.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(t,e,i,n){this.targetId=t,this.fromCache=e,this.Vi=i,this.Si=n}static Di(t,e){let i=Pa(),n=Pa();for(const t of e.docChanges)switch(t.type){case 0:i=i.add(t.doc.key);break;case 1:n=n.add(t.doc.key)}return new hc(t,e.fromCache,i,n)}}
/**
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
 */class uc{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,i,n){return this.Ni(t,e).next((s=>s||this.ki(t,e,n,i))).next((i=>i||this.Oi(t,e)))}Ni(t,e){if(pa(e))return Qr.resolve(null);let i=ba(e);return this.indexManager.getIndexType(t,i).next((n=>0===n?null:(null!==e.limit&&1===n&&(e=wa(e,null,"F"),i=ba(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next((n=>{const s=Pa(...n);return this.xi.getDocuments(t,s).next((n=>this.indexManager.getMinOffset(t,i).next((i=>{const r=this.$i(e,n);return this.Mi(e,r,s,i.readTime)?this.Ni(t,wa(e,null,"F")):this.Fi(t,r,e,i)}))))})))))}ki(t,e,i,n){return pa(e)||n.isEqual(xr.min())?this.Oi(t,e):this.xi.getDocuments(t,i).next((s=>{const r=this.$i(e,s);return this.Mi(e,r,i,n)?this.Oi(t,e):(hr()<=st.DEBUG&&ur("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ta(e)),this.Fi(t,r,e,jr(n,-1)))}))}$i(t,e){let i=new co(Ia(t));return e.forEach(((e,n)=>{Sa(t,n)&&(i=i.add(n))})),i}Mi(t,e,i,n){if(null===t.limit)return!1;if(i.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Oi(t,e){return hr()<=st.DEBUG&&ur("QueryEngine","Using full collection scan to execute query:",Ta(e)),this.xi.getDocumentsMatchingQuery(t,e,qr.min())}Fi(t,e,i,n){return this.xi.getDocumentsMatchingQuery(t,i,n).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class dc{constructor(t,e,i,n){this.persistence=t,this.Bi=e,this.serializer=n,this.Li=new oo(Lr),this.qi=new ka((t=>ca(t)),ha),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(i)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jl(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function fc(t,e,i,n){return new dc(t,e,i,n)}async function pc(t,e){const i=yr(t);return await i.persistence.runTransaction("Handle user change","readonly",(t=>{let n;return i.mutationQueue.getAllMutationBatches(t).next((s=>(n=s,i.Gi(e),i.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Pa();for(const t of n){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function gc(t){const e=yr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function mc(t,e){const i=yr(t);return i.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),i.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class yc{constructor(){this.activeTargetIds=Ba()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vc{constructor(){this.Br=new yc,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,i){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new yc,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class bc{qr(t){}shutdown(){}}
/**
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
 */class wc{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){ur("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){ur("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Ec=null;function Cc(){return null===Ec?Ec=268435456+Math.round(2147483648*Math.random()):Ec++,"0x"+Ec.toString(16)
/**
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
 */}const Tc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="WebChannelConnection";class Ac extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,i,n,s){const r=Cc(),o=this.ao(t,e);ur("RestConnection",`Sending RPC '${t}' ${r}:`,o,i);const a={};return this.ho(a,n,s),this.lo(t,o,a,i).then((e=>(ur("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw fr("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",i),e}))}fo(t,e,i,n,s,r){return this.co(t,e,i,n,s)}ho(t,e,i){t["X-Goog-Api-Client"]="gl-js/ fire/"+lr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,i)=>t[i]=e)),i&&i.headers.forEach(((e,i)=>t[i]=e))}ao(t,e){const i=Tc[t];return`${this.ro}/v1/${e}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,i,n){const s=Cc();return new Promise(((r,o)=>{const a=new rr;a.setWithCredentials(!0),a.listenOnce(tr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Zs.NO_ERROR:const e=a.getResponseJson();ur(Ic,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),r(e);break;case Zs.TIMEOUT:ur(Ic,`RPC '${t}' ${s} timed out`),o(new br(vr.DEADLINE_EXCEEDED,"Request time out"));break;case Zs.HTTP_ERROR:const i=a.getStatus();if(ur(Ic,`RPC '${t}' ${s} failed with status:`,i,"response text:",a.getResponseText()),i>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(vr).indexOf(e)>=0?e:vr.UNKNOWN}(e.status);o(new br(t,e.message))}else o(new br(vr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new br(vr.UNAVAILABLE,"Connection failed."));break;default:gr()}}finally{ur(Ic,`RPC '${t}' ${s} completed.`)}}));const l=JSON.stringify(n);ur(Ic,`RPC '${t}' ${s} sending request:`,n),a.send(e,"POST",l,i,15)}))}wo(t,e,i){const n=Cc(),s=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ys(),o=Js(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new nr({})),this.ho(a.initMessageHeaders,e,i),a.encodeInitMessageHeaders=!0;const l=s.join("");ur(Ic,`Creating RPC '${t}' stream ${n}: ${l}`,a);const c=r.createWebChannel(l,a);let h=!1,u=!1;const d=new Sc({Wr:e=>{u?ur(Ic,`Not sending because RPC '${t}' stream ${n} is closed:`,e):(h||(ur(Ic,`Opening RPC '${t}' stream ${n} transport.`),c.open(),h=!0),ur(Ic,`RPC '${t}' stream ${n} sending:`,e),c.send(e))},Hr:()=>c.close()}),f=(t,e,i)=>{t.listen(e,(t=>{try{i(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,sr.EventType.OPEN,(()=>{u||ur(Ic,`RPC '${t}' stream ${n} transport opened.`)})),f(c,sr.EventType.CLOSE,(()=>{u||(u=!0,ur(Ic,`RPC '${t}' stream ${n} transport closed`),d.so())})),f(c,sr.EventType.ERROR,(e=>{u||(u=!0,fr(Ic,`RPC '${t}' stream ${n} transport errored:`,e),d.so(new br(vr.UNAVAILABLE,"The operation could not be completed")))})),f(c,sr.EventType.MESSAGE,(e=>{var i;if(!u){const s=e.data[0];mr(!!s);const r=s,o=r.error||(null===(i=r[0])||void 0===i?void 0:i.error);if(o){ur(Ic,`RPC '${t}' stream ${n} received error:`,o);const e=o.status;let i=function(t){const e=El[t];if(void 0!==e)return Sl(e)}(e),s=o.message;void 0===i&&(i=vr.INTERNAL,s="Unknown error status: "+e+" with message "+o.message),u=!0,d.so(new br(i,s)),c.close()}else ur(Ic,`RPC '${t}' stream ${n} received:`,s),d.io(s)}})),f(o,er.STAT_EVENT,(e=>{e.stat===ir.PROXY?ur(Ic,`RPC '${t}' stream ${n} detected buffering proxy`):e.stat===ir.NOPROXY&&ur(Ic,`RPC '${t}' stream ${n} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
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
 */
/**
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
 */function kc(){return"undefined"!=typeof document?document:null}
/**
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
 */function Dc(t){return new Il(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e,i=1e3,n=1.5,s=6e4){this.Ws=t,this.timerId=e,this._o=i,this.mo=n,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),n=Math.max(0,e-i);n>0&&ur("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,n,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e,i,n,s,r,o,a){this.Ws=t,this.bo=i,this.Po=n,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Nc(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===vr.RESOURCE_EXHAUSTED?(dr(e.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===vr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,i])=>{this.Vo===e&&this.Ko(t,i)}),(e=>{t((()=>{const t=new br(vr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const i=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{i((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{i((()=>this.Go(t)))})),this.stream.onMessage((t=>{i((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return ur("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(ur("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Lc extends _c{constructor(t,e,i,n,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,n,r),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(mr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const e=function(t,e){return t&&t.length>0?(mr(void 0!==e),t.map((t=>function(t,e){let i=t.updateTime?Nl(t.updateTime):Nl(e);return i.isEqual(xr.min())&&(i=Nl(e)),new il(i,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),i=Nl(t.commitTime);return this.listener.Zo(i,e)}return mr(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=xl(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Vl(this.serializer,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends class{}{constructor(t,e,i,n){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=n,this.eu=!1}nu(){if(this.eu)throw new br(vr.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([n,s])=>this.connection.co(t,e,i,n,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new br(vr.UNKNOWN,t.toString())}))}fo(t,e,i,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.fo(t,e,i,s,r,n))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new br(vr.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class Oc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(dr(e),this.ru=!1):ur("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,i,n,s){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr((t=>{i.enqueueAndForget((async()=>{Vc(this)&&(ur("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=yr(t);e.du.add(4),await Rc(e),e.mu.set("Unknown"),e.du.delete(4),await Mc(e)}(this))}))})),this.mu=new Oc(i,n)}}async function Mc(t){if(Vc(t))for(const e of t.wu)await e(!0)}async function Rc(t){for(const e of t.wu)await e(!1)}function Vc(t){return 0===yr(t).du.size}async function Pc(t,e,i){if(!Wr(e))throw e;t.du.add(1),await Rc(t),t.mu.set("Offline"),i||(i=()=>gc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{ur("RemoteStore","Retrying IndexedDB access"),await i(),t.du.delete(1),await Mc(t)}))}function Uc(t,e){return e().catch((i=>Pc(t,i,e)))}async function Bc(t){const e=yr(t),i=Yc(e);let n=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;jc(e);)try{const t=await mc(e.localStore,n);if(null===t){0===e.lu.length&&i.$o();break}n=t.batchId,$c(e,t)}catch(t){await Pc(e,t)}qc(e)&&Gc(e)}function jc(t){return Vc(t)&&t.lu.length<10}function $c(t,e){t.lu.push(e);const i=Yc(t);i.No()&&i.Jo&&i.Yo(e.mutations)}function qc(t){return Vc(t)&&!Yc(t).xo()&&t.lu.length>0}function Gc(t){Yc(t).start()}async function Hc(t){Yc(t).tu()}async function zc(t){const e=Yc(t);for(const i of t.lu)e.Yo(i.mutations)}async function Kc(t,e,i){const n=t.lu.shift(),s=bl.from(n,e,i);await Uc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Bc(t)}async function Qc(t,e){e&&Yc(t).Jo&&await async function(t,e){if(Tl(i=e.code)&&i!==vr.ABORTED){const i=t.lu.shift();Yc(t).Oo(),await Uc(t,(()=>t.remoteSyncer.rejectFailedWrite(i.batchId,e))),await Bc(t)}var i}(t,e),qc(t)&&Gc(t)}async function Wc(t,e){const i=yr(t);i.asyncQueue.verifyOperationInProgress(),ur("RemoteStore","RemoteStore received new credentials");const n=Vc(i);i.du.add(3),await Rc(i),n&&i.mu.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.du.delete(3),await Mc(i)}async function Xc(t,e){const i=yr(t);e?(i.du.delete(2),await Mc(i)):e||(i.du.add(2),await Rc(i),i.mu.set("Unknown"))}function Yc(t){return t.pu||(t.pu=function(t,e,i){const n=yr(t);return n.nu(),new Lc(e,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,i)}(t.datastore,t.asyncQueue,{Jr:Hc.bind(null,t),Zr:Qc.bind(null,t),Xo:zc.bind(null,t),Zo:Kc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await Bc(t)):(await t.pu.stop(),t.lu.length>0&&(ur("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jc{constructor(t,e,i,n,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,i,n,s){const r=Date.now()+i,o=new Jc(t,e,r,n,s);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new br(vr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zc(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Wr(t))return new br(vr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.queries=new ka((t=>Ca(t)),Ea),this.onlineState="Unknown",this.Au=new Set}}function eh(t){t.Au.forEach((t=>{t.next()}))}class ih{constructor(t,e,i,n,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new ka((t=>Ca(t)),Ea),this.ic=new Map,this.rc=new Set,this.oc=new oo(Ur.comparator),this.uc=new Map,this.cc=new ec,this.ac={},this.hc=new Map,this.lc=Wl.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}function nh(t,e,i){const n=yr(t);if(n.isPrimaryClient&&0===i||!n.isPrimaryClient&&1===i){const t=[];n.sc.forEach(((i,n)=>{const s=n.view.Ru(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const i=yr(t);i.onlineState=e;let n=!1;i.queries.forEach(((t,i)=>{for(const t of i.listeners)t.Ru(e)&&(n=!0)})),n&&eh(i)}(n.eventManager,e),t.length&&n.nc.zo(t),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function sh(t,e){const i=yr(t),n=e.batch.batchId;try{const t=await function(t,e){const i=yr(t);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const n=e.batch.keys(),s=i.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,i,n){const s=i.batch,r=s.keys();let o=Qr.resolve();return r.forEach((t=>{o=o.next((()=>n.getEntry(e,t))).next((e=>{const r=i.docVersions.get(t);mr(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,i),e.isValidDocument()&&(e.setReadTime(i.commitVersion),n.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(i,t,e,s).next((()=>s.apply(t))).next((()=>i.mutationQueue.performConsistencyCheck(t))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Pa();for(let i=0;i<t.mutationResults.length;++i)t.mutationResults[i].transformResults.length>0&&(e=e.add(t.batch.mutations[i].key));return e}(e)))).next((()=>i.localDocuments.getDocuments(t,n)))}))}(i.localStore,e);ah(i,n,null),oh(i,n),i.sharedClientState.updateMutationState(n,"acknowledged"),await lh(i,t)}catch(t){await Kr(t)}}async function rh(t,e,i){const n=yr(t);try{const t=await function(t,e){const i=yr(t);return i.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let n;return i.mutationQueue.lookupMutationBatch(t,e).next((e=>(mr(null!==e),n=e.keys(),i.mutationQueue.removeMutationBatch(t,e)))).next((()=>i.mutationQueue.performConsistencyCheck(t))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,n))).next((()=>i.localDocuments.getDocuments(t,n)))}))}(n.localStore,e);ah(n,e,i),oh(n,e),n.sharedClientState.updateMutationState(e,"rejected",i),await lh(n,t)}catch(i){await Kr(i)}}function oh(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function ah(t,e,i){const n=yr(t);let s=n.ac[n.currentUser.toKey()];if(s){const t=s.get(e);t&&(i?t.reject(i):t.resolve(),s=s.remove(e)),n.ac[n.currentUser.toKey()]=s}}async function lh(t,e,i){const n=yr(t),s=[],r=[],o=[];n.sc.isEmpty()||(n.sc.forEach(((t,a)=>{o.push(n.dc(a,e,i).then((t=>{if((t||i)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=hc.Di(a.targetId,t);r.push(e)}})))})),await Promise.all(o),n.nc.zo(s),await async function(t,e){const i=yr(t);try{await i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Qr.forEach(e,(e=>Qr.forEach(e.Vi,(n=>i.persistence.referenceDelegate.addReference(t,e.targetId,n))).next((()=>Qr.forEach(e.Si,(n=>i.persistence.referenceDelegate.removeReference(t,e.targetId,n)))))))))}catch(t){if(!Wr(t))throw t;ur("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=i.Li.get(e),n=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(n);i.Li=i.Li.insert(e,s)}}}(n.localStore,r))}async function ch(t,e){const i=yr(t);if(!i.currentUser.isEqual(e)){ur("SyncEngine","User change. New user:",e.toKey());const t=await pc(i.localStore,e);i.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new br(vr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear()}(i),i.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await lh(i,t.Qi)}}function hh(t){const e=yr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rh.bind(null,e),e}class uh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Dc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return fc(this.persistence,new uc,t.initialUser,this.serializer)}createPersistence(t){return new ac(cc.Fs,this.serializer)}createSharedClientState(t){return new vc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>nh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ch.bind(null,this.syncEngine),await Xc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new th}createDatastore(t){const e=Dc(t.databaseInfo.databaseId),i=(n=t.databaseInfo,new Ac(n));var n;return function(t,e,i,n){return new Fc(t,e,i,n)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){var e,i,n,s,r;return e=this.localStore,i=this.datastore,n=t.asyncQueue,s=t=>nh(this.syncEngine,t,0),r=wc.D()?new wc:new bc,new xc(e,i,n,s,r)}createSyncEngine(t,e){return function(t,e,i,n,s,r,o){const a=new ih(t,e,i,n,s,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=yr(t);ur("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Rc(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=ar.UNAUTHENTICATED,this.clientId=_r.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{ur("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(ur("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new br(vr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Zc(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}async function ph(t,e){t.asyncQueue.verifyOperationInProgress(),ur("FirestoreClient","Initializing OfflineComponentProvider");const i=await t.getConfiguration();await e.initialize(i);let n=i.initialUser;t.setCredentialChangeListener((async t=>{n.isEqual(t)||(await pc(e.localStore,t),n=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function gh(t,e){t.asyncQueue.verifyOperationInProgress();const i=await yh(t);ur("FirestoreClient","Initializing OnlineComponentProvider");const n=await t.getConfiguration();await e.initialize(i,n),t.setCredentialChangeListener((t=>Wc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,i)=>Wc(e.remoteStore,i))),t._onlineComponents=e}function mh(t){return"FirebaseError"===t.name?t.code===vr.FAILED_PRECONDITION||t.code===vr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function yh(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ur("FirestoreClient","Using user provided OfflineComponentProvider");try{await ph(t,t._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!mh(i))throw i;fr("Error using user provided cache. Falling back to memory cache: "+i),await ph(t,new uh)}}else ur("FirestoreClient","Using default OfflineComponentProvider"),await ph(t,new uh);return t._offlineComponents}async function vh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ur("FirestoreClient","Using user provided OnlineComponentProvider"),await gh(t,t._uninitializedComponentsProvider._online)):(ur("FirestoreClient","Using default OnlineComponentProvider"),await gh(t,new dh))),t._onlineComponents}function bh(t){return vh(t).then((t=>t.syncEngine))}
/**
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
 */
const wh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e,i){if(!i)throw new br(vr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ch(t){if(!Ur.isDocumentKey(t))throw new br(vr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Th(t){if(Ur.isDocumentKey(t))throw new br(vr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Sh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":gr()}function Ih(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new br(vr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Sh(t);throw new br(vr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}
/**
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
 */
class Ah{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new br(vr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new br(vr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,i,n){if(!0===e&&!0===n)throw new br(vr.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class kh{constructor(t,e,i,n){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new br(vr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new br(vr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Cr;switch(t.type){case"firstParty":return new Ar(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new br(vr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=wh.get(t);e&&(ur("ComponentProvider","Removing Datastore"),wh.delete(t),e.terminate())}(this),Promise.resolve()}}function Dh(t,e,i,n={}){var s;const r=(t=Ih(t,kh))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${i}`,ssl:!1})),n.mockUserToken){let e,i;if("string"==typeof n.mockUserToken)e=n.mockUserToken,i=ar.MOCK_USER;else{e=H(n.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=n.mockUserToken.sub||n.mockUserToken.user_id;if(!r)throw new br(vr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new ar(r)}t._authCredentials=new Tr(new Er(e,i))}}
/**
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
 */class Nh{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nh(this.firestore,t,this._key)}}class _h{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new _h(this.firestore,t,this._query)}}class Lh extends _h{constructor(t,e,i){super(t,e,fa(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nh(this.firestore,null,new Ur(t))}withConverter(t){return new Lh(this.firestore,t,this._path)}}function Fh(t,e,...i){if(t=J(t),Eh("collection","path",e),t instanceof kh){const n=Rr.fromString(e,...i);return Th(n),new Lh(t,null,n)}{if(!(t instanceof Nh||t instanceof Lh))throw new br(vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Rr.fromString(e,...i));return Th(n),new Lh(t.firestore,null,n)}}
/**
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
 */
class Oh{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Nc(this,"async_queue_retry"),this.qc=()=>{const t=kc();t&&ur("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=kc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=kc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new wr;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!Wr(t))throw t;ur("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw dr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,i){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const n=Jc.createAndSchedule(this,t,e,i,(t=>this.Qc(t)));return this.$c.push(n),n}Uc(){this.Mc&&gr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class xh extends kh{constructor(t,e,i,n){super(t,e,i,n),this.type="firestore",this._queue=new Oh,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rh(this),this._firestoreClient.terminate()}}function Mh(t){return t._firestoreClient||Rh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rh(t){var e,i,n;const s=t._freezeSettings(),r=function(t,e,i,n){return new Eo(t,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new fh(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(i=s.cache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=s.cache)||void 0===n?void 0:n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
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
 */
class Vh{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vh(po.fromBase64String(t))}catch(t){throw new br(vr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Vh(po.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class Ph{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new br(vr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Uh{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new br(vr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new br(vr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Lr(this._lat,t._lat)||Lr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=/^__.*__$/;class $h{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return null!==this.fieldMask?new dl(t,this.data,this.fieldMask,e,this.fieldTransforms):new ul(t,this.data,e,this.fieldTransforms)}}function qh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw gr()}}class Gh{constructor(t,e,i,n,s,r){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=n,void 0===s&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new Gh(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Zc({path:i,ta:!1});return n.ea(t),n}na(t){var e;const i=null===(e=this.path)||void 0===e?void 0:e.child(t),n=this.Zc({path:i,ta:!1});return n.Jc(),n}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return eu(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(qh(this.Yc)&&jh.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Hh{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||Dc(t)}ua(t,e,i,n=!1){return new Gh({Yc:t,methodName:e,oa:i,path:Pr.emptyPath(),ta:!1,ra:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zh(t){const e=t._freezeSettings(),i=Dc(t._databaseId);return new Hh(t._databaseId,!!e.ignoreUndefinedProperties,i)}function Kh(t,e,i,n,s,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,i,s);Yh("Data must be an object, but it was:",o,n);const a=Wh(n,o);let l,c;if(r.merge)l=new uo(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const n of r.mergeFields){const s=Jh(e,n,i);if(!o.contains(s))throw new br(vr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);iu(t,s)||t.push(s)}l=new uo(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new $h(new Ro(a),l,c)}function Qh(t,e){if(Xh(t=J(t)))return Yh("Unsupported field value:",e,t),Wh(t,e);if(t instanceof Uh)return function(t,e){if(!qh(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(e);i&&e.fieldTransforms.push(i)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const i=[];let n=0;for(const s of t){let t=Qh(s,e.sa(n));null==t&&(t={nullValue:"NULL_VALUE"}),i.push(t),n++}return{arrayValue:{values:i}}}(t,e)}return function(t,e){if(null===(t=J(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return qa(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const i=Or.fromDate(t);return{timestampValue:Al(e.serializer,i)}}if(t instanceof Or){const i=new Or(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Al(e.serializer,i)}}if(t instanceof Bh)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Vh)return{bytesValue:kl(e.serializer,t._byteString)};if(t instanceof Nh){const i=e.databaseId,n=t.firestore._databaseId;if(!n.isEqual(i))throw e.ia(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_l(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${Sh(t)}`)}(t,e)}function Wh(t,e){const i={};return ro(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):so(t,((t,n)=>{const s=Qh(n,e.Xc(t));null!=s&&(i[t]=s)})),{mapValue:{fields:i}}}function Xh(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Or||t instanceof Bh||t instanceof Vh||t instanceof Nh||t instanceof Uh)}function Yh(t,e,i){if(!Xh(i)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(i)){const n=Sh(i);throw"an object"===n?e.ia(t+" a custom object"):e.ia(t+" "+n)}}function Jh(t,e,i){if((e=J(e))instanceof Ph)return e._internalPath;if("string"==typeof e)return tu(t,e);throw eu("Field path arguments must be of type string or ",t,!1,void 0,i)}const Zh=new RegExp("[~\\*/\\[\\]]");function tu(t,e,i){if(e.search(Zh)>=0)throw eu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,i);try{return new Ph(...e.split("."))._internalPath}catch(n){throw eu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,i)}}function eu(t,e,i,n,s){const r=n&&!n.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;i&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new br(vr.INVALID_ARGUMENT,a+t+l)}function iu(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */
/**
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
 */
function nu(t,e,i){let n;return n=t?i&&(i.merge||i.mergeFields)?t.toFirestore(e,i):t.toFirestore(e):e,n}function su(t,e){const i=Ih(t.firestore,xh),n=function(t,e,...i){if(t=J(t),1===arguments.length&&(e=_r.A()),Eh("doc","path",e),t instanceof kh){const n=Rr.fromString(e,...i);return Ch(n),new Nh(t,null,new Ur(n))}{if(!(t instanceof Nh||t instanceof Lh))throw new br(vr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(Rr.fromString(e,...i));return Ch(n),new Nh(t.firestore,t instanceof Lh?t.converter:null,new Ur(n))}}(t),s=nu(t.converter,e);return ru(i,[Kh(zh(t.firestore),"addDoc",n._key,s,null!==t.converter,{}).toMutation(n._key,nl.exists(!1))]).then((()=>n))}function ru(t,e){return function(t,e){const i=new wr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,i){const n=hh(t);try{const t=await function(t,e){const i=yr(t),n=Or.now(),s=e.reduce(((t,e)=>t.add(e.key)),Pa());let r,o;return i.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Na(),l=Pa();return i.Ki.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>i.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=cl(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new dl(t.key,e,Vo(e.value.mapValue),nl.exists(!0)))}return i.mutationQueue.addMutationBatch(t,n,o,e)})).next((e=>{o=e;const n=e.applyToLocalDocumentSet(r,l);return i.documentOverlayCache.saveOverlays(t,e.batchId,n)}))})).then((()=>({batchId:o.batchId,changes:Fa(r)})))}(n.localStore,e);n.sharedClientState.addPendingMutation(t.batchId),function(t,e,i){let n=t.ac[t.currentUser.toKey()];n||(n=new oo(Lr)),n=n.insert(e,i),t.ac[t.currentUser.toKey()]=n}(n,t.batchId,i),await lh(n,t.changes),await Bc(n.remoteStore)}catch(t){const e=Zc(t,"Failed to persist write");i.reject(e)}}(await bh(t),e,i))),i.promise}(Mh(t),e)}!function(t,e=!0){lr="9.20.0",Pt(new Z("firestore",((t,{instanceIdentifier:i,options:n})=>{const s=t.getProvider("app").getImmediate(),r=new xh(new Sr(t.getProvider("auth-internal")),new Dr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new br(vr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(t.options.projectId,e)}(s,i),s);return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),Gt(or,"3.10.1",t),Gt(or,"3.10.1","esm2017")}();const ou=function(t,e){const i="string"==typeof t?t:e||"(default)",n=Ut("object"==typeof t?t:qt(),"firestore").getImmediate({identifier:i});if(!n._initialized){const t=$("firestore");t&&Dh(n,...t)}return n}($t({apiKey:"AIzaSyAiq7oVt2sSZudSn1uNEY4vDjaJYMfEkj0",authDomain:"contact-form-portfolio-b427c.firebaseapp.com",projectId:"contact-form-portfolio-b427c",storageBucket:"contact-form-portfolio-b427c.appspot.com",messagingSenderId:"1018600373894",appId:"1:1018600373894:web:af6d4b422496e1e10b5b07",measurementId:"G-S56ZKGMS47"}));function au(){const t=document.querySelectorAll(".fade-in"),e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?t.target.classList.add("active"):t.target.classList.remove("active")}))}),{rootMargin:"0px",threshold:.5});t.forEach((t=>{e.observe(t)}))}window.addEventListener("scroll",au),window.addEventListener("load",au);new Typed("#text",{strings:["PORTFOLIO"],typeSpeed:20,showCursor:!1});new Swiper(".swiper-container",{slidesPerView:2,spaceBetween:0,direction:"horizontal",loop:!0,speed:600,breakpoints:{320:{slidesPerView:1,spaceBetween:0},480:{slidesPerView:1,spaceBetween:0},900:{slidesPerView:2,spaceBetween:0}},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});async function lu(t,e,i){try{const n=await su(Fh(ou,"messages"),{name:t,email:e,message:i}).finally((()=>{cu("Message sent successfully!")}));console.log("Document written with ID: ",n)}catch(t){cu("Something went wrong submiting the form, please try again later!"),console.error("Error adding document: ",t)}}function cu(e){t(b)({text:e,duration:6e3,close:!0,gravity:"bottom",position:"center",stopOnFocus:!0,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"},onClick:function(){}}).showToast()}const hu=new class{constructor(t,e,i){n(this,"form",null),n(this,"fields",{}),n(this,"groupFields",{}),n(this,"errors",{}),n(this,"isValid",!1),n(this,"isSubmitted",!1),n(this,"globalConfig",m),n(this,"errorLabels",{}),n(this,"successLabels",{}),n(this,"eventListeners",[]),n(this,"dictLocale",d),n(this,"currentLocale","en"),n(this,"customStyleTags",{}),n(this,"onSuccessCallback"),n(this,"onFailCallback"),n(this,"onValidateCallback"),n(this,"tooltips",[]),n(this,"lastScrollPosition"),n(this,"isScrollTick"),n(this,"fieldIds",new Map),n(this,"getKeyByFieldSelector",(t=>this.fieldIds.get(t))),n(this,"getFieldSelectorByKey",(t=>{for(const[e,i]of this.fieldIds)if(t===i)return e})),n(this,"getCompatibleFields",(()=>{const t={};return Object.keys(this.fields).forEach((e=>{let i=e;const n=this.getFieldSelectorByKey(e);"string"==typeof n&&(i=n),t[i]={...this.fields[e]}})),t})),n(this,"setKeyByFieldSelector",(t=>{if(this.fieldIds.has(t))return this.fieldIds.get(t);const e=String(this.fieldIds.size+1);return this.fieldIds.set(t,e),e})),n(this,"refreshAllTooltips",(()=>{this.tooltips.forEach((t=>{t.refresh()}))})),n(this,"handleDocumentScroll",(()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame((()=>{this.refreshAllTooltips(),this.isScrollTick=!1})),this.isScrollTick=!0)})),n(this,"formSubmitHandler",(t=>{t.preventDefault(),this.isSubmitted=!0,this.validateHandler(t)})),n(this,"handleFieldChange",(t=>{let e;for(const i in this.fields){if(this.fields[i].elem===t){e=i;break}}e&&(this.fields[e].touched=!0,this.validateField(e,!0))})),n(this,"handleGroupChange",(t=>{let e;for(const i in this.groupFields){if(this.groupFields[i].elems.find((e=>e===t))){e=i;break}}e&&(this.groupFields[e].touched=!0,this.validateGroup(e,!0))})),n(this,"handlerChange",(t=>{t.target&&(this.handleFieldChange(t.target),this.handleGroupChange(t.target),this.renderErrors())})),this.initialize(t,e,i)}initialize(t,e,i){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=m,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en","string"==typeof t){const e=document.querySelector(t);if(!e)throw Error(`Form with ${t} selector not found! Please check the form selector`);this.setForm(e)}else{if(!(t instanceof HTMLFormElement))throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");this.setForm(t)}if(this.globalConfig={...m,...e},i&&(this.dictLocale=[...i,...d]),this.isTooltip()){const t=document.createElement("style");t.textContent=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",this.customStyleTags[u.Label]=document.head.appendChild(t),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(t,e,i){var n;const s=null!=i?i:t;let r=null==(n=this.dictLocale.find((t=>t.key===s)))?void 0:n.dict[this.currentLocale];if(r||i&&(r=i),r&&void 0!==e)switch(t){case c.MaxLength:case c.MinLength:case c.MaxNumber:case c.MinNumber:case c.MinFilesCount:case c.MaxFilesCount:r=r.replace(":value",String(e))}return r||i||"Value is incorrect"}getFieldErrorMessage(t,e){const i="function"==typeof t.errorMessage?t.errorMessage(this.getElemValue(e),this.fields):t.errorMessage;return this.getLocalisedString(t.rule,t.value,i)}getFieldSuccessMessage(t,e){const i="function"==typeof t?t(this.getElemValue(e),this.fields):t;return this.getLocalisedString(void 0,void 0,i)}getGroupErrorMessage(t){return this.getLocalisedString(t.rule,void 0,t.errorMessage)}getGroupSuccessMessage(t){if(t.successMessage)return this.getLocalisedString(void 0,void 0,t.successMessage)}setFieldInvalid(t,e){this.fields[t].isValid=!1,this.fields[t].errorMessage=this.getFieldErrorMessage(e,this.fields[t].elem)}setFieldValid(t,e){this.fields[t].isValid=!0,void 0!==e&&(this.fields[t].successMessage=this.getFieldSuccessMessage(e,this.fields[t].elem))}setGroupInvalid(t,e){this.groupFields[t].isValid=!1,this.groupFields[t].errorMessage=this.getGroupErrorMessage(e)}setGroupValid(t,e){this.groupFields[t].isValid=!0,this.groupFields[t].successMessage=this.getGroupSuccessMessage(e)}getElemValue(t){switch(t.type){case"checkbox":return t.checked;case"file":return t.files;default:return t.value}}validateGroupRule(t,e,i){if(i.rule===h.Required)e.every((t=>!t.checked))?this.setGroupInvalid(t,i):this.setGroupValid(t,i)}validateFieldRule(t,e,i,n=!1){const h=i.value,u=this.getElemValue(e);if(i.plugin){i.plugin(u,this.getCompatibleFields())||this.setFieldInvalid(t,i)}else{switch(i.rule){case c.Required:(t=>{let e=t;return"string"==typeof t&&(e=t.trim()),!e})(u)&&this.setFieldInvalid(t,i);break;case c.Email:if(l(u))break;d=u,s.test(d)||this.setFieldInvalid(t,i);break;case c.MaxLength:if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(l(u))break;((t,e)=>t.length>e)(u,h)&&this.setFieldInvalid(t,i);break;case c.MinLength:if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(l(u))break;((t,e)=>t.length<e)(u,h)&&this.setFieldInvalid(t,i);break;case c.Password:if(l(u))break;(t=>o.test(t))(u)||this.setFieldInvalid(t,i);break;case c.StrongPassword:if(l(u))break;(t=>a.test(t))(u)||this.setFieldInvalid(t,i);break;case c.Number:if(l(u))break;(t=>"string"==typeof t&&!isNaN(+t)&&!isNaN(parseFloat(t)))(u)||this.setFieldInvalid(t,i);break;case c.Integer:if(l(u))break;(t=>r.test(t))(u)||this.setFieldInvalid(t,i);break;case c.MaxNumber:{if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(l(u))break;const e=+u;(Number.isNaN(e)||((t,e)=>t>e)(e,h))&&this.setFieldInvalid(t,i);break}case c.MinNumber:{if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(l(u))break;const e=+u;(Number.isNaN(e)||((t,e)=>t<e)(e,h))&&this.setFieldInvalid(t,i);break}case c.CustomRegexp:{if(void 0===h)return console.error(`Value for ${i.rule} rule for [${t}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(t,i);let e;try{e=new RegExp(h)}catch(e){console.error(`Value for ${i.rule} rule for [${t}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(t,i);break}const n=String(u);""===n||e.test(n)||this.setFieldInvalid(t,i);break}case c.MinFilesCount:if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(Number.isFinite(null==u?void 0:u.length)&&u.length<h){this.setFieldInvalid(t,i);break}break;case c.MaxFilesCount:if(void 0===h){console.error(`Value for ${i.rule} rule for [${t}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(t,i);break}if("number"!=typeof h){console.error(`Value for ${i.rule} rule for [${t}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(t,i);break}if(Number.isFinite(null==u?void 0:u.length)&&u.length>h){this.setFieldInvalid(t,i);break}break;case c.Files:{if(void 0===h)return console.error(`Value for ${i.rule} rule for [${t}] field is not defined. This field will be always invalid.`),void this.setFieldInvalid(t,i);if("object"!=typeof h)return console.error(`Value for ${i.rule} rule for [${t}] field should be an object. This field will be always invalid.`),void this.setFieldInvalid(t,i);const e=h.files;if("object"!=typeof e)return console.error(`Value for ${i.rule} rule for [${t}] field should be an object with files array. This field will be always invalid.`),void this.setFieldInvalid(t,i);const n=(t,e)=>{const i=Number.isFinite(e.minSize)&&t.size<e.minSize,n=Number.isFinite(e.maxSize)&&t.size>e.maxSize,s=Array.isArray(e.names)&&!e.names.includes(t.name),r=Array.isArray(e.extensions)&&!e.extensions.includes(t.name.split(".")[t.name.split(".").length-1]),o=Array.isArray(e.types)&&!e.types.includes(t.type);return i||n||s||r||o};if("object"==typeof u&&null!==u)for(let s=0,r=u.length;s<r;++s){const r=u.item(s);if(!r){this.setFieldInvalid(t,i);break}if(n(r,e)){this.setFieldInvalid(t,i);break}}break}default:{if("function"!=typeof i.validator)return console.error(`Validator for custom rule for [${t}] field should be a function. This field will be always invalid.`),void this.setFieldInvalid(t,i);const e=i.validator(u,this.getCompatibleFields());if("boolean"!=typeof e&&"function"!=typeof e&&console.error(`Validator return value for [${t}] field should be boolean or function. It will be cast to boolean.`),"function"==typeof e){if(!n){this.fields[t].asyncCheckPending=!1;const n=e();return f(n)?n.then((e=>{e||this.setFieldInvalid(t,i)})).catch((()=>{this.setFieldInvalid(t,i)})):(console.error(`Validator function for custom rule for [${t}] field should return a Promise. This field will be always invalid.`),void this.setFieldInvalid(t,i))}this.fields[t].asyncCheckPending=!0}e||this.setFieldInvalid(t,i)}}var d}}isFormValid(){let t=!0;for(let e=0,i=Object.values(this.fields).length;e<i;++e){const i=Object.values(this.fields)[e];if(void 0===i.isValid){t=void 0;break}if(!1===i.isValid){t=!1;break}}for(let e=0,i=Object.values(this.groupFields).length;e<i;++e){const i=Object.values(this.groupFields)[e];if(void 0===i.isValid){t=void 0;break}if(!1===i.isValid){t=!1;break}}return t}validateField(t,e=!1){var i;const n=this.fields[t];n.isValid=!0;const s=[];return[...n.rules].reverse().forEach((i=>{const r=this.validateFieldRule(t,n.elem,i,e);f(r)&&s.push(r)})),n.isValid&&this.setFieldValid(t,null==(i=n.config)?void 0:i.successMessage),Promise.allSettled(s).finally((()=>{var t;e&&(null==(t=this.onValidateCallback)||t.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}revalidateField(t){if("string"!=typeof t&&!g(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return e&&this.fields[e]?new Promise((t=>{this.validateField(e,!0).finally((()=>{this.clearFieldStyle(e),this.clearFieldLabel(e),this.renderFieldError(e,!0),t(!!this.fields[e].isValid)}))})):(console.error("Field not found. Check the field selector."),Promise.reject())}revalidateGroup(t){if("string"!=typeof t&&!g(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);return e&&this.groupFields[e]?new Promise((t=>{this.validateGroup(e).finally((()=>{this.clearFieldLabel(e),this.renderGroupError(e,!0),t(!!this.groupFields[e].isValid)}))})):(console.error("Group not found. Check the group selector."),Promise.reject())}validateGroup(t,e=!1){const i=this.groupFields[t],n=[];return[...i.rules].reverse().forEach((e=>{const s=this.validateGroupRule(t,i.elems,e);f(s)&&n.push(s)})),Promise.allSettled(n).finally((()=>{var t;e&&(null==(t=this.onValidateCallback)||t.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))}))}focusInvalidField(){for(const t in this.fields){const e=this.fields[t];if(!e.isValid){setTimeout((()=>e.elem.focus()),0);break}}}afterSubmitValidation(t=!1){this.renderErrors(t),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(t=!1){return new Promise((e=>{const i=[];Object.keys(this.fields).forEach((t=>{const e=this.validateField(t);f(e)&&i.push(e)})),Object.keys(this.groupFields).forEach((t=>{const e=this.validateGroup(t);f(e)&&i.push(e)})),Promise.allSettled(i).then((()=>{var n;this.afterSubmitValidation(t),null==(n=this.onValidateCallback)||n.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),e(!!i.length)}))}))}revalidate(){return new Promise((t=>{this.validateHandler(void 0,!0).finally((()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),t(this.isValid)}))}))}validateHandler(t,e=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(e).finally((()=>{var e,i;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?null==(e=this.onSuccessCallback)||e.call(this,t):null==(i=this.onFailCallback)||i.call(this,this.getCompatibleFields(),this.groupFields)}))}setForm(t){this.form=t,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(t,e,i){e.addEventListener(t,i),this.eventListeners.push({type:t,elem:e,func:i})}removeListener(t,e,i){e.removeEventListener(t,i),this.eventListeners=this.eventListeners.filter((i=>i.type!==t||i.elem!==e))}addField(t,e,i){if("string"!=typeof t&&!g(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let n;if(n="string"==typeof t?this.form.querySelector(t):t,!n)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(e)||!e.length)throw Error("Rules argument should be an array and should contain at least 1 element.");e.forEach((t=>{if(!("rule"in t||"validator"in t||"plugin"in t))throw Error("Rules argument must contain at least one rule or validator property.");if(!(t.validator||t.plugin||t.rule&&Object.values(c).includes(t.rule)))throw Error(`Rule should be one of these types: ${Object.values(c).join(", ")}. Provided value: ${t.rule}`)}));const s=this.setKeyByFieldSelector(t);return this.fields[s]={elem:n,rules:e,isValid:void 0,touched:!1,config:i},this.setListeners(n),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(s),this}removeField(t){if("string"!=typeof t&&!g(t))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const e=this.getKeyByFieldSelector(t);if(!e||!this.fields[e])return console.error("Field not found. Check the field selector."),this;const i=this.getListenerType(this.fields[e].elem.type);return this.removeListener(i,this.fields[e].elem,this.handlerChange),this.clearErrors(),delete this.fields[e],this}removeGroup(t){if("string"!=typeof t)throw Error("Group selector is not valid. Please specify a string selector.");const e=this.getKeyByFieldSelector(t);return e&&this.groupFields[e]?(this.groupFields[e].elems.forEach((t=>{const e=this.getListenerType(t.type);this.removeListener(e,t,this.handlerChange)})),this.clearErrors(),delete this.groupFields[e],this):(console.error("Group not found. Check the group selector."),this)}addRequiredGroup(t,e,i,n){if("string"!=typeof t&&!g(t))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(s="string"==typeof t?this.form.querySelector(t):t,!s)throw Error("Group selector not found! Please check the group selector.");const r=s.querySelectorAll("input"),o=Array.from(r).filter((t=>{const e=((t,e)=>{const i=[...e].reverse();for(let e=0,n=i.length;e<n;++e){const n=i[e];for(const e in t){const i=t[e];if(i.groupElem===n)return[e,i]}}return null})(this.groupFields,(t=>{let e=t;const i=[];for(;e;)i.unshift(e),e=e.parentNode;return i})(t));return!e||e[1].elems.find((e=>e!==t))})),a=this.setKeyByFieldSelector(t);return this.groupFields[a]={rules:[{rule:h.Required,errorMessage:e,successMessage:n}],groupElem:s,elems:o,touched:!1,isValid:void 0,config:i},r.forEach((t=>{this.setListeners(t)})),this}getListenerType(t){switch(t){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(t){const e=this.getListenerType(t.type);this.removeListener(e,t,this.handlerChange),this.addListener(e,t,this.handlerChange)}clearFieldLabel(t){var e,i;null==(e=this.errorLabels[t])||e.remove(),null==(i=this.successLabels[t])||i.remove()}clearFieldStyle(t){var e,i,n,s;const r=this.fields[t],o=(null==(e=r.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(o).forEach((t=>{r.elem.style[t]=""}));const a=(null==(i=r.config)?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(a).forEach((t=>{r.elem.style[t]=""})),r.elem.classList.remove(...p((null==(n=r.config)?void 0:n.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),...p((null==(s=r.config)?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var t,e;Object.keys(this.errorLabels).forEach((t=>this.errorLabels[t].remove())),Object.keys(this.successLabels).forEach((t=>this.successLabels[t].remove()));for(const t in this.fields)this.clearFieldStyle(t);for(const i in this.groupFields){const n=this.groupFields[i],s=(null==(t=n.config)?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(s).forEach((t=>{n.elems.forEach((e=>{var i;e.style[t]="",e.classList.remove(...p((null==(i=n.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}))}));const r=(null==(e=n.config)?void 0:e.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(r).forEach((t=>{n.elems.forEach((e=>{var i;e.style[t]="",e.classList.remove(...p((null==(i=n.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}))}))}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,i=t.length;e<i;++e)t[e].setAttribute("data-just-validate-fallback-disabled",t[e].disabled?"true":"false"),t[e].setAttribute("disabled","disabled"),t[e].style.pointerEvents="none",t[e].style.webkitFilter="grayscale(100%)",t[e].style.filter="grayscale(100%)"}unlockForm(){const t=this.form.querySelectorAll("input, textarea, button, select");for(let e=0,i=t.length;e<i;++e)"true"!==t[e].getAttribute("data-just-validate-fallback-disabled")&&t[e].removeAttribute("disabled"),t[e].style.pointerEvents="",t[e].style.webkitFilter="",t[e].style.filter=""}renderTooltip(t,e,i){var n;const{top:s,left:r,width:o,height:a}=t.getBoundingClientRect(),l=e.getBoundingClientRect(),c=i||(null==(n=this.globalConfig.tooltip)?void 0:n.position);switch(c){case"left":e.style.top=s+a/2-l.height/2+"px",e.style.left=r-l.width-5+"px";break;case"top":e.style.top=s-l.height-5+"px",e.style.left=r+o/2-l.width/2+"px";break;case"right":e.style.top=s+a/2-l.height/2+"px",e.style.left=`${r+o+5}px`;break;case"bottom":e.style.top=`${s+a+5}px`,e.style.left=r+o/2-l.width/2+"px"}e.dataset.direction=c;return{refresh:()=>{this.renderTooltip(t,e,i)}}}createErrorLabelElem(t,e,i){const n=document.createElement("div");n.innerHTML=e;const s=this.isTooltip()?null==i?void 0:i.errorLabelStyle:(null==i?void 0:i.errorLabelStyle)||this.globalConfig.errorLabelStyle;return Object.assign(n.style,s),n.classList.add(...p((null==i?void 0:i.errorLabelCssClass)||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(n.dataset.tooltip="true"),this.globalConfig.testingMode&&(n.dataset.testId=`error-label-${t}`),this.errorLabels[t]=n,n}createSuccessLabelElem(t,e,i){if(void 0===e)return null;const n=document.createElement("div");n.innerHTML=e;const s=(null==i?void 0:i.successLabelStyle)||this.globalConfig.successLabelStyle;return Object.assign(n.style,s),n.classList.add(...p((null==i?void 0:i.successLabelCssClass)||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(n.dataset.testId=`success-label-${t}`),this.successLabels[t]=n,n}renderErrorsContainer(t,e){const i=e||this.globalConfig.errorsContainer;if("string"==typeof i){const e=this.form.querySelector(i);if(e)return e.appendChild(t),!0;console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)}return i instanceof Element?(i.appendChild(t),!0):(void 0!==i&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(t,e,i,n){if(!n){if(this.renderErrorsContainer(e,i))return}t.appendChild(e)}renderFieldLabel(t,e,i,n){var s,r,o,a,l,c,h;if(!n){if(this.renderErrorsContainer(e,i))return}if("checkbox"===t.type||"radio"===t.type){const i=document.querySelector(`label[for="${t.getAttribute("id")}"]`);"label"===(null==(r=null==(s=t.parentElement)?void 0:s.tagName)?void 0:r.toLowerCase())?null==(a=null==(o=t.parentElement)?void 0:o.parentElement)||a.appendChild(e):i?null==(l=i.parentElement)||l.appendChild(e):null==(c=t.parentElement)||c.appendChild(e)}else null==(h=t.parentElement)||h.appendChild(e)}showLabels(t,e){Object.keys(t).forEach(((i,n)=>{const s=t[i],r=this.getKeyByFieldSelector(i);if(!r||!this.fields[r])return void console.error("Field not found. Check the field selector.");const o=this.fields[r];o.isValid=!e,this.clearFieldStyle(r),this.clearFieldLabel(r),this.renderFieldError(r,!1,s),0===n&&this.globalConfig.focusInvalidField&&setTimeout((()=>o.elem.focus()),0)}))}showErrors(t){if("object"!=typeof t)throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(t,!0)}showSuccessLabels(t){if("object"!=typeof t)throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(t,!1)}renderFieldError(t,e=!1,i){var n,s,r,o,a,l;const c=this.fields[t];if(!1===c.isValid&&(this.isValid=!1),void 0===c.isValid||!e&&!this.isSubmitted&&!c.touched&&void 0===i)return;if(c.isValid){if(!c.asyncCheckPending){const e=this.createSuccessLabelElem(t,void 0!==i?i:c.successMessage,c.config);e&&this.renderFieldLabel(c.elem,e,null==(n=c.config)?void 0:n.errorsContainer,!0),c.elem.classList.add(...p((null==(s=c.config)?void 0:s.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}c.elem.classList.add(...p((null==(r=c.config)?void 0:r.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const h=this.createErrorLabelElem(t,void 0!==i?i:c.errorMessage,c.config);this.renderFieldLabel(c.elem,h,null==(o=c.config)?void 0:o.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(c.elem,h,null==(l=null==(a=c.config)?void 0:a.tooltip)?void 0:l.position))}renderGroupError(t,e=!0){var i,n,s,r;const o=this.groupFields[t];if(!1===o.isValid&&(this.isValid=!1),void 0===o.isValid||!e&&!this.isSubmitted&&!o.touched)return;if(o.isValid){o.elems.forEach((t=>{var e,i;Object.assign(t.style,(null==(e=o.config)?void 0:e.successFieldStyle)||this.globalConfig.successFieldStyle),t.classList.add(...p((null==(i=o.config)?void 0:i.successFieldCssClass)||this.globalConfig.successFieldCssClass))}));const e=this.createSuccessLabelElem(t,o.successMessage,o.config);return void(e&&this.renderGroupLabel(o.groupElem,e,null==(i=o.config)?void 0:i.errorsContainer,!0))}this.isValid=!1,o.elems.forEach((t=>{var e,i;Object.assign(t.style,(null==(e=o.config)?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle),t.classList.add(...p((null==(i=o.config)?void 0:i.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))}));const a=this.createErrorLabelElem(t,o.errorMessage,o.config);this.renderGroupLabel(o.groupElem,a,null==(n=o.config)?void 0:n.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(o.groupElem,a,null==(r=null==(s=o.config)?void 0:s.tooltip)?void 0:r.position))}renderErrors(t=!1){if(this.isSubmitted||t||this.globalConfig.validateBeforeSubmitting){this.clearErrors(),this.isValid=!0;for(const t in this.groupFields)this.renderGroupError(t);for(const t in this.fields)this.renderFieldError(t)}}destroy(){this.eventListeners.forEach((t=>{this.removeListener(t.type,t.elem,t.func)})),Object.keys(this.customStyleTags).forEach((t=>{this.customStyleTags[t].remove()})),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach((t=>{const e=this.getFieldSelectorByKey(t);e&&this.addField(e,[...this.fields[t].rules],this.fields[t].config)}))):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(t){"string"==typeof t||void 0===t?(this.currentLocale=t,this.isSubmitted&&this.validate()):console.error("Current locale should be a string")}onSuccess(t){return this.onSuccessCallback=t,this}onFail(t){return this.onFailCallback=t,this}onValidate(t){return this.onValidateCallback=t,this}}("#contact_form",{validateBeforeSubmitting:!0});hu.addField("#name",[{rule:"required"},{rule:"minLength",value:2,errorMessage:"Name should be between 2 and 15 words."},{rule:"maxLength",value:15,errorMessage:"Name should be between 2 and 15 words."}]).addField("#email",[{rule:"required"},{rule:"email"}]).addField("#message",[{rule:"required"},{rule:"minLength",value:10,errorMessage:"Message should be between 10 and 350 words."},{rule:"maxLength",value:350,errorMessage:"Message should be between 10 and 350 words."}]).onSuccess((t=>{console.log(t.target);let e=document.querySelector("#name").value,i=document.querySelector("#email").value,n=document.querySelector("#message").value;console.log(e),console.log(i),console.log(n),lu(e,i,n),t.target.reset()}));
//# sourceMappingURL=index.b0ced92f.js.map