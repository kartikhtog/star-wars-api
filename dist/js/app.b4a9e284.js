(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9ee94e55"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/star-wars-api/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2828:function(t,e,a){t.exports=a.p+"img/star-wars-logo.3cf5bb02.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("NavBar",{attrs:{heading:t.heading}}),a("v-content",{staticClass:"mx-5 my-10",attrs:{dark:""}},[a("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-spacer"),n("v-toolbar-title",{staticClass:"middle text-uppercase primary--text"},[t._v(" "+t._s(t.heading)+" ")]),n("router-link",{attrs:{to:"/"}},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"80"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/kartikhtog/star-wars-api",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[t._v("Source")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1),n("v-navigation-drawer",{staticClass:"accent",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.routes,(function(e){return n("v-list-item",{key:e.title,attrs:{disabled:!e.enabled,link:"",router:"",to:e.route}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"icons_color"}},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"secondary--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},s=[],l={data:function(){return{drawer:!1,routes:[{title:"Home",icon:"mdi-view-dashboard",route:"/",enabled:!0},{title:"People",icon:"mdi-view-dashboard",route:"/planets",enabled:!0},{title:"Planets",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Films",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Species",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Vehicles",icon:"mdi-view-dashboard",route:"/films",enabled:!0},{title:"Starships",icon:"mdi-view-dashboard",route:"/films",enabled:!0}]}},props:{heading:{type:String,default:"Star Wars"}},computed:function(){}},c=l,u=a("2877"),p=a("6544"),d=a.n(p),f=a("40dc"),m=a("5bc1"),v=a("8336"),h=a("132d"),b=a("adda"),_=a("8860"),g=a("da13"),w=a("5d23"),y=a("34c3"),x=a("f774"),V=a("2fa4"),C=a("2a7f"),j=Object(u["a"])(c,i,s,!1,null,null,null),O=j.exports;d()(j,{VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:v["a"],VIcon:h["a"],VImg:b["a"],VList:_["a"],VListItem:g["a"],VListItemContent:w["a"],VListItemIcon:y["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:V["a"],VToolbarTitle:C["a"]});var k={name:"App",components:{NavBar:O},data:function(){return{}}},E=k,S=(a("5c0b"),a("7496")),P=a("a75b"),$=Object(u["a"])(E,r,o,!1,null,null,null),T=$.exports;d()($,{VApp:S["a"],VContent:P["a"]});var A=a("f309");n["a"].use(A["a"]);var I=new A["a"]({}),L=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},H=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("2828"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Star Wars Api ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" Use the Nav bar on left to search through pages. "),n("br"),t._v("Using the following rest api to data: "),n("a",{attrs:{href:"https://swapi.dev/",target:"_blank"}},[t._v("Api")])])])],1)],1)},N=[],M={name:"HelloWorld",data:function(){return{}}},F=M,J=a("62ad"),U=a("a523"),q=a("0fd9"),D=Object(u["a"])(F,B,N,!1,null,null,null),R=D.exports;d()(D,{VCol:J["a"],VContainer:U["a"],VImg:b["a"],VRow:q["a"]});var Y={name:"Home",components:{HelloWorld:R}},z=Y,G=Object(u["a"])(z,W,H,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],Z={},tt=Object(u["a"])(Z,Q,X,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],rt={},ot=Object(u["a"])(rt,at,nt,!1,null,null,null),it=ot.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],ct={},ut=Object(u["a"])(ct,st,lt,!1,null,null,null),pt=ut.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],mt={},vt=Object(u["a"])(mt,dt,ft,!1,null,null,null),ht=vt.exports,bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],gt={},wt=Object(u["a"])(gt,bt,_t,!1,null,null,null),yt=wt.exports;n["a"].use(L["a"]);var xt=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/People",name:"People",component:et},{path:"/Films",name:"Films",component:it},{path:"/Species",name:"Species",component:pt},{path:"/Vehicles",name:"Vehicles",component:ht},{path:"/People",name:"People",component:et},{path:"/Starships",name:"Starships",component:yt}],Vt=new L["a"]({mode:"history",base:"/star-wars-api/",routes:xt}),Ct=Vt;n["a"].config.productionTip=!1,new n["a"]({vuetify:I,router:Ct,render:function(t){return t(T)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.0e885114.png"}});
//# sourceMappingURL=app.b4a9e284.js.map