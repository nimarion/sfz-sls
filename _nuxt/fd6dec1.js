(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(t,e,n){"use strict";n(7),n(8),n(9),n(10);var r=n(5),o=n(140),c=n.n(o);r.default.use(c.a)},131:function(t,e,n){var content=n(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("9d1fbe5e",content,!1,{sourceMap:!1})},132:function(t,e,n){var content=n(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0a309f58",content,!1,{sourceMap:!1})},133:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("d2e0aee4",content,!1,{sourceMap:!1})},134:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("59f9ad5c",content,!1,{sourceMap:!1})},142:function(t,e,n){"use strict";n(26),n(27),n(21),n(106);var r=n(47),o=n(49),c=n(68),l=n(69),d=n(48),f=n(16),v=n(30),h=n(18),m=Object(h.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer",staticStyle:{"content-visibility":"auto","background-color":"white"}},[e("div",{staticClass:"columns has-text-centered"},[e("NuxtLink",{staticClass:"column",attrs:{to:"/impressum"}},[this._v("\n      Impressum\n    ")]),this._v(" "),e("NuxtLink",{staticClass:"column",attrs:{to:"/datenschutz"}},[this._v("\n      Datenschutz\n    ")]),this._v(" "),this._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},[e("a",{attrs:{href:"mailto:info@sfz-sls.de"}},[this._v("info@sfz-sls.de")])])}],!1,null,null,null).exports,x=(n(191),Object(h.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/"}},[r("b-image",{attrs:{src:n(188),"webp-fallback":n(189),alt:"Schülerforschungszentrum Saarlouis"}})],1)],1),t._v(" "),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/forschung"}},[t._v("\n      Forschung\n    ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/workshop"}},[t._v("\n      Workshops\n    ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/e-learning"}},[t._v("\n      E-Learning\n    ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/schülerlabore"}},[t._v("\n      Schülerlabore\n    ")]),t._v(" "),r("b-navbar-dropdown",{staticClass:"is-hidden-mobile",attrs:{label:"Mehr"}},[r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/förderverein"}},[t._v("\n        Förderverein\n      ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/team"}},[t._v("\n        Team\n      ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/links"}},[t._v("\n        Links & Downloads\n      ")])],1),t._v(" "),r("div",{staticClass:"is-hidden-tablet"},[r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/förderverein"}},[t._v("\n        Förderverein\n      ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/team"}},[t._v("\n        Team\n      ")]),t._v(" "),r("b-navbar-item",{attrs:{tag:"nuxt-link",to:"/links"}},[t._v("\n        Links & Downloads\n      ")])],1),t._v(" "),r("b-navbar-item",{attrs:{href:"https://www.kreis-saarlouis.de/"}},[r("b-image",{attrs:{src:n(190),alt:"Landkreis Saarlouis"}})],1)],1)],2)}),[],!1,null,null,null).exports),w=n(17),k=(n(71),n(72),n(7),n(8),n(9),n(10),{data:function(){return{colors:["#F4908E","#F2F097","#88B0DC","#F7B5D1","#53C4AF","#FDE38C"],context:null}},mounted:function(){var t,e,n,r=this,canvas=document.querySelector("canvas");this.context=canvas.getContext("2d");var o=this.context,c=function(){canvas.setAttribute("width",window.innerWidth),canvas.setAttribute("height",window.innerHeight),r.context.strokeStyle=r.colors[0],r.context.lineJoin="round",r.context.lineWidth=5};function l(t){return["mousedown","mousemove"].includes(t.type)?[t.pageX-canvas.offsetLeft,t.pageY-canvas.offsetTop]:[t.touches[0].pageX-canvas.offsetLeft,t.touches[0].pageY-canvas.offsetTop]}function d(r){n=!0;var o=l(r);t=o[0],e=o[1]}function f(r){if(n){var c=l(r),d=Object(w.a)(c,2),f=d[0],v=d[1];h=t,m=e,x=f,k=v,o.beginPath(),o.moveTo(x,k),o.lineTo(h,m),o.closePath(),o.stroke(),t=f,e=v}var h,m,x,k}function v(){n=!1}c(),window.addEventListener("resize",c),canvas.addEventListener("mousedown",d),canvas.addEventListener("touchstart",d),canvas.addEventListener("mousemove",f),canvas.addEventListener("touchmove",f),canvas.addEventListener("mouseup",v),canvas.addEventListener("mouseleave",v),canvas.addEventListener("touchend",v)}}),y=(n(193),Object(h.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._m(0),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"colors"},t._l(t.colors,(function(e){return n("button",{key:e,staticClass:"color",style:{backgroundColor:e},on:{click:function(n){t.context.strokeStyle=e}}})})),0),t._v(" "),n("canvas")])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered",staticStyle:{"max-width":"700px"}},[e("h1",{staticClass:"title"},[this._v("\n      Du bist aktuell nicht mit dem Internet verbunden.\n    ")])])}],!1,null,"230a1db7",null).exports);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},j=Object(v.namespace)("main"),C=function(t){Object(c.a)(n,t);var e=_(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"mounted",value:function(){this.initialiseStore({})}}]),n}(v.Vue);O([j.Mutation],C.prototype,"initialiseStore",void 0);var R=C=O([Object(v.Component)({components:{Footer:m,Navbar:x,Drawing:y}})],C),E=(n(195),Object(h.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return this.$nuxt.isOnline?e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("Nuxt",{attrs:{"keep-alive":""}}),this._v(" "),e("Footer")],1):e("Drawing")}),[],!1,null,null,null));e.a=E.exports},143:function(t,e,n){"use strict";n(198);var r=n(18),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},144:function(t,e,n){t.exports=n.p+"img/background.d72fde5.jpg"},152:function(t,e,n){t.exports=n(153)},179:function(t,e,n){t.exports=n.p+"img/undraw_processing.0ec785b.svg"},188:function(t,e,n){t.exports=n.p+"img/NavbarLogo.d2d12c1.webp"},189:function(t,e,n){t.exports=n.p+"img/NavbarLogo.2637675.png"},190:function(t,e,n){t.exports=n.p+"img/landkreis.69603b8.png"},191:function(t,e,n){"use strict";n(131)},192:function(t,e,n){(e=n(37)(!1)).push([t.i,".navbar-item img{max-height:4rem;width:auto}.navbar-burger.burger{height:auto!important}figure>img{display:block;margin-left:auto;margin-right:auto}",""]),t.exports=e},193:function(t,e,n){"use strict";n(132)},194:function(t,e,n){(e=n(37)(!1)).push([t.i,"canvas[data-v-230a1db7]{height:auto;width:100%;margin:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.colors[data-v-230a1db7]{z-index:2;margin:0 40px;text-align:center}.color[data-v-230a1db7]{height:50px;width:50px;margin-right:10px;border-radius:50%;border:none}",""]),t.exports=e},195:function(t,e,n){"use strict";n(133)},196:function(t,e,n){var r=n(37),o=n(197),c=n(144);e=r(!1);var l=o(c);e.push([t.i,'#app{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;text-align:center}@media only screen and (-o-min-device-pixel-ratio:3/2),only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-device-pixel-ratio:1.5){body,html{width:100%;overflow-x:hidden}}#hero-background{background-image:url('+l+");background-repeat:no-repeat;background-size:cover;background-position:50%;background-attachment:fixed}#title{color:#fcfdfd}.card{overflow:hidden;background:#f8f8ff;color:var(--bg);border-radius:10px;height:100%;width:-webkit-fill-available}.card.large{background-color:#fff;border-radius:5px}.hero.is-medium .hero-body{padding:0}.title.no-padding{margin-bottom:0!important}.media-content{overflow-y:hidden}.title{display:inline-block}.modal-card-foot,.modal-card-head{background-color:#fff;border-color:#fff}",""]),t.exports=e},198:function(t,e,n){"use strict";n(134)},199:function(t,e,n){(e=n(37)(!1)).push([t.i,"body::-webkit-scrollbar{display:none}",""]),t.exports=e},35:function(t,e,n){"use strict";n(26),n(27),n(21),n(106),n(85),n(99);var r=n(47),o=n(49),c=n(68),l=n(69),d=n(48),f=n(16),v=n(30);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"layout",value:function(){return window.location.pathname.startsWith("/workshops/")&&window.location.pathname.split("/")[2].length>0?"error-layout":"default"}},{key:"isWorkshop",get:function(){return window.location.pathname.startsWith("/workshops/")&&window.location.pathname.split("/")[2].length>0}},{key:"isNews",get:function(){return window.location.pathname.startsWith("/news/")}},{key:"workshopName",get:function(){return decodeURIComponent(window.location.pathname.split("/")[2])}},{key:"siteName",get:function(){return decodeURIComponent(window.location.pathname)}}]),n}(v.Vue);m([Object(v.Prop)({required:!0})],x.prototype,"error",void 0);var w=x=m([v.Component],x),k=n(18),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero is-fullheight-with-navbar"},[r("div",{staticClass:"hero-body container"},[r("div",{staticClass:"columns is-vcentered"},[r("div",{staticClass:"column is-6 is-narrow"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title is-size-1"},[t._v("\n            404\n          ")]),t._v(" "),t.isWorkshop?r("h1",{staticClass:"subtitle"},[t._v("\n            Der Workshop "+t._s(t.workshopName)+" existiert nicht\n          ")]):r("h1",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.isNews?t.error.message:"Die Seite "+t.siteName+" existiert nicht")+"\n          ")])])]),t._v(" "),r("div",{staticClass:"column is-6"},[r("b-image",{attrs:{src:n(179),width:"550"}})],1)])])])}),[],!1,null,null,null);e.a=component.exports}},[[152,16,2,17]]]);