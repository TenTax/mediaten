(function(){"use strict";var t={5294:function(t,e,n){n.d(e,{A:function(){return s}});var a=function(){var t=this,e=t._self._c;return e(t.tag,t._g(t._b({tag:"component",staticClass:"app-link",class:{"app-link_thin":t.thin,"app-link_hoverable":t.hoverable}},"component",t.$attrs,!1),t.$listeners),[t._t("default"),t.$slots.append?e("div",{staticClass:"app-link__append"},[t._t("append")],2):t._e()],2)},r=[],o={name:"AppLink",props:{tag:{type:String,default:"router-link",validator(t){return["router-link","a"].includes(t)}},thin:Boolean,hoverable:Boolean}},i=o,l=n(1656),u=(0,l.A)(i,a,r,!1,null,null,null),s=u.exports},6504:function(t,e,n){var a=n(6848),r=n(6178);a.Ay.use(r.Ay);const o=[{path:"/",name:"main",component:()=>n.e(969).then(n.bind(n,3969))},{path:"/products",name:"products",component:()=>n.e(883).then(n.bind(n,1883))},{path:"/suppliers",name:"suppliers",component:()=>n.e(354).then(n.bind(n,1354))},{path:"/catalog/:subsection",name:"subsection",component:()=>n.e(482).then(n.bind(n,4482))},{path:"/:pathMatch(.*)*",name:"error",component:()=>n.e(917).then(n.bind(n,8917))}],i=new r.Ay({mode:"history",base:"/mediaten/",routes:o});var l=i,u=n(3518),s=n(8355);const c=s.A.create();c.defaults.baseURL="/mediaten";var f=c,p={async getSubsectionData(t){const e=await f.get("db.json");return e.data?.[t]??{}}},d={namespaced:!0,state:{loading:!1,data:null,cache:{}},getters:{loading(t){return t.loading},title(t){return t.data?.title},sections(t){return t.data?.sections},totalProducts(t){return t.data?.total_products},totalSuppliers(t){return t.data?.total_suppliers}},actions:{async fetchData({commit:t,state:e},n){if(!e.cache[n])try{t("setLoading",!0);const e=await p.getSubsectionData(n);t("saveDataToCache",{key:n,data:e})}finally{t("setLoading",!1)}t("setData",e.cache[n])}},mutations:{setData(t,e){t.data=e},setLoading(t,e){t.loading=e},saveDataToCache(t,{key:e,data:n}){t.cache[e]=n}}};a.Ay.use(u.Ay);var h=new u.Ay.Store({modules:{subsectionPage:d}}),m=function(){var t=this,e=t._self._c;return e("app-layout",{attrs:{id:"app"}},[e("router-view")],1)},v=[],b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-layout"},[e("app-container",{staticClass:"app-layout__container"},[t._t("default")],2),e("the-footer")],1)},_=[],g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container"},[t._t("default")],2)},y=[],k={name:"AppContainer"},C=k,A=n(1656),w=(0,A.A)(C,g,y,!1,null,null,null),O=w.exports,S=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"the-footer"},[e("app-container",{staticClass:"the-footer__container"},[t._l(t.menu,(function({title:n,links:a}){return e("nav",{key:n,staticClass:"the-footer__menu"},[e("div",{staticClass:"the-footer__menu-title"},[t._v(" "+t._s(n)+" ")]),e("ul",{staticClass:"the-footer__menu-list"},t._l(a,(function({label:n,link:a}){return e("li",{key:n,staticClass:"the-footer__menu-item"},[e("app-link",{staticClass:"the-footer__menu-link",attrs:{thin:"",hoverable:"",to:a}},[t._v(" "+t._s(n)+" ")])],1)})),0)])})),e("div",{staticClass:"the-footer__menu"},[e("ul",{staticClass:"the-footer__menu-list"},[e("li",{staticClass:"the-footer__menu-item the-footer__menu-item_sparse"},[t._v(" © ООО «КОМПАНИЯ», 2022"),e("br"),t._v("Юр. адрес: Москва, Пушкина б-р, 1, оф. 123 ")])])])],2)],1)},L=[],T=n(5294),j={name:"TheFooter",components:{AppContainer:O,AppLink:T.A},data(){return{menu:[{title:"Полезные ссылки",links:[{label:"Маркетплейс",link:"/"},{label:"Поставщикам",link:"/"},{label:"Заказчикам",link:"/"},{label:"Контакты",link:"/"}]},{title:"Пользователям",links:[{label:"Техническая поддержка",link:"/"},{label:"Обучающие материалы",link:"/"},{label:"Условия и тарифы",link:"/"},{label:"Акции",link:"/"}]},{title:"Юридическая информация",links:[{label:"Агентский договор",link:"/"},{label:"Соглашения об АСП",link:"/"},{label:"Политика обработки данных",link:"/"},{label:"Политика конфиденциальности",link:"/"}]}]}}},x=j,E=(0,A.A)(x,S,L,!1,null,null,null),D=E.exports,N={name:"AppLayout",components:{AppContainer:O,TheFooter:D}},P=N,B=(0,A.A)(P,b,_,!1,null,null,null),F=B.exports,M={name:"App",components:{AppLayout:F}},$=M,q=(0,A.A)($,m,v,!1,null,null,null),U=q.exports;a.Ay.config.productionTip=!1,new a.Ay({router:l,store:h,render:t=>t(U)}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var l=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(l=!1,o<i&&(i=o));if(l){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{354:"643afca8",482:"647d5b51",883:"f4208243",917:"0de85a80",969:"926dc132"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{354:"22229e8d",482:"2cf29501",883:"22229e8d",917:"22229e8d",969:"22229e8d"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mediaten:";n.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var l,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==a||f.getAttribute("data-webpack")==e+o){l=f;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+o),l.src=a),t[a]=[r];var p=function(e,n){l.onerror=l.onload=null,clearTimeout(d);var r=t[a];if(delete t[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/mediaten/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var l=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&n.type,l=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+l+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=l,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=l,i.href=e,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),l=n.p+i;if(e(i,l))return r();t(a,l,null,r,o)}))},r={524:0};n.f.miniCss=function(t,e){var n={354:1,482:1,883:1,917:1,969:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(e),l=new Error,u=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,r[1](l)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],l=a[1],u=a[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(e&&e(a);s<i.length;s++)o=i[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunkmediaten"]=self["webpackChunkmediaten"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(6504)}));a=n.O(a)})();
//# sourceMappingURL=app.fb7d7bdd.js.map