(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{119:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(123);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,c=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(i){c=!0,o=i}finally{try{r||null==a.return||a.return()}finally{if(c)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(124);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},124:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},340:function(t,e,n){"use strict";var r=n(119),c=n(0),o=n.n(c),u=n(2);e.a=function(){var t=Object(c.useState)(5),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(u.f)();return Object(c.useEffect)((function(){var t=setInterval((function(){a((function(t){return--t}))}),1e3);return 0===n&&i.push("/"),function(){return clearInterval(t)}}),[n,i]),o.a.createElement("div",{className:"container p-5 text-center"},o.a.createElement("p",null,"Redirecting you in ",n," seconds"))}},364:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return r}))},875:function(t,e,n){"use strict";n.r(e);var r=n(119),c=n(29),o=n(364),u=n(0),a=n.n(u),i=n(2),l=n(22),f=n(340),s=n(43);e.default=function(t){t.children;var e=Object(o.a)(t,["children"]),n=Object(l.c)((function(t){return Object(c.a)({},t)})).user,b=Object(u.useState)(!1),y=Object(r.a)(b,2),O=y[0],p=y[1];return Object(u.useEffect)((function(){n&&n.token&&Object(s.b)(n.token).then((function(t){console.log("CURRENT ADMIN RES",t),p(!0)})).catch((function(t){console.log("ADMIN ROUTE ERR",t),p(!1)}))}),[n]),O?a.a.createElement(i.a,e):a.a.createElement(f.a,null)}}}]);
//# sourceMappingURL=30.466e7079.chunk.js.map