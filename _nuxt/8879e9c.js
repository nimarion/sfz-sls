(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{226:function(t,n,e){"use strict";e.r(n);var c={props:{data:{type:Array,default:function(){return[]}}},methods:{openLabModal:function(t){this.$emit("openModal",t)}}},l=e(11),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"hero-body"},[c("div",{staticClass:"container"},[c("div",{staticClass:"section"},[t.data.length>0?c("div",{staticClass:"row columns is-multiline"},t._l(t.data,(function(n){return c("div",{key:n.title,staticClass:"column is-4",on:{click:function(e){return t.openLabModal(n)}}},[c("div",{staticClass:"card large"},[c("div",{staticClass:"card-image is-1by1"},[c("b-image",{attrs:{"src-fallback":e(143),ratio:"1by1",src:n.image}})],1),t._v(" "),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-content"},[c("p",{staticClass:"title is-4 no-padding"},[t._v("\n                    "+t._s(n.title)+"\n                  ")])])]),t._v(" "),c("div",{staticClass:"content"},[t._v("\n                "+t._s(n.description.split(" ").slice(0,24).join(" ")+"...")+"\n              ")]),t._v(" "),c("p",[c("a",{on:{click:function(e){return t.openLabModal(n)}}},[t._v("Weiterlesen")])])])])])})),0):t._e()])])])}),[],!1,null,null,null);n.default=component.exports}}]);