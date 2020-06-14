/*! For license information please see 45a5cd1f.056847a9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return p}));var r=n(2),o=n(9),i=(n(0),n(190)),c=n(209),a={title:"Concepts",description:"Concepts",sidebar_label:"hidden",hide_pagination:!0},u={id:"concepts",title:"Concepts",description:"Concepts",source:"@site/docs/concepts.md",permalink:"/docs/concepts",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/concepts.md",sidebar_label:"hidden"},s=[],f={rightToc:s};function p(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provide basic foundation of Pinot."),Object(i.b)(c.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"What is Pinot?"),Object(i.b)(c.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(i.b)(c.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}p.isMDXComponent=!0},190:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),f=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=f(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=f(n),b=r,y=p["".concat(c,".").concat(b)]||p[b]||l[b]||i;return n?o.a.createElement(y,a(a({ref:e},s),{},{components:n})):o.a.createElement(y,a({ref:e},s))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},191:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},192:function(t,e){e.f=Object.getOwnPropertySymbols},193:function(t,e,n){var r=n(76),o=n(53).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},194:function(t,e,n){e.f=n(3)},195:function(t,e,n){"use strict";n(198),n(197),n(204);var r=n(0),o=n.n(r),i=n(39),c=n(196),a=n(27),u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n=t.isNavLink,s=u(t,["isNavLink"]),f=s.to,p=s.href,l=f||p,b=Object(c.a)(l),y=Object(r.useRef)(!1),m=n?i.c:i.b,h=a.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!h&&b&&window.docusaurus.prefetch(l),function(){h&&e&&e.disconnect()}}),[l,h,b]),l&&b&&!l.startsWith("#")?o.a.createElement(m,Object.assign({},s,{onMouseEnter:function(){y.current||(window.docusaurus.preload(l),y.current=!0)},innerRef:function(t){var n,r;h&&t&&b&&(n=t,r=function(){window.docusaurus.prefetch(l)},(e=new window.IntersectionObserver((function(t){t.forEach((function(t){n===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(e.unobserve(n),e.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object.assign({},s,{href:l}))}},196:function(t,e,n){"use strict";function r(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}n.d(e,"a",(function(){return r}))},197:function(t,e,n){"use strict";var r=n(17),o=n(38),i=n(199),c="".startsWith;r(r.P+r.F*n(200)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return c?c.call(e,r,n):e.slice(n,n+r.length)===r}})},198:function(t,e,n){var r=n(17);r(r.S+r.F,"Object",{assign:n(203)})},199:function(t,e,n){var r=n(72),o=n(28);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},200:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},201:function(t,e,n){var r=n(70),o=n(52),i=n(25),c=n(71),a=n(24),u=n(74),s=Object.getOwnPropertyDescriptor;e.f=n(11)?s:function(t,e){if(t=i(t),e=c(e,!0),u)try{return s(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},202:function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return"Array"==r(t)}},203:function(t,e,n){"use strict";var r=n(11),o=n(26),i=n(192),c=n(70),a=n(51),u=n(73),s=Object.assign;t.exports=!s||n(18)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){for(var n=a(t),s=arguments.length,f=1,p=i.f,l=c.f;s>f;)for(var b,y=u(arguments[f++]),m=p?o(y).concat(p(y)):o(y),h=m.length,v=0;h>v;)b=m[v++],r&&!l.call(y,b)||(n[b]=y[b]);return n}:s},204:function(t,e,n){"use strict";var r=n(6),o=n(24),i=n(11),c=n(17),a=n(13),u=n(205).KEY,s=n(18),f=n(40),p=n(41),l=n(37),b=n(3),y=n(194),m=n(206),h=n(207),v=n(202),d=n(8),g=n(12),O=n(51),j=n(25),w=n(71),E=n(52),S=n(75),P=n(208),x=n(201),N=n(192),T=n(23),k=n(26),F=x.f,C=T.f,D=P.f,_=r.Symbol,W=r.JSON,J=W&&W.stringify,I=b("_hidden"),M=b("toPrimitive"),A={}.propertyIsEnumerable,R=f("symbol-registry"),K=f("symbols"),L=f("op-symbols"),X=Object.prototype,z="function"==typeof _&&!!N.f,U=r.QObject,Y=!U||!U.prototype||!U.prototype.findChild,q=i&&s((function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=F(X,e);r&&delete X[e],C(t,e,n),r&&t!==X&&C(X,e,r)}:C,G=function(t){var e=K[t]=S(_.prototype);return e._k=t,e},Q=z&&"symbol"==typeof _.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof _},B=function(t,e,n){return t===X&&B(L,e,n),d(t),e=w(e,!0),d(n),o(K,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=S(n,{enumerable:E(0,!1)})):(o(t,I)||C(t,I,E(1,{})),t[I][e]=!0),q(t,e,n)):C(t,e,n)},H=function(t,e){d(t);for(var n,r=h(e=j(e)),o=0,i=r.length;i>o;)B(t,n=r[o++],e[n]);return t},V=function(t){var e=A.call(this,t=w(t,!0));return!(this===X&&o(K,t)&&!o(L,t))&&(!(e||!o(this,t)||!o(K,t)||o(this,I)&&this[I][t])||e)},Z=function(t,e){if(t=j(t),e=w(e,!0),t!==X||!o(K,e)||o(L,e)){var n=F(t,e);return!n||!o(K,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=D(j(t)),r=[],i=0;n.length>i;)o(K,e=n[i++])||e==I||e==u||r.push(e);return r},tt=function(t){for(var e,n=t===X,r=D(n?L:j(t)),i=[],c=0;r.length>c;)!o(K,e=r[c++])||n&&!o(X,e)||i.push(K[e]);return i};z||(a((_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),e=function(n){this===X&&e.call(L,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),q(this,t,E(1,n))};return i&&Y&&q(X,t,{configurable:!0,set:e}),G(t)}).prototype,"toString",(function(){return this._k})),x.f=Z,T.f=B,n(193).f=P.f=$,n(70).f=V,N.f=tt,i&&!n(36)&&a(X,"propertyIsEnumerable",V,!0),y.f=function(t){return G(b(t))}),c(c.G+c.W+c.F*!z,{Symbol:_});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var rt=k(b.store),ot=0;rt.length>ot;)m(rt[ot++]);c(c.S+c.F*!z,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=_(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),c(c.S+c.F*!z,"Object",{create:function(t,e){return void 0===e?S(t):H(S(t),e)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=s((function(){N.f(1)}));c(c.S+c.F*it,"Object",{getOwnPropertySymbols:function(t){return N.f(O(t))}}),W&&c(c.S+c.F*(!z||s((function(){var t=_();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Q(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,J.apply(W,r)}}),_.prototype[M]||n(10)(_.prototype,M,_.prototype.valueOf),p(_,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},205:function(t,e,n){var r=n(37)("meta"),o=n(12),i=n(24),c=n(23).f,a=0,u=Object.isExtensible||function(){return!0},s=!n(18)((function(){return u(Object.preventExtensions({}))})),f=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},p=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&p.NEED&&u(t)&&!i(t,r)&&f(t),t}}},206:function(t,e,n){var r=n(6),o=n(14),i=n(36),c=n(194),a=n(23).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)})}},207:function(t,e,n){var r=n(26),o=n(192),i=n(70);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var c,a=n(t),u=i.f,s=0;a.length>s;)u.call(t,c=a[s++])&&e.push(c);return e}},208:function(t,e,n){var r=n(25),o=n(193).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return c.slice()}}(t):o(r(t))}},209:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(195),c=n(191),a=n.n(c);n(127);e.a=function(t){var e=t.children,n=t.className,r=t.badge,c=t.icon,u=t.size,s=t.target,f=t.to,p=a()("jump-to","jump-to--"+u,n),l=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:f,target:s,className:p},l):o.a.createElement(i.a,{to:f,className:p},l)}}}]);