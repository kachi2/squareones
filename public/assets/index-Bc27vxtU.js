import{bY as qe}from"./index-C0wR_aM1.js";function ye(e,t){return function(){return e.apply(t,arguments)}}const{toString:Me}=Object.prototype,{getPrototypeOf:ee}=Object,v=(e=>t=>{const r=Me.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>v(t)===e),H=e=>t=>typeof t===e,{isArray:U}=Array,D=H("undefined");function ze(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const be=T("ArrayBuffer");function Je(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&be(e.buffer),t}const Ve=H("string"),O=H("function"),Se=H("number"),q=e=>e!==null&&typeof e=="object",Ge=e=>e===!0||e===!1,B=e=>{if(v(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},We=T("Date"),Ke=T("File"),Xe=T("Blob"),Qe=T("FileList"),Ye=e=>q(e)&&O(e.pipe),Ze=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=v(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},et=T("URLSearchParams"),tt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),U(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(n=0;n<i;n++)u=o[n],t.call(null,e[u],u,e)}}function we(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Re=e=>!D(e)&&e!==Ee;function K(){const{caseless:e}=Re(this)&&this||{},t={},r=(n,s)=>{const o=e&&we(t,s)||s;B(t[o])&&B(n)?t[o]=K(t[o],n):B(n)?t[o]=K({},n):U(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&_(arguments[n],r);return t}const rt=(e,t,r,{allOwnKeys:n}={})=>(_(t,(s,o)=>{r&&O(s)?e[o]=ye(s,r):e[o]=s},{allOwnKeys:n}),e),nt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),st=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},ot=(e,t,r,n)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=r!==!1&&ee(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},it=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},at=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Se(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),ct=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},lt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},ft=T("HTMLFormElement"),dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),ie=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),pt=T("RegExp"),Oe=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};_(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},mt=e=>{Oe(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(O(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},ht=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return U(e)?n(e):n(String(e).split(t)),r},gt=()=>{},yt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),J="abcdefghijklmnopqrstuvwxyz",ae="0123456789",Ae={DIGIT:ae,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+ae},bt=(e=16,t=Ae.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function St(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const wt=e=>{const t=new Array(10),r=(n,s)=>{if(q(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=U(n)?[]:{};return _(n,(i,u)=>{const h=r(i,s+1);!D(h)&&(o[u]=h)}),t[s]=void 0,o}}return n};return r(e,0)},Et=T("AsyncFunction"),Rt=e=>e&&(q(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:U,isArrayBuffer:be,isBuffer:ze,isFormData:Ze,isArrayBufferView:Je,isString:Ve,isNumber:Se,isBoolean:Ge,isObject:q,isPlainObject:B,isUndefined:D,isDate:We,isFile:Ke,isBlob:Xe,isRegExp:pt,isFunction:O,isStream:Ye,isURLSearchParams:et,isTypedArray:ut,isFileList:Qe,forEach:_,merge:K,extend:rt,trim:tt,stripBOM:nt,inherits:st,toFlatObject:ot,kindOf:v,kindOfTest:T,endsWith:it,toArray:at,forEachEntry:ct,matchAll:lt,isHTMLForm:ft,hasOwnProperty:ie,hasOwnProp:ie,reduceDescriptors:Oe,freezeMethods:mt,toObjectSet:ht,toCamelCase:dt,noop:gt,toFiniteNumber:yt,findKey:we,global:Ee,isContextDefined:Re,ALPHABET:Ae,generateString:bt,isSpecCompliantForm:St,toJSONObject:wt,isAsyncFn:Et,isThenable:Rt};function y(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Te=y.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}});Object.defineProperties(y,Ce);Object.defineProperty(Te,"isAxiosError",{value:!0});y.from=(e,t,r,n,s,o)=>{const i=Object.create(Te);return a.toFlatObject(e,i,function(h){return h!==Error.prototype},u=>u!=="isAxiosError"),y.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ot=null;function X(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,r){return e?e.concat(t).map(function(s,o){return s=Pe(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function At(e){return a.isArray(e)&&!e.some(X)}const Tt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function M(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,w){return!a.isUndefined(w[m])});const n=r.metaTokens,s=r.visitor||f,o=r.dots,i=r.indexes,h=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function g(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!h&&a.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?h&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function f(p,m,w){let E=p;if(p&&!w&&typeof p=="object"){if(a.endsWith(m,"{}"))m=n?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&At(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(E=a.toArray(p)))return m=Pe(m),E.forEach(function(N,He){!(a.isUndefined(N)||N===null)&&t.append(i===!0?ue([m],He,o):i===null?m:m+"[]",g(N))}),!1}return X(p)?!0:(t.append(ue(w,m,o),g(p)),!1)}const c=[],S=Object.assign(Tt,{defaultVisitor:f,convertValue:g,isVisitable:X});function R(p,m){if(!a.isUndefined(p)){if(c.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(p),a.forEach(p,function(E,P){(!(a.isUndefined(E)||E===null)&&s.call(t,E,a.isString(P)?P.trim():P,m,S))===!0&&R(E,m?m.concat(P):[P])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return R(e),t}function ce(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function te(e,t){this._pairs=[],e&&M(e,this,t)}const Ne=te.prototype;Ne.append=function(t,r){this._pairs.push([t,r])};Ne.toString=function(t){const r=t?function(n){return t.call(this,n,ce)}:ce;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Ct(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xe(e,t,r){if(!t)return e;const n=r&&r.encode||Ct,s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new te(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class le{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pt=typeof URLSearchParams<"u"?URLSearchParams:te,Nt=typeof FormData<"u"?FormData:null,xt=typeof Blob<"u"?Blob:null,kt={isBrowser:!0,classes:{URLSearchParams:Pt,FormData:Nt,Blob:xt},protocols:["http","https","file","blob","url","data"]},Ue=typeof window<"u"&&typeof document<"u",Ut=(e=>Ue&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ft=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ue,hasStandardBrowserEnv:Ut,hasStandardBrowserWebWorkerEnv:Ft},Symbol.toStringTag,{value:"Module"})),A={...Dt,...kt};function _t(e,t){return M(e,new A.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return A.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Lt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Bt(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Fe(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const u=Number.isFinite(+i),h=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,h?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=Bt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(Lt(n),s,r,0)}),r}return null}function jt(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const re={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return _t(t,this.formSerializer).toString();if((u=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return M(u?{"files[]":t}:t,h&&new h,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),jt(t)):t}],transformResponse:[function(t){const r=this.transitional||re.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const ne=re,$t=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),It=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&$t[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},fe=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function vt(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Ht=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function qt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Mt(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(u,h,g){const f=F(h);if(!f)throw new Error("header name must be a non-empty string");const c=a.findKey(s,f);(!c||s[c]===void 0||g===!0||g===void 0&&s[c]!==!1)&&(s[c||h]=j(u))}const i=(u,h)=>a.forEach(u,(g,f)=>o(g,f,h));return a.isPlainObject(t)||t instanceof this.constructor?i(t,r):a.isString(t)&&(t=t.trim())&&!Ht(t)?i(It(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=F(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return vt(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=F(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||V(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=F(i),i){const u=a.findKey(n,i);u&&(!r||V(n,n[u],u,r))&&(delete n[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||V(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=j(s),delete r[o];return}const u=t?qt(o):String(o).trim();u!==o&&delete r[o],r[u]=j(s),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[fe]=this[fe]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=F(i);n[u]||(Mt(s,i),n[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(z);const C=z;function G(e,t){const r=this||ne,n=t||r,s=C.from(n.headers);let o=n.data;return a.forEach(e,function(u){o=u.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function De(e){return!!(e&&e.__CANCEL__)}function L(e,t,r){y.call(this,e??"canceled",y.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(L,y,{__CANCEL__:!0});function zt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Jt=A.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Gt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function _e(e,t){return e&&!Vt(t)?Gt(e,t):t}const Wt=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}();function Kt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(h){const g=Date.now(),f=n[o];i||(i=g),r[s]=h,n[s]=g;let c=o,S=0;for(;c!==s;)S+=r[c++],c=c%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),g-i<t)return;const R=f&&g-f;return R?Math.round(S*1e3/R):void 0}}function de(e,t){let r=0;const n=Xt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,u=o-r,h=n(u),g=o<=i;r=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:u,rate:h||void 0,estimated:h&&i&&g?(i-o)/h:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Qt=typeof XMLHttpRequest<"u",Yt=Qt&&function(e){return new Promise(function(r,n){let s=e.data;const o=C.from(e.headers).normalize();let{responseType:i,withXSRFToken:u}=e,h;function g(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let f;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((f=o.getContentType())!==!1){const[m,...w]=f?f.split(";").map(E=>E.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+w))}const S=_e(e.baseURL,e.url);c.open(e.method.toUpperCase(),xe(S,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function R(){if(!c)return;const m=C.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};zt(function(N){r(N),g()},function(N){n(N),g()},E),c=null}if("onloadend"in c?c.onloadend=R:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(R)},c.onabort=function(){c&&(n(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||ke;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new y(w,E.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},A.hasStandardBrowserEnv&&(u&&a.isFunction(u)&&(u=u(e)),u||u!==!1&&Wt(S))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&Jt.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(w,E){c.setRequestHeader(E,w)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",de(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=m=>{c&&(n(!m||m.type?new L(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const p=Kt(S);if(p&&A.protocols.indexOf(p)===-1){n(new y("Unsupported protocol "+p+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},Q={http:Ot,xhr:Yt};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pe=e=>`- ${e}`,Zt=e=>a.isFunction(e)||e===null||e===!1,Le={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!Zt(r)&&(n=Q[(i=String(r)).toLowerCase()],n===void 0))throw new y(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([u,h])=>`adapter ${u} `+(h===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(pe).join(`
`):" "+pe(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Q};function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function me(e){return W(e),e.headers=C.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Le.getAdapter(e.adapter||ne.adapter)(e).then(function(n){return W(e),n.data=G.call(e,e.transformResponse,n),n.headers=C.from(n.headers),n},function(n){return De(n)||(W(e),n&&n.response&&(n.response.data=G.call(e,e.transformResponse,n.response),n.response.headers=C.from(n.response.headers))),Promise.reject(n)})}const he=e=>e instanceof C?{...e}:e;function k(e,t){t=t||{};const r={};function n(g,f,c){return a.isPlainObject(g)&&a.isPlainObject(f)?a.merge.call({caseless:c},g,f):a.isPlainObject(f)?a.merge({},f):a.isArray(f)?f.slice():f}function s(g,f,c){if(a.isUndefined(f)){if(!a.isUndefined(g))return n(void 0,g,c)}else return n(g,f,c)}function o(g,f){if(!a.isUndefined(f))return n(void 0,f)}function i(g,f){if(a.isUndefined(f)){if(!a.isUndefined(g))return n(void 0,g)}else return n(void 0,f)}function u(g,f,c){if(c in t)return n(g,f);if(c in e)return n(void 0,g)}const h={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(g,f)=>s(he(g),he(f),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(f){const c=h[f]||s,S=c(e[f],t[f],f);a.isUndefined(S)&&c!==u||(r[f]=S)}),r}const Be="1.6.8",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const ge={};se.transitional=function(t,r,n){function s(o,i){return"[Axios v"+Be+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,u)=>{if(t===!1)throw new y(s(i," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!ge[i]&&(ge[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,u):!0}};function er(e,t,r){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const u=e[o],h=u===void 0||i(u,o,e);if(h!==!0)throw new y("option "+o+" must be "+h,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const Y={assertOptions:er,validators:se},x=Y.validators;class I{constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=k(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Y.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:Y.assertOptions(s,{encode:x.function,serialize:x.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=C.concat(i,o);const u=[];let h=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(h=h&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const g=[];this.interceptors.response.forEach(function(m){g.push(m.fulfilled,m.rejected)});let f,c=0,S;if(!h){const p=[me.bind(this),void 0];for(p.unshift.apply(p,u),p.push.apply(p,g),S=p.length,f=Promise.resolve(r);c<S;)f=f.then(p[c++],p[c++]);return f}S=u.length;let R=r;for(c=0;c<S;){const p=u[c++],m=u[c++];try{R=p(R)}catch(w){m.call(this,w);break}}try{f=me.call(this,R)}catch(p){return Promise.reject(p)}for(c=0,S=g.length;c<S;)f=f.then(g[c++],g[c++]);return f}getUri(t){t=k(this.defaults,t);const r=_e(t.baseURL,t.url);return xe(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){I.prototype[t]=function(r,n){return this.request(k(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,u){return this.request(k(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}I.prototype[t]=r(),I.prototype[t+"Form"]=r(!0)});const $=I;class oe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{n.subscribe(u),o=u}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,u){n.reason||(n.reason=new L(o,i,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new oe(function(s){t=s}),cancel:t}}}const tr=oe;function rr(e){return function(r){return e.apply(null,r)}}function nr(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const sr=Z;function je(e){const t=new $(e),r=ye($.prototype.request,t);return a.extend(r,$.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return je(k(e,s))},r}const b=je(ne);b.Axios=$;b.CanceledError=L;b.CancelToken=tr;b.isCancel=De;b.VERSION=Be;b.toFormData=M;b.AxiosError=y;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=rr;b.isAxiosError=nr;b.mergeConfig=k;b.AxiosHeaders=C;b.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);b.getAdapter=Le.getAdapter;b.HttpStatusCode=sr;b.default=b;const or="",$e=`${or}/api/`,Ie=e=>({Accept:"application/json",withCredentials:!0,"Content-Type":e=="json"?"application/json":"multipart/form-data"}),ve=e=>{const t=qe.get("_tokn");return t&&(e.headers.Authorization=`Bearer ${t}`),e},l=b.create({baseURL:$e,headers:Ie("json")}),d=b.create({baseURL:$e,headers:Ie("form")});l.interceptors.request.use(ve);d.interceptors.request.use(ve);const ir={companyProgress(e=null){const t=e?`company/progress/${e}`:"company/progress";return l.get(t)},businessNature(){return l.get("get/business/nature")},registerCompany(e){return d.post("company/create",e)},companyDescription(e){return d.post("company/description/store",e)},companyAddress(e){return d.post("company/address/store",e)},companyEntity(e){return d.post("entity/store",e)},FounderKyc(e){return d.post("load/founder/kyc",e)},companyShares(e){return d.post("shares/store",e)},companySecretary(e){return d.post("secretary/store",e)},companyActivity(e){return d.post("activities/store",e)},companySource(e){return d.post("fundsource/store",e)},companyDocuments(e){return d.post("upload/docs",e)},buildPDF(e){return d.post("build/pdf",e)},retrieveShaheolders(e){return l.post(`retrieve/shareholders/${e}`)},deleteEntity(e){return l.post(`entities/remove/${e}`)},registerSignature(e){return d.post("register/signature",e)},deleteSignature(e){return d.post("delete/signature",e)}},ar={userBillings(){return l.get("user/billings")},userCompanies(){return l.get("user/account/company")},userCompany(){return l.get("user/active/company")},userGetDocuments(){return l.get("user/account/documents")},userUploadDocuments(e){return d.post("user/upload/documents",e)},deleteUserDocument(e){return l.get(`user/documents/delete/${e}`)},userCompanyFounders(e,t){return l.get(`user/founder/list/${e}?${t}`)},userResendEmail(e){return d.post("load/founder/kyc",e)},userToggleNotifications(e){return d.post("user/toggle/notifications/setting",FormData)},userGetNotificationStatus(e){return d.post("user/notifications/status",e)},userUpdatePassword(e){return d.post("user/update/password",e)},userUpdateDetails(e){return d.post("user/update/user/details",e)},userActivities(e){return l.get(`/user/activity/log?${e}`)},userNotifications(){return l.get("user/notifications")},userNotificationsMarkAsRead(){return l.get("user/notifications/read")},userGetCompany(e){return l.get(`user/account/company/${e}`)},userTeamMembers(e){return d.post("team/load/members",e)},userTeamsInvitation(e){return d.post("teams/invitation",e)},userTeamsInvitationAccept(e){return d.post("team/invitation/accept",e)},removeUserfromTeam(e){return d.post("team/remove/member",e)},getCompanyReturn(){return l.get("user/get/company/returns")},getCompanyCount(){return l.get("user/get/company/counts")},getPaymentInfo(){return l.get("user/get/payment/info")},getUserSubscription(){return l.get("user/get/user/subscription")},getUserSubscriptionPlan(){return l.get("get/user/subscription")},userInvoices(){return l.get("get/user/invoices")},pauseSubscriptionPlan(e){return l.get(`/pause/subscription/${e}`)},resumeSubscriptionPlan(e){return l.get(`/resume/subscription/${e}`)},upateCardInfo(){return l.get("/update/payment/info")},UserActivityLogs(){return l.get("user/get/userlogs")},getActiveUser(){return l.get("user/active/user")},userGetTasks(){return l.get("user/get/user/task")},userUpdateTask(e){return d.post("user/update/task/status/",e)},updateAllUserTask(){return l.get("/user/update/all/tast")},getUserNewTask(){return l.get("/user/get/user/new/task")},userGetTaskActivities(e){return l.get(`user/get/task/activities/${e}`)},userGetTaskComments(e){return l.get(`user/get/comments/${e}`)},userSendTaskComment(e){return d.post("user/add/comments",e)}},ur={paymentIntent(){return l.get("/payment/intent")},paymentConfirm(e){return l.post("/process/payment",JSON.stringify(e))},makeDefaultPament(e){return l.get(`/payment/make/default/${e}`)},ProcessKyc(){return l.get("/kyc/load")}},cr={getCompanies(){return l.get("manage/companies/index")},getCompaniesByUserID(e){return l.get(`manage/get/user/companies/${e}`)},getCompanyDetails(e){return l.get(`/manage/incorporation/${e}`)},companyDetails(e){return l.get(`manage/company/${e}`)},registeredCompany(e){return d.post("manage/company",e)},officeContract(e){return d.post("manage/officecontract",e)},complianceReporting(e){return d.post("manage/compliance/reporting",e)},registerOfDirectors(e){return d.post("manage/directors",e)},registerOfShareholders(e){return d.post("manage/shareholders",e)},registerOfSecretaries(e){return d.post("manage/secretaries",e)},registerOfChangeOfName(e){return d.post("manage/namechange",e)},registerOfCharge(e){return d.post("manage/charges",e)},registerOfAllotments(e){return d.post("manage/allotments",e)},registerOfTransfer(e){return d.post("manage/transfer",e)},significantControllers(e){return d.post("manage/controllers",e)},designatedRepresentatives(e){return d.post("manage/representatives",e)},GetCompanyProgressStatus(){return l.get("manage/incorporations/statuses")},incoprationStatusUpdate(e){return d.post("manage/incorporations/update",e)},incoprationLogs(e){return d.post("manage/company/logs",e)},activityLog(e){return l.get(`manage/activitylog?${e}`)},UserctivityLog(e){return l.get(`manage/user/activities?${e}`)},getUsers(e){return l.get(`manage/users?${e}`)},getDocuments(e){return l.get(`manage/get/documents/${e}`)},uploadCompanyDocuments(e){return d.post("manage/upload/document",e)},deleteCompanyDocument(e){return l.get(`manage/documents/delete/${e}`)},getCompanyStats(e=null){return l.post("manage/company/stats",e)},getRevenueStats(e){return l.post("manage/revenue/stats",e)},getAllBillings(e){return l.get(`manage/get/user/billing/${e}`)},updateUserStatus(e){return d.post("manage/update/users/status",e)},getUsersTeam(e){return d.post("/team/get/users",e)},publishCompany(e){return d.get(`manage/publish/company/${e}`)},getInvoices(){return l.get("manage/get/stripe/invoices")},totalPaidInvoices(){return l.get("manage/get/stripe/paid/invoices")},totalUnpaidInvoices(){return l.get("manage/get/stripe/unpaid/invoices")},getPlans(){return l.get("manage/get/plans")},getSubscribers(){return l.get("manage/get/subscribers")},generateInvoiceTable(){return l.get("manage/sync/invoices")},adminServices(){return l.get("manage/services/company")},adminServicesStore(e,t){return d.post(`/manage/services/company/store/${t}`,e)},createStripeProduct(e){return d.post("manage/create/stripe/product",e)},updateStripeProduct(e){return d.post("manage/update/stripe/product",e)},adminGetAllTasks(){return l.get("manage/get/all/task")},adminGetUserTask(e){return l.get(`manage/get/all/task${e}`)},adminPostTask(e){return d.post("manage/create/task",e)},adminUpdateTask(e){return d.post("/manage/update/tasks",e)},adminGetTaskActivities(e){return l.get(`manage/get/task/activities/${e}`)},adminGetTaskComments(e){return l.get(`manage/get/comments/${e}`)},adminSendTaskComment(e){return d.post("manage/add/comments",e)}},lr={login(e){return l.post("login",JSON.stringify(e))},register(e){return l.post("register",JSON.stringify(e))}},fr={checkAccountStatus(){return l.get("user/check/status")},activateTwoFactor(){return l.get("user/activate/2fa")},enableTwoFactor(e){return d.post("user/enable/2fa",e)},disableTwoFactor(e){return d.post("user/disable/2fa",e)},verifyTwoFactor(e){return d.post("user/verify/2fa",e)}},pr={...lr,...ir,...ar,...ur,...cr,...fr};export{pr as a};
