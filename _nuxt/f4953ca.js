(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{202:function(t,e,n){"use strict";n(18),n(19),n(14),n(80);var r=n(28),c=n(49),o=n(50),f=n(25),l=n(9),d=n(29);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);v([Object(d.Prop)({required:!0})],y.prototype,"links",void 0),v([Object(d.Prop)({required:!0})],y.prototype,"name",void 0);var j=y=v([d.Component],y),O=n(15),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-fullheight-with-navbar",attrs:{id:"hero-background"}},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"content container box"},[n("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),n("br"),t._v(" "),t._l(t.links,(function(e){return n("a",{key:e.name,attrs:{href:e.link}},[n("b-button",{attrs:{size:"is-medium","icon-right":t.name.toLowerCase().includes("download")?"file-download":""}},[t._v(t._s(e.name))]),t._v(" "),n("br"),t._v(" "),n("br")],1)}))],2)])])}),[],!1,null,null,null);e.a=component.exports},244:function(t,e,n){"use strict";n.r(e);n(18),n(19),n(14),n(80);var r=n(28),c=n(49),o=n(50),f=n(25),l=n(9),d=n(29),h=n(202);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},main=Object(d.namespace)("main"),j=function(t){Object(c.a)(n,t);var e=v(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);y([main.State],j.prototype,"links",void 0);var O=j=y([Object(d.Component)({components:{LinkList:h.a}})],j),R=n(15),component=Object(R.a)(O,(function(){var t=this.$createElement;return(this._self._c||t)("link-list",{attrs:{name:"Links",links:this.links}})}),[],!1,null,null,null);e.default=component.exports}}]);