(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63430,e=>{"use strict";let t=Symbol.for("StackAuth--DO-NOT-USE-OR-YOU-WILL-BE-FIRED--StackAppInternals");e.s(["stackAppInternalsSymbol",0,t])},98756,e=>{"use strict";e.s(["useStackApp",()=>s,"useUser",()=>a]);var t=e.i(71645),r=e.i(91215);function a(e={}){let t=s(e);if(e.projectIdMustMatch&&t.projectId!==e.projectIdMustMatch)throw Error("Unexpected project ID in useStackApp: "+t.projectId);return e.projectIdMustMatch,t.useUser(e)}function s(e={}){if("function"!=typeof t.useContext)throw Error("useStackApp() can only be used in a React Client Component. Make sure you're not calling it from a Server Component, or any other environment.");let a=(0,t.useContext)(r.StackContext);if(null===a)throw Error("useStackApp must be used within a StackProvider");let i=a.app;if(e.projectIdMustMatch&&i.projectId!==e.projectIdMustMatch)throw Error("Unexpected project ID in useStackApp: "+i.projectId);return i}},37472,(e,t,r)=>{"use strict";function a(e){this._maxSize=e,this.clear()}a.prototype.clear=function(){this._size=0,this._values=Object.create(null)},a.prototype.get=function(e){return this._values[e]},a.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),!(e in this._values)&&this._size++,this._values[e]=t};var s=/[^.^\]^[]+|(?=\[\]|\.\.)/g,i=/^\d+$/,n=/^\d/,o=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,l=/^\s*(['"]?)(.*?)(\1)\s*$/,c=new a(512),d=new a(512),u=new a(512);function p(e){return c.get(e)||c.set(e,h(e).map(function(e){return e.replace(l,"$2")}))}function h(e){return e.match(s)||[""]}function m(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}t.exports={Cache:a,split:h,normalizePath:p,setter:function(e){var t=p(e);return d.get(e)||d.set(e,function(e,r){for(var a=0,s=t.length,i=e;a<s-1;){var n=t[a];if("__proto__"===n||"constructor"===n||"prototype"===n)return e;i=i[t[a++]]}i[t[a]]=r})},getter:function(e,t){var r=p(e);return u.get(e)||u.set(e,function(e){for(var a=0,s=r.length;a<s;)if(null==e&&t)return;else e=e[r[a++]];return e})},join:function(e){return e.reduce(function(e,t){return e+(m(t)||i.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,r){!function(e,t,r){var a,s,l,c,d=e.length;for(s=0;s<d;s++)(a=e[s])&&(function(e){return!m(e)&&(e.match(n)&&!e.match(i)||o.test(e))}(a)&&(a='"'+a+'"'),l=!(c=m(a))&&/^\d+$/.test(a),t.call(r,a,c,l,s,e))}(Array.isArray(e)?e:h(e),t,r)}}},3873,(e,t,r)=>{let a=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,s=e=>e.match(a)||[],i=e=>e[0].toUpperCase()+e.slice(1),n=(e,t)=>s(e).join(t).toLowerCase(),o=e=>s(e).reduce((e,t)=>`${e}${!e?t.toLowerCase():t[0].toUpperCase()+t.slice(1).toLowerCase()}`,"");t.exports={words:s,upperFirst:i,camelCase:o,pascalCase:e=>i(o(e)),snakeCase:e=>n(e,"_"),kebabCase:e=>n(e,"-"),sentenceCase:e=>i(n(e," ")),titleCase:e=>s(e).map(i).join(" ")}},1439,(e,t,r)=>{function a(e,t){var r=e.length,a=Array(r),s={},i=r,n=function(e){for(var t=new Map,r=0,a=e.length;r<a;r++){var s=e[r];t.has(s[0])||t.set(s[0],new Set),t.has(s[1])||t.set(s[1],new Set),t.get(s[0]).add(s[1])}return t}(t),o=function(e){for(var t=new Map,r=0,a=e.length;r<a;r++)t.set(e[r],r);return t}(e);for(t.forEach(function(e){if(!o.has(e[0])||!o.has(e[1]))throw Error("Unknown node. There is an unknown node in the supplied edges.")});i--;)s[i]||function e(t,i,l){if(l.has(t)){var c;try{c=", node was:"+JSON.stringify(t)}catch(e){c=""}throw Error("Cyclic dependency"+c)}if(!o.has(t))throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(t));if(!s[i]){s[i]=!0;var d=n.get(t)||new Set;if(i=(d=Array.from(d)).length){l.add(t);do{var u=d[--i];e(u,o.get(u),l)}while(i)l.delete(t)}a[--r]=t}}(e[i],i,new Set);return a}t.exports=function(e){return a(function(e){for(var t=new Set,r=0,a=e.length;r<a;r++){var s=e[r];t.add(s[0]),t.add(s[1])}return Array.from(t)}(e),e)},t.exports.array=a},37402,83427,17318,19963,61495,55998,27198,99683,90191,44061,42672,3760,47953,30868,8706,70483,15557,6711,8322,84509,45540,6085,40741,5173,e=>{"use strict";let t,r,a,s,i,n,o,l,c;e.s(["StackAssertionError",()=>B,"StatusError",()=>W,"captureError",()=>H,"concatStacktraces",()=>M,"errorToNiceString",()=>K,"throwErr",()=>$],37402);var d,u,p,h,m=e.i(47167);function f(e,t){if("string"!=typeof e||"string"!=typeof t)throw new B(`Expected two strings for stringCompare, found ${typeof e} and ${typeof t}`,{a:e,b:t});let r=(e,t)=>e<t?-1:+(e>t);return r(e.toUpperCase(),t.toUpperCase())||r(t,e)}function g(e){return e.substring(0,e.length-e.trimStart().length)}e.s(["deepPlainClone",()=>A,"deepPlainEquals",()=>function e(t,r,a={}){if(typeof t!=typeof r)return!1;if(t===r)return!0;switch(typeof t){case"object":{if(!t||!r)return!1;if(Array.isArray(t)||Array.isArray(r)){if(!Array.isArray(t)||!Array.isArray(r)||t.length!==r.length)return!1;return t.every((t,s)=>e(t,r[s],a))}let s=Object.entries(t).filter(([e,t])=>!a.ignoreUndefinedValues||void 0!==t),i=Object.entries(r).filter(([e,t])=>!a.ignoreUndefinedValues||void 0!==t);if(s.length!==i.length)return!1;return s.every(([t,r])=>{let s=i.find(([e])=>t===e);return!!s&&e(r,s[1],a)})}case"undefined":case"string":case"number":case"boolean":case"bigint":case"symbol":case"function":return!1;default:throw Error("Unexpected typeof "+typeof t)}},"filterUndefined",()=>R,"filterUndefinedOrNull",()=>O,"omit",()=>U,"pick",()=>N,"typedEntries",()=>E,"typedFromEntries",()=>I,"typedValues",()=>P],19963),e.s(["deindent",()=>v,"mergeScopeStrings",()=>w,"nicify",()=>k,"stringCompare",()=>f,"templateIdentity",()=>y],17318),e.s(["remainder",0,function(e,t){return(e%t+Math.abs(t))%t}],83427);function y(e,...t){if(t.length!==e.length-1)throw new B("Invalid number of values; must be one less than strings",{strings:e,values:t});return e.reduce((e,r,a)=>e+r+(t[a]??""),"")}function v(e,...t){return"string"==typeof e?v([e]):y(...function(e,...t){let r,a,s,i;if(t.length!==e.length-1)throw new B("Invalid number of values; must be one less than strings",{strings:e,values:t});let n=[...e];n[0]=(-1===(a=(r=(n[0]+"+").split("\n")).findIndex(e=>""!==e.trim()))?"":r.slice(a).join("\n")).slice(0,-1),n[n.length-1]=(i=function(e,t){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return r;return -1}(s=("+"+n[n.length-1]).split("\n"),e=>""!==e.trim()),s.slice(0,i+1).join("\n")).slice(1);let o=n.join("${SOME_VALUE}").split("\n").filter(e=>""!==e.trim()).map(e=>g(e).length).reduce((e,t)=>Math.min(e,t),1/0),l=n.map((e,t)=>e.split("\n").map((e,r)=>0!==t&&0===r?e:e.substring(o)).join("\n"));return[l,...t.map((e,t)=>{let r=g(l[t].split("\n").at(-1));return`${e}`.replaceAll("\n",`
${r}`)})]}(e,...t))}function _(e,t=!0){let r=e.trim().split(/\s+/).filter(e=>e.length>0);return t?[...new Set(r)]:r}function w(...e){return _(e.map(e=>_(e)).flat().join(" ")).join(" ")}let b=new Map(Object.entries({Headers}).map(([e,t])=>[t,e]));function k(e,t={}){let r={maxDepth:5,currentIndent:"",lineIndent:"  ",multiline:!0,refs:new Map,path:"value",parent:null,overrides:()=>null,keyInParent:null,hideFields:[],...R(t)},{maxDepth:a,currentIndent:s,lineIndent:i,multiline:n,refs:o,path:l,overrides:c,hideFields:d}=r,u=`
${s}`,p=c(e,t);if(null!==p)return p;if(["function","object","symbol"].includes(typeof e)&&null!==e){if(o.has(e))return`Ref<${o.get(e)}>`;o.set(e,l)}let h={maxDepth:a-1,currentIndent:s,lineIndent:i,multiline:n,refs:o,path:l+"->[unknown property]",overrides:c,parent:{value:e,options:r},keyInParent:null,hideFields:[]},m=(e,t,r,a={})=>k(e,{...h,path:t,currentIndent:s+i,keyInParent:r,...a});switch(typeof e){case"boolean":case"number":return JSON.stringify(e);case"string":{let t=e=>v(e)===e&&e.includes("\n"),r=e=>v`
        deindent\`
        ${s+i}${e.replaceAll("\\","\\\\").replaceAll("`","\\`").replaceAll("${","\\${").replaceAll("\n",u+i)}
        ${s}\`
      `;if(t(e))return r(e);if(e.endsWith("\n")&&t(e.slice(0,-1)))return r(e.slice(0,-1))+' + "\\n"';return JSON.stringify(e)}case"undefined":return"undefined";case"symbol":return e.toString();case"bigint":return`${e}n`;case"function":if(e.name)return`function ${e.name}(...) { ... }`;return"(...) => { ... }";case"object":{if(null===e)return"null";if(Array.isArray(e)){let t=C(e),r=e.length+t.length;if(0===r)return"[]";if(a<=0)return"[...]";let s=e.map((e,t)=>m(e,`${l}[${t}]`,t));if(s.push(...t),s.length!==r)throw new B("nicify of object: resValues.length !== resValueLength",{value:e,resValues:s,resValueLength:r});if(s.length>4||s.some(e=>s.length>1&&e.length>4||e.includes("\n")))return`[${u}${s.map(e=>`${i}${e},${u}`).join("")}]`;return`[${s.join(", ")}]`}if(e instanceof Date)return`Date(${m(e.toISOString(),`${l}.toISOString()`,null)})`;if(e instanceof URL)return`URL(${m(e.toString(),`${l}.toString()`,null)})`;if(ArrayBuffer.isView(e))return`${e.constructor.name}([${e.toString()}])`;if(e instanceof ArrayBuffer)return`ArrayBuffer [${new Uint8Array(e).toString()}]`;if(e instanceof Error){let t=e.stack??"",r=e.toString();return t.startsWith(r)||(t=`${r}
${t}`),t=(t=(t=t.trimEnd()).replace(/\n\s+/g,`
${i}${i}`)).replace("\n",`
${i}Stack:
`),Object.keys(e).length>0&&(t+=`
${i}Extra properties: ${m(Object.fromEntries(Object.entries(e)),l,null)}`),e.cause&&(t+=`
${i}Cause:
${i}${i}${m(e.cause,l,null,{currentIndent:s+i+i})}`),t=t.replaceAll("\n",`
${s}`)}let t=[null,Object.prototype].includes(Object.getPrototypeOf(e))?null:b.get(e.constructor)??e.constructor.name,r=t?`${t} `:"",n=(function(e){var t;let r;return[Headers].some(t=>e instanceof t)?[...e.entries()].sort(([e],[t])=>f(`${e}`,`${t}`)):(t=e,null!=(r=("getNicifiableKeys"in t?t.getNicifiableKeys?.bind(t):null)?.())?r:t instanceof Response?["status","headers"]:[...new Set(Object.keys(t).sort())]).map(t=>[t,e[t]])})(e).filter(([e])=>!d.includes(e)),o=[...C(e),...d.length>0?["<some fields may have been hidden>"]:[]],c=n.length+o.length;if(0===c)return`${r}{}`;if(a<=0)return`${r}{ ... }`;let p=n.map(([e,t],r)=>{let a=m(e,`Object.keys(${l})[${r}]`,null),s="string"==typeof e?JSON.stringify(e):`[${a}]`;return"function"==typeof t&&t.name===e?`${s}(...): { ... }`:`${s}: ${m(t,`${l}[${a}]`,e)}`});if(p.push(...o),p.length!==c)throw new B("nicify of object: resValues.length !== resValueLength",{value:e,resValues:p,resValueLength:c});let h=p.length>1||p.some(e=>e.includes("\n"));if(0===p.length)return`${r}{}`;if(h)return`${r}{${u}${p.map(e=>`${i}${e},${u}`).join("")}}`;return`${r}{ ${p.join(", ")} }`}default:return`${typeof e}<${e}>`}}function C(e){return("getNicifiedObjectExtraLines"in e?e.getNicifiedObjectExtraLines:null)?.()??[]}function T(...e){return e}function S(){return()=>void 0}function x(){return()=>void 0}x()(),x()(),x()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()(),S()();function A(e){if("function"==typeof e)throw new B("deepPlainClone does not support functions");if("symbol"==typeof e)throw new B("deepPlainClone does not support symbols");return"object"==typeof e&&e?Array.isArray(e)?e.map(A):Object.fromEntries(Object.entries(e).map(([e,t])=>[e,A(t)])):e}function E(e){return Object.entries(e)}function I(e){return Object.fromEntries(e)}function P(e){return Object.values(e)}function R(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>void 0!==e))}function O(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>null!=e))}function N(e,t){return Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}function U(e,t){if(!Array.isArray(t))throw new B("omit: keys must be an array",{obj:e,keys:t});return Object.fromEntries(Object.entries(e).filter(([e])=>!t.includes(e)))}x()();let j="u">typeof globalThis?globalThis:e.g;"u"<typeof globalThis&&(j.globalThis=j);let D=Symbol.for("__stack-globals");function L(e,t){return j[D][e]||(j[D][e]=t()),j[D][e]}function $(...e){if("string"==typeof e[0])throw new B(e[0],e[1]);if(e[0]instanceof Error)throw e[0];throw new W(...e)}function F(e){let t=Error().stack?.startsWith("Error\n");return e.split("\n").slice(+!!t).join("\n")}function M(e,...t){let r=e.stack?.endsWith("\n"),a=F(Error().stack??"").split("\n")[0];for(let s of t){let t=F(s.stack??"");e.stack+=(r?"":"\n")+a+"\n"+t}}j[D]??={},e.s(["createGlobal",0,L,"getGlobal",0,function(e){return j[D][e]},"globalVar",0,j],61495);var B=class extends Error{constructor(e,t){const r=`

This is likely an error in Stack. Please make sure you are running the newest version and report it.`;super(`${e}${e.endsWith(r)?"":r}`,N(t??{},["cause"])),this.extraData=t,Object.defineProperty(this,"customCaptureExtraArgs",{get(){return[this.extraData]},enumerable:!1}),m.default.env.NEXT_PUBLIC_STACK_DEBUGGER_ON_ASSERTION_ERROR}};function K(e){return e instanceof Error?k(e,{maxDepth:8}):`${typeof e}<${k(e)}>`}B.prototype.name="StackAssertionError";let q=new Set;function V(e){q.has(e)||q.add(e)}function H(e,t){for(let r of q)r(e,t,...t&&("object"==typeof t||"function"==typeof t)&&"customCaptureExtraArgs"in t&&Array.isArray(t.customCaptureExtraArgs)?t.customCaptureExtraArgs:[])}V((e,t,...r)=>{console.error(`\x1b[41mCaptured error in ${e}:`,K(t),...r,"\x1b[0m")}),V((e,t,...r)=>{j.stackCapturedErrors=j.stackCapturedErrors??[],j.stackCapturedErrors.push({location:e,error:t,extraArgs:r})});var W=class extends Error{static{this.BadRequest={statusCode:400,message:"Bad Request"}}static{this.Unauthorized={statusCode:401,message:"Unauthorized"}}static{this.PaymentRequired={statusCode:402,message:"Payment Required"}}static{this.Forbidden={statusCode:403,message:"Forbidden"}}static{this.NotFound={statusCode:404,message:"Not Found"}}static{this.MethodNotAllowed={statusCode:405,message:"Method Not Allowed"}}static{this.NotAcceptable={statusCode:406,message:"Not Acceptable"}}static{this.ProxyAuthenticationRequired={statusCode:407,message:"Proxy Authentication Required"}}static{this.RequestTimeout={statusCode:408,message:"Request Timeout"}}static{this.Conflict={statusCode:409,message:"Conflict"}}static{this.Gone={statusCode:410,message:"Gone"}}static{this.LengthRequired={statusCode:411,message:"Length Required"}}static{this.PreconditionFailed={statusCode:412,message:"Precondition Failed"}}static{this.PayloadTooLarge={statusCode:413,message:"Payload Too Large"}}static{this.URITooLong={statusCode:414,message:"URI Too Long"}}static{this.UnsupportedMediaType={statusCode:415,message:"Unsupported Media Type"}}static{this.RangeNotSatisfiable={statusCode:416,message:"Range Not Satisfiable"}}static{this.ExpectationFailed={statusCode:417,message:"Expectation Failed"}}static{this.ImATeapot={statusCode:418,message:"I'm a teapot"}}static{this.MisdirectedRequest={statusCode:421,message:"Misdirected Request"}}static{this.UnprocessableEntity={statusCode:422,message:"Unprocessable Entity"}}static{this.Locked={statusCode:423,message:"Locked"}}static{this.FailedDependency={statusCode:424,message:"Failed Dependency"}}static{this.TooEarly={statusCode:425,message:"Too Early"}}static{this.UpgradeRequired={statusCode:426,message:"Upgrade Required"}}static{this.PreconditionRequired={statusCode:428,message:"Precondition Required"}}static{this.TooManyRequests={statusCode:429,message:"Too Many Requests"}}static{this.RequestHeaderFieldsTooLarge={statusCode:431,message:"Request Header Fields Too Large"}}static{this.UnavailableForLegalReasons={statusCode:451,message:"Unavailable For Legal Reasons"}}static{this.InternalServerError={statusCode:500,message:"Internal Server Error"}}static{this.NotImplemented={statusCode:501,message:"Not Implemented"}}static{this.BadGateway={statusCode:502,message:"Bad Gateway"}}static{this.ServiceUnavailable={statusCode:503,message:"Service Unavailable"}}static{this.GatewayTimeout={statusCode:504,message:"Gateway Timeout"}}static{this.HTTPVersionNotSupported={statusCode:505,message:"HTTP Version Not Supported"}}static{this.VariantAlsoNegotiates={statusCode:506,message:"Variant Also Negotiates"}}static{this.InsufficientStorage={statusCode:507,message:"Insufficient Storage"}}static{this.LoopDetected={statusCode:508,message:"Loop Detected"}}static{this.NotExtended={statusCode:510,message:"Not Extended"}}static{this.NetworkAuthenticationRequired={statusCode:511,message:"Network Authentication Required"}}constructor(e,t){if("object"==typeof e&&(t??=e.message,e=e.statusCode),super(t),this.__stackStatusErrorBrand="stack-status-error-brand-sentinel",this.name="StatusError",this.statusCode=e,!t)throw new B("StatusError always requires a message unless a Status object is passed",{cause:this})}static isStatusError(e){return"object"==typeof e&&null!==e&&"__stackStatusErrorBrand"in e&&"stack-status-error-brand-sentinel"===e.__stackStatusErrorBrand}isClientError(){return this.statusCode>=400&&this.statusCode<500}isServerError(){return!this.isClientError()}getStatusCode(){return this.statusCode}getBody(){return new TextEncoder().encode(this.message)}getHeaders(){return{"Content-Type":["text/plain; charset=utf-8"]}}toDescriptiveJson(){return{status_code:this.getStatusCode(),message:this.message,headers:this.getHeaders()}}toHttpJson(){return{status_code:this.statusCode,body:this.message,headers:this.getHeaders()}}};W.prototype.name="StatusError",e.s(["neverResolve",()=>oh,"pending",()=>om,"rateLimited",()=>ov,"rejected",()=>ou,"resolved",()=>oc,"runAsynchronously",()=>oy,"runAsynchronouslyWithAlert",()=>og,"wait",()=>of],6085),e.s([],8322),e.s(["StackAdminInterface",()=>ny],6711),e.s(["AsyncResult",()=>J,"Result",()=>z],55998);let z={fromThrowing:Y,fromThrowingAsync:G,fromPromise:X,ok:e=>({status:"ok",data:e}),error:e=>({status:"error",error:e}),map:Q,or:(e,t)=>"ok"===e.status?e.data:t,orThrow:e=>{if("error"===e.status)throw e.error;return e.data},orThrowAsync:async e=>z.orThrow(await e),retry:ee},J={fromThrowing:Y,fromPromise:X,ok:z.ok,error:z.error,pending:function(e){return{status:"pending",progress:e}},map:Q,or:(e,t)=>"pending"===e.status?t:z.or(e,t),orThrow:e=>{if("pending"===e.status)throw Error("Result still pending");return z.orThrow(e)},retry:ee};async function X(e){try{let t=await e;return z.ok(t)}catch(e){return z.error(e)}}function Y(e){try{return z.ok(e())}catch(e){return z.error(e)}}async function G(e){try{return z.ok(await e())}catch(e){return z.error(e)}}function Q(e,t){return"error"===e.status?{status:"error",error:e.error}:"pending"===e.status?{status:"pending",..."progress"in e?{progress:e.progress}:{}}:z.ok(t(e.data))}var Z=class extends AggregateError{constructor(e){const t=e.map(e=>k(e)),r=t.length>1&&t.every(e=>e===t[0]);super(e,v`
      Error after ${e.length} attempts.
      
      ${r?v`
        Attempts 1-${e.length}:
          ${t[0]}
      `:t.map((e,t)=>v`
          Attempt ${t+1}:
            ${e}
        `).join("\n\n")}
      `,{cause:e[e.length-1]}),this.errors=e,this.name="RetryError"}get attempts(){return this.errors.length}};async function ee(e,t,{exponentialDelayBase:r=1e3}={}){let a=[];for(let s=0;s<t;s++){let i=await e(s);if("ok"===i.status)return Object.assign(z.ok(i.data),{attempts:s+1});a.push(i.error),s<t-1&&await of((Math.random()+.5)*r*2**s)}return Object.assign(z.error(new Z(a)),{attempts:t})}Z.prototype.name="RetryError";var et=class extends W{constructor(e,t,r){super(e,t),this.statusCode=e,this.humanReadableMessage=t,this.details=r,this.__stackKnownErrorBrand="stack-known-error-brand-sentinel",this.name="KnownError"}static isKnownError(e){return"object"==typeof e&&null!==e&&"__stackKnownErrorBrand"in e&&"stack-known-error-brand-sentinel"===e.__stackKnownErrorBrand}getBody(){return new TextEncoder().encode(JSON.stringify(this.toDescriptiveJson(),void 0,2))}getHeaders(){return{"Content-Type":["application/json; charset=utf-8"],"X-Stack-Known-Error":[this.errorCode]}}toDescriptiveJson(){return{code:this.errorCode,...this.details?{details:this.details}:{},error:this.humanReadableMessage}}get errorCode(){return this.constructor.errorCode??$(`Can't find error code for this KnownError. Is its constructor a KnownErrorConstructor? ${this}`)}static constructorArgsFromJson(e){return[400,e.message,e]}static fromJson(e){for(let[t,r]of Object.entries(rg))if(e.code===r.prototype.errorCode)return new r(...r.constructorArgsFromJson(e));throw Error(`An error occurred. Please update your version of the Stack Auth SDK. ${e.code}: ${e.message}`)}};function er(e,t,r,a){let s="inherit"===r?T:r,i="inherit"===a?e.constructorArgsFromJson:a;class n extends e{static{this.errorCode=t}constructor(...e){super(...s(...e)),this.name=`KnownError<${t}>`,this.constructorArgs=e}static constructorArgsFromJson(e){return i(e.details)}static isInstance(e){if(!et.isKnownError(e))return!1;let r=e;for(;r=Object.getPrototypeOf(r);)if("errorCode"in r.constructor&&r.constructor.errorCode===t)return!0;return!1}}return n}let ea=er(et,"UNSUPPORTED_ERROR",e=>[500,`An error occurred that is not currently supported (possibly because it was added in a version of Stack that is newer than this client). The original unsupported error code was: ${e}`,{originalErrorCode:e}],e=>[e?.originalErrorCode??$("originalErrorCode not found in UnsupportedError details")]),es=er(et,"BODY_PARSING_ERROR",e=>[400,e],e=>[e.message]),ei=er(et,"SCHEMA_ERROR",e=>[400,e||$("SchemaError requires a message"),{message:e}],e=>[e.message]),en=er(et,"ALL_OVERLOADS_FAILED",e=>[400,v`
      This endpoint has multiple overloads, but they all failed to process the request.

        ${e.map((e,t)=>v`
          Overload ${t+1}: ${JSON.stringify(e,void 0,2)}
        `).join("\n\n")}
    `,{overload_errors:e}],e=>[e?.overload_errors??$("overload_errors not found in AllOverloadsFailed details")]),eo=er(et,"PROJECT_AUTHENTICATION_ERROR","inherit","inherit"),el=er(eo,"INVALID_PROJECT_AUTHENTICATION","inherit","inherit"),ec=er(el,"PROJECT_KEY_WITHOUT_ACCESS_TYPE",()=>[400,"Either an API key or an admin access token was provided, but the x-stack-access-type header is missing. Set it to 'client', 'server', or 'admin' as appropriate."],()=>[]),ed=er(el,"INVALID_ACCESS_TYPE",e=>[400,`The x-stack-access-type header must be 'client', 'server', or 'admin', but was '${e}'.`],e=>[e?.accessType??$("accessType not found in InvalidAccessType details")]),eu=er(el,"ACCESS_TYPE_WITHOUT_PROJECT_ID",e=>[400,v`
      The x-stack-access-type header was '${e}', but the x-stack-project-id header was not provided.
      
      For more information, see the docs on REST API authentication: https://docs.stack-auth.com/rest-api/overview#authentication
    `,{request_type:e}],e=>[e.request_type]),ep=er(el,"ACCESS_TYPE_REQUIRED",()=>[400,v`
      You must specify an access level for this Stack project. Make sure project API keys are provided (eg. x-stack-publishable-client-key) and you set the x-stack-access-type header to 'client', 'server', or 'admin'.
      
      For more information, see the docs on REST API authentication: https://docs.stack-auth.com/rest-api/overview#authentication
    `],()=>[]),eh=er(el,"INSUFFICIENT_ACCESS_TYPE",(e,t)=>[401,`The x-stack-access-type header must be ${t.map(e=>`'${e}'`).join(" or ")}, but was '${e}'.`,{actual_access_type:e,allowed_access_types:t}],e=>[e.actual_access_type,e.allowed_access_types]),em=er(el,"INVALID_PUBLISHABLE_CLIENT_KEY",e=>[401,`The publishable key is not valid for the project ${JSON.stringify(e)}. Does the project and/or the key exist?`,{project_id:e}],e=>[e.project_id]),ef=er(el,"INVALID_SECRET_SERVER_KEY",e=>[401,`The secret server key is not valid for the project ${JSON.stringify(e)}. Does the project and/or the key exist?`,{project_id:e}],e=>[e.project_id]),eg=er(el,"INVALID_SUPER_SECRET_ADMIN_KEY",e=>[401,`The super secret admin key is not valid for the project ${JSON.stringify(e)}. Does the project and/or the key exist?`,{project_id:e}],e=>[e.project_id]),ey=er(el,"INVALID_ADMIN_ACCESS_TOKEN","inherit","inherit"),ev=er(ey,"UNPARSABLE_ADMIN_ACCESS_TOKEN",()=>[401,"Admin access token is not parsable."],()=>[]),e_=er(ey,"ADMIN_ACCESS_TOKEN_EXPIRED",e=>[401,`Admin access token has expired. Please refresh it and try again.${e?` (The access token expired at ${e.toISOString()}.)`:""}`,{expired_at_millis:e?.getTime()??null}],e=>[e.expired_at_millis?new Date(e.expired_at_millis):void 0]),ew=er(ey,"INVALID_PROJECT_FOR_ADMIN_ACCESS_TOKEN",()=>[401,"Admin access tokens must be created on the internal project."],()=>[]),eb=er(ey,"ADMIN_ACCESS_TOKEN_IS_NOT_ADMIN",()=>[401,"Admin access token does not have the required permissions to access this project."],()=>[]),ek=er(eo,"PROJECT_AUTHENTICATION_REQUIRED","inherit","inherit"),eC=er(ek,"CLIENT_AUTHENTICATION_REQUIRED",()=>[401,"The publishable client key must be provided."],()=>[]),eT=er(ek,"PUBLISHABLE_CLIENT_KEY_REQUIRED_FOR_PROJECT",e=>[401,"Publishable client keys are required for this project. Create one in Project Keys, or disable this requirement there to allow keyless client access.",{project_id:e??null}],e=>[e.project_id??void 0]),eS=er(ek,"SERVER_AUTHENTICATION_REQUIRED",()=>[401,"The secret server key must be provided."],()=>[]),ex=er(ek,"CLIENT_OR_SERVER_AUTHENTICATION_REQUIRED",()=>[401,"Either the publishable client key or the secret server key must be provided."],()=>[]),eA=er(ek,"CLIENT_OR_ADMIN_AUTHENTICATION_REQUIRED",()=>[401,"Either the publishable client key or the super secret admin key must be provided."],()=>[]),eE=er(ek,"CLIENT_OR_SERVER_OR_ADMIN_AUTHENTICATION_REQUIRED",()=>[401,"Either the publishable client key, the secret server key, or the super secret admin key must be provided."],()=>[]),eI=er(ek,"ADMIN_AUTHENTICATION_REQUIRED",()=>[401,"The super secret admin key must be provided."],()=>[]),eP=er(eo,"EXPECTED_INTERNAL_PROJECT",()=>[401,"The project ID is expected to be internal."],()=>[]),eR=er(et,"SESSION_AUTHENTICATION_ERROR","inherit","inherit"),eO=er(eR,"INVALID_SESSION_AUTHENTICATION","inherit","inherit"),eN=er(eO,"INVALID_ACCESS_TOKEN","inherit","inherit"),eU=er(eN,"UNPARSABLE_ACCESS_TOKEN",()=>[401,"Access token is not parsable."],()=>[]),ej=er(eN,"ACCESS_TOKEN_EXPIRED",(e,t,r,a)=>[401,v`
      Access token has expired. Please refresh it and try again.${e?` (The access token expired at ${e.toISOString()}.)`:""}${t?` Project ID: ${t}.`:""}${r?` User ID: ${r}.`:""}${a?` Refresh token ID: ${a}.`:""}

      Debug info: Most likely, you fetched the access token before it expired (for example, in a server component, pre-rendered page, or on page load), but then didn't refresh it before it expired. If this is the case, and you're using the SDK, make sure you call getAccessToken() every time you need to use the access token. If you're not using the SDK, make sure you refresh the access token with the refresh endpoint.
    `,{expired_at_millis:e?.getTime()??null,project_id:t??null,user_id:r??null,refresh_token_id:a??null}],e=>[e.expired_at_millis?new Date(e.expired_at_millis):void 0,e.project_id??void 0,e.user_id??void 0,e.refresh_token_id??void 0]),eD=er(eN,"INVALID_PROJECT_FOR_ACCESS_TOKEN",(e,t)=>[401,`Access token not valid for this project. Expected project ID ${JSON.stringify(e)}, but the token is for project ID ${JSON.stringify(t)}.`,{expected_project_id:e,actual_project_id:t}],e=>[e.expected_project_id,e.actual_project_id]),eL=er(et,"REFRESH_TOKEN_ERROR","inherit","inherit"),e$=er(eL,"REFRESH_TOKEN_NOT_FOUND_OR_EXPIRED",()=>[401,"Refresh token not found for this project, or the session has expired/been revoked."],()=>[]),eF=er(eL,"CANNOT_DELETE_CURRENT_SESSION",()=>[400,"Cannot delete the current session."],()=>[]),eM=er(eL,"PROVIDER_REJECTED",()=>[401,"The provider refused to refresh their token. This usually means that the provider used to authenticate the user no longer regards this session as valid, and the user must re-authenticate."],()=>[]),eB=er(et,"USER_EMAIL_ALREADY_EXISTS",(e,t=!1)=>[409,`A user with email ${JSON.stringify(e)} already exists${t?" but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method.":"."}`,{email:e,would_work_if_email_was_verified:t}],e=>[e.email,e.would_work_if_email_was_verified??!1]),eK=er(et,"EMAIL_NOT_VERIFIED",()=>[400,"The email is not verified."],()=>[]),eq=er(et,"CANNOT_GET_OWN_USER_WITHOUT_USER",()=>[400,"You have specified 'me' as a userId, but did not provide authentication for a user."],()=>[]),eV=er(et,"USER_ID_DOES_NOT_EXIST",e=>[400,`The given user with the ID ${e} does not exist.`,{user_id:e}],e=>[e.user_id]),eH=er(et,"USER_NOT_FOUND",()=>[404,"User not found."],()=>[]),eW=er(et,"RESTRICTED_USER_NOT_ALLOWED",e=>[403,`The user in the access token is in restricted state. Reason: ${e.type}. Please pass the X-Stack-Allow-Restricted-User header if this is intended.`,{restricted_reason:e}],e=>[e.restricted_reason??{type:"anonymous"}]),ez=er(et,"PROJECT_NOT_FOUND",e=>{if("string"!=typeof e)throw new B("projectId of KnownErrors.ProjectNotFound must be a string");return[404,`Project ${e} not found or is not accessible with the current user.`,{project_id:e}]},e=>[e.project_id]),eJ=er(et,"CURRENT_PROJECT_NOT_FOUND",e=>[400,`The current project with ID ${e} was not found. Please check the value of the x-stack-project-id header.`,{project_id:e}],e=>[e.project_id]),eX=er(et,"BRANCH_DOES_NOT_EXIST",e=>[400,`The branch with ID ${e} does not exist.`,{branch_id:e}],e=>[e.branch_id]),eY=er(et,"SIGN_UP_NOT_ENABLED",()=>[400,"Creation of new accounts is not enabled for this project. Please ask the project owner to enable it."],()=>[]),eG=er(et,"SIGN_UP_REJECTED",e=>[403,e??"Your sign up was rejected by an administrator's sign-up rule.",{message:e??"Your sign up was rejected by an administrator's sign-up rule."}],e=>[e.message]),eQ=er(et,"BOT_CHALLENGE_REQUIRED",()=>[409,"An additional bot challenge is required before sign-up can continue."],()=>[]),eZ=er(et,"BOT_CHALLENGE_FAILED",e=>[400,e,{message:e}],e=>[e.message]),e0=er(et,"PASSWORD_AUTHENTICATION_NOT_ENABLED",()=>[400,"Password authentication is not enabled for this project."],()=>[]),e1=er(et,"DATA_VAULT_STORE_DOES_NOT_EXIST",e=>[400,`Data vault store with ID ${e} does not exist.`,{store_id:e}],e=>[e.store_id]),e2=er(et,"DATA_VAULT_STORE_HASHED_KEY_DOES_NOT_EXIST",(e,t)=>[400,`Data vault store with ID ${e} does not contain a key with hash ${t}.`,{store_id:e,hashed_key:t}],e=>[e.store_id,e.hashed_key]),e4=er(et,"PASSKEY_AUTHENTICATION_NOT_ENABLED",()=>[400,"Passkey authentication is not enabled for this project."],()=>[]),e3=er(et,"ANONYMOUS_ACCOUNTS_NOT_ENABLED",()=>[400,"Anonymous accounts are not enabled for this project."],()=>[]),e6=er(et,"ANONYMOUS_AUTHENTICATION_NOT_ALLOWED",()=>[401,"X-Stack-Access-Token is for an anonymous user, but anonymous users are not enabled. Set the X-Stack-Allow-Anonymous-User header of this request to 'true' to allow anonymous users."],()=>[]),e5=er(et,"EMAIL_PASSWORD_MISMATCH",()=>[400,"Wrong e-mail or password."],()=>[]),e8=er(et,"REDIRECT_URL_NOT_WHITELISTED",()=>[400,"Redirect URL not whitelisted. Did you forget to add this domain to the trusted domains list on the Stack Auth dashboard?"],()=>[]),e7=er(et,"PASSWORD_REQUIREMENTS_NOT_MET","inherit","inherit"),e9=er(e7,"PASSWORD_TOO_SHORT",e=>[400,`Password too short. Minimum length is ${e}.`,{min_length:e}],e=>[e?.min_length??$("min_length not found in PasswordTooShort details")]),te=er(e7,"PASSWORD_TOO_LONG",e=>[400,`Password too long. Maximum length is ${e}.`,{maxLength:e}],e=>[e?.maxLength??$("maxLength not found in PasswordTooLong details")]),tt=er(et,"USER_DOES_NOT_HAVE_PASSWORD",()=>[400,"This user does not have password authentication enabled."],()=>[]),tr=er(et,"VERIFICATION_ERROR","inherit","inherit"),ta=er(tr,"VERIFICATION_CODE_NOT_FOUND",()=>[404,"The verification code does not exist for this project."],()=>[]),ts=er(tr,"VERIFICATION_CODE_EXPIRED",()=>[400,"The verification code has expired."],()=>[]),ti=er(tr,"VERIFICATION_CODE_ALREADY_USED",()=>[409,"The verification link has already been used."],()=>[]),tn=er(tr,"VERIFICATION_CODE_MAX_ATTEMPTS_REACHED",()=>[400,"The verification code nonce has reached the maximum number of attempts. This code is not valid anymore."],()=>[]),to=er(et,"PASSWORD_CONFIRMATION_MISMATCH",()=>[400,"Passwords do not match."],()=>[]),tl=er(et,"EMAIL_ALREADY_VERIFIED",()=>[409,"The e-mail is already verified."],()=>[]),tc=er(et,"EMAIL_NOT_ASSOCIATED_WITH_USER",()=>[400,"The e-mail is not associated with a user that could log in with that e-mail."],()=>[]),td=er(et,"EMAIL_IS_NOT_PRIMARY_EMAIL",(e,t)=>[400,`The given e-mail (${e}) must equal the user's primary e-mail (${t}).`,{email:e,primary_email:t}],e=>[e.email,e.primary_email]),tu=er(et,"PASSKEY_REGISTRATION_FAILED",e=>[400,e],e=>[e.message]),tp=er(et,"PASSKEY_WEBAUTHN_ERROR",(e,t)=>[400,e,{message:e,code:t}],e=>[e.message,e.code]),th=er(et,"PASSKEY_AUTHENTICATION_FAILED",e=>[400,e],e=>[e.message]),tm=er(et,"PERMISSION_NOT_FOUND",e=>[404,`Permission "${e}" not found. Make sure you created it on the dashboard.`,{permission_id:e}],e=>[e.permission_id]),tf=er(et,"WRONG_PERMISSION_SCOPE",(e,t,r)=>[404,`Permission ${JSON.stringify(e)} not found. (It was found for a different scope ${JSON.stringify(r)}, but scope ${JSON.stringify(t)} was expected.)`,{permission_id:e,expected_scope:t,actual_scope:r}],e=>[e.permission_id,e.expected_scope,e.actual_scope]),tg=er(et,"CONTAINED_PERMISSION_NOT_FOUND",e=>[400,`Contained permission with ID "${e}" not found. Make sure you created it on the dashboard.`,{permission_id:e}],e=>[e.permission_id]),ty=er(et,"TEAM_NOT_FOUND",e=>[404,`Team ${e} not found.`,{team_id:e}],e=>[e.team_id]);er(et,"TEAM_ALREADY_EXISTS",e=>[409,`Team ${e} already exists.`,{team_id:e}],e=>[e.team_id]);let tv=er(et,"TEAM_MEMBERSHIP_NOT_FOUND",(e,t)=>[404,`User ${t} is not found in team ${e}.`,{team_id:e,user_id:t}],e=>[e.team_id,e.user_id]),t_=er(et,"TEAM_INVITATION_RESTRICTED_USER_NOT_ALLOWED",e=>[403,`Restricted users cannot accept team invitations. Reason: ${e.type}. Please complete the onboarding process before accepting team invitations.`,{restricted_reason:e}],e=>[e.restricted_reason??{type:"anonymous"}]),tw=er(et,"EMAIL_TEMPLATE_ALREADY_EXISTS",()=>[409,"Email template already exists."],()=>[]),tb=er(et,"OAUTH_CONNECTION_NOT_CONNECTED_TO_USER",()=>[400,"The OAuth connection is not connected to any user."],()=>[]),tk=er(et,"OAUTH_CONNECTION_ALREADY_CONNECTED_TO_ANOTHER_USER",()=>[409,"The OAuth connection is already connected to another user."],()=>[]),tC=er(et,"OAUTH_CONNECTION_DOES_NOT_HAVE_REQUIRED_SCOPE",()=>[400,"The OAuth connection does not have the required scope."],()=>[]),tT=er(et,"OAUTH_ACCESS_TOKEN_NOT_AVAILABLE",(e,t)=>[400,`Failed to retrieve an OAuth access token for the connected account (provider: ${e}). ${t}`,{provider:e,details:t}],e=>[e.provider,e.details]),tS=er(et,"OAUTH_EXTRA_SCOPE_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS",()=>[400,"Extra scopes are not available with shared OAuth keys. Please add your own OAuth keys on the Stack dashboard to use extra scopes."],()=>[]),tx=er(et,"OAUTH_ACCESS_TOKEN_NOT_AVAILABLE_WITH_SHARED_OAUTH_KEYS",()=>[400,"Access tokens are not available with shared OAuth keys. Please add your own OAuth keys on the Stack dashboard to use access tokens."],()=>[]),tA=er(et,"INVALID_OAUTH_CLIENT_ID_OR_SECRET",e=>[400,"The OAuth client ID or secret is invalid. The client ID must be equal to the project ID (potentially with a hash and a branch ID), and the client secret must be a publishable client key.",{client_id:e??null}],e=>[e.client_id??void 0]),tE=er(et,"INVALID_SCOPE",e=>[400,`The scope "${e}" is not a valid OAuth scope for Stack.`],e=>[e.scope]),tI=er(et,"USER_ALREADY_CONNECTED_TO_ANOTHER_OAUTH_CONNECTION",()=>[409,"The user is already connected to another OAuth account. Did you maybe selected the wrong account?"],()=>[]),tP=er(et,"OUTER_OAUTH_TIMEOUT",()=>[408,"The OAuth flow has timed out. Please sign in again."],()=>[]),tR=er(et,"OAUTH_PROVIDER_NOT_FOUND_OR_NOT_ENABLED",()=>[400,"The OAuth provider is not found or not enabled."],()=>[]),tO=er(et,"APPLE_BUNDLE_ID_NOT_CONFIGURED",()=>[400,"Apple Sign In is enabled, but no Bundle IDs are configured. Please add your app's Bundle ID in the Stack Auth dashboard under OAuth Providers > Apple > Apple Bundle IDs."],()=>[]),tN=er(et,"OAUTH_PROVIDER_ACCOUNT_ID_ALREADY_USED_FOR_SIGN_IN",()=>[400,"A provider with the same account ID is already used for signing in."],()=>[]),tU=er(et,"MULTI_FACTOR_AUTHENTICATION_REQUIRED",e=>[400,"Multi-factor authentication is required for this user.",{attempt_code:e}],e=>[e.attempt_code]),tj=er(et,"INVALID_TOTP_CODE",()=>[400,"The TOTP code is invalid. Please try again."],()=>[]),tD=er(et,"USER_AUTHENTICATION_REQUIRED",()=>[401,"User authentication required for this endpoint."],()=>[]),tL=er(et,"TEAM_MEMBERSHIP_ALREADY_EXISTS",()=>[409,"Team membership already exists."],()=>[]),t$=er(et,"PROJECT_PERMISSION_REQUIRED",(e,t)=>[401,`User ${e} does not have permission ${t}.`,{user_id:e,permission_id:t}],e=>[e.user_id,e.permission_id]),tF=er(et,"TEAM_PERMISSION_REQUIRED",(e,t,r)=>[401,`User ${t} does not have permission ${r} in team ${e}.`,{team_id:e,user_id:t,permission_id:r}],e=>[e.team_id,e.user_id,e.permission_id]),tM=er(et,"TEAM_PERMISSION_NOT_FOUND",(e,t,r)=>[401,`User ${t} does not have permission ${r} in team ${e}.`,{team_id:e,user_id:t,permission_id:r}],e=>[e.team_id,e.user_id,e.permission_id]),tB=er(et,"INVALID_SHARED_OAUTH_PROVIDER_ID",e=>[400,`The shared OAuth provider with ID ${e} is not valid.`,{provider_id:e}],e=>[e.provider_id]),tK=er(et,"INVALID_STANDARD_OAUTH_PROVIDER_ID",e=>[400,`The standard OAuth provider with ID ${e} is not valid.`,{provider_id:e}],e=>[e.provider_id]),tq=er(et,"INVALID_AUTHORIZATION_CODE",()=>[400,"The given authorization code is invalid."],()=>[]),tV=er(et,"INVALID_APPLE_CREDENTIALS",()=>[400,"The Apple Sign In credentials could not be verified. Please try signing in again."],()=>[]),tH=er(et,"OAUTH_PROVIDER_ACCESS_DENIED",()=>[400,"The OAuth provider denied access to the user."],()=>[]),tW=er(et,"OAUTH_PROVIDER_TEMPORARILY_UNAVAILABLE",()=>[503,"The OAuth provider is temporarily unavailable. Please try signing in again."],()=>[]),tz=er(et,"CONTACT_CHANNEL_ALREADY_USED_FOR_AUTH_BY_SOMEONE_ELSE",(e,t,r=!1)=>[409,`This ${e} ${t?`"(${t})"`:""} is already used for authentication by another account${r?" but the email is not verified. Please login to your existing account with the method you used to sign up, and then verify your email to sign in with this login method.":"."}`,{type:e,contact_channel_value:t??null,would_work_if_email_was_verified:r}],e=>[e.type,e.contact_channel_value,e.would_work_if_email_was_verified??!1]),tJ=er(et,"INVALID_POLLING_CODE",e=>[400,"The polling code is invalid or does not exist.",e],e=>[e]),tX=er(et,"CLI_AUTH_ERROR",e=>[400,e],e=>[e.message]),tY=er(et,"CLI_AUTH_EXPIRED_ERROR",(e="CLI authentication request expired. Please try again.")=>[400,e],e=>[e.message]),tG=er(et,"CLI_AUTH_USED_ERROR",(e="This authentication token has already been used.")=>[400,e],e=>[e.message]),tQ=er(et,"API_KEY_NOT_VALID","inherit","inherit"),tZ=er(tQ,"API_KEY_EXPIRED",()=>[401,"API key has expired."],()=>[]),t0=er(tQ,"API_KEY_REVOKED",()=>[401,"API key has been revoked."],()=>[]),t1=er(tQ,"WRONG_API_KEY_TYPE",(e,t)=>[400,`This endpoint is for ${e} API keys, but a ${t} API key was provided.`,{expected_type:e,actual_type:t}],e=>[e.expected_type,e.actual_type]),t2=er(tQ,"API_KEY_NOT_FOUND",()=>[404,"API key not found."],()=>[]),t4=er(tQ,"PUBLIC_API_KEY_CANNOT_BE_REVOKED",()=>[400,"Public API keys cannot be revoked by the secretscanner endpoint."],()=>[]),t3=er(et,"PERMISSION_ID_ALREADY_EXISTS",e=>[400,`Permission with ID "${e}" already exists. Choose a different ID.`,{permission_id:e}],e=>[e.permission_id]),t6=er(et,"EMAIL_RENDERING_ERROR",e=>[400,`Failed to render email with theme: ${e}`,{error:e}],e=>[e.error]),t5=er(et,"TEMPLATE_SOURCE_REWRITE_ERROR",e=>[400,`Failed to rewrite template source: ${e}`,{error:e}],e=>[e.error]),t8=er(et,"REQUIRES_CUSTOM_EMAIL_SERVER",()=>[400,"This action requires a custom SMTP server. Please edit your email server configuration and try again."],()=>[]),t7=er(et,"EMAIL_CAPACITY_BOOST_ALREADY_ACTIVE",e=>[409,`Email capacity boost is already active until ${e}.`,{expires_at:e}],e=>[e.expires_at]),t9=er(et,"EMAIL_NOT_EDITABLE",(e,t)=>[400,`Email with ID "${e}" cannot be edited because it is in status "${t}". Only emails in PAUSED, PREPARING, RENDERING, RENDER_ERROR, SCHEDULED, QUEUED, or SERVER_ERROR status can be edited.`,{email_id:e,status:t}],e=>[e.email_id,e.status]),re=er(et,"ITEM_NOT_FOUND",e=>[404,`Item with ID "${e}" not found.`,{item_id:e}],e=>[e.item_id]),rt=er(et,"ITEM_CUSTOMER_TYPE_DOES_NOT_MATCH",(e,t,r,a)=>[400,`The ${a} with ID ${JSON.stringify(t)} is not a valid customer for the item with ID ${JSON.stringify(e)}. ${r?`The item is configured to only be available for ${r} customers, but the customer is a ${a}.`:"The item is missing a customer type field. Please make sure it is set up correctly in your project configuration."}`,{item_id:e,customer_id:t,item_customer_type:r??null,actual_customer_type:a}],e=>[e.item_id,e.customer_id,e.item_customer_type??void 0,e.actual_customer_type]),rr=er(et,"CUSTOMER_DOES_NOT_EXIST",e=>[400,`Customer with ID ${JSON.stringify(e)} does not exist.`,{customer_id:e}],e=>[e.customer_id]),ra=er(et,"SUBSCRIPTION_INVOICE_NOT_FOUND",e=>[404,`Subscription invoice with ID ${JSON.stringify(e)} does not exist.`,{subscription_invoice_id:e}],e=>[e.subscription_invoice_id]),rs=er(et,"ONE_TIME_PURCHASE_NOT_FOUND",e=>[404,`One-time purchase with ID ${JSON.stringify(e)} does not exist.`,{one_time_purchase_id:e}],e=>[e.one_time_purchase_id]),ri=er(et,"SUBSCRIPTION_ALREADY_REFUNDED",e=>[400,`Subscription with ID ${JSON.stringify(e)} was already refunded.`,{subscription_id:e}],e=>[e.subscription_id]),rn=er(et,"ONE_TIME_PURCHASE_ALREADY_REFUNDED",e=>[400,`One-time purchase with ID ${JSON.stringify(e)} was already refunded.`,{one_time_purchase_id:e}],e=>[e.one_time_purchase_id]),ro=er(et,"TEST_MODE_PURCHASE_NON_REFUNDABLE",()=>[400,"Test mode purchases are not refundable."],()=>[]),rl=er(et,"PRODUCT_DOES_NOT_EXIST",(e,t)=>[400,`Product with ID ${JSON.stringify(e)} ${"server_only"===t?"is marked as server-only and cannot be accessed client side.":"item_exists"===t?"does not exist, but an item with this ID exists.":"does not exist."}`,{product_id:e,context:t}],e=>[e.product_id,e.context]),rc=er(et,"PRODUCT_CUSTOMER_TYPE_DOES_NOT_MATCH",(e,t,r,a)=>[400,`The ${a} with ID ${JSON.stringify(t)} is not a valid customer for the inline product that has been passed in. ${r?`The product is configured to only be available for ${r} customers, but the customer is a ${a}.`:"The product is missing a customer type field. Please make sure it is set up correctly in your project configuration."}`,{product_id:e??null,customer_id:t,product_customer_type:r??null,actual_customer_type:a}],e=>[e.product_id??void 0,e.customer_id,e.product_customer_type??void 0,e.actual_customer_type]),rd=er(et,"PRODUCT_ALREADY_GRANTED",(e,t)=>[400,`Customer with ID ${JSON.stringify(t)} already owns product ${JSON.stringify(e)}.`,{product_id:e,customer_id:t}],e=>[e.product_id,e.customer_id]),ru=er(et,"ITEM_QUANTITY_INSUFFICIENT_AMOUNT",(e,t,r)=>[400,`The item with ID ${JSON.stringify(e)} has an insufficient quantity for the customer with ID ${JSON.stringify(t)}. An attempt was made to charge ${r} credits.`,{item_id:e,customer_id:t,quantity:r}],e=>[e.item_id,e.customer_id,e.quantity]),rp=er(et,"STRIPE_ACCOUNT_INFO_NOT_FOUND",()=>[404,"Stripe account information not found. Please make sure the user has onboarded with Stripe."],()=>[]),rh=er(et,"ANALYTICS_QUERY_TIMEOUT",e=>[400,`The query timed out. Please try again with a shorter query or increase the timeout. Timeout was ${e}ms.`,{timeout_ms:e}],e=>[e.timeout_ms]),rm=er(et,"ANALYTICS_QUERY_ERROR",e=>[400,`${e}`,{error:e}],e=>[e.error]),rf=er(et,"ANALYTICS_NOT_ENABLED",()=>[400,"Analytics is not enabled for this project."],()=>[]),rg={CannotDeleteCurrentSession:eF,UnsupportedError:ea,BodyParsingError:es,SchemaError:ei,AllOverloadsFailed:en,ProjectAuthenticationError:eo,PermissionIdAlreadyExists:t3,CliAuthError:tX,CliAuthExpiredError:tY,CliAuthUsedError:tG,InvalidProjectAuthentication:el,ProjectKeyWithoutAccessType:ec,InvalidAccessType:ed,AccessTypeWithoutProjectId:eu,AccessTypeRequired:ep,CannotGetOwnUserWithoutUser:eq,InsufficientAccessType:eh,InvalidPublishableClientKey:em,InvalidSecretServerKey:ef,InvalidSuperSecretAdminKey:eg,InvalidAdminAccessToken:ey,UnparsableAdminAccessToken:ev,AdminAccessTokenExpired:e_,InvalidProjectForAdminAccessToken:ew,AdminAccessTokenIsNotAdmin:eb,ProjectAuthenticationRequired:ek,ClientAuthenticationRequired:eC,PublishableClientKeyRequiredForProject:eT,ServerAuthenticationRequired:eS,ClientOrServerAuthenticationRequired:ex,ClientOrAdminAuthenticationRequired:eA,ClientOrServerOrAdminAuthenticationRequired:eE,AdminAuthenticationRequired:eI,ExpectedInternalProject:eP,SessionAuthenticationError:eR,InvalidSessionAuthentication:eO,InvalidAccessToken:eN,UnparsableAccessToken:eU,AccessTokenExpired:ej,InvalidProjectForAccessToken:eD,RefreshTokenError:eL,ProviderRejected:eM,RefreshTokenNotFoundOrExpired:e$,UserWithEmailAlreadyExists:eB,EmailNotVerified:eK,UserIdDoesNotExist:eV,UserNotFound:eH,RestrictedUserNotAllowed:eW,ApiKeyNotFound:t2,PublicApiKeyCannotBeRevoked:t4,ProjectNotFound:ez,CurrentProjectNotFound:eJ,BranchDoesNotExist:eX,SignUpNotEnabled:eY,SignUpRejected:eG,BotChallengeRequired:eQ,BotChallengeFailed:eZ,PasswordAuthenticationNotEnabled:e0,PasskeyAuthenticationNotEnabled:e4,AnonymousAccountsNotEnabled:e3,AnonymousAuthenticationNotAllowed:e6,EmailPasswordMismatch:e5,RedirectUrlNotWhitelisted:e8,PasswordRequirementsNotMet:e7,PasswordTooShort:e9,PasswordTooLong:te,UserDoesNotHavePassword:tt,VerificationCodeError:tr,VerificationCodeNotFound:ta,VerificationCodeExpired:ts,VerificationCodeAlreadyUsed:ti,VerificationCodeMaxAttemptsReached:tn,PasswordConfirmationMismatch:to,EmailAlreadyVerified:tl,EmailNotAssociatedWithUser:tc,EmailIsNotPrimaryEmail:td,PasskeyRegistrationFailed:tu,PasskeyWebAuthnError:tp,PasskeyAuthenticationFailed:th,PermissionNotFound:tm,PermissionScopeMismatch:tf,ContainedPermissionNotFound:tg,TeamNotFound:ty,TeamMembershipNotFound:tv,TeamInvitationRestrictedUserNotAllowed:t_,EmailTemplateAlreadyExists:tw,OAuthConnectionNotConnectedToUser:tb,OAuthConnectionAlreadyConnectedToAnotherUser:tk,OAuthConnectionDoesNotHaveRequiredScope:tC,OAuthAccessTokenNotAvailable:tT,OAuthExtraScopeNotAvailableWithSharedOAuthKeys:tS,OAuthAccessTokenNotAvailableWithSharedOAuthKeys:tx,InvalidOAuthClientIdOrSecret:tA,InvalidScope:tE,UserAlreadyConnectedToAnotherOAuthConnection:tI,OuterOAuthTimeout:tP,OAuthProviderNotFoundOrNotEnabled:tR,AppleBundleIdNotConfigured:tO,OAuthProviderAccountIdAlreadyUsedForSignIn:tN,MultiFactorAuthenticationRequired:tU,InvalidTotpCode:tj,UserAuthenticationRequired:tD,TeamMembershipAlreadyExists:tL,ProjectPermissionRequired:t$,TeamPermissionRequired:tF,InvalidSharedOAuthProviderId:tB,InvalidStandardOAuthProviderId:tK,InvalidAuthorizationCode:tq,InvalidAppleCredentials:tV,TeamPermissionNotFound:tM,OAuthProviderAccessDenied:tH,OAuthProviderTemporarilyUnavailable:tW,ContactChannelAlreadyUsedForAuthBySomeoneElse:tz,InvalidPollingCodeError:tJ,ApiKeyNotValid:tQ,ApiKeyExpired:tZ,ApiKeyRevoked:t0,WrongApiKeyType:t1,EmailRenderingError:t6,TemplateSourceRewriteError:t5,RequiresCustomEmailServer:t8,EmailCapacityBoostAlreadyActive:t7,EmailNotEditable:t9,ItemNotFound:re,ItemCustomerTypeDoesNotMatch:rt,CustomerDoesNotExist:rr,ProductDoesNotExist:rl,ProductCustomerTypeDoesNotMatch:rc,ProductAlreadyGranted:rd,SubscriptionInvoiceNotFound:ra,OneTimePurchaseNotFound:rs,SubscriptionAlreadyRefunded:ri,OneTimePurchaseAlreadyRefunded:rn,TestModePurchaseNonRefundable:ro,ItemQuantityInsufficientAmount:ru,StripeAccountInfoNotFound:rp,DefaultPaymentMethodRequired:er(et,"DEFAULT_PAYMENT_METHOD_REQUIRED",(e,t)=>[400,"No default payment method is set for this customer.",{customer_type:e,customer_id:t}],e=>[e.customer_type,e.customer_id]),NewPurchasesBlocked:er(et,"NEW_PURCHASES_BLOCKED",()=>[403,"New purchases are currently blocked for this project. Please contact support for more information."],()=>[]),DataVaultStoreDoesNotExist:e1,DataVaultStoreHashedKeyDoesNotExist:e2,AnalyticsQueryTimeout:rh,AnalyticsQueryError:rm,AnalyticsNotEnabled:rf},ry=new Set;for(let[e,t]of Object.entries(rg)){if(ry.has(t.errorCode))throw Error(`Duplicate known error code: ${t.errorCode}`);ry.add(t.errorCode)}e.s(["KnownError",0,et,"KnownErrors",0,rg],27198),e.s(["StackServerInterface",()=>ng],15557),e.s(["AccessToken",()=>sG,"InternalSession",()=>sZ],8706),e.s(["accessTokenPayloadSchema",()=>sD,"intervalSchema",()=>sh,"passwordSchema",()=>sp,"strictEmailSchema",()=>s_,"yupObject",()=>sn,"yupString",()=>a9],47953);var rv=e.i(37472),r_=e.i(3873),rw=e.i(1439);let rb=Object.prototype.toString,rk=Error.prototype.toString,rC=RegExp.prototype.toString,rT="u">typeof Symbol?Symbol.prototype.toString:()=>"",rS=/^Symbol\((.*)\)(.*)$/;function rx(e,t=!1){if(null==e||!0===e||!1===e)return""+e;let r=typeof e;if("number"===r)return e!=+e?"NaN":0===e&&1/e<0?"-0":""+e;if("string"===r)return t?`"${e}"`:e;if("function"===r)return"[Function "+(e.name||"anonymous")+"]";if("symbol"===r)return rT.call(e).replace(rS,"Symbol($1)");let a=rb.call(e).slice(8,-1);return"Date"===a?isNaN(e.getTime())?""+e:e.toISOString(e):"Error"===a||e instanceof Error?"["+rk.call(e)+"]":"RegExp"===a?rC.call(e):null}function rA(e,t){let r=rx(e,t);return null!==r?r:JSON.stringify(e,function(e,r){let a=rx(this[e],t);return null!==a?a:r},2)}function rE(e){return null==e?[]:[].concat(e)}let rI=/\$\{\s*(\w+)\s*\}/g;t=Symbol.toStringTag;class rP{constructor(e,r,a,s){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[t]="Error",this.name="ValidationError",this.value=r,this.path=a,this.type=s,this.errors=[],this.inner=[],rE(e).forEach(e=>{if(rR.isError(e)){this.errors.push(...e.errors);let t=e.inner.length?e.inner:[e];this.inner.push(...t)}else this.errors.push(e)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}r=Symbol.hasInstance,a=Symbol.toStringTag;class rR extends Error{static formatError(e,t){let r=t.label||t.path||"this";return(t=Object.assign({},t,{path:r,originalPath:t.path}),"string"==typeof e)?e.replace(rI,(e,r)=>rA(t[r])):"function"==typeof e?e(t):e}static isError(e){return e&&"ValidationError"===e.name}constructor(e,t,r,s,i){const n=new rP(e,t,r,s);if(i)return n;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[a]="Error",this.name=n.name,this.message=n.message,this.type=n.type,this.value=n.value,this.path=n.path,this.errors=n.errors,this.inner=n.inner,Error.captureStackTrace&&Error.captureStackTrace(this,rR)}static[r](e){return rP[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let rO={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:r,originalValue:a})=>{let s=null!=a&&a!==r?` (cast from the value \`${rA(a,!0)}\`).`:".";return"mixed"!==t?`${e} must be a \`${t}\` type, but the final value was: \`${rA(r,!0)}\``+s:`${e} must match the configured type. The validated value was: \`${rA(r,!0)}\``+s}},rN={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},rU={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rj={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},rD={isValue:"${path} field must be ${value}"},rL={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},r$={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},rF={notType:e=>{let{path:t,value:r,spec:a}=e,s=a.types.length;if(Array.isArray(r)){if(r.length<s)return`${t} tuple value has too few items, expected a length of ${s} but got ${r.length} for value: \`${rA(r,!0)}\``;if(r.length>s)return`${t} tuple value has too many items, expected a length of ${s} but got ${r.length} for value: \`${rA(r,!0)}\``}return rR.formatError(rO.notType,e)}};Object.assign(Object.create(null),{mixed:rO,string:rN,number:rU,date:rj,object:rL,array:r$,boolean:rD,tuple:rF});let rM=e=>e&&e.__isYupSchema__;class rB{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:a,otherwise:s}=t,i="function"==typeof r?r:(...e)=>e.every(e=>e===r);return new rB(e,(e,t)=>{var r;let n=i(...e)?a:s;return null!=(r=null==n?void 0:n(t))?r:t})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(e=>e.getValue(null==t?void 0:t.value,null==t?void 0:t.parent,null==t?void 0:t.context)),a=this.fn(r,e,t);if(void 0===a||a===e)return e;if(!rM(a))throw TypeError("conditions must return a schema object");return a.resolve(t)}}class rK{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,"string"!=typeof e)throw TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),""===e)throw TypeError("ref must be a non-empty string");this.isContext="$"===this.key[0],this.isValue="."===this.key[0],this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?"$":this.isValue?".":"";this.path=this.key.slice(r.length),this.getter=this.path&&(0,rv.getter)(this.path,!0),this.map=t.map}getValue(e,t,r){let a=this.isContext?r:this.isValue?e:t;return this.getter&&(a=this.getter(a||{})),this.map&&(a=this.map(a)),a}cast(e,t){return this.getValue(e,null==t?void 0:t.parent,null==t?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}function rq(e){function t({value:r,path:a="",options:s,originalValue:i,schema:n},o,l){let c,{name:d,test:u,params:p,message:h,skipAbsent:m}=e,{parent:f,context:g,abortEarly:y=n.spec.abortEarly,disableStackTrace:v=n.spec.disableStackTrace}=s,_={value:r,parent:f,context:g};function w(e={}){let t=rV(Object.assign({value:r,originalValue:i,label:n.spec.label,path:e.path||a,spec:n.spec,disableStackTrace:e.disableStackTrace||v},p,e.params),_),s=new rR(rR.formatError(e.message||h,t),r,t.path,e.type||d,t.disableStackTrace);return s.params=t,s}let b=y?o:l,k={path:a,parent:f,type:d,from:s.from,createError:w,resolve:e=>rH(e,_),options:s,originalValue:i,schema:n},C=e=>{rR.isError(e)?b(e):e?l(null):b(w())},T=e=>{rR.isError(e)?b(e):o(e)};if(m&&null==r)return C(!0);try{var S;if(c=u.call(k,r,k),"function"==typeof(null==(S=c)?void 0:S.then)){if(s.sync)throw Error(`Validation test of type: "${k.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(c).then(C,T)}}catch(e){T(e);return}C(c)}return t.OPTIONS=e,t}function rV(e,t){if(!e)return e;for(let r of Object.keys(e))e[r]=rH(e[r],t);return e}function rH(e,t){return rK.isRef(e)?e.getValue(t.value,t.parent,t.context):e}function rW(e,t,r,a=r){let s,i,n;return t?((0,rv.forEach)(t,(o,l,c)=>{let d=l?o.slice(1,o.length-1):o,u="tuple"===(e=e.resolve({context:a,parent:s,value:r})).type,p=c?parseInt(d,10):0;if(e.innerType||u){if(u&&!c)throw Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${n}" must contain an index to the tuple element, e.g. "${n}[0]"`);if(r&&p>=r.length)throw Error(`Yup.reach cannot resolve an array item at index: ${o}, in the path: ${t}. because there is no value at that index. `);s=r,r=r&&r[p],e=u?e.spec.types[p]:e.innerType}if(!c){if(!e.fields||!e.fields[d])throw Error(`The schema does not contain the path: ${t}. (failed at: ${n} which is a type: "${e.type}")`);s=r,r=r&&r[d],e=e.fields[d]}i=d,n=l?"["+o+"]":"."+o}),{schema:e,parent:s,parentPath:i}):{parent:s,parentPath:t,schema:e}}function rz(e,t,r,a){return rW(e,t,r,a).schema}rK.prototype.__isYupRef=!0;class rJ extends Set{describe(){let e=[];for(let t of this.values())e.push(rK.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(let r of this.values())t.push(e(r));return t}clone(){return new rJ(this.values())}merge(e,t){let r=this.clone();return e.forEach(e=>r.add(e)),t.forEach(e=>r.delete(e)),r}}function rX(e,t=new Map){let r;if(rM(e)||!e||"object"!=typeof e)return e;if(t.has(e))return t.get(e);if(e instanceof Date)r=new Date(e.getTime()),t.set(e,r);else if(e instanceof RegExp)r=new RegExp(e),t.set(e,r);else if(Array.isArray(e)){r=Array(e.length),t.set(e,r);for(let a=0;a<e.length;a++)r[a]=rX(e[a],t)}else if(e instanceof Map)for(let[a,s]of(r=new Map,t.set(e,r),e.entries()))r.set(a,rX(s,t));else if(e instanceof Set)for(let a of(r=new Set,t.set(e,r),e))r.add(rX(a,t));else if(e instanceof Object)for(let[a,s]of(r={},t.set(e,r),Object.entries(e)))r[a]=rX(s,t);else throw Error(`Unable to clone ${e}`);return r}function rY(e,t){var r;if(!(null!=(r=e.inner)&&r.length)&&e.errors.length){let r;return r=t?`${t}.${e.path}`:e.path,e.errors.map(e=>({message:e,path:function(e){if(!(null!=e&&e.length))return;let t=[],r="",a=!1,s=!1;for(let i=0;i<e.length;i++){let n=e[i];if("["===n&&!s){r&&(t.push(...r.split(".").filter(Boolean)),r=""),a=!0;continue}if("]"===n&&!s){r&&(/^\d+$/.test(r)?t.push(r):t.push(r.replace(/^"|"$/g,"")),r=""),a=!1;continue}if('"'===n){s=!s;continue}if("."===n&&!a&&!s){r&&(t.push(r),r="");continue}r+=n}return r&&t.push(...r.split(".").filter(Boolean)),t}(r)}))}let a=t?`${t}.${e.path}`:e.path;return e.inner.flatMap(e=>rY(e,a))}class rG{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new rJ,this._blacklist=new rJ,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(rO.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},null==e?void 0:e.spec),this.withMutation(e=>{e.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;let t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=rX(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(0===e.length)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&"mixed"!==this.type)throw TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=e.clone(),r=Object.assign({},this.spec,t.spec);return t.spec=r,t.internalTests=Object.assign({},this.internalTests,t.internalTests),t._whitelist=this._whitelist.merge(e._whitelist,e._blacklist),t._blacklist=this._blacklist.merge(e._blacklist,e._whitelist),t.tests=this.tests,t.exclusiveTests=this.exclusiveTests,t.withMutation(t=>{e.tests.forEach(e=>{t.test(e.OPTIONS)})}),t.transforms=[...this.transforms,...t.transforms],t}isType(e){return null==e?!!this.spec.nullable&&null===e||!!this.spec.optional&&void 0===e:this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;(t=t.clone()).conditions=[],t=(t=r.reduce((t,r)=>r.resolve(t,e),t)).resolve(e)}return t}resolveOptions(e){var t,r,a,s;return Object.assign({},e,{from:e.from||[],strict:null!=(t=e.strict)?t:this.spec.strict,abortEarly:null!=(r=e.abortEarly)?r:this.spec.abortEarly,recursive:null!=(a=e.recursive)?a:this.spec.recursive,disableStackTrace:null!=(s=e.disableStackTrace)?s:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({},t,{value:e})),a="ignore-optionality"===t.assert,s=r._cast(e,t);if(!1!==t.assert&&!r.isType(s)){if(a&&null==s)return s;let i=rA(e),n=rA(s);throw TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${i} 
`+(n!==i?`result of cast: ${n}`:""))}return s}_cast(e,t){let r=void 0===e?e:this.transforms.reduce((r,a)=>a.call(this,r,e,this,t),e);return void 0===r&&(r=this.getDefault(t)),r}_validate(e,t={},r,a){let{path:s,originalValue:i=e,strict:n=this.spec.strict}=t,o=e;n||(o=this._cast(o,Object.assign({assert:!1},t)));let l=[];for(let e of Object.values(this.internalTests))e&&l.push(e);this.runTests({path:s,value:o,originalValue:i,options:t,tests:l},r,e=>{if(e.length)return a(e,o);this.runTests({path:s,value:o,originalValue:i,options:t,tests:this.tests},r,a)})}runTests(e,t,r){let a=!1,{tests:s,value:i,originalValue:n,path:o,options:l}=e,c=e=>{a||(a=!0,t(e,i))},d=e=>{a||(a=!0,r(e,i))},u=s.length,p=[];if(!u)return d([]);let h={value:i,originalValue:n,path:o,options:l,schema:this};for(let e=0;e<s.length;e++)(0,s[e])(h,c,function(e){e&&(Array.isArray(e)?p.push(...e):p.push(e)),--u<=0&&d(p)})}asNestedTest({key:e,index:t,parent:r,parentPath:a,originalParent:s,options:i}){let n=null!=e?e:t;if(null==n)throw TypeError("Must include `key` or `index` for nested validations");let o="number"==typeof n,l=r[n],c=Object.assign({},i,{strict:!0,parent:r,value:l,originalValue:s[n],key:void 0,[o?"index":"key"]:n,path:o||n.includes(".")?`${a||""}[${o?n:`"${n}"`}]`:(a?`${a}.`:"")+e});return(e,t,r)=>this.resolve(c)._validate(l,c,t,r)}validate(e,t){var r;let a=this.resolve(Object.assign({},t,{value:e})),s=null!=(r=null==t?void 0:t.disableStackTrace)?r:a.spec.disableStackTrace;return new Promise((r,i)=>a._validate(e,t,(e,t)=>{rR.isError(e)&&(e.value=t),i(e)},(e,t)=>{e.length?i(new rR(e,t,void 0,void 0,s)):r(t)}))}validateSync(e,t){var r;let a,s=this.resolve(Object.assign({},t,{value:e})),i=null!=(r=null==t?void 0:t.disableStackTrace)?r:s.spec.disableStackTrace;return s._validate(e,Object.assign({},t,{sync:!0}),(e,t)=>{throw rR.isError(e)&&(e.value=t),e},(t,r)=>{if(t.length)throw new rR(t,e,void 0,void 0,i);a=r}),a}isValid(e,t){return this.validate(e,t).then(()=>!0,e=>{if(rR.isError(e))return!1;throw e})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(e){if(rR.isError(e))return!1;throw e}}_getDefault(e){let t=this.spec.default;return null==t?t:"function"==typeof t?t.call(this,e):rX(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return 0==arguments.length?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){let r=this.clone({nullable:e});return r.internalTests.nullable=rq({message:t,name:"nullable",test(e){return null!==e||this.schema.spec.nullable}}),r}optionality(e,t){let r=this.clone({optional:e});return r.internalTests.optionality=rq({message:t,name:"optionality",test(e){return void 0!==e||this.schema.spec.optional}}),r}optional(){return this.optionality(!0)}defined(e=rO.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=rO.notNull){return this.nullability(!1,e)}required(e=rO.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(void 0===(t=1===e.length?"function"==typeof e[0]?{test:e[0]}:e[0]:2===e.length?{name:e[0],test:e[1]}:{name:e[0],message:e[1],test:e[2]}).message&&(t.message=rO.default),"function"!=typeof t.test)throw TypeError("`test` is a required parameters");let r=this.clone(),a=rq(t),s=t.exclusive||t.name&&!0===r.exclusiveTests[t.name];if(t.exclusive&&!t.name)throw TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(e=>(e.OPTIONS.name!==t.name||!s&&e.OPTIONS.test!==a.OPTIONS.test)&&!0),r.tests.push(a),r}when(e,t){Array.isArray(e)||"string"==typeof e||(t=e,e=".");let r=this.clone(),a=rE(e).map(e=>new rK(e));return a.forEach(e=>{e.isSibling&&r.deps.push(e.key)}),r.conditions.push("function"==typeof t?new rB(a,t):rB.fromOptions(a,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=rq({message:e,name:"typeError",skipAbsent:!0,test(e){return!!this.schema._typeCheck(e)||this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=rO.oneOf){let r=this.clone();return e.forEach(e=>{r._whitelist.add(e),r._blacklist.delete(e)}),r.internalTests.whiteList=rq({message:t,name:"oneOf",skipAbsent:!0,test(e){let t=this.schema._whitelist,r=t.resolveAll(this.resolve);return!!r.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:r}})}}),r}notOneOf(e,t=rO.notOneOf){let r=this.clone();return e.forEach(e=>{r._blacklist.add(e),r._whitelist.delete(e)}),r.internalTests.blacklist=rq({message:t,name:"notOneOf",test(e){let t=this.schema._blacklist,r=t.resolveAll(this.resolve);return!r.includes(e)||this.createError({params:{values:Array.from(t).join(", "),resolved:r}})}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){let t=(e?this.resolve(e):this).clone(),{label:r,meta:a,optional:s,nullable:i}=t.spec;return{meta:a,label:r,optional:s,nullable:i,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.filter((e,t,r)=>r.findIndex(t=>t.OPTIONS.name===e.OPTIONS.name)===t).map(t=>{let r=t.OPTIONS.params&&e?rV(Object.assign({},t.OPTIONS.params),e):t.OPTIONS.params;return{name:t.OPTIONS.name,params:r}})}}get"~standard"(){let e=this;return{version:1,vendor:"yup",async validate(t){try{return{value:await e.validate(t,{abortEarly:!1})}}catch(e){if(e instanceof rR)return{issues:rY(e)};throw e}}}}}for(let e of(rG.prototype.__isYupSchema__=!0,["validate","validateSync"]))rG.prototype[`${e}At`]=function(t,r,a={}){let{parent:s,parentPath:i,schema:n}=rW(this,t,r,a.context);return n[e](s&&s[i],Object.assign({},a,{parent:s,path:t}))};for(let e of["equals","is"])rG.prototype[e]=rG.prototype.oneOf;for(let e of["not","nope"])rG.prototype[e]=rG.prototype.notOneOf;let rQ=()=>!0;function rZ(e){return new r0(e)}class r0 extends rG{constructor(e){super("function"==typeof e?{type:"mixed",check:e}:Object.assign({type:"mixed",check:rQ},e))}}function r1(){return new r2}rZ.prototype=r0.prototype;class r2 extends rG{constructor(){super({type:"boolean",check:e=>(e instanceof Boolean&&(e=e.valueOf()),"boolean"==typeof e)}),this.withMutation(()=>{this.transform((e,t)=>{if(this.spec.coerce&&!this.isType(e)){if(/^(true|1)$/i.test(String(e)))return!0;if(/^(false|0)$/i.test(String(e)))return!1}return e})})}isTrue(e=rD.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"true"},test:e=>null==e||!0===e})}isFalse(e=rD.isValue){return this.test({message:e,name:"is-value",exclusive:!0,params:{value:"false"},test:e=>null==e||!1===e})}default(e){return super.default(e)}defined(e){return super.defined(e)}optional(){return super.optional()}required(e){return super.required(e)}notRequired(){return super.notRequired()}nullable(){return super.nullable()}nonNullable(e){return super.nonNullable(e)}strip(e){return super.strip(e)}}r1.prototype=r2.prototype;let r4=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function r3(e){var t,r;let a=r4.exec(e);return a?{year:r6(a[1]),month:r6(a[2],1)-1,day:r6(a[3],1),hour:r6(a[4]),minute:r6(a[5]),second:r6(a[6]),millisecond:a[7]?r6(a[7].substring(0,3)):0,precision:null!=(t=null==(r=a[7])?void 0:r.length)?t:void 0,z:a[8]||void 0,plusMinus:a[9]||void 0,hourOffset:r6(a[10]),minuteOffset:r6(a[11])}:null}function r6(e,t=0){return Number(e)||t}let r5=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,r8=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,r7=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,r9=RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"),ae=e=>null==e||e===e.trim(),at=({}).toString();function ar(){return new aa}class aa extends rG{constructor(){super({type:"string",check:e=>(e instanceof String&&(e=e.valueOf()),"string"==typeof e)}),this.withMutation(()=>{this.transform((e,t)=>{if(!this.spec.coerce||this.isType(e)||Array.isArray(e))return e;let r=null!=e&&e.toString?e.toString():e;return r===at?e:r})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||rO.required,name:"required",skipAbsent:!0,test:e=>!!e.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(e=>"required"!==e.OPTIONS.name),e))}length(e,t=rN.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t=rN.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t=rN.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}matches(e,t){let r,a,s=!1;return t&&("object"==typeof t?{excludeEmptyString:s=!1,message:r,name:a}=t:r=t),this.test({name:a||"matches",message:r||rN.matches,params:{regex:e},skipAbsent:!0,test:t=>""===t&&s||-1!==t.search(e)})}email(e=rN.email){return this.matches(r5,{name:"email",message:e,excludeEmptyString:!0})}url(e=rN.url){return this.matches(r8,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=rN.uuid){return this.matches(r7,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t,r,a="";return e&&("object"==typeof e?{message:a="",allowOffset:t=!1,precision:r}=e:a=e),this.matches(r9,{name:"datetime",message:a||rN.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:a||rN.datetime_offset,params:{allowOffset:t},skipAbsent:!0,test:e=>{if(!e||t)return!0;let r=r3(e);return!!r&&!!r.z}}).test({name:"datetime_precision",message:a||rN.datetime_precision,params:{precision:r},skipAbsent:!0,test:e=>{if(!e||void 0==r)return!0;let t=r3(e);return!!t&&t.precision===r}})}ensure(){return this.default("").transform(e=>null===e?"":e)}trim(e=rN.trim){return this.transform(e=>null!=e?e.trim():e).test({message:e,name:"trim",test:ae})}lowercase(e=rN.lowercase){return this.transform(e=>null==e?e:e.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toLowerCase()})}uppercase(e=rN.uppercase){return this.transform(e=>null==e?e:e.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:e=>null==e||e===e.toUpperCase()})}}function as(){return new ai}ar.prototype=aa.prototype;class ai extends rG{constructor(){super({type:"number",check(e){let t;return e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&(t=e)==+t}}),this.withMutation(()=>{this.transform((e,t)=>{if(!this.spec.coerce)return e;let r=e;if("string"==typeof r){if(""===(r=r.replace(/\s/g,"")))return NaN;r*=1}return this.isType(r)||null===r?r:parseFloat(r)})})}min(e,t=rU.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t>=this.resolve(e)}})}max(e,t=rU.max){return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(t){return t<=this.resolve(e)}})}lessThan(e,t=rU.lessThan){return this.test({message:t,name:"max",exclusive:!0,params:{less:e},skipAbsent:!0,test(t){return t<this.resolve(e)}})}moreThan(e,t=rU.moreThan){return this.test({message:t,name:"min",exclusive:!0,params:{more:e},skipAbsent:!0,test(t){return t>this.resolve(e)}})}positive(e=rU.positive){return this.moreThan(0,e)}negative(e=rU.negative){return this.lessThan(0,e)}integer(e=rU.integer){return this.test({name:"integer",message:e,skipAbsent:!0,test:e=>Number.isInteger(e)})}truncate(){return this.transform(e=>null==e?e:0|e)}round(e){var t;let r=["ceil","floor","round","trunc"];if("trunc"===(e=(null==(t=e)?void 0:t.toLowerCase())||"round"))return this.truncate();if(-1===r.indexOf(e.toLowerCase()))throw TypeError("Only valid options for round() are: "+r.join(", "));return this.transform(t=>null==t?t:Math[e](t))}}as.prototype=ai.prototype;let an=new Date("");function ao(){return new al}class al extends rG{constructor(){super({type:"date",check:e=>"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())}),this.withMutation(()=>{this.transform((e,t)=>!this.spec.coerce||this.isType(e)||null===e?e:isNaN(e=function(e){let t=r3(e);if(!t)return Date.parse?Date.parse(e):NaN;if(void 0===t.z&&void 0===t.plusMinus)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let r=0;return"Z"!==t.z&&void 0!==t.plusMinus&&(r=60*t.hourOffset+t.minuteOffset,"+"===t.plusMinus&&(r=0-r)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+r,t.second,t.millisecond)}(e))?al.INVALID_DATE:new Date(e))})}prepareParam(e,t){let r;if(rK.isRef(e))r=e;else{let a=this.cast(e);if(!this._typeCheck(a))throw TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=a}return r}min(e,t=rj.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(e){return e>=this.resolve(r)}})}max(e,t=rj.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(e){return e<=this.resolve(r)}})}}function ac(e,t){let r=1/0;return e.some((e,a)=>{var s;if(null!=(s=t.path)&&s.includes(e))return r=a,!0}),r}function ad(e){return(t,r)=>ac(e,t)-ac(e,r)}al.INVALID_DATE=an,ao.prototype=al.prototype,ao.INVALID_DATE=an;let au=(e,t,r)=>{if("string"!=typeof e)return e;let a=e;try{a=JSON.parse(e)}catch(e){}return r.isType(a)?a:e},ap=e=>"[object Object]"===Object.prototype.toString.call(e);function ah(e,t){let r=Object.keys(e.fields);return Object.keys(t).filter(e=>-1===r.indexOf(e))}let am=ad([]);function af(e){return new ag(e)}class ag extends rG{constructor(e){super({type:"object",check:e=>ap(e)||"function"==typeof e}),this.fields=Object.create(null),this._sortErrors=am,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let a=super._cast(e,t);if(void 0===a)return this.getDefault(t);if(!this._typeCheck(a))return a;let s=this.fields,i=null!=(r=t.stripUnknown)?r:this.spec.noUnknown,n=[].concat(this._nodes,Object.keys(a).filter(e=>!this._nodes.includes(e))),o={},l=Object.assign({},t,{parent:o,__validating:t.__validating||!1}),c=!1;for(let e of n){let r=s[e],n=e in a,d=a[e];if(r){let s;l.path=(t.path?`${t.path}.`:"")+e;let i=(r=r.resolve({value:d,context:t.context,parent:o}))instanceof rG?r.spec:void 0,n=null==i?void 0:i.strict;if(null!=i&&i.strip){c=c||e in a;continue}void 0!==(s=t.__validating&&n?d:r.cast(d,l))&&(o[e]=s)}else n&&!i&&(o[e]=d);(n!==e in o||o[e]!==d)&&(c=!0)}return c?o:a}_validate(e,t={},r,a){let{from:s=[],originalValue:i=e,recursive:n=this.spec.recursive}=t;t.from=[{schema:this,value:i},...s],t.__validating=!0,t.originalValue=i,super._validate(e,t,r,(e,s)=>{if(!n||!ap(s))return void a(e,s);i=i||s;let o=[];for(let e of this._nodes){let r=this.fields[e];!r||rK.isRef(r)||o.push(r.asNestedTest({options:t,key:e,parent:s,parentPath:t.path,originalParent:i}))}this.runTests({tests:o,value:s,originalValue:i,options:t},r,t=>{a(t.sort(this._sortErrors).concat(e),s)})})}clone(e){let t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[e,t]of Object.entries(this.fields)){let a=r[e];r[e]=void 0===a?t:a}return t.withMutation(t=>t.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var a;let s=this.fields[r],i=e;null!=(a=i)&&a.value&&(i=Object.assign({},i,{parent:i.value,value:i.value[r]})),t[r]=s&&"getDefault"in s?s.getDefault(i):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=function(e,t=[]){let r=[],a=new Set,s=new Set(t.map(([e,t])=>`${e}-${t}`));function i(e,t){let i=(0,rv.split)(e)[0];a.add(i),s.has(`${t}-${i}`)||r.push([t,i])}for(let t of Object.keys(e)){let r=e[t];a.add(t),rK.isRef(r)&&r.isSibling?i(r.path,t):rM(r)&&"deps"in r&&r.deps.forEach(e=>i(e,t))}return rw.default.array(Array.from(a),r).reverse()}(e,t),r._sortErrors=ad(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let a=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),a=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),a)})}partial(){let e={};for(let[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return function e(t){if("fields"in t){let r={};for(let[a,s]of Object.entries(t.fields))r[a]=e(s);return t.setFields(r)}if("array"===t.type){let r=t.optional();return r.innerType&&(r.innerType=e(r.innerType)),r}return"tuple"===t.type?t.optional().clone({types:t.spec.types.map(e)}):"optional"in t?t.optional():t}(this)}pick(e){let t={};for(let r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([t,r])=>e.includes(t)&&e.includes(r)))}omit(e){let t=[];for(let r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let a=(0,rv.getter)(e,!0);return this.transform(s=>{if(!s)return s;let i=s;return((e,t)=>{let r=[...(0,rv.normalizePath)(t)];if(1===r.length)return r[0]in e;let a=r.pop(),s=(0,rv.getter)((0,rv.join)(r),!0)(e);return!!(s&&a in s)})(s,e)&&(i=Object.assign({},s),r||delete i[e],i[t]=a(s)),i})}json(){return this.transform(au)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||rL.exact,test(e){if(null==e)return!0;let t=ah(this.schema,e);return 0===t.length||this.createError({params:{properties:t.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=rL.noUnknown){"boolean"!=typeof e&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(t){if(null==t)return!0;let r=ah(this.schema,t);return!e||0===r.length||this.createError({params:{unknown:r.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=rL.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;let r={};for(let a of Object.keys(t))r[e(a)]=t[a];return r})}camelCase(){return this.transformKeys(r_.camelCase)}snakeCase(){return this.transformKeys(r_.snakeCase)}constantCase(){return this.transformKeys(e=>(0,r_.snakeCase)(e).toUpperCase())}describe(e){let t=(e?this.resolve(e):this).clone(),r=super.describe(e);for(let[s,i]of(r.fields={},Object.entries(t.fields))){var a;let t=e;null!=(a=t)&&a.value&&(t=Object.assign({},t,{parent:t.value,value:t.value[s]})),r.fields[s]=i.describe(t)}return r}}function ay(e){return new av(e)}af.prototype=ag.prototype;class av extends rG{constructor(e){super({type:"array",spec:{types:e},check:e=>Array.isArray(e)}),this.innerType=void 0,this.innerType=e}_cast(e,t){let r=super._cast(e,t);if(!this._typeCheck(r)||!this.innerType)return r;let a=!1,s=r.map((e,s)=>{let i=this.innerType.cast(e,Object.assign({},t,{path:`${t.path||""}[${s}]`,parent:r,originalValue:e,value:e,index:s}));return i!==e&&(a=!0),i});return a?s:r}_validate(e,t={},r,a){var s;let i=this.innerType,n=null!=(s=t.recursive)?s:this.spec.recursive;null!=t.originalValue&&t.originalValue,super._validate(e,t,r,(s,o)=>{var l,c;if(!n||!i||!this._typeCheck(o))return void a(s,o);let d=Array(o.length);for(let r=0;r<o.length;r++)d[r]=i.asNestedTest({options:t,index:r,parent:o,parentPath:t.path,originalParent:null!=(c=t.originalValue)?c:e});this.runTests({value:o,tests:d,originalValue:null!=(l=t.originalValue)?l:e,options:t},r,e=>a(e.concat(s),o))})}clone(e){let t=super.clone(e);return t.innerType=this.innerType,t}json(){return this.transform(au)}concat(e){let t=super.concat(e);return t.innerType=this.innerType,e.innerType&&(t.innerType=t.innerType?t.innerType.concat(e.innerType):e.innerType),t}of(e){let t=this.clone();if(!rM(e))throw TypeError("`array.of()` sub-schema must be a valid yup schema not: "+rA(e));return t.innerType=e,t.spec=Object.assign({},t.spec,{types:e}),t}length(e,t=r$.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(t){return t.length===this.resolve(e)}})}min(e,t){return t=t||r$.min,this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(t){return t.length>=this.resolve(e)}})}max(e,t){return t=t||r$.max,this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(t){return t.length<=this.resolve(e)}})}ensure(){return this.default(()=>[]).transform((e,t)=>this._typeCheck(e)?e:null==t?[]:[].concat(t))}compact(e){let t=e?(t,r,a)=>!e(t,r,a):e=>!!e;return this.transform(e=>null!=e?e.filter(t):e)}describe(e){let t=(e?this.resolve(e):this).clone(),r=super.describe(e);if(t.innerType){var a;let s=e;null!=(a=s)&&a.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[0]})),r.innerType=t.innerType.describe(s)}return r}}function a_(e){return new aw(e)}ay.prototype=av.prototype;class aw extends rG{constructor(e){super({type:"tuple",spec:{types:e},check(e){let t=this.spec.types;return Array.isArray(e)&&e.length===t.length}}),this.withMutation(()=>{this.typeError(rF.notType)})}_cast(e,t){let{types:r}=this.spec,a=super._cast(e,t);if(!this._typeCheck(a))return a;let s=!1,i=r.map((e,r)=>{let i=e.cast(a[r],Object.assign({},t,{path:`${t.path||""}[${r}]`,parent:a,originalValue:a[r],value:a[r],index:r}));return i!==a[r]&&(s=!0),i});return s?i:a}_validate(e,t={},r,a){let s=this.spec.types;super._validate(e,t,r,(i,n)=>{var o,l;if(!this._typeCheck(n))return void a(i,n);let c=[];for(let[r,a]of s.entries())c[r]=a.asNestedTest({options:t,index:r,parent:n,parentPath:t.path,originalParent:null!=(l=t.originalValue)?l:e});this.runTests({value:n,tests:c,originalValue:null!=(o=t.originalValue)?o:e,options:t},r,e=>a(e.concat(i),n))})}describe(e){let t=(e?this.resolve(e):this).clone(),r=super.describe(e);return r.innerType=t.spec.types.map((t,r)=>{var a;let s=e;return null!=(a=s)&&a.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),t.describe(s)}),r}}a_.prototype=aw.prototype;function ab(e,t,r){if(!e||!rM(e.prototype))throw TypeError("You must provide a yup schema constructor function");if("string"!=typeof t)throw TypeError("A Method name must be provided");if("function"!=typeof r)throw TypeError("Method function must be provided");e.prototype[t]=r}e.s(["ObjectSchema",0,ag,"Schema",0,rG,"addMethod",0,ab,"array",0,ay,"boolean",0,r1,"date",0,ao,"mixed",0,rZ,"number",0,as,"object",0,af,"reach",0,rz,"ref",0,function(e,t){return new rK(e,t)},"string",0,ar,"tuple",0,a_],99683);let ak="0123456789ABCDEFGHJKMNPQRSTVWXYZ",aC=new Map([["o","0"],["i","1"],["l","1"]]);function aT(e){if(e<0||e>=32)throw new B(`Invalid base32 index: ${e}`);return ak[e]}function aS(e){let t=0,r=0,a="";for(let s=0;s<e.length;s++)for(r=r<<8|e[s],t+=8;t>=5;)a+=aT(r>>>t-5&31),t-=5;if(t>0&&(a+=aT(r<<5-t&31)),!aE(a))throw new B("Invalid base32 output; this should never happen");return a}function ax(e){return btoa([...e].map(e=>String.fromCharCode(e)).join(""))}function aA(e){return new Uint8Array(atob(e).split("").map(e=>e.charCodeAt(0)))}function aE(e){for(let t of e){if(" "===t)continue;let e=t.toUpperCase();if(!ak.includes(e))return!1}return!0}function aI(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}e.s(["decodeBase32",0,function(e){if(!aE(e))throw new B("Invalid base32 string");let t=new Uint8Array(5*e.length/8|0),r=0,a=0,s=0;for(let i=0;i<e.length;i++){let n=e[i].toLowerCase();" "!==n&&(aC.has(n)&&(n=aC.get(n)),a=a<<5|function(e){if(1!==e.length)throw new B(`Invalid base32 character: ${e}`);let t=ak.indexOf(e.toUpperCase());if(-1===t)throw new B(`Invalid base32 character: ${e}`);return t}(n),(r+=5)>=8&&(t[s++]=a>>>r-8&255,r-=8))}return t},"decodeBase64",0,aA,"encodeBase32",0,aS,"encodeBase64",0,ax,"isBase64",0,aI],90191);let aP=[{code:"USD",decimals:2,stripeDecimals:2},{code:"EUR",decimals:2,stripeDecimals:2},{code:"GBP",decimals:2,stripeDecimals:2},{code:"JPY",decimals:0,stripeDecimals:0},{code:"INR",decimals:2,stripeDecimals:2},{code:"AUD",decimals:2,stripeDecimals:2},{code:"CAD",decimals:2,stripeDecimals:2}],aR={GET:{safe:!0,idempotent:!0},POST:{safe:!1,idempotent:!1},PUT:{safe:!1,idempotent:!0},DELETE:{safe:!1,idempotent:!0},PATCH:{safe:!1,idempotent:!1},OPTIONS:{safe:!0,idempotent:!0},HEAD:{safe:!0,idempotent:!0},TRACE:{safe:!0,idempotent:!0},CONNECT:{safe:!1,idempotent:!1}};function aO(e){let[t,r,...a]=e.split(" ");if(a.length>0||!r||"Basic"!==t||!aI(r))return null;let s=new TextDecoder().decode(aA(r)).split(":");return[s[0],s.slice(1).join(":")]}let aN=["google","github","microsoft","spotify","facebook","discord","gitlab","bitbucket","linkedin","apple","x","twitch"],aU="__stack_public_client__";function aj(e){return e.trim().toUpperCase()}function aD(e){if(e.buffer instanceof SharedArrayBuffer)throw new B("SharedArrayBuffer-backed Uint8Arrays are not supported in this context");return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}function aL(e){if(!j.crypto)throw new B("Crypto API is not available in this environment. Are you using an old browser?");if(!j.crypto.getRandomValues)throw new B("crypto.getRandomValues is not available in this environment. Are you using an old browser?");return j.crypto.getRandomValues(e)}function a$(e=224){let t=Math.ceil(e/5),r=aS(aL(new Uint8Array(Math.ceil(5*t/8))));return r.slice(r.length-t).toLowerCase()}async function aF(e,t,r){let a="string"==typeof t?new TextEncoder().encode(t):aD(t),s=await crypto.subtle.importKey("raw",a,"HKDF",!1,["deriveKey"]);return await crypto.subtle.deriveKey({name:"HKDF",salt:aD(r),hash:"SHA-256",info:new TextEncoder().encode(JSON.stringify(["stack-crypto-helper-derived-symmetric-key",e,"string"==typeof t?"string-key":"binary-key",ax(r)]))},s,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function aM({purpose:e,secret:t,value:r}){let a=crypto.getRandomValues(new Uint8Array(12)),s=crypto.getRandomValues(new Uint8Array(16)),i=await aF(e,t,s),n=await crypto.subtle.encrypt({name:"AES-GCM",iv:a},i,aD(r));return new Uint8Array([1,0,...s,...a,...new Uint8Array(n)])}async function aB({purpose:e,secret:t,cipher:r}){let a=r.slice(0,2);if(1!==a[0]||0!==a[1])throw new B("Invalid ciphertext version in decrypt(...); expected 0x0100",{purpose:e});let s=r.slice(2,18),i=r.slice(18,30),n=r.slice(30),o=await aF(e,t,s);try{let e=await crypto.subtle.decrypt({name:"AES-GCM",iv:i},o,n);return z.ok(new Uint8Array(e))}catch(e){if(e instanceof DOMException&&"OperationError"===e.name)return z.error(Error("Invalid ciphertext or secret when decrypting encrypted value",{cause:e}));throw e}}async function aK(e){return await aq({...e,iterations:1})}async function aq(e){let t=e=>"string"==typeof e?new TextEncoder().encode(e):aD(e),r=await crypto.subtle.importKey("raw",t(e.value),"PBKDF2",!1,["deriveBits"]);return new Uint8Array(await crypto.subtle.deriveBits({name:"PBKDF2",salt:new TextEncoder().encode(JSON.stringify(["stack-crypto-helper-iterated-hash",e.purpose,ax(t(e.salt??"")),ax(t(e.extra??""))])),iterations:e.iterations,hash:"SHA-256"},r,256))}function aV(...e){try{return new URL(...e)}catch(e){return null}}function aH(e){return!!aV(e)}function aW(e){if(!e)return!1;if(!e.includes("*")){if(!e||e.startsWith(".")||e.endsWith(".")||e.includes(".."))return!1;let t=aV(`https://${e}`);return!!t&&t.hostname===e}if(e.startsWith(".")||e.endsWith(".")||e.includes(".."))return!1;let t=e.replace(/\*+/g,"wildcard");if(!/^[a-zA-Z0-9.-]+$/.test(t))return!1;let r=e.split(/\*+/);for(let e=0;e<r.length;e++){let t=r[e];if(""!==t&&(0===e&&t.startsWith(".")||e===r.length-1&&t.endsWith(".")||t.includes("..")))return!1}return!0}function az(e){return[e,...function(e){if("https://api.stack-auth.com"===e)return["https://api1.stack-auth.com","https://api2.stack-auth.com"];if("https://api.dev.stack-auth.com"===e)return["https://api1.dev.stack-auth.com","https://api2.dev.stack-auth.com"];let t=e.match(/^http:\/\/localhost:(\d+)02$/);return t?[`http://localhost:${t[1]}10`]:[]}(e)]}function aJ(e){let t=aV(e);return!!t&&!!("localhost"===t.hostname||t.hostname.endsWith(".localhost")||t.hostname.match(/^127\.\d+\.\d+\.\d+$/))}function aX(e){let t=`${a$()}.stack-auth.example.com`,r=aV(e,`https://${t}`);return!!r&&r.host===t&&"https:"===r.protocol}function aY(e){return e.pathname+e.search+e.hash}function aG(e,...t){return y(e,...t.map(encodeURIComponent))}function aQ(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,e=>(e^aL(new Uint8Array(1))[0]&15>>e/4).toString(16))}function aZ(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e)}async function a0(e,t,r){try{return await e.validate(t,{...U(r??{},["currentUserId"]),context:{...r?.context,stackAllowUserIdMe:r?.currentUserId!==void 0}})}catch(a){if(a instanceof sR){let s=r?.currentUserId;if(!s)throw new rg.CannotGetOwnUserWithoutUser;let i=a.path,n=[];for(;i.length>0;)if(i.startsWith("[")){let e=i.indexOf("]");if(e<0)throw new B("Invalid path");n.push(JSON.parse(i.slice(1,e))),i=i.slice(e+1)}else{let e=i.indexOf(".");-1===e&&(e=i.length),n.push(i.slice(0,e)),i=i.slice(e+1)}let o=A(t),l=o;for(let e of n.slice(0,-1)){if(!Object.prototype.hasOwnProperty.call(l,e))throw new B(`Segment ${e} of path ${a.path} not found in object`);l=l[e]}return l[n[n.length-1]]=s,await a0(e,o,r)}throw a}}e.s(["getDefaultApiUrls",()=>az,"getRelativePart",()=>aY,"isLocalhost",()=>aJ,"isRelative",()=>aX,"isValidHostnameWithWildcards",()=>aW,"isValidUrl",()=>aH,"urlString",()=>aG],42672),e.s(["decrypt",()=>aB,"encrypt",()=>aM,"generateRandomValues",()=>aL,"generateSecureRandomString",()=>a$,"hash",()=>aK,"iteratedHash",()=>aq],44061),e.s(["generateUuid",()=>aQ,"isUuid",()=>aZ],3760),ab(ar,"nonEmpty",function(e){return this.test("non-empty",e??(({path:e})=>`${e} must not be empty`),e=>""!==e)}),ab(rG,"hasNested",function(e){if(!e.match(/^[a-zA-Z0-9_$:-]*$/))throw new B(`yupSchema.hasNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(e)}`);let t=this.meta()?.stackSchemaInfo;if(t?.type==="record")return t.keySchema.isValidSync(e);if(t?.type==="union")return t.items.some(t=>t.hasNested(e));try{return rz(this,e),!0}catch(e){if(e instanceof Error&&e.message.includes("The schema does not contain the path"))return!1;throw e}}),ab(rG,"getNested",function(e){if(!e.match(/^[a-zA-Z0-9_$:-]*$/))throw new B(`yupSchema.getNested can currently only be used with alphanumeric keys, underscores, dollar signs, colons, and hyphens. Fix this in the future. Provided key: ${JSON.stringify(e)}`);if(!this.hasNested(e))throw new B(`Tried to call yupSchema.getNested, but key is not present in the schema. Provided key: ${e}`,{path:e,schema:this});let t=this.meta()?.stackSchemaInfo;return t?.type==="record"?t.valueSchema:t?.type==="union"?so(...t.items.filter(t=>t.hasNested(e)).map(t=>t.getNested(e))):rz(this,e)});let a1=e=>`The unique identifier of the ${e}`,a2=e=>`Human-readable ${e} display name. This is not a unique identifier.`,a4=e=>`URL of the profile image for ${e}. Can be a Base64 encoded image. Must be smaller than 100KB. Please compress and crop to a square before passing in.`,a3=e=>`Server metadata. Used as a data store, only accessible from the server side. You can store secret information related to the ${e} here.`,a6=e=>"(the number of milliseconds since epoch, January 1, 1970, UTC)",a5=e=>`The time the ${e} was created ${a6(e)}`,a8=`The time the user signed up ${a6}`,a7=`The time the user was last active ${a6}`;function a9(...e){return ar(...e).meta({stackSchemaInfo:{type:"string"}})}function se(...e){return as(...e).meta({stackSchemaInfo:{type:"number"}})}function st(...e){return r1(...e).meta({stackSchemaInfo:{type:"boolean"}})}function sr(...e){return rZ(...e)}function sa(...e){return sr(...e).meta({stackSchemaInfo:{type:"mixed"}})}function ss(...e){return ay(...e).meta({stackSchemaInfo:{type:"array"}})}function si(e){if(0===e.length)throw Error("yupTuple must have at least one schema");return a_(e).meta({stackSchemaInfo:{type:"tuple",items:e}})}function sn(...e){return(function(...e){return af(...e).test("no-unknown-object-properties",({path:e})=>`${e} contains unknown properties`,(e,t)=>{if(t.options.context?.noUnknownPathPrefixes?.some(e=>t.path.startsWith(e))&&!1!==t.schema.spec.noUnknown){let r=new Set(Object.keys(t.schema.fields)),a=Object.keys(e??{}).filter(e=>!r.has(e));if(a.length>0)return t.createError({message:`${t.path||"Object"} contains unknown properties: ${a.join(", ")}`,path:t.path,params:{unknownKeys:a,availableKeys:r}})}return!0}).meta({stackSchemaInfo:{type:"object"}})})(...e).default(void 0)}function so(...e){if(0===e.length)throw Error("yupUnion must have at least one schema");return sr().meta({stackSchemaInfo:{type:"union",items:e}}).test("is-one-of","Invalid value",async(t,r)=>{if(null==t)return!0;let a=[];for(let s of e)try{return await a0(s,t,r.options),!0}catch(e){a.push(e)}return r.createError({message:v`
        ${r.path} is not matched by any of the provided schemas:
          ${a.map((e,t)=>v`
            Schema ${t}:
              ${e.errors.join("\n")}
          `).join("\n")}`,path:r.path})})}function sl(e,t){return sn().meta({stackSchemaInfo:{type:"record",keySchema:e,valueSchema:t}}).unknown(!0).test("record","${path} must be a record of valid values",async function(r,a){if(null==r)return!0;let{path:s,createError:i}=this;if("object"!=typeof r)return i({message:`${s} must be an object`});for(let n of Object.keys(r)){await a0(e,n,a.options);try{await a0(t,r[n],{...a.options,context:{...a.options.context,path:s?`${s}.${n}`:n}})}catch(e){return i({path:s?`${s}.${n}`:n,message:e.message})}}return!0})}sa();let sc=a9().test({name:"no-spaces",message:e=>`${e.path} contains spaces`,test:e=>null==e||!e.includes(" ")}).test({name:"url",message:e=>`${e.path} is not a valid URL`,test:e=>null==e||aH(e)});a9().test({name:"no-spaces",message:e=>`${e.path} contains spaces`,test:e=>null==e||!e.includes(" ")}).test({name:"wildcard-url",message:e=>`${e.path} is not a valid URL or wildcard URL pattern`,test:e=>{if(null==e)return!0;if(!e.includes("*"))return aH(e);try{let t="wildcard-placeholder",r=e.replace(/\*/g,t),a=new URL(r);if(a.username.includes(t)||a.password.includes(t)||a.pathname.includes(t)||a.search.includes(t)||a.hash.includes(t)||"http:"!==a.protocol&&"https:"!==a.protocol)return!1;return aW(a.hostname.split(t).join("*"))}catch(e){return!1}}}).test({name:"is-protocol-and-domain",message:e=>`${e.path} must be a protocol and domain (with optional port) without any path, query parameters, or hash`,test:e=>{if(null==e)return!0;try{let t=e.replace(/\*/g,"wildcard-placeholder"),r=new URL(t);return""!==r.protocol&&""!==r.hostname&&"/"===r.pathname&&""===r.search&&""===r.hash}catch(e){return!1}}});let sd=sa().nullable().defined().transform(e=>JSON.parse(JSON.stringify(e)));a9().test("json",e=>`${e.path} is not valid JSON`,e=>{if(null==e)return!0;try{return JSON.parse(e),!0}catch(e){return!1}}),a9().test("json",e=>`${e.path} is not valid JSON`,e=>{if(!e)return!0;try{return JSON.parse(e),!0}catch(e){return!1}});let su=a9().test("is-base64",e=>`${e.path} is not valid base64`,e=>null==e||aI(e)),sp=a9().max(70);a9().transform(e=>"string"==typeof e?aj(e):e).test({name:"country-code",message:e=>`${e.path} must be a 2-letter country code`,test:e=>{let t;return null==e||(t=aj(e),/^[A-Z]{2}$/.test(t))}});let sh=si([se().min(0).integer().defined(),a9().oneOf(["millisecond","second","minute","hour","day","week","month","year"]).defined()]),sm=si([se().min(0).integer().defined(),a9().oneOf(["day","week","month","year"]).defined()]);so(sh.defined(),a9().oneOf(["never"]).defined());let sf=so(sm.defined(),a9().oneOf(["never"]).defined()),sg=/^[a-zA-Z0-9_][a-zA-Z0-9_-]*$/,sy=e=>a9().max(63).matches(sg,`${e} must contain only letters, numbers, underscores, and hyphens, and not start with a hyphen`),sv=e=>a9().test("money-amount","Invalid money amount",(t,r)=>{if(null==t)return!0;let a=t.match(/^([0-9]+)(\.([0-9]+))?$/);if(!a)return r.createError({message:"Money amount must be in the format of <number> or <number>.<number>"});let s=a[1],i=a[3];return i&&i.length>e.decimals?r.createError({message:`Too many decimals; ${e.code} only has ${e.decimals} decimals`}):!("0"!==s&&s.startsWith("0"))||r.createError({message:"Money amount must not have leading zeros"})}),s_=e=>a9().email(e).max(256).matches(/^[^.]+(\.[^.]+)*@.*\.[^.][^.]+$/,e),sw=a9().email();a9().oneOf(["client","server","admin"]).defined(),a9().oneOf(["server","admin"]).defined(),a9().oneOf(["admin"]).defined(),a9().test(e=>void 0===e||"internal"===e||aZ(e)).meta({openapiField:{description:a1("project"),exampleValue:"e0b52f4d-dece-408c-af49-d23061bb0f8d"}}),a9().nonEmpty().max(255).meta({openapiField:{description:a1("project branch"),exampleValue:"main"}}),a9().meta({openapiField:{description:a2("project"),exampleValue:"MyMusic"}}),sc.max(1e6).meta({openapiField:{description:"URL of the logo for the project. This is usually a close to 1:1 image of the company logo.",exampleValue:"https://example.com/logo.png"}}),sc.max(1e6).meta({openapiField:{description:"URL of the full logo for the project. This is usually a vertical image with the logo and the company name.",exampleValue:"https://example.com/full-logo.png"}}),sc.max(1e6).meta({openapiField:{description:"URL of the dark mode logo for the project. This is usually a close to 1:1 image of the company logo optimized for dark backgrounds.",exampleValue:"https://example.com/logo-dark.png"}}),sc.max(1e6).meta({openapiField:{description:"URL of the dark mode full logo for the project. This is usually a vertical image with the logo and the company name optimized for dark backgrounds.",exampleValue:"https://example.com/full-logo-dark.png"}}),a9().nullable().meta({openapiField:{description:"A human readable description of the project",exampleValue:"A music streaming service"}}),se().meta({openapiField:{description:a5("project"),exampleValue:163e10}}),st().meta({openapiField:{description:"Whether the project is in production mode",exampleValue:!0}}),a9().oneOf(["config_choice","apps_selection","auth_setup","domain_setup","email_theme_setup","payments_setup","welcome","completed"]).meta({openapiField:{description:"The current dashboard onboarding stage for this project.",exampleValue:"config_choice"}}),a9().meta({openapiField:{description:a1("project config"),exampleValue:"d09201f0-54f5-40bd-89ff-6d1815ddad24"}}),st().meta({openapiField:{description:"Whether localhost is allowed as a domain for this project. Should only be allowed in development mode",exampleValue:!0}}),st().meta({openapiField:{description:"Whether a team should be created for each user that signs up",exampleValue:!0}}),st().meta({openapiField:{description:"Whether magic link authentication is enabled for this project",exampleValue:!0}}),st().meta({openapiField:{description:"Whether passkey authentication is enabled for this project",exampleValue:!0}}),st().meta({openapiField:{description:"Whether client users can create teams",exampleValue:!0}}),st().meta({openapiField:{description:"Whether client users can delete their own account from the client",exampleValue:!0}}),st().meta({openapiField:{description:"Whether users can sign up new accounts, or whether they are only allowed to sign in to existing accounts. Regardless of this option, the server API can always create new users with the `POST /users` endpoint.",exampleValue:!0}}),st().meta({openapiField:{description:"Whether email password authentication is enabled for this project",exampleValue:!0}}),a9().oneOf(aN).meta({openapiField:{description:`OAuth provider ID, one of ${aN.map(e=>`\`${e}\``).join(", ")}`,exampleValue:"google"}}),st().meta({openapiField:{description:"Whether the OAuth provider is enabled. If an provider is first enabled, then disabled, it will be shown in the list but with enabled=false",exampleValue:!0}}),a9().oneOf(["shared","standard"]).meta({openapiField:{description:'OAuth provider type, one of shared, standard. "shared" uses Stack shared OAuth keys and it is only meant for development. "standard" uses your own OAuth keys and will show your logo and company name when signing in with the provider.',exampleValue:"standard"}}),a9().meta({openapiField:{description:'OAuth client ID. Needs to be specified when using type="standard"',exampleValue:"google-oauth-client-id"}}),a9().meta({openapiField:{description:'OAuth client secret. Needs to be specified when using type="standard"',exampleValue:"google-oauth-client-secret"}}),a9().meta({openapiField:{description:"The configuration id for Facebook business login (for things like ads and marketing). This is only required if you are using the standard OAuth with Facebook and you are using Facebook business login."}}),a9().meta({openapiField:{description:"The Microsoft tenant id for Microsoft directory. This is only required if you are using the standard OAuth with Microsoft and you have an Azure AD tenant."}}),ss(a9().defined()).meta({openapiField:{description:"Apple Bundle IDs for native iOS/macOS apps. Required for native Sign In with Apple (in addition to web Apple OAuth which uses the Client ID/Services ID).",exampleValue:["com.example.ios","com.example.macos"]}}),a9().defined().meta({openapiField:{description:"Apple Bundle ID for native iOS/macOS apps.",exampleValue:"com.example.ios"}}),a9().oneOf(["link_method","raise_error","allow_duplicates"]).meta({openapiField:{description:"Determines how to handle OAuth logins that match an existing user by email. `link_method` adds the OAuth method to the existing user. `raise_error` rejects the login with an error. `allow_duplicates` creates a new user.",exampleValue:"link_method"}}),a9().oneOf(["shared","standard"]).meta({openapiField:{description:'Email provider type, one of shared, standard. "shared" uses Stack shared email provider and it is only meant for development. "standard" uses your own email server and will have your email address as the sender.',exampleValue:"standard"}}),a9().meta({openapiField:{description:'Email sender name. Needs to be specified when using type="standard"',exampleValue:"Stack"}}),a9().meta({openapiField:{description:'Email host. Needs to be specified when using type="standard"',exampleValue:"smtp.your-domain.com"}}),se().min(0).max(65535).meta({openapiField:{description:'Email port. Needs to be specified when using type="standard"',exampleValue:587}}),a9().meta({openapiField:{description:'Email username. Needs to be specified when using type="standard"',exampleValue:"smtp-email"}}),sw.meta({openapiField:{description:'Email sender email. Needs to be specified when using type="standard"',exampleValue:"example@your-domain.com"}}),sp.meta({openapiField:{description:'Email password. Needs to be specified when using type="standard"',exampleValue:"your-email-password"}}),a9().test("is-handler-path","Handler path must start with /",e=>e?.startsWith("/")).meta({openapiField:{description:'Handler path. If you did not setup a custom handler path, it should be "/handler" by default. It needs to start with /',exampleValue:"/handler"}}),a9().meta({openapiField:{description:"Email theme id for the project. Determines the visual style of emails sent by the project."}}),sl(a9().uuid(),sn({displayName:a9().meta({openapiField:{description:"Email theme name",exampleValue:"Default Light"}}).defined(),tsxSource:a9().meta({openapiField:{description:"Email theme source code tsx component"}}).defined()})).meta({openapiField:{description:"Record of email theme IDs to their display name and source code"}});let sb=sa().test(e=>void 0===e||!1===e||null===e||"string"==typeof e&&aZ(e)).meta({openapiField:{description:"Email theme id for the template"}}).optional();sl(a9().uuid(),sn({displayName:a9().meta({openapiField:{description:"Email template name",exampleValue:"Email Verification"}}).defined(),tsxSource:a9().meta({openapiField:{description:"Email template source code tsx component"}}).defined(),themeId:sb})).meta({openapiField:{description:"Record of email template IDs to their display name and source code"}}),sl(a9().uuid(),sn({displayName:a9().meta({openapiField:{description:"Custom dashboard name",exampleValue:"User Growth Dashboard"}}).defined(),tsxSource:a9().meta({openapiField:{description:"Custom dashboard source code tsx component"}}).defined()})).meta({openapiField:{description:"Record of custom dashboard IDs to their display name and source code"}});let sk=a9().oneOf(["user","team","custom"]),sC=(e,t)=>!e||0!==Object.keys(e).filter(e=>aP.some(t=>t.code===e)).length||t.createError({message:"At least one currency is required"}),sT=sn({...I(aP.map(e=>[e.code,sv(e).optional()])),interval:sm.optional(),serverOnly:st(),freeTrial:sm.optional()}).test("at-least-one-currency",(e,t)=>sC(e,t)),sS=so(a9().oneOf(["include-by-default"]).meta({openapiField:{description:"Makes this item free and includes it by default for all customers.",exampleValue:"include-by-default"}}),sl(sy("priceId"),sT)),sx=sn({displayName:a9(),productLineId:sy("productLineId").optional().meta({openapiField:{description:"The ID of the product line this product belongs to. Within a product line, all products are mutually exclusive unless they are an add-on to another product in the product line.",exampleValue:"product-line-id"}}),isAddOnTo:so(st().isFalse(),sl(sy("productId"),st().isTrue().defined())).optional().meta({openapiField:{description:"The products that this product is an add-on to. If this is set, the customer must already have one of the products in the record to be able to purchase this product.",exampleValue:{"product-id":!0}}}),customerType:sk.defined(),freeTrial:sm.optional(),serverOnly:st(),stackable:st(),prices:sS.defined(),includedItems:sl(sy("itemId"),sn({quantity:se().defined(),repeat:sf.optional(),expires:a9().oneOf(["never","when-purchase-expires","when-repeated"]).optional()}))}),sA={featureFlag:!0,source:"marketing-campaign"},sE=sd.meta({openapiField:{description:"Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.",exampleValue:sA}}),sI=sd.meta({openapiField:{description:"Client read-only, server-writable metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client. The client can read this data, but cannot modify it. This is useful for things like subscription status.",exampleValue:sA}}),sP=sd.meta({openapiField:{description:a3("product"),exampleValue:sA}});sx.concat(sn({clientMetadata:sE.optional(),clientReadOnlyMetadata:sI.optional(),serverMetadata:sP.optional()})),sn({display_name:a9().defined(),customer_type:sk.defined(),free_trial:sm.optional(),server_only:st().default(!0),stackable:st().default(!1),prices:sl(sy("priceId"),sn({...I(aP.map(e=>[e.code,sv(e).optional()])),interval:sm.optional(),free_trial:sm.optional()}).test("at-least-one-currency",(e,t)=>sC(e,t))),included_items:sl(sy("itemId"),sn({quantity:se(),repeat:sf.optional(),expires:a9().oneOf(["never","when-purchase-expires","when-repeated"]).optional()})),client_metadata:sE.optional(),client_read_only_metadata:sI.optional(),server_metadata:sP.optional()});var sR=class extends Error{constructor(e){super(`This error should be caught by whoever validated the schema, and the field in the path '${e}' should be replaced with the current user's id. This is a workaround to yup not providing access to the context inside the transform function.`),this.path=e}};let sO="cad564fd-f81b-43f4-b390-98abf3fcc17e",sN=a9().uuid().transform(e=>"me"===e?sO:e).test((e,t)=>{if(!("stackAllowUserIdMe"in(t.options.context??{})))throw new B("userIdOrMeSchema is not allowed in this context. Make sure you're using yupValidate from schema-fields.ts to validate, instead of schema.validate(...).");if(!t.options.context?.stackAllowUserIdMe)throw new B("userIdOrMeSchema is not allowed in this context. Make sure you're passing in the currentUserId option in yupValidate.");if(e===sO)throw new sR(t.path);return!0}).meta({openapiField:{description:"The ID of the user, or the special value `me` for the currently authenticated user",exampleValue:"3241a285-8329-4d69-8f3d-316e08cf140c"}}),sU=a9().uuid().meta({openapiField:{description:a1("user"),exampleValue:"3241a285-8329-4d69-8f3d-316e08cf140c"}});sw.meta({openapiField:{description:"Primary email",exampleValue:"johndoe@example.com"}}),st().meta({openapiField:{description:"Whether the primary email is used for authentication. If this is set to `false`, the user will not be able to sign in with the primary email with password or OTP",exampleValue:!0}}),st().meta({openapiField:{description:"Whether the primary email has been verified to belong to this user",exampleValue:!0}}),a9().nullable().max(256).meta({openapiField:{description:a2("user"),exampleValue:"John Doe"}}),a9().uuid().meta({openapiField:{description:"ID of the team currently selected by the user",exampleValue:"team-id"}}),sc.max(1e6).meta({openapiField:{description:a4("user"),exampleValue:"https://example.com/image.jpg"}}),se().meta({openapiField:{description:a8,exampleValue:163e10}}),sd.meta({openapiField:{description:"Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.",exampleValue:{key:"value"}}}),sd.meta({openapiField:{description:"Client read-only, server-writable metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client. The client can read this data, but cannot modify it. This is useful for things like subscription status.",exampleValue:{key:"value"}}}),sd.meta({openapiField:{description:a3("user"),exampleValue:{key:"value"}}}),sn({id:a9().defined(),type:a9().oneOf(aN).defined(),provider_user_id:a9().defined()}),se().nullable().meta({openapiField:{description:a7,exampleValue:163e10}}),st().meta({openapiField:{hidden:!0,description:"Whether the user has passkeys enabled",exampleValue:!1}}),st().meta({openapiField:{hidden:!0,description:"Whether the user has OTP/magic link enabled. ",exampleValue:!0}}),st().meta({openapiField:{hidden:!0,description:"Whether the user has OTP/magic link enabled. Note that only accounts with verified emails can sign-in with OTP.",exampleValue:!0}}),st().meta({openapiField:{hidden:!0,description:"Whether the user has a password set. If the user does not have a password set, they will not be able to sign in with email/password.",exampleValue:!0}}),sp.nullable().meta({openapiField:{description:"Sets the user's password. Doing so revokes all current sessions.",exampleValue:"my-new-password"}}).max(70),a9().nonEmpty().meta({openapiField:{description:"If `password` is not given, sets the user's password hash to the given string in Modular Crypt Format (ex.: `$2a$10$VIhIOofSMqGdGlL4wzE//e.77dAQGqNtF/1dT7bqCrVtQuInWy2qi`). Doing so revokes all current sessions."}}),su.nullable().meta({openapiField:{description:"Enables 2FA and sets a TOTP secret for the user. Set to null to disable 2FA.",exampleValue:"dG90cC1zZWNyZXQ="}});let sj=sn({type:a9().oneOf(["anonymous","email_not_verified","restricted_by_administrator"]).defined()}),sD=sn({sub:a9().defined(),exp:se().optional(),iat:se().defined(),iss:a9().defined(),aud:a9().defined(),project_id:a9().defined(),branch_id:a9().defined(),refresh_token_id:a9().defined(),role:a9().oneOf(["authenticated"]).defined(),name:a9().defined().nullable(),email:a9().defined().nullable(),email_verified:st().defined(),selected_team_id:a9().defined().nullable(),signed_up_at:se().defined(),is_anonymous:st().defined(),is_restricted:st().defined(),restricted_reason:sj.defined().nullable(),requires_totp_mfa:st().defined()});s_(void 0).meta({openapiField:{description:"The email to sign in with.",exampleValue:"johndoe@example.com"}}),sc.meta({openapiField:{description:"The base callback URL to construct the magic link from. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/auth/otp/sign-in` endpoint.",exampleValue:"https://example.com/handler/magic-link-callback"}}),sc.meta({openapiField:{description:"The base callback URL to construct a verification link for the verification e-mail. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/contact-channels/verify` endpoint.",exampleValue:"https://example.com/handler/email-verification"}});let sL=a9().meta({openapiField:{description:"Short-lived access token that can be used to authenticate the user",exampleValue:"eyJhmMiJB2TO...diI4QT"}});sn({refresh_token:a9().meta({openapiField:{description:"Long-lived refresh token that can be used to obtain a new access token",exampleValue:"i8ns3aq2...14y"}}).defined(),access_token:sL.defined(),is_new_user:st().meta({openapiField:{description:"Whether the user is a new user",exampleValue:!0}}).defined(),user_id:sU.defined()});let s$=["$update_team","$delete_team","$read_members","$remove_members","$invite_members","$manage_api_keys"],sF=a9().matches(/^\$?[a-z0-9_:]+$/,'Only lowercase letters, numbers, ":", "_" and optional "$" at the beginning are allowed').test("is-system-permission","System permissions must start with a dollar sign",(e,t)=>!e||!e.startsWith("$")||!!s$.includes(e)||t.createError({message:"Invalid system permission"})).meta({openapiField:{description:`The permission ID used to uniquely identify a permission. Can either be a custom permission with lowercase letters, numbers, \`:\`, and \`_\` characters, or one of the system permissions: ${s$.map(e=>`\`${e}\``).join(", ")}`,exampleValue:"read_secret_info"}});a9().matches(/^[a-z0-9_:]+$/,'Only lowercase letters, numbers, ":", "_" are allowed').meta({openapiField:{description:'The permission ID used to uniquely identify a permission. Can only contain lowercase letters, numbers, ":", and "_" characters',exampleValue:"read_secret_info"}}),a9().meta({openapiField:{description:"A human-readable description of the permission",exampleValue:"Read secret information"}}),ss(sF.defined()).meta({openapiField:{description:"The IDs of the permissions that are contained in this permission",exampleValue:["read_public_info"]}}),a9().uuid().meta({openapiField:{description:a1("team"),exampleValue:"ad962777-8244-496a-b6a2-e0c6a449c79e"}}),a9().meta({openapiField:{description:a2("team"),exampleValue:"My Team"}}),sc.max(1e6).meta({openapiField:{description:a4("team"),exampleValue:"https://example.com/image.jpg"}}),sd.meta({openapiField:{description:"Client metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client.",exampleValue:{key:"value"}}}),sd.meta({openapiField:{description:"Client read-only, server-writable metadata. Used as a data store, accessible from the client side. Do not store information that should not be exposed to the client. The client can read this data, but cannot modify it. This is useful for things like subscription status.",exampleValue:{key:"value"}}}),sd.meta({openapiField:{description:a3("team"),exampleValue:{key:"value"}}}),se().meta({openapiField:{description:a5("team"),exampleValue:163e10}}),sw.meta({openapiField:{description:"The email of the user to invite.",exampleValue:"johndoe@example.com"}}),sc.meta({openapiField:{description:"The base callback URL to construct an invite link with. A query parameter `code` with the verification code will be appended to it. The page should then make a request to the `/team-invitations/accept` endpoint.",exampleValue:"https://example.com/handler/team-invitation"}}),sN.meta({openapiField:{description:'The ID of the creator of the team. If not specified, the user will not be added to the team. Can be either "me" or the ID of the user. Only used on the client side.',exampleValue:"me"}}),a9().meta({openapiField:{description:a2("team member")+" Note that this is separate from the display_name of the user.",exampleValue:"John Doe"}}),sc.max(1e6).meta({openapiField:{description:a4("team member"),exampleValue:"https://example.com/image.jpg"}}),a9().uuid().meta({openapiField:{description:a1("contact channel"),exampleValue:"b3d396b8-c574-4c80-97b3-50031675ceb2"}}),a9().oneOf(["email"]).meta({openapiField:{description:'The type of the contact channel. Currently only "email" is supported.',exampleValue:"email"}}),a9().when("type",{is:"email",then:e=>e.email()}).meta({openapiField:{description:"The value of the contact channel. For email, this should be a valid email address.",exampleValue:"johndoe@example.com"}}),st().meta({openapiField:{description:"Whether the contact channel is used for authentication. If this is set to `true`, the user will be able to sign in with the contact channel with password or OTP.",exampleValue:!0}}),st().meta({openapiField:{description:"Whether the contact channel has been verified. If this is set to `true`, the contact channel has been verified to belong to the user.",exampleValue:!0}}),st().meta({openapiField:{description:"Whether the contact channel is the primary contact channel. If this is set to `true`, it will be used for authentication and notifications by default.",exampleValue:!0}}),a9().uuid().meta({openapiField:{description:a1("OAuth provider"),exampleValue:"b3d396b8-c574-4c80-97b3-50031675ceb2"}}),sw.meta({openapiField:{description:"Email of the OAuth provider. This is used to display and identify the OAuth provider in the UI.",exampleValue:"test@gmail.com"}}),a9().oneOf(aN).meta({openapiField:{description:`OAuth provider type, one of ${aN.map(e=>`\`${e}\``).join(", ")}`,exampleValue:"google"}}),st().meta({openapiField:{description:"Whether the user can use this OAuth provider to sign in. Only one OAuth provider per type can have this set to `true`.",exampleValue:!0}}),st().meta({openapiField:{description:"Whether the user can use this OAuth provider as connected account. Multiple OAuth providers per type can have this set to `true`.",exampleValue:!0}}),a9().meta({openapiField:{description:"Account ID of the OAuth provider. This uniquely identifies the account on the provider side.",exampleValue:"google-account-id-12345"}}),a9().meta({openapiField:{description:"Provider config ID of the OAuth provider. This uniquely identifies the provider config on config.json file",exampleValue:"google"}}),a9().test("is-basic-authorization-header",'Authorization header must be in the format "Basic <base64>"',e=>!e||null!==aO(e)).test("is-authorization-header","Invalid client_id:client_secret values; did you use the correct values for the integration?",e=>{if(!e)return!0;let[t,r]=aO(e)??$(`Authz header invalid? This should've been validated by basicAuthorizationHeaderSchema: ${e}`);for(let e of JSON.parse(m.default.env.STACK_INTEGRATION_CLIENTS_CONFIG||"[]"))if(t===e.client_id&&r===e.client_secret)return!0;return!1}),so(sn({type:a9().oneOf(["pushed-from-github"]).defined(),owner:a9().defined(),repo:a9().defined(),branch:a9().defined(),commit_hash:a9().defined(),config_file_path:a9().defined()}),sn({type:a9().oneOf(["pushed-from-unknown"]).defined()}),sn({type:a9().oneOf(["unlinked"]).defined()})),new TextEncoder;let sM=new TextDecoder;class sB extends Error{static code="ERR_JOSE_GENERIC";code="ERR_JOSE_GENERIC";constructor(e,t){super(e,t),this.name=this.constructor.name,Error.captureStackTrace?.(this,this.constructor)}}class sK extends sB{static code="ERR_JWT_INVALID";code="ERR_JWT_INVALID"}class sq extends sB{[Symbol.asyncIterator];static code="ERR_JWKS_MULTIPLE_MATCHING_KEYS";code="ERR_JWKS_MULTIPLE_MATCHING_KEYS";constructor(e="multiple matching keys found in the JSON Web Key Set",t){super(e,t)}}e.s(["AsyncStore",()=>sX,"Store",()=>sz,"storeLock",()=>sJ],30868),Error("timeout while waiting for mutex to become available"),Error("mutex already locked");let sV=Error("request for lock canceled");class sH{constructor(e,t=sV){this._value=e,this._cancelError=t,this._queue=[],this._weightedWaiters=[]}acquire(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return new Promise((r,a)=>{let s={resolve:r,reject:a,weight:e,priority:t},i=sW(this._queue,e=>t<=e.priority);-1===i&&e<=this._value?this._dispatchItem(s):this._queue.splice(i+1,0,s)})}runExclusive(e){var t,r,a,s;return t=this,r=arguments,a=void 0,s=function*(e,t=1,r=0){let[a,s]=yield this.acquire(t,r);try{return yield e(a)}finally{s()}},new(a||(a=Promise))(function(e,i){function n(e){try{l(s.next(e))}catch(e){i(e)}}function o(e){try{l(s.throw(e))}catch(e){i(e)}}function l(t){var r;t.done?e(t.value):((r=t.value)instanceof a?r:new a(function(e){e(r)})).then(n,o)}l((s=s.apply(t,r||[])).next())})}waitForUnlock(e=1,t=0){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);return this._couldLockImmediately(e,t)?Promise.resolve():new Promise(r=>{var a,s;let i;this._weightedWaiters[e-1]||(this._weightedWaiters[e-1]=[]),a=this._weightedWaiters[e-1],s={resolve:r,priority:t},i=sW(a,e=>s.priority<=e.priority),a.splice(i+1,0,s)})}isLocked(){return this._value<=0}getValue(){return this._value}setValue(e){this._value=e,this._dispatchQueue()}release(e=1){if(e<=0)throw Error(`invalid weight ${e}: must be positive`);this._value+=e,this._dispatchQueue()}cancel(){this._queue.forEach(e=>e.reject(this._cancelError)),this._queue=[]}_dispatchQueue(){for(this._drainUnlockWaiters();this._queue.length>0&&this._queue[0].weight<=this._value;)this._dispatchItem(this._queue.shift()),this._drainUnlockWaiters()}_dispatchItem(e){let t=this._value;this._value-=e.weight,e.resolve([t,this._newReleaser(e.weight)])}_newReleaser(e){let t=!1;return()=>{t||(t=!0,this.release(e))}}_drainUnlockWaiters(){if(0===this._queue.length)for(let e=this._value;e>0;e--){let t=this._weightedWaiters[e-1];t&&(t.forEach(e=>e.resolve()),this._weightedWaiters[e-1]=[])}else{let e=this._queue[0].priority;for(let t=this._value;t>0;t--){let r=this._weightedWaiters[t-1];if(!r)continue;let a=r.findIndex(t=>t.priority<=e);(-1===a?r:r.splice(0,a)).forEach(e=>e.resolve())}}}_couldLockImmediately(e,t){return(0===this._queue.length||this._queue[0].priority<t)&&e<=this._value}}function sW(e,t){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return r;return -1}var sz=class{constructor(e){this._value=e,this._callbacks=new Map}get(){return this._value}set(e){let t=this._value;this._value=e,this._callbacks.forEach(r=>r(e,t))}update(e){let t=e(this._value);return this.set(t),t}onChange(e){let t=aQ();return this._callbacks.set(t,e),{unsubscribe:()=>{this._callbacks.delete(t)}}}onceChange(e){let{unsubscribe:t}=this.onChange((...r)=>{t(),e(...r)});return{unsubscribe:t}}};let sJ=new class{constructor(){this.semaphore=new sH(1),this.readers=0,this.readersMutex=new sH(1)}async withReadLock(e){await this._acquireReadLock();try{return await e()}finally{await this._releaseReadLock()}}async withWriteLock(e){await this._acquireWriteLock();try{return await e()}finally{await this._releaseWriteLock()}}async _acquireReadLock(){await this.readersMutex.acquire();try{this.readers+=1,1===this.readers&&await this.semaphore.acquire()}finally{this.readersMutex.release()}}async _releaseReadLock(){await this.readersMutex.acquire();try{this.readers-=1,0===this.readers&&this.semaphore.release()}finally{this.readersMutex.release()}}async _acquireWriteLock(){await this.semaphore.acquire()}async _releaseWriteLock(){this.semaphore.release()}};var sX=class e{constructor(...e){this._mostRecentOkValue=void 0,this._isRejected=!1,this._waitingRejectFunctions=new Map,this._callbacks=new Map,this._updateCounter=0,this._lastSuccessfulUpdate=-1,0===e.length?this._isAvailable=!1:(this._isAvailable=!0,this._mostRecentOkValue=e[0])}isAvailable(){return this._isAvailable}isRejected(){return this._isRejected}get(){return this.isRejected()?J.error(this._rejectionError):this.isAvailable()?J.ok(this._mostRecentOkValue):J.pending()}getOrWait(){let e=aQ();return this.isRejected()?ou(this._rejectionError):this.isAvailable()?oc(this._mostRecentOkValue):om(new Promise((t,r)=>{this.onceChange(e=>{t(e)}),this._waitingRejectFunctions.set(e,r)}).finally(()=>{this._waitingRejectFunctions.delete(e)}))}_setIfLatest(e,t){let r=this.get(),a=this._mostRecentOkValue;if(t>this._lastSuccessfulUpdate)switch(e.status){case"ok":if(!this._isAvailable||this._isRejected||this._mostRecentOkValue!==e.data)return this._lastSuccessfulUpdate=t,this._isAvailable=!0,this._isRejected=!1,this._mostRecentOkValue=e.data,this._rejectionError=void 0,this._callbacks.forEach(e=>e({state:this.get(),oldState:r,lastOkValue:a})),!0;break;case"error":return this._lastSuccessfulUpdate=t,this._isAvailable=!1,this._isRejected=!0,this._rejectionError=e.error,this._waitingRejectFunctions.forEach(t=>t(e.error)),this._callbacks.forEach(e=>e({state:this.get(),oldState:r,lastOkValue:a})),!0}return!1}set(e){this._setIfLatest(z.ok(e),++this._updateCounter)}update(e){let t=e(this._mostRecentOkValue);return this.set(t),t}async setAsync(e){return await sJ.withReadLock(async()=>{let t=++this._updateCounter,r=await z.fromPromise(e);return this._setIfLatest(r,t)})}setUnavailable(){this._lastSuccessfulUpdate=++this._updateCounter,this._mostRecentOkValue=void 0,this._isAvailable=!1,this._isRejected=!1,this._rejectionError=void 0}setRejected(e){this._setIfLatest(z.error(e),++this._updateCounter)}map(t){let r=new e;return this.onChange(e=>{r.set(t(e))}),r}onChange(e){return this.onStateChange(({state:t,lastOkValue:r})=>{"ok"===t.status&&e(t.data,r)})}onStateChange(e){let t=aQ();return this._callbacks.set(t,e),{unsubscribe:()=>{this._callbacks.delete(t)}}}onceChange(e){let{unsubscribe:t}=this.onChange((...r)=>{t(),e(...r)});return{unsubscribe:t}}onceStateChange(e){let{unsubscribe:t}=this.onStateChange((...r)=>{t(),e(...r)});return{unsubscribe:t}}};function sY(e){try{let t=function(e){let t,r;if("string"!=typeof e)throw new sK("JWTs must use Compact JWS serialization, JWT must be a string");let{1:a,length:s}=e.split(".");if(5===s)throw new sK("Only JWTs using Compact JWS serialization can be decoded");if(3!==s)throw new sK("Invalid JWT");if(!a)throw new sK("JWTs must contain a payload");try{t=function(e){if(Uint8Array.fromBase64)return Uint8Array.fromBase64("string"==typeof e?e:sM.decode(e),{alphabet:"base64url"});let t=e;t instanceof Uint8Array&&(t=sM.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/");try{var r=t;if(Uint8Array.fromBase64)return Uint8Array.fromBase64(r);let e=atob(r),a=new Uint8Array(e.length);for(let t=0;t<e.length;t++)a[t]=e.charCodeAt(t);return a}catch{throw TypeError("The input to be decoded is not correctly encoded.")}}(a)}catch{throw new sK("Failed to base64url decode the payload")}try{r=JSON.parse(sM.decode(t))}catch{throw new sK("Failed to parse the decoded payload as JSON")}if(!function(e){if("object"!=typeof e||null===e||"[object Object]"!==Object.prototype.toString.call(e))return!1;if(null===Object.getPrototypeOf(e))return!0;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(r))throw new sK("Invalid JWT Claims Set");return r}(e);return sD.validateSync(t)}catch(e){return null}}var sG=class e{static createIfValid(t){return sY(t)?new e(t):null}constructor(e){if(this.token=e,"undefined"===e)throw new B("Access token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!")}get payload(){return sY(this.token)??$("Invalid access token in payload (should've been validated in createIfValid)",{token:this.token})}get expiresAt(){let{exp:e}=this.payload;return new Date(void 0===e?864e13:1e3*e)}get issuedAt(){let{iat:e}=this.payload;return new Date(1e3*e)}get expiresInMillis(){return Math.max(0,this.expiresAt.getTime()-Date.now())}get issuedMillisAgo(){return Math.max(0,Date.now()-this.issuedAt.getTime())}isExpired(){return this.expiresInMillis<=0}},sQ=class{constructor(e){if(this.token=e,"undefined"===e)throw new B("Refresh token is the string 'undefined'; it's unlikely this is the correct value. They're supposed to be unguessable!")}},sZ=class e{constructor(t){this._options=t,this._knownToBeInvalid=new sz(!1),this._refreshPromise=null,this._accessToken=new sz(t.accessToken?sG.createIfValid(t.accessToken):null),this._refreshToken=t.refreshToken?new sQ(t.refreshToken):null,null===t.accessToken&&null===t.refreshToken&&this._knownToBeInvalid.set(!0),this.sessionKey=e.calculateSessionKey({accessToken:t.accessToken??null,refreshToken:t.refreshToken})}static calculateSessionKey(e){return e.refreshToken?`refresh-${e.refreshToken}`:e.accessToken?`access-${e.accessToken}`:"not-logged-in"}isKnownToBeInvalid(){return this._knownToBeInvalid.get()}markInvalid(){this._accessToken.set(null),this._knownToBeInvalid.set(!0)}onInvalidate(e){return this._knownToBeInvalid.onChange(()=>e())}getRefreshToken(){return this.isKnownToBeInvalid()?null:this._refreshToken}getAccessTokenIfNotExpiredYet(e,t){if(e>45e3)throw Error(`Required access token expiry ${e}ms is too long; access tokens are too short to be used for more than 45s`);if(null!==t&&t<15e3)throw Error(`Required access token issuance ${t}ms is too short; assume that access token generation can take at least 15s`);let r=this._getPotentiallyInvalidAccessTokenIfAvailable();return!r||r.expiresInMillis<e||null!==t&&r.issuedMillisAgo>t?null:r}async getOrFetchLikelyValidTokens(e,t){if(this.isKnownToBeInvalid())return null;let r=this.getAccessTokenIfNotExpiredYet(e,t);if(!r){let r=await this.fetchNewTokens(),a=r?.accessToken.expiresInMillis,s=r?.accessToken.issuedMillisAgo;if(void 0!==a&&a<e)throw new B(`Required access token expiry ${e}ms is too long; access tokens are too short when they're generated (${a}ms)`);if(null!==t&&void 0!==s&&s>t)throw new B(`Required access token issuance ${t}ms is too short; access token issuance is too slow (${s}ms)`);return r}return{accessToken:r,refreshToken:this.getRefreshToken()}}async fetchNewTokens(){let e=await this._getNewlyFetchedAccessToken();return e?{accessToken:e,refreshToken:this._refreshToken}:null}markAccessTokenExpired(e){e&&this._accessToken.get()?.token!==e.token||this._accessToken.set(null)}suggestAccessTokenExpired(){this._refreshToken&&this.markAccessTokenExpired()}startRefreshingAccessToken(e,t){let r=!1;return oy(async()=>{for(;!r;){let r=await this.getOrFetchLikelyValidTokens(e,t);if(!r)return;let a=Math.min(r.accessToken.expiresInMillis-e,(t??1/0)-r.accessToken.issuedMillisAgo);await of(Math.max(1,a))}}),{unsubscribe:()=>{r=!0}}}onAccessTokenChange(e){return this._accessToken.onChange(e)}_getPotentiallyInvalidAccessTokenIfAvailable(){if(!this._refreshToken||this.isKnownToBeInvalid())return null;let e=this._accessToken.get();return e&&!e.isExpired()?e:null}async _getNewlyFetchedAccessToken(){return!this._refreshToken||this._knownToBeInvalid.get()?null:(this._refreshPromise||this._refreshAndSetRefreshPromise(this._refreshToken),await this._refreshPromise)}_refreshAndSetRefreshPromise(e){let t=this._options.refreshAccessTokenCallback(e).then(e=>(t===this._refreshPromise&&(this._refreshPromise=null,this._accessToken.set(e),e||this.markInvalid()),e));this._refreshPromise=t}};function s0(e,t){if(null==e)return!1;try{return e instanceof t||Object.getPrototypeOf(e)[Symbol.toStringTag]===t.prototype[Symbol.toStringTag]}catch{return!1}}e.s(["StackClientInterface",()=>nd],70483),("u"<typeof navigator||!navigator.userAgent?.startsWith?.("Mozilla/5.0 "))&&(s="oauth4webapi/v3.8.3");let s1="ERR_INVALID_ARG_VALUE",s2="ERR_INVALID_ARG_TYPE";function s4(e,t,r){let a=TypeError(e,{cause:r});return Object.assign(a,{code:t}),a}let s3=Symbol(),s6=Symbol(),s5=Symbol(),s8=Symbol(),s7=Symbol(),s9=new TextEncoder,ie=new TextDecoder;function it(e){return"string"==typeof e?s9.encode(e):ie.decode(e)}function ir(e){return"string"==typeof e?n(e):i(e)}i=Uint8Array.prototype.toBase64?e=>(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e.toBase64({alphabet:"base64url",omitPadding:!0})):e=>{e instanceof ArrayBuffer&&(e=new Uint8Array(e));let t=[];for(let r=0;r<e.byteLength;r+=32768)t.push(String.fromCharCode.apply(null,e.subarray(r,r+32768)));return btoa(t.join("")).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},n=Uint8Array.fromBase64?e=>{try{return Uint8Array.fromBase64(e,{alphabet:"base64url"})}catch(e){throw s4("The input to be decoded is not correctly encoded.",s1,e)}}:e=>{try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"")),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}catch(e){throw s4("The input to be decoded is not correctly encoded.",s1,e)}};var ia=class extends Error{code;constructor(e,t){super(e,t),this.name=this.constructor.name,this.code=iQ,Error.captureStackTrace?.(this,this.constructor)}},is=class extends Error{code;constructor(e,t){super(e,t),this.name=this.constructor.name,t?.code&&(this.code=t?.code),Error.captureStackTrace?.(this,this.constructor)}};function ii(e,t,r){return new is(e,{code:t,cause:r})}function io(e){return!(null===e||"object"!=typeof e||Array.isArray(e))}function il(e,t,r,a,s){try{if("number"!=typeof e||!Number.isFinite(e))throw s4(`${r} must be a number`,s2,s);if(e>0)return;if(t){if(0!==e)throw s4(`${r} must be a non-negative number`,s1,s);return}throw s4(`${r} must be a positive number`,s1,s)}catch(e){if(a)throw ii(e.message,a,s);throw e}}function ic(e,t,r,a){try{if("string"!=typeof e)throw s4(`${t} must be a string`,s2,a);if(0===e.length)throw s4(`${t} must not be empty`,s1,a)}catch(e){if(r)throw ii(e.message,r,a);throw e}}function id(e){var t,r=e,a="application/json";if(t=r,t.headers.get("content-type")?.split(";")[0]!==a)throw function(e,...t){let r='"response" content-type must be ';if(t.length>2){let e=t.pop();r+=`${t.join(", ")}, or ${e}`}else 2===t.length?r+=`${t[0]} or ${t[1]}`:r+=t[0];return ii(r,i2,e)}(r,a)}function iu(e){let t=e?.[s6];return"number"==typeof t&&Number.isFinite(t)?t:0}function ip(e){let t=e?.[s5];return"number"==typeof t&&Number.isFinite(t)&&-1!==Math.sign(t)?t:30}function ih(){return Math.floor(Date.now()/1e3)}function im(e){if("object"!=typeof e||null===e)throw s4('"as" must be an object',s2);ic(e.issuer,'"as.issuer"')}function ig(e){if("object"!=typeof e||null===e)throw s4('"client" must be an object',s2);ic(e.client_id,'"client.client_id"')}function iy(e){return ic(e,'"clientSecret"'),(t,r,a,s)=>{a.set("client_id",r.client_id),a.set("client_secret",e)}}let iv=URL.parse?(e,t)=>URL.parse(e,t):(e,t)=>{try{return new URL(e,t)}catch{return null}};function i_(e,t,r,a){let s;if("string"!=typeof e||!(s=iv(e)))throw ii(`authorization server metadata does not contain a valid ${r?`"as.mtls_endpoint_aliases.${t}"`:`"as.${t}"`}`,void 0===e?i7:i9,{attribute:r?`mtls_endpoint_aliases.${t}`:t});var i=s;if(a&&"https:"!==i.protocol)throw ii("only requests to HTTPS are allowed",i3,i);if("https:"!==i.protocol&&"http:"!==i.protocol)throw ii("only HTTP and HTTPS requests are allowed",i6,i);return s}var iw=class extends Error{cause;code;error;status;error_description;response;constructor(e,t){super(e,t),this.name=this.constructor.name,this.code=iG,this.cause=t.cause,this.error=t.cause.error,this.status=t.response.status,this.error_description=t.cause.error_description,Object.defineProperty(this,"response",{enumerable:!1,value:t.response}),Error.captureStackTrace?.(this,this.constructor)}},ib=class extends Error{cause;code;error;error_description;constructor(e,t){super(e,t),this.name=this.constructor.name,this.code=iZ,this.cause=t.cause,this.error=t.cause.get("error"),this.error_description=t.cause.get("error_description")??void 0,Error.captureStackTrace?.(this,this.constructor)}},ik=class extends Error{cause;code;response;status;constructor(e,t){super(e,t),this.name=this.constructor.name,this.code=iY,this.cause=t.cause,this.status=t.response.status,this.response=t.response,Object.defineProperty(this,"response",{enumerable:!1}),Error.captureStackTrace?.(this,this.constructor)}};let iC="[a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+",iT=RegExp("^[,\\s]*("+iC+")"),iS=RegExp("^[,\\s]*("+iC+')\\s*=\\s*"((?:[^"\\\\]|\\\\[\\s\\S])*)"[,\\s]*(.*)'),ix=RegExp("^[,\\s]*("+iC+")\\s*=\\s*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)[,\\s]*(.*)"),iA=RegExp("^([a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2})(?:$|[,\\s])(.*)");async function iE(e){if(e.status>399&&e.status<500){ne(e),id(e);try{let t=await e.clone().json();if(io(t)&&"string"==typeof t.error&&t.error.length)return t}catch{}}}async function iI(e,t,r){if(e.status!==t){let t;if(function(e){let t;if(t=function(e){if(!s0(e,Response))throw s4('"response" must be an instance of Response',s2);let t=e.headers.get("www-authenticate");if(null===t)return;let r=[],a=t;for(;a;){let e,t=a.match(iT),s=t?.["1"].toLowerCase();if(!s)return;let i=a.substring(t[0].length);if(i&&!i.match(/^[\s,]/))return;let n=i.match(/^\s+(.*)$/),o=!!n;a=n?n[1]:void 0;let l={};if(o)for(;a;){let r,s;if(t=a.match(iS)){if([,r,s,a]=t,s.includes("\\"))try{s=JSON.parse(`"${s}"`)}catch{}l[r.toLowerCase()]=s;continue}if(t=a.match(ix)){[,r,s,a]=t,l[r.toLowerCase()]=s;continue}if(t=a.match(iA)){if(Object.keys(l).length)break;[,e,a]=t;break}return}else a=i||void 0;let c={scheme:s,parameters:l};e&&(c.token68=e),r.push(c)}if(r.length)return r}(e))throw new ik("server responded with a challenge in the WWW-Authenticate HTTP Header",{cause:t,response:e})}(e),t=await iE(e))throw await e.body?.cancel(),new iw("server responded with an error in the response body",{cause:t,response:e});throw ii(`"response" is not a conform ${r} response (unexpected HTTP status code)`,i4,e)}}async function iP(e,t,r,a,s,i,n){return await r(e,t,s,i),i.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),(n?.[s8]||fetch)(a.href,{body:s,headers:Object.fromEntries(i.entries()),method:"POST",redirect:"manual",signal:function(e,t){if(void 0!==t){if("function"==typeof t&&(t=t(e.href)),!(t instanceof AbortSignal))throw s4('"options.signal" must return or be an instance of AbortSignal',s2);return t}}(a,n?.signal)})}async function iR(e,t,r,a,i,n){var o,l,c;let d=(o="token_endpoint",l=t.use_mtls_endpoint_aliases,c=n?.[s3]!==!0,l&&e.mtls_endpoint_aliases&&o in e.mtls_endpoint_aliases?i_(e.mtls_endpoint_aliases[o],o,l,c):i_(e[o],o,l,c));i.set("grant_type",a);let u=function(e){s0(e,Headers)&&(e=Object.fromEntries(e.entries()));let t=new Headers(e??{});if(s&&!t.has("user-agent")&&t.set("user-agent",s),t.has("authorization"))throw s4('"options.headers" must not include the "authorization" header name',s1);return t}(n?.headers);if(u.set("accept","application/json"),n?.DPoP!==void 0){var p=n.DPoP;if(!iM.has(p))throw s4('"options.DPoP" is not a valid DPoPHandle',s1);await n.DPoP.addProof(d,u,"POST")}let h=await iP(e,t,r,d,i,u,n);return n?.DPoP?.cacheNonce(h,d),h}async function iO(e,t,r,a,s){im(e),ig(t),ic(a,'"refreshToken"');let i=new URLSearchParams(s?.additionalParameters);return i.set("refresh_token",a),iR(e,t,r,"refresh_token",i,s)}let iN=new WeakMap,iU=new WeakMap;function ij(e){if(!e.id_token)return;let t=iN.get(e);if(!t)throw s4('"ref" was already garbage collected or did not resolve from the proper sources',s1);return t}async function iD(e,t,r,a,s,i){if(im(e),ig(t),!s0(r,Response))throw s4('"response" must be an instance of Response',s2);await iI(r,200,"Token Endpoint"),ne(r);let n=await nn(r);if(ic(n.access_token,'"response" body "access_token" property',i1,{body:n}),ic(n.token_type,'"response" body "token_type" property',i1,{body:n}),n.token_type=n.token_type.toLowerCase(),void 0!==n.expires_in){let e="number"!=typeof n.expires_in?parseFloat(n.expires_in):n.expires_in;il(e,!0,'"response" body "expires_in" property',i1,{body:n}),n.expires_in=e}if(void 0!==n.refresh_token&&ic(n.refresh_token,'"response" body "refresh_token" property',i1,{body:n}),void 0!==n.scope&&"string"!=typeof n.scope)throw ii('"response" body "scope" property must be a string',i1,{body:n});if(void 0!==n.id_token){ic(n.id_token,'"response" body "id_token" property',i1,{body:n});let i=["aud","exp","iat","iss","sub"];!0===t.require_auth_time&&i.push("auth_time"),void 0!==t.default_max_age&&(il(t.default_max_age,!0,'"client.default_max_age"'),i.push("auth_time")),a?.length&&i.push(...a);let{claims:o,jwt:l}=await nt(n.id_token,nr.bind(void 0,t.id_token_signed_response_alg,e.id_token_signing_alg_values_supported,"RS256"),iu(t),ip(t),s).then(iV.bind(void 0,i)).then(iF.bind(void 0,e)).then(i$.bind(void 0,t.client_id));if(Array.isArray(o.aud)&&1!==o.aud.length){if(void 0===o.azp)throw ii('ID Token "aud" (audience) claim includes additional untrusted audiences',i8,{claims:o,claim:"aud"});if(o.azp!==t.client_id)throw ii('unexpected ID Token "azp" (authorized party) claim value',i8,{expected:t.client_id,claims:o,claim:"azp"})}void 0!==o.auth_time&&il(o.auth_time,!0,'ID Token "auth_time" (authentication time)',i1,{claims:o}),iU.set(r,l),iN.set(n,o)}if(i?.[n.token_type]!==void 0)i[n.token_type](r,n);else if("dpop"!==n.token_type&&"bearer"!==n.token_type)throw new ia("unsupported `token_type` value",{cause:{body:n}});return n}async function iL(e,t,r,a){return iD(e,t,r,void 0,a?.[s7],a?.recognizedTokenTypes)}function i$(e,t){if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e))throw ii('unexpected JWT "aud" (audience) claim value',i8,{expected:e,claims:t.claims,claim:"aud"})}else if(t.claims.aud!==e)throw ii('unexpected JWT "aud" (audience) claim value',i8,{expected:e,claims:t.claims,claim:"aud"});return t}function iF(e,t){let r=e[no]?.(t)??e.issuer;if(t.claims.iss!==r)throw ii('unexpected JWT "iss" (issuer) claim value',i8,{expected:r,claims:t.claims,claim:"iss"});return t}let iM=new WeakSet,iB=Symbol();async function iK(e,t,r,a,s,i,n){if(im(e),ig(t),!iM.has(a))throw s4('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()',s1);ic(s,'"redirectUri"');let o=na(a,"code");if(!o)throw ii('no authorization code in "callbackParameters"',i1);let l=new URLSearchParams(n?.additionalParameters);return l.set("redirect_uri",s),l.set("code",o),i!==iB&&(ic(i,'"codeVerifier"'),l.set("code_verifier",i)),iR(e,t,r,"authorization_code",l,n)}let iq={aud:"audience",c_hash:"code hash",client_id:"client id",exp:"expiration time",iat:"issued at",iss:"issuer",jti:"jwt id",nonce:"nonce",s_hash:"state hash",sub:"subject",ath:"access token hash",htm:"http method",htu:"http uri",cnf:"confirmation",auth_time:"authentication time"};function iV(e,t){for(let r of e)if(void 0===t.claims[r])throw ii(`JWT "${r}" (${iq[r]}) claim missing`,i1,{claims:t.claims});return t}let iH=Symbol(),iW=Symbol();async function iz(e,t,r,a){return"string"==typeof a?.expectedNonce||"number"==typeof a?.maxAge||a?.requireIdToken?iJ(e,t,r,a.expectedNonce,a.maxAge,a[s7],a.recognizedTokenTypes):iX(e,t,r,a?.[s7],a?.recognizedTokenTypes)}async function iJ(e,t,r,a,s,i,n){let o=[];switch(a){case void 0:a=iH;break;case iH:break;default:ic(a,'"expectedNonce" argument'),o.push("nonce")}switch(s??=t.default_max_age){case void 0:s=iW;break;case iW:break;default:il(s,!0,'"maxAge" argument'),o.push("auth_time")}let l=await iD(e,t,r,o,i,n);ic(l.id_token,'"response" body "id_token" property',i1,{body:l});let c=ij(l);if(s!==iW){let e=ih()+iu(t),r=ip(t);if(c.auth_time+s<e-r)throw ii("too much time has elapsed since the last End-User authentication",i5,{claims:c,now:e,tolerance:r,claim:"auth_time"})}if(a===iH){if(void 0!==c.nonce)throw ii('unexpected ID Token "nonce" claim value',i8,{expected:void 0,claims:c,claim:"nonce"})}else if(c.nonce!==a)throw ii('unexpected ID Token "nonce" claim value',i8,{expected:a,claims:c,claim:"nonce"});return l}async function iX(e,t,r,a,s){let i=await iD(e,t,r,void 0,a,s),n=ij(i);if(n){if(void 0!==t.default_max_age){il(t.default_max_age,!0,'"client.default_max_age"');let e=ih()+iu(t),r=ip(t);if(n.auth_time+t.default_max_age<e-r)throw ii("too much time has elapsed since the last End-User authentication",i5,{claims:n,now:e,tolerance:r,claim:"auth_time"})}if(void 0!==n.nonce)throw ii('unexpected ID Token "nonce" claim value',i8,{expected:void 0,claims:n,claim:"nonce"})}return i}let iY="OAUTH_WWW_AUTHENTICATE_CHALLENGE",iG="OAUTH_RESPONSE_BODY_ERROR",iQ="OAUTH_UNSUPPORTED_OPERATION",iZ="OAUTH_AUTHORIZATION_RESPONSE_ERROR",i0="OAUTH_PARSE_ERROR",i1="OAUTH_INVALID_RESPONSE",i2="OAUTH_RESPONSE_IS_NOT_JSON",i4="OAUTH_RESPONSE_IS_NOT_CONFORM",i3="OAUTH_HTTP_REQUEST_FORBIDDEN",i6="OAUTH_REQUEST_PROTOCOL_FORBIDDEN",i5="OAUTH_JWT_TIMESTAMP_CHECK_FAILED",i8="OAUTH_JWT_CLAIM_COMPARISON_FAILED",i7="OAUTH_MISSING_SERVER_METADATA",i9="OAUTH_INVALID_SERVER_METADATA";function ne(e){if(e.bodyUsed)throw s4('"response" body has been used already',s1)}async function nt(e,t,r,a,s){let i,n,{0:o,1:l,length:c}=e.split(".");if(5===c)if(void 0!==s)e=await s(e),{0:o,1:l,length:c}=e.split(".");else throw new ia("JWE decryption is not configured",{cause:e});if(3!==c)throw ii("Invalid JWT",i1,e);try{i=JSON.parse(it(ir(o)))}catch(e){throw ii("failed to parse JWT Header body as base64url encoded JSON",i0,e)}if(!io(i))throw ii("JWT Header must be a top level object",i1,e);if(t(i),void 0!==i.crit)throw new ia('no JWT "crit" header parameter extensions are supported',{cause:{header:i}});try{n=JSON.parse(it(ir(l)))}catch(e){throw ii("failed to parse JWT Payload body as base64url encoded JSON",i0,e)}if(!io(n))throw ii("JWT Payload must be a top level object",i1,e);let d=ih()+r;if(void 0!==n.exp){if("number"!=typeof n.exp)throw ii('unexpected JWT "exp" (expiration time) claim type',i1,{claims:n});if(n.exp<=d-a)throw ii('unexpected JWT "exp" (expiration time) claim value, expiration is past current timestamp',i5,{claims:n,now:d,tolerance:a,claim:"exp"})}if(void 0!==n.iat&&"number"!=typeof n.iat)throw ii('unexpected JWT "iat" (issued at) claim type',i1,{claims:n});if(void 0!==n.iss&&"string"!=typeof n.iss)throw ii('unexpected JWT "iss" (issuer) claim type',i1,{claims:n});if(void 0!==n.nbf){if("number"!=typeof n.nbf)throw ii('unexpected JWT "nbf" (not before) claim type',i1,{claims:n});if(n.nbf>d+a)throw ii('unexpected JWT "nbf" (not before) claim value',i5,{claims:n,now:d,tolerance:a,claim:"nbf"})}if(void 0!==n.aud&&"string"!=typeof n.aud&&!Array.isArray(n.aud))throw ii('unexpected JWT "aud" (audience) claim type',i1,{claims:n});return{header:i,claims:n,jwt:e}}function nr(e,t,r,a){if(void 0!==e){if("string"==typeof e?a.alg!==e:!e.includes(a.alg))throw ii('unexpected JWT "alg" header parameter',i1,{header:a,expected:e,reason:"client configuration"});return}if(Array.isArray(t)){if(!t.includes(a.alg))throw ii('unexpected JWT "alg" header parameter',i1,{header:a,expected:t,reason:"authorization server metadata"});return}if(void 0!==r){if("string"==typeof r?a.alg!==r:"function"==typeof r?!r(a.alg):!r.includes(a.alg))throw ii('unexpected JWT "alg" header parameter',i1,{header:a,expected:r,reason:"default value"});return}throw ii('missing client or server configuration to verify used JWT "alg" header parameter',void 0,{client:e,issuer:t,fallback:r})}function na(e,t){let{0:r,length:a}=e.getAll(t);if(a>1)throw ii(`"${t}" parameter must be provided only once`,i1);return r}let ns=Symbol(),ni=Symbol();async function nn(e,t=id){let r;try{r=await e.json()}catch(r){throw t(e),ii('failed to parse "response" body as JSON',i0,r)}if(!io(r))throw ii('"response" body must be a top level object',i1,{body:r});return r}let no=Symbol(),nl=[rg.BotChallengeRequired,rg.BotChallengeFailed];function nc(e,t){if(e?.unavailable){if(null!=e.token||null!=e.phase)throw new B(`${t} bot challenge unavailability cannot be combined with a token or phase.`);return{bot_challenge_unavailable:"true"}}let r=e?.token?.trim()||void 0;if(e?.phase==="visible")return null==r?{bot_challenge_unavailable:"true"}:{bot_challenge_token:r,bot_challenge_phase:"visible"};if(null==r){if(e?.phase!=null)throw new B(`${t} bot challenge phase options require a token.`);return{}}return e?.phase==null?{bot_challenge_token:r}:{bot_challenge_token:r,bot_challenge_phase:"invisible"}}var nd=class{constructor(e){this.options=e,this._requestListeners=new Set,this._sticky=null,this._initialProbeRate=e.probeRate??.3}addRequestListener(e){return this._requestListeners.add(e),()=>{this._requestListeners.delete(e)}}get projectId(){return this.options.projectId}getApiUrl(){return this.options.getBaseUrl()+"/api/v1"}getApiUrls(){return this.options.getApiUrls().map(e=>e+"/api/v1")}getBestApiUrl(){let e=this.getApiUrls();return this._sticky&&e[this._sticky.index]?e[this._sticky.index]:e[0]}async _withFallback(e){let t=this.getApiUrls();if(t.length<=1)return await e(t[0],{maxAttempts:5,skipDiagnostics:!1});if(this._sticky){let r=await this._tryStickyUrl(t,e);if(void 0!==r)return r}return await this._iterateUrls(t,e)}async _tryStickyUrl(e,t){let r=this._sticky;if(Math.random()<r.probeRate)try{let r=await t(e[0],{maxAttempts:1,skipDiagnostics:!0});return this._sticky=null,r}catch(e){if(e instanceof et)throw e;r.probeRate=Math.max(.5*r.probeRate,.01)}try{return await t(e[r.index],{maxAttempts:1,skipDiagnostics:!0})}catch(e){if(e instanceof et)throw e;this._sticky=null;return}}async _iterateUrls(e,t){let r;for(let a=0;a<2;a++)for(let a=0;a<e.length;a++)try{let r=await t(e[a],{maxAttempts:1,skipDiagnostics:!0});return a>0&&(this._sticky={index:a,probeRate:this._initialProbeRate}),r}catch(e){if(e instanceof et)throw e;r=e instanceof Error?e:Error(String(e))}throw r}getAnalyticsApiUrl(){return(this.options.getAnalyticsBaseUrl??this.options.getBaseUrl)()+"/api/v1"}async runNetworkDiagnostics(e,t){if(this.pendingNetworkDiagnostics)return await this.pendingNetworkDiagnostics;this.pendingNetworkDiagnostics=this._runNetworkDiagnosticsInner(e,t);try{return await this.pendingNetworkDiagnostics}finally{this.pendingNetworkDiagnostics=void 0}}async _runNetworkDiagnosticsInner(e,t){let r=async e=>{try{return await e(),"OK"}catch(e){return`${e}`}},a=await r(async()=>{let e=await fetch("https://1.1.1.1/cdn-cgi/trace");if(!e.ok)throw Error(`${e.status} ${e.statusText}: ${await e.text()}`)}),s=await r(async()=>{let e=await fetch(new URL("/health",this.getApiUrl()));if(!e.ok)throw Error(`${e.status} ${e.statusText}: ${await e.text()}`)}),i=await r(async()=>{let e=await fetch("https://app.stack-auth.com/health");if(!e.ok)throw Error(`${e.status} ${e.statusText}: ${await e.text()}`)}),n=await r(async()=>{let e=await fetch("https://api.stack-auth.com/health");if(!e.ok)throw Error(`${e.status} ${e.statusText}: ${await e.text()}`)});return{"navigator?.onLine":j.navigator?.onLine,cfTrace:a,baseUrlBackend:s,prodDashboard:i,prodBackend:n}}async _createNetworkError(e,t,r){return Error(v`
      Stack Auth is unable to connect to the server. Please check your internet connection and try again.

      If the problem persists, please contact support and provide a screenshot of your entire browser console.

      ${e}

      ${JSON.stringify(await this.runNetworkDiagnostics(t,r),null,2)}
    `,{cause:e})}async _networkRetry(e,t,r,a){let s=await z.retry(e,a?.maxAttempts??5,{exponentialDelayBase:1e3});if("error"===s.status){if(j.navigator&&!1===j.navigator.onLine)throw Error("You are offline. Please check your internet connection and try again. (window.navigator.onLine is false)",{cause:s.error});if(a?.skipDiagnostics)throw s.error;throw await this._createNetworkError(s.error,t,r)}return s.data}async _networkRetryException(e,t,r,a){return await this._networkRetry(async()=>await z.fromThrowingAsync(e),t,r,a)}async fetchNewAccessToken(e){if("projectOwnerSession"in this.options)throw Error("Admin session token is currently not supported for fetching new access token. Did you try to log in on a StackApp initiated with the admin session?");let t=this.options.publishableClientKey??aU;return await this._withFallback(async(r,a)=>await this._fetchNewAccessTokenInner(e,t,r,a))}async _fetchNewAccessTokenInner(e,t,r,a){let s,i=r+"/auth/oauth/token",n={issuer:this.options.getBaseUrl(),algorithm:"oauth2",token_endpoint:i},o={client_id:this.projectId,client_secret:t},l=iy(t),c=i.startsWith("http://"),d=await this._networkRetryException(async()=>{let t=await iO(n,o,l,e.token,c?{[s3]:!0}:void 0),r=await this._processResponse(t);if("error"===r.status){let e=r.error;if(rg.RefreshTokenError.isInstance(e))return null;throw e}if(!r.data.ok){let e=await r.data.text();throw Error(`Failed to send refresh token request: ${r.status} ${e}`)}return r.data},void 0,void 0,a);if(!d)return null;try{s=await iL(n,o,d)}catch(e){if(e instanceof iw)throw new B("ResponseBodyError when processing refresh token response",{cause:e.cause,code:e.code,error:e.error});throw new B("Unexpected error when processing refresh token response",{cause:e})}if(!s.access_token)throw new B("Access token not found in token endpoint response, this is weird!");return sG.createIfValid(s.access_token)??$("Access token in fetchNewAccessToken is invalid, looks like the backend is returning an invalid token!",{result:s})}async sendClientRequest(e,t,r,a="client",s,i){return(r??=this.createSession({refreshToken:null}),s)?await this._networkRetry(()=>this.sendClientRequestInner(e,t,r,a,s,i),r,a,i):await this._withFallback(async(s,n)=>await this._networkRetry(()=>this.sendClientRequestInner(e,t,r,a,s,i),r,a,{...n,...i}))}createSession(e){return new sZ({refreshAccessTokenCallback:async e=>await this.fetchNewAccessToken(e),...e})}async sendSessionReplayBatch(e,t,r){try{let a=await this.sendClientRequest("/session-replays/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:e,keepalive:r.keepalive},t,"client",this.getAnalyticsApiUrl(),{maxAttempts:1,skipDiagnostics:!0});return z.ok(a)}catch(e){return z.error(e instanceof Error?e:Error(String(e)))}}async sendAnalyticsEventBatch(e,t,r){try{let a=await this.sendClientRequest("/analytics/events/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:e,keepalive:r.keepalive},t,"client",this.getAnalyticsApiUrl(),{maxAttempts:1,skipDiagnostics:!0});return z.ok(a)}catch(e){return z.error(e instanceof Error?e:Error(String(e)))}}async sendClientRequestAndCatchKnownError(e,t,r,a){try{return z.ok(await this.sendClientRequest(e,t,r))}catch(e){for(let t of a)if(t.isInstance(e))return z.error(e);throw e}}async sendClientRequestInner(e,t,r,a,s,i){let n,o=await r.getOrFetchLikelyValidTokens(2e4,null),l=null,c=null;if("projectOwnerSession"in this.options){let e=this.options.projectOwnerSession;if("function"==typeof e){let t=await e();if(t){let e=sG.createIfValid(t);e&&(c={accessToken:e,refreshToken:null})}}else l=e,c=await e.getOrFetchLikelyValidTokens(2e4,null)}await this.options.prepareRequest?.();let d=(s??this.getApiUrl())+e;d.endsWith("/")&&(d=d.slice(0,-1));let u={..."WebSocketPair"in j?{}:{credentials:"omit"},...t,headers:{"X-Stack-Override-Error-Status":"true","X-Stack-Project-Id":this.projectId,"X-Stack-Access-Type":a,"X-Stack-Client-Version":this.options.clientVersion,...o?{"X-Stack-Access-Token":o.accessToken.token}:{},...o?.refreshToken?{"X-Stack-Refresh-Token":o.refreshToken.token}:{},"X-Stack-Allow-Anonymous-User":"true",..."publishableClientKey"in this.options&&this.options.publishableClientKey?{"X-Stack-Publishable-Client-Key":this.options.publishableClientKey}:{},...c?{"X-Stack-Admin-Access-Token":c.accessToken.token}:{},"X-Stack-Random-Nonce":a$(),"ngrok-skip-browser-warning":"true",...this.options.extraRequestHeaders,...t.headers},..."WebSocketPair"in j?{}:{cache:"no-store"}},p=performance.now();try{n=await fetch(d,u)}catch(t){if(this._requestListeners.size>0){let r={path:e,method:(u.method??"GET").toUpperCase(),duration:Math.round(performance.now()-p),error:t instanceof Error?t.message:"Network error"};this._requestListeners.forEach(e=>e(r))}if(t instanceof TypeError)if(aR[u.method??"GET"].idempotent)return z.error(t);else if(i?.skipDiagnostics);else throw await this._createNetworkError(t,r,a);throw t}if(this._requestListeners.size>0){let t={path:e,method:(u.method??"GET").toUpperCase(),status:n.status,duration:Math.round(performance.now()-p)};this._requestListeners.forEach(e=>e(t))}let h=await this._processResponse(n);if("error"===h.status){if(rg.InvalidAccessToken.isInstance(h.error)){if(!o)throw new B("Received invalid access token, but session is not logged in",{tokenObj:o,processedRes:h});return r.markAccessTokenExpired(o.accessToken),z.error(h.error)}if(l&&(rg.InvalidAdminAccessToken.isInstance(h.error)||rg.ApiKeyNotFound.isInstance(h.error))){if(!c)throw new B("Received invalid admin access token, but admin session is not logged in",{adminTokenObj:c,processedRes:h});return l.markAccessTokenExpired(c.accessToken),z.error(h.error)}throw h.error}let m=Object.assign(h.data,{usedTokens:o});if(m.ok)return z.ok(m);if(429===m.status){let e=m.headers.get("Retry-After");return null!==e?(console.log(`Rate limited while sending request to ${d}. Will retry after ${e} seconds...`),await of(1e3*Number(e)),z.error(Error(`Rate limited, retrying after ${e} seconds`))):(console.log(`Rate limited while sending request to ${d}, no retry-after header received. Retrying...`),z.error(Error("Rate limited, no retry-after header received")))}{let t=await m.text(),r=new B(`Failed to send request to ${d}: ${m.status} ${t}`,{request:u,res:m,path:e});if(508===m.status&&t.includes("INFINITE_LOOP_DETECTED"))return z.error(r);throw r}}async _processResponse(e){let t=e;if(e.headers.has("x-stack-actual-status")){let r=Number(e.headers.get("x-stack-actual-status"));t=new Response(e.body,{status:r,statusText:e.statusText,headers:e.headers})}if(t.headers.has("x-stack-known-error")){let e=await t.json();if(t.headers.get("x-stack-known-error")!==e.code)throw new B("Mismatch between x-stack-known-error header and error code in body; the server's response is invalid");let r=et.fromJson(e);return z.error(r)}return z.ok(t)}async checkFeatureSupport(e){throw new B(await (await this.sendClientRequest("/check-feature-support",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},null)).text())}async sendForgotPasswordEmail(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/password/send-reset-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,callback_url:t})},null,[rg.UserNotFound]);return"error"===r.status?z.error(r.error):z.ok(void 0)}async sendVerificationEmail(e,t,r){let a=await this.sendClientRequestAndCatchKnownError("/contact-channels/send-verification-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,callback_url:t})},r,[rg.EmailAlreadyVerified]);if("error"===a.status)return a.error}async sendMagicLinkEmail(e,t,r){let a=await this.sendClientRequestAndCatchKnownError("/auth/otp/send-sign-in-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,callback_url:t,...nc(r,"Magic link sign-in")})},null,[rg.RedirectUrlNotWhitelisted,...nl]);return"error"===a.status?z.error(a.error):z.ok(await a.data.json())}async resetPassword(e){let t=await this.sendClientRequestAndCatchKnownError("onlyVerifyCode"in e?"/auth/password/reset/check-code":"/auth/password/reset",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e.code,..."password"in e?{password:e.password}:{}})},null,[rg.VerificationCodeError]);return"error"===t.status?z.error(t.error):z.ok(void 0)}async updatePassword(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/password/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:e.oldPassword,new_password:e.newPassword})},t,[rg.PasswordConfirmationMismatch,rg.PasswordRequirementsNotMet]);if("error"===r.status)return r.error}async setPassword(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/password/set",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t,[rg.PasswordRequirementsNotMet]);if("error"===r.status)return r.error}async verifyPasswordResetCode(e){let t=await this.resetPassword({code:e,onlyVerifyCode:!0});return"error"===t.status?z.error(t.error):z.ok(void 0)}async verifyEmail(e){let t=await this.sendClientRequestAndCatchKnownError("/contact-channels/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})},null,[rg.VerificationCodeError]);return"error"===t.status?z.error(t.error):z.ok(void 0)}async initiatePasskeyRegistration(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-registration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t,[]);return"error"===r.status?z.error(r.error):z.ok(await r.data.json())}async registerPasskey(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/passkey/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t,[rg.PasskeyRegistrationFailed]);return"error"===r.status?z.error(r.error):z.ok(void 0)}async initiatePasskeyAuthentication(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/passkey/initiate-passkey-authentication",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t,[]);return"error"===r.status?z.error(r.error):z.ok(await r.data.json())}async sendTeamInvitation(e){await this.sendClientRequest("/team-invitations/send-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,team_id:e.teamId,callback_url:e.callbackUrl})},e.session)}async acceptTeamInvitation(e){let t=await this.sendClientRequestAndCatchKnownError("check"===e.type?"/team-invitations/accept/check-code":"details"===e.type?"/team-invitations/accept/details":"/team-invitations/accept",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e.code})},e.session,[rg.VerificationCodeError]);return"error"===t.status?z.error(t.error):z.ok(await t.data.json())}async totpMfa(e,t,r){let a=await (await this.sendClientRequest("/auth/mfa/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e,type:"totp",totp:t})},r)).json();return{accessToken:a.access_token,refreshToken:a.refresh_token,newUser:a.is_new_user}}async signInWithCredential(e,t,r){let a=await this.sendClientRequestAndCatchKnownError("/auth/password/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})},r,[rg.EmailPasswordMismatch]);if("error"===a.status)return z.error(a.error);let s=await a.data.json();return z.ok({accessToken:s.access_token,refreshToken:s.refresh_token})}async signUpWithCredential(e,t,r,a,s){let i=await this.sendClientRequestAndCatchKnownError("/auth/password/sign-up",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:e,password:t,verification_callback_url:r,...nc(s,"Credential sign-up")})},a,[rg.UserWithEmailAlreadyExists,rg.PasswordRequirementsNotMet,...nl]);if("error"===i.status)return z.error(i.error);let n=await i.data.json();return z.ok({accessToken:n.access_token,refreshToken:n.refresh_token})}async signUpAnonymously(e){let t=await this.sendClientRequestAndCatchKnownError("/auth/anonymous/sign-up",{method:"POST"},e,[]);if("error"===t.status)return z.error(t.error);let r=await t.data.json();return z.ok({accessToken:r.access_token,refreshToken:r.refresh_token})}async signInWithMagicLink(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/otp/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:e})},t,[rg.VerificationCodeError]);if("error"===r.status)return z.error(r.error);let a=await r.data.json();return z.ok({accessToken:a.access_token,refreshToken:a.refresh_token,newUser:a.is_new_user})}async signInWithMfa(e,t,r){let a=await this.sendClientRequestAndCatchKnownError("/auth/mfa/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"totp",totp:e,code:t})},r,[rg.VerificationCodeError]);if("error"===a.status)return z.error(a.error);let s=await a.data.json();return z.ok({accessToken:s.access_token,refreshToken:s.refresh_token,newUser:s.is_new_user})}async signInWithPasskey(e,t){let r=await this.sendClientRequestAndCatchKnownError("/auth/passkey/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},t,[rg.PasskeyAuthenticationFailed]);if("error"===r.status)return z.error(r.error);let a=await r.data.json();return z.ok({accessToken:a.access_token,refreshToken:a.refresh_token})}async getOAuthUrl(e){let t=new URL(e.redirectUrl);for(let e of["code","state"])t.searchParams.has(e)&&console.warn("Redirect URL already contains "+e+" parameter, removing it as it will be overwritten by the OAuth callback"),t.searchParams.delete(e);if("projectOwnerSession"in this.options)throw Error("Admin session token is currently not supported for OAuth");let r=this.options.publishableClientKey??aU,a=new URL(this.getBestApiUrl()+"/auth/oauth/authorize/"+e.provider.toLowerCase());a.searchParams.set("client_id",this.projectId),a.searchParams.set("client_secret",r),a.searchParams.set("redirect_uri",t.toString()),a.searchParams.set("scope","legacy"),a.searchParams.set("state",e.state),a.searchParams.set("grant_type","authorization_code"),a.searchParams.set("code_challenge",e.codeChallenge),a.searchParams.set("code_challenge_method","S256"),a.searchParams.set("response_type","code"),a.searchParams.set("type",e.type),a.searchParams.set("error_redirect_url",e.errorRedirectUrl);let s=await e.session.getOrFetchLikelyValidTokens(45e3,6e4);for(let[t,r]of(s&&a.searchParams.set("token",s.accessToken.token),e.afterCallbackRedirectUrl&&a.searchParams.set("after_callback_redirect_url",e.afterCallbackRedirectUrl),e.providerScope&&a.searchParams.set("provider_scope",e.providerScope),Object.entries(nc(e.botChallenge,`OAuth ${e.type}`))))a.searchParams.set(t,r);return a.toString()}async authorizeOAuth(e){let t;if("u"<typeof window)throw new B("authorizeOAuth can currently only be called in a browser environment");await this.options.prepareRequest?.();let r=new URL(await this.getOAuthUrl(e));r.searchParams.set("stack_response_mode","json");try{t=await fetch(r,{method:"GET"})}catch(t){if(t instanceof TypeError)throw await this._createNetworkError(t,e.session,"client");throw t}let a=await this._processResponse(t);if("error"===a.status){var s;if(s=a.error,rg.BotChallengeRequired.isInstance(s)||rg.BotChallengeFailed.isInstance(s))return z.error(a.error);throw a.error}if(200!==a.data.status)throw new B(`OAuth authorize returned an unexpected status: ${a.data.status}`);let i=await a.data.json();if(null==i||"object"!=typeof i||Array.isArray(i))throw new B("OAuth authorize response body must be an object",{body:i});let n=i.location;if("string"!=typeof n)throw new B("OAuth authorize response is missing a redirect location",{body:i});return z.ok(n)}async callOAuthCallback(e){if("projectOwnerSession"in this.options)throw Error("Admin session token is currently not supported for OAuth");let t=this.options.publishableClientKey??aU;return await this._withFallback(async r=>await this._callOAuthCallbackInner(e,t,r))}async _callOAuthCallbackInner(e,t,r){let a,s,i=r+"/auth/oauth/token",n={issuer:this.options.getBaseUrl(),algorithm:"oauth2",token_endpoint:i},o={client_id:this.projectId,client_secret:t},l=iy(t),c=i.startsWith("http://");try{a=function(e,t,r,a){var s;if(im(e),ig(t),r instanceof URL&&(r=r.searchParams),!(r instanceof URLSearchParams))throw s4('"parameters" must be an instance of URLSearchParams, or URL',s2);if(na(r,"response"))throw ii('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()',i1,{parameters:r});let i=na(r,"iss"),n=na(r,"state");if(!i&&e.authorization_response_iss_parameter_supported)throw ii('response parameter "iss" (issuer) missing',i1,{parameters:r});if(i&&i!==e.issuer)throw ii('unexpected "iss" (issuer) response parameter value',i1,{expected:e.issuer,parameters:r});switch(a){case void 0:case ni:if(void 0!==n)throw ii('unexpected "state" response parameter encountered',i1,{expected:void 0,parameters:r});break;case ns:break;default:if(ic(a,'"expectedState" argument'),n!==a)throw ii(void 0===n?'response parameter "state" missing':'unexpected "state" response parameter value',i1,{expected:a,parameters:r})}if(na(r,"error"))throw new ib("authorization response from the server is an error",{cause:r});let o=na(r,"id_token"),l=na(r,"token");if(void 0!==o||void 0!==l)throw new ia("implicit and hybrid flows are not supported");return s=new URLSearchParams(r),iM.add(s),s}(n,o,e.oauthParams,e.state)}catch(e){if(e instanceof ib)throw new B("Authorization response error when validating outer OAuth response",{cause:Object.fromEntries(e.cause),code:e.code,error:e.error});throw new B("Unexpected error when validating outer OAuth response",{cause:e})}let d=await iK(n,o,l,a,e.redirectUri,e.codeVerifier,c?{[s3]:!0}:void 0);try{s=await iz(n,o,d)}catch(e){if(e instanceof iw){if("MULTI_FACTOR_AUTHENTICATION_REQUIRED"===e.cause.code)throw new rg.MultiFactorAuthenticationRequired(e.cause.details.attempt_code);throw new B("Outer OAuth error during authorization code response",{cause:e.cause,code:e.code,error:e.error})}throw new B("Unexpected error when processing authorization code response",{cause:e})}return{newUser:s.is_new_user,afterCallbackRedirectUrl:s.after_callback_redirect_url,accessToken:s.access_token,refreshToken:s.refresh_token??$("Refresh token not found in outer OAuth response")}}async signOut(e){if(await e.getOrFetchLikelyValidTokens(2e4,null)){let t=await this.sendClientRequestAndCatchKnownError("/auth/sessions/current",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({})},e,[rg.RefreshTokenError]);if("error"===t.status)if(rg.RefreshTokenError.isInstance(t.error));else throw new B("Unexpected error",{error:t.error})}e.markInvalid()}async getClientUserByToken(e){let t=await this.sendClientRequestAndCatchKnownError("/users/me",{},e,[rg.CannotGetOwnUserWithoutUser]);if("error"===t.status)if(rg.CannotGetOwnUserWithoutUser.isInstance(t.error))return null;else throw new B("Unexpected uncaught error",{cause:t.error});let r=await t.data.json();if(!r)throw new B("User endpoint returned null; this should never happen");return r}async listTeamInvitations(e,t){return(await (await this.sendClientRequest("/team-invitations?"+new URLSearchParams({team_id:e.teamId}),{},t)).json()).items}async listCurrentUserTeamInvitations(e){return(await (await this.sendClientRequest("/team-invitations?"+new URLSearchParams({user_id:"me"}),{},e)).json()).items}async acceptTeamInvitationById(e,t){await this.sendClientRequest(aG`/team-invitations/${e}/accept`+"?"+new URLSearchParams({user_id:"me"}),{method:"POST"},t)}async revokeTeamInvitation(e,t,r){await this.sendClientRequest(`/team-invitations/${e}?team_id=${t}`,{method:"DELETE"},r)}async listTeamMemberProfiles(e,t){return(await (await this.sendClientRequest("/team-member-profiles?"+new URLSearchParams(R({team_id:e.teamId,user_id:e.userId})),{},t)).json()).items}async getTeamMemberProfile(e,t){return await (await this.sendClientRequest(`/team-member-profiles/${e.teamId}/${e.userId}`,{},t)).json()}async leaveTeam(e,t){await this.sendClientRequest(`/team-memberships/${e}/me`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},t)}async updateTeamMemberProfile(e,t){await this.sendClientRequest(`/team-member-profiles/${e.teamId}/${e.userId}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e.profile)},t)}async updateTeam(e,t){await this.sendClientRequest(`/teams/${e.teamId}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e.data)},t)}async listCurrentUserTeamPermissions(e,t){return(await (await this.sendClientRequest(`/team-permissions?team_id=${e.teamId}&user_id=me&recursive=${e.recursive}`,{},t)).json()).items}async listCurrentUserProjectPermissions(e,t){return(await (await this.sendClientRequest(`/project-permissions?user_id=me&recursive=${e.recursive}`,{},t)).json()).items}async listCurrentUserTeams(e){return(await (await this.sendClientRequest("/teams?user_id=me",{},e)).json()).items}async getClientProject(){let e=await this.sendClientRequestAndCatchKnownError("/projects/current",{},null,[rg.ProjectNotFound]);if("error"===e.status)return z.error(e.error);let t=await e.data.json();return z.ok(t)}async updateClientUser(e,t){await this.sendClientRequest("/users/me",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t)}async listProjects(e){let t=await this.sendClientRequest("/internal/projects",{},e);if(!t.ok)throw Error("Failed to list projects: "+t.status+" "+await t.text());return(await t.json()).items}async createProject(e,t){let r=await this.sendClientRequest("/internal/projects",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t);if(!r.ok)throw Error("Failed to create project: "+r.status+" "+await r.text());return await r.json()}async createProviderAccessToken(e,t,r){return await (await this.sendClientRequest(`/connected-accounts/me/${e}/access-token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({scope:t})},r)).json()}async createProviderAccessTokenByAccount(e,t,r,a){return await (await this.sendClientRequest(`/connected-accounts/me/${encodeURIComponent(e)}/${encodeURIComponent(t)}/access-token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({scope:r})},a)).json()}async listConnectedAccounts(e){return await (await this.sendClientRequest("/connected-accounts/me",{method:"GET"},e)).json()}async createClientTeam(e,t){return await (await this.sendClientRequest("/teams",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t)).json()}async deleteTeam(e,t){await this.sendClientRequest(`/teams/${e}`,{method:"DELETE"},t)}async deleteCurrentUser(e){await this.sendClientRequest("/users/me",{method:"DELETE"},e)}async createClientContactChannel(e,t){return await (await this.sendClientRequest("/contact-channels",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t)).json()}async updateClientContactChannel(e,t,r){return await (await this.sendClientRequest(`/contact-channels/me/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},r)).json()}async deleteClientContactChannel(e,t){await this.sendClientRequest(`/contact-channels/me/${e}`,{method:"DELETE"},t)}async deleteSession(e,t){await this.sendClientRequest(`/auth/sessions/${e}?user_id=me`,{method:"DELETE"},t)}async listSessions(e){return await (await this.sendClientRequest("/auth/sessions?user_id=me",{method:"GET"},e)).json()}async listClientContactChannels(e){return(await (await this.sendClientRequest("/contact-channels?user_id=me",{method:"GET"},e)).json()).items}async sendCurrentUserContactChannelVerificationEmail(e,t,r){let a=await this.sendClientRequestAndCatchKnownError(`/contact-channels/me/${e}/send-verification-code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({callback_url:t})},r,[rg.EmailAlreadyVerified]);return"error"===a.status?z.error(a.error):z.ok(void 0)}async cliLogin(e,t,r){let a=await this.sendClientRequestAndCatchKnownError("/auth/cli/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({login_code:e,refresh_token:t})},r,[rg.SchemaError]);return"error"===a.status?z.error(a.error):z.ok(void 0)}async _getApiKeyRequestInfo(e){if("user_id"in e&&"team_id"in e)throw new B("Cannot specify both user_id and team_id in _getApiKeyRequestInfo");return{endpoint:"team_id"in e?"/team-api-keys":"/user-api-keys",queryParams:new URLSearchParams(O(e))}}async listProjectApiKeys(e,t,r){let a=("client"===r?this.sendClientRequest:this.sendServerRequest).bind(this),{endpoint:s,queryParams:i}=await this._getApiKeyRequestInfo(e);return(await (await a(`${s}?${i.toString()}`,{method:"GET"},t,r)).json()).items}async createProjectApiKey(e,t,r){let a=("client"===r?this.sendClientRequest:this.sendServerRequest).bind(this),{endpoint:s}=await this._getApiKeyRequestInfo(e);return await (await a(`${s}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},t,r)).json()}async getProjectApiKey(e,t,r,a){let s=("client"===a?this.sendClientRequest:this.sendServerRequest).bind(this),{endpoint:i,queryParams:n}=await this._getApiKeyRequestInfo(e);return await (await s(`${i}/${t}?${n.toString()}`,{method:"GET"},r,a)).json()}async updateProjectApiKey(e,t,r,a,s){let i=("client"===s?this.sendClientRequest:this.sendServerRequest).bind(this),{endpoint:n,queryParams:o}=await this._getApiKeyRequestInfo(e);return await (await i(`${n}/${t}?${o.toString()}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(r)},a,s)).json()}async checkProjectApiKey(e,t,r,a){let s=await ("client"===a?this.sendClientRequestAndCatchKnownError:this.sendServerRequestAndCatchKnownError).bind(this)(`/${e}-api-keys/check`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({api_key:t})},r,[rg.ApiKeyNotValid]);return"error"===s.status?null:await s.data.json()}async listNotificationCategories(e){return(await (await this.sendClientRequest("/emails/notification-preference/me",{},e)).json()).items}async setNotificationsEnabled(e,t,r){await this.sendClientRequest(`/emails/notification-preference/me/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:t})},r)}async getOAuthProvider(e,t,r){return await (await this.sendClientRequest(`/oauth-providers/${e}/${t}`,{method:"GET"},r)).json()}async updateOAuthProvider(e,t,r,a){return await (await this.sendClientRequest(`/oauth-providers/${e}/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(r)},a)).json()}async listOAuthProviders(e={},t){let r=new URLSearchParams(R(e));return(await (await this.sendClientRequest(`/oauth-providers${r.toString()?`?${r.toString()}`:""}`,{method:"GET"},t)).json()).items}async deleteOAuthProvider(e,t,r){return await (await this.sendClientRequest(`/oauth-providers/${e}/${t}`,{method:"DELETE"},r)).json()}async getItem(e,t,r="client"){let a,s;if("userId"in e)a="user",s=e.userId;else if("teamId"in e)a="team",s=e.teamId;else if("customCustomerId"in e)a="custom",s=e.customCustomerId;else throw new B("getItem requires one of userId, teamId, or customCustomerId");return await (await ("client"===r?this.sendClientRequest:this.sendServerRequest).bind(this)(aG`/payments/items/${a}/${s}/${e.itemId}`,{},t,r)).json()}async listProducts(e,t,r="client"){let a=new URLSearchParams(R({cursor:e.cursor,limit:void 0!==e.limit?e.limit.toString():void 0})),s=aG`/payments/products/${e.customer_type}/${e.customer_id}`;return await (await ("client"===r?this.sendClientRequest:this.sendServerRequest).bind(this)(`${s}${a.toString()?`?${a.toString()}`:""}`,{},t,r)).json()}async listInvoices(e,t){let r=new URLSearchParams(R({cursor:e.cursor,limit:void 0!==e.limit?e.limit.toString():void 0})),a=aG`/payments/invoices/${e.customer_type}/${e.customer_id}`;return await (await this.sendClientRequest(`${a}${r.toString()?`?${r.toString()}`:""}`,{},t)).json()}async cancelSubscription(e,t){let r=new URLSearchParams(R({subscription_id:e.subscription_id})),a=aG`/payments/products/${e.customer_type}/${e.customer_id}/${e.product_id}`;await this.sendClientRequest(`${a}${r.toString()?`?${r.toString()}`:""}`,{method:"DELETE"},t)}async switchSubscription(e,t){await this.sendClientRequest(aG`/payments/products/${e.customer_type}/${e.customer_id}/switch`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({from_product_id:e.from_product_id,to_product_id:e.to_product_id,price_id:e.price_id,quantity:e.quantity})},t)}async createCheckoutUrl(e,t,r,a,s,i="client"){let{url:n}=await (await ("client"===i?this.sendClientRequest:this.sendServerRequest).bind(this)("/payments/purchases/create-purchase-url",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({customer_type:e,customer_id:t,..."string"==typeof r?{product_id:r}:{product_inline:r},return_url:s})},a,i)).json();return n}async getCustomerBilling(e,t,r){return await (await this.sendClientRequest(aG`/payments/billing/${e}/${t}`,{},r)).json()}async createCustomerPaymentMethodSetupIntent(e,t,r){return await (await this.sendClientRequest(aG`/payments/payment-method/${e}/${t}/setup-intent`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},r)).json()}async setDefaultCustomerPaymentMethodFromSetupIntent(e,t,r,a){return await (await this.sendClientRequest(aG`/payments/payment-method/${e}/${t}/set-default`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({setup_intent_id:r})},a)).json()}async transferProject(e,t,r){if("internal"!==this.options.projectId)throw new B("StackClientInterface.transferProject() is only available for internal projects (please specify the project ID in the constructor)");await this.sendClientRequest("/internal/projects/transfer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({project_id:t,new_team_id:r})},e)}};let nu="stack-data-vault-client-side-encryption-value-encryption-value-encryption";async function np(e,t){return await aq({purpose:"stack-data-vault-client-side-encryption-value-encryption-key-hash",extra:e,value:t,iterations:1e5})}async function nh(e,t){return ax(await aK({purpose:"stack-data-vault-client-side-encryption-key-hash",extra:e,value:await np(e,t)}))}async function nm(e,t,r){return ax(await aM({purpose:nu,secret:await np(e,t),value:new TextEncoder().encode(r)}))}async function nf(e,t,r){let a=await aB({purpose:nu,secret:await np(e,t),cipher:aA(r)});if("error"===a.status)throw Error("Data vault client-side decryption failed. Are you sure you're using the correct secret?",{cause:a.error});return new TextDecoder().decode(a.data)}var ng=class extends nd{constructor(e){super(e),this.options=e}async sendServerRequest(e,t,r,a="server"){return await this.sendClientRequest(e,{...t,headers:{"x-stack-secret-server-key":"secretServerKey"in this.options?this.options.secretServerKey:"",...t.headers}},r,a)}async getCustomerBilling(e,t,r){return await (await this.sendServerRequest(aG`/payments/billing/${e}/${t}`,{},r)).json()}async createCustomerPaymentMethodSetupIntent(e,t,r){return await (await this.sendServerRequest(aG`/payments/payment-method/${e}/${t}/setup-intent`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},r)).json()}async setDefaultCustomerPaymentMethodFromSetupIntent(e,t,r,a){return await (await this.sendServerRequest(aG`/payments/payment-method/${e}/${t}/set-default`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({setup_intent_id:r})},a)).json()}async sendServerRequestAndCatchKnownError(e,t,r,a){try{return z.ok(await this.sendServerRequest(e,t,r))}catch(e){for(let t of a)if(t.isInstance(e))return z.error(e);throw e}}async createServerUser(e){return await (await this.sendServerRequest("/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async getServerUserByToken(e){let t=await this.sendServerRequestAndCatchKnownError("/users/me",{},e,[rg.CannotGetOwnUserWithoutUser]);if("error"===t.status)if(rg.CannotGetOwnUserWithoutUser.isInstance(t.error))return null;else throw new B("Unexpected uncaught error",{cause:t.error});let r=await t.data.json();if(!r)throw new B("User endpoint returned null; this should never happen");return r}async getServerUserById(e){let t=await this.sendServerRequestAndCatchKnownError(aG`/users/${e}`,{},null,[rg.UserNotFound]);if("error"===t.status)return z.error(t.error);let r=await t.data.json();return z.ok(r)}async listServerTeamInvitations(e){return(await (await this.sendServerRequest(aG`/team-invitations?team_id=${e.teamId}`,{},null)).json()).items}async revokeServerTeamInvitation(e,t){await this.sendServerRequest(aG`/team-invitations/${e}?team_id=${t}`,{method:"DELETE"},null)}async listServerTeamMemberProfiles(e){return(await (await this.sendServerRequest(aG`/team-member-profiles?team_id=${e.teamId}`,{},null)).json()).items}async getServerTeamMemberProfile(e){return await (await this.sendServerRequest(aG`/team-member-profiles/${e.teamId}/${e.userId}`,{},null)).json()}async listServerTeamPermissions(e,t){return(await (await this.sendServerRequest(`/team-permissions?${new URLSearchParams(R({user_id:e.userId,team_id:e.teamId,recursive:e.recursive.toString()}))}`,{},t)).json()).items}async listServerProjectPermissions(e,t){return(await (await this.sendServerRequest(`/project-permissions?${new URLSearchParams(R({user_id:e.userId,recursive:e.recursive.toString()}))}`,{},t)).json()).items}async listServerUsers(e){let t=new URLSearchParams(R({cursor:e.cursor,limit:e.limit?.toString(),desc:e.desc?.toString(),...e.orderBy?{order_by:({signedUpAt:"signed_up_at"})[e.orderBy]}:{},...e.query?{query:e.query}:{},...e.includeRestricted?{include_restricted:"true"}:{},...e.includeAnonymous?{include_anonymous:"true"}:{},...e.onlyAnonymous?{only_anonymous:"true"}:{}}));return await (await this.sendServerRequest("/users?"+t.toString(),{},null)).json()}async listServerTeams(e){return(await (await this.sendServerRequest(`/teams?${new URLSearchParams(R({user_id:e?.userId}))}`,{},null)).json()).items}async getServerTeam(e){return await (await this.sendServerRequest(`/teams/${e}`,{},null)).json()}async listServerTeamUsers(e){return(await (await this.sendServerRequest(`/users?team_id=${e}`,{},null)).json()).items}async createServerTeam(e){return await (await this.sendServerRequest("/teams",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async updateServerTeam(e,t){return await (await this.sendServerRequest(aG`/teams/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)).json()}async deleteServerTeam(e){await this.sendServerRequest(aG`/teams/${e}`,{method:"DELETE"},null)}async addServerUserToTeam(e){return await (await this.sendServerRequest(aG`/team-memberships/${e.teamId}/${e.userId}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)).json()}async removeServerUserFromTeam(e){await this.sendServerRequest(aG`/team-memberships/${e.teamId}/${e.userId}`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async listServerUserTeamInvitations(e){return(await (await this.sendServerRequest("/team-invitations?"+new URLSearchParams({user_id:e}),{},null)).json()).items}async acceptServerTeamInvitationById(e,t){await this.sendServerRequest(aG`/team-invitations/${e}/accept`+"?"+new URLSearchParams({user_id:t}),{method:"POST"},null)}async updateServerUser(e,t){return await (await this.sendServerRequest(aG`/users/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)).json()}async createServerProviderAccessToken(e,t,r){return await (await this.sendServerRequest(aG`/connected-accounts/${e}/${t}/access-token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({scope:r})},null)).json()}async createServerProviderAccessTokenByAccount(e,t,r,a){return await (await this.sendServerRequest(aG`/connected-accounts/${e}/${t}/${r}/access-token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({scope:a})},null)).json()}async listServerConnectedAccounts(e){return await (await this.sendServerRequest(aG`/connected-accounts/${e}`,{method:"GET"},null)).json()}async createServerUserSession(e,t,r){let a=await (await this.sendServerRequest("/auth/sessions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user_id:e,expires_in_millis:t,is_impersonation:r})},null)).json();return{accessToken:a.access_token,refreshToken:a.refresh_token}}async leaveServerTeam(e){await this.sendClientRequest(aG`/team-memberships/${e.teamId}/${e.userId}`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async updateServerTeamMemberProfile(e){await this.sendServerRequest(aG`/team-member-profiles/${e.teamId}/${e.userId}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e.profile)},null)}async grantServerTeamUserPermission(e,t,r){await this.sendServerRequest(aG`/team-permissions/${e}/${t}/${r}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async grantServerProjectPermission(e,t){await this.sendServerRequest(aG`/project-permissions/${e}/${t}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async revokeServerTeamUserPermission(e,t,r){await this.sendServerRequest(aG`/team-permissions/${e}/${t}/${r}`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async revokeServerProjectPermission(e,t){await this.sendServerRequest(aG`/project-permissions/${e}/${t}`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async deleteServerUser(e){await this.sendServerRequest(aG`/users/${e}`,{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)}async createServerContactChannel(e){return await (await this.sendServerRequest("/contact-channels",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async updateServerContactChannel(e,t,r){return await (await this.sendServerRequest(aG`/contact-channels/${e}/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(r)},null)).json()}async deleteServerContactChannel(e,t){await this.sendServerRequest(aG`/contact-channels/${e}/${t}`,{method:"DELETE"},null)}async listServerContactChannels(e){return(await (await this.sendServerRequest(aG`/contact-channels?user_id=${e}`,{method:"GET"},null)).json()).items}async listServerNotificationCategories(e){return(await (await this.sendServerRequest(aG`/emails/notification-preference/${e}`,{method:"GET"},null)).json()).items}async setServerNotificationsEnabled(e,t,r){await this.sendServerRequest(aG`/emails/notification-preference/${e}/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({enabled:r})},null)}async sendServerContactChannelVerificationEmail(e,t,r){await this.sendServerRequest(aG`/contact-channels/${e}/${t}/send-verification-code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({callback_url:r})},null)}async listServerSessions(e){return await (await this.sendServerRequest(aG`/auth/sessions?user_id=${e}`,{method:"GET"},null)).json()}async deleteServerSession(e){await this.sendServerRequest(aG`/auth/sessions/${e}`,{method:"DELETE"},null)}async sendServerTeamInvitation(e){await this.sendServerRequest("/team-invitations/send-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,team_id:e.teamId,callback_url:e.callbackUrl})},null)}async updatePassword(e){let t=await this.sendServerRequestAndCatchKnownError("/auth/password/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:e.oldPassword,new_password:e.newPassword})},null,[rg.PasswordConfirmationMismatch,rg.PasswordRequirementsNotMet]);if("error"===t.status)return t.error}async createServerOAuthProvider(e){return await (await this.sendServerRequest("/oauth-providers",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async listServerOAuthProviders(e={}){let t=new URLSearchParams(R(e));return(await (await this.sendServerRequest(`/oauth-providers${t.toString()?`?${t.toString()}`:""}`,{method:"GET"},null)).json()).items}async updateServerOAuthProvider(e,t,r){return await (await this.sendServerRequest(aG`/oauth-providers/${e}/${t}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(r)},null)).json()}async deleteServerOAuthProvider(e,t){return await (await this.sendServerRequest(aG`/oauth-providers/${e}/${t}`,{method:"DELETE"},null)).json()}async sendEmail(e){return await this.sendServerRequest("/emails/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_ids:e.userIds,all_users:e.allUsers,theme_id:e.themeId,html:e.html,subject:e.subject,notification_category_name:e.notificationCategoryName,template_id:e.templateId,variables:e.variables,draft_id:e.draftId,scheduled_at_millis:e.scheduledAt?.getTime()})},null),z.ok(void 0)}async getEmailDeliveryInfo(){return await (await this.sendServerRequest("/emails/delivery-info",{method:"GET",headers:{"Content-Type":"application/json"}},null)).json()}async activateEmailCapacityBoost(){return await (await this.sendServerRequest("/emails/capacity-boost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})},null)).json()}async updateItemQuantity(e,t){let r,a,s=e.itemId;if("userId"in e)r="user",a=e.userId;else if("teamId"in e)r="team",a=e.teamId;else if("customCustomerId"in e)r="custom",a=e.customCustomerId;else throw new B("updateItemQuantity requires one of userId, teamId, or customCustomerId");let i=new URLSearchParams({allow_negative:(t.allow_negative??!1).toString()});await this.sendServerRequest(`/payments/items/${r}/${a}/${s}/update-quantity?${i.toString()}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({delta:t.delta,expires_at:t.expires_at,description:t.description})},null)}async grantProduct(e){if(!e.productId&&!e.product)throw new B("grantProduct requires either productId or product");if(e.productId&&e.product)throw new B("grantProduct should not receive both productId and product");let t=R({product_id:e.productId,product_inline:e.product,quantity:e.quantity});await this.sendServerRequest(aG`/payments/products/${e.customerType}/${e.customerId}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)}async getDataVaultStoreValue(e,t,r){let a=await nh(e,r),s=await this.sendServerRequestAndCatchKnownError(`/data-vault/stores/${t}/get`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({hashed_key:a})},null,[rg.DataVaultStoreHashedKeyDoesNotExist]);if("error"===s.status)if(rg.DataVaultStoreHashedKeyDoesNotExist.isInstance(s.error))return null;else throw new B("Unexpected uncaught error",{cause:s.error});let i=(await s.data.json()).encrypted_value;if("string"!=typeof i)throw new B("encrypted_value is not a string",{type:typeof i});return await nf(e,r,i)}async setDataVaultStoreValue(e,t,r,a){let s=await nh(e,r),i=await nm(e,r,a);await this.sendServerRequest(`/data-vault/stores/${t}/set`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({hashed_key:s,encrypted_value:i})},null)}async initiateServerPasskeyRegistration(e){let{accessToken:t,refreshToken:r}=await this.createServerUserSession(e,6e4*2,!1),a=new sZ({accessToken:t,refreshToken:r,refreshAccessTokenCallback:async()=>null});return await this.initiatePasskeyRegistration({},a)}},ny=class extends ng{constructor(e){super(e),this.options=e}async sendAdminRequest(e,t,r,a="admin"){return await this.sendServerRequest(e,{...t,headers:{"x-stack-super-secret-admin-key":"superSecretAdminKey"in this.options?this.options.superSecretAdminKey:"",...t.headers}},r,a)}async sendAdminRequestAndCatchKnownError(e,t,r,a){try{return z.ok(await this.sendAdminRequest(e,t,r))}catch(e){for(let t of a)if(t.isInstance(e))return z.error(e);throw e}}async getProject(){return await (await this.sendAdminRequest("/internal/projects/current",{method:"GET"},null)).json()}async updateProject(e){return await (await this.sendAdminRequest("/internal/projects/current",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async createInternalApiKey(e){return await (await this.sendAdminRequest("/internal/api-keys",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async listInternalApiKeys(){return(await (await this.sendAdminRequest("/internal/api-keys",{},null)).json()).items}async revokeInternalApiKeyById(e){await this.sendAdminRequest(`/internal/api-keys/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({revoked:!0})},null)}async getInternalApiKey(e,t){return await (await this.sendAdminRequest(`/internal/api-keys/${e}`,{},t)).json()}async listInternalEmailTemplates(){return(await (await this.sendAdminRequest("/internal/email-templates",{},null)).json()).templates}async listInternalEmailDrafts(){return(await (await this.sendAdminRequest("/internal/email-drafts",{},null)).json()).drafts}async createEmailDraft(e){return await (await this.sendAdminRequest("/internal/email-drafts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async updateEmailDraft(e,t){await this.sendAdminRequest(`/internal/email-drafts/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)}async deleteEmailDraft(e){await this.sendAdminRequest(`/internal/email-drafts/${e}`,{method:"DELETE"},null)}async listEmailThemes(){return(await (await this.sendAdminRequest("/internal/email-themes",{},null)).json()).themes}async listTeamPermissionDefinitions(){return(await (await this.sendAdminRequest("/team-permission-definitions",{},null)).json()).items}async createTeamPermissionDefinition(e){return await (await this.sendAdminRequest("/team-permission-definitions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async updateTeamPermissionDefinition(e,t){return await (await this.sendAdminRequest(`/team-permission-definitions/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)).json()}async deleteTeamPermissionDefinition(e){await this.sendAdminRequest(`/team-permission-definitions/${e}`,{method:"DELETE"},null)}async listProjectPermissionDefinitions(){return(await (await this.sendAdminRequest("/project-permission-definitions",{},null)).json()).items}async createProjectPermissionDefinition(e){return await (await this.sendAdminRequest("/project-permission-definitions",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async updateProjectPermissionDefinition(e,t){return await (await this.sendAdminRequest(`/project-permission-definitions/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)).json()}async deleteProjectPermissionDefinition(e){await this.sendAdminRequest(`/project-permission-definitions/${e}`,{method:"DELETE"},null)}async getSvixToken(){return await (await this.sendAdminRequest("/webhooks/svix-token",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)).json()}async deleteProject(){await this.sendAdminRequest("/internal/projects/current",{method:"DELETE"},null)}async getMetrics(e=!1){let t=new URLSearchParams;e&&t.append("include_anonymous","true");let r=t.toString();return await (await this.sendAdminRequest(`/internal/metrics${r?`?${r}`:""}`,{method:"GET"},null)).json()}async sendTestEmail(e){return await (await this.sendAdminRequest("/internal/send-test-email",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async sendTestWebhook(e){return await (await this.sendAdminRequest("/internal/send-test-webhook",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async listSentEmails(){return await (await this.sendAdminRequest("/internal/emails",{method:"GET"},null)).json()}async setupManagedEmailProvider(e){return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/setup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async checkManagedEmailStatus(e){return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/check",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async listManagedEmailDomains(){return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/list",{method:"GET"},null)).json()}async applyManagedEmailProvider(e){return await (await this.sendAdminRequest("/internal/emails/managed-onboarding/apply",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)},null)).json()}async sendSignInInvitationEmail(e,t){await this.sendAdminRequest("/internal/send-sign-in-invitation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,callback_url:t})},null)}async saveChatMessage(e,t){await this.sendAdminRequest(`/internal/ai-chat/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({message:t})},null)}async listChatMessages(e){return await (await this.sendAdminRequest(`/internal/ai-chat/${e}`,{method:"GET"},null)).json()}async renderEmailPreview(e){return await (await this.sendAdminRequest("/emails/render-email",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({theme_id:e.themeId,theme_tsx_source:e.themeTsxSource,template_id:e.templateId,template_tsx_source:e.templateTsxSource,editable_markers:e.editableMarkers,editable_source:e.editableSource})},null)).json()}async rewriteTemplateSourceWithAI(e){return await (await this.sendAdminRequest("/internal/rewrite-template-source",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({template_tsx_source:e})},null)).json()}async createEmailTheme(e){return await (await this.sendAdminRequest("/internal/email-themes",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({display_name:e})},null)).json()}async getEmailTheme(e){return await (await this.sendAdminRequest(`/internal/email-themes/${e}`,{method:"GET"},null)).json()}async updateEmailTheme(e,t){await this.sendAdminRequest(`/internal/email-themes/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({tsx_source:t})},null)}async deleteEmailTheme(e){await this.sendAdminRequest(`/internal/email-themes/${e}`,{method:"DELETE"},null)}async updateEmailTemplate(e,t,r){return await (await this.sendAdminRequest(`/internal/email-templates/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({tsx_source:t,theme_id:r})},null)).json()}async getConfig(){return await (await this.sendAdminRequest("/internal/config",{method:"GET"},null)).json()}async getConfigOverride(e){return await (await this.sendAdminRequest(`/internal/config/override/${e}`,{method:"GET"},null)).json()}async setConfigOverride(e,t,r){await this.sendAdminRequest(`/internal/config/override/${e}`,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({config_string:JSON.stringify(t),...r&&{source:r}})},null)}async updateConfigOverride(e,t){await this.sendAdminRequest(`/internal/config/override/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({config_override_string:JSON.stringify(t)})},null)}async getPushedConfigSource(){return(await (await this.sendAdminRequest("/internal/config/source",{method:"GET"},null)).json()).source}async unlinkPushedConfigSource(){await this.sendAdminRequest("/internal/config/source",{method:"DELETE"},null)}async resetConfigOverrideKeys(e,t){await this.sendAdminRequest(`/internal/config/override/${e}/reset-keys`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({keys:t})},null)}async createEmailTemplate(e){return await (await this.sendAdminRequest("/internal/email-templates",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({display_name:e})},null)).json()}async deleteEmailTemplate(e){await this.sendAdminRequest(`/internal/email-templates/${e}`,{method:"DELETE"},null)}async setupPayments(){return await (await this.sendAdminRequest("/internal/payments/setup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)).json()}async getStripeAccountInfo(){let e=await this.sendAdminRequestAndCatchKnownError("/internal/payments/stripe/account-info",{},null,[rg.StripeAccountInfoNotFound]);return"error"===e.status?null:await e.data.json()}async getPaymentMethodConfigs(){let e=await this.sendAdminRequestAndCatchKnownError("/internal/payments/method-configs",{method:"GET"},null,[rg.StripeAccountInfoNotFound]);if("error"===e.status)return null;let t=await e.data.json();return{configId:t.config_id,methods:t.methods}}async updatePaymentMethodConfigs(e,t){await this.sendAdminRequest("/internal/payments/method-configs",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({config_id:e,updates:t})},null)}async createStripeWidgetAccountSession(){return await (await this.sendAdminRequest("/internal/payments/stripe-widgets/account-session",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({})},null)).json()}async listTransactions(e){let t=new URLSearchParams;e?.cursor&&t.set("cursor",e.cursor),"number"==typeof e?.limit&&t.set("limit",String(e.limit)),e?.type&&t.set("type",e.type),e?.customerType&&t.set("customer_type",e.customerType);let r=await (await this.sendAdminRequest(`/internal/payments/transactions${t.size?`?${t.toString()}`:""}`,{method:"GET"},null)).json();return{transactions:r.transactions,nextCursor:r.next_cursor}}async listSessionReplays(e){let t=new URLSearchParams;return e?.cursor&&t.set("cursor",e.cursor),"number"==typeof e?.limit&&t.set("limit",String(e.limit)),e?.user_ids&&e.user_ids.length>0&&t.set("user_ids",e.user_ids.join(",")),e?.team_ids&&e.team_ids.length>0&&t.set("team_ids",e.team_ids.join(",")),"number"==typeof e?.duration_ms_min&&t.set("duration_ms_min",String(e.duration_ms_min)),"number"==typeof e?.duration_ms_max&&t.set("duration_ms_max",String(e.duration_ms_max)),"number"==typeof e?.last_event_at_from_millis&&t.set("last_event_at_from_millis",String(e.last_event_at_from_millis)),"number"==typeof e?.last_event_at_to_millis&&t.set("last_event_at_to_millis",String(e.last_event_at_to_millis)),"number"==typeof e?.click_count_min&&t.set("click_count_min",String(e.click_count_min)),await (await this.sendAdminRequest(`/internal/session-replays${t.size?`?${t.toString()}`:""}`,{method:"GET"},null)).json()}async listSessionReplayChunks(e,t){let r=new URLSearchParams;return t?.cursor&&r.set("cursor",t.cursor),"number"==typeof t?.limit&&r.set("limit",String(t.limit)),await (await this.sendAdminRequest(`/internal/session-replays/${encodeURIComponent(e)}/chunks${r.size?`?${r.toString()}`:""}`,{method:"GET"},null)).json()}async getSessionReplayChunkEvents(e,t){return await (await this.sendAdminRequest(`/internal/session-replays/${encodeURIComponent(e)}/chunks/${encodeURIComponent(t)}/events`,{method:"GET"},null)).json()}async getSessionReplayEvents(e,t){let r=new URLSearchParams;return"number"==typeof t?.offset&&r.set("offset",String(t.offset)),"number"==typeof t?.limit&&r.set("limit",String(t.limit)),await (await this.sendAdminRequest(`/internal/session-replays/${encodeURIComponent(e)}/events${r.size?`?${r.toString()}`:""}`,{method:"GET"},null)).json()}async refundTransaction(e){return await (await this.sendAdminRequest("/internal/payments/transactions/refund",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({type:e.type,id:e.id,refund_entries:e.refundEntries.map(e=>({entry_index:e.entryIndex,quantity:e.quantity,amount_usd:e.amountUsd}))})},null)).json()}async previewAffectedUsersByOnboardingChange(e,t){return await (await this.sendAdminRequest(`/internal/onboarding/preview-affected-users${t?`?limit=${t}`:""}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({onboarding:e})},null)).json()}async queryAnalytics(e){return await (await this.sendAdminRequest("/internal/analytics/query",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:e.query,params:e.params??{},timeout_ms:e.timeout_ms??1e3,include_all_branches:e.include_all_branches??!1})},null)).json()}async listOutboxEmails(e){let t=new URLSearchParams;return e?.status&&t.set("status",e.status),e?.simple_status&&t.set("simple_status",e.simple_status),e?.limit!==void 0&&t.set("limit",e.limit.toString()),e?.cursor&&t.set("cursor",e.cursor),await (await this.sendServerRequest(`/emails/outbox${t.size?`?${t.toString()}`:""}`,{method:"GET"},null)).json()}async getOutboxEmail(e){return await (await this.sendServerRequest(`/emails/outbox/${e}`,{method:"GET"},null)).json()}async updateOutboxEmail(e,t){return await (await this.sendServerRequest(`/emails/outbox/${e}`,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify(t)},null)).json()}};e.s(["DependenciesMap",()=>nb],84509);var nv=class{constructor(e){"u"<typeof WeakRef?this._ref={deref:()=>e}:this._ref=new WeakRef(e)}deref(){return this._ref.deref()}},n_=class{static{o=Symbol.toStringTag}constructor(e){this[o]="IterableWeakMap";const t=e?.map(e=>[e[0],{value:e[1],keyRef:new nv(e[0])}]);this._weakMap=new WeakMap(t??[]),this._keyRefs=new Set(t?.map(e=>e[1].keyRef)??[])}get(e){return this._weakMap.get(e)?.value}set(e,t){let r={value:t,keyRef:this._weakMap.get(e)?.keyRef??new nv(e)};return this._weakMap.set(e,r),this._keyRefs.add(r.keyRef),this}delete(e){let t=this._weakMap.get(e);return!!t&&(this._weakMap.delete(e),this._keyRefs.delete(t.keyRef),!0)}has(e){return this._weakMap.has(e)&&this._keyRefs.has(this._weakMap.get(e).keyRef)}*[Symbol.iterator](){for(let e of this._keyRefs){let t=e.deref(),r=t?this._weakMap.get(t):void 0;t?r&&(yield[t,r.value]):this._keyRefs.delete(e)}}},nw=class{static{l=Symbol.toStringTag}constructor(e){this[l]="MaybeWeakMap";const t=[...e??[]];this._primitiveMap=new Map(t.filter(e=>!this._isAllowedInWeakMap(e[0]))),this._weakMap=new n_(t.filter(e=>this._isAllowedInWeakMap(e[0])))}_isAllowedInWeakMap(e){return"object"==typeof e&&null!==e||"symbol"==typeof e&&void 0===Symbol.keyFor(e)}get(e){return this._isAllowedInWeakMap(e)?this._weakMap.get(e):this._primitiveMap.get(e)}set(e,t){return this._isAllowedInWeakMap(e)?this._weakMap.set(e,t):this._primitiveMap.set(e,t),this}delete(e){return this._isAllowedInWeakMap(e)?this._weakMap.delete(e):this._primitiveMap.delete(e)}has(e){return this._isAllowedInWeakMap(e)?this._weakMap.has(e):this._primitiveMap.has(e)}*[Symbol.iterator](){yield*this._primitiveMap,yield*this._weakMap}},nb=class{constructor(){this._inner={map:new nw,hasValue:!1,value:void 0},this[c]="DependenciesMap"}static{c=Symbol.toStringTag}_valueToResult(e){return e.hasValue?z.ok(e.value):z.error(void 0)}_unwrapFromInner(e,t){if(0===e.length)return this._valueToResult(t);{let[r,...a]=e,s=t.map.get(r);return s?this._unwrapFromInner(a,s):z.error(void 0)}}_setInInner(e,t,r){if(0===e.length){let e=this._valueToResult(r);return"ok"===t.status?(r.hasValue=!0,r.value=t.data):(r.hasValue=!1,r.value=void 0),e}{let[a,...s]=e,i=r.map.get(a);return i||r.map.set(a,i={map:new nw,hasValue:!1,value:void 0}),this._setInInner(s,t,i)}}*_iterateInner(e,t){for(let[r,a]of(t.hasValue&&(yield[e,t.value]),t.map))yield*this._iterateInner([...e,r],a)}get(e){return z.or(this._unwrapFromInner(e,this._inner),void 0)}set(e,t){return this._setInInner(e,z.ok(t),this._inner),this}delete(e){return"ok"===this._setInInner(e,z.error(void 0),this._inner).status}has(e){return"ok"===this._unwrapFromInner(e,this._inner).status}clear(){this._inner={map:new nw,hasValue:!1,value:void 0}}*[Symbol.iterator](){yield*this._iterateInner([],this._inner)}};function nk(){return"u">typeof window&&"u">typeof document&&void 0!==document.createElement}let nC={NEXT_PUBLIC_STACK_API_URL:["STACK_BASE_URL","NEXT_PUBLIC_STACK_URL"]};e.s(["getEnvVariable",0,function(e,t){if(nk())throw Error(v`
      Can't use getEnvVariable on the client because Next.js transpiles expressions of the kind process.env.XYZ at build-time on the client.
    
      Use process.env.XYZ directly instead.
    `);if("NEXT_RUNTIME"===e)throw Error(v`
      Can't use getEnvVariable to access the NEXT_RUNTIME environment variable because it's compiled into the client bundle.
    
      Use getNextRuntime() instead.
    `);for(let[t,r]of Object.entries(nC))r.includes(e)&&$(`Environment variable ${e} has been renamed to ${t}. Please update your configuration to use the new name.`);let r=m.default.env[e];if(!r&&nC[e]){for(let t of nC[e])if(r=m.default.env[t])break}return r||(void 0!==t?r=t:$(`Missing environment variable: ${e}`)),r},"isBrowserLike",0,nk],45540);var nT="object"==typeof globalThis?globalThis:"object"==typeof self?self:"object"==typeof window?window:e.g,nS="1.9.0",nx=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,nA=function(e){var t=new Set([e]),r=new Set,a=e.match(nx);if(!a)return function(){return!1};var s={major:+a[1],minor:+a[2],patch:+a[3],prerelease:a[4]};if(null!=s.prerelease)return function(t){return t===e};function i(e){return r.add(e),!1}return function(e){if(t.has(e))return!0;if(r.has(e))return!1;var a=e.match(nx);if(!a)return i(e);var n={major:+a[1],minor:+a[2],patch:+a[3],prerelease:a[4]};if(null!=n.prerelease||s.major!==n.major)return i(e);if(0===s.major)return s.minor===n.minor&&s.patch<=n.patch?(t.add(e),!0):i(e);return s.minor<=n.minor?(t.add(e),!0):i(e)}}(nS),nE=Symbol.for("opentelemetry.js.api."+nS.split(".")[0]);function nI(e,t,r,a){void 0===a&&(a=!1);var s,i=nT[nE]=null!=(s=nT[nE])?s:{version:nS};if(!a&&i[e]){var n=Error("@opentelemetry/api: Attempted duplicate registration of API: "+e);return r.error(n.stack||n.message),!1}if(i.version!==nS){var n=Error("@opentelemetry/api: Registration of version v"+i.version+" for "+e+" does not match previously registered API v"+nS);return r.error(n.stack||n.message),!1}return i[e]=t,r.debug("@opentelemetry/api: Registered a global for "+e+" v"+nS+"."),!0}function nP(e){var t,r,a=null==(t=nT[nE])?void 0:t.version;if(a&&nA(a))return null==(r=nT[nE])?void 0:r[e]}function nR(e,t){t.debug("@opentelemetry/api: Unregistering a global for "+e+" v"+nS+".");var r=nT[nE];r&&delete r[e]}var nO=new function e(t){var r=this;r._currentContext=t?new Map(t):new Map,r.getValue=function(e){return r._currentContext.get(e)},r.setValue=function(t,a){var s=new e(r._currentContext);return s._currentContext.set(t,a),s},r.deleteValue=function(t){var a=new e(r._currentContext);return a._currentContext.delete(t),a}},nN=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,s,i=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(e){s={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(s)throw s.error}}return n},nU=function(e,t,r){if(r||2==arguments.length)for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||(a||(a=Array.prototype.slice.call(t,0,s)),a[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))},nj=function(){function e(){}return e.prototype.active=function(){return nO},e.prototype.with=function(e,t,r){for(var a=[],s=3;s<arguments.length;s++)a[s-3]=arguments[s];return t.call.apply(t,nU([r],nN(a),!1))},e.prototype.bind=function(e,t){return t},e.prototype.enable=function(){return this},e.prototype.disable=function(){return this},e}(),nD=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,s,i=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(e){s={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(s)throw s.error}}return n},nL=function(e,t,r){if(r||2==arguments.length)for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||(a||(a=Array.prototype.slice.call(t,0,s)),a[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))},n$=function(){function e(e){this._namespace=e.namespace||"DiagComponentLogger"}return e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nF("debug",this._namespace,e)},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nF("error",this._namespace,e)},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nF("info",this._namespace,e)},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nF("warn",this._namespace,e)},e.prototype.verbose=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return nF("verbose",this._namespace,e)},e}();function nF(e,t,r){var a=nP("diag");if(a)return r.unshift(t),a[e].apply(a,nL([],nD(r),!1))}(d=p||(p={}))[d.NONE=0]="NONE",d[d.ERROR=30]="ERROR",d[d.WARN=50]="WARN",d[d.INFO=60]="INFO",d[d.DEBUG=70]="DEBUG",d[d.VERBOSE=80]="VERBOSE",d[d.ALL=9999]="ALL";var nM=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,s,i=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(e){s={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(s)throw s.error}}return n},nB=function(e,t,r){if(r||2==arguments.length)for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||(a||(a=Array.prototype.slice.call(t,0,s)),a[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))},nK=function(){function e(){function e(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var a=nP("diag");if(a)return a[e].apply(a,nB([],nM(t),!1))}}var t=this;t.setLogger=function(e,r){if(void 0===r&&(r={logLevel:p.INFO}),e===t){var a,s,i,n=Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return t.error(null!=(a=n.stack)?a:n.message),!1}"number"==typeof r&&(r={logLevel:r});var o=nP("diag"),l=function(e,t){function r(r,a){var s=t[r];return"function"==typeof s&&e>=a?s.bind(t):function(){}}return e<p.NONE?e=p.NONE:e>p.ALL&&(e=p.ALL),t=t||{},{error:r("error",p.ERROR),warn:r("warn",p.WARN),info:r("info",p.INFO),debug:r("debug",p.DEBUG),verbose:r("verbose",p.VERBOSE)}}(null!=(s=r.logLevel)?s:p.INFO,e);if(o&&!r.suppressOverrideMessage){var c=null!=(i=Error().stack)?i:"<failed to generate stacktrace>";o.warn("Current logger will be overwritten from "+c),l.warn("Current logger will overwrite one already registered from "+c)}return nI("diag",l,t,!0)},t.disable=function(){nR("diag",t)},t.createComponentLogger=function(e){return new n$(e)},t.verbose=e("verbose"),t.debug=e("debug"),t.info=e("info"),t.warn=e("warn"),t.error=e("error")}return e.instance=function(){return this._instance||(this._instance=new e),this._instance},e}(),nq=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,s,i=r.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)n.push(a.value)}catch(e){s={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(s)throw s.error}}return n},nV=function(e,t,r){if(r||2==arguments.length)for(var a,s=0,i=t.length;s<i;s++)!a&&s in t||(a||(a=Array.prototype.slice.call(t,0,s)),a[s]=t[s]);return e.concat(a||Array.prototype.slice.call(t))},nH="context",nW=new nj,nz=function(){function e(){}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalContextManager=function(e){return nI(nH,e,nK.instance())},e.prototype.active=function(){return this._getContextManager().active()},e.prototype.with=function(e,t,r){for(var a,s=[],i=3;i<arguments.length;i++)s[i-3]=arguments[i];return(a=this._getContextManager()).with.apply(a,nV([e,t,r],nq(s),!1))},e.prototype.bind=function(e,t){return this._getContextManager().bind(e,t)},e.prototype._getContextManager=function(){return nP(nH)||nW},e.prototype.disable=function(){this._getContextManager().disable(),nR(nH,nK.instance())},e}();(u=h||(h={}))[u.NONE=0]="NONE",u[u.SAMPLED=1]="SAMPLED";var nJ="0000000000000000",nX="00000000000000000000000000000000",nY={traceId:nX,spanId:nJ,traceFlags:h.NONE},nG=function(){function e(e){void 0===e&&(e=nY),this._spanContext=e}return e.prototype.spanContext=function(){return this._spanContext},e.prototype.setAttribute=function(e,t){return this},e.prototype.setAttributes=function(e){return this},e.prototype.addEvent=function(e,t){return this},e.prototype.addLink=function(e){return this},e.prototype.addLinks=function(e){return this},e.prototype.setStatus=function(e){return this},e.prototype.updateName=function(e){return this},e.prototype.end=function(e){},e.prototype.isRecording=function(){return!1},e.prototype.recordException=function(e,t){},e}(),nQ=Symbol.for("OpenTelemetry Context Key SPAN");function nZ(e){return e.getValue(nQ)||void 0}function n0(){return nZ(nz.getInstance().active())}function n1(e,t){return e.setValue(nQ,t)}function n2(e){return e.deleteValue(nQ)}function n4(e,t){return n1(e,new nG(t))}function n3(e){var t;return null==(t=nZ(e))?void 0:t.spanContext()}var n6=/^([0-9a-f]{32})$/i,n5=/^[0-9a-f]{16}$/i;function n8(e){var t,r;return t=e.traceId,n6.test(t)&&t!==nX&&(r=e.spanId,n5.test(r)&&r!==nJ)}function n7(e){return new nG(e)}var n9=nz.getInstance(),oe=function(){function e(){}return e.prototype.startSpan=function(e,t,r){if(void 0===r&&(r=n9.active()),null==t?void 0:t.root)return new nG;var a,s=r&&n3(r);return"object"==typeof(a=s)&&"string"==typeof a.spanId&&"string"==typeof a.traceId&&"number"==typeof a.traceFlags&&n8(s)?new nG(s):new nG},e.prototype.startActiveSpan=function(e,t,r,a){if(!(arguments.length<2)){2==arguments.length?n=t:3==arguments.length?(s=t,n=r):(s=t,i=r,n=a);var s,i,n,o=null!=i?i:n9.active(),l=this.startSpan(e,s,o),c=n1(o,l);return n9.with(c,n,void 0,l)}},e}(),ot=new oe,or=function(){function e(e,t,r,a){this._provider=e,this.name=t,this.version=r,this.options=a}return e.prototype.startSpan=function(e,t,r){return this._getTracer().startSpan(e,t,r)},e.prototype.startActiveSpan=function(e,t,r,a){var s=this._getTracer();return Reflect.apply(s.startActiveSpan,s,arguments)},e.prototype._getTracer=function(){if(this._delegate)return this._delegate;var e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):ot},e}(),oa=new(function(){function e(){}return e.prototype.getTracer=function(e,t,r){return new oe},e}()),os=function(){function e(){}return e.prototype.getTracer=function(e,t,r){var a;return null!=(a=this.getDelegateTracer(e,t,r))?a:new or(this,e,t,r)},e.prototype.getDelegate=function(){var e;return null!=(e=this._delegate)?e:oa},e.prototype.setDelegate=function(e){this._delegate=e},e.prototype.getDelegateTracer=function(e,t,r){var a;return null==(a=this._delegate)?void 0:a.getTracer(e,t,r)},e}(),oi="trace";let on=(function(){function e(){this._proxyTracerProvider=new os,this.wrapSpanContext=n7,this.isSpanContextValid=n8,this.deleteSpan=n2,this.getSpan=nZ,this.getActiveSpan=n0,this.getSpanContext=n3,this.setSpan=n1,this.setSpanContext=n4}return e.getInstance=function(){return this._instance||(this._instance=new e),this._instance},e.prototype.setGlobalTracerProvider=function(e){var t=nI(oi,this._proxyTracerProvider,nK.instance());return t&&this._proxyTracerProvider.setDelegate(e),t},e.prototype.getTracerProvider=function(){return nP(oi)||this._proxyTracerProvider},e.prototype.getTracer=function(e,t){return this.getTracerProvider().getTracer(e,t)},e.prototype.disable=function(){nR(oi,nK.instance()),this._proxyTracerProvider=new os},e})().getInstance().getTracer("stack-tracer");async function oo(e,t){let r="string"==typeof e?{description:e}:e;return await on.startActiveSpan(`STACK: ${r.description}`,async e=>{if(r.attributes)for(let[t,a]of Object.entries(r.attributes))e.setAttribute(t,a);try{return await t(e)}finally{e.end()}})}let ol=null;function oc(e){if((ol??=new nb).has([e]))return ol.get([e]);let t=Object.assign(Promise.resolve(e),{status:"fulfilled",value:e});return ol.set([e],t),t}let od=null;function ou(e){if((od??=new nb).has([e]))return od.get([e]);let t=Promise.reject(e);t.catch(()=>{});let r=Object.assign(t,{status:"rejected",reason:e});return od.set([e],r),r}let op=om(new Promise(()=>{}));function oh(){return op}function om(e,t={}){let r=e.then(e=>(r.status="fulfilled",r.value=e,e),e=>{throw r.status="rejected",r.reason=e,e});return r.status="pending",r}async function of(e){if(!Number.isFinite(e)||e<0)throw new B(`wait() requires a non-negative integer number of milliseconds to wait. (found: ${e}ms)`);if(e>=0x80000000)throw new B("The maximum timeout for wait() is 2147483647ms (2**31 - 1). (found: ${ms}ms)");return await oo({description:"wait(...)",attributes:{"stack.wait.ms":e}},async t=>await new Promise(t=>setTimeout(t,e)))}function og(...e){return oy(e[0],{...e[1],onError:t=>{et.isKnownError(t)&&void 0!==m.default&&"production".includes("production")?alert(t.message):alert(`An unhandled error occurred. Please report this to the developer.

${t}`),e[1]?.onError?.(t)}},...e.slice(2))}function oy(e,t={}){if("function"==typeof e&&(e=e()),e){var r;let a;r=e,a=Error(),r.catch(e=>{e instanceof Error&&M(e,a)}),e.catch(e=>{t.onError?.(e);let r=new B("Uncaught error in asynchronous function: "+K(e),{cause:e});t.noErrorLogging||H("runAsynchronously",r)})}}function ov(e,t){let r=performance.now(),a=[],s=new Map,i=async()=>{for(;;)if(r>performance.now())await of(Math.max(1,r-performance.now()+1));else if(0===a.length){let e=aQ();await new Promise(t=>{s.set(e,t)}),s.delete(e)}else break;let i=t.batchCalls?a.splice(0,a.length):[a.shift()],n=performance.now(),o=await z.fromPromise(e()),l=performance.now();for(let e of(r=Math.max(r,n+(t.throttleMs??0),l+(t.gapMs??0)),i))"ok"===o.status?e[0](o.data):e[1](o.error)};return oy(async()=>{for(;;)await i()}),()=>new Promise((e,i)=>{r=Math.max(r,performance.now()+(t.debounceMs??0)),a.push([e,i]),s.forEach(e=>e())})}var o_=e.i(71645);let ow="__stack-no-suspense-boundary-error__",ob=new WeakMap;function ok(e){if("use"in o_.default)return o_.default.use(e);if(ob.has(e)){let t=ob.get(e);if("pending"===t.status)throw e;if("ok"===t.status)return t.data;throw t.error}throw ob.set(e,{status:"pending",progress:void 0}),oy(async()=>{try{let t=await e;ob.set(e,{status:"ok",data:t})}catch(t){ob.set(e,{status:"error",error:t})}}),e}var oC=class extends Error{constructor(e){L("__console-error-monkey-patch__",()=>{let e=console.error;return console.error=function(...t){var r;if(1!==t.length||"object"!=typeof(r=t[0])||null===r||r.__noSuspenseBoundarySentinel!==ow)return e.apply(this,t)},!0}),super(v`
      Suspense boundary not found! Read the error message below carefully (or paste it into your AI agent).

      ${e.caller??"This code path"} attempted to display a loading indicator, but didn't find a Suspense boundary above it. Please read the error message below carefully.
      
      There are several potential causes:
      
      1. [Next.js] You are missing a loading.tsx file in your app directory. Fix it by adding a loading.tsx file in your app directory.

      2. [React] You are missing a <Suspense> boundary in your component. Fix it by wrapping your component (or the entire app) in a <Suspense> component.

      3. [Next.js] The component is rendered in the root (outermost) layout.tsx or template.tsx file. Next.js does not wrap those files in a Suspense boundary, even if there is a loading.tsx file in the same folder. To fix it, wrap your layout inside a route group like this:

        - app
        - - layout.tsx  // contains <html> and <body>, alongside providers and other components that don't need ${e.caller??"this code path"}
        - - loading.tsx  // required for suspense
        - - (main)
        - - - layout.tsx  // contains the main layout of your app, like a sidebar or a header, and can use ${e.caller??"this code path"}
        - - - route.tsx  // your actual main page
        - - - the rest of your app

        For more information on this approach, see Next's documentation on route groups: https://nextjs.org/docs/app/building-your-application/routing/route-groups
      
      4. You caught this error with try-catch or a custom error boundary. Fix this by rethrowing the error or not catching it in the first place.

      5. Your version of Stack Auth is too old. Upgrade to the latest version to see if that fixes the issue.

      See: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

      More information on SSR and Suspense boundaries: https://react.dev/reference/react/Suspense#providing-a-fallback-for-server-errors-and-client-only-content
    `),this.__noSuspenseBoundarySentinel=ow,this.name="NoSuspenseBoundaryError",this.reason=e.caller??"suspendIfSsr()",this.digest="BAILOUT_TO_CLIENT_SIDE_RENDERING"}};e.s(["forwardRefIfNeeded",0,function(e){return 19>parseInt(o_.default.version.split(".")[0])?o_.default.forwardRef(e):t=>e(t,t.ref)},"suspend",0,function(){throw ok(op),Error("Somehow a Promise that never resolves was resolved?")},"suspendIfSsr",0,function(e){if(!nk())throw new oC({caller:e})},"use",0,ok],40741);var oT=class{constructor(e,t={}){this._fetcher=e,this._options=t,this._map=new nb,this.isCacheAvailable=this._createKeyed("isCacheAvailable"),this.getIfCached=this._createKeyed("getIfCached"),this.getOrWait=this._createKeyed("getOrWait"),this.forceSetCachedValue=this._createKeyed("forceSetCachedValue"),this.forceSetCachedValueAsync=this._createKeyed("forceSetCachedValueAsync"),this.refresh=this._createKeyed("refresh"),this.invalidate=this._createKeyed("invalidate"),this.onStateChange=this._createKeyed("onStateChange"),this.isDirty=this._createKeyed("isDirty")}_createKeyed(e){return(t,...r)=>{let a=this.getValueCache(t);return a[e].apply(a,r)}}getValueCache(e){let t=this._map.get(e);return t||(t=new oS(async()=>await this._fetcher(e),{...this._options,onSubscribe:this._options.onSubscribe?t=>this._options.onSubscribe(e,t):void 0}),this._map.set(e,t)),t}async refreshWhere(e){let t=[];for(let[r,a]of this._map)e(r)&&t.push(a.refresh());await Promise.all(t)}async invalidateWhere(e){let t=[];for(let[r,a]of this._map)e(r)&&t.push(a.invalidate().catch(()=>void 0));await Promise.all(t)}},oS=class{constructor(e,t={}){this._options=t,this._subscriptionsCount=0,this._unsubscribers=[],this._mostRecentRefreshPromiseIndex=0,this._store=new sX,this._rateLimitOptions={concurrency:1,throttleMs:300,...R(t.rateLimiter??{})},this._fetcher=ov(e,{...this._rateLimitOptions,batchCalls:!0})}isCacheAvailable(){return this._store.isAvailable()}getIfCached(){return this._store.get()}getOrWait(e){let t=this.getIfCached();return"read-write"===e&&"ok"===t.status?oc(t.data):this._refetch(e)}_set(e){this._store.set(e)}_setAsync(e){0!==this._subscriptionsCount||nk()||this._invalidateCacheSoon();let t=om(e);return this._pendingPromise=t,om(this._store.setAsync(t).then(()=>void 0))}_refetch(e){if("read-write"===e&&this._pendingPromise)return this._pendingPromise;let t=om(this._fetcher());return"never"===e?t:om(this._setAsync(t).then(()=>t))}forceSetCachedValue(e){this._set(e)}forceSetCachedValueAsync(e){return this._setAsync(e)}async refresh(){this._subscriptionsCount>0&&await this.getOrWait("write-only")}async invalidate(){this._store.setUnavailable(),this._pendingPromise=void 0,await this.refresh()}isDirty(){return void 0===this._pendingPromise}_invalidateCacheSoon(){let e=++this._mostRecentRefreshPromiseIndex;oy(async()=>{await of(5e3),0===this._subscriptionsCount&&e===this._mostRecentRefreshPromiseIndex&&await this.invalidate()})}onStateChange(e){let t=this._store.onChange(e);if(oy(this.getOrWait("read-write")),0==this._subscriptionsCount++&&this._options.onSubscribe){let e=this._options.onSubscribe(()=>{oy(this.refresh())});this._unsubscribers.push(e)}let r=!1;return{unsubscribe:()=>{if(!r&&(r=!0,t.unsubscribe(),0==--this._subscriptionsCount))for(let e of(this._invalidateCacheSoon(),this._unsubscribers))e()}}}};e.s(["AsyncCache",0,oT,"cacheFunction",0,function(e){let t=new nb;return(...r)=>{if(t.has(r))return t.get(r);let a=e(...r);return t.set(r,a),a}}],5173)},18566,(e,t,r)=>{t.exports=e.r(76562)},9156,(e,t,r)=>{"use strict";let a;Object.defineProperty(r,"__esModule",{value:!0}),r.parseCookie=u,r.parse=u,r.stringifyCookie=function(e,t){let r=t?.encode||encodeURIComponent,a=[];for(let t of Object.keys(e)){let n=e[t];if(void 0===n)continue;if(!s.test(t))throw TypeError(`cookie name is invalid: ${t}`);let o=r(n);if(!i.test(o))throw TypeError(`cookie val is invalid: ${n}`);a.push(`${t}=${o}`)}return a.join("; ")},r.stringifySetCookie=p,r.serialize=p,r.parseSetCookie=function(e,t){let r=t?.decode||g,a=e.length,s=h(e,0,a),i=m(e,0,s),n=-1===i?{name:"",value:r(f(e,0,s))}:{name:f(e,0,i),value:r(f(e,i+1,s))},o=s+1;for(;o<a;){let t=h(e,o,a),r=m(e,o,t),s=-1===r?f(e,o,t):f(e,o,r),i=-1===r?void 0:f(e,r+1,t);switch(s.toLowerCase()){case"httponly":n.httpOnly=!0;break;case"secure":n.secure=!0;break;case"partitioned":n.partitioned=!0;break;case"domain":n.domain=i;break;case"path":n.path=i;break;case"max-age":i&&l.test(i)&&(n.maxAge=Number(i));break;case"expires":if(!i)break;let c=new Date(i);Number.isFinite(c.valueOf())&&(n.expires=c);break;case"priority":if(!i)break;let d=i.toLowerCase();("low"===d||"medium"===d||"high"===d)&&(n.priority=d);break;case"samesite":if(!i)break;let u=i.toLowerCase();("lax"===u||"strict"===u||"none"===u)&&(n.sameSite=u)}o=t+1}return n},r.stringifySetCookie=p,r.serialize=p;let s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,l=/^-?\d+$/,c=Object.prototype.toString,d=((a=function(){}).prototype=Object.create(null),a);function u(e,t){let r=new d,a=e.length;if(a<2)return r;let s=t?.decode||g,i=0;do{let t=m(e,i,a);if(-1===t)break;let n=h(e,i,a);if(t>n){i=e.lastIndexOf(";",t-1)+1;continue}let o=f(e,i,t);void 0===r[o]&&(r[o]=s(f(e,t+1,n))),i=n+1}while(i<a)return r}function p(e,t,r){let a="object"==typeof e?e:{...r,name:e,value:String(t)},l=("object"==typeof t?t:r)?.encode||encodeURIComponent;if(!s.test(a.name))throw TypeError(`argument name is invalid: ${a.name}`);let d=a.value?l(a.value):"";if(!i.test(d))throw TypeError(`argument val is invalid: ${a.value}`);let u=a.name+"="+d;if(void 0!==a.maxAge){if(!Number.isInteger(a.maxAge))throw TypeError(`option maxAge is invalid: ${a.maxAge}`);u+="; Max-Age="+a.maxAge}if(a.domain){if(!n.test(a.domain))throw TypeError(`option domain is invalid: ${a.domain}`);u+="; Domain="+a.domain}if(a.path){if(!o.test(a.path))throw TypeError(`option path is invalid: ${a.path}`);u+="; Path="+a.path}if(a.expires){var p;if(p=a.expires,"[object Date]"!==c.call(p)||!Number.isFinite(a.expires.valueOf()))throw TypeError(`option expires is invalid: ${a.expires}`);u+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.partitioned&&(u+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():void 0){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw TypeError(`option priority is invalid: ${a.priority}`)}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError(`option sameSite is invalid: ${a.sameSite}`)}return u}function h(e,t,r){let a=e.indexOf(";",t);return -1===a?r:a}function m(e,t,r){let a=e.indexOf("=",t);return a<r?a:-1}function f(e,t,r){let a=t,s=r;do{let t=e.charCodeAt(a);if(32!==t&&9!==t)break}while(++a<s)for(;s>a;){let t=e.charCodeAt(s-1);if(32!==t&&9!==t)break;s--}return e.slice(a,s)}function g(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},32124,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"cookies",{enumerable:!0,get:function(){return h}});let a=e.r(97270),s=e.r(96883),i=e.r(63599),n=e.r(62141),o=e.r(67673),l=e.r(43248),c=e.r(63138),d=e.r(76361),u=e.r(50999),p=e.r(12718);function h(){let e="cookies",t=i.workAsyncStorage.getStore(),r=n.workUnitAsyncStorage.getStore();if(t){if(r&&"after"===r.phase&&!(0,u.isRequestAPICallableInsideAfter)())throw Object.defineProperty(Error(`Route ${t.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E843",enumerable:!1,configurable:!0});if(t.forceStatic)return f(a.RequestCookiesAdapter.seal(new s.RequestCookies(new Headers({}))));if(t.dynamicShouldError)throw Object.defineProperty(new l.StaticGenBailoutError(`Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E849",enumerable:!1,configurable:!0});if(r)switch(r.type){case"cache":let i=Object.defineProperty(Error(`Route ${t.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E831",enumerable:!1,configurable:!0});throw Error.captureStackTrace(i,h),t.invalidDynamicUsageError??=i,i;case"unstable-cache":throw Object.defineProperty(Error(`Route ${t.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E846",enumerable:!1,configurable:!0});case"generate-static-params":throw Object.defineProperty(Error(`Route ${t.route} used \`cookies()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`),"__NEXT_ERROR_CODE",{value:"E1123",enumerable:!1,configurable:!0});case"prerender":var d=t,g=r;let y=m.get(g);if(y)return y;let v=(0,c.makeHangingPromise)(g.renderSignal,d.route,"`cookies()`");return m.set(g,v),v;case"prerender-client":case"validation-client":let _="`cookies`";throw Object.defineProperty(new p.InvariantError(`${_} must not be used within a Client Component. Next.js should be preventing ${_} from being included in Client Components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E1037",enumerable:!1,configurable:!0});case"prerender-ppr":return(0,o.postponeWithTracking)(t.route,e,r.dynamicTracking);case"prerender-legacy":return(0,o.throwToInterruptStaticGeneration)(e,t,r);case"prerender-runtime":return(0,c.delayUntilRuntimeStage)(r,f(r.cookies));case"private-cache":return f(r.cookies);case"request":let w;if((0,o.trackDynamicDataInDynamicRender)(r),w=(0,a.areCookiesMutableInCurrentPhase)(r)?r.userspaceMutableCookies:r.cookies,!r.asyncApiPromises)return f(w);{let e=(0,n.isInEarlyRenderStage)(r);if(w===r.mutableCookies)return e?r.asyncApiPromises.earlyMutableCookies:r.asyncApiPromises.mutableCookies;return e?r.asyncApiPromises.earlyCookies:r.asyncApiPromises.cookies}}}(0,n.throwForMissingRequestStore)(e)}e.r(42852);let m=new WeakMap;function f(e){let t=m.get(e);if(t)return t;let r=Promise.resolve(e);return m.set(e,r),r}(0,d.createDedupedByCallsiteServerErrorLoggerDev)(function(e,t){let r=e?`Route "${e}" `:"This route ";return Object.defineProperty(Error(`${r}used ${t}. \`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`),"__NEXT_ERROR_CODE",{value:"E830",enumerable:!1,configurable:!0})})},35407,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"headers",{enumerable:!0,get:function(){return p}});let a=e.r(87720),s=e.r(63599),i=e.r(62141),n=e.r(67673),o=e.r(43248),l=e.r(63138),c=e.r(76361),d=e.r(50999),u=e.r(12718);function p(){let e="headers",t=s.workAsyncStorage.getStore(),r=i.workUnitAsyncStorage.getStore();if(t){if(r&&"after"===r.phase&&!(0,d.isRequestAPICallableInsideAfter)())throw Object.defineProperty(Error(`Route ${t.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E839",enumerable:!1,configurable:!0});if(t.forceStatic)return m(a.HeadersAdapter.seal(new Headers({})));if(r)switch(r.type){case"cache":{let e=Object.defineProperty(Error(`Route ${t.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E833",enumerable:!1,configurable:!0});throw Error.captureStackTrace(e,p),t.invalidDynamicUsageError??=e,e}case"unstable-cache":throw Object.defineProperty(Error(`Route ${t.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E838",enumerable:!1,configurable:!0});case"generate-static-params":throw Object.defineProperty(Error(`Route ${t.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`),"__NEXT_ERROR_CODE",{value:"E1134",enumerable:!1,configurable:!0})}if(t.dynamicShouldError)throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E828",enumerable:!1,configurable:!0});if(r)switch(r.type){case"prerender":var c=t,f=r;let s=h.get(f);if(s)return s;let g=(0,l.makeHangingPromise)(f.renderSignal,c.route,"`headers()`");return h.set(f,g),g;case"prerender-client":case"validation-client":let y="`headers`";throw Object.defineProperty(new u.InvariantError(`${y} must not be used within a client component. Next.js should be preventing ${y} from being included in client components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E1017",enumerable:!1,configurable:!0});case"prerender-ppr":return(0,n.postponeWithTracking)(t.route,e,r.dynamicTracking);case"prerender-legacy":return(0,n.throwToInterruptStaticGeneration)(e,t,r);case"prerender-runtime":return(0,l.delayUntilRuntimeStage)(r,m(r.headers));case"private-cache":return m(r.headers);case"request":if((0,n.trackDynamicDataInDynamicRender)(r),r.asyncApiPromises)return(0,i.isInEarlyRenderStage)(r)?r.asyncApiPromises.earlyHeaders:r.asyncApiPromises.headers;return m(r.headers)}}(0,i.throwForMissingRequestStore)(e)}e.r(42852);let h=new WeakMap;function m(e){let t=h.get(e);if(t)return t;let r=Promise.resolve(e);return h.set(e,r),r}(0,c.createDedupedByCallsiteServerErrorLoggerDev)(function(e,t){let r=e?`Route "${e}" `:"This route ";return Object.defineProperty(Error(`${r}used ${t}. \`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`),"__NEXT_ERROR_CODE",{value:"E836",enumerable:!1,configurable:!0})})},91516,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"draftMode",{enumerable:!0,get:function(){return u}});let a=e.r(62141),s=e.r(63599),i=e.r(67673),n=e.r(76361),o=e.r(43248),l=e.r(76353),c=e.r(12718),d=e.r(63138);function u(){let e="draftMode",t=s.workAsyncStorage.getStore(),r=a.workUnitAsyncStorage.getStore();switch((!t||!r)&&(0,a.throwForMissingRequestStore)(e),r.type){case"prerender-runtime":return(0,d.delayUntilRuntimeStage)(r,p(r.draftMode,t));case"request":return p(r.draftMode,t);case"cache":case"private-cache":case"unstable-cache":let i=(0,a.getDraftModeProviderForCacheScope)(t,r);if(i)return p(i,t);case"prerender":case"prerender-ppr":case"prerender-legacy":return p(null,t);case"prerender-client":case"validation-client":{let e="`draftMode`";throw Object.defineProperty(new c.InvariantError(`${e} must not be used within a Client Component. Next.js should be preventing ${e} from being included in Client Components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E1046",enumerable:!1,configurable:!0})}case"generate-static-params":throw Object.defineProperty(Error(`Route ${t.route} used \`${e}()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`),"__NEXT_ERROR_CODE",{value:"E1132",enumerable:!1,configurable:!0});default:return r}}function p(e,t){let r=m.get(e??h);return r||Promise.resolve(new f(e))}e.r(42715);let h={},m=new WeakMap;class f{constructor(e){this._provider=e}get isEnabled(){return null!==this._provider&&this._provider.isEnabled}enable(){g("draftMode().enable()",this.enable),null!==this._provider&&this._provider.enable()}disable(){g("draftMode().disable()",this.disable),null!==this._provider&&this._provider.disable()}}function g(e,t){let r=s.workAsyncStorage.getStore(),n=a.workUnitAsyncStorage.getStore();if(r){if((null==n?void 0:n.phase)==="after")throw Object.defineProperty(Error(`Route ${r.route} used "${e}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E845",enumerable:!1,configurable:!0});if(r.dynamicShouldError)throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${r.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(n)switch(n.type){case"cache":case"private-cache":{let a=Object.defineProperty(Error(`Route ${r.route} used "${e}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E829",enumerable:!1,configurable:!0});throw Error.captureStackTrace(a,t),r.invalidDynamicUsageError??=a,a}case"unstable-cache":throw Object.defineProperty(Error(`Route ${r.route} used "${e}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E844",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":{let t=Object.defineProperty(Error(`Route ${r.route} used ${e} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`),"__NEXT_ERROR_CODE",{value:"E126",enumerable:!1,configurable:!0});return(0,i.abortAndThrowOnSynchronousRequestDataAccess)(r.route,e,t,n)}case"prerender-client":case"validation-client":let a="`draftMode`";throw Object.defineProperty(new c.InvariantError(`${a} must not be used within a Client Component. Next.js should be preventing ${a} from being included in Client Components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E1046",enumerable:!1,configurable:!0});case"prerender-ppr":return(0,i.postponeWithTracking)(r.route,e,n.dynamicTracking);case"prerender-legacy":n.revalidate=0;let s=Object.defineProperty(new l.DynamicServerError(`Route ${r.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw r.dynamicUsageDescription=e,r.dynamicUsageStack=s.stack,s;case"request":(0,i.trackDynamicDataInDynamicRender)(n);break;case"generate-static-params":throw Object.defineProperty(Error(`Route ${r.route} used \`${e}\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`),"__NEXT_ERROR_CODE",{value:"E1121",enumerable:!1,configurable:!0})}}}(0,n.createDedupedByCallsiteServerErrorLoggerDev)(function(e,t){let r=e?`Route "${e}" `:"This route ";return Object.defineProperty(Error(`${r}used ${t}. \`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`),"__NEXT_ERROR_CODE",{value:"E835",enumerable:!1,configurable:!0})})},30029,(e,t,r)=>{t.exports.cookies=e.r(32124).cookies,t.exports.headers=e.r(35407).headers,t.exports.draftMode=e.r(91516).draftMode},91215,43212,25671,21623,e=>{"use strict";let t,r,a;e.s(["StackContext",()=>t8,"StackProviderClient",()=>t7],91215);var s=e.i(71645);e.i(98756);var i=e.i(43476),n=e.i(37402),o=e.i(6085);e.i(8322);var l=e.i(27198),c=e.i(15557),d=e.i(40741),u=e.i(55998),p=e.i(5173),h=e.i(19963),m=e.i(42672),f=e.i(45540),g=e.i(61495),y=e.i(63430),v=e.i(30868),_=e.i(47167);let w={get NEXT_PUBLIC_STACK_PORT_PREFIX(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_PORT_PREFIX:void 0)??void 0},get NEXT_PUBLIC_STACK_PROJECT_ID(){return(void 0!==_.default?"dd12d038-401c-426b-9074-78ebfb17ee77":void 0)??void 0},get STACK_PROJECT_ID(){return(void 0!==_.default?_.default.env.STACK_PROJECT_ID:void 0)??void 0},get NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY(){return(void 0!==_.default?"":void 0)??void 0},get STACK_PUBLISHABLE_CLIENT_KEY(){return(void 0!==_.default?_.default.env.STACK_PUBLISHABLE_CLIENT_KEY:void 0)??void 0},get STACK_SECRET_SERVER_KEY(){return(void 0!==_.default?_.default.env.STACK_SECRET_SERVER_KEY:void 0)??void 0},get STACK_SUPER_SECRET_ADMIN_KEY(){return(void 0!==_.default?_.default.env.STACK_SUPER_SECRET_ADMIN_KEY:void 0)??void 0},get NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS:void 0)??void 0},get STACK_EXTRA_REQUEST_HEADERS(){return(void 0!==_.default?_.default.env.STACK_EXTRA_REQUEST_HEADERS:void 0)??void 0},get NEXT_PUBLIC_BROWSER_STACK_API_URL(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_BROWSER_STACK_API_URL:void 0)??void 0},get NEXT_PUBLIC_STACK_API_URL_BROWSER(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_API_URL_BROWSER:void 0)??void 0},get STACK_API_URL_BROWSER(){return(void 0!==_.default?_.default.env.STACK_API_URL_BROWSER:void 0)??void 0},get NEXT_PUBLIC_SERVER_STACK_API_URL(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_SERVER_STACK_API_URL:void 0)??void 0},get NEXT_PUBLIC_STACK_API_URL_SERVER(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_API_URL_SERVER:void 0)??void 0},get STACK_API_URL_SERVER(){return(void 0!==_.default?_.default.env.STACK_API_URL_SERVER:void 0)??void 0},get NEXT_PUBLIC_STACK_API_URL(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_API_URL:void 0)??void 0},get STACK_API_URL(){return(void 0!==_.default?_.default.env.STACK_API_URL:void 0)??void 0},get NEXT_PUBLIC_STACK_URL(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_URL:void 0)??void 0},get NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX:void 0)??void 0},get NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE:void 0)??void 0},get NEXT_PUBLIC_STACK_STRIPE_PUBLISHABLE_KEY(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_STRIPE_PUBLISHABLE_KEY:void 0)??void 0},get NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY:void 0)??void 0},get NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY:void 0)??void 0},get NODE_ENV(){return(void 0!==_.default?"production":void 0)??void 0},get NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR(){return(void 0!==_.default?_.default.env.NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR:void 0)??void 0}};e.s(["envVars",0,w],43212);var b=e.i(17318);let k=b.deindent`
  Some quick reminders on Stack Auth: 

  - Stack Auth is a platform that provides a variety of apps that help you connect with your users. As of the time of writing these reminders, Stack Auth provides the following apps (although not all may be enabled): ${Object.entries({authentication:{displayName:"Authentication",subtitle:"User sign-in and account management",tags:["auth","security"],stage:"stable"},"fraud-protection":{displayName:"Fraud Protection",subtitle:"Protect your project from fraud and abuse",tags:["auth","security"],stage:"stable"},onboarding:{displayName:"Onboarding",subtitle:"Configure user onboarding requirements",tags:["auth"],stage:"alpha"},teams:{displayName:"Teams",subtitle:"Team collaboration and management",tags:["auth","security"],stage:"stable"},rbac:{displayName:"RBAC",subtitle:"Role-based access control and permissions",tags:["auth","security"],stage:"stable"},"api-keys":{displayName:"API Keys",subtitle:"API key generation and management",tags:["auth","security","developers"],stage:"stable"},payments:{displayName:"Payments",subtitle:"Payment processing and subscription management",tags:["operations","gtm"],stage:"beta"},emails:{displayName:"Emails",subtitle:"Email template configuration and management",tags:["comms"],stage:"stable"},"email-api":{displayName:"Email API",subtitle:"Programmatic email sending and delivery",tags:["comms","developers","expert"],stage:"alpha"},"data-vault":{displayName:"Data Vault",subtitle:"Secure storage for sensitive user data",tags:["security","storage"],stage:"beta"},webhooks:{displayName:"Webhooks",subtitle:"Real-time event notifications and integrations",tags:["developers"],stage:"stable"},"tv-mode":{displayName:"TV mode",subtitle:"Dashboard display for large screens",tags:["various"],stage:"alpha"},"launch-checklist":{displayName:"Launch Checklist",subtitle:"Pre-launch verification and readiness checks",tags:["various"],stage:"stable"},catalyst:{displayName:"Catalyst",subtitle:"Project scaffolding and rapid development",tags:["various"],stage:"alpha"},neon:{displayName:"Neon Integration",subtitle:"Serverless Postgres database integration",tags:["integration","storage"],stage:"alpha"},convex:{displayName:"Convex Integration",subtitle:"Real-time backend platform integration",tags:["integration","storage"],stage:"alpha"},vercel:{displayName:"Vercel Integration",subtitle:"Deploy your Stack Auth project to Vercel",tags:["integration","developers"],stage:"stable"},analytics:{displayName:"Analytics",subtitle:"View and explore analytics data",tags:["developers","operations"],stage:"beta"}}).filter(([,e])=>"alpha"!==e.stage).map(([e])=>e).join(", ")}. Don't hardcode this list, as it changes rapidly.
  - The most important object in Stack Auth is the Stack App object. StackClientApp provides client-side functionality, while StackServerApp also provides server-side functionality (but can usually only be imported on the server, as it requires a secret server key environment variable). You can usually find an instance of this object in a file called \`stack/client.tsx\` or \`stack/server.tsx\`, although it may be in a different location in this particular codebase.
  - Take extra care to always have great error handling and loading states whenever necessary (including in button onClick handlers; Stack Auth's code examples often use a special onClick class which handles loading states, but your own button may not). Stack Auth's SDK tends to return errors that need to be handled explicitly in its return types.
  - Language, framework, and library-specific details:
    - JavaScript & TypeScript:
      - Stack Auth has different SDK packages for different frameworks and languages. As of the time of writing these reminders, they are: @stackframe/js (JavaScript/TypeScript), @stackframe/stack (Next.js), @stackframe/react (React). You can find all of these on npm. They are all versioned together, meaning that vX.Y.Z of one SDK was released at the same time as vX.Y.Z of another SDK. For the most part, they are the same, although each has platform-specific features and differences.
      - The \`Result<T, E>\` type is \`{ status: "ok", data: T } | { status: "error", error: E }\`.
      - \`KnownErrors[KNOWN_ERROR_CODE]\` refers to a specific known error type. Each KnownError may have its own properties, but they all inherit from \`Error & { statusCode: number, humanReadableMessage: string, details?: Json }\`.
      - React & Next.js:
        - Almost all \`getXyz\` and \`listXyz\` functions on the Stack App have corresponding \`useXyz\` hooks that suspend the current component until the data is available. Make sure there is a Suspense boundary in place if you're using this pattern. The parameter and return types are identical except that the hooks don't return promises.
        - There is a \`useStackApp()\` hook as a named export from the package itself that serves as a shortcut to get the current Stack App object from the React context. Similarly, the \`useUser(...args)\` named export is short for \`useStackApp().useUser(...args)\`.
`;function C(e){let t=Math.max(1,...Object.keys(e.versions).map(Number)),r=1===t?e.minSdkVersion:e.versions[t].minSdkVersion,a=b.deindent`
    This prompt explains how to implement a custom ${e.title} page for Stack Auth. The version of this page that you are implementing is v${t}. It can be found in Stack Auth's documentation, and in the Stack Auth devtool indicator.

    First, make sure to upgrade the Stack Auth SDK to a recent version. The minimum supported SDK version for this walkthrough is v${r}.

    The user's codebase may already have a ${e.title} page that could be suitable (eg. from an earlier version of Stack Auth, a template, another auth provider before migrating to Stack Auth, etc.). Use your critical thinking skills to determine what the user's intent is; it is likely that instead of creating a new page, you can just modify the existing page to use Stack Auth & support the logic/structure below.

    Below is a description of the logical structure of what this page should contain (note that the visual structure and layout may be different, and up to you). The page can have more content than this, but it should always contain at least what's described below.

    ${e.structure}

    Some more notes:

    - When implementing the custom page, make sure to adjust its design to match the frameworks, libraries, codestyle, design and branding of the remaining app.
    ${e.notes}

    Below is a React example of an extremely minimalistic implementation of this page. Note that this is an example, not a template, and as such you should spend careful consideration on how to implement the page in a way that is consistent with the existing codebase. Also note that these components are NOT self-contained, and NOT shadcn-ui components or a UI framework like that. They serve purely as examples on how to implement the page, but you must make sure to use the correct components and props for the framework and libraries you're using yourself. DO NOT USE THE EXACT DESIGN AS SPECIFIED IN THIS EXAMPLE, INSTEAD MAKE IT LOOK REALLY GOOD. THIS EXAMPLE ONLY DESCRIBES THE MINIMAL LOGIC THAT A SIGN-IN PAGE NEEDS TO SUPPORT, IT IS NOT A COMPLETE EXAMPLE!

    \`\`\`tsx
    ${e.reactExample}
    \`\`\`

    When you're done, please update the file where the Stack app is configured with its URLs, to make sure it points to this page. For example, you may have an object declared like this:

    \`\`\`tsx
    export const stackServerApp = new StackServerApp({
      tokenStore: "nextjs-cookie",
      urls: {
        default: {
          "type": "hosted",
        },
      }
    });
    \`\`\`

    You will want to update the \`urls\` property to point to this page, for example:

    \`\`\`tsx
      urls: {
        ${JSON.stringify(e.key)}: { type: "custom", url: "/path/to/your/custom/page", version: ${t} },
        // ...
      },
    \`\`\`

    ${k}
  `,s={1:{minSdkVersion:e.minSdkVersion,upgradePrompt:a,changelog:"Initial version."},...e.versions};return{title:e.title,versions:s,fullPrompt:a}}function T(e){let t="signIn"===e,r=t?"sign in":"sign up",a=t?"stackApp.signInWithCredential({ email: form.email, password: form.password })":"stackApp.signUpWithCredential({ email: form.email, password: form.password })";return C({key:e,title:t?"Sign In":"Sign Up",minSdkVersion:"0.0.1",structure:b.deindent`
      - If user is already signed in, regardless of whether restricted or not (ie. \`await stackApp.getUser({ includeRestricted: true }) !== null\`):
        - If user is restricted, \`await stackApp.redirectToOnboarding({ replace: true })\`
        - Otherwise, \`await stackApp.redirectToAfterSign${t?"In":"Up"}({ replace: true })\`
        - While the redirect is happening, you may display a loading indicator, or a note that the user is being redirected. If necessary, or if preferable, you can also render a message card that shows a link to \`await stackApp.redirectToHome()\` and a sign out button.
      - If user is not signed in:
        ${t?"- If sign-ups are enabled (\\`project = await stackApp.getProject(); project.config.signUpEnabled\\`), show a link to the sign-up page.":"- If sign-ups are disabled (\\`project = await stackApp.getProject(); !project.config.signUpEnabled\\`), show a message that sign-up is disabled."}
        - Show a ${r} screen. The auth methods that should render:
          - For each OAuth provider (\`project.config.oauthProviders: { readonly id: string }[]\`), render an OAuth button. Clicking the button calls \`await stackApp.signInWithOAuth("<providerId>")\`.
          ${t?"- If \\`project.config.passkeyEnabled\\`, render a passkey button. Clicking the button calls \\`await stackApp.signInWithPasskey()\\`.":""}
          - If \`project.config.credentialEnabled\`, render a credential ${r} form:
            - Email + password${t?"":" + repeat password"}
            ${t?"":"- Validate password strength with \\`getPasswordError()\\` and ensure repeated password matches"}
            ${t?'- "Forgot password?" link calling \\`await stackApp.redirectToForgotPassword()\\`':""}
            - Submit calls \`${a}: ${t?'Promise<Result<undefined, KnownErrors["EmailPasswordMismatch"] | KnownErrors["InvalidTotpCode"]>>':'Promise<Result<undefined, KnownErrors["UserWithEmailAlreadyExists"] | KnownErrors["PasswordRequirementsNotMet"] | KnownErrors["BotChallengeFailed"]>>'}\`
            - On error, display the error message on the email field
          - If \`project.config.magicLinkEnabled\`, render a magic link form:
            - Email input (validated to be a correct email address) + "Send email" button
            - Calls \`stackApp.sendMagicLinkEmail(email): Promise<Result<{ nonce: string }, KnownErrors["RedirectUrlNotWhitelisted"] | KnownErrors["BotChallengeFailed"]>>\`
            - After sending, switch to a 6-digit OTP input. User enters the code from their email
            - Submit the OTP + nonce via \`stackApp.signInWithMagicLink(otp + nonce): Promise<Result<undefined, KnownErrors["VerificationCodeError"] | KnownErrors["InvalidTotpCode"]>>\` (string concatenation)
          - If both credential and magic-link are enabled, allow the user to choose which flow to use.
          - If none of the above auth methods are enabled, show a message explaining that no authentication methods are enabled.
        - Show a link to the ${t?"sign up":"sign in"} page that calls \`await stackApp.redirectTo${t?"SignUp":"SignIn"}()\`.
    `,reactExample:b.deindent`
      export default function Custom${t?"SignIn":"SignUp"}Page() {
        const stackApp = useStackApp();
        const user = useUser({ includeRestricted: true });
        const project = stackApp.useProject();
        const [otpState, setOtpState] = useState<null | { nonce: string }>(null);

        useEffect(() => {
          if (user) {
            if (user.isRestricted) {
              void stackApp.redirectToOnboarding();
            } else {
              void stackApp.redirectToAfterSign${t?"In":"Up"}();
            }
          }
        }, [user]);

        if (user && !user.isRestricted) {
          return (
            <div>
              <Typography>You are already signed in.</Typography>
              <Button onClick={async () => await stackApp.redirectToSignOut()}>Sign out</Button>
              <Button onClick={async () => await stackApp.redirectToHome()}>Go home</Button>
            </div>
          );
        }

        ${t?"":`
        if (!project.config.signUpEnabled) {
          return <Typography>Sign-up is not enabled.</Typography>;
        }`}

        if (otpState) {
          return (
            <Form onSubmit={async (form) => {
              const result = await stackApp.signInWithMagicLink(form.otp + otpState.nonce);
              if (result.status === "error") handleErrorNicely(...);
            }}>
              <Typography>Enter the code from your email</Typography>
              <OTPInput id="otp" />
              <Button type="button" onClick={() => setOtpState(null)}>Go back</Button>
              <SubmitButton>Verify code</SubmitButton>
            </Form>
          );
        }

        const hasOAuthProviders = project.config.oauthProviders.length > 0;
        ${t?"const hasPasskey = project.config.passkeyEnabled;":""}
        const hasCredential = project.config.credentialEnabled;
        const hasMagicLink = project.config.magicLinkEnabled;
        const showSeparator = (hasCredential || hasMagicLink) && ${t?"(hasOAuthProviders || hasPasskey)":"hasOAuthProviders"};
        const hasAnyAuthMethod = hasOAuthProviders || hasCredential || hasMagicLink${t?" || hasPasskey":""};

        return (
          <div>
            <Typography type="h2">${t?"Sign in to your account":"Create a new account"}</Typography>
            ${t?`{
              project.config.signUpEnabled ? (
                <Typography>
                  {"Don't have an account? "}
                  <a
                    href={stackApp.urls.signUp}
                    onClick={async (e) => {
                      e.preventDefault();
                      await stackApp.redirectToSignUp();
                    }}
                  >
                    Sign up
                  </a>
                </Typography>
              ) : null
            }`:`<Typography>
              {"Already have an account? "}
              <a
                href={stackApp.urls.signIn}
                onClick={async (e) => {
                  e.preventDefault();
                  await stackApp.redirectToSignIn();
                }}
              >
                Sign in
              </a>
            </Typography>`}

            {${t?"(hasOAuthProviders || hasPasskey)":"hasOAuthProviders"} && (
              <div>
                {project.config.oauthProviders.map((provider) => (
                  <Button
                    key={provider.id}
                    onClick={async () => {
                      await stackApp.signInWithOAuth(provider.id);
                    }}
                  >
                    ${t?"Sign in":"Sign up"} with {provider.id}
                  </Button>
                ))}
                ${t?`{hasPasskey && (
                  <Button onClick={async () => await stackApp.signInWithPasskey()}>
                    Sign in with passkey
                  </Button>
                )}`:""}
              </div>
            )}

            {showSeparator ? (
              <Typography>
                Or continue with
              </Typography>
            ) : null}

            {hasCredential || hasMagicLink ? (
              <Tabs>
                <TabsList visible={hasCredential && hasMagicLink}>
                  {hasMagicLink && <TabsTrigger value="magic-link">Email</TabsTrigger>}
                  {hasCredential && <TabsTrigger value="password">Email & Password</TabsTrigger>}
                </TabsList>
                {hasMagicLink && <TabsContent value="magic-link">
                  <Form onSubmit={async (form) => {
                    const result = await stackApp.sendMagicLinkEmail(form.email);
                    if (result.status === "error") handleErrorNicely(...);
                    else setOtpState({ nonce: result.data.nonce });
                  }}>
                    <Label htmlFor="magic-link-email">Email</Label>
                    <EmailInput id="magic-link-email" />
                    <SubmitButton>Send OTP code</SubmitButton>
                  </Form>
                </TabsContent>}
                {hasCredential && <TabsContent value="password">
                  <Form onSubmit={async (form) => {
                    ${t?"":`if (form.password !== form.passwordRepeat) {
                      handleErrorNicely(...);
                      return;
                    }`}

                    const result = await ${a};
                    if (result.status === "error") handleErrorNicely(...);
                  }}>
                    <Label htmlFor="email">Email</Label>
                    <EmailInput id="email" />

                    <Label htmlFor="password">Password</Label>
                    <PasswordInput id="password" />

                    ${t?`<Button type="button" variant="link" onClick={async () => await stackApp.redirectToForgotPassword()}>
                      Forgot password?
                    </Button>`:`<Label htmlFor="password-repeat">Repeat password</Label>
                    <PasswordInput id="password-repeat" />`}

                    <SubmitButton>
                      ${t?"Sign In":"Sign Up"}
                    </SubmitButton>
                  </Form>
                </TabsContent>}
              </Tabs>
            ) : null}

            {!hasAnyAuthMethod ? (
              <Typography variant="destructive">No authentication method enabled.</Typography>
            ) : null}
          </div>
        );
      }
    `,notes:b.deindent`
      - This page shares a lot of code with the ${t?"signUp":"signIn"} page, and potentially other pages. Make sure to reuse code and keep behavior consistent wherever possible.
    `,versions:{}})}let S="{projectId}",x="{hostedPath}",A=/^[a-zA-Z][a-zA-Z\d+\-.]*:/,E={signIn:T("signIn"),signUp:T("signUp"),signOut:C({key:"signOut",title:"Sign Out",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read the current user.
        - If a user exists, sign them out.
        - After sign-out, show a confirmation state that the user is signed out.
      `,reactExample:b.deindent`
        const cacheSignOut = cacheFunction(async (user: CurrentUser) => {
          return await user.signOut();
        });

        export default function CustomSignOutPage() {
          const user = useUser({ or: "return-null" });
          const stackApp = useStackApp();

          if (user) {
            use(cacheSignOut(user));
          }

          return (
            <MessageCard
              title="Signed out"
              primaryButtonText="Go home"
              primaryAction={async () => {
                await stackApp.redirectToHome();
              }}
            >
              You have been signed out successfully.
            </MessageCard>
          );
        }
      `,notes:b.deindent`
        - Keep this page idempotent. Refreshing the page should still leave the user signed out and show a stable confirmation state.
      `,versions:{}}),emailVerification:C({key:"emailVerification",title:"Email Verification",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read the verification code from URL params.
        - If the code is missing, show an invalid-link state.
        - If the code exists, show a confirmation step:
          - Verify action calls \`stackApp.verifyEmail(code)\`.
          - Cancel action calls \`stackApp.redirectToHome()\`.
        - Handle verification result:
          - \`VerificationCodeNotFound\` => invalid-link state.
          - \`VerificationCodeExpired\` => expired-link state.
          - \`VerificationCodeAlreadyUsed\` => treat as successful verification.
          - Any other error => throw.
        - On success, show a verified state with a "Go home" action.
      `,reactExample:b.deindent`
        export default function CustomEmailVerificationPage(props: { searchParams?: Record<string, string> }) {
          const stackApp = useStackApp();
          const [result, setResult] = useState<Awaited<ReturnType<typeof stackApp.verifyEmail>> | null>(null);
          const code = props.searchParams?.code;

          if (!code) {
            return <MessageCard title="Invalid Verification Link" />;
          }

          if (!result) {
            return (
              <MessageCard
                title="Do you want to verify your email?"
                primaryButtonText="Verify"
                primaryAction={async () => {
                  setResult(await stackApp.verifyEmail(code));
                }}
                secondaryButtonText="Cancel"
                secondaryAction={async () => {
                  await stackApp.redirectToHome();
                }}
              />
            );
          }

          if (result.status === "error") {
            if (KnownErrors.VerificationCodeNotFound.isInstance(result.error)) {
              return <MessageCard title="Invalid Verification Link" />;
            } else if (KnownErrors.VerificationCodeExpired.isInstance(result.error)) {
              return <MessageCard title="Expired Verification Link" />;
            } else if (!KnownErrors.VerificationCodeAlreadyUsed.isInstance(result.error)) {
              throw result.error;
            }
          }

          return (
            <MessageCard
              title="Your email has been verified!"
              primaryButtonText="Go home"
              primaryAction={async () => {
                await stackApp.redirectToHome();
              }}
            />
          );
        }
      `,notes:b.deindent`
        - Preserve explicit states for invalid, expired, and already-used codes so users know what happened and what to do next.
      `,versions:{}}),passwordReset:C({key:"passwordReset",title:"Password Reset",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read the reset code from URL params.
        - If code is missing, show an invalid-link state.
        - Before rendering the form, verify the code via \`stackApp.verifyPasswordResetCode(code)\`.
          - \`VerificationCodeNotFound\` => invalid-link state.
          - \`VerificationCodeExpired\` => expired-link state.
          - \`VerificationCodeAlreadyUsed\` => used-link state.
          - Any other error => throw.
        - If code is valid, render reset form:
          - New password + repeated password.
          - Validate password strength and ensure repeated password matches.
          - Submit calls \`stackApp.resetPassword({ password, code })\`.
        - If reset succeeds, show success state.
        - If reset fails, show error state with guidance to request a new link.
      `,reactExample:b.deindent`
        export default function CustomPasswordResetPage(props: { searchParams: Record<string, string> }) {
          const stackApp = useStackApp();
          const code = props.searchParams.code;
          const [password, setPassword] = useState("");
          const [passwordRepeat, setPasswordRepeat] = useState("");
          const [done, setDone] = useState(false);
          const [failed, setFailed] = useState(false);
          const [formError, setFormError] = useState<string | null>(null);

          const cachedVerifyPasswordResetCode = cacheFunction(async (app: StackClientApp<true>, codeToVerify: string) => {
            return await app.verifyPasswordResetCode(codeToVerify);
          });

          if (!code) {
            return <MessageCard title="Invalid Password Reset Link" />;
          }

          const verificationResult = use(cachedVerifyPasswordResetCode(stackApp, code));
          if (verificationResult.status === "error") {
            if (KnownErrors.VerificationCodeNotFound.isInstance(verificationResult.error)) return <MessageCard title="Invalid Password Reset Link" />;
            if (KnownErrors.VerificationCodeExpired.isInstance(verificationResult.error)) return <MessageCard title="Expired Password Reset Link" />;
            if (KnownErrors.VerificationCodeAlreadyUsed.isInstance(verificationResult.error)) return <MessageCard title="Used Password Reset Link" />;
            throw verificationResult.error;
          }

          if (done) return <MessageCard title="Your password has been reset" />;
          if (failed) return <MessageCard title="Failed to reset password" />;

          return (
            <form onSubmit={async (e) => {
              e.preventDefault();
              setFormError(null);

              if (password !== passwordRepeat) {
                setFormError("Passwords do not match");
                return;
              }

              const result = await stackApp.resetPassword({ password, code });
              if (result.status === "error") setFailed(true);
              else setDone(true);
            }}>
              <Label htmlFor="password">New Password</Label>
              <PasswordInput id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <Label htmlFor="password-repeat">Repeat New Password</Label>
              <PasswordInput id="password-repeat" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />

              {formError ? <Typography variant="destructive">{formError}</Typography> : null}
              <Button type="submit">Reset Password</Button>
            </form>
          );
        }
      `,notes:b.deindent`
        - Verify the reset code before rendering the form so users immediately get the right state for invalid/expired/used links.
      `,versions:{}}),forgotPassword:C({key:"forgotPassword",title:"Forgot Password",minSdkVersion:"0.0.1",structure:b.deindent`
        - If a user is already signed in, show a signed-in state instead of the reset form.
        - If user is signed out:
          - Render a forgot-password form with email input.
          - Submit calls \`stackApp.sendForgotPasswordEmail(email)\`.
          - On success, switch to an email-sent confirmation state.
        - Provide a link back to sign-in.
      `,reactExample:b.deindent`
        export default function CustomForgotPasswordPage() {
          const stackApp = useStackApp();
          const user = useUser({ or: "return-null" });
          const [email, setEmail] = useState("");
          const [sent, setSent] = useState(false);
          const [error, setError] = useState<string | null>(null);

          if (user) {
            return <MessageCard title="You are already signed in." />;
          }

          if (sent) {
            return <MessageCard title="Email sent" />;
          }

          return (
            <div>
              <Typography type="h2">Reset Your Password</Typography>
              <Typography>
                {"Don't need to reset? "}
                <a href={stackApp.urls.signIn}>Sign in</a>
              </Typography>

              <form onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                if (!email) {
                  setError("Please enter your email");
                  return;
                }
                await stackApp.sendForgotPasswordEmail(email);
                setSent(true);
              }}>
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error ? <Typography variant="destructive">{error}</Typography> : null}
                <Button type="submit">Send Email</Button>
              </form>
            </div>
          );
        }
      `,notes:b.deindent`
        - Keep the success state explicit so users know the request succeeded and do not repeatedly re-submit.
      `,versions:{}}),oauthCallback:C({key:"oauthCallback",title:"OAuth Callback",minSdkVersion:"0.0.1",structure:b.deindent`
        - Trigger OAuth callback handling once when the page loads by calling \`stackApp.callOAuthCallback()\`.
        - If callback handler already redirected, keep a neutral loading state.
        - If callback handler did not redirect, redirect to sign-in with \`stackApp.redirectToSignIn({ noRedirectBack: true })\`.
        - If callback processing throws, capture/show a useful error state.
        - Provide a fallback "click here" link in case automatic redirect does not happen.
      `,reactExample:b.deindent`
        export default function CustomOAuthCallbackPage() {
          const stackApp = useStackApp();
          const called = useRef(false);
          const [error, setError] = useState<unknown>(null);
          const [showRedirectLink, setShowRedirectLink] = useState(false);

          if (!called.current) {
            called.current = true;
            void runAsynchronously(async () => {
              setTimeout(() => setShowRedirectLink(true), 3000);
              try {
                const hasRedirected = await stackApp.callOAuthCallback();
                if (!hasRedirected) {
                  await stackApp.redirectToSignIn({ noRedirectBack: true });
                }
              } catch (e) {
                setError(e);
              }
            });
          }

          return (
            <div>
              <Spinner />
              {showRedirectLink ? (
                <Typography>
                  {"If you are not redirected automatically, "}
                  <a href={stackApp.urls.home}>click here</a>
                </Typography>
              ) : null}
              {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : null}
            </div>
          );
        }
      `,notes:b.deindent`
        - This page is mainly control flow. Keep user-visible UI minimal while still providing a reliable fallback path.
      `,versions:{}}),magicLinkCallback:C({key:"magicLinkCallback",title:"Magic Link Callback",minSdkVersion:"0.0.1",structure:b.deindent`
        - If a user is already signed in, show a signed-in state.
        - Read the magic-link code from URL params.
        - If code is missing, show invalid-link state.
        - If code exists, show a confirmation step:
          - Confirm action calls \`stackApp.signInWithMagicLink(code)\`.
          - Cancel action calls \`stackApp.redirectToHome()\`.
        - Handle callback result:
          - \`VerificationCodeNotFound\` => invalid-link state.
          - \`VerificationCodeExpired\` => expired-link state.
          - \`VerificationCodeAlreadyUsed\` => already-used state.
          - Any other error => throw.
        - On success, show a success state with "Go home".
      `,reactExample:b.deindent`
        export default function CustomMagicLinkCallbackPage(props: { searchParams?: Record<string, string> }) {
          const stackApp = useStackApp();
          const user = useUser({ or: "return-null" });
          const [result, setResult] = useState<Awaited<ReturnType<typeof stackApp.signInWithMagicLink>> | null>(null);
          const code = props.searchParams?.code;

          if (user) return <MessageCard title="You are already signed in." />;
          if (!code) return <MessageCard title="Invalid Magic Link" />;

          if (!result) {
            return (
              <MessageCard
                title="Do you want to sign in?"
                primaryButtonText="Sign in"
                primaryAction={async () => setResult(await stackApp.signInWithMagicLink(code))}
                secondaryButtonText="Cancel"
                secondaryAction={async () => await stackApp.redirectToHome()}
              />
            );
          }

          if (result.status === "error") {
            if (KnownErrors.VerificationCodeNotFound.isInstance(result.error)) return <MessageCard title="Invalid Magic Link" />;
            if (KnownErrors.VerificationCodeExpired.isInstance(result.error)) return <MessageCard title="Expired Magic Link" />;
            if (KnownErrors.VerificationCodeAlreadyUsed.isInstance(result.error)) return <MessageCard title="Magic Link Already Used" />;
            throw result.error;
          }

          return (
            <MessageCard
              title="Signed in successfully!"
              primaryButtonText="Go home"
              primaryAction={async () => await stackApp.redirectToHome()}
            />
          );
        }
      `,notes:b.deindent`
        - Keep invalid/expired/already-used states distinct so users understand whether they should request a new link.
      `,versions:{}}),accountSettings:C({key:"accountSettings",title:"Account Settings",minSdkVersion:"0.0.1",structure:b.deindent`
        - Require an authenticated user (\`useUser({ or: "redirect" })\`) and project config (\`stackApp.useProject()\`).
        - Render top-level pages in this order:
          - **My Profile**
          - **Emails & Auth**
          - **Notifications**
          - **Active Sessions**
          - **API Keys** (only if \`project.config.allowUserApiKeys\`)
          - **Payments** (only if user/team has billable products)
          - **Settings**
        - Conditionally include sections:
          - API keys page only when \`project.config.allowUserApiKeys\` is true.
          - Payments page only when user has products or at least one team has products.
        - Render team-related entries:
          - Show a "Teams" divider when teams exist or team creation is enabled.
          - For each team in \`user.useTeams()\`, render a team page with these sections:
            - Team user profile (override your own display name in this team) via \`user.useTeamProfile(team).update(...)\`.
            - Team profile image (\`team.update({ profileImageUrl })\`) only if \`user.usePermission(team, "$update_team")\`.
            - Team display name (\`team.update({ displayName })\`) only if \`user.usePermission(team, "$update_team")\`.
            - Member list (\`team.useUsers()\`) when \`$read_members\` or \`$invite_members\` permission exists.
            - Invite member form (\`team.inviteUser({ email })\`) when \`$invite_members\`; show outstanding invitations (\`team.useInvitations()\`) and revoke invitation action when \`$remove_members\`.
            - Team API keys (\`team.useApiKeys()\`, \`team.createApiKey(...)\`) only if \`user.usePermission(team, "$manage_api_keys")\` and \`project.config.allowTeamApiKeys\`.
            - Leave team confirmation flow using \`user.leaveTeam(team)\`.
          - Include "Create a team" page when \`project.config.clientTeamCreationEnabled\` and submit via \`user.createTeam({ displayName })\`.
        - **My Profile** page requirements:
          - Editable display name (\`user.update({ displayName })\`).
          - Editable profile image (\`user.update({ profileImageUrl })\`).
        - **Emails & Auth** page requirements (render all sub-sections in this order):
          - **Emails**:
            - List email contact channels from \`user.useContactChannels()\`.
            - Add email: \`user.createContactChannel({ type: "email", value, usedForAuth: false })\`.
            - Actions per email (with permission/state guards): send verification email, set primary (only if verified), toggle used-for-sign-in, remove email.
            - Prevent removing/disabling the last sign-in email.
          - **Password** (only if \`project.config.credentialEnabled\`):
            - If user already has password: update flow via \`user.updatePassword({ oldPassword, newPassword })\`.
            - If user has no password: set flow via \`user.setPassword({ password })\`.
            - Require a sign-in email before allowing set/update.
            - Validate password quality via \`getPasswordError()\`.
          - **Passkey** (only if \`project.config.passkeyEnabled\`):
            - Register passkey via \`user.registerPasskey()\`.
            - Disable passkey via \`user.update({ passkeyAuthEnabled: false })\`.
            - Require a verified sign-in email to enable.
            - Prevent disabling if passkey is currently the only sign-in method.
          - **OTP sign-in** (only if \`project.config.magicLinkEnabled\`):
            - Toggle OTP via \`user.update({ otpAuthEnabled: true | false })\`.
            - Require a verified sign-in email to enable.
            - Prevent disabling if OTP is currently the only sign-in method.
          - **MFA (TOTP)**:
            - Enable by generating secret + QR code, verify initial code, then persist secret via \`user.update({ totpMultiFactorSecret: secret })\`.
            - Disable via \`user.update({ totpMultiFactorSecret: null })\`.
        - **Notifications** page requirements:
          - Render categories from \`user.useNotificationCategories()\`.
          - Toggle each category via \`category.setEnabled(value)\`.
          - Show non-disableable categories as locked.
        - **Active Sessions** page requirements:
          - Load sessions via \`user.getActiveSessions()\`.
          - Show current vs other session, IP, location, created-at/last-used.
          - Revoke single session via \`user.revokeSession(sessionId)\`.
          - Revoke all non-current sessions with a confirmation step.
        - **API Keys** page requirements:
          - List keys via \`user.useApiKeys()\`.
          - Create via \`user.createApiKey(options)\`; show first-view key secret once.
          - Support revoke/update operations from table/actions.
        - **Payments** page requirements:
          - Support personal/team customer context switch.
          - Render current default payment method and allow updating it via setup-intent flow.
          - Render active plans/products with cancel and switch-plan actions.
          - Render recent invoices and link to hosted invoice URLs when available.
        - **Settings** page requirements:
          - Sign-out section (\`user.signOut()\`).
          - Delete-account section (only if \`project.config.clientUserDeletionEnabled\`) with destructive confirmation and \`user.delete()\` then redirect home.
        - Support extension points (for example \`extraItems\`) for custom sections.
        - Use loading/skeleton states for async sections.
      `,reactExample:b.deindent`
        function ProfileSection() {
          const user = useUser({ or: "redirect" });
          const [displayName, setDisplayName] = useState(user.displayName ?? "");
          const [profileImageUrl, setProfileImageUrl] = useState(user.profileImageUrl ?? "");

          return (
            <div>
              <Typography type="h3">My Profile</Typography>
              <Label htmlFor="display-name">Display name</Label>
              <Input id="display-name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
              <Label htmlFor="profile-image-url">Profile image URL</Label>
              <Input id="profile-image-url" value={profileImageUrl} onChange={(e) => setProfileImageUrl(e.target.value)} />
              <div className="flex gap-2 mt-2">
                <Button onClick={async () => await user.update({ displayName })}>Save display name</Button>
                <Button variant="secondary" onClick={async () => await user.update({ profileImageUrl })}>Save profile image</Button>
              </div>
            </div>
          );
        }

        function EmailsSection() {
          const user = useUser({ or: "redirect" });
          const [newEmail, setNewEmail] = useState("");
          const contactChannels = user.useContactChannels().filter((x) => x.type === "email");
          const usedForAuthCount = contactChannels.filter((x) => x.usedForAuth).length;

          return (
            <div className="space-y-3">
              <Typography type="h4">Emails</Typography>
              <form onSubmit={async (e) => {
                e.preventDefault();
                if (!newEmail) return;
                await user.createContactChannel({ type: "email", value: newEmail, usedForAuth: false });
                setNewEmail("");
              }}>
                <Input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="Enter email" />
                <Button type="submit" className="mt-2">Add email</Button>
              </form>

              {contactChannels.map((channel) => {
                const isLastAuthEmail = channel.usedForAuth && usedForAuthCount === 1;
                return (
                  <div key={channel.id} className="border rounded p-3 space-y-2">
                    <Typography>{channel.value}</Typography>
                    <div className="flex gap-2 flex-wrap">
                      {!channel.isVerified ? <Button variant="secondary" onClick={async () => await channel.sendVerificationEmail()}>Send verification email</Button> : null}
                      {channel.isVerified && !channel.isPrimary ? <Button variant="secondary" onClick={async () => await channel.update({ isPrimary: true })}>Set as primary</Button> : null}
                      {channel.isVerified && !channel.usedForAuth ? <Button variant="secondary" onClick={async () => await channel.update({ usedForAuth: true })}>Use for sign-in</Button> : null}
                      {channel.usedForAuth ? <Button variant="secondary" disabled={isLastAuthEmail} onClick={async () => await channel.update({ usedForAuth: false })}>Stop using for sign-in</Button> : null}
                      <Button variant="destructive" disabled={isLastAuthEmail} onClick={async () => await channel.delete()}>Remove</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        function PasswordSection() {
          const stackApp = useStackApp();
          const user = useUser({ or: "redirect" });
          const project = stackApp.useProject();
          const [oldPassword, setOldPassword] = useState("");
          const [newPassword, setNewPassword] = useState("");
          const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
          const hasAuthEmail = user.useContactChannels().some((x) => x.type === "email" && x.usedForAuth);

          if (!project.config.credentialEnabled) return null;

          return (
            <div className="space-y-2">
              <Typography type="h4">Password</Typography>
              {!hasAuthEmail ? <Typography variant="secondary">To set a password, please add a sign-in email.</Typography> : null}
              {user.hasPassword ? <Input type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder="Old password" /> : null}
              <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New password" />
              <Input type="password" value={newPasswordRepeat} onChange={(e) => setNewPasswordRepeat(e.target.value)} placeholder="Repeat new password" />
              <Button onClick={async () => {
                if (newPassword !== newPasswordRepeat) return;
                const passwordError = getPasswordError(newPassword);
                if (passwordError) return;
                if (user.hasPassword) await user.updatePassword({ oldPassword, newPassword });
                else await user.setPassword({ password: newPassword });
              }}>
                {user.hasPassword ? "Update password" : "Set password"}
              </Button>
            </div>
          );
        }

        function PasskeySection() {
          const stackApp = useStackApp();
          const user = useUser({ or: "redirect" });
          const project = stackApp.useProject();
          const hasVerifiedAuthEmail = user.useContactChannels().some((x) => x.type === "email" && x.isVerified && x.usedForAuth);
          const isOnlyAuthMethod = user.passkeyAuthEnabled && !user.hasPassword && user.oauthProviders.length === 0 && !user.otpAuthEnabled;

          if (!project.config.passkeyEnabled) return null;

          return (
            <div className="space-y-2">
              <Typography type="h4">Passkey</Typography>
              {!hasVerifiedAuthEmail ? <Typography variant="secondary">Add a verified sign-in email before enabling passkey sign-in.</Typography> : null}
              {!user.passkeyAuthEnabled && hasVerifiedAuthEmail ? <Button onClick={async () => await user.registerPasskey()}>Add new passkey</Button> : null}
              {user.passkeyAuthEnabled ? (
                <Button
                  variant="secondary"
                  disabled={isOnlyAuthMethod}
                  onClick={async () => await user.update({ passkeyAuthEnabled: false })}
                >
                  Disable passkey
                </Button>
              ) : null}
            </div>
          );
        }

        function OtpSection() {
          const stackApp = useStackApp();
          const user = useUser({ or: "redirect" });
          const project = stackApp.useProject();
          const hasVerifiedAuthEmail = user.useContactChannels().some((x) => x.type === "email" && x.isVerified && x.usedForAuth);
          const isOnlyAuthMethod = user.otpAuthEnabled && !user.hasPassword && user.oauthProviders.length === 0 && !user.passkeyAuthEnabled;

          if (!project.config.magicLinkEnabled) return null;

          return (
            <div className="space-y-2">
              <Typography type="h4">OTP sign-in</Typography>
              {!hasVerifiedAuthEmail ? <Typography variant="secondary">Add a verified sign-in email before enabling OTP sign-in.</Typography> : null}
              {!user.otpAuthEnabled && hasVerifiedAuthEmail ? <Button variant="secondary" onClick={async () => await user.update({ otpAuthEnabled: true })}>Enable OTP</Button> : null}
              {user.otpAuthEnabled ? <Button variant="secondary" disabled={isOnlyAuthMethod} onClick={async () => await user.update({ otpAuthEnabled: false })}>Disable OTP</Button> : null}
            </div>
          );
        }

        function MfaSection() {
          const user = useUser({ or: "redirect" });
          const [generatedSecret, setGeneratedSecret] = useState<Uint8Array | null>(null);
          const [mfaCode, setMfaCode] = useState("");

          return (
            <div className="space-y-2">
              <Typography type="h4">Multi-factor authentication</Typography>
              {!user.isMultiFactorRequired && !generatedSecret ? (
                <Button variant="secondary" onClick={async () => {
                  const secret = generateRandomValues(new Uint8Array(20));
                  setGeneratedSecret(secret);
                }}>
                  Enable MFA
                </Button>
              ) : null}
              {generatedSecret ? (
                <div className="space-y-2">
                  <Typography>Show generated QR code here and ask for the first code.</Typography>
                  <Input value={mfaCode} onChange={(e) => setMfaCode(e.target.value)} placeholder="123456" />
                  <Button onClick={async () => {
                    if (!verifyTOTP(generatedSecret, 30, 6, mfaCode)) return;
                    await user.update({ totpMultiFactorSecret: generatedSecret });
                    setGeneratedSecret(null);
                    setMfaCode("");
                  }}>
                    Confirm MFA setup
                  </Button>
                </div>
              ) : null}
              {user.isMultiFactorRequired ? <Button variant="secondary" onClick={async () => await user.update({ totpMultiFactorSecret: null })}>Disable MFA</Button> : null}
            </div>
          );
        }

        function EmailsAndAuthSection() {
          return (
            <div>
              <Typography type="h3">Emails & Auth</Typography>
              <EmailsSection />
              <PasswordSection />
              <PasskeySection />
              <OtpSection />
              <MfaSection />
            </div>
          );
        }

        function NotificationsSection() {
          return (
            <div>
              <Typography type="h3">Notifications</Typography>
              <Typography>Render notification preference controls here.</Typography>
            </div>
          );
        }

        function ActiveSessionsSection() {
          const user = useUser({ or: "redirect" });
          const [sessions, setSessions] = useState<ActiveSession[]>([]);

          return (
            <div>
              <Typography type="h3">Active Sessions</Typography>
              <Button variant="secondary" onClick={async () => setSessions(await user.getActiveSessions())}>Refresh sessions</Button>
              {sessions.map((session) => (
                <div key={session.id} className="border rounded p-2 mt-2">
                  <Typography>{session.isCurrentSession ? "Current Session" : "Other Session"}</Typography>
                  <Typography variant="secondary">{session.geoInfo?.ip ?? "-"} / {session.geoInfo?.cityName ?? "Unknown"}</Typography>
                  {!session.isCurrentSession ? <Button variant="destructive" onClick={async () => await user.revokeSession(session.id)}>Revoke</Button> : null}
                </div>
              ))}
              <Button
                variant="secondary"
                onClick={async () => {
                  const latestSessions = await user.getActiveSessions();
                  await Promise.all(latestSessions.filter((x) => !x.isCurrentSession).map((x) => user.revokeSession(x.id)));
                  setSessions(await user.getActiveSessions());
                }}
              >
                Revoke all other sessions
              </Button>
            </div>
          );
        }

        function ApiKeysSection() {
          const user = useUser({ or: "redirect" });
          const [newlyCreated, setNewlyCreated] = useState<ApiKey<"user", true> | null>(null);
          const apiKeys = user.useApiKeys();

          return (
            <div>
              <Typography type="h3">API Keys</Typography>
              <Button onClick={async () => {
                const created = await user.createApiKey({ description: "New key" });
                setNewlyCreated(created);
              }}>
                Create API key
              </Button>
              {newlyCreated ? <Typography variant="secondary">Copy this key now: {newlyCreated.value}</Typography> : null}
              {apiKeys.map((key) => (
                <div key={key.id} className="border rounded p-2 mt-2 flex justify-between">
                  <Typography>{key.description ?? key.id}</Typography>
                  <Button variant="destructive" onClick={async () => await key.revoke()}>Revoke</Button>
                </div>
              ))}
            </div>
          );
        }

        function PaymentsSection(props: { customer: any, customerType: "user" | "team" }) {
          const billing = props.customer.useBilling();
          const products = props.customer.useProducts().filter((p: any) => p.customerType === props.customerType);
          const invoices = props.customer.useInvoices({ limit: 10 });

          return (
            <div>
              <Typography type="h3">Payments</Typography>
              <Typography>Default payment method: {billing.defaultPaymentMethod ? "set" : "not set"}</Typography>
              <Button onClick={async () => {
                const setup = await props.customer.createPaymentMethodSetupIntent();
                await props.customer.setDefaultPaymentMethodFromSetupIntent(setup.clientSecret);
              }}>
                Update payment method
              </Button>

              <Typography type="h4">Active plans</Typography>
              {products.map((product: any) => (
                <div key={product.id ?? product.displayName} className="border rounded p-2 mt-2">
                  <Typography>{product.displayName}</Typography>
                  {product.subscription?.isCancelable ? (
                    <Button variant="secondary" onClick={async () => {
                      await useStackApp().cancelSubscription({
                        ...(props.customerType === "team" ? { teamId: props.customer.id } : {}),
                        productId: product.id ?? "",
                        subscriptionId: product.subscription?.subscriptionId ?? undefined,
                      });
                    }}>
                      Cancel subscription
                    </Button>
                  ) : null}
                </div>
              ))}

              <Typography type="h4">Invoices</Typography>
              {invoices.map((invoice: any, index: number) => (
                <div key={index} className="flex justify-between border rounded p-2 mt-2">
                  <Typography>{invoice.status}</Typography>
                  {invoice.hostedInvoiceUrl ? <a href={invoice.hostedInvoiceUrl} target="_blank" rel="noreferrer">View</a> : <Typography variant="secondary">Unavailable</Typography>}
                </div>
              ))}
            </div>
          );
        }

        function TeamSection(props: { team: { displayName: string } }) {
          const user = useUser({ or: "redirect" });
          const stackApp = useStackApp();
          const project = stackApp.useProject();
          const team = user.useTeam((props.team as any).id);

          if (!team) return null;

          const canUpdateTeam = user.usePermission(team, "$update_team");
          const canReadMembers = user.usePermission(team, "$read_members");
          const canInviteMembers = user.usePermission(team, "$invite_members");
          const canRemoveMembers = user.usePermission(team, "$remove_members");
          const canManageApiKeys = user.usePermission(team, "$manage_api_keys");

          return (
            <div className="space-y-3">
              <Typography type="h3">{props.team.displayName}</Typography>
              <Typography type="h4">Team user profile</Typography>
              <Button variant="secondary" onClick={async () => {
                const profile = user.useTeamProfile(team);
                await profile.update({ displayName: "Updated team display name for current user" });
              }}>
                Save team user display name
              </Button>

              {canUpdateTeam ? (
                <>
                  <Typography type="h4">Team profile image</Typography>
                  <Button variant="secondary" onClick={async () => await team.update({ profileImageUrl: "https://example.com/team.png" })}>
                    Save team profile image URL
                  </Button>

                  <Typography type="h4">Team display name</Typography>
                  <Button variant="secondary" onClick={async () => await team.update({ displayName: team.displayName + " (updated)" })}>
                    Save team display name
                  </Button>
                </>
              ) : null}

              {(canReadMembers || canInviteMembers) ? (
                <>
                  <Typography type="h4">Members</Typography>
                  {team.useUsers().map((member) => (
                    <Typography key={member.id}>{member.teamProfile.displayName ?? "No display name set"}</Typography>
                  ))}
                </>
              ) : null}

              {canInviteMembers ? (
                <div className="space-y-2">
                  <Typography type="h4">Invite member</Typography>
                  <Button variant="secondary" onClick={async () => await team.inviteUser({ email: "new-member@example.com" })}>
                    Invite user
                  </Button>
                  {canReadMembers ? team.useInvitations().map((invitation) => (
                    <div key={invitation.id} className="flex gap-2 items-center">
                      <Typography>{invitation.recipientEmail}</Typography>
                      {canRemoveMembers ? <Button variant="destructive" onClick={async () => await invitation.revoke()}>Revoke invitation</Button> : null}
                    </div>
                  )) : null}
                </div>
              ) : null}

              {(canManageApiKeys && project.config.allowTeamApiKeys) ? (
                <div>
                  <Typography type="h4">Team API Keys</Typography>
                  <Button variant="secondary" onClick={async () => await team.createApiKey({ description: "Team key" })}>
                    Create team API key
                  </Button>
                </div>
              ) : null}

              <div>
                <Typography type="h4">Leave team</Typography>
                <Button variant="destructive" onClick={async () => {
                  await user.leaveTeam(team);
                  window.location.reload();
                }}>
                  Leave team
                </Button>
              </div>
            </div>
          );
        }

        function CreateTeamSection() {
          const stackApp = useStackApp();
          const user = useUser({ or: "redirect" });
          const project = stackApp.useProject();
          const navigate = stackApp.useNavigate();
          const [displayName, setDisplayName] = useState("");

          if (!project.config.clientTeamCreationEnabled) {
            return <Typography variant="secondary">Team creation is not enabled.</Typography>;
          }

          return (
            <div>
              <Typography type="h3">Create a team</Typography>
              <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Team name" />
              <Button onClick={async () => {
                const team = await user.createTeam({ displayName });
                navigate("#team-" + team.id);
              }}>
                Create
              </Button>
            </div>
          );
        }

        function SettingsSection() {
          const user = useUser({ or: "redirect" });
          return (
            <div>
              <Typography type="h3">Settings</Typography>
              <Button onClick={async () => await user.signOut()}>Sign out</Button>
              <Button variant="destructive" onClick={async () => {
                await user.delete();
                await useStackApp().redirectToHome();
              }}>
                Delete account
              </Button>
            </div>
          );
        }

        export default function CustomAccountSettingsPage(props: { extraItems?: { id: string, title: string, content: React.ReactNode }[] }) {
          const stackApp = useStackApp();
          const user = useUser({ or: "redirect" });
          const project = stackApp.useProject();
          const teams = user.useTeams();
          const [activeId, setActiveId] = useState("profile");
          const [selectedPaymentTeamId, setSelectedPaymentTeamId] = useState<string | null>(null);
          const [paymentsReady, setPaymentsReady] = useState(false);
          const [userHasProducts, setUserHasProducts] = useState(false);
          const [teamIdsWithProducts, setTeamIdsWithProducts] = useState<Set<string>>(new Set());

          if (!paymentsReady) {
            void runAsynchronously(async () => {
              const userProducts = await user.listProducts({ limit: 1 });
              const teamsWithProducts = await Promise.all(
                teams.map(async (team) => {
                  const isAdmin = await user.hasPermission(team, "team_admin");
                  if (!isAdmin) return null;
                  const teamProducts = await team.listProducts({ limit: 1 });
                  const hasTeamProducts = teamProducts.some((product) => product.customerType === "team");
                  return hasTeamProducts ? team.id : null;
                })
              );
              setUserHasProducts(userProducts.some((product) => product.customerType === "user"));
              setTeamIdsWithProducts(new Set(teamsWithProducts.filter((id): id is string => id !== null)));
              setPaymentsReady(true);
            });
          }

          const teamsWithProducts = teams.filter((team) => teamIdsWithProducts.has(team.id));
          const shouldShowPayments = paymentsReady && (userHasProducts || teamsWithProducts.length > 0);
          const selectedPaymentTeam = selectedPaymentTeamId
            ? teams.find((team) => team.id === selectedPaymentTeamId) ?? null
            : null;
          const paymentCustomer = selectedPaymentTeam ?? (userHasProducts ? user : null);
          const paymentCustomerType = selectedPaymentTeam ? "team" : "user";

          const items = [
            { id: "profile", title: "My Profile", content: <ProfileSection /> },
            { id: "auth", title: "Emails & Auth", content: <EmailsAndAuthSection /> },
            { id: "notifications", title: "Notifications", content: <NotificationsSection /> },
            { id: "sessions", title: "Active Sessions", content: <ActiveSessionsSection /> },
            ...(project.config.allowUserApiKeys ? [{ id: "api-keys", title: "API Keys", content: <ApiKeysSection /> }] : []),
            ...(shouldShowPayments && paymentCustomer ? [{
              id: "payments",
              title: "Payments",
              content: (
                <div className="space-y-2">
                  {teamsWithProducts.length > 0 ? (
                    <Select value={selectedPaymentTeamId ?? "__personal__"} onValueChange={(value) => setSelectedPaymentTeamId(value === "__personal__" ? null : value)}>
                      <SelectTrigger className="w-[240px]"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {userHasProducts ? <SelectItem value="__personal__">Personal</SelectItem> : null}
                        {teamsWithProducts.map((team) => <SelectItem key={team.id} value={team.id}>{team.displayName}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  ) : null}
                  <PaymentsSection customer={paymentCustomer} customerType={paymentCustomerType} />
                </div>
              ),
            }] : []),
            ...(props.extraItems ?? []),
            ...(teams.length > 0 || project.config.clientTeamCreationEnabled ? [{ id: "teams-divider", title: "Teams", content: null }] : []),
            ...teams.map((team) => ({ id: "team-" + team.id, title: team.displayName, content: <TeamSection team={team} /> })),
            ...(project.config.clientTeamCreationEnabled ? [{ id: "team-create", title: "Create a team", content: <CreateTeamSection /> }] : []),
            { id: "settings", title: "Settings", content: <SettingsSection /> },
          ];

          const activeItem = items.find((item) => item.id === activeId) ?? items[0];

          return (
            <div>
              <Typography type="h2">Account Settings</Typography>
              <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 16 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map((item) => (
                    <Button key={item.id} variant={item.id === activeId ? "default" : "secondary"} onClick={() => setActiveId(item.id)}>
                      {item.title}
                    </Button>
                  ))}
                </div>
                <div>{activeItem.content}</div>
              </div>
            </div>
          );
        }
      `,notes:b.deindent`
        - Keep section boundaries explicit and low-coupled so teams can evolve independently without rewriting the full page.
      `,versions:{}}),teamInvitation:C({key:"teamInvitation",title:"Team Invitation",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read invitation code from URL params.
        - If code is missing, show invalid-link state.
        - Resolve current user with \`includeRestricted: true\`.
          - If user is signed out, show a sign-in prompt with cancel path.
          - If user is restricted, route user to onboarding first.
        - Verify invitation code via \`stackApp.verifyTeamInvitationCode(code)\`:
          - Not found => invalid-link state.
          - Expired => expired-link state.
          - Already used => used-link state.
          - Other errors => throw.
        - If code is valid, load invitation details via \`stackApp.getTeamInvitationDetails(code)\`.
        - Render invitation actions:
          - Join => \`stackApp.acceptTeamInvitation(code)\`.
          - Ignore => \`stackApp.redirectToHome()\`.
        - On successful join, show success state and allow navigation home.
      `,reactExample:b.deindent`
        export default function CustomTeamInvitationPage(props: { searchParams: Record<string, string> }) {
          const stackApp = useStackApp();
          const user = useUser({ or: "return-null", includeRestricted: true });
          const code = props.searchParams.code;
          const [accepted, setAccepted] = useState(false);
          const [details, setDetails] = useState<null | { teamDisplayName: string }>(null);
          const [pageError, setPageError] = useState<null | "invalid" | "expired" | "used" | "unknown">(null);

          if (!code) return <MessageCard title="Invalid Team Invitation Link" />;

          if (!user) {
            return (
              <MessageCard
                title="Team invitation"
                primaryButtonText="Sign in"
                primaryAction={async () => await stackApp.redirectToSignIn()}
                secondaryButtonText="Cancel"
                secondaryAction={async () => await stackApp.redirectToHome()}
              />
            );
          }

          if (user.isRestricted) {
            return (
              <MessageCard
                title="Complete your account setup"
                primaryButtonText="Complete setup"
                primaryAction={async () => await stackApp.redirectToOnboarding()}
              />
            );
          }

          if (pageError === "invalid") return <MessageCard title="Invalid Team Invitation Link" />;
          if (pageError === "expired") return <MessageCard title="Expired Team Invitation Link" />;
          if (pageError === "used") return <MessageCard title="Used Team Invitation Link" />;
          if (pageError === "unknown") return <PredefinedMessageCard type="unknownError" />;

          if (!details) {
            return (
              <MessageCard
                title="Team invitation"
                primaryButtonText="Check invitation"
                primaryAction={async () => {
                  const verification = await stackApp.verifyTeamInvitationCode(code);
                  if (verification.status === "error") {
                    if (KnownErrors.VerificationCodeNotFound.isInstance(verification.error)) {
                      setPageError("invalid");
                      return;
                    }
                    if (KnownErrors.VerificationCodeExpired.isInstance(verification.error)) {
                      setPageError("expired");
                      return;
                    }
                    if (KnownErrors.VerificationCodeAlreadyUsed.isInstance(verification.error)) {
                      setPageError("used");
                      return;
                    }
                    throw verification.error;
                  }

                  const invitationDetails = await stackApp.getTeamInvitationDetails(code);
                  if (invitationDetails.status === "error") {
                    setPageError("unknown");
                    return;
                  }

                  setDetails(invitationDetails.data);
                }}
                secondaryButtonText="Cancel"
                secondaryAction={async () => await stackApp.redirectToHome()}
              >
                We will verify your invitation before showing the join action.
              </MessageCard>
            );
          }

          if (accepted) {
            return <MessageCard title="Team invitation">You have successfully joined {details.teamDisplayName}</MessageCard>;
          }

          return (
            <MessageCard
              title="Team invitation"
              primaryButtonText="Join"
              primaryAction={async () => {
                const result = await stackApp.acceptTeamInvitation(code);
                if (result.status === "ok") setAccepted(true);
                else setPageError("unknown");
              }}
              secondaryButtonText="Ignore"
              secondaryAction={async () => await stackApp.redirectToHome()}
            >
              You are invited to join {details.teamDisplayName}
            </MessageCard>
          );
        }
      `,notes:b.deindent`
        - Treat invitation flow as a gatekeeper: auth state, restricted state, and code validity should be checked in a predictable order.
      `,versions:{}}),mfa:C({key:"mfa",title:"MFA",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read the MFA attempt code from session storage.
        - Render OTP input for the one-time code.
        - When OTP is complete, submit \`stackApp.signInWithMfa(otp, attemptCode, { noRedirect: true })\`.
        - Handle result:
          - Success => clear stored attempt code, show success state, then redirect after sign-in.
          - \`InvalidTotpCode\` => show invalid-code error and allow retry.
          - Other errors => show generic verification failure.
        - Keep a clear verifying/loading state while request is in flight.
        - Optionally provide a cancel action.
      `,reactExample:b.deindent`
        function OtpInput(props: { value: string, onChange: (value: string) => void, disabled?: boolean }) {
          return (
            <InputOTP maxLength={6} value={props.value} onChange={(value) => props.onChange(value.toUpperCase())} disabled={props.disabled}>
              <InputOTPGroup>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          );
        }

        export default function CustomMfaPage() {
          const stackApp = useStackApp();
          const [otp, setOtp] = useState("");
          const [submitting, setSubmitting] = useState(false);
          const [error, setError] = useState<string | null>(null);
          const [verified, setVerified] = useState(false);
          const attemptCode = typeof window !== "undefined"
            ? window.sessionStorage.getItem("stack_mfa_attempt_code")
            : null;

          const submit = async () => {
            if (!attemptCode || otp.length !== 6 || submitting) return;
            setSubmitting(true);
            setError(null);
            const result = await stackApp.signInWithMfa(otp, attemptCode, { noRedirect: true });
            if (result.status === "ok") {
              window.sessionStorage.removeItem("stack_mfa_attempt_code");
              setVerified(true);
              await stackApp.redirectToAfterSignIn();
            } else if (KnownErrors.InvalidTotpCode.isInstance(result.error)) {
              setError("Invalid TOTP code");
              setOtp("");
            } else {
              setError("Verification failed");
            }
            setSubmitting(false);
          };

          return (
            <div>
              <Typography type="h2">Multi-Factor Authentication</Typography>
              <Typography>Enter the six-digit code from your authenticator app</Typography>
              <OtpInput
                value={otp}
                disabled={submitting || verified}
                onChange={(value) => {
                  setOtp(value);
                  if (value.length === 6) {
                    void submit();
                  } else {
                    setError(null);
                  }
                }}
              />
              {submitting ? <Typography>Verifying...</Typography> : null}
              {verified ? <Typography>Verified! Redirecting...</Typography> : null}
              {error ? <Typography variant="destructive">{error}</Typography> : null}
            </div>
          );
        }
      `,notes:b.deindent`
        - Keep MFA state transitions explicit (idle, verifying, verified, error) so retries and redirects are predictable.
      `,versions:{}}),error:C({key:"error",title:"Error",minSdkVersion:"0.0.1",structure:b.deindent`
        - Read \`errorCode\`, \`message\`, and optional \`details\` from URL params.
        - If required params are missing, show unknown-error state.
        - Parse error via \`KnownError.fromJson(...)\`.
          - If parsing fails, show unknown-error state.
        - Handle specific known OAuth-related errors with tailored messages/actions.
        - For all other known errors, show a generic known-error card/state.
      `,reactExample:b.deindent`
        export default function CustomErrorPage(props: { searchParams: Record<string, string> }) {
          const stackApp = useStackApp();
          const errorCode = props.searchParams.errorCode;
          const message = props.searchParams.message;
          const details = props.searchParams.details;

          if (!errorCode || !message) {
            return <PredefinedMessageCard type="unknownError" />;
          }

          let error: KnownError;
          try {
            error = KnownError.fromJson({
              code: errorCode,
              message,
              details: details ? JSON.parse(details) : {},
            });
          } catch {
            return <PredefinedMessageCard type="unknownError" />;
          }

          if (KnownErrors.OAuthConnectionAlreadyConnectedToAnotherUser.isInstance(error)) {
            return <MessageCard title="Failed to connect account" primaryButtonText="Go Home" primaryAction={() => stackApp.redirectToHome()} />;
          }

          if (KnownErrors.UserAlreadyConnectedToAnotherOAuthConnection.isInstance(error)) {
            return <MessageCard title="Failed to connect account" primaryButtonText="Go Home" primaryAction={() => stackApp.redirectToHome()} />;
          }

          if (KnownErrors.OAuthProviderAccessDenied.isInstance(error)) {
            return (
              <MessageCard
                title="OAuth provider access denied"
                primaryButtonText="Sign in again"
                primaryAction={() => stackApp.redirectToSignIn()}
                secondaryButtonText="Go Home"
                secondaryAction={() => stackApp.redirectToHome()}
              />
            );
          }

          return <KnownErrorMessageCard error={error} />;
        }
      `,notes:b.deindent`
        - Fail safely on malformed query params. Unknown-error fallback should always be available.
      `,versions:{}}),onboarding:C({key:"onboarding",title:"Onboarding",minSdkVersion:"0.0.1",structure:b.deindent`
        - Resolve user with \`useUser({ or: "return-null", includeRestricted: true })\`.
        - Route by user state:
          - Restricted user resolved to unrestricted => redirect to \`stackApp.redirectToAfterSignIn()\`.
          - Missing/anonymous user => redirect to \`stackApp.redirectToSignIn()\`.
          - Restricted user => continue onboarding flow.
        - Handle restricted reasons:
          - \`email_not_verified\` and no primary email => ask user for email and call \`user.update({ primaryEmail })\`.
          - \`email_not_verified\` with primary email => show verification step, resend via \`user.sendVerificationEmail()\`, allow changing email.
          - Any other restricted reason => show generic setup-required state.
        - Provide sign-out path from onboarding states.
      `,reactExample:b.deindent`
        export default function CustomOnboardingPage() {
          const stackApp = useStackApp();
          const user = useUser({ or: "return-null", includeRestricted: true });
          const [email, setEmail] = useState("");
          const [changeEmail, setChangeEmail] = useState(false);

          if (user && !user.isRestricted) {
            void runAsynchronously(stackApp.redirectToAfterSignIn());
            return null;
          }

          if (!user || user.isAnonymous) {
            void runAsynchronously(stackApp.redirectToSignIn());
            return null;
          }

          if (user.restrictedReason?.type !== "email_not_verified") {
            return (
              <MessageCard
                title="Complete your account setup"
                secondaryButtonText="Sign out"
                secondaryAction={async () => await user.signOut()}
              />
            );
          }

          if (!user.primaryEmail || changeEmail) {
            return (
              <form onSubmit={async (e) => {
                e.preventDefault();
                await user.update({ primaryEmail: email });
                setChangeEmail(false);
              }}>
                <Typography>Add your email address</Typography>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button type="submit">Continue</Button>
              </form>
            );
          }

          return (
            <MessageCard
              title="Please check your email inbox"
              primaryButtonText="Resend verification email"
              primaryAction={async () => await user.sendVerificationEmail()}
              secondaryButtonText="Sign out"
              secondaryAction={async () => await user.signOut()}
            >
              Please verify your email address {user.primaryEmail}.{" "}
              <button type="button" onClick={() => setChangeEmail(true)}>change</button>
            </MessageCard>
          );
        }
      `,notes:b.deindent`
        - Treat onboarding as a state machine based on restricted reason; avoid mixing unrelated onboarding states into one branch.
      `,versions:{}})},I=e=>{if(!e)return e;let t=w.NEXT_PUBLIC_STACK_PORT_PREFIX;return t?e.replace(/\$\{NEXT_PUBLIC_STACK_PORT_PREFIX:-81\}/g,t):e},P=(e,t)=>{let r=e.endsWith("/")&&e.length>1?e.slice(0,-1):e;return 0===t.length?r:"/"===r?`/${t}`:`${r}/${t}`},R=e=>{let t=e.handlerName;if(t in E){let r=E[t];if(0===e.target.version||e.target.version in r.versions)return e.target.url;throw Error(`Unsupported custom page version ${e.target.version} for ${e.handlerName} page at ${e.target.url}. The latest supported version of this page is ${Math.max(0,...Object.keys(r.versions).map(Number))}. Please upgrade your Stack Auth SDK to a version that supports this version.`)}throw Error(`URL target ${e.handlerName} cannot be a custom page. Please specify the URL as a string instead.`)},O=e=>{let t=e.pagePath.replace(/^\/+/,""),r=t.length>0?`handler/${t}`:"handler";return new URL((()=>{let e=I(w.NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE);if(null!=e){if(!e.includes(S)||!e.includes(x))throw new n.StackAssertionError("The hosted handler URL template must contain {projectId} and {hostedPath}.",{hostedHandlerUrlTemplate:e,hint:"Set NEXT_PUBLIC_STACK_HOSTED_HANDLER_URL_TEMPLATE to a value like 'https://{projectId}.built-with-stack-auth.com/{hostedPath}'."});return e}return`https://${S}${(()=>{let e=I(w.NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX??".built-with-stack-auth.com");if(!e.startsWith("."))throw new n.StackAssertionError("The hosted handler domain suffix must start with a dot.",{domainSuffix:e,hint:"Set NEXT_PUBLIC_STACK_HOSTED_HANDLER_DOMAIN_SUFFIX to a value like '.built-with-stack-auth.com'."});return e})()}/${x}`})().replaceAll(S,e.projectId).replaceAll(x,r)).toString()},N=e=>{if("string"==typeof e.target)return e.target;switch(e.target.type){case"handler-component":return e.fallbackPath;case"hosted":return O({projectId:e.projectId,pagePath:(e=>{switch(e){case"handler":case"home":case"afterSignIn":case"afterSignUp":case"afterSignOut":return"";case"signIn":return"sign-in";case"signUp":return"sign-up";case"signOut":return"sign-out";case"emailVerification":return"email-verification";case"passwordReset":return"password-reset";case"forgotPassword":return"forgot-password";case"oauthCallback":return"oauth-callback";case"magicLinkCallback":return"magic-link-callback";case"accountSettings":return"account-settings";case"teamInvitation":return"team-invitation";case"mfa":return"mfa";case"error":return"error";case"onboarding":return"onboarding"}})(e.handlerName)});case"custom":return R({target:e.target,handlerName:e.handlerName})}},U=e=>{let t=e.urls,r=t?.default??{type:"handler-component"},a="/handler";"string"==typeof t?.handler?a=t.handler:t?.handler!=null&&"custom"===t.handler.type&&(a=R({target:t.handler,handlerName:"handler"}));let s=N({target:t?.home??r,fallbackPath:"/",handlerName:"home",projectId:e.projectId}),i=N({target:t?.afterSignIn??r,fallbackPath:s,handlerName:"afterSignIn",projectId:e.projectId});return{handler:N({target:t?.handler??r,fallbackPath:a,handlerName:"handler",projectId:e.projectId}),signIn:N({target:t?.signIn??r,fallbackPath:P(a,"sign-in"),handlerName:"signIn",projectId:e.projectId}),signUp:N({target:t?.signUp??r,fallbackPath:P(a,"sign-up"),handlerName:"signUp",projectId:e.projectId}),afterSignIn:i,afterSignUp:N({target:t?.afterSignUp??r,fallbackPath:i,handlerName:"afterSignUp",projectId:e.projectId}),signOut:N({target:t?.signOut??r,fallbackPath:P(a,"sign-out"),handlerName:"signOut",projectId:e.projectId}),afterSignOut:N({target:t?.afterSignOut??r,fallbackPath:s,handlerName:"afterSignOut",projectId:e.projectId}),emailVerification:N({target:t?.emailVerification??r,fallbackPath:P(a,"email-verification"),handlerName:"emailVerification",projectId:e.projectId}),passwordReset:N({target:t?.passwordReset??r,fallbackPath:P(a,"password-reset"),handlerName:"passwordReset",projectId:e.projectId}),forgotPassword:N({target:t?.forgotPassword??r,fallbackPath:P(a,"forgot-password"),handlerName:"forgotPassword",projectId:e.projectId}),home:s,oauthCallback:N({target:t?.oauthCallback??r,fallbackPath:P(a,"oauth-callback"),handlerName:"oauthCallback",projectId:e.projectId}),magicLinkCallback:N({target:t?.magicLinkCallback??r,fallbackPath:P(a,"magic-link-callback"),handlerName:"magicLinkCallback",projectId:e.projectId}),accountSettings:N({target:t?.accountSettings??r,fallbackPath:P(a,"account-settings"),handlerName:"accountSettings",projectId:e.projectId}),teamInvitation:N({target:t?.teamInvitation??r,fallbackPath:P(a,"team-invitation"),handlerName:"teamInvitation",projectId:e.projectId}),mfa:N({target:t?.mfa??r,fallbackPath:P(a,"mfa"),handlerName:"mfa",projectId:e.projectId}),error:N({target:t?.error??r,fallbackPath:P(a,"error"),handlerName:"error",projectId:e.projectId}),onboarding:N({target:t?.onboarding??r,fallbackPath:P(a,"onboarding"),handlerName:"onboarding",projectId:e.projectId})}};function j(e,t){if(!(e in E))return null;let r=E[e],a=Object.keys(r.versions).map(Number),s=a.length>0?Math.max(...a):0,i=null;if(null!=t){let e=a.filter(e=>e>t).sort((e,t)=>e-t).map(e=>r.versions[e].upgradePrompt).filter(e=>e.length>0);i=e.length>0?e.join("\n\n"):null}else i=(s>0?r.versions[s]:void 0)?.upgradePrompt??null;return{title:r.title,fullPrompt:r.fullPrompt,upgradePrompt:i,latestVersion:s}}let D=e=>{let t;try{t=new URL(e.url)}catch{return!1}let r=new URL(O({projectId:e.projectId,pagePath:""}));return t.origin===r.origin&&(t.pathname===r.pathname||t.pathname.startsWith(`${r.pathname}/`))};e.s(["getPagePrompt",0,j,"isHostedHandlerUrlForProject",0,D,"isLocalHandlerUrlTarget",0,e=>{var t;let r=new URL(e.targetUrl,"http://example.com");return!!(r.pathname===e.handlerPath||r.pathname.startsWith(`${e.handlerPath}/`))&&(null==e.currentOrigin||!(t=e.targetUrl).startsWith("//")&&!A.test(t)||r.origin===e.currentOrigin)},"resolveHandlerUrls",0,U,"resolveUnknownHandlerPathFallbackUrl",0,e=>{let t=e.defaultTarget??{type:"handler-component"};if("string"==typeof t)return t;switch(t.type){case"handler-component":return null;case"hosted":return O({projectId:e.projectId,pagePath:e.unknownPath})}}],25671);let L="js @stackframe/stack@2.8.85";if(L.startsWith("STACK_COMPILE_TIME"))throw new n.StackAssertionError("Client version was not replaced. Something went wrong during build!");let $=e=>new p.AsyncCache(async t=>await u.Result.fromThrowingAsync(async()=>await e(t)),{}),F=e=>new p.AsyncCache(async([t,...r])=>await u.Result.fromThrowingAsync(async()=>await e(t,r)),{onSubscribe:([e],t)=>{let r=e.onInvalidate(()=>t());return()=>r.unsubscribe()}});function M(e){return{...e.inheritsFrom?.[y.stackAppInternalsSymbol].getConstructorOptions()??{},...(0,h.filterUndefined)((0,h.omit)(e,["inheritsFrom"]))}}function B(e,t){return U({urls:e,projectId:t.projectId})}function K(){return w.NEXT_PUBLIC_STACK_PROJECT_ID||w.STACK_PROJECT_ID||(0,n.throwErr)(Error("Welcome to Stack Auth! It seems that you haven't provided a project ID. Please create a project on the Stack dashboard at https://app.stack-auth.com and put it in the NEXT_PUBLIC_STACK_PROJECT_ID environment variable."))}function q(){return w.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY||w.STACK_PUBLISHABLE_CLIENT_KEY}function V(){return w.STACK_SECRET_SERVER_KEY||(0,n.throwErr)(Error("No secret server key provided. Please copy your key from the Stack dashboard and put it in the STACK_SECRET_SERVER_KEY environment variable."))}function H(){return JSON.parse(w.NEXT_PUBLIC_STACK_EXTRA_REQUEST_HEADERS||w.STACK_EXTRA_REQUEST_HEADERS||"{}")}function W(e){let t;var r=(t=e?"string"==typeof e?e:(0,f.isBrowserLike)()?e.browser:e.server:(t=(0,f.isBrowserLike)()?w.NEXT_PUBLIC_BROWSER_STACK_API_URL||w.NEXT_PUBLIC_STACK_API_URL_BROWSER||w.STACK_API_URL_BROWSER:w.NEXT_PUBLIC_SERVER_STACK_API_URL||w.NEXT_PUBLIC_STACK_API_URL_SERVER||w.STACK_API_URL_SERVER)||w.NEXT_PUBLIC_STACK_API_URL||w.STACK_API_URL||w.NEXT_PUBLIC_STACK_URL||z).endsWith("/")?t.slice(0,-1):t;if(!r)return r;let a=w.NEXT_PUBLIC_STACK_PORT_PREFIX;return a?r.replace(/\$\{NEXT_PUBLIC_STACK_PORT_PREFIX:-81\}/g,a):r}let z="https://api.stack-auth.com";function J(e){return()=>{if(null!=e)return[W(e)];let t=W(void 0);return(0,g.createGlobal)("__stack-fetch-backend-urls-started",()=>((0,o.runAsynchronously)(async()=>{try{let e=await fetch(`${t}/api/v1/internal/backend-urls`);if(!e.ok)return;let r=await e.json();if(!Array.isArray(r.urls)||!r.urls.every(e=>"string"==typeof e))return;(0,g.createGlobal)("__stack-fetched-backend-urls",()=>r.urls)}catch(e){(0,n.captureError)("fetch-backend-urls-in-background",e)}}),!0)),(0,g.getGlobal)("__stack-fetched-backend-urls")??(0,m.getDefaultApiUrls)(t)}}function X(){return new v.Store({refreshToken:null,accessToken:null})}let Y=new Map;function G(e,t,r){for(let a of((0,d.suspendIfSsr)(r),(0,g.getGlobal)("use-async-cache-execution-hooks")??[]))a({cache:e,caller:r,dependencies:t});let a=s.default.useId();s.default.useEffect(()=>{Y.delete(a)},[...t,a]);let i=(0,s.useCallback)(r=>{let{unsubscribe:s}=e.onStateChange(t,()=>{Y.delete(a),r()});return s},[e,...t]),o=(0,s.useCallback)(()=>(Y.has(a)||Y.set(a,e.getOrWait(t,"read-write")),Y.get(a)),[e,...t]),l=(0,d.use)(s.default.useSyncExternalStore(i,o,()=>(0,n.throwErr)(Error("getServerSnapshot should never be called in useAsyncCache because we restrict to CSR earlier"))));if("error"===l.status){let e=l.error;throw e instanceof Error&&!e.__stackHasConcatenatedStacktraces&&((0,n.concatStacktraces)(e,Error()),e.__stackHasConcatenatedStacktraces=!0),e}return l.data}function Q(e){let t=new Uint8Array(e),r="";for(let e of t)r+=String.fromCharCode(e);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function Z(e){let t=e.replace(/-/g,"+").replace(/_/g,"/"),r=(4-t.length%4)%4,a=atob(t.padEnd(t.length+r,"=")),s=new ArrayBuffer(a.length),i=new Uint8Array(s);for(let e=0;e<a.length;e++)i[e]=a.charCodeAt(e);return s}function ee(){return et.stubThis(globalThis?.PublicKeyCredential!==void 0&&"function"==typeof globalThis.PublicKeyCredential)}let et={stubThis:e=>e};function er(e){let{id:t}=e;return{...e,id:Z(t),transports:e.transports}}function ea(e){return"localhost"===e||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}class es extends Error{constructor({message:e,code:t,cause:r,name:a}){super(e,{cause:r}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=a??r.name,this.code=t}}let ei=new class{constructor(){Object.defineProperty(this,"controller",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error("Cancelling existing WebAuthn API call for new one");e.name="AbortError",this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}},en=["cross-platform","platform"];function eo(e){if(e&&!(0>en.indexOf(e)))return e}async function el(e){let t,r,a,s,i;!e.optionsJSON&&e.challenge&&(console.warn("startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information."),e={optionsJSON:e});let{optionsJSON:n,useAutoRegister:o=!1}=e;if(!ee())throw Error("WebAuthn is not supported in this browser");let l={...n,challenge:Z(n.challenge),user:{...n.user,id:Z(n.user.id)},excludeCredentials:n.excludeCredentials?.map(er)},c={};o&&(c.mediation="conditional"),c.publicKey=l,c.signal=ei.createNewAbortSignal();try{t=await navigator.credentials.create(c)}catch(e){throw function({error:e,options:t}){let{publicKey:r}=t;if(!r)throw Error("options was missing required publicKey property");if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new es({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if("ConstraintError"===e.name){if(r.authenticatorSelection?.requireResidentKey===!0)return new es({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:e});else if("conditional"===t.mediation&&r.authenticatorSelection?.userVerification==="required")return new es({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:e});else if(r.authenticatorSelection?.userVerification==="required")return new es({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:e})}else if("InvalidStateError"===e.name)return new es({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:e});else if("NotAllowedError"===e.name)return new es({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});else if("NotSupportedError"===e.name)return new es(0===r.pubKeyCredParams.filter(e=>"public-key"===e.type).length?{message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:e}:{message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:e});else if("SecurityError"===e.name){let t=globalThis.location.hostname;if(!ea(t))return new es({message:`${globalThis.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e});if(r.rp.id!==t)return new es({message:`The RP ID "${r.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else if("TypeError"===e.name){if(r.user.id.byteLength<1||r.user.id.byteLength>64)return new es({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:e})}else if("UnknownError"===e.name)return new es({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e});return e}({error:e,options:c})}if(!t)throw Error("Registration was not completed");let{id:d,rawId:u,response:p,type:h}=t;if("function"==typeof p.getTransports&&(a=p.getTransports()),"function"==typeof p.getPublicKeyAlgorithm)try{s=p.getPublicKeyAlgorithm()}catch(e){ec("getPublicKeyAlgorithm()",e)}if("function"==typeof p.getPublicKey)try{let e=p.getPublicKey();null!==e&&(i=Q(e))}catch(e){ec("getPublicKey()",e)}if("function"==typeof p.getAuthenticatorData)try{r=Q(p.getAuthenticatorData())}catch(e){ec("getAuthenticatorData()",e)}return{id:d,rawId:Q(u),response:{attestationObject:Q(p.attestationObject),clientDataJSON:Q(p.clientDataJSON),transports:a,publicKeyAlgorithm:s,publicKey:i,authenticatorData:r},type:h,clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:eo(t.authenticatorAttachment)}}function ec(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.
`,t)}let ed=e=>e;async function eu(e){let t,r,a;!e.optionsJSON&&e.challenge&&(console.warn("startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information."),e={optionsJSON:e});let{optionsJSON:s,useBrowserAutofill:i=!1,verifyBrowserAutofillInput:n=!0}=e;if(!ee())throw Error("WebAuthn is not supported in this browser");s.allowCredentials?.length!==0&&(t=s.allowCredentials?.map(er));let o={...s,challenge:Z(s.challenge),allowCredentials:t},l={};if(i){if(!await function(){if(!ee())return ed(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?ed(new Promise(e=>e(!1))):ed(e.isConditionalMediationAvailable())}())throw Error("Browser does not support WebAuthn autofill");if(document.querySelectorAll("input[autocomplete$='webauthn']").length<1&&n)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');l.mediation="conditional",o.allowCredentials=[]}l.publicKey=o,l.signal=ei.createNewAbortSignal();try{r=await navigator.credentials.get(l)}catch(e){throw function({error:e,options:t}){let{publicKey:r}=t;if(!r)throw Error("options was missing required publicKey property");if("AbortError"===e.name){if(t.signal instanceof AbortSignal)return new es({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:e})}else if("NotAllowedError"===e.name)return new es({message:e.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:e});else if("SecurityError"===e.name){let t=globalThis.location.hostname;if(!ea(t))return new es({message:`${globalThis.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:e});if(r.rpId!==t)return new es({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:e})}else if("UnknownError"===e.name)return new es({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:e});return e}({error:e,options:l})}if(!r)throw Error("Authentication was not completed");let{id:c,rawId:d,response:u,type:p}=r;return u.userHandle&&(a=Q(u.userHandle)),{id:c,rawId:Q(d),response:{authenticatorData:Q(u.authenticatorData),clientDataJSON:Q(u.clientDataJSON),signature:Q(u.signature),userHandle:a},type:p,clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:eo(r.authenticatorAttachment)}}var ep=e.i(8706);function eh(e,t){if("u"<typeof window||!window.location)throw new n.StackAssertionError(`${t} option is required in a non-browser environment.`,{redirectUrl:e});let r=new URL(window.location.href),a=e?new URL(e,window.location.href):new URL(window.location.href);for(let e of["after_auth_return_to"])r.searchParams.has(e)&&a.searchParams.set(e,r.searchParams.get(e));return a.hash="",a.toString()}async function em(e,t,r){return{description:r.description,expires_at_millis:null==r.expiresAt?r.expiresAt:r.expiresAt.getTime(),is_public:r.isPublic,..."user"===e?{user_id:t}:{team_id:t}}}async function ef(e,t){return(0,h.filterUndefined)({description:t.description,expires_at_millis:null==t.expiresAt?t.expiresAt:t.expiresAt.getTime(),revoked:t.revoked})}function eg(e){return{display_name:e.displayName,profile_image_url:e.profileImageUrl,creator_user_id:e.creatorUserId}}var ey=e.i(90191);function ev(e){return Object.freeze(e),new Proxy(e,{get:(e,t,r)=>"user"===t?function(){throw Error("Stack Auth: useUser() already returns the user object. Use `const user = useUser()` (or `const user = await app.getUser()`) instead of destructuring it like `const { user } = ...`.")}():e[t]})}var e_=e.i(70483),ew=e.i(18566);function eb(e){return{display_name:e.displayName,description:e.description,is_production_mode:e.isProductionMode,onboarding_status:e.onboardingStatus,logo_url:e.logoUrl,logo_full_url:e.logoFullUrl,logo_dark_mode_url:e.logoDarkModeUrl,logo_full_dark_mode_url:e.logoFullDarkModeUrl,config:{domains:e.config?.domains?.map(e=>({domain:e.domain,handler_path:e.handlerPath})),oauth_providers:e.config?.oauthProviders?.map(e=>({id:e.id,type:e.type,..."standard"===e.type&&{client_id:e.clientId,client_secret:e.clientSecret,facebook_config_id:e.facebookConfigId,microsoft_tenant_id:e.microsoftTenantId,apple_bundle_ids:e.appleBundleIds}})),email_config:e.config?.emailConfig&&("shared"===e.config.emailConfig.type?{type:"shared"}:{type:"standard",host:e.config.emailConfig.host,port:e.config.emailConfig.port,username:e.config.emailConfig.username,password:e.config.emailConfig.password,sender_name:e.config.emailConfig.senderName,sender_email:e.config.emailConfig.senderEmail}),email_theme:e.config?.emailTheme,sign_up_enabled:e.config?.signUpEnabled,credential_enabled:e.config?.credentialEnabled,magic_link_enabled:e.config?.magicLinkEnabled,passkey_enabled:e.config?.passkeyEnabled,allow_localhost:e.config?.allowLocalhost,create_team_on_sign_up:e.config?.createTeamOnSignUp,client_team_creation_enabled:e.config?.clientTeamCreationEnabled,client_user_deletion_enabled:e.config?.clientUserDeletionEnabled,team_creator_default_permissions:e.config?.teamCreatorDefaultPermissions,team_member_default_permissions:e.config?.teamMemberDefaultPermissions,user_default_permissions:e.config?.userDefaultPermissions,oauth_account_merge_strategy:e.config?.oauthAccountMergeStrategy,allow_user_api_keys:e.config?.allowUserApiKeys,allow_team_api_keys:e.config?.allowTeamApiKeys}}}function ek(e){return 1e-5>Math.random()&&Math.random()>.99999&&1e-5>Math.random()&&Math.random()>.99999?"this will never happen":e}function eC(e){return u.Result.fromThrowing(()=>JSON.parse(e))}var eT=e.i(84509);let eS="https://challenges.cloudflare.com/turnstile/v0/api.js";function ex(){if("u"<typeof window)return;let e=Reflect.get(window,"turnstile");return"object"==typeof e&&null!==e&&"render"in e&&"remove"in e?e:void 0}let eA=null;function eE(){return"u"<typeof window?Promise.reject(new n.StackAssertionError("Turnstile can only be loaded in the browser")):ex()?Promise.resolve():eA??=new Promise((e,t)=>{let r=e=>{eA=null,t(e)},a=setTimeout(()=>{r(Error("Turnstile script load timed out"))},3e4),s=()=>{clearTimeout(a),e()},i=document.querySelector(`script[src^="${eS}"]`);if(i)return ex()?void s():(i.addEventListener("load",()=>s(),{once:!0}),void i.addEventListener("error",()=>{i.remove(),clearTimeout(a),r(Error("Failed to load Turnstile"))},{once:!0}));let n=document.createElement("script");n.src=`${eS}?render=explicit`,n.async=!0,n.defer=!0,n.onload=()=>s(),n.onerror=()=>{n.remove(),clearTimeout(a),r(Error("Failed to load Turnstile"))},document.head.append(n)})}var eI=class extends Error{constructor(){super("User cancelled the bot challenge"),this.name="BotChallengeUserCancelledError"}},eP=class extends Error{constructor(e="Bot challenge could not be completed",t){super(e,t),this.name="BotChallengeExecutionFailedError"}};async function eR(e,t){let r;await eE();let a=ex();if(!a)throw new n.StackAssertionError("Turnstile API not available after loadTurnstileScript() resolved");let s=document.createElement("div");Object.assign(s.style,{position:"fixed",left:"-9999px",top:"-9999px"}),document.body.appendChild(s);try{return await new Promise((i,n)=>{let o=setTimeout(()=>n(Error("Turnstile invisible challenge timed out")),3e4),l=e=>{clearTimeout(o),e()};r=a.render(s,{sitekey:e,action:t,size:"invisible",execution:"execute",appearance:"execute",callback:e=>l(()=>i(e)),"error-callback":()=>l(()=>n(Error("Turnstile invisible verification failed"))),"expired-callback":()=>l(()=>n(Error("Turnstile token expired"))),"timeout-callback":()=>l(()=>n(Error("Turnstile challenge timed out")))}),a.execute?.(r)})}finally{if(null!=r)try{a.remove(r)}catch(e){(0,n.captureError)("turnstile-widget-remove",e instanceof Error?e:new n.StackAssertionError("Non-Error thrown during Turnstile widget removal",{cause:e}))}s.remove()}}let eO=null;function eN(e,t,r){let a=document.createElement(e);if(Object.assign(a.style,t),r)for(let[e,t]of Object.entries(r))a.setAttribute(e,t);return a}function eU(e,t){return eO&&(eO.reject(new eI),eO.cleanup(),eO=null),new Promise((r,a)=>{let s=setTimeout(()=>{p(),a(Error("Visible Turnstile challenge timed out"))},12e4),i=eN("div",{position:"fixed",inset:"0",zIndex:"999999",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(2px)"},{"data-stack-turnstile-overlay":"true"}),o=eN("div",{background:"white",borderRadius:"12px",padding:"24px",maxWidth:"400px",width:"90%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.18)",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}),l=eN("p",{margin:"0 0 16px",fontSize:"16px",fontWeight:"600",color:"#333"});l.textContent="Please complete the security check";let c=eN("div",{display:"flex",justifyContent:"center",minHeight:"65px"}),d=eN("p",{margin:"8px 0 0",fontSize:"14px",color:"#dc2626",display:"none"}),u=eN("button",{marginTop:"16px",padding:"8px 20px",border:"1px solid #ddd",borderRadius:"6px",background:"transparent",cursor:"pointer",fontSize:"14px",color:"#666"});function p(){clearTimeout(s),i.remove(),eO?.cleanup===p&&(eO=null)}u.textContent="Cancel",u.onmouseover=()=>{u.style.background="#f5f5f5"},u.onmouseout=()=>{u.style.background="transparent"},o.append(l,c,d,u),i.appendChild(o),document.body.appendChild(i),eO={cleanup:p,reject:a},u.onclick=()=>{p(),a(new eI)},eE().then(()=>{let s=ex();if(!s){p(),a(new n.StackAssertionError("Turnstile API not available after loadTurnstileScript() resolved"));return}s.render(c,{sitekey:e,action:t,appearance:"always",execution:"render",size:"flexible",callback:e=>{p(),r(e)},"error-callback":e=>{d.textContent=e?`Verification error: ${e}`:"Verification failed. Please try again.",d.style.display="block"},"expired-callback":()=>{d.textContent="Challenge expired. Please solve it again.",d.style.display="block"}})}).catch(e=>{p(),a(e)})})}async function ej(e){let t,r;if("u"<typeof window)return await e.execute({});let a=!1;try{t=await eR(e.invisibleSiteKey,e.action)}catch{try{t=await eU(e.visibleSiteKey,e.action),a=!0}catch(t){if(t instanceof eI)throw t;return(0,n.captureError)("turnstile-flow-all-challenges-failed",t instanceof Error?t:new n.StackAssertionError("Non-Error thrown during Turnstile challenge",{cause:t})),await e.execute({unavailable:!0})}}let s=await e.execute({token:t,phase:t?a?"visible":"invisible":void 0});if(!e.isChallengeRequired(s))return s;try{r=await eU(e.visibleSiteKey,e.action)}catch(e){if(e instanceof eI)throw e;throw(0,n.captureError)("turnstile-flow-visible-challenge-failed",e instanceof Error?e:new n.StackAssertionError("Non-Error thrown during visible Turnstile challenge",{cause:e})),new eP("Visible bot challenge could not be completed",{cause:e})}return await e.execute({token:r,phase:"visible"})}var eD=e.i(3760),eL=e.i(9156),e$=e.i(30029);let eF=e$.cookies,eM=e$.headers;function eB(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)e[a]=r[a]}return e}var eK=function e(t,r){function a(e,a,s){if("u">typeof document){"number"==typeof(s=eB({},r,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var n in s)s[n]&&(i+="; "+n,!0!==s[n]&&(i+="="+s[n].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+i}}return Object.create({set:a,get:function(e){if("u">typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],a={},s=0;s<r.length;s++){var i=r[s].split("="),n=i.slice(1).join("=");try{var o=decodeURIComponent(i[0]);if(a[o]=t.read(n,o),e===o)break}catch(e){}}return e?a[e]:a}},remove:function(e,t){a(e,"",eB({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,eB({},this.attributes,t))},withConverter:function(t){return e(eB({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});"u"<typeof navigator||navigator.userAgent?.startsWith?.("Mozilla/5.0 ");let eq="ERR_INVALID_ARG_VALUE";function eV(e,t,r){let a=TypeError(e,{cause:r});return Object.assign(a,{code:t}),a}let eH=new TextEncoder,eW=new TextDecoder;function ez(e){return"string"==typeof e?r(e):t(e)}t=Uint8Array.prototype.toBase64?e=>(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e.toBase64({alphabet:"base64url",omitPadding:!0})):e=>{e instanceof ArrayBuffer&&(e=new Uint8Array(e));let t=[];for(let r=0;r<e.byteLength;r+=32768)t.push(String.fromCharCode.apply(null,e.subarray(r,r+32768)));return btoa(t.join("")).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},r=Uint8Array.fromBase64?e=>{try{return Uint8Array.fromBase64(e,{alphabet:"base64url"})}catch(e){throw eV("The input to be decoded is not correctly encoded.",eq,e)}}:e=>{try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"")),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return r}catch(e){throw eV("The input to be decoded is not correctly encoded.",eq,e)}};function eJ(){return ez(crypto.getRandomValues(new Uint8Array(32)))}async function eX(e){var t="codeVerifier";try{if("string"!=typeof e)throw eV(`${t} must be a string`,"ERR_INVALID_ARG_TYPE",void 0);if(0===e.length)throw eV(`${t} must not be empty`,eq,void 0)}catch(e){throw e}return ez(await crypto.subtle.digest("SHA-256","string"==typeof e?eH.encode(e):eW.decode(e)))}URL.parse;let eY="[a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+";function eG(){if(!(0,f.isBrowserLike)())throw Error("cookieClient functions can only be called in a browser environment, yet window is undefined")}async function eQ(){function e(){throw new n.StackAssertionError("Throwing cookie helper is just a placeholder. This should never be called")}return{get:e,getAll:e,set:e,setOrDelete:e,delete:e}}async function eZ(){var e,t;let r;return(0,f.isBrowserLike)()?e0():(e=await eF(),t=await eM(),r={get:e=>r.getAll()[e]??null,getAll:()=>{try{e.set("stack-is-https","true",{secure:!0,expires:new Date(Date.now()+31536e6)})}catch(e){if("object"==typeof e&&null!==e&&"message"in e&&"string"==typeof e.message&&e.message.includes("Cookies can only be modified in a Server Action or Route Handler"));else throw e}return e.getAll().reduce((e,t)=>(e[t.name]=t.value,e),{})},set:(r,a,s)=>{let i=e5(e,t);try{e.set(r,a,{secure:i,maxAge:"session"===s.maxAge?void 0:s.maxAge,domain:s.domain,sameSite:"lax"})}catch(e){e1(e,s)}},setOrDelete(e,t,r){null===t?this.delete(e,r):this.set(e,t,r)},delete(t,r){try{void 0!==r.domain?e.delete({name:t,domain:r.domain}):e.delete(t)}catch(e){e1(e,r)}}})}function e0(){return{get:e2,getAll:e4,set:ta,setOrDelete:e9,delete:tt}}function e1(e,t){if(e instanceof Error&&e.message.includes("Cookies can only be modified in"))if(t.noOpIfServerComponent);else throw new n.StackAssertionError("Attempted to set cookie in server component. Pass { noOpIfServerComponent: true } in the options of Stack's cookie functions if this is intentional and you want to ignore this error. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");else throw e}function e2(e){return e4()[e]??null}function e4(){return eG(),eK.set("stack-is-https","true",{secure:!0,expires:new Date(Date.now()+31536e6)}),eK.get()}async function e3(){return(0,f.isBrowserLike)()?e6():e5(await eF(),await eM())}function e6(){return"u">typeof window&&"https:"===window.location.protocol}function e5(e,t){return e.has("stack-is-https")||"https"===t.get("x-forwarded-proto")}function e8(e,t,r){let s=r.secure??e6(),i=a??=function(){if(eG(),!e6())return!1;let e="__Host-stack-temporary-chips-test-"+Math.random().toString(36).substring(2,15);document.cookie=`${e}=value1; Secure; path=/`;let t=document.cookie.split("; ");if(document.cookie=`${e}=delete1; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`,t.some(t=>t.startsWith(e+"=")))return!1;let r="__Host-stack-temporary-chips-test-"+Math.random().toString(36).substring(2,15);document.cookie=`${r}=delete1; Secure; SameSite=None; Partitioned; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`,document.cookie=`${r}=delete2; Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`,document.cookie=`${r}=set1; Secure; SameSite=None; Partitioned; path=/`,document.cookie=`${r}=set2; Secure; SameSite=None; path=/`;let a=document.cookie.split("; ").filter(e=>e.startsWith(r+"=")).length;return document.cookie=`${r}=delete3; Secure; SameSite=None; Partitioned; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`,document.cookie=`${r}=delete4; Secure; SameSite=None; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`,2===a}();eK.set(e,t,{expires:"session"===r.maxAge?void 0:new Date(Date.now()+1e3*r.maxAge),domain:r.domain,secure:s,sameSite:"Lax",...i?{partitioned:i,sameSite:"None"}:{}})}function e7(e,t){for(let r of[!0,!1])void 0!==t.domain&&eK.remove(e,{domain:t.domain,secure:e6(),partitioned:r}),eK.remove(e,{secure:e6(),partitioned:r})}function e9(e,t,r){eG(),null===t?e7(e,r):e8(e,t,r)}async function te(e,t,r){(await eZ()).setOrDelete(e,t,r)}function tt(e,t){eG(),e7(e,t)}async function tr(e,t){(await eZ()).delete(e,t)}function ta(e,t,r){eG(),e8(e,t,r)}async function ts(e,t,r){(await eZ()).set(e,t,r)}async function ti(){let e=eJ(),t=await eX(e),r=eJ();return await ts("stack-oauth-outer-"+r,e,{maxAge:3600}),{codeChallenge:t,state:r}}async function tn(e,t,r){let{codeChallenge:a,state:s}=await ti(),i=await e.getOAuthUrl({provider:t.provider,redirectUrl:eh(t.redirectUrl,"redirectUrl"),errorRedirectUrl:eh(t.errorRedirectUrl,"errorRedirectUrl"),afterCallbackRedirectUrl:eh(window.location.href,"afterCallbackRedirectUrl"),codeChallenge:a,state:s,type:"link",session:r,providerScope:t.providerScope});window.location.assign(i),await (0,o.neverResolve)()}async function to(e,t){let r=function(){let e,t,r=["code","state"],a=new URL(window.location.href),s=a.searchParams.get("errorCode"),i=a.searchParams.get("message");if(s&&i){let e=a.searchParams.get("details"),t={};if(e)try{t=JSON.parse(e)}catch(t){throw new n.StackAssertionError("OAuth callback returned malformed known-error details",{details:e,cause:t})}let r=new URL(a);for(let e of["error","error_description","errorCode","message","details"])r.searchParams.delete(e);return window.history.replaceState({},"",r.toString()),{type:"known-error",error:l.KnownError.fromJson({code:s,message:i,details:t})}}for(let e of r)if(!a.searchParams.has(e))return console.warn(Error(`Missing required query parameter on OAuth callback: ${e}. Maybe you opened or reloaded the oauth-callback page from your history?`)),null;let o=a.searchParams.get("state")??(0,n.throwErr)("This should never happen; isn't state required above?"),c=(eG(),(t=e2(e="stack-oauth-outer-"+o))?(tt(e,{}),{codeVerifier:t}):null);if(!c)return console.warn(b.deindent`
      Stack found an outer OAuth callback state in the query parameters, but not in cookies.

      This could have multiple reasons:
        - The cookie expired, because the OAuth flow took too long.
        - The user's browser deleted the cookie, either manually or because of a very strict cookie policy.
        - The cookie was already consumed by this page, and the user already logged in.
        - You are using another OAuth client library with the same callback URL as Stack.
        - The user opened the OAuth callback page from their history.

      Either way, it is probably safe to ignore this warning unless you are debugging an OAuth issue.
    `),null;let d=new URL(a);for(let e of r)d.searchParams.delete(e);return window.history.replaceState({},"",d.toString()),{type:"oauth-response",originalUrl:a,codeVerifier:c.codeVerifier,state:o}}();if(!r)return u.Result.ok(void 0);if("known-error"===r.type)throw r.error;try{return u.Result.ok(await e.callOAuthCallback({oauthParams:r.originalUrl.searchParams,redirectUri:eh(t,"redirectUri"),codeVerifier:r.codeVerifier,state:r.state}))}catch(e){if(l.KnownError.isKnownError(e))throw e;throw new n.StackAssertionError("Error signing in during OAuth callback. Please try again.",{cause:e})}}function tl(){return crypto.randomUUID()}function tc(e){let t=function(e){if(!e)return null;try{let t=JSON.parse(e);if("object"!=typeof t||null===t||"string"!=typeof t.session_id||"number"!=typeof t.created_at_ms||"number"!=typeof t.last_activity_ms)return null;return t}catch{return null}}(localStorage.getItem(e.key));if(t&&e.nowMs-t.last_activity_ms<=18e4)return t;let r={session_id:tl(),created_at_ms:e.nowMs,last_activity_ms:e.nowMs};return localStorage.setItem(e.key,JSON.stringify(r)),r}RegExp("^[,\\s]*("+eY+")"),RegExp("^[,\\s]*("+eY+')\\s*=\\s*"((?:[^"\\\\]|\\\\[\\s\\S])*)"[,\\s]*(.*)'),RegExp("^[,\\s]*("+eY+")\\s*=\\s*([a-zA-Z0-9!#$%&\\'\\*\\+\\-\\.\\^_`\\|~]+)[,\\s]*(.*)"),RegExp("^([a-zA-Z0-9\\-\\._\\~\\+\\/]+={0,2})(?:$|[,\\s])(.*)");var td=class{constructor(e,t){this._started=!1,this._cancelled=!1,this._stopRecording=null,this._detachListeners=null,this._flushTimer=null,this._events=[],this._approxBytes=0,this._lastPersistActivity=0,this._recording=!1,this._rrwebModule=null,this._lastBrowserSessionId=null,this._takingSnapshot=!1,this._flushInProgress=!1,this._deps=e,this._replayOptions=t,this._sessionReplaySegmentId=tl(),this._storageKey=function(e){return`stack:session-replay:v1:${e}`}(e.projectId)}start(){this._started||(0,f.isBrowserLike)()&&(this._started=!0,(0,o.runAsynchronously)(()=>this._startRecording(),{noErrorLogging:!0}),this._flushTimer=setInterval(()=>this._tick(),5e3))}stop(){this._cancelled=!0,null!==this._flushTimer&&(clearInterval(this._flushTimer),this._flushTimer=null),(0,o.runAsynchronously)(()=>this._flush({keepalive:!0})),this._stopCurrentRecording()}clearBuffer(){this._events=[],this._approxBytes=0}_persistActivity(e){let t=tc({key:this._storageKey,nowMs:e});if(e-this._lastPersistActivity<5e3)return t;this._lastPersistActivity=e;let r={...t,last_activity_ms:e};return localStorage.setItem(this._storageKey,JSON.stringify(r)),t}async _flush(e){if(0===this._events.length||this._flushInProgress)return;let t=Date.now(),r=tc({key:this._storageKey,nowMs:t}),a=tl(),s={browser_session_id:r.session_id,session_replay_segment_id:this._sessionReplaySegmentId,batch_id:a,started_at_ms:r.created_at_ms,sent_at_ms:t,events:this._events};this._events=[],this._approxBytes=0,this._flushInProgress=!0;try{let t=await this._deps.sendBatch(JSON.stringify(s),{keepalive:e.keepalive});if("error"===t.status)return void console.warn("SessionRecorder flush failed:",t.error);t.data.ok||console.warn("SessionRecorder flush failed:",t.data.status,await t.data.text())}finally{this._flushInProgress=!1}}async _startRecording(){if(this._recording||this._cancelled)return;if(!this._rrwebModule){let t=await u.Result.fromPromise(e.A(88908));if("error"===t.status)return void console.warn("SessionRecorder: rrweb import failed. Is rrweb installed?",t.error);this._rrwebModule=t.data}if(this._cancelled)return;this._stopRecording=this._rrwebModule.record({emit:e=>{let t=Date.now(),r=this._persistActivity(t);if(null===this._lastBrowserSessionId)this._lastBrowserSessionId=r.session_id;else if(r.session_id!==this._lastBrowserSessionId&&!this._takingSnapshot){this._lastBrowserSessionId=r.session_id,this._takingSnapshot=!0;try{this._rrwebModule.record.takeFullSnapshot()}finally{this._takingSnapshot=!1}}this._events.push(e),this._approxBytes+=JSON.stringify(e).length,(this._events.length>=200||this._approxBytes>=512e3)&&(0,o.runAsynchronously)(()=>this._flush({keepalive:!1}))},maskAllInputs:this._replayOptions.maskAllInputs??!0,...void 0!==this._replayOptions.blockClass?{blockClass:this._replayOptions.blockClass}:{},...void 0!==this._replayOptions.blockSelector?{blockSelector:this._replayOptions.blockSelector}:{}})??null,this._recording=!0;let t=()=>{(0,o.runAsynchronously)(()=>this._flush({keepalive:!0}))};window.addEventListener("pagehide",t),document.addEventListener("visibilitychange",t),this._detachListeners=()=>{window.removeEventListener("pagehide",t),document.removeEventListener("visibilitychange",t)}}_stopCurrentRecording(){this._detachListeners&&(this._detachListeners(),this._detachListeners=null),this._stopRecording&&(this._stopRecording(),this._stopRecording=null),this._events=[],this._approxBytes=0,this._recording=!1}_tick(){!this._cancelled&&this._events.length>0&&(0,o.runAsynchronously)(()=>this._flush({keepalive:!1}))}};function tu(e){return null!=e&&"object"==typeof e&&"width"in e&&"height"in e&&"number"==typeof e.width&&"number"==typeof e.height}function tp(e){return null!=e&&"object"==typeof e&&"pushState"in e&&"replaceState"in e&&"function"==typeof e.pushState&&"function"==typeof e.replaceState}var th=class{constructor(e){this._started=!1,this._cancelled=!1,this._detachListeners=null,this._flushTimer=null,this._events=[],this._approxBytes=0,this._lastUrl=null,this._originalPushState=null,this._originalReplaceState=null,this._onPopState=()=>{this._capturePageView("pop")},this._onClickCapture=e=>{let t=e.target;t instanceof Element&&this._pushEvent({event_type:"$click",event_at_ms:Date.now(),data:{tag_name:t.tagName.toLowerCase(),text:t.textContent.trim().substring(0,200),href:this._findNearestAnchorHref(t),selector:this._buildSelector(t),x:e.clientX,y:e.clientY,page_x:e.pageX,page_y:e.pageY,viewport_width:window.innerWidth,viewport_height:window.innerHeight}})},this._onPageHide=()=>{(0,o.runAsynchronously)(()=>this._flush({keepalive:!0}))},this._deps=e,this._sessionReplaySegmentId=tl()}start(){this._started||!(0,f.isBrowserLike)()||"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener&&"function"==typeof document.addEventListener&&"function"==typeof document.removeEventListener&&tu(window.screen)&&(this._started=!0,this._setupPageViewCapture(),this._setupClickCapture(),this._setupPageHideListeners(),this._flushTimer=setInterval(()=>this._tick(),1e4))}stop(){this._cancelled=!0,null!==this._flushTimer&&(clearInterval(this._flushTimer),this._flushTimer=null),(0,o.runAsynchronously)(()=>this._flush({keepalive:!0})),this._teardown()}clearBuffer(){this._events=[],this._approxBytes=0}_pushEvent(e){this._events.push(e),this._approxBytes+=JSON.stringify(e).length,(this._events.length>=50||this._approxBytes>=64e3)&&(0,o.runAsynchronously)(()=>this._flush({keepalive:!1}))}_capturePageView(e){let t=window.screen;if(!tu(t))return;let r=window.location.href;(r!==this._lastUrl||"initial"===e)&&(this._lastUrl=r,this._pushEvent({event_type:"$page-view",event_at_ms:Date.now(),data:{url:r,path:window.location.pathname,referrer:document.referrer,title:document.title,entry_type:e,viewport_width:window.innerWidth,viewport_height:window.innerHeight,screen_width:t.width,screen_height:t.height}}))}_setupPageViewCapture(){this._capturePageView("initial");let e=window.history;if(!tp(e))return;let t=e.pushState,r=e.replaceState;this._originalPushState=(...r)=>t.apply(e,r),e.pushState=(...e)=>{this._originalPushState(...e),this._capturePageView("push")},this._originalReplaceState=(...t)=>r.apply(e,t),e.replaceState=(...e)=>{this._originalReplaceState(...e),this._capturePageView("replace")},window.addEventListener("popstate",this._onPopState)}_buildSelector(e){let t=[],r=e,a=0;for(;r&&a<5;){let e=r.tagName.toLowerCase();if(r.id){e+=`#${r.id}`,t.unshift(e);break}if(r.className&&"string"==typeof r.className){let t=r.className.trim().split(/\s+/).filter(Boolean);t.length>0&&(e+=`.${t.join(".")}`)}t.unshift(e),r=r.parentElement,a++}return t.join(" > ")}_findNearestAnchorHref(e){let t=e;for(;t;){if("A"===t.tagName&&t.hasAttribute("href"))return t.getAttribute("href");t=t.parentElement}return null}_setupClickCapture(){document.addEventListener("click",this._onClickCapture,{capture:!0})}_setupPageHideListeners(){window.addEventListener("pagehide",this._onPageHide),document.addEventListener("visibilitychange",this._onPageHide),this._detachListeners=()=>{window.removeEventListener("pagehide",this._onPageHide),document.removeEventListener("visibilitychange",this._onPageHide)}}_teardown(){this._detachListeners&&(this._detachListeners(),this._detachListeners=null);let e=window.history;tp(e)&&(this._originalPushState&&(e.pushState=this._originalPushState),this._originalReplaceState&&(e.replaceState=this._originalReplaceState)),this._originalPushState=null,this._originalReplaceState=null,window.removeEventListener("popstate",this._onPopState),document.removeEventListener("click",this._onClickCapture,{capture:!0}),this._events=[],this._approxBytes=0}async _flush(e){if(0===this._events.length)return;let t=Date.now(),r=tl(),a={session_replay_segment_id:this._sessionReplaySegmentId,batch_id:r,sent_at_ms:t,events:this._events};this._events=[],this._approxBytes=0;let s=await this._deps.sendBatch(JSON.stringify(a),{keepalive:e.keepalive});"error"===s.status?console.warn("EventTracker flush failed:",s.error):s.data.ok||console.warn("EventTracker flush failed:",s.data.status,await s.data.text())}_tick(){!this._cancelled&&this._events.length>0&&(0,o.runAsynchronously)(()=>this._flush({keepalive:!1}))}};let tm="stack_cross_domain_auth",tf="stack_cross_domain_state",tg="stack_cross_domain_code_challenge",ty="stack_cross_domain_after_callback_redirect_url";function tv(e){let t=e.searchParams.get(tf),r=e.searchParams.get(tg);return null==t||null==r?null:{state:t,codeChallenge:r}}function t_(e){return e.searchParams.has(tf)&&e.searchParams.has(tg)&&e.searchParams.has(ty)}function tw(e){let t=new URL(e.rawHandlerUrl,e.currentUrl);for(let r of["after_auth_return_to",tf,tg,ty]){let a=e.currentUrl.searchParams.get(r);null==a||t.searchParams.has(r)||t.searchParams.set(r,a)}if("signOut"===e.handlerName)return t.searchParams.has("after_auth_return_to")||(e.currentUrl.protocol===t.protocol&&e.currentUrl.host===t.host?t.searchParams.set("after_auth_return_to",(0,m.getRelativePart)(e.currentUrl)):t.searchParams.set("after_auth_return_to",e.currentUrl.toString())),t.origin===e.currentUrl.origin?(0,m.getRelativePart)(t):t.toString();if(e.currentUrl.origin!==t.origin){if(!t_(t)){let r=e.currentUrl.searchParams.get("after_auth_return_to"),a=r?new URL(r,e.currentUrl).toString():e.currentUrl.toString(),s=function(e){let t=new URL(e.localOAuthCallbackUrl,e.currentUrl);if(t.origin!==e.currentUrl.origin)throw new n.StackAssertionError("Cross-domain auth callback URL must stay on the current origin",{localOAuthCallbackUrl:t.toString(),currentUrl:e.currentUrl.toString()});return t.searchParams.set(tm,"1"),null!=e.state&&t.searchParams.set(tf,e.state),null!=e.codeChallenge&&t.searchParams.set(tg,e.codeChallenge),null!=e.afterCallbackRedirectUrl&&t.searchParams.set(ty,e.afterCallbackRedirectUrl),t}({currentUrl:e.currentUrl,localOAuthCallbackUrl:e.localOAuthCallbackUrl,state:e.crossDomainHandoffParams?.state,codeChallenge:e.crossDomainHandoffParams?.codeChallenge,afterCallbackRedirectUrl:a});t.searchParams.set("after_auth_return_to",s.toString()),t.searchParams.set(ty,a),null!=e.crossDomainHandoffParams&&(t.searchParams.set(tf,e.crossDomainHandoffParams.state),t.searchParams.set(tg,e.crossDomainHandoffParams.codeChallenge))}}else e.currentUrl.protocol!==t.protocol||e.currentUrl.host!==t.host||t.searchParams.has("after_auth_return_to")||t.searchParams.set("after_auth_return_to",(0,m.getRelativePart)(e.currentUrl));return t.origin===e.currentUrl.origin?(0,m.getRelativePart)(t):t.toString()}async function tb(e){let t=tw({handlerName:e.handlerName,rawHandlerUrl:e.rawHandlerUrl,currentUrl:e.currentUrl,crossDomainHandoffParams:null,localOAuthCallbackUrl:e.localOAuthCallbackUrl});if("signOut"===e.handlerName)return t;let r=new URL(t,e.currentUrl);if(e.currentUrl.origin===r.origin||t_(r))return t;let a=await e.getCrossDomainHandoffParams(e.currentUrl);return tw({handlerName:e.handlerName,rawHandlerUrl:e.rawHandlerUrl,currentUrl:e.currentUrl,crossDomainHandoffParams:a,localOAuthCallbackUrl:e.localOAuthCallbackUrl})}async function tk(e){if(e.noRedirectBack||null==e.currentUrl)return{type:"redirect",url:e.rawHandlerUrl};let t=function(e){return"afterSignIn"===e||"afterSignUp"===e?"after-auth-return":"signIn"===e||"signUp"===e||"onboarding"===e||"signOut"===e?"redirect-back-aware":"none"}(e.handlerName);if("none"===t)return{type:"redirect",url:e.rawHandlerUrl};if("after-auth-return"===t){var r,a,s;let t,i,n=e.currentUrl.searchParams.get("after_auth_return_to");if(null==n)return{type:"redirect",url:e.rawHandlerUrl};let o=new URL(n,e.currentUrl),l=(t=(a=(r={currentUrl:e.currentUrl,redirectBackTarget:o}).currentUrl,s=r.redirectBackTarget,{state:a.searchParams.get(tf)??s.searchParams.get(tf),codeChallenge:a.searchParams.get(tg)??s.searchParams.get(tg),afterCallbackRedirectUrl:a.searchParams.get(ty)??s.searchParams.get(ty)}),null==(i=function(e){if(e.redirectBackTarget.origin!==e.currentUrl.origin)return e.redirectBackTarget;if(null==e.handoffParams.state||null==e.handoffParams.codeChallenge||null==e.handoffParams.afterCallbackRedirectUrl)return null;let t=new URL(e.handoffParams.afterCallbackRedirectUrl,e.currentUrl);return t.origin===e.currentUrl.origin?null:new URL(`${e.redirectBackTarget.pathname}${e.redirectBackTarget.search}${e.redirectBackTarget.hash}`,t.origin)}({currentUrl:r.currentUrl,redirectBackTarget:r.redirectBackTarget,handoffParams:t}))?null:{redirectBackTarget:i,handoffParams:t});if(null==l)return{type:"redirect",url:n};let c=l.handoffParams.state,d=l.handoffParams.codeChallenge,u=l.handoffParams.afterCallbackRedirectUrl;if(null==c||null==d){let t=await e.getCrossDomainHandoffParams(e.currentUrl);c??=t.state,d??=t.codeChallenge}return u??=e.currentUrl.toString(),{type:"cross-domain-authorize",redirectUri:l.redirectBackTarget.toString(),state:c,codeChallenge:d,afterCallbackRedirectUrl:u}}if("signIn"!==e.handlerName&&"signUp"!==e.handlerName&&"onboarding"!==e.handlerName&&"signOut"!==e.handlerName)throw new n.StackAssertionError("Unexpected redirect-back-aware handler policy mismatch",{handlerName:e.handlerName,policy:t});return{type:"redirect",url:await tb({handlerName:e.handlerName,rawHandlerUrl:e.rawHandlerUrl,currentUrl:e.currentUrl,localOAuthCallbackUrl:e.localOAuthCallbackUrl,getCrossDomainHandoffParams:e.getCrossDomainHandoffParams})}}let tC=`
  .stack-devtool {
    --sdt-bg: #0a0a0b;
    --sdt-bg-elevated: #141416;
    --sdt-bg-hover: #1c1c1f;
    --sdt-bg-active: #232326;
    --sdt-bg-subtle: #111113;
    --sdt-border: #2a2a2e;
    --sdt-border-subtle: #1e1e22;
    --sdt-text: #ececef;
    --sdt-text-secondary: #8b8b93;
    --sdt-text-tertiary: #5c5c66;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #818cf8;
    --sdt-accent-muted: rgba(99, 102, 241, 0.15);
    --sdt-success: #22c55e;
    --sdt-success-muted: rgba(34, 197, 94, 0.15);
    --sdt-warning: #eab308;
    --sdt-warning-muted: rgba(234, 179, 8, 0.15);
    --sdt-error: #ef4444;
    --sdt-error-muted: rgba(239, 68, 68, 0.15);
    --sdt-info: #3b82f6;
    --sdt-info-muted: rgba(59, 130, 246, 0.15);
    --sdt-radius: 8px;
    --sdt-radius-sm: 4px;
    --sdt-radius-lg: 12px;
    --sdt-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --sdt-font-mono: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);

    all: initial;
    font-family: var(--sdt-font);
    color: var(--sdt-text);
    font-size: 13px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  .stack-devtool *, .stack-devtool *::before, .stack-devtool *::after {
    box-sizing: border-box;
  }

  /* Trigger pill */
  .stack-devtool .sdt-trigger {
    position: fixed;
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 12px 0 8px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border);
    border-radius: 20px;
    cursor: grab;
    box-shadow: var(--sdt-trigger-shadow);
    transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    user-select: none;
    touch-action: none;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 600;
    color: var(--sdt-text);
    letter-spacing: 0.5px;
  }

  .stack-devtool .sdt-trigger:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-accent);
    box-shadow: var(--sdt-trigger-shadow), 0 0 0 1px var(--sdt-accent);
  }

  .stack-devtool .sdt-trigger:active {
    cursor: grabbing;
  }

  .stack-devtool .sdt-trigger-logo {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--sdt-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    line-height: 0;
  }

  .stack-devtool .sdt-trigger-text {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--sdt-text-secondary);
  }

  /* Panel overlay */
  .stack-devtool .sdt-panel {
    position: fixed;
    bottom: 60px;
    right: 16px;
    z-index: 99998;
    width: 800px;
    max-width: calc(100vw - 32px);
    height: 520px;
    max-height: calc(100vh - 80px);
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    box-shadow: var(--sdt-shadow);
    display: flex;
    flex-direction: column;
    overflow: visible;
  }

  .stack-devtool .sdt-panel-inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--sdt-radius-lg);
    animation: sdt-panel-enter 0.2s ease-out;
  }

  @keyframes sdt-panel-enter {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .stack-devtool .sdt-panel-exiting {
    animation: sdt-panel-exit 0.15s ease-in forwards;
  }

  @keyframes sdt-panel-exit {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.95) translateY(8px);
    }
  }

  /* Tab bar */
  .stack-devtool .sdt-tabbar {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 8px;
    background: var(--sdt-bg-subtle);
    border-bottom: 1px solid var(--sdt-border);
    flex-shrink: 0;
    gap: 2px;
    overflow-x: auto;
  }

  .stack-devtool .sdt-tab-indicator {
    position: absolute;
    top: 6px;
    left: 0;
    height: 32px;
    background: var(--sdt-bg-active);
    border-radius: var(--sdt-radius);
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    z-index: 0;
  }

  .stack-devtool .sdt-tab {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 12px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: color 0.15s ease;
    white-space: nowrap;
    outline: none;
  }

  .stack-devtool .sdt-tab:hover {
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-tab[data-active="true"] {
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-tab-icon {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-tabbar-spacer {
    flex: 1;
  }

  .stack-devtool .sdt-close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius-sm);
    cursor: pointer;
    color: var(--sdt-text-tertiary);
    transition: all 0.15s ease;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-close-btn:hover {
    color: var(--sdt-text);
    background: var(--sdt-bg-hover);
  }

  /* Tab content area */
  .stack-devtool .sdt-content {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-height: 0;
  }

  .stack-devtool .sdt-tab-layers {
    position: absolute;
    inset: 0;
  }

  .stack-devtool .sdt-tab-pane {
    position: absolute;
    inset: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    visibility: hidden;
    pointer-events: none;
  }

  .stack-devtool .sdt-tab-pane-active {
    visibility: visible;
    pointer-events: auto;
    animation: sdt-tab-fade-in 0.15s ease-out;
  }

  @keyframes sdt-tab-fade-in {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .stack-devtool .sdt-tab-pane::-webkit-scrollbar {
    width: 6px;
  }

  .stack-devtool .sdt-tab-pane::-webkit-scrollbar-track {
    background: transparent;
  }

  .stack-devtool .sdt-tab-pane::-webkit-scrollbar-thumb {
    background: var(--sdt-border);
    border-radius: 3px;
  }

  /* ===== Overview tab — MSN bento grid ===== */

  .stack-devtool .sdt-ov {
    margin: -16px;
    padding: 8px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto 1fr;
    gap: 8px;
    height: calc(100% + 32px);
    overflow: hidden;
  }

  /* Card base */
  .stack-devtool .sdt-ov-card {
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.2s ease, border-color 0.2s ease;
    overflow: hidden;
    min-width: 0;
  }

  .stack-devtool .sdt-ov-card:hover {
    border-color: var(--sdt-border);
    box-shadow: 0 0 0 1px rgba(99,102,241,0.12);
  }

  .stack-devtool .sdt-ov-label {
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--sdt-text-tertiary);
    margin-bottom: 10px;
  }

  /* --- User hero card (span 2 cols) --- */
  .stack-devtool .sdt-ov-card-hero {
    background: linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 50%), var(--sdt-bg-elevated);
  }

  .stack-devtool .sdt-ov-user-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }

  .stack-devtool .sdt-ov-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--sdt-bg-hover);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
    border: 2px solid var(--sdt-border-subtle);
    overflow: hidden;
  }

  .stack-devtool .sdt-ov-avatar-active {
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent);
    border-color: rgba(99,102,241,0.3);
  }

  .stack-devtool .sdt-ov-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .stack-devtool .sdt-ov-user-meta {
    min-width: 0;
    flex: 1;
  }

  .stack-devtool .sdt-ov-user-name {
    font-size: 16px;
    font-weight: 700;
    color: var(--sdt-text);
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stack-devtool .sdt-ov-user-email {
    font-size: 12px;
    font-family: var(--sdt-font-mono);
    color: var(--sdt-text-secondary);
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stack-devtool .sdt-ov-auth-indicator {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 5px;
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-success);
  }

  .stack-devtool .sdt-ov-auth-indicator::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sdt-success);
    box-shadow: 0 0 6px rgba(34,197,94,0.5);
  }

  /* Actions */
  .stack-devtool .sdt-ov-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: auto;
  }

  .stack-devtool .sdt-ov-btn {
    height: 30px;
    padding: 0 12px;
    border-radius: 6px;
    border: none;
    font-size: 12px;
    font-weight: 600;
    font-family: var(--sdt-font);
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  .stack-devtool .sdt-ov-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .stack-devtool .sdt-ov-btn-primary {
    background: var(--sdt-accent);
    color: #fff;
  }
  .stack-devtool .sdt-ov-btn-primary:hover { background: var(--sdt-accent-hover); }

  .stack-devtool .sdt-ov-btn-secondary {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }
  .stack-devtool .sdt-ov-btn-secondary:hover { background: var(--sdt-bg-active); }

  .stack-devtool .sdt-ov-btn-danger {
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
    border: 1px solid rgba(239, 68, 68, 0.15);
  }
  .stack-devtool .sdt-ov-btn-danger:hover { background: rgba(239, 68, 68, 0.2); }

  .stack-devtool .sdt-ov-btn-wide { flex: 1; }

  .stack-devtool .sdt-ov-email-input {
    display: flex;
    flex: 1 1 180px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 6px;
    overflow: hidden;
    background: var(--sdt-bg);
    transition: border-color 0.15s ease;
  }
  .stack-devtool .sdt-ov-email-input:focus-within {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 2px var(--sdt-accent-muted);
  }
  .stack-devtool .sdt-ov-email-input input {
    flex: 1;
    height: 28px;
    padding: 0 8px;
    background: transparent;
    border: none;
    color: var(--sdt-text);
    font-size: 11px;
    font-family: var(--sdt-font);
    outline: none;
    min-width: 0;
  }
  .stack-devtool .sdt-ov-email-input input::placeholder { color: var(--sdt-text-tertiary); }
  .stack-devtool .sdt-ov-email-input button {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-left: 1px solid var(--sdt-border-subtle);
    background: transparent;
    color: var(--sdt-accent);
    cursor: pointer;
    flex-shrink: 0;
    font-family: var(--sdt-font);
  }
  .stack-devtool .sdt-ov-email-input button:hover { background: var(--sdt-accent-muted); }
  .stack-devtool .sdt-ov-email-input button:disabled { opacity: 0.3; cursor: not-allowed; }

  .stack-devtool .sdt-ov-toast {
    font-size: 11px;
    padding: 5px 10px;
    border-radius: 6px;
    margin-top: 8px;
    line-height: 1.4;
  }
  .stack-devtool .sdt-ov-toast-success { background: var(--sdt-success-muted); color: var(--sdt-success); }
  .stack-devtool .sdt-ov-toast-error { background: var(--sdt-error-muted); color: var(--sdt-error); }

  /* --- Project info card (stacked key-value rows) --- */
  .stack-devtool .sdt-ov-card-project {
  }

  .stack-devtool .sdt-ov-project-rows {
    display: flex;
    flex-direction: column;
    gap: 0;
    flex: 1;
  }

  .stack-devtool .sdt-ov-project-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px solid var(--sdt-border-subtle);
  }

  .stack-devtool .sdt-ov-project-row:last-child { border-bottom: none; }

  .stack-devtool .sdt-ov-project-key {
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .stack-devtool .sdt-ov-project-val {
    font-size: 13px;
    font-weight: 600;
    color: var(--sdt-text);
    text-align: right;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .stack-devtool .sdt-ov-project-val-mono {
    font-family: var(--sdt-font-mono);
    font-size: 12px;
  }

  .stack-devtool .sdt-ov-sdk-badge {
    font-size: 9px;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 4px;
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
    text-transform: uppercase;
    letter-spacing: 0.3px;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-ov-sdk-badge-error {
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
  }

  .stack-devtool .sdt-ov-env-val {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .stack-devtool .sdt-ov-pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--sdt-success);
    flex-shrink: 0;
    display: inline-block;
    animation: sdt-ov-pulse 2s ease-in-out infinite;
  }

  @keyframes sdt-ov-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
    50% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
  }

  /* --- Setup checklist card --- */
  .stack-devtool .sdt-ov-card-checks {
    padding: 12px 14px;
  }

  .stack-devtool .sdt-ov-card-checks-ok {
    border-color: rgba(34, 197, 94, 0.15);
  }

  .stack-devtool .sdt-ov-checks-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-bottom: 8px;
  }

  .stack-devtool .sdt-ov-checks-badge {
    font-size: 10px;
    font-weight: 700;
    padding: 1px 6px;
    border-radius: 4px;
  }

  .stack-devtool .sdt-ov-checks-badge-ok {
    background: var(--sdt-success-muted);
    color: var(--sdt-success);
  }

  .stack-devtool .sdt-ov-checks-badge-warn {
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
  }

  .stack-devtool .sdt-ov-checks-bar {
    height: 3px;
    border-radius: 2px;
    background: var(--sdt-border-subtle);
    margin-bottom: 10px;
    overflow: hidden;
  }

  .stack-devtool .sdt-ov-checks-bar-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--sdt-success);
    transition: width 0.4s ease;
  }

  .stack-devtool .sdt-ov-checks {
    display: flex;
    gap: 6px;
  }

  .stack-devtool .sdt-ov-check {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
  }

  .stack-devtool .sdt-ov-check-icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-ov-check-ok .sdt-ov-check-icon {
    background: var(--sdt-success-muted);
    color: var(--sdt-success);
  }

  .stack-devtool .sdt-ov-check-warn .sdt-ov-check-icon {
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
  }

  .stack-devtool .sdt-ov-check-ok .sdt-ov-check-label { color: var(--sdt-text); }
  .stack-devtool .sdt-ov-check-warn .sdt-ov-check-label { color: var(--sdt-text-secondary); }

  /* --- Auth methods card --- */
  .stack-devtool .sdt-ov-card-auth {
    padding: 12px 14px;
  }

  .stack-devtool .sdt-ov-auth-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .stack-devtool .sdt-ov-method {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-ov-method-on {
    color: var(--sdt-text);
    background: var(--sdt-success-muted);
    border-color: rgba(34, 197, 94, 0.12);
  }

  .stack-devtool .sdt-ov-method-off {
    color: var(--sdt-text-tertiary);
    opacity: 0.5;
    border-style: dashed;
  }

  .stack-devtool .sdt-ov-method-oauth {
    text-transform: capitalize;
  }

  .stack-devtool .sdt-ov-method-warn {
    color: var(--sdt-warning);
    border-color: rgba(234, 179, 8, 0.2);
  }

  .stack-devtool .sdt-ov-skeleton-pill {
    width: 64px;
    height: 26px;
    border-radius: 6px;
    background: var(--sdt-bg-hover);
    border: 1px solid var(--sdt-border-subtle);
    animation: sdt-ov-shimmer 1.5s ease-in-out infinite;
  }

  @keyframes sdt-ov-shimmer {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }

  /* --- Changelog card (span 2 cols) --- */
  .stack-devtool .sdt-ov-card-changelog {
    grid-column: span 2;
  }

  .stack-devtool .sdt-ov-changelog-content {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }

  .stack-devtool .sdt-ov-changelog-content::-webkit-scrollbar {
    width: 6px;
  }

  .stack-devtool .sdt-ov-changelog-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .stack-devtool .sdt-ov-changelog-content::-webkit-scrollbar-thumb {
    background: var(--sdt-border);
    border-radius: 3px;
  }

  .stack-devtool .sdt-ov-changelog {
    display: flex;
    flex-direction: column;
    gap: 0;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
    padding-right: 4px;
  }

  .stack-devtool .sdt-ov-release + .sdt-ov-release {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dotted var(--sdt-border-subtle);
  }

  .stack-devtool .sdt-ov-release-head {
    font-size: 13px;
    font-weight: 700;
    color: var(--sdt-text);
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stack-devtool .sdt-ov-release-date {
    font-size: 11px;
    font-weight: 400;
    color: var(--sdt-text-tertiary);
  }

  .stack-devtool .sdt-ov-release-line {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
    padding: 1px 0;
  }

  .stack-devtool .sdt-ov-release-text {
    min-width: 0;
  }

  .stack-devtool .sdt-ov-release-image-figure {
    margin: 10px 0 6px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .stack-devtool .sdt-ov-release-image-link {
    display: block;
    width: 45%;
    max-width: 100%;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-subtle);
  }

  .stack-devtool .sdt-ov-release-image {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .stack-devtool .sdt-ov-release-image-caption {
    font-size: 11px;
    color: var(--sdt-text-tertiary);
    line-height: 1.4;
  }

  .stack-devtool .sdt-ov-tag {
    font-size: 9px;
    font-weight: 700;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    padding: 1px 5px;
    border-radius: 3px;
    margin-top: 2px;
  }
  .stack-devtool .sdt-ov-tag-feature { background: var(--sdt-accent-muted); color: var(--sdt-accent-hover); }
  .stack-devtool .sdt-ov-tag-fix { background: var(--sdt-error-muted); color: var(--sdt-error); }
  .stack-devtool .sdt-ov-tag-breaking { background: var(--sdt-error-muted); color: var(--sdt-error); }
  .stack-devtool .sdt-ov-tag-improvement { background: var(--sdt-success-muted); color: var(--sdt-success); }

  .stack-devtool .sdt-ov-all-releases {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 10px;
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-text-tertiary);
    text-decoration: none;
    font-family: var(--sdt-font);
    transition: color 0.15s ease;
  }
  .stack-devtool .sdt-ov-all-releases:hover { color: var(--sdt-accent); }

  /* Status badges (shared across tabs) */
  .stack-devtool .sdt-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
  }
  .stack-devtool .sdt-badge-success { background: var(--sdt-success-muted); color: var(--sdt-success); }
  .stack-devtool .sdt-badge-warning { background: var(--sdt-warning-muted); color: var(--sdt-warning); }
  .stack-devtool .sdt-badge-error { background: var(--sdt-error-muted); color: var(--sdt-error); }
  .stack-devtool .sdt-badge-info { background: var(--sdt-info-muted); color: var(--sdt-info); }

  /* ===== Components / Pages tab ===== */

  .stack-devtool .sdt-pg-layout {
    display: flex;
    height: calc(100% + 32px);
    margin: -16px;
  }

  /* --- Sidebar --- */
  .stack-devtool .sdt-pg-sidebar {
    width: 250px;
    flex-shrink: 0;
    border-right: 1px solid var(--sdt-border);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .stack-devtool .sdt-pg-sidebar-head {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 14px 8px;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-pg-sidebar-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--sdt-text-tertiary);
  }

  .stack-devtool .sdt-pg-sidebar-count {
    font-size: 10px;
    font-weight: 700;
    color: var(--sdt-text-tertiary);
    background: var(--sdt-bg-active);
    padding: 0 5px;
    border-radius: 6px;
    line-height: 18px;
  }

  .stack-devtool .sdt-pg-sidebar-warn {
    margin-left: auto;
    font-size: 10px;
    font-weight: 700;
    color: var(--sdt-warning);
    background: var(--sdt-warning-muted);
    padding: 0 6px;
    border-radius: 6px;
    line-height: 18px;
  }

  .stack-devtool .sdt-pg-list {
    flex: 1;
    overflow-y: auto;
    padding: 0 6px 6px;
  }

  /* --- List item --- */
  .stack-devtool .sdt-pg-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.12s ease;
    font-size: 13px;
    color: var(--sdt-text);
    position: relative;
  }

  .stack-devtool .sdt-pg-item:hover {
    background: var(--sdt-bg-hover);
  }

  .stack-devtool .sdt-pg-item[data-selected="true"] {
    background: var(--sdt-accent-muted);
  }

  .stack-devtool .sdt-pg-item[data-selected="true"] .sdt-pg-item-label {
    color: var(--sdt-accent-hover);
    font-weight: 600;
  }

  .stack-devtool .sdt-pg-item-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .stack-devtool .sdt-pg-item-dot-handler { background: var(--sdt-info); }
  .stack-devtool .sdt-pg-item-dot-custom { background: var(--sdt-success); }
  .stack-devtool .sdt-pg-item-dot-warn {
    background: var(--sdt-warning);
    box-shadow: 0 0 6px rgba(234, 179, 8, 0.4);
  }

  .stack-devtool .sdt-pg-item-label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* --- Badges --- */
  .stack-devtool .sdt-pg-badge {
    display: inline-flex;
    align-items: center;
    height: 20px;
    padding: 0 7px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2px;
    flex-shrink: 0;
    line-height: 1;
  }

  .stack-devtool .sdt-pg-badge-handler { background: var(--sdt-info-muted); color: var(--sdt-info); }
  .stack-devtool .sdt-pg-badge-hosted { background: var(--sdt-info-muted); color: var(--sdt-info); }
  .stack-devtool .sdt-pg-badge-custom { background: var(--sdt-success-muted); color: var(--sdt-success); }
  .stack-devtool .sdt-pg-badge-outdated { background: var(--sdt-warning-muted); color: var(--sdt-warning); }

  /* --- Empty state --- */
  .stack-devtool .sdt-pg-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-align: center;
  }

  .stack-devtool .sdt-pg-empty-icon {
    color: var(--sdt-text-tertiary);
    opacity: 0.35;
    margin-bottom: 4px;
  }

  .stack-devtool .sdt-pg-empty-text {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text-secondary);
  }

  .stack-devtool .sdt-pg-empty-sub {
    font-size: 12px;
    color: var(--sdt-text-tertiary);
  }

  /* --- Main panel --- */
  .stack-devtool .sdt-pg-main {
    flex: 1;
    overflow-y: auto;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
  }

  /* --- Detail view --- */
  .stack-devtool .sdt-pg-detail {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Header */
  .stack-devtool .sdt-pg-header {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stack-devtool .sdt-pg-header-top {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stack-devtool .sdt-pg-title {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-pg-subtitle {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.4;
  }

  .stack-devtool .sdt-pg-code-inline {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
  }

  .stack-devtool .sdt-pg-code {
    font-family: var(--sdt-font-mono);
    font-size: 12px;
    color: var(--sdt-accent);
    background: var(--sdt-bg-elevated);
    border-radius: 6px;
    padding: 6px 10px;
    border: 1px solid var(--sdt-border-subtle);
  }

  .stack-devtool .sdt-pg-url-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stack-devtool .sdt-pg-url-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
  }

  .stack-devtool .sdt-pg-url {
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    color: var(--sdt-text-tertiary);
    text-decoration: none;
    transition: color 0.12s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stack-devtool .sdt-pg-url:hover {
    color: var(--sdt-accent);
  }

  /* --- Copy button --- */
  .stack-devtool .sdt-pg-copy-btn {
    height: 26px;
    padding: 0 10px;
    border-radius: 6px;
    border: 1px solid var(--sdt-border);
    background: var(--sdt-bg-active);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    font-family: var(--sdt-font);
    transition: all 0.12s ease;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .stack-devtool .sdt-pg-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
    border-color: var(--sdt-accent);
  }

  .stack-devtool .sdt-pg-copy-btn-ok {
    border-color: rgba(34, 197, 94, 0.3);
    color: var(--sdt-success);
    background: var(--sdt-success-muted);
  }

  /* --- Update banner --- */
  .stack-devtool .sdt-pg-update-banner {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 14px;
    background: rgba(234, 179, 8, 0.08);
    border: 1px solid rgba(234, 179, 8, 0.3);
    border-radius: 10px;
  }

  .stack-devtool .sdt-pg-update-banner-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(234, 179, 8, 0.2);
    color: var(--sdt-warning);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .stack-devtool .sdt-pg-update-banner-body {
    flex: 1;
    min-width: 0;
  }

  .stack-devtool .sdt-pg-update-banner-title {
    font-size: 13px;
    font-weight: 700;
    color: var(--sdt-warning);
    margin-bottom: 2px;
  }

  .stack-devtool .sdt-pg-update-banner-text {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
  }

  .stack-devtool .sdt-pg-update-banner-text strong {
    color: var(--sdt-text);
    font-weight: 600;
  }

  /* --- Sections (changelog, prompt) --- */
  .stack-devtool .sdt-pg-section {
    border: 1px solid var(--sdt-border-subtle);
    border-radius: 10px;
    padding: 12px 14px;
    background: var(--sdt-bg-elevated);
  }

  .stack-devtool .sdt-pg-section-warn {
    border-color: rgba(234, 179, 8, 0.25);
    background: rgba(234, 179, 8, 0.03);
  }

  .stack-devtool .sdt-pg-section-label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--sdt-text-tertiary);
    margin-bottom: 8px;
  }

  .stack-devtool .sdt-pg-section-warn .sdt-pg-section-label {
    color: var(--sdt-warning);
  }

  .stack-devtool .sdt-pg-section-footer {
    display: flex;
    margin-top: 8px;
  }

  /* Changelog list */
  .stack-devtool .sdt-pg-changelog-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stack-devtool .sdt-pg-changelog-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 12px;
    color: var(--sdt-text);
    line-height: 1.5;
  }

  .stack-devtool .sdt-pg-changelog-bullet {
    flex-shrink: 0;
    font-size: 12px;
    line-height: 1.5;
  }

  /* Pre block */
  .stack-devtool .sdt-pg-pre {
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    line-height: 1.6;
    color: var(--sdt-text);
    background: var(--sdt-bg);
    border-radius: 6px;
    padding: 10px 12px;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--sdt-border-subtle);
  }

  .stack-devtool .sdt-preview-loading,
  .stack-devtool .sdt-preview-unavailable {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
  }

  .stack-devtool .sdt-preview-error {
    font-size: 12px;
    color: var(--sdt-error);
    line-height: 1.5;
  }

  .stack-devtool .sdt-preview-code {
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-props-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }

  .stack-devtool .sdt-props-table th {
    text-align: left;
    font-weight: 600;
    color: var(--sdt-text-tertiary);
    padding: 6px 8px;
    border-bottom: 1px solid var(--sdt-border);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .stack-devtool .sdt-props-table td {
    padding: 6px 8px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-props-table td:first-child {
    font-family: var(--sdt-font-mono);
    color: var(--sdt-accent-hover);
  }

  .stack-devtool .sdt-props-table td:last-child {
    font-family: var(--sdt-font-mono);
    color: var(--sdt-text-secondary);
  }

  /* Iframe tabs (Docs, Dashboard) */
  .stack-devtool .sdt-iframe-container {
    height: calc(100% + 32px);
    margin: -16px;
    display: flex;
    flex-direction: column;
  }

  .stack-devtool .sdt-iframe-container iframe {
    flex: 1;
    width: 100%;
    border: none;
    background: white;
    border-radius: 0 0 var(--sdt-radius-lg) var(--sdt-radius-lg);
  }

  .stack-devtool .sdt-iframe-loading {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .stack-devtool .sdt-iframe-error {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .stack-devtool .sdt-iframe-error-btn {
    padding: 6px 16px;
    background: var(--sdt-accent);
    color: white;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    transition: background 0.15s ease;
  }

  .stack-devtool .sdt-iframe-error-btn:hover {
    background: var(--sdt-accent-hover);
  }

  /* Shared content fade animation */
  .stack-devtool .sdt-tab-content-fade {
    animation: sdt-tab-fade-in 0.15s ease-out;
  }

  /* Console tab */
  .stack-devtool .sdt-console-tabs {
    position: relative;
    display: flex;
    flex: 1;
    gap: 2px;
    background: var(--sdt-bg-subtle);
    border-radius: var(--sdt-radius);
    padding: 2px;
  }

  .stack-devtool .sdt-console-tab-indicator {
    position: absolute;
    top: 2px;
    left: 0;
    background: var(--sdt-bg-active);
    border-radius: var(--sdt-radius-sm);
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                width 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
    z-index: 0;
  }

  .stack-devtool .sdt-console-tab {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 6px 12px;
    background: transparent;
    border: none;
    border-radius: var(--sdt-radius-sm);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: color 0.15s ease;
    text-align: center;
  }

  .stack-devtool .sdt-console-tab:hover {
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-console-tab[data-active="true"] {
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-log-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .stack-devtool .sdt-log-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 8px 10px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    font-size: 12px;
    font-family: var(--sdt-font-mono);
  }

  .stack-devtool .sdt-log-time {
    color: var(--sdt-text-tertiary);
    flex-shrink: 0;
    font-size: 11px;
  }

  .stack-devtool .sdt-log-type {
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-log-message {
    flex: 1;
    color: var(--sdt-text);
    word-break: break-all;
  }

  .stack-devtool .sdt-log-method {
    padding: 1px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-log-method-get {
    background: var(--sdt-info-muted);
    color: var(--sdt-info);
  }

  .stack-devtool .sdt-log-method-post {
    background: var(--sdt-success-muted);
    color: var(--sdt-success);
  }

  .stack-devtool .sdt-log-method-put, .stack-devtool .sdt-log-method-patch {
    background: var(--sdt-warning-muted);
    color: var(--sdt-warning);
  }

  .stack-devtool .sdt-log-method-delete {
    background: var(--sdt-error-muted);
    color: var(--sdt-error);
  }

  .stack-devtool .sdt-log-status {
    font-size: 11px;
    flex-shrink: 0;
  }

  .stack-devtool .sdt-log-status-ok {
    color: var(--sdt-success);
  }

  .stack-devtool .sdt-log-status-err {
    color: var(--sdt-error);
  }

  .stack-devtool .sdt-log-url {
    flex: 1;
    color: var(--sdt-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stack-devtool .sdt-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 40px 20px;
    color: var(--sdt-text-tertiary);
    font-size: 13px;
    text-align: center;
    gap: 4px;
  }

  .stack-devtool .sdt-empty-state-icon {
    font-size: 24px;
    margin-bottom: 8px;
    opacity: 0.5;
  }

  /* Config info table */
  .stack-devtool .sdt-config-table {
    width: 100%;
    border-collapse: collapse;
  }

  .stack-devtool .sdt-config-table td {
    padding: 8px 10px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    font-size: 12px;
  }

  .stack-devtool .sdt-config-table td:first-child {
    color: var(--sdt-text-secondary);
    width: 160px;
    font-weight: 500;
  }

  .stack-devtool .sdt-config-table td:last-child {
    color: var(--sdt-text);
    font-family: var(--sdt-font-mono);
    word-break: break-all;
  }

  .stack-devtool .sdt-config-table td .sdt-config-link {
    font-family: inherit;
    color: var(--sdt-accent);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .stack-devtool .sdt-config-table td .sdt-config-link:hover {
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-config-muted {
    color: var(--sdt-text-tertiary);
    font-style: italic;
  }

  /* Resize handle */
  .stack-devtool .sdt-resize-handle {
    position: absolute;
    top: 0;
    left: -4px;
    width: 8px;
    height: 100%;
    cursor: ew-resize;
    z-index: 10;
  }

  .stack-devtool .sdt-resize-handle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    width: 2px;
    height: 32px;
    transform: translateY(-50%);
    background: transparent;
    border-radius: 1px;
    transition: background 0.15s ease;
  }

  .stack-devtool .sdt-resize-handle:hover::after,
  .stack-devtool .sdt-resize-handle:active::after {
    background: var(--sdt-accent);
  }

  .stack-devtool .sdt-resize-handle-top {
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 8px;
    cursor: ns-resize;
    z-index: 10;
  }

  .stack-devtool .sdt-resize-handle-top::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 3px;
    height: 2px;
    width: 32px;
    transform: translateX(-50%);
    background: transparent;
    border-radius: 1px;
    transition: background 0.15s ease;
  }

  .stack-devtool .sdt-resize-handle-top:hover::after,
  .stack-devtool .sdt-resize-handle-top:active::after {
    background: var(--sdt-accent);
  }

  .stack-devtool .sdt-resize-handle-corner {
    position: absolute;
    top: -6px;
    left: -6px;
    width: 14px;
    height: 14px;
    cursor: nwse-resize;
    z-index: 11;
  }

  .stack-devtool .sdt-resize-handle-corner::after {
    content: '';
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 5px;
    height: 5px;
    background: transparent;
    border-radius: 50%;
    transition: background 0.15s ease;
  }

  .stack-devtool .sdt-resize-handle-corner:hover::after,
  .stack-devtool .sdt-resize-handle-corner:active::after {
    background: var(--sdt-accent);
  }

  .stack-devtool .sdt-no-components {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--sdt-text-tertiary);
    font-size: 13px;
    text-align: center;
    padding: 20px;
  }

  /* Support tab */
  .stack-devtool .sdt-support-tab {
    display: flex;
    flex-direction: column;
    height: calc(100% + 32px);
    margin: -16px;
  }

  .stack-devtool .sdt-support-tab > .sdt-console-tabs {
    margin: 12px 12px 0;
    flex: none;
  }

  .stack-devtool .sdt-support-content {
    flex: 1;
    min-height: 0;
    position: relative;
  }

  .stack-devtool .sdt-support-pane {
    position: absolute;
    inset: 0;
    visibility: hidden;
    pointer-events: none;
  }

  .stack-devtool .sdt-tab-pane-active .sdt-support-pane-active {
    visibility: visible;
    pointer-events: auto;
    animation: sdt-tab-fade-in 0.15s ease-out;
  }

  .stack-devtool .sdt-support-feedback-pane {
    padding: 20px;
    height: 100%;
    overflow-y: auto;
  }

  .stack-devtool .sdt-support-iframe-pane {
    height: 100%;
  }

  .stack-devtool .sdt-support-iframe-pane .sdt-iframe-container {
    height: 100%;
    margin: 0;
  }

  /* Form layout */
  .stack-devtool .sdt-support-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* Type cards */
  .stack-devtool .sdt-support-type-cards {
    display: flex;
    gap: 8px;
  }

  .stack-devtool .sdt-support-type-card {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 10px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 11px;
    font-weight: 500;
    color: var(--sdt-text-secondary);
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-support-type-card svg {
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }

  .stack-devtool .sdt-support-type-card:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-support-type-card:hover svg {
    opacity: 1;
  }

  .stack-devtool .sdt-support-type-card-active {
    border-color: var(--sdt-accent);
    background: var(--sdt-accent-muted);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-support-type-card-active svg {
    opacity: 1;
    color: var(--sdt-accent);
  }

  /* Field group */
  .stack-devtool .sdt-support-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .stack-devtool .sdt-support-label {
    font-size: 11px;
    font-weight: 600;
    color: var(--sdt-text-secondary);
    letter-spacing: 0.3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .stack-devtool .sdt-support-optional {
    font-size: 10px;
    font-weight: 400;
    color: var(--sdt-text-tertiary);
    text-transform: none;
    letter-spacing: 0;
  }

  /* Inputs */
  .stack-devtool .sdt-support-input,
  .stack-devtool .sdt-support-textarea {
    width: 100%;
    padding: 9px 12px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-text);
    font-family: var(--sdt-font);
    font-size: 13px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .stack-devtool .sdt-support-input::placeholder,
  .stack-devtool .sdt-support-textarea::placeholder {
    color: var(--sdt-text-tertiary);
  }

  .stack-devtool .sdt-support-input:focus,
  .stack-devtool .sdt-support-textarea:focus {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 3px var(--sdt-accent-muted);
  }

  .stack-devtool .sdt-support-textarea {
    resize: vertical;
    min-height: 100px;
    line-height: 1.6;
  }

  /* Submit button */
  .stack-devtool .sdt-support-submit {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 20px;
    background: var(--sdt-accent);
    color: white;
    border: none;
    border-radius: var(--sdt-radius);
    cursor: pointer;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.2px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(99, 102, 241, 0.3);
  }

  .stack-devtool .sdt-support-submit:hover:not(:disabled) {
    background: var(--sdt-accent-hover);
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
    transform: translateY(-1px);
  }

  .stack-devtool .sdt-support-submit:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(99, 102, 241, 0.2);
  }

  .stack-devtool .sdt-support-submit:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }

  .stack-devtool .sdt-support-submit svg {
    flex-shrink: 0;
  }

  @keyframes sdt-spin {
    to { transform: rotate(360deg); }
  }

  .stack-devtool .sdt-support-spinner {
    animation: sdt-spin 1s linear infinite;
  }

  /* Status screens (success / error) */
  .stack-devtool .sdt-support-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 20px;
    border-radius: var(--sdt-radius-lg);
    text-align: center;
    gap: 6px;
  }

  .stack-devtool .sdt-support-status-success {
    background: linear-gradient(180deg, var(--sdt-success-muted), transparent 80%);
    border: 1px solid rgba(34, 197, 94, 0.15);
  }

  .stack-devtool .sdt-support-status-error {
    background: linear-gradient(180deg, var(--sdt-error-muted), transparent 80%);
    border: 1px solid rgba(239, 68, 68, 0.15);
  }

  .stack-devtool .sdt-support-status-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }

  .stack-devtool .sdt-support-status-success .sdt-support-status-icon {
    background: rgba(34, 197, 94, 0.15);
    color: var(--sdt-success);
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
  }

  .stack-devtool .sdt-support-status-error .sdt-support-status-icon {
    background: rgba(239, 68, 68, 0.15);
    color: var(--sdt-error);
    box-shadow: 0 0 20px rgba(239, 68, 68, 0.1);
  }

  .stack-devtool .sdt-support-status-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-support-status-msg {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    line-height: 1.5;
    max-width: 260px;
  }

  /* Support channels */
  .stack-devtool .sdt-support-channels {
    display: flex;
    gap: 8px;
  }

  .stack-devtool .sdt-support-channel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 10px;
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    color: var(--sdt-text-secondary);
    text-decoration: none;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-support-channel:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-support-channel svg {
    flex-shrink: 0;
    opacity: 0.6;
    transition: opacity 0.15s ease;
  }

  .stack-devtool .sdt-support-channel:hover svg {
    opacity: 1;
  }

  /* --- Light theme: system preference fallback --- */
  @media (prefers-color-scheme: light) {
    .stack-devtool {
      --sdt-bg: #ffffff;
      --sdt-bg-elevated: #f8f8fa;
      --sdt-bg-hover: #f0f0f3;
      --sdt-bg-active: #e8e8ec;
      --sdt-bg-subtle: #fafafa;
      --sdt-border: #e0e0e5;
      --sdt-border-subtle: #eaeaef;
      --sdt-text: #111113;
      --sdt-text-secondary: #6b6b73;
      --sdt-text-tertiary: #9b9ba3;
      --sdt-accent: #6366f1;
      --sdt-accent-hover: #4f46e5;
      --sdt-accent-muted: rgba(99, 102, 241, 0.1);
      --sdt-success: #16a34a;
      --sdt-success-muted: rgba(22, 163, 74, 0.1);
      --sdt-warning: #ca8a04;
      --sdt-warning-muted: rgba(202, 138, 4, 0.1);
      --sdt-error: #dc2626;
      --sdt-error-muted: rgba(220, 38, 38, 0.1);
      --sdt-info: #2563eb;
      --sdt-info-muted: rgba(37, 99, 235, 0.1);
      --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
      --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);
    }
  }

  /* Export dialog — positioned inside the dev tool panel */
  .stack-devtool .sdt-share-overlay {
    position: absolute;
    inset: 0;
    z-index: 20;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: sdt-tab-fade-in 0.15s ease-out;
    border-radius: var(--sdt-radius-lg);
  }

  .stack-devtool .sdt-share-dialog {
    width: 380px;
    max-width: calc(100% - 32px);
    background: var(--sdt-bg);
    border: 1px solid var(--sdt-border);
    border-radius: var(--sdt-radius-lg);
    box-shadow: var(--sdt-shadow);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .stack-devtool .sdt-share-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stack-devtool .sdt-share-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-share-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    color: var(--sdt-text-secondary);
    font-size: 13px;
  }

  .stack-devtool .sdt-share-url-row {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .stack-devtool .sdt-share-url-row .sdt-support-input {
    flex: 1;
    font-family: var(--sdt-font-mono);
    font-size: 12px;
  }

  .stack-devtool .sdt-share-copy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-share-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-share-actions {
    display: flex;
    gap: 8px;
  }

  .stack-devtool .sdt-share-action-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 12px;
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    color: var(--sdt-text-secondary);
    text-decoration: none;
    font-family: var(--sdt-font);
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-share-action-btn:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-share-action-btn svg {
    flex-shrink: 0;
    opacity: 0.7;
  }

  .stack-devtool .sdt-share-action-btn:hover svg {
    opacity: 1;
  }

  .stack-devtool .sdt-share-action-btn-accent {
    background: var(--sdt-accent);
    border-color: var(--sdt-accent);
    color: white;
  }

  .stack-devtool .sdt-share-action-btn-accent:hover {
    background: var(--sdt-accent-hover);
    border-color: var(--sdt-accent-hover);
    color: white;
  }

  .stack-devtool .sdt-share-action-btn-accent svg {
    opacity: 1;
  }

  /* --- AI Chat tab --- */

  .stack-devtool .sdt-ai-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }

  .stack-devtool .sdt-ai-messages {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 16px;
    scroll-behavior: smooth;
  }

  .stack-devtool .sdt-ai-message-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* --- Empty state --- */

  .stack-devtool .sdt-ai-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 12px;
    padding: 24px;
    text-align: center;
  }

  .stack-devtool .sdt-ai-empty-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--sdt-accent-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sdt-accent);
    margin-bottom: 4px;
  }

  .stack-devtool .sdt-ai-empty-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-empty-desc {
    font-size: 12px;
    color: var(--sdt-text-secondary);
    max-width: 320px;
    line-height: 1.5;
  }

  .stack-devtool .sdt-ai-suggestions {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
    width: 100%;
    max-width: 340px;
  }

  .stack-devtool .sdt-ai-suggestion {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    color: var(--sdt-text-secondary);
    font-size: 12px;
    cursor: pointer;
    text-align: left;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
    line-height: 1.4;
  }

  .stack-devtool .sdt-ai-suggestion:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-suggestion-icon {
    font-size: 14px;
    flex-shrink: 0;
  }

  /* --- Messages --- */

  .stack-devtool .sdt-ai-msg {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .stack-devtool .sdt-ai-msg-user {
    justify-content: flex-end;
  }

  .stack-devtool .sdt-ai-msg-assistant {
    justify-content: flex-start;
  }

  .stack-devtool .sdt-ai-avatar {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .stack-devtool .sdt-ai-avatar-user {
    background: var(--sdt-info-muted);
    color: var(--sdt-info);
    order: 2;
  }

  .stack-devtool .sdt-ai-avatar-assistant {
    background: var(--sdt-accent-muted);
    color: var(--sdt-accent);
  }

  .stack-devtool .sdt-ai-bubble {
    min-width: 0;
    max-width: 85%;
    border-radius: var(--sdt-radius-lg);
    padding: 10px 14px;
  }

  .stack-devtool .sdt-ai-bubble-user {
    background: var(--sdt-info-muted);
    border: 1px solid rgba(59, 130, 246, 0.1);
  }

  .stack-devtool .sdt-ai-bubble-user p {
    font-size: 13px;
    line-height: 1.55;
    color: var(--sdt-text);
    margin: 0;
    word-break: break-word;
  }

  .stack-devtool .sdt-ai-bubble-assistant {
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
  }

  /* --- Thinking dots --- */

  .stack-devtool .sdt-ai-thinking {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 0;
  }

  .stack-devtool .sdt-ai-thinking-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--sdt-accent);
    opacity: 0.5;
    animation: sdt-ai-pulse 1.2s ease-in-out infinite;
  }

  .stack-devtool .sdt-ai-thinking-dot:nth-child(2) { animation-delay: 0.15s; }
  .stack-devtool .sdt-ai-thinking-dot:nth-child(3) { animation-delay: 0.3s; }

  @keyframes sdt-ai-pulse {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.85); }
    40% { opacity: 1; transform: scale(1.1); }
  }

  .stack-devtool .sdt-ai-streaming-indicator {
    display: flex;
    align-items: center;
    gap: 3px;
    margin-top: 6px;
  }

  /* --- Markdown content inside assistant bubble --- */

  .stack-devtool .sdt-ai-paragraph {
    font-size: 13px;
    line-height: 1.6;
    color: var(--sdt-text);
    margin: 0 0 10px;
    word-break: break-word;
  }

  .stack-devtool .sdt-ai-paragraph:last-child { margin-bottom: 0; }

  .stack-devtool .sdt-ai-bold {
    font-weight: 600;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-inline-code {
    display: inline;
    padding: 1.5px 5px;
    border-radius: 4px;
    font-family: var(--sdt-font-mono);
    font-size: 11.5px;
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
    border: 1px solid var(--sdt-border-subtle);
  }

  .stack-devtool .sdt-ai-link {
    color: var(--sdt-info);
    text-decoration: none;
    transition: color 0.1s;
  }

  .stack-devtool .sdt-ai-link:hover {
    color: var(--sdt-accent-hover);
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .stack-devtool .sdt-ai-heading {
    font-weight: 600;
    color: var(--sdt-text);
    margin: 12px 0 6px;
    line-height: 1.35;
  }

  .stack-devtool .sdt-ai-heading:first-child { margin-top: 0; }

  .stack-devtool .sdt-ai-bubble-assistant h1.sdt-ai-heading { font-size: 15px; }
  .stack-devtool .sdt-ai-bubble-assistant h2.sdt-ai-heading { font-size: 13.5px; }
  .stack-devtool .sdt-ai-bubble-assistant h3.sdt-ai-heading { font-size: 13px; }

  .stack-devtool .sdt-ai-list {
    font-size: 13px;
    line-height: 1.6;
    color: var(--sdt-text);
    margin: 0 0 10px;
    padding-left: 20px;
  }

  .stack-devtool .sdt-ai-list:last-child { margin-bottom: 0; }

  .stack-devtool .sdt-ai-list li {
    margin-bottom: 3px;
    padding-left: 2px;
  }

  .stack-devtool .sdt-ai-list li::marker {
    color: var(--sdt-text-tertiary);
  }

  .stack-devtool .sdt-ai-list-ordered {
    list-style-type: decimal;
  }

  .stack-devtool .sdt-ai-tools {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 6px 0;
  }

  .stack-devtool .sdt-ai-part-text {
    margin: 6px 0;
  }

  .stack-devtool .sdt-ai-tool-card {
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-subtle);
    overflow: hidden;
  }

  .stack-devtool .sdt-ai-tool-header {
    width: 100%;
    border: none;
    background: transparent;
    color: inherit;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
    text-align: left;
    font-family: var(--sdt-font);
  }

  .stack-devtool .sdt-ai-tool-header:hover {
    background: var(--sdt-bg-hover);
  }

  .stack-devtool .sdt-ai-tool-name {
    font-size: 12px;
    font-weight: 600;
    color: var(--sdt-text);
    flex: 1;
  }

  .stack-devtool .sdt-ai-tool-status {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
  }

  .stack-devtool .sdt-ai-tool-status-running { color: var(--sdt-warning); }
  .stack-devtool .sdt-ai-tool-status-success { color: var(--sdt-success); }
  .stack-devtool .sdt-ai-tool-status-error { color: var(--sdt-error); }

  .stack-devtool .sdt-ai-tool-chevron {
    color: var(--sdt-text-tertiary);
    font-size: 10px;
    transition: transform 0.15s ease;
  }

  .stack-devtool .sdt-ai-tool-chevron-open {
    transform: rotate(180deg);
  }

  .stack-devtool .sdt-ai-tool-body {
    border-top: 1px solid var(--sdt-border-subtle);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .stack-devtool .sdt-ai-tool-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: var(--sdt-text-tertiary);
    font-weight: 600;
  }

  .stack-devtool .sdt-ai-tool-pre {
    margin: 0;
    padding: 8px;
    border: 1px solid var(--sdt-border-subtle);
    border-radius: var(--sdt-radius-sm);
    background: var(--sdt-bg);
    font-family: var(--sdt-font-mono);
    font-size: 11px;
    line-height: 1.5;
    color: var(--sdt-text-secondary);
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .stack-devtool .sdt-ai-tool-running {
    font-size: 11px;
    color: var(--sdt-text-secondary);
  }

  .stack-devtool .sdt-ai-blockquote {
    border-left: 3px solid var(--sdt-accent);
    padding-left: 12px;
    margin: 8px 0;
    font-size: 13px;
    color: var(--sdt-text-secondary);
    font-style: italic;
  }

  .stack-devtool .sdt-ai-hr {
    border: none;
    border-top: 1px solid var(--sdt-border-subtle);
    margin: 12px 0;
  }

  /* --- Code blocks --- */

  .stack-devtool .sdt-ai-code-block {
    border-radius: var(--sdt-radius);
    overflow: hidden;
    margin: 8px 0;
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-subtle);
  }

  .stack-devtool .sdt-ai-code-block:last-child { margin-bottom: 0; }

  .stack-devtool .sdt-ai-code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-bottom: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
  }

  .stack-devtool .sdt-ai-code-lang {
    font-size: 9px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: var(--sdt-text-tertiary);
    font-family: var(--sdt-font);
  }

  .stack-devtool .sdt-ai-copy-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: var(--sdt-radius-sm);
    border: none;
    background: transparent;
    color: var(--sdt-text-tertiary);
    cursor: pointer;
    font-size: 12px;
    font-family: var(--sdt-font);
    transition: all 0.15s ease;
  }

  .stack-devtool .sdt-ai-copy-btn:hover {
    background: var(--sdt-bg-hover);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-copy-btn-copied {
    color: var(--sdt-success) !important;
  }

  .stack-devtool .sdt-ai-code-pre {
    margin: 0;
    padding: 10px 12px;
    overflow-x: auto;
    font-family: var(--sdt-font-mono);
    font-size: 11.5px;
    line-height: 1.6;
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-code-pre code {
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
  }

  /* --- Error --- */

  .stack-devtool .sdt-ai-error {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 14px;
    margin: 8px 16px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-error-muted);
    border: 1px solid rgba(239, 68, 68, 0.2);
    font-size: 12px;
    color: var(--sdt-error);
    line-height: 1.4;
  }

  /* --- Input area --- */

  .stack-devtool .sdt-ai-input-area {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg);
  }

  .stack-devtool .sdt-ai-new-chat {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--sdt-radius);
    border: 1px solid var(--sdt-border-subtle);
    background: var(--sdt-bg-elevated);
    color: var(--sdt-text-secondary);
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
  }

  .stack-devtool .sdt-ai-new-chat:hover {
    background: var(--sdt-bg-hover);
    border-color: var(--sdt-border);
    color: var(--sdt-text);
  }

  .stack-devtool .sdt-ai-input-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: var(--sdt-radius);
    background: var(--sdt-bg-elevated);
    border: 1px solid var(--sdt-border-subtle);
    padding: 0 4px 0 12px;
    transition: border-color 0.15s ease;
  }

  .stack-devtool .sdt-ai-input-wrapper:focus-within {
    border-color: var(--sdt-accent);
    box-shadow: 0 0 0 2px var(--sdt-accent-muted);
  }

  .stack-devtool .sdt-ai-input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--sdt-text);
    font-size: 13px;
    font-family: var(--sdt-font);
    padding: 8px 0;
    min-width: 0;
  }

  .stack-devtool .sdt-ai-input::placeholder {
    color: var(--sdt-text-tertiary);
  }

  .stack-devtool .sdt-ai-input:disabled {
    opacity: 0.5;
  }

  .stack-devtool .sdt-ai-send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: none;
    background: transparent;
    color: var(--sdt-text-tertiary);
    cursor: not-allowed;
    flex-shrink: 0;
    transition: all 0.15s ease;
    font-family: var(--sdt-font);
  }

  .stack-devtool .sdt-ai-send-btn-active {
    background: var(--sdt-accent);
    color: white;
    cursor: pointer;
  }

  .stack-devtool .sdt-ai-send-btn-active:hover {
    background: var(--sdt-accent-hover);
  }

  .stack-devtool .sdt-ai-stop-btn,
  .stack-devtool .sdt-ai-stop-btn:hover {
    background: var(--sdt-error);
    color: white;
  }

  /* Accessible focus indicator for keyboard navigation */
  .stack-devtool .sdt-tab:focus-visible {
    outline: 2px solid var(--sdt-accent);
    outline-offset: -2px;
    border-radius: var(--sdt-radius);
  }

  /* Reduced motion: disable animations for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    .stack-devtool .sdt-panel-inner,
    .stack-devtool .sdt-panel-exiting,
    .stack-devtool .sdt-tab-content,
    .stack-devtool .sdt-ov-pulse-dot,
    .stack-devtool .sdt-ov-skeleton-pill,
    .stack-devtool .sdt-support-spinner,
    .stack-devtool .sdt-ai-thinking-dot {
      animation: none !important;
    }

    .stack-devtool .sdt-tab-indicator,
    .stack-devtool .sdt-tab {
      transition: none !important;
    }
  }

  /* --- Stack theme explicit overrides (take priority over system preference) --- */
  html:has(head > [data-stack-theme="light"]) .stack-devtool {
    --sdt-bg: #ffffff;
    --sdt-bg-elevated: #f8f8fa;
    --sdt-bg-hover: #f0f0f3;
    --sdt-bg-active: #e8e8ec;
    --sdt-bg-subtle: #fafafa;
    --sdt-border: #e0e0e5;
    --sdt-border-subtle: #eaeaef;
    --sdt-text: #111113;
    --sdt-text-secondary: #6b6b73;
    --sdt-text-tertiary: #9b9ba3;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #4f46e5;
    --sdt-accent-muted: rgba(99, 102, 241, 0.1);
    --sdt-success: #16a34a;
    --sdt-success-muted: rgba(22, 163, 74, 0.1);
    --sdt-warning: #ca8a04;
    --sdt-warning-muted: rgba(202, 138, 4, 0.1);
    --sdt-error: #dc2626;
    --sdt-error-muted: rgba(220, 38, 38, 0.1);
    --sdt-info: #2563eb;
    --sdt-info-muted: rgba(37, 99, 235, 0.1);
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);
  }

  html:has(head > [data-stack-theme="dark"]) .stack-devtool {
    --sdt-bg: #0a0a0b;
    --sdt-bg-elevated: #141416;
    --sdt-bg-hover: #1c1c1f;
    --sdt-bg-active: #232326;
    --sdt-bg-subtle: #111113;
    --sdt-border: #2a2a2e;
    --sdt-border-subtle: #1e1e22;
    --sdt-text: #ececef;
    --sdt-text-secondary: #8b8b93;
    --sdt-text-tertiary: #5c5c66;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #818cf8;
    --sdt-accent-muted: rgba(99, 102, 241, 0.15);
    --sdt-success: #22c55e;
    --sdt-success-muted: rgba(34, 197, 94, 0.15);
    --sdt-warning: #eab308;
    --sdt-warning-muted: rgba(234, 179, 8, 0.15);
    --sdt-error: #ef4444;
    --sdt-error-muted: rgba(239, 68, 68, 0.15);
    --sdt-info: #3b82f6;
    --sdt-info-muted: rgba(59, 130, 246, 0.15);
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
`;function tT(e,t,r){return Math.max(t,Math.min(e,r))}function tS(e,t,r){let a=Math.max(0,t.width-e.width),s=Math.max(0,t.height-e.height),i=Math.min(r,a),n=Math.max(i,a-r),o=Math.min(r,s);return{maxLeft:a,maxTop:s,minSnapLeft:i,maxSnapLeft:n,minSnapTop:o,maxSnapTop:Math.max(o,s-r)}}function tx(e,t,r){let{maxLeft:a,maxTop:s}=tS(t,r,16);return{left:tT(e.left,0,a),top:tT(e.top,0,s)}}function tA(e,t,r){let a=tx(e,t,r),s=tS(t,r,16),i=[{side:"left",offset:a.top},{side:"right",offset:a.top},{side:"top",offset:a.left},{side:"bottom",offset:a.left}];function n(e){switch(e.side){case"left":return Math.abs(a.left-s.minSnapLeft);case"right":return Math.abs(a.left-s.maxSnapLeft);case"top":return Math.abs(a.top-s.minSnapTop);case"bottom":return Math.abs(a.top-s.maxSnapTop)}}let o=i[0],l=n(o);for(let e of i.slice(1)){let t=n(e);t<l&&(o=e,l=t)}return o}function tE(e,t,r){let a=tS(t,r,16);switch(e.side){case"left":return{left:a.minSnapLeft,top:tT(e.offset,0,a.maxTop)};case"right":return{left:a.maxSnapLeft,top:tT(e.offset,0,a.maxTop)};case"top":return{left:tT(e.offset,0,a.maxLeft),top:a.minSnapTop};case"bottom":return{left:tT(e.offset,0,a.maxLeft),top:a.maxSnapTop}}}let tI="__stack-dev-tool-state",tP="stack-devtool-trigger-position",tR=[{id:"overview",label:"Overview",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>'},{id:"components",label:"Components",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'},{id:"ai",label:"AI",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'},{id:"console",label:"Console",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>'},{id:"docs",label:"Docs",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>'},{id:"dashboard",label:"Dashboard",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'},{id:"support",label:"Support",icon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'}],tO={isOpen:!1,activeTab:"overview",consoleSubTab:"logs",panelWidth:800,panelHeight:520},tN=0;function tU(){return`sdt-${++tN}-${Date.now()}`}function tj(e){return W(e[y.stackAppInternalsSymbol].getConstructorOptions().baseUrl)}function tD(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3})}function tL(e,t,...r){let a=document.createElement(e);if(t)for(let[e,r]of Object.entries(t))null!=r&&("className"===e?a.className=r:"style"===e&&"object"==typeof r?Object.assign(a.style,r):e.startsWith("on")&&"function"==typeof r?a.addEventListener(e.slice(2).toLowerCase(),r):a.setAttribute(e,String(r)));for(let e of r)null!=e&&a.appendChild("string"==typeof e?document.createTextNode(e):e);return a}function t$(e,t){e.innerHTML=t}function tF(e,t){let r,a=/(\[[^\]]+\]\([^)]+\)|`[^`\n]+`|\*\*[^*\n]+\*\*|__[^_\n]+__|\*[^*\n]+\*|_[^_\n]+_)/g,s=0;for(;null!==(r=a.exec(t));){r.index>s&&e.appendChild(document.createTextNode(t.slice(s,r.index)));let i=r[0];if(i.startsWith("`"))e.appendChild(tL("code",{className:"sdt-ai-inline-code"},i.slice(1,-1)));else if(i.startsWith("**")||i.startsWith("__")){let t=tL("strong",{className:"sdt-ai-bold"});tF(t,i.slice(2,-2)),e.appendChild(t)}else if(i.startsWith("*")||i.startsWith("_")){let t=tL("em");tF(t,i.slice(1,-1)),e.appendChild(t)}else{let t=i.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(t){let[,r,a]=t,s=a.trim();if(/^(https?:\/\/|mailto:)/i.test(s)){let t=tL("a",{className:"sdt-ai-link",href:s,target:"_blank",rel:"noopener noreferrer"});tF(t,r),e.appendChild(t)}else e.appendChild(document.createTextNode(i))}else e.appendChild(document.createTextNode(i))}s=a.lastIndex}s<t.length&&e.appendChild(document.createTextNode(t.slice(s)))}function tM(e,t,r,a){let s=a?.variant??"bar",i="pills"===s?"sdt-console-tab":"sdt-tab",n=tL("div",{className:"pills"===s?"sdt-console-tabs":"sdt-tabbar"}),o=tL("div",{className:"pills"===s?"sdt-console-tab-indicator":"sdt-tab-indicator"});o.style.opacity="0",n.appendChild(o);let l=t,c=!0,d=e.map(e=>{let a=tL("button",{className:i,"data-tab-id":e.id,"data-active":String(e.id===t)});if(e.icon){let t=tL("span",{className:"sdt-tab-icon"});t$(t,e.icon),a.appendChild(t)}return a.appendChild(document.createTextNode(e.label)),a.addEventListener("click",()=>r(e.id)),n.appendChild(a),a});function u(){let e=n.querySelector(`[data-tab-id="${l}"]`);e&&(o.style.transform=`translateX(${e.offsetLeft}px)`,o.style.width=e.offsetWidth+"px",o.style.height=e.offsetHeight+"px",o.style.opacity="1",o.style.transition=c?"none":"",c=!1)}return"bar"===s&&n.appendChild(tL("div",{className:"sdt-tabbar-spacer"})),a?.trailing&&n.appendChild(a.trailing),new ResizeObserver(u).observe(n),requestAnimationFrame(u),{el:n,setActive:function(e){l=e,d.forEach(t=>{let r=t.getAttribute("data-tab-id");t.setAttribute("data-active",String(r===e))}),u()}}}function tB(e,t,r="Loading…",a="Unable to load content",s){let i=tL("div",{className:"sdt-iframe-container"}),n=tL("div",{className:"sdt-iframe-loading"},r);i.appendChild(n);let o=document.createElement("iframe");return o.src=e,o.title=t,o.setAttribute("sandbox","allow-scripts allow-same-origin allow-popups allow-forms"),o.style.display="none",o.addEventListener("load",()=>{n.style.display="none",o.style.display="block"}),o.addEventListener("error",()=>{n.style.display="none",i.innerHTML="";let o=tL("div",{className:"sdt-iframe-error"});o.appendChild(tL("div",null,a)),s&&o.appendChild(tL("div",{style:{fontSize:"12px",color:"var(--sdt-text-tertiary)"}},s));let l=tL("button",{className:"sdt-iframe-error-btn"},"Retry");l.addEventListener("click",()=>{i.innerHTML="",i.appendChild(tB(e,t,r,a,s))}),o.appendChild(l);let c=tL("a",{href:e,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--sdt-accent)",fontSize:"12px",textDecoration:"none"}},"Open in new tab");o.appendChild(c),i.appendChild(o)}),i.appendChild(o),i}let tK="__stack-dev-tool-override";function tq(){var e;return!("u"<typeof window)&&!("u"<typeof document)&&"function"==typeof document.createElement&&"object"==typeof(e=Reflect.get(document,"body"))&&null!==e&&"function"==typeof Reflect.get(e,"appendChild")}function tV(){let e=function(){try{let e=localStorage.getItem(tK);if("true"===e)return!0;if("false"===e)return!1}catch{}return null}();return null!==e?e:!!tq()&&(0,m.isLocalhost)(window.location.href)}let tH=null,tW=null;function tz(){tH&&(tH(),tH=null),tV()&&tW&&tq()&&(tH=function(e){let t,r,a;if("u"<typeof document||"function"!=typeof document.createElement)return()=>{};let s=Reflect.get(document,"body");if("object"!=typeof s||null===s||"function"!=typeof Reflect.get(s,"appendChild"))return()=>{};let i=document.createElement("div");i.id="__stack-dev-tool-root",s.appendChild(i);let n=tL("div",{className:"stack-devtool"});i.appendChild(n);let l=document.createElement("style");l.textContent=tC,n.appendChild(l);let c=(t=function(){try{let e=localStorage.getItem(tI);if(e)return{...tO,...JSON.parse(e)}}catch{}return{...tO}}(),r=new Set,{get:()=>t,update(e){var a=t={...t,...e};try{localStorage.setItem(tI,JSON.stringify(a))}catch{}r.forEach(e=>e())},subscribe:e=>(r.add(e),()=>{r.delete(e)})}),d=((a=globalThis).__STACK_DEV_TOOL_LOG_STORE__||(a.__STACK_DEV_TOOL_LOG_STORE__={apiLogs:[],eventLogs:[],listeners:new Set,addApiLog(e){this.apiLogs=[e,...this.apiLogs].slice(0,500),this.listeners.forEach(e=>e())},addEventLog(e){this.eventLogs=[e,...this.eventLogs].slice(0,500),this.listeners.forEach(e=>e())},clear(){this.apiLogs=[],this.eventLogs=[],this.listeners.forEach(e=>e())},subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}}),a.__STACK_DEV_TOOL_LOG_STORE__),u=null;function p(){u||(u=function(e,t,r,a){let s=tL("div",{className:"sdt-panel"});s.style.width=t.get().panelWidth+"px",s.style.height=t.get().panelHeight+"px";let i=tL("div",{className:"sdt-panel-inner"}),n=tL("button",{className:"sdt-close-btn","aria-label":"Close"});t$(n,'<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="3" x2="11" y2="11"/><line x1="11" y1="3" x2="3" y2="11"/></svg>'),n.addEventListener("click",a);let l=tM(tR,t.get().activeTab,e=>{t.update({activeTab:e}),f(e)},{trailing:n});i.appendChild(l.el);let c=tL("div",{className:"sdt-content"}),d=tL("div",{className:"sdt-tab-layers"});c.appendChild(d),i.appendChild(c);let u=new Map,p=[];function h(e,t){"element"in t?(e.appendChild(t.element),t.cleanup&&p.push(t.cleanup)):e.appendChild(t)}function f(a){let s=function(a){if(u.has(a))return u.get(a);let s=tL("div",{className:"sdt-tab-pane"});switch(a){case"overview":h(s,function(e){let t=tL("div",{className:"sdt-ov"}),r=tj(e),a=tL("div",{className:"sdt-ov-card sdt-ov-card-hero"});a.appendChild(tL("div",{className:"sdt-ov-label"},"Identity"));let s=tL("div",{className:"sdt-ov-user-row"}),i=tL("div",{className:"sdt-ov-avatar"},"?"),n=tL("div",{className:"sdt-ov-user-meta"}),l=tL("div",{className:"sdt-ov-user-name"},"Loading…"),c=tL("div",{className:"sdt-ov-user-email"},""),d=tL("div",{className:"sdt-ov-auth-indicator",style:{display:"none"}},"Authenticated");n.append(l,c,d),s.append(i,n),a.appendChild(s);let u=tL("div",{className:"sdt-ov-actions"}),p=tL("div",{className:"sdt-ov-toast",style:{display:"none"}}),h=tL("div",{className:"sdt-ov-email-input"}),f=tL("input",{type:"email",placeholder:"Sign in as email…"}),g=tL("button",null);function y(e,t){p.textContent=e,p.className=`sdt-ov-toast sdt-ov-toast-${t}`,p.style.display="",setTimeout(()=>{p.style.display="none"},4e3)}t$(g,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'),h.append(f,g);let v=null,_=!1;function w(){if(u.innerHTML="",v){let e=tL("button",{className:"sdt-ov-btn sdt-ov-btn-danger"},"Sign Out");e.disabled=_,e.addEventListener("click",()=>{(0,o.runAsynchronously)(async()=>{_=!0,w();try{await v.signOut(),y("Signed out","success")}catch(e){y(e.message||"Sign out failed","error")}_=!1,await C()})});let t=tL("button",{className:"sdt-ov-btn sdt-ov-btn-primary"},"Random User");t.disabled=_,t.addEventListener("click",()=>{(0,o.runAsynchronously)(b())}),u.append(e,t)}else{let e=tL("button",{className:"sdt-ov-btn sdt-ov-btn-primary sdt-ov-btn-wide"},_?"Working…":"Quick Sign In");e.disabled=_,e.addEventListener("click",()=>{(0,o.runAsynchronously)(b())}),u.appendChild(e)}f.placeholder=v?"Switch to email…":"Sign in as email…",u.appendChild(h)}async function b(){if(!(0,m.isLocalhost)(window.location.href))return void y("Quick sign-in is only available on localhost","error");_=!0,w();let t=function(){let e="";for(let t=0;t<8;t++)e+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())];return`dev-${e}@test.stack-auth.com`}();try{let r=await e.signUpWithCredential({email:t,password:t,noRedirect:!0});if("error"===r.status){y(`Sign up failed: ${r.error.message}`,"error"),_=!1,w();return}let a=await e.signInWithCredential({email:t,password:t,noRedirect:!0});"error"===a.status?y(`Sign in failed: ${a.error.message}`,"error"):y(`Signed in as ${t}`,"success")}catch(e){y(e.message||"Unknown error","error")}_=!1,await C()}async function k(t){if(!t.trim())return;if(!(0,m.isLocalhost)(window.location.href))return void y("Quick sign-in is only available on localhost","error");_=!0,w();let r=t.trim();try{if("ok"===(await e.signInWithCredential({email:r,password:r,noRedirect:!0})).status){y(`Signed in as ${r}`,"success"),f.value="",_=!1,await C();return}let t=await e.signUpWithCredential({email:r,password:r,noRedirect:!0});if("error"===t.status){y(`Failed: ${t.error.message}`,"error"),_=!1,w();return}let a=await e.signInWithCredential({email:r,password:r,noRedirect:!0});"error"===a.status?y(`Sign in failed: ${a.error.message}`,"error"):(y(`Signed in as ${r}`,"success"),f.value="")}catch(e){y(e.message||"Unknown error","error")}_=!1,await C()}async function C(){try{v=await e.getUser()}catch{v=null}if(v){let e=(v.displayName||v.primaryEmail||"?").split(" ").map(e=>e[0]).join("").slice(0,2).toUpperCase();(i.className="sdt-ov-avatar sdt-ov-avatar-active",v.profileImageUrl)?i.innerHTML=`<img src="${v.profileImageUrl.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}" alt="" />`:i.textContent=e,l.textContent=v.displayName||"Anonymous",c.textContent=v.primaryEmail||"No email",d.style.display=""}else i.className="sdt-ov-avatar",i.textContent="?",l.textContent="No user signed in",c.textContent="Sign in to test auth flows",d.style.display="none";w(),L()}g.addEventListener("click",()=>{(0,o.runAsynchronously)(k(f.value))}),f.addEventListener("keydown",e=>{"Enter"===e.key&&(0,o.runAsynchronously)(k(f.value))}),a.append(u,p),(0,o.runAsynchronously)(C());let T=setInterval(()=>{(0,o.runAsynchronously)(C())},3e3),S=tL("div",{className:"sdt-ov-card sdt-ov-card-project"});S.appendChild(tL("div",{className:"sdt-ov-label"},"Project"));let x=tL("div",{className:"sdt-ov-project-rows"}),A=e.version,E=e.projectId;function I(e,t){let r=tL("div",{className:"sdt-ov-project-row"});r.appendChild(tL("span",{className:"sdt-ov-project-key"},e));let a=tL("span",{className:"sdt-ov-project-val"});"string"==typeof t?a.textContent=t:a.appendChild(t),r.appendChild(a),x.appendChild(r)}let P=tL("span",null,A||"?");I("SDK",P);let R=A.match(/(@[\w-]+\/[\w-]+)@(\d+\.\d+\.\d+)/);R&&(0,o.runAsynchronously)(fetch(`https://registry.npmjs.org/${R[1]}/latest`).then(e=>e.json()).then(e=>{if(e.version){let t=R[2].split(".").map(Number),r=e.version.split(".").map(Number),a=!1;for(let e=0;e<3;e++)if(t[e]!==r[e]){a=t[e]<r[e];break}if(a){let t=tL("span",{className:"sdt-ov-sdk-badge",title:`Latest: ${e.version}`},"Outdated");P.parentElement.appendChild(t)}}})),I("Project ID",tL("span",{className:"sdt-ov-project-val-mono"},E||"N/A"));let O=tL("span",{className:"sdt-ov-env-val"}),N=tL("span",{className:"sdt-ov-pulse-dot"});O.append(N,tL("span",null,"Development")),I("Environment",O),S.appendChild(x);let U=tL("div",{className:"sdt-ov-card sdt-ov-card-auth"});U.appendChild(tL("div",{className:"sdt-ov-label"},"Config"));let j=tL("div",{className:"sdt-ov-auth-grid"});for(let e=0;e<3;e++)j.appendChild(tL("div",{className:"sdt-ov-method sdt-ov-skeleton-pill"}));U.appendChild(j),(0,o.runAsynchronously)(e.getProject().then(e=>{j.innerHTML="";let t=e.config;for(let e of[{label:"Password",enabled:t.credentialEnabled},{label:"Magic Link",enabled:t.magicLinkEnabled},{label:"Passkey",enabled:t.passkeyEnabled}]){let t=tL("div",{className:`sdt-ov-method ${e.enabled?"sdt-ov-method-on":"sdt-ov-method-off"}`});t.appendChild(tL("span",{className:"sdt-ov-method-name"},e.label)),j.appendChild(t)}for(let e of t.oauthProviders){let t=tL("div",{className:"sdt-ov-method sdt-ov-method-on sdt-ov-method-oauth"});t.appendChild(tL("span",{className:"sdt-ov-method-name"},e.id)),j.appendChild(t)}if(!t.signUpEnabled){let e=tL("div",{className:"sdt-ov-method sdt-ov-method-warn"});e.appendChild(tL("span",{className:"sdt-ov-method-name"},"Sign-up off")),j.appendChild(e)}}).catch(()=>{j.innerHTML='<div style="font-size:11px;color:var(--sdt-text-tertiary)">Could not load config</div>'}));let D=tL("div",{className:"sdt-ov-card sdt-ov-card-checks"});function L(){D.innerHTML="";let e=[{ok:!!E&&"default"!==E,label:"Project"},{ok:!0,label:"Provider"},{ok:!!v,label:"Auth"}],t=e.filter(e=>e.ok).length,r=t===e.length;r?D.classList.add("sdt-ov-card-checks-ok"):D.classList.remove("sdt-ov-card-checks-ok");let a=tL("div",{className:"sdt-ov-checks-header"});a.appendChild(tL("div",{className:"sdt-ov-label",style:{marginBottom:"0"}},"Setup")),a.appendChild(tL("span",{className:`sdt-ov-checks-badge ${r?"sdt-ov-checks-badge-ok":"sdt-ov-checks-badge-warn"}`},r?"All good":`${t}/${e.length}`)),D.appendChild(a);let s=tL("div",{className:"sdt-ov-checks-bar"}),i=tL("div",{className:"sdt-ov-checks-bar-fill"});i.style.width=`${t/e.length*100}%`,s.appendChild(i),D.appendChild(s);let n=tL("div",{className:"sdt-ov-checks"});for(let t of e){let e=tL("div",{className:`sdt-ov-check ${t.ok?"sdt-ov-check-ok":"sdt-ov-check-warn"}`});e.appendChild(tL("span",{className:"sdt-ov-check-icon"},t.ok?"✓":"!")),e.appendChild(tL("span",{className:"sdt-ov-check-label"},t.label)),n.appendChild(e)}D.appendChild(n)}L();let $=tL("div",{className:"sdt-ov-card sdt-ov-card-changelog"});$.appendChild(tL("div",{className:"sdt-ov-label"},"What's New"));let F="/api/latest/internal/changelog",M=tL("div",{className:"sdt-ov-changelog-content"});M.innerHTML='<div style="padding:12px 0;color:var(--sdt-text-tertiary);font-size:12px">Loading changelog...</div>',$.appendChild(M),(0,o.runAsynchronously)((async()=>{let e=[];try{let t=await fetch(r+F);t.ok&&(e=(await t.json()).entries??[])}catch{}if(0===e.length)try{let t=await fetch("https://api.stack-auth.com"+F);t.ok&&(e=(await t.json()).entries??[])}catch{}if(M.innerHTML="",0===e.length){M.innerHTML='<div style="padding:12px 0;color:var(--sdt-text-tertiary);font-size:12px">Could not load changelog.</div>';return}let t=tL("div",{className:"sdt-ov-changelog"}),a=e[0]?.version??null;!function r(){for(let s of(t.innerHTML="",e.slice(0,5))){let e=a===s.version,i=tL("div",{className:"sdt-ov-release"}),n=tL("div",{className:"sdt-ov-release-head",style:{cursor:"pointer"}});n.textContent=s.version,s.releasedAt&&n.appendChild(tL("span",{className:"sdt-ov-release-date"},s.releasedAt));let o=tL("span",{style:{marginLeft:"auto",fontSize:"10px",color:"var(--sdt-text-tertiary)"}},e?"▲":"▼");if(n.appendChild(o),n.addEventListener("click",()=>{a=e?null:s.version,r()}),i.appendChild(n),e&&s.markdown){let e=tL("div",{className:"sdt-ov-release-body",style:{padding:"4px 0 8px"}});for(let t of s.markdown.split("\n")){let r=t.trim();if(""===r)continue;let a=function(e){let t=e.trim().match(/^!\[([^\]]*)\]\((.+)\)$/);if(!t)return null;let[,r,a]=t,s=a.trim();return""===s?null:{alt:r.trim(),src:s}}(r);if(a){let t=tL("figure",{className:"sdt-ov-release-image-figure"}),r=tL("a",{className:"sdt-ov-release-image-link",href:a.src,target:"_blank",rel:"noopener noreferrer"});r.appendChild(tL("img",{className:"sdt-ov-release-image",src:a.src,alt:a.alt,loading:"lazy",decoding:"async"})),t.appendChild(r),""!==a.alt&&t.appendChild(tL("figcaption",{className:"sdt-ov-release-image-caption"},a.alt)),e.appendChild(t);continue}let s=t.match(/^###\s+(.+)/);if(s){let t=tL("div",{style:{fontWeight:"600",color:"var(--sdt-text)",marginTop:"8px",marginBottom:"4px",fontSize:"12px"}});tF(t,s[1]),e.appendChild(t);continue}if(t.startsWith("- ")){let r=tL("div",{style:{fontSize:"12px",color:"var(--sdt-text-secondary)",lineHeight:"1.6",paddingLeft:"12px"}});r.appendChild(document.createTextNode("• ")),tF(r,t.slice(2)),e.appendChild(r);continue}let i=tL("div",{style:{fontSize:"12px",color:"var(--sdt-text-secondary)",lineHeight:"1.6"}});tF(i,t),e.appendChild(i)}i.appendChild(e)}t.appendChild(i)}}(),M.appendChild(t)})());let B=tL("a",{className:"sdt-ov-all-releases",href:"https://github.com/stack-auth/stack/releases",target:"_blank",rel:"noopener noreferrer"});return t$(B,'All releases <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>'),$.appendChild(B),t.append(a,S,U,D,$),{element:t,cleanup:()=>clearInterval(T)}}(e));break;case"components":h(s,function(e){let t,r,a=tL("div",{className:"sdt-pg-layout"}),s=tj(e),i=e.urls,n=e[y.stackAppInternalsSymbol].getConstructorOptions().urls??{},l=[{key:"signIn",label:"Sign-in"},{key:"signUp",label:"Sign-up"},{key:"forgotPassword",label:"Forgot password"},{key:"passwordReset",label:"Password reset"},{key:"emailVerification",label:"Email verification"},{key:"accountSettings",label:"Account settings"},{key:"teamInvitation",label:"Team invitation"},{key:"mfa",label:"MFA"},{key:"onboarding",label:"Onboarding"},{key:"error",label:"Error"}],c={"handler-component":"Handler",hosted:"Hosted",custom:"Custom"},d={"handler-component":"sdt-pg-badge-handler",hosted:"sdt-pg-badge-hosted",custom:"sdt-pg-badge-custom"},u=null,p=null;(0,o.runAsynchronously)(fetch(`${s}/api/latest/internal/component-versions`).then(e=>e.json()).then(e=>{u=new Map(Object.entries(e.versions??{})),f()}).catch(()=>{}));let h=tL("div",{className:"sdt-pg-sidebar"}),m=tL("div",{className:"sdt-pg-main"});function f(){h.innerHTML="";let e=l.map(e=>{let t,{classification:r,version:a}="string"==typeof(t=n[e.key]??n.default??{type:"handler-component"})?{classification:"custom",version:null}:"type"in t?"custom"===t.type?{classification:"custom",version:t.version??null}:{classification:t.type,version:null}:{classification:"handler-component",version:null},s="current",o=[];if("custom"===r&&null!=a&&u){let t=u.get(e.key);t&&a<t.version&&(s="outdated",o=Object.entries(t.changelogs).map(([e,t])=>({version:Number(e),changelog:t})).filter(e=>e.version>a).sort((e,t)=>e.version-t.version))}return{key:e.key,label:e.label,url:i[e.key]||"",classification:r,version:a,versionStatus:s,versionChangelogs:o}}),t=e.filter(e=>"outdated"===e.versionStatus).length,r=tL("div",{className:"sdt-pg-sidebar-head"});r.appendChild(tL("span",{className:"sdt-pg-sidebar-title"},"Pages")),r.appendChild(tL("span",{className:"sdt-pg-sidebar-count"},String(e.length))),t>0&&r.appendChild(tL("span",{className:"sdt-pg-sidebar-warn"},`${t} outdated`)),h.appendChild(r);let a=tL("div",{className:"sdt-pg-list"});for(let t of e){let e="outdated"===t.versionStatus,r=tL("div",{className:`sdt-pg-item ${e?"sdt-pg-item-warn":""}`,"data-selected":String(p===t.key)}),s=e?"sdt-pg-item-dot-warn":"custom"===t.classification?"sdt-pg-item-dot-custom":"sdt-pg-item-dot-handler";r.appendChild(tL("span",{className:`sdt-pg-item-dot ${s}`})),r.appendChild(tL("span",{className:"sdt-pg-item-label"},t.label)),e?r.appendChild(tL("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")):r.appendChild(tL("span",{className:`sdt-pg-badge ${d[t.classification]}`},c[t.classification])),r.addEventListener("click",()=>{p=t.key,f(),function(e){m.innerHTML="";let t=tL("div",{className:"sdt-pg-detail"}),r=tL("div",{className:"sdt-pg-header"}),a=tL("div",{className:"sdt-pg-header-top"});a.appendChild(tL("h3",{className:"sdt-pg-title"},`${e.label} Page`)),"outdated"===e.versionStatus&&a.appendChild(tL("span",{className:"sdt-pg-badge sdt-pg-badge-outdated"},"Outdated")),a.appendChild(tL("span",{className:`sdt-pg-badge ${d[e.classification]}`},c[e.classification])),r.appendChild(a);let s=`stackApp.redirectTo${e.key.charAt(0).toUpperCase()}${e.key.slice(1)}()`,i=tL("div",{className:"sdt-pg-code-inline"});i.appendChild(tL("code",{className:"sdt-pg-code"},s));let n=tL("button",{className:"sdt-pg-copy-btn"},"View");n.addEventListener("click",()=>{let t=new URL(e.url,window.location.origin);t.origin===window.location.origin?window.location.href=t.toString():window.open(t.toString(),"_blank","noopener,noreferrer")}),i.appendChild(n),r.appendChild(i),t.appendChild(r);let l=j(e.key,e.version??void 0);if(l){let r="outdated"===e.versionStatus;if("handler-component"===e.classification||"hosted"===e.classification||r){let e;if(e=r&&l.upgradePrompt?l.upgradePrompt:l.fullPrompt?l.fullPrompt:""){let a=tL("div",{className:"sdt-pg-section"});a.appendChild(tL("div",{className:"sdt-pg-section-label"},r?"Use this prompt to upgrade your component:":"Customization prompt:")),a.appendChild(tL("pre",{className:"sdt-pg-pre"},e));let s=tL("div",{className:"sdt-pg-section-footer"}),i=tL("button",{className:"sdt-pg-copy-btn"},"Copy prompt");i.addEventListener("click",()=>{(0,o.runAsynchronously)(navigator.clipboard.writeText(e).then(()=>{i.textContent="✓ Copied",setTimeout(()=>{i.textContent="Copy prompt"},1500)}))}),s.appendChild(i),a.appendChild(s),t.appendChild(a)}}}let u=tL("div",{className:"sdt-pg-url-row"});u.appendChild(tL("span",{className:"sdt-pg-url-label"},"URL")),u.appendChild(tL("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"sdt-pg-url"},e.url)),t.appendChild(u),m.appendChild(t)}(t)}),a.appendChild(r)}h.appendChild(a)}return f(),m.innerHTML="",t=tL("div",{className:"sdt-pg-empty"}),t$(r=tL("div",{className:"sdt-pg-empty-icon"}),'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>'),t.appendChild(r),t.appendChild(tL("div",{className:"sdt-pg-empty-text"},"Select a page to inspect")),t.appendChild(tL("div",{className:"sdt-pg-empty-sub"},"View configuration, preview, and upgrade prompts")),m.appendChild(t),a.append(h,m),a}(e));break;case"ai":h(s,function(e){let t=tL("div",{className:"sdt-ai-container"}),r=tj(e),a=[],s=!1,i=null,n=tL("div",{className:"sdt-ai-messages"}),l=tL("div",{className:"sdt-ai-input-area"}),c=[{icon:"🔒",text:"How do I protect a Next.js route?"},{icon:"👥",text:"How do teams and permissions work?"},{icon:"🔗",text:"How do I add OAuth providers?"},{icon:"✉️",text:"How do I customize auth emails?"}];function d(){if(n.innerHTML="",0===a.length){let e=tL("div",{className:"sdt-ai-empty"}),t=tL("div",{className:"sdt-ai-empty-icon"});t$(t,'<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),e.appendChild(t),e.appendChild(tL("div",{className:"sdt-ai-empty-title"},"Ask AI")),e.appendChild(tL("div",{className:"sdt-ai-empty-desc"},"Get help with Stack Auth integration, troubleshooting, and best practices."));let r=tL("div",{className:"sdt-ai-suggestions"});for(let e of c){let t=tL("button",{className:"sdt-ai-suggestion"});t.appendChild(tL("span",{className:"sdt-ai-suggestion-icon"},e.icon)),t.appendChild(tL("span",null,e.text)),t.addEventListener("click",()=>{(0,o.runAsynchronously)(v(e.text))}),r.appendChild(t)}e.appendChild(r),n.appendChild(e);return}let e=tL("div",{className:"sdt-ai-message-list"});for(let t of a)if("user"===t.role){let r=tL("div",{className:"sdt-ai-msg sdt-ai-msg-user"}),a=tL("div",{className:"sdt-ai-bubble sdt-ai-bubble-user"});a.appendChild(tL("p",null,t.content)),r.appendChild(a);let s=tL("div",{className:"sdt-ai-avatar sdt-ai-avatar-user"});t$(s,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'),r.appendChild(s),e.appendChild(r)}else{let r=tL("div",{className:"sdt-ai-msg sdt-ai-msg-assistant"}),a=tL("div",{className:"sdt-ai-avatar sdt-ai-avatar-assistant"});t$(a,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'),r.appendChild(a);let s=tL("div",{className:"sdt-ai-bubble sdt-ai-bubble-assistant"});if(0===t.parts.length)s.innerHTML='<div class="sdt-ai-thinking"><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span><span class="sdt-ai-thinking-dot"></span></div>';else for(let e of t.parts){if("text"===e.type){let t=tL("div",{className:"sdt-ai-part-text"});(function(e,t){function r(t,r,a){let s=tL(t,{className:r});tF(s,a),e.appendChild(s)}let a=t.split("\n"),s=0;for(;s<a.length;){let t=a[s];if(t.startsWith("```")){let r=t.slice(3).trim(),i=[];for(s++;s<a.length&&!a[s].startsWith("```");)i.push(a[s]),s++;s++;let n=tL("div",{className:"sdt-ai-code-block"}),l=tL("div",{className:"sdt-ai-code-header"});l.appendChild(tL("span",{className:"sdt-ai-code-lang"},r||"CODE"));let c=tL("button",{className:"sdt-ai-copy-btn"},"⎘"),d=i.join("\n");c.addEventListener("click",()=>{(0,o.runAsynchronously)(navigator.clipboard.writeText(d).then(()=>{c.textContent="✓",setTimeout(()=>{c.textContent="⎘"},1500)}))}),l.appendChild(c),n.appendChild(l);let u=tL("pre",{className:"sdt-ai-code-pre"});u.appendChild(tL("code",null,d)),n.appendChild(u),e.appendChild(n);continue}let i=t.match(/^(#{1,3}) (.+)/);if(i){r(`h${i[1].length}`,"sdt-ai-heading",i[2]),s++;continue}if(/^[-*] /.test(t)){let t=tL("ul",{className:"sdt-ai-list"});for(;s<a.length&&/^[-*] /.test(a[s]);){let e=tL("li");tF(e,a[s].replace(/^[-*] /,"")),t.appendChild(e),s++}e.appendChild(t);continue}if(/^\d+\. /.test(t)){let t=tL("ol",{className:"sdt-ai-list sdt-ai-list-ordered"});for(;s<a.length&&/^\d+\. /.test(a[s]);){let e=tL("li");tF(e,a[s].replace(/^\d+\. /,"")),t.appendChild(e),s++}e.appendChild(t);continue}if(""===t.trim()){s++;continue}r("p","sdt-ai-paragraph",t),s++}})(t,e.content),s.appendChild(t);continue}let r=t.toolCallsById.get(e.toolCallId);if(null==r){let t=tL("div",{className:"sdt-ai-tool-card"}),r=tL("div",{className:"sdt-ai-tool-body"});r.appendChild(tL("div",{className:"sdt-ai-tool-label"},"Error"));let a=tL("pre",{className:"sdt-ai-tool-pre"});a.appendChild(tL("code",null,`Missing tool call state for ${e.toolCallId}`)),r.appendChild(a),t.appendChild(r),s.appendChild(t);continue}let a=tL("div",{className:"sdt-ai-tools"});a.appendChild(function(e){let t=tL("div",{className:"sdt-ai-tool-card"}),r=tL("button",{className:"sdt-ai-tool-header",type:"button"});if(r.appendChild(tL("span",{className:"sdt-ai-tool-name"},e.toolName)),r.appendChild(tL("span",{className:`sdt-ai-tool-status sdt-ai-tool-status-${e.state}`},e.state)),r.appendChild(tL("span",{className:`sdt-ai-tool-chevron${e.isExpanded?" sdt-ai-tool-chevron-open":""}`},"▾")),r.addEventListener("click",()=>{e.isExpanded=!e.isExpanded,d()}),t.appendChild(r),e.isExpanded){let r=tL("div",{className:"sdt-ai-tool-body"});if(null!==e.argsText){r.appendChild(tL("div",{className:"sdt-ai-tool-label"},"Args"));let t=tL("pre",{className:"sdt-ai-tool-pre"});t.appendChild(tL("code",null,e.argsText)),r.appendChild(t)}if(null!==e.resultText){r.appendChild(tL("div",{className:"sdt-ai-tool-label"},"error"===e.state?"Error":"Result"));let t=tL("pre",{className:"sdt-ai-tool-pre"});t.appendChild(tL("code",null,e.resultText)),r.appendChild(t)}"running"===e.state&&r.appendChild(tL("div",{className:"sdt-ai-tool-running"},"Running...")),t.appendChild(r)}return t}(r)),s.appendChild(a)}r.appendChild(s),e.appendChild(r)}n.appendChild(e),n.scrollTop=n.scrollHeight}function u(e){return void 0===e||"function"==typeof e||"symbol"==typeof e?String(e):JSON.stringify(e,null,2)}function p(e){return e.length>0?e[e.length-1]:void 0}function h(e,t,r){let a=e[t];if("string"!=typeof a)throw Error(`SSE event '${String(e.type)}' missing string '${t}': ${r}`);return a}function m(){let e=p(a);if(e?.role!=="assistant")throw Error("Expected current message to be an assistant message");return e}function f(e,t){e.parts.some(e=>"tool"===e.type&&e.toolCallId===t)||e.parts.push({type:"tool",toolCallId:t})}function g(e,t){let r=m(),a=r.toolCallsById.get(e);if(null!=a)return"tool"===a.toolName&&"tool"!==t&&(a.toolName=t),f(r,e),a;let s={id:e,toolName:t,argsText:null,resultText:null,state:"running",errorText:null,isExpanded:!1};return r.toolCallsById.set(e,s),f(r,e),s}async function v(t){if(t.trim()&&!s){a.push({role:"user",content:t.trim()}),a.push({role:"assistant",parts:[],toolCallsById:new Map}),s=!0,d(),k();try{let t,s,n=new AbortController;i=n;let o=await fetch(`${r}/api/latest/ai/query/stream`,{method:"POST",headers:{"Content-Type":"application/json",...(t=e[y.stackAppInternalsSymbol].getConstructorOptions(),s={"X-Stack-Access-Type":"client","X-Stack-Project-Id":e.projectId},"publishableClientKey"in t&&t.publishableClientKey&&(s["X-Stack-Publishable-Client-Key"]=t.publishableClientKey),s)},signal:n.signal,body:JSON.stringify({systemPrompt:"command-center-ask-ai",tools:["docs"],quality:"smart",speed:"slow",messages:a.slice(0,-1).map(e=>({role:e.role,content:[{type:"text",text:"user"===e.role?e.content:e.parts.filter(e=>"text"===e.type).map(e=>e.content).join("")}]}))})});if(!o.ok)throw Error(`AI request failed with status ${o.status}`);if(!o.body)throw Error("AI request returned no response body");let l=o.body.getReader(),c=new TextDecoder,f="";for(;;){let{done:e,value:t}=await l.read();if(e)break;let r=(f+=c.decode(t,{stream:!0})).split("\n");for(let e of(f=r.pop()||"",r)){let t=e.trim();if(""===t||t.startsWith(":"))continue;if(!t.startsWith("data: "))throw Error(`Unexpected SSE line: ${t}`);let r=t.slice(6);if("[DONE]"===r)continue;let a=function(e,t){if(!("object"==typeof e&&null!==e&&!Array.isArray(e)))throw Error(`SSE payload must be an object: ${t}`);return e}(JSON.parse(r),r),s=h(a,"type",r);switch(s){case"start":case"start-step":case"finish-step":case"finish":case"message-metadata":case"text-start":case"text-end":case"reasoning-start":case"reasoning-delta":case"reasoning-end":case"source-url":case"source-document":case"file":break;case"text-delta":!function(e){let t=m(),r=p(t.parts);if(r?.type==="text"){r.content+=e;return}t.parts.push({type:"text",content:e})}(h(a,"delta",r));break;case"tool-input-start":{let e=g(h(a,"toolCallId",r),h(a,"toolName",r));e.state="running",e.resultText=null,e.errorText=null,e.argsText="";break}case"tool-input-delta":{let e=h(a,"toolCallId",r),t=h(a,"inputTextDelta",r),s=g(e,"tool");s.argsText=(s.argsText??"")+t;break}case"tool-input-available":g(h(a,"toolCallId",r),h(a,"toolName",r)).argsText=u(a.input);break;case"tool-input-error":{let e=h(a,"toolCallId",r),t=h(a,"toolName",r),s=h(a,"errorText",r),i=g(e,t);i.state="error",i.errorText=s,i.resultText=s;break}case"tool-output-available":{let e=g(h(a,"toolCallId",r),"tool"),t=!0===a.preliminary;e.resultText=u(a.output),t||(e.state="success");break}case"tool-output-error":{let e=h(a,"toolCallId",r),t=h(a,"errorText",r),s=g(e,"tool");s.state="error",s.errorText=t,s.resultText=t;break}case"tool-output-denied":{let e=g(h(a,"toolCallId",r),"tool");e.state="error",e.errorText="Tool output denied",e.resultText="Tool output denied";break}case"tool-approval-request":{let e=h(a,"toolCallId",r),t=h(a,"approvalId",r),s=g(e,"tool");s.state="running",s.resultText=`Approval requested (${t})`;break}case"abort":{let e="string"==typeof a.reason?a.reason:"unknown reason";throw Error(`AI stream aborted: ${e}`)}case"error":throw Error("string"==typeof a.errorText?`AI stream error: ${a.errorText}`:`AI stream error event: ${r}`);default:if(s.startsWith("data-"))break;throw Error(`Unexpected AI stream event type: ${s}`)}}d()}}catch(r){if(r instanceof DOMException&&"AbortError"===r.name){let e=m();0===e.parts.length&&e.parts.push({type:"text",content:"Stopped."}),d();return}let e=r instanceof Error?r.message:"Unknown AI stream error",t=p(a);t?.role==="assistant"&&(t.parts=[{type:"text",content:e}],t.toolCallsById.clear()),d(),alert(`AI stream failed: ${e}`)}finally{s=!1,i=null,d(),k()}}}let _=tL("div",{className:"sdt-ai-input-wrapper"}),w=tL("input",{type:"text",className:"sdt-ai-input",placeholder:"Ask anything about Stack Auth...",autocomplete:"off",autocorrect:"off",spellcheck:"false"}),b=tL("button",{className:"sdt-ai-send-btn",title:"Send"});function k(){w.disabled=!1,w.placeholder=0===a.length?"Ask anything about Stack Auth...":"Ask a follow-up...",s?(b.classList.add("sdt-ai-send-btn-active"),b.classList.add("sdt-ai-stop-btn"),b.setAttribute("title","Stop"),t$(b,'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>')):(w.value.trim()?b.classList.add("sdt-ai-send-btn-active"):b.classList.remove("sdt-ai-send-btn-active"),b.classList.remove("sdt-ai-stop-btn"),b.setAttribute("title","Send"),t$(b,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'))}t$(b,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>'),w.addEventListener("input",k),w.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),s?i?.abort():((0,o.runAsynchronously)(v(w.value)),w.value=""),k())}),b.addEventListener("click",()=>{s?i?.abort():((0,o.runAsynchronously)(v(w.value)),w.value=""),k()});let C=tL("button",{className:"sdt-ai-new-chat",title:"New conversation",style:{display:"none"}});return t$(C,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'),C.addEventListener("click",()=>{s&&i?.abort(),a.length=0,w.value="",d(),k(),C.style.display="none"}),_.append(w,b),l.append(C,_),t.append(n,l),d(),k(),t}(e));break;case"console":h(s,function(e,t,r){let a=tL("div",{style:{display:"flex",flexDirection:"column",height:"100%"}}),s={error:"sdt-badge-error",info:"sdt-badge-info"},i=tL("div",{style:{display:"flex",gap:"4px"}}),n=tL("button",{className:"sdt-close-btn",title:"Export logs & config",style:{fontSize:"11px",width:"auto",padding:"0 8px"}});t$(n,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>Export');let l=tL("button",{className:"sdt-close-btn",title:"Clear logs",style:{fontSize:"11px",width:"auto",padding:"0 8px"}},"Clear");l.addEventListener("click",()=>t.clear()),i.append(n,l);let c=tM([{id:"logs",label:"Logs"},{id:"config",label:"Config"}],r.get().consoleSubTab,e=>{r.update({consoleSubTab:e}),p()},{variant:"pills",trailing:i});a.appendChild(tL("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}},c.el));let d=tL("div",{className:"sdt-tab-content-fade",style:{flex:"1",overflow:"auto"}});function u(){d.innerHTML="";let e=[...t.apiLogs.map(e=>({kind:"api",entry:e})),...t.eventLogs.map(e=>({kind:"event",entry:e}))].sort((e,t)=>t.entry.timestamp-e.entry.timestamp);if(0===e.length){d.innerHTML='<div class="sdt-empty-state"><div class="sdt-empty-state-icon">📋</div><div>No logs recorded yet</div><div style="font-size:12px;color:var(--sdt-text-tertiary)">API calls and auth events will appear here</div></div>';return}let r=tL("div",{className:"sdt-log-list"});for(let t of e)if("api"===t.kind){let e=t.entry,a=tL("div",{className:"sdt-log-item"});a.appendChild(tL("span",{className:"sdt-log-time"},tD(e.timestamp))),a.appendChild(tL("span",{className:`sdt-log-method sdt-log-method-${e.method.toLowerCase()}`},e.method)),a.appendChild(tL("span",{className:"sdt-log-url"},e.url)),void 0!==e.status&&a.appendChild(tL("span",{className:`sdt-log-status ${e.status<400?"sdt-log-status-ok":"sdt-log-status-err"}`},String(e.status))),void 0!==e.duration&&a.appendChild(tL("span",{className:"sdt-log-time"},e.duration+"ms")),r.appendChild(a)}else{let e=t.entry,a=tL("div",{className:"sdt-log-item"});a.appendChild(tL("span",{className:"sdt-log-time"},tD(e.timestamp))),a.appendChild(tL("span",{className:`sdt-badge ${s[e.type]||"sdt-badge-info"}`},e.type)),a.appendChild(tL("span",{className:"sdt-log-message"},e.message)),r.appendChild(a)}d.appendChild(r)}function p(){c.setActive(r.get().consoleSubTab),l.style.display="logs"===r.get().consoleSubTab?"":"none","logs"===r.get().consoleSubTab?u():(d.innerHTML='<div style="padding:12px 0;color:var(--sdt-text-tertiary);font-size:12px">Loading config...</div>',(0,o.runAsynchronously)(e.getProject().then(e=>{d.innerHTML="";let t=tL("table",{className:"sdt-config-table"}),r=tL("tbody",null);for(let[t,a]of[["Project ID",e.id],["Display Name",e.displayName],["Sign-Up Enabled",String(e.config.signUpEnabled)],["Credential Auth",String(e.config.credentialEnabled)],["Magic Link",String(e.config.magicLinkEnabled)],["Passkey",String(e.config.passkeyEnabled)],["Client Team Creation",String(e.config.clientTeamCreationEnabled)],["Client User Deletion",String(e.config.clientUserDeletionEnabled)],["User API Keys",String(e.config.allowUserApiKeys)],["Team API Keys",String(e.config.allowTeamApiKeys)],["OAuth Providers",e.config.oauthProviders.length>0?e.config.oauthProviders.map(e=>e.id).join(", "):"None"]]){let e=tL("tr",null);e.appendChild(tL("td",null,t));let s=tL("td",null);"true"===a?t$(s,'<span style="color:var(--sdt-success)">Enabled</span>'):"false"===a?t$(s,'<span style="color:var(--sdt-text-tertiary)">Disabled</span>'):s.textContent=a,e.appendChild(s),r.appendChild(e)}t.appendChild(r),d.appendChild(t)}).catch(()=>{d.innerHTML='<div style="padding:12px 0;color:var(--sdt-text-tertiary);font-size:12px">Could not load config.</div>'})))}return a.appendChild(d),p(),n.addEventListener("click",()=>{let e=[];for(let r of(e.push("=== Stack Auth Dev Tool Report ==="),e.push(`Generated: ${new Date().toISOString()}`),e.push(""),t.apiLogs.slice(0,50))){let t=void 0!==r.status?` [${r.status}]`:"",a=void 0!==r.duration?` ${r.duration}ms`:"";e.push(`${new Date(r.timestamp).toISOString()} ${r.method} ${r.url}${t}${a}`)}(0,o.runAsynchronously)(navigator.clipboard.writeText(e.join("\n")).then(()=>{n.textContent="✓ Copied",setTimeout(()=>{t$(n,'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>Export')},1500)}))}),{element:a,cleanup:t.subscribe(()=>{"logs"===r.get().consoleSubTab&&u()})}}(e,r,t));break;case"docs":h(s,tB("https://docs.stack-auth.com","Stack Auth Documentation","Loading documentation…","Unable to load documentation"));break;case"dashboard":h(s,function(e){let t=`${function(e){try{let t=new URL(e);if("localhost"===t.hostname||"127.0.0.1"===t.hostname||"[::1]"===t.hostname){let e=t.port;return e&&e.endsWith("02")&&(t.port=e.slice(0,-2)+"01"),t.origin}return t.hostname.startsWith("api.")&&(t.hostname="app."+t.hostname.slice(4)),t.origin}catch{return"https://app.stack-auth.com"}}(tj(e))}/projects/${encodeURIComponent(e.projectId)}`;if("true"!==w.NEXT_PUBLIC_STACK_IS_LOCAL_EMULATOR){let e=tL("div",{className:"sdt-iframe-container",style:{display:"flex",alignItems:"center",justifyContent:"center"}}),r=tL("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"}});return r.appendChild(tL("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"sdt-iframe-error-btn",style:{textDecoration:"none"}},"Open Dashboard in New Tab")),e.appendChild(r),e}return tB(t,"Stack Auth Dashboard","Loading dashboard…","Unable to load dashboard","The dashboard may require authentication or block framing")}(e));break;case"support":h(s,function(e){let t=tL("div",{className:"sdt-support-tab"}),r=tj(e),a="feedback",s=tL("div",{className:"sdt-support-content"}),i=tM([{id:"feedback",label:"Feedback"},{id:"feature-requests",label:"Feature Requests"}],a,e=>{a=e,i.setActive(a),c()},{variant:"pills"});t.appendChild(i.el),t.appendChild(s);let n=null,l=null;function c(){s.innerHTML="","feedback"===a?(n||(n=function(){let e=tL("div",{className:"sdt-support-feedback-pane"}),t=tL("form",{className:"sdt-support-form"}),a="feedback",s="idle",i="",n=tL("input",{className:"sdt-support-input",type:"text",placeholder:"Your name"}),l=tL("input",{className:"sdt-support-input",type:"email",placeholder:"you@example.com",required:"true"}),c=tL("textarea",{className:"sdt-support-textarea",placeholder:"What's on your mind?",required:"true",rows:"5"});function d(){if(t.innerHTML="","success"===s){let e=tL("div",{className:"sdt-support-status sdt-support-status-success"}),r=tL("div",{className:"sdt-support-status-icon"});t$(r,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'),e.append(r,tL("div",{className:"sdt-support-status-title"},"Feedback sent"),tL("div",{className:"sdt-support-status-msg"},"Thank you! We'll get back to you soon."));let a=tL("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Send another");a.addEventListener("click",()=>{s="idle",d()}),e.appendChild(a),t.appendChild(e);return}if("error"===s){let e=tL("div",{className:"sdt-support-status sdt-support-status-error"}),r=tL("div",{className:"sdt-support-status-icon"});t$(r,'<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 6v5m0 3h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'),e.append(r,tL("div",{className:"sdt-support-status-title"},"Failed to send"),tL("div",{className:"sdt-support-status-msg"},i||"Please try again."));let a=tL("button",{className:"sdt-support-submit",style:{marginTop:"12px",width:"auto"}},"Try again");a.addEventListener("click",()=>{s="idle",i="",d()}),e.appendChild(a),t.appendChild(e);return}let e=tL("div",{className:"sdt-support-field"}),r=tL("label",{className:"sdt-support-label"},"Name ");r.appendChild(tL("span",{className:"sdt-support-optional"},"optional")),e.append(r,n),t.appendChild(e);let o=tL("div",{className:"sdt-support-field"});o.append(tL("label",{className:"sdt-support-label"},"Email"),l),t.appendChild(o);let u=tL("div",{className:"sdt-support-field"});u.append(tL("label",{className:"sdt-support-label"},"bug"===a?"Description":"Message"),c),c.placeholder="bug"===a?"Steps to reproduce, expected vs. actual behavior…":"What's on your mind?",t.appendChild(u);let p=tL("div",{className:"sdt-support-type-cards"}),h=tL("button",{type:"button",className:`sdt-support-type-card ${"feedback"===a?"sdt-support-type-card-active":""}`});t$(h,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Feedback</span>'),h.addEventListener("click",()=>{a="feedback",d()});let m=tL("button",{type:"button",className:`sdt-support-type-card ${"bug"===a?"sdt-support-type-card-active":""}`});t$(m,'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.88 1.88M14.12 3.88L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M6 17H3M21 5c0 2.1-1.6 3.8-3.53 4M18 13h4M21 17h-3"/></svg><span>Bug Report</span>'),m.addEventListener("click",()=>{a="bug",d()}),p.append(h,m),t.appendChild(p);let f=tL("button",{type:"submit",className:"sdt-support-submit"});t$(f,'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5m-7 7l7-7 7 7"/></svg> Submit'),f.disabled="submitting"===s,t.appendChild(f);let g=tL("div",{className:"sdt-support-channels"});g.innerHTML=`
        <a href="https://discord.stack-auth.com" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          <span>Discord</span>
        </a>
        <a href="mailto:team@stack-auth.com" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span>Email</span>
        </a>
        <a href="https://github.com/stack-auth/stack-auth" target="_blank" rel="noopener noreferrer" class="sdt-support-channel">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          <span>GitHub</span>
        </a>`,t.appendChild(g)}return t.addEventListener("submit",e=>{e.preventDefault(),l.value.trim()&&c.value.trim()&&(0,o.runAsynchronously)(async()=>{s="submitting",d();try{let e=await fetch(`${r}/api/latest/internal/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:n.value.trim()||void 0,email:l.value.trim(),message:c.value.trim(),feedback_type:a})});if(!e.ok)throw Error(`Failed to send: ${e.status} ${e.statusText}`);let t=await e.json();if(!t.success)throw Error(t.message||"Failed to send feedback");s="success",c.value=""}catch(e){s="error",i=e.message||"An unexpected error occurred"}d()})}),d(),e.appendChild(t),e}()),s.appendChild(n)):(l||(l=tL("div",{className:"sdt-support-iframe-pane"})).appendChild(tB("https://feedback.stack-auth.com","Stack Auth Feature Requests","Loading feature requests…","Unable to load feature requests")),s.appendChild(l))}return c(),t}(e))}return u.set(a,s),d.appendChild(s),s}(a);for(let[,e]of(l.setActive(a),u))e.classList.remove("sdt-tab-pane-active");s.classList.add("sdt-tab-pane-active")}function g(e){let r=tL("div",{className:`sdt-resize-handle sdt-resize-${e}`}),a=0,i=0,n=0,o=0;r.addEventListener("pointerdown",e=>{e.preventDefault(),r.setPointerCapture(e.pointerId),a=e.clientX,i=e.clientY,n=s.offsetWidth,o=s.offsetHeight}),r.addEventListener("pointermove",t=>{if(!r.hasPointerCapture(t.pointerId))return;let l=a-t.clientX,c=i-t.clientY;if("left"===e||"top-left"===e){let e=Math.max(400,Math.min(n+l,window.innerWidth-32));s.style.width=e+"px"}if("top"===e||"top-left"===e){let e=Math.max(300,Math.min(o+c,window.innerHeight-80));s.style.height=e+"px"}}),r.addEventListener("pointerup",e=>{r.releasePointerCapture(e.pointerId),t.update({panelWidth:s.offsetWidth,panelHeight:s.offsetHeight})}),s.appendChild(r)}return f(t.get().activeTab),g("top"),g("left"),g("top-left"),s.appendChild(i),{element:s,cleanup:()=>{for(let e of p)e()}}}(e,c,d,h),n.appendChild(u.element))}function h(){if(!u)return;let e=u;u=null,e.cleanup(),e.element.classList.add("sdt-panel-exiting"),setTimeout(()=>{n.contains(e.element)&&n.removeChild(e.element)},150)}let f=function(e){let t={width:76,height:36};function r(e){try{localStorage.setItem(tP,JSON.stringify(e))}catch{}}function a(e){o=e,s.style.left=o.left+"px",s.style.top=o.top+"px"}let s=tL("button",{className:"sdt-trigger","aria-label":"Toggle Stack Auth Dev Tools",title:"Stack Auth Dev Tools"}),i=tL("span",{className:"sdt-trigger-logo"});t$(i,'<svg width="14" height="17" viewBox="0 0 131 156" fill="currentColor"><path d="M124.447 28.6459L70.1382 1.75616C67.3472 0.374284 64.0715 0.372197 61.279 1.75051L0.740967 31.6281V87.6369L65.7101 119.91L117.56 93.675V112.414L65.7101 138.44L0.740967 106.584V119.655C0.740967 122.359 2.28151 124.827 4.71097 126.015L62.282 154.161C65.0966 155.538 68.3938 155.515 71.1888 154.099L130.47 124.074V79.7105C130.47 74.8003 125.34 71.5769 120.915 73.7077L79.4531 93.675V75.9771L130.47 50.1589V38.3485C130.47 34.2325 128.137 30.4724 124.447 28.6459Z"/></svg>'),s.appendChild(i),s.appendChild(tL("span",{className:"sdt-trigger-text"},"DEV"));let n=function(){try{let e=localStorage.getItem(tP);if(!e)return null;let r=JSON.parse(e);if("object"==typeof r&&null!==r&&["left","right","top","bottom"].includes(String(Reflect.get(r,"side")))&&"number"==typeof Reflect.get(r,"offset"))return r;if("object"==typeof r&&null!==r&&"number"==typeof Reflect.get(r,"left")&&"number"==typeof Reflect.get(r,"top"))return tA(r,t,{width:window.innerWidth,height:window.innerHeight})}catch{}return null}()??tA({left:window.innerWidth-76-16,top:window.innerHeight-36-16},t,{width:window.innerWidth,height:window.innerHeight}),o=tE(n,t,{width:window.innerWidth,height:window.innerHeight});a(o);let l=null;return s.addEventListener("pointerdown",e=>{e.preventDefault(),s.setPointerCapture(e.pointerId),l={startX:e.clientX,startY:e.clientY,startLeft:o.left,startTop:o.top,didDrag:!1}}),s.addEventListener("pointermove",e=>{if(!l)return;let r=e.clientX-l.startX,s=e.clientY-l.startY;!l.didDrag&&Math.abs(r)+Math.abs(s)<5||(l.didDrag=!0,a(tx({left:l.startLeft+r,top:l.startTop+s},t,{width:window.innerWidth,height:window.innerHeight})))}),s.addEventListener("pointerup",i=>{let c=l;l=null,c&&(s.releasePointerCapture(i.pointerId),c.didDrag?(a(tE(n=tA(o,t,{width:window.innerWidth,height:window.innerHeight}),t,{width:window.innerWidth,height:window.innerHeight})),r(n)):e())}),window.addEventListener("resize",()=>{let e=tE(n,t,{width:window.innerWidth,height:window.innerHeight});(e.left!==o.left||e.top!==o.top)&&(a(e),r(n=tA(o,t,{width:window.innerWidth,height:window.innerHeight})))}),s}(function(){c.get().isOpen?(c.update({isOpen:!1}),h()):(c.update({isOpen:!0}),p())});n.appendChild(f),c.get().isOpen&&p();let g=e[y.stackAppInternalsSymbol].addRequestListener(e=>{let t=Date.now();d.addApiLog({id:tU(),timestamp:t,method:e.method,url:e.path,status:e.status,duration:e.duration,error:e.error}),e.error?d.addEventLog({id:tU(),timestamp:t,type:"error",message:`Network error on ${e.method} ${e.path}: ${e.error}`}):e.status&&e.status>=400&&d.addEventLog({id:tU(),timestamp:t,type:"error",message:`API error ${e.status} on ${e.method} ${e.path}`})});return()=>{g(),u?.cleanup(),i.parentNode&&i.parentNode.removeChild(i)}}(tW))}"u">typeof window&&(window.StackDevTool={enable(){try{localStorage.setItem(tK,"true")}catch{}tz(),console.log("[Stack DevTool] Enabled. Refresh if the panel does not appear.")},disable(){try{localStorage.setItem(tK,"false")}catch{}tH&&(tH(),tH=null),console.log("[Stack DevTool] Disabled.")},reset(){try{localStorage.removeItem(tK)}catch{}tV()?tz():tH&&(tH(),tH=null),console.log("[Stack DevTool] Reset to default (visible on localhost only).")}});let tJ,tX,tY=!1;tY=!1;let tG=ek(ew),tQ=new Map;var tZ=class e{static{this.LazyStackAdminAppImpl={value:void 0}}async _createCookieHelper(e){let t=void 0===e?this._tokenStoreInit:e;return"nextjs-cookie"===t||"cookie"===t?await eZ():await eQ()}async _getUserOAuthConnectionCacheFn(e){let t=await e.getUser(),r=!0;if(t&&t.oauth_providers.find(t=>t.id===e.providerId)||(r=!1),await e.getOrWaitOAuthToken()||(r=!1),!r&&e.redirect){if(!e.session)throw Error(b.deindent`
          Cannot add new scopes to a user that is not a CurrentUser. Please ensure that you are calling this function on a CurrentUser object, or remove the 'or: redirect' option.

          Often, you can solve this by calling this function in the browser instead, or by removing the 'or: redirect' option and dealing with the case where the user doesn't have enough permissions.
        `);return await tn(this._interface,{provider:e.providerId,redirectUrl:this.urls.oauthCallback,errorRedirectUrl:this.urls.error,providerScope:(0,b.mergeScopeStrings)(e.scope||"",(this._oauthScopesOnSignIn[e.providerId]??[]).join(" "))},e.session),await (0,o.neverResolve)()}if(!r)return null;let a=t.oauth_providers.find(t=>t.id===e.providerId)?.account_id??"";return{id:e.providerId,provider:e.providerId,providerAccountId:a,async getAccessToken(){let t=await e.getOrWaitOAuthToken();if(!t)throw new n.StackAssertionError(`Failed to retrieve an access token for this connected account (provider: ${e.providerId}). This usually means the OAuth refresh token has been revoked or expired. The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`);return t},useAccessToken(){let t=e.useOAuthToken();if(!t)throw new n.StackAssertionError(`Failed to retrieve an access token for this connected account (provider: ${e.providerId}). This usually means the OAuth refresh token has been revoked or expired. The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`);return t}}}_createOAuthConnectionFromCrudItem(e,t){let r=this,a=e.provider,s=e.provider_account_id;return{id:a,provider:a,providerAccountId:s,async getAccessToken(e){let i=e?.scopes?.join(" ")??"",n=u.Result.orThrow(await r._currentUserOAuthConnectionAccessTokensByAccountCache.getOrWait([t,a,s,i],"write-only"));if(!n){let e=i?`The requested scopes [${i}] are not available on the existing token.`:"The OAuth refresh token has likely been revoked or expired.";return u.Result.error(new l.KnownErrors.OAuthAccessTokenNotAvailable(a,`${e} The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`))}return u.Result.ok(n)},useAccessToken(e){let i=e?.scopes?.join(" ")??"",n=G(r._currentUserOAuthConnectionAccessTokensByAccountCache,[t,a,s,i],"connection.useAccessToken()");if(!n){let e=i?`The requested scopes [${i}] are not available on the existing token.`:"The OAuth refresh token has likely been revoked or expired.";return u.Result.error(new l.KnownErrors.OAuthAccessTokenNotAvailable(a,`${e} The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`))}return u.Result.ok(n)}}}constructor(t,r){this._uniqueIdentifier=void 0,this._sessionRecorder=null,this._eventTracker=null,this.__DEMO_ENABLE_SLIGHT_FETCH_DELAY=!1,this._ownedAdminApps=new eT.DependenciesMap,this._currentUserCache=F(async e=>(this.__DEMO_ENABLE_SLIGHT_FETCH_DELAY&&await (0,o.wait)(2e3),e.isKnownToBeInvalid())?null:await this._interface.getClientUserByToken(e)),this._currentProjectCache=$(async()=>u.Result.orThrow(await this._interface.getClientProject())),this._ownedProjectsCache=F(async e=>await this._interface.listProjects(e)),this._currentUserPermissionsCache=F(async(e,[t,r])=>await this._interface.listCurrentUserTeamPermissions({teamId:t,recursive:r},e)),this._currentUserProjectPermissionsCache=F(async(e,[t])=>await this._interface.listCurrentUserProjectPermissions({recursive:t},e)),this._currentUserTeamsCache=F(async e=>await this._interface.listCurrentUserTeams(e)),this._currentUserOAuthConnectionAccessTokensCache=F(async(e,[t,r])=>{try{return{accessToken:(await this._interface.createProviderAccessToken(t,r||"",e)).access_token}}catch(e){if(!(l.KnownErrors.OAuthConnectionDoesNotHaveRequiredScope.isInstance(e)||l.KnownErrors.OAuthConnectionNotConnectedToUser.isInstance(e)))throw e}return null}),this._currentUserOAuthConnectionCache=F(async(e,[t,r,a])=>await this._getUserOAuthConnectionCacheFn({getUser:async()=>u.Result.orThrow(await this._currentUserCache.getOrWait([e],"write-only")),getOrWaitOAuthToken:async()=>u.Result.orThrow(await this._currentUserOAuthConnectionAccessTokensCache.getOrWait([e,t,r||""],"write-only")),useOAuthToken:()=>G(this._currentUserOAuthConnectionAccessTokensCache,[e,t,r||""],"connection.useAccessToken()"),providerId:t,scope:r,redirect:a,session:e})),this._currentUserConnectedAccountsCache=F(async e=>(await this._interface.listConnectedAccounts(e)).items.map(t=>this._createOAuthConnectionFromCrudItem(t,e))),this._currentUserOAuthConnectionAccessTokensByAccountCache=F(async(e,[t,r,a])=>{try{return{accessToken:(await this._interface.createProviderAccessTokenByAccount(t,r,a,e)).access_token}}catch(e){if(l.KnownErrors.OAuthConnectionDoesNotHaveRequiredScope.isInstance(e)||l.KnownErrors.OAuthConnectionNotConnectedToUser.isInstance(e))return null;throw e}}),this._currentUserValidConnectedAccountForProviderCache=F(async(e,[t,r])=>{let a=u.Result.orThrow(await this._currentUserConnectedAccountsCache.getOrWait([e],"write-only")).filter(e=>e.provider===t),s=r?r.split(" "):void 0;for(let e of a)if("ok"===(await e.getAccessToken({scopes:s})).status)return e;return await tn(this._interface,{provider:t,redirectUrl:this.urls.oauthCallback,errorRedirectUrl:this.urls.error,providerScope:(0,b.mergeScopeStrings)(r,(this._oauthScopesOnSignIn[t]??[]).join(" "))},e),await (0,o.neverResolve)()}),this._teamMemberProfilesCache=F(async(e,[t])=>await this._interface.listTeamMemberProfiles({teamId:t},e)),this._teamInvitationsCache=F(async(e,[t])=>await this._interface.listTeamInvitations({teamId:t},e)),this._currentUserTeamProfileCache=F(async(e,[t])=>await this._interface.getTeamMemberProfile({teamId:t,userId:"me"},e)),this._currentUserTeamInvitationsCache=F(async e=>await this._interface.listCurrentUserTeamInvitations(e)),this._clientContactChannelsCache=F(async e=>await this._interface.listClientContactChannels(e)),this._userApiKeysCache=F(async e=>await this._interface.listProjectApiKeys({user_id:"me"},e,"client")),this._teamApiKeysCache=F(async(e,[t])=>await this._interface.listProjectApiKeys({team_id:t},e,"client")),this._notificationCategoriesCache=F(async e=>await this._interface.listNotificationCategories(e)),this._currentUserOAuthProvidersCache=F(async e=>await this._interface.listOAuthProviders({user_id:"me"},e)),this._userItemCache=F(async(e,[t,r])=>await this._interface.getItem({userId:t,itemId:r},e)),this._teamItemCache=F(async(e,[t,r])=>await this._interface.getItem({teamId:t,itemId:r},e)),this._customItemCache=F(async(e,[t,r])=>await this._interface.getItem({customCustomerId:t,itemId:r},e)),this._userProductsCache=F(async(e,[t,r,a])=>await this._interface.listProducts({customer_type:"user",customer_id:t,cursor:r??void 0,limit:a??void 0},e)),this._teamProductsCache=F(async(e,[t,r,a])=>await this._interface.listProducts({customer_type:"team",customer_id:t,cursor:r??void 0,limit:a??void 0},e)),this._customProductsCache=F(async(e,[t,r,a])=>await this._interface.listProducts({customer_type:"custom",customer_id:t,cursor:r??void 0,limit:a??void 0},e)),this._userInvoicesCache=F(async(e,[t,r,a])=>await this._interface.listInvoices({customer_type:"user",customer_id:t,cursor:r??void 0,limit:a??void 0},e)),this._teamInvoicesCache=F(async(e,[t,r,a])=>await this._interface.listInvoices({customer_type:"team",customer_id:t,cursor:r??void 0,limit:a??void 0},e)),this._customerBillingCache=F(async(e,[t,r])=>await this._interface.getCustomerBilling(t,r,e)),this._convexPartialUserCache=$(async([e])=>await this._getPartialUserFromConvex(e)),this._trustedParentDomainCache=$(async([e])=>await this._getTrustedParentDomain(e)),this._anonymousSignUpInProgress=null,this._prefetchedCrossDomainHandoffParams=null,this._prefetchedCrossDomainHandoffParamsFetchedAt=0,this._isPrefetchingCrossDomainHandoffParams=!1,this._memoryTokenStore=X(),this._nextServerCookiesTokenStores=new WeakMap,this._requestTokenStores=new WeakMap,this._storedBrowserCookieTokenStore=null,this._mostRecentQueuedCookieRefreshIndex=0,this._sessionsByTokenStoreAndSessionKey=new WeakMap,this._botChallengeSiteKeysWarned=!1;const a=M(t);if(!e.LazyStackAdminAppImpl.value)throw new n.StackAssertionError("Admin app implementation not initialized. Did you import the _StackClientApp from stack-app/apps/implementations/index.ts? You can't import it directly from ./apps/implementations/client-app-impl.ts as that causes a circular dependency (see the comment at _LazyStackAdminAppImpl for more details).");this._options=a,this._extraOptions=r;const s=a.projectId??K();if("internal"!==s&&!s.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i))throw Error(`Invalid project ID: ${s}. Project IDs must be UUIDs. Please check your environment variables and/or your StackApp.`);const i=a.publishableClientKey??q();if(r&&r.interface)this._interface=r.interface;else{const e=J(a.baseUrl);this._interface=new e_.StackClientInterface({getBaseUrl:()=>e()[0],getAnalyticsBaseUrl:()=>{var t;return(t=e()[0])===z?"https://r.stack-auth.com":t},getApiUrls:e,extraRequestHeaders:a.extraRequestHeaders??H(),projectId:s,clientVersion:L,...null!=i?{publishableClientKey:i}:{},prepareRequest:async()=>{await tJ?.()}})}this._tokenStoreInit=a.tokenStore,this._redirectMethod=a.redirectMethod||((0,f.isBrowserLike)()?"window":"none"),this._redirectMethod=a.redirectMethod||"nextjs",this._urlOptions=a.urls??{},this._oauthScopesOnSignIn=a.oauthScopesOnSignIn??{},this._prefetchCrossDomainHandoffParamsIfNeeded(),(0,f.isBrowserLike)()&&("cookie"===a.tokenStore||"nextjs-cookie"===a.tokenStore)&&((0,o.runAsynchronously)(this._trustedParentDomainCache.getOrWait([window.location.hostname],"write-only")),this._ensureCrossSubdomainCookieExists()),r&&r.uniqueIdentifier&&(this._uniqueIdentifier=r.uniqueIdentifier,this._initUniqueIdentifier()),this._analyticsOptions=a.analytics;const c=async()=>(this._ensurePersistentTokenStore(),await this.getPartialUser({from:"token",or:"anonymous-if-exists"}))?await this._getSession():(await this.getUser({or:"anonymous"}))._internalSession;(0,f.isBrowserLike)()&&this._hasPersistentTokenStore()&&this._analyticsOptions?.replays?.enabled===!0&&(this._sessionRecorder=new td({projectId:this.projectId,sendBatch:async(e,t)=>await this._interface.sendSessionReplayBatch(e,await c(),t)},this._analyticsOptions.replays),this._sessionRecorder.start()),(0,f.isBrowserLike)()&&this._hasPersistentTokenStore()&&(this._eventTracker=new th({projectId:this.projectId,sendBatch:async(e,t)=>await this._interface.sendAnalyticsEventBatch(e,await c(),t)}),this._eventTracker.start()),(0,f.isBrowserLike)()&&function(e){tW=e,tz()}(this)}_initUniqueIdentifier(){if(!this._uniqueIdentifier)throw new n.StackAssertionError("Unique identifier not initialized");if(tQ.has(this._uniqueIdentifier))throw new n.StackAssertionError("A Stack client app with the same unique identifier already exists");tQ.set(this._uniqueIdentifier,[this._extraOptions?.checkString??void 0,this])}_getUniqueIdentifier(){return this._uniqueIdentifier||(this._uniqueIdentifier=(0,eD.generateUuid)(),this._initUniqueIdentifier()),this._uniqueIdentifier}async _checkFeatureSupport(e,t){return await this._interface.checkFeatureSupport({...t,name:e})}_useCheckFeatureSupport(e,t){throw(0,o.runAsynchronously)(this._checkFeatureSupport(e,t)),new n.StackAssertionError(`${e} is not currently supported. Please reach out to Stack support for more information.`)}get _legacyRefreshTokenCookieName(){return`stack-refresh-${this.projectId}`}get _refreshTokenCookieName(){return`stack-refresh-${this.projectId}`}_getRefreshTokenDefaultCookieNameForSecure(e){return`${e?"__Host-":""}${this._refreshTokenCookieName}--default`}_getCustomRefreshCookieName(e){let t=(0,ey.encodeBase32)(new TextEncoder().encode(e.toLowerCase()));return`${this._refreshTokenCookieName}--custom-${t}`}_getDomainFromCustomRefreshCookieName(e){let t=`${this._refreshTokenCookieName}--custom-`;if(!e.startsWith(t))return null;try{return new TextDecoder().decode((0,ey.decodeBase32)(e.slice(t.length)))}catch{return null}}_formatRefreshCookieValue(e,t){return JSON.stringify({refresh_token:e,updated_at_millis:t})}_formatAccessCookieValue(e,t){return e&&t?JSON.stringify([e,t]):null}_parseStructuredRefreshCookie(e){if(!e)return null;let t=eC(e);if("ok"!==t.status||"object"!=typeof t.data||null===t.data)return console.warn("Failed to parse structured refresh cookie"),null;let r=t.data,a="refresh_token"in r&&"string"==typeof r.refresh_token?r.refresh_token:null,s="updated_at_millis"in r&&"number"==typeof r.updated_at_millis?r.updated_at_millis:null;return a?{refreshToken:a,updatedAt:s}:(console.warn("Refresh token not found in structured refresh cookie"),null)}_extractRefreshTokenFromCookieMap(e){let{legacyNames:t,structuredPrefixes:r}=this._getRefreshTokenCookieNamePatterns();for(let r of t){let t=e[r];if(t)return{refreshToken:t,updatedAt:null}}let a=null;for(let[t,s]of Object.entries(e)){if(!r.some(e=>t.startsWith(e)))continue;let e=this._parseStructuredRefreshCookie(s);if(!e)continue;let i=e.updatedAt??-1/0,n=a?.updatedAt??-1/0;(!a||i>n)&&(a=e)}return a?{refreshToken:a.refreshToken,updatedAt:a.updatedAt??null}:{refreshToken:null,updatedAt:null}}_getTokensFromCookies(e){let{refreshToken:t}=this._extractRefreshTokenFromCookieMap(e),r=e[this._accessTokenCookieName]??null,a=null;if(r&&r.startsWith('["')){let e=eC(r);"ok"===e.status&&"object"==typeof e.data&&null!==e.data&&Array.isArray(e.data)&&2===e.data.length&&"string"==typeof e.data[0]&&"string"==typeof e.data[1]?e.data[0]===t&&(a=e.data[1]):console.warn("Access token cookie has invalid format")}return{refreshToken:t,accessToken:a}}get _accessTokenCookieName(){return"stack-access"}_getAllBrowserCookies(){if(!(0,f.isBrowserLike)())throw new n.StackAssertionError("Cannot get browser cookies on the server!");return eL.parseCookie(document.cookie||"")}_getRefreshTokenCookieNamePatterns(){return{legacyNames:[this._legacyRefreshTokenCookieName,"stack-refresh"],structuredPrefixes:[`${this._refreshTokenCookieName}--`,`__Host-${this._refreshTokenCookieName}--`]}}_collectRefreshTokenCookieNames(e){let{legacyNames:t,structuredPrefixes:r}=this._getRefreshTokenCookieNamePatterns(),a=new Set;for(let r of t)e[r]&&a.add(r);for(let t of Object.keys(e))r.some(e=>t.startsWith(e))&&a.add(t);return a}_prepareRefreshCookieUpdate(e,t,r,a){let s=this._collectRefreshTokenCookieNames(e);s.delete(a);let i=t?Date.now():null;return{updatedAt:i,refreshCookieValue:t&&null!==i?this._formatRefreshCookieValue(t,i):null,accessTokenPayload:this._formatAccessCookieValue(t,r),cookieNamesToDelete:[...s]}}_ensureCrossSubdomainCookieExists(){(0,o.runAsynchronously)(async()=>{let e=window.location.hostname,t=await this._trustedParentDomainCache.getOrWait([e],"read-write");if("error"===t.status||!t.data)return;let r=this._getAllBrowserCookies(),a=this._getCustomRefreshCookieName(t.data);if(r[a])return;let{refreshToken:s,updatedAt:i}=this._extractRefreshTokenFromCookieMap(r);s&&i&&e9(a,this._formatRefreshCookieValue(s,i),{maxAge:31536e3,domain:t.data})})}_queueCustomRefreshCookieUpdate(e,t,r){(0,o.runAsynchronously)(async()=>{let a;this._mostRecentQueuedCookieRefreshIndex++;let s=this._mostRecentQueuedCookieRefreshIndex;if(!(a=(0,f.isBrowserLike)()?window.location.hostname:(await tX?.())?.get("host")))return void console.warn("No hostname found when queueing custom refresh cookie update");let i=await this._trustedParentDomainCache.getOrWait([a],"read-write"),n={maxAge:31536e3,noOpIfServerComponent:!0},o=async(e,t)=>{let a=this._getCustomRefreshCookieName(e),s={...n,domain:e};"browser"===r?e9(a,t,s):await te(a,t,s)};if("error"===i.status||!i.data||s!==this._mostRecentQueuedCookieRefreshIndex)return;let l=e&&t?this._formatRefreshCookieValue(e,t):null;await o(i.data,l);let c=await e3();await te(this._getRefreshTokenDefaultCookieNameForSecure(c),null,n)})}async _getTrustedParentDomain(e){let t=u.Result.orThrow(await this._interface.getClientProject()).config.domains.map(e=>e.domain.trim().replace(/^https?:\/\//,"").split("/")[0]?.toLowerCase()),r=t.filter(e=>e.startsWith("**.")),a=e.split(".");for(let e=a.length-2;e>=0;e--){let s=a.slice(e).join(".");if(t.includes(s)&&r.includes("**."+s))return s}return null}_getBrowserCookieTokenStore(){if(!(0,f.isBrowserLike)())throw Error("Cannot use cookie token store on the server!");if(null===this._storedBrowserCookieTokenStore){let e=e=>{let t=this._getTokensFromCookies(this._getAllBrowserCookies());return{refreshToken:t.refreshToken,accessToken:t.accessToken??(e?.refreshToken===t.refreshToken?e.accessToken:null)}};this._storedBrowserCookieTokenStore=new v.Store(e(null));let t=!0;setInterval(()=>{if(t){let t=this._storedBrowserCookieTokenStore.get(),r=e(t);(0,h.deepPlainEquals)(r,t)||this._storedBrowserCookieTokenStore.set(r)}},100),this._storedBrowserCookieTokenStore.onChange(e=>{try{let r=e.refreshToken,a="https:"===window.location.protocol,s=this._getRefreshTokenDefaultCookieNameForSecure(a),{updatedAt:i,refreshCookieValue:n,accessTokenPayload:o,cookieNamesToDelete:l}=this._prepareRefreshCookieUpdate(this._getAllBrowserCookies(),r,e.accessToken??null,s);e9(s,n,{maxAge:31536e3,secure:a}),e9(this._accessTokenCookieName,o,{maxAge:86400}),l.forEach(e=>{let t=this._getDomainFromCustomRefreshCookieName(e);tt(e,t?{domain:t}:{})}),this._queueCustomRefreshCookieUpdate(r,i,"browser"),t=!0}catch(e){if((0,f.isBrowserLike)())throw e;t=!1}})}return this._storedBrowserCookieTokenStore}_getOrCreateTokenStore(e,t){let r=void 0===t?this._tokenStoreInit:t;switch(r){case"cookie":return this._getBrowserCookieTokenStore();case"nextjs-cookie":if((0,f.isBrowserLike)())return this._getBrowserCookieTokenStore();{let t=new v.Store(this._getTokensFromCookies(e.getAll()));return t.onChange(t=>{(0,o.runAsynchronously)(async()=>{let r=t.refreshToken,a=await e3(),s=this._getRefreshTokenDefaultCookieNameForSecure(a),{updatedAt:i,refreshCookieValue:n,accessTokenPayload:o,cookieNamesToDelete:l}=this._prepareRefreshCookieUpdate(e.getAll(),r,t.accessToken??null,s);await Promise.all([te(s,n,{maxAge:31536e3,noOpIfServerComponent:!0}),te(this._accessTokenCookieName,o,{maxAge:86400,noOpIfServerComponent:!0})]),l.length>0&&await Promise.all(l.map(e=>{let t=this._getDomainFromCustomRefreshCookieName(e);return tr(e,{noOpIfServerComponent:!0,...t?{domain:t}:{}})})),this._queueCustomRefreshCookieUpdate(r,i,"server")})}),t}case"memory":return this._memoryTokenStore;default:if(null===r)return X();if("object"==typeof r&&"headers"in r){if(this._requestTokenStores.has(r))return this._requestTokenStores.get(r);let t=r.headers.get("x-stack-auth");if(t){let r;try{if(r=JSON.parse(t),"object"!=typeof r)throw Error("x-stack-auth header must be a JSON object");if(null===r)throw Error("x-stack-auth header must not be null")}catch(e){throw Error(`Invalid x-stack-auth header: ${t}`,{cause:e})}return this._getOrCreateTokenStore(e,{accessToken:r.accessToken??null,refreshToken:r.refreshToken??null})}let a=r.headers.get("cookie"),s=eL.parseCookie(a||""),i=new v.Store(this._getTokensFromCookies(s));return this._requestTokenStores.set(r,i),i}if("accessToken"in r||"refreshToken"in r)return new v.Store({refreshToken:r.refreshToken,accessToken:r.accessToken});throw Error(`Invalid token store ${r}`)}}_useTokenStore(e){(0,d.suspendIfSsr)();let t=e0();return this._getOrCreateTokenStore(t,e)}_getSessionFromTokenStore(e){let t=e.get(),r=ep.InternalSession.calculateSessionKey(t),a=r?this._sessionsByTokenStoreAndSessionKey.get(e)?.get(r):null;if(a)return a;let s=this._interface.createSession({refreshToken:t.refreshToken,accessToken:t.accessToken});s.onAccessTokenChange(t=>{e.update(e=>({...e,accessToken:t?.token??null}))}),s.onInvalidate(()=>{e.update(e=>({...e,accessToken:null,refreshToken:null}))});let i=this._sessionsByTokenStoreAndSessionKey.get(e)??new Map;return this._sessionsByTokenStoreAndSessionKey.set(e,i),i.set(r,s),s}async _getSession(e){let t=this._getOrCreateTokenStore(await this._createCookieHelper(e),e);return this._getSessionFromTokenStore(t)}_useSession(e){let t=this._useTokenStore(e),r=(0,s.useCallback)(e=>{let{unsubscribe:r}=t.onChange(()=>{e()});return r},[t]),a=(0,s.useCallback)(()=>this._getSessionFromTokenStore(t),[t]);return s.default.useSyncExternalStore(r,a,a)}async _signInToAccountWithTokens(e){if(!("accessToken"in e)||!("refreshToken"in e))throw new n.StackAssertionError("Invalid tokens object; can't sign in with this",{tokens:e});let t=this._getOrCreateTokenStore(await this._createCookieHelper());t.set(e);let r=this._getSessionFromTokenStore(t);this._currentUserCache.getOrWait([r],"write-only").catch(()=>{})}_hasPersistentTokenStore(e){return(void 0!==e?e:this._tokenStoreInit)!==null}_ensurePersistentTokenStore(e){if(!this._hasPersistentTokenStore(e))throw Error("Cannot call this function on a Stack app without a persistent token store. Make sure the tokenStore option on the constructor is set to a non-null value when initializing Stack.\n\nStack uses token stores to access access tokens of the current user. For example, on web frontends it is commonly the string value 'cookies' for cookie storage.")}_isInternalProject(){return"internal"===this.projectId}_ensureInternalProject(){if(!this._isInternalProject())throw Error("Cannot call this function on a Stack app with a project ID other than 'internal'.")}_clientProjectFromCrud(e){return{id:e.id,displayName:e.display_name,config:{signUpEnabled:e.config.sign_up_enabled,credentialEnabled:e.config.credential_enabled,magicLinkEnabled:e.config.magic_link_enabled,passkeyEnabled:e.config.passkey_enabled,clientTeamCreationEnabled:e.config.client_team_creation_enabled,clientUserDeletionEnabled:e.config.client_user_deletion_enabled,allowTeamApiKeys:e.config.allow_team_api_keys,allowUserApiKeys:e.config.allow_user_api_keys,oauthProviders:e.config.enabled_oauth_providers.map(e=>({id:e.id}))}}}_clientPermissionFromCrud(e){return{id:e.id}}_clientTeamUserFromCrud(e){return{id:e.user_id,teamProfile:{displayName:e.display_name,profileImageUrl:e.profile_image_url}}}_clientSentTeamInvitationFromCrud(e,t){return{id:t.id,recipientEmail:t.recipient_email,expiresAt:new Date(t.expires_at_millis),revoke:async()=>{await this._interface.revokeTeamInvitation(t.id,t.team_id,e),await this._teamInvitationsCache.refresh([e,t.team_id])}}}_clientReceivedTeamInvitationFromCrud(e,t){let r=this;return{id:t.id,teamId:t.team_id,teamDisplayName:t.team_display_name,recipientEmail:t.recipient_email,expiresAt:new Date(t.expires_at_millis),accept:async()=>{await r._interface.acceptTeamInvitationById(t.id,e),await Promise.all([r._currentUserTeamInvitationsCache.refresh([e]),r._currentUserTeamsCache.refresh([e]),r._teamInvitationsCache.refresh([e,t.team_id])])}}}_baseApiKeyFromCrud(e){return{id:e.id,description:e.description,expiresAt:e.expires_at_millis?new Date(e.expires_at_millis):void 0,manuallyRevokedAt:e.manually_revoked_at_millis?new Date(e.manually_revoked_at_millis):null,createdAt:new Date(e.created_at_millis),..."team"===e.type?{type:"team",teamId:e.team_id}:{type:"user",userId:e.user_id},value:"string"==typeof e.value?e.value:{lastFour:e.value.last_four},isValid:function(){return null===this.whyInvalid()},whyInvalid:function(){return this.manuallyRevokedAt?"manually-revoked":this.expiresAt&&this.expiresAt<new Date?"expired":null}}}_clientApiKeyFromCrud(e,t){return{...this._baseApiKeyFromCrud(t),async revoke(){await this.update({revoked:!0})},update:async r=>{await this._interface.updateProjectApiKey("team"===t.type?{team_id:t.team_id}:{user_id:t.user_id},t.id,r,e,"client"),"team"===t.type?await this._teamApiKeysCache.refresh([e,t.team_id]):await this._userApiKeysCache.refresh([e])}}}_clientTeamFromCrud(e,t){let r=this;return{id:e.id,displayName:e.display_name,profileImageUrl:e.profile_image_url,clientMetadata:e.client_metadata,clientReadOnlyMetadata:e.client_read_only_metadata,...this._createCustomer(e.id,"team",t),async inviteUser(a){await r._interface.sendTeamInvitation({teamId:e.id,email:a.email,session:t,callbackUrl:a.callbackUrl??eh(r.urls.teamInvitation,"callbackUrl")}),await r._teamInvitationsCache.refresh([t,e.id])},listUsers:async()=>u.Result.orThrow(await r._teamMemberProfilesCache.getOrWait([t,e.id],"write-only")).map(e=>r._clientTeamUserFromCrud(e)),useUsers:()=>G(r._teamMemberProfilesCache,[t,e.id],"team.useUsers()").map(e=>r._clientTeamUserFromCrud(e)),listInvitations:async()=>u.Result.orThrow(await r._teamInvitationsCache.getOrWait([t,e.id],"write-only")).map(e=>r._clientSentTeamInvitationFromCrud(t,e)),useInvitations:()=>G(r._teamInvitationsCache,[t,e.id],"team.useInvitations()").map(e=>r._clientSentTeamInvitationFromCrud(t,e)),async update(a){await r._interface.updateTeam({data:{display_name:a.displayName,profile_image_url:a.profileImageUrl,client_metadata:a.clientMetadata},teamId:e.id},t),await r._currentUserTeamsCache.refresh([t])},async delete(){await r._interface.deleteTeam(e.id,t),await r._currentUserTeamsCache.refresh([t])},useApiKeys:()=>G(r._teamApiKeysCache,[t,e.id],"team.useApiKeys()").map(e=>r._clientApiKeyFromCrud(t,e)),listApiKeys:async()=>u.Result.orThrow(await r._teamApiKeysCache.getOrWait([t,e.id],"write-only")).map(e=>r._clientApiKeyFromCrud(t,e)),async createApiKey(a){let s=await r._interface.createProjectApiKey(await em("team",e.id,a),t,"client");return await r._teamApiKeysCache.refresh([t,e.id]),r._clientApiKeyFromCrud(t,s)}}}_clientContactChannelFromCrud(e,t){let r=this;return{id:e.id,value:e.value,type:e.type,isVerified:e.is_verified,isPrimary:e.is_primary,usedForAuth:e.used_for_auth,async sendVerificationEmail(a){await r._interface.sendCurrentUserContactChannelVerificationEmail(e.id,a?.callbackUrl||eh(r.urls.emailVerification,"callbackUrl"),t)},async update(a){await r._interface.updateClientContactChannel(e.id,{value:a.value,used_for_auth:a.usedForAuth,is_primary:a.isPrimary},t),await r._clientContactChannelsCache.refresh([t])},async delete(){await r._interface.deleteClientContactChannel(e.id,t),await r._clientContactChannelsCache.refresh([t])}}}_clientNotificationCategoryFromCrud(e,t){let r=this;return{id:e.notification_category_id,name:e.notification_category_name,enabled:e.enabled,canDisable:e.can_disable,async setEnabled(a){await r._interface.setNotificationsEnabled(e.notification_category_id,a,t),await r._notificationCategoriesCache.refresh([t])}}}_clientOAuthProviderFromCrud(e,t){let r=this;return{id:e.id,type:e.type,userId:e.user_id,email:e.email,allowSignIn:e.allow_sign_in,allowConnectedAccounts:e.allow_connected_accounts,async update(a){try{return await r._interface.updateOAuthProvider(e.user_id,e.id,{allow_sign_in:a.allowSignIn,allow_connected_accounts:a.allowConnectedAccounts},t),await Promise.all([r._currentUserOAuthProvidersCache.refresh([t]),r._currentUserConnectedAccountsCache.refresh([t])]),u.Result.ok(void 0)}catch(e){if(l.KnownErrors.OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(e))return u.Result.error(e);throw e}},async delete(){await r._interface.deleteOAuthProvider(e.user_id,e.id,t),await Promise.all([r._currentUserOAuthProvidersCache.refresh([t]),r._currentUserConnectedAccountsCache.refresh([t])])}}}_clientItemFromCrud(e){return{displayName:e.display_name,quantity:e.quantity,nonNegativeQuantity:Math.max(0,e.quantity)}}_customerProductsFromResponse(e){return Object.assign(e.items.map(e=>({id:e.id,quantity:e.quantity,displayName:e.product.display_name,customerType:e.product.customer_type,isServerOnly:e.product.server_only,stackable:e.product.stackable,type:e.type,subscription:e.subscription?{subscriptionId:e.subscription.subscription_id,currentPeriodEnd:e.subscription.current_period_end?new Date(e.subscription.current_period_end):null,cancelAtPeriodEnd:e.subscription.cancel_at_period_end,isCancelable:e.subscription.is_cancelable}:null,switchOptions:e.switch_options?.map(e=>({productId:e.product_id,displayName:e.product.display_name,prices:e.product.prices}))})),{nextCursor:e.pagination.next_cursor??null})}_customerInvoicesFromResponse(e){return Object.assign(e.items.map(e=>({status:e.status,amountTotal:e.amount_total,hostedInvoiceUrl:e.hosted_invoice_url,createdAt:new Date(e.created_at_millis)})),{nextCursor:e.pagination.next_cursor??null})}_customerBillingFromResponse(e){return{hasCustomer:e.has_customer,defaultPaymentMethod:e.default_payment_method}}_createAuth(e){let t=this;return{_internalSession:e,currentSession:{async getTokens(){let t=await e.getOrFetchLikelyValidTokens(2e4,75e3);return{accessToken:t?.accessToken.token??null,refreshToken:t?.refreshToken?.token??null}},useTokens(){let[t,r]=s.default.useState(0);s.default.useEffect(()=>{let{unsubscribe:t}=e.startRefreshingAccessToken(3e4,6e4),{unsubscribe:a}=e.onInvalidate(()=>r(e=>e+1)),{unsubscribe:s}=e.onAccessTokenChange(()=>r(e=>e+1));return()=>{t(),a(),s()}},[]);let a=e.isKnownToBeInvalid()?null:e.getAccessTokenIfNotExpiredYet(2e4,75e3);return null===a&&(a=(0,d.use)(e.getOrFetchLikelyValidTokens(2e4,75e3))?.accessToken??null),{accessToken:a?.token??null,refreshToken:e.getRefreshToken()?.token??null}}},async getAccessToken(){return(await this.currentSession.getTokens()).accessToken},useAccessToken(){return this.currentSession.useTokens().accessToken},async getRefreshToken(){return(await this.currentSession.getTokens()).refreshToken},useRefreshToken(){return this.currentSession.useTokens().refreshToken},async getAuthHeaders(){return{"x-stack-auth":JSON.stringify(await this.getAuthJson())}},useAuthHeaders(){return{"x-stack-auth":JSON.stringify(this.useAuthJson())}},async getAuthJson(){return await this.currentSession.getTokens()},useAuthJson(){return this.currentSession.useTokens()},signOut:r=>t._signOut(e,r)}}_editableTeamProfileFromCrud(e,t){let r=this;return{displayName:e.display_name,profileImageUrl:e.profile_image_url,async update(a){await r._interface.updateTeamMemberProfile({teamId:e.team_id,userId:e.user_id,profile:{display_name:a.displayName,profile_image_url:a.profileImageUrl}},t),await r._currentUserTeamProfileCache.refresh([t,e.team_id])}}}_createBaseUser(e){return{id:e.id,displayName:e.display_name,primaryEmail:e.primary_email,primaryEmailVerified:e.primary_email_verified,profileImageUrl:e.profile_image_url,signedUpAt:new Date(e.signed_up_at_millis),clientMetadata:e.client_metadata,clientReadOnlyMetadata:e.client_read_only_metadata,hasPassword:e.has_password,emailAuthEnabled:e.auth_with_email,otpAuthEnabled:e.otp_auth_enabled,oauthProviders:e.oauth_providers,passkeyAuthEnabled:e.passkey_auth_enabled,isMultiFactorRequired:e.requires_totp_mfa,isAnonymous:e.is_anonymous,isRestricted:e.is_restricted,restrictedReason:e.restricted_reason,toClientJson:()=>e}}_createUserExtraFromCurrent(e,t){let r=this;return{getActiveSessions:async()=>(await r._interface.listSessions(t)).items.map(e=>r._clientSessionFromCrud(e)),async revokeSession(e){await r._interface.deleteSession(e,t)},setDisplayName(e){return this.update({displayName:e})},setClientMetadata(e){return this.update({clientMetadata:e})},async setSelectedTeam(e){await this.update({selectedTeamId:"string"==typeof e?e:e?.id??null})},getConnectedAccount:async function e(e,a){let s=a?.scopes?.join(" ")??"";if("object"==typeof e&&"provider"in e&&"providerAccountId"in e){let{provider:a,providerAccountId:s}=e,i=u.Result.orThrow(await r._currentUserConnectedAccountsCache.getOrWait([t],"write-only")).find(e=>e.provider===a&&e.providerAccountId===s);return i||null}return u.Result.orThrow(await r._currentUserOAuthConnectionCache.getOrWait([t,e,s,a?.or==="redirect"],"write-only"))},useConnectedAccount:function(e,a){let s=a?.scopes?.join(" ")??"";if("object"==typeof e&&"provider"in e&&"providerAccountId"in e){let{provider:a,providerAccountId:s}=e;return G(r._currentUserConnectedAccountsCache,[t],"user.useConnectedAccount()").find(e=>e.provider===a&&e.providerAccountId===s)??null}return G(r._currentUserOAuthConnectionCache,[t,e,s,a?.or==="redirect"],"user.useConnectedAccount()")},listConnectedAccounts:async()=>u.Result.orThrow(await r._currentUserConnectedAccountsCache.getOrWait([t],"write-only")),useConnectedAccounts:()=>G(r._currentUserConnectedAccountsCache,[t],"user.useConnectedAccounts()"),async linkConnectedAccount(e,a){let s=a?.scopes?.join(" ")??"";await tn(r._interface,{provider:e,redirectUrl:r.urls.oauthCallback,errorRedirectUrl:r.urls.error,providerScope:(0,b.mergeScopeStrings)(s,(r._oauthScopesOnSignIn[e]??[]).join(" "))},t),await (0,o.neverResolve)()},async getOrLinkConnectedAccount(e,a){for(let s of u.Result.orThrow(await r._currentUserConnectedAccountsCache.getOrWait([t],"write-only")).filter(t=>t.provider===e))if("ok"===(await s.getAccessToken({scopes:a?.scopes})).status)return s;return await this.linkConnectedAccount(e,a),await (0,o.neverResolve)()},useOrLinkConnectedAccount(e,a){let s=a?.scopes?.join(" ")??"";return G(r._currentUserValidConnectedAccountForProviderCache,[t,e,s],"user.useOrLinkConnectedAccount()")},async getTeam(e){return(await this.listTeams()).find(t=>t.id===e)??null},useTeam(e){let t=this.useTeams();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])},listTeams:async()=>u.Result.orThrow(await r._currentUserTeamsCache.getOrWait([t],"write-only")).map(e=>r._clientTeamFromCrud(e,t)),useTeams(){let e=G(r._currentUserTeamsCache,[t],"user.useTeams()");return(0,s.useMemo)(()=>e.map(e=>r._clientTeamFromCrud(e,t)),[e])},async createTeam(e){let a=await r._interface.createClientTeam({display_name:e.displayName,profile_image_url:e.profileImageUrl,creator_user_id:"me"},t);return await r._currentUserTeamsCache.refresh([t]),await this.update({selectedTeamId:a.id}),r._clientTeamFromCrud(a,t)},async leaveTeam(e){await r._interface.leaveTeam(e.id,t)},listTeamInvitations:async()=>u.Result.orThrow(await r._currentUserTeamInvitationsCache.getOrWait([t],"write-only")).map(e=>r._clientReceivedTeamInvitationFromCrud(t,e)),useTeamInvitations(){let e=G(r._currentUserTeamInvitationsCache,[t],"user.useTeamInvitations()");return(0,s.useMemo)(()=>e.map(e=>r._clientReceivedTeamInvitationFromCrud(t,e)),[e])},async listPermissions(e,a){if(e&&"id"in e){let s=a?.recursive??!0;return u.Result.orThrow(await r._currentUserPermissionsCache.getOrWait([t,e.id,s],"write-only")).map(e=>r._clientPermissionFromCrud(e))}{let a=e?.recursive??!0;return u.Result.orThrow(await r._currentUserProjectPermissionsCache.getOrWait([t,a],"write-only")).map(e=>r._clientPermissionFromCrud(e))}},usePermissions(e,a){if(e&&"id"in e){let i=a?.recursive??!0,n=G(r._currentUserPermissionsCache,[t,e.id,i],"user.usePermissions()");return(0,s.useMemo)(()=>n.map(e=>r._clientPermissionFromCrud(e)),[n])}{let a=e?.recursive??!0,i=G(r._currentUserProjectPermissionsCache,[t,a],"user.usePermissions()");return(0,s.useMemo)(()=>i.map(e=>r._clientPermissionFromCrud(e)),[i])}},usePermission(e,t){if(e&&"string"!=typeof e){let r=this.usePermissions(e);return(0,s.useMemo)(()=>r.find(e=>e.id===t)??null,[r,t])}{let t=this.usePermissions();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])}},async getPermission(e,t){return e&&"string"!=typeof e?(await this.listPermissions(e)).find(e=>e.id===t)??null:(await this.listPermissions()).find(t=>t.id===e)??null},async hasPermission(e,t){return e&&"string"!=typeof e?await this.getPermission(e,t)!==null:await this.getPermission(e)!==null},update:async e=>await r._updateClientUser(e,t),async sendVerificationEmail(a){if(!e.primary_email)throw new n.StackAssertionError("User does not have a primary email");return await r._interface.sendVerificationEmail(e.primary_email,a?.callbackUrl??eh(r.urls.emailVerification,"callbackUrl"),t)},async updatePassword(e){let a=await r._interface.updatePassword(e,t);return await r._currentUserCache.refresh([t]),a},async setPassword(e){let a=await r._interface.setPassword(e,t);return await r._currentUserCache.refresh([t]),a},selectedTeam:e.selected_team&&this._clientTeamFromCrud(e.selected_team,t),async getTeamProfile(e){let a=u.Result.orThrow(await r._currentUserTeamProfileCache.getOrWait([t,e.id],"write-only"));return r._editableTeamProfileFromCrud(a,t)},useTeamProfile(e){let a=G(r._currentUserTeamProfileCache,[t,e.id],"user.useTeamProfile()");return r._editableTeamProfileFromCrud(a,t)},async delete(){await r._interface.deleteCurrentUser(t),t.markInvalid()},listContactChannels:async()=>u.Result.orThrow(await r._clientContactChannelsCache.getOrWait([t],"write-only")).map(e=>r._clientContactChannelFromCrud(e,t)),useContactChannels:()=>G(r._clientContactChannelsCache,[t],"user.useContactChannels()").map(e=>r._clientContactChannelFromCrud(e,t)),async createContactChannel(e){let a=await r._interface.createClientContactChannel({value:e.value,type:e.type,used_for_auth:e.usedForAuth,is_primary:e.isPrimary,user_id:"me"},t);return await r._clientContactChannelsCache.refresh([t]),r._clientContactChannelFromCrud(a,t)},useNotificationCategories:()=>G(r._notificationCategoriesCache,[t],"user.useNotificationCategories()").map(e=>r._clientNotificationCategoryFromCrud(e,t)),listNotificationCategories:async()=>u.Result.orThrow(await r._notificationCategoriesCache.getOrWait([t],"write-only")).map(e=>r._clientNotificationCategoryFromCrud(e,t)),useApiKeys:()=>G(r._userApiKeysCache,[t],"user.useApiKeys()").map(e=>r._clientApiKeyFromCrud(t,e)),listApiKeys:async()=>(await r._interface.listProjectApiKeys({user_id:"me"},t,"client")).map(e=>r._clientApiKeyFromCrud(t,e)),async createApiKey(e){let a=await r._interface.createProjectApiKey(await em("user","me",e),t,"client");return await r._userApiKeysCache.refresh([t]),r._clientApiKeyFromCrud(t,a)},useOAuthProviders:()=>G(r._currentUserOAuthProvidersCache,[t],"user.useOAuthProviders()").map(e=>r._clientOAuthProviderFromCrud(e,t)),listOAuthProviders:async()=>u.Result.orThrow(await r._currentUserOAuthProvidersCache.getOrWait([t],"write-only")).map(e=>r._clientOAuthProviderFromCrud(e,t)),useOAuthProvider(e){let t=this.useOAuthProviders();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])},async getOAuthProvider(e){return(await this.listOAuthProviders()).find(t=>t.id===e)??null},async registerPasskey(e){let a,s=(await r._getCurrentUrl())?.hostname;if(!s)throw new n.StackAssertionError("hostname must be provided if the Stack App does not have a redirect method");let i=await r._interface.initiatePasskeyRegistration({},t);if("ok"!==i.status)return u.Result.error(new l.KnownErrors.PasskeyRegistrationFailed("Failed to get initiation options for passkey registration"));let{options_json:o,code:c}=i.data;if("THIS_VALUE_WILL_BE_REPLACED.example.com"!==o.rp.id)throw new n.StackAssertionError(`Expected returned RP ID from server to equal sentinel, but found ${o.rp.id}`);o.rp.id=s;try{a=await el({optionsJSON:o})}catch(e){if(e instanceof es)return u.Result.error(new l.KnownErrors.PasskeyWebAuthnError(e.message,e.name));return(0,n.captureError)("passkey-registration-failed",e),u.Result.error(new l.KnownErrors.PasskeyRegistrationFailed("Failed to start passkey registration due to unknown error"))}let d=await r._interface.registerPasskey({credential:a,code:c},t);return await r._refreshUser(t),d}}}_createInternalUserExtra(e){let t=this;return this._ensureInternalProject(),{createProject:r=>t._createProject(e,r),async transferProject(r,a){await t._interface.transferProject(e,r,a),await t._refreshProject()},listOwnedProjects:()=>t._listOwnedProjects(e),useOwnedProjects:()=>t._useOwnedProjects(e)}}_createCustomer(e,t,r){let a=this,s=r??a._interface.createSession({refreshToken:null}),i="user"===t?{userId:e}:{teamId:e};return{async getBilling(){let r=u.Result.orThrow(await a._customerBillingCache.getOrWait([s,t,e],"write-only"));return a._customerBillingFromResponse(r)},useBilling(){let r=G(a._customerBillingCache,[s,t,e],"customer.useBilling()");return a._customerBillingFromResponse(r)},async createPaymentMethodSetupIntent(){let r=await a._interface.createCustomerPaymentMethodSetupIntent(t,e,s);return{clientSecret:r.client_secret,stripeAccountId:r.stripe_account_id}},async setDefaultPaymentMethodFromSetupIntent(r){let i=await a._interface.setDefaultCustomerPaymentMethodFromSetupIntent(t,e,r,s);return await a._customerBillingCache.refresh([s,t,e]),i.default_payment_method},getItem:async e=>await a.getItem({itemId:e,...i}),useItem:e=>a.useItem({itemId:e,...i}),listProducts:async e=>await a.listProducts({...e,...i}),useProducts:e=>a.useProducts({...e,...i}),listInvoices:async e=>await a.listInvoices({...e,...i}),useInvoices:e=>a.useInvoices({...e,...i}),createCheckoutUrl:async r=>await a._interface.createCheckoutUrl(t,e,r.productId,s,r.returnUrl,"client"),async switchSubscription(r){await a._interface.switchSubscription({customer_type:t,customer_id:e,from_product_id:r.fromProductId,to_product_id:r.toProductId,price_id:r.priceId,quantity:r.quantity},s),await a._customerBillingCache.refresh([s,t,e]),"user"===t?await a._userProductsCache.invalidateWhere(([t,r])=>t===s&&r===e):await a._teamProductsCache.invalidateWhere(([t,r])=>t===s&&r===e)}}}async getItem(e){let t,r=await this._getSession();return t="userId"in e?u.Result.orThrow(await this._userItemCache.getOrWait([r,e.userId,e.itemId],"write-only")):"teamId"in e?u.Result.orThrow(await this._teamItemCache.getOrWait([r,e.teamId,e.itemId],"write-only")):u.Result.orThrow(await this._customItemCache.getOrWait([r,e.customCustomerId,e.itemId],"write-only")),this._clientItemFromCrud(t)}useItem(e){let t=this._useSession(),[r,a]="userId"in e?[this._userItemCache,e.userId]:"teamId"in e?[this._teamItemCache,e.teamId]:[this._customItemCache,e.customCustomerId],s=G(r,[t,a,e.itemId],"app.useItem()");return this._clientItemFromCrud(s)}async listProducts(e){let t=(await this.getUser())?._internalSession??await this._getSession();if("userId"in e){let r=u.Result.orThrow(await this._userProductsCache.getOrWait([t,e.userId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(r)}if("teamId"in e){let r=u.Result.orThrow(await this._teamProductsCache.getOrWait([t,e.teamId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(r)}let r=u.Result.orThrow(await this._customProductsCache.getOrWait([t,e.customCustomerId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(r)}async listInvoices(e){let t=await this._getSession();if("userId"in e){let r=u.Result.orThrow(await this._userInvoicesCache.getOrWait([t,e.userId,e.cursor??null,e.limit??null],"write-only"));return this._customerInvoicesFromResponse(r)}let r=u.Result.orThrow(await this._teamInvoicesCache.getOrWait([t,e.teamId,e.cursor??null,e.limit??null],"write-only"));return this._customerInvoicesFromResponse(r)}async cancelSubscription(e){let t=await this._getSession(),r=await this.getUser();if(!r)throw new l.KnownErrors.UserAuthenticationRequired;let a="teamId"in e?"team":"user",s="teamId"in e?e.teamId:r.id;await this._interface.cancelSubscription({customer_type:a,customer_id:s,product_id:e.productId,subscription_id:e.subscriptionId},t),"user"===a?await this._userProductsCache.invalidateWhere(([e,r])=>e===t&&r===s):await this._teamProductsCache.invalidateWhere(([e,r])=>e===t&&r===s)}useProducts(e){let t=this._useSession(),r=G("userId"in e?this._userProductsCache:"teamId"in e?this._teamProductsCache:this._customProductsCache,[t,"userId"in e?e.userId:"teamId"in e?e.teamId:e.customCustomerId,e.cursor??null,e.limit??null],"clientApp.useProducts()");return this._customerProductsFromResponse(r)}useInvoices(e){let t=this._useSession(),r=G("userId"in e?this._userInvoicesCache:this._teamInvoicesCache,[t,"userId"in e?e.userId:e.teamId,e.cursor??null,e.limit??null],"clientApp.useInvoices()");return this._customerInvoicesFromResponse(r)}_currentUserFromCrud(e,t){return ev({...this._createBaseUser(e),...this._createAuth(t),...this._createUserExtraFromCurrent(e,t),...this._isInternalProject()?this._createInternalUserExtra(t):{},...this._createCustomer(e.id,"user",t)})}_clientSessionFromCrud(e){return{id:e.id,userId:e.user_id,createdAt:new Date(e.created_at),isImpersonation:e.is_impersonation,lastUsedAt:e.last_used_at?new Date(e.last_used_at):void 0,isCurrentSession:e.is_current_session??!1,geoInfo:e.last_used_at_end_user_ip_info}}_getOwnedAdminApp(t,r){return this._ownedAdminApps.has([r,t])||this._ownedAdminApps.set([r,t],new e.LazyStackAdminAppImpl.value({baseUrl:this._interface.options.getBaseUrl(),projectId:t,tokenStore:null,projectOwnerSession:r,noAutomaticPrefetch:!0})),this._ownedAdminApps.get([r,t])}get projectId(){return this._interface.projectId}get version(){return L}_getBotChallengeSiteKeys(){if(!(0,f.isBrowserLike)())return null;let e=w.NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY;return e?{visibleSiteKey:e,invisibleSiteKey:w.NEXT_PUBLIC_STACK_BOT_CHALLENGE_INVISIBLE_SITE_KEY??e}:(this._botChallengeSiteKeysWarned||(this._botChallengeSiteKeysWarned=!0,console.warn("[stack-auth] NEXT_PUBLIC_STACK_BOT_CHALLENGE_SITE_KEY is not set — bot challenge fraud protection is disabled. Set the env variable to enable it.")),null)}_getBotChallengeFlowFailure(e){return e instanceof eI?{type:"cancelled",knownError:new l.KnownErrors.BotChallengeFailed("Bot challenge cancelled by user")}:e instanceof eP?{type:"failed",knownError:new l.KnownErrors.BotChallengeFailed(e.message)}:null}_normalizeBotChallengeResult(e){return"ok"===e.status?e:l.KnownErrors.BotChallengeRequired.isInstance(e.error)?((0,n.captureError)("bot-challenge-unexpected-after-flow",e.error),u.Result.error(new l.KnownErrors.BotChallengeFailed("Unexpected bot challenge after flow completion"))):u.Result.error(e.error)}_toInterfaceBotChallengeInput(e){return e.unavailable?{phase:"visible"}:{token:e.token,phase:e.phase}}async _executeResultWithBotChallengeFlow(e){let t,r=this._getBotChallengeSiteKeys();try{t=r?await ej({...r,action:e.action,execute:e.execute,isChallengeRequired:e=>"error"===e.status&&l.KnownErrors.BotChallengeRequired.isInstance(e.error)}):await e.execute({})}catch(t){let e=this._getBotChallengeFlowFailure(t);if(e)return u.Result.error(e.knownError);throw t}return this._normalizeBotChallengeResult(t)}async _isTrusted(e){return!!((0,m.isRelative)(e)||"u">typeof window&&window.location.origin===new URL(e).origin)||D({url:e,projectId:this.projectId})}get urls(){return B(this._urlOptions,{projectId:this.projectId})}_prefetchCrossDomainHandoffParamsIfNeeded(){let e="cookie"===this._tokenStoreInit||"nextjs-cookie"===this._tokenStoreInit;(0,f.isBrowserLike)()&&e&&!this._isPrefetchingCrossDomainHandoffParams&&null==this._getFreshPrefetchedCrossDomainHandoffParams()&&(this._isPrefetchingCrossDomainHandoffParams=!0,(0,o.runAsynchronously)(async()=>{try{if(!(0,f.isBrowserLike)())return;let{state:e,codeChallenge:t}=await ti();this._prefetchedCrossDomainHandoffParams={state:e,codeChallenge:t},this._prefetchedCrossDomainHandoffParamsFetchedAt=performance.now()}finally{this._isPrefetchingCrossDomainHandoffParams=!1}}))}_getCrossDomainHandoffParamsForUrlsGetter(e){let t=tv(e);if(null!=t)return t;let r=this._getFreshPrefetchedCrossDomainHandoffParams();return null!=r?r:(this._prefetchCrossDomainHandoffParamsIfNeeded(),null)}async _getCrossDomainHandoffParamsForRedirect(e){let t=tv(e);if(null!=t)return t;let r=this._getFreshPrefetchedCrossDomainHandoffParams();if(null!=r)return r;let{state:a,codeChallenge:s}=await ti();return this._prefetchedCrossDomainHandoffParams={state:a,codeChallenge:s},this._prefetchedCrossDomainHandoffParamsFetchedAt=performance.now(),{state:a,codeChallenge:s}}_getLocalOAuthCallbackHandlerUrl(){return U({urls:{...this._urlOptions,default:{type:"handler-component"},oauthCallback:{type:"handler-component"}},projectId:this.projectId}).oauthCallback}async _createCrossDomainAuthRedirectUrl(e){let t=await this._getSession(),r=await this._interface.sendClientRequest("/auth/oauth/cross-domain/authorize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({redirect_uri:e.redirectUri,state:e.state,code_challenge:e.codeChallenge,code_challenge_method:"S256",after_callback_redirect_url:e.afterCallbackRedirectUrl})},t);if(!r.ok)throw new n.StackAssertionError(`Cross-domain authorization endpoint failed: ${r.status} ${await r.text()}`);let a=await r.json();if(!("redirect_url"in a)||"string"!=typeof a.redirect_url)throw new n.StackAssertionError("Cross-domain authorization endpoint returned an invalid payload",{result:a});return a.redirect_url}_getFreshPrefetchedCrossDomainHandoffParams(){return null==this._prefetchedCrossDomainHandoffParams?null:performance.now()-this._prefetchedCrossDomainHandoffParamsFetchedAt>33e5?(this._prefetchedCrossDomainHandoffParams=null,this._prefetchedCrossDomainHandoffParamsFetchedAt=0,null):this._prefetchedCrossDomainHandoffParams}async _getCurrentUrl(){return"none"===this._redirectMethod?null:new URL(window.location.href)}async _redirectTo(e){"none"!==this._redirectMethod&&(tY&&"nextjs"===this._redirectMethod?tG.redirect(e.url.toString(),e.replace?tG.RedirectType.replace:tG.RedirectType.push):"object"==typeof this._redirectMethod&&this._redirectMethod.navigate?this._redirectMethod.navigate(e.url.toString()):e.replace?window.location.replace(e.url):window.location.assign(e.url),await (0,o.wait)(2e3))}useNavigate(){if("object"==typeof this._redirectMethod)return this._redirectMethod.useNavigate();if("window"===this._redirectMethod)return e=>window.location.assign(e);if("nextjs"!==this._redirectMethod)return e=>{};{let e=tG.useRouter();return t=>e.push(t)}}async _redirectIfTrusted(e,t){if(!await this._isTrusted(e))throw Error(`Redirect URL ${e} is not trusted; should be relative.`);return await this._redirectTo({url:e,...t})}async _redirectToHandler(e,t){let r=B(this._urlOptions,{projectId:this.projectId})[e];if(!r)throw Error(`No URL for handler name ${e}`);let a=tY||"u"<typeof window?null:new URL(window.location.href),s=await tk({handlerName:e,rawHandlerUrl:r,noRedirectBack:t?.noRedirectBack===!0,currentUrl:a,localOAuthCallbackUrl:this._getLocalOAuthCallbackHandlerUrl(),getCrossDomainHandoffParams:async e=>await this._getCrossDomainHandoffParamsForRedirect(e)});if("cross-domain-authorize"===s.type){let e=await this._createCrossDomainAuthRedirectUrl({redirectUri:s.redirectUri,state:s.state,codeChallenge:s.codeChallenge,afterCallbackRedirectUrl:s.afterCallbackRedirectUrl});await this._redirectTo({url:e,...t});return}await this._redirectIfTrusted(s.url,t)}async redirectToSignIn(e){return await this._redirectToHandler("signIn",e)}async redirectToSignUp(e){return await this._redirectToHandler("signUp",e)}async redirectToSignOut(e){return await this._redirectToHandler("signOut",e)}async redirectToEmailVerification(e){return await this._redirectToHandler("emailVerification",e)}async redirectToPasswordReset(e){return await this._redirectToHandler("passwordReset",e)}async redirectToForgotPassword(e){return await this._redirectToHandler("forgotPassword",e)}async redirectToHome(e){return await this._redirectToHandler("home",e)}async redirectToOAuthCallback(e){return await this._redirectToHandler("oauthCallback",e)}async redirectToMagicLinkCallback(e){return await this._redirectToHandler("magicLinkCallback",e)}async redirectToAfterSignIn(e){return await this._redirectToHandler("afterSignIn",e)}async redirectToAfterSignUp(e){return await this._redirectToHandler("afterSignUp",e)}async redirectToOnboarding(e){return await this._redirectToHandler("onboarding",e)}async redirectToAfterSignOut(e){return await this._redirectToHandler("afterSignOut",e)}async redirectToAccountSettings(e){return await this._redirectToHandler("accountSettings",e)}async redirectToError(e){return await this._redirectToHandler("error",e)}async redirectToTeamInvitation(e){return await this._redirectToHandler("teamInvitation",e)}async redirectToMfa(e){return await this._redirectToHandler("mfa",e)}async sendForgotPasswordEmail(e,t){return await this._interface.sendForgotPasswordEmail(e,t?.callbackUrl??eh(this.urls.passwordReset,"callbackUrl"))}async sendMagicLinkEmail(e,t){let r=t?.callbackUrl??eh(this.urls.magicLinkCallback,"callbackUrl");return await this._executeResultWithBotChallengeFlow({action:"send_magic_link_email",execute:async t=>await this._interface.sendMagicLinkEmail(e,r,this._toInterfaceBotChallengeInput(t))})}async resetPassword(e){return await this._interface.resetPassword(e)}async verifyPasswordResetCode(e){return await this._interface.verifyPasswordResetCode(e)}async verifyTeamInvitationCode(e){return await this._interface.acceptTeamInvitation({type:"check",code:e,session:await this._getSession()})}async acceptTeamInvitation(e){let t=await this._interface.acceptTeamInvitation({type:"use",code:e,session:await this._getSession()});return"ok"===t.status?u.Result.ok(void 0):u.Result.error(t.error)}async getTeamInvitationDetails(e){let t=await this._interface.acceptTeamInvitation({type:"details",code:e,session:await this._getSession()});return"ok"===t.status?u.Result.ok({teamDisplayName:t.data.team_display_name}):u.Result.error(t.error)}async verifyEmail(e){let t=await this._interface.verifyEmail(e);return await this._currentUserCache.refresh([await this._getSession()]),await this._clientContactChannelsCache.refresh([await this._getSession()]),t}async getUser(e){if(e?.or==="anonymous"&&!1===e.includeRestricted)throw Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");this._ensurePersistentTokenStore(e?.tokenStore);let t=await this._getSession(e?.tokenStore),r=u.Result.orThrow(await this._currentUserCache.getOrWait([t],"write-only")),a=e?.or==="anonymous"||e?.or==="anonymous-if-exists[deprecated]",s=e?.includeRestricted===!0||a;if(null===r||r.is_anonymous&&!a||r.is_restricted&&!s)switch(e?.or){case"redirect":!r?.is_anonymous&&r?.is_restricted?await this.redirectToOnboarding({replace:!0}):await this.redirectToSignIn({replace:!0});break;case"throw":throw Error("User is not signed in but getUser was called with { or: 'throw' }");case"anonymous":{let e=await this._signUpAnonymously();return await this.getUser({tokenStore:e,or:"anonymous-if-exists[deprecated]",includeRestricted:!0})??(0,n.throwErr)("Something went wrong while signing up anonymously")}case void 0:case"anonymous-if-exists[deprecated]":case"return-null":return null}return r&&this._currentUserFromCrud(r,t)}useUser(e){if(e?.or==="anonymous"&&!1===e.includeRestricted)throw Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");this._ensurePersistentTokenStore(e?.tokenStore);let t=this._useSession(e?.tokenStore),r=G(this._currentUserCache,[t],"clientApp.useUser()"),a=e?.or==="anonymous"||e?.or==="anonymous-if-exists[deprecated]",i=e?.includeRestricted===!0||a;if(null===r||r.is_anonymous&&!a||r.is_restricted&&!i)switch(e?.or){case"redirect":throw!r?.is_anonymous&&r?.is_restricted?(0,o.runAsynchronously)(this.redirectToOnboarding({replace:!0})):(0,o.runAsynchronously)(this.redirectToSignIn({replace:!0})),(0,d.suspend)(),new n.StackAssertionError("suspend should never return");case"throw":throw Error("User is not signed in but useUser was called with { or: 'throw' }");case"anonymous":throw(0,o.runAsynchronously)(async()=>{await this._signUpAnonymously(),"u">typeof window&&window.location.reload()}),(0,d.suspend)(),new n.StackAssertionError("suspend should never return");case void 0:case"anonymous-if-exists[deprecated]":case"return-null":r=null}return(0,s.useMemo)(()=>r&&this._currentUserFromCrud(r,t),[r,t,e?.or])}_getTokenPartialUserFromSession(e,t){let r=e.getAccessTokenIfNotExpiredYet(0,null);if(!r)return null;let a=r.payload.is_anonymous;return a&&"anonymous-if-exists"!==t.or?null:{id:r.payload.sub,primaryEmail:r.payload.email,displayName:r.payload.name,primaryEmailVerified:r.payload.email_verified,isAnonymous:a,isMultiFactorRequired:r.payload.requires_totp_mfa,isRestricted:r.payload.is_restricted,restrictedReason:r.payload.restricted_reason}}async _getPartialUserFromConvex(e){let t=await e.auth.getUserIdentity();return t?{id:t.subject,displayName:t.name??null,primaryEmail:t.email??null,primaryEmailVerified:t.email_verified,isAnonymous:t.is_anonymous,isMultiFactorRequired:t.requires_totp_mfa,isRestricted:t.is_restricted,restrictedReason:t.restricted_reason??null}:null}async getPartialUser(e){switch(e.from){case"token":{this._ensurePersistentTokenStore(e.tokenStore??this._tokenStoreInit);let t=await this._getSession(e.tokenStore);return this._getTokenPartialUserFromSession(t,e)}case"convex":return await this._getPartialUserFromConvex(e.ctx);default:throw Error(`Invalid 'from' option: ${e.from}`)}}usePartialUser(e){switch(e.from){case"token":{this._ensurePersistentTokenStore(e.tokenStore??this._tokenStoreInit);let t=this._useSession(e.tokenStore);return this._getTokenPartialUserFromSession(t,e)}case"convex":return G(this._convexPartialUserCache,[e.ctx],"clientApp.usePartialUser()");default:throw Error(`Invalid 'from' option: ${e.from}`)}}getConvexClientAuth(e){return async t=>{let r=await this._getSession(e.tokenStore??this._tokenStoreInit);return t.forceRefreshToken?(await r.fetchNewTokens())?.accessToken.token??null:(await r.getOrFetchLikelyValidTokens(2e4,75e3))?.accessToken.token??null}}async getConvexHttpClientAuth(e){return(await (await this._getSession(e.tokenStore)).getOrFetchLikelyValidTokens(2e4,75e3))?.accessToken.token??""}async _updateClientUser(e,t){let r=await this._interface.updateClientUser({display_name:e.displayName,client_metadata:e.clientMetadata,selected_team_id:e.selectedTeamId,totp_secret_base64:null!=e.totpMultiFactorSecret?(0,ey.encodeBase64)(e.totpMultiFactorSecret):e.totpMultiFactorSecret,profile_image_url:e.profileImageUrl,otp_auth_enabled:e.otpAuthEnabled,passkey_auth_enabled:e.passkeyAuthEnabled,primary_email:e.primaryEmail},t);return await this._refreshUser(t),r}async signInWithOAuth(e,t){let r;if("u"<typeof window)throw Error("signInWithOAuth can currently only be called in a browser environment");this._ensurePersistentTokenStore();let a=await this._getSession(),s=new URL(window.location.href),i=s.searchParams.has("after_auth_return_to")?s.toString():void 0,n=this._getBotChallengeSiteKeys(),{codeChallenge:c,state:d}=await ti(),p=async r=>await this._interface.authorizeOAuth({provider:e,redirectUrl:eh(t?.returnTo??this.urls.oauthCallback,"redirectUrl"),errorRedirectUrl:eh(this.urls.error,"errorRedirectUrl"),afterCallbackRedirectUrl:i,type:"authenticate",providerScope:this._oauthScopesOnSignIn[e]?.join(" "),codeChallenge:c,state:d,botChallenge:this._toInterfaceBotChallengeInput(r),session:a});try{r=n?await ej({...n,action:"oauth_authenticate",execute:p,isChallengeRequired:e=>"error"===e.status&&l.KnownErrors.BotChallengeRequired.isInstance(e.error)}):await p({})}catch(t){let e=this._getBotChallengeFlowFailure(t);if(e?.type==="cancelled")return;if(e?.type==="failed")throw e.knownError;throw t}let h=u.Result.orThrow(r);window.location.assign(h),await (0,o.neverResolve)()}async _experimentalMfa(e,t){throw"u">typeof window&&window.sessionStorage.setItem("stack_mfa_attempt_code",e.details?.attempt_code??(0,n.throwErr)("attempt code missing")),await this.redirectToMfa(),new n.StackAssertionError("we should have redirected in redirectToMfa()")}async _catchMfaRequiredError(e){try{return await e()}catch(e){if(l.KnownErrors.MultiFactorAuthenticationRequired.isInstance(e))return u.Result.ok(await this._experimentalMfa(e,await this._getSession()));throw e}}async signInWithCredential(e){let t;this._ensurePersistentTokenStore();let r=await this._getSession();try{t=await this._catchMfaRequiredError(async()=>await this._interface.signInWithCredential(e.email,e.password,r))}catch(e){if(l.KnownErrors.InvalidTotpCode.isInstance(e))return u.Result.error(e);throw e}return"ok"===t.status?(await this._signInToAccountWithTokens(t.data),e.noRedirect||await this.redirectToAfterSignIn({replace:!0}),u.Result.ok(void 0)):u.Result.error(t.error)}async signUpWithCredential(e){let t;if(e.noVerificationCallback&&e.verificationCallbackUrl)throw new n.StackAssertionError("verificationCallbackUrl is not allowed when noVerificationCallback is true");this._ensurePersistentTokenStore();let r=await this._getSession(),a=e.noVerificationCallback?void 0:e.verificationCallbackUrl??eh(this.urls.emailVerification,"verificationCallbackUrl"),s=async t=>{let s=await this._interface.signUpWithCredential(e.email,e.password,a,r,this._toInterfaceBotChallengeInput(t));return"error"===s.status&&s.error instanceof l.KnownErrors.RedirectUrlNotWhitelisted&&void 0!==a&&!e.verificationCallbackUrl&&((0,n.captureError)("signup-verification-url-not-whitelisted",new n.StackAssertionError("The auto-constructed verification callback URL is not whitelisted; proceeding without email verification",{emailVerificationRedirectUrl:a})),s=await this._interface.signUpWithCredential(e.email,e.password,void 0,r,this._toInterfaceBotChallengeInput(t))),s};return"ok"===(t=await this._executeResultWithBotChallengeFlow({action:"sign_up_with_credential",execute:s})).status?(await this._signInToAccountWithTokens(t.data),e.noRedirect||await this.redirectToAfterSignUp({replace:!0}),u.Result.ok(void 0)):u.Result.error(t.error)}async _signUpAnonymously(){return this._ensurePersistentTokenStore(),this._anonymousSignUpInProgress||(this._anonymousSignUpInProgress=(async()=>{this._ensurePersistentTokenStore();let e=await this._getSession(),t=await this._interface.signUpAnonymously(e);if("ok"===t.status)await this._signInToAccountWithTokens(t.data);else throw new n.StackAssertionError("signUpAnonymously() should never return an error");return this._anonymousSignUpInProgress=null,t.data})()),await this._anonymousSignUpInProgress}async signInWithMagicLink(e,t){let r;this._ensurePersistentTokenStore();let a=await this._getSession();try{r=await this._catchMfaRequiredError(async()=>await this._interface.signInWithMagicLink(e,a))}catch(e){if(l.KnownErrors.InvalidTotpCode.isInstance(e))return u.Result.error(e);throw e}return"ok"===r.status?(await this._signInToAccountWithTokens(r.data),t?.noRedirect||(r.data.newUser?await this.redirectToAfterSignUp({replace:!0}):await this.redirectToAfterSignIn({replace:!0})),u.Result.ok(void 0)):u.Result.error(r.error)}async promptCliLogin(e){let t=await this._interface.sendClientRequest("/auth/cli",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({expires_in_millis:e.expiresInMillis,...null!=e.anonRefreshToken?{anon_refresh_token:e.anonRefreshToken}:{}})},null);if(!t.ok)return u.Result.error(new l.KnownErrors.CliAuthError(`Failed to initiate CLI auth: ${t.status} ${await t.text()}`));let r=await t.json(),a=r.polling_code,s=r.login_code,i=`${e.appUrl}/handler/cli-auth-confirm?login_code=${encodeURIComponent(s)}`;e.promptLink?e.promptLink(i,s):(console.log(`Your verification code: ${s}`),console.log(`Please visit the following URL to authenticate:
${i}`));let n=0;for(;n<(e.maxAttempts??1/0);){n++;let t=await this._interface.sendClientRequest("/auth/cli/poll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({polling_code:a})},null);if(!t.ok)return u.Result.error(new l.KnownErrors.CliAuthError(`Failed to initiate CLI auth: ${t.status} ${await t.text()}`));let r=await t.json();if(201===t.status&&"success"===r.status)return u.Result.ok(r.refresh_token);if("waiting"===r.status){await (0,o.wait)(e.waitTimeMillis??2e3);continue}if("expired"===r.status)return u.Result.error(new l.KnownErrors.CliAuthExpiredError("CLI authentication request expired. Please try again."));if("used"===r.status)return u.Result.error(new l.KnownErrors.CliAuthUsedError("This authentication token has already been used."));return u.Result.error(new l.KnownErrors.CliAuthError(`Unexpected status from CLI auth polling: ${r.status}`))}return u.Result.error(new l.KnownErrors.CliAuthError("Timed out waiting for CLI authentication."))}async signInWithMfa(e,t,r){let a;this._ensurePersistentTokenStore();let s=await this._getSession();try{a=await this._catchMfaRequiredError(async()=>await this._interface.signInWithMfa(e,t,s))}catch(e){if(e instanceof l.KnownErrors.InvalidTotpCode)return u.Result.error(e);throw e}return"ok"===a.status?(await this._signInToAccountWithTokens(a.data),r?.noRedirect||(a.data.newUser?await this.redirectToAfterSignUp({replace:!0}):await this.redirectToAfterSignIn({replace:!0})),u.Result.ok(void 0)):u.Result.error(a.error)}async signInWithPasskey(){let e;this._ensurePersistentTokenStore();let t=await this._getSession();try{e=await this._catchMfaRequiredError(async()=>{let e=await this._interface.initiatePasskeyAuthentication({},t);if("ok"!==e.status)return u.Result.error(new l.KnownErrors.PasskeyAuthenticationFailed("Failed to get initiation options for passkey authentication"));let{options_json:r,code:a}=e.data;if("THIS_VALUE_WILL_BE_REPLACED.example.com"!==r.rpId)throw new n.StackAssertionError(`Expected returned RP ID from server to equal sentinel, but found ${r.rpId}`);r.rpId=window.location.hostname;let s=await eu({optionsJSON:r});return await this._interface.signInWithPasskey({authentication_response:s,code:a},t)})}catch(e){if(e instanceof es)return u.Result.error(new l.KnownErrors.PasskeyWebAuthnError(e.message,e.name));return u.Result.error(new l.KnownErrors.PasskeyAuthenticationFailed("Failed to sign in with passkey"))}return"ok"===e.status?(await this._signInToAccountWithTokens(e.data),await this.redirectToAfterSignIn({replace:!0}),u.Result.ok(void 0)):u.Result.error(e.error)}async callOAuthCallback(){let e;if("u"<typeof window)throw Error("callOAuthCallback can currently only be called in a browser environment");this._ensurePersistentTokenStore();let t=this.urls.oauthCallback,r=new URL(window.location.href);"1"===r.searchParams.get(tm)&&(r.searchParams.delete("code"),r.searchParams.delete("state"),t=r.toString());try{e=await this._catchMfaRequiredError(async()=>await to(this._interface,t))}catch(e){if(l.KnownErrors.InvalidTotpCode.isInstance(e))return alert("Invalid TOTP code. Please try signing in again."),!1;throw e}return"ok"===e.status&&!!e.data&&((await this._signInToAccountWithTokens(e.data),"afterCallbackRedirectUrl"in e.data&&e.data.afterCallbackRedirectUrl)?await this._redirectTo({url:e.data.afterCallbackRedirectUrl,replace:!0}):e.data.newUser?await this.redirectToAfterSignUp({replace:!0}):await this.redirectToAfterSignIn({replace:!0}),!0)}async _signOut(e,t){this._eventTracker?.clearBuffer(),this._sessionRecorder?.clearBuffer(),await v.storeLock.withWriteLock(async()=>{await this._interface.signOut(e),t?.redirectUrl?await this._redirectTo({url:t.redirectUrl,replace:!0}):await this.redirectToAfterSignOut()})}async signOut(e){let t=await this.getUser({tokenStore:e?.tokenStore??void 0});t&&await t.signOut({redirectUrl:e?.redirectUrl})}async getAccessToken(e){let t=await this.getUser({tokenStore:e?.tokenStore??void 0});return t?await t.getAccessToken():null}useAccessToken(e){let t=this.useUser({tokenStore:e?.tokenStore??void 0});return t?t.useAccessToken():null}async getRefreshToken(e){let t=await this.getUser({tokenStore:e?.tokenStore??void 0});return t?await t.getRefreshToken():null}useRefreshToken(e){let t=this.useUser({tokenStore:e?.tokenStore??void 0});return t?t.useRefreshToken():null}async getAuthHeaders(e){return{"x-stack-auth":JSON.stringify(await this.getAuthJson(e))}}useAuthHeaders(e){return{"x-stack-auth":JSON.stringify(this.useAuthJson(e))}}async getAuthJson(e){let t=await this.getUser({tokenStore:e?.tokenStore??void 0});return t?await t.getAuthJson():{accessToken:null,refreshToken:null}}useAuthJson(e){let t=this.useUser({tokenStore:e?.tokenStore??void 0});return t?t.useAuthJson():{accessToken:null,refreshToken:null}}async getProject(){let e=u.Result.orThrow(await this._currentProjectCache.getOrWait([],"write-only"));return this._clientProjectFromCrud(e)}useProject(){let e=G(this._currentProjectCache,[],"clientApp.useProject()");return(0,s.useMemo)(()=>this._clientProjectFromCrud(e),[e])}async _listOwnedProjects(e){return this._ensureInternalProject(),u.Result.orThrow(await this._ownedProjectsCache.getOrWait([e],"write-only")).map(t=>this._getOwnedAdminApp(t.id,e)._adminOwnedProjectFromCrud(t,()=>this._refreshOwnedProjects(e)))}_useOwnedProjects(e){this._ensureInternalProject();let t=G(this._ownedProjectsCache,[e],"clientApp.useOwnedProjects()");return(0,s.useMemo)(()=>t.map(t=>this._getOwnedAdminApp(t.id,e)._adminOwnedProjectFromCrud(t,()=>this._refreshOwnedProjects(e))),[t])}async _createProject(e,t){this._ensureInternalProject();let r=await this._interface.createProject({...eb(t),display_name:t.displayName,owner_team_id:t.teamId},e),a=this._getOwnedAdminApp(r.id,e)._adminOwnedProjectFromCrud(r,()=>this._refreshOwnedProjects(e));return await this._refreshOwnedProjects(e),a}async _refreshUser(e){await this._refreshSession(e)}async _refreshSession(e){await Promise.all([this._currentUserCache.refresh([e]),this._currentUserConnectedAccountsCache.refresh([e])]),e.suggestAccessTokenExpired()}async _refreshUsers(){}async _refreshProject(){await this._currentProjectCache.refresh([])}async _refreshOwnedProjects(e){await this._ownedProjectsCache.refresh([e])}static get[y.stackAppInternalsSymbol](){return{fromClientJson:t=>{let r=JSON.stringify((0,h.omit)(t,[])),a=tQ.get(t.uniqueIdentifier);if(a){let[e,s]=a;if(void 0!==e&&e!==r)throw new n.StackAssertionError("The provided app JSON does not match the configuration of the existing client app with the same unique identifier",{providedObj:t,existingString:e});return s}let{analytics:s,...i}=(0,h.omit)(t,["uniqueIdentifier"]);return new e({...i,analytics:function(e){if(!e?.replays?.blockClass)return e;let{blockClass:t,...r}=e.replays;return"object"==typeof t&&"__regexp"in t?{replays:{...r,blockClass:new RegExp(t.__regexp,t.__flags)}}:e}(s)},{uniqueIdentifier:t.uniqueIdentifier,checkString:r})}}}get[y.stackAppInternalsSymbol](){return{toClientJson:()=>{if("string"!=typeof this._redirectMethod)throw new n.StackAssertionError("Cannot serialize to JSON from an application with a non-string redirect method");let e="publishableClientKey"in this._interface.options?this._interface.options.publishableClientKey:void 0;return{baseUrl:this._options.baseUrl,projectId:this.projectId,...null!=e?{publishableClientKey:e}:{},tokenStore:this._tokenStoreInit,urls:this._urlOptions,oauthScopesOnSignIn:this._oauthScopesOnSignIn,uniqueIdentifier:this._getUniqueIdentifier(),redirectMethod:this._redirectMethod,extraRequestHeaders:this._options.extraRequestHeaders,analytics:function(e){if(!e?.replays?.blockClass)return e;let{blockClass:t,...r}=e.replays;return t instanceof RegExp?{replays:{...r,blockClass:{__regexp:t.source,__flags:t.flags}}}:e}(this._analyticsOptions)}},setCurrentUser:e=>{(0,o.runAsynchronously)(async()=>{await this._currentUserCache.forceSetCachedValueAsync([await this._getSession()],u.Result.fromPromise(e))})},getConstructorOptions:()=>this._options,sendSessionReplayBatch:async(e,t)=>await this._interface.sendSessionReplayBatch(e,await this._getSession(),t),sendAnalyticsEventBatch:async(e,t)=>await this._interface.sendAnalyticsEventBatch(e,await this._getSession(),t),addRequestListener:e=>this._interface.addRequestListener(e),sendRequest:async(e,t,r="client")=>await this._interface.sendClientRequest(e,t,await this._getSession(),r),refreshOwnedProjects:async()=>{await this._refreshOwnedProjects(await this._getSession())},signInWithTokens:async e=>{await this._signInToAccountWithTokens(e)}}}},t0=class extends tZ{_createServerCustomer(e,t){let r=this,a="user"===t?r._serverUserProductsCache:r._serverTeamProductsCache,s="user"===t?{userId:e}:{teamId:e};return{...this._createCustomer(e,t,null),getItem:async e=>await r.getItem({itemId:e,...s}),useItem:e=>r.useItem({itemId:e,...s}),async grantProduct(s){"user"===t?"productId"in s?await r.grantProduct({userId:e,productId:s.productId,quantity:s.quantity}):await r.grantProduct({userId:e,product:s.product,quantity:s.quantity}):"productId"in s?await r.grantProduct({teamId:e,productId:s.productId,quantity:s.quantity}):await r.grantProduct({teamId:e,product:s.product,quantity:s.quantity}),await a.refresh([e,null,null])},async createCheckoutUrl(a){let s="productId"in a?a.productId:a.product;return await r._interface.createCheckoutUrl(t,e,s,null,a.returnUrl,"server")}}}async _updateServerUser(e,t){let r=await this._interface.updateServerUser(e,{display_name:t.displayName,primary_email:t.primaryEmail,client_metadata:t.clientMetadata,client_read_only_metadata:t.clientReadOnlyMetadata,server_metadata:t.serverMetadata,selected_team_id:t.selectedTeamId,primary_email_auth_enabled:t.primaryEmailAuthEnabled,primary_email_verified:t.primaryEmailVerified,password:t.password,profile_image_url:t.profileImageUrl,totp_secret_base64:null!=t.totpMultiFactorSecret?(0,ey.encodeBase64)(t.totpMultiFactorSecret):t.totpMultiFactorSecret,restricted_by_admin:t.restrictedByAdmin,restricted_by_admin_reason:t.restrictedByAdminReason,restricted_by_admin_private_details:t.restrictedByAdminPrivateDetails,country_code:t.countryCode,risk_scores:t.riskScores?{sign_up:{bot:t.riskScores.signUp.bot,free_trial_abuse:t.riskScores.signUp.freeTrialAbuse}}:void 0});return await this._refreshUsers(),r}_serverEditableTeamProfileFromCrud(e){let t=this;return{displayName:e.display_name,profileImageUrl:e.profile_image_url,async update(r){await t._interface.updateServerTeamMemberProfile({teamId:e.team_id,userId:e.user_id,profile:{display_name:r.displayName,profile_image_url:r.profileImageUrl}}),await t._serverUserTeamProfileCache.refresh([e.team_id,e.user_id])}}}_serverContactChannelFromCrud(e,t){let r=this;return{id:t.id,value:t.value,type:t.type,isVerified:t.is_verified,isPrimary:t.is_primary,usedForAuth:t.used_for_auth,async sendVerificationEmail(a){await r._interface.sendServerContactChannelVerificationEmail(e,t.id,a?.callbackUrl??eh(r.urls.emailVerification,"callbackUrl"))},async update(a){await r._interface.updateServerContactChannel(e,t.id,{value:a.value,is_verified:a.isVerified,used_for_auth:a.usedForAuth,is_primary:a.isPrimary}),await Promise.all([r._serverContactChannelsCache.refresh([e]),r._serverUserCache.refresh([e])])},async delete(){await r._interface.deleteServerContactChannel(e,t.id),await Promise.all([r._serverContactChannelsCache.refresh([e]),r._serverUserCache.refresh([e])])}}}_serverNotificationCategoryFromCrud(e,t){let r=this;return{id:t.notification_category_id,name:t.notification_category_name,enabled:t.enabled,canDisable:t.can_disable,async setEnabled(a){await r._interface.setServerNotificationsEnabled(e,t.notification_category_id,a),await r._serverNotificationCategoriesCache.refresh([e])}}}_serverOAuthProviderFromCrud(e){let t=this;return{id:e.id,type:e.type,userId:e.user_id,accountId:e.account_id,email:e.email,allowSignIn:e.allow_sign_in,allowConnectedAccounts:e.allow_connected_accounts,async update(r){try{return await t._interface.updateServerOAuthProvider(e.user_id,e.id,{account_id:r.accountId,email:r.email,allow_sign_in:r.allowSignIn,allow_connected_accounts:r.allowConnectedAccounts}),await Promise.all([t._serverOAuthProvidersCache.refresh([e.user_id]),t._serverUserConnectedAccountsCache.refresh([e.user_id])]),u.Result.ok(void 0)}catch(e){if(l.KnownErrors.OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(e))return u.Result.error(e);throw e}},async delete(){await t._interface.deleteServerOAuthProvider(e.user_id,e.id),await Promise.all([t._serverOAuthProvidersCache.refresh([e.user_id]),t._serverUserConnectedAccountsCache.refresh([e.user_id])])}}}constructor(e,t){const r=M(e),a=r.publishableClientKey??q();super(r,{...t,interface:t?.interface??(()=>{let e=J(r.baseUrl);return new c.StackServerInterface({getBaseUrl:()=>e()[0],getApiUrls:e,projectId:r.projectId??K(),extraRequestHeaders:r.extraRequestHeaders??H(),clientVersion:L,...null!=a?{publishableClientKey:a}:{},secretServerKey:r.secretServerKey??V()})})()}),this._currentServerUserCache=F(async e=>e.isKnownToBeInvalid()?null:await this._interface.getServerUserByToken(e)),this._serverUsersCache=$(async([e,t,r,a,s,i,o,l])=>{if(l&&!o)throw new n.StackAssertionError("onlyAnonymous=true requires includeAnonymous=true");return l?await this._interface.listServerUsers({cursor:e,limit:t,orderBy:r,desc:a,query:s,includeRestricted:i,includeAnonymous:!0,onlyAnonymous:!0}):await this._interface.listServerUsers({cursor:e,limit:t,orderBy:r,desc:a,query:s,includeRestricted:i,includeAnonymous:o})}),this._serverUserCache=$(async([e])=>{let t=await this._interface.getServerUserById(e);return u.Result.or(t,null)}),this._serverTeamsCache=$(async([e])=>await this._interface.listServerTeams({userId:e})),this._serverUserTeamInvitationsCache=$(async([e])=>await this._interface.listServerUserTeamInvitations(e)),this._serverTeamUserPermissionsCache=$(async([e,t,r])=>await this._interface.listServerTeamPermissions({teamId:e,userId:t,recursive:r},null)),this._serverUserProjectPermissionsCache=$(async([e,t])=>await this._interface.listServerProjectPermissions({userId:e,recursive:t},null)),this._serverUserOAuthConnectionAccessTokensCache=$(async([e,t,r])=>{try{return{accessToken:(await this._interface.createServerProviderAccessToken(e,t,r||"")).access_token}}catch(e){if(!(l.KnownErrors.OAuthConnectionDoesNotHaveRequiredScope.isInstance(e)||l.KnownErrors.OAuthConnectionNotConnectedToUser.isInstance(e)))throw e}return null}),this._serverUserOAuthConnectionCache=$(async([e,t,r,a])=>await this._getUserOAuthConnectionCacheFn({getUser:async()=>u.Result.orThrow(await this._serverUserCache.getOrWait([e],"write-only")),getOrWaitOAuthToken:async()=>u.Result.orThrow(await this._serverUserOAuthConnectionAccessTokensCache.getOrWait([e,t,r||""],"write-only")),useOAuthToken:()=>G(this._serverUserOAuthConnectionAccessTokensCache,[e,t,r||""],"user.useConnectedAccount()"),providerId:t,scope:r,redirect:a,session:null})),this._serverUserConnectedAccountsCache=$(async([e])=>(await this._interface.listServerConnectedAccounts(e)).items.map(t=>this._createServerOAuthConnectionFromCrudItem(e,t))),this._serverUserOAuthConnectionAccessTokensByAccountCache=$(async([e,t,r,a])=>{try{return{accessToken:(await this._interface.createServerProviderAccessTokenByAccount(e,t,r,a||"")).access_token}}catch(e){if(!(l.KnownErrors.OAuthConnectionDoesNotHaveRequiredScope.isInstance(e)||l.KnownErrors.OAuthConnectionNotConnectedToUser.isInstance(e)))throw e}return null}),this._serverTeamMemberProfilesCache=$(async([e])=>await this._interface.listServerTeamMemberProfiles({teamId:e})),this._serverTeamInvitationsCache=$(async([e])=>await this._interface.listServerTeamInvitations({teamId:e})),this._serverUserTeamProfileCache=$(async([e,t])=>await this._interface.getServerTeamMemberProfile({teamId:e,userId:t})),this._serverContactChannelsCache=$(async([e])=>await this._interface.listServerContactChannels(e)),this._serverNotificationCategoriesCache=$(async([e])=>await this._interface.listServerNotificationCategories(e)),this._serverDataVaultStoreValueCache=$(async([e,t,r])=>await this._interface.getDataVaultStoreValue(r,e,t)),this._emailDeliveryInfoCache=$(async()=>await this._interface.getEmailDeliveryInfo()),this._serverUserApiKeysCache=$(async([e])=>await this._interface.listProjectApiKeys({user_id:e},null,"server")),this._serverTeamApiKeysCache=$(async([e])=>await this._interface.listProjectApiKeys({team_id:e},null,"server")),this._convexIdentitySubjectCache=$(async([e])=>{let t=await e.auth.getUserIdentity();return t?t.subject:null}),this._serverCheckApiKeyCache=$(async([e,t])=>await this._interface.checkProjectApiKey(e,t,null,"server")),this._serverOAuthProvidersCache=$(async([e])=>await this._interface.listServerOAuthProviders({user_id:e})),this._serverTeamItemsCache=$(async([e,t])=>await this._interface.getItem({teamId:e,itemId:t},null,"server")),this._serverUserItemsCache=$(async([e,t])=>await this._interface.getItem({userId:e,itemId:t},null,"server")),this._serverCustomItemsCache=$(async([e,t])=>await this._interface.getItem({customCustomerId:e,itemId:t},null,"server")),this._serverUserProductsCache=$(async([e,t,r])=>await this._interface.listProducts({customer_type:"user",customer_id:e,cursor:t??void 0,limit:r??void 0},null,"server")),this._serverTeamProductsCache=$(async([e,t,r])=>await this._interface.listProducts({customer_type:"team",customer_id:e,cursor:t??void 0,limit:r??void 0},null,"server")),this._serverCustomProductsCache=$(async([e,t,r])=>await this._interface.listProducts({customer_type:"custom",customer_id:e,cursor:t??void 0,limit:r??void 0},null,"server"))}_serverApiKeyFromCrud(e){return{...this._baseApiKeyFromCrud(e),async revoke(){await this.update({revoked:!0})},update:async t=>{await this._interface.updateProjectApiKey("team"===e.type?{team_id:e.team_id}:{user_id:e.user_id},e.id,await ef(e.type,t),null,"server"),"team"===e.type?await this._serverTeamApiKeysCache.refresh([e.team_id]):await this._serverUserApiKeysCache.refresh([e.user_id])}}}_createServerOAuthConnectionFromCrudItem(e,t){let r=this,a=t.provider,s=t.provider_account_id;return{id:a,provider:a,providerAccountId:s,async getAccessToken(t){let i=t?.scopes?.join(" ")??"",n=u.Result.orThrow(await r._serverUserOAuthConnectionAccessTokensByAccountCache.getOrWait([e,a,s,i],"write-only"));if(!n){let e=i?`The requested scopes [${i}] are not available on the existing token.`:"The OAuth refresh token has likely been revoked or expired.";return u.Result.error(new l.KnownErrors.OAuthAccessTokenNotAvailable(a,`${e} The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`))}return u.Result.ok(n)},useAccessToken(t){let i=t?.scopes?.join(" ")??"",n=G(r._serverUserOAuthConnectionAccessTokensByAccountCache,[e,a,s,i],"connection.useAccessToken()");if(!n){let e=i?`The requested scopes [${i}] are not available on the existing token.`:"The OAuth refresh token has likely been revoked or expired.";return u.Result.error(new l.KnownErrors.OAuthAccessTokenNotAvailable(a,`${e} The user needs to re-authorize by calling \`linkConnectedAccount\` or using \`getOrLinkConnectedAccount\`.`))}return u.Result.ok(n)}}}_serverUserFromCrud(e){let t=this;async function r(r,a){let s=a?.scopes?.join(" ")??"";if("object"==typeof r&&"provider"in r&&"providerAccountId"in r){let{provider:a,providerAccountId:s}=r,i=u.Result.orThrow(await t._serverUserConnectedAccountsCache.getOrWait([e.id],"write-only")).find(e=>e.provider===a&&e.providerAccountId===s);return i||null}return u.Result.orThrow(await t._serverUserOAuthConnectionCache.getOrWait([e.id,r,s,a?.or==="redirect"],"write-only"))}return ev({...super._createBaseUser(e),lastActiveAt:new Date(e.last_active_at_millis),serverMetadata:e.server_metadata,restrictedByAdmin:e.restricted_by_admin,restrictedByAdminReason:e.restricted_by_admin_reason,restrictedByAdminPrivateDetails:e.restricted_by_admin_private_details,countryCode:e.country_code,riskScores:{signUp:{bot:e.risk_scores.sign_up.bot,freeTrialAbuse:e.risk_scores.sign_up.free_trial_abuse}},async setPrimaryEmail(r,a){await t._updateServerUser(e.id,{primaryEmail:r,primaryEmailVerified:a?.verified})},async grantPermission(r,a){if(r&&"string"!=typeof r&&a)for(let s of(await t._interface.grantServerTeamUserPermission(r.id,e.id,a),[!0,!1]))await t._serverTeamUserPermissionsCache.refresh([r.id,e.id,s]);else for(let a of(await t._interface.grantServerProjectPermission(e.id,r),[!0,!1]))await t._serverUserProjectPermissionsCache.refresh([e.id,a])},async revokePermission(r,a){if(r&&"string"!=typeof r&&a)for(let s of(await t._interface.revokeServerTeamUserPermission(r.id,e.id,a),[!0,!1]))await t._serverTeamUserPermissionsCache.refresh([r.id,e.id,s]);else for(let a of(await t._interface.revokeServerProjectPermission(e.id,r),[!0,!1]))await t._serverUserProjectPermissionsCache.refresh([e.id,a])},async delete(){let r=await t._interface.deleteServerUser(e.id);return await t._refreshUsers(),r},async createSession(r){let a=await t._interface.createServerUserSession(e.id,r.expiresInMillis??31536e6,r.isImpersonation??!1);return{getTokens:async()=>a}},getActiveSessions:async()=>(await t._interface.listServerSessions(e.id)).items.map(e=>t._clientSessionFromCrud(e)),async revokeSession(e){await t._interface.deleteServerSession(e)},async setDisplayName(e){return await this.update({displayName:e})},async setClientMetadata(e){return await this.update({clientMetadata:e})},async setClientReadOnlyMetadata(e){return await this.update({clientReadOnlyMetadata:e})},async setServerMetadata(e){return await this.update({serverMetadata:e})},async setSelectedTeam(e){return await this.update({selectedTeamId:"string"==typeof e?e:e?.id??null})},getConnectedAccount:r,useConnectedAccount:function(r,a){let s=a?.scopes?.join(" ")??"";if("object"==typeof r&&"provider"in r&&"providerAccountId"in r){let{provider:a,providerAccountId:s}=r;return G(t._serverUserConnectedAccountsCache,[e.id],"user.useConnectedAccount()").find(e=>e.provider===a&&e.providerAccountId===s)??null}return G(t._serverUserOAuthConnectionCache,[e.id,r,s,a?.or==="redirect"],"user.useConnectedAccount()")},listConnectedAccounts:async()=>u.Result.orThrow(await t._serverUserConnectedAccountsCache.getOrWait([e.id],"write-only")),useConnectedAccounts:()=>G(t._serverUserConnectedAccountsCache,[e.id],"user.useConnectedAccounts()"),async linkConnectedAccount(){throw new n.StackAssertionError("linkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.")},async getOrLinkConnectedAccount(){throw new n.StackAssertionError("getOrLinkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.")},useOrLinkConnectedAccount(){throw new n.StackAssertionError("useOrLinkConnectedAccount is not available for server users. OAuth flows must be initiated on the client side.")},selectedTeam:e.selected_team?t._serverTeamFromCrud(e.selected_team):null,async getTeam(e){return(await this.listTeams()).find(t=>t.id===e)??null},useTeam(e){let t=this.useTeams();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])},listTeams:async()=>u.Result.orThrow(await t._serverTeamsCache.getOrWait([e.id],"write-only")).map(e=>t._serverTeamFromCrud(e)),useTeams(){let r=G(t._serverTeamsCache,[e.id],"user.useTeams()");return(0,s.useMemo)(()=>r.map(e=>t._serverTeamFromCrud(e)),[r])},createTeam:async r=>{let a=await t._interface.createServerTeam(eg({creatorUserId:e.id,...r}));return await t._serverTeamsCache.refresh([void 0]),await t._updateServerUser(e.id,{selectedTeamId:a.id}),t._serverTeamFromCrud(a)},leaveTeam:async r=>{await t._interface.leaveServerTeam({teamId:r.id,userId:e.id})},listTeamInvitations:async()=>u.Result.orThrow(await t._serverUserTeamInvitationsCache.getOrWait([e.id],"write-only")).map(r=>t._serverReceivedTeamInvitationFromCrud(e.id,r)),useTeamInvitations(){let r=G(t._serverUserTeamInvitationsCache,[e.id],"user.useTeamInvitations()");return(0,s.useMemo)(()=>r.map(r=>t._serverReceivedTeamInvitationFromCrud(e.id,r)),[r])},async listPermissions(r,a){if(r&&"id"in r){let s=a?.recursive??!0;return u.Result.orThrow(await t._serverTeamUserPermissionsCache.getOrWait([r.id,e.id,s],"write-only")).map(e=>t._serverPermissionFromCrud(e))}{let a=r?.recursive??!0;return u.Result.orThrow(await t._serverUserProjectPermissionsCache.getOrWait([e.id,a],"write-only")).map(e=>t._serverPermissionFromCrud(e))}},usePermissions(r,a){if(r&&"id"in r){let i=a?.recursive??!0,n=G(t._serverTeamUserPermissionsCache,[r.id,e.id,i],"user.usePermissions()");return(0,s.useMemo)(()=>n.map(e=>t._serverPermissionFromCrud(e)),[n])}{let a=r?.recursive??!0,i=G(t._serverUserProjectPermissionsCache,[e.id,a],"user.usePermissions()");return(0,s.useMemo)(()=>i.map(e=>t._serverPermissionFromCrud(e)),[i])}},async getPermission(e,t){return e&&"string"!=typeof e?(await this.listPermissions(e)).find(e=>e.id===t)??null:(await this.listPermissions()).find(t=>t.id===e)??null},usePermission(e,t){if(e&&"string"!=typeof e){let r=this.usePermissions(e);return(0,s.useMemo)(()=>r.find(e=>e.id===t)??null,[r,t])}{let t=this.usePermissions();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])}},async hasPermission(e,t){return e&&"string"!=typeof e?await this.getPermission(e,t)!==null:await this.getPermission(e)!==null},async update(r){await t._updateServerUser(e.id,r)},sendVerificationEmail:async()=>await t._checkFeatureSupport("sendVerificationEmail() on ServerUser",{}),async updatePassword(r){let a=await t._interface.updatePassword(r);return await t._serverUserCache.refresh([e.id]),a},async setPassword(r){let a=await this.update(r);return await t._serverUserCache.refresh([e.id]),a},async getTeamProfile(r){let a=u.Result.orThrow(await t._serverUserTeamProfileCache.getOrWait([r.id,e.id],"write-only"));return t._serverEditableTeamProfileFromCrud(a)},useTeamProfile(r){let a=G(t._serverUserTeamProfileCache,[r.id,e.id],"user.useTeamProfile()");return(0,s.useMemo)(()=>t._serverEditableTeamProfileFromCrud(a),[a])},listContactChannels:async()=>u.Result.orThrow(await t._serverContactChannelsCache.getOrWait([e.id],"write-only")).map(r=>t._serverContactChannelFromCrud(e.id,r)),useContactChannels(){let r=G(t._serverContactChannelsCache,[e.id],"user.useContactChannels()");return(0,s.useMemo)(()=>r.map(r=>t._serverContactChannelFromCrud(e.id,r)),[r])},createContactChannel:async r=>{var a;let s=await t._interface.createServerContactChannel((a=e.id,{type:r.type,value:r.value,is_verified:r.isVerified,user_id:a,used_for_auth:r.usedForAuth,is_primary:r.isPrimary}));return await Promise.all([t._serverContactChannelsCache.refresh([e.id]),t._serverUserCache.refresh([e.id])]),t._serverContactChannelFromCrud(e.id,s)},useNotificationCategories:()=>G(t._serverNotificationCategoriesCache,[e.id],"user.useNotificationCategories()").map(r=>t._serverNotificationCategoryFromCrud(e.id,r)),listNotificationCategories:async()=>u.Result.orThrow(await t._serverNotificationCategoriesCache.getOrWait([e.id],"write-only")).map(r=>t._serverNotificationCategoryFromCrud(e.id,r)),useApiKeys:()=>G(t._serverUserApiKeysCache,[e.id],"user.useApiKeys()").map(e=>t._serverApiKeyFromCrud(e)),listApiKeys:async()=>u.Result.orThrow(await t._serverUserApiKeysCache.getOrWait([e.id],"write-only")).map(e=>t._serverApiKeyFromCrud(e)),async createApiKey(r){let a=await t._interface.createProjectApiKey(await em("user",e.id,r),null,"server");return await t._serverUserApiKeysCache.refresh([e.id]),t._serverApiKeyFromCrud(a)},useOAuthProviders(){let r=G(t._serverOAuthProvidersCache,[e.id],"user.useOAuthProviders()");return(0,s.useMemo)(()=>r.map(e=>t._serverOAuthProviderFromCrud(e)),[r])},listOAuthProviders:async()=>u.Result.orThrow(await t._serverOAuthProvidersCache.getOrWait([e.id],"write-only")).map(e=>t._serverOAuthProviderFromCrud(e)),useOAuthProvider(e){let t=this.useOAuthProviders();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])},async getOAuthProvider(e){return(await this.listOAuthProviders()).find(t=>t.id===e)??null},async registerPasskey(r){let a,s=r?.hostname||(await t._getCurrentUrl())?.hostname;if(!s)throw new n.StackAssertionError("hostname must be provided if the Stack App does not have a redirect method");let i=await t._interface.initiateServerPasskeyRegistration(e.id);if("ok"!==i.status)return u.Result.error(new l.KnownErrors.PasskeyRegistrationFailed("Failed to get initiation options for passkey registration"));let{options_json:o,code:c}=i.data;if("THIS_VALUE_WILL_BE_REPLACED.example.com"!==o.rp.id)throw new n.StackAssertionError(`Expected returned RP ID from server to equal sentinel, but found ${o.rp.id}`);o.rp.id=s;try{a=await el({optionsJSON:o})}catch(e){if(e instanceof es)return u.Result.error(new l.KnownErrors.PasskeyWebAuthnError(e.message,e.name));return(0,n.captureError)("passkey-registration-failed",e),u.Result.error(new l.KnownErrors.PasskeyRegistrationFailed("Failed to start passkey registration due to unknown error"))}let{accessToken:d,refreshToken:p}=await t._interface.createServerUserSession(e.id,6e4*2,!1),h=new ep.InternalSession({accessToken:d,refreshToken:p,refreshAccessTokenCallback:async()=>null}),m=await t._interface.registerPasskey({credential:a,code:c},h);return await t._serverUserCache.refresh([e.id]),m},...t._createServerCustomer(e.id,"user")})}_serverTeamUserFromCrud(e){return ev({...this._serverUserFromCrud(e.user),teamProfile:{displayName:e.display_name,profileImageUrl:e.profile_image_url}})}_serverSentTeamInvitationFromCrud(e){return{id:e.id,recipientEmail:e.recipient_email,expiresAt:new Date(e.expires_at_millis),revoke:async()=>{await this._interface.revokeServerTeamInvitation(e.id,e.team_id),await this._serverTeamInvitationsCache.refresh([e.team_id])}}}_serverReceivedTeamInvitationFromCrud(e,t){let r=this;return{id:t.id,teamId:t.team_id,teamDisplayName:t.team_display_name,recipientEmail:t.recipient_email,expiresAt:new Date(t.expires_at_millis),accept:async()=>{await r._interface.acceptServerTeamInvitationById(t.id,e),await Promise.all([r._serverUserTeamInvitationsCache.refresh([e]),r._serverTeamsCache.refresh([e]),r._serverTeamInvitationsCache.refresh([t.team_id])])}}}_currentUserFromCrud(e,t){return ev({...this._serverUserFromCrud(e),...this._createAuth(t),...this._isInternalProject()?this._createInternalUserExtra(t):{}})}_serverTeamFromCrud(e){let t=this;return{id:e.id,displayName:e.display_name,profileImageUrl:e.profile_image_url,createdAt:new Date(e.created_at_millis),clientMetadata:e.client_metadata,clientReadOnlyMetadata:e.client_read_only_metadata,serverMetadata:e.server_metadata,async update(r){await t._interface.updateServerTeam(e.id,{display_name:r.displayName,profile_image_url:r.profileImageUrl,client_metadata:r.clientMetadata,client_read_only_metadata:r.clientReadOnlyMetadata,server_metadata:r.serverMetadata}),await t._serverTeamsCache.refresh([void 0])},async delete(){await t._interface.deleteServerTeam(e.id),await t._serverTeamsCache.refresh([void 0])},listUsers:async()=>u.Result.orThrow(await t._serverTeamMemberProfilesCache.getOrWait([e.id],"write-only")).map(e=>t._serverTeamUserFromCrud(e)),useUsers(){let r=G(t._serverTeamMemberProfilesCache,[e.id],"team.useUsers()");return(0,s.useMemo)(()=>r.map(e=>t._serverTeamUserFromCrud(e)),[r])},async addUser(r){await t._interface.addServerUserToTeam({teamId:e.id,userId:r}),await t._serverTeamMemberProfilesCache.refresh([e.id])},async removeUser(r){await t._interface.removeServerUserFromTeam({teamId:e.id,userId:r}),await t._serverTeamMemberProfilesCache.refresh([e.id])},async inviteUser(r){await t._interface.sendServerTeamInvitation({teamId:e.id,email:r.email,callbackUrl:r.callbackUrl??eh(t.urls.teamInvitation,"callbackUrl")}),await t._serverTeamInvitationsCache.refresh([e.id])},listInvitations:async()=>u.Result.orThrow(await t._serverTeamInvitationsCache.getOrWait([e.id],"write-only")).map(e=>t._serverSentTeamInvitationFromCrud(e)),useInvitations(){let r=G(t._serverTeamInvitationsCache,[e.id],"team.useInvitations()");return(0,s.useMemo)(()=>r.map(e=>t._serverSentTeamInvitationFromCrud(e)),[r])},useApiKeys:()=>G(t._serverTeamApiKeysCache,[e.id],"team.useApiKeys()").map(e=>t._serverApiKeyFromCrud(e)),listApiKeys:async()=>u.Result.orThrow(await t._serverTeamApiKeysCache.getOrWait([e.id],"write-only")).map(e=>t._serverApiKeyFromCrud(e)),async createApiKey(r){let a=await t._interface.createProjectApiKey(await em("team",e.id,r),null,"server");return await t._serverTeamApiKeysCache.refresh([e.id]),t._serverApiKeyFromCrud(a)},...t._createServerCustomer(e.id,"team")}}_serverItemFromCrud(e,t){let r=this;return{displayName:t.display_name,quantity:t.quantity,nonNegativeQuantity:Math.max(0,t.quantity),increaseQuantity:async a=>{let s="user"===e.type?{itemId:t.id,userId:e.id}:"team"===e.type?{itemId:t.id,teamId:e.id}:{itemId:t.id,customCustomerId:e.id};await r._interface.updateItemQuantity(s,{delta:a}),"user"===e.type?await r._serverUserItemsCache.refresh([e.id,t.id]):"team"===e.type?await r._serverTeamItemsCache.refresh([e.id,t.id]):await r._serverCustomItemsCache.refresh([e.id,t.id])},decreaseQuantity:async a=>{let s="user"===e.type?{itemId:t.id,userId:e.id}:"team"===e.type?{itemId:t.id,teamId:e.id}:{itemId:t.id,customCustomerId:e.id};await r._interface.updateItemQuantity(s,{delta:-a,allow_negative:!0}),"user"===e.type?await r._serverUserItemsCache.refresh([e.id,t.id]):"team"===e.type?await r._serverTeamItemsCache.refresh([e.id,t.id]):await r._serverCustomItemsCache.refresh([e.id,t.id])},tryDecreaseQuantity:async a=>{try{let s="user"===e.type?{itemId:t.id,userId:e.id}:"team"===e.type?{itemId:t.id,teamId:e.id}:{itemId:t.id,customCustomerId:e.id};return await r._interface.updateItemQuantity(s,{delta:-a}),"user"===e.type?await r._serverUserItemsCache.refresh([e.id,t.id]):"team"===e.type?await r._serverTeamItemsCache.refresh([e.id,t.id]):await r._serverCustomItemsCache.refresh([e.id,t.id]),!0}catch(e){if(e instanceof l.KnownErrors.ItemQuantityInsufficientAmount)return!1;throw e}}}}async _getUserApiKey(e){let t=u.Result.orThrow(await this._serverCheckApiKeyCache.getOrWait(["user",e.apiKey],"write-only"));return t?this._serverApiKeyFromCrud(t):null}async _getTeamApiKey(e){let t=u.Result.orThrow(await this._serverCheckApiKeyCache.getOrWait(["team",e.apiKey],"write-only"));return t?this._serverApiKeyFromCrud(t):null}_useUserApiKey(e){let t=G(this._serverCheckApiKeyCache,["user",e.apiKey],"serverApp.useUserApiKey()");return(0,s.useMemo)(()=>t?this._serverApiKeyFromCrud(t):null,[t])}_useTeamApiKey(e){let t=G(this._serverCheckApiKeyCache,["team",e.apiKey],"serverApp.useTeamApiKey()");return(0,s.useMemo)(()=>t?this._serverApiKeyFromCrud(t):null,[t])}async _getUserByApiKey(e){let t=await this._getUserApiKey({apiKey:e});return null===t?null:await this.getServerUserById(t.userId)}async _getUserByConvex(e,t){let r=await e.auth.getUserIdentity();if(null===r)return null;let a=await this.getServerUserById(r.subject);return a?.isAnonymous&&!t?null:a}_useUserByConvex(e,t){let r=G(this._convexIdentitySubjectCache,[e],"serverApp.useUserByConvex()");if(null===r)return null;let a=this.useUserById(r);return a?.isAnonymous&&!t?null:a}_useUserByApiKey(e){let t=this._useUserApiKey({apiKey:e});return null===t?null:this.useUserById(t.userId)}async _getTeamByApiKey(e){let t=await this._getTeamApiKey({apiKey:e});return null===t?null:await this.getTeam(t.teamId)}_useTeamByApiKey(e){let t=this._useTeamApiKey({apiKey:e});return null===t?null:this.useTeam(t.teamId)}async createUser(e){let t=await this._interface.createServerUser({primary_email:e.primaryEmail,password:e.password,otp_auth_enabled:e.otpAuthEnabled,primary_email_auth_enabled:e.primaryEmailAuthEnabled,display_name:e.displayName,primary_email_verified:e.primaryEmailVerified,client_metadata:e.clientMetadata,client_read_only_metadata:e.clientReadOnlyMetadata,server_metadata:e.serverMetadata,country_code:e.countryCode,risk_scores:e.riskScores?{sign_up:{bot:e.riskScores.signUp.bot,free_trial_abuse:e.riskScores.signUp.freeTrialAbuse}}:void 0});return await this._refreshUsers(),this._serverUserFromCrud(t)}async getUser(e){if("string"==typeof e)return await this.getServerUserById(e);{if("object"==typeof e&&"apiKey"in e)return await this._getUserByApiKey(e.apiKey);if("object"==typeof e&&"from"in e&&"convex"===e.from)return await this._getUserByConvex(e.ctx,"or"in e&&"anonymous"===e.or);if(e?.or==="anonymous"&&!1===e.includeRestricted)throw Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");this._ensurePersistentTokenStore(e?.tokenStore);let t=await this._getSession(e?.tokenStore),r=u.Result.orThrow(await this._currentServerUserCache.getOrWait([t],"write-only")),a=e?.or==="anonymous"||e?.or==="anonymous-if-exists[deprecated]",s=e?.includeRestricted===!0||a;if(null===r||r.is_anonymous&&!a||r.is_restricted&&!s)switch(e?.or){case"redirect":!r?.is_anonymous&&r?.is_restricted?await this.redirectToOnboarding({replace:!0}):await this.redirectToSignIn({replace:!0});break;case"throw":throw Error("User is not signed in but getUser was called with { or: 'throw' }");case"anonymous":{let e=await this._signUpAnonymously();return await this.getUser({tokenStore:e,or:"anonymous-if-exists[deprecated]",includeRestricted:!0})??(0,n.throwErr)("Something went wrong while signing up anonymously")}case void 0:case"anonymous-if-exists[deprecated]":case"return-null":return null}return r&&this._currentUserFromCrud(r,t)}}async getServerUser(){return console.warn("stackServerApp.getServerUser is deprecated; use stackServerApp.getUser instead"),await this.getUser()}async getServerUserById(e){let t=u.Result.orThrow(await this._serverUserCache.getOrWait([e],"write-only"));return t&&this._serverUserFromCrud(t)}useUser(e){if("string"==typeof e)return this.useUserById(e);{if("object"==typeof e&&"apiKey"in e)return this._useUserByApiKey(e.apiKey);if("object"==typeof e&&"from"in e&&"convex"===e.from)return this._useUserByConvex(e.ctx,"or"in e&&"anonymous"===e.or);if(e?.or==="anonymous"&&!1===e.includeRestricted)throw Error("Cannot use { or: 'anonymous' } with { includeRestricted: false }. Anonymous users implicitly include restricted users.");this._ensurePersistentTokenStore(e?.tokenStore);let t=this._useSession(e?.tokenStore),r=G(this._currentServerUserCache,[t],"serverApp.useUser()");if(e?.or==="anonymous"||e?.or,e?.includeRestricted,null===r)switch(e?.or){case"redirect":throw(0,o.runAsynchronously)(this.redirectToSignIn({replace:!0})),(0,d.suspend)(),new n.StackAssertionError("suspend should never return");case"throw":throw Error("User is not signed in but useUser was called with { or: 'throw' }");case"anonymous":throw(0,o.runAsynchronously)(async()=>{await this._signUpAnonymously(),"u">typeof window&&window.location.reload()}),(0,d.suspend)(),new n.StackAssertionError("suspend should never return")}return(0,s.useMemo)(()=>r&&this._currentUserFromCrud(r,t),[r,t,e?.or])}}useUserById(e){let t=G(this._serverUserCache,[e],"serverApp.useUserById()");return(0,s.useMemo)(()=>t&&this._serverUserFromCrud(t),[t])}async listUsers(e){let t=u.Result.orThrow(await this._serverUsersCache.getOrWait([e?.cursor,e?.limit,e?.orderBy,e?.desc,e?.query,e?.includeRestricted,e?.includeAnonymous,e?.onlyAnonymous],"write-only")),r=t.items.map(e=>this._serverUserFromCrud(e));return r.nextCursor=t.pagination?.next_cursor??null,r}useUsers(e){let t=G(this._serverUsersCache,[e?.cursor,e?.limit,e?.orderBy,e?.desc,e?.query,e?.includeRestricted,e?.includeAnonymous,e?.onlyAnonymous],"serverApp.useUsers()"),r=t.items.map(e=>this._serverUserFromCrud(e));return r.nextCursor=t.pagination?.next_cursor??null,r}_serverPermissionFromCrud(e){return{id:e.id}}_serverTeamPermissionDefinitionFromCrud(e){return{id:e.id,description:e.description,containedPermissionIds:e.contained_permission_ids}}_serverProjectPermissionDefinitionFromCrud(e){return{id:e.id,description:e.description,containedPermissionIds:e.contained_permission_ids}}async listTeams(){return u.Result.orThrow(await this._serverTeamsCache.getOrWait([void 0],"write-only")).map(e=>this._serverTeamFromCrud(e))}async getItem(e){if("userId"in e){let t=u.Result.orThrow(await this._serverUserItemsCache.getOrWait([e.userId,e.itemId],"write-only"));return this._serverItemFromCrud({type:"user",id:e.userId},t)}if("teamId"in e){let t=u.Result.orThrow(await this._serverTeamItemsCache.getOrWait([e.teamId,e.itemId],"write-only"));return this._serverItemFromCrud({type:"team",id:e.teamId},t)}{let t=u.Result.orThrow(await this._serverCustomItemsCache.getOrWait([e.customCustomerId,e.itemId],"write-only"));return this._serverItemFromCrud({type:"custom",id:e.customCustomerId},t)}}async listProducts(e){if("userId"in e){let t=u.Result.orThrow(await this._serverUserProductsCache.getOrWait([e.userId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(t)}if("teamId"in e){let t=u.Result.orThrow(await this._serverTeamProductsCache.getOrWait([e.teamId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(t)}let t=u.Result.orThrow(await this._serverCustomProductsCache.getOrWait([e.customCustomerId,e.cursor??null,e.limit??null],"write-only"));return this._customerProductsFromResponse(t)}useItem(e){let t,r,a;"userId"in e?(t="user",r=e.userId,a=this._serverUserItemsCache):"teamId"in e?(t="team",r=e.teamId,a=this._serverTeamItemsCache):(t="custom",r=e.customCustomerId,a=this._serverCustomItemsCache);let i=G(a,[r,e.itemId],"serverApp.useItem()");return(0,s.useMemo)(()=>this._serverItemFromCrud({type:t,id:r},i),[i])}async grantProduct(e){let t,r;"userId"in e?(t="user",r=e.userId):"teamId"in e?(t="team",r=e.teamId):(t="custom",r=e.customCustomerId),await this._interface.grantProduct({customerType:t,customerId:r,productId:"productId"in e?e.productId:void 0,product:"product"in e?e.product:void 0,quantity:e.quantity}),await ("user"===t?this._serverUserProductsCache:"team"===t?this._serverTeamProductsCache:this._serverCustomProductsCache).refresh([r,null,null])}async createTeam(e){let t=await this._interface.createServerTeam(eg(e));return await this._serverTeamsCache.refresh([void 0]),this._serverTeamFromCrud(t)}useTeams(){let e=G(this._serverTeamsCache,[void 0],"serverApp.useTeams()");return(0,s.useMemo)(()=>e.map(e=>this._serverTeamFromCrud(e)),[e])}async getTeam(e){return"object"==typeof e&&"apiKey"in e?await this._getTeamByApiKey(e.apiKey):(await this.listTeams()).find(t=>t.id===e)??null}useTeam(e){if("object"==typeof e&&"apiKey"in e)return this._useTeamByApiKey(e.apiKey);{let t=this.useTeams();return(0,s.useMemo)(()=>t.find(t=>t.id===e)??null,[t,e])}}_createServerDataVaultStore(e){let t=e=>{if("string"!=typeof e.secret)throw Error("secret must be a string, got "+typeof e.secret)};return{id:e,setValue:async(r,a,s)=>{t(s),await this._interface.setDataVaultStoreValue(s.secret,e,r,a)},getValue:async(r,a)=>(t(a),u.Result.orThrow(await this._serverDataVaultStoreValueCache.getOrWait([e,r,a.secret],"write-only"))),useValue:(r,a)=>(t(a),G(this._serverDataVaultStoreValueCache,[e,r,a.secret],"store.useValue()"))}}async getDataVaultStore(e){return this._createServerDataVaultStore(e)}useDataVaultStore(e){return(0,s.useMemo)(()=>this._createServerDataVaultStore(e),[e])}async sendEmail(e){await this._interface.sendEmail(e),await this._emailDeliveryInfoCache.refresh([])}async getEmailDeliveryStats(){return u.Result.orThrow(await this._emailDeliveryInfoCache.getOrWait([],"write-only"))}useEmailDeliveryStats(){return G(this._emailDeliveryInfoCache,[],"stackServerApp.useEmailDeliveryStats()")}async activateEmailCapacityBoost(){await this._interface.activateEmailCapacityBoost(),await this._emailDeliveryInfoCache.refresh([])}async _refreshSession(e){await Promise.all([super._refreshUser(e),this._currentServerUserCache.refresh([e])])}async _refreshUsers(){await Promise.all([super._refreshUsers(),this._serverUserCache.refreshWhere(()=>!0),this._serverUsersCache.refreshWhere(()=>!0),this._serverContactChannelsCache.refreshWhere(()=>!0),this._serverOAuthProvidersCache.refreshWhere(()=>!0),this._serverUserConnectedAccountsCache.refreshWhere(()=>!0)])}async createOAuthProvider(e){try{let t=await this._interface.createServerOAuthProvider({user_id:e.userId,provider_config_id:e.providerConfigId,account_id:e.accountId,email:e.email,allow_sign_in:e.allowSignIn,allow_connected_accounts:e.allowConnectedAccounts});return await Promise.all([this._serverOAuthProvidersCache.refresh([e.userId]),this._serverUserConnectedAccountsCache.refresh([e.userId])]),u.Result.ok(this._serverOAuthProviderFromCrud(t))}catch(e){if(l.KnownErrors.OAuthProviderAccountIdAlreadyUsedForSignIn.isInstance(e))return u.Result.error(e);throw e}}},t1=e.i(6711);function t2(e){let t=[],r=`/projects/${e.id}/domains`;for(let{domain:a}of(e.config.allow_localhost&&t.push({message:"Localhost is not allowed in production mode, turn off 'Allow localhost' in project settings",relativeFixUrl:r}),e.config.domains)){let s;try{let e=a.replace(/\*+/g,"wildcard-placeholder");s=new URL(e)}catch(s){(0,n.captureError)("production-mode-domain-not-valid",new n.StackAssertionError("Domain was somehow not a valid URL; we should've caught this when setting the domain in the first place",{domain:a,projectId:e})),t.push({message:"Trusted domain is not a valid URL: "+a,relativeFixUrl:r});continue}(0,m.isLocalhost)(s)?t.push({message:"Localhost domains are not allowed to be trusted in production mode: "+a,relativeFixUrl:r}):s.hostname.match(/^\d+(\.\d+)*$/)?t.push({message:"Direct IPs are not valid for trusted domains in production mode: "+a,relativeFixUrl:r}):"https:"!==s.protocol&&t.push({message:"Trusted domains should be HTTPS: "+a,relativeFixUrl:r})}return t}var t4=class extends t0{constructor(e,t){const r=M(e),a=r.publishableClientKey??q();super(r,{...t,interface:t?.interface??(()=>{let e=J(r.baseUrl);return new t1.StackAdminInterface({getBaseUrl:()=>e()[0],getApiUrls:e,projectId:r.projectId??K(),extraRequestHeaders:r.extraRequestHeaders??H(),clientVersion:L,...r.projectOwnerSession?{projectOwnerSession:r.projectOwnerSession}:{...a?{publishableClientKey:a}:{},secretServerKey:r.secretServerKey??V(),superSecretAdminKey:r.superSecretAdminKey??(w.STACK_SUPER_SECRET_ADMIN_KEY||(0,n.throwErr)(Error("No super secret admin key provided. Please copy your key from the Stack dashboard and put it in the STACK_SUPER_SECRET_ADMIN_KEY environment variable.")))}})})()}),this._adminProjectCache=$(async()=>await this._interface.getProject()),this._internalApiKeysCache=$(async()=>await this._interface.listInternalApiKeys()),this._adminEmailThemeCache=$(async([e])=>await this._interface.getEmailTheme(e)),this._adminEmailThemesCache=$(async()=>await this._interface.listEmailThemes()),this._adminEmailTemplatesCache=$(async()=>await this._interface.listInternalEmailTemplates()),this._adminEmailDraftsCache=$(async()=>await this._interface.listInternalEmailDrafts()),this._adminTeamPermissionDefinitionsCache=$(async()=>await this._interface.listTeamPermissionDefinitions()),this._adminProjectPermissionDefinitionsCache=$(async()=>await this._interface.listProjectPermissionDefinitions()),this._svixTokenCache=$(async()=>await this._interface.getSvixToken()),this._metricsCache=$(async([e])=>await this._interface.getMetrics(e)),this._emailPreviewCache=$(async([e,t,r,a])=>await this._interface.renderEmailPreview({themeId:e,themeTsxSource:t,templateId:r,templateTsxSource:a})),this._emailPreviewWithEditableMarkersCache=$(async([e,t,r,a,s])=>await this._interface.renderEmailPreview({themeId:e,themeTsxSource:t,templateId:r,templateTsxSource:a,editableMarkers:!0,editableSource:s})),this._configOverridesCache=$(async()=>await this._interface.getConfig()),this._stripeAccountInfoCache=$(async()=>{try{return await this._interface.getStripeAccountInfo()}catch(e){if(e?.status===404)return null;throw e}}),this._transactionsCache=$(async([e,t,r,a])=>await this._interface.listTransactions({cursor:e,limit:t,type:r,customerType:a}))}_adminConfigFromCrud(e){return JSON.parse(e.config_string)}_adminOwnedProjectFromCrud(e,t){if(null!==this._tokenStoreInit)throw new n.StackAssertionError("Owned apps must always have tokenStore === null — did you not create this project with app._createOwnedApp()?");return{...this._adminProjectFromCrud(e,t),app:this}}_adminProjectFromCrud(e,t){if(e.id!==this.projectId)throw new n.StackAssertionError(`The project ID of the provided project JSON (${e.id}) does not match the project ID of the app (${this.projectId})!`);let r=this;return{id:e.id,displayName:e.display_name,description:e.description,createdAt:new Date(e.created_at_millis),isProductionMode:e.is_production_mode,ownerTeamId:e.owner_team_id,onboardingStatus:e.onboarding_status,logoUrl:e.logo_url,logoFullUrl:e.logo_full_url,logoDarkModeUrl:e.logo_dark_mode_url,logoFullDarkModeUrl:e.logo_full_dark_mode_url,config:{signUpEnabled:e.config.sign_up_enabled,credentialEnabled:e.config.credential_enabled,magicLinkEnabled:e.config.magic_link_enabled,passkeyEnabled:e.config.passkey_enabled,clientTeamCreationEnabled:e.config.client_team_creation_enabled,clientUserDeletionEnabled:e.config.client_user_deletion_enabled,allowLocalhost:e.config.allow_localhost,oauthAccountMergeStrategy:e.config.oauth_account_merge_strategy,allowUserApiKeys:e.config.allow_user_api_keys,allowTeamApiKeys:e.config.allow_team_api_keys,oauthProviders:e.config.oauth_providers.map(e=>"shared"===e.type?{id:e.id,type:"shared"}:{id:e.id,type:"standard",clientId:e.client_id??(0,n.throwErr)("Client ID is missing"),clientSecret:e.client_secret??(0,n.throwErr)("Client secret is missing"),facebookConfigId:e.facebook_config_id,microsoftTenantId:e.microsoft_tenant_id,appleBundleIds:e.apple_bundle_ids}),emailConfig:"shared"===e.config.email_config.type?{type:"shared"}:{type:"standard",host:e.config.email_config.host??(0,n.throwErr)("Email host is missing"),port:e.config.email_config.port??(0,n.throwErr)("Email port is missing"),username:e.config.email_config.username??(0,n.throwErr)("Email username is missing"),password:e.config.email_config.password??(0,n.throwErr)("Email password is missing"),senderName:e.config.email_config.sender_name??(0,n.throwErr)("Email sender name is missing"),senderEmail:e.config.email_config.sender_email??(0,n.throwErr)("Email sender email is missing")},emailTheme:e.config.email_theme,domains:e.config.domains.map(e=>({domain:e.domain,handlerPath:e.handler_path})),createTeamOnSignUp:e.config.create_team_on_sign_up,teamCreatorDefaultPermissions:e.config.team_creator_default_permissions,teamMemberDefaultPermissions:e.config.team_member_default_permissions,userDefaultPermissions:e.config.user_default_permissions},getConfig:async()=>r._adminConfigFromCrud(await r._interface.getConfig()),useConfig(){let e=G(r._configOverridesCache,[],"project.useConfig()");return(0,s.useMemo)(()=>r._adminConfigFromCrud(e),[e])},async updateConfig(e){await r._interface.updateConfigOverride("environment",e),await r._refreshProjectConfig()},async pushConfig(e,t){var a;await r._interface.setConfigOverride("branch",e,"pushed-from-github"===(a=t.source).type?{type:"pushed-from-github",owner:a.owner,repo:a.repo,branch:a.branch,commit_hash:a.commitHash,config_file_path:a.configFilePath}:a),await r._refreshProjectConfig()},async updatePushedConfig(e){await r._interface.updateConfigOverride("branch",e),await r._refreshProjectConfig()},getPushedConfigSource:async()=>{var e;return"pushed-from-github"===(e=await r._interface.getPushedConfigSource()).type?{type:"pushed-from-github",owner:e.owner,repo:e.repo,branch:e.branch,commitHash:e.commit_hash,configFilePath:e.config_file_path}:e},async unlinkPushedConfigSource(){await r._interface.unlinkPushedConfigSource(),await r._refreshProjectConfig()},async resetConfigOverrideKeys(e,t){await r._interface.resetConfigOverrideKeys(e,t),await r._refreshProjectConfig()},getConfigOverride:async e=>JSON.parse((await r._interface.getConfigOverride(e)).config_string),async replaceConfigOverride(e,t){if("branch"===e){let a=await r._interface.getPushedConfigSource();await r._interface.setConfigOverride(e,t,a)}else await r._interface.setConfigOverride(e,t);await r._refreshProjectConfig()},async update(e){let{requirePublishableClientKey:a,...s}=e,i=eb(s),n=!!i.config&&(0,h.typedValues)(i.config).some(e=>void 0!==e);(0,h.typedEntries)(i).some(([e,t])=>"config"===e?n:void 0!==t)&&(await r._interface.updateProject(i),await t()),void 0!==a&&(await r._interface.updateConfigOverride("project",{"project.requirePublishableClientKey":a}),await r._refreshProjectConfig())},async delete(){await r._interface.deleteProject()},getProductionModeErrors:async()=>t2(e),useProductionModeErrors:()=>t2(e)}}_adminEmailTemplateFromCrud(e){return{type:e.type,subject:e.subject,content:e.content,isDefault:e.is_default}}async getProject(){return this._adminProjectFromCrud(u.Result.orThrow(await this._adminProjectCache.getOrWait([],"write-only")),()=>this._refreshProject())}useProject(){let e=G(this._adminProjectCache,[],"adminApp.useProject()");return(0,s.useMemo)(()=>this._adminProjectFromCrud(e,()=>this._refreshProject()),[e])}_createInternalApiKeyBaseFromCrud(e){let t=this;return{id:e.id,description:e.description,expiresAt:new Date(e.expires_at_millis),manuallyRevokedAt:e.manually_revoked_at_millis?new Date(e.manually_revoked_at_millis):null,createdAt:new Date(e.created_at_millis),isValid(){return null===this.whyInvalid()},whyInvalid(){return this.expiresAt.getTime()<Date.now()?"expired":this.manuallyRevokedAt?"manually-revoked":null},async revoke(){let r=await t._interface.revokeInternalApiKeyById(e.id);return await t._refreshInternalApiKeys(),r}}}_createInternalApiKeyFromCrud(e){return{...this._createInternalApiKeyBaseFromCrud(e),publishableClientKey:e.publishable_client_key?{lastFour:e.publishable_client_key.last_four}:null,secretServerKey:e.secret_server_key?{lastFour:e.secret_server_key.last_four}:null,superSecretAdminKey:e.super_secret_admin_key?{lastFour:e.super_secret_admin_key.last_four}:null}}_createInternalApiKeyFirstViewFromCrud(e){return{...this._createInternalApiKeyBaseFromCrud(e),publishableClientKey:e.publishable_client_key,secretServerKey:e.secret_server_key,superSecretAdminKey:e.super_secret_admin_key}}async listInternalApiKeys(){return u.Result.orThrow(await this._internalApiKeysCache.getOrWait([],"write-only")).map(e=>this._createInternalApiKeyFromCrud(e))}useInternalApiKeys(){let e=G(this._internalApiKeysCache,[],"adminApp.useInternalApiKeys()");return(0,s.useMemo)(()=>e.map(e=>this._createInternalApiKeyFromCrud(e)),[e])}async createInternalApiKey(e){let t=await this._interface.createInternalApiKey({description:e.description,expires_at_millis:e.expiresAt.getTime(),has_publishable_client_key:e.hasPublishableClientKey,has_secret_server_key:e.hasSecretServerKey,has_super_secret_admin_key:e.hasSuperSecretAdminKey});return await this._refreshInternalApiKeys(),this._createInternalApiKeyFirstViewFromCrud(t)}useEmailThemes(){let e=G(this._adminEmailThemesCache,[],"adminApp.useEmailThemes()");return(0,s.useMemo)(()=>e.map(e=>({id:e.id,displayName:e.display_name})),[e])}useEmailTemplates(){let e=G(this._adminEmailTemplatesCache,[],"adminApp.useEmailTemplates()");return(0,s.useMemo)(()=>e.map(e=>({id:e.id,displayName:e.display_name,themeId:e.theme_id,tsxSource:e.tsx_source})),[e])}useEmailDrafts(){let e=G(this._adminEmailDraftsCache,[],"adminApp.useEmailDrafts()");return(0,s.useMemo)(()=>e.map(e=>({id:e.id,displayName:e.display_name,themeId:e.theme_id,tsxSource:e.tsx_source,sentAt:e.sent_at_millis?new Date(e.sent_at_millis):null})),[e])}async listEmailThemes(){return u.Result.orThrow(await this._adminEmailThemesCache.getOrWait([],"write-only")).map(e=>({id:e.id,displayName:e.display_name}))}async listEmailTemplates(){return u.Result.orThrow(await this._adminEmailTemplatesCache.getOrWait([],"write-only")).map(e=>({id:e.id,displayName:e.display_name,themeId:e.theme_id,tsxSource:e.tsx_source}))}async listEmailDrafts(){return u.Result.orThrow(await this._adminEmailDraftsCache.getOrWait([],"write-only")).map(e=>({id:e.id,displayName:e.display_name,themeId:e.theme_id,tsxSource:e.tsx_source,sentAt:e.sent_at_millis?new Date(e.sent_at_millis):null}))}async createTeamPermissionDefinition(e){let t=await this._interface.createTeamPermissionDefinition({id:e.id,description:e.description,contained_permission_ids:e.containedPermissionIds});return await this._adminTeamPermissionDefinitionsCache.refresh([]),this._serverTeamPermissionDefinitionFromCrud(t)}async updateTeamPermissionDefinition(e,t){await this._interface.updateTeamPermissionDefinition(e,{description:t.description,contained_permission_ids:t.containedPermissionIds}),await this._adminTeamPermissionDefinitionsCache.refresh([])}async deleteTeamPermissionDefinition(e){await this._interface.deleteTeamPermissionDefinition(e),await this._adminTeamPermissionDefinitionsCache.refresh([])}async listTeamPermissionDefinitions(){return u.Result.orThrow(await this._adminTeamPermissionDefinitionsCache.getOrWait([],"write-only")).map(e=>this._serverTeamPermissionDefinitionFromCrud(e))}useTeamPermissionDefinitions(){let e=G(this._adminTeamPermissionDefinitionsCache,[],"adminApp.useTeamPermissionDefinitions()");return(0,s.useMemo)(()=>e.map(e=>this._serverTeamPermissionDefinitionFromCrud(e)),[e])}async createProjectPermissionDefinition(e){let t=await this._interface.createProjectPermissionDefinition({id:e.id,description:e.description,contained_permission_ids:e.containedPermissionIds});return await this._adminProjectPermissionDefinitionsCache.refresh([]),this._serverProjectPermissionDefinitionFromCrud(t)}async updateProjectPermissionDefinition(e,t){await this._interface.updateProjectPermissionDefinition(e,{description:t.description,contained_permission_ids:t.containedPermissionIds}),await this._adminProjectPermissionDefinitionsCache.refresh([])}async deleteProjectPermissionDefinition(e){await this._interface.deleteProjectPermissionDefinition(e),await this._adminProjectPermissionDefinitionsCache.refresh([])}async listProjectPermissionDefinitions(){return u.Result.orThrow(await this._adminProjectPermissionDefinitionsCache.getOrWait([],"write-only")).map(e=>this._serverProjectPermissionDefinitionFromCrud(e))}useProjectPermissionDefinitions(){let e=G(this._adminProjectPermissionDefinitionsCache,[],"adminApp.useProjectPermissionDefinitions()");return(0,s.useMemo)(()=>e.map(e=>this._serverProjectPermissionDefinitionFromCrud(e)),[e])}useSvixToken(){let e=G(this._svixTokenCache,[],"adminApp.useSvixToken()");return{token:e.token,url:e.url}}async _refreshProject(){await Promise.all([super._refreshProject(),this._adminProjectCache.refresh([])])}async _refreshProjectConfig(){await Promise.all([this._configOverridesCache.refresh([]),this._adminProjectCache.refresh([])])}async _refreshInternalApiKeys(){await this._internalApiKeysCache.refresh([])}async _refreshUsers(){await Promise.all([super._refreshUsers(),this._metricsCache.refresh([!1]),this._metricsCache.refresh([!0])])}get[y.stackAppInternalsSymbol](){return{...super[y.stackAppInternalsSymbol],useMetrics:(e=!1)=>G(this._metricsCache,[e],"adminApp.useMetrics()")}}async sendTestEmail(e){let t=await this._interface.sendTestEmail({recipient_email:e.recipientEmail,email_config:{...(0,h.pick)(e.emailConfig,["host","port","username","password"]),sender_email:e.emailConfig.senderEmail,sender_name:e.emailConfig.senderName}});return t.success?u.Result.ok(void 0):u.Result.error({errorMessage:t.error_message??(0,n.throwErr)("Email test error not specified")})}async sendTestWebhook(e){let t=await this._interface.sendTestWebhook({endpoint_id:e.endpointId});return t.success?u.Result.ok(void 0):u.Result.error({errorMessage:t.error_message??(0,n.throwErr)("Webhook test error not specified")})}async listSentEmails(){return(await this._interface.listSentEmails()).items.map(e=>({id:e.id,to:e.to??[],subject:e.subject,recipient:e.to?.[0]??"",sentAt:new Date(e.sent_at_millis),error:e.error}))}async setupManagedEmailProvider(e){let t=await this._interface.setupManagedEmailProvider({subdomain:e.subdomain,sender_local_part:e.senderLocalPart});return{domainId:t.domain_id,subdomain:t.subdomain,senderLocalPart:t.sender_local_part,nameServerRecords:t.name_server_records,status:t.status}}async checkManagedEmailStatus(e){return{status:(await this._interface.checkManagedEmailStatus({domain_id:e.domainId,subdomain:e.subdomain,sender_local_part:e.senderLocalPart})).status}}async listManagedEmailDomains(){return(await this._interface.listManagedEmailDomains()).items.map(e=>({domainId:e.domain_id,subdomain:e.subdomain,senderLocalPart:e.sender_local_part,status:e.status,nameServerRecords:e.name_server_records}))}async applyManagedEmailProvider(e){let t=await this._interface.applyManagedEmailProvider({domain_id:e.domainId});return await this._refreshProjectConfig(),t}async sendSignInInvitationEmail(e,t){await this._interface.sendSignInInvitationEmail(e,t)}async createEmailTemplate(e){let t=await this._interface.createEmailTemplate(e);return await this._adminEmailTemplatesCache.refresh([]),t}async deleteEmailTemplate(e){await this._interface.deleteEmailTemplate(e),await this._adminEmailTemplatesCache.refresh([])}async createEmailDraft(e){let t=await this._interface.createEmailDraft({display_name:e.displayName,theme_id:e.themeId,tsx_source:e.tsxSource});return await this._adminEmailDraftsCache.refresh([]),t}async updateEmailDraft(e,t){await this._interface.updateEmailDraft(e,{display_name:t.displayName,theme_id:t.themeId,tsx_source:t.tsxSource}),await this._adminEmailDraftsCache.refresh([])}async deleteEmailDraft(e){await this._interface.deleteEmailDraft(e);let t=this._adminEmailDraftsCache.getIfCached([]);"ok"===t.status&&"ok"===t.data.status&&this._adminEmailDraftsCache.forceSetCachedValue([],u.Result.ok(t.data.data.filter(t=>t.id!==e))),await this._adminEmailDraftsCache.refresh([])}async refreshEmailDrafts(){await this._adminEmailDraftsCache.refresh([])}async saveChatMessage(e,t){await this._interface.saveChatMessage(e,t)}async listChatMessages(e){return await this._interface.listChatMessages(e)}async rewriteTemplateSourceWithAI(e){return{tsxSource:(await this._interface.rewriteTemplateSourceWithAI(e)).tsx_source}}async createEmailTheme(e){let t=await this._interface.createEmailTheme(e);return await this._adminEmailThemesCache.refresh([]),t}async getEmailPreview(e){return(await this._interface.renderEmailPreview(e)).html}useEmailPreview(e){return G(this._emailPreviewCache,[e.themeId,e.themeTsxSource,e.templateId,e.templateTsxSource],"adminApp.useEmailPreview()").html}async getEmailPreviewWithEditableMarkers(e){let t=await this._interface.renderEmailPreview({...e,editableMarkers:!0,editableSource:e.editableSource});return{html:t.html,editableRegions:t.editable_regions}}useEmailPreviewWithEditableMarkers(e){let t=G(this._emailPreviewWithEditableMarkersCache,[e.themeId,e.themeTsxSource,e.templateId,e.templateTsxSource,e.editableSource],"adminApp.useEmailPreviewWithEditableMarkers()");return{html:t.html,editableRegions:t.editable_regions}}useEmailTheme(e){let t=G(this._adminEmailThemeCache,[e],"adminApp.useEmailTheme()");return{displayName:t.display_name,tsxSource:t.tsx_source}}async updateEmailTheme(e,t){await this._interface.updateEmailTheme(e,t),await this._adminEmailThemesCache.refresh([]),await this._adminEmailThemeCache.invalidate([e])}async deleteEmailTheme(e){await this._interface.deleteEmailTheme(e),await this._adminEmailThemesCache.refresh([]),await this._adminEmailThemeCache.invalidate([e])}async updateEmailTemplate(e,t,r){let a=await this._interface.updateEmailTemplate(e,t,r);return await this._adminEmailTemplatesCache.refresh([]),{renderedHtml:a.rendered_html}}async setupPayments(){return await this._interface.setupPayments()}async createStripeWidgetAccountSession(){return await this._interface.createStripeWidgetAccountSession()}async getPaymentMethodConfigs(){return await this._interface.getPaymentMethodConfigs()}async updatePaymentMethodConfigs(e,t){await this._interface.updatePaymentMethodConfigs(e,t)}async createItemQuantityChange(e){await this._interface.updateItemQuantity({itemId:e.itemId,..."userId"in e?{userId:e.userId}:"teamId"in e?{teamId:e.teamId}:{customCustomerId:e.customCustomerId}},{delta:e.quantity,expires_at:e.expiresAt,description:e.description,allow_negative:!0})}async refundTransaction(e){await this._interface.refundTransaction({type:e.type,id:e.id,refundEntries:e.refundEntries}),await this._transactionsCache.invalidateWhere(()=>!0)}async listTransactions(e){return u.Result.orThrow(await this._transactionsCache.getOrWait([e.cursor,e.limit,e.type,e.customerType],"write-only"))}_emailOutboxCrudToAdmin(e){let t,r=e.to;t="user-primary-email"===r.type?{type:"user-primary-email",userId:r.user_id}:"user-custom-emails"===r.type?{type:"user-custom-emails",userId:r.user_id,emails:r.emails}:{type:"custom-emails",emails:r.emails};let a={id:e.id,createdAt:new Date(e.created_at_millis),updatedAt:new Date(e.updated_at_millis),tsxSource:e.tsx_source,themeId:e.theme_id??null,to:t,scheduledAt:new Date(e.scheduled_at_millis),createdWith:e.created_with,emailDraftId:e.email_draft_id,emailProgrammaticCallTemplateId:e.email_programmatic_call_template_id,variables:e.variables??{},isPaused:!1,hasRendered:!1,hasDelivered:!1,sendRetries:e.send_retries,nextSendRetryAt:e.next_send_retry_at_millis?new Date(e.next_send_retry_at_millis):null,sendAttemptErrors:e.send_attempt_errors?e.send_attempt_errors.map(e=>({attemptNumber:e.attempt_number,timestamp:e.timestamp,externalMessage:e.external_message,externalDetails:e.external_details,internalMessage:e.internal_message,internalDetails:e.internal_details})):null},s=e.has_rendered?{...a,startedRenderingAt:new Date(e.started_rendering_at_millis),renderedAt:new Date(e.rendered_at_millis),subject:e.subject,html:e.html,text:e.text,isTransactional:e.is_transactional,isHighPriority:e.is_high_priority,notificationCategoryId:e.notification_category_id,hasRendered:!0}:null,i=s&&e.started_sending_at_millis?{...s,startedSendingAt:new Date(e.started_sending_at_millis)}:null,o=i&&e.has_delivered?{...i,deliveredAt:new Date(e.delivered_at_millis),hasDelivered:!0}:null;switch(e.status){case"paused":return{...a,status:"paused",simpleStatus:"in-progress",isPaused:!0};case"preparing":return{...a,status:"preparing",simpleStatus:"in-progress"};case"rendering":return{...a,status:"rendering",simpleStatus:"in-progress",startedRenderingAt:new Date(e.started_rendering_at_millis)};case"render-error":return{...a,status:"render-error",simpleStatus:"error",startedRenderingAt:new Date(e.started_rendering_at_millis),renderedAt:new Date(e.rendered_at_millis),renderError:e.render_error};case"scheduled":return{...s,status:"scheduled",simpleStatus:"in-progress"};case"queued":return{...s,status:"queued",simpleStatus:"in-progress"};case"sending":return{...i,status:"sending",simpleStatus:"in-progress"};case"server-error":return{...i,status:"server-error",simpleStatus:"error",errorAt:new Date(e.error_at_millis),serverError:e.server_error};case"skipped":return{...a,status:"skipped",simpleStatus:"ok",skippedAt:new Date(e.skipped_at_millis),skippedReason:e.skipped_reason,skippedDetails:e.skipped_details??{},hasRendered:e.has_rendered,startedRenderingAt:e.started_rendering_at_millis?new Date(e.started_rendering_at_millis):void 0,renderedAt:e.rendered_at_millis?new Date(e.rendered_at_millis):void 0,subject:e.subject,html:e.html,text:e.text,isTransactional:e.is_transactional,isHighPriority:e.is_high_priority,notificationCategoryId:e.notification_category_id,startedSendingAt:e.started_sending_at_millis?new Date(e.started_sending_at_millis):void 0};case"bounced":return{...i,status:"bounced",simpleStatus:"error",bouncedAt:new Date(e.bounced_at_millis)};case"delivery-delayed":return{...i,status:"delivery-delayed",simpleStatus:"ok",deliveryDelayedAt:new Date(e.delivery_delayed_at_millis)};case"sent":return{...o,status:"sent",simpleStatus:"ok",canHaveDeliveryInfo:e.can_have_delivery_info};case"opened":return{...o,status:"opened",simpleStatus:"ok",openedAt:new Date(e.opened_at_millis),canHaveDeliveryInfo:!0};case"clicked":return{...o,status:"clicked",simpleStatus:"ok",clickedAt:new Date(e.clicked_at_millis),canHaveDeliveryInfo:!0};case"marked-as-spam":return{...o,status:"marked-as-spam",simpleStatus:"ok",markedAsSpamAt:new Date(e.marked_as_spam_at_millis),canHaveDeliveryInfo:!0};default:throw new n.StackAssertionError(`Unknown email outbox status: ${e.status}`,{status:e.status})}}async listOutboxEmails(e){let t=await this._interface.listOutboxEmails({status:e?.status,simple_status:e?.simpleStatus,limit:e?.limit,cursor:e?.cursor});return{items:t.items.map(e=>this._emailOutboxCrudToAdmin(e)),nextCursor:t.pagination?.next_cursor??null}}async getOutboxEmail(e){let t=await this._interface.getOutboxEmail(e);return this._emailOutboxCrudToAdmin(t)}async updateOutboxEmail(e,t){let r=await this._interface.updateOutboxEmail(e,{is_paused:t.isPaused,scheduled_at_millis:t.scheduledAtMillis,cancel:t.cancel,tsx_source:t.tsxSource,theme_id:t.themeId});return this._emailOutboxCrudToAdmin(r)}async pauseOutboxEmail(e){return await this.updateOutboxEmail(e,{isPaused:!0})}async unpauseOutboxEmail(e){return await this.updateOutboxEmail(e,{isPaused:!1})}async cancelOutboxEmail(e){return await this.updateOutboxEmail(e,{cancel:!0})}useTransactions(e){return G(this._transactionsCache,[e.cursor,e.limit,e.type,e.customerType],"adminApp.useTransactions()")}async getStripeAccountInfo(){return await this._interface.getStripeAccountInfo()}useStripeAccountInfo(){return G(this._stripeAccountInfoCache,[],"adminApp.useStripeAccountInfo()")}async queryAnalytics(e){return await this._interface.queryAnalytics(e)}async listSessionReplays(e){let t=await this._interface.listSessionReplays({cursor:e?.cursor,limit:e?.limit,user_ids:e?.userIds,team_ids:e?.teamIds,duration_ms_min:e?.durationMsMin,duration_ms_max:e?.durationMsMax,last_event_at_from_millis:e?.lastEventAtFromMillis,last_event_at_to_millis:e?.lastEventAtToMillis,click_count_min:e?.clickCountMin});return{items:t.items.map(e=>({id:e.id,projectUser:{id:e.project_user.id,displayName:e.project_user.display_name,primaryEmail:e.project_user.primary_email},startedAt:new Date(e.started_at_millis),lastEventAt:new Date(e.last_event_at_millis),chunkCount:e.chunk_count,eventCount:e.event_count})),nextCursor:t.pagination.next_cursor}}async listSessionReplayChunks(e,t){let r=await this._interface.listSessionReplayChunks(e,{cursor:t?.cursor,limit:t?.limit});return{items:r.items.map(e=>({id:e.id,batchId:e.batch_id,sessionReplaySegmentId:e.session_replay_segment_id,browserSessionId:e.browser_session_id,eventCount:e.event_count,byteLength:e.byte_length,firstEventAt:new Date(e.first_event_at_millis),lastEventAt:new Date(e.last_event_at_millis),createdAt:new Date(e.created_at_millis)})),nextCursor:r.pagination.next_cursor}}async getSessionReplayChunkEvents(e,t){return await this._interface.getSessionReplayChunkEvents(e,t)}async getSessionReplayEvents(e,t){let r=await this._interface.getSessionReplayEvents(e,t);return{chunks:r.chunks.map(e=>({id:e.id,batchId:e.batch_id,sessionReplaySegmentId:e.session_replay_segment_id,eventCount:e.event_count,byteLength:e.byte_length,firstEventAt:new Date(e.first_event_at_millis),lastEventAt:new Date(e.last_event_at_millis),createdAt:new Date(e.created_at_millis)})),chunkEvents:r.chunk_events.map(e=>({chunkId:e.chunk_id,events:e.events}))}}async previewAffectedUsersByOnboardingChange(e,t){let r=await this._interface.previewAffectedUsersByOnboardingChange({require_email_verification:e.requireEmailVerification},t);return{affectedUsers:r.affected_users.map(e=>({id:e.id,displayName:e.display_name,primaryEmail:e.primary_email,restrictedReason:e.restricted_reason})),totalAffectedCount:r.total_affected_count}}};let{_StackAdminAppImpl:t3,_StackClientAppImpl:t6,_StackServerAppImpl:t5}=(tZ.LazyStackAdminAppImpl.value=t4,{_StackAdminAppImpl:ek(t4),_StackClientAppImpl:ek(tZ),_StackServerAppImpl:ek(t0)});e.s(["StackClientApp",0,t6],21623);let t8=s.default.createContext(null);function t7(e){let t=e.serialized?t6[y.stackAppInternalsSymbol].fromClientJson(e.app):e.app;return g.globalVar.__STACK_AUTH__={app:t},(0,i.jsx)(t8.Provider,{value:{app:t},children:e.children})}}]);