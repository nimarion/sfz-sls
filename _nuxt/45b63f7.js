(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(t,e,n){"use strict";n(18),n(19),n(14),n(80);var c=n(28),r=n(30),o=n(49),l=n(50),d=n(25),f=n(9),v=n(29);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).isActive=!0,t}return Object(r.a)(n,[{key:"mounted",value:function(){if(null==this.website){var element=document.getElementsByClassName("modal-card-body")[0];element.style.borderBottomLeftRadius="5px",element.style.borderBottomRightRadius="5px"}}},{key:"closeModel",value:function(){this.$emit("onChange","hi from child")}},{key:"openWebsite",value:function(){window.open(this.website)}}]),n}(v.Vue);y([Object(v.Prop)({required:!0})],m.prototype,"name",void 0),y([Object(v.Prop)({required:!0})],m.prototype,"desc",void 0),y([Object(v.Prop)({required:!1})],m.prototype,"website",void 0);var j=m=y([v.Component],m),O=n(15),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{"trap-focus":"","has-modal-card":"",scroll:"keep"},on:{close:t.closeModel},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.name)+"\n      ")])]),t._v(" "),n("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[t._v("\n      "+t._s(t.desc)+"\n    ")]),t._v(" "),null!=t.website?n("footer",{staticClass:"modal-card-foot"},[n("div",{staticClass:"container"},[null!=t.website?n("b-button",{attrs:{type:"is-success",outlined:""},on:{click:t.openWebsite}},[t._v("\n          Website "+t._s(t.name)+"\n        ")]):t._e()],1)]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},204:function(t,e,n){"use strict";n(18),n(19),n(14),n(80);var c=n(28),r=n(30),o=n(49),l=n(50),d=n(25),f=n(9),v=n(29);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},m=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"openLabModal",value:function(t){this.$emit("openModal",t)}}]),n}(v.Vue);y([Object(v.Prop)({required:!0})],m.prototype,"data",void 0);var j=m=y([v.Component],m),O=n(15),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"hero-body"},[c("div",{staticClass:"container"},[c("div",{staticClass:"section"},[t.data.length>0?c("div",{staticClass:"row columns is-multiline"},t._l(t.data,(function(e){return c("div",{key:e.title,staticClass:"column is-4",on:{click:function(n){return t.openLabModal(e)}}},[c("div",{staticClass:"card large"},[c("div",{staticClass:"card-image is-1by1"},[c("b-image",{attrs:{"src-fallback":n(138),ratio:"1by1",src:e.image}})],1),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title is-4 no-padding"},[t._v("\n                    "+t._s(e.title)+"\n                  ")])])]),t._v(" "),c("div",{staticClass:"content"},[t._v("\n                "+t._s(e.description.split(" ").slice(0,24).join(" ")+"...")+"\n              ")]),t._v(" "),c("p",[c("a",{on:{click:function(n){return t.openLabModal(e)}}},[t._v("Weiterlesen")])])])])])})),0):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},242:function(t,e,n){"use strict";n.r(e);n(18),n(19),n(14),n(80);var c=n(28),r=n(30),o=n(49),l=n(50),d=n(25),f=n(9),v=n(29),h=n(203),y=n(204);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},main=Object(v.namespace)("main"),O=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).clickedLab=null,t.isImageModalActive=!1,t}return Object(r.a)(n,[{key:"openLabModal",value:function(t){this.clickedLab=t,this.isImageModalActive=!0}},{key:"closeEvent",value:function(){this.isImageModalActive=!1}}]),n}(v.Vue);j([main.State],O.prototype,"labs",void 0);var _=O=j([Object(v.Component)({components:{LabModal:h.a,CardList:y.a},head:function(){return{title:"Schülerlabore"}}})],O),R=n(15),component=Object(R.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content",[n("section",{staticClass:"hero is-medium is-bold is-fullheight-with-navbar is-spaced",attrs:{id:"hero-background"}},[n("div",{staticClass:"hero-header"},[t._m(0),t._v(" "),n("br"),t._v(" "),n("card-list",{attrs:{data:t.labs},on:{openModal:t.openLabModal}})],1),t._v(" "),null!=t.clickedLab&&t.isImageModalActive?n("lab-modal",{attrs:{website:t.clickedLab.website,name:t.clickedLab.title,desc:t.clickedLab.description},on:{onChange:t.closeEvent}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered",staticStyle:{top:"20px"}},[e("p",{staticClass:"title",attrs:{id:"title"}},[this._v("\n          Schülerlabore\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);