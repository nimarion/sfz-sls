(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{276:function(t,e,n){"use strict";n.r(e);n(28),n(29),n(21),n(144),n(38),n(35);var r=n(12),o=n(64),c=n(65),l=n(104),f=n(105),h=n(80),d=n(18),m=(n(7),n(8),n(9),n(10),n(66)),v=n(230);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(l.a)(f,t);var e,n=y(f);function f(){return Object(o.a)(this,f),n.apply(this,arguments)}return Object(c.a)(f,[{key:"asyncData",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,i,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/elearning.json");case 2:return n=t.sent,t.next=5,n.json();case 5:for(r=t.sent,o=r,c={"@context":"http://schema.org","@type":"ItemList",numberOfItems:"0",itemListElement:[]},l=1,i=0;i<o.length;i++)null==o[i].video&&(f={"@type":"Course",position:l,url:"https://sfz-sls.de/workshop/"+o[i].name,name:o[i].name,description:o[i].name,provider:{"@type":"Organization",name:"Schülerforschungszentrum Saarlouis",sameAs:"https://sfz-sls.de/"}},c.itemListElement.push(f)),l++;return t.next=12,c.itemListElement.length;case 12:return c.numberOfItems=t.sent,t.abrupt("return",{jsonLd:c,workshops:o});case 14:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),f}(m.Vue),w=O=j([Object(m.Component)({components:{WorkshopFilter:v.a},head:function(){return{title:"E-Learning",meta:[{hid:"description",name:"description",content:"Das E-Learning Angebot des Schülerforschungszentrum Saarlouis"}],script:[{innerHTML:JSON.stringify(this.jsonLd),type:"application/ld+json"}]}}})],O),k=n(17),component=Object(k.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("content",[e("section",{staticClass:"hero is-medium is-bold is-fullheight-with-navbar is-spaced",attrs:{id:"hero-background"}},[e("div",{staticClass:"hero-header"},[this._m(0),this._v(" "),e("br"),this._v(" "),e("br"),this._v(" "),e("WorkshopFilter",{attrs:{workshops:this.workshops,"is-elearning":!0}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container has-text-centered",staticStyle:{top:"20px"}},[e("p",{staticClass:"title",attrs:{id:"title"}},[this._v("\n          E-Learning\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);