(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(123);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(124);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},124:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},152:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(28);t.a=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/dashboard",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/product",className:"nav-link"},"Product")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/products",className:"nav-link"},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/category",className:"nav-link"},"Category")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/sub",className:"nav-link"},"Sub Category")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/coupon",className:"nav-link"},"Coupon")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/user/password",className:"nav-link"},"Password"))))}},311:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.order,a=e.showStatus,n=void 0===a||a;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",null,"Order Id: ",t.paymentIntent.id)," / ",r.a.createElement("span",null,"Amount:"," / ",(t.paymentIntent.amount/=100).toLocaleString("en-US",{style:"currency",currency:"USD"}))," / ",r.a.createElement("span",null,"Currency: ",t.paymentIntent.currency.toUpperCase())," / ",r.a.createElement("span",null,"Method: ",t.paymentIntent.payment_method_types[0])," / ",r.a.createElement("span",null,"Payment: ",t.paymentIntent.status.toUpperCase())," / ",r.a.createElement("span",null,"Orderd on:"," / ",new Date(1e3*t.paymentIntent.created).toLocaleString())," / ",r.a.createElement("br",null),n&&r.a.createElement("span",{className:"badge bg-primary text-white"},"STATUS: ",t.orderStatus)))}},475:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},c=a(38),l=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};l.displayName="CheckCircleOutlined";t.a=n.forwardRef(l)},476:function(e,t,a){"use strict";var n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},c=a(38),l=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};l.displayName="CloseCircleOutlined";t.a=n.forwardRef(l)},893:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(119),c=a(0),l=a.n(c),o=a(152),s=a(9),u=a.n(s),i=a(17),m=a(24),d=a.n(m),p=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/admin/orders",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(t,a,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("/admin/order-status",{orderId:t,orderStatus:a},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),E=a(22),v=a(39),h=a(475),b=a(476),y=a(311),g=function(e){var t=e.orders,a=e.handleStatusChange;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement("div",{key:e._id,className:"row pb-5"},l.a.createElement("div",{className:"btn btn-block bg-light"},l.a.createElement(y.a,{order:e,showStatus:!1}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},"Delivery Status"),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("select",{onChange:function(t){return a(e._id,t.target.value)},className:"form-control",defaultValue:e.orderStatus,name:"status"},l.a.createElement("option",{value:"Not Processed"},"Not Processed"),l.a.createElement("option",{value:"Cash On Delivery"},"Cash On Delivery"),l.a.createElement("option",{value:"Processing"},"Processing"),l.a.createElement("option",{value:"Dispatched"},"Dispatched"),l.a.createElement("option",{value:"Cancelled"},"Cancelled"),l.a.createElement("option",{value:"Completed"},"Completed"))))),function(e){return l.a.createElement("table",{className:"table table-bordered"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Title"),l.a.createElement("th",{scope:"col"},"Price"),l.a.createElement("th",{scope:"col"},"Brand"),l.a.createElement("th",{scope:"col"},"Color"),l.a.createElement("th",{scope:"col"},"Count"),l.a.createElement("th",{scope:"col"},"Shipping"))),l.a.createElement("tbody",null,e.products.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("b",null,e.product.title)),l.a.createElement("td",null,e.product.price),l.a.createElement("td",null,e.product.brand),l.a.createElement("td",null,e.color),l.a.createElement("td",null,e.count),l.a.createElement("td",null,"Yes"===e.product.shipping?l.a.createElement(h.a,{style:{color:"green"}}):l.a.createElement(b.a,{style:{color:"red"}})))}))))}(e))})))};t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],u=Object(E.c)((function(e){return Object(n.a)({},e)})).user;Object(c.useEffect)((function(){i()}),[]);var i=function(){return p(u.token).then((function(e){console.log(JSON.stringify(e.data,null,4)),s(e.data)}))};return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"col-md-10"},l.a.createElement("h4",null,"Admin Dashboard"),l.a.createElement(g,{orders:a,handleStatusChange:function(e,t){f(e,t,u.token).then((function(e){v.b.success("Status updated"),i()}))}}))))}}}]);
//# sourceMappingURL=25.20fe3d98.chunk.js.map