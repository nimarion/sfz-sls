(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{217:function(t,e,n){"use strict";n(28),n(29),n(21),n(143);var c=n(64),r=n(66),o=n(104),l=n(105),d=n(80),f=n(18),v=n(65);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).isActive=!0,t}return Object(r.a)(n,[{key:"mounted",value:function(){if(null==this.website){var element=document.getElementsByClassName("modal-card-body")[0];element.style.borderBottomLeftRadius="5px",element.style.borderBottomRightRadius="5px"}}},{key:"closeModel",value:function(){this.$emit("onChange","hi from child")}},{key:"openWebsite",value:function(){window.open(this.website)}}]),n}(v.Vue);m([Object(v.Prop)({required:!0})],y.prototype,"name",void 0),m([Object(v.Prop)({required:!0})],y.prototype,"desc",void 0),m([Object(v.Prop)({required:!1})],y.prototype,"website",void 0);var _=y=m([v.Component],y),j=n(17),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{"trap-focus":"","has-modal-card":"",scroll:"keep"},on:{close:t.closeModel},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        "+t._s(t.name)+"\n      ")])]),t._v(" "),n("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[t._v("\n      "+t._s(t.desc)+"\n    ")]),t._v(" "),null!=t.website?n("footer",{staticClass:"modal-card-foot"},[n("div",{staticClass:"container"},[null!=t.website?n("b-button",{attrs:{type:"is-success",outlined:""},on:{click:t.openWebsite}},[t._v("\n          Website "+t._s(t.name)+"\n        ")]):t._e()],1)]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},218:function(t,e,n){"use strict";n(28),n(29),n(21),n(143);var c=n(64),r=n(66),o=n(104),l=n(105),d=n(80),f=n(18),v=n(65);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=h(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"openLabModal",value:function(t){this.$emit("openModal",t)}}]),n}(v.Vue);m([Object(v.Prop)({required:!0})],y.prototype,"data",void 0);var _=y=m([v.Component],y),j=n(17),component=Object(j.a)(_,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"hero-body"},[c("div",{staticClass:"container"},[c("div",{staticClass:"section"},[t.data.length>0?c("div",{staticClass:"row columns is-multiline"},t._l(t.data,(function(e){return c("div",{key:e.title,staticClass:"column is-4",on:{click:function(n){return t.openLabModal(e)}}},[c("div",{staticClass:"card large"},[c("div",{staticClass:"card-image is-1by1"},[c("b-image",{attrs:{"src-fallback":n(144),ratio:"1by1",src:e.image}})],1),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title is-4 no-padding"},[t._v("\n                    "+t._s(e.title)+"\n                  ")])])]),t._v(" "),c("div",{staticClass:"content"},[t._v("\n                "+t._s(e.description.split(" ").slice(0,24).join(" ")+"...")+"\n              ")]),t._v(" "),c("p",[c("a",{on:{click:function(n){return t.openLabModal(e)}}},[t._v("Weiterlesen")])])])])])})),0):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},259:function(t,e,n){"use strict";n.r(e);n(35),n(28),n(29),n(21);var c=n(12),r=n(5),o=n(217),l=n(218),d=r.default.extend({components:{LabModal:o.a,CardList:l.a},data:function(){return{clickedLab:null,isImageModalActive:!1,labs:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/labs.json").then((function(t){return t.json()}));case 2:t.labs=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),head:function(){return{title:"Schülerlabore"}},methods:{openLabModal:function(t){this.clickedLab=t,this.isImageModalActive=!0},closeEvent:function(){this.isImageModalActive=!1}}}),f=n(17),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content",[n("section",{staticClass:"hero is-medium is-bold is-fullheight-with-navbar is-spaced",attrs:{id:"hero-background"}},[n("div",{staticClass:"hero-header"},[t._m(0),t._v(" "),n("br"),t._v(" "),n("card-list",{attrs:{data:t.labs},on:{openModal:t.openLabModal}})],1),t._v(" "),null!=t.clickedLab&&t.isImageModalActive?n("lab-modal",{attrs:{website:t.clickedLab.website,name:t.clickedLab.title,desc:t.clickedLab.description},on:{onChange:t.closeEvent}}):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered",staticStyle:{top:"20px"}},[e("p",{staticClass:"title",attrs:{id:"title"}},[this._v("\n          Schülerlabore\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);