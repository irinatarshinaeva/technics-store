(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[34],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(123);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(o){r=!0,c=o}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},123:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(124);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},124:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},234:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(28);t.a=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/user/history",className:"nav-link"},"History")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/user/password",className:"nav-link"},"Password")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/user/wishlist",className:"nav-link"},"Wishlist"))))}},876:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(17),s=a(119),l=a(0),o=a.n(l),i=a(234),u=a(42),m=a(39);t.default=function(){var e=Object(l.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],f=Object(l.useState)(!1),d=Object(s.a)(f,2),b=d[0],v=d[1],p=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.next=4,u.a.currentUser.updatePassword(a).then((function(){v(!1),n(""),m.b.success("Password updated")})).catch((function(e){v(!1),m.b.error(e.message)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement(i.a,null)),o.a.createElement("div",{className:"col"},b?o.a.createElement("h4",{className:"text-danger"},"Loading.."):o.a.createElement("h4",null,"Password Update"),o.a.createElement("form",{onSubmit:p},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Your Password"),o.a.createElement("input",{type:"password",onChange:function(e){return n(e.target.value)},className:"form-control",placeholder:"Enter new password",disabled:b,value:a}),o.a.createElement("button",{className:"btn btn-primary",disabled:!a||a.length<6||b},"Submit"))))))}}}]);
//# sourceMappingURL=34.a9a97e9c.chunk.js.map