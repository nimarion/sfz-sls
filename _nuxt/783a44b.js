(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{246:function(t,e,n){"use strict";n.r(e);n(18),n(19),n(14),n(80);var c=n(28),r=n(49),o=n(50),l=n(25),f=n(9),d=n(29);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return Object(o.a)(this,n)}}var m=function(t,e,n,desc){var c,r=arguments.length,o=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(r<3?c(o):r>3?c(e,n,o):c(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o},main=Object(d.namespace)("main"),h=function(t){Object(r.a)(n,t);var e=v(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return n}(d.Vue);m([main.State],h.prototype,"employees",void 0);var y=h=m([Object(d.Component)({head:function(){return{title:"Team",meta:[{hid:"description",name:"description",content:"Unser Team am Schülerforschungszentrum Saarlouis"}]}}})],h),_=n(15),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content",[n("section",{staticClass:"hero",attrs:{id:"hero-background"}},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"section"},[t.employees.length>0?n("div",{staticClass:"row columns is-multiline"},t._l(t.employees,(function(e){return n("div",{key:e.name,staticClass:"column is-4"},[n("div",{staticClass:"card large"},[n("div",{staticClass:"card-image is-1by1"},[n("b-image",{attrs:{src:e.img,alt:e.name,ratio:"1by1"}})],1),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v("\n                      "+t._s(e.name)+"\n                    ")]),t._v(" "),n("p",{staticClass:"subtitle is-6"},[t._v("\n                      "+t._s(e.position)+"\n                    ")])])]),t._v(" "),n("div",{staticClass:"content"},[t._v("\n                  "+t._s(e.desc)+"\n                ")])])])])})),0):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("p",{staticClass:"title",attrs:{id:"title"}},[this._v("\n          Unser Team\n        ")])])])}],!1,null,null,null);e.default=component.exports}}]);