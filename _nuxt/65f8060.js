(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,n){var o=n(19);e.exports=function(e,t){if(!o(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},221:function(e,t,n){var content=n(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("ef20e362",content,!1,{sourceMap:!1})},222:function(e,t,n){var content=n(238);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("f38d519e",content,!1,{sourceMap:!1})},228:function(e,t,n){"use strict";n(28),n(29),n(143),n(68),n(69),n(230),n(41),n(21),n(47),n(232);var o=n(99);var r=n(127);function c(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(64),d=n(66),h=n(104),f=n(105),v=n(80),m=n(18),_=n(65);n(38);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(v.a)(e);if(t){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},j=function(e){Object(h.a)(n,e);var t=k(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).isActive=!0,e.address="info@sfz-sls.de",e.body="Hallo!%20%0D%0AIch%20m%C3%B6chte%20gerne%20f%C3%BCr%20meine%20Klasse%20den%20"+e.name+"-Workshop%20buchen.%20%0D%0ADatum%3A%20%0D%0AZeit%3A%20%0D%0ASchule%3A%20%0D%0AKlasse%3A%20%0D%0AAnzahl%20der%20SuS%3A",e.workshopLink="/workshop/"+e.name,e}return Object(d.a)(n,[{key:"closeModel",value:function(){this.$emit("onChange","hi from child")}},{key:"openMailClient",value:function(){window.open("mailto:"+this.address+"?subject="+this.name+"-Kurs&body="+this.body)}}]),n}(_.Vue);y([Object(_.Prop)({required:!0})],j.prototype,"name",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"desc",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"img",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"duration",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"schoolSubject",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"minClass",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"maxParticipants",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"active",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"isElearning",void 0),y([Object(_.Prop)({required:!0})],j.prototype,"lab",void 0),y([Object(_.Prop)({required:!1})],j.prototype,"video",void 0);var C=j=y([_.Component],j),w=(n(235),n(17)),S=Object(w.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{"trap-focus":"","has-modal-card":"",scroll:"keep"},on:{close:e.closeModel},model:{value:e.isActive,callback:function(t){e.isActive=t},expression:"isActive"}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[e._v("\n        "+e._s(e.name)+"\n      ")])]),e._v(" "),n("section",{staticClass:"modal-card-body",staticStyle:{"text-align":"left"}},[n("b-taglist",{staticClass:"is-centered"},[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[e._v("\n                Ab Klasse\n              ")]),e._v(" "),n("b-tag",{attrs:{type:"is-info"}},[e._v("\n                "+e._s(e.minClass)+"\n              ")])],1)],1),e._v(" "),n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[e._v("\n                Dauer\n              ")]),e._v(" "),n("b-tag",{attrs:{type:"is-info"}},[e._v("\n                "+e._s(1==e.duration?e.duration+" Stunde":e.duration+" Stunden")+"\n              ")])],1)],1),e._v(" "),e.maxParticipants>0&&!e.isElearning?n("div",{staticClass:"control"},[n("b-taglist",{attrs:{attached:""}},[n("b-tag",{attrs:{type:"is-dark"}},[e._v("\n                Maximale Teilnehmer\n              ")]),e._v(" "),n("b-tag",{attrs:{type:"is-info"}},[e._v("\n                "+e._s(e.maxParticipants)+"\n              ")])],1)],1):e._e()]),e._v(" "),e.isElearning?n("b-tag",{staticClass:"is-hidden-tablet is-centered",attrs:{type:"is-warning",rounded:""}},[e._v("\n          Workshops sind nicht für mobile Geräte optimiert!\n        ")]):e._e()],1),e._v(" "),null==e.video?n("p",[e._v("\n        "+e._s(e.desc)+"\n      ")]):n("video",{attrs:{controls:""}},[n("source",{attrs:{src:e.video,type:"video/mp4"}}),e._v("\n        Your browser does not support the video tag.\n      ")])],1),e._v(" "),n("footer",{staticClass:"modal-card-foot"},[e.isElearning&&null==e.video?n("div",{staticClass:"content container"},[n("b-button",{attrs:{type:"is-primary",tag:"nuxt-link",to:e.workshopLink,outlined:""}},[e._v("\n          Workshop starten\n        ")]),e._v(" "),n("br"),e._v(" "),n("br")],1):e._e(),e._v(" "),e.isElearning?e._e():n("div",{staticClass:"content container"},[n("b-button",{staticClass:"container",attrs:{type:"is-primary",outlined:""},on:{click:e.openMailClient}},[e._v("\n          Workshop buchen\n        ")])],1)])])])}),[],!1,null,null,null).exports;function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(v.a)(e);if(t){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var x=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},W=function(e){Object(h.a)(n,e);var t=O(n);function n(){var e;return Object(l.a)(this,n),(e=t.apply(this,arguments)).selectedSchoolSubjects=[],e.selectedLabs=[],e.seletecClassLevel=12,e.selectedParticipants=0,e.selectedTimeRange=[1,1],e.open=!1,e.requestedWorkshops=[],e.schoolSubject=[],e.labs=[],e.isImageModalActive=!1,e.clickedWorkshop=null,e.maxDuration=1,e}return Object(d.a)(n,[{key:"workshopsChanged",value:function(e,t){0===t.length&&0!==e.length&&(this.requestedWorkshops.push.apply(this.requestedWorkshops,this.workshops),this.loadFilterProps())}},{key:"selectedSchoolSubjectsChanged",value:function(){this.loadRequestedWorkshops()}},{key:"seletecClassLevelChanged",value:function(){this.loadRequestedWorkshops()}},{key:"selectedTimeRangeChanged",value:function(){this.loadRequestedWorkshops()}},{key:"selectedParticipantsChanged",value:function(){this.loadRequestedWorkshops()}},{key:"selectedLabsChanged",value:function(){this.loadRequestedWorkshops()}},{key:"created",value:function(){this.requestedWorkshops.push.apply(this.requestedWorkshops,this.workshops),this.loadFilterProps()}},{key:"loadFilterProps",value:function(){this.maxDuration=Math.max.apply(Math,this.workshops.map((function(e){return e.duration}))),this.schoolSubject=c(new Set(this.workshops.flatMap((function(e){return e.schoolSubject})))),this.labs=c(new Set(this.workshops.flatMap((function(e){return e.lab}))))}},{key:"loadRequestedWorkshops",value:function(){var e=this;this.requestedWorkshops.length=0;for(var t=function(i){var t=e.workshops[i],n=0===e.selectedSchoolSubjects.length||e.selectedSchoolSubjects.some((function(e){return t.schoolSubject.includes(e)})),o=t.minClass<=e.seletecClassLevel,r=e.selectedParticipants<=t.maxParticipants||0===e.selectedParticipants||0===t.maxParticipants,c=0===e.selectedLabs.length||e.selectedLabs.some((function(e){return e===t.lab})),l=e.isElearning||1===e.selectedTimeRange[0]&&1===e.selectedTimeRange[1]||(t.duration-e.selectedTimeRange[0])*(t.duration-e.selectedTimeRange[1])<=0;n&&o&&l&&r&&c&&e.requestedWorkshops.push(t)},i=0;i<this.workshops.length;i++)t(i)}},{key:"openWorkshopModal",value:function(e){this.clickedWorkshop=e,this.isImageModalActive=!0}},{key:"closeEvent",value:function(){this.isImageModalActive=!1}}]),n}(_.Vue);x([Object(_.Prop)({required:!0})],W.prototype,"workshops",void 0),x([Object(_.Prop)({required:!0})],W.prototype,"isElearning",void 0),x([Object(_.Watch)("workshops")],W.prototype,"workshopsChanged",null),x([Object(_.Watch)("selectedSchoolSubjects")],W.prototype,"selectedSchoolSubjectsChanged",null),x([Object(_.Watch)("seletecClassLevel")],W.prototype,"seletecClassLevelChanged",null),x([Object(_.Watch)("selectedTimeRange")],W.prototype,"selectedTimeRangeChanged",null),x([Object(_.Watch)("selectedParticipants")],W.prototype,"selectedParticipantsChanged",null),x([Object(_.Watch)("selectedLabs")],W.prototype,"selectedLabsChanged",null);var P=W=x([Object(_.Component)({components:{WorkshopModal:S}})],W),R=(n(237),Object(w.a)(P,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("b-sidebar",{attrs:{type:"is-light",fullheight:!0},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[o("div",{staticClass:"p-1"},[o("b-image",{attrs:{src:n(229)}}),e._v(" "),o("b-field",{attrs:{label:"Klassenstufe"}},[o("b-slider",{attrs:{min:1,max:12,step:1,ticks:""},model:{value:e.seletecClassLevel,callback:function(t){e.seletecClassLevel=t},expression:"seletecClassLevel"}})],1),e._v(" "),o("b-field",[o("p",{staticClass:"content"},[o("b",[e._v("Klasse")]),e._v("\n          : "+e._s(e.seletecClassLevel)+"\n        ")])]),e._v(" "),e.isElearning?e._e():o("b-field",{attrs:{label:"Dauer des Workshops"}},[o("b-slider",{attrs:{min:1,max:e.maxDuration,step:1,ticks:""},model:{value:e.selectedTimeRange,callback:function(t){e.selectedTimeRange=t},expression:"selectedTimeRange"}})],1),e._v(" "),e.isElearning?e._e():o("b-field",[o("p",{staticClass:"content"},[o("b",[e._v("Dauer")]),e._v("\n          : "+e._s(e.selectedTimeRange[0])+" - "+e._s(e.selectedTimeRange[1])+" Stunden\n        ")])]),e._v(" "),e.isElearning?e._e():o("b-field",{attrs:{label:"Gruppengröße"}},[o("b-numberinput",{attrs:{min:0},model:{value:e.selectedParticipants,callback:function(t){e.selectedParticipants=t},expression:"selectedParticipants"}})],1),e._v(" "),o("b-field",{attrs:{label:"Fach"}},[o("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:e.selectedSchoolSubjects,callback:function(t){e.selectedSchoolSubjects=t},expression:"selectedSchoolSubjects"}},[o("b-button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[o("span",[e._v("Ausgewählte ("+e._s(e.selectedSchoolSubjects.length)+")")])]),e._v(" "),e._l(e.schoolSubject,(function(t){return o("b-dropdown-item",{key:t,attrs:{value:t,"aria-role":"listitem"}},[o("span",[e._v(e._s(t))])])}))],2)],1),e._v(" "),e.selectedSchoolSubjects.length>0?o("b-field",[o("p",{staticClass:"content"},[o("b",[e._v("Ausgewählte")]),e._v("\n          : "+e._s(e.selectedSchoolSubjects.join(", "))+"\n        ")])]):e._e(),e._v(" "),!e.isElearning&&e.labs.length>0?o("b-field",{attrs:{label:"Schülerlabor"}},[o("b-dropdown",{attrs:{multiple:"","aria-role":"list"},model:{value:e.selectedLabs,callback:function(t){e.selectedLabs=t},expression:"selectedLabs"}},[o("b-button",{staticClass:"button is-primary",attrs:{slot:"trigger",type:"button"},slot:"trigger"},[o("span",[e._v("Ausgewählte ("+e._s(e.selectedLabs.length)+")")])]),e._v(" "),e._l(e.labs,(function(t){return o("b-dropdown-item",{key:t,attrs:{value:t,"aria-role":"listitem"}},[o("span",[e._v(e._s(t))])])}))],2)],1):e._e(),e._v(" "),!e.isElearning&&e.selectedLabs.length>0?o("b-field",[o("p",{staticClass:"content"},[o("b",[e._v("Ausgewählte")]),e._v("\n          : "+e._s(e.selectedLabs.join(", "))+"\n        ")])]):e._e()],1)]),e._v(" "),o("b-button",{on:{click:function(t){e.open=!0}}},[e._v("\n    Workshops filtern\n  ")]),e._v(" "),o("div",{staticClass:"hero-body"},[o("div",{staticClass:"container"},[o("div",{staticClass:"section"},[e.requestedWorkshops.length>0?o("div",{staticClass:"row columns is-multiline"},e._l(e.requestedWorkshops,(function(t){return o("div",{key:t.name,staticClass:"column is-4",attrs:{href:e.isElearning?"https://sfz-sls.de/workshop/"+t.name:" "},on:{click:function(n){return e.openWorkshopModal(t)}}},[o("div",{staticClass:"card large"},[o("div",{staticClass:"card-image is-16by9"},[o("figure",{staticClass:"image"},[o("b-image",{attrs:{"src-fallback":n(144),ratio:"16by9",src:t.image,alt:t.name}})],1)]),e._v(" "),o("div",{staticClass:"card-content"},[o("div",{staticClass:"media"},[o("div",{staticClass:"media-content"},[o("p",{staticClass:"title is-4 no-padding"},[e._v("\n                      "+e._s(t.name)+"\n                    ")])])]),e._v(" "),o("div",{staticClass:"content"},[e._v("\n                  "+e._s(t.description.split(" ").length>=25?t.description.split(" ").slice(0,25).join(" ")+"...":t.description)+"\n                ")])])])])})),0):e._e()])])]),e._v(" "),null!=e.clickedWorkshop&&e.isImageModalActive?o("workshop-modal",{attrs:{img:e.clickedWorkshop.image,name:e.clickedWorkshop.name,desc:e.clickedWorkshop.description,"max-participants":e.clickedWorkshop.maxParticipants,duration:e.clickedWorkshop.duration,"min-class":e.clickedWorkshop.minClass,"school-subject":e.clickedWorkshop.schoolSubject,lab:e.clickedWorkshop.lab,"is-elearning":e.isElearning,video:e.clickedWorkshop.video},on:{onChange:e.closeEvent}}):e._e()],1)}),[],!1,null,null,null));t.a=R.exports},229:function(e,t,n){e.exports=n.p+"img/undraw_select_option.2969c36.svg"},230:function(e,t,n){"use strict";var o=n(14),r=n(231),c=n(40),l=n(26),d=n(46),h=n(151);o(o.P,"Array",{flatMap:function(e){var t,n,o=c(this);return d(e),t=l(o.length),n=h(o,0),r(n,o,o,t,0,1,e,arguments[1]),n}}),n(82)("flatMap")},231:function(e,t,n){"use strict";var o=n(106),r=n(19),c=n(26),l=n(39),d=n(11)("isConcatSpreadable");e.exports=function e(t,n,source,h,f,v,m,_){for(var element,k,y=f,j=0,C=!!m&&l(m,_,3);j<h;){if(j in source){if(element=C?C(source[j],j,n):source[j],k=!1,r(element)&&(k=void 0!==(k=element[d])?!!k:o(element)),k&&v>0)y=e(t,n,element,c(element.length),y,v-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=element}y++}j++}return y}},232:function(e,t,n){"use strict";var strong=n(233),o=n(220);e.exports=n(234)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(o(this,"Set"),e=0===e?0:e,e)}},strong)},233:function(e,t,n){"use strict";var o=n(22).f,r=n(81),c=n(148),l=n(39),d=n(146),h=n(147),f=n(108),v=n(149),m=n(109),_=n(20),k=n(145).fastKey,y=n(220),j=_?"_s":"size",C=function(e,t){var n,o=k(t);if("F"!==o)return e._i[o];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,f){var v=e((function(e,o){d(e,v,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[j]=0,null!=o&&h(o,n,e[f],e)}));return c(v.prototype,{clear:function(){for(var e=y(this,t),data=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];e._f=e._l=void 0,e[j]=0},delete:function(e){var n=y(this,t),o=C(n,e);if(o){var r=o.n,c=o.p;delete n._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),n._f==o&&(n._f=r),n._l==o&&(n._l=c),n[j]--}return!!o},forEach:function(e){y(this,t);for(var n,o=l(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(o(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!C(y(this,t),e)}}),_&&o(v.prototype,"size",{get:function(){return y(this,t)[j]}}),v},def:function(e,t,n){var o,r,c=C(e,t);return c?c.v=n:(e._l=c={i:r=k(t,!0),k:t,v:n,p:o=e._l,n:void 0,r:!1},e._f||(e._f=c),o&&(o.n=c),e[j]++,"F"!==r&&(e._i[r]=c)),e},getEntry:C,setStrong:function(e,t,n){f(e,t,(function(e,n){this._t=y(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?v(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,v(1))}),n?"entries":"values",!n,!0),m(t)}}},234:function(e,t,n){"use strict";var o=n(13),r=n(14),c=n(24),l=n(148),meta=n(145),d=n(147),h=n(146),f=n(19),v=n(23),m=n(107),_=n(67),k=n(150);e.exports=function(e,t,n,y,j,C){var w=o[e],S=w,O=j?"set":"add",x=S&&S.prototype,W={},P=function(e){var t=x[e];c(x,e,"delete"==e||"has"==e?function(a){return!(C&&!f(a))&&t.call(this,0===a?0:a)}:"get"==e?function(a){return C&&!f(a)?void 0:t.call(this,0===a?0:a)}:"add"==e?function(a){return t.call(this,0===a?0:a),this}:function(a,b){return t.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(C||x.forEach&&!v((function(){(new S).entries().next()})))){var R=new S,A=R[O](C?{}:-0,1)!=R,E=v((function(){R.has(1)})),L=m((function(e){new S(e)})),D=!C&&v((function(){for(var e=new S,t=5;t--;)e[O](t,t);return!e.has(-0)}));L||((S=t((function(t,n){h(t,S,e);var o=k(new w,t,S);return null!=n&&d(n,j,o[O],o),o}))).prototype=x,x.constructor=S),(E||D)&&(P("delete"),P("has"),j&&P("get")),(D||A)&&P(O),C&&x.clear&&delete x.clear}else S=y.getConstructor(t,e,j,O),l(S.prototype,n),meta.NEED=!0;return _(S,e),W[e]=S,r(r.G+r.W+r.F*(S!=w),W),C||y.setStrong(S,e,j),S}},235:function(e,t,n){"use strict";n(221)},236:function(e,t,n){(t=n(36)(!1)).push([e.i,".card-content .content{font-size:14px;margin:1rem}.card-content .content h4{font-size:16px;font-weight:700}.card{box-shadow:0 2px 4px rgba(0,0,0,.18);margin-bottom:2rem}.animation-content{overflow-y:hidden}",""]),e.exports=t},237:function(e,t,n){"use strict";n(222)},238:function(e,t,n){(t=n(36)(!1)).push([e.i,".p-1{padding:1em!important}",""]),e.exports=t}}]);