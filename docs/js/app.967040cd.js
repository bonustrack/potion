(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],p=0,m=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0025":function(t,e,n){},"0613":function(t,e,n){"use strict";var a=n("2b0e"),o=n("2f62"),s=n("f33f");a["a"].use(o["a"]);var i=new o["a"].Store({modules:s["default"],strict:!1});e["a"]=i},"216c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"bg-topnav"},[a("div",{staticClass:"container-lg p-responsive d-flex"},[a("div",{staticClass:"flex-auto text-left"},[a("router-link",{attrs:{to:{name:"home"}}},[a("h1",{staticClass:"py-4"},[a("img",{attrs:{src:n("9b19")}}),t._v(" Potion ")])])],1),a("div",{staticClass:"py-4"},[t.address?a("a",{staticClass:"button button-info"},[a("span",{staticClass:"login-bullet mr-2 ml-n2"}),t._v(" "+t._s(t.name||t.shorten(t.address))+" ")]):a("a",{staticClass:"button button-primary",on:{click:function(e){t.modalLoginOpen=!0}}},[t._v(" Connect wallet ")])])]),t._m(0)]),a("div",{staticClass:"mb-4 mt-n4"},[a("div",{staticClass:"mainnav"},[a("router-link",{staticClass:"button button-secondary",attrs:{to:{name:"home"}}},[t._v(" Get potion ")]),a("router-link",{staticClass:"button button-secondary",attrs:{to:{name:"potions"}}},[t._v(" My potions ")])],1)]),a("ModalLogin",{attrs:{open:t.modalLoginOpen},on:{close:function(e){t.modalLoginOpen=!1}}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-4 pb-10"},[n("h1",{staticClass:"mx-auto container-md p-responsive"},[t._v(" Welcome crypto-magician, protect your fund with hedge potions. ")])])}],s=(n("b0c0"),n("2f62"));n("99af"),n("fb6a");function i(t){return t.length<10?t:"".concat(t.slice(0,6),"...").concat(t.slice(t.length-4))}var r={data:function(){return{modalLoginOpen:!1}},computed:Object(s["c"])({name:function(t){return t.settings.name},address:function(t){return t.settings.address}}),methods:{shorten:i}},c=r,l=n("2877"),u=Object(l["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports},"30db":function(t,e,n){"use strict";var a=n("0025"),o=n.n(a);o.a},"3a7f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{open:t.open},on:{close:function(e){return t.$emit("close")}}},[a("div",{staticClass:"modal-body"},[a("img",{staticClass:"mb-2",attrs:{src:n("8556")}}),a("h2",{staticClass:"mb-5"},[t._v("Select wallet")]),a("button",{staticClass:"d-flex text-left mb-7 button button-select",class:{active:"metamask"===t.service},on:{click:function(e){t.service="metamask"}}},[a("span",{staticClass:"flex-auto"},[t._v("MetaMask")]),a("img",{staticClass:"mt-2",attrs:{src:n("d6c5"),height:"30"}})]),a("div",{staticClass:"d-flex mb-2"},[a("button",{staticClass:"button button-outline col-6 mr-2",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),a("button",{staticClass:"button button-primary col-6 ml-2",attrs:{disabled:!t.service},on:{click:t.handleLogin}},[t._v(" Confirm ")])])])])},o=[],s=n("5530"),i=n("2f62"),r={props:["open"],data:function(){return{service:""}},methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["login"])),{},{handleLogin:function(){var t=this;this.login().then((function(){return t.$emit("close")}))}})},c=r,l=n("2877"),u=Object(l["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports},"3f9b":function(t,e,n){var a={"./index.ts":"f33f","./settings.ts":"7383"};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="3f9b"},"4daf":function(t,e,n){var a={"./Modal.vue":"714b","./Modal/Login.vue":"3a7f","./Modal/MakePotion.vue":"de74","./Modal/Revitalize.vue":"bcf2","./Nav.vue":"216c"};function o(t){var e=s(t);return n(e)}function s(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="4daf"},"62fa":function(t,e,n){t.exports=n.p+"img/revitalize.db720f4a.svg"},"714b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.open?a("div",{staticClass:"modal"},[a("div",{staticClass:"backdrop",on:{click:function(e){return t.$emit("close")}}}),a("div",{staticClass:"shell overflow-hidden anim-scale-in position-relative"},[a("a",{staticClass:"position-absolute right-3 top-3 p-2",on:{click:function(e){return t.$emit("close")}}},[a("img",{attrs:{src:n("bf37")}})]),t._t("default")],2)]):t._e()},o=[],s={props:["open"]},i=s,r=(n("30db"),n("2877")),c=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=c.exports},7383:function(t,e,n){"use strict";n.r(e);n("4160"),n("b64b"),n("d3b7"),n("159b"),n("96cf");var a,o=n("1da1"),s=n("2b0e"),i=n("e7ea"),r=n("0613");if("undefined"!==typeof window.ethereum){var c=window["ethereum"];a=new i["ethers"].providers.Web3Provider(c)}var l=a,u=window["ethereum"];u.on("accountsChanged",(function(){return r["a"].dispatch("init")})),u.on("networkChanged",(function(t){r["a"].commit("set",{network:i["ethers"].utils.getNetwork(parseInt(t))})}));var p={loading:!1,address:null,name:"",balance:0,network:{},exchangeRates:{}},m={set:function(t,e){Object.keys(e).forEach((function(n){s["a"].set(t,n,e[n])}))}},d={init:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,a=e.dispatch,n("set",{loading:!0}),a("getExchangeRates").then((function(){return n("set",{loading:!1})}));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,a,o,s,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!l){t.next=24;break}return t.prev=2,t.next=5,u.enable();case 5:return a=l.getSigner(),t.next=8,a.getAddress();case 8:return o=t.sent,t.next=11,l.lookupAddress(o);case 11:return s=t.sent,t.next=14,l.getBalance(o);case 14:return r=t.sent,t.next=17,l.getNetwork();case 17:c=t.sent,n("set",{address:o,name:s,balance:i["ethers"].utils.formatEther(r),network:c,loading:!1}),t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](2),console.error(t.t0);case 24:case"end":return t.stop()}}),t,null,[[2,21]])})));function e(e){return t.apply(this,arguments)}return e}(),loading:function(t,e){var n=t.commit;n("set",{loading:e})},getExchangeRates:function(t){var e=t.commit,n="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";fetch(n).then((function(t){return t.json()})).then((function(t){e("set",{exchangeRates:t})}))}};e["default"]={state:p,mutations:m,actions:d}},8556:function(t,e,n){t.exports=n.p+"img/top.5edfa97a.svg"},"944d":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.ab80e5c9.svg"},a8a5:function(t,e,n){t.exports=n.p+"img/recipe.35ee868c.svg"},bcf2:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{open:t.open},on:{close:function(e){return t.$emit("close")}}},[a("div",{staticClass:"modal-body"},[a("img",{staticClass:"mb-2",attrs:{src:n("62fa")}}),a("h2",{staticClass:"mb-4"},[t._v("Your revitalization")]),a("div",{staticClass:"text-left"},[a("div",{staticClass:"border-bottom mb-5"},[a("div",{staticClass:"mb-4"},[t._v("Strike price"),a("span",{staticClass:"float-right"},[t._v("$123")])]),a("div",{staticClass:"mb-4"},[t._v("Expiry date"),a("span",{staticClass:"float-right"},[t._v("August 2020")])]),a("div",{staticClass:"mb-5"},[t._v("Asset"),a("span",{staticClass:"float-right"},[t._v("BTC")])])]),a("p",{staticClass:"mb-4"},[t._v("Please introduce the current price for your asset.")]),a("div",{staticClass:"mb-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"input",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}})])]),a("h2",{staticClass:"mb-4"},[t._v("Want to use?")]),a("div",{staticClass:"d-flex mb-2"},[a("button",{staticClass:"button button-outline col-6 mr-2",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),a("button",{staticClass:"button button-primary col-6 ml-2",attrs:{disabled:!t.form.price}},[t._v("Confirm")])])])])},o=[],s={props:["open"],data:function(){return{form:{price:""}}}},i=s,r=n("2877"),c=Object(r["a"])(i,a,o,!1,null,null,null);e["default"]=c.exports},bf37:function(t,e,n){t.exports=n.p+"img/close.32d4eaa1.svg"},cd49:function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=n("39f8"),s=n("2ef0"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden pb-6",attrs:{id:"app"}},[n("Nav"),t.settings.loading?n("VueLoadingIndicator",{staticClass:"big"}):n("router-view",{key:t.$route.path})],1)},r=[],c=n("5530"),l=n("2f62"),u={computed:Object(c["a"])({},Object(l["c"])(["settings"])),methods:Object(c["a"])({},Object(l["b"])(["init"])),created:function(){this.init()}},p=u,m=n("2877"),d=Object(m["a"])(p,i,r,!1,null,null,null),f=d.exports,v=n("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("img",{staticClass:"mb-2",attrs:{src:n("9b19")}}),a("h2",{staticClass:"mb-4"},[t._v("Protective potion")]),a("p",{staticClass:"mb-6"},[t._v("Select your ingredients and make recipe.")]),a("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[a("div",{staticClass:"mb-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.asset,expression:"form.asset"}],staticClass:"input mb-4",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"asset",e.target.multiple?n:n[0])}}},[a("option",{attrs:{value:""}},[t._v("Asset")]),a("option",{attrs:{value:"BTC"}},[t._v("BTC")]),a("option",{attrs:{value:"GOLD"}},[t._v("Gold")]),a("option",{attrs:{value:"TESLA"}},[t._v("Tesla")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.quantity,expression:"form.quantity"}],staticClass:"input mb-4",attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.form.quantity},on:{input:function(e){e.target.composing||t.$set(t.form,"quantity",e.target.value)}}}),a("div",{staticClass:"d-flex"},[a("div",{staticClass:"col-6 mr-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.strike,expression:"form.strike"}],staticClass:"input mb-4",attrs:{type:"number",placeholder:"Strike price"},domProps:{value:t.form.strike},on:{input:function(e){e.target.composing||t.$set(t.form,"strike",e.target.value)}}})]),a("div",{staticClass:"col-6 ml-2"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.expiry,expression:"form.expiry"}],staticClass:"input mb-4",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"expiry",e.target.multiple?n:n[0])}}},[a("option",{attrs:{value:""}},[t._v("Expiry date")]),a("option",{attrs:{value:"7"}},[t._v("7 days")]),a("option",{attrs:{value:"14"}},[t._v("14 days")]),a("option",{attrs:{value:"30"}},[t._v("30 days")])])])])]),t.settings.address?a("button",{staticClass:"button button-primary mb-2",attrs:{disabled:!t.isValid,type:"submit"}},[t._v(" Make potion ")]):a("a",{staticClass:"button button-primary mb-2",on:{click:function(e){t.modalLoginOpen=!0}}},[t._v("Connect wallet")])]),a("ModalLogin",{attrs:{open:t.modalLoginOpen},on:{close:function(e){t.modalLoginOpen=!1}}}),a("ModalMakePotion",{attrs:{open:t.modalMakePotionOpen,form:t.form},on:{close:function(e){t.modalMakePotionOpen=!1}}})],1)},g=[],h=(n("2315"),{data:function(){return{form:{asset:"",quantity:"",strike:"",expiry:""},modalLoginOpen:!1,modalMakePotionOpen:!1}},computed:Object(c["a"])(Object(c["a"])({},Object(l["c"])(["settings"])),{},{isValid:function(){return this.form.asset&&this.form.quantity&&this.form.strike&&this.form.expiry}}),methods:{handleSubmit:function(){this.modalMakePotionOpen=!0}}}),C=h,_=Object(m["a"])(C,b,g,!1,null,null,null),y=_.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("img",{staticClass:"mb-2",attrs:{src:n("9b19")}}),a("h2",{staticClass:"mb-4"},[t._v("Manage your potions")]),a("p",{staticClass:"mb-6"},[t._v("Drink a potion to revitalize your funds or withdraw your ingredients.")]),a("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.modalRevitalizeOpen=!0}}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.potion,expression:"form.potion"}],staticClass:"input mb-6",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"potion",e.target.multiple?n:n[0])}}},[a("option",{attrs:{value:""}},[t._v("Your potions")]),a("option",{attrs:{value:"1"}},[t._v("Position on ETH strike 200 September 2020")]),a("option",{attrs:{value:"2"}},[t._v("Position on gold strike 1600 August 2020")]),a("option",{attrs:{value:"3"}},[t._v("Position on BTC strike 9400 July 2020")])]),a("button",{staticClass:"button button-primary mb-2",attrs:{disabled:!t.form.potion}},[t._v(" Revitalize me! ")])]),a("ModalLogin",{attrs:{open:t.modalLoginOpen},on:{close:function(e){t.modalLoginOpen=!1}}}),a("ModalRevitalize",{attrs:{open:t.modalRevitalizeOpen,form:t.form},on:{close:function(e){t.modalRevitalizeOpen=!1}}})],1)},O=[],k={data:function(){return{form:{potion:""},modalLoginOpen:!1,modalRevitalizeOpen:!1}}},w=k,j=Object(m["a"])(w,x,O,!1,null,null,null),P=j.exports;a["a"].use(v["a"]);var $=[{path:"/",name:"home",component:y},{path:"/potions",name:"potions",component:P}],M=new v["a"]({routes:$}),E=M,L=n("0613");n("944d");a["a"].use(o["a"]);var S=n("4daf");S.keys().forEach((function(t){var e=S(t),n=Object(s["upperFirst"])(Object(s["camelCase"])(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));a["a"].component(n,e.default||e)})),a["a"].config.productionTip=!1,new a["a"]({router:E,store:L["a"],render:function(t){return t(f)}}).$mount("#app")},d6c5:function(t,e,n){t.exports=n.p+"img/metamask.d5c8515e.svg"},de74:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{open:t.open},on:{close:function(e){return t.$emit("close")}}},[a("div",{staticClass:"modal-body"},[a("img",{staticClass:"mb-2",attrs:{src:n("a8a5")}}),a("h2",{staticClass:"mb-4"},[t._v("Your recipe")]),a("div",{staticClass:"text-left"},[a("div",{staticClass:"border-bottom mb-5"},[a("div",{staticClass:"mb-4"},[t._v(" Strike price"),a("span",{staticClass:"float-right"},[t._v("$"+t._s(t.form.strike))])]),a("div",{staticClass:"mb-4"},[t._v("Expiry date"),a("span",{staticClass:"float-right",domProps:{textContent:t._s(t.form.expiry)}})]),a("div",{staticClass:"mb-4"},[t._v("Asset"),a("span",{staticClass:"float-right",domProps:{textContent:t._s(t.form.asset)}})]),a("div",{staticClass:"mb-4"},[t._v(" Auto price "),a("span",{staticClass:"float-right"},[a("VueSwitch",{model:{value:t.autoPrice,callback:function(e){t.autoPrice=e},expression:"autoPrice"}})],1)]),a("div",{staticClass:"mb-5 overflow-hidden"},[a("div",{staticClass:"col-4 float-right"},[a("input",{staticClass:"input",attrs:{type:"number",placeholder:"Price"},domProps:{value:t.settings.exchangeRates.bitcoin.usd}})])])]),a("div",{staticClass:"mb-4"},[t._v("Quantity"),a("span",{staticClass:"float-right",domProps:{textContent:t._s(t.form.quantity)}})]),a("div",{staticClass:"mb-4"},[t._v("Price per potion"),a("span",{staticClass:"float-right"},[t._v("5 DAI")])]),a("div",{staticClass:"mb-5 text-bold text-primary"},[t._v(" Total price"),a("span",{staticClass:"float-right"},[t._v(t._s(5*t.form.quantity)+" DAI")])])]),a("h2",{staticClass:"mb-4"},[t._v("Want to purchase?")]),a("div",{staticClass:"d-flex mb-2"},[a("button",{staticClass:"button button-outline col-6 mr-2",on:{click:function(e){return t.$emit("close")}}},[t._v("Cancel")]),a("button",{staticClass:"button button-primary col-6 ml-2",on:{click:t.handleLogin}},[t._v("Confirm")])])])])},o=[],s=n("5530"),i=n("2f62"),r={props:["open","form"],data:function(){return{autoPrice:!0}},computed:Object(s["a"])({},Object(i["c"])(["settings"])),methods:Object(s["a"])(Object(s["a"])({},Object(i["b"])(["login"])),{},{handleLogin:function(){var t=this;this.login().then((function(){return t.$emit("close")}))}})},c=r,l=n("2877"),u=Object(l["a"])(c,a,o,!1,null,null,null);e["default"]=u.exports},f33f:function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0");var a=n("2ef0"),o=n("3f9b"),s={};o.keys().forEach((function(t){if("./index.ts"!==t){var e=Object(a["camelCase"])(t.replace(/(\.\/|\.ts)/g,""));s[e]=o(t).default}})),e["default"]=s}});
//# sourceMappingURL=app.967040cd.js.map