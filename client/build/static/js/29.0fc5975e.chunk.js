(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[29],{119:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(123);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,a=!1,u=void 0;try{for(var c,s=t[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(o){a=!0,u=o}finally{try{r||null==s.return||s.return()}finally{if(a)throw u}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},123:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(124);function a(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},124:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},183:function(t,e,n){"use strict";n.d(e,"k",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return h})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return m})),n.d(e,"i",(function(){return v})),n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return w}));var r=n(9),a=n.n(r),u=n(17),c=n(24),s=n.n(c),o=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/cart",{cart:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/user/cart",{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("/user/cart",{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/address",{address:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/cart/coupon",{coupon:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/order",{stripeResponse:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/user/orders",{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/user/wishlist",{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("/user/wishlist/".concat(e),{},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/wishlist",{productId:e},{headers:{authtoken:n}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("/user/cash-order",{couponApplied:r,COD:n},{headers:{authtoken:e}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},234:function(t,e,n){"use strict";var r=n(0),a=n.n(r),u=n(28);e.a=function(){return a.a.createElement("nav",null,a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/history",className:"nav-link"},"History")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/password",className:"nav-link"},"Password")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/wishlist",className:"nav-link"},"Wishlist"))))}},288:function(t,e,n){"use strict";var r=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=n(38),c=function(t,e){return r.createElement(u.a,Object.assign({},t,{ref:e,icon:a}))};c.displayName="DeleteOutlined";e.a=r.forwardRef(c)},877:function(t,e,n){"use strict";n.r(e);var r=n(29),a=n(119),u=n(0),c=n.n(u),s=n(234),o=n(183),i=n(22),f=n(28),l=n(288);e.default=function(){var t=Object(u.useState)([]),e=Object(a.a)(t,2),n=e[0],p=e[1],h=Object(i.c)((function(t){return Object(r.a)({},t)})).user;Object(u.useEffect)((function(){d()}),[]);var d=function(){return Object(o.h)(h.token).then((function(t){p(t.data.wishlist)}))};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(s.a,null)),c.a.createElement("div",{className:"col"},c.a.createElement("h4",null,"Wishlist"),n.map((function(t){return c.a.createElement("div",{key:t._id,className:"alert alert-secondary"},c.a.createElement(f.b,{to:"/product/".concat(t.slug)},t.title),c.a.createElement("span",{onClick:function(){return e=t._id,Object(o.i)(e,h.token).then((function(t){d()}));var e},className:"btn btn-sm float-right"},c.a.createElement(l.a,{className:"text-danger"})))})))))}}}]);
//# sourceMappingURL=29.0fc5975e.chunk.js.map