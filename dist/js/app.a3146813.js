(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9ee94e55"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2828:function(t,e,n){t.exports=n.p+"img/star-wars-logo.3cf5bb02.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("NavBar",{attrs:{heading:t.heading}}),n("v-content",{staticClass:"mx-5 my-10",attrs:{dark:""}},[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-title",{staticClass:"middle text-uppercase primary--text"},[t._v(" "+t._s(t.heading)+" ")]),a("router-link",{attrs:{to:"/"}},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("cf05"),transition:"scale-transition",width:"80"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/kartikhtog/star-wars-api",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Source")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-navigation-drawer",{staticClass:"accent",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.routes,(function(e){return a("v-list-item",{key:e.title,attrs:{disabled:!e.enabled,link:"",router:"",to:e.route}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"icons_color"}},[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"secondary--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},s=[],l={data:function(){return{drawer:!1,routes:[{title:"Home",icon:"mdi-view-dashboard",route:"/",enabled:!0},{title:"People",icon:"mdi-view-dashboard",route:"/planets",enabled:!0},{title:"Planets",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Films",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Species",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Vehicles",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Starships",icon:"mdi-view-dashboard",route:"/films",enabled:!0}]}},props:{heading:{type:String,default:"Star Wars"}},computed:function(){}},c=l,u=n("2877"),p=n("6544"),d=n.n(p),f=n("40dc"),m=n("5bc1"),v=n("8336"),h=n("132d"),b=n("adda"),_=n("8860"),g=n("da13"),w=n("5d23"),y=n("34c3"),x=n("f774"),V=n("2fa4"),C=n("2a7f"),j=Object(u["a"])(c,i,s,!1,null,null,null),O=j.exports;d()(j,{VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:v["a"],VIcon:h["a"],VImg:b["a"],VList:_["a"],VListItem:g["a"],VListItemContent:w["a"],VListItemIcon:y["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:V["a"],VToolbarTitle:C["a"]});var k={name:"App",components:{NavBar:O},data:function(){return{}}},E=k,S=(n("5c0b"),n("7496")),P=n("a75b"),$=Object(u["a"])(E,r,o,!1,null,null,null),T=$.exports;d()($,{VApp:S["a"],VContent:P["a"]});var A=n("f309");a["a"].use(A["a"]);var I=new A["a"]({}),L=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},H=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("2828"),contain:"",height:"200"}})],1),a("v-col",{staticClass:"mb-4"},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Star Wars Api ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v(" Use the Nav bar on left to search through pages. "),a("br"),t._v("Using the following rest api to data: "),a("a",{attrs:{href:"https://swapi.dev/",target:"_blank"}},[t._v("Api")])])])],1)],1)},N=[],M={name:"HelloWorld",data:function(){return{}}},F=M,J=n("62ad"),U=n("a523"),q=n("0fd9"),D=Object(u["a"])(F,B,N,!1,null,null,null),R=D.exports;d()(D,{VCol:J["a"],VContainer:U["a"],VImg:b["a"],VRow:q["a"]});var Y={name:"Home",components:{HelloWorld:R}},z=Y,G=Object(u["a"])(z,W,H,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],Z={},tt=Object(u["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],rt={},ot=Object(u["a"])(rt,nt,at,!1,null,null,null),it=ot.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],ct={},ut=Object(u["a"])(ct,st,lt,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],mt={},vt=Object(u["a"])(mt,dt,ft,!1,null,null,null),ht=vt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],gt={},wt=Object(u["a"])(gt,bt,_t,!1,null,null,null),yt=wt.exports;a["a"].use(L["a"]);var xt=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/People",name:"People",component:et},{path:"/Films",name:"Films",component:it},{path:"/Species",name:"Species",component:pt},{path:"/Vehicles",name:"Vehicles",component:ht},{path:"/People",name:"People",component:et},{path:"/Starships",name:"Starships",component:yt}],Vt=new L["a"]({mode:"history",base:"/",routes:xt}),Ct=Vt;a["a"].config.productionTip=!1,new a["a"]({vuetify:I,router:Ct,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.0e885114.png"}});
//# sourceMappingURL=app.a3146813.js.map