(self["webpackChunkblog"]=self["webpackChunkblog"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),o=String,i=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw i("Can't set "+o(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),o=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw o("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var l,u=r(t),s=i(u),c=o(a,s);if(e&&n!=n){while(s>c)if(l=u[c++],l!=l)return!0}else for(;s>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},3658:function(e,t,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,a=Object.getOwnPropertyDescriptor,l=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=l?function(e,t){if(o(e)&&!a(e,"length").writable)throw i("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112),l=a("toStringTag"),u=Object,s="Arguments"==i(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(n){}};e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=c(t=u(e),l))?n:s?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var l=o(t),u=a.f,s=i.f,c=0;c<l.length;c++){var d=l[c];r(e,d)||n&&r(n,d)||u(e,d,s(t,d))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);e.exports=function(e,t,n,l){l||(l={});var u=l.enumerable,s=void 0!==l.name?l.name:t;if(r(n)&&i(n,s,l),l.global)u?e[t]=n:a(t,n);else{try{l.unsafe?e[t]&&(u=!0):delete e[t]}catch(c){}u?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!l.nonConfigurable,writable:!l.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw o("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),l=i.process,u=i.Deno,s=l&&l.versions||u&&u.version,c=s&&s.v8;c&&(r=c.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(r=a.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),o=Error,i=r("".replace),a=function(e){return String(o(e).stack)}("zxcasd"),l=/\n\s*at [^:]*:[^\n]*/,u=l.test(a);e.exports=function(e,t){if(u&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=i(e,l,"");return e}},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),l=n(3072),u=n(9920),s=n(4705);e.exports=function(e,t){var n,c,d,f,v,p,h=e.target,m=e.global,g=e.stat;if(c=m?r:g?r[h]||l(h,{}):(r[h]||{}).prototype,c)for(d in t){if(v=t[d],e.dontCallGetSet?(p=o(c,d),f=p&&p.value):f=c[d],n=s(m?d:h+(g?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof v==typeof f)continue;u(v,f)}(e.sham||f&&f.sham)&&i(v,"sham",!0),a(c,d,v,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,l=o(i,"name"),u=l&&"something"===function(){}.name,s=l&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:l,PROPER:u,CONFIGURABLE:s}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,l=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?l(e,""):a(e)}:a},9587:function(e,t,n){var r=n(614),o=n(111),i=n(7674);e.exports=function(e,t,n){var a,l;return i&&r(a=t.constructor)&&a!==n&&o(l=a.prototype)&&l!==n.prototype&&i(e,l),e}},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(4811),l=n(7854),u=n(111),s=n(8880),c=n(2597),d=n(5465),f=n(6200),v=n(3501),p="Object already initialized",h=l.TypeError,m=l.WeakMap,g=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw h("Incompatible receiver, "+e+" required");return n}};if(a||d.state){var b=d.state||(d.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(e,t){if(b.has(e))throw h(p);return t.facade=e,b.set(e,t),t},o=function(e){return b.get(e)||{}},i=function(e){return b.has(e)}}else{var w=f("state");v[w]=!0,r=function(e,t){if(c(e,w))throw h(p);return t.facade=e,s(e,w,t),t},o=function(e){return c(e,w)?e[w]:{}},i=function(e){return c(e,w)}}e.exports={set:r,get:o,has:i,enforce:g,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=u[l(e)];return n==c||n!=s&&(o(t)?r(t):!!t)},l=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),l=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,l(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),a=n(2597),l=n(9781),u=n(6530).CONFIGURABLE,s=n(2788),c=n(9909),d=c.enforce,f=c.get,v=String,p=Object.defineProperty,h=r("".slice),m=r("".replace),g=r([].join),y=l&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===h(v(t),0,7)&&(t="["+m(v(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!a(e,"name")||u&&e.name!==t)&&(l?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&a(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?l&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=d(e);return a(r,"source")||(r.source=g(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return i(this)&&f(this).source||s(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),l=n(4948),u=TypeError,s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,d="enumerable",f="configurable",v="writable";t.f=r?i?function(e,t,n){if(a(e),t=l(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&v in n&&!n[v]){var r=c(e,t);r&&r[v]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:d in n?n[d]:r[d],writable:!1})}return s(e,t,n)}:s:function(e,t,n){if(a(e),t=l(t),a(n),o)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),l=n(5656),u=n(4948),s=n(2597),c=n(4664),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=l(e),t=u(t),c)try{return d(e,t)}catch(n){}if(s(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,l=n(3501),u=r([].push);e.exports=function(e,t){var n,r=i(e),s=0,c=[];for(n in r)!o(l,n)&&o(r,n)&&u(c,n);while(t.length>s)o(r,n=t[s++])&&(~a(c,n)||u(c,n));return c}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),o=n(9670),i=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(a){}return function(n,r){return o(n),i(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,l;if("string"===t&&o(n=e.toString)&&!i(l=r(n,e)))return l;if(o(n=e.valueOf)&&!i(l=r(n,e)))return l;if("string"!==t&&o(n=e.toString)&&!i(l=r(n,e)))return l;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),l=n(9670),u=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(l(e)),n=a.f;return n?u(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),l=n(2140),u=n(5112),s=TypeError,c=u("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,u=a(e,c);if(u){if(void 0===t&&(t="default"),n=r(u,e,t),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",e.exports="[object z]"===String(i)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),l=n(6293),u=n(3307),s=r.Symbol,c=o("wks"),d=u?s["for"]||s:s&&s.withoutSetter||a;e.exports=function(e){return i(c,e)||(c[e]=l&&i(s,e)?s[e]:d("Symbol."+e)),c[e]}},7658:function(e,t,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(3658),l=n(7207),u=n(7293),s=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},d=s||!c();r({target:"Array",proto:!0,arity:1,forced:d},{push:function(e){var t=o(this),n=i(t),r=arguments.length;l(n+r);for(var u=0;u<r;u++)t[n]=arguments[u],n++;return a(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),a=n(3658),l=n(5117),u=n(7207),s=1!==[].unshift(0),c=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=s||!c();r({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=o(this),n=i(t),r=arguments.length;if(r){u(n+r);var s=n;while(s--){var c=s+r;s in t?t[c]=t[s]:l(t,c)}for(var d=0;d<r;d++)t[d]=arguments[d]}return a(t,n+r)}})},2801:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),a=n(9114),l=n(3070).f,u=n(2597),s=n(5787),c=n(9587),d=n(6277),f=n(3678),v=n(1060),p=n(9781),h=n(1913),m="DOMException",g=i("Error"),y=i(m),b=function(){s(this,w);var e=arguments.length,t=d(e<1?void 0:arguments[0]),n=d(e<2?void 0:arguments[1],"Error"),r=new y(t,n),o=g(t);return o.name=m,l(r,"stack",a(1,v(o.stack,1))),c(r,this,b),r},w=b.prototype=y.prototype,C="stack"in g(m),x="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(o,m),k=!!S&&!(S.writable&&S.configurable),Z=C&&!k&&!x;r({global:!0,constructor:!0,forced:h||Z},{DOMException:Z?b:y});var E=i(m),O=E.prototype;if(O.constructor!==E)for(var T in h||l(O,"constructor",a(1,E)),f)if(u(f,T)){var P=f[T],A=P.s;u(E,A)||l(E,A,a(6,P.c))}},2467:function(){},4193:function(e,t,n){"use strict";n.d(t,{R_:function(){return b},ez:function(){return w}});n(7658);var r=n(5226),o=n(5569),i=2,a=.16,l=.05,u=.05,s=.15,c=5,d=4,f=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function v(e){var t=e.r,n=e.g,o=e.b,i=(0,r.py)(t,n,o);return{h:360*i.h,s:i.s,v:i.v}}function p(e){var t=e.r,n=e.g,o=e.b;return"#".concat((0,r.vq)(t,n,o,!1))}function h(e,t,n){var r=n/100,o={r:(t.r-e.r)*r+e.r,g:(t.g-e.g)*r+e.g,b:(t.b-e.b)*r+e.b};return o}function m(e,t,n){var r;return r=Math.round(e.h)>=60&&Math.round(e.h)<=240?n?Math.round(e.h)-i*t:Math.round(e.h)+i*t:n?Math.round(e.h)+i*t:Math.round(e.h)-i*t,r<0?r+=360:r>=360&&(r-=360),r}function g(e,t,n){return 0===e.h&&0===e.s?e.s:(r=n?e.s-a*t:t===d?e.s+a:e.s+l*t,r>1&&(r=1),n&&t===c&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function y(e,t,n){var r;return r=n?e.v+u*t:e.v-s*t,r>1&&(r=1),Number(r.toFixed(2))}function b(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],r=(0,o.uA)(e),i=c;i>0;i-=1){var a=v(r),l=p((0,o.uA)({h:m(a,i,!0),s:g(a,i,!0),v:y(a,i,!0)}));n.push(l)}n.push(p(r));for(var u=1;u<=d;u+=1){var s=v(r),b=p((0,o.uA)({h:m(s,u),s:g(s,u),v:y(s,u)}));n.push(b)}return"dark"===t.theme?f.map((function(e){var r=e.index,i=e.opacity,a=p(h((0,o.uA)(t.backgroundColor||"#141414"),(0,o.uA)(n[r]),100*i));return a})):n}var w={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},C={},x={};Object.keys(w).forEach((function(e){C[e]=b(w[e]),C[e].primary=C[e][5],x[e]=b(w[e],{theme:"dark",backgroundColor:"#141414"}),x[e].primary=x[e][5]}));C.red,C.volcano,C.gold,C.orange,C.yellow,C.lime,C.green,C.cyan,C.blue,C.geekblue,C.purple,C.magenta,C.grey},9388:function(e,t,n){"use strict";n.d(t,{Z:function(){return X}});n(7658);var r=n(3396),o=n(4193),i=[],a=[],l="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function u(){var e=document.createElement("style");return e.setAttribute("type","text/css"),e}function s(e,t){if(t=t||{},void 0===e)throw new Error(l);var n,r=!0===t.prepend?"prepend":"append",o=void 0!==t.container?t.container:document.querySelector("head"),s=i.indexOf(o);return-1===s&&(s=i.push(o)-1,a[s]={}),void 0!==a[s]&&void 0!==a[s][r]?n=a[s][r]:(n=a[s][r]=u(),"prepend"===r?o.insertBefore(n,o.childNodes[0]):o.appendChild(n)),65279===e.charCodeAt(0)&&(e=e.substr(1,e.length)),n.styleSheet?n.styleSheet.cssText+=e:n.textContent+=e,n}var c=s;function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){0}function p(e,t){v(e,"[@ant-design/icons-vue] ".concat(t))}function h(e){return"object"===typeof e&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===typeof e.icon||"function"===typeof e.icon)}function m(e,t,n){return n?(0,r.h)(e.tag,d({key:t},n,e.attrs),(e.children||[]).map((function(n,r){return m(n,"".concat(t,"-").concat(e.tag,"-").concat(r))}))):(0,r.h)(e.tag,d({key:t},e.attrs),(e.children||[]).map((function(n,r){return m(n,"".concat(t,"-").concat(e.tag,"-").concat(r))})))}function g(e){return(0,o.R_)(e)[0]}function y(e){return e?Array.isArray(e)?e:[e]:[]}var b="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",w=!1,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;(0,r.Y3)((function(){w||("undefined"!==typeof window&&window.document&&window.document.documentElement&&c(e,{prepend:!0}),w=!0)}))},x=["icon","primaryColor","secondaryColor"];function S(e,t){if(null==e)return{};var n,r,o=k(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function k(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function T(e){var t=e.primaryColor,n=e.secondaryColor;O.primaryColor=t,O.secondaryColor=n||g(t),O.calculated=!!n}function P(){return Z({},O)}var A=function(e,t){var n=Z({},e,t.attrs),r=n.icon,o=n.primaryColor,i=n.secondaryColor,a=S(n,x),l=O;if(o&&(l={primaryColor:o,secondaryColor:i||g(o)}),C(),p(h(r),"icon should be icon definiton, but got ".concat(r)),!h(r))return null;var u=r;return u&&"function"===typeof u.icon&&(u=Z({},u,{icon:u.icon(l.primaryColor,l.secondaryColor)})),m(u.icon,"svg-".concat(u.name),Z({},a,{"data-icon":u.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};A.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String},A.inheritAttrs=!1,A.displayName="IconBase",A.getTwoToneColors=P,A.setTwoToneColors=T;var I=A;function _(e,t){return R(e)||D(e,t)||M(e,t)||F()}function F(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(e,t){if(e){if("string"===typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),t&&i.length===t)break}catch(u){l=!0,o=u}finally{try{a||null==n["return"]||n["return"]()}finally{if(l)throw o}}return i}}function R(e){if(Array.isArray(e))return e}function W(e){var t=y(e),n=_(t,2),r=n[0],o=n[1];return I.setTwoToneColors({primaryColor:r,secondaryColor:o})}function j(){var e=I.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var L=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function B(e,t){return U(e)||K(e,t)||V(e,t)||H()}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function V(e,t){if(e){if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(i.push(r.value),t&&i.length===t)break}catch(u){l=!0,o=u}finally{try{a||null==n["return"]||n["return"]()}finally{if(l)throw o}}return i}}function U(e){if(Array.isArray(e))return e}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Y(e,t,n[t])}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){if(null==e)return{};var n,r,o=G(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function G(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}W("#1890ff");var J=function(e,t){var n,o=$({},e,t.attrs),i=o["class"],a=o.icon,l=o.spin,u=o.rotate,s=o.tabindex,c=o.twoToneColor,d=o.onClick,f=q(o,L),v=(n={anticon:!0},Y(n,"anticon-".concat(a.name),Boolean(a.name)),Y(n,i,i),n),p=""===l||l||"loading"===a.name?"anticon-spin":"",h=s;void 0===h&&d&&(h=-1,f.tabindex=h);var m=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,g=y(c),b=B(g,2),w=b[0],C=b[1];return(0,r.Wm)("span",$({role:"img","aria-label":a.name},f,{onClick:d,class:v}),[(0,r.Wm)(I,{class:p,icon:a,primaryColor:w,secondaryColor:C,style:m},null)])};J.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String},J.displayName="AntdIcon",J.inheritAttrs=!1,J.getTwoToneColor=j,J.setTwoToneColor=W;var X=J},7935:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 00-12.8 0l-48 48a9.11 9.11 0 000 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"}}]},name:"bg-colors",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="BgColorsOutlined",s.inheritAttrs=!1;var c=s},2669:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="CheckCircleFilled",s.inheritAttrs=!1;var c=s},923:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="CheckCircleOutlined",s.inheritAttrs=!1;var c=s},5956:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="CloseCircleFilled",s.inheritAttrs=!1;var c=s},593:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="CloseCircleOutlined",s.inheritAttrs=!1;var c=s},5599:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="CloseOutlined",s.inheritAttrs=!1;var c=s},681:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="DeleteOutlined",s.inheritAttrs=!1;var c=s},3318:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="EditOutlined",s.inheritAttrs=!1;var c=s},1089:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="ExclamationCircleFilled",s.inheritAttrs=!1;var c=s},2574:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="ExclamationCircleOutlined",s.inheritAttrs=!1;var c=s},9427:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="FormOutlined",s.inheritAttrs=!1;var c=s},7866:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"}}]},name:"google",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="GoogleOutlined",s.inheritAttrs=!1;var c=s},8919:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}}]},name:"heart",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="HeartFilled",s.inheritAttrs=!1;var c=s},3300:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]},name:"heart",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="HeartOutlined",s.inheritAttrs=!1;var c=s},9965:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"}}]},name:"home",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="HomeFilled",s.inheritAttrs=!1;var c=s},1390:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="InfoCircleFilled",s.inheritAttrs=!1;var c=s},5953:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="InfoCircleOutlined",s.inheritAttrs=!1;var c=s},2510:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="LoadingOutlined",s.inheritAttrs=!1;var c=s},8795:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="LockOutlined",s.inheritAttrs=!1;var c=s},851:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M521.7 82c-152.5-.4-286.7 78.5-363.4 197.7-3.4 5.3.4 12.3 6.7 12.3h70.3c4.8 0 9.3-2.1 12.3-5.8 7-8.5 14.5-16.7 22.4-24.5 32.6-32.5 70.5-58.1 112.7-75.9 43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 32.6 32.5 58.1 70.4 76 112.5C865.7 417.8 875 464.1 875 512c0 47.9-9.4 94.2-27.8 137.8-17.8 42.1-43.4 80-76 112.5s-70.5 58.1-112.7 75.9A352.8 352.8 0 01520.6 866c-47.9 0-94.3-9.4-137.9-27.8A353.84 353.84 0 01270 762.3c-7.9-7.9-15.3-16.1-22.4-24.5-3-3.7-7.6-5.8-12.3-5.8H165c-6.3 0-10.2 7-6.7 12.3C234.9 863.2 368.5 942 520.6 942c236.2 0 428-190.1 430.4-425.6C953.4 277.1 761.3 82.6 521.7 82zM395.02 624v-76h-314c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h314v-76c0-6.7 7.8-10.5 13-6.3l141.9 112a8 8 0 010 12.6l-141.9 112c-5.2 4.1-13 .4-13-6.3z"}}]},name:"login",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="LoginOutlined",s.inheritAttrs=!1;var c=s},5101:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="LogoutOutlined",s.inheritAttrs=!1;var c=s},2329:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="MailOutlined",s.inheritAttrs=!1;var c=s},6110:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="UserAddOutlined",s.inheritAttrs=!1;var c=s},8896:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(3396),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},i=o,a=n(9388);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n=l({},e,t.attrs);return(0,r.Wm)(a.Z,l({},n,{icon:i}),null)};s.displayName="UserOutlined",s.inheritAttrs=!1;var c=s},5226:function(e,t,n){"use strict";n.d(t,{T6:function(){return v},VD:function(){return p},WE:function(){return s},Yt:function(){return h},lC:function(){return i},py:function(){return u},rW:function(){return o},s:function(){return d},ve:function(){return l},vq:function(){return c}});var r=n(5807);function o(e,t,n){return{r:255*(0,r.sh)(e,255),g:255*(0,r.sh)(t,255),b:255*(0,r.sh)(n,255)}}function i(e,t,n){e=(0,r.sh)(e,255),t=(0,r.sh)(t,255),n=(0,r.sh)(n,255);var o=Math.max(e,t,n),i=Math.min(e,t,n),a=0,l=0,u=(o+i)/2;if(o===i)l=0,a=0;else{var s=o-i;switch(l=u>.5?s/(2-o-i):s/(o+i),o){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:l,l:u}}function a(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*n*(t-e):n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function l(e,t,n){var o,i,l;if(e=(0,r.sh)(e,360),t=(0,r.sh)(t,100),n=(0,r.sh)(n,100),0===t)i=n,l=n,o=n;else{var u=n<.5?n*(1+t):n+t-n*t,s=2*n-u;o=a(s,u,e+1/3),i=a(s,u,e),l=a(s,u,e-1/3)}return{r:255*o,g:255*i,b:255*l}}function u(e,t,n){e=(0,r.sh)(e,255),t=(0,r.sh)(t,255),n=(0,r.sh)(n,255);var o=Math.max(e,t,n),i=Math.min(e,t,n),a=0,l=o,u=o-i,s=0===o?0:u/o;if(o===i)a=0;else{switch(o){case e:a=(t-n)/u+(t<n?6:0);break;case t:a=(n-e)/u+2;break;case n:a=(e-t)/u+4;break;default:break}a/=6}return{h:a,s:s,v:l}}function s(e,t,n){e=6*(0,r.sh)(e,360),t=(0,r.sh)(t,100),n=(0,r.sh)(n,100);var o=Math.floor(e),i=e-o,a=n*(1-t),l=n*(1-i*t),u=n*(1-(1-i)*t),s=o%6,c=[n,l,a,a,u,n][s],d=[u,n,n,l,a,a][s],f=[a,a,u,n,n,l][s];return{r:255*c,g:255*d,b:255*f}}function c(e,t,n,o){var i=[(0,r.FZ)(Math.round(e).toString(16)),(0,r.FZ)(Math.round(t).toString(16)),(0,r.FZ)(Math.round(n).toString(16))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function d(e,t,n,o,i){var a=[(0,r.FZ)(Math.round(e).toString(16)),(0,r.FZ)(Math.round(t).toString(16)),(0,r.FZ)(Math.round(n).toString(16)),(0,r.FZ)(f(o))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function f(e){return Math.round(255*parseFloat(e)).toString(16)}function v(e){return p(e)/255}function p(e){return parseInt(e,16)}function h(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}},87:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var r={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},5569:function(e,t,n){"use strict";n.d(t,{uA:function(){return a}});var r=n(5226),o=n(87),i=n(5807);function a(e){var t={r:0,g:0,b:0},n=1,o=null,a=null,l=null,u=!1,s=!1;return"string"===typeof e&&(e=v(e)),"object"===typeof e&&(p(e.r)&&p(e.g)&&p(e.b)?(t=(0,r.rW)(e.r,e.g,e.b),u=!0,s="%"===String(e.r).substr(-1)?"prgb":"rgb"):p(e.h)&&p(e.s)&&p(e.v)?(o=(0,i.JX)(e.s),a=(0,i.JX)(e.v),t=(0,r.WE)(e.h,o,a),u=!0,s="hsv"):p(e.h)&&p(e.s)&&p(e.l)&&(o=(0,i.JX)(e.s),l=(0,i.JX)(e.l),t=(0,r.ve)(e.h,o,l),u=!0,s="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(n=e.a)),n=(0,i.Yq)(n),{ok:u,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var l="[-\\+]?\\d+%?",u="[-\\+]?\\d*\\.\\d+%?",s="(?:".concat(u,")|(?:").concat(l,")"),c="[\\s|\\(]+(".concat(s,")[,|\\s]+(").concat(s,")[,|\\s]+(").concat(s,")\\s*\\)?"),d="[\\s|\\(]+(".concat(s,")[,|\\s]+(").concat(s,")[,|\\s]+(").concat(s,")[,|\\s]+(").concat(s,")\\s*\\)?"),f={CSS_UNIT:new RegExp(s),rgb:new RegExp("rgb"+c),rgba:new RegExp("rgba"+d),hsl:new RegExp("hsl"+c),hsla:new RegExp("hsla"+d),hsv:new RegExp("hsv"+c),hsva:new RegExp("hsva"+d),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function v(e){if(e=e.trim().toLowerCase(),0===e.length)return!1;var t=!1;if(o.R[e])e=o.R[e],t=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var n=f.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=f.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=f.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=f.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=f.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=f.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=f.hex8.exec(e),n?{r:(0,r.VD)(n[1]),g:(0,r.VD)(n[2]),b:(0,r.VD)(n[3]),a:(0,r.T6)(n[4]),format:t?"name":"hex8"}:(n=f.hex6.exec(e),n?{r:(0,r.VD)(n[1]),g:(0,r.VD)(n[2]),b:(0,r.VD)(n[3]),format:t?"name":"hex"}:(n=f.hex4.exec(e),n?{r:(0,r.VD)(n[1]+n[1]),g:(0,r.VD)(n[2]+n[2]),b:(0,r.VD)(n[3]+n[3]),a:(0,r.T6)(n[4]+n[4]),format:t?"name":"hex8"}:(n=f.hex3.exec(e),!!n&&{r:(0,r.VD)(n[1]+n[1]),g:(0,r.VD)(n[2]+n[2]),b:(0,r.VD)(n[3]+n[3]),format:t?"name":"hex"})))))))))}function p(e){return Boolean(f.CSS_UNIT.exec(String(e)))}},5807:function(e,t,n){"use strict";function r(e,t){i(e)&&(e="100%");var n=a(e);return e=360===t?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=360===t?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function o(e){return Math.min(1,Math.max(0,e))}function i(e){return"string"===typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)}function a(e){return"string"===typeof e&&-1!==e.indexOf("%")}function l(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function u(e){return e<=1?"".concat(100*Number(e),"%"):e}function s(e){return 1===e.length?"0"+e:String(e)}n.d(t,{FZ:function(){return s},JX:function(){return u},V2:function(){return o},Yq:function(){return l},sh:function(){return r}})},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return b},L:function(){return u},LL:function(){return I},P0:function(){return m},Pz:function(){return y},Sg:function(){return w},UG:function(){return S},ZR:function(){return A},aH:function(){return g},b$:function(){return Z},eu:function(){return T},hl:function(){return O},m9:function(){return z},ne:function(){return L},pd:function(){return j},q4:function(){return h},ru:function(){return k},tV:function(){return s},uI:function(){return x},vZ:function(){return N},w1:function(){return E},xO:function(){return R},xb:function(){return M},z$:function(){return C},zd:function(){return W}});n(2801),n(7658);
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296===(64512&o)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},o=function(e){const t=[];let n=0,r=0;while(n<e.length){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=e[n++],a=e[n++],l=e[n++],u=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&l)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(1023&u))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<e.length;o+=3){const t=e[o],i=o+1<e.length,a=i?e[o+1]:0,l=o+2<e.length,u=l?e[o+2]:0,s=t>>2,c=(3&t)<<4|a>>4;let d=(15&a)<<2|u>>6,f=63&u;l||(f=64,i||(d=64)),r.push(n[s],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<e.length;){const t=n[e.charAt(o++)],i=o<e.length,l=i?n[e.charAt(o)]:0;++o;const u=o<e.length,s=u?n[e.charAt(o)]:64;++o;const c=o<e.length,d=c?n[e.charAt(o)]:64;if(++o,null==t||null==l||null==s||null==d)throw new a;const f=t<<2|l>>4;if(r.push(f),64!==s){const e=l<<4&240|s>>2;if(r.push(e),64!==d){const e=s<<6&192|d;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l=function(e){const t=r(e);return i.encodeByteArray(t,!0)},u=function(e){return l(e).replace(/\./g,"")},s=function(e){try{return i.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function c(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
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
 */const d=()=>c().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",VUE_APP_apiKey:"AIzaSyDs2dm6pyah7VuaJ8_yJQ3pkW6XLY5WAOU",VUE_APP_authDomain:"blog-85d3d.firebaseapp.com",VUE_APP_projectId:"blog-85d3d",VUE_APP_storageBucket:"blog-85d3d.appspot.com",VUE_APP_messagingSenderId:"649337547146",VUE_APP_appId:"1:649337547146:web:a0cbb15dc4256542be4073",VUE_APP_measurementId:"G-S3NR9DDCV8",BASE_URL:"/cinemablog/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},v=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&s(e[1]);return t&&JSON.parse(t)},p=()=>{try{return d()||f()||v()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},h=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=h(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
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
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[u(JSON.stringify(n)),u(JSON.stringify(a)),l].join(".")}
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
 */function C(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function x(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function S(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function Z(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){const e=C();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){try{return"object"===typeof indexedDB}catch(e){return!1}}function T(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const P="FirebaseError";class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=P,Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?_(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`,l=new A(r,a,n);return l}}function _(e,t){return e.replace(F,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
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
 */function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function N(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(D(n)&&D(i)){if(!N(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function D(e){return null!==e&&"object"===typeof e}
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
function R(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function W(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function L(e,t){const n=new B(e,t);return n.subscribe.bind(n)}class B{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=V),void 0===r.error&&(r.error=V),void 0===r.complete&&(r.complete=V);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function V(){}
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
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var m="store";function g(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y(e){return null!==e&&"object"===typeof e}function b(e){return e&&"function"===typeof e.then}function w(e,t){return function(){return e(t)}}function C(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function x(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;k(e,n,[],e._modules.root,!0),S(e,n,t)}function S(e,t,n){var i=e._state,a=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var l=e._wrappedGetters,u={},s={},c=(0,o.B)(!0);c.run((function(){g(l,(function(t,n){u[n]=w(t,e),s[n]=(0,r.Fl)((function(){return u[n]()})),Object.defineProperty(e.getters,n,{get:function(){return s[n].value},enumerable:!0})}))})),e._state=(0,o.qj)({data:t}),e._scope=c,e.strict&&A(e),i&&n&&e._withCommit((function(){i.data=null})),a&&a.stop()}function k(e,t,n,r,o){var i=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!i&&!o){var l=I(t,n.slice(0,-1)),u=n[n.length-1];e._withCommit((function(){l[u]=r.state}))}var s=r.context=Z(e,a,n);r.forEachMutation((function(t,n){var r=a+n;O(e,r,t,s)})),r.forEachAction((function(t,n){var r=t.root?n:a+n,o=t.handler||t;T(e,r,o,s)})),r.forEachGetter((function(t,n){var r=a+n;P(e,r,t,s)})),r.forEachChild((function(r,i){k(e,t,n.concat(i),r,o)}))}function Z(e,t,n){var r=""===t,o={dispatch:r?e.dispatch:function(n,r,o){var i=_(n,r,o),a=i.payload,l=i.options,u=i.type;return l&&l.root||(u=t+u),e.dispatch(u,a)},commit:r?e.commit:function(n,r,o){var i=_(n,r,o),a=i.payload,l=i.options,u=i.type;l&&l.root||(u=t+u),e.commit(u,a,l)}};return Object.defineProperties(o,{getters:{get:r?function(){return e.getters}:function(){return E(e,t)}},state:{get:function(){return I(e.state,n)}}}),o}function E(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(o){if(o.slice(0,r)===t){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[o]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function O(e,t,n,r){var o=e._mutations[t]||(e._mutations[t]=[]);o.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var o=e._actions[t]||(e._actions[t]=[]);o.push((function(t){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return b(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):o}))}function P(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function A(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function I(e,t){return t.reduce((function(e,t){return e[t]}),e)}function _(e,t,n){return y(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var F="vuex bindings",M="vuex:mutations",N="vuex:actions",D="vuex",R=0;function W(e,t){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[F]},(function(n){n.addTimelineLayer({id:M,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:N,label:"Vuex Actions",color:j}),n.addInspector({id:D,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===D)if(n.filter){var r=[];K(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId;E(t,r),n.state=U(Y(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===D){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),t._withCommit((function(){n.set(t._state.data,o,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(D),n.sendInspectorState(D),n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=R++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:N,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},o=Date.now()-e._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:N,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var j=8702998,L=6710886,B=16777215,H={label:"namespaced",textColor:B,backgroundColor:L};function V(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function z(e,t){return{id:t||"root",label:V(t),tags:e.namespaced?[H]:[],children:Object.keys(e._children).map((function(n){return z(e._children[n],t+n+"/")}))}}function K(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[H]:[]}),Object.keys(t._children).forEach((function(o){K(e,t._children[o],n,r+o+"/")}))}function U(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),o={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=$(t);o.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?V(e):e,editable:!1,value:q((function(){return i[e]}))}}))}return o}function $(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var o=t,i=r.pop();r.forEach((function(e){o[e]||(o[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),o=o[e]._custom.value})),o[i]=q((function(){return e[n]}))}else t[n]=q((function(){return e[n]}))})),t}function Y(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,o){var i=e[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+t+'".');return o===n.length-1?i:i._children}),"root"===t?e:e.root._children)}function q(e){try{return e()}catch(t){return t}}var G=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},J={namespaced:{configurable:!0}};J.namespaced.get=function(){return!!this._rawModule.namespaced},G.prototype.addChild=function(e,t){this._children[e]=t},G.prototype.removeChild=function(e){delete this._children[e]},G.prototype.getChild=function(e){return this._children[e]},G.prototype.hasChild=function(e){return e in this._children},G.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},G.prototype.forEachChild=function(e){g(this._children,e)},G.prototype.forEachGetter=function(e){this._rawModule.getters&&g(this._rawModule.getters,e)},G.prototype.forEachAction=function(e){this._rawModule.actions&&g(this._rawModule.actions,e)},G.prototype.forEachMutation=function(e){this._rawModule.mutations&&g(this._rawModule.mutations,e)},Object.defineProperties(G.prototype,J);var X=function(e){this.register([],e,!1)};function Q(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;Q(e.concat(r),t.getChild(r),n.modules[r])}}X.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},X.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},X.prototype.update=function(e){Q([],this.root,e)},X.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var o=new G(t,n);if(0===e.length)this.root=o;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],o)}t.modules&&g(t.modules,(function(t,o){r.register(e.concat(o),t,n)}))},X.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},X.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function ee(e){return new te(e)}var te=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var i=this,a=this,l=a.dispatch,u=a.commit;this.dispatch=function(e,t){return l.call(i,e,t)},this.commit=function(e,t,n){return u.call(i,e,t,n)},this.strict=r;var s=this._modules.root.state;k(this,s,[],this._modules.root),S(this,s),n.forEach((function(e){return e(t)}))},ne={state:{configurable:!0}};te.prototype.install=function(e,t){e.provide(t||m,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&W(e,this)},ne.state.get=function(){return this._state.data},ne.state.set=function(e){0},te.prototype.commit=function(e,t,n){var r=this,o=_(e,t,n),i=o.type,a=o.payload,l=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit((function(){u.forEach((function(e){e(a)}))})),this._subscribers.slice().forEach((function(e){return e(l,r.state)})))},te.prototype.dispatch=function(e,t){var n=this,r=_(e,t),o=r.type,i=r.payload,a={type:o,payload:i},l=this._actions[o];if(l){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(a,n.state)}))}catch(s){0}var u=l.length>1?Promise.all(l.map((function(e){return e(i)}))):l[0](i);return new Promise((function(e,t){u.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(a,n.state)}))}catch(s){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(a,n.state,e)}))}catch(s){0}t(e)}))}))}},te.prototype.subscribe=function(e,t){return C(e,this._subscribers,t)},te.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return C(n,this._actionSubscribers,t)},te.prototype.watch=function(e,t,n){var o=this;return(0,r.YP)((function(){return e(o.state,o.getters)}),t,Object.assign({},n))},te.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},te.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),k(this,this.state,e,this._modules.get(e),n.preserveState),S(this,this.state)},te.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=I(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),x(this)},te.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},te.prototype.hotUpdate=function(e){this._modules.update(e),x(this,!0)},te.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(te.prototype,ne);ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ae(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,t,n):t[o]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var i=ae(this.$store,"mapMutations",e);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;o=e+o,n[r]=function(){if(!e||ae(this.$store,"mapGetters",e))return this.$store.getters[o]},n[r].vuex=!0})),n})),ie((function(e,t){var n={};return re(t).forEach((function(t){var r=t.key,o=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var i=ae(this.$store,"mapActions",e);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(t)):r.apply(this.$store,[o].concat(t))}})),n}));function re(e){return oe(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function oe(e){return Array.isArray(e)||y(e)}function ie(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ae(e,t,n){var r=e._modulesNamespaceMap[n];return r}},3898:function(e,t,n){n(7658);var r=n(4614)["default"];function o(){"use strict";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports["default"]=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(I){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),l=new T(r||[]);return a(i,"_invoke",{value:k(e,n,l)}),i}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}t.wrap=f;var p={};function h(){}function m(){}function g(){}var y={};d(y,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==n&&i.call(w,u)&&(y=w);var C=g.prototype=h.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(o,a,l,u){var s=v(e[o],e,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==r(d)&&i.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,u)}),(function(e){n("throw",e,l,u)})):t.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return A()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=Z(a,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=v(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function Z(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator["return"]&&(t.method="return",t.arg=void 0,Z(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=v(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:A}}function A(){return{value:void 0,done:!0}}return m.prototype=g,a(C,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:m,configurable:!0}),m.displayName=d(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,d(e,c,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},x(S.prototype),d(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(C),d(C,c,"Generator"),d(C,u,(function(){return this})),d(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports["default"]=e.exports},4614:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports["default"]=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports["default"]=e.exports},8305:function(e,t,n){var r=n(3898)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9227:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},778:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},2482:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(8521);function o(e,t,n){return t=(0,r.Z)(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9299:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},2285:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},6786:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},5082:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(7658);var r=n(2482);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},2078:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return o}})},4621:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(778);n(7658);function o(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,l=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(c){s=!0,o=c}finally{try{if(!u&&null!=n["return"]&&(a=n["return"](),Object(a)!==a))return}finally{if(s)throw o}}return l}}var i=n(2780),a=n(6786);function l(e,t){return(0,r.Z)(e)||o(e,t)||(0,i.Z)(e,t)||(0,a.Z)()}},8478:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9227);function o(e){if(Array.isArray(e))return(0,r.Z)(e)}var i=n(2285),a=n(2780);function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return o(e)||(0,i.Z)(e)||(0,a.Z)(e)||l()}},8521:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(3336);function o(e,t){if("object"!==(0,r.Z)(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==(0,r.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function i(e){var t=o(e,"string");return"symbol"===(0,r.Z)(t)?t:String(t)}},3336:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})},2780:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9227);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return he},qX:function(){return de},Xd:function(){return ce},Mq:function(){return ge},ZF:function(){return me},KN:function(){return ye}});n(7658);var r=n(7142),o=n(5168),i=n(223);n(2801);const a=(e,t)=>t.some((t=>e instanceof t));let l,u;function s(){return l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c(){return u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,f=new WeakMap,v=new WeakMap,p=new WeakMap,h=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(x(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&d.set(t,e)})).catch((()=>{})),h.set(t,e),t}function g(e){if(f.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));f.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||v.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?c().includes(e)?function(...t){return e.apply(S(this),t),x(d.get(this))}:function(...t){return x(e.apply(S(this),t))}:function(t,...n){const r=e.call(S(this),t,...n);return v.set(r,t.sort?t.sort():[t]),x(r)}}function C(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&g(e),a(e,s())?new Proxy(e,y):e)}function x(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=C(e);return t!==e&&(p.set(e,t),h.set(t,e)),t}const S=e=>h.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),l=x(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(x(a.result),e.oldVersion,e.newVersion,x(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),l.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),l}const Z=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],O=new Map;function T(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(O.get(t))return O.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Z.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return O.set(t,i),i}b((e=>({...e,get:(t,n,r)=>T(t,n)||e.get(t,n,r),has:(t,n)=>!!T(t,n)||e.has(t,n)})));
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
class P{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(A(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function A(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const I="@firebase/app",_="0.9.13",F=new o.Yd("@firebase/app"),M="@firebase/app-compat",N="@firebase/analytics-compat",D="@firebase/analytics",R="@firebase/app-check-compat",W="@firebase/app-check",j="@firebase/auth",L="@firebase/auth-compat",B="@firebase/database",H="@firebase/database-compat",V="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",U="@firebase/installations-compat",$="@firebase/messaging",Y="@firebase/messaging-compat",q="@firebase/performance",G="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Q="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",oe="9.23.0",ie="[DEFAULT]",ae={[I]:"fire-core",[M]:"fire-core-compat",[D]:"fire-analytics",[N]:"fire-analytics-compat",[W]:"fire-app-check",[R]:"fire-app-check-compat",[j]:"fire-auth",[L]:"fire-auth-compat",[B]:"fire-rtdb",[H]:"fire-rtdb-compat",[V]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[U]:"fire-iid-compat",[$]:"fire-fcm",[Y]:"fire-fcm-compat",[q]:"fire-perf",[G]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Q]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},le=new Map,ue=new Map;function se(e,t){try{e.container.addComponent(t)}catch(n){F.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ce(e){const t=e.name;if(ue.has(t))return F.debug(`There were multiple attempts to register component ${t}.`),!1;ue.set(t,e);for(const n of le.values())se(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const fe={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ve=new i.LL("app","Firebase",fe);
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
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}
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
 */const he=oe;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const o=Object.assign({name:ie,automaticDataCollectionEnabled:!1},t),a=o.name;if("string"!==typeof a||!a)throw ve.create("bad-app-name",{appName:String(a)});if(n||(n=(0,i.aH)()),!n)throw ve.create("no-options");const l=le.get(a);if(l){if((0,i.vZ)(n,l.options)&&(0,i.vZ)(o,l.config))return l;throw ve.create("duplicate-app",{appName:a})}const u=new r.H0(a);for(const r of ue.values())u.addComponent(r);const s=new pe(n,o,u);return le.set(a,s),s}function ge(e=ie){const t=le.get(e);if(!t&&e===ie&&(0,i.aH)())return me();if(!t)throw ve.create("no-app",{appName:e});return t}function ye(e,t,n){var o;let i=null!==(o=ae[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&e.push("and"),l&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void F.warn(e.join(" "))}ce(new r.wA(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
const be="firebase-heartbeat-database",we=1,Ce="firebase-heartbeat-store";let xe=null;function Se(){return xe||(xe=k(be,we,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ce)}}}).catch((e=>{throw ve.create("idb-open",{originalErrorMessage:e.message})}))),xe}async function ke(e){try{const t=await Se(),n=await t.transaction(Ce).objectStore(Ce).get(Ee(e));return n}catch(t){if(t instanceof i.ZR)F.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});F.warn(e.message)}}}async function Ze(e,t){try{const n=await Se(),r=n.transaction(Ce,"readwrite"),o=r.objectStore(Ce);await o.put(t,Ee(e)),await r.done}catch(n){if(n instanceof i.ZR)F.warn(n.message);else{const e=ve.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});F.warn(e.message)}}}function Ee(e){return`${e.name}!${e.options.appId}`}
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
 */const Oe=1024,Te=2592e6;class Pe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ae();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Te})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ae(),{heartbeatsToSend:t,unsentEntries:n}=Ie(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ae(){const e=new Date;return e.toISOString().substring(0,10)}function Ie(e,t=Oe){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),Fe(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Fe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ke(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Fe(e){return(0,i.L)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function Me(e){ce(new r.wA("platform-logger",(e=>new P(e)),"PRIVATE")),ce(new r.wA("heartbeat",(e=>new Pe(e)),"PRIVATE")),ye(I,_,e),ye(I,_,"esm2017"),ye("fire-js","")}Me("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return s},wA:function(){return o}});var r=n(223);class o{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const i="[DEFAULT]";
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
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(o);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:l(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function l(e){return e===i?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
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
 */class s{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return s},in:function(){return o}});n(7658);
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
 */const r=[];var o;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,l={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},u=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=l[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class s{constructor(e){this.name=e,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},7795:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),o="firebase",i="9.23.0";
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
(0,r.KN)(o,i,"app")},9862:function(e,t,n){"use strict";n.d(t,{hJ:function(){return pt},Xb:function(){return Et},v0:function(){return Br},e5:function(){return Ot},rh:function(){return In},w7:function(){return _t},ck:function(){return Pt}});n(7658);var r=n(223),o=n(7077);function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}Object.create;Object.create;var a=n(5168),l=n(7142);function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s=u,c=new r.LL("auth","Firebase",u()),d=new a.Yd("@firebase/auth");function f(e,...t){d.logLevel<=a["in"].WARN&&d.warn(`Auth (${o.Jn}): ${e}`,...t)}function v(e,...t){d.logLevel<=a["in"].ERROR&&d.error(`Auth (${o.Jn}): ${e}`,...t)}
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
 */function p(e,...t){throw y(e,...t)}function h(e,...t){return y(e,...t)}function m(e,t,n){const o=Object.assign(Object.assign({},s()),{[t]:n}),i=new r.LL("auth","Firebase",o);return i.create(t,{appName:e.name})}function g(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&p(e,"argument-error"),m(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return c.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function C(e,t){e||w(t)}
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
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function S(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Z(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(S()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class O{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return Z()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function T(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const A={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},I=new O(3e4,6e4);
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
 */function _(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function F(e,t,n,o,i={}){return M(e,i,(async()=>{let i={},a={};o&&("GET"===t?a=o:i={body:JSON.stringify(o)});const l=(0,r.xO)(Object.assign({key:e.config.apiKey},a)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),P.fetch()(D(e,e.config.apiHost,n,l),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},i))}))}async function M(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},A),t);try{const t=new R(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw W(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw W(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw W(e,"user-disabled",i);const l=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw m(e,l,a);p(e,l)}}catch(i){if(i instanceof r.ZR)throw i;p(e,"network-request-failed",{message:String(i)})}}async function N(e,t,n,r,o={}){const i=await F(e,t,n,r,o);return"mfaPendingCredential"in i&&p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function D(e,t,n,r){const o=`${t}${n}?${r}`;return e.config.emulator?T(e.config,o):`${e.config.apiScheme}://${o}`}class R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(h(this.auth,"network-request-failed"))),I.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=h(e,t,r);return o.customData._tokenResponse=n,o}
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
 */async function j(e,t){return F(e,"POST","/v1/accounts:delete",t)}async function L(e,t){return F(e,"POST","/v1/accounts:lookup",t)}
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
 */function B(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function H(e,t=!1){const n=(0,r.m9)(e),o=await n.getIdToken(t),i=z(o);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,l=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:o,authTime:B(V(i.auth_time)),issuedAtTime:B(V(i.iat)),expirationTime:B(V(i.exp)),signInProvider:l||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function V(e){return 1e3*Number(e)}function z(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(i){return v("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function K(e){const t=z(e);return b(t,"internal-error"),b("undefined"!==typeof t.exp,"internal-error"),b("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function U(e,t,n=!1){if(n)return t;try{return await t}catch(o){throw o instanceof r.ZR&&$(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function $({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=B(this.lastLoginAt),this.creationTime=B(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function G(e){var t;const n=e.auth,r=await e.getIdToken(),o=await U(e,L(n,{idToken:r}));b(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Q(i.providerUserInfo):[],l=X(e.providerData,a),u=e.isAnonymous,s=!(e.email&&i.passwordHash)&&!(null===l||void 0===l?void 0:l.length),c=!!u&&s,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new q(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function J(e){const t=(0,r.m9)(e);await G(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function X(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function Q(e){return e.map((e=>{var{providerId:t}=e,n=i(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */async function ee(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,a=D(e,o,"/v1/token",`key=${i}`),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(a,{method:"POST",headers:l,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b("undefined"!==typeof e.idToken,"internal-error"),b("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:o}=await ee(e,t);this.updateTokensAndExpiration(n,r,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:o}=t,i=new te;return n&&(b("string"===typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(b("string"===typeof r,"internal-error",{appName:e}),i.accessToken=r),o&&(b("number"===typeof o,"internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new te,this.toJSON())}_performRefresh(){return w("not implemented")}}
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
 */function ne(e,t){b("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class re{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,o=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new q(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await U(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H(this,e)}reload(){return J(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await G(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await U(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,o,i,a,l,u,s;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,v=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,h=null!==(l=t._redirectEventId)&&void 0!==l?l:void 0,m=null!==(u=t.createdAt)&&void 0!==u?u:void 0,g=null!==(s=t.lastLoginAt)&&void 0!==s?s:void 0,{uid:y,emailVerified:w,isAnonymous:C,providerData:x,stsTokenManager:S}=t;b(y&&S,e,"internal-error");const k=te.fromJSON(this.name,S);b("string"===typeof y,e,"internal-error"),ne(c,e.name),ne(d,e.name),b("boolean"===typeof w,e,"internal-error"),b("boolean"===typeof C,e,"internal-error"),ne(f,e.name),ne(v,e.name),ne(p,e.name),ne(h,e.name),ne(m,e.name),ne(g,e.name);const Z=new re({uid:y,auth:e,email:d,emailVerified:w,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:g});return x&&Array.isArray(x)&&(Z.providerData=x.map((e=>Object.assign({},e)))),h&&(Z._redirectEventId=h),Z}static async _fromIdTokenResponse(e,t,n=!1){const r=new te;r.updateFromServerResponse(t);const o=new re({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await G(o),o}}
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
 */const oe=new Map;function ie(e){C(e instanceof Function,"Expected a class definition");let t=oe.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,oe.set(e,t),t)}
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
 */class ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ae.type="NONE";const le=ae;
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
 */function ue(e,t,n){return`firebase:${e}:${t}:${n}`}class se{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:o}=this.auth;this.fullUserKey=ue(this.userKey,r.apiKey,o),this.fullPersistenceKey=ue("persistence",r.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new se(ie(le),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=r[0]||ie(le);const i=ue(n,e.config.apiKey,e.name);let a=null;for(const s of t)try{const t=await s._get(i);if(t){const n=re._fromJSON(e,t);s!==o&&(a=n),o=s;break}}catch(u){}const l=r.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&l.length?(o=l[0],a&&await o._set(i,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(i)}catch(u){}}))),new se(o,e,n)):new se(o,e,n)}}
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
 */function ce(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ge(t))return"Webos";if(fe(t))return"Safari";if((t.includes("chrome/")||ve(t))&&!t.includes("edge/"))return"Chrome";if(he(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=(0,r.z$)()){return/firefox\//i.test(e)}function fe(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ve(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function he(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ge(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function be(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return(0,r.w1)()&&10===document.documentMode}function Ce(e=(0,r.z$)()){return ye(e)||he(e)||ge(e)||me(e)||/windows phone/i.test(e)||pe(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=ce((0,r.z$)());break;case"Worker":n=`${ce((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${i}`}
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
 */async function ke(e,t){return F(e,"GET","/v2/recaptchaConfig",_(e,t))}
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
 */function Ze(e){return void 0!==e&&void 0!==e.enterprise}class Ee{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Oe(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Te(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=h("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Oe().appendChild(r)}))}function Pe(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Ae="https://www.google.com/recaptcha/enterprise.js?render=",Ie="recaptcha-enterprise",_e="NO_RECAPTCHA";class Fe{constructor(e){this.type=Ie,this.auth=Re(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{ke(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Ee(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const o=window.grecaptcha;Ze(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(_e)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{n(this.auth).then((n=>{if(!t&&Ze(window.grecaptcha))r(n,e,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));Te(Ae+n).then((()=>{r(n,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function Me(e,t,n,r=!1){const o=new Fe(e);let i;try{i=await o.verify(n)}catch(l){i=await o.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}
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
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(o){r(o)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
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
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new We(this),this.idTokenSubscription=new We(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ie(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await se.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===r||void 0===r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==i||!(null===a||void 0===a?void 0:a.user)||(r=a.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(i)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await G(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ie(e))}))}async initializeRecaptchaConfig(){const e=await ke(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Ee(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){const e=new Fe(this);e.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ie(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await se.create(this,[ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const o="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return b(i,this,"internal-error"),i.then((()=>o(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&f(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function Re(e){return(0,r.m9)(e)}class We{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function je(e,t){const n=(0,o.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,r.vZ)(o,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const i=n.initialize({options:t});return i}function Le(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ie);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function Be(e,t,n){const r=Re(e);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),i=He(t),{host:a,port:l}=Ve(t),u=null===l?"":`:${l}`;r.config.emulator={url:`${i}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Ke()}function He(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ve(e){const t=He(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const e=o[1];return{host:e,port:ze(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:ze(t)}}}function ze(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ke(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
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
 */async function $e(e,t){return F(e,"POST","/v1/accounts:update",t)}
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
async function Ye(e,t){return N(e,"POST","/v1/accounts:signInWithPassword",_(e,t))}
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
async function qe(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}async function Ge(e,t){return N(e,"POST","/v1/accounts:signInWithEmailLink",_(e,t))}
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
 */class Je extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Me(e,n,"signInWithPassword");return Ye(e,t)}return Ye(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Me(e,n,"signInWithPassword");return Ye(e,t)}return Promise.reject(t)}));case"emailLink":return qe(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ge(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Xe(e,t){return N(e,"POST","/v1/accounts:signInWithIdp",_(e,t))}
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
 */const Qe="http://localhost";class et extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,o=i(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new et(n,r);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */async function tt(e,t){return F(e,"POST","/v1/accounts:sendVerificationCode",_(e,t))}async function nt(e,t){return N(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t))}async function rt(e,t){const n=await N(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,t));if(n.temporaryProof)throw W(e,"account-exists-with-different-credential",n);return n}const ot={["USER_NOT_FOUND"]:"user-not-found"};async function it(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return N(e,"POST","/v1/accounts:signInWithPhoneNumber",_(e,n),ot)}
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
 */class at extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return it(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}=e;return n||t||r||o?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:o}):null}}
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
 */function lt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,o=(0,r.zd)((0,r.pd)(e))["deep_link_id"],i=o?(0,r.zd)((0,r.pd)(o))["link"]:null;return i||o||n||t||e}class st{constructor(e){var t,n,o,i,a,l;const u=(0,r.zd)((0,r.pd)(e)),s=null!==(t=u["apiKey"])&&void 0!==t?t:null,c=null!==(n=u["oobCode"])&&void 0!==n?n:null,d=lt(null!==(o=u["mode"])&&void 0!==o?o:null);b(s&&c&&d,"argument-error"),this.apiKey=s,this.operation=d,this.code=c,this.continueUrl=null!==(i=u["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=u["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(l=u["tenantId"])&&void 0!==l?l:null}static parseLink(e){const t=ut(e);try{return new st(t)}catch(n){return null}}}
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
class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=st.parseLink(t);return b(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}ct.PROVIDER_ID="password",ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class vt extends ft{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com",vt.PROVIDER_ID="facebook.com";
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
class pt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pt.credential(t,n)}catch(r){return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com",pt.PROVIDER_ID="google.com";
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
class ht extends ft{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch(t){return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com",ht.PROVIDER_ID="github.com";
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
class mt extends ft{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}
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
async function gt(e,t){return N(e,"POST","/v1/accounts:signUp",_(e,t))}
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
 */mt.TWITTER_SIGN_IN_METHOD="twitter.com",mt.PROVIDER_ID="twitter.com";class yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const o=await re._fromIdTokenResponse(e,n,r),i=bt(n),a=new yt({user:o,providerId:i,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bt(n);return new yt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class wt extends r.ZR{constructor(e,t,n,r){var o;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,wt.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new wt(e,t,n,r)}}function Ct(e,t,n,r){const o="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw wt._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function xt(e,t,n=!1){const r=await U(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return yt._forOperation(e,"link",r)}
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
async function St(e,t,n=!1){const{auth:r}=e,o="reauthenticate";try{const i=await U(e,Ct(r,o,t,e),n);b(i.idToken,r,"internal-error");const a=z(i.idToken);b(a,r,"internal-error");const{sub:l}=a;return b(e.uid===l,r,"user-mismatch"),yt._forOperation(e,o,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),i}}
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
 */async function kt(e,t,n=!1){const r="signIn",o=await Ct(e,r,t),i=await yt._fromIdTokenResponse(e,r,o);return n||await e._updateCurrentUser(i.user),i}async function Zt(e,t){return kt(Re(e),t)}async function Et(e,t,n){var r;const o=Re(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(null===(r=o._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Me(o,i,"signUpPassword");a=gt(o,e)}else a=gt(o,i).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Me(o,i,"signUpPassword");return gt(o,e)}return Promise.reject(e)}));const l=await a.catch((e=>Promise.reject(e))),u=await yt._fromIdTokenResponse(o,"signIn",l);return await o._updateCurrentUser(u.user),u}function Ot(e,t,n){return Zt((0,r.m9)(e),ct.credential(t,n))}
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
async function Tt(e,t){return F(e,"POST","/v1/accounts:update",t)}
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
 */async function Pt(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const o=(0,r.m9)(e),i=await o.getIdToken(),a={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},l=await U(o,Tt(o.auth,a));o.displayName=l.displayName||null,o.photoURL=l.photoUrl||null;const u=o.providerData.find((({providerId:e})=>"password"===e));u&&(u.displayName=o.displayName,u.photoURL=o.photoURL),await o._updateTokensIfNecessary(l)}function At(e,t,n,o){return(0,r.m9)(e).onIdTokenChanged(t,n,o)}function It(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function _t(e){return(0,r.m9)(e).signOut()}
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
function Ft(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,t))}function Mt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,t))}function Nt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:start",_(e,t))}function Dt(e,t){return F(e,"POST","/v2/accounts/mfaEnrollment:finalize",_(e,t))}new WeakMap;const Rt="__sak";
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
 */class Wt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function jt(){const e=(0,r.z$)();return fe(e)||ye(e)}const Lt=1e3,Bt=10;class Ht extends Wt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jt()&&xe(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);we()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Bt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Lt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ht.type="LOCAL";const Vt=Ht;
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
 */class zt extends Wt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zt.type="SESSION";const Kt=zt;
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
 */function Ut(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new $t(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:o}=t.data,i=this.handlersMap[r];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(i).map((async e=>e(t.origin,o))),l=await Ut(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Yt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */$t.receivers=[];class qt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise(((a,l)=>{const u=Yt("",20);r.port1.start();const s=setTimeout((()=>{l(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(s),o=setTimeout((()=>{l(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),a(t.data.response);break;default:clearTimeout(s),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
 */function Gt(){return window}function Jt(e){Gt().location.href=e}
/**
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
 */function Xt(){return"undefined"!==typeof Gt()["WorkerGlobalScope"]&&"function"===typeof Gt()["importScripts"]}async function Qt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function en(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function tn(){return Xt()?self:null}
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
 */const nn="firebaseLocalStorageDb",rn=1,on="firebaseLocalStorage",an="fbase_key";class ln{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function un(e,t){return e.transaction([on],t?"readwrite":"readonly").objectStore(on)}function sn(){const e=indexedDB.deleteDatabase(nn);return new ln(e).toPromise()}function cn(){const e=indexedDB.open(nn,rn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(on,{keyPath:an})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(on)?t(n):(n.close(),await sn(),t(await cn()))}))}))}async function dn(e,t,n){const r=un(e,!0).put({[an]:t,value:n});return new ln(r).toPromise()}async function fn(e,t){const n=un(e,!1).get(t),r=await new ln(n).toPromise();return void 0===r?null:r.value}function vn(e,t){const n=un(e,!0).delete(t);return new ln(n).toPromise()}const pn=800,hn=3;class mn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await cn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>hn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(tn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Qt(),!this.activeServiceWorker)return;this.sender=new qt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&en()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await dn(e,Rt,"1"),await vn(e,Rt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>fn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=un(e,!1).getAll();return new ln(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:o}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),pn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mn.type="LOCAL";const gn=mn;
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
 */function yn(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:start",_(e,t))}function bn(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,t))}function wn(e,t){return F(e,"POST","/v2/accounts/mfaSignIn:finalize",_(e,t))}
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
Pe("rcb"),new O(3e4,6e4);
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
const Cn="recaptcha";async function xn(e,t,n){var r;const o=await n.verify();try{let i;if(b("string"===typeof o,e,"argument-error"),b(n.type===Cn,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){b("enroll"===t.type,e,"internal-error");const n=await Ft(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(r=i.multiFactorHint)||void 0===r?void 0:r.uid)||i.multiFactorUid;b(n,e,"missing-multi-factor-info");const a=await yn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:i.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
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
class Sn{constructor(e){this.providerId=Sn.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return xn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Sn.credentialFromTaggedObject(t)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
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
function kn(e,t){return t?ie(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Sn.PROVIDER_ID="phone",Sn.PHONE_SIGN_IN_METHOD="phone";class Zn extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function En(e){return kt(e.auth,new Zn(e),e.bypassAuthState)}function On(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),St(n,new Zn(e),e.bypassAuthState)}async function Tn(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),xt(n,new Zn(e),e.bypassAuthState)}
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
 */class Pn{constructor(e,t,n,r,o=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:o,error:i,type:a}=e;if(i)return void this.reject(i);const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return En;case"linkViaPopup":case"linkViaRedirect":return Tn;case"reauthViaPopup":case"reauthViaRedirect":return On;default:p(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const An=new O(2e3,1e4);async function In(e,t,n){const r=Re(e);g(e,t,dt);const o=kn(r,n),i=new _n(r,"signInViaPopup",t,o);return i.executeNotNull()}class _n extends Pn{constructor(e,t,n,r,o){super(e,t,r,o),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=Yt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(h(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(h(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(h(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,An.get())};e()}}_n.currentPopupAction=null;
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
const Fn="pendingRedirect",Mn=new Map;class Nn extends Pn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Mn.get(this.auth._key());if(!e){try{const t=await Dn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Mn.set(this.auth._key(),e)}return this.bypassAuthState||Mn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Dn(e,t){const n=jn(t),r=Wn(e);if(!await r._isAvailable())return!1;const o="true"===await r._get(n);return await r._remove(n),o}function Rn(e,t){Mn.set(e._key(),t)}function Wn(e){return ie(e._redirectPersistence)}function jn(e){return ue(Fn,e.config.apiKey,e.name)}
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
 */async function Ln(e,t,n=!1){const r=Re(e),o=kn(r,t),i=new Nn(r,o,n),a=await i.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
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
const Bn=6e5;class Hn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Kn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!zn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(h(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vn(e))}saveEventToCache(e){this.cachedEventUids.add(Vn(e)),this.lastProcessedEventTime=Date.now()}}function Vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function zn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Kn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zn(e);default:return!1}}
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
 */async function Un(e,t={}){return F(e,"GET","/v1/projects",t)}
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
 */const $n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yn=/^https?/;async function qn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Un(e);for(const r of t)try{if(Gn(r))return}catch(n){}p(e,"unauthorized-domain")}function Gn(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===r}if(!Yn.test(n))return!1;if($n.test(e))return r===e;const o=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+o+"|"+o+")$","i");return i.test(r)}
/**
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
 */const Jn=new O(3e4,6e4);function Xn(){const e=Gt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Qn(e){return new Promise(((t,n)=>{var r,o,i;function a(){Xn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Xn(),n(h(e,"network-request-failed"))},timeout:Jn.get()})}if(null===(o=null===(r=Gt().gapi)||void 0===r?void 0:r.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Gt().gapi)||void 0===i?void 0:i.load)){const t=Pe("iframefcb");return Gt()[t]=()=>{gapi.load?a():n(h(e,"network-request-failed"))},Te(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw er=null,e}))}let er=null;function tr(e){return er=er||Qn(e),er}
/**
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
 */const nr=new O(5e3,15e3),rr="__/auth/iframe",or="emulator/auth/iframe",ir={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ar=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lr(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?T(t,or):`https://${e.config.authDomain}/${rr}`,i={apiKey:t.apiKey,appName:e.name,v:o.Jn},a=ar.get(e.config.apiHost);a&&(i.eid=a);const l=e._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function ur(e){const t=await tr(e),n=Gt().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:lr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ir,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const o=h(e,"network-request-failed"),i=Gt().setTimeout((()=>{r(o)}),nr.get());function a(){Gt().clearTimeout(i),n(t)}t.ping(a).then(a,(()=>{r(o)}))}))))}
/**
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
 */const sr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cr=500,dr=600,fr="_blank",vr="http://localhost";class pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function hr(e,t,n,o=cr,i=dr){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-o)/2,0).toString();let u="";const s=Object.assign(Object.assign({},sr),{width:o.toString(),height:i.toString(),top:a,left:l}),c=(0,r.z$)().toLowerCase();n&&(u=ve(c)?fr:n),de(c)&&(t=t||vr,s.scrollbars="yes");const d=Object.entries(s).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(be(c)&&"_self"!==u)return mr(t||"",u),new pr(null);const f=window.open(t||"",u,d);b(f,e,"popup-blocked");try{f.focus()}catch(v){}return new pr(f)}function mr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const gr="__/auth/handler",yr="emulator/auth/handler",br=encodeURIComponent("fac");async function wr(e,t,n,i,a,l){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const u={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:o.Jn,eventId:a};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),u.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(l||{}))u[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(u.scopes=e.join(","))}e.tenantId&&(u.tid=e.tenantId);const s=u;for(const r of Object.keys(s))void 0===s[r]&&delete s[r];const c=await e._getAppCheckToken(),d=c?`#${br}=${encodeURIComponent(c)}`:"";return`${Cr(e)}?${(0,r.xO)(s).slice(1)}${d}`}function Cr({config:e}){return e.emulator?T(e,yr):`https://${e.authDomain}/${gr}`}
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
 */const xr="webStorageSupport";class Sr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kt,this._completeRedirectFn=Ln,this._overrideRedirectResult=Rn}async _openPopup(e,t,n,r){var o;C(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await wr(e,t,n,x(),r);return hr(e,i,Yt())}async _openRedirect(e,t,n,r){await this._originValidation(e);const o=await wr(e,t,n,x(),r);return Jt(o),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ur(e),n=new Hn(e);return t.register("authEvent",(t=>{b(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(xr,{type:xr},(n=>{var r;const o=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[xr];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||fe()||ye()}}const kr=Sr;class Zr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Er extends Zr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Er(e)}_finalizeEnroll(e,t,n){return Mt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return bn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Or{constructor(){}static assertion(e){return Er._fromCredential(e)}}Or.FACTOR_ID="phone";class Tr{static assertionForEnrollment(e,t){return Pr._fromSecret(e,t)}static assertionForSignIn(e,t){return Pr._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;b("undefined"!==typeof t.auth,"internal-error");const n=await Nt(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return Ar._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}Tr.FACTOR_ID="totp";class Pr extends Zr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Pr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Pr(t,e)}async _finalizeEnroll(e,t,n){return b("undefined"!==typeof this.secret,e,"argument-error"),Dt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){b(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return wn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ar{constructor(e,t,n,r,o,i,a){this.sessionInfo=i,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ar(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Ir(e)||Ir(t))&&(r=!0),r&&(Ir(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ir(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ir(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var _r="@firebase/auth",Fr="0.23.2";
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
class Mr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Nr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Dr(e){(0,o.Xd)(new l.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;b(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},s=new De(r,o,i,u);return Le(s,n),s}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,o.Xd)(new l.wA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new Mr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(_r,Fr,Nr(e)),(0,o.KN)(_r,Fr,"esm2017")}
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
 */const Rr=300,Wr=(0,r.Pz)("authIdTokenMaxAge")||Rr;let jr=null;const Lr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wr)return;const o=null===n||void 0===n?void 0:n.token;jr!==o&&(jr=o,await fetch(e,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Br(e=(0,o.Mq)()){const t=(0,o.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=je(e,{popupRedirectResolver:kr,persistence:[gn,Vt,Kt]}),i=(0,r.Pz)("authTokenSyncURL");if(i){const e=Lr(i);It(n,e,(()=>e(n.currentUser))),At(n,(t=>e(t)))}const a=(0,r.q4)("auth");return a&&Be(n,`http://${a}`),n}Dr("Browser")},4287:function(e,t,n){"use strict";n.d(t,{hJ:function(){return ad},oe:function(){return Gd},AK:function(){return Qd},JU:function(){return ld},QT:function(){return Ud},PL:function(){return Yd},ad:function(){return cd},Bt:function(){return ef},pl:function(){return qd}});n(7658),n(2801);var r,o=n(7077),i=n(7142),a=n(5168),l=n(223),u=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{}),s={},c=c||{},d=u||self;function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function v(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,h)&&e[h]||(e[h]=++m)}var h="closure_uid_"+(1e9*Math.random()>>>0),m=0;function g(e,t,n){return e.call.apply(e.bind,arguments)}function y(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?g:y,b.apply(null,arguments)}function w(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function C(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return t.prototype[n].apply(e,o)}}function x(){this.s=this.s,this.o=this.o}var S=0;x.prototype.s=!1,x.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==S)||p(this)},x.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Z(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function E(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let o=0;o<r;o++)e[n+o]=t[o]}else e.push(t)}}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",(()=>{}),t),d.removeEventListener("test",(()=>{}),t)}catch(n){}return e}();function P(e){return/^[\s\xa0]*$/.test(e)}function A(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function I(e){return-1!=A().indexOf(e)}function _(e){return _[" "](e),e}function F(e,t){var n=wr;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}_[" "]=function(){};var M,N,D=I("Opera"),R=I("Trident")||I("MSIE"),W=I("Edge"),j=W||R,L=I("Gecko")&&!(-1!=A().toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),B=-1!=A().toLowerCase().indexOf("webkit")&&!I("Edge");function H(){var e=d.document;return e?e.documentMode:void 0}e:{var V="",z=function(){var e=A();return L?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):D?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(V=z?z[1]:""),R){var K=H();if(null!=K&&K>parseFloat(V)){M=String(K);break e}}M=V}if(d.document&&R){var U=H();N=U||(parseInt(M,10)||void 0)}else N=void 0;var $=N;function Y(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(L){e:{try{_(t.nodeName);var o=!0;break e}catch(i){}o=!1}o||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Y.$.h.call(this)}}C(Y,O);var q={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(e,t,n,r,o){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=o,this.key=++J,this.fa=this.ia=!1}function Q(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){let n,r;for(let o=1;o<arguments.length;o++){for(n in r=arguments[o],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ie(e){this.src=e,this.g={},this.h=0}function ae(e,t){var n=t.type;if(n in e.g){var r,o=e.g[n],i=k(o,t);(r=0<=i)&&Array.prototype.splice.call(o,i,1),r&&(Q(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function le(e,t,n,r){for(var o=0;o<e.length;++o){var i=e[o];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return o}return-1}ie.prototype.add=function(e,t,n,r,o){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var a=le(e,t,r,o);return-1<a?(t=e[a],n||(t.ia=!1)):(t=new X(t,this.src,i,!!r,o),t.ia=n,e.push(t)),t};var ue="closure_lm_"+(1e6*Math.random()|0),se={};function ce(e,t,n,r,o){if(r&&r.once)return ve(e,t,n,r,o);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ce(e,t[i],n,r,o);return null}return n=we(n),e&&e[G]?e.O(t,n,v(r)?!!r.capture:!!r,o):de(e,t,n,!1,r,o)}function de(e,t,n,r,o,i){if(!t)throw Error("Invalid event type");var a=v(o)?!!o.capture:!!o,l=ye(e);if(l||(e[ue]=l=new ie(e)),n=l.add(t,n,r,a,i),n.proxy)return n;if(r=fe(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)T||(o=a),void 0===o&&(o=!1),e.addEventListener(t.toString(),r,o);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function fe(){function e(n){return t.call(e.src,e.listener,n)}const t=ge;return e}function ve(e,t,n,r,o){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ve(e,t[i],n,r,o);return null}return n=we(n),e&&e[G]?e.P(t,n,v(r)?!!r.capture:!!r,o):de(e,t,n,!0,r,o)}function pe(e,t,n,r,o){if(Array.isArray(t))for(var i=0;i<t.length;i++)pe(e,t[i],n,r,o);else r=v(r)?!!r.capture:!!r,n=we(n),e&&e[G]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=le(i,n,r,o),-1<n&&(Q(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ye(e))&&(t=e.g[t.toString()],e=-1,t&&(e=le(t,n,r,o)),(n=-1<e?t[e]:null)&&he(n))}function he(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[G])ae(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ye(t))?(ae(n,e),0==n.h&&(n.src=null,t[ue]=null)):Q(e)}}}function me(e){return e in se?se[e]:se[e]="on"+e}function ge(e,t){if(e.fa)e=!0;else{t=new Y(t,this);var n=e.listener,r=e.la||e.src;e.ia&&he(e),e=n.call(r,t)}return e}function ye(e){return e=e[ue],e instanceof ie?e:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function we(e){return"function"===typeof e?e:(e[be]||(e[be]=function(t){return e.handleEvent(t)}),e[be])}function Ce(){x.call(this),this.i=new ie(this),this.S=this,this.J=null}function xe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var o=t;t=new O(r,e),oe(t,o)}if(o=!0,n)for(var i=n.length-1;0<=i;i--){var a=t.g=n[i];o=Se(a,r,!0,t)&&o}if(a=t.g=e,o=Se(a,r,!0,t)&&o,o=Se(a,r,!1,t)&&o,n)for(i=0;i<n.length;i++)a=t.g=n[i],o=Se(a,r,!1,t)&&o}function Se(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var o=!0,i=0;i<t.length;++i){var a=t[i];if(a&&!a.fa&&a.capture==n){var l=a.listener,u=a.la||a.src;a.ia&&ae(e.i,a),o=!1!==l.call(u,r)&&o}}return o&&!r.defaultPrevented}C(Ce,x),Ce.prototype[G]=!0,Ce.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},Ce.prototype.N=function(){if(Ce.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Q(n[r]);delete t.g[e],t.h--}}this.J=null},Ce.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ce.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ke=d.JSON.stringify;class Ze{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ee(){var e=Me;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=Te.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Te=new Ze((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ae(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ie(e){d.setTimeout((()=>{throw e}),0)}let _e,Fe=!1,Me=new Oe,Ne=()=>{const e=d.Promise.resolve(void 0);_e=()=>{e.then(De)}};var De=()=>{for(var e;e=Ee();){try{e.h.call(e.g)}catch(n){Ie(n)}var t=Te;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Fe=!1};function Re(e,t){Ce.call(this),this.h=e||1,this.g=t||d,this.j=b(this.qb,this),this.l=Date.now()}function We(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function je(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Le(e){e.g=je((()=>{e.g=null,e.i&&(e.i=!1,Le(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}C(Re,Ce),r=Re.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xe(this,"tick"),this.ga&&(We(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Re.$.N.call(this),We(this),delete this.g};class Be extends x{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Le(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){x.call(this),this.h=e,this.g={}}C(He,x);var Ve=[];function ze(e,t,n,r){Array.isArray(n)||(n&&(Ve[0]=n.toString()),n=Ve);for(var o=0;o<n.length;o++){var i=ce(t,n[o],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Ke(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&he(e)}),e),e.g={}}function Ue(){this.g=!0}function $e(e,t,n,r,o,i){e.info((function(){if(e.g)if(i)for(var a="",l=i.split("&"),u=0;u<l.length;u++){var s=l[u].split("=");if(1<s.length){var c=s[0];s=s[1];var d=c.split("_");a=2<=d.length&&"type"==d[1]?a+(c+"=")+s+"&":a+(c+"=redacted&")}}else a=null;else a=i;return"XMLHTTP REQ ("+r+") [attempt "+o+"]: "+t+"\n"+n+"\n"+a}))}function Ye(e,t,n,r,o,i,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+o+"]: "+t+"\n"+n+"\n"+i+" "+a}))}function qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Je(e,n)+(r?" "+r:"")}))}function Ge(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Je(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var o=r[1];if(Array.isArray(o)&&!(1>o.length)){var i=o[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var a=1;a<o.length;a++)o[a]=""}}}return ke(n)}catch(l){return t}}He.prototype.N=function(){He.$.N.call(this),Ke(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ue.prototype.Ea=function(){this.g=!1},Ue.prototype.info=function(){};var Xe={},Qe=null;function et(){return Qe=Qe||new Ce}function tt(e){O.call(this,Xe.Ta,e)}function nt(e){const t=et();xe(t,new tt(t))}function rt(e,t){O.call(this,Xe.STAT_EVENT,e),this.stat=t}function ot(e){const t=et();xe(t,new rt(t,e))}function it(e,t){O.call(this,Xe.Ua,e),this.size=t}function at(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}Xe.Ta="serverreachability",C(tt,O),Xe.STAT_EVENT="statevent",C(rt,O),Xe.Ua="timingevent",C(it,O);var lt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ut={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function st(){}function ct(e){return e.h||(e.h=e.i())}function dt(){}st.prototype.h=null;var ft,vt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){O.call(this,"d")}function ht(){O.call(this,"c")}function mt(){}function gt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new He(this),this.P=bt,e=j?125:void 0,this.V=new Re(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}C(pt,O),C(ht,O),C(mt,st),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},ft=new mt;var bt=45e3,wt={},Ct={};function xt(e,t,n){e.L=1,e.v=zt(jt(t)),e.s=n,e.S=!0,St(e,null)}function St(e,t){e.G=Date.now(),Ot(e),e.A=jt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.C=0,n=e.l.J,e.h=new yt,e.g=sr(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Be(b(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),nt(),$e(e.j,e.u,e.A,e.m,e.W,e.s)}function kt(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Zt(e,t,n){let r,o=!0;for(;!e.J&&e.C<n.length;){if(r=Et(e,n),r==Ct){4==t&&(e.o=4,ot(14),o=!1),qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==wt){e.o=4,ot(15),qe(e.j,e.m,n,"[Invalid Chunk]"),o=!1;break}qe(e.j,e.m,r,null),_t(e,r)}kt(e)&&r!=Ct&&r!=wt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ot(16),o=!1),e.i=e.i&&o,o?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,ot(11))):(qe(e.j,e.m,n,"[Invalid Chunked Response]"),It(e),At(e))}function Et(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ct:(n=Number(t.substring(n,r)),isNaN(n)?wt:(r+=1,r+n>t.length?Ct:(t=t.slice(r,r+n),e.C=r+n,t)))}function Ot(e){e.Y=Date.now()+e.P,Tt(e,e.P)}function Tt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=at(b(e.lb,e),t)}function Pt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function At(e){0==e.l.H||e.J||or(e.l,e)}function It(e){Pt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,We(e.V),Ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function _t(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||fn(n.i,e)))if(!e.K&&fn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var o=r;if(0==o[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),Un(n)}er(n),ot(18)}}else n.Fa=o[1],0<n.Fa-n.V&&37500>o[2]&&n.G&&0==n.A&&!n.v&&(n.v=at(b(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(s){}n.oa=void 0}}else ar(n,11)}else if((e.K||n.g==e)&&rr(n),!P(t))for(o=n.Ja.g.parse(t),t=0;t<o.length;t++){let s=o[t];if(n.V=s[0],s=s[1],2==n.H)if("c"==s[0]){n.K=s[1],n.pa=s[2];const t=s[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const o=s[4];null!=o&&(n.Ga=o,n.l.info("SVER="+n.Ga));const c=s[5];null!=c&&"number"===typeof c&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=e.g;if(d){const e=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(vn(i,i.h),i.h=null))}if(r.F){const e=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,Vt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var a=e;if(r.wa=ur(r,r.J?r.pa:null,r.Y),a.K){pn(r.i,a);var l=a,u=r.L;u&&l.setTimeout(u),l.B&&(Pt(l),Ot(l)),r.g=a}else Qn(r);0<n.j.length&&Yn(n)}else"stop"!=s[0]&&"close"!=s[0]||ar(n,7);else 3==n.H&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?ar(n,7):Kn(n):"noop"!=s[0]&&n.h&&n.h.Aa(s),n.A=0)}nt(4)}catch(s){}}function Ft(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Mt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Nt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Mt(e),r=Ft(e),o=r.length,i=0;i<o;i++)t.call(void 0,r[i],n&&n[i],e)}r=gt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Wn(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const c=Wn(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(3!=c||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=c||7==t||nt(8==t||0>=f?3:2),Pt(this);var n=this.g.da();this.ca=n;t:if(kt(this)){var r=jn(this.g);e="";var o=r.length,i=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){It(this),At(this);var a="";break t}this.h.i=new d.TextDecoder}for(t=0;t<o;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==o-1});r.splice(0,o),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(l)){var s=l;break t}}s=null}if(!(n=s)){this.i=!1,this.o=3,ot(12),It(this),At(this);break e}qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_t(this,n)}this.S?(Zt(this,c,a),j&&this.i&&3==c&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(qe(this.j,this.m,a,null),_t(this,a)),4==c&&It(this),this.i&&!this.J&&(4==c?or(this.l,this):(this.i=!1,Ot(this)))}else Ln(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),It(this),At(this)}}}catch(c){}},r.mb=function(){if(this.g){var e=Wn(this.g),t=this.g.ja();this.C<t.length&&(Pt(this),Zt(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.J=!0,It(this)},r.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Ge(this.j,this.A),2!=this.L&&(nt(),ot(17)),It(this),this.o=2,At(this)):Tt(this,this.Y-e)};var Dt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),o=null;if(0<=r){var i=e[n].substring(0,r);o=e[n].substring(r+1)}else i=e[n];t(i,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function Wt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=e.h,Lt(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l;var t=e.i,n=new Qt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(t=String(e).match(Dt))?(this.h=!1,Lt(this,t[1]||"",!0),this.s=Kt(t[2]||""),this.g=Kt(t[3]||"",!0),Bt(this,t[4]),this.l=Kt(t[5]||"",!0),Ht(this,t[6]||"",!0),this.o=Kt(t[7]||"")):(this.h=!1,this.i=new Qt(null,this.h))}function jt(e){return new Wt(e)}function Lt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof Qt?(e.i=t,an(e.i,e.h)):(n||(t=Ut(t,Jt)),e.i=new Qt(t,e.h))}function Vt(e,t,n){e.i.set(t,n)}function zt(e){return Vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ut(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,$t),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $t(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ut(t,Yt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ut(t,Yt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ut(n,"/"==n.charAt(0)?Gt:qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ut(n,Xt)),e.join("")};var Yt=/[#\/\?@]/g,qt=/[#\?:]/g,Gt=/[#\?]/g,Jt=/[#\?@]/g,Xt=/#/g;function Qt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Rt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=on(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=on(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(on(e,t),Z(n)),e.h+=n.length)}function on(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function an(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Qt.prototype,r.add=function(e,t){en(this),this.i=null,e=on(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const o=e[r];for(let e=0;e<o.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(on(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=on(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),a=this.Z(r);for(r=0;r<a.length;r++){var o=i;""!==a[r]&&(o+="="+encodeURIComponent(String(a[r]))),e.push(o)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.g=e,this.map=t}};function un(e){this.l=e||sn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sn=10;function cn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function dn(e){return e.h?1:e.g?e.g.size:0}function fn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function hn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Z(e.i)}un.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return d.JSON.stringify(e,void 0)}parse(e){return d.JSON.parse(e,void 0)}};function gn(){this.g=new mn}function yn(e,t,n){const r=n||"";try{Nt(e,(function(e,n){let o=e;v(e)&&(o=ke(e)),t.push(r+n+"="+encodeURIComponent(o))}))}catch(o){throw t.push(r+"type="+encodeURIComponent("_badmap")),o}}function bn(e,t){const n=new Ue;if(d.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,t),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function wn(e,t,n,r,o){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,o(r)}catch(i){}}function Cn(e){this.l=e.fc||null,this.j=e.ob||!1}function xn(e,t){Ce.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Sn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}C(Cn,st),Cn.prototype.g=function(){return new xn(this.l,this.j)},Cn.prototype.i=function(e){return function(){return e}}({}),C(xn,Ce);var Sn=0;function kn(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Zn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,En(e)}function En(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=xn.prototype,r.open=function(e,t){if(this.readyState!=Sn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,En(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||d).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zn(this)),this.readyState=Sn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,En(this)),this.g&&(this.readyState=3,En(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;kn(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Zn(this):En(this),3==this.readyState&&kn(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Zn(this))},r.Ya=function(e){this.g&&(this.response=e,Zn(this))},r.ka=function(){this.g&&Zn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=d.JSON.parse;function Tn(e){Ce.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Pn,this.L=this.M=!1}C(Tn,Ce);var Pn="",An=/^https?$/i,In=["POST","PUT"];function _n(e){return R&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Fn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mn(e),Dn(e)}function Mn(e){e.F||(e.F=!0,xe(e,"complete"),xe(e,"error"))}function Nn(e){if(e.h&&"undefined"!=typeof c&&(!e.C[1]||4!=Wn(e)||2!=e.da()))if(e.v&&4==Wn(e))je(e.La,0,e);else if(xe(e,"readystatechange"),4==Wn(e)){e.h=!1;try{const l=e.da();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var o=String(e.I).match(Dt)[1]||null;!o&&d.self&&d.self.location&&(o=d.self.location.protocol.slice(0,-1)),r=!An.test(o?o.toLowerCase():"")}n=r}if(n)xe(e,"complete"),xe(e,"success");else{e.m=6;try{var i=2<Wn(e)?e.g.statusText:""}catch(a){i=""}e.j=i+" ["+e.da()+"]",Mn(e)}}finally{Dn(e)}}}function Dn(e,t){if(e.g){Rn(e);const r=e.g,o=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||xe(e,"ready");try{r.onreadystatechange=o}catch(n){}}}function Rn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Wn(e){return e.g?e.g.readyState:0}function jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Pn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Yr){return null}}function Ln(e){const t={};e=(e.g&&2<=Wn(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(P(e[r]))continue;var n=Ae(e[r]);const o=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const i=t[o]||[];t[o]=i,i.push(n)}te(t,(function(e){return e.join(", ")}))}function Bn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Hn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Vt(e,t,n))}function Vn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new Ue,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vn("baseRetryDelayMs",5e3,e),this.hb=Vn("retryDelaySeedMs",1e4,e),this.eb=Vn("forwardChannelMaxRetries",2,e),this.xa=Vn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new un(e&&e.concurrentRequestLimit),this.Ja=new gn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(e){if($n(e),3==e.H){var t=e.W++,n=jt(e.I);if(Vt(n,"SID",e.K),Vt(n,"RID",t),Vt(n,"TYPE","terminate"),Jn(e,n),t=new gt(e,e.l,t),t.L=2,t.v=zt(jt(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=sr(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Ot(t)}lr(e)}function Un(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function $n(e){Un(e),e.u&&(d.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Yn(e){if(!cn(e.i)&&!e.m){e.m=!0;var t=e.Na;_e||Ne(),Fe||(_e(),Fe=!0),Me.add(t,e),e.C=0}}function qn(e,t){return!(dn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=at(b(e.Na,e,t),ir(e,e.C)),e.C++,!0))}function Gn(e,t){var n;n=t?t.m:e.W++;const r=jt(e.I);Vt(r,"SID",e.K),Vt(r,"RID",n),Vt(r,"AID",e.V),Jn(e,r),e.o&&e.s&&Hn(r,e.o,e.s),n=new gt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Xn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),vn(e.i,n),xt(n,r,t)}function Jn(e,t){e.na&&ee(e.na,(function(e,n){Vt(t,n,e)})),e.h&&Nt({},(function(e,n){Vt(t,n,e)}))}function Xn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?b(e.h.Va,e.h,e):null;e:{var o=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=o[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let a=0;a<n;a++){let n=o[a].g;const l=o[a].map;if(n-=t,0>n)t=Math.max(0,o[a].g-100),i=!1;else try{yn(l,e,"req"+n+"_")}catch(io){r&&r(l)}}if(i){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Qn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;_e||Ne(),Fe||(_e(),Fe=!0),Me.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=at(b(e.Ma,e),ir(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new gt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=jt(e.wa);Vt(t,"RID","rpc"),Vt(t,"SID",e.K),Vt(t,"AID",e.V),Vt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Vt(t,"TO",e.qa),Vt(t,"TYPE","xmlhttp"),Jn(e,t),e.o&&e.s&&Hn(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=zt(jt(t)),n.s=null,n.S=!0,St(n,e)}function rr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!fn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.G;var o=e.C;r=et(),xe(r,new it(r,n)),Yn(e)}else Qn(e);else if(o=t.o,3==o||0==o&&0<t.ca||!(1==r&&qn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),o){case 1:ar(e,5);break;case 4:ar(e,10);break;case 3:ar(e,6);break;default:ar(e,2)}}function ir(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ar(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=b(e.pb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Lt(n,"https"),zt(n)),bn(n.toString(),r)}else ot(2);e.H=0,e.h&&e.h.za(t),lr(e),$n(e)}function lr(e){if(e.H=0,e.ma=[],e.h){const t=hn(e.i);0==t.length&&0==e.j.length||(E(e.ma,t),E(e.ma,e.j),e.i.i.length=0,Z(e.j),e.j.length=0),e.h.ya()}}function ur(e,t,n){var r=n instanceof Wt?jt(n):new Wt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Bt(r,r.m);else{var o=d.location;r=o.protocol,t=t?t+"."+o.hostname:o.hostname,o=+o.port;var i=new Wt(null);r&&Lt(i,r),t&&(i.g=t),o&&Bt(i,o),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&Vt(r,n,t),Vt(r,"VER",e.ra),Jn(e,r),r}function sr(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Tn(new Cn({ob:!0})):new Tn(e.va),t.Oa(e.J),t}function cr(){}function dr(){if(R&&!(10<=Number($)))throw Error("Environmental error: no available transport.")}function fr(e,t){Ce.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!P(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!P(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new hr(this)}function vr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){ht.call(this),this.status=1}function hr(e){this.g=e}function mr(){this.blockSize=-1}function gr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var o=0;16>o;++o)r[o]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(o=0;16>o;++o)r[o]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],o=e.g[2];var i=e.g[3],a=t+(i^n&(o^i))+r[0]+3614090360&4294967295;t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[1]+3905402710&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[2]+606105819&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[3]+3250441966&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[4]+4118548399&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[5]+1200080426&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[6]+2821735955&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[7]+4249261313&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[8]+1770035416&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[9]+2336552879&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[10]+4294925233&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[11]+2304563134&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(i^n&(o^i))+r[12]+1804603682&4294967295,t=n+(a<<7&4294967295|a>>>25),a=i+(o^t&(n^o))+r[13]+4254626195&4294967295,i=t+(a<<12&4294967295|a>>>20),a=o+(n^i&(t^n))+r[14]+2792965006&4294967295,o=i+(a<<17&4294967295|a>>>15),a=n+(t^o&(i^t))+r[15]+1236535329&4294967295,n=o+(a<<22&4294967295|a>>>10),a=t+(o^i&(n^o))+r[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[6]+3225465664&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[11]+643717713&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[0]+3921069994&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[10]+38016083&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[15]+3634488961&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[4]+3889429448&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[14]+3275163606&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[3]+4107603335&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[8]+1163531501&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(o^i&(n^o))+r[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=i+(n^o&(t^n))+r[2]+4243563512&4294967295,i=t+(a<<9&4294967295|a>>>23),a=o+(t^n&(i^t))+r[7]+1735328473&4294967295,o=i+(a<<14&4294967295|a>>>18),a=n+(i^t&(o^i))+r[12]+2368359562&4294967295,n=o+(a<<20&4294967295|a>>>12),a=t+(n^o^i)+r[5]+4294588738&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[8]+2272392833&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[11]+1839030562&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[14]+4259657740&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[1]+2763975236&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[4]+1272893353&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[7]+4139469664&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[10]+3200236656&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[13]+681279174&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[0]+3936430074&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[3]+3572445317&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[6]+76029189&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(n^o^i)+r[9]+3654602809&4294967295,t=n+(a<<4&4294967295|a>>>28),a=i+(t^n^o)+r[12]+3873151461&4294967295,i=t+(a<<11&4294967295|a>>>21),a=o+(i^t^n)+r[15]+530742520&4294967295,o=i+(a<<16&4294967295|a>>>16),a=n+(o^i^t)+r[2]+3299628645&4294967295,n=o+(a<<23&4294967295|a>>>9),a=t+(o^(n|~i))+r[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[7]+1126891415&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[14]+2878612391&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[5]+4237533241&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[3]+2399980690&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[10]+4293915773&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[1]+2240044497&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[15]+4264355552&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[6]+2734768916&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[13]+1309151649&4294967295,n=o+(a<<21&4294967295|a>>>11),a=t+(o^(n|~i))+r[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=i+(n^(t|~o))+r[11]+3174756917&4294967295,i=t+(a<<10&4294967295|a>>>22),a=o+(t^(i|~n))+r[2]+718787259&4294967295,o=i+(a<<15&4294967295|a>>>17),a=n+(i^(o|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(o+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+o&4294967295,e.g[3]=e.g[3]+i&4294967295}function br(e,t){this.h=t;for(var n=[],r=!0,o=e.length-1;0<=o;o--){var i=0|e[o];r&&i==t||(n[o]=i,r=!1)}this.g=n}r=Tn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ft.g(),this.C=this.u?ct(this.u):ct(ft),this.g.onreadystatechange=b(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){return void Fn(this,i)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var o in r)n.set(o,r[o]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),o=d.FormData&&e instanceof d.FormData,!(0<=k(In,t))||r||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,l]of n)this.g.setRequestHeader(a,l);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rn(this),0<this.B&&((this.L=_n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Fn(this,i)}},r.ua=function(){"undefined"!=typeof c&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,xe(this,"complete"),xe(this,"abort"),Dn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dn(this,!0)),Tn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Nn(this):this.kb())},r.kb=function(){Nn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Wn(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const o=new gt(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ne(i),oe(i,this.U)):i=this.U),null!==this.o||this.O||(o.I=i,i=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xn(this,o,t),n=jt(this.I),Vt(n,"RID",e),Vt(n,"CVER",22),this.F&&Vt(n,"X-HTTP-Session-Id",this.F),Jn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Bn(i)))+"&"+t:this.o&&Hn(n,this.o,i)),vn(this.i,o),this.bb&&Vt(n,"TYPE","init"),this.P?(Vt(n,"$req",t),Vt(n,"SID","null"),o.aa=!0,xt(o,n,null)):xt(o,n,t),this.H=2}}else 3==this.H&&(e?Gn(this,e):0==this.j.length||cn(this.i)||Gn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=at(b(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Un(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Un(this),er(this),ot(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=cr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},dr.prototype.g=function(e,t){return new fr(e,t)},C(fr,Ce),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ot(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ur(e,null,e.Y),Yn(e)},fr.prototype.close=function(){Kn(this.g)},fr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ke(e),e=n);t.j.push(new ln(t.fb++,e)),3==t.H&&Yn(t)},fr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,fr.$.N.call(this)},C(vr,pt),C(pr,ht),C(hr,cr),hr.prototype.Ba=function(){xe(this.g,"a")},hr.prototype.Aa=function(e){xe(this.g,new vr(e))},hr.prototype.za=function(e){xe(this.g,new pr)},hr.prototype.ya=function(){xe(this.g,"b")},C(gr,mr),gr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},gr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,o=this.h,i=0;i<t;){if(0==o)for(;i<=n;)yr(this,e,i),i+=this.blockSize;if("string"===typeof e){for(;i<t;)if(r[o++]=e.charCodeAt(i++),o==this.blockSize){yr(this,r),o=0;break}}else for(;i<t;)if(r[o++]=e[i++],o==this.blockSize){yr(this,r),o=0;break}}this.h=o,this.i+=t},gr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var wr={};function Cr(e){return-128<=e&&128>e?F(e,(function(e){return new br([0|e],0>e?-1:0)})):new br([0|e],0>e?-1:0)}function xr(e){if(isNaN(e)||!isFinite(e))return Zr;if(0>e)return Ar(xr(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=kr;return new br(t,0)}function Sr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Ar(Sr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xr(Math.pow(t,8)),r=Zr,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),a=parseInt(e.substring(o,o+i),t);8>i?(i=xr(Math.pow(t,i)),r=r.R(i).add(xr(a))):(r=r.R(n),r=r.add(xr(a)))}return r}var kr=4294967296,Zr=Cr(0),Er=Cr(1),Or=Cr(16777216);function Tr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Pr(e){return-1==e.h}function Ar(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new br(n,~e.h).add(Er)}function Ir(e,t){return e.add(Ar(t))}function _r(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Fr(e,t){this.g=e,this.h=t}function Mr(e,t){if(Tr(t))throw Error("division by zero");if(Tr(e))return new Fr(Zr,Zr);if(Pr(e))return t=Mr(Ar(e),t),new Fr(Ar(t.g),Ar(t.h));if(Pr(t))return t=Mr(e,Ar(t)),new Fr(Ar(t.g),t.h);if(30<e.g.length){if(Pr(e)||Pr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Er,r=t;0>=r.X(e);)n=Nr(n),r=Nr(r);var o=Dr(n,1),i=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!Tr(r);){var a=i.add(r);0>=a.X(e)&&(o=o.add(n),i=a),r=Dr(r,1),n=Dr(n,1)}return t=Ir(e,o.R(t)),new Fr(o,t)}for(o=Zr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=xr(n),a=i.R(t);Pr(a)||0<a.X(e);)n-=r,i=xr(n),a=i.R(t);Tr(i)&&(i=Er),o=o.add(i),e=Ir(e,a)}return new Fr(o,e)}function Nr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new br(n,e.h)}function Dr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,o=[],i=0;i<r;i++)o[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new br(o,e.h)}r=br.prototype,r.ea=function(){if(Pr(this))return-Ar(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:kr+r)*t,t*=kr}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Tr(this))return"0";if(Pr(this))return"-"+Ar(this).toString(e);for(var t=xr(Math.pow(e,6)),n=this,r="";;){var o=Mr(n,t).g;n=Ir(n,o.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=o,Tr(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Ir(this,e),Pr(e)?-1:Tr(e)?0:1},r.abs=function(){return Pr(this)?Ar(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,o=0;o<=t;o++){var i=r+(65535&this.D(o))+(65535&e.D(o)),a=(i>>>16)+(this.D(o)>>>16)+(e.D(o)>>>16);r=a>>>16,i&=65535,a&=65535,n[o]=a<<16|i}return new br(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(Tr(this)||Tr(e))return Zr;if(Pr(this))return Pr(e)?Ar(this).R(Ar(e)):Ar(Ar(this).R(e));if(Pr(e))return Ar(this.R(Ar(e)));if(0>this.X(Or)&&0>e.X(Or))return xr(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var o=0;o<e.g.length;o++){var i=this.D(r)>>>16,a=65535&this.D(r),l=e.D(o)>>>16,u=65535&e.D(o);n[2*r+2*o]+=a*u,_r(n,2*r+2*o),n[2*r+2*o+1]+=i*u,_r(n,2*r+2*o+1),n[2*r+2*o+1]+=a*l,_r(n,2*r+2*o+1),n[2*r+2*o+2]+=i*l,_r(n,2*r+2*o+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new br(n,0)},r.gb=function(e){return Mr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new br(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new br(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new br(n,this.h^e.h)},dr.prototype.createWebChannel=dr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ut.COMPLETE="complete",dt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.O,Tn.prototype.listenOnce=Tn.prototype.P,Tn.prototype.getLastError=Tn.prototype.Sa,Tn.prototype.getLastErrorCode=Tn.prototype.Ia,Tn.prototype.getStatus=Tn.prototype.da,Tn.prototype.getResponseJson=Tn.prototype.Wa,Tn.prototype.getResponseText=Tn.prototype.ja,Tn.prototype.send=Tn.prototype.ha,Tn.prototype.setWithCredentials=Tn.prototype.Oa,gr.prototype.digest=gr.prototype.l,gr.prototype.reset=gr.prototype.reset,gr.prototype.update=gr.prototype.j,br.prototype.add=br.prototype.add,br.prototype.multiply=br.prototype.R,br.prototype.modulo=br.prototype.gb,br.prototype.compare=br.prototype.X,br.prototype.toNumber=br.prototype.ea,br.prototype.toString=br.prototype.toString,br.prototype.getBits=br.prototype.D,br.fromNumber=xr,br.fromString=Sr;var Rr=s.createWebChannelTransport=function(){return new dr},Wr=s.getStatEventTarget=function(){return et()},jr=s.ErrorCode=lt,Lr=s.EventType=ut,Br=s.Event=Xe,Hr=s.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vr=s.FetchXmlHttpFactory=Cn,zr=s.WebChannel=dt,Kr=s.XhrIo=Tn,Ur=s.Md5=gr,$r=s.Integer=br;const Yr="@firebase/firestore";
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
 */class qr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qr.UNAUTHENTICATED=new qr(null),qr.GOOGLE_CREDENTIALS=new qr("google-credentials-uid"),qr.FIRST_PARTY=new qr("first-party-uid"),qr.MOCK_USER=new qr("mock-user");
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
let Gr="9.23.0";
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
 */const Jr=new a.Yd("@firebase/firestore");function Xr(){return Jr.logLevel}function Qr(e,...t){if(Jr.logLevel<=a["in"].DEBUG){const n=t.map(no);Jr.debug(`Firestore (${Gr}): ${e}`,...n)}}function eo(e,...t){if(Jr.logLevel<=a["in"].ERROR){const n=t.map(no);Jr.error(`Firestore (${Gr}): ${e}`,...n)}}function to(e,...t){if(Jr.logLevel<=a["in"].WARN){const n=t.map(no);Jr.warn(`Firestore (${Gr}): ${e}`,...n)}}function no(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function ro(e="Unexpected state"){const t=`FIRESTORE (${Gr}) INTERNAL ASSERTION FAILED: `+e;throw eo(t),new Error(t)}function oo(e,t){e||ro()}function io(e,t){return e}
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
 */const ao={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lo extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class uo{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class so{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class co{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(qr.UNAUTHENTICATED)))}shutdown(){}}class fo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vo{constructor(e){this.t=e,this.currentUser=qr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let o=new uo;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new uo,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=o;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{Qr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(Qr("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new uo)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Qr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(oo("string"==typeof t.accessToken),new so(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oo(null===e||"string"==typeof e),new qr(e)}}class po{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=qr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ho{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new po(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(qr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class go{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Qr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Qr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Qr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?r(e):Qr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(oo("string"==typeof e.token),this.T=e.token,new mo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function yo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class bo{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=yo(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function wo(e,t){return e<t?-1:e>t?1:0}function Co(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class xo{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new lo(ao.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new lo(ao.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new lo(ao.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new lo(ao.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xo.fromMillis(Date.now())}static fromDate(e){return xo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new xo(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?wo(this.nanoseconds,e.nanoseconds):wo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class So{constructor(e){this.timestamp=e}static fromTimestamp(e){return new So(e)}static min(){return new So(new xo(0,0))}static max(){return new So(new xo(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class ko{constructor(e,t,n){void 0===t?t=0:t>e.length&&ro(),void 0===n?n=e.length-t:n>e.length-t&&ro(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ko.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),o=t.get(r);if(n<o)return-1;if(n>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Zo extends ko{construct(e,t,n){return new Zo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new lo(ao.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Zo(t)}static emptyPath(){return new Zo([])}}const Eo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oo extends ko{construct(e,t,n){return new Oo(e,t,n)}static isValidIdentifier(e){return Eo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oo.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Oo(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(0===n.length)throw new lo(ao.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new lo(ao.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new lo(ao.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(o(),r++)}if(o(),i)throw new lo(ao.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oo(t)}static emptyPath(){return new Oo([])}}
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
 */class To{constructor(e){this.path=e}static fromPath(e){return new To(Zo.fromString(e))}static fromName(e){return new To(Zo.fromString(e).popFirst(5))}static empty(){return new To(Zo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Zo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Zo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new To(new Zo(e.slice()))}}
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
 */class Po{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Po.UNKNOWN_ID=-1;function Ao(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,o=So.fromTimestamp(1e9===r?new xo(n+1,0):new xo(n,r));return new _o(o,To.empty(),t)}function Io(e){return new _o(e.readTime,e.key,-1)}class _o{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new _o(So.min(),To.empty(),-1)}static max(){return new _o(So.max(),To.empty(),-1)}}function Fo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=To.comparator(e.documentKey,t.documentKey),0!==n?n:wo(e.largestBatchId,t.largestBatchId))}
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
 */const Mo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class No{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function Do(e){if(e.code!==ao.FAILED_PRECONDITION||e.message!==Mo)throw e;Qr("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ro{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ro(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ro(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ro?t:Ro.resolve(t)}catch(e){return Ro.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ro.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ro.reject(t)}static resolve(e){return new Ro(((t,n)=>{t(e)}))}static reject(e){return new Ro(((t,n)=>{n(e)}))}static waitFor(e){return new Ro(((t,n)=>{let r=0,o=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++o,i&&o===r&&t()}),(e=>n(e)))})),i=!0,o===r&&t()}))}static or(e){let t=Ro.resolve(!1);for(const n of e)t=t.next((e=>e?Ro.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ro(((n,r)=>{const o=e.length,i=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;t(e[u]).next((e=>{i[u]=e,++a,a===o&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ro(((n,r)=>{const o=()=>{!0===e()?t().next((()=>{o()}),r):n()};o()}))}}
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
 */function Wo(e){return"IndexedDbTransactionError"===e.name}
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
class jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Lo(e){return null==e}function Bo(e){return 0===e&&1/e==-1/0}function Ho(e){return"number"==typeof e&&Number.isInteger(e)&&!Bo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */jo.ct=-1;const Vo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zo=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ko=zo;
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
function Uo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function $o(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Yo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class qo{constructor(e,t){this.comparator=e,this.root=t||Jo.EMPTY}insert(e,t){return new qo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jo.BLACK,null,null))}remove(e){return new qo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jo.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(0===o){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jo{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=null!=n?n:Jo.RED,this.left=null!=r?r:Jo.EMPTY,this.right=null!=o?o:Jo.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new Jo(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===o?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Jo.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Jo.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ro();if(this.right.isRed())throw ro();const e=this.left.check();if(e!==this.right.check())throw ro();return e+(this.isRed()?0:1)}}Jo.EMPTY=null,Jo.RED=!0,Jo.BLACK=!1,Jo.EMPTY=new class{constructor(){this.size=0}get key(){throw ro()}get value(){throw ro()}get color(){throw ro()}get left(){throw ro()}get right(){throw ro()}copy(e,t,n,r,o){return this}insert(e,t,n){return new Jo(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Xo{constructor(e){this.comparator=e,this.data=new qo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(e){return new Qo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Xo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xo(this.comparator);return t.data=e,t}}class Qo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class ei{constructor(e){this.fields=e,e.sort(Oo.comparator)}static empty(){return new ei([])}unionWith(e){let t=new Xo(Oo.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ei(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class ti extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class ni{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ti("Invalid base64 string: "+e):e}}(e);return new ni(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ni(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return wo(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ni.EMPTY_BYTE_STRING=new ni("");const ri=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(e){if(oo(!!e),"string"==typeof e){let t=0;const n=ri.exec(e);if(oo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ii(e.seconds),nanos:ii(e.nanos)}}function ii(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ai(e){return"string"==typeof e?ni.fromBase64String(e):ni.fromUint8Array(e)}
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
 */function li(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ui(e){const t=e.mapValue.fields.__previous_value__;return li(t)?ui(t):t}function si(e){const t=oi(e.mapValue.fields.__local_write_time__.timestampValue);return new xo(t.seconds,t.nanos)}
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
 */class ci{constructor(e,t,n,r,o,i,a,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class di{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?li(e)?4:Ei(e)?9007199254740991:10:ro()}function pi(e,t){if(e===t)return!0;const n=vi(e);if(n!==vi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return si(e).isEqual(si(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=oi(e.timestampValue),r=oi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ai(e.bytesValue).isEqual(ai(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ii(e.geoPointValue.latitude)===ii(t.geoPointValue.latitude)&&ii(e.geoPointValue.longitude)===ii(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ii(e.integerValue)===ii(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ii(e.doubleValue),r=ii(t.doubleValue);return n===r?Bo(n)===Bo(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Co(e.arrayValue.values||[],t.arrayValue.values||[],pi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Uo(n)!==Uo(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!pi(n[o],r[o])))return!1;return!0}(e,t);default:return ro()}}function hi(e,t){return void 0!==(e.values||[]).find((e=>pi(e,t)))}function mi(e,t){if(e===t)return 0;const n=vi(e),r=vi(t);if(n!==r)return wo(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return wo(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ii(e.integerValue||e.doubleValue),r=ii(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return gi(e.timestampValue,t.timestampValue);case 4:return gi(si(e),si(t));case 5:return wo(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ai(e),r=ai(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let o=0;o<n.length&&o<r.length;o++){const e=wo(n[o],r[o]);if(0!==e)return e}return wo(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=wo(ii(e.latitude),ii(t.latitude));return 0!==n?n:wo(ii(e.longitude),ii(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const e=mi(n[o],r[o]);if(e)return e}return wo(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===fi.mapValue&&t===fi.mapValue)return 0;if(e===fi.mapValue)return 1;if(t===fi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),o=t.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let a=0;a<r.length&&a<i.length;++a){const e=wo(r[a],i[a]);if(0!==e)return e;const t=mi(n[r[a]],o[i[a]]);if(0!==t)return t}return wo(r.length,i.length)}(e.mapValue,t.mapValue);default:throw ro()}}function gi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return wo(e,t);const n=oi(e),r=oi(t),o=wo(n.seconds,r.seconds);return 0!==o?o:wo(n.nanos,r.nanos)}function yi(e){return bi(e)}function bi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=oi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ai(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,To.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=bi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${bi(e.fields[o])}`;return n+"}"}(e.mapValue):ro();var t,n}function wi(e){return!!e&&"integerValue"in e}function Ci(e){return!!e&&"arrayValue"in e}function xi(e){return!!e&&"nullValue"in e}function Si(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ki(e){return!!e&&"mapValue"in e}function Zi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return $o(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Zi(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Zi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ei(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Oi{constructor(e){this.value=e}static empty(){return new Oi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ki(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(t)}setAll(e){let t=Oo.emptyPath(),n={},r=[];e.forEach(((e,o)=>{if(!t.isImmediateParentOf(o)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=o.popLast()}e?n[o.lastSegment()]=Zi(e):r.push(o.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());ki(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ki(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){$o(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Oi(Zi(this.value))}}function Ti(e){const t=[];return $o(e.fields,((e,n)=>{const r=new Oo([e]);if(ki(n)){const e=Ti(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ei(t)
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
 */}class Pi{constructor(e,t,n,r,o,i,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=a}static newInvalidDocument(e){return new Pi(e,0,So.min(),So.min(),So.min(),Oi.empty(),0)}static newFoundDocument(e,t,n,r){return new Pi(e,1,t,So.min(),n,r,0)}static newNoDocument(e,t){return new Pi(e,2,t,So.min(),So.min(),Oi.empty(),0)}static newUnknownDocument(e,t){return new Pi(e,3,t,So.min(),So.min(),Oi.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(So.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=So.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Pi&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ai{constructor(e,t){this.position=e,this.inclusive=t}}function Ii(e,t,n){let r=0;for(let o=0;o<e.position.length;o++){const i=t[o],a=e.position[o];if(r=i.field.isKeyField()?To.comparator(To.fromName(a.referenceValue),n.key):mi(a,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function _i(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!pi(e.position[n],t.position[n]))return!1;return!0}
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
 */class Fi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mi(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class Ni{}class Di extends Ni{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new zi(e,t,n):"array-contains"===t?new Yi(e,n):"in"===t?new qi(e,n):"not-in"===t?new Gi(e,n):"array-contains-any"===t?new Ji(e,n):new Di(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ki(e,n):new Ui(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(mi(t,this.value)):null!==t&&vi(this.value)===vi(t)&&this.matchesComparison(mi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ro()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ri extends Ni{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Ri(e,t)}matches(e){return Wi(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Wi(e){return"and"===e.op}function ji(e){return Li(e)&&Wi(e)}function Li(e){for(const t of e.filters)if(t instanceof Ri)return!1;return!0}function Bi(e){if(e instanceof Di)return e.field.canonicalString()+e.op.toString()+yi(e.value);if(ji(e))return e.filters.map((e=>Bi(e))).join(",");{const t=e.filters.map((e=>Bi(e))).join(",");return`${e.op}(${t})`}}function Hi(e,t){return e instanceof Di?function(e,t){return t instanceof Di&&e.op===t.op&&e.field.isEqual(t.field)&&pi(e.value,t.value)}(e,t):e instanceof Ri?function(e,t){return t instanceof Ri&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Hi(n,t.filters[r])),!0)}(e,t):void ro()}function Vi(e){return e instanceof Di?function(e){return`${e.field.canonicalString()} ${e.op} ${yi(e.value)}`}(e):e instanceof Ri?function(e){return e.op.toString()+" {"+e.getFilters().map(Vi).join(" ,")+"}"}(e):"Filter"}class zi extends Di{constructor(e,t,n){super(e,t,n),this.key=To.fromName(n.referenceValue)}matches(e){const t=To.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ki extends Di{constructor(e,t){super(e,"in",t),this.keys=$i("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ui extends Di{constructor(e,t){super(e,"not-in",t),this.keys=$i("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $i(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>To.fromName(e.referenceValue)))}class Yi extends Di{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ci(t)&&hi(t.arrayValue,this.value)}}class qi extends Di{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&hi(this.value.arrayValue,t)}}class Gi extends Di{constructor(e,t){super(e,"not-in",t)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!hi(this.value.arrayValue,t)}}class Ji extends Di{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ci(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>hi(this.value.arrayValue,e)))}}
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
 */class Xi{constructor(e,t=null,n=[],r=[],o=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=a,this.dt=null}}function Qi(e,t=null,n=[],r=[],o=null,i=null,a=null){return new Xi(e,t,n,r,o,i,a)}function ea(e){const t=io(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Bi(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Lo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>yi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>yi(e))).join(",")),t.dt=e}return t.dt}function ta(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Mi(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Hi(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_i(e.startAt,t.startAt)&&_i(e.endAt,t.endAt)}function na(e){return To.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
class ra{constructor(e,t=null,n=[],r=[],o=null,i="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function oa(e,t,n,r,o,i,a,l){return new ra(e,t,n,r,o,i,a,l)}function ia(e){return new ra(e)}function aa(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function la(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ua(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function sa(e){return null!==e.collectionGroup}function ca(e){const t=io(e);if(null===t.wt){t.wt=[];const e=ua(t),n=la(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Fi(e)),t.wt.push(new Fi(Oo.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Fi(Oo.keyField(),e))}}}return t.wt}function da(e){const t=io(e);if(!t._t)if("F"===t.limitType)t._t=Qi(t.path,t.collectionGroup,ca(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const o of ca(t)){const t="desc"===o.dir?"asc":"desc";e.push(new Fi(o.field,t))}const n=t.endAt?new Ai(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ai(t.startAt.position,t.startAt.inclusive):null;t._t=Qi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function fa(e,t,n){return new ra(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function va(e,t){return ta(da(e),da(t))&&e.limitType===t.limitType}function pa(e){return`${ea(da(e))}|lt:${e.limitType}`}function ha(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Vi(e))).join(", ")}]`),Lo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>yi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>yi(e))).join(",")),`Target(${t})`}(da(e))}; limitType=${e.limitType})`}function ma(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):To.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ca(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ii(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,ca(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ii(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,ca(e),t))}(e,t)}function ga(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ya(e){return(t,n)=>{let r=!1;for(const o of ca(e)){const e=ba(o,t,n);if(0!==e)return e;r=r||o.field.isKeyField()}return 0}}function ba(e,t,n){const r=e.field.isKeyField()?To.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),o=n.data.field(e);return null!==r&&null!==o?mi(r,o):ro()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ro()}}
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
 */class wa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,o]of n)if(this.equalsFn(r,e))return o}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){$o(this.inner,((t,n)=>{for(const[r,o]of n)e(r,o)}))}isEmpty(){return Yo(this.inner)}size(){return this.innerSize}}
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
 */const Ca=new qo(To.comparator);function xa(){return Ca}const Sa=new qo(To.comparator);function ka(...e){let t=Sa;for(const n of e)t=t.insert(n.key,n);return t}function Za(e){let t=Sa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Ea(){return Ta()}function Oa(){return Ta()}function Ta(){return new wa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Pa=new qo(To.comparator),Aa=new Xo(To.comparator);function Ia(...e){let t=Aa;for(const n of e)t=t.add(n);return t}const _a=new Xo(wo);function Fa(){return _a}
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
 */function Ma(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bo(t)?"-0":t}}function Na(e){return{integerValue:""+e}}function Da(e,t){return Ho(t)?Na(t):Ma(e,t)}
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
 */class Ra{constructor(){this._=void 0}}function Wa(e,t,n){return e instanceof Ba?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&li(t)&&(t=ui(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ha?Va(e,t):e instanceof za?Ka(e,t):function(e,t){const n=La(e,t),r=$a(n)+$a(e.gt);return wi(n)&&wi(e.gt)?Na(r):Ma(e.serializer,r)}(e,t)}function ja(e,t,n){return e instanceof Ha?Va(e,t):e instanceof za?Ka(e,t):n}function La(e,t){return e instanceof Ua?wi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ba extends Ra{}class Ha extends Ra{constructor(e){super(),this.elements=e}}function Va(e,t){const n=Ya(t);for(const r of e.elements)n.some((e=>pi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class za extends Ra{constructor(e){super(),this.elements=e}}function Ka(e,t){let n=Ya(t);for(const r of e.elements)n=n.filter((e=>!pi(e,r)));return{arrayValue:{values:n}}}class Ua extends Ra{constructor(e,t){super(),this.serializer=e,this.gt=t}}function $a(e){return ii(e.integerValue||e.doubleValue)}function Ya(e){return Ci(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class qa{constructor(e,t){this.field=e,this.transform=t}}function Ga(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ha&&t instanceof Ha||e instanceof za&&t instanceof za?Co(e.elements,t.elements,pi):e instanceof Ua&&t instanceof Ua?pi(e.gt,t.gt):e instanceof Ba&&t instanceof Ba}(e.transform,t.transform)}class Ja{constructor(e,t){this.version=e,this.transformResults=t}}class Xa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xa}static exists(e){return new Xa(void 0,e)}static updateTime(e){return new Xa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qa(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class el{}function tl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new dl(e.key,Xa.none()):new al(e.key,e.data,Xa.none());{const n=e.data,r=Oi.empty();let o=new Xo(Oo.comparator);for(let e of t.fields)if(!o.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),o=o.add(e)}return new ll(e.key,r,new ei(o.toArray()),Xa.none())}}function nl(e,t,n){e instanceof al?function(e,t,n){const r=e.value.clone(),o=sl(e.fieldTransforms,t,n.transformResults);r.setAll(o),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ll?function(e,t,n){if(!Qa(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=sl(e.fieldTransforms,t,n.transformResults),o=t.data;o.setAll(ul(e)),o.setAll(r),t.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function rl(e,t,n,r){return e instanceof al?function(e,t,n,r){if(!Qa(e.precondition,t))return n;const o=e.value.clone(),i=cl(e.fieldTransforms,r,t);return o.setAll(i),t.convertToFoundDocument(t.version,o).setHasLocalMutations(),null}(e,t,n,r):e instanceof ll?function(e,t,n,r){if(!Qa(e.precondition,t))return n;const o=cl(e.fieldTransforms,r,t),i=t.data;return i.setAll(ul(e)),i.setAll(o),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Qa(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ol(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),o=La(r.transform,e||null);null!=o&&(null===n&&(n=Oi.empty()),n.set(r.field,o))}return n||null}function il(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Co(e,t,((e,t)=>Ga(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class al extends el{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ll extends el{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ul(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function sl(e,t,n){const r=new Map;oo(e.length===n.length);for(let o=0;o<n.length;o++){const i=e[o],a=i.transform,l=t.data.field(i.field);r.set(i.field,ja(a,l,n[o]))}return r}function cl(e,t,n){const r=new Map;for(const o of e){const e=o.transform,i=n.data.field(o.field);r.set(o.field,Wa(e,i,t))}return r}class dl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fl extends el{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class vl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&nl(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=rl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=rl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oa();return this.mutations.forEach((r=>{const o=e.get(r.key),i=o.overlayedDocument;let a=this.applyToLocalView(i,o.mutatedFields);a=t.has(r.key)?null:a;const l=tl(i,a);null!==l&&n.set(r.key,l),i.isValidDocument()||i.convertToNoDocument(So.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ia())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,((e,t)=>il(e,t)))&&Co(this.baseMutations,e.baseMutations,((e,t)=>il(e,t)))}}class pl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){oo(e.mutations.length===n.length);let r=Pa;const o=e.mutations;for(let i=0;i<o.length;i++)r=r.insert(o[i].key,n[i].version);return new pl(e,t,n,r)}}
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
 */class hl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
class ml{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var gl,yl;function bl(e){switch(e){default:return ro();case ao.CANCELLED:case ao.UNKNOWN:case ao.DEADLINE_EXCEEDED:case ao.RESOURCE_EXHAUSTED:case ao.INTERNAL:case ao.UNAVAILABLE:case ao.UNAUTHENTICATED:return!1;case ao.INVALID_ARGUMENT:case ao.NOT_FOUND:case ao.ALREADY_EXISTS:case ao.PERMISSION_DENIED:case ao.FAILED_PRECONDITION:case ao.ABORTED:case ao.OUT_OF_RANGE:case ao.UNIMPLEMENTED:case ao.DATA_LOSS:return!0}}function wl(e){if(void 0===e)return eo("GRPC error has no .code"),ao.UNKNOWN;switch(e){case gl.OK:return ao.OK;case gl.CANCELLED:return ao.CANCELLED;case gl.UNKNOWN:return ao.UNKNOWN;case gl.DEADLINE_EXCEEDED:return ao.DEADLINE_EXCEEDED;case gl.RESOURCE_EXHAUSTED:return ao.RESOURCE_EXHAUSTED;case gl.INTERNAL:return ao.INTERNAL;case gl.UNAVAILABLE:return ao.UNAVAILABLE;case gl.UNAUTHENTICATED:return ao.UNAUTHENTICATED;case gl.INVALID_ARGUMENT:return ao.INVALID_ARGUMENT;case gl.NOT_FOUND:return ao.NOT_FOUND;case gl.ALREADY_EXISTS:return ao.ALREADY_EXISTS;case gl.PERMISSION_DENIED:return ao.PERMISSION_DENIED;case gl.FAILED_PRECONDITION:return ao.FAILED_PRECONDITION;case gl.ABORTED:return ao.ABORTED;case gl.OUT_OF_RANGE:return ao.OUT_OF_RANGE;case gl.UNIMPLEMENTED:return ao.UNIMPLEMENTED;case gl.DATA_LOSS:return ao.DATA_LOSS;default:return ro()}}(yl=gl||(gl={}))[yl.OK=0]="OK",yl[yl.CANCELLED=1]="CANCELLED",yl[yl.UNKNOWN=2]="UNKNOWN",yl[yl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yl[yl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yl[yl.NOT_FOUND=5]="NOT_FOUND",yl[yl.ALREADY_EXISTS=6]="ALREADY_EXISTS",yl[yl.PERMISSION_DENIED=7]="PERMISSION_DENIED",yl[yl.UNAUTHENTICATED=16]="UNAUTHENTICATED",yl[yl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yl[yl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yl[yl.ABORTED=10]="ABORTED",yl[yl.OUT_OF_RANGE=11]="OUT_OF_RANGE",yl[yl.UNIMPLEMENTED=12]="UNIMPLEMENTED",yl[yl.INTERNAL=13]="INTERNAL",yl[yl.UNAVAILABLE=14]="UNAVAILABLE",yl[yl.DATA_LOSS=15]="DATA_LOSS";
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
 */
class Cl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return xl}static getOrCreateInstance(){return null===xl&&(xl=new Cl),xl}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let xl=null;
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
 */function Sl(){return new TextEncoder}
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
 */const kl=new $r([4294967295,4294967295],0);function Zl(e){const t=Sl().encode(e),n=new Ur;return n.update(t),new Uint8Array(n.digest())}function El(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),o=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new $r([n,r],0),new $r([o,i],0)]}class Ol{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Tl(`Invalid padding: ${t}`);if(n<0)throw new Tl(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Tl(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Tl(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=$r.fromNumber(this.It)}Et(e,t,n){let r=e.add(t.multiply($r.fromNumber(n)));return 1===r.compare(kl)&&(r=new $r([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Zl(e),[n,r]=El(t);for(let o=0;o<this.hashCount;o++){const e=this.Et(n,r,o);if(!this.At(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),i=new Ol(o,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.It)return;const t=Zl(e),[n,r]=El(t);for(let o=0;o<this.hashCount;o++){const e=this.Et(n,r,o);this.Rt(e)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Pl{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Al.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pl(So.min(),r,new qo(wo),xa(),Ia())}}class Al{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Al(n,t,Ia(),Ia(),Ia())}}
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
 */class Il{constructor(e,t,n,r){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=r}}class _l{constructor(e,t){this.targetId=e,this.Vt=t}}class Fl{constructor(e,t,n=ni.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ml{constructor(){this.St=0,this.Dt=Rl(),this.Ct=ni.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ia(),t=Ia(),n=Ia();return this.Dt.forEach(((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ro()}})),new Al(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Rl()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Nl{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=xa(),this.zt=Dl(),this.Wt=new qo(wo)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ro()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,r=e.Vt.count,o=this.se(n);if(o){const i=o.target;if(na(i))if(0===r){const e=new To(i.path);this.Yt(n,e,Pi.newNoDocument(e,So.min()))}else oo(1===r);else{const o=this.ie(n);if(o!==r){const r=this.re(e,o);if(0!==r){this.ee(n);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Cl.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var r,o,i,a,l,u;const s={localCacheCount:t,existenceFilterCount:n.count},c=n.unchangedNames;return c&&(s.bloomFilter={applied:0===e,hashCount:null!==(r=null==c?void 0:c.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(a=null===(i=null===(o=null==c?void 0:c.bits)||void 0===o?void 0:o.bitmap)||void 0===i?void 0:i.length)&&void 0!==a?a:0,padding:null!==(u=null===(l=null==c?void 0:c.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0}),s}
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
 */(r,o,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:r}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:o="",padding:i=0},hashCount:a=0}=n;let l,u;try{l=ai(o).toUint8Array()}catch(e){if(e instanceof ti)return to("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{u=new Ol(l,i,a)}catch(e){return to(e instanceof Tl?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===u.It?1:r!==t-this.oe(e.targetId,u)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const o=this.Gt.ue(),i=`projects/${o.projectId}/databases/${o.database}/documents/${n.path.canonicalString()}`;t.vt(i)||(this.Yt(e,n,null),r++)})),r}ce(e){const t=new Map;this.Qt.forEach(((n,r)=>{const o=this.se(r);if(o){if(n.current&&na(o.target)){const t=new To(o.target.path);null!==this.jt.get(t)||this.ae(r,t)||this.Yt(r,t,Pi.newNoDocument(t,e))}n.Mt&&(t.set(r,n.Ot()),n.Ft())}}));let n=Ia();this.zt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const r=new Pl(e,t,this.Wt,this.jt,n);return this.jt=xa(),this.zt=Dl(),this.Wt=new qo(wo),r}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Ml,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Xo(wo),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Qr("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Ml),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Dl(){return new qo(To.comparator)}function Rl(){return new qo(To.comparator)}const Wl=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),jl=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ll=(()=>{const e={and:"AND",or:"OR"};return e})();class Bl{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hl(e,t){return e.useProto3Json||Lo(t)?t:{value:t}}function Vl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zl(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Kl(e,t){return Vl(e,t.toTimestamp())}function Ul(e){return oo(!!e),So.fromTimestamp(function(e){const t=oi(e);return new xo(t.seconds,t.nanos)}(e))}function $l(e,t){return function(e){return new Zo(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Yl(e){const t=Zo.fromString(e);return oo(gu(t)),t}function ql(e,t){return $l(e.databaseId,t.path)}function Gl(e,t){const n=Yl(t);if(n.get(1)!==e.databaseId.projectId)throw new lo(ao.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new lo(ao.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new To(eu(n))}function Jl(e,t){return $l(e.databaseId,t)}function Xl(e){const t=Yl(e);return 4===t.length?Zo.emptyPath():eu(t)}function Ql(e){return new Zo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function eu(e){return oo(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function tu(e,t,n){return{name:ql(e,t),fields:n.value.mapValue.fields}}function nu(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ro()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(oo(void 0===t||"string"==typeof t),ni.fromBase64String(t||"")):(oo(void 0===t||t instanceof Uint8Array),ni.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?ao.UNKNOWN:wl(e.code);return new lo(t,e.message||"")}(a);n=new Fl(r,o,i,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=Gl(e,r.document.name),i=Ul(r.document.updateTime),a=r.document.createTime?Ul(r.document.createTime):So.min(),l=new Oi({mapValue:{fields:r.document.fields}}),u=Pi.newFoundDocument(o,i,a,l),s=r.targetIds||[],c=r.removedTargetIds||[];n=new Il(s,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=Gl(e,r.document),i=r.readTime?Ul(r.readTime):So.min(),a=Pi.newNoDocument(o,i),l=r.removedTargetIds||[];n=new Il([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=Gl(e,r.document),i=r.removedTargetIds||[];n=new Il([],i,o,null)}else{if(!("filter"in t))return ro();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:o}=e,i=new ml(r,o),a=e.targetId;n=new _l(a,i)}}return n}function ru(e,t){let n;if(t instanceof al)n={update:tu(e,t.key,t.value)};else if(t instanceof dl)n={delete:ql(e,t.key)};else if(t instanceof ll)n={update:tu(e,t.key,t.data),updateMask:mu(t.fieldMask)};else{if(!(t instanceof fl))return ro();n={verify:ql(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ba)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ha)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof za)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ua)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ro()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Kl(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ro()}(e,t.precondition)),n}function ou(e,t){return e&&e.length>0?(oo(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ul(e.updateTime):Ul(t);return n.isEqual(So.min())&&(n=Ul(t)),new Ja(n,e.transformResults||[])}(e,t)))):[]}function iu(e,t){return{documents:[Jl(e,t.path)]}}function au(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Jl(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Jl(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(e){if(0!==e.length)return hu(Ri.create(e,"and"))}(t.filters);o&&(n.structuredQuery.where=o);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:vu(e.field),direction:cu(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const a=Hl(e,t.limit);var l;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function lu(e){let t=Xl(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){oo(1===r);const e=n.from[0];e.allDescendants?o=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=su(e);return t instanceof Ri&&ji(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>function(e){return new Fi(pu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let l=null;n.limit&&(l=function(e){let t;return t="object"==typeof e?e.value:e,Lo(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new Ai(n,t)}(n.startAt));let s=null;return n.endAt&&(s=function(e){const t=!e.before,n=e.values||[];return new Ai(n,t)}(n.endAt)),oa(t,o,a,i,l,"F",u,s)}function uu(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ro()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function su(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pu(e.unaryFilter.field);return Di.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pu(e.unaryFilter.field);return Di.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pu(e.unaryFilter.field);return Di.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pu(e.unaryFilter.field);return Di.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ro()}}(e):void 0!==e.fieldFilter?function(e){return Di.create(pu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ro()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Ri.create(e.compositeFilter.filters.map((e=>su(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ro()}}(e.compositeFilter.op))}(e):ro()}function cu(e){return Wl[e]}function du(e){return jl[e]}function fu(e){return Ll[e]}function vu(e){return{fieldPath:e.canonicalString()}}function pu(e){return Oo.fromServerFormat(e.fieldPath)}function hu(e){return e instanceof Di?function(e){if("=="===e.op){if(Si(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NAN"}};if(xi(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Si(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NAN"}};if(xi(e.value))return{unaryFilter:{field:vu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vu(e.field),op:du(e.op),value:e.value}}}(e):e instanceof Ri?function(e){const t=e.getFilters().map((e=>hu(e)));return 1===t.length?t[0]:{compositeFilter:{op:fu(e.op),filters:t}}}(e):ro()}function mu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class yu{constructor(e,t,n,r,o=So.min(),i=So.min(),a=ni.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new yu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class bu{constructor(e){this.fe=e}}function wu(e){const t=lu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?fa(t,t.limit,"L"):t}
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
 */class Cu{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(ii(e.integerValue));else if("doubleValue"in e){const n=ii(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),Bo(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(ai(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?Ei(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ro()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const r of Object.keys(n))this.Te(r,t),this.me(n[r],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const r of n)this.me(r,t)}ve(e,t){this.ye(t,37),To.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Cu.Ve=new Cu;
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
class xu{constructor(){this.rn=new Su}addToCollectionParentIndex(e,t){return this.rn.add(t),Ro.resolve()}getCollectionParents(e,t){return Ro.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Ro.resolve()}deleteFieldIndex(e,t){return Ro.resolve()}getDocumentsMatchingTarget(e,t){return Ro.resolve(null)}getIndexType(e,t){return Ro.resolve(0)}getFieldIndexes(e,t){return Ro.resolve([])}getNextCollectionGroupToUpdate(e){return Ro.resolve(null)}getMinOffset(e,t){return Ro.resolve(_o.min())}getMinOffsetFromCollectionGroup(e,t){return Ro.resolve(_o.min())}updateCollectionGroup(e,t,n){return Ro.resolve()}updateIndexEntries(e,t){return Ro.resolve()}}class Su{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Xo(Zo.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Xo(Zo.comparator)).toArray()}}
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
 */new Uint8Array(0);class ku{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ku(e,ku.DEFAULT_COLLECTION_PERCENTILE,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */ku.DEFAULT_COLLECTION_PERCENTILE=10,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ku.DEFAULT=new ku(41943040,ku.DEFAULT_COLLECTION_PERCENTILE,ku.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ku.DISABLED=new ku(-1,0,0);
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
class Zu{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Zu(0)}static Mn(){return new Zu(-1)}}
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
class Eu{constructor(){this.changes=new wa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pi.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ro.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class Ou{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Tu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&rl(n.mutation,e,ei.empty(),xo.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Ia()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Ia()){const r=Ea();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ka();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Ea();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Ia())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let o=xa();const i=Ta(),a=Ta();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof ll)?o=o.insert(t.key,t):void 0!==a?(i.set(t.key,a.mutation.getFieldMask()),rl(a.mutation,t,a.mutation.getFieldMask(),xo.now())):i.set(t.key,ei.empty())})),this.recalculateAndSaveOverlays(e,o).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new Ou(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Ta();let r=new qo(((e,t)=>e-t)),o=Ia();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const o of e)o.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let a=n.get(e)||ei.empty();a=o.applyToLocalView(i,a),n.set(e,a);const l=(r.get(o.batchId)||Ia()).add(e);r=r.insert(o.batchId,l)}))})).next((()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),l=r.key,u=r.value,s=Oa();u.forEach((e=>{if(!o.has(e)){const r=tl(t.get(e),n.get(e));null!==r&&s.set(e,r),o=o.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,l,s))}return Ro.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return To.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((o=>{const i=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):Ro.resolve(Ea());let a=-1,l=o;return i.next((t=>Ro.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),o.get(t)?Ro.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{l=l.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,o))).next((()=>this.computeViews(e,l,t,Ia()))).next((e=>({batchId:a,changes:Za(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new To(t)).next((e=>{let t=ka();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let o=ka();return this.indexManager.getCollectionParents(e,r).next((i=>Ro.forEach(i,(i=>{const a=function(e,t){return new ra(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,a,n).next((e=>{e.forEach(((e,t)=>{o=o.insert(e,t)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r)))).next((e=>{r.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Pi.newInvalidDocument(r)))}));let n=ka();return e.forEach(((e,o)=>{const i=r.get(e);void 0!==i&&rl(i.mutation,o,ei.empty(),xo.now()),ma(t,o)&&(n=n.insert(e,o))})),n}))}}
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
 */class Pu{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Ro.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Ul(n.createTime)}),Ro.resolve()}getNamedQuery(e,t){return Ro.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:wu(e.bundledQuery),readTime:Ul(e.readTime)}}(t)),Ro.resolve()}}
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
 */class Au{constructor(){this.overlays=new qo(To.comparator),this.ls=new Map}getOverlay(e,t){return Ro.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ea();return Ro.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.we(e,t,r)})),Ro.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.ls.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Ro.resolve()}getOverlaysForCollection(e,t,n){const r=Ea(),o=t.length+1,i=new To(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const e=a.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===o&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ro.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new qo(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=o.get(e.largestBatchId);null===t&&(t=Ea(),o=o.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Ea(),l=o.getIterator();for(;l.hasNext();)if(l.getNext().value.forEach(((e,t)=>a.set(e,t))),a.size()>=r)break;return Ro.resolve(a)}we(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.ls.get(r.largestBatchId).delete(n.key);this.ls.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new hl(t,n));let o=this.ls.get(t);void 0===o&&(o=Ia(),this.ls.set(t,o)),this.ls.set(t,o.add(n.key))}}
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
 */class Iu{constructor(){this.fs=new Xo(_u.ds),this.ws=new Xo(_u._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new _u(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new _u(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new To(new Zo([])),n=new _u(t,e),r=new _u(t,e+1),o=[];return this.ws.forEachInRange([n,r],(e=>{this.ys(e),o.push(e.key)})),o}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new To(new Zo([])),n=new _u(t,e),r=new _u(t,e+1);let o=Ia();return this.ws.forEachInRange([n,r],(e=>{o=o.add(e.key)})),o}containsKey(e){const t=new _u(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class _u{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return To.comparator(e.key,t.key)||wo(e.As,t.As)}static _s(e,t){return wo(e.As,t.As)||To.comparator(e.key,t.key)}}
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
 */class Fu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Xo(_u.ds)}checkEmpty(e){return Ro.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const o=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new vl(o,t,n,r);this.mutationQueue.push(i);for(const a of r)this.Rs=this.Rs.add(new _u(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Ro.resolve(i)}lookupMutationBatch(e,t){return Ro.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.bs(n),o=r<0?0:r;return Ro.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return Ro.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Ro.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new _u(t,0),r=new _u(t,Number.POSITIVE_INFINITY),o=[];return this.Rs.forEachInRange([n,r],(e=>{const t=this.Ps(e.As);o.push(t)})),Ro.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xo(wo);return t.forEach((e=>{const t=new _u(e,0),r=new _u(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,r],(e=>{n=n.add(e.As)}))})),Ro.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;To.isDocumentKey(o)||(o=o.child(""));const i=new _u(new To(o),0);let a=new Xo(wo);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.As)),!0)}),i),Ro.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){oo(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ro.forEach(t.mutations,(r=>{const o=new _u(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new _u(t,0),r=this.Rs.firstAfterOrEqual(n);return Ro.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ro.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class Mu{constructor(e){this.Ds=e,this.docs=new qo(To.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,i=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ro.resolve(n?n.document.mutableCopy():Pi.newInvalidDocument(t))}getEntries(e,t){let n=xa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Pi.newInvalidDocument(e))})),Ro.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=xa();const i=t.path,a=new To(i.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:e,value:{document:a}}=l.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Fo(Io(a),n)<=0||(r.has(a.key)||ma(t,a))&&(o=o.insert(a.key,a.mutableCopy()))}return Ro.resolve(o)}getAllFromCollectionGroup(e,t,n,r){ro()}Cs(e,t){return Ro.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Nu(this)}getSize(e){return Ro.resolve(this.size)}}class Nu extends Eu{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(n)})),Ro.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
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
 */class Du{constructor(e){this.persistence=e,this.xs=new wa((e=>ea(e)),ta),this.lastRemoteSnapshotVersion=So.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Iu,this.targetCount=0,this.Ms=Zu.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Ro.resolve()}getLastRemoteSnapshotVersion(e){return Ro.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ro.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Ro.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Ro.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Zu(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Ro.resolve()}updateTargetData(e,t){return this.Fn(t),Ro.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Ro.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.xs.forEach(((i,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.xs.delete(i),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Ro.waitFor(o).next((()=>r))}getTargetCount(e){return Ro.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Ro.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Ro.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach((t=>{o.push(r.markPotentiallyOrphaned(e,t))})),Ro.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Ro.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Ro.resolve(n)}containsKey(e,t){return Ro.resolve(this.ks.containsKey(t))}}
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
 */class Ru{constructor(e,t){this.$s={},this.overlays={},this.Os=new jo(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Du(this),this.indexManager=new xu,this.remoteDocumentCache=function(e){return new Mu(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new bu(t),this.qs=new Pu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Au,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Fu(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Qr("MemoryPersistence","Starting transaction:",e);const r=new Wu(this.Os.next());return this.referenceDelegate.Us(),n(r).next((e=>this.referenceDelegate.Ks(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gs(e,t){return Ro.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Wu extends No{constructor(e){super(),this.currentSequenceNumber=e}}class ju{constructor(e){this.persistence=e,this.Qs=new Iu,this.js=null}static zs(e){return new ju(e)}get Ws(){if(this.js)return this.js;throw ro()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Ro.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Ro.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Ro.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ro.forEach(this.Ws,(n=>{const r=To.fromPath(n);return this.Hs(e,r).next((e=>{e||t.removeEntry(r,So.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Ro.or([()=>Ro.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
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
class Lu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=r}static Li(e,t){let n=Ia(),r=Ia();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new Lu(e,t.fromCache,n,r)}}
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
 */class Bu{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ki(e,t).next((o=>o||this.Gi(e,t,r,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(aa(t))return Ro.resolve(null);let n=da(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=fa(t,null,"F"),n=da(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const o=Ia(...r);return this.Ui.getDocuments(e,o).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ji(t,r);return this.zi(t,i,o,n.readTime)?this.Ki(e,fa(t,null,"F")):this.Wi(e,i,t,n)}))))})))))}Gi(e,t,n,r){return aa(t)||r.isEqual(So.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((o=>{const i=this.ji(t,o);return this.zi(t,i,n,r)?this.Qi(e,t):(Xr()<=a["in"].DEBUG&&Qr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ha(t)),this.Wi(e,i,t,Ao(r,-1)))}))}ji(e,t){let n=new Xo(ya(e));return t.forEach(((t,r)=>{ma(e,r)&&(n=n.add(r))})),n}zi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const o="F"===e.limitType?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Qi(e,t){return Xr()<=a["in"].DEBUG&&Qr("QueryEngine","Using full collection scan to execute query:",ha(t)),this.Ui.getDocumentsMatchingQuery(e,t,_o.min())}Wi(e,t,n,r){return this.Ui.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class Hu{constructor(e,t,n,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new qo(wo),this.Yi=new wa((e=>ea(e)),ta),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Tu(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Vu(e,t,n,r){return new Hu(e,t,n,r)}async function zu(e,t){const n=io(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((o=>(r=o,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const o=[],i=[];let a=Ia();for(const e of r){o.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({er:e,removedBatchIds:o,addedBatchIds:i})))}))}))}function Ku(e,t){const n=io(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),o=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const o=n.batch,i=o.keys();let a=Ro.resolve();return i.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);oo(null!==i),t.version.compareTo(i)<0&&(o.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,o)))}(n,e,t,o).next((()=>o.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Ia();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Uu(e){const t=io(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function $u(e,t){const n=io(e),r=t.snapshotVersion;let o=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Zi.newChangeBuffer({trackRemovals:!0});o=n.Ji;const a=[];t.targetChanges.forEach(((i,l)=>{const u=o.get(l);if(!u)return;a.push(n.Bs.removeMatchingKeys(e,i.removedDocuments,l).next((()=>n.Bs.addMatchingKeys(e,i.addedDocuments,l))));let s=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(l)?s=s.withResumeToken(ni.EMPTY_BYTE_STRING,So.min()).withLastLimboFreeSnapshotVersion(So.min()):i.resumeToken.approximateByteSize()>0&&(s=s.withResumeToken(i.resumeToken,r)),o=o.insert(l,s),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(u,s,i)&&a.push(n.Bs.updateTargetData(e,s))}));let l=xa(),u=Ia();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(Yu(e,i,t.documentUpdates).next((e=>{l=e.nr,u=e.sr}))),!r.isEqual(So.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Ro.waitFor(a).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,l,u))).next((()=>l))})).then((e=>(n.Ji=o,e)))}function Yu(e,t,n){let r=Ia(),o=Ia();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=xa();return n.forEach(((n,i)=>{const a=e.get(n);i.isFoundDocument()!==a.isFoundDocument()&&(o=o.add(n)),i.isNoDocument()&&i.version.isEqual(So.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!a.isValidDocument()||i.version.compareTo(a.version)>0||0===i.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Qr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",i.version)})),{nr:r,sr:o}}))}function qu(e,t){const n=io(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Gu(e,t){const n=io(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Bs.getTargetData(e,t).next((o=>o?(r=o,Ro.resolve(r)):n.Bs.allocateTargetId(e).next((o=>(r=new yu(t,o,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ji.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function Ju(e,t,n){const r=io(e),o=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,o)))}catch(e){if(!Wo(e))throw e;Qr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(o.target)}function Xu(e,t,n){const r=io(e);let o=So.min(),i=Ia();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=io(e),o=r.Yi.get(n);return void 0!==o?Ro.resolve(r.Ji.get(o)):r.Bs.getTargetData(t,n)}(r,e,da(t)).next((t=>{if(t)return o=t.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Hi.getDocumentsMatchingQuery(e,t,n?o:So.min(),n?i:Ia()))).next((e=>(Qu(r,ga(t),e),{documents:e,ir:i})))))}function Qu(e,t,n){let r=e.Xi.get(t)||So.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Xi.set(t,r)}class es{constructor(){this.activeTargetIds=Fa()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ts{constructor(){this.Hr=new es,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new es,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class ns{Yr(e){}shutdown(){}}
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
 */class rs{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Qr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Qr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let os=null;function is(){return null===os?os=268435456+Math.round(2147483648*Math.random()):os++,"0x"+os.toString(16)
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
 */}const as={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class ls{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
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
 */const us="WebChannelConnection";class ss extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,r,o){const i=is(),a=this.To(e,t);Qr("RestConnection",`Sending RPC '${e}' ${i}:`,a,n);const l={};return this.Eo(l,r,o),this.Ao(e,a,l,n).then((t=>(Qr("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw to("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",a,"request:",n),t}))}vo(e,t,n,r,o,i){return this.Io(e,t,n,r,o)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Gr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=as[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,r){const o=is();return new Promise(((i,a)=>{const l=new Kr;l.setWithCredentials(!0),l.listenOnce(Lr.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case jr.NO_ERROR:const t=l.getResponseJson();Qr(us,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(t)),i(t);break;case jr.TIMEOUT:Qr(us,`RPC '${e}' ${o} timed out`),a(new lo(ao.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=l.getStatus();if(Qr(us,`RPC '${e}' ${o} failed with status:`,n,"response text:",l.getResponseText()),n>0){let e=l.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ao).indexOf(t)>=0?t:ao.UNKNOWN}(t.status);a(new lo(e,t.message))}else a(new lo(ao.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new lo(ao.UNAVAILABLE,"Connection failed."));break;default:ro()}}finally{Qr(us,`RPC '${e}' ${o} completed.`)}}));const u=JSON.stringify(r);Qr(us,`RPC '${e}' ${o} sending request:`,r),l.send(t,"POST",u,n,15)}))}Ro(e,t,n){const r=is(),o=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Rr(),a=Wr(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Vr({})),this.Eo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const s=o.join("");Qr(us,`Creating RPC '${e}' stream ${r}: ${s}`,l);const c=i.createWebChannel(s,l);let d=!1,f=!1;const v=new ls({ro:t=>{f?Qr(us,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(d||(Qr(us,`Opening RPC '${e}' stream ${r} transport.`),c.open(),d=!0),Qr(us,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},oo:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(c,zr.EventType.OPEN,(()=>{f||Qr(us,`RPC '${e}' stream ${r} transport opened.`)})),p(c,zr.EventType.CLOSE,(()=>{f||(f=!0,Qr(us,`RPC '${e}' stream ${r} transport closed`),v.wo())})),p(c,zr.EventType.ERROR,(t=>{f||(f=!0,to(us,`RPC '${e}' stream ${r} transport errored:`,t),v.wo(new lo(ao.UNAVAILABLE,"The operation could not be completed")))})),p(c,zr.EventType.MESSAGE,(t=>{var n;if(!f){const o=t.data[0];oo(!!o);const i=o,a=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(a){Qr(us,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=gl[e];if(void 0!==t)return wl(t)}(t),o=a.message;void 0===n&&(n=ao.INTERNAL,o="Unknown error status: "+t+" with message "+a.message),f=!0,v.wo(new lo(n,o)),c.close()}else Qr(us,`RPC '${e}' stream ${r} received:`,o),v._o(o)}})),p(a,Br.STAT_EVENT,(t=>{t.stat===Hr.PROXY?Qr(us,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Hr.NOPROXY&&Qr(us,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{v.fo()}),0),v}}
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
 */function cs(){return"undefined"!=typeof document?document:null}
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
 */function ds(e){return new Bl(e,!0)}
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
 */class fs{constructor(e,t,n=1e3,r=1.5,o=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=r,this.Vo=o,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-n);r>0&&Qr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
 */class vs{constructor(e,t,n,r,o,i,a,l){this.ii=e,this.$o=n,this.Oo=r,this.connection=o,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new fs(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===ao.RESOURCE_EXHAUSTED?(eo(t.toString()),eo("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===ao.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new lo(ao.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Qr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Qr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ps extends vs{constructor(e,t,n,r,o,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=nu(this.serializer,e),n=function(e){if(!("targetChange"in e))return So.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?So.min():t.readTime?Ul(t.readTime):So.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Ql(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=na(r)?{documents:iu(e,r)}:{query:au(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=zl(e,t.resumeToken);const r=Hl(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(So.min())>0){n.readTime=Vl(e,t.snapshotVersion.toTimestamp());const r=Hl(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=uu(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Ql(this.serializer),t.removeTarget=e,this.Wo(t)}}class hs extends vs{constructor(e,t,n,r,o,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=o,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(oo(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=ou(e.writeResults,e.commitTime),n=Ul(e.commitTime);return this.listener.cu(n,t)}return oo(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ql(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>ru(this.serializer,e)))};this.Wo(t)}}
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
 */class ms extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new lo(ao.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Io(e,t,n,r,o))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ao.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lo(ao.UNKNOWN,e.toString())}))}vo(e,t,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.vo(e,t,n,o,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ao.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new lo(ao.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class gs{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(eo(t),this.mu=!1):Qr("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
 */class ys{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=o,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Os(this)&&(Qr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=io(e);t.vu.add(4),await ws(t),t.bu.set("Unknown"),t.vu.delete(4),await bs(t)}(this))}))})),this.bu=new gs(n,r)}}async function bs(e){if(Os(e))for(const t of e.Ru)await t(!0)}async function ws(e){for(const t of e.Ru)await t(!1)}function Cs(e,t){const n=io(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Es(n)?Zs(n):Ks(n).Ko()&&Ss(n,t))}function xs(e,t){const n=io(e),r=Ks(n);n.Au.delete(t),r.Ko()&&ks(n,t),0===n.Au.size&&(r.Ko()?r.jo():Os(n)&&n.bu.set("Unknown"))}function Ss(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(So.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Ks(e).su(t)}function ks(e,t){e.Vu.qt(t),Ks(e).iu(t)}function Zs(e){e.Vu=new Nl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Ks(e).start(),e.bu.gu()}function Es(e){return Os(e)&&!Ks(e).Uo()&&e.Au.size>0}function Os(e){return 0===io(e).vu.size}function Ts(e){e.Vu=void 0}async function Ps(e){e.Au.forEach(((t,n)=>{Ss(e,t)}))}async function As(e,t){Ts(e),Es(e)?(e.bu.Iu(t),Zs(e)):e.bu.set("Unknown")}async function Is(e,t,n){if(e.bu.set("Online"),t instanceof Fl&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Au.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Au.delete(r),e.Vu.removeTarget(r))}(e,t)}catch(n){Qr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await _s(e,n)}else if(t instanceof Il?e.Vu.Ht(t):t instanceof _l?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(So.min()))try{const t=await Uu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const o=e.Au.get(r);o&&e.Au.set(r,o.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Au.get(t);if(!r)return;e.Au.set(t,r.withResumeToken(ni.EMPTY_BYTE_STRING,r.snapshotVersion)),ks(e,t);const o=new yu(r.target,t,n,r.sequenceNumber);Ss(e,o)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Qr("RemoteStore","Failed to raise snapshot:",t),await _s(e,t)}}async function _s(e,t,n){if(!Wo(t))throw t;e.vu.add(1),await ws(e),e.bu.set("Offline"),n||(n=()=>Uu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Qr("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await bs(e)}))}function Fs(e,t){return t().catch((n=>_s(e,n,t)))}async function Ms(e){const t=io(e),n=Us(t);let r=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Ns(t);)try{const e=await qu(t.localStore,r);if(null===e){0===t.Eu.length&&n.jo();break}r=e.batchId,Ds(t,e)}catch(e){await _s(t,e)}Rs(t)&&Ws(t)}function Ns(e){return Os(e)&&e.Eu.length<10}function Ds(e,t){e.Eu.push(t);const n=Us(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function Rs(e){return Os(e)&&!Us(e).Uo()&&e.Eu.length>0}function Ws(e){Us(e).start()}async function js(e){Us(e).hu()}async function Ls(e){const t=Us(e);for(const n of e.Eu)t.uu(n.mutations)}async function Bs(e,t,n){const r=e.Eu.shift(),o=pl.from(r,t,n);await Fs(e,(()=>e.remoteSyncer.applySuccessfulWrite(o))),await Ms(e)}async function Hs(e,t){t&&Us(e).ou&&await async function(e,t){if(n=t.code,bl(n)&&n!==ao.ABORTED){const n=e.Eu.shift();Us(e).Qo(),await Fs(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Ms(e)}var n}(e,t),Rs(e)&&Ws(e)}async function Vs(e,t){const n=io(e);n.asyncQueue.verifyOperationInProgress(),Qr("RemoteStore","RemoteStore received new credentials");const r=Os(n);n.vu.add(3),await ws(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await bs(n)}async function zs(e,t){const n=io(e);t?(n.vu.delete(2),await bs(n)):t||(n.vu.add(2),await ws(n),n.bu.set("Unknown"))}function Ks(e){return e.Su||(e.Su=function(e,t,n){const r=io(e);return r.fu(),new ps(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
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
 */}(e.datastore,e.asyncQueue,{uo:Ps.bind(null,e),ao:As.bind(null,e),nu:Is.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Es(e)?Zs(e):e.bu.set("Unknown")):(await e.Su.stop(),Ts(e))}))),e.Su}function Us(e){return e.Du||(e.Du=function(e,t,n){const r=io(e);return r.fu(),new hs(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{uo:js.bind(null,e),ao:Hs.bind(null,e),au:Ls.bind(null,e),cu:Bs.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await Ms(e)):(await e.Du.stop(),e.Eu.length>0&&(Qr("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
 */}class $s{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new uo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,o){const i=Date.now()+n,a=new $s(e,t,i,r,o);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lo(ao.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(e,t){if(eo("AsyncQueue",`${t}: ${e}`),Wo(e))return new lo(ao.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class qs{constructor(e){this.comparator=e?(t,n)=>e(t,n)||To.comparator(t.key,n.key):(e,t)=>To.comparator(e.key,t.key),this.keyedMap=ka(),this.sortedSet=new qo(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qs))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new qs;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Gs{constructor(){this.Cu=new qo(To.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ro():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Js{constructor(e,t,n,r,o,i,a,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,o){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Js(e,t,qs.emptySet(t),i,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Xs{constructor(){this.Nu=void 0,this.listeners=[]}}class Qs{constructor(){this.queries=new wa((e=>pa(e)),va),this.onlineState="Unknown",this.ku=new Set}}async function ec(e,t){const n=io(e),r=t.query;let o=!1,i=n.queries.get(r);if(i||(o=!0,i=new Xs),o)try{i.Nu=await n.onListen(r)}catch(e){const n=Ys(e,`Initialization of query '${ha(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&oc(n)}async function tc(e,t){const n=io(e),r=t.query;let o=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),o=0===i.listeners.length)}if(o)return n.queries.delete(r),n.onUnlisten(r)}function nc(e,t){const n=io(e);let r=!1;for(const o of t){const e=o.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.$u(o)&&(r=!0);t.Nu=o}}r&&oc(n)}function rc(e,t,n){const r=io(e),o=r.queries.get(t);if(o)for(const i of o.listeners)i.onError(n);r.queries.delete(t)}function oc(e){e.ku.forEach((e=>{e.next()}))}class ic{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Js(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
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
class ac{constructor(e){this.key=e}}class lc{constructor(e){this.key=e}}class uc{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ia(),this.mutatedKeys=Ia(),this.tc=ya(e),this.ec=new qs(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Gs,r=t?t.ec:this.ec;let o=t?t.mutatedKeys:this.mutatedKeys,i=r,a=!1;const l="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const s=r.get(e),c=ma(this.query,t)?t:null,d=!!s&&this.mutatedKeys.has(s.key),f=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let v=!1;s&&c?s.data.isEqual(c.data)?d!==f&&(n.track({type:3,doc:c}),v=!0):this.rc(s,c)||(n.track({type:2,doc:c}),v=!0,(l&&this.tc(c,l)>0||u&&this.tc(c,u)<0)&&(a=!0)):!s&&c?(n.track({type:0,doc:c}),v=!0):s&&!c&&(n.track({type:1,doc:s}),v=!0,(l||u)&&(a=!0)),v&&(c?(i=i.add(c),o=f?o.add(e):o.delete(e)):(i=i.delete(e),o=o.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),o=o.delete(e.key),n.track({type:1,doc:e})}return{ec:i,ic:n,zi:a,mutatedKeys:o}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const o=e.ic.xu();o.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ro()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const i=t?this.uc():[],a=0===this.Zu.size&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,0!==o.length||l?{snapshot:new Js(this.query,e.ec,r,o,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:i}:{cc:i}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Gs,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ia(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new lc(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new ac(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Ia();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Js.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class sc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class cc{constructor(e){this.key=e,this.fc=!1}}class dc{constructor(e,t,n,r,o,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=i,this.dc={},this.wc=new wa((e=>pa(e)),va),this._c=new Map,this.mc=new Set,this.gc=new qo(To.comparator),this.yc=new Map,this.Ic=new Iu,this.Tc={},this.Ec=new Map,this.Ac=Zu.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function fc(e,t){const n=Ic(e);let r,o;const i=n.wc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),o=i.view.lc();else{const e=await Gu(n.localStore,da(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,o=await vc(n,t,r,"current"===i,e.resumeToken),n.isPrimaryClient&&Cs(n.remoteStore,e)}return o}async function vc(e,t,n,r,o){e.Rc=(t,n,r)=>async function(e,t,n,r){let o=t.view.sc(n);o.zi&&(o=await Xu(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,o))));const i=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(o,e.isPrimaryClient,i);return Zc(e,t.targetId,a.cc),a.snapshot}(e,t,n,r);const i=await Xu(e.localStore,t,!0),a=new uc(t,i.ir),l=a.sc(i.documents),u=Al.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,o),s=a.applyChanges(l,e.isPrimaryClient,u);Zc(e,n,s.cc);const c=new sc(t,n,a);return e.wc.set(t,c),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),s.snapshot}async function pc(e,t){const n=io(e),r=n.wc.get(t),o=n._c.get(r.targetId);if(o.length>1)return n._c.set(r.targetId,o.filter((e=>!va(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ju(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),xs(n.remoteStore,r.targetId),Sc(n,r.targetId)})).catch(Do)):(Sc(n,r.targetId),await Ju(n.localStore,r.targetId,!0))}async function hc(e,t,n){const r=_c(e);try{const e=await function(e,t){const n=io(e),r=xo.now(),o=t.reduce(((e,t)=>e.add(t.key)),Ia());let i,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let l=xa(),u=Ia();return n.Zi.getEntries(e,o).next((e=>{l=e,l.forEach(((e,t)=>{t.isValidDocument()||(u=u.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,l))).next((o=>{i=o;const a=[];for(const e of t){const t=ol(e,i.get(e.key).overlayedDocument);null!=t&&a.push(new ll(e.key,t,Ti(t.value.mapValue),Xa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:Za(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Tc[e.currentUser.toKey()];r||(r=new qo(wo)),r=r.insert(t,n),e.Tc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Tc(r,e.changes),await Ms(r.remoteStore)}catch(e){const t=Ys(e,"Failed to persist write");n.reject(t)}}async function mc(e,t){const n=io(e);try{const e=await $u(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.yc.get(t);r&&(oo(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.fc=!0:e.modifiedDocuments.size>0?oo(r.fc):e.removedDocuments.size>0&&(oo(r.fc),r.fc=!1))})),await Tc(n,e,t)}catch(e){await Do(e)}}function gc(e,t,n){const r=io(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.wc.forEach(((n,r)=>{const o=r.view.Mu(t);o.snapshot&&e.push(o.snapshot)})),function(e,t){const n=io(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const o of n.listeners)o.Mu(t)&&(r=!0)})),r&&oc(n)}(r.eventManager,t),e.length&&r.dc.nu(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yc(e,t,n){const r=io(e);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.yc.get(t),i=o&&o.key;if(i){let e=new qo(To.comparator);e=e.insert(i,Pi.newNoDocument(i,So.min()));const n=Ia().add(i),o=new Pl(So.min(),new Map,new qo(wo),e,n);await mc(r,o),r.gc=r.gc.remove(i),r.yc.delete(t),Oc(r)}else await Ju(r.localStore,t,!1).then((()=>Sc(r,t,n))).catch(Do)}async function bc(e,t){const n=io(e),r=t.batch.batchId;try{const e=await Ku(n.localStore,t);xc(n,r,null),Cc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tc(n,e)}catch(e){await Do(e)}}async function wc(e,t,n){const r=io(e);try{const e=await function(e,t){const n=io(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(oo(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);xc(r,t,n),Cc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tc(r,e)}catch(n){await Do(n)}}function Cc(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function xc(e,t,n){const r=io(e);let o=r.Tc[r.currentUser.toKey()];if(o){const e=o.get(t);e&&(n?e.reject(n):e.resolve(),o=o.remove(t)),r.Tc[r.currentUser.toKey()]=o}}function Sc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e._c.get(t))e.wc.delete(r),n&&e.dc.Pc(r,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||kc(e,t)}))}function kc(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(xs(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Oc(e))}function Zc(e,t,n){for(const r of n)r instanceof ac?(e.Ic.addReference(r.key,t),Ec(e,r)):r instanceof lc?(Qr("SyncEngine","Document no longer in limbo: "+r.key),e.Ic.removeReference(r.key,t),e.Ic.containsKey(r.key)||kc(e,r.key)):ro()}function Ec(e,t){const n=t.key,r=n.path.canonicalString();e.gc.get(n)||e.mc.has(r)||(Qr("SyncEngine","New document in limbo: "+n),e.mc.add(r),Oc(e))}function Oc(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new To(Zo.fromString(t)),r=e.Ac.next();e.yc.set(r,new cc(n)),e.gc=e.gc.insert(n,r),Cs(e.remoteStore,new yu(da(ia(n.path)),r,"TargetPurposeLimboResolution",jo.ct))}}async function Tc(e,t,n){const r=io(e),o=[],i=[],a=[];r.wc.isEmpty()||(r.wc.forEach(((e,l)=>{a.push(r.Rc(l,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){o.push(e);const t=Lu.Li(l.targetId,e);i.push(t)}})))})),await Promise.all(a),r.dc.nu(o),await async function(e,t){const n=io(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ro.forEach(t,(t=>Ro.forEach(t.Fi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ro.forEach(t.Bi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Wo(e))throw e;Qr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ji.get(e),r=t.snapshotVersion,o=t.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(e,o)}}}(r.localStore,i))}async function Pc(e,t){const n=io(e);if(!n.currentUser.isEqual(t)){Qr("SyncEngine","User change. New user:",t.toKey());const e=await zu(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new lo(ao.CANCELLED,t))}))})),e.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Tc(n,e.er)}}function Ac(e,t){const n=io(e),r=n.yc.get(t);if(r&&r.fc)return Ia().add(r.key);{let e=Ia();const r=n._c.get(t);if(!r)return e;for(const t of r){const r=n.wc.get(t);e=e.unionWith(r.view.nc)}return e}}function Ic(e){const t=io(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=mc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ac.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yc.bind(null,t),t.dc.nu=nc.bind(null,t.eventManager),t.dc.Pc=rc.bind(null,t.eventManager),t}function _c(e){const t=io(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=wc.bind(null,t),t}class Fc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Vu(this.persistence,new Bu,e.initialUser,this.serializer)}createPersistence(e){return new Ru(ju.zs,this.serializer)}createSharedClientState(e){return new ts}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>gc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pc.bind(null,this.syncEngine),await zs(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qs}createDatastore(e){const t=ds(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new ss(r));var r;return function(e,t,n,r){return new ms(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,o=e=>gc(this.syncEngine,e,0),i=rs.D()?new rs:new ns,new ys(t,n,r,o,i);var t,n,r,o,i}createSyncEngine(e,t){return function(e,t,n,r,o,i,a){const l=new dc(e,t,n,r,o,i);return a&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=io(e);Qr("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ws(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
class Nc{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):eo("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class Dc{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=qr.UNAUTHENTICATED,this.clientId=bo.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Qr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Qr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lo(ao.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new uo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ys(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Rc(e,t){e.asyncQueue.verifyOperationInProgress(),Qr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await zu(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Wc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Lc(e);Qr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Vs(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Vs(t.remoteStore,n))),e._onlineComponents=t}function jc(e){return"FirebaseError"===e.name?e.code===ao.FAILED_PRECONDITION||e.code===ao.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Lc(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Qr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!jc(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await Rc(e,new Fc)}}else Qr("FirestoreClient","Using default OfflineComponentProvider"),await Rc(e,new Fc);return e._offlineComponents}async function Bc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Qr("FirestoreClient","Using user provided OnlineComponentProvider"),await Wc(e,e._uninitializedComponentsProvider._online)):(Qr("FirestoreClient","Using default OnlineComponentProvider"),await Wc(e,new Mc))),e._onlineComponents}function Hc(e){return Bc(e).then((e=>e.syncEngine))}async function Vc(e){const t=await Bc(e),n=t.eventManager;return n.onListen=fc.bind(null,t.syncEngine),n.onUnlisten=pc.bind(null,t.syncEngine),n}function zc(e,t,n={}){const r=new uo;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Nc({next:i=>{t.enqueueAndForget((()=>tc(e,a)));const l=i.docs.has(n);!l&&i.fromCache?o.reject(new lo(ao.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&i.fromCache&&r&&"server"===r.source?o.reject(new lo(ao.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(i)},error:e=>o.reject(e)}),a=new ic(ia(n.path),i,{includeMetadataChanges:!0,Ku:!0});return ec(e,a)}(await Vc(e),e.asyncQueue,t,n,r))),r.promise}function Kc(e,t,n={}){const r=new uo;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,o){const i=new Nc({next:n=>{t.enqueueAndForget((()=>tc(e,a))),n.fromCache&&"server"===r.source?o.reject(new lo(ao.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:e=>o.reject(e)}),a=new ic(n,i,{includeMetadataChanges:!0,Ku:!0});return ec(e,a)}(await Vc(e),e.asyncQueue,t,n,r))),r.promise}
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
 */
function Uc(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const $c=new Map;
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
 */function Yc(e,t,n){if(!n)throw new lo(ao.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qc(e,t,n,r){if(!0===t&&!0===r)throw new lo(ao.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Gc(e){if(!To.isDocumentKey(e))throw new lo(ao.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Jc(e){if(To.isDocumentKey(e))throw new lo(ao.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ro()}function Qc(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lo(ao.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(e);throw new lo(ao.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class ed{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new lo(ao.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lo(ao.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qc("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uc(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new lo(ao.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new lo(ao.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new lo(ao.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class td{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ed({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new lo(ao.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lo(ao.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ed(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new co;switch(e.type){case"firstParty":return new ho(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new lo(ao.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=$c.get(e);t&&(Qr("ComponentProvider","Removing Datastore"),$c.delete(e),t.terminate())}(this),Promise.resolve()}}function nd(e,t,n,r={}){var o;const i=(e=Qc(e,td))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==a&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=qr.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,null===(o=e._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new lo(ao.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new qr(i)}e._authCredentials=new fo(new so(t,n))}}
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
 */class rd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new id(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rd(this.firestore,e,this._key)}}class od{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new od(this.firestore,e,this._query)}}class id extends od{constructor(e,t,n){super(e,t,ia(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rd(this.firestore,null,new To(e))}withConverter(e){return new id(this.firestore,e,this._path)}}function ad(e,t,...n){if(e=(0,l.m9)(e),Yc("collection","path",t),e instanceof td){const r=Zo.fromString(t,...n);return Jc(r),new id(e,null,r)}{if(!(e instanceof rd||e instanceof id))throw new lo(ao.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Zo.fromString(t,...n));return Jc(r),new id(e.firestore,null,r)}}function ld(e,t,...n){if(e=(0,l.m9)(e),1===arguments.length&&(t=bo.A()),Yc("doc","path",t),e instanceof td){const r=Zo.fromString(t,...n);return Gc(r),new rd(e,null,new To(r))}{if(!(e instanceof rd||e instanceof id))throw new lo(ao.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Zo.fromString(t,...n));return Gc(r),new rd(e.firestore,e instanceof id?e.converter:null,new To(r))}}
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
class ud{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new fs(this,"async_queue_retry"),this.Xc=()=>{const e=cs();e&&Qr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=cs();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=cs();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new uo;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wo(e))throw e;Qr("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw eo("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=$s.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(r),r}Zc(){this.Wc&&ro()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class sd extends td{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ud,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fd(this),this._firestoreClient.terminate()}}function cd(e,t){const n="object"==typeof e?e:(0,o.Mq)(),r="string"==typeof e?e:t||"(default)",i=(0,o.qX)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(0,l.P0)("firestore");e&&nd(i,...e)}return i}function dd(e){return e._firestoreClient||fd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fd(e){var t,n,r;const o=e._freezeSettings(),i=function(e,t,n,r){return new ci(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Uc(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,o);e._firestoreClient=new Dc(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=o.cache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}
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
class vd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vd(ni.fromBase64String(e))}catch(e){throw new lo(ao.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new vd(ni.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class pd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new lo(ao.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oo(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class hd{constructor(e){this._methodName=e}}
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
 */class md{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new lo(ao.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new lo(ao.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return wo(this._lat,e._lat)||wo(this._long,e._long)}}
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
 */const gd=/^__.*__$/;class yd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ll(e,this.data,this.fieldMask,t,this.fieldTransforms):new al(e,this.data,t,this.fieldTransforms)}}function bd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ro()}}class wd{constructor(e,t,n,r,o,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===o&&this.ua(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.fa(e),r}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.aa({path:n,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Fd(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(bd(this.ca)&&gd.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Cd{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||ds(e)}ya(e,t,n,r=!1){return new wd({ca:e,methodName:t,ga:n,path:Oo.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xd(e){const t=e._freezeSettings(),n=ds(e._databaseId);return new Cd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Sd(e,t,n,r,o,i={}){const a=e.ya(i.merge||i.mergeFields?2:0,t,n,o);Pd("Data must be an object, but it was:",a,r);const l=Od(r,a);let u,s;if(i.merge)u=new ei(a.fieldMask),s=a.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const o=Ad(t,r,n);if(!a.contains(o))throw new lo(ao.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Md(e,o)||e.push(o)}u=new ei(e),s=a.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,s=a.fieldTransforms;return new yd(new Oi(l),u,s)}class kd extends hd{_toFieldTransform(e){if(2!==e.ca)throw 1===e.ca?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kd}}class Zd extends hd{_toFieldTransform(e){return new qa(e.path,new Ba)}isEqual(e){return e instanceof Zd}}function Ed(e,t){if(Td(e=(0,l.m9)(e)))return Pd("Unsupported field value:",t,e),Od(e,t);if(e instanceof hd)return function(e,t){if(!bd(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const o of e){let e=Ed(o,t.wa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Da(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=xo.fromDate(e);return{timestampValue:Vl(t.serializer,n)}}if(e instanceof xo){const n=new xo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vl(t.serializer,n)}}if(e instanceof md)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof vd)return{bytesValue:zl(t.serializer,e._byteString)};if(e instanceof rd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$l(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Xc(e)}`)}(e,t)}function Od(e,t){const n={};return Yo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):$o(e,((e,r)=>{const o=Ed(r,t.ha(e));null!=o&&(n[e]=o)})),{mapValue:{fields:n}}}function Td(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof xo||e instanceof md||e instanceof vd||e instanceof rd||e instanceof hd)}function Pd(e,t,n){if(!Td(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Xc(n);throw"an object"===r?t._a(e+" a custom object"):t._a(e+" "+r)}}function Ad(e,t,n){if((t=(0,l.m9)(t))instanceof pd)return t._internalPath;if("string"==typeof t)return _d(e,t);throw Fd("Field path arguments must be of type string or ",e,!1,void 0,n)}const Id=new RegExp("[~\\*/\\[\\]]");function _d(e,t,n){if(t.search(Id)>=0)throw Fd(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pd(...t.split("."))._internalPath}catch(r){throw Fd(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fd(e,t,n,r,o){const i=r&&!r.isEmpty(),a=void 0!==o;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${o}`),u+=")"),new lo(ao.INVALID_ARGUMENT,l+e+u)}function Md(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Nd{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new rd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Dd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Rd("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Dd extends Nd{data(){return super.data()}}function Rd(e,t){return"string"==typeof t?_d(e,t):t instanceof pd?t._internalPath:t._delegate._internalPath}
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
 */function Wd(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new lo(ao.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jd{convertValue(e,t="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ii(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ro()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return $o(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new md(ii(e.latitude),ii(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ui(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const t=oi(e);return new xo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Zo.fromString(e);oo(gu(n));const r=new di(n.get(1),n.get(3)),o=new To(n.popFirst(5));return r.isEqual(t)||eo(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}
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
 */function Ld(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
class Bd{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hd extends Nd{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Rd("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Vd extends Hd{data(e={}){return super.data(e)}}class zd{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Bd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Vd(this._firestore,this._userDataWriter,n.key,n,new Bd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new lo(ao.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Vd(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Bd(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Vd(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Bd(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Kd(t.type),doc:r,oldIndex:o,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Kd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ro()}}
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
function Ud(e){e=Qc(e,rd);const t=Qc(e.firestore,sd);return zc(dd(t),e._key).then((n=>Xd(t,e,n)))}class $d extends jd{constructor(e){super(),this.firestore=e}convertBytes(e){return new vd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rd(this.firestore,null,t)}}function Yd(e){e=Qc(e,od);const t=Qc(e.firestore,sd),n=dd(t),r=new $d(t);return Wd(e._query),Kc(n,e._query).then((n=>new zd(t,r,e,n)))}function qd(e,t,n){e=Qc(e,rd);const r=Qc(e.firestore,sd),o=Ld(e.converter,t,n);return Jd(r,[Sd(xd(r),"setDoc",e._key,o,null!==e.converter,n).toMutation(e._key,Xa.none())])}function Gd(e){return Jd(Qc(e.firestore,sd),[new dl(e._key,Xa.none())])}function Jd(e,t){return function(e,t){const n=new uo;return e.asyncQueue.enqueueAndForget((async()=>hc(await Hc(e),t,n))),n.promise}(dd(e),t)}function Xd(e,t,n){const r=n.docs.get(t._key),o=new $d(e);return new Hd(e,o,t._key,r,new Bd(n.hasPendingWrites,n.fromCache),t.converter)}
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
function Qd(){return new kd("deleteField")}function ef(){return new Zd("serverTimestamp")}!function(e,t=!0){!function(e){Gr=e}(o.Jn),(0,o.Xd)(new i.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new sd(new vo(e.getProvider("auth-internal")),new go(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lo(ao.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(e.options.projectId,t)}(o,n),o);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(Yr,"3.13.0",e),(0,o.KN)(Yr,"3.13.0","esm2017")}()},1294:function(e,t,n){"use strict";n.d(t,{oq:function(){return at},Jt:function(){return it},cF:function(){return ut},iH:function(){return lt},KV:function(){return ot}});n(2801),n(7658);var r=n(7077),o=n(223),i=n(7142);
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
const a="firebasestorage.googleapis.com",l="storageBucket",u=12e4,s=6e5;
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
class c extends o.ZR{constructor(e,t,n=0){super(v(e),`Firebase Storage: ${t} (${v(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return v(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,f;function v(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new c(d.UNKNOWN,e)}function h(e){return new c(d.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function m(e){return new c(d.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new c(d.UNAUTHENTICATED,e)}function y(){return new c(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function b(e){return new c(d.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function w(){return new c(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function C(){return new c(d.CANCELED,"User canceled the upload/download.")}function x(e){return new c(d.INVALID_URL,"Invalid URL '"+e+"'.")}function S(e){return new c(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function k(){return new c(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+l+"' property when initializing the app?")}function Z(){return new c(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function E(){return new c(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e){return new c(d.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function T(e){return new c(d.INVALID_ARGUMENT,e)}function P(){return new c(d.APP_DELETED,"The Firebase app was deleted.")}function A(e){return new c(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function I(e,t){return new c(d.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function _(e){throw new c(d.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class F{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=F.makeFromUrl(e,t)}catch(r){return new F(e,"")}if(""===n.path)return n;throw S(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const i="(/(.*))?$",l=new RegExp("^gs://"+r+i,"i"),u={bucket:1,path:3};function s(e){e.path_=decodeURIComponent(e.path)}const c="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",v=new RegExp(`^https?://${d}/${c}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},h=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",g=new RegExp(`^https?://${h}/${r}/${m}`,"i"),y={bucket:1,path:2},b=[{regex:l,indices:u,postModify:o},{regex:v,indices:p,postModify:s},{regex:g,indices:y,postModify:s}];for(let a=0;a<b.length;a++){const t=b[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new F(e,o),t.postModify(n);break}}if(null==n)throw x(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function N(e,t,n){let r=1,o=null,i=null,a=!1,l=0;function u(){return 2===l}let s=!1;function c(...e){s||(s=!0,t.apply(null,e))}function d(t){o=setTimeout((()=>{o=null,e(v,u())}),t)}function f(){i&&clearTimeout(i)}function v(e,...t){if(s)return void f();if(e)return f(),void c.call(null,e,...t);const n=u()||a;if(n)return f(),void c.call(null,e,...t);let o;r<64&&(r*=2),1===l?(l=2,o=0):o=1e3*(r+Math.random()),d(o)}let p=!1;function h(e){p||(p=!0,f(),s||(null!==o?(e||(l=2),clearTimeout(o),d(0)):e||(l=1)))}return d(0),i=setTimeout((()=>{a=!0,h(!0)}),n),h}function D(e){e(!1)}
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
 */function R(e){return void 0!==e}function W(e){return"object"===typeof e&&!Array.isArray(e)}function j(e){return"string"===typeof e||e instanceof String}function L(e){return B()&&e instanceof Blob}function B(){return"undefined"!==typeof Blob&&!(0,o.UG)()}function H(e,t,n,r){if(r<t)throw T(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw T(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function V(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function z(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const o=t(r)+"="+t(e[r]);n=n+o+"&"}return n=n.slice(0,-1),n}
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
function K(e,t){const n=e>=500&&e<600,r=[408,429],o=-1!==r.indexOf(e),i=-1!==t.indexOf(e);return n||o||i}
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(f||(f={}));class U{constructor(e,t,n,r,o,i,a,l,u,s,c,d=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=s,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new $(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===f.NO_ERROR,o=n.getStatus();if(!t||K(o,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===f.ABORT;return void e(!1,new $(!1,null,t))}const i=-1!==this.successCodes_.indexOf(o);e(!0,new $(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());R(e)?n(e):n()}catch(i){r(i)}else if(null!==o){const e=p();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){const e=this.appDelete_?P():C();r(e)}else{const e=w();r(e)}};this.canceled_?t(!1,new $(!1,null,!0)):this.backoffId_=N(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class ${constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Y(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function G(e,t){t&&(e["X-Firebase-GMPID"]=t)}function J(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,o,i,a=!0){const l=z(e.urlParams),u=e.url+l,s=Object.assign({},e.headers);return G(s,t),Y(s,n),q(s,i),J(s,r),new U(u,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a)}
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
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(B())return new Blob(e);throw new c(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
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
 */function ne(e){if("undefined"===typeof atob)throw O("base-64");return atob(e)}
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
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oe{constructor(e,t){this.data=e,this.contentType=t||null}}function ie(e,t){switch(e){case re.RAW:return new oe(ae(t));case re.BASE64:case re.BASE64URL:return new oe(ue(e,t));case re.DATA_URL:return new oe(ce(t),de(t))}throw p()}function ae(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const o=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(o){const o=r,i=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&i,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function le(e){let t;try{t=decodeURIComponent(e)}catch(n){throw I(re.DATA_URL,"Malformed data URL.")}return ae(t)}function ue(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw I(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw I(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(o){if(o.message.includes("polyfill"))throw o;throw I(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class se{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw I(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=fe(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ce(e){const t=new se(e);return t.base64?ue(re.BASE64,t.rest):le(t.rest)}function de(e){const t=new se(e);return t.contentType}function fe(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
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
 */class ve{constructor(e,t){let n=0,r="";L(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(L(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new ve(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ve(n,!0)}}static getBlob(...e){if(B()){const t=e.map((e=>e instanceof ve?e.data_:e));return new ve(ee.apply(null,t))}{const t=e.map((e=>j(e)?ie(re.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[o++]=e[t]})),new ve(r,!0)}}uploadData(){return this.data_}}
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
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return W(t)?t:null}
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
 */function he(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function me(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function ye(e,t){return t}class be{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||ye}}let we=null;function Ce(e){return!j(e)||e.length<2?e:ge(e)}function xe(){if(we)return we;const e=[];function t(e,t){return Ce(t)}e.push(new be("bucket")),e.push(new be("generation")),e.push(new be("metageneration")),e.push(new be("name","fullPath",!0));const n=new be("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const o=new be("size");return o.xform=r,e.push(o),e.push(new be("timeCreated")),e.push(new be("updated")),e.push(new be("md5Hash",null,!0)),e.push(new be("cacheControl",null,!0)),e.push(new be("contentDisposition",null,!0)),e.push(new be("contentEncoding",null,!0)),e.push(new be("contentLanguage",null,!0)),e.push(new be("contentType",null,!0)),e.push(new be("metadata","customMetadata",!0)),we=e,we}function Se(e,t){function n(){const n=e["bucket"],r=e["fullPath"],o=new F(n,r);return t._makeStorageReference(o)}Object.defineProperty(e,"ref",{get:n})}function ke(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return Se(r,e),r}function Ze(e,t,n){const r=pe(t);if(null===r)return null;const o=r;return ke(e,o,n)}function Ee(e,t,n,r){const o=pe(t);if(null===o)return null;if(!j(o["downloadTokens"]))return null;const i=o["downloadTokens"];if(0===i.length)return null;const a=encodeURIComponent,l=i.split(","),u=l.map((t=>{const o=e["bucket"],i=e["fullPath"],l="/b/"+a(o)+"/o/"+a(i),u=V(l,n,r),s=z({alt:"media",token:t});return u+s}));return u[0]}function Oe(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */class Te{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Pe(e){if(!e)throw p()}function Ae(e,t){function n(n,r){const o=Ze(e,r,t);return Pe(null!==o),o}return n}function Ie(e,t){function n(n,r){const o=Ze(e,r,t);return Pe(null!==o),Ee(o,r,e.host,e._protocol)}return n}function _e(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?y():g():402===t.getStatus()?m(e.bucket):403===t.getStatus()?b(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function Fe(e){const t=_e(e);function n(n,r){let o=t(n,r);return 404===n.getStatus()&&(o=h(e.path)),o.serverResponse=r.serverResponse,o}return n}function Me(e,t,n){const r=t.fullServerUrl(),o=V(r,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new Te(o,i,Ie(e,n),a);return l.errorHandler=Fe(t),l}function Ne(e,t){const n=t.fullServerUrl(),r=V(n,e.host,e._protocol),o="DELETE",i=e.maxOperationRetryTime;function a(e,t){}const l=new Te(r,o,a,i);return l.successCodes=[200,204],l.errorHandler=Fe(t),l}function De(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Re(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=De(null,t)),r}function We(e,t,n,r,o){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const s=Re(t,r,o),c=Oe(s,n),d="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+u+"\r\nContent-Type: "+s["contentType"]+"\r\n\r\n",f="\r\n--"+u+"--",v=ve.getBlob(d,r,f);if(null===v)throw Z();const p={name:s["fullPath"]},h=V(i,e.host,e._protocol),m="POST",g=e.maxUploadRetryTime,y=new Te(h,m,Ae(e,n),g);return y.urlParams=p,y.headers=a,y.body=v.uploadData(),y.errorHandler=_e(t),y}
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
let je=null;class Le{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=f.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=f.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=f.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw _("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw _("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Be extends Le{initXhr(){this.xhr_.responseType="text"}}function He(){return je?je():new Be}
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
class Ve{constructor(e,t){this._service=e,this._location=t instanceof F?t:F.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ve(e,t)}get root(){const e=new F(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=he(this._location.path);if(null===e)return null;const t=new F(this._location.bucket,e);return new Ve(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw A(e)}}function ze(e,t,n){e._throwIfRoot("uploadBytes");const r=We(e.storage,e._location,xe(),new ve(t,!0),n);return e.storage.makeRequestWithTokens(r,He).then((t=>({metadata:t,ref:e})))}function Ke(e){e._throwIfRoot("getDownloadURL");const t=Me(e.storage,e._location,xe());return e.storage.makeRequestWithTokens(t,He).then((e=>{if(null===e)throw E();return e}))}function Ue(e){e._throwIfRoot("deleteObject");const t=Ne(e.storage,e._location);return e.storage.makeRequestWithTokens(t,He)}function $e(e,t){const n=me(e._location.path,t),r=new F(e._location.bucket,n);return new Ve(e.storage,r)}
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
 */function Ye(e){return/^[A-Za-z]+:\/\//.test(e)}function qe(e,t){return new Ve(e,t)}function Ge(e,t){if(e instanceof et){const n=e;if(null==n._bucket)throw k();const r=new Ve(n,n._bucket);return null!=t?Ge(r,t):r}return void 0!==t?$e(e,t):e}function Je(e,t){if(t&&Ye(t)){if(e instanceof et)return qe(e,t);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return Ge(e,t)}function Xe(e,t){const n=null===t||void 0===t?void 0:t[l];return null==n?null:F.makeFromBucketSpec(n,e)}function Qe(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,o.Sg)(i,e.app.options.projectId))}class et{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=s,this._requests=new Set,this._bucket=null!=r?F.makeFromBucketSpec(r,this._host):Xe(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=F.makeFromBucketSpec(this._url,e):this._bucket=Xe(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ve(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new M(P());{const i=X(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const tt="@firebase/storage",nt="0.11.2",rt="storage";function ot(e,t,n){return e=(0,o.m9)(e),ze(e,t,n)}function it(e){return e=(0,o.m9)(e),Ke(e)}function at(e){return e=(0,o.m9)(e),Ue(e)}function lt(e,t){return e=(0,o.m9)(e),Je(e,t)}function ut(e=(0,r.Mq)(),t){e=(0,o.m9)(e);const n=(0,r.qX)(e,rt),i=n.getImmediate({identifier:t}),a=(0,o.P0)("storage");return a&&st(i,...a),i}function st(e,t,n,r={}){Qe(e,t,n,r)}
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
 */function ct(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new et(n,o,i,t,r.Jn)}function dt(){(0,r.Xd)(new i.wA(rt,ct,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(tt,nt,""),(0,r.KN)(tt,nt,"esm2017")}dt()},2483:function(e,t,n){"use strict";n.d(t,{p7:function(){return nt},r5:function(){return L},tv:function(){return ot}});n(7658),n(541);var r=n(3396),o=n(4870);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function a(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const l=Object.assign;function u(e,t){const n={};for(const r in t){const o=t[r];n[r]=c(o)?o.map(e):e(o)}return n}const s=()=>{},c=Array.isArray;const d=/\/$/,f=e=>e.replace(d,"");function v(e,t,n="/"){let r,o={},i="",a="";const l=t.indexOf("#");let u=t.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=t.slice(0,u),i=t.slice(u+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function h(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&g(t.matched[r],n.matched[o])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function g(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b(e[n],t[n]))return!1;return!0}function b(e,t){return c(e)?w(e,t):c(t)?w(t,e):e===t}function w(e,t){return c(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let i,a,l=n.length-1;for(i=0;i<r.length;i++)if(a=r[i],"."!==a){if(".."!==a)break;l>1&&l--}return n.slice(0,l).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var x,S;(function(e){e["pop"]="pop",e["push"]="push"})(x||(x={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function k(e){if(!e)if(i){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),f(e)}const Z=/^[^#]+#/;function E(e,t){return e.replace(Z,"#")+t}function O(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function P(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=O(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function A(e,t){const n=history.state?history.state.position-t:-1;return n+e}const I=new Map;function _(e,t){I.set(e,t)}function F(e){const t=I.get(e);return I.delete(e),t}let M=()=>location.protocol+"//"+location.host;function N(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let t=o.includes(e.slice(i))?e.slice(i).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),h(n,"")}const a=h(n,e);return a+r+o}function D(e,t,n,r){let o=[],i=[],a=null;const u=({state:i})=>{const l=N(e,location),u=n.value,s=t.value;let c=0;if(i){if(n.value=l,t.value=i,a&&a===u)return void(a=null);c=s?i.position-s.position:0}else r(l);o.forEach((e=>{e(n.value,u,{delta:c,type:x.pop,direction:c?c>0?S.forward:S.back:S.unknown})}))};function s(){a=n.value}function c(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return i.push(t),t}function d(){const{history:e}=window;e.state&&e.replaceState(l({},e.state,{scroll:T()}),"")}function f(){for(const e of i)e();i=[],window.removeEventListener("popstate",u),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",u),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:s,listen:c,destroy:f}}function R(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?T():null}}function W(e){const{history:t,location:n}=window,r={value:N(e,n)},o={value:t.state};function i(r,i,a){const l=e.indexOf("#"),u=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+r:M()+e+r;try{t[a?"replaceState":"pushState"](i,"",u),o.value=i}catch(s){console.error(s),n[a?"replace":"assign"](u)}}function a(e,n){const a=l({},t.state,R(o.value.back,e,o.value.forward,!0),n,{position:o.value.position});i(e,a,!0),r.value=e}function u(e,n){const a=l({},o.value,t.state,{forward:e,scroll:T()});i(a.current,a,!0);const u=l({},R(r.value,e,null),{position:a.position+1},n);i(e,u,!1),r.value=e}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:u,replace:a}}function j(e){e=k(e);const t=W(e),n=D(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const o=l({location:"",base:e,go:r,createHref:E.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function L(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),j(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function H(e){return"string"===typeof e||"symbol"===typeof e}const V={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var K;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(K||(K={}));function U(e,t){return l(new Error,{type:e,[z]:!0},t)}function $(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const Y="[^/]+?",q={sensitive:!1,strict:!1,start:!0,end:!0},G=/[.+*?^${}()[\]/\\]/g;function J(e,t){const n=l({},q,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let a=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(G,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:u,regexp:s}=r;i.push({name:e,repeatable:n,optional:u});const c=s||Y;if(c!==Y){a+=10;try{new RegExp(`(${c})`)}catch(d){throw new Error(`Invalid custom RegExp for param "${e}" (${c}): `+d.message)}}let f=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;t||(f=u&&l.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),o+=f,a+=20,u&&(a+=-8),n&&(a+=-20),".*"===c&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function u(e){const t=e.match(a),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=i[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n}function s(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:a,optional:l}=e,u=i in t?t[i]:"";if(c(u)&&!a)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const s=c(u)?u.join("/"):u;if(!s){if(!l)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=s}}return n||"/"}return{re:a,score:r,keys:i,parse:u,stringify:s}}function X(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Q(e,t){let n=0;const r=e.score,o=t.score;while(n<r.length&&n<o.length){const e=X(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(ee(r))return 1;if(ee(o))return-1}return o.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${s}": ${e}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let l,u=0,s="",c="";function d(){s&&(0===n?i.push({type:0,value:s}):1===n||2===n||3===n?(i.length>1&&("*"===l||"+"===l)&&t(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:s,regexp:c,repeatable:"*"===l||"+"===l,optional:"*"===l||"?"===l})):t("Invalid state to consume buffer"),s="")}function f(){s+=l}while(u<e.length)if(l=e[u++],"\\"!==l||2===n)switch(n){case 0:"/"===l?(s&&d(),a()):":"===l?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===l?n=2:ne.test(l)?f():(d(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&u--);break;case 2:")"===l?"\\"==c[c.length-1]?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,"*"!==l&&"?"!==l&&"+"!==l&&u--,c="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${s}"`),d(),a(),o}function oe(e,t,n){const r=J(re(e.path),n);const o=l(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf===!t.record.aliasOf&&t.children.push(o),o}function ie(e,t){const n=[],r=new Map;function o(e){return r.get(e)}function i(e,n,r){const o=!r,u=le(e);u.aliasOf=r&&r.record;const d=de(t,e),f=[u];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)f.push(l({},u,{components:r?r.record.components:u.components,path:e,aliasOf:r?r.record:u}))}let v,p;for(const t of f){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(v=oe(t,n,d),r?r.alias.push(v):(p=p||v,p!==v&&p.alias.push(v),o&&e.name&&!se(v)&&a(e.name)),u.children){const e=u.children;for(let t=0;t<e.length;t++)i(e[t],v,r&&r.children[t])}r=r||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return p?()=>{a(p)}:s}function a(e){if(H(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function u(){return n}function c(e){let t=0;while(t<n.length&&Q(e,n[t])>=0&&(e.record.path!==n[t].record.path||!fe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!se(e)&&r.set(e.record.name,e)}function d(e,t){let o,i,a,u={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw U(1,{location:e});0,a=o.record.name,u=l(ae(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ae(e.params,o.keys.map((e=>e.name)))),i=o.stringify(u)}else if("path"in e)i=e.path,o=n.find((e=>e.re.test(i))),o&&(u=o.parse(i),a=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw U(1,{location:e,currentLocation:t});a=o.record.name,u=l({},t.params,e.params),i=o.stringify(u)}const s=[];let c=o;while(c)s.unshift(c.record),c=c.parent;return{name:a,path:i,params:u,matched:s,meta:ce(s)}}return t=de({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:d,removeRoute:a,getRoutes:u,getRecordMatcher:o}}function ae(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ue(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ue(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function se(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ce(e){return e.reduce(((e,t)=>l(e,t.meta)),{})}function de(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function fe(e,t){return t.children.some((t=>t===e||fe(e,t)))}const ve=/#/g,pe=/&/g,he=/\//g,me=/=/g,ge=/\?/g,ye=/\+/g,be=/%5B/g,we=/%5D/g,Ce=/%5E/g,xe=/%60/g,Se=/%7B/g,ke=/%7C/g,Ze=/%7D/g,Ee=/%20/g;function Oe(e){return encodeURI(""+e).replace(ke,"|").replace(be,"[").replace(we,"]")}function Te(e){return Oe(e).replace(Se,"{").replace(Ze,"}").replace(Ce,"^")}function Pe(e){return Oe(e).replace(ye,"%2B").replace(Ee,"+").replace(ve,"%23").replace(pe,"%26").replace(xe,"`").replace(Se,"{").replace(Ze,"}").replace(Ce,"^")}function Ae(e){return Pe(e).replace(me,"%3D")}function Ie(e){return Oe(e).replace(ve,"%23").replace(ge,"%3F")}function _e(e){return null==e?"":Ie(e).replace(he,"%2F")}function Fe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const e=r[o].replace(ye," "),n=e.indexOf("="),i=Fe(n<0?e:e.slice(0,n)),a=n<0?null:Fe(e.slice(n+1));if(i in t){let e=t[i];c(e)||(e=t[i]=[e]),e.push(a)}else t[i]=a}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const o=c(r)?r.map((e=>e&&Pe(e))):[r&&Pe(r)];o.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function De(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=c(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Re=Symbol(""),We=Symbol(""),je=Symbol(""),Le=Symbol(""),Be=Symbol("");function He(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ve(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((a,l)=>{const u=e=>{!1===e?l(U(4,{from:n,to:t})):e instanceof Error?l(e):B(e)?l(U(2,{from:t,to:e})):(i&&r.enterCallbacks[o]===i&&"function"===typeof e&&i.push(e),a())},s=e.call(r&&r.instances[o],t,n,u);let c=Promise.resolve(s);e.length<3&&(c=c.then(u)),c.catch((e=>l(e)))}))}function ze(e,t,n,r){const o=[];for(const i of e){0;for(const e in i.components){let l=i.components[e];if("beforeRouteEnter"===t||i.instances[e])if(Ke(l)){const a=l.__vccOpts||l,u=a[t];u&&o.push(Ve(u,n,r,i,e))}else{let u=l();0,o.push((()=>u.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const l=a(o)?o.default:o;i.components[e]=l;const u=l.__vccOpts||l,s=u[t];return s&&Ve(s,n,r,i,e)()}))))}}}return o}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ue(e){const t=(0,r.f3)(je),n=(0,r.f3)(Le),i=(0,r.Fl)((()=>t.resolve((0,o.SU)(e.to)))),a=(0,r.Fl)((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const a=o.findIndex(g.bind(null,r));if(a>-1)return a;const l=Je(e[t-2]);return t>1&&Je(r)===l&&o[o.length-1].path!==l?o.findIndex(g.bind(null,e[t-2])):a})),l=(0,r.Fl)((()=>a.value>-1&&Ge(n.params,i.value.params))),u=(0,r.Fl)((()=>a.value>-1&&a.value===n.matched.length-1&&y(n.params,i.value.params)));function c(n={}){return qe(n)?t[(0,o.SU)(e.replace)?"replace":"push"]((0,o.SU)(e.to)).catch(s):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:l,isExactActive:u,navigate:c}}const $e=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ue,setup(e,{slots:t}){const n=(0,o.qj)(Ue(e)),{options:i}=(0,r.f3)(je),a=(0,r.Fl)((()=>({[Xe(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},o)}}}),Ye=$e;function qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],o=e[n];if("string"===typeof r){if(r!==o)return!1}else if(!c(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=(0,r.f3)(Be),a=(0,r.Fl)((()=>e.route||i.value)),u=(0,r.f3)(We,0),s=(0,r.Fl)((()=>{let e=(0,o.SU)(u);const{matched:t}=a.value;let n;while((n=t[e])&&!n.components)e++;return e})),c=(0,r.Fl)((()=>a.value.matched[s.value]));(0,r.JJ)(We,(0,r.Fl)((()=>s.value+1))),(0,r.JJ)(Re,c),(0,r.JJ)(Be,a);const d=(0,o.iH)();return(0,r.YP)((()=>[d.value,c.value,e.name]),(([e,t,n],[r,o,i])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&g(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=a.value,i=e.name,u=c.value,s=u&&u.components[i];if(!s)return et(n.default,{Component:s,route:o});const f=u.props[i],v=f?!0===f?o.params:"function"===typeof f?f(o):f:null,p=e=>{e.component.isUnmounted&&(u.instances[i]=null)},h=(0,r.h)(s,l({},v,t,{onVnodeUnmounted:p,ref:d}));return et(n.default,{Component:h,route:o})||h}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Qe;function nt(e){const t=ie(e.routes,e),n=e.parseQuery||Me,a=e.stringifyQuery||Ne,d=e.history;const f=He(),h=He(),g=He(),y=(0,o.XI)(V);let b=V;i&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=u.bind(null,(e=>""+e)),C=u.bind(null,_e),S=u.bind(null,Fe);function k(e,n){let r,o;return H(e)?(r=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,r)}function Z(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function O(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=l({},r||y.value),"string"===typeof e){const o=v(n,e,r.path),i=t.resolve({path:o.path},r),a=d.createHref(o.fullPath);return l(o,i,{params:S(i.params),hash:Fe(o.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=l({},e,{path:v(n,e.path,r.path).path});else{const t=l({},e.params);for(const e in t)null==t[e]&&delete t[e];o=l({},e,{params:C(t)}),r.params=C(r.params)}const i=t.resolve(o,r),u=e.hash||"";i.params=w(S(i.params));const s=p(a,l({},e,{hash:Te(u),path:i.path})),c=d.createHref(s);return l({fullPath:s,hash:u,query:a===Ne?De(e.query):e.query||{}},i,{redirectedFrom:void 0,href:c})}function M(e){return"string"===typeof e?v(n,e,y.value.path):l({},e)}function N(e,t){if(b!==e)return U(8,{from:t,to:e})}function D(e){return j(e)}function R(e){return D(l(M(e),{replace:!0}))}function W(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=M(r):{path:r},r.params={}),l({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function j(e,t){const n=b=I(e),r=y.value,o=e.state,i=e.force,u=!0===e.replace,s=W(n);if(s)return j(l(M(s),{state:"object"===typeof s?l({},o,s.state):o,force:i,replace:u}),t||n);const c=n;let d;return c.redirectedFrom=t,!i&&m(a,r,n)&&(d=U(16,{to:c,from:r}),re(r,r,!0,!1)),(d?Promise.resolve(d):z(c,r)).catch((e=>$(e)?$(e,2)?e:ne(e):ee(e,c,r))).then((e=>{if(e){if($(e,2))return j(l({replace:u},M(e.to),{state:"object"===typeof e.to?l({},o,e.to.state):o,force:i}),t||c)}else e=Y(c,r,!0,u,o);return K(c,r,e),e}))}function L(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e){const t=le.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function z(e,t){let n;const[r,o,i]=rt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const l of r)l.leaveGuards.forEach((r=>{n.push(Ve(r,e,t))}));const a=L.bind(null,e,t);return n.push(a),se(n).then((()=>{n=[];for(const r of f.list())n.push(Ve(r,e,t));return n.push(a),se(n)})).then((()=>{n=ze(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Ve(r,e,t))}));return n.push(a),se(n)})).then((()=>{n=[];for(const r of i)if(r.beforeEnter)if(c(r.beforeEnter))for(const o of r.beforeEnter)n.push(Ve(o,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(a),se(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(i,"beforeRouteEnter",e,t),n.push(a),se(n)))).then((()=>{n=[];for(const r of h.list())n.push(Ve(r,e,t));return n.push(a),se(n)})).catch((e=>$(e,8)?e:Promise.reject(e)))}function K(e,t,n){g.list().forEach((r=>B((()=>r(e,t,n)))))}function Y(e,t,n,r,o){const a=N(e,t);if(a)return a;const u=t===V,s=i?history.state:{};n&&(r||u?d.replace(e.fullPath,l({scroll:u&&s&&s.scroll},o)):d.push(e.fullPath,o)),y.value=e,re(e,t,n,u),ne()}let q;function G(){q||(q=d.listen(((e,t,n)=>{if(!ue.listening)return;const r=I(e),o=W(r);if(o)return void j(l(o,{replace:!0}),r).catch(s);b=r;const a=y.value;i&&_(A(a.fullPath,n.delta),T()),z(r,a).catch((e=>$(e,12)?e:$(e,2)?(j(e.to,r).then((e=>{$(e,20)&&!n.delta&&n.type===x.pop&&d.go(-1,!1)})).catch(s),Promise.reject()):(n.delta&&d.go(-n.delta,!1),ee(e,r,a)))).then((e=>{e=e||Y(r,a,!1),e&&(n.delta&&!$(e,8)?d.go(-n.delta,!1):n.type===x.pop&&$(e,20)&&d.go(-1,!1)),K(r,a,e)})).catch(s)})))}let J,X=He(),Q=He();function ee(e,t,n){ne(e);const r=Q.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function te(){return J&&y.value!==V?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function ne(e){return J||(J=!e,G(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}function re(t,n,o,a){const{scrollBehavior:l}=e;if(!i||!l)return Promise.resolve();const u=!o&&F(A(t.fullPath,0))||(a||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>l(t,n,u))).then((e=>e&&P(e))).catch((e=>ee(e,t,n)))}const oe=e=>d.go(e);let ae;const le=new Set,ue={currentRoute:y,listening:!0,addRoute:k,removeRoute:Z,hasRoute:O,getRoutes:E,resolve:I,options:e,push:D,replace:R,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:f.add,beforeResolve:h.add,afterEach:g.add,onError:Q.add,isReady:te,install(e){const t=this;e.component("RouterLink",Ye),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),i&&!ae&&y.value===V&&(ae=!0,D(d.location).catch((e=>{0})));const n={};for(const o in V)Object.defineProperty(n,o,{get:()=>y.value[o],enumerable:!0});e.provide(je,t),e.provide(Le,(0,o.Um)(n)),e.provide(Be,y);const r=e.unmount;le.add(e),e.unmount=function(){le.delete(e),le.size<1&&(b=V,q&&q(),q=null,y.value=V,ae=!1,J=!1),r()}}};function se(e){return e.reduce(((e,t)=>e.then((()=>B(t)))),Promise.resolve())}return ue}function rt(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const i=t.matched[a];i&&(e.matched.find((e=>g(e,i)))?r.push(i):n.push(i));const l=e.matched[a];l&&(t.matched.find((e=>g(e,l)))||o.push(l))}return[n,r,o]}function ot(){return(0,r.f3)(je)}}}]);
//# sourceMappingURL=chunk-vendors.465f93ea.js.map