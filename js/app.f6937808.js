(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6d35":"92220e65","chunk-2d2086b7":"8f18854d","chunk-2d21a3d2":"0c38103c","chunk-7dc8fd00":"9809e2fb"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-7dc8fd00":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0d6d35":"31d6cfe0","chunk-2d2086b7":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-7dc8fd00":"b1cc4f11"}[e]+".css",o=s.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/deploy-vue/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2796:function(e,t,n){},3406:function(e,t,n){},3672:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function o(e,t,n,o,c,u){var s=Object(r["w"])("NavBar"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(s),Object(r["g"])(i)])}var c=Object(r["G"])("data-v-d468287c");Object(r["s"])("data-v-d468287c");var u={class:"navbar navbar-expand-lg navbar-bytebank"},s=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"ByteBank",-1),i=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"};Object(r["q"])();var d=c((function(e,t,n,a,o,c){var d=Object(r["w"])("NavBarLoggedIn"),f=Object(r["w"])("NavBarLogout");return Object(r["p"])(),Object(r["d"])("nav",u,[s,i,Object(r["g"])("div",l,[e.userIsLogged?Object(r["g"])(d,{key:0}):Object(r["g"])(f,{key:1})])])})),f=n("5530"),b=Object(r["G"])("data-v-88562c68");Object(r["s"])("data-v-88562c68");var p={class:"navbar-nav mr-auto"},g={class:"nav-item"},h=Object(r["f"])(" Home "),v={class:"nav-item"},m=Object(r["f"])(" Gerentes ");Object(r["q"])();var O=b((function(e,t,n,a,o,c){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("ul",p,[Object(r["g"])("li",g,[Object(r["g"])(u,{class:"nav-link",to:"/"},{default:b((function(){return[h]})),_:1})]),Object(r["g"])("li",v,[Object(r["g"])(u,{to:"/gerentes",class:"nav-link"},{default:b((function(){return[m]})),_:1})]),Object(r["g"])("a",{href:"#",class:"nav-link",onClick:t[1]||(t[1]=Object(r["F"])((function(){return e.logout.apply(e,arguments)}),["prevent"]))}," Logout ")])})),j=n("9c9e"),k={mixins:[j["c"]]};n("8a4e");k.render=O,k.__scopeId="data-v-88562c68";var y=k,E=Object(r["G"])("data-v-d75f447c");Object(r["s"])("data-v-d75f447c");var _={class:"navbar-nav mr-auto"},w={class:"nav-item"},S=Object(r["f"])(" Login "),L={class:"nav-item"},T=Object(r["f"])(" Registre-se ");Object(r["q"])();var U=E((function(e,t,n,a,o,c){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("ul",_,[Object(r["g"])("li",w,[Object(r["g"])(u,{class:"nav-link",to:"/login"},{default:E((function(){return[S]})),_:1})]),Object(r["g"])("li",L,[Object(r["g"])(u,{to:"/cadastro",class:"nav-link"},{default:E((function(){return[T]})),_:1})])])}));n("f1bb");const C={};C.render=U,C.__scopeId="data-v-d75f447c";var G=C,P=n("5502"),B={components:{NavBarLoggedIn:y,NavBarLogout:G},computed:Object(f["a"])({},Object(P["b"])(["userIsLogged"]))};n("572f");B.render=d,B.__scopeId="data-v-d468287c";var N=B,R={components:{NavBar:N}};R.render=o;var x=R,M=(n("d3b7"),n("bc3a")),A=n.n(M),I=A.a.create({baseURL:"http://localhost:8000",headers:{Accept:"application/json",Content:"application/json"}});I.interceptors.request.use((function(e){var t=$.state.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var q=I,$=Object(P["a"])({state:{token:null,user:{},newUser:{},gerentes:[]},mutations:{SET_LOGGED_USER:function(e,t){var n=t.token,r=t.user;e.token=n,e.user=r},SET_LOGOUT_USER:function(e){e.token=null,e.user={}},CREATE_USER:function(e,t){var n=t.newUser;e.newUser=n},GET_GERENTES:function(e,t){e.gerentes=t}},actions:{getManagers:function(e){var t=e.commit;return new Promise((function(e,n){q.get("gerentes").then((function(n){t("GET_GERENTES",n.data),e(n.data)})).catch((function(e){console.log(e),n(e)}))}))},login:function(e,t){var n=e.commit;return new Promise((function(e,r){q.post("auth/login",t).then((function(t){n("SET_LOGGED_USER",{token:t.data.access_token,user:t.data.user}),e(t.data)})).catch((function(e){console.log(e),r(e)}))}))},registerUser:function(e,t){var n=e.commit;return new Promise((function(e,r){q.post("auth/register",t).then((function(r){n("CREATE_USER",{newUser:t}),e(r.data)})).catch((function(e){console.log(e),r(e)}))}))}},getters:{userIsLogged:function(e){return Boolean(e.token)},listManagers:function(e){return e.gerentes}},modules:{}}),D=n("8c4f"),F=[{path:"",name:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}},{path:"/gerentes",name:"gerentes",component:function(){return n.e("chunk-7dc8fd00").then(n.bind(null,"3412"))}},{path:"/cadastro",name:"register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))},meta:{public:!0}},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))},meta:{public:!0}}],H=Object(D["a"])({history:Object(D["b"])("/deploy-vue/"),routes:F});H.beforeEach((function(e,t,n){if(!e.meta.public&&!$.state.token)return n({path:"/login"});n()}));var J=H;n("4989"),n("ab8b");Object(r["c"])(x).use(J).use($).mount("#app")},"572f":function(e,t,n){"use strict";n("3672")},"8a4e":function(e,t,n){"use strict";n("2796")},"9c9e":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return c}));n("b0c0");var r={methods:{login:function(){var e=this;this.$store.dispatch("login",{email:this.user.email,senha:this.user.password}).then((function(){e.$router.push({name:"gerentes"}),e.errorMessage=""})).catch((function(t){401==t.request.status&&(e.errorMessage="Login ou senha inválido(s)!!!")}))}}},a={methods:{sendForm:function(){var e=this;this.$store.dispatch("registerUser",{nome:this.user.name,email:this.user.email,senha:this.user.password}).then((function(){e.$router.push({name:"login"}),e.errorMessage=""})).catch((function(t){t.request.status&&(e.errorMessage="Email já existente, tente outro!")}))}}},o={methods:{logout:function(){this.$store.commit("SET_LOGOUT_USER"),this.$router.push({name:"login"})}}},c={mounted:function(){this.$store.dispatch("getManagers").then((function(){return null}))}}},f1bb:function(e,t,n){"use strict";n("3406")}});
//# sourceMappingURL=app.f6937808.js.map