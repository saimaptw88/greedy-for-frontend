(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{174:function(t,e,n){"use strict";n(84),n(145),n(41);var r=n(257),o=n(140);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=["user"];e.a=function(t){var e=t.store,n=t.isDev;Object(r.a)({key:"greedy-for-frontend",storage:{getItem:function(t){return o.get(t)},setItem:function(t,e){return o.set(t,function(t){var e,n=JSON.parse(t),r=Object.keys(n),o=c(d);try{for(o.s();!(e=o.n()).done;){var l=e.value,f=r.indexOf(l);r.splice(f,1)}}catch(t){o.e(t)}finally{o.f()}for(var v=0,m=r;v<m.length;v++){delete n[m[v]]}return JSON.stringify(n)}(e),{expires:30,secure:!n},{samesite:"lax"})},removeItem:function(t){return o.remove(t)}}})(e)}},175:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(39),n(41),n(50);function r(t){var e=t.store;e.$axios.interceptors.request.use((function(t){var n;return null!=(n=e.getters["user/headers"])?(Object.keys(n).forEach((function(e){var r=n[e];t.headers[e]=r})),t):t}))}},219:function(t,e,n){var content=n(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6570a8f6",content,!0,{sourceMap:!1})},259:function(t,e,n){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-domain",title:"home",to:"/"},{icon:"mdi-domain",title:"informations",to:"/informations"},{icon:"mdi-domain",title:"about",to:"/about"}],logedinItems:[{icon:"mdi-domain",title:"home",to:"/"},{icon:"mdi-domain",title:"my page",to:"/mypage"},{icon:"mdi-domain",title:"goals",to:"/wants"},{icon:"mdi-domain",title:"daily message",to:"/daily/message"},{icon:"mdi-domain",title:"informations",to:"/informations"},{icon:"mdi-domain",title:"about",to:"/about"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Amaimon"}},computed:{logedin:function(){return this.$store.state.user.login},headers:function(){return this.$store.state.user.headers}},methods:{login:function(){window.location.href="/users/login"},logout:function(){var t=this.$store.getters["user/headers"],e=this.$store.getters["user/login"];console.log(t),console.log(e),""===t&&e?this.$store.state.user.login=!1:this.$store.dispatch("user/logout")}}},o=n(74),c=n(111),l=n.n(c),d=n(399),f=n(404),v=n(400),m=n(260),h=n(405),w=n(167),x=n(168),y=n(103),k=n(169),_=n(73),W=n(401),O=n(403),$=n(402),j=n(253),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t.logedin?n("div",[n("v-list",t._l(t.logedinItems,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1):n("div",[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)]),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"userBtn"},[t.logedin?n("div",[n("v-btn",{attrs:{depressed:""},on:{click:t.logout}},[t._v("logout")])],1):n("div",[n("v-btn",{attrs:{depressed:""},on:{click:t.login}},[t._v("login")])],1)])],1),t._v(" "),n("v-main",{staticClass:"bk"},[n("v-container",[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:f.a,VAppBarNavIcon:v.a,VBtn:m.a,VContainer:h.a,VIcon:w.a,VList:x.a,VListItem:y.a,VListItemAction:k.a,VListItemContent:_.a,VListItemTitle:_.b,VMain:W.a,VNavigationDrawer:O.a,VSpacer:$.a,VToolbarTitle:j.a})},274:function(t,e,n){n(275),n(276),t.exports=n(277)},289:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.redirect;if(t.store.state.user.login)return e("/mypage")}},290:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.redirect;if(!t.store.state.user.login)return e("/users/login")}},291:function(t,e,n){"use strict";n.r(e);n(34);e.default=function(t){var e=t.redirect,n=t.store.state.wants.stoWants,r=0;if(console.log(n),n.map((function(t){1===t.category_id&&(r+=1)})),console.log(r),0===n.length||0===r)return e("/wants")}},306:function(t,e,n){"use strict";n(219)},307:function(t,e,n){(e=n(11)(!1)).push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=e},366:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));n(40);var r=n(5),o=function(){return{headers:{},login:!1}},c={headers:function(t){return t.headers},login:function(t){return t.login}},l={login:function(t,data){t.headers=data,t.login=!0},logout:function(t){t.login=!1,t.headers=""}},d={signup:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.post("/auth",e);case 4:c=r.sent,l=c.headers,d={"access-token":l["access-token"],client:l.client,expiry:l.expiry,uid:l.uid,"token-type":l["token-type"]},o("login",d),window.location.href="/",r.next=17;break;case 11:r.prev=11,r.t0=r.catch(1),f=r.t0.response,console.log("sign up actions error:"),console.log(f),alert("sign up actions error");case 17:case"end":return r.stop()}}),r,null,[[1,11]])})))()},login:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.post("/auth/sign_in",e);case 4:c=r.sent,l=c.headers,d={"access-token":l["access-token"],client:l.client,expiry:l.expiry,uid:l.uid,"token-type":l["token-type"]},console.log("loginInfoHeaders:"),console.log(d),o("login",d),window.location.href="/",r.next=19;break;case 13:r.prev=13,r.t0=r.catch(1),f=r.t0.response,console.log("login actions error:"),console.log(f),alert("login actions error");case 19:case"end":return r.stop()}}),r,null,[[1,13]])})))()},logout:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,r("logout"),window.location.href="/",n.next=6,e.$axios.delete("/auth/sign_out");case 6:r("logout"),window.location.href="/",n.next=16;break;case 10:n.prev=10,n.t0=n.catch(1),o=n.t0.response,console.log("logout actions error:"),console.log(o),alert("error logout actions");case 16:case"end":return n.stop()}}),n,null,[[1,10]])})))()},reset:function(t){(0,t.commit)("logout")}}},367:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));n(34),n(30),n(40);var r=n(5),o=function(){return{stoWants:[],stoWant:[]}},c={wants:function(t){return t.stoWants}},l={setWants:function(t,data){t.stoWants=data},setUpdatedWant:function(t,data){t.stoWants.map((function(t){t.id===data.id&&(t=data)}))},wantAdd:function(t,data){t.stoWants.push(data)},setWant:function(t,data){t.stoWant=data}},d={getWants:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,e.$axios.get("/api/v1/want");case 4:o=n.sent,r("setWants",o.data),n.next=14;break;case 8:n.prev=8,n.t0=n.catch(1),alert("getWants actions error"),c=n.t0.response,console.log("getWants actions error:"),console.log(c);case 14:case"end":return n.stop()}}),n,null,[[1,8]])})))()},wantUpdate:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.patch("/api/v1/want/".concat(e.id),e);case 4:c=r.sent,o("setUpdatedWant",c.data),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),l=r.t0.response,console.log(l);case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()},wantCreate:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,f,v,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,c=e.name,l=e.categoryId,d=e.priority,r.prev=2,f={want:{name:"".concat(c),category_id:"".concat(l),priority:"".concat(d)}},r.next=6,n.$axios.post("/api/v1/want",f);case 6:v=r.sent,console.log(v.data),o("wantAdd",v.data),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(2),m=r.t0.response,console.log(m);case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()},wantDelete:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.delete("/api/v1/want/".concat(e));case 4:c=r.sent,o("setWants",c.data),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),l=r.t0.response,console.log("delete error:"),console.log(l);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},wantsUpdate:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.patch("/api/v1/updates",e);case 4:c=r.sent,o("setWants",c.data),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),l=r.t0.response,console.log("error updates actions :"),console.log(l);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()},getWant:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,r.prev=1,r.next=4,n.$axios.get("/api/v1/want/".concat(e.id));case 4:c=r.sent,o("setWant",c.data),r.next=13;break;case 8:r.prev=8,r.t0=r.catch(1),l=r.t0.response,console.log("Actions error : getWamt"),console.log(l);case 13:case"end":return r.stop()}}),r,null,[[1,8]])})))()}}},66:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(306),n(74)),c=n(111),l=n.n(c),d=n(399),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[274,12,2,13]]]);